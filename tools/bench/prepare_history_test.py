"""Runner deduplication must preserve every measurement and its provenance."""
import copy
import json
from pathlib import Path
import tempfile
import unittest
from unittest.mock import patch

from prepare_history import PREFIX, normalize_history, parse_history, prepare_history, serialize_history


def bench(name, extra):
    return {"name": name, "value": 123.45, "unit": "ms", "extra": extra,
            "range": "10-20", "custom": {"preserve": True}}


def history(*benches):
    return {"lastUpdate": 123456, "repoUrl": "https://github.com/bojosos/ptpng",
            "unknown": ["keep", {"nested": 7}], "entries": {"nightly": [{
                "date": 123000, "commit": {"id": "abc123", "message": "Keep me"},
                "tool": "customSmallerIsBetter", "benches": list(benches)}], "old": []}}


class PrepareHistoryTests(unittest.TestCase):
    def test_preserves_measurements_root_fields_and_other_extra_lines(self):
        runner = {"cpu": "AMD EPYC", "run_id": "123", "logical_cpus": 4}
        source = history(bench("linux-x64/libpng/photo_rgb8 native",
                               "First\n\nRunner: " + json.dumps(runner) + "\nMethod: median\nLast"))
        original = copy.deepcopy(source)
        result = normalize_history(source)
        expected = copy.deepcopy(source)
        expected["entries"]["nightly"][0]["benches"][0]["extra"] = "First\n\nMethod: median\nLast"
        expected["entries"]["nightly"][0]["runners"] = {"linux-x64": runner}
        self.assertEqual(result, expected)
        self.assertEqual(source, original)
        self.assertEqual(parse_history(serialize_history(result)), result)

    def test_mixed_names_and_duplicate_runner_lines(self):
        cpu = '{"cpu":"Intel","run_id":"11"}'
        source = history(bench("windows-x64/ptpng-vs-libpng/photo_rgb8 native", "Runner: " + cpu),
                         bench("windows-x64 / photo_rgb8.png / ptpng-vs-libpng encode time",
                               "Runner: " + cpu + "\r\nMethod: five rounds\r\nRunner: " + cpu + "\r\n"),
                         bench("linux-arm64/memory-copy-vs-libpng/64MiB", 'Runner: {"cpu":"ARM"}'))
        entry = normalize_history(source)["entries"]["nightly"][0]
        self.assertEqual(entry["runners"], {"windows-x64": {"cpu": "Intel", "run_id": "11"},
                                           "linux-arm64": {"cpu": "ARM"}})
        self.assertEqual([b["extra"] for b in entry["benches"]], ["", "Method: five rounds\r\n", ""])

    def test_idempotence_and_existing_runner_maps_survive_new_appends(self):
        source = history(bench("linux-x64/libpng/x native", 'Runner: {"cpu":"x64"}'))
        source["entries"]["nightly"][0]["runners"] = {"macos-arm64": {"cpu": "Apple"}}
        normalized = normalize_history(source)
        self.assertEqual(normalize_history(normalized), normalized)
        self.assertEqual(normalized["entries"]["nightly"][0]["runners"]["macos-arm64"], {"cpu": "Apple"})
        normalized["entries"]["nightly"].append({"date": 124000, "commit": {"id": "new"}, "benches": [
            bench("linux-x64 / noise_rgba8.png / ptpng-vs-libpng encode time", 'Runner: {"cpu":"new"}')]
        })
        updated = normalize_history(normalized)
        self.assertEqual(updated["entries"]["nightly"][0], normalized["entries"]["nightly"][0])
        self.assertEqual(updated["entries"]["nightly"][1]["runners"], {"linux-x64": {"cpu": "new"}})

    def test_old_and_malformed_metadata_remain_verbatim(self):
        malformed = ['Runner: {broken', 'Runner: null', 'Runner: [1,2]',
                     'Runner: {"cpu":"one","cpu":"two"}', 'Runner: {"value":NaN}',
                     ' Runner: {"cpu":"indented"}', 'Runner:{"cpu":"no space"}']
        extras = ["Old description", "\n".join(malformed), ""]
        source = history(*(bench("linux-x64/libpng/x native", extra) for extra in extras))
        source["entries"]["nightly"][0]["benches"].append({"name": "old/no-extra", "value": 1})
        self.assertEqual(normalize_history(source), source)
        mixed = history(bench("linux-x64/libpng/x native", malformed[0] + '\nRunner: {"cpu":"valid"}\nEnd'))
        result = normalize_history(mixed)["entries"]["nightly"][0]
        self.assertEqual(result["benches"][0]["extra"], malformed[0] + "\nEnd")
        self.assertEqual(result["runners"], {"linux-x64": {"cpu": "valid"}})

    def test_conflicts_reject_without_mutating_input(self):
        source = history(bench("linux-x64/libpng/x native", 'Runner: {"cpu":"one"}'),
                         bench("linux-x64 / x.png / ptpng-vs-libpng encode time", 'Runner: {"cpu":"two"}'))
        original = copy.deepcopy(source)
        with self.assertRaisesRegex(ValueError, "Conflicting runner metadata for linux-x64"):
            normalize_history(source)
        self.assertEqual(source, original)
        source = history(bench("linux-x64/libpng/x native", 'Runner: {"logical_cpus":1}'))
        source["entries"]["nightly"][0]["runners"] = {"linux-x64": {"logical_cpus": True}}
        with self.assertRaisesRegex(ValueError, "Conflicting runner metadata"):
            normalize_history(source)

    def test_cli_processing_is_atomic_and_does_not_rewrite_twice(self):
        source = history(bench("linux-x64/libpng/x native", 'Before\nRunner: {"cpu":"one"}\nAfter'))
        with tempfile.TemporaryDirectory() as folder:
            path = Path(folder) / "data.js"
            original = (PREFIX + json.dumps(source, indent=2)).encode()
            path.write_bytes(original)
            before, after, changed = prepare_history(path)
            self.assertTrue(changed)
            self.assertEqual(before, len(original))
            self.assertLess(after, before)
            prepared = path.read_bytes()
            timestamp = path.stat().st_mtime_ns
            self.assertEqual(prepare_history(path), (after, after, False))
            self.assertEqual(path.read_bytes(), prepared)
            self.assertEqual(path.stat().st_mtime_ns, timestamp)
            self.assertEqual(sorted(p.name for p in Path(folder).iterdir()), ["data.js"])
            source["entries"]["nightly"][0]["runners"] = {"linux-x64": {"cpu": "different"}}
            conflicting = (PREFIX + json.dumps(source)).encode()
            path.write_bytes(conflicting)
            with self.assertRaisesRegex(ValueError, "Conflicting runner metadata"):
                prepare_history(path)
            self.assertEqual(path.read_bytes(), conflicting)
            path.write_text("not a benchmark assignment", encoding="utf-8")
            with self.assertRaisesRegex(ValueError, "Expected window"):
                prepare_history(path)
            self.assertEqual(path.read_text(encoding="utf-8"), "not a benchmark assignment")

    def test_existing_conflicting_metadata_and_invalid_structure_are_rejected(self):
        source = history(bench("linux-x64/libpng/x native", 'Runner: {"cpu":"new"}'))
        source["entries"]["nightly"][0]["runners"] = {"linux-x64": {"cpu": "old"}}
        with self.assertRaisesRegex(ValueError, "Conflicting runner metadata"):
            normalize_history(source)
        source["entries"]["nightly"][0]["runners"] = []
        with self.assertRaisesRegex(ValueError, "Expected runner map"):
            normalize_history(source)
        with self.assertRaisesRegex(ValueError, "Duplicate JSON key"):
            parse_history(PREFIX + '{"entries":{},"entries":{}}')
        self.assertEqual(parse_history(PREFIX + '{"entries":{}};\n'), {"entries": {}})

    def test_failed_atomic_replace_keeps_original_and_cleans_temporary(self):
        source = history(bench("linux-x64/libpng/x native", 'Runner: {"cpu":"one"}'))
        with tempfile.TemporaryDirectory() as folder:
            path = Path(folder) / "data.js"
            original = (PREFIX + json.dumps(source)).encode()
            path.write_bytes(original)
            with patch.object(Path, "replace", side_effect=OSError("replace failed")):
                with self.assertRaisesRegex(OSError, "replace failed"):
                    prepare_history(path)
            self.assertEqual(path.read_bytes(), original)
            self.assertEqual(sorted(p.name for p in Path(folder).iterdir()), ["data.js"])


if __name__ == "__main__":
    unittest.main()
