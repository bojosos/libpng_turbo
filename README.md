# ptpng — a maximum-speed single-threaded PNG decoder

ptpng decodes every valid PNG (all color types, bit depths 1/2/4/8/16,
Adam7 interlacing, tRNS, all standard ancillary chunks) and produces
**byte-exact libpng `png_read_image()` output**, while decoding 1.1-2.7x
faster than libpng 1.6 (zlib) on real content, single-threaded.

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
| graphic_pal8   | 2163 MB/s| 944 MB/s       | **2.3x**|
| photo_rgba8    | 89 MB/s  | 60 MB/s        | **1.5x**|
| photo_gray16   | 245 MB/s | 187 MB/s       | **1.3x**|
| photo_rgb8     | 258 MB/s | 206 MB/s       | **1.25x**|
| photo_gray8    | 323 MB/s | 281 MB/s       | **1.15x**|
| graphic_rgb8   | 430 MB/s | 405 MB/s       | 1.06x   |

RGBA8 mode: ptpng wins 4 of 6; libpng+zlib-ng's fused transforms edge
ahead on `photo_rgba8` (0.84x) and `graphic_rgb8` (0.94x).

## Building (MSVC x64)

    build.bat

Produces `build\ptpng_tool.exe` plus the test executables. The library
itself is `src/*.c` + `include/ptpng.h`; `src/ptpng_avx2.c` must be
compiled with `/arch:AVX2` (runtime-dispatched, SSE2 is the baseline).

## Building everywhere (CMake)

    cmake -S . -B build && cmake --build build --config Release && ctest --test-dir build -C Release

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

## Design: where the speed comes from

**Custom inflate** (`src/ptpng_inflate.c`)
- 64-bit bit reader, LSB-first; Huffman tables built with pre-reversed
  codes, so a decode is a single masked load `tbl[bitbuf & (TBL-1)]`;
  word refills keep 48..64 bits valid via whole-byte absorption.
- Flat root tables (litlen 10 bits, dist 8, code-length 7) with subtable
  arenas; entries precompute length/distance bases and extra-bit counts.
- Dual-literal fast path: two literals per refill, one bounds check.
- Match copies: 8x64-bit moves for dist>=64, 4x64-bit for dist>=32,
  64-byte periodic-pattern scratch for 1<=dist<32; overlap-safe tails.

**Checksums** (`src/ptpng_crc.c`): CRC-32 slicing-by-8; SSE2 adler32
with descending-weight `madd` blocks (2.3 ms / 30 MB).

**Filters** (`src/ptpng_filters.c`)
- Fused kernels: reconstruction reads the filtered bytes and writes the
  final compacted row in one pass (no separate memmove).
- `up`: AVX2/SSE2 wide add. `sub`: blocked one-pass prefix sums - an
  in-register log-doubling per 64-byte group with a cross-register
  pixel-carry chain (bpp 2/4/8), or scalar register chains (bpp 3/6).
- `paeth`/`avg`: the left-neighbor dependency is nonlinear, so these use
  scalar code specialized per bpp with the bpp interleaved recurrences
  carried in named locals (register chains; no store->load forwarding
  on the critical path) and a fully branchless predictor (setcc+cmov).
  The OOO engine overlaps the 2-4 independent chains; bpp=4 runs at
  ~4.7 cycles/byte.

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
