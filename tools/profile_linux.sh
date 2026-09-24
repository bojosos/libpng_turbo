#!/usr/bin/env bash
# Process-scoped Linux perf collection; never profiles the runner system-wide.
set -euo pipefail
build=${1:-build_profile}
out=${2:-profile-results}
seconds=${3:-5}
mkdir -p "$out"
out=$(realpath "$out")
driver=$(realpath "$build/profile_png")
cpu=$(awk '/Cpus_allowed_list/ {split($2,a,/[-,]/); print a[1]}' /proc/self/status)
summary="$out/summary.md"
printf '# Linux PNG profile\n\n' > "$summary"
{
    date -u
    git rev-parse HEAD
    uname -a
    lscpu
    printf '\nPinned logical CPU: %s\n' "$cpu"
    cat /proc/sys/kernel/perf_event_paranoid
    cat /proc/sys/kernel/kptr_restrict
    cc --version
    grep -E 'CMAKE_(C_COMPILER|C_FLAGS|BUILD_TYPE)' "$build/CMakeCache.txt"
    cat "$build/CMakeFiles/ptpng.dir/flags.make" 2>/dev/null || true
} > "$out/machine.txt" 2>&1
cp "$driver" "$out/profile_png"
cp "$build/compile_commands.json" "$out/" 2>/dev/null || true

# The Ubuntu wrapper needs a kernel-matching package. A directly installed
# perf binary is also usable when that package is absent from the image repo.
perf_bin=
for candidate in /usr/bin/perf /usr/lib/linux-tools/*/perf; do
    if [[ -x "$candidate" ]] && "$candidate" --version > "$out/perf-version.txt" 2>&1; then
        perf_bin=$candidate
        break
    fi
done
perf_cmd=()
if [[ -n "$perf_bin" ]]; then
    perf_cmd=("$perf_bin")
    if ! "${perf_cmd[@]}" stat -e task-clock -- sleep 0.1 > "$out/permission-probe.txt" 2>&1; then
        # Hosted runners permit passwordless sudo. This stays scoped to the
        # launched process and does not change kernel security settings.
        if sudo -n "$perf_bin" stat -e task-clock -- sleep 0.1 >> "$out/permission-probe.txt" 2>&1; then
            perf_cmd=(sudo -n "$perf_bin")
        else
            perf_cmd=()
        fi
    fi
fi

events=()
record_event=
if (( ${#perf_cmd[@]} )); then
    "${perf_cmd[@]}" list > "$out/perf-events.txt" 2>&1 || true
    for event in cycles:u instructions:u branches:u branch-misses:u cache-references:u cache-misses:u task-clock cpu-clock; do
        probe="$out/probe-${event//:/_}.txt"
        if "${perf_cmd[@]}" stat -x ';' -e "$event" -- taskset -c "$cpu" "$driver" decode tests/bench/graphic_rgb8.png 0.1 > "$probe" 2>&1 &&
           ! grep -Eq '<not (supported|counted)>' "$probe"; then
            events+=("$event")
        fi
    done
    for event in cycles:u cpu-clock:u; do
        if "${perf_cmd[@]}" record -q -e "$event" -F 199 --call-graph fp \
            -o "$out/probe.data" -- taskset -c "$cpu" "$driver" decode tests/bench/graphic_rgb8.png 0.1 \
            > "$out/record-probe-${event//:/_}.txt" 2>&1; then
            record_event=$event
            break
        fi
    done
fi
if [[ -z "$record_event" ]]; then
    printf 'Perf sampling is unavailable on this runner. See permission and event probe logs. No hardware counters are inferred.\n\n' >> "$summary"
else
    printf 'Sampling event: `%s`, 199 Hz, user stacks with frame pointers, CPU %s.\n\n' "$record_event" "$cpu" >> "$summary"
    if [[ "$record_event" == cpu-clock:u ]]; then
        printf 'The virtual machine did not expose usable cycle sampling. These are software timer samples, not hardware cycle measurements.\n\n' >> "$summary"
    fi
fi
printf 'Counters available: `%s`. Each profile includes input loading and one validated warm-up before the timed loop. Timed throughput includes output allocation/free and checksum verification.\n\n' "${events[*]:-none}" >> "$summary"
printf '| Workload | Timed output |\n|---|---|\n' >> "$summary"

# Both eight-bit photos, flat graphics, 16-bit Paeth and RGB conversion.
workloads=(
    'decode photo_rgb8 native'
    'decode photo_rgb8 rgb8'
    'decode photo_rgba8 native'
    'decode graphic_rgb8 native'
    'decode photo_rgba16_paeth native'
    'encode photo_rgb8 native'
    'encode photo_rgba8 native'
    'encode graphic_rgb8 native'
    'encode photo_rgba16_paeth native'
)
for workload in "${workloads[@]}"; do
    read -r operation image format <<< "$workload"
    name="$operation-$image-$format"
    dir="$out/$name"
    mkdir -p "$dir"
    cmd=(taskset -c "$cpu" "$driver" "$operation" "tests/bench/$image.png" "$seconds" "$format")
    # Also collect an uninstrumented run so profiling overhead is visible.
    "${cmd[@]}" > "$dir/timing.txt" 2>&1
    printf '| %s | %s |\n' "$name" "$(cat "$dir/timing.txt")" >> "$summary"
    if (( ${#events[@]} )); then
        event_list=$(IFS=,; echo "${events[*]}")
        if ! "${perf_cmd[@]}" stat -x ';' -e "$event_list" -o "$dir/stat.txt" -- "${cmd[@]}" > "$dir/stat-timing.txt" 2> "$dir/stat-errors.txt"; then
            printf '\nCounter collection failed for %s; see stat-errors.txt.\n' "$name" >> "$summary"
        fi
    fi
    if [[ -n "$record_event" ]]; then
        if "${perf_cmd[@]}" record -q -e "$record_event" -F 199 --call-graph fp \
            -o "$dir/perf.data" -- "${cmd[@]}" > "$dir/record-timing.txt" 2> "$dir/record-errors.txt"; then
            "${perf_cmd[@]}" report --stdio --no-children --percent-limit 1 \
                -i "$dir/perf.data" > "$dir/report.txt" 2>&1 || true
            timeout 30 "${perf_cmd[@]}" annotate --stdio --no-source --percent-limit 3 \
                -i "$dir/perf.data" > "$dir/annotate.txt" 2>&1 || true
        else
            printf '\nSampling failed for %s; see record-errors.txt.\n' "$name" >> "$summary"
        fi
    fi
done
printf '\n## Hot functions\n' >> "$summary"
for report in "$out"/*/report.txt; do
    [[ -f "$report" ]] || continue
    printf '\n### %s\n\n```text\n' "$(basename "$(dirname "$report")")" >> "$summary"
    # Self samples only; call stacks and annotated instructions stay in artifacts.
    awk '/^[[:space:]]*[0-9]+\.[0-9]+%/ {print; if (++n == 8) exit}' "$report" >> "$summary"
    printf '```\n' >> "$summary"
done
if (( ${#perf_cmd[@]} )) && [[ "${perf_cmd[0]}" == sudo ]]; then
    sudo -n chown -R "$(id -u):$(id -g)" "$out"
fi
if [[ -n "${GITHUB_STEP_SUMMARY:-}" ]]; then cat "$summary" >> "$GITHUB_STEP_SUMMARY"; fi
