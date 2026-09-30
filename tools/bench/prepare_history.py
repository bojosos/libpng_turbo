"""Store each run's runner metadata once, preserving benchmark history."""
import argparse
import copy
import json
from pathlib import Path
import tempfile


PREFIX = "window.BENCHMARK_DATA = "


def unique_object(pairs):
    result = {}
    for key, value in pairs:
        if key in result:
            raise ValueError("Duplicate JSON key: " + key)
        result[key] = value
    return result


def reject_constant(value):
    raise ValueError("Invalid JSON constant: " + value)


def load_json(text):
    return json.loads(text, object_pairs_hook=unique_object,
                      parse_constant=reject_constant)


def parse_history(text):
    text = text.strip()
    if not text.startswith(PREFIX):
        raise ValueError("Expected window.BENCHMARK_DATA JSON assignment")
    payload = text[len(PREFIX):].rstrip()
    if payload.endswith(";"):
        payload = payload[:-1]
    return load_json(payload)


def normalize_history(history):
    """Return a validated copy; preserve unknown and malformed runner lines."""
    if not isinstance(history, dict) or not isinstance(history.get("entries"), dict):
        raise ValueError("Expected a history object with an entries object")
    result = copy.deepcopy(history)
    for suite, entries in result["entries"].items():
        if not isinstance(entries, list):
            raise ValueError("Expected an entry list for " + suite)
        for index, entry in enumerate(entries):
            context = f"{suite} entry {index}"
            if not isinstance(entry, dict) or not isinstance(entry.get("benches"), list):
                raise ValueError("Expected benchmark list in " + context)
            runners = entry.get("runners", {})
            if not isinstance(runners, dict):
                raise ValueError("Expected runner map in " + context)
            for bench in entry["benches"]:
                if not isinstance(bench, dict) or not isinstance(bench.get("name"), str):
                    raise ValueError("Expected benchmark name in " + context)
                extra = bench.get("extra")
                if not isinstance(extra, str):
                    continue
                kept = []
                removed = False
                for line in extra.splitlines(keepends=True):
                    if not line.startswith("Runner: "):
                        kept.append(line)
                        continue
                    try:
                        runner = load_json(line[8:])
                    except ValueError:
                        kept.append(line)
                        continue
                    if not isinstance(runner, dict):
                        kept.append(line)
                        continue
                    platform = bench["name"].split("/")[0].strip()
                    if not platform:
                        raise ValueError("Missing runner platform in " + context)
                    if platform in runners:
                        previous = json.dumps(runners[platform], sort_keys=True)
                        if previous != json.dumps(runner, sort_keys=True):
                            raise ValueError(f"Conflicting runner metadata for {platform} in {context}")
                    runners[platform] = runner
                    removed = True
                if removed:
                    bench["extra"] = "".join(kept)
                    entry["runners"] = runners
    return result


def serialize_history(history):
    return PREFIX + json.dumps(history, ensure_ascii=True, allow_nan=False,
                               separators=(",", ":")) + "\n"


def prepare_history(path):
    """Validate before writing; replace atomically only when metadata changes."""
    path = Path(path)
    original = path.read_bytes()
    history = parse_history(original.decode("utf-8"))
    normalized = normalize_history(history)
    if normalized == history:
        return len(original), len(original), False
    updated = serialize_history(normalized).encode("utf-8")
    temporary = None
    try:
        with tempfile.NamedTemporaryFile(dir=path.parent, prefix="." + path.name,
                                         suffix=".tmp", delete=False) as file:
            temporary = Path(file.name)
            file.write(updated)
        temporary.replace(path)
    finally:
        if temporary is not None:
            temporary.unlink(missing_ok=True)
    return len(original), len(updated), True


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("path", type=Path, help="Path to bench/data.js")
    args = parser.parse_args()
    try:
        before, after, changed = prepare_history(args.path)
    except (ValueError, OSError) as error:
        parser.exit(1, f"Benchmark history unchanged: {error}\n")
    if changed:
        print(f"Benchmark history: {before:,} -> {after:,} bytes ({100 * (before - after) / before:.1f}% smaller)")
    else:
        print(f"Benchmark history unchanged: {before:,} bytes")


if __name__ == "__main__":
    main()
