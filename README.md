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

The tables below are historical measurements from the original benchmark.
The benchmark now gives libpng a contiguous output allocation and includes
setup and end-of-file processing for both decoders. Rerun it before using
these ratios to compare the current code. See [PERFORMANCE.md](PERFORMANCE.md)
for the September 2026 changes and reproducible measurements. These results
do not establish a fastest-in-the-world claim.

Measured on an Intel i7-1355U under typical load (best of 3x15
interleaved runs, 3200x2400 images):

| image                | content          | ptpng   | libpng  | speedup |
|----------------------|------------------|---------|---------|---------|
| graphic_pal8         | flat graphics    | 3.1 ms  | 7.4 ms  | **2.4x**|
| photo_gray16         | photo, 16-bit    | 20.1 ms | 35.1 ms | **1.8x**|
| photo_rgb8_i1        | photo, interlace | ~30 ms  | ~50 ms  | **1.7x**|
| photo_rgb8           | photo            | 31.9 ms | 50.9 ms | **1.6x**|
| photo_gray8          | photo            | 16.3 ms | 26.6 ms | **1.6x**|
| photo_rgba8          | photo, paeth     | 93.5 ms | 111.4 ms| **1.2x**|
| graphic_rgb8         | match-heavy      | 16.3 ms | 15.9 ms | ~1.0x   |

RGBA8-conversion mode: 1.1-2.0x faster on most images; on one
synthetic match-heavy case (`graphic_rgb8`) libpng's fused
filler transform edges ahead by a few percent because ptpng converts
in a separate pass over the pixel data.

### vs libpng + zlib-ng

The nightly benchmark also runs against **libpng linked with
zlib-ng 2.2.4** (ZLIB_COMPAT), the strongest single-threaded
zlib-based reference. zlib-ng's faster inflate closes much of the
gap plain zlib leaves, but ptpng still wins native decode on every
image (i7-1355U, best-of-12):

| image          | ptpng    | libpng+zlib-ng | speedup |
|----------------|----------|----------------|---------|
| graphic_pal8   | 2163 MPix/s| 944 MPix/s   | **2.3x**|
| photo_rgba8    | 89 MPix/s  | 60 MPix/s    | **1.5x**|
| photo_gray16   | 245 MPix/s | 187 MPix/s   | **1.3x**|
| photo_rgb8     | 258 MPix/s | 206 MPix/s   | **1.25x**|
| photo_gray8    | 323 MPix/s | 281 MPix/s   | **1.15x**|
| graphic_rgb8   | 430 MPix/s | 405 MPix/s   | 1.06x   |

RGBA8 mode: ptpng wins 4 of 6; libpng+zlib-ng's fused transforms edge
ahead on `photo_rgba8` (0.84x) and `graphic_rgb8` (0.94x).

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
and faster encodes are separate results. Example:

```sh
./build/bench_encode local encode.json tests/bench/photo_rgb8.png
# Windows: add --cpu 2 before the tag to pin to logical CPU 2.
```

Nightly [dark charts](https://bojosos.github.io/libpng_turbo/bench/) show
within-run decoder ratios first. Raw results include encoder time/size
and a measured memory-copy reference. GitHub-hosted jobs use fresh virtual
machines, so absolute throughput is not directly comparable across runs.
New benchmark artifacts record the CPU, OS and runner image. Ratios help
control that variation; they do not replace alternating old/new tests on
the same machine. The memory-copy reference is not a theoretical PNG
limit, since compression, filtering, checksums and pixel layout change
the work required.

## Design: where the speed comes from

**Custom inflate** (`src/ptpng_inflate.c`)
- 64-bit bit reader, LSB-first; Huffman tables built with pre-reversed
  codes, so a decode is a single masked load `tbl[bitbuf & (TBL-1)]`;
  word refills keep 48..64 bits valid via whole-byte absorption.
- Flat root tables (litlen 10 bits, dist 8, code-length 7) with subtable
  arenas; entries precompute length/distance bases and extra-bit counts.
- Dual-literal fast path: two literals per refill, one bounds check.
- Fixed blocks reuse their cached tables directly, avoiding 29 KiB of
  table copying per block.
- Match copies: 8x64-bit moves for dist>=64, 4x64-bit for dist>=32,
  64-byte periodic-pattern scratch for 1<=dist<32; overlap-safe tails.

**Checksums** (`src/ptpng_crc.c`, `src/ptpng_avx2.c`, `src/ptpng_neon.c`):
CRC-32 slicing-by-8; AVX2, SSE2 and NEON Adler-32 with bounded vector sums.

**Filters** (`src/ptpng_filters.c`)
- Fused kernels: reconstruction reads the filtered bytes and writes the
  final compacted row in one pass (no separate memmove).
- `up`: AVX2/SSE2 wide add. `sub`: blocked one-pass prefix sums - an
  in-register log-doubling per 64-byte group with a cross-register
  pixel-carry chain. AVX2 and NEON dispatch also cover RGB and 16-bit RGB
  without copying the input row first. The x86 baseline uses SSE2 only.
- `paeth`: AVX2 dispatch processes four-byte pixels in parallel 16-bit
  lanes, retaining the previous decoded pixel in a register. Other
  strides and CPUs use scalar predictors specialized per bytes per pixel.
- `avg`: scalar code carries the independent channel recurrences in
  registers where possible.

**Pipeline**: IDAT chunks are collected as references and concatenated
once (zero-copy for single-IDAT files); inflate writes directly into the
final scanline buffer; unfiltering compacts rows in place; Adam7 pass
extraction is a strided copy per row. No intermediate image copies.

**Conversions** (`src/ptpng_avx2.c`): gray/gray-alpha/16-bit expansion
via pshufb butterflies, palette via AVX2 gather from a precombined
rgba table; tRNS falls back to scalar.

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

`.github/workflows/nightly.yml` runs nightly: the full test matrix,
then benchmarks ptpng vs **libpng+zlib** and **libpng+zlib-ng** on
every platform, and pushes the accumulated results to the `gh-pages`
branch where github-action-benchmark renders per-platform time series
(each series labeled with the runner's detected CPU features).
