"""Merge benchmark JSON, attaching the matching runner's hardware record."""
import glob
import json
from pathlib import Path


def merge(pattern, destination, prefix):
    results = []
    for filename in sorted(glob.glob(pattern)):
        path = Path(filename)
        tag = path.stem.removeprefix(prefix).removesuffix("_zng")
        with open(path.parent / ("machine_" + tag + ".json"), encoding="utf-8") as file:
            metadata = json.load(file)
        description = json.dumps(metadata, ensure_ascii=True)
        with open(path, encoding="utf-8") as file:
            entries = json.load(file)
        for entry in entries:
            entry["extra"] = entry.get("extra", "") + "\nRunner: " + description
            if entry["unit"] == "MPix/s":
                entry["extra"] += "\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
        results.extend(entries)
    if not results:
        raise RuntimeError("No benchmark results for " + pattern)
    names = [result["name"] for result in results]
    if len(set(names)) != len(names):
        raise RuntimeError("Duplicate benchmark series in " + destination)
    with open(destination, "w", encoding="utf-8") as file:
        json.dump(results, file, indent=1)
    print(destination, len(results), "series")


merge("benches/bench_*.json", "bench.json", "bench_")
merge("benches/encode_*.json", "encode.json", "encode_")
