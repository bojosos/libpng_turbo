# Performance work, September 2026

ptpng targets fast single-threaded PNG decoding on x86 AVX2 and ARM64
NEON. A kernel benchmark measures one operation; it does not establish
the speed of a complete PNG decode or a lead over every other decoder.

## Changes

- AVX2 Sub filtering reconstructs RGB and 16-bit RGB directly into the
  output row using prefix sums, without an intermediate copy.
- NEON Sub filtering covers all six PNG byte strides. NEON Adler-32
  replaces the scalar checksum on ARM64.
- Fixed DEFLATE blocks reuse cached Huffman roots. This removes 29 KiB
  of copies per fixed block and 24 KiB of unused fixed-table storage.
- The SSE2 fallback no longer contains SSSE3 instructions. The ARM scalar
  Sub fallback now uses the correct recurrence.
- Long x86 rows with 2-, 4- or 8-byte pixels retain the established
  blocked SSE2 path after local measurements showed possible regressions
  with the new fused path. RGB and 16-bit RGB use the new implementation.
- RGB16-to-RGBA8 conversion no longer loads beyond its source tail.

## Fixed-block measurement

Local Windows x64, MSVC `/O2`, old and new binaries run in alternating
order, best of ten decodes per invocation, Adler verification disabled
for this inflate-only measurement:

| Input | Before | After | Speedup |
| --- | ---: | ---: | ---: |
| 50,001 tiny fixed blocks, run 1 | 22.744 ms | 0.874 ms | 26.0x |
| Same input, run 2 | 23.144 ms | 0.930 ms | 24.9x |

The stream contains 500,011 compressed bytes and 1,600,032 output bytes.
This deliberately stresses block setup. It is not a representative PNG
corpus. The old executable used the static MSVC runtime and the new one
used the dynamic runtime. The ordinary 64x64 `fixedhuff.png` fixture
showed no clear improvement above timing noise.

Generate the stream with Python's standard library:

```python
import pathlib
import zlib

def compressor():
    return zlib.compressobj(6, zlib.DEFLATED, -15,
                            zlib.DEF_MEM_LEVEL, zlib.Z_FIXED)

c = compressor()
block = c.compress(b"a" * 32) + c.flush(zlib.Z_SYNC_FLUSH)
c = compressor()
end = c.compress(b"a" * 32) + c.flush()
data = b"a" * (32 * 50001)
stream = (b"\x78\x01" + block * 50000 + end
          + zlib.adler32(data).to_bytes(4, "big"))
pathlib.Path("build/many_fixed.z").write_bytes(stream)
```

After building Release with CMake, run `build/inf_bench build/many_fixed.z
1600032`. On Windows the executable has the `.exe` suffix.

## Whole-image and filter benchmarks

