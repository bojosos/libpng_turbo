# ptpng: a fast single-threaded PNG decoder and encoder

ptpng supports all PNG color types, bit depths 1/2/4/8/16, Adam7
interlacing and tRNS. Its tests compare decoded pixels byte-for-byte with
libpng `png_read_image()`. AVX2 paths run on supported x86 CPUs; ARM64
builds use NEON. The library has no external runtime dependencies.

The encoder accepts gray, gray+alpha, RGB and RGBA at 8 or 16 bits. It
writes non-interlaced PNGs using sampled filter selection, AVX2/NEON
forward filters and a bounded-search DEFLATE compressor. It prioritizes
speed over file size. Palette input, packed samples, metadata writing
and interlaced output are not supported by the encoder yet.

Calls must be serialized across threads: the decoder shares mutable
Huffman tables and CPU dispatch state. Optional metadata uses a bounded
allocation table; excess metadata is skipped while pixels still decode.

## Performance (30 September 2026)

The [nightly run](https://github.com/bojosos/ptpng/actions/runs/36753946386)
at [`86bcf29`](https://github.com/bojosos/ptpng/commit/86bcf29d098473fbe295995f5bb8a9ac1f215d98)
compares Release builds with **libpng + zlib-ng 2.2.4** (ZLIB_COMPAT).
The fixtures are generated photo-like gradients, flat graphics and random
noise. They are 3200x2400, except the two RGBA16 fixtures and `noise_rgba8`,
which are 1024x768. Checksums and allocations are included; input file I/O
and freeing the returned output are excluded.

### Decoder

Native-output times below come from the **Windows x64 runner: AMD EPYC 7763,
Windows Server 2025, four logical CPUs, OS scheduled**. Each decoder uses
the median of 12 alternating rounds after warm-up. libpng uses a contiguous
output allocation; setup and end-of-file processing are timed for both
decoders. Milliseconds are derived from the artifact's reported MPix/s.

| Image | ptpng | libpng + zlib-ng | Speedup |
| --- | ---: | ---: | ---: |
| photo_rgb8 | 34.04 ms | 46.37 ms | 1.36x |
| photo_rgba8 | 85.17 ms | 110.93 ms | 1.30x |
| photo_gray8 | 19.68 ms | 33.63 ms | 1.71x |
| photo_gray16 | 23.27 ms | 38.31 ms | 1.65x |
| graphic_pal8 | 2.13 ms | 7.37 ms | 3.46x |
| graphic_rgb8 | 11.60 ms | 13.19 ms | 1.14x |
| photo_rgba16_paeth | 28.54 ms | 42.26 ms | 1.48x |
| graphic_rgba16_paeth | 3.40 ms | 15.30 ms | 4.50x |
| noise_rgba8 | 11.61 ms | 11.89 ms | 1.02x |

### Encoder

On the same runner, encoding uses the median of five rotated rounds after
verified warm-up. Both encoders receive identical pixels; the palette
fixture expands to RGBA8 for both. The reference uses compression level 1.
Size is ptpng's PNG byte count divided by the reference's: below 100% means
a smaller file.

| Image | ptpng | libpng + zlib-ng level 1 | Speedup | Size vs reference |
| --- | ---: | ---: | ---: | ---: |
| photo_rgb8 | 75.35 ms | 262.96 ms | 3.49x | 96.1% |
| photo_rgba8 | 172.36 ms | 418.91 ms | 2.43x | 100.7% |
| photo_gray8 | 42.77 ms | 121.95 ms | 2.85x | 98.5% |
| photo_gray16 | 54.37 ms | 188.50 ms | 3.47x | 96.3% |
| graphic_pal8 | 15.24 ms | 171.47 ms | 11.25x | 65.9% |
| graphic_rgb8 | 12.39 ms | 141.95 ms | 11.46x | 70.7% |
| photo_rgba16_paeth | 39.93 ms | 131.56 ms | 3.30x | 101.2% |
| graphic_rgba16_paeth | 3.47 ms | 34.13 ms | 9.84x | 66.8% |
| noise_rgba8 | 8.26 ms | 71.34 ms | 8.64x | 94.7% |

Level 6 can produce substantially smaller files. Its timings and sizes,
along with the stock-zlib comparisons, are on the
[dark nightly charts](https://bojosos.github.io/ptpng/bench/).

### All five platforms

These are geometric means of within-run speedups against libpng + zlib-ng:
27 decoder cases (nine fixtures in native, RGB8 and RGBA8 formats) and nine
encoder cases against level 1. ptpng encodes faster on all nine cases on
every platform. The two remaining decoder losses are `noise_rgba8` to RGB8:
0.957x on Windows x64 and 0.981x on Windows ARM64.

| Platform | Decoder speedup | Faster decoder cases | Encoder speedup |
| --- | ---: | ---: | ---: |
| Linux x64 | 1.80x | 27/27 | 5.99x |
| Windows x64 | 1.64x | 26/27 | 5.25x |
| Linux ARM64 | 1.59x | 27/27 | 5.20x |
| macOS ARM64 | 1.62x | 27/27 | 5.99x |
| Windows ARM64 | 1.46x | 26/27 | 5.14x |

Hosted runners can change machines between runs, and generated PNG streams
can differ between OSes. Use these ratios for each run's reference comparison;
use alternating old/new measurements on the same machine to assess code
changes. [PERFORMANCE.md](PERFORMANCE.md#30-september-profiling-and-literal-batching)
records those paired results, including the remaining small Linux x64 RGB
photo-encode regression. This synthetic suite does not establish a
fastest-in-the-world claim.

## Building (MSVC x64)

    build.bat

Produces `build\ptpng_tool.exe` plus the test executables. The library
itself is `src/*.c` + `include/ptpng.h`; `src/ptpng_avx2.c` must be
compiled with `/arch:AVX2` (runtime-dispatched, SSE2 is the baseline).

## Building everywhere (CMake)

    cmake -S . -B build -DCMAKE_BUILD_TYPE=Release
    cmake --build build --config Release
    ctest --test-dir build -C Release --output-on-failure

Builds the library, tools, the vendored zlib + libpng references
(byte-parity suite), and — when `third_party/zlib-ng-*` is present —
`bench_zlibng` against libpng with zlib-ng. Options:
`-DPTPNG_WITH_LIBPNG=OFF` (no references, sanitizer builds),
`-DPTPNG_WITH_ZLIB_NG=OFF`. AVX2/NEON translation units are selected
per-architecture with runtime CPU dispatch on top.

## API

```c
#include "ptpng.h"

void *pixels;
size_t size;
ptpng_info info;
int rc = ptpng_decode(data, data_size, NULL /*opts*/, &pixels, &size, &info);
/* info describes the image; pixels layout depends on opts.output_format */
...
ptpng_free(pixels);
ptpng_info_free(&info);   /* releases ancillary buffers (texts, iCCP...) */
```

Output formats: `PTPNG_OUT_NATIVE` (packed scanlines exactly as PNG
stores them - identical bytes to libpng), `PTPNG_OUT_RGBA8` (tRNS
expanded to alpha, 16-bit chopped via >>8) and `PTPNG_OUT_RGB8`.
`opts.flags` can skip CRC/adler verification for maximum speed.

`ptpng_info` exposes palette, tRNS, gAMA/cHRM/sRGB/sBIT/bKGD/pHYs/tIME,
hIST, iCCP (decompressed profile), sPLT, eXIf and tEXt/zTXt/iTXt texts.

### Encoding

```c
void *png = NULL;
size_t png_size = 0;
/* RGBA8 pixels, tightly packed rows. NULL selects adaptive filtering. */
int rc = ptpng_encode(pixels, pixels_size, width, height, 0,
                      6, 8, NULL, &png, &png_size);
if (rc == PTPNG_OK) {
    /* Write png_size bytes from png to a file or send them to a consumer. */
}
ptpng_free(png);
```

`stride` accepts padded input rows; `pixels_size` must include all accessed
bytes. For 16-bit input, samples must be big-endian. A non-NULL
`ptpng_encode_opts` can force any PNG filter. Use
`{PTPNG_ENCODE_FILTER_ADAPTIVE}` for the sampled default; a zero-initialized
options struct explicitly selects None. Output contains IHDR, IDAT and
IEND only, with CRC and Adler checksums. Invalid dimensions, input lengths
and unsupported formats fail before reading pixels. Filtered input is
capped at `PTPNG_DEFAULT_MAX_BYTES`. Encoding allocates a filtered image,
a compression buffer bounded by stored DEFLATE size, and the final PNG.

`bench_encode` and `bench_encode_zlibng` compare the encoder with libpng
at compression levels 1 and 6. They report median time and output bytes
for the same pixels, including allocations and checksums. Smaller files
and faster encodes are separate results. Palette and packed input images
expand to RGBA8 for both encoders in this comparison. Example:

```sh
./build/bench_encode local encode.json tests/bench/photo_rgb8.png
# Windows: add --cpu 2 before the tag to pin to logical CPU 2.
```

Nightly [dark charts](https://bojosos.github.io/ptpng/bench/) show
within-run decoder ratios first, followed by encoder speed and file-size
ratios against zlib-ng levels 1 and 6. Points use measurement dates and link
to their Actions run. Raw results include encoder time/size
and a measured memory-copy reference. GitHub-hosted jobs use fresh virtual
machines, so absolute throughput is not directly comparable across runs.
New benchmark artifacts record the CPU, OS and runner image. Ratios help
control that variation; they do not replace alternating old/new tests on
the same machine. Decoder measurements from the encoder release onward
use medians of 12 alternating rounds after warm-up; older chart points
used the best of 12 separate runs. The tooltip records this change.
The memory-copy reference is not a theoretical PNG
limit, since compression, filtering, checksums and pixel layout change
the work required. Its tooltip gives RGB8 and RGBA8 pixel equivalents by
dividing payload MB/s by three and four. Copying reads and writes an entire
raw image; a decoder reads compressed input, so this is not a strict bound.

The manual `Paired performance` workflow compares a full baseline commit SHA
with the current revision on all five runner platforms. It alternates nine
one-second timing pairs for 22 workloads: nine fixtures decoded and encoded,
plus palette-to-RGB, photo and graphics RGB-to-RGBA, and noise-to-RGB
conversions. Linux and Windows runs pin one logical CPU;
macOS remains OS scheduled. Artifacts contain raw pairs, output sizes,
machine details and a Markdown summary.

## Design: where the speed comes from

**Custom inflate** (`src/ptpng_inflate.c`)
- 64-bit bit reader, LSB-first; Huffman tables built with pre-reversed
  codes, so a decode is a single masked load `tbl[bitbuf & (TBL-1)]`;
  word refills keep 48..64 bits valid via whole-byte absorption.
- Flat root tables (litlen 10 bits, dist 8, code-length 7) with subtable
  arenas; entries precompute length/distance bases and extra-bit counts.
- Four-literal fast path: up to four root-table literals per refill, with
  bounded input/output access and a refill before a following match.
- Fixed blocks reuse their cached tables directly, avoiding 29 KiB of
  table copying per block.
- Match copies: 8x64-bit moves for dist>=64, 4x64-bit for dist>=32,
  64-byte periodic-pattern scratch for 1<=dist<32; overlap-safe tails.

**Checksums** (`src/ptpng_crc*.c`, `src/ptpng_avx2.c`, `src/ptpng_neon.c`):
CRC-32 uses runtime-detected PCLMUL folding on x86 and CRC instructions on
AArch64, with slicing-by-8 as the portable fallback. The PCLMUL implementation
is adapted from zlib-ng; its license and attribution are retained in the source.
Adler-32 uses AVX2, SSE2 or NEON with bounded vector sums. The large-input
NEON kernel processes 64-byte blocks and applies position weights once per
2,048-byte chunk; inputs below 512 bytes retain the small-input kernel.

**Filters** (`src/ptpng_filters.c`)
- Fused kernels: reconstruction reads the filtered bytes and writes the
  final compacted row in one pass (no separate memmove).
- `up`: AVX2/SSE2 wide add. `sub`: blocked one-pass prefix sums - an
  in-register log-doubling per 64-byte group with a cross-register
  pixel-carry chain. AVX2 and NEON dispatch also cover RGB and 16-bit RGB
  without copying the input row first. The x86 baseline uses SSE2 only.
- `paeth`: AVX2 processes four- and eight-byte pixels, and NEON processes
  eight-byte pixels, in parallel 16-bit lanes, retaining the previous decoded
  pixel in a register. GCC and MSVC ARM builds also use NEON for four-byte
  pixels; Clang favors scalar code for that stride. Other
  strides and CPUs use scalar predictors specialized per bytes per pixel.
- `avg`: scalar code carries the independent channel recurrences in
  registers where possible.

**Pipeline**: IDAT chunks are collected as references and concatenated
once (zero-copy for single-IDAT files); inflate writes directly into the
final scanline buffer; unfiltering compacts rows in place; Adam7 pass
extraction is a strided copy per row. No intermediate image copies.
Matching RGB8 and RGBA8 output formats reuse the reconstructed pixel
buffer, avoiding another allocation and full-image copy.

**Conversions** (`src/ptpng_avx2.c`, `src/ptpng_neon.c`): gray/gray-alpha/16-bit expansion
via pshufb butterflies, palette via AVX2 gather from a precombined
rgba table, and RGB8-to-RGBA8 via NEON structured loads and stores;
tRNS falls back to scalar.

**Encoder** (`src/ptpng_deflate.c`): long literal runs pack six codes per
bounded 64-bit store. Short tails use the existing bit writer; batching
preserves compression decisions and output bytes.

## Correctness

- `tests/compare_libpng.ps1`: all 104 libpng pngstest images x 3 output
  formats, byte-compared against a libpng reference build (312/312).
- `tests/compare_dir.ps1 tests\gen`: 205 generated images (from
  `tests/gen_matrix.py`: every color type x depth x interlace x all five
  filters, pass-boundary sizes, tRNS variants, multi-IDAT, stored /
  fixed-Huffman / RLE deflate blocks, every ancillary chunk type) -
  615/615 byte-exact.
- Inflate fuzz corpus: 114 randomized streams (sizes 1..70000, levels
  0-9, all zlib strategies) byte-exact vs zlib.
- Exhaustive Paeth predictor check: all 16.7M (a,b,c) byte triples.
- Unit tests for the checksums and SIMD filter kernels vs scalar.
- Metadata and malformed-stream regressions, mixed DEFLATE block types,
  decompression limits, filter tails and overlapping row buffers.

To rebuild libpng+zlib references: see `build.bat` comments in
`tests/compare_libpng.ps1` (expects `build\libpng`, `build\zlib`).

## Tools

- `build\ptpng_tool file.png [--native|--rgba8|--rgb8] [-o out.raw]
  [--info] [--bench N] [--noverify]` - decode/verify/benchmark CLI.
- `build\libpng_bench.exe` - same via libpng (reference, Windows).
- `bench_compare` / `bench_zlibng` - portable ptpng vs libpng(zlib) /
  libpng(zlib-ng) benchmarks with github-action-benchmark JSON output.
- `verify_suite` - portable whole-corpus byte-parity runner vs libpng.
- `build\inflate_test.exe a.z a.raw len` - inflate unit tester.
- `build\filters_test.exe`, `build\sums_test.exe` - kernel testers.
- `build\pmp.exe file.png [iters]` - poor-man's sampling profiler.

## CI / nightly performance

`.github/workflows/ci.yml` runs on every push: unit + parity tests and
a fuzz smoke on linux-x64 (gcc + clang, plus ASan+UBSan job), macOS
ARM64, Windows x64, Windows ARM64 and Linux ARM64.

`.github/workflows/fuzz.yml` adds Clang coverage-guided fuzzing with ASan
and UBSan on Linux x64 and ARM64. Three targets exercise PNG decoding
(native pixels checked against libpng when both decoders accept the input),
zlib-stream decompression (checked against zlib), and encoder round trips
(checked against libpng). Corpus discoveries are cached between runs;
logs, corpora and crash inputs are uploaded as artifacts. Pushes run each
target for 30 seconds, nightly runs for five minutes, and manual runs
accept 10-600 seconds per target. These are bounded campaigns, not proof
of complete coverage. Input size, output size and encoder dimensions are
limited; large-image and allocation-failure cases still need separate tests.

To run locally with a Unix Clang toolchain:

```sh
CC=clang cmake -S . -B build-fuzz -DPTPNG_BUILD_FUZZERS=ON -DPTPNG_WITH_ZLIB_NG=OFF
cmake --build build-fuzz --target fuzz_decode fuzz_inflate fuzz_encode
python3 tools/prepare_fuzz_corpus.py --output build-fuzz/corpus
build-fuzz/fuzz_decode build-fuzz/corpus/decode -dict=tools/png.dict -max_total_time=300
build-fuzz/fuzz_inflate build-fuzz/corpus/inflate -max_total_time=300
build-fuzz/fuzz_encode build-fuzz/corpus/encode -max_total_time=300
```

`.github/workflows/profile.yml` is a manual Linux x64/ARM64 profiling run.
It pins the workload to one logical CPU and saves machine details, timings,
supported hardware counters, `perf.data`, text reports and annotated assembly.
When a hosted VM does not expose hardware sampling, it tries software CPU
timer sampling and labels that fallback explicitly. Download the profile
artifacts from the workflow run; `summary.md` lists the hot functions.
An optional baseline commit builds a second executable for alternating,
same-CPU comparisons, saved in `paired.md` and `paired.json`.

`.github/workflows/nightly.yml` runs nightly: the full test matrix,
then benchmarks ptpng vs **libpng+zlib** and **libpng+zlib-ng** on
every platform, and pushes the accumulated results to the `gh-pages`
branch where github-action-benchmark renders per-platform time series
(each series labeled with the runner's detected CPU features).
