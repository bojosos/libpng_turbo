"""Alternate baseline/candidate process timings on one allowed Linux CPU.

Each driver validates pixels before timing. These repeated same-run comparisons
avoid comparing raw throughput between different hosted VMs.
"""
import argparse
import json
import os
from pathlib import Path
import statistics
import subprocess


WORKLOADS = (
    ("decode", "photo_rgba8"),
    ("decode", "photo_rgba16_paeth"),
    ("decode", "graphic_rgba16_paeth"),
    ("encode", "photo_rgba8"),
    ("encode", "graphic_rgba16_paeth"),
    ("encode", "noise_rgba8"),
)


def measure(driver, cpu, operation, name):
    command = ["taskset", "-c", str(cpu), str(driver), operation,
               f"tests/bench/{name}.png", "1", "native"]
    output = subprocess.check_output(command, text=True, timeout=90)
    fields = dict(token.split("=", 1) for token in output.split() if "=" in token)
    return float(fields["MPix_per_second"]), output.strip()


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("baseline", type=Path)
    parser.add_argument("candidate", type=Path)
    parser.add_argument("output", type=Path)
    args = parser.parse_args()
    drivers = [args.baseline.resolve(strict=True), args.candidate.resolve(strict=True)]
    cpu = min(os.sched_getaffinity(0))
    args.output.mkdir(parents=True, exist_ok=True)
    results = []
    lines = [f"## Paired comparison on logical CPU {cpu}", "",
             "Nine alternating pairs per workload; one second per timed loop. "
             "Speedup is candidate/baseline throughput. The ranges are observed "
             "paired minima/maxima, not confidence intervals.", "",
             "| Workload | Median speedup | Pair range |",
             "|---|---:|---:|"]
    for operation, name in WORKLOADS:
        pairs = []
        for iteration in range(9):
            values = [None, None]
            for index in (iteration % 2, 1 - iteration % 2):
                values[index] = measure(drivers[index], cpu, operation, name)
            pairs.append({"baseline": values[0][0], "candidate": values[1][0],
                          "ratio": values[1][0] / values[0][0],
                          "logs": [value[1] for value in values]})
        ratios = [pair["ratio"] for pair in pairs]
        workload = f"{operation}-{name}"
        results.append({"workload": workload, "cpu": cpu, "pairs": pairs})
        lines.append(f"| {workload} | {statistics.median(ratios):.3f}x | "
                     f"{min(ratios):.3f}–{max(ratios):.3f}x |")
        # Save completed cases even if a later workload fails.
        (args.output / "paired.json").write_text(json.dumps(results, indent=2))
    summary = "\n".join(lines) + "\n"
    (args.output / "paired.md").write_text(summary, encoding="utf-8")
    print(summary)
    if os.environ.get("GITHUB_STEP_SUMMARY"):
        with open(os.environ["GITHUB_STEP_SUMMARY"], "a", encoding="utf-8") as file:
            file.write(summary)


if __name__ == "__main__":
    main()