Native macOS ARM64 results from [the September 24 nightly run](https://github.com/bojosos/libpng_turbo/actions/runs/36043349483),
commit `5079d0e`, generated 3200x2400 images, checksum verification on:

| Native output | ptpng, MPix/s | libpng + zlib-ng, MPix/s | ptpng speedup |
| --- | ---: | ---: | ---: |
| photo_rgb8 | 212.68 | 139.36 | 1.53x |
| photo_rgba8 | 63.64 | 59.09 | 1.08x |
| photo_gray8 | 330.11 | 213.85 | 1.54x |
| photo_gray16 | 256.28 | 170.37 | 1.50x |
| graphic_pal8 | 1982.45 | 1663.42 | 1.19x |
| graphic_rgb8 | 394.51 | 557.98 | 0.71x |

The same runner measured NEON Sub at 7.1–10.2 GB/s on 4096-byte rows,
5.7–19.4x the corrected scalar implementation depending on bytes per
pixel. RGB was 7414.9 versus 546.9 MB/s. This comparison isolates the
filter; it is not a before/after whole-image speedup. RGBA8 output also
lost to libpng+zlib-ng on palette graphics and RGB graphics, so conversion
and match-heavy images remain useful optimization targets.

The Linux x64 AVX2 runner measured 4096-byte RGB Sub at 17.33 GB/s
versus 2.19 GB/s in the scalar kernel, and 16-bit RGB at 17.33 versus
3.00 GB/s. Whole-image performance still varied: native photo RGB was
178.06 versus 170.16 MPix/s against libpng+zlib-ng, while photo RGBA was
59.93 versus 75.93 and RGB graphics were 376.33 versus 947.40 MPix/s.
These losses matter more than the isolated filter wins when deciding
what to optimize next.

`tests/gen_bench.py` creates a deterministic synthetic image corpus with
Pillow. `bench_compare` compares ptpng with libpng and stock zlib;
`bench_zlibng` compares against libpng with zlib-ng. Both report MPix/s,
not decoded MB/s. They include allocation, parsing and decompression,
use contiguous pixel storage, and leave freeing the returned pixels
outside the timed region. Measurements are best of twelve decodes.

```text
python tests/gen_bench.py
build/bench_compare local build/stock.json tests/bench/photo_rgb8.png
build/bench_zlibng local build/zng.json tests/bench/photo_rgb8.png
build/filters_test --bench
```

The nightly workflow runs these comparisons on Linux x64 and ARM64,
macOS ARM64, and Windows x64 and ARM64. It uploads JSON results and
scalar-versus-dispatched filter timings as artifacts, then updates the
benchmark history. Shared runner timings vary with host load, CPU model,
frequency and compiler; compare repeated runs on the same hardware.

## Correctness checks

The suite compares 309 images in three output formats against libpng,
checks every Paeth predictor input, and tests filters across alignments,
tails and overlapping buffers. Decoder regressions cover compressed
metadata, metadata limits, invalid chunks, mixed DEFLATE block types,
truncation and dynamic output capacity. CI includes ASan/UBSan corpus
decoding and mutation fuzzing.

## Remaining performance work

Average and the remaining scalar Paeth strides are candidates for SIMD
on ARM and x86. Four-byte Paeth pixels now use SIMD on AVX2 CPUs.
CRC-32 still uses slicing-by-eight;
hardware polynomial folding is another candidate. Any replacement
needs corpus measurements with checksum verification enabled and tests
for short rows, tails and fallback CPUs. A broader comparison should
include other specialized PNG decoders and a real-image corpus before
making a fastest-decoder claim.

## VTune-guided follow-up

An elevated VTune hardware sampling run on an Intel Core i7-1355U
identified decompression, Paeth filtering and SSE2 Adler-32 as the main
costs of decoding `graphic_rgb8.png`. Branch misprediction accounted for
only 0.6% of P-core pipeline slots in that recording.

The follow-up changes target those operations:

- Distance-one DEFLATE matches fill the output directly. Previously,
  matches longer than 32 bytes built a 64-byte periodic scratch buffer
  before copying it to the output.
- AVX2 Adler-32 processes 32 bytes per iteration with fixed byte weights
  and prefix sums. The SSE2 and scalar fallbacks remain available on
  other x86 CPUs; ARM uses the existing NEON implementation.
- Multichannel Paeth uses an equivalent threshold calculation with fewer
  arithmetic operations. The one-byte path retains its previous predictor
  because the proposed replacement had no repeatable advantage.
  Exhaustive predictor tests verify the PNG tie rules.

The decoder tests cover every distance-one match length from 3 to 258
bytes, including exact output capacity and insufficient capacity. The
checksum tests cover unaligned inputs, vector and chunk boundaries, and
all-255 data to exercise the accumulator bounds. `filters_test
--bench-paeth` measures Paeth separately; nightly filter artifacts now
include these timings alongside Sub.

Local Windows measurements against `c1ed216`, identical MSVC
`/O2 /Ob2 /Zi` builds, pinned to logical CPU 4, an E-core, at AboveNormal
priority:

| Native decode | Median paired speedup | Range across three pairs |
| --- | ---: | ---: |
| graphic_rgb8 | 1.73x | 1.71–1.80x |
| graphic_pal8 | 1.56x | 1.40–1.74x |
| photo_rgba8 | 1.19x | 1.14–1.21x |
| photo_rgb8 | 0.98x | 0.93–1.07x |
| photo_gray8 | 1.03x | 0.96–1.11x |
| photo_gray16 | 1.03x | 0.97–1.11x |

Each pair ran the old and new `ptpng_tool --native --bench 16` binaries
consecutively, alternating order between rounds, with CRC and Adler
verification enabled. Ratios use each invocation's best decode time.
Another project was compiling on this laptop, so absolute times drifted.
The graphics and RGBA gains were consistent; these measurements do not
establish a change for RGB photos or grayscale images.

Three additional paired `inf_bench` runs on the extracted graphics IDAT
stream measured inflate without Adler at 10.29–11.06 ms before and
3.12–3.57 ms after. Adler alone on the 23,042,400 decoded bytes measured
4.60–4.85 ms before and 3.64–3.90 ms after. These are component timings,
not whole-image results. ARM performance must be measured on ARM hardware.

### Separate P-core and E-core timings

Windows CPU-set topology confirms that logical CPUs 0–3 are hardware
threads on two P-cores, and logical CPUs 4–11 are eight E-cores. The
original VTune recording sampled work on all twelve logical CPUs.

A subsequent timing-only run used logical CPU 2 for the P-core test and
logical CPU 4 for the E-core test, with the same three-pair methodology
and no profiler. Values below are median speedup followed by the full
range across pairs:

| Native decode | P-core | E-core |
| --- | ---: | ---: |
| graphic_rgb8 | 1.77x, 1.71–1.95x | 1.77x, 1.61–1.91x |
| graphic_pal8 | 2.09x, 1.70–2.14x | 1.83x, 1.65–2.06x |
| photo_rgb8 | 0.96x, 0.85–1.10x | 0.78x, 0.50–1.06x |
| photo_rgba8 | 1.16x, 0.88–1.44x | 1.11x, 1.00–1.13x |
| photo_gray8 | 0.99x, 0.94–1.12x | 0.97x, 0.76–1.05x |
| photo_gray16 | 1.07x, 0.94–1.27x | 1.27x, 0.98–1.29x |

The graphics gains persisted on both core types. Background compilation
continued during this run, and photo timings varied too much to establish
reliable improvements or regressions. In particular, the E-core RGB photo
slowdown needs an idle-machine repeat. Pinning prevents core migration;
it does not isolate shared resources or hold CPU frequency constant.

## Further x64 optimizations

Four-byte Paeth pixels now use 128-bit SIMD in the AVX2 translation unit.
The predictor operates on four 16-bit lanes, then wraps reconstructed
bytes modulo 256. This covers RGBA8 and other four-byte pixel layouts.
Other strides retain scalar prediction, including RGB, whose experimental
SIMD implementation regressed on the E-core.

Short DEFLATE matches with length at most 16 and distance at least 16
use one fixed-size copy when the output allocation has 16 bytes left.
The source lies entirely in decoded history and cannot overlap that
copy. The logical output position advances by the actual match length.
This avoids the larger copy loop for common photo back-references.

Local measurements against `368c6b4`, the preceding code plus its timing
documentation, used identical MSVC optimization settings. A single
process loaded old and new libraries, verified equal decoded pixels,
and alternated their order for 21 paired native decodes per image.
CRC and Adler verification remained enabled, allocation was timed, and
freeing the returned image was outside the timed interval.

| Native decode | P-core CPU 2, median paired speedup | E-core CPU 4, median paired speedup |
| --- | ---: | ---: |
| photo_rgba8 | 1.12x | 1.10x |
| photo_rgb8 | 1.02x | 1.08x |
| photo_gray8 | 1.06x | 1.09x |
| photo_gray16 | 1.05x | 1.08x |
| graphic_rgb8 | 1.02x | 0.99x |
| graphic_pal8 | 0.98x | 0.98x |

Background compilation continued, so absolute times varied and small
differences around 1.00x remain inconclusive. The RGBA P-core paired
ratios had a middle-90% range of 1.08–1.23x; the E-core range was
0.94–1.24x. Paired [Windows thread-cycle counters](https://learn.microsoft.com/en-us/windows/win32/api/realtimeapiset/nf-realtimeapiset-querythreadcycletime)
gave corresponding RGBA medians of 1.12x and 1.11x. Those counters were
compared directly, without converting them to elapsed time.

The isolated four-byte Paeth kernel measured 2.1–2.7x scalar throughput
on the P-core and 1.2–1.3x on the E-core for 4096-byte rows. Whole-image
gains are smaller because decompression and other work remain.

Tests cover all 16.7 million predictor triples through the dispatched
four-byte kernel, unaligned and overlapping rows, and exact input
allocations. Match-copy tests cover every distance from 1 to 64 and
length from 3 to 258, with and without following literals: 32,768 cases.
Each case also checks insufficient capacity and its output boundary.

## First encoder release

Commit `e6f083c` adds encoding for gray, gray+alpha, RGB and RGBA at 8 or
16 bits. Output is non-interlaced and contains no ancillary metadata.
AVX2 filters handle 32 bytes per iteration; NEON handles 16. Adaptive
filtering scores up to 192 sampled bytes per row and runs the selected
filter once over the full row. The compressor uses a 32 KiB hash table,
bounded LZ77 search and fixed Huffman codes. If that stream exceeds the
stored-block bound, it emits stored blocks instead. No runtime dependency
was added. Format references are the [PNG specification](https://www.w3.org/TR/png-3/)
and [DEFLATE specification](https://www.rfc-editor.org/rfc/rfc1951).

Local Windows x64, i7-1355U, Release MSVC build. These are two generated
3200x2400 photo-like images, not a real-world photo corpus. Each encoder
ran once for warm-up and pixel verification, then five times with order
rotated each round. The table uses median elapsed times. Allocation,
filtering, compression and checksums are timed; freeing the returned PNG
is excluded for every encoder. Runs were pinned to P logical CPU 2 and
E logical CPU 4. System load and frequency were not fixed, so compare
encoders within each run rather than absolute P/E times.

| Image | Core | ptpng | libpng+zlib-ng level 1 | Speedup | ptpng bytes / reference bytes |
| --- | --- | ---: | ---: | ---: | ---: |
| photo_rgb8 | P | 243.36 ms | 841.58 ms | 3.46x | 9,739,624 / 10,136,572 |
| photo_rgb8 | E | 264.24 ms | 1,018.55 ms | 3.85x | 9,739,624 / 10,136,572 |
| photo_rgba8 | P | 532.10 ms | 1,393.55 ms | 2.62x | 19,392,753 / 19,251,365 |
| photo_rgba8 | E | 501.43 ms | 1,195.84 ms | 2.38x | 19,392,753 / 19,251,365 |

The RGB file is 3.9% smaller than the zlib-ng level-1 reference; RGBA is
0.7% larger. Against stronger compression, the tradeoff changes: zlib-ng
level 6 produced 5,350,341 RGB bytes and 11,637,017 RGBA bytes, making our
output 82% and 67% larger. Stock-zlib level 1 produced 7,116,353 RGB bytes;
our P-core encode was 5.37x faster but 37% larger. This release is a fast
compression mode, with no claim to lead all encoders or all images.

Reproduce the stronger-reference comparison on Windows:

```powershell
./build/bench_encode_zlibng --cpu 2 local-p encode_p.json tests/bench/photo_rgb8.png tests/bench/photo_rgba8.png
./build/bench_encode_zlibng --cpu 4 local-e encode_e.json tests/bench/photo_rgb8.png tests/bench/photo_rgba8.png
```

Tests add 2,307 complete PNG round trips, independently read by libpng,
and 1,496 raw compression streams, independently inflated by zlib in
reference builds. Filters are compared with scalar reference predictors
across alignments, exact buffer ends and every Paeth input triple. All
seven platform/sanitizer CI jobs passed for `e6f083c`. Further compression
work should compare specialized encoders and a wider image corpus, while
reporting file size alongside speed.

## Reading the nightly graphs

[GitHub-hosted jobs use fresh virtual machines](https://docs.github.com/en/actions/reference/runners/github-hosted-runners).
The workflow does not guarantee an identical physical CPU or load between
runs. Between `77cbb8b` and `28971d9`, Linux RGB decode throughput changed
from 242.00 to 189.40 MPix/s, while unchanged libpng changed from 149.60 to
107.35. Within-run speedup changed from 1.62x to 1.76x. The shared slowdown
suggests runner variation; those records lack CPU model information and
cannot establish its exact cause.

The dark chart page now derives same-run ratios for historical decoder
points. From `e6f083c`, artifacts also record CPU, OS and runner image.
Decoder timing changes to medians of 12 alternating rounds after warm-up;
older points used separate best-of-12 samples. This method change is
visible on the page and in new data tooltips. Encoder charts report both
time and bytes against libpng levels 1 and 6, using zlib and zlib-ng.

A warm-buffer 64 MiB memory-copy benchmark provides throughput context.
Its 128 MiB working set may interact differently with each CPU's cache.
It reports payload MB/s, not aggregate read/write traffic. This is a
measured reference rather than a theoretical PNG limit: decoding reads
compressed data, writes raw pixels, and performs input-dependent work.
Kernel throughput and complete-image throughput answer different questions.

## Further x64 encoder and decoder work, September 25

Three changes survived comparison against `98e53b0`:

- RGB8-to-RGB8 and RGBA8-to-RGBA8 decoding now returns the reconstructed
  buffer directly. This removes one allocation and a full-image copy.
  RGB8 still ignores tRNS; RGB-to-RGBA still expands transparency.
- AVX2 dispatch now handles the eight byte chains of RGBA16 Paeth with
  exact eight-byte loads and stores. Its existing four-byte loop stays
  separate. This uses 128-bit vectors in the AVX2 translation unit.
- The x64 encoder writes completed DEFLATE bytes with an unaligned
  64-bit store, retaining fewer than eight pending bits. The store stays
  inside the output limit; a byte tail handles the end of the allocation.
  Compression decisions, emitted bytes and output sizes are unchanged.

Whole-image measurements used baseline and candidate DLLs loaded into
one process on the i7-1355U. Each pair alternated order, with 21 pairs
for the cases below, pinned to P logical CPU 2 or E logical CPU 4. Tests
include allocations and checksums, excluding output freeing. Every warm-up
compared complete output bytes. Thread-cycle ratios broadly agreed with
elapsed-time ratios; frequency and background load were not controlled.

| Operation / image | P-core paired speedup | E-core paired speedup |
| --- | ---: | ---: |
| Decode graphic_rgb8 to RGB8 | 1.56x | 1.44x |
| Decode photo_rgba8 to RGBA8 | 1.11x | 1.07x |
| Decode photo_rgba16_paeth, native | 1.16x | 1.18x |
| Decode graphic_rgba16_paeth, native | 1.93x | 2.12x |
| Encode photo_rgb8 | 1.03x | 1.12x |
| Encode photo_rgba8 | 1.05x | 1.07x |

The encoder's RGB P-core screening run measured 1.07x; the longer repeat
above measured 1.03x. Gray and graphics encoding changes were smaller,
with some indistinguishable from noise. Native RGBA8 decoding, which
does not benefit from the removed output copy, remained near 0.99x in
both core tests. The RGBA16 photo paired ranges were 1.08–1.20x on P and
1.15–1.20x on E. The flat-color RGBA16 case spends a much larger fraction
of its time filtering, explaining its larger whole-image gain.

The new RGBA16 fixtures are synthetic 1024x768 images with Paeth on every
row and varying low sample bytes. Reproduce them with
`python tests/gen_bench16.py`. The nightly workflow now covers those two
images plus the previous six, in native, RGBA8 and RGB8 decode modes.
It independently compares benchmark pixels with libpng before timing.

Validation includes all seven local CTest suites, libpng parity on the
large benchmark images in all three output modes, and all 16.7 million
Paeth triples through both four-byte and eight-byte dispatch. A separate
comparison checked 2,096 raw compression streams against the old encoder
byte-for-byte and then inflated each with zlib. This covers every length
from 0 through 512, DEFLATE block/window boundaries and multiple patterns.

Bit-scan match-length detection, a four-byte bit-writer store and moving
writer state into a local struct did not show convincing overall gains
in the screening tests and were not included. No new VTune collection
was needed for these changes.

## Literal batching and ARM profiling, September 25

An x64 encoder change packs three already-selected literal codes into one
bit-writer call. Only runs of at least eight literals use the separate helper;
match probes, compression choices and PNG bytes remain unchanged. An earlier
version slowed RGBA photos by 5% on the E-core and was discarded.

Against `f6172e4`, 21 alternating pairs on the i7-1355U measured 1.41x P-core
and 1.32x E-core encoding speed on a 1024x768 random RGBA image. Thread-cycle
ratios were 1.43x and 1.29x. RGB/RGBA photo ratios were 1.00–1.02x. Gray and
palette cases were close to parity. The small flat RGBA16 image was noisy:
an E-core repeat measured 0.94x elapsed throughput and 0.97x by thread cycles;
that case does not call the new helper. Background load and code layout remain
possible factors, so these measurements do not establish a universal win.
A later 51-pair E-core repeat put flat RGBA16 at 0.999x elapsed throughput
and 0.997x by thread cycles, while random RGBA remained 1.302x and 1.299x.
All seven local tests and 2,096 byte-identical streams checked with zlib passed.
Nightly benchmarks now include the random RGBA image to track literal-heavy
workloads alongside the eight existing fixtures.

The first [Linux profiling run](https://github.com/bojosos/libpng_turbo/actions/runs/36060188672)
used a Neoverse-N2 ARM64 runner and exposed user hardware counters. Scalar Paeth
accounted for 44% of RGBA16-photo decode samples and 22% of RGBA8-photo samples;
inflate took 47% and 63%. Photo encoding spent 75–78% in fixed-Huffman DEFLATE.
These are sampled self costs, including brief process setup, not exact stage
timings. The x64 VM supported software samples only: perf silently changed
the requested cycles event to task-clock. The collection script now reads the
recorded event to label that fallback correctly.

The profiling workflow accepts an optional baseline revision. It builds both
versions with identical flags on the same VM, pins each to one CPU, and runs
nine alternating timing pairs. Artifacts retain every result, the CPU/compiler
details, sampled stacks and annotated instructions.

The [paired ARM run](https://github.com/bojosos/libpng_turbo/actions/runs/36061201763)
compared the new NEON Paeth implementation against `f6172e4` on one
Neoverse-N2 CPU, nine alternating one-second pairs per case:

| Native decode | Median speedup | Observed pair range |
| --- | ---: | ---: |
| RGBA8 photo | 1.004x | 1.002–1.006x |
| RGBA16 Paeth photo | 1.553x | 1.550–1.555x |
| RGBA16 Paeth graphics | 1.935x | 1.932–1.937x |

NEON processes the independent four- or eight-byte Paeth chains in 16-bit
lanes, using exact-width loads/stores and scalar partial-pixel tails. The
four-byte path did not materially improve this ARM photo workload; the
eight-byte path did. These Linux ARM results do not predict Apple Silicon
performance. macOS ARM and Windows ARM correctness checks passed separately.

The initial GCC build improved random RGBA encoding 1.278x but slowed the
RGBA8 photo to 0.974x. Its generated code placed the rare batching call on
the fall-through path and moved short literals behind extra jumps. Marking
long runs unlikely under GCC/Clang restored the photo case to 0.999x
(0.997–1.004x range), with random RGBA still 1.248x faster
(1.101–1.483x range). Graphics encoding was 1.000x. This
[final paired run](https://github.com/bojosos/libpng_turbo/actions/runs/36062061909)
also repeated the ARM gains at 1.555x for RGBA16 photos and 1.944x for
RGBA16 graphics. Windows keeps the previously measured MSVC code path.

The [expanded differential fuzz campaign](https://github.com/bojosos/libpng_turbo/actions/runs/36061508310)
completed 2,641,561 executions with ASan and UBSan across Linux x64 and ARM64,
with no reported failures. Each of three targets ran for 120 seconds per
architecture. Native decoder output is compared with libpng when both accept
the input; encoder output is decoded by libpng, and decompression is checked
against zlib. The seed corpus includes valid compressed profiles, suggested
palettes, text-allocation boundaries, and full-sized random encoder inputs.
Pixel/input limits and short campaign budgets remain deliberate restrictions;
execution counts are not coverage percentages or proof of correctness.
