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

Paeth and Average still use scalar recurrences. They remain candidates
for per-pixel SIMD on ARM and x86. CRC-32 still uses slicing-by-eight;
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
`/O2 /Ob2 /Zi` builds, pinned to logical CPU 4 at AboveNormal priority:

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
