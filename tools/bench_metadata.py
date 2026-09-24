"""Record the runner visible to the benchmark, without assuming fixed hardware."""
import json
import os
import platform
import subprocess
import sys


def capture(command):
    try:
        return subprocess.check_output(command, text=True, stderr=subprocess.STDOUT,
                                       timeout=15).strip()
    except (OSError, subprocess.CalledProcessError, subprocess.TimeoutExpired) as error:
        return str(error)


system = platform.system()
if system == "Windows":
    import winreg
    try:
        with winreg.OpenKey(winreg.HKEY_LOCAL_MACHINE,
                            r"HARDWARE\DESCRIPTION\System\CentralProcessor\0") as key:
            cpu = winreg.QueryValueEx(key, "ProcessorNameString")[0].strip()
    except OSError:
        cpu = os.environ.get("PROCESSOR_IDENTIFIER", "unknown")
elif system == "Darwin":
    cpu = capture(["sysctl", "machdep.cpu.brand_string", "hw.ncpu", "hw.memsize"])
else:
    cpu = capture(["lscpu"])

metadata = {"os": platform.platform(), "machine": platform.machine(),
            "logical_cpus": os.cpu_count(), "cpu": cpu,
            "runner_image": os.environ.get("ImageOS", "unknown"),
            "runner_image_version": os.environ.get("ImageVersion", "unknown"),
            "run_id": os.environ.get("GITHUB_RUN_ID", "local"),
            "affinity": "OS scheduled; no fixed CPU affinity"}
with open(sys.argv[1], "w", encoding="utf-8") as output:
    json.dump(metadata, output, indent=2)
print(json.dumps(metadata, indent=2))
