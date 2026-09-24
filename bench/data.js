window.BENCHMARK_DATA = {
  "lastUpdate": 1790282498271,
  "repoUrl": "https://github.com/bojosos/libpng_turbo",
  "entries": {
    "ptpng vs libpng (nightly)": [
      {
        "commit": {
          "author": {
            "name": "Bozhidar Ivanchev Ivanov",
            "email": "bozhidar.ivanov@ad.chaos.com"
          },
          "committer": {
            "name": "Bozhidar Ivanchev Ivanov",
            "email": "bozhidar.ivanov@ad.chaos.com"
          },
          "id": "eed4e5764813d2dc30544a8a777a2f6c1fe2762f",
          "message": "Keep proven long-row filter paths and record cross-platform measurements",
          "timestamp": "2026-09-24T18:50:39Z",
          "url": "https://github.com/bojosos/libpng_turbo/commit/eed4e5764813d2dc30544a8a777a2f6c1fe2762f"
        },
        "date": 1790276285490,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "linux-arm64/ptpng-vs-libpng-zng/photo_rgb8 native",
            "value": 222.6,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "linux-arm64/libpng-zng/photo_rgb8 native",
            "value": 197.63,
            "unit": "MPix/s"
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng-zng/photo_rgb8 rgba8",
            "value": 192.3,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "linux-arm64/libpng-zng/photo_rgb8 rgba8",
            "value": 171.82,
            "unit": "MPix/s"
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng-zng/photo_rgba8 native",
            "value": 75.17,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "linux-arm64/libpng-zng/photo_rgba8 native",
            "value": 82.58,
            "unit": "MPix/s"
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng-zng/photo_rgba8 rgba8",
            "value": 71.08,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "linux-arm64/libpng-zng/photo_rgba8 rgba8",
            "value": 82.53,
            "unit": "MPix/s"
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng-zng/photo_gray8 native",
            "value": 349.54,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "linux-arm64/libpng-zng/photo_gray8 native",
            "value": 279.57,
            "unit": "MPix/s"
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng-zng/photo_gray8 rgba8",
            "value": 331.16,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "linux-arm64/libpng-zng/photo_gray8 rgba8",
            "value": 203.26,
            "unit": "MPix/s"
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng-zng/photo_gray16 native",
            "value": 359.85,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "linux-arm64/libpng-zng/photo_gray16 native",
            "value": 238.49,
            "unit": "MPix/s"
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng-zng/photo_gray16 rgba8",
            "value": 289.07,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "linux-arm64/libpng-zng/photo_gray16 rgba8",
            "value": 139.77,
            "unit": "MPix/s"
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng-zng/graphic_pal8 native",
            "value": 1961.06,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "linux-arm64/libpng-zng/graphic_pal8 native",
            "value": 1318.55,
            "unit": "MPix/s"
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng-zng/graphic_pal8 rgba8",
            "value": 627,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "linux-arm64/libpng-zng/graphic_pal8 rgba8",
            "value": 594.78,
            "unit": "MPix/s"
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng-zng/graphic_rgb8 native",
            "value": 424.16,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "linux-arm64/libpng-zng/graphic_rgb8 native",
            "value": 887.14,
            "unit": "MPix/s"
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng-zng/graphic_rgb8 rgba8",
            "value": 327.71,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "linux-arm64/libpng-zng/graphic_rgb8 rgba8",
            "value": 528.33,
            "unit": "MPix/s"
          },
          {
            "name": "linux-x64/ptpng-vs-libpng/photo_rgb8 native",
            "value": 241.51,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "linux-x64/libpng/photo_rgb8 native",
            "value": 148.75,
            "unit": "MPix/s"
          },
          {
            "name": "linux-x64/ptpng-vs-libpng/photo_rgb8 rgba8",
            "value": 232.15,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "linux-x64/libpng/photo_rgb8 rgba8",
            "value": 138.8,
            "unit": "MPix/s"
          },
          {
            "name": "linux-x64/ptpng-vs-libpng/photo_rgba8 native",
            "value": 83.15,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "linux-x64/libpng/photo_rgba8 native",
            "value": 64.9,
            "unit": "MPix/s"
          },
          {
            "name": "linux-x64/ptpng-vs-libpng/photo_rgba8 rgba8",
            "value": 80.64,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "linux-x64/libpng/photo_rgba8 rgba8",
            "value": 64.86,
            "unit": "MPix/s"
          },
          {
            "name": "linux-x64/ptpng-vs-libpng/photo_gray8 native",
            "value": 395.92,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "linux-x64/libpng/photo_gray8 native",
            "value": 297.23,
            "unit": "MPix/s"
          },
          {
            "name": "linux-x64/ptpng-vs-libpng/photo_gray8 rgba8",
            "value": 378.6,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "linux-x64/libpng/photo_gray8 rgba8",
            "value": 236.42,
            "unit": "MPix/s"
          },
          {
            "name": "linux-x64/ptpng-vs-libpng/photo_gray16 native",
            "value": 403.23,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "linux-x64/libpng/photo_gray16 native",
            "value": 213.99,
            "unit": "MPix/s"
          },
          {
            "name": "linux-x64/ptpng-vs-libpng/photo_gray16 rgba8",
            "value": 373.68,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "linux-x64/libpng/photo_gray16 rgba8",
            "value": 148.28,
            "unit": "MPix/s"
          },
          {
            "name": "linux-x64/ptpng-vs-libpng/graphic_pal8 native",
            "value": 2811.34,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "linux-x64/libpng/graphic_pal8 native",
            "value": 592.19,
            "unit": "MPix/s"
          },
          {
            "name": "linux-x64/ptpng-vs-libpng/graphic_pal8 rgba8",
            "value": 1409.13,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "linux-x64/libpng/graphic_pal8 rgba8",
            "value": 379.21,
            "unit": "MPix/s"
          },
          {
            "name": "linux-x64/ptpng-vs-libpng/graphic_rgb8 native",
            "value": 611.45,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "linux-x64/libpng/graphic_rgb8 native",
            "value": 160.32,
            "unit": "MPix/s"
          },
          {
            "name": "linux-x64/ptpng-vs-libpng/graphic_rgb8 rgba8",
            "value": 573.66,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "linux-x64/libpng/graphic_rgb8 rgba8",
            "value": 146.78,
            "unit": "MPix/s"
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng/photo_rgb8 native",
            "value": 253.62,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "windows-arm64/libpng/photo_rgb8 native",
            "value": 147.65,
            "unit": "MPix/s"
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng/photo_rgb8 rgba8",
            "value": 190.21,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "windows-arm64/libpng/photo_rgb8 rgba8",
            "value": 131.22,
            "unit": "MPix/s"
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng/photo_rgba8 native",
            "value": 80.79,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "windows-arm64/libpng/photo_rgba8 native",
            "value": 66.03,
            "unit": "MPix/s"
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng/photo_rgba8 rgba8",
            "value": 76.81,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "windows-arm64/libpng/photo_rgba8 rgba8",
            "value": 65.9,
            "unit": "MPix/s"
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng/photo_gray8 native",
            "value": 450.7,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "windows-arm64/libpng/photo_gray8 native",
            "value": 257.36,
            "unit": "MPix/s"
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng/photo_gray8 rgba8",
            "value": 349.36,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "windows-arm64/libpng/photo_gray8 rgba8",
            "value": 181,
            "unit": "MPix/s"
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng/photo_gray16 native",
            "value": 368.26,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "windows-arm64/libpng/photo_gray16 native",
            "value": 200.07,
            "unit": "MPix/s"
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng/photo_gray16 rgba8",
            "value": 261.07,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "windows-arm64/libpng/photo_gray16 rgba8",
            "value": 123.73,
            "unit": "MPix/s"
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng/graphic_pal8 native",
            "value": 1745.41,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "windows-arm64/libpng/graphic_pal8 native",
            "value": 442.51,
            "unit": "MPix/s"
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng/graphic_pal8 rgba8",
            "value": 476.05,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "windows-arm64/libpng/graphic_pal8 rgba8",
            "value": 295.96,
            "unit": "MPix/s"
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng/graphic_rgb8 native",
            "value": 388.88,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "windows-arm64/libpng/graphic_rgb8 native",
            "value": 155.21,
            "unit": "MPix/s"
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng/graphic_rgb8 rgba8",
            "value": 264.41,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "windows-arm64/libpng/graphic_rgb8 rgba8",
            "value": 136.93,
            "unit": "MPix/s"
          },
          {
            "name": "windows-x64/ptpng-vs-libpng-zng/photo_rgb8 native",
            "value": 197.49,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "windows-x64/libpng-zng/photo_rgb8 native",
            "value": 168.69,
            "unit": "MPix/s"
          },
          {
            "name": "windows-x64/ptpng-vs-libpng-zng/photo_rgb8 rgba8",
            "value": 171.49,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "windows-x64/libpng-zng/photo_rgb8 rgba8",
            "value": 144.23,
            "unit": "MPix/s"
          },
          {
            "name": "windows-x64/ptpng-vs-libpng-zng/photo_rgba8 native",
            "value": 62.19,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "windows-x64/libpng-zng/photo_rgba8 native",
            "value": 69.93,
            "unit": "MPix/s"
          },
          {
            "name": "windows-x64/ptpng-vs-libpng-zng/photo_rgba8 rgba8",
            "value": 59.09,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "windows-x64/libpng-zng/photo_rgba8 rgba8",
            "value": 69.73,
            "unit": "MPix/s"
          },
          {
            "name": "windows-x64/ptpng-vs-libpng-zng/photo_gray8 native",
            "value": 347.15,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "windows-x64/libpng-zng/photo_gray8 native",
            "value": 230.65,
            "unit": "MPix/s"
          },
          {
            "name": "windows-x64/ptpng-vs-libpng-zng/photo_gray8 rgba8",
            "value": 278.21,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "windows-x64/libpng-zng/photo_gray8 rgba8",
            "value": 156.56,
            "unit": "MPix/s"
          },
          {
            "name": "windows-x64/ptpng-vs-libpng-zng/photo_gray16 native",
            "value": 291.37,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "windows-x64/libpng-zng/photo_gray16 native",
            "value": 201.73,
            "unit": "MPix/s"
          },
          {
            "name": "windows-x64/ptpng-vs-libpng-zng/photo_gray16 rgba8",
            "value": 241.09,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "windows-x64/libpng-zng/photo_gray16 rgba8",
            "value": 117.45,
            "unit": "MPix/s"
          },
          {
            "name": "windows-x64/ptpng-vs-libpng-zng/graphic_pal8 native",
            "value": 1391.91,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "windows-x64/libpng-zng/graphic_pal8 native",
            "value": 1057.06,
            "unit": "MPix/s"
          },
          {
            "name": "windows-x64/ptpng-vs-libpng-zng/graphic_pal8 rgba8",
            "value": 579.56,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "windows-x64/libpng-zng/graphic_pal8 rgba8",
            "value": 359.38,
            "unit": "MPix/s"
          },
          {
            "name": "windows-x64/ptpng-vs-libpng-zng/graphic_rgb8 native",
            "value": 301.99,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "windows-x64/libpng-zng/graphic_rgb8 native",
            "value": 583.35,
            "unit": "MPix/s"
          },
          {
            "name": "windows-x64/ptpng-vs-libpng-zng/graphic_rgb8 rgba8",
            "value": 243.46,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "windows-x64/libpng-zng/graphic_rgb8 rgba8",
            "value": 362.15,
            "unit": "MPix/s"
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng/photo_rgb8 native",
            "value": 223.45,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "linux-arm64/libpng/photo_rgb8 native",
            "value": 136.75,
            "unit": "MPix/s"
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng/photo_rgb8 rgba8",
            "value": 193.21,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "linux-arm64/libpng/photo_rgb8 rgba8",
            "value": 123.83,
            "unit": "MPix/s"
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng/photo_rgba8 native",
            "value": 75.35,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "linux-arm64/libpng/photo_rgba8 native",
            "value": 61.95,
            "unit": "MPix/s"
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng/photo_rgba8 rgba8",
            "value": 71.31,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "linux-arm64/libpng/photo_rgba8 rgba8",
            "value": 61.95,
            "unit": "MPix/s"
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng/photo_gray8 native",
            "value": 350.78,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "linux-arm64/libpng/photo_gray8 native",
            "value": 244.71,
            "unit": "MPix/s"
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng/photo_gray8 rgba8",
            "value": 330.75,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "linux-arm64/libpng/photo_gray8 rgba8",
            "value": 184.81,
            "unit": "MPix/s"
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng/photo_gray16 native",
            "value": 357.88,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "linux-arm64/libpng/photo_gray16 native",
            "value": 190.25,
            "unit": "MPix/s"
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng/photo_gray16 rgba8",
            "value": 289.06,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "linux-arm64/libpng/photo_gray16 rgba8",
            "value": 121.71,
            "unit": "MPix/s"
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng/graphic_pal8 native",
            "value": 1960.23,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "linux-arm64/libpng/graphic_pal8 native",
            "value": 465.87,
            "unit": "MPix/s"
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng/graphic_pal8 rgba8",
            "value": 625.55,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "linux-arm64/libpng/graphic_pal8 rgba8",
            "value": 324.29,
            "unit": "MPix/s"
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng/graphic_rgb8 native",
            "value": 424.16,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "linux-arm64/libpng/graphic_rgb8 native",
            "value": 161.17,
            "unit": "MPix/s"
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng/graphic_rgb8 rgba8",
            "value": 326.94,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "linux-arm64/libpng/graphic_rgb8 rgba8",
            "value": 143.52,
            "unit": "MPix/s"
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng-zng/photo_rgb8 native",
            "value": 256.15,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "windows-arm64/libpng-zng/photo_rgb8 native",
            "value": 212.35,
            "unit": "MPix/s"
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng-zng/photo_rgb8 rgba8",
            "value": 193.98,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "windows-arm64/libpng-zng/photo_rgb8 rgba8",
            "value": 180.08,
            "unit": "MPix/s"
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng-zng/photo_rgba8 native",
            "value": 80.86,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "windows-arm64/libpng-zng/photo_rgba8 native",
            "value": 82.68,
            "unit": "MPix/s"
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng-zng/photo_rgba8 rgba8",
            "value": 76.73,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "windows-arm64/libpng-zng/photo_rgba8 rgba8",
            "value": 82.8,
            "unit": "MPix/s"
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng-zng/photo_gray8 native",
            "value": 448.15,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "windows-arm64/libpng-zng/photo_gray8 native",
            "value": 276.38,
            "unit": "MPix/s"
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng-zng/photo_gray8 rgba8",
            "value": 360.29,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "windows-arm64/libpng-zng/photo_gray8 rgba8",
            "value": 188.31,
            "unit": "MPix/s"
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng-zng/photo_gray16 native",
            "value": 374.85,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "windows-arm64/libpng-zng/photo_gray16 native",
            "value": 243.24,
            "unit": "MPix/s"
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng-zng/photo_gray16 rgba8",
            "value": 252.73,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "windows-arm64/libpng-zng/photo_gray16 rgba8",
            "value": 139.04,
            "unit": "MPix/s"
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng-zng/graphic_pal8 native",
            "value": 1692.82,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "windows-arm64/libpng-zng/graphic_pal8 native",
            "value": 1178.78,
            "unit": "MPix/s"
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng-zng/graphic_pal8 rgba8",
            "value": 486.04,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "windows-arm64/libpng-zng/graphic_pal8 rgba8",
            "value": 514.51,
            "unit": "MPix/s"
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng-zng/graphic_rgb8 native",
            "value": 382.45,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "windows-arm64/libpng-zng/graphic_rgb8 native",
            "value": 711.89,
            "unit": "MPix/s"
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng-zng/graphic_rgb8 rgba8",
            "value": 257.46,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "windows-arm64/libpng-zng/graphic_rgb8 rgba8",
            "value": 452.57,
            "unit": "MPix/s"
          },
          {
            "name": "linux-x64/ptpng-vs-libpng-zng/photo_rgb8 native",
            "value": 227.6,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "linux-x64/libpng-zng/photo_rgb8 native",
            "value": 227.94,
            "unit": "MPix/s"
          },
          {
            "name": "linux-x64/ptpng-vs-libpng-zng/photo_rgb8 rgba8",
            "value": 218.94,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "linux-x64/libpng-zng/photo_rgb8 rgba8",
            "value": 205.2,
            "unit": "MPix/s"
          },
          {
            "name": "linux-x64/ptpng-vs-libpng-zng/photo_rgba8 native",
            "value": 81.91,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "linux-x64/libpng-zng/photo_rgba8 native",
            "value": 87.24,
            "unit": "MPix/s"
          },
          {
            "name": "linux-x64/ptpng-vs-libpng-zng/photo_rgba8 rgba8",
            "value": 79.12,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "linux-x64/libpng-zng/photo_rgba8 rgba8",
            "value": 87.34,
            "unit": "MPix/s"
          },
          {
            "name": "linux-x64/ptpng-vs-libpng-zng/photo_gray8 native",
            "value": 378.4,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "linux-x64/libpng-zng/photo_gray8 native",
            "value": 352.76,
            "unit": "MPix/s"
          },
          {
            "name": "linux-x64/ptpng-vs-libpng-zng/photo_gray8 rgba8",
            "value": 362.63,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "linux-x64/libpng-zng/photo_gray8 rgba8",
            "value": 269.54,
            "unit": "MPix/s"
          },
          {
            "name": "linux-x64/ptpng-vs-libpng-zng/photo_gray16 native",
            "value": 383.96,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "linux-x64/libpng-zng/photo_gray16 native",
            "value": 276.08,
            "unit": "MPix/s"
          },
          {
            "name": "linux-x64/ptpng-vs-libpng-zng/photo_gray16 rgba8",
            "value": 370.98,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "linux-x64/libpng-zng/photo_gray16 rgba8",
            "value": 178.65,
            "unit": "MPix/s"
          },
          {
            "name": "linux-x64/ptpng-vs-libpng-zng/graphic_pal8 native",
            "value": 2800.72,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "linux-x64/libpng-zng/graphic_pal8 native",
            "value": 3101.54,
            "unit": "MPix/s"
          },
          {
            "name": "linux-x64/ptpng-vs-libpng-zng/graphic_pal8 rgba8",
            "value": 1409.7,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "linux-x64/libpng-zng/graphic_pal8 rgba8",
            "value": 802.4,
            "unit": "MPix/s"
          },
          {
            "name": "linux-x64/ptpng-vs-libpng-zng/graphic_rgb8 native",
            "value": 620.32,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "linux-x64/libpng-zng/graphic_rgb8 native",
            "value": 878.71,
            "unit": "MPix/s"
          },
          {
            "name": "linux-x64/ptpng-vs-libpng-zng/graphic_rgb8 rgba8",
            "value": 565.28,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "linux-x64/libpng-zng/graphic_rgb8 rgba8",
            "value": 617.61,
            "unit": "MPix/s"
          },
          {
            "name": "windows-x64/ptpng-vs-libpng/photo_rgb8 native",
            "value": 196.45,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "windows-x64/libpng/photo_rgb8 native",
            "value": 109.11,
            "unit": "MPix/s"
          },
          {
            "name": "windows-x64/ptpng-vs-libpng/photo_rgb8 rgba8",
            "value": 170.97,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "windows-x64/libpng/photo_rgb8 rgba8",
            "value": 98.02,
            "unit": "MPix/s"
          },
          {
            "name": "windows-x64/ptpng-vs-libpng/photo_rgba8 native",
            "value": 62.27,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "windows-x64/libpng/photo_rgba8 native",
            "value": 51.94,
            "unit": "MPix/s"
          },
          {
            "name": "windows-x64/ptpng-vs-libpng/photo_rgba8 rgba8",
            "value": 59.21,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "windows-x64/libpng/photo_rgba8 rgba8",
            "value": 51.84,
            "unit": "MPix/s"
          },
          {
            "name": "windows-x64/ptpng-vs-libpng/photo_gray8 native",
            "value": 347.27,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "windows-x64/libpng/photo_gray8 native",
            "value": 200.92,
            "unit": "MPix/s"
          },
          {
            "name": "windows-x64/ptpng-vs-libpng/photo_gray8 rgba8",
            "value": 280.55,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "windows-x64/libpng/photo_gray8 rgba8",
            "value": 141.66,
            "unit": "MPix/s"
          },
          {
            "name": "windows-x64/ptpng-vs-libpng/photo_gray16 native",
            "value": 291.87,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "windows-x64/libpng/photo_gray16 native",
            "value": 159.72,
            "unit": "MPix/s"
          },
          {
            "name": "windows-x64/ptpng-vs-libpng/photo_gray16 rgba8",
            "value": 239.22,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "windows-x64/libpng/photo_gray16 rgba8",
            "value": 101.49,
            "unit": "MPix/s"
          },
          {
            "name": "windows-x64/ptpng-vs-libpng/graphic_pal8 native",
            "value": 1388.99,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "windows-x64/libpng/graphic_pal8 native",
            "value": 337.19,
            "unit": "MPix/s"
          },
          {
            "name": "windows-x64/ptpng-vs-libpng/graphic_pal8 rgba8",
            "value": 577.97,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "windows-x64/libpng/graphic_pal8 rgba8",
            "value": 208.87,
            "unit": "MPix/s"
          },
          {
            "name": "windows-x64/ptpng-vs-libpng/graphic_rgb8 native",
            "value": 304.09,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "windows-x64/libpng/graphic_rgb8 native",
            "value": 113.43,
            "unit": "MPix/s"
          },
          {
            "name": "windows-x64/ptpng-vs-libpng/graphic_rgb8 rgba8",
            "value": 245.13,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "windows-x64/libpng/graphic_rgb8 rgba8",
            "value": 98.08,
            "unit": "MPix/s"
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng/photo_rgb8 native",
            "value": 221.8,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "macos-arm64/libpng/photo_rgb8 native",
            "value": 113.47,
            "unit": "MPix/s"
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng/photo_rgb8 rgba8",
            "value": 182.22,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "macos-arm64/libpng/photo_rgb8 rgba8",
            "value": 106.7,
            "unit": "MPix/s"
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng/photo_rgba8 native",
            "value": 67.21,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "macos-arm64/libpng/photo_rgba8 native",
            "value": 53.8,
            "unit": "MPix/s"
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng/photo_rgba8 rgba8",
            "value": 56.21,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "macos-arm64/libpng/photo_rgba8 rgba8",
            "value": 53.35,
            "unit": "MPix/s"
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng/photo_gray8 native",
            "value": 362.28,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "macos-arm64/libpng/photo_gray8 native",
            "value": 181.87,
            "unit": "MPix/s"
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng/photo_gray8 rgba8",
            "value": 263.05,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "macos-arm64/libpng/photo_gray8 rgba8",
            "value": 141.68,
            "unit": "MPix/s"
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng/photo_gray16 native",
            "value": 260.95,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "macos-arm64/libpng/photo_gray16 native",
            "value": 134.3,
            "unit": "MPix/s"
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng/photo_gray16 rgba8",
            "value": 194.2,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "macos-arm64/libpng/photo_gray16 rgba8",
            "value": 95.08,
            "unit": "MPix/s"
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng/graphic_pal8 native",
            "value": 2039.3,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "macos-arm64/libpng/graphic_pal8 native",
            "value": 487.53,
            "unit": "MPix/s"
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng/graphic_pal8 rgba8",
            "value": 549.24,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "macos-arm64/libpng/graphic_pal8 rgba8",
            "value": 297.13,
            "unit": "MPix/s"
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng/graphic_rgb8 native",
            "value": 331.84,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "macos-arm64/libpng/graphic_rgb8 native",
            "value": 131.96,
            "unit": "MPix/s"
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng/graphic_rgb8 rgba8",
            "value": 275.81,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "macos-arm64/libpng/graphic_rgb8 rgba8",
            "value": 129.15,
            "unit": "MPix/s"
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng-zng/photo_rgb8 native",
            "value": 250.95,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "macos-arm64/libpng-zng/photo_rgb8 native",
            "value": 186.72,
            "unit": "MPix/s"
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng-zng/photo_rgb8 rgba8",
            "value": 184.9,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "macos-arm64/libpng-zng/photo_rgb8 rgba8",
            "value": 150.55,
            "unit": "MPix/s"
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng-zng/photo_rgba8 native",
            "value": 68.28,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "macos-arm64/libpng-zng/photo_rgba8 native",
            "value": 58.77,
            "unit": "MPix/s"
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng-zng/photo_rgba8 rgba8",
            "value": 65.07,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "macos-arm64/libpng-zng/photo_rgba8 rgba8",
            "value": 56.58,
            "unit": "MPix/s"
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng-zng/photo_gray8 native",
            "value": 314.64,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "macos-arm64/libpng-zng/photo_gray8 native",
            "value": 227.97,
            "unit": "MPix/s"
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng-zng/photo_gray8 rgba8",
            "value": 248.49,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "macos-arm64/libpng-zng/photo_gray8 rgba8",
            "value": 169.51,
            "unit": "MPix/s"
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng-zng/photo_gray16 native",
            "value": 302.64,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "macos-arm64/libpng-zng/photo_gray16 native",
            "value": 157.1,
            "unit": "MPix/s"
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng-zng/photo_gray16 rgba8",
            "value": 212.21,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "macos-arm64/libpng-zng/photo_gray16 rgba8",
            "value": 109.34,
            "unit": "MPix/s"
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng-zng/graphic_pal8 native",
            "value": 1847.93,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "macos-arm64/libpng-zng/graphic_pal8 native",
            "value": 1574.74,
            "unit": "MPix/s"
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng-zng/graphic_pal8 rgba8",
            "value": 569.14,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "macos-arm64/libpng-zng/graphic_pal8 rgba8",
            "value": 577.23,
            "unit": "MPix/s"
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng-zng/graphic_rgb8 native",
            "value": 372.22,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "macos-arm64/libpng-zng/graphic_rgb8 native",
            "value": 627.86,
            "unit": "MPix/s"
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng-zng/graphic_rgb8 rgba8",
            "value": 255.51,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "macos-arm64/libpng-zng/graphic_rgb8 rgba8",
            "value": 361.24,
            "unit": "MPix/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bozhidar Ivanchev Ivanov",
            "email": "bozhidar.ivanov@ad.chaos.com"
          },
          "committer": {
            "name": "Bozhidar Ivanchev Ivanov",
            "email": "bozhidar.ivanov@ad.chaos.com"
          },
          "id": "77cbb8b55a86fca60d00508650eb57fd0ac671c0",
          "message": "Optimize profiled inflate runs, Paeth prediction, and AVX2 Adler32",
          "timestamp": "2026-09-24T19:38:46Z",
          "url": "https://github.com/bojosos/libpng_turbo/commit/77cbb8b55a86fca60d00508650eb57fd0ac671c0"
        },
        "date": 1790279034560,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "linux-arm64/ptpng-vs-libpng-zng/photo_rgb8 native",
            "value": 224.42,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "linux-arm64/libpng-zng/photo_rgb8 native",
            "value": 197.47,
            "unit": "MPix/s"
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng-zng/photo_rgb8 rgba8",
            "value": 193.64,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "linux-arm64/libpng-zng/photo_rgb8 rgba8",
            "value": 171.84,
            "unit": "MPix/s"
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng-zng/photo_rgba8 native",
            "value": 79.58,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "linux-arm64/libpng-zng/photo_rgba8 native",
            "value": 82.62,
            "unit": "MPix/s"
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng-zng/photo_rgba8 rgba8",
            "value": 75.1,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "linux-arm64/libpng-zng/photo_rgba8 rgba8",
            "value": 82.67,
            "unit": "MPix/s"
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng-zng/photo_gray8 native",
            "value": 351.55,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "linux-arm64/libpng-zng/photo_gray8 native",
            "value": 280.52,
            "unit": "MPix/s"
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng-zng/photo_gray8 rgba8",
            "value": 332.06,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "linux-arm64/libpng-zng/photo_gray8 rgba8",
            "value": 203.48,
            "unit": "MPix/s"
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng-zng/photo_gray16 native",
            "value": 359.13,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "linux-arm64/libpng-zng/photo_gray16 native",
            "value": 238.75,
            "unit": "MPix/s"
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng-zng/photo_gray16 rgba8",
            "value": 289.41,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "linux-arm64/libpng-zng/photo_gray16 rgba8",
            "value": 140.08,
            "unit": "MPix/s"
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng-zng/graphic_pal8 native",
            "value": 5443.8,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "linux-arm64/libpng-zng/graphic_pal8 native",
            "value": 1318.15,
            "unit": "MPix/s"
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng-zng/graphic_pal8 rgba8",
            "value": 784.09,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "linux-arm64/libpng-zng/graphic_pal8 rgba8",
            "value": 592.2,
            "unit": "MPix/s"
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng-zng/graphic_rgb8 native",
            "value": 902.35,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "linux-arm64/libpng-zng/graphic_rgb8 native",
            "value": 889.65,
            "unit": "MPix/s"
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng-zng/graphic_rgb8 rgba8",
            "value": 545.55,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "linux-arm64/libpng-zng/graphic_rgb8 rgba8",
            "value": 533.74,
            "unit": "MPix/s"
          },
          {
            "name": "linux-x64/ptpng-vs-libpng/photo_rgb8 native",
            "value": 242,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "linux-x64/libpng/photo_rgb8 native",
            "value": 149.6,
            "unit": "MPix/s"
          },
          {
            "name": "linux-x64/ptpng-vs-libpng/photo_rgb8 rgba8",
            "value": 231.43,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "linux-x64/libpng/photo_rgb8 rgba8",
            "value": 138.91,
            "unit": "MPix/s"
          },
          {
            "name": "linux-x64/ptpng-vs-libpng/photo_rgba8 native",
            "value": 89.05,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "linux-x64/libpng/photo_rgba8 native",
            "value": 65.26,
            "unit": "MPix/s"
          },
          {
            "name": "linux-x64/ptpng-vs-libpng/photo_rgba8 rgba8",
            "value": 86.94,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "linux-x64/libpng/photo_rgba8 rgba8",
            "value": 65.19,
            "unit": "MPix/s"
          },
          {
            "name": "linux-x64/ptpng-vs-libpng/photo_gray8 native",
            "value": 404.95,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "linux-x64/libpng/photo_gray8 native",
            "value": 299.03,
            "unit": "MPix/s"
          },
          {
            "name": "linux-x64/ptpng-vs-libpng/photo_gray8 rgba8",
            "value": 382.32,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "linux-x64/libpng/photo_gray8 rgba8",
            "value": 237,
            "unit": "MPix/s"
          },
          {
            "name": "linux-x64/ptpng-vs-libpng/photo_gray16 native",
            "value": 420.98,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "linux-x64/libpng/photo_gray16 native",
            "value": 214.97,
            "unit": "MPix/s"
          },
          {
            "name": "linux-x64/ptpng-vs-libpng/photo_gray16 rgba8",
            "value": 398.25,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "linux-x64/libpng/photo_gray16 rgba8",
            "value": 151.4,
            "unit": "MPix/s"
          },
          {
            "name": "linux-x64/ptpng-vs-libpng/graphic_pal8 native",
            "value": 10849.28,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "linux-x64/libpng/graphic_pal8 native",
            "value": 600.62,
            "unit": "MPix/s"
          },
          {
            "name": "linux-x64/ptpng-vs-libpng/graphic_pal8 rgba8",
            "value": 2341.27,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "linux-x64/libpng/graphic_pal8 rgba8",
            "value": 393.09,
            "unit": "MPix/s"
          },
          {
            "name": "linux-x64/ptpng-vs-libpng/graphic_rgb8 native",
            "value": 1561.91,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "linux-x64/libpng/graphic_rgb8 native",
            "value": 162.61,
            "unit": "MPix/s"
          },
          {
            "name": "linux-x64/ptpng-vs-libpng/graphic_rgb8 rgba8",
            "value": 1173.06,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "linux-x64/libpng/graphic_rgb8 rgba8",
            "value": 150.1,
            "unit": "MPix/s"
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng/photo_rgb8 native",
            "value": 243.64,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "windows-arm64/libpng/photo_rgb8 native",
            "value": 146.84,
            "unit": "MPix/s"
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng/photo_rgb8 rgba8",
            "value": 185.68,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "windows-arm64/libpng/photo_rgb8 rgba8",
            "value": 130.44,
            "unit": "MPix/s"
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng/photo_rgba8 native",
            "value": 89.52,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "windows-arm64/libpng/photo_rgba8 native",
            "value": 65.81,
            "unit": "MPix/s"
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng/photo_rgba8 rgba8",
            "value": 84.65,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "windows-arm64/libpng/photo_rgba8 rgba8",
            "value": 65.93,
            "unit": "MPix/s"
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng/photo_gray8 native",
            "value": 434.79,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "windows-arm64/libpng/photo_gray8 native",
            "value": 257.16,
            "unit": "MPix/s"
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng/photo_gray8 rgba8",
            "value": 344.07,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "windows-arm64/libpng/photo_gray8 rgba8",
            "value": 179,
            "unit": "MPix/s"
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng/photo_gray16 native",
            "value": 362.39,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "windows-arm64/libpng/photo_gray16 native",
            "value": 201.25,
            "unit": "MPix/s"
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng/photo_gray16 rgba8",
            "value": 250.35,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "windows-arm64/libpng/photo_gray16 rgba8",
            "value": 123.46,
            "unit": "MPix/s"
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng/graphic_pal8 native",
            "value": 3761.39,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "windows-arm64/libpng/graphic_pal8 native",
            "value": 442.49,
            "unit": "MPix/s"
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng/graphic_pal8 rgba8",
            "value": 552.14,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "windows-arm64/libpng/graphic_pal8 rgba8",
            "value": 297,
            "unit": "MPix/s"
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng/graphic_rgb8 native",
            "value": 788.21,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "windows-arm64/libpng/graphic_rgb8 native",
            "value": 154.79,
            "unit": "MPix/s"
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng/graphic_rgb8 rgba8",
            "value": 389.86,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "windows-arm64/libpng/graphic_rgb8 rgba8",
            "value": 136.73,
            "unit": "MPix/s"
          },
          {
            "name": "windows-x64/ptpng-vs-libpng-zng/photo_rgb8 native",
            "value": 239.34,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "windows-x64/libpng-zng/photo_rgb8 native",
            "value": 205.75,
            "unit": "MPix/s"
          },
          {
            "name": "windows-x64/ptpng-vs-libpng-zng/photo_rgb8 rgba8",
            "value": 204.29,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "windows-x64/libpng-zng/photo_rgb8 rgba8",
            "value": 174.67,
            "unit": "MPix/s"
          },
          {
            "name": "windows-x64/ptpng-vs-libpng-zng/photo_rgba8 native",
            "value": 82.04,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "windows-x64/libpng-zng/photo_rgba8 native",
            "value": 85.08,
            "unit": "MPix/s"
          },
          {
            "name": "windows-x64/ptpng-vs-libpng-zng/photo_rgba8 rgba8",
            "value": 77.59,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "windows-x64/libpng-zng/photo_rgba8 rgba8",
            "value": 85.24,
            "unit": "MPix/s"
          },
          {
            "name": "windows-x64/ptpng-vs-libpng-zng/photo_gray8 native",
            "value": 400.78,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "windows-x64/libpng-zng/photo_gray8 native",
            "value": 273.02,
            "unit": "MPix/s"
          },
          {
            "name": "windows-x64/ptpng-vs-libpng-zng/photo_gray8 rgba8",
            "value": 316.64,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "windows-x64/libpng-zng/photo_gray8 rgba8",
            "value": 184.18,
            "unit": "MPix/s"
          },
          {
            "name": "windows-x64/ptpng-vs-libpng-zng/photo_gray16 native",
            "value": 345.09,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "windows-x64/libpng-zng/photo_gray16 native",
            "value": 242.53,
            "unit": "MPix/s"
          },
          {
            "name": "windows-x64/ptpng-vs-libpng-zng/photo_gray16 rgba8",
            "value": 279.84,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "windows-x64/libpng-zng/photo_gray16 rgba8",
            "value": 125.84,
            "unit": "MPix/s"
          },
          {
            "name": "windows-x64/ptpng-vs-libpng-zng/graphic_pal8 native",
            "value": 4711.37,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "windows-x64/libpng-zng/graphic_pal8 native",
            "value": 1228.27,
            "unit": "MPix/s"
          },
          {
            "name": "windows-x64/ptpng-vs-libpng-zng/graphic_pal8 rgba8",
            "value": 1007.29,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "windows-x64/libpng-zng/graphic_pal8 rgba8",
            "value": 414.73,
            "unit": "MPix/s"
          },
          {
            "name": "windows-x64/ptpng-vs-libpng-zng/graphic_rgb8 native",
            "value": 791.92,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "windows-x64/libpng-zng/graphic_rgb8 native",
            "value": 761.95,
            "unit": "MPix/s"
          },
          {
            "name": "windows-x64/ptpng-vs-libpng-zng/graphic_rgb8 rgba8",
            "value": 511.26,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "windows-x64/libpng-zng/graphic_rgb8 rgba8",
            "value": 462.26,
            "unit": "MPix/s"
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng/photo_rgb8 native",
            "value": 224.72,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "linux-arm64/libpng/photo_rgb8 native",
            "value": 136.71,
            "unit": "MPix/s"
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng/photo_rgb8 rgba8",
            "value": 194.29,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "linux-arm64/libpng/photo_rgb8 rgba8",
            "value": 123.65,
            "unit": "MPix/s"
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng/photo_rgba8 native",
            "value": 79.58,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "linux-arm64/libpng/photo_rgba8 native",
            "value": 61.97,
            "unit": "MPix/s"
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng/photo_rgba8 rgba8",
            "value": 75.41,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "linux-arm64/libpng/photo_rgba8 rgba8",
            "value": 61.94,
            "unit": "MPix/s"
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng/photo_gray8 native",
            "value": 351.76,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "linux-arm64/libpng/photo_gray8 native",
            "value": 245.87,
            "unit": "MPix/s"
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng/photo_gray8 rgba8",
            "value": 331.84,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "linux-arm64/libpng/photo_gray8 rgba8",
            "value": 184.97,
            "unit": "MPix/s"
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng/photo_gray16 native",
            "value": 359.1,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "linux-arm64/libpng/photo_gray16 native",
            "value": 190.19,
            "unit": "MPix/s"
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng/photo_gray16 rgba8",
            "value": 288.67,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "linux-arm64/libpng/photo_gray16 rgba8",
            "value": 121.79,
            "unit": "MPix/s"
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng/graphic_pal8 native",
            "value": 5424.36,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "linux-arm64/libpng/graphic_pal8 native",
            "value": 465.92,
            "unit": "MPix/s"
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng/graphic_pal8 rgba8",
            "value": 789.13,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "linux-arm64/libpng/graphic_pal8 rgba8",
            "value": 325.54,
            "unit": "MPix/s"
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng/graphic_rgb8 native",
            "value": 918.09,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "linux-arm64/libpng/graphic_rgb8 native",
            "value": 161.03,
            "unit": "MPix/s"
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng/graphic_rgb8 rgba8",
            "value": 556.98,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "linux-arm64/libpng/graphic_rgb8 rgba8",
            "value": 143.42,
            "unit": "MPix/s"
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng-zng/photo_rgb8 native",
            "value": 245.55,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "windows-arm64/libpng-zng/photo_rgb8 native",
            "value": 211.26,
            "unit": "MPix/s"
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng-zng/photo_rgb8 rgba8",
            "value": 187.64,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "windows-arm64/libpng-zng/photo_rgb8 rgba8",
            "value": 178.83,
            "unit": "MPix/s"
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng-zng/photo_rgba8 native",
            "value": 89.67,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "windows-arm64/libpng-zng/photo_rgba8 native",
            "value": 81.83,
            "unit": "MPix/s"
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng-zng/photo_rgba8 rgba8",
            "value": 84.71,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "windows-arm64/libpng-zng/photo_rgba8 rgba8",
            "value": 81.87,
            "unit": "MPix/s"
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng-zng/photo_gray8 native",
            "value": 434.89,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "windows-arm64/libpng-zng/photo_gray8 native",
            "value": 273.89,
            "unit": "MPix/s"
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng-zng/photo_gray8 rgba8",
            "value": 344,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "windows-arm64/libpng-zng/photo_gray8 rgba8",
            "value": 187.25,
            "unit": "MPix/s"
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng-zng/photo_gray16 native",
            "value": 359.25,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "windows-arm64/libpng-zng/photo_gray16 native",
            "value": 240.29,
            "unit": "MPix/s"
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng-zng/photo_gray16 rgba8",
            "value": 250.84,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "windows-arm64/libpng-zng/photo_gray16 rgba8",
            "value": 137.45,
            "unit": "MPix/s"
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng-zng/graphic_pal8 native",
            "value": 3795.03,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "windows-arm64/libpng-zng/graphic_pal8 native",
            "value": 1174.29,
            "unit": "MPix/s"
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng-zng/graphic_pal8 rgba8",
            "value": 553.74,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "windows-arm64/libpng-zng/graphic_pal8 rgba8",
            "value": 507.36,
            "unit": "MPix/s"
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng-zng/graphic_rgb8 native",
            "value": 788.14,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "windows-arm64/libpng-zng/graphic_rgb8 native",
            "value": 717.64,
            "unit": "MPix/s"
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng-zng/graphic_rgb8 rgba8",
            "value": 393.62,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "windows-arm64/libpng-zng/graphic_rgb8 rgba8",
            "value": 437.9,
            "unit": "MPix/s"
          },
          {
            "name": "linux-x64/ptpng-vs-libpng-zng/photo_rgb8 native",
            "value": 244.95,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "linux-x64/libpng-zng/photo_rgb8 native",
            "value": 248.84,
            "unit": "MPix/s"
          },
          {
            "name": "linux-x64/ptpng-vs-libpng-zng/photo_rgb8 rgba8",
            "value": 236.24,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "linux-x64/libpng-zng/photo_rgb8 rgba8",
            "value": 222.73,
            "unit": "MPix/s"
          },
          {
            "name": "linux-x64/ptpng-vs-libpng-zng/photo_rgba8 native",
            "value": 87.7,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "linux-x64/libpng-zng/photo_rgba8 native",
            "value": 92.49,
            "unit": "MPix/s"
          },
          {
            "name": "linux-x64/ptpng-vs-libpng-zng/photo_rgba8 rgba8",
            "value": 84.52,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "linux-x64/libpng-zng/photo_rgba8 rgba8",
            "value": 92.74,
            "unit": "MPix/s"
          },
          {
            "name": "linux-x64/ptpng-vs-libpng-zng/photo_gray8 native",
            "value": 401.34,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "linux-x64/libpng-zng/photo_gray8 native",
            "value": 377.57,
            "unit": "MPix/s"
          },
          {
            "name": "linux-x64/ptpng-vs-libpng-zng/photo_gray8 rgba8",
            "value": 383.71,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "linux-x64/libpng-zng/photo_gray8 rgba8",
            "value": 282.32,
            "unit": "MPix/s"
          },
          {
            "name": "linux-x64/ptpng-vs-libpng-zng/photo_gray16 native",
            "value": 411.58,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "linux-x64/libpng-zng/photo_gray16 native",
            "value": 291.17,
            "unit": "MPix/s"
          },
          {
            "name": "linux-x64/ptpng-vs-libpng-zng/photo_gray16 rgba8",
            "value": 387.72,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "linux-x64/libpng-zng/photo_gray16 rgba8",
            "value": 184.86,
            "unit": "MPix/s"
          },
          {
            "name": "linux-x64/ptpng-vs-libpng-zng/graphic_pal8 native",
            "value": 10526.98,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "linux-x64/libpng-zng/graphic_pal8 native",
            "value": 3143.49,
            "unit": "MPix/s"
          },
          {
            "name": "linux-x64/ptpng-vs-libpng-zng/graphic_pal8 rgba8",
            "value": 2276.23,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "linux-x64/libpng-zng/graphic_pal8 rgba8",
            "value": 782.02,
            "unit": "MPix/s"
          },
          {
            "name": "linux-x64/ptpng-vs-libpng-zng/graphic_rgb8 native",
            "value": 1464,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "linux-x64/libpng-zng/graphic_rgb8 native",
            "value": 919.71,
            "unit": "MPix/s"
          },
          {
            "name": "linux-x64/ptpng-vs-libpng-zng/graphic_rgb8 rgba8",
            "value": 1284.01,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "linux-x64/libpng-zng/graphic_rgb8 rgba8",
            "value": 644.12,
            "unit": "MPix/s"
          },
          {
            "name": "windows-x64/ptpng-vs-libpng/photo_rgb8 native",
            "value": 239.44,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "windows-x64/libpng/photo_rgb8 native",
            "value": 128.22,
            "unit": "MPix/s"
          },
          {
            "name": "windows-x64/ptpng-vs-libpng/photo_rgb8 rgba8",
            "value": 204.64,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "windows-x64/libpng/photo_rgb8 rgba8",
            "value": 115.37,
            "unit": "MPix/s"
          },
          {
            "name": "windows-x64/ptpng-vs-libpng/photo_rgba8 native",
            "value": 82.01,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "windows-x64/libpng/photo_rgba8 native",
            "value": 61.62,
            "unit": "MPix/s"
          },
          {
            "name": "windows-x64/ptpng-vs-libpng/photo_rgba8 rgba8",
            "value": 77.59,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "windows-x64/libpng/photo_rgba8 rgba8",
            "value": 61.7,
            "unit": "MPix/s"
          },
          {
            "name": "windows-x64/ptpng-vs-libpng/photo_gray8 native",
            "value": 406.38,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "windows-x64/libpng/photo_gray8 native",
            "value": 230.71,
            "unit": "MPix/s"
          },
          {
            "name": "windows-x64/ptpng-vs-libpng/photo_gray8 rgba8",
            "value": 318.69,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "windows-x64/libpng/photo_gray8 rgba8",
            "value": 163.85,
            "unit": "MPix/s"
          },
          {
            "name": "windows-x64/ptpng-vs-libpng/photo_gray16 native",
            "value": 351.65,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "windows-x64/libpng/photo_gray16 native",
            "value": 183.21,
            "unit": "MPix/s"
          },
          {
            "name": "windows-x64/ptpng-vs-libpng/photo_gray16 rgba8",
            "value": 277.83,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "windows-x64/libpng/photo_gray16 rgba8",
            "value": 107.8,
            "unit": "MPix/s"
          },
          {
            "name": "windows-x64/ptpng-vs-libpng/graphic_pal8 native",
            "value": 4702.14,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "windows-x64/libpng/graphic_pal8 native",
            "value": 413.03,
            "unit": "MPix/s"
          },
          {
            "name": "windows-x64/ptpng-vs-libpng/graphic_pal8 rgba8",
            "value": 1010.02,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "windows-x64/libpng/graphic_pal8 rgba8",
            "value": 250.07,
            "unit": "MPix/s"
          },
          {
            "name": "windows-x64/ptpng-vs-libpng/graphic_rgb8 native",
            "value": 812.1,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "windows-x64/libpng/graphic_rgb8 native",
            "value": 141.31,
            "unit": "MPix/s"
          },
          {
            "name": "windows-x64/ptpng-vs-libpng/graphic_rgb8 rgba8",
            "value": 520.37,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "windows-x64/libpng/graphic_rgb8 rgba8",
            "value": 126.1,
            "unit": "MPix/s"
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng/photo_rgb8 native",
            "value": 255.37,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "macos-arm64/libpng/photo_rgb8 native",
            "value": 126.27,
            "unit": "MPix/s"
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng/photo_rgb8 rgba8",
            "value": 195.16,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "macos-arm64/libpng/photo_rgb8 rgba8",
            "value": 100.21,
            "unit": "MPix/s"
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng/photo_rgba8 native",
            "value": 79.47,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "macos-arm64/libpng/photo_rgba8 native",
            "value": 51.67,
            "unit": "MPix/s"
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng/photo_rgba8 rgba8",
            "value": 77.02,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "macos-arm64/libpng/photo_rgba8 rgba8",
            "value": 56.2,
            "unit": "MPix/s"
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng/photo_gray8 native",
            "value": 362.38,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "macos-arm64/libpng/photo_gray8 native",
            "value": 212.91,
            "unit": "MPix/s"
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng/photo_gray8 rgba8",
            "value": 309.49,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "macos-arm64/libpng/photo_gray8 rgba8",
            "value": 155.2,
            "unit": "MPix/s"
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng/photo_gray16 native",
            "value": 313.57,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "macos-arm64/libpng/photo_gray16 native",
            "value": 154.36,
            "unit": "MPix/s"
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng/photo_gray16 rgba8",
            "value": 227.21,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "macos-arm64/libpng/photo_gray16 rgba8",
            "value": 106.95,
            "unit": "MPix/s"
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng/graphic_pal8 native",
            "value": 5192.7,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "macos-arm64/libpng/graphic_pal8 native",
            "value": 491.55,
            "unit": "MPix/s"
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng/graphic_pal8 rgba8",
            "value": 734.79,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "macos-arm64/libpng/graphic_pal8 rgba8",
            "value": 322.91,
            "unit": "MPix/s"
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng/graphic_rgb8 native",
            "value": 792.24,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "macos-arm64/libpng/graphic_rgb8 native",
            "value": 143.55,
            "unit": "MPix/s"
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng/graphic_rgb8 rgba8",
            "value": 449.36,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "macos-arm64/libpng/graphic_rgb8 rgba8",
            "value": 130.24,
            "unit": "MPix/s"
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng-zng/photo_rgb8 native",
            "value": 216.58,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "macos-arm64/libpng-zng/photo_rgb8 native",
            "value": 164.26,
            "unit": "MPix/s"
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng-zng/photo_rgb8 rgba8",
            "value": 184.61,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "macos-arm64/libpng-zng/photo_rgb8 rgba8",
            "value": 150.33,
            "unit": "MPix/s"
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng-zng/photo_rgba8 native",
            "value": 79.6,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "macos-arm64/libpng-zng/photo_rgba8 native",
            "value": 61.17,
            "unit": "MPix/s"
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng-zng/photo_rgba8 rgba8",
            "value": 75.94,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "macos-arm64/libpng-zng/photo_rgba8 rgba8",
            "value": 60.02,
            "unit": "MPix/s"
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng-zng/photo_gray8 native",
            "value": 361,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "macos-arm64/libpng-zng/photo_gray8 native",
            "value": 231.49,
            "unit": "MPix/s"
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng-zng/photo_gray8 rgba8",
            "value": 291.88,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "macos-arm64/libpng-zng/photo_gray8 rgba8",
            "value": 177.11,
            "unit": "MPix/s"
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng-zng/photo_gray16 native",
            "value": 312.58,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "macos-arm64/libpng-zng/photo_gray16 native",
            "value": 195.55,
            "unit": "MPix/s"
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng-zng/photo_gray16 rgba8",
            "value": 250.08,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "macos-arm64/libpng-zng/photo_gray16 rgba8",
            "value": 113.89,
            "unit": "MPix/s"
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng-zng/graphic_pal8 native",
            "value": 4740.74,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "macos-arm64/libpng-zng/graphic_pal8 native",
            "value": 1623.68,
            "unit": "MPix/s"
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng-zng/graphic_pal8 rgba8",
            "value": 772.64,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "macos-arm64/libpng-zng/graphic_pal8 rgba8",
            "value": 586.3,
            "unit": "MPix/s"
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng-zng/graphic_rgb8 native",
            "value": 912.01,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "macos-arm64/libpng-zng/graphic_rgb8 native",
            "value": 564.66,
            "unit": "MPix/s"
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng-zng/graphic_rgb8 rgba8",
            "value": 458.15,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "macos-arm64/libpng-zng/graphic_rgb8 rgba8",
            "value": 426.6,
            "unit": "MPix/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bozhidar Ivanchev Ivanov",
            "email": "bozhidar.ivanov@ad.chaos.com"
          },
          "committer": {
            "name": "Bozhidar Ivanchev Ivanov",
            "email": "bozhidar.ivanov@ad.chaos.com"
          },
          "id": "28971d9ceec23f64985637ec03220e715cfc9b87",
          "message": "Accelerate RGBA Paeth with SIMD and short inflate matches",
          "timestamp": "2026-09-24T20:15:44Z",
          "url": "https://github.com/bojosos/libpng_turbo/commit/28971d9ceec23f64985637ec03220e715cfc9b87"
        },
        "date": 1790281227276,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "linux-arm64/ptpng-vs-libpng-zng/photo_rgb8 native",
            "value": 232.07,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "linux-arm64/libpng-zng/photo_rgb8 native",
            "value": 196.95,
            "unit": "MPix/s"
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng-zng/photo_rgb8 rgba8",
            "value": 199.06,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "linux-arm64/libpng-zng/photo_rgb8 rgba8",
            "value": 172.92,
            "unit": "MPix/s"
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng-zng/photo_rgba8 native",
            "value": 80.59,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "linux-arm64/libpng-zng/photo_rgba8 native",
            "value": 82.71,
            "unit": "MPix/s"
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng-zng/photo_rgba8 rgba8",
            "value": 76.12,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "linux-arm64/libpng-zng/photo_rgba8 rgba8",
            "value": 82.69,
            "unit": "MPix/s"
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng-zng/photo_gray8 native",
            "value": 351.08,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "linux-arm64/libpng-zng/photo_gray8 native",
            "value": 279.94,
            "unit": "MPix/s"
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng-zng/photo_gray8 rgba8",
            "value": 332.36,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "linux-arm64/libpng-zng/photo_gray8 rgba8",
            "value": 204.27,
            "unit": "MPix/s"
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng-zng/photo_gray16 native",
            "value": 368.91,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "linux-arm64/libpng-zng/photo_gray16 native",
            "value": 238.18,
            "unit": "MPix/s"
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng-zng/photo_gray16 rgba8",
            "value": 295.33,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "linux-arm64/libpng-zng/photo_gray16 rgba8",
            "value": 140.53,
            "unit": "MPix/s"
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng-zng/graphic_pal8 native",
            "value": 5504.93,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "linux-arm64/libpng-zng/graphic_pal8 native",
            "value": 1319.58,
            "unit": "MPix/s"
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng-zng/graphic_pal8 rgba8",
            "value": 795.29,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "linux-arm64/libpng-zng/graphic_pal8 rgba8",
            "value": 598.34,
            "unit": "MPix/s"
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng-zng/graphic_rgb8 native",
            "value": 908.29,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "linux-arm64/libpng-zng/graphic_rgb8 native",
            "value": 892.2,
            "unit": "MPix/s"
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng-zng/graphic_rgb8 rgba8",
            "value": 556.46,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "linux-arm64/libpng-zng/graphic_rgb8 rgba8",
            "value": 539.59,
            "unit": "MPix/s"
          },
          {
            "name": "linux-x64/ptpng-vs-libpng/photo_rgb8 native",
            "value": 189.4,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "linux-x64/libpng/photo_rgb8 native",
            "value": 107.35,
            "unit": "MPix/s"
          },
          {
            "name": "linux-x64/ptpng-vs-libpng/photo_rgb8 rgba8",
            "value": 180.38,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "linux-x64/libpng/photo_rgb8 rgba8",
            "value": 98.02,
            "unit": "MPix/s"
          },
          {
            "name": "linux-x64/ptpng-vs-libpng/photo_rgba8 native",
            "value": 74.96,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "linux-x64/libpng/photo_rgba8 native",
            "value": 53.74,
            "unit": "MPix/s"
          },
          {
            "name": "linux-x64/ptpng-vs-libpng/photo_rgba8 rgba8",
            "value": 72.52,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "linux-x64/libpng/photo_rgba8 rgba8",
            "value": 53.7,
            "unit": "MPix/s"
          },
          {
            "name": "linux-x64/ptpng-vs-libpng/photo_gray8 native",
            "value": 290.22,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "linux-x64/libpng/photo_gray8 native",
            "value": 210.95,
            "unit": "MPix/s"
          },
          {
            "name": "linux-x64/ptpng-vs-libpng/photo_gray8 rgba8",
            "value": 275.42,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "linux-x64/libpng/photo_gray8 rgba8",
            "value": 156.64,
            "unit": "MPix/s"
          },
          {
            "name": "linux-x64/ptpng-vs-libpng/photo_gray16 native",
            "value": 303.09,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "linux-x64/libpng/photo_gray16 native",
            "value": 151.77,
            "unit": "MPix/s"
          },
          {
            "name": "linux-x64/ptpng-vs-libpng/photo_gray16 rgba8",
            "value": 286.45,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "linux-x64/libpng/photo_gray16 rgba8",
            "value": 100.9,
            "unit": "MPix/s"
          },
          {
            "name": "linux-x64/ptpng-vs-libpng/graphic_pal8 native",
            "value": 6929.83,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "linux-x64/libpng/graphic_pal8 native",
            "value": 384.78,
            "unit": "MPix/s"
          },
          {
            "name": "linux-x64/ptpng-vs-libpng/graphic_pal8 rgba8",
            "value": 1660.6,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "linux-x64/libpng/graphic_pal8 rgba8",
            "value": 250.48,
            "unit": "MPix/s"
          },
          {
            "name": "linux-x64/ptpng-vs-libpng/graphic_rgb8 native",
            "value": 915.63,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "linux-x64/libpng/graphic_rgb8 native",
            "value": 131.28,
            "unit": "MPix/s"
          },
          {
            "name": "linux-x64/ptpng-vs-libpng/graphic_rgb8 rgba8",
            "value": 776.16,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "linux-x64/libpng/graphic_rgb8 rgba8",
            "value": 117.53,
            "unit": "MPix/s"
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng/photo_rgb8 native",
            "value": 252.89,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "windows-arm64/libpng/photo_rgb8 native",
            "value": 147.33,
            "unit": "MPix/s"
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng/photo_rgb8 rgba8",
            "value": 189.32,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "windows-arm64/libpng/photo_rgb8 rgba8",
            "value": 130.86,
            "unit": "MPix/s"
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng/photo_rgba8 native",
            "value": 91.44,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "windows-arm64/libpng/photo_rgba8 native",
            "value": 65.97,
            "unit": "MPix/s"
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng/photo_rgba8 rgba8",
            "value": 86.35,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "windows-arm64/libpng/photo_rgba8 rgba8",
            "value": 65.99,
            "unit": "MPix/s"
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng/photo_gray8 native",
            "value": 444.1,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "windows-arm64/libpng/photo_gray8 native",
            "value": 256.67,
            "unit": "MPix/s"
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng/photo_gray8 rgba8",
            "value": 351.81,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "windows-arm64/libpng/photo_gray8 rgba8",
            "value": 179.03,
            "unit": "MPix/s"
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng/photo_gray16 native",
            "value": 370.05,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "windows-arm64/libpng/photo_gray16 native",
            "value": 201.06,
            "unit": "MPix/s"
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng/photo_gray16 rgba8",
            "value": 253.21,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "windows-arm64/libpng/photo_gray16 rgba8",
            "value": 123.55,
            "unit": "MPix/s"
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng/graphic_pal8 native",
            "value": 3789.22,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "windows-arm64/libpng/graphic_pal8 native",
            "value": 441.98,
            "unit": "MPix/s"
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng/graphic_pal8 rgba8",
            "value": 557.88,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "windows-arm64/libpng/graphic_pal8 rgba8",
            "value": 296.45,
            "unit": "MPix/s"
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng/graphic_rgb8 native",
            "value": 794.97,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "windows-arm64/libpng/graphic_rgb8 native",
            "value": 154.58,
            "unit": "MPix/s"
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng/graphic_rgb8 rgba8",
            "value": 389.12,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "windows-arm64/libpng/graphic_rgb8 rgba8",
            "value": 136.78,
            "unit": "MPix/s"
          },
          {
            "name": "windows-x64/ptpng-vs-libpng-zng/photo_rgb8 native",
            "value": 217.67,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "windows-x64/libpng-zng/photo_rgb8 native",
            "value": 167.22,
            "unit": "MPix/s"
          },
          {
            "name": "windows-x64/ptpng-vs-libpng-zng/photo_rgb8 rgba8",
            "value": 185.49,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "windows-x64/libpng-zng/photo_rgb8 rgba8",
            "value": 144.39,
            "unit": "MPix/s"
          },
          {
            "name": "windows-x64/ptpng-vs-libpng-zng/photo_rgba8 native",
            "value": 84.59,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "windows-x64/libpng-zng/photo_rgba8 native",
            "value": 69.4,
            "unit": "MPix/s"
          },
          {
            "name": "windows-x64/ptpng-vs-libpng-zng/photo_rgba8 rgba8",
            "value": 79.39,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "windows-x64/libpng-zng/photo_rgba8 rgba8",
            "value": 69.58,
            "unit": "MPix/s"
          },
          {
            "name": "windows-x64/ptpng-vs-libpng-zng/photo_gray8 native",
            "value": 363.61,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "windows-x64/libpng-zng/photo_gray8 native",
            "value": 224.7,
            "unit": "MPix/s"
          },
          {
            "name": "windows-x64/ptpng-vs-libpng-zng/photo_gray8 rgba8",
            "value": 290.92,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "windows-x64/libpng-zng/photo_gray8 rgba8",
            "value": 153.45,
            "unit": "MPix/s"
          },
          {
            "name": "windows-x64/ptpng-vs-libpng-zng/photo_gray16 native",
            "value": 317.36,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "windows-x64/libpng-zng/photo_gray16 native",
            "value": 201.87,
            "unit": "MPix/s"
          },
          {
            "name": "windows-x64/ptpng-vs-libpng-zng/photo_gray16 rgba8",
            "value": 258.97,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "windows-x64/libpng-zng/photo_gray16 rgba8",
            "value": 106.29,
            "unit": "MPix/s"
          },
          {
            "name": "windows-x64/ptpng-vs-libpng-zng/graphic_pal8 native",
            "value": 4016.53,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "windows-x64/libpng-zng/graphic_pal8 native",
            "value": 1050.18,
            "unit": "MPix/s"
          },
          {
            "name": "windows-x64/ptpng-vs-libpng-zng/graphic_pal8 rgba8",
            "value": 802.84,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "windows-x64/libpng-zng/graphic_pal8 rgba8",
            "value": 354.9,
            "unit": "MPix/s"
          },
          {
            "name": "windows-x64/ptpng-vs-libpng-zng/graphic_rgb8 native",
            "value": 692.32,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "windows-x64/libpng-zng/graphic_rgb8 native",
            "value": 575.15,
            "unit": "MPix/s"
          },
          {
            "name": "windows-x64/ptpng-vs-libpng-zng/graphic_rgb8 rgba8",
            "value": 458.89,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "windows-x64/libpng-zng/graphic_rgb8 rgba8",
            "value": 371.79,
            "unit": "MPix/s"
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng/photo_rgb8 native",
            "value": 232.18,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "linux-arm64/libpng/photo_rgb8 native",
            "value": 136.22,
            "unit": "MPix/s"
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng/photo_rgb8 rgba8",
            "value": 198.32,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "linux-arm64/libpng/photo_rgb8 rgba8",
            "value": 123.92,
            "unit": "MPix/s"
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng/photo_rgba8 native",
            "value": 80.71,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "linux-arm64/libpng/photo_rgba8 native",
            "value": 61.95,
            "unit": "MPix/s"
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng/photo_rgba8 rgba8",
            "value": 76.11,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "linux-arm64/libpng/photo_rgba8 rgba8",
            "value": 61.95,
            "unit": "MPix/s"
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng/photo_gray8 native",
            "value": 352.37,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "linux-arm64/libpng/photo_gray8 native",
            "value": 244.73,
            "unit": "MPix/s"
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng/photo_gray8 rgba8",
            "value": 331.62,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "linux-arm64/libpng/photo_gray8 rgba8",
            "value": 185.08,
            "unit": "MPix/s"
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng/photo_gray16 native",
            "value": 368.47,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "linux-arm64/libpng/photo_gray16 native",
            "value": 189.76,
            "unit": "MPix/s"
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng/photo_gray16 rgba8",
            "value": 294.05,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "linux-arm64/libpng/photo_gray16 rgba8",
            "value": 121.88,
            "unit": "MPix/s"
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng/graphic_pal8 native",
            "value": 5491.23,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "linux-arm64/libpng/graphic_pal8 native",
            "value": 464.28,
            "unit": "MPix/s"
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng/graphic_pal8 rgba8",
            "value": 791.03,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "linux-arm64/libpng/graphic_pal8 rgba8",
            "value": 326.42,
            "unit": "MPix/s"
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng/graphic_rgb8 native",
            "value": 916.72,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "linux-arm64/libpng/graphic_rgb8 native",
            "value": 160.51,
            "unit": "MPix/s"
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng/graphic_rgb8 rgba8",
            "value": 550.21,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "linux-arm64/libpng/graphic_rgb8 rgba8",
            "value": 143.64,
            "unit": "MPix/s"
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng-zng/photo_rgb8 native",
            "value": 252.78,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "windows-arm64/libpng-zng/photo_rgb8 native",
            "value": 211.03,
            "unit": "MPix/s"
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng-zng/photo_rgb8 rgba8",
            "value": 190.24,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "windows-arm64/libpng-zng/photo_rgb8 rgba8",
            "value": 179.19,
            "unit": "MPix/s"
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng-zng/photo_rgba8 native",
            "value": 91.44,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "windows-arm64/libpng-zng/photo_rgba8 native",
            "value": 81.96,
            "unit": "MPix/s"
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng-zng/photo_rgba8 rgba8",
            "value": 85.99,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "windows-arm64/libpng-zng/photo_rgba8 rgba8",
            "value": 82.1,
            "unit": "MPix/s"
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng-zng/photo_gray8 native",
            "value": 443.99,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "windows-arm64/libpng-zng/photo_gray8 native",
            "value": 275.73,
            "unit": "MPix/s"
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng-zng/photo_gray8 rgba8",
            "value": 350.66,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "windows-arm64/libpng-zng/photo_gray8 rgba8",
            "value": 188.17,
            "unit": "MPix/s"
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng-zng/photo_gray16 native",
            "value": 368.2,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "windows-arm64/libpng-zng/photo_gray16 native",
            "value": 241.37,
            "unit": "MPix/s"
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng-zng/photo_gray16 rgba8",
            "value": 252.54,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "windows-arm64/libpng-zng/photo_gray16 rgba8",
            "value": 137.7,
            "unit": "MPix/s"
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng-zng/graphic_pal8 native",
            "value": 3845.58,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "windows-arm64/libpng-zng/graphic_pal8 native",
            "value": 1177.32,
            "unit": "MPix/s"
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng-zng/graphic_pal8 rgba8",
            "value": 554.54,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "windows-arm64/libpng-zng/graphic_pal8 rgba8",
            "value": 509.86,
            "unit": "MPix/s"
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng-zng/graphic_rgb8 native",
            "value": 790.13,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "windows-arm64/libpng-zng/graphic_rgb8 native",
            "value": 716.1,
            "unit": "MPix/s"
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng-zng/graphic_rgb8 rgba8",
            "value": 391.81,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "windows-arm64/libpng-zng/graphic_rgb8 rgba8",
            "value": 447.94,
            "unit": "MPix/s"
          },
          {
            "name": "linux-x64/ptpng-vs-libpng-zng/photo_rgb8 native",
            "value": 188.48,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "linux-x64/libpng-zng/photo_rgb8 native",
            "value": 169.22,
            "unit": "MPix/s"
          },
          {
            "name": "linux-x64/ptpng-vs-libpng-zng/photo_rgb8 rgba8",
            "value": 180.27,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "linux-x64/libpng-zng/photo_rgb8 rgba8",
            "value": 147.25,
            "unit": "MPix/s"
          },
          {
            "name": "linux-x64/ptpng-vs-libpng-zng/photo_rgba8 native",
            "value": 74.32,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "linux-x64/libpng-zng/photo_rgba8 native",
            "value": 75.39,
            "unit": "MPix/s"
          },
          {
            "name": "linux-x64/ptpng-vs-libpng-zng/photo_rgba8 rgba8",
            "value": 71.44,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "linux-x64/libpng-zng/photo_rgba8 rgba8",
            "value": 75.4,
            "unit": "MPix/s"
          },
          {
            "name": "linux-x64/ptpng-vs-libpng-zng/photo_gray8 native",
            "value": 281.91,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "linux-x64/libpng-zng/photo_gray8 native",
            "value": 255.25,
            "unit": "MPix/s"
          },
          {
            "name": "linux-x64/ptpng-vs-libpng-zng/photo_gray8 rgba8",
            "value": 268.65,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "linux-x64/libpng-zng/photo_gray8 rgba8",
            "value": 179.05,
            "unit": "MPix/s"
          },
          {
            "name": "linux-x64/ptpng-vs-libpng-zng/photo_gray16 native",
            "value": 305.3,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "linux-x64/libpng-zng/photo_gray16 native",
            "value": 206.09,
            "unit": "MPix/s"
          },
          {
            "name": "linux-x64/ptpng-vs-libpng-zng/photo_gray16 rgba8",
            "value": 286.06,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "linux-x64/libpng-zng/photo_gray16 rgba8",
            "value": 110.24,
            "unit": "MPix/s"
          },
          {
            "name": "linux-x64/ptpng-vs-libpng-zng/graphic_pal8 native",
            "value": 6987.38,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "linux-x64/libpng-zng/graphic_pal8 native",
            "value": 1288.24,
            "unit": "MPix/s"
          },
          {
            "name": "linux-x64/ptpng-vs-libpng-zng/graphic_pal8 rgba8",
            "value": 1664.73,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "linux-x64/libpng-zng/graphic_pal8 rgba8",
            "value": 440.35,
            "unit": "MPix/s"
          },
          {
            "name": "linux-x64/ptpng-vs-libpng-zng/graphic_rgb8 native",
            "value": 956.06,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "linux-x64/libpng-zng/graphic_rgb8 native",
            "value": 895.53,
            "unit": "MPix/s"
          },
          {
            "name": "linux-x64/ptpng-vs-libpng-zng/graphic_rgb8 rgba8",
            "value": 751.51,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "linux-x64/libpng-zng/graphic_rgb8 rgba8",
            "value": 506.11,
            "unit": "MPix/s"
          },
          {
            "name": "windows-x64/ptpng-vs-libpng/photo_rgb8 native",
            "value": 218.06,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "windows-x64/libpng/photo_rgb8 native",
            "value": 109.98,
            "unit": "MPix/s"
          },
          {
            "name": "windows-x64/ptpng-vs-libpng/photo_rgb8 rgba8",
            "value": 186.55,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "windows-x64/libpng/photo_rgb8 rgba8",
            "value": 99.15,
            "unit": "MPix/s"
          },
          {
            "name": "windows-x64/ptpng-vs-libpng/photo_rgba8 native",
            "value": 84.71,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "windows-x64/libpng/photo_rgba8 native",
            "value": 52.21,
            "unit": "MPix/s"
          },
          {
            "name": "windows-x64/ptpng-vs-libpng/photo_rgba8 rgba8",
            "value": 79.21,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "windows-x64/libpng/photo_rgba8 rgba8",
            "value": 52.21,
            "unit": "MPix/s"
          },
          {
            "name": "windows-x64/ptpng-vs-libpng/photo_gray8 native",
            "value": 364.17,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "windows-x64/libpng/photo_gray8 native",
            "value": 201.46,
            "unit": "MPix/s"
          },
          {
            "name": "windows-x64/ptpng-vs-libpng/photo_gray8 rgba8",
            "value": 292.22,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "windows-x64/libpng/photo_gray8 rgba8",
            "value": 141.83,
            "unit": "MPix/s"
          },
          {
            "name": "windows-x64/ptpng-vs-libpng/photo_gray16 native",
            "value": 315.95,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "windows-x64/libpng/photo_gray16 native",
            "value": 160.37,
            "unit": "MPix/s"
          },
          {
            "name": "windows-x64/ptpng-vs-libpng/photo_gray16 rgba8",
            "value": 260.34,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "windows-x64/libpng/photo_gray16 rgba8",
            "value": 93.2,
            "unit": "MPix/s"
          },
          {
            "name": "windows-x64/ptpng-vs-libpng/graphic_pal8 native",
            "value": 4101.03,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "windows-x64/libpng/graphic_pal8 native",
            "value": 341.35,
            "unit": "MPix/s"
          },
          {
            "name": "windows-x64/ptpng-vs-libpng/graphic_pal8 rgba8",
            "value": 805.52,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "windows-x64/libpng/graphic_pal8 rgba8",
            "value": 211.28,
            "unit": "MPix/s"
          },
          {
            "name": "windows-x64/ptpng-vs-libpng/graphic_rgb8 native",
            "value": 705.36,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "windows-x64/libpng/graphic_rgb8 native",
            "value": 113.08,
            "unit": "MPix/s"
          },
          {
            "name": "windows-x64/ptpng-vs-libpng/graphic_rgb8 rgba8",
            "value": 463.16,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 "
          },
          {
            "name": "windows-x64/libpng/graphic_rgb8 rgba8",
            "value": 101.79,
            "unit": "MPix/s"
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng/photo_rgb8 native",
            "value": 259.39,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "macos-arm64/libpng/photo_rgb8 native",
            "value": 129.72,
            "unit": "MPix/s"
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng/photo_rgb8 rgba8",
            "value": 208.83,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "macos-arm64/libpng/photo_rgb8 rgba8",
            "value": 114.47,
            "unit": "MPix/s"
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng/photo_rgba8 native",
            "value": 83.65,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "macos-arm64/libpng/photo_rgba8 native",
            "value": 55.22,
            "unit": "MPix/s"
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng/photo_rgba8 rgba8",
            "value": 80.73,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "macos-arm64/libpng/photo_rgba8 rgba8",
            "value": 54.82,
            "unit": "MPix/s"
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng/photo_gray8 native",
            "value": 364.85,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "macos-arm64/libpng/photo_gray8 native",
            "value": 209.62,
            "unit": "MPix/s"
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng/photo_gray8 rgba8",
            "value": 315.88,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "macos-arm64/libpng/photo_gray8 rgba8",
            "value": 147.97,
            "unit": "MPix/s"
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng/photo_gray16 native",
            "value": 329.37,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "macos-arm64/libpng/photo_gray16 native",
            "value": 152.82,
            "unit": "MPix/s"
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng/photo_gray16 rgba8",
            "value": 240.15,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "macos-arm64/libpng/photo_gray16 rgba8",
            "value": 104.88,
            "unit": "MPix/s"
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng/graphic_pal8 native",
            "value": 5292.9,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "macos-arm64/libpng/graphic_pal8 native",
            "value": 485.15,
            "unit": "MPix/s"
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng/graphic_pal8 rgba8",
            "value": 693.96,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "macos-arm64/libpng/graphic_pal8 rgba8",
            "value": 316.78,
            "unit": "MPix/s"
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng/graphic_rgb8 native",
            "value": 883.77,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "macos-arm64/libpng/graphic_rgb8 native",
            "value": 144.11,
            "unit": "MPix/s"
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng/graphic_rgb8 rgba8",
            "value": 442.01,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "macos-arm64/libpng/graphic_rgb8 rgba8",
            "value": 131.94,
            "unit": "MPix/s"
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng-zng/photo_rgb8 native",
            "value": 257.82,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "macos-arm64/libpng-zng/photo_rgb8 native",
            "value": 193.31,
            "unit": "MPix/s"
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng-zng/photo_rgb8 rgba8",
            "value": 192.3,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "macos-arm64/libpng-zng/photo_rgb8 rgba8",
            "value": 159.11,
            "unit": "MPix/s"
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng-zng/photo_rgba8 native",
            "value": 85.45,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "macos-arm64/libpng-zng/photo_rgba8 native",
            "value": 67.15,
            "unit": "MPix/s"
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng-zng/photo_rgba8 rgba8",
            "value": 78.39,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "macos-arm64/libpng-zng/photo_rgba8 rgba8",
            "value": 71.51,
            "unit": "MPix/s"
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng-zng/photo_gray8 native",
            "value": 373.52,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "macos-arm64/libpng-zng/photo_gray8 native",
            "value": 224.02,
            "unit": "MPix/s"
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng-zng/photo_gray8 rgba8",
            "value": 309.69,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "macos-arm64/libpng-zng/photo_gray8 rgba8",
            "value": 170.23,
            "unit": "MPix/s"
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng-zng/photo_gray16 native",
            "value": 324.56,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "macos-arm64/libpng-zng/photo_gray16 native",
            "value": 202.44,
            "unit": "MPix/s"
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng-zng/photo_gray16 rgba8",
            "value": 229.91,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "macos-arm64/libpng-zng/photo_gray16 rgba8",
            "value": 119.16,
            "unit": "MPix/s"
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng-zng/graphic_pal8 native",
            "value": 4731.98,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "macos-arm64/libpng-zng/graphic_pal8 native",
            "value": 1730.9,
            "unit": "MPix/s"
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng-zng/graphic_pal8 rgba8",
            "value": 733.38,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "macos-arm64/libpng-zng/graphic_pal8 rgba8",
            "value": 590.13,
            "unit": "MPix/s"
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng-zng/graphic_rgb8 native",
            "value": 857.53,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "macos-arm64/libpng-zng/graphic_rgb8 native",
            "value": 649.69,
            "unit": "MPix/s"
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng-zng/graphic_rgb8 rgba8",
            "value": 441.66,
            "unit": "MPix/s",
            "extra": "neon "
          },
          {
            "name": "macos-arm64/libpng-zng/graphic_rgb8 rgba8",
            "value": 431.75,
            "unit": "MPix/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bozhidar Ivanchev Ivanov",
            "email": "bozhidar.ivanov@ad.chaos.com"
          },
          "committer": {
            "name": "Bozhidar Ivanchev Ivanov",
            "email": "bozhidar.ivanov@ad.chaos.com"
          },
          "id": "35c4ad0f5b8df635b8d2d196bac871e49cd7c4cf",
          "message": "Document encoder measurements and benchmark interpretation",
          "timestamp": "2026-09-24T20:39:48Z",
          "url": "https://github.com/bojosos/libpng_turbo/commit/35c4ad0f5b8df635b8d2d196bac871e49cd7c4cf"
        },
        "date": 1790282497179,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "linux-arm64/memory-copy-vs-libpng/64MiB",
            "value": 29983.5,
            "unit": "MB/s",
            "extra": "Warm buffers; 128 MiB working set; median of five batches; payload bytes only; measured reference, not a theoretical limit\nRunner: {\"os\": \"Linux-6.17.0-1022-azure-aarch64-with-glibc2.39\", \"machine\": \"aarch64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            aarch64\\nCPU op-mode(s):                          32-bit, 64-bit\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               ARM\\nModel name:                              Neoverse-N2\\nModel:                                   0\\nThread(s) per core:                      1\\nCore(s) per socket:                      4\\nSocket(s):                               1\\nStepping:                                r0p0\\nBogoMIPS:                                2000.00\\nFlags:                                   fp asimd evtstrm aes pmull sha1 sha2 crc32 atomics fphp asimdhp cpuid asimdrdm jscvt fcma lrcpc dcpop sha3 sm3 sm4 asimddp sha512 sve asimdfhm uscat ilrcpc flagm sb paca pacg dcpodp sve2 sveaes svebitperm svesha3 svesm4 flagm2 frint svei8mm svebf16 i8mm bf16\\nL1d cache:                               256 KiB (4 instances)\\nL1i cache:                               256 KiB (4 instances)\\nL2 cache:                                4 MiB (4 instances)\\nL3 cache:                                128 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Not affected\\nVulnerability Spec store bypass:         Mitigation; Speculative Store Bypass disabled via prctl\\nVulnerability Spectre v1:                Mitigation; __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; CSV2, BHB\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Not affected\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24-arm64\", \"runner_image_version\": \"20260920.129.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}"
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng/photo_rgb8 native",
            "value": 232.53,
            "unit": "MPix/s",
            "extra": "neon \nRunner: {\"os\": \"Linux-6.17.0-1022-azure-aarch64-with-glibc2.39\", \"machine\": \"aarch64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            aarch64\\nCPU op-mode(s):                          32-bit, 64-bit\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               ARM\\nModel name:                              Neoverse-N2\\nModel:                                   0\\nThread(s) per core:                      1\\nCore(s) per socket:                      4\\nSocket(s):                               1\\nStepping:                                r0p0\\nBogoMIPS:                                2000.00\\nFlags:                                   fp asimd evtstrm aes pmull sha1 sha2 crc32 atomics fphp asimdhp cpuid asimdrdm jscvt fcma lrcpc dcpop sha3 sm3 sm4 asimddp sha512 sve asimdfhm uscat ilrcpc flagm sb paca pacg dcpodp sve2 sveaes svebitperm svesha3 svesm4 flagm2 frint svei8mm svebf16 i8mm bf16\\nL1d cache:                               256 KiB (4 instances)\\nL1i cache:                               256 KiB (4 instances)\\nL2 cache:                                4 MiB (4 instances)\\nL3 cache:                                128 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Not affected\\nVulnerability Spec store bypass:         Mitigation; Speculative Store Bypass disabled via prctl\\nVulnerability Spectre v1:                Mitigation; __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; CSV2, BHB\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Not affected\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24-arm64\", \"runner_image_version\": \"20260920.129.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-arm64/libpng/photo_rgb8 native",
            "value": 137.46,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Linux-6.17.0-1022-azure-aarch64-with-glibc2.39\", \"machine\": \"aarch64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            aarch64\\nCPU op-mode(s):                          32-bit, 64-bit\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               ARM\\nModel name:                              Neoverse-N2\\nModel:                                   0\\nThread(s) per core:                      1\\nCore(s) per socket:                      4\\nSocket(s):                               1\\nStepping:                                r0p0\\nBogoMIPS:                                2000.00\\nFlags:                                   fp asimd evtstrm aes pmull sha1 sha2 crc32 atomics fphp asimdhp cpuid asimdrdm jscvt fcma lrcpc dcpop sha3 sm3 sm4 asimddp sha512 sve asimdfhm uscat ilrcpc flagm sb paca pacg dcpodp sve2 sveaes svebitperm svesha3 svesm4 flagm2 frint svei8mm svebf16 i8mm bf16\\nL1d cache:                               256 KiB (4 instances)\\nL1i cache:                               256 KiB (4 instances)\\nL2 cache:                                4 MiB (4 instances)\\nL3 cache:                                128 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Not affected\\nVulnerability Spec store bypass:         Mitigation; Speculative Store Bypass disabled via prctl\\nVulnerability Spectre v1:                Mitigation; __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; CSV2, BHB\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Not affected\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24-arm64\", \"runner_image_version\": \"20260920.129.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng/photo_rgb8 rgba8",
            "value": 199.78,
            "unit": "MPix/s",
            "extra": "neon \nRunner: {\"os\": \"Linux-6.17.0-1022-azure-aarch64-with-glibc2.39\", \"machine\": \"aarch64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            aarch64\\nCPU op-mode(s):                          32-bit, 64-bit\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               ARM\\nModel name:                              Neoverse-N2\\nModel:                                   0\\nThread(s) per core:                      1\\nCore(s) per socket:                      4\\nSocket(s):                               1\\nStepping:                                r0p0\\nBogoMIPS:                                2000.00\\nFlags:                                   fp asimd evtstrm aes pmull sha1 sha2 crc32 atomics fphp asimdhp cpuid asimdrdm jscvt fcma lrcpc dcpop sha3 sm3 sm4 asimddp sha512 sve asimdfhm uscat ilrcpc flagm sb paca pacg dcpodp sve2 sveaes svebitperm svesha3 svesm4 flagm2 frint svei8mm svebf16 i8mm bf16\\nL1d cache:                               256 KiB (4 instances)\\nL1i cache:                               256 KiB (4 instances)\\nL2 cache:                                4 MiB (4 instances)\\nL3 cache:                                128 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Not affected\\nVulnerability Spec store bypass:         Mitigation; Speculative Store Bypass disabled via prctl\\nVulnerability Spectre v1:                Mitigation; __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; CSV2, BHB\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Not affected\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24-arm64\", \"runner_image_version\": \"20260920.129.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-arm64/libpng/photo_rgb8 rgba8",
            "value": 124.57,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Linux-6.17.0-1022-azure-aarch64-with-glibc2.39\", \"machine\": \"aarch64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            aarch64\\nCPU op-mode(s):                          32-bit, 64-bit\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               ARM\\nModel name:                              Neoverse-N2\\nModel:                                   0\\nThread(s) per core:                      1\\nCore(s) per socket:                      4\\nSocket(s):                               1\\nStepping:                                r0p0\\nBogoMIPS:                                2000.00\\nFlags:                                   fp asimd evtstrm aes pmull sha1 sha2 crc32 atomics fphp asimdhp cpuid asimdrdm jscvt fcma lrcpc dcpop sha3 sm3 sm4 asimddp sha512 sve asimdfhm uscat ilrcpc flagm sb paca pacg dcpodp sve2 sveaes svebitperm svesha3 svesm4 flagm2 frint svei8mm svebf16 i8mm bf16\\nL1d cache:                               256 KiB (4 instances)\\nL1i cache:                               256 KiB (4 instances)\\nL2 cache:                                4 MiB (4 instances)\\nL3 cache:                                128 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Not affected\\nVulnerability Spec store bypass:         Mitigation; Speculative Store Bypass disabled via prctl\\nVulnerability Spectre v1:                Mitigation; __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; CSV2, BHB\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Not affected\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24-arm64\", \"runner_image_version\": \"20260920.129.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng/photo_rgba8 native",
            "value": 81.23,
            "unit": "MPix/s",
            "extra": "neon \nRunner: {\"os\": \"Linux-6.17.0-1022-azure-aarch64-with-glibc2.39\", \"machine\": \"aarch64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            aarch64\\nCPU op-mode(s):                          32-bit, 64-bit\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               ARM\\nModel name:                              Neoverse-N2\\nModel:                                   0\\nThread(s) per core:                      1\\nCore(s) per socket:                      4\\nSocket(s):                               1\\nStepping:                                r0p0\\nBogoMIPS:                                2000.00\\nFlags:                                   fp asimd evtstrm aes pmull sha1 sha2 crc32 atomics fphp asimdhp cpuid asimdrdm jscvt fcma lrcpc dcpop sha3 sm3 sm4 asimddp sha512 sve asimdfhm uscat ilrcpc flagm sb paca pacg dcpodp sve2 sveaes svebitperm svesha3 svesm4 flagm2 frint svei8mm svebf16 i8mm bf16\\nL1d cache:                               256 KiB (4 instances)\\nL1i cache:                               256 KiB (4 instances)\\nL2 cache:                                4 MiB (4 instances)\\nL3 cache:                                128 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Not affected\\nVulnerability Spec store bypass:         Mitigation; Speculative Store Bypass disabled via prctl\\nVulnerability Spectre v1:                Mitigation; __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; CSV2, BHB\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Not affected\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24-arm64\", \"runner_image_version\": \"20260920.129.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-arm64/libpng/photo_rgba8 native",
            "value": 62.1,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Linux-6.17.0-1022-azure-aarch64-with-glibc2.39\", \"machine\": \"aarch64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            aarch64\\nCPU op-mode(s):                          32-bit, 64-bit\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               ARM\\nModel name:                              Neoverse-N2\\nModel:                                   0\\nThread(s) per core:                      1\\nCore(s) per socket:                      4\\nSocket(s):                               1\\nStepping:                                r0p0\\nBogoMIPS:                                2000.00\\nFlags:                                   fp asimd evtstrm aes pmull sha1 sha2 crc32 atomics fphp asimdhp cpuid asimdrdm jscvt fcma lrcpc dcpop sha3 sm3 sm4 asimddp sha512 sve asimdfhm uscat ilrcpc flagm sb paca pacg dcpodp sve2 sveaes svebitperm svesha3 svesm4 flagm2 frint svei8mm svebf16 i8mm bf16\\nL1d cache:                               256 KiB (4 instances)\\nL1i cache:                               256 KiB (4 instances)\\nL2 cache:                                4 MiB (4 instances)\\nL3 cache:                                128 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Not affected\\nVulnerability Spec store bypass:         Mitigation; Speculative Store Bypass disabled via prctl\\nVulnerability Spectre v1:                Mitigation; __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; CSV2, BHB\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Not affected\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24-arm64\", \"runner_image_version\": \"20260920.129.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng/photo_rgba8 rgba8",
            "value": 75.5,
            "unit": "MPix/s",
            "extra": "neon \nRunner: {\"os\": \"Linux-6.17.0-1022-azure-aarch64-with-glibc2.39\", \"machine\": \"aarch64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            aarch64\\nCPU op-mode(s):                          32-bit, 64-bit\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               ARM\\nModel name:                              Neoverse-N2\\nModel:                                   0\\nThread(s) per core:                      1\\nCore(s) per socket:                      4\\nSocket(s):                               1\\nStepping:                                r0p0\\nBogoMIPS:                                2000.00\\nFlags:                                   fp asimd evtstrm aes pmull sha1 sha2 crc32 atomics fphp asimdhp cpuid asimdrdm jscvt fcma lrcpc dcpop sha3 sm3 sm4 asimddp sha512 sve asimdfhm uscat ilrcpc flagm sb paca pacg dcpodp sve2 sveaes svebitperm svesha3 svesm4 flagm2 frint svei8mm svebf16 i8mm bf16\\nL1d cache:                               256 KiB (4 instances)\\nL1i cache:                               256 KiB (4 instances)\\nL2 cache:                                4 MiB (4 instances)\\nL3 cache:                                128 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Not affected\\nVulnerability Spec store bypass:         Mitigation; Speculative Store Bypass disabled via prctl\\nVulnerability Spectre v1:                Mitigation; __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; CSV2, BHB\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Not affected\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24-arm64\", \"runner_image_version\": \"20260920.129.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-arm64/libpng/photo_rgba8 rgba8",
            "value": 60.69,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Linux-6.17.0-1022-azure-aarch64-with-glibc2.39\", \"machine\": \"aarch64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            aarch64\\nCPU op-mode(s):                          32-bit, 64-bit\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               ARM\\nModel name:                              Neoverse-N2\\nModel:                                   0\\nThread(s) per core:                      1\\nCore(s) per socket:                      4\\nSocket(s):                               1\\nStepping:                                r0p0\\nBogoMIPS:                                2000.00\\nFlags:                                   fp asimd evtstrm aes pmull sha1 sha2 crc32 atomics fphp asimdhp cpuid asimdrdm jscvt fcma lrcpc dcpop sha3 sm3 sm4 asimddp sha512 sve asimdfhm uscat ilrcpc flagm sb paca pacg dcpodp sve2 sveaes svebitperm svesha3 svesm4 flagm2 frint svei8mm svebf16 i8mm bf16\\nL1d cache:                               256 KiB (4 instances)\\nL1i cache:                               256 KiB (4 instances)\\nL2 cache:                                4 MiB (4 instances)\\nL3 cache:                                128 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Not affected\\nVulnerability Spec store bypass:         Mitigation; Speculative Store Bypass disabled via prctl\\nVulnerability Spectre v1:                Mitigation; __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; CSV2, BHB\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Not affected\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24-arm64\", \"runner_image_version\": \"20260920.129.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng/photo_gray8 native",
            "value": 352.06,
            "unit": "MPix/s",
            "extra": "neon \nRunner: {\"os\": \"Linux-6.17.0-1022-azure-aarch64-with-glibc2.39\", \"machine\": \"aarch64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            aarch64\\nCPU op-mode(s):                          32-bit, 64-bit\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               ARM\\nModel name:                              Neoverse-N2\\nModel:                                   0\\nThread(s) per core:                      1\\nCore(s) per socket:                      4\\nSocket(s):                               1\\nStepping:                                r0p0\\nBogoMIPS:                                2000.00\\nFlags:                                   fp asimd evtstrm aes pmull sha1 sha2 crc32 atomics fphp asimdhp cpuid asimdrdm jscvt fcma lrcpc dcpop sha3 sm3 sm4 asimddp sha512 sve asimdfhm uscat ilrcpc flagm sb paca pacg dcpodp sve2 sveaes svebitperm svesha3 svesm4 flagm2 frint svei8mm svebf16 i8mm bf16\\nL1d cache:                               256 KiB (4 instances)\\nL1i cache:                               256 KiB (4 instances)\\nL2 cache:                                4 MiB (4 instances)\\nL3 cache:                                128 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Not affected\\nVulnerability Spec store bypass:         Mitigation; Speculative Store Bypass disabled via prctl\\nVulnerability Spectre v1:                Mitigation; __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; CSV2, BHB\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Not affected\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24-arm64\", \"runner_image_version\": \"20260920.129.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-arm64/libpng/photo_gray8 native",
            "value": 246.52,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Linux-6.17.0-1022-azure-aarch64-with-glibc2.39\", \"machine\": \"aarch64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            aarch64\\nCPU op-mode(s):                          32-bit, 64-bit\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               ARM\\nModel name:                              Neoverse-N2\\nModel:                                   0\\nThread(s) per core:                      1\\nCore(s) per socket:                      4\\nSocket(s):                               1\\nStepping:                                r0p0\\nBogoMIPS:                                2000.00\\nFlags:                                   fp asimd evtstrm aes pmull sha1 sha2 crc32 atomics fphp asimdhp cpuid asimdrdm jscvt fcma lrcpc dcpop sha3 sm3 sm4 asimddp sha512 sve asimdfhm uscat ilrcpc flagm sb paca pacg dcpodp sve2 sveaes svebitperm svesha3 svesm4 flagm2 frint svei8mm svebf16 i8mm bf16\\nL1d cache:                               256 KiB (4 instances)\\nL1i cache:                               256 KiB (4 instances)\\nL2 cache:                                4 MiB (4 instances)\\nL3 cache:                                128 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Not affected\\nVulnerability Spec store bypass:         Mitigation; Speculative Store Bypass disabled via prctl\\nVulnerability Spectre v1:                Mitigation; __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; CSV2, BHB\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Not affected\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24-arm64\", \"runner_image_version\": \"20260920.129.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng/photo_gray8 rgba8",
            "value": 332.25,
            "unit": "MPix/s",
            "extra": "neon \nRunner: {\"os\": \"Linux-6.17.0-1022-azure-aarch64-with-glibc2.39\", \"machine\": \"aarch64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            aarch64\\nCPU op-mode(s):                          32-bit, 64-bit\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               ARM\\nModel name:                              Neoverse-N2\\nModel:                                   0\\nThread(s) per core:                      1\\nCore(s) per socket:                      4\\nSocket(s):                               1\\nStepping:                                r0p0\\nBogoMIPS:                                2000.00\\nFlags:                                   fp asimd evtstrm aes pmull sha1 sha2 crc32 atomics fphp asimdhp cpuid asimdrdm jscvt fcma lrcpc dcpop sha3 sm3 sm4 asimddp sha512 sve asimdfhm uscat ilrcpc flagm sb paca pacg dcpodp sve2 sveaes svebitperm svesha3 svesm4 flagm2 frint svei8mm svebf16 i8mm bf16\\nL1d cache:                               256 KiB (4 instances)\\nL1i cache:                               256 KiB (4 instances)\\nL2 cache:                                4 MiB (4 instances)\\nL3 cache:                                128 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Not affected\\nVulnerability Spec store bypass:         Mitigation; Speculative Store Bypass disabled via prctl\\nVulnerability Spectre v1:                Mitigation; __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; CSV2, BHB\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Not affected\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24-arm64\", \"runner_image_version\": \"20260920.129.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-arm64/libpng/photo_gray8 rgba8",
            "value": 185.7,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Linux-6.17.0-1022-azure-aarch64-with-glibc2.39\", \"machine\": \"aarch64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            aarch64\\nCPU op-mode(s):                          32-bit, 64-bit\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               ARM\\nModel name:                              Neoverse-N2\\nModel:                                   0\\nThread(s) per core:                      1\\nCore(s) per socket:                      4\\nSocket(s):                               1\\nStepping:                                r0p0\\nBogoMIPS:                                2000.00\\nFlags:                                   fp asimd evtstrm aes pmull sha1 sha2 crc32 atomics fphp asimdhp cpuid asimdrdm jscvt fcma lrcpc dcpop sha3 sm3 sm4 asimddp sha512 sve asimdfhm uscat ilrcpc flagm sb paca pacg dcpodp sve2 sveaes svebitperm svesha3 svesm4 flagm2 frint svei8mm svebf16 i8mm bf16\\nL1d cache:                               256 KiB (4 instances)\\nL1i cache:                               256 KiB (4 instances)\\nL2 cache:                                4 MiB (4 instances)\\nL3 cache:                                128 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Not affected\\nVulnerability Spec store bypass:         Mitigation; Speculative Store Bypass disabled via prctl\\nVulnerability Spectre v1:                Mitigation; __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; CSV2, BHB\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Not affected\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24-arm64\", \"runner_image_version\": \"20260920.129.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng/photo_gray16 native",
            "value": 369.14,
            "unit": "MPix/s",
            "extra": "neon \nRunner: {\"os\": \"Linux-6.17.0-1022-azure-aarch64-with-glibc2.39\", \"machine\": \"aarch64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            aarch64\\nCPU op-mode(s):                          32-bit, 64-bit\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               ARM\\nModel name:                              Neoverse-N2\\nModel:                                   0\\nThread(s) per core:                      1\\nCore(s) per socket:                      4\\nSocket(s):                               1\\nStepping:                                r0p0\\nBogoMIPS:                                2000.00\\nFlags:                                   fp asimd evtstrm aes pmull sha1 sha2 crc32 atomics fphp asimdhp cpuid asimdrdm jscvt fcma lrcpc dcpop sha3 sm3 sm4 asimddp sha512 sve asimdfhm uscat ilrcpc flagm sb paca pacg dcpodp sve2 sveaes svebitperm svesha3 svesm4 flagm2 frint svei8mm svebf16 i8mm bf16\\nL1d cache:                               256 KiB (4 instances)\\nL1i cache:                               256 KiB (4 instances)\\nL2 cache:                                4 MiB (4 instances)\\nL3 cache:                                128 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Not affected\\nVulnerability Spec store bypass:         Mitigation; Speculative Store Bypass disabled via prctl\\nVulnerability Spectre v1:                Mitigation; __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; CSV2, BHB\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Not affected\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24-arm64\", \"runner_image_version\": \"20260920.129.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-arm64/libpng/photo_gray16 native",
            "value": 190.85,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Linux-6.17.0-1022-azure-aarch64-with-glibc2.39\", \"machine\": \"aarch64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            aarch64\\nCPU op-mode(s):                          32-bit, 64-bit\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               ARM\\nModel name:                              Neoverse-N2\\nModel:                                   0\\nThread(s) per core:                      1\\nCore(s) per socket:                      4\\nSocket(s):                               1\\nStepping:                                r0p0\\nBogoMIPS:                                2000.00\\nFlags:                                   fp asimd evtstrm aes pmull sha1 sha2 crc32 atomics fphp asimdhp cpuid asimdrdm jscvt fcma lrcpc dcpop sha3 sm3 sm4 asimddp sha512 sve asimdfhm uscat ilrcpc flagm sb paca pacg dcpodp sve2 sveaes svebitperm svesha3 svesm4 flagm2 frint svei8mm svebf16 i8mm bf16\\nL1d cache:                               256 KiB (4 instances)\\nL1i cache:                               256 KiB (4 instances)\\nL2 cache:                                4 MiB (4 instances)\\nL3 cache:                                128 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Not affected\\nVulnerability Spec store bypass:         Mitigation; Speculative Store Bypass disabled via prctl\\nVulnerability Spectre v1:                Mitigation; __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; CSV2, BHB\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Not affected\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24-arm64\", \"runner_image_version\": \"20260920.129.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng/photo_gray16 rgba8",
            "value": 295.28,
            "unit": "MPix/s",
            "extra": "neon \nRunner: {\"os\": \"Linux-6.17.0-1022-azure-aarch64-with-glibc2.39\", \"machine\": \"aarch64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            aarch64\\nCPU op-mode(s):                          32-bit, 64-bit\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               ARM\\nModel name:                              Neoverse-N2\\nModel:                                   0\\nThread(s) per core:                      1\\nCore(s) per socket:                      4\\nSocket(s):                               1\\nStepping:                                r0p0\\nBogoMIPS:                                2000.00\\nFlags:                                   fp asimd evtstrm aes pmull sha1 sha2 crc32 atomics fphp asimdhp cpuid asimdrdm jscvt fcma lrcpc dcpop sha3 sm3 sm4 asimddp sha512 sve asimdfhm uscat ilrcpc flagm sb paca pacg dcpodp sve2 sveaes svebitperm svesha3 svesm4 flagm2 frint svei8mm svebf16 i8mm bf16\\nL1d cache:                               256 KiB (4 instances)\\nL1i cache:                               256 KiB (4 instances)\\nL2 cache:                                4 MiB (4 instances)\\nL3 cache:                                128 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Not affected\\nVulnerability Spec store bypass:         Mitigation; Speculative Store Bypass disabled via prctl\\nVulnerability Spectre v1:                Mitigation; __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; CSV2, BHB\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Not affected\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24-arm64\", \"runner_image_version\": \"20260920.129.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-arm64/libpng/photo_gray16 rgba8",
            "value": 122.19,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Linux-6.17.0-1022-azure-aarch64-with-glibc2.39\", \"machine\": \"aarch64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            aarch64\\nCPU op-mode(s):                          32-bit, 64-bit\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               ARM\\nModel name:                              Neoverse-N2\\nModel:                                   0\\nThread(s) per core:                      1\\nCore(s) per socket:                      4\\nSocket(s):                               1\\nStepping:                                r0p0\\nBogoMIPS:                                2000.00\\nFlags:                                   fp asimd evtstrm aes pmull sha1 sha2 crc32 atomics fphp asimdhp cpuid asimdrdm jscvt fcma lrcpc dcpop sha3 sm3 sm4 asimddp sha512 sve asimdfhm uscat ilrcpc flagm sb paca pacg dcpodp sve2 sveaes svebitperm svesha3 svesm4 flagm2 frint svei8mm svebf16 i8mm bf16\\nL1d cache:                               256 KiB (4 instances)\\nL1i cache:                               256 KiB (4 instances)\\nL2 cache:                                4 MiB (4 instances)\\nL3 cache:                                128 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Not affected\\nVulnerability Spec store bypass:         Mitigation; Speculative Store Bypass disabled via prctl\\nVulnerability Spectre v1:                Mitigation; __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; CSV2, BHB\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Not affected\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24-arm64\", \"runner_image_version\": \"20260920.129.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng/graphic_pal8 native",
            "value": 5406.29,
            "unit": "MPix/s",
            "extra": "neon \nRunner: {\"os\": \"Linux-6.17.0-1022-azure-aarch64-with-glibc2.39\", \"machine\": \"aarch64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            aarch64\\nCPU op-mode(s):                          32-bit, 64-bit\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               ARM\\nModel name:                              Neoverse-N2\\nModel:                                   0\\nThread(s) per core:                      1\\nCore(s) per socket:                      4\\nSocket(s):                               1\\nStepping:                                r0p0\\nBogoMIPS:                                2000.00\\nFlags:                                   fp asimd evtstrm aes pmull sha1 sha2 crc32 atomics fphp asimdhp cpuid asimdrdm jscvt fcma lrcpc dcpop sha3 sm3 sm4 asimddp sha512 sve asimdfhm uscat ilrcpc flagm sb paca pacg dcpodp sve2 sveaes svebitperm svesha3 svesm4 flagm2 frint svei8mm svebf16 i8mm bf16\\nL1d cache:                               256 KiB (4 instances)\\nL1i cache:                               256 KiB (4 instances)\\nL2 cache:                                4 MiB (4 instances)\\nL3 cache:                                128 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Not affected\\nVulnerability Spec store bypass:         Mitigation; Speculative Store Bypass disabled via prctl\\nVulnerability Spectre v1:                Mitigation; __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; CSV2, BHB\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Not affected\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24-arm64\", \"runner_image_version\": \"20260920.129.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-arm64/libpng/graphic_pal8 native",
            "value": 464.41,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Linux-6.17.0-1022-azure-aarch64-with-glibc2.39\", \"machine\": \"aarch64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            aarch64\\nCPU op-mode(s):                          32-bit, 64-bit\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               ARM\\nModel name:                              Neoverse-N2\\nModel:                                   0\\nThread(s) per core:                      1\\nCore(s) per socket:                      4\\nSocket(s):                               1\\nStepping:                                r0p0\\nBogoMIPS:                                2000.00\\nFlags:                                   fp asimd evtstrm aes pmull sha1 sha2 crc32 atomics fphp asimdhp cpuid asimdrdm jscvt fcma lrcpc dcpop sha3 sm3 sm4 asimddp sha512 sve asimdfhm uscat ilrcpc flagm sb paca pacg dcpodp sve2 sveaes svebitperm svesha3 svesm4 flagm2 frint svei8mm svebf16 i8mm bf16\\nL1d cache:                               256 KiB (4 instances)\\nL1i cache:                               256 KiB (4 instances)\\nL2 cache:                                4 MiB (4 instances)\\nL3 cache:                                128 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Not affected\\nVulnerability Spec store bypass:         Mitigation; Speculative Store Bypass disabled via prctl\\nVulnerability Spectre v1:                Mitigation; __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; CSV2, BHB\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Not affected\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24-arm64\", \"runner_image_version\": \"20260920.129.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng/graphic_pal8 rgba8",
            "value": 792.37,
            "unit": "MPix/s",
            "extra": "neon \nRunner: {\"os\": \"Linux-6.17.0-1022-azure-aarch64-with-glibc2.39\", \"machine\": \"aarch64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            aarch64\\nCPU op-mode(s):                          32-bit, 64-bit\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               ARM\\nModel name:                              Neoverse-N2\\nModel:                                   0\\nThread(s) per core:                      1\\nCore(s) per socket:                      4\\nSocket(s):                               1\\nStepping:                                r0p0\\nBogoMIPS:                                2000.00\\nFlags:                                   fp asimd evtstrm aes pmull sha1 sha2 crc32 atomics fphp asimdhp cpuid asimdrdm jscvt fcma lrcpc dcpop sha3 sm3 sm4 asimddp sha512 sve asimdfhm uscat ilrcpc flagm sb paca pacg dcpodp sve2 sveaes svebitperm svesha3 svesm4 flagm2 frint svei8mm svebf16 i8mm bf16\\nL1d cache:                               256 KiB (4 instances)\\nL1i cache:                               256 KiB (4 instances)\\nL2 cache:                                4 MiB (4 instances)\\nL3 cache:                                128 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Not affected\\nVulnerability Spec store bypass:         Mitigation; Speculative Store Bypass disabled via prctl\\nVulnerability Spectre v1:                Mitigation; __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; CSV2, BHB\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Not affected\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24-arm64\", \"runner_image_version\": \"20260920.129.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-arm64/libpng/graphic_pal8 rgba8",
            "value": 324.14,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Linux-6.17.0-1022-azure-aarch64-with-glibc2.39\", \"machine\": \"aarch64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            aarch64\\nCPU op-mode(s):                          32-bit, 64-bit\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               ARM\\nModel name:                              Neoverse-N2\\nModel:                                   0\\nThread(s) per core:                      1\\nCore(s) per socket:                      4\\nSocket(s):                               1\\nStepping:                                r0p0\\nBogoMIPS:                                2000.00\\nFlags:                                   fp asimd evtstrm aes pmull sha1 sha2 crc32 atomics fphp asimdhp cpuid asimdrdm jscvt fcma lrcpc dcpop sha3 sm3 sm4 asimddp sha512 sve asimdfhm uscat ilrcpc flagm sb paca pacg dcpodp sve2 sveaes svebitperm svesha3 svesm4 flagm2 frint svei8mm svebf16 i8mm bf16\\nL1d cache:                               256 KiB (4 instances)\\nL1i cache:                               256 KiB (4 instances)\\nL2 cache:                                4 MiB (4 instances)\\nL3 cache:                                128 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Not affected\\nVulnerability Spec store bypass:         Mitigation; Speculative Store Bypass disabled via prctl\\nVulnerability Spectre v1:                Mitigation; __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; CSV2, BHB\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Not affected\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24-arm64\", \"runner_image_version\": \"20260920.129.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng/graphic_rgb8 native",
            "value": 913.41,
            "unit": "MPix/s",
            "extra": "neon \nRunner: {\"os\": \"Linux-6.17.0-1022-azure-aarch64-with-glibc2.39\", \"machine\": \"aarch64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            aarch64\\nCPU op-mode(s):                          32-bit, 64-bit\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               ARM\\nModel name:                              Neoverse-N2\\nModel:                                   0\\nThread(s) per core:                      1\\nCore(s) per socket:                      4\\nSocket(s):                               1\\nStepping:                                r0p0\\nBogoMIPS:                                2000.00\\nFlags:                                   fp asimd evtstrm aes pmull sha1 sha2 crc32 atomics fphp asimdhp cpuid asimdrdm jscvt fcma lrcpc dcpop sha3 sm3 sm4 asimddp sha512 sve asimdfhm uscat ilrcpc flagm sb paca pacg dcpodp sve2 sveaes svebitperm svesha3 svesm4 flagm2 frint svei8mm svebf16 i8mm bf16\\nL1d cache:                               256 KiB (4 instances)\\nL1i cache:                               256 KiB (4 instances)\\nL2 cache:                                4 MiB (4 instances)\\nL3 cache:                                128 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Not affected\\nVulnerability Spec store bypass:         Mitigation; Speculative Store Bypass disabled via prctl\\nVulnerability Spectre v1:                Mitigation; __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; CSV2, BHB\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Not affected\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24-arm64\", \"runner_image_version\": \"20260920.129.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-arm64/libpng/graphic_rgb8 native",
            "value": 160.98,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Linux-6.17.0-1022-azure-aarch64-with-glibc2.39\", \"machine\": \"aarch64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            aarch64\\nCPU op-mode(s):                          32-bit, 64-bit\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               ARM\\nModel name:                              Neoverse-N2\\nModel:                                   0\\nThread(s) per core:                      1\\nCore(s) per socket:                      4\\nSocket(s):                               1\\nStepping:                                r0p0\\nBogoMIPS:                                2000.00\\nFlags:                                   fp asimd evtstrm aes pmull sha1 sha2 crc32 atomics fphp asimdhp cpuid asimdrdm jscvt fcma lrcpc dcpop sha3 sm3 sm4 asimddp sha512 sve asimdfhm uscat ilrcpc flagm sb paca pacg dcpodp sve2 sveaes svebitperm svesha3 svesm4 flagm2 frint svei8mm svebf16 i8mm bf16\\nL1d cache:                               256 KiB (4 instances)\\nL1i cache:                               256 KiB (4 instances)\\nL2 cache:                                4 MiB (4 instances)\\nL3 cache:                                128 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Not affected\\nVulnerability Spec store bypass:         Mitigation; Speculative Store Bypass disabled via prctl\\nVulnerability Spectre v1:                Mitigation; __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; CSV2, BHB\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Not affected\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24-arm64\", \"runner_image_version\": \"20260920.129.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng/graphic_rgb8 rgba8",
            "value": 555.91,
            "unit": "MPix/s",
            "extra": "neon \nRunner: {\"os\": \"Linux-6.17.0-1022-azure-aarch64-with-glibc2.39\", \"machine\": \"aarch64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            aarch64\\nCPU op-mode(s):                          32-bit, 64-bit\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               ARM\\nModel name:                              Neoverse-N2\\nModel:                                   0\\nThread(s) per core:                      1\\nCore(s) per socket:                      4\\nSocket(s):                               1\\nStepping:                                r0p0\\nBogoMIPS:                                2000.00\\nFlags:                                   fp asimd evtstrm aes pmull sha1 sha2 crc32 atomics fphp asimdhp cpuid asimdrdm jscvt fcma lrcpc dcpop sha3 sm3 sm4 asimddp sha512 sve asimdfhm uscat ilrcpc flagm sb paca pacg dcpodp sve2 sveaes svebitperm svesha3 svesm4 flagm2 frint svei8mm svebf16 i8mm bf16\\nL1d cache:                               256 KiB (4 instances)\\nL1i cache:                               256 KiB (4 instances)\\nL2 cache:                                4 MiB (4 instances)\\nL3 cache:                                128 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Not affected\\nVulnerability Spec store bypass:         Mitigation; Speculative Store Bypass disabled via prctl\\nVulnerability Spectre v1:                Mitigation; __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; CSV2, BHB\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Not affected\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24-arm64\", \"runner_image_version\": \"20260920.129.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-arm64/libpng/graphic_rgb8 rgba8",
            "value": 143.75,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Linux-6.17.0-1022-azure-aarch64-with-glibc2.39\", \"machine\": \"aarch64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            aarch64\\nCPU op-mode(s):                          32-bit, 64-bit\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               ARM\\nModel name:                              Neoverse-N2\\nModel:                                   0\\nThread(s) per core:                      1\\nCore(s) per socket:                      4\\nSocket(s):                               1\\nStepping:                                r0p0\\nBogoMIPS:                                2000.00\\nFlags:                                   fp asimd evtstrm aes pmull sha1 sha2 crc32 atomics fphp asimdhp cpuid asimdrdm jscvt fcma lrcpc dcpop sha3 sm3 sm4 asimddp sha512 sve asimdfhm uscat ilrcpc flagm sb paca pacg dcpodp sve2 sveaes svebitperm svesha3 svesm4 flagm2 frint svei8mm svebf16 i8mm bf16\\nL1d cache:                               256 KiB (4 instances)\\nL1i cache:                               256 KiB (4 instances)\\nL2 cache:                                4 MiB (4 instances)\\nL3 cache:                                128 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Not affected\\nVulnerability Spec store bypass:         Mitigation; Speculative Store Bypass disabled via prctl\\nVulnerability Spectre v1:                Mitigation; __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; CSV2, BHB\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Not affected\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24-arm64\", \"runner_image_version\": \"20260920.129.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-arm64/memory-copy-vs-libpng-zng/64MiB",
            "value": 31876.84,
            "unit": "MB/s",
            "extra": "Warm buffers; 128 MiB working set; median of five batches; payload bytes only; measured reference, not a theoretical limit\nRunner: {\"os\": \"Linux-6.17.0-1022-azure-aarch64-with-glibc2.39\", \"machine\": \"aarch64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            aarch64\\nCPU op-mode(s):                          32-bit, 64-bit\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               ARM\\nModel name:                              Neoverse-N2\\nModel:                                   0\\nThread(s) per core:                      1\\nCore(s) per socket:                      4\\nSocket(s):                               1\\nStepping:                                r0p0\\nBogoMIPS:                                2000.00\\nFlags:                                   fp asimd evtstrm aes pmull sha1 sha2 crc32 atomics fphp asimdhp cpuid asimdrdm jscvt fcma lrcpc dcpop sha3 sm3 sm4 asimddp sha512 sve asimdfhm uscat ilrcpc flagm sb paca pacg dcpodp sve2 sveaes svebitperm svesha3 svesm4 flagm2 frint svei8mm svebf16 i8mm bf16\\nL1d cache:                               256 KiB (4 instances)\\nL1i cache:                               256 KiB (4 instances)\\nL2 cache:                                4 MiB (4 instances)\\nL3 cache:                                128 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Not affected\\nVulnerability Spec store bypass:         Mitigation; Speculative Store Bypass disabled via prctl\\nVulnerability Spectre v1:                Mitigation; __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; CSV2, BHB\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Not affected\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24-arm64\", \"runner_image_version\": \"20260920.129.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}"
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng-zng/photo_rgb8 native",
            "value": 233.29,
            "unit": "MPix/s",
            "extra": "neon \nRunner: {\"os\": \"Linux-6.17.0-1022-azure-aarch64-with-glibc2.39\", \"machine\": \"aarch64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            aarch64\\nCPU op-mode(s):                          32-bit, 64-bit\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               ARM\\nModel name:                              Neoverse-N2\\nModel:                                   0\\nThread(s) per core:                      1\\nCore(s) per socket:                      4\\nSocket(s):                               1\\nStepping:                                r0p0\\nBogoMIPS:                                2000.00\\nFlags:                                   fp asimd evtstrm aes pmull sha1 sha2 crc32 atomics fphp asimdhp cpuid asimdrdm jscvt fcma lrcpc dcpop sha3 sm3 sm4 asimddp sha512 sve asimdfhm uscat ilrcpc flagm sb paca pacg dcpodp sve2 sveaes svebitperm svesha3 svesm4 flagm2 frint svei8mm svebf16 i8mm bf16\\nL1d cache:                               256 KiB (4 instances)\\nL1i cache:                               256 KiB (4 instances)\\nL2 cache:                                4 MiB (4 instances)\\nL3 cache:                                128 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Not affected\\nVulnerability Spec store bypass:         Mitigation; Speculative Store Bypass disabled via prctl\\nVulnerability Spectre v1:                Mitigation; __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; CSV2, BHB\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Not affected\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24-arm64\", \"runner_image_version\": \"20260920.129.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-arm64/libpng-zng/photo_rgb8 native",
            "value": 199.48,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Linux-6.17.0-1022-azure-aarch64-with-glibc2.39\", \"machine\": \"aarch64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            aarch64\\nCPU op-mode(s):                          32-bit, 64-bit\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               ARM\\nModel name:                              Neoverse-N2\\nModel:                                   0\\nThread(s) per core:                      1\\nCore(s) per socket:                      4\\nSocket(s):                               1\\nStepping:                                r0p0\\nBogoMIPS:                                2000.00\\nFlags:                                   fp asimd evtstrm aes pmull sha1 sha2 crc32 atomics fphp asimdhp cpuid asimdrdm jscvt fcma lrcpc dcpop sha3 sm3 sm4 asimddp sha512 sve asimdfhm uscat ilrcpc flagm sb paca pacg dcpodp sve2 sveaes svebitperm svesha3 svesm4 flagm2 frint svei8mm svebf16 i8mm bf16\\nL1d cache:                               256 KiB (4 instances)\\nL1i cache:                               256 KiB (4 instances)\\nL2 cache:                                4 MiB (4 instances)\\nL3 cache:                                128 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Not affected\\nVulnerability Spec store bypass:         Mitigation; Speculative Store Bypass disabled via prctl\\nVulnerability Spectre v1:                Mitigation; __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; CSV2, BHB\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Not affected\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24-arm64\", \"runner_image_version\": \"20260920.129.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng-zng/photo_rgb8 rgba8",
            "value": 200.32,
            "unit": "MPix/s",
            "extra": "neon \nRunner: {\"os\": \"Linux-6.17.0-1022-azure-aarch64-with-glibc2.39\", \"machine\": \"aarch64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            aarch64\\nCPU op-mode(s):                          32-bit, 64-bit\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               ARM\\nModel name:                              Neoverse-N2\\nModel:                                   0\\nThread(s) per core:                      1\\nCore(s) per socket:                      4\\nSocket(s):                               1\\nStepping:                                r0p0\\nBogoMIPS:                                2000.00\\nFlags:                                   fp asimd evtstrm aes pmull sha1 sha2 crc32 atomics fphp asimdhp cpuid asimdrdm jscvt fcma lrcpc dcpop sha3 sm3 sm4 asimddp sha512 sve asimdfhm uscat ilrcpc flagm sb paca pacg dcpodp sve2 sveaes svebitperm svesha3 svesm4 flagm2 frint svei8mm svebf16 i8mm bf16\\nL1d cache:                               256 KiB (4 instances)\\nL1i cache:                               256 KiB (4 instances)\\nL2 cache:                                4 MiB (4 instances)\\nL3 cache:                                128 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Not affected\\nVulnerability Spec store bypass:         Mitigation; Speculative Store Bypass disabled via prctl\\nVulnerability Spectre v1:                Mitigation; __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; CSV2, BHB\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Not affected\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24-arm64\", \"runner_image_version\": \"20260920.129.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-arm64/libpng-zng/photo_rgb8 rgba8",
            "value": 173.57,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Linux-6.17.0-1022-azure-aarch64-with-glibc2.39\", \"machine\": \"aarch64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            aarch64\\nCPU op-mode(s):                          32-bit, 64-bit\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               ARM\\nModel name:                              Neoverse-N2\\nModel:                                   0\\nThread(s) per core:                      1\\nCore(s) per socket:                      4\\nSocket(s):                               1\\nStepping:                                r0p0\\nBogoMIPS:                                2000.00\\nFlags:                                   fp asimd evtstrm aes pmull sha1 sha2 crc32 atomics fphp asimdhp cpuid asimdrdm jscvt fcma lrcpc dcpop sha3 sm3 sm4 asimddp sha512 sve asimdfhm uscat ilrcpc flagm sb paca pacg dcpodp sve2 sveaes svebitperm svesha3 svesm4 flagm2 frint svei8mm svebf16 i8mm bf16\\nL1d cache:                               256 KiB (4 instances)\\nL1i cache:                               256 KiB (4 instances)\\nL2 cache:                                4 MiB (4 instances)\\nL3 cache:                                128 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Not affected\\nVulnerability Spec store bypass:         Mitigation; Speculative Store Bypass disabled via prctl\\nVulnerability Spectre v1:                Mitigation; __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; CSV2, BHB\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Not affected\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24-arm64\", \"runner_image_version\": \"20260920.129.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng-zng/photo_rgba8 native",
            "value": 81.21,
            "unit": "MPix/s",
            "extra": "neon \nRunner: {\"os\": \"Linux-6.17.0-1022-azure-aarch64-with-glibc2.39\", \"machine\": \"aarch64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            aarch64\\nCPU op-mode(s):                          32-bit, 64-bit\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               ARM\\nModel name:                              Neoverse-N2\\nModel:                                   0\\nThread(s) per core:                      1\\nCore(s) per socket:                      4\\nSocket(s):                               1\\nStepping:                                r0p0\\nBogoMIPS:                                2000.00\\nFlags:                                   fp asimd evtstrm aes pmull sha1 sha2 crc32 atomics fphp asimdhp cpuid asimdrdm jscvt fcma lrcpc dcpop sha3 sm3 sm4 asimddp sha512 sve asimdfhm uscat ilrcpc flagm sb paca pacg dcpodp sve2 sveaes svebitperm svesha3 svesm4 flagm2 frint svei8mm svebf16 i8mm bf16\\nL1d cache:                               256 KiB (4 instances)\\nL1i cache:                               256 KiB (4 instances)\\nL2 cache:                                4 MiB (4 instances)\\nL3 cache:                                128 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Not affected\\nVulnerability Spec store bypass:         Mitigation; Speculative Store Bypass disabled via prctl\\nVulnerability Spectre v1:                Mitigation; __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; CSV2, BHB\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Not affected\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24-arm64\", \"runner_image_version\": \"20260920.129.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-arm64/libpng-zng/photo_rgba8 native",
            "value": 82.98,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Linux-6.17.0-1022-azure-aarch64-with-glibc2.39\", \"machine\": \"aarch64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            aarch64\\nCPU op-mode(s):                          32-bit, 64-bit\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               ARM\\nModel name:                              Neoverse-N2\\nModel:                                   0\\nThread(s) per core:                      1\\nCore(s) per socket:                      4\\nSocket(s):                               1\\nStepping:                                r0p0\\nBogoMIPS:                                2000.00\\nFlags:                                   fp asimd evtstrm aes pmull sha1 sha2 crc32 atomics fphp asimdhp cpuid asimdrdm jscvt fcma lrcpc dcpop sha3 sm3 sm4 asimddp sha512 sve asimdfhm uscat ilrcpc flagm sb paca pacg dcpodp sve2 sveaes svebitperm svesha3 svesm4 flagm2 frint svei8mm svebf16 i8mm bf16\\nL1d cache:                               256 KiB (4 instances)\\nL1i cache:                               256 KiB (4 instances)\\nL2 cache:                                4 MiB (4 instances)\\nL3 cache:                                128 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Not affected\\nVulnerability Spec store bypass:         Mitigation; Speculative Store Bypass disabled via prctl\\nVulnerability Spectre v1:                Mitigation; __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; CSV2, BHB\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Not affected\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24-arm64\", \"runner_image_version\": \"20260920.129.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng-zng/photo_rgba8 rgba8",
            "value": 75.3,
            "unit": "MPix/s",
            "extra": "neon \nRunner: {\"os\": \"Linux-6.17.0-1022-azure-aarch64-with-glibc2.39\", \"machine\": \"aarch64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            aarch64\\nCPU op-mode(s):                          32-bit, 64-bit\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               ARM\\nModel name:                              Neoverse-N2\\nModel:                                   0\\nThread(s) per core:                      1\\nCore(s) per socket:                      4\\nSocket(s):                               1\\nStepping:                                r0p0\\nBogoMIPS:                                2000.00\\nFlags:                                   fp asimd evtstrm aes pmull sha1 sha2 crc32 atomics fphp asimdhp cpuid asimdrdm jscvt fcma lrcpc dcpop sha3 sm3 sm4 asimddp sha512 sve asimdfhm uscat ilrcpc flagm sb paca pacg dcpodp sve2 sveaes svebitperm svesha3 svesm4 flagm2 frint svei8mm svebf16 i8mm bf16\\nL1d cache:                               256 KiB (4 instances)\\nL1i cache:                               256 KiB (4 instances)\\nL2 cache:                                4 MiB (4 instances)\\nL3 cache:                                128 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Not affected\\nVulnerability Spec store bypass:         Mitigation; Speculative Store Bypass disabled via prctl\\nVulnerability Spectre v1:                Mitigation; __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; CSV2, BHB\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Not affected\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24-arm64\", \"runner_image_version\": \"20260920.129.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-arm64/libpng-zng/photo_rgba8 rgba8",
            "value": 80.28,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Linux-6.17.0-1022-azure-aarch64-with-glibc2.39\", \"machine\": \"aarch64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            aarch64\\nCPU op-mode(s):                          32-bit, 64-bit\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               ARM\\nModel name:                              Neoverse-N2\\nModel:                                   0\\nThread(s) per core:                      1\\nCore(s) per socket:                      4\\nSocket(s):                               1\\nStepping:                                r0p0\\nBogoMIPS:                                2000.00\\nFlags:                                   fp asimd evtstrm aes pmull sha1 sha2 crc32 atomics fphp asimdhp cpuid asimdrdm jscvt fcma lrcpc dcpop sha3 sm3 sm4 asimddp sha512 sve asimdfhm uscat ilrcpc flagm sb paca pacg dcpodp sve2 sveaes svebitperm svesha3 svesm4 flagm2 frint svei8mm svebf16 i8mm bf16\\nL1d cache:                               256 KiB (4 instances)\\nL1i cache:                               256 KiB (4 instances)\\nL2 cache:                                4 MiB (4 instances)\\nL3 cache:                                128 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Not affected\\nVulnerability Spec store bypass:         Mitigation; Speculative Store Bypass disabled via prctl\\nVulnerability Spectre v1:                Mitigation; __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; CSV2, BHB\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Not affected\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24-arm64\", \"runner_image_version\": \"20260920.129.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng-zng/photo_gray8 native",
            "value": 351.94,
            "unit": "MPix/s",
            "extra": "neon \nRunner: {\"os\": \"Linux-6.17.0-1022-azure-aarch64-with-glibc2.39\", \"machine\": \"aarch64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            aarch64\\nCPU op-mode(s):                          32-bit, 64-bit\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               ARM\\nModel name:                              Neoverse-N2\\nModel:                                   0\\nThread(s) per core:                      1\\nCore(s) per socket:                      4\\nSocket(s):                               1\\nStepping:                                r0p0\\nBogoMIPS:                                2000.00\\nFlags:                                   fp asimd evtstrm aes pmull sha1 sha2 crc32 atomics fphp asimdhp cpuid asimdrdm jscvt fcma lrcpc dcpop sha3 sm3 sm4 asimddp sha512 sve asimdfhm uscat ilrcpc flagm sb paca pacg dcpodp sve2 sveaes svebitperm svesha3 svesm4 flagm2 frint svei8mm svebf16 i8mm bf16\\nL1d cache:                               256 KiB (4 instances)\\nL1i cache:                               256 KiB (4 instances)\\nL2 cache:                                4 MiB (4 instances)\\nL3 cache:                                128 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Not affected\\nVulnerability Spec store bypass:         Mitigation; Speculative Store Bypass disabled via prctl\\nVulnerability Spectre v1:                Mitigation; __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; CSV2, BHB\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Not affected\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24-arm64\", \"runner_image_version\": \"20260920.129.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-arm64/libpng-zng/photo_gray8 native",
            "value": 281.48,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Linux-6.17.0-1022-azure-aarch64-with-glibc2.39\", \"machine\": \"aarch64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            aarch64\\nCPU op-mode(s):                          32-bit, 64-bit\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               ARM\\nModel name:                              Neoverse-N2\\nModel:                                   0\\nThread(s) per core:                      1\\nCore(s) per socket:                      4\\nSocket(s):                               1\\nStepping:                                r0p0\\nBogoMIPS:                                2000.00\\nFlags:                                   fp asimd evtstrm aes pmull sha1 sha2 crc32 atomics fphp asimdhp cpuid asimdrdm jscvt fcma lrcpc dcpop sha3 sm3 sm4 asimddp sha512 sve asimdfhm uscat ilrcpc flagm sb paca pacg dcpodp sve2 sveaes svebitperm svesha3 svesm4 flagm2 frint svei8mm svebf16 i8mm bf16\\nL1d cache:                               256 KiB (4 instances)\\nL1i cache:                               256 KiB (4 instances)\\nL2 cache:                                4 MiB (4 instances)\\nL3 cache:                                128 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Not affected\\nVulnerability Spec store bypass:         Mitigation; Speculative Store Bypass disabled via prctl\\nVulnerability Spectre v1:                Mitigation; __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; CSV2, BHB\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Not affected\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24-arm64\", \"runner_image_version\": \"20260920.129.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng-zng/photo_gray8 rgba8",
            "value": 332.14,
            "unit": "MPix/s",
            "extra": "neon \nRunner: {\"os\": \"Linux-6.17.0-1022-azure-aarch64-with-glibc2.39\", \"machine\": \"aarch64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            aarch64\\nCPU op-mode(s):                          32-bit, 64-bit\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               ARM\\nModel name:                              Neoverse-N2\\nModel:                                   0\\nThread(s) per core:                      1\\nCore(s) per socket:                      4\\nSocket(s):                               1\\nStepping:                                r0p0\\nBogoMIPS:                                2000.00\\nFlags:                                   fp asimd evtstrm aes pmull sha1 sha2 crc32 atomics fphp asimdhp cpuid asimdrdm jscvt fcma lrcpc dcpop sha3 sm3 sm4 asimddp sha512 sve asimdfhm uscat ilrcpc flagm sb paca pacg dcpodp sve2 sveaes svebitperm svesha3 svesm4 flagm2 frint svei8mm svebf16 i8mm bf16\\nL1d cache:                               256 KiB (4 instances)\\nL1i cache:                               256 KiB (4 instances)\\nL2 cache:                                4 MiB (4 instances)\\nL3 cache:                                128 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Not affected\\nVulnerability Spec store bypass:         Mitigation; Speculative Store Bypass disabled via prctl\\nVulnerability Spectre v1:                Mitigation; __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; CSV2, BHB\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Not affected\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24-arm64\", \"runner_image_version\": \"20260920.129.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-arm64/libpng-zng/photo_gray8 rgba8",
            "value": 204.81,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Linux-6.17.0-1022-azure-aarch64-with-glibc2.39\", \"machine\": \"aarch64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            aarch64\\nCPU op-mode(s):                          32-bit, 64-bit\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               ARM\\nModel name:                              Neoverse-N2\\nModel:                                   0\\nThread(s) per core:                      1\\nCore(s) per socket:                      4\\nSocket(s):                               1\\nStepping:                                r0p0\\nBogoMIPS:                                2000.00\\nFlags:                                   fp asimd evtstrm aes pmull sha1 sha2 crc32 atomics fphp asimdhp cpuid asimdrdm jscvt fcma lrcpc dcpop sha3 sm3 sm4 asimddp sha512 sve asimdfhm uscat ilrcpc flagm sb paca pacg dcpodp sve2 sveaes svebitperm svesha3 svesm4 flagm2 frint svei8mm svebf16 i8mm bf16\\nL1d cache:                               256 KiB (4 instances)\\nL1i cache:                               256 KiB (4 instances)\\nL2 cache:                                4 MiB (4 instances)\\nL3 cache:                                128 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Not affected\\nVulnerability Spec store bypass:         Mitigation; Speculative Store Bypass disabled via prctl\\nVulnerability Spectre v1:                Mitigation; __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; CSV2, BHB\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Not affected\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24-arm64\", \"runner_image_version\": \"20260920.129.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng-zng/photo_gray16 native",
            "value": 370.53,
            "unit": "MPix/s",
            "extra": "neon \nRunner: {\"os\": \"Linux-6.17.0-1022-azure-aarch64-with-glibc2.39\", \"machine\": \"aarch64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            aarch64\\nCPU op-mode(s):                          32-bit, 64-bit\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               ARM\\nModel name:                              Neoverse-N2\\nModel:                                   0\\nThread(s) per core:                      1\\nCore(s) per socket:                      4\\nSocket(s):                               1\\nStepping:                                r0p0\\nBogoMIPS:                                2000.00\\nFlags:                                   fp asimd evtstrm aes pmull sha1 sha2 crc32 atomics fphp asimdhp cpuid asimdrdm jscvt fcma lrcpc dcpop sha3 sm3 sm4 asimddp sha512 sve asimdfhm uscat ilrcpc flagm sb paca pacg dcpodp sve2 sveaes svebitperm svesha3 svesm4 flagm2 frint svei8mm svebf16 i8mm bf16\\nL1d cache:                               256 KiB (4 instances)\\nL1i cache:                               256 KiB (4 instances)\\nL2 cache:                                4 MiB (4 instances)\\nL3 cache:                                128 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Not affected\\nVulnerability Spec store bypass:         Mitigation; Speculative Store Bypass disabled via prctl\\nVulnerability Spectre v1:                Mitigation; __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; CSV2, BHB\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Not affected\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24-arm64\", \"runner_image_version\": \"20260920.129.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-arm64/libpng-zng/photo_gray16 native",
            "value": 241.21,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Linux-6.17.0-1022-azure-aarch64-with-glibc2.39\", \"machine\": \"aarch64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            aarch64\\nCPU op-mode(s):                          32-bit, 64-bit\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               ARM\\nModel name:                              Neoverse-N2\\nModel:                                   0\\nThread(s) per core:                      1\\nCore(s) per socket:                      4\\nSocket(s):                               1\\nStepping:                                r0p0\\nBogoMIPS:                                2000.00\\nFlags:                                   fp asimd evtstrm aes pmull sha1 sha2 crc32 atomics fphp asimdhp cpuid asimdrdm jscvt fcma lrcpc dcpop sha3 sm3 sm4 asimddp sha512 sve asimdfhm uscat ilrcpc flagm sb paca pacg dcpodp sve2 sveaes svebitperm svesha3 svesm4 flagm2 frint svei8mm svebf16 i8mm bf16\\nL1d cache:                               256 KiB (4 instances)\\nL1i cache:                               256 KiB (4 instances)\\nL2 cache:                                4 MiB (4 instances)\\nL3 cache:                                128 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Not affected\\nVulnerability Spec store bypass:         Mitigation; Speculative Store Bypass disabled via prctl\\nVulnerability Spectre v1:                Mitigation; __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; CSV2, BHB\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Not affected\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24-arm64\", \"runner_image_version\": \"20260920.129.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng-zng/photo_gray16 rgba8",
            "value": 295.35,
            "unit": "MPix/s",
            "extra": "neon \nRunner: {\"os\": \"Linux-6.17.0-1022-azure-aarch64-with-glibc2.39\", \"machine\": \"aarch64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            aarch64\\nCPU op-mode(s):                          32-bit, 64-bit\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               ARM\\nModel name:                              Neoverse-N2\\nModel:                                   0\\nThread(s) per core:                      1\\nCore(s) per socket:                      4\\nSocket(s):                               1\\nStepping:                                r0p0\\nBogoMIPS:                                2000.00\\nFlags:                                   fp asimd evtstrm aes pmull sha1 sha2 crc32 atomics fphp asimdhp cpuid asimdrdm jscvt fcma lrcpc dcpop sha3 sm3 sm4 asimddp sha512 sve asimdfhm uscat ilrcpc flagm sb paca pacg dcpodp sve2 sveaes svebitperm svesha3 svesm4 flagm2 frint svei8mm svebf16 i8mm bf16\\nL1d cache:                               256 KiB (4 instances)\\nL1i cache:                               256 KiB (4 instances)\\nL2 cache:                                4 MiB (4 instances)\\nL3 cache:                                128 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Not affected\\nVulnerability Spec store bypass:         Mitigation; Speculative Store Bypass disabled via prctl\\nVulnerability Spectre v1:                Mitigation; __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; CSV2, BHB\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Not affected\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24-arm64\", \"runner_image_version\": \"20260920.129.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-arm64/libpng-zng/photo_gray16 rgba8",
            "value": 141.17,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Linux-6.17.0-1022-azure-aarch64-with-glibc2.39\", \"machine\": \"aarch64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            aarch64\\nCPU op-mode(s):                          32-bit, 64-bit\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               ARM\\nModel name:                              Neoverse-N2\\nModel:                                   0\\nThread(s) per core:                      1\\nCore(s) per socket:                      4\\nSocket(s):                               1\\nStepping:                                r0p0\\nBogoMIPS:                                2000.00\\nFlags:                                   fp asimd evtstrm aes pmull sha1 sha2 crc32 atomics fphp asimdhp cpuid asimdrdm jscvt fcma lrcpc dcpop sha3 sm3 sm4 asimddp sha512 sve asimdfhm uscat ilrcpc flagm sb paca pacg dcpodp sve2 sveaes svebitperm svesha3 svesm4 flagm2 frint svei8mm svebf16 i8mm bf16\\nL1d cache:                               256 KiB (4 instances)\\nL1i cache:                               256 KiB (4 instances)\\nL2 cache:                                4 MiB (4 instances)\\nL3 cache:                                128 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Not affected\\nVulnerability Spec store bypass:         Mitigation; Speculative Store Bypass disabled via prctl\\nVulnerability Spectre v1:                Mitigation; __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; CSV2, BHB\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Not affected\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24-arm64\", \"runner_image_version\": \"20260920.129.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng-zng/graphic_pal8 native",
            "value": 5485.06,
            "unit": "MPix/s",
            "extra": "neon \nRunner: {\"os\": \"Linux-6.17.0-1022-azure-aarch64-with-glibc2.39\", \"machine\": \"aarch64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            aarch64\\nCPU op-mode(s):                          32-bit, 64-bit\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               ARM\\nModel name:                              Neoverse-N2\\nModel:                                   0\\nThread(s) per core:                      1\\nCore(s) per socket:                      4\\nSocket(s):                               1\\nStepping:                                r0p0\\nBogoMIPS:                                2000.00\\nFlags:                                   fp asimd evtstrm aes pmull sha1 sha2 crc32 atomics fphp asimdhp cpuid asimdrdm jscvt fcma lrcpc dcpop sha3 sm3 sm4 asimddp sha512 sve asimdfhm uscat ilrcpc flagm sb paca pacg dcpodp sve2 sveaes svebitperm svesha3 svesm4 flagm2 frint svei8mm svebf16 i8mm bf16\\nL1d cache:                               256 KiB (4 instances)\\nL1i cache:                               256 KiB (4 instances)\\nL2 cache:                                4 MiB (4 instances)\\nL3 cache:                                128 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Not affected\\nVulnerability Spec store bypass:         Mitigation; Speculative Store Bypass disabled via prctl\\nVulnerability Spectre v1:                Mitigation; __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; CSV2, BHB\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Not affected\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24-arm64\", \"runner_image_version\": \"20260920.129.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-arm64/libpng-zng/graphic_pal8 native",
            "value": 1319.02,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Linux-6.17.0-1022-azure-aarch64-with-glibc2.39\", \"machine\": \"aarch64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            aarch64\\nCPU op-mode(s):                          32-bit, 64-bit\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               ARM\\nModel name:                              Neoverse-N2\\nModel:                                   0\\nThread(s) per core:                      1\\nCore(s) per socket:                      4\\nSocket(s):                               1\\nStepping:                                r0p0\\nBogoMIPS:                                2000.00\\nFlags:                                   fp asimd evtstrm aes pmull sha1 sha2 crc32 atomics fphp asimdhp cpuid asimdrdm jscvt fcma lrcpc dcpop sha3 sm3 sm4 asimddp sha512 sve asimdfhm uscat ilrcpc flagm sb paca pacg dcpodp sve2 sveaes svebitperm svesha3 svesm4 flagm2 frint svei8mm svebf16 i8mm bf16\\nL1d cache:                               256 KiB (4 instances)\\nL1i cache:                               256 KiB (4 instances)\\nL2 cache:                                4 MiB (4 instances)\\nL3 cache:                                128 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Not affected\\nVulnerability Spec store bypass:         Mitigation; Speculative Store Bypass disabled via prctl\\nVulnerability Spectre v1:                Mitigation; __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; CSV2, BHB\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Not affected\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24-arm64\", \"runner_image_version\": \"20260920.129.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng-zng/graphic_pal8 rgba8",
            "value": 795.87,
            "unit": "MPix/s",
            "extra": "neon \nRunner: {\"os\": \"Linux-6.17.0-1022-azure-aarch64-with-glibc2.39\", \"machine\": \"aarch64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            aarch64\\nCPU op-mode(s):                          32-bit, 64-bit\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               ARM\\nModel name:                              Neoverse-N2\\nModel:                                   0\\nThread(s) per core:                      1\\nCore(s) per socket:                      4\\nSocket(s):                               1\\nStepping:                                r0p0\\nBogoMIPS:                                2000.00\\nFlags:                                   fp asimd evtstrm aes pmull sha1 sha2 crc32 atomics fphp asimdhp cpuid asimdrdm jscvt fcma lrcpc dcpop sha3 sm3 sm4 asimddp sha512 sve asimdfhm uscat ilrcpc flagm sb paca pacg dcpodp sve2 sveaes svebitperm svesha3 svesm4 flagm2 frint svei8mm svebf16 i8mm bf16\\nL1d cache:                               256 KiB (4 instances)\\nL1i cache:                               256 KiB (4 instances)\\nL2 cache:                                4 MiB (4 instances)\\nL3 cache:                                128 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Not affected\\nVulnerability Spec store bypass:         Mitigation; Speculative Store Bypass disabled via prctl\\nVulnerability Spectre v1:                Mitigation; __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; CSV2, BHB\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Not affected\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24-arm64\", \"runner_image_version\": \"20260920.129.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-arm64/libpng-zng/graphic_pal8 rgba8",
            "value": 601.44,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Linux-6.17.0-1022-azure-aarch64-with-glibc2.39\", \"machine\": \"aarch64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            aarch64\\nCPU op-mode(s):                          32-bit, 64-bit\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               ARM\\nModel name:                              Neoverse-N2\\nModel:                                   0\\nThread(s) per core:                      1\\nCore(s) per socket:                      4\\nSocket(s):                               1\\nStepping:                                r0p0\\nBogoMIPS:                                2000.00\\nFlags:                                   fp asimd evtstrm aes pmull sha1 sha2 crc32 atomics fphp asimdhp cpuid asimdrdm jscvt fcma lrcpc dcpop sha3 sm3 sm4 asimddp sha512 sve asimdfhm uscat ilrcpc flagm sb paca pacg dcpodp sve2 sveaes svebitperm svesha3 svesm4 flagm2 frint svei8mm svebf16 i8mm bf16\\nL1d cache:                               256 KiB (4 instances)\\nL1i cache:                               256 KiB (4 instances)\\nL2 cache:                                4 MiB (4 instances)\\nL3 cache:                                128 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Not affected\\nVulnerability Spec store bypass:         Mitigation; Speculative Store Bypass disabled via prctl\\nVulnerability Spectre v1:                Mitigation; __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; CSV2, BHB\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Not affected\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24-arm64\", \"runner_image_version\": \"20260920.129.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng-zng/graphic_rgb8 native",
            "value": 929.57,
            "unit": "MPix/s",
            "extra": "neon \nRunner: {\"os\": \"Linux-6.17.0-1022-azure-aarch64-with-glibc2.39\", \"machine\": \"aarch64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            aarch64\\nCPU op-mode(s):                          32-bit, 64-bit\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               ARM\\nModel name:                              Neoverse-N2\\nModel:                                   0\\nThread(s) per core:                      1\\nCore(s) per socket:                      4\\nSocket(s):                               1\\nStepping:                                r0p0\\nBogoMIPS:                                2000.00\\nFlags:                                   fp asimd evtstrm aes pmull sha1 sha2 crc32 atomics fphp asimdhp cpuid asimdrdm jscvt fcma lrcpc dcpop sha3 sm3 sm4 asimddp sha512 sve asimdfhm uscat ilrcpc flagm sb paca pacg dcpodp sve2 sveaes svebitperm svesha3 svesm4 flagm2 frint svei8mm svebf16 i8mm bf16\\nL1d cache:                               256 KiB (4 instances)\\nL1i cache:                               256 KiB (4 instances)\\nL2 cache:                                4 MiB (4 instances)\\nL3 cache:                                128 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Not affected\\nVulnerability Spec store bypass:         Mitigation; Speculative Store Bypass disabled via prctl\\nVulnerability Spectre v1:                Mitigation; __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; CSV2, BHB\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Not affected\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24-arm64\", \"runner_image_version\": \"20260920.129.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-arm64/libpng-zng/graphic_rgb8 native",
            "value": 897.4,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Linux-6.17.0-1022-azure-aarch64-with-glibc2.39\", \"machine\": \"aarch64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            aarch64\\nCPU op-mode(s):                          32-bit, 64-bit\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               ARM\\nModel name:                              Neoverse-N2\\nModel:                                   0\\nThread(s) per core:                      1\\nCore(s) per socket:                      4\\nSocket(s):                               1\\nStepping:                                r0p0\\nBogoMIPS:                                2000.00\\nFlags:                                   fp asimd evtstrm aes pmull sha1 sha2 crc32 atomics fphp asimdhp cpuid asimdrdm jscvt fcma lrcpc dcpop sha3 sm3 sm4 asimddp sha512 sve asimdfhm uscat ilrcpc flagm sb paca pacg dcpodp sve2 sveaes svebitperm svesha3 svesm4 flagm2 frint svei8mm svebf16 i8mm bf16\\nL1d cache:                               256 KiB (4 instances)\\nL1i cache:                               256 KiB (4 instances)\\nL2 cache:                                4 MiB (4 instances)\\nL3 cache:                                128 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Not affected\\nVulnerability Spec store bypass:         Mitigation; Speculative Store Bypass disabled via prctl\\nVulnerability Spectre v1:                Mitigation; __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; CSV2, BHB\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Not affected\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24-arm64\", \"runner_image_version\": \"20260920.129.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-arm64/ptpng-vs-libpng-zng/graphic_rgb8 rgba8",
            "value": 561.93,
            "unit": "MPix/s",
            "extra": "neon \nRunner: {\"os\": \"Linux-6.17.0-1022-azure-aarch64-with-glibc2.39\", \"machine\": \"aarch64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            aarch64\\nCPU op-mode(s):                          32-bit, 64-bit\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               ARM\\nModel name:                              Neoverse-N2\\nModel:                                   0\\nThread(s) per core:                      1\\nCore(s) per socket:                      4\\nSocket(s):                               1\\nStepping:                                r0p0\\nBogoMIPS:                                2000.00\\nFlags:                                   fp asimd evtstrm aes pmull sha1 sha2 crc32 atomics fphp asimdhp cpuid asimdrdm jscvt fcma lrcpc dcpop sha3 sm3 sm4 asimddp sha512 sve asimdfhm uscat ilrcpc flagm sb paca pacg dcpodp sve2 sveaes svebitperm svesha3 svesm4 flagm2 frint svei8mm svebf16 i8mm bf16\\nL1d cache:                               256 KiB (4 instances)\\nL1i cache:                               256 KiB (4 instances)\\nL2 cache:                                4 MiB (4 instances)\\nL3 cache:                                128 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Not affected\\nVulnerability Spec store bypass:         Mitigation; Speculative Store Bypass disabled via prctl\\nVulnerability Spectre v1:                Mitigation; __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; CSV2, BHB\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Not affected\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24-arm64\", \"runner_image_version\": \"20260920.129.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-arm64/libpng-zng/graphic_rgb8 rgba8",
            "value": 540.07,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Linux-6.17.0-1022-azure-aarch64-with-glibc2.39\", \"machine\": \"aarch64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            aarch64\\nCPU op-mode(s):                          32-bit, 64-bit\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               ARM\\nModel name:                              Neoverse-N2\\nModel:                                   0\\nThread(s) per core:                      1\\nCore(s) per socket:                      4\\nSocket(s):                               1\\nStepping:                                r0p0\\nBogoMIPS:                                2000.00\\nFlags:                                   fp asimd evtstrm aes pmull sha1 sha2 crc32 atomics fphp asimdhp cpuid asimdrdm jscvt fcma lrcpc dcpop sha3 sm3 sm4 asimddp sha512 sve asimdfhm uscat ilrcpc flagm sb paca pacg dcpodp sve2 sveaes svebitperm svesha3 svesm4 flagm2 frint svei8mm svebf16 i8mm bf16\\nL1d cache:                               256 KiB (4 instances)\\nL1i cache:                               256 KiB (4 instances)\\nL2 cache:                                4 MiB (4 instances)\\nL3 cache:                                128 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Not affected\\nVulnerability Spec store bypass:         Mitigation; Speculative Store Bypass disabled via prctl\\nVulnerability Spectre v1:                Mitigation; __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; CSV2, BHB\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Not affected\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24-arm64\", \"runner_image_version\": \"20260920.129.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-x64/memory-copy-vs-libpng/64MiB",
            "value": 22074.84,
            "unit": "MB/s",
            "extra": "Warm buffers; 128 MiB working set; median of five batches; payload bytes only; measured reference, not a theoretical limit\nRunner: {\"os\": \"Linux-6.17.0-1022-azure-x86_64-with-glibc2.39\", \"machine\": \"x86_64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            x86_64\\nCPU op-mode(s):                          32-bit, 64-bit\\nAddress sizes:                           48 bits physical, 48 bits virtual\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               AuthenticAMD\\nModel name:                              AMD EPYC 7763 64-Core Processor\\nCPU family:                              25\\nModel:                                   1\\nThread(s) per core:                      2\\nCore(s) per socket:                      2\\nSocket(s):                               1\\nStepping:                                1\\nBogoMIPS:                                4890.84\\nFlags:                                   fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ht syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm constant_tsc rep_good nopl tsc_reliable nonstop_tsc cpuid extd_apicid aperfmperf tsc_known_freq pni pclmulqdq ssse3 fma cx16 pcid sse4_1 sse4_2 movbe popcnt aes xsave avx f16c rdrand hypervisor lahf_lm cmp_legacy svm cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw topoext vmmcall fsgsbase bmi1 avx2 smep bmi2 erms invpcid rdseed adx smap clflushopt clwb sha_ni xsaveopt xsavec xgetbv1 xsaves user_shstk clzero xsaveerptr rdpru arat npt nrip_save tsc_scale vmcb_clean flushbyasid decodeassists pausefilter pfthreshold v_vmsave_vmload umip vaes vpclmulqdq rdpid fsrm\\nVirtualization:                          AMD-V\\nHypervisor vendor:                       Microsoft\\nVirtualization type:                     full\\nL1d cache:                               64 KiB (2 instances)\\nL1i cache:                               64 KiB (2 instances)\\nL2 cache:                                1 MiB (2 instances)\\nL3 cache:                                32 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Vulnerable: Safe RET, no microcode\\nVulnerability Spec store bypass:         Vulnerable\\nVulnerability Spectre v1:                Mitigation; usercopy/swapgs barriers and __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; Retpolines; STIBP disabled; RSB filling; PBRSB-eIBRS Not affected; BHI Not affected\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Vulnerable: No microcode\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24\", \"runner_image_version\": \"20260920.314.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}"
          },
          {
            "name": "linux-x64/ptpng-vs-libpng/photo_rgb8 native",
            "value": 188.03,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 \nRunner: {\"os\": \"Linux-6.17.0-1022-azure-x86_64-with-glibc2.39\", \"machine\": \"x86_64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            x86_64\\nCPU op-mode(s):                          32-bit, 64-bit\\nAddress sizes:                           48 bits physical, 48 bits virtual\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               AuthenticAMD\\nModel name:                              AMD EPYC 7763 64-Core Processor\\nCPU family:                              25\\nModel:                                   1\\nThread(s) per core:                      2\\nCore(s) per socket:                      2\\nSocket(s):                               1\\nStepping:                                1\\nBogoMIPS:                                4890.84\\nFlags:                                   fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ht syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm constant_tsc rep_good nopl tsc_reliable nonstop_tsc cpuid extd_apicid aperfmperf tsc_known_freq pni pclmulqdq ssse3 fma cx16 pcid sse4_1 sse4_2 movbe popcnt aes xsave avx f16c rdrand hypervisor lahf_lm cmp_legacy svm cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw topoext vmmcall fsgsbase bmi1 avx2 smep bmi2 erms invpcid rdseed adx smap clflushopt clwb sha_ni xsaveopt xsavec xgetbv1 xsaves user_shstk clzero xsaveerptr rdpru arat npt nrip_save tsc_scale vmcb_clean flushbyasid decodeassists pausefilter pfthreshold v_vmsave_vmload umip vaes vpclmulqdq rdpid fsrm\\nVirtualization:                          AMD-V\\nHypervisor vendor:                       Microsoft\\nVirtualization type:                     full\\nL1d cache:                               64 KiB (2 instances)\\nL1i cache:                               64 KiB (2 instances)\\nL2 cache:                                1 MiB (2 instances)\\nL3 cache:                                32 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Vulnerable: Safe RET, no microcode\\nVulnerability Spec store bypass:         Vulnerable\\nVulnerability Spectre v1:                Mitigation; usercopy/swapgs barriers and __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; Retpolines; STIBP disabled; RSB filling; PBRSB-eIBRS Not affected; BHI Not affected\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Vulnerable: No microcode\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24\", \"runner_image_version\": \"20260920.314.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-x64/libpng/photo_rgb8 native",
            "value": 106.12,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Linux-6.17.0-1022-azure-x86_64-with-glibc2.39\", \"machine\": \"x86_64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            x86_64\\nCPU op-mode(s):                          32-bit, 64-bit\\nAddress sizes:                           48 bits physical, 48 bits virtual\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               AuthenticAMD\\nModel name:                              AMD EPYC 7763 64-Core Processor\\nCPU family:                              25\\nModel:                                   1\\nThread(s) per core:                      2\\nCore(s) per socket:                      2\\nSocket(s):                               1\\nStepping:                                1\\nBogoMIPS:                                4890.84\\nFlags:                                   fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ht syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm constant_tsc rep_good nopl tsc_reliable nonstop_tsc cpuid extd_apicid aperfmperf tsc_known_freq pni pclmulqdq ssse3 fma cx16 pcid sse4_1 sse4_2 movbe popcnt aes xsave avx f16c rdrand hypervisor lahf_lm cmp_legacy svm cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw topoext vmmcall fsgsbase bmi1 avx2 smep bmi2 erms invpcid rdseed adx smap clflushopt clwb sha_ni xsaveopt xsavec xgetbv1 xsaves user_shstk clzero xsaveerptr rdpru arat npt nrip_save tsc_scale vmcb_clean flushbyasid decodeassists pausefilter pfthreshold v_vmsave_vmload umip vaes vpclmulqdq rdpid fsrm\\nVirtualization:                          AMD-V\\nHypervisor vendor:                       Microsoft\\nVirtualization type:                     full\\nL1d cache:                               64 KiB (2 instances)\\nL1i cache:                               64 KiB (2 instances)\\nL2 cache:                                1 MiB (2 instances)\\nL3 cache:                                32 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Vulnerable: Safe RET, no microcode\\nVulnerability Spec store bypass:         Vulnerable\\nVulnerability Spectre v1:                Mitigation; usercopy/swapgs barriers and __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; Retpolines; STIBP disabled; RSB filling; PBRSB-eIBRS Not affected; BHI Not affected\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Vulnerable: No microcode\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24\", \"runner_image_version\": \"20260920.314.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-x64/ptpng-vs-libpng/photo_rgb8 rgba8",
            "value": 180.97,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 \nRunner: {\"os\": \"Linux-6.17.0-1022-azure-x86_64-with-glibc2.39\", \"machine\": \"x86_64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            x86_64\\nCPU op-mode(s):                          32-bit, 64-bit\\nAddress sizes:                           48 bits physical, 48 bits virtual\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               AuthenticAMD\\nModel name:                              AMD EPYC 7763 64-Core Processor\\nCPU family:                              25\\nModel:                                   1\\nThread(s) per core:                      2\\nCore(s) per socket:                      2\\nSocket(s):                               1\\nStepping:                                1\\nBogoMIPS:                                4890.84\\nFlags:                                   fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ht syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm constant_tsc rep_good nopl tsc_reliable nonstop_tsc cpuid extd_apicid aperfmperf tsc_known_freq pni pclmulqdq ssse3 fma cx16 pcid sse4_1 sse4_2 movbe popcnt aes xsave avx f16c rdrand hypervisor lahf_lm cmp_legacy svm cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw topoext vmmcall fsgsbase bmi1 avx2 smep bmi2 erms invpcid rdseed adx smap clflushopt clwb sha_ni xsaveopt xsavec xgetbv1 xsaves user_shstk clzero xsaveerptr rdpru arat npt nrip_save tsc_scale vmcb_clean flushbyasid decodeassists pausefilter pfthreshold v_vmsave_vmload umip vaes vpclmulqdq rdpid fsrm\\nVirtualization:                          AMD-V\\nHypervisor vendor:                       Microsoft\\nVirtualization type:                     full\\nL1d cache:                               64 KiB (2 instances)\\nL1i cache:                               64 KiB (2 instances)\\nL2 cache:                                1 MiB (2 instances)\\nL3 cache:                                32 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Vulnerable: Safe RET, no microcode\\nVulnerability Spec store bypass:         Vulnerable\\nVulnerability Spectre v1:                Mitigation; usercopy/swapgs barriers and __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; Retpolines; STIBP disabled; RSB filling; PBRSB-eIBRS Not affected; BHI Not affected\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Vulnerable: No microcode\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24\", \"runner_image_version\": \"20260920.314.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-x64/libpng/photo_rgb8 rgba8",
            "value": 95.65,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Linux-6.17.0-1022-azure-x86_64-with-glibc2.39\", \"machine\": \"x86_64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            x86_64\\nCPU op-mode(s):                          32-bit, 64-bit\\nAddress sizes:                           48 bits physical, 48 bits virtual\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               AuthenticAMD\\nModel name:                              AMD EPYC 7763 64-Core Processor\\nCPU family:                              25\\nModel:                                   1\\nThread(s) per core:                      2\\nCore(s) per socket:                      2\\nSocket(s):                               1\\nStepping:                                1\\nBogoMIPS:                                4890.84\\nFlags:                                   fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ht syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm constant_tsc rep_good nopl tsc_reliable nonstop_tsc cpuid extd_apicid aperfmperf tsc_known_freq pni pclmulqdq ssse3 fma cx16 pcid sse4_1 sse4_2 movbe popcnt aes xsave avx f16c rdrand hypervisor lahf_lm cmp_legacy svm cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw topoext vmmcall fsgsbase bmi1 avx2 smep bmi2 erms invpcid rdseed adx smap clflushopt clwb sha_ni xsaveopt xsavec xgetbv1 xsaves user_shstk clzero xsaveerptr rdpru arat npt nrip_save tsc_scale vmcb_clean flushbyasid decodeassists pausefilter pfthreshold v_vmsave_vmload umip vaes vpclmulqdq rdpid fsrm\\nVirtualization:                          AMD-V\\nHypervisor vendor:                       Microsoft\\nVirtualization type:                     full\\nL1d cache:                               64 KiB (2 instances)\\nL1i cache:                               64 KiB (2 instances)\\nL2 cache:                                1 MiB (2 instances)\\nL3 cache:                                32 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Vulnerable: Safe RET, no microcode\\nVulnerability Spec store bypass:         Vulnerable\\nVulnerability Spectre v1:                Mitigation; usercopy/swapgs barriers and __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; Retpolines; STIBP disabled; RSB filling; PBRSB-eIBRS Not affected; BHI Not affected\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Vulnerable: No microcode\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24\", \"runner_image_version\": \"20260920.314.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-x64/ptpng-vs-libpng/photo_rgba8 native",
            "value": 74.54,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 \nRunner: {\"os\": \"Linux-6.17.0-1022-azure-x86_64-with-glibc2.39\", \"machine\": \"x86_64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            x86_64\\nCPU op-mode(s):                          32-bit, 64-bit\\nAddress sizes:                           48 bits physical, 48 bits virtual\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               AuthenticAMD\\nModel name:                              AMD EPYC 7763 64-Core Processor\\nCPU family:                              25\\nModel:                                   1\\nThread(s) per core:                      2\\nCore(s) per socket:                      2\\nSocket(s):                               1\\nStepping:                                1\\nBogoMIPS:                                4890.84\\nFlags:                                   fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ht syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm constant_tsc rep_good nopl tsc_reliable nonstop_tsc cpuid extd_apicid aperfmperf tsc_known_freq pni pclmulqdq ssse3 fma cx16 pcid sse4_1 sse4_2 movbe popcnt aes xsave avx f16c rdrand hypervisor lahf_lm cmp_legacy svm cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw topoext vmmcall fsgsbase bmi1 avx2 smep bmi2 erms invpcid rdseed adx smap clflushopt clwb sha_ni xsaveopt xsavec xgetbv1 xsaves user_shstk clzero xsaveerptr rdpru arat npt nrip_save tsc_scale vmcb_clean flushbyasid decodeassists pausefilter pfthreshold v_vmsave_vmload umip vaes vpclmulqdq rdpid fsrm\\nVirtualization:                          AMD-V\\nHypervisor vendor:                       Microsoft\\nVirtualization type:                     full\\nL1d cache:                               64 KiB (2 instances)\\nL1i cache:                               64 KiB (2 instances)\\nL2 cache:                                1 MiB (2 instances)\\nL3 cache:                                32 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Vulnerable: Safe RET, no microcode\\nVulnerability Spec store bypass:         Vulnerable\\nVulnerability Spectre v1:                Mitigation; usercopy/swapgs barriers and __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; Retpolines; STIBP disabled; RSB filling; PBRSB-eIBRS Not affected; BHI Not affected\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Vulnerable: No microcode\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24\", \"runner_image_version\": \"20260920.314.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-x64/libpng/photo_rgba8 native",
            "value": 52.99,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Linux-6.17.0-1022-azure-x86_64-with-glibc2.39\", \"machine\": \"x86_64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            x86_64\\nCPU op-mode(s):                          32-bit, 64-bit\\nAddress sizes:                           48 bits physical, 48 bits virtual\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               AuthenticAMD\\nModel name:                              AMD EPYC 7763 64-Core Processor\\nCPU family:                              25\\nModel:                                   1\\nThread(s) per core:                      2\\nCore(s) per socket:                      2\\nSocket(s):                               1\\nStepping:                                1\\nBogoMIPS:                                4890.84\\nFlags:                                   fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ht syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm constant_tsc rep_good nopl tsc_reliable nonstop_tsc cpuid extd_apicid aperfmperf tsc_known_freq pni pclmulqdq ssse3 fma cx16 pcid sse4_1 sse4_2 movbe popcnt aes xsave avx f16c rdrand hypervisor lahf_lm cmp_legacy svm cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw topoext vmmcall fsgsbase bmi1 avx2 smep bmi2 erms invpcid rdseed adx smap clflushopt clwb sha_ni xsaveopt xsavec xgetbv1 xsaves user_shstk clzero xsaveerptr rdpru arat npt nrip_save tsc_scale vmcb_clean flushbyasid decodeassists pausefilter pfthreshold v_vmsave_vmload umip vaes vpclmulqdq rdpid fsrm\\nVirtualization:                          AMD-V\\nHypervisor vendor:                       Microsoft\\nVirtualization type:                     full\\nL1d cache:                               64 KiB (2 instances)\\nL1i cache:                               64 KiB (2 instances)\\nL2 cache:                                1 MiB (2 instances)\\nL3 cache:                                32 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Vulnerable: Safe RET, no microcode\\nVulnerability Spec store bypass:         Vulnerable\\nVulnerability Spectre v1:                Mitigation; usercopy/swapgs barriers and __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; Retpolines; STIBP disabled; RSB filling; PBRSB-eIBRS Not affected; BHI Not affected\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Vulnerable: No microcode\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24\", \"runner_image_version\": \"20260920.314.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-x64/ptpng-vs-libpng/photo_rgba8 rgba8",
            "value": 70.69,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 \nRunner: {\"os\": \"Linux-6.17.0-1022-azure-x86_64-with-glibc2.39\", \"machine\": \"x86_64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            x86_64\\nCPU op-mode(s):                          32-bit, 64-bit\\nAddress sizes:                           48 bits physical, 48 bits virtual\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               AuthenticAMD\\nModel name:                              AMD EPYC 7763 64-Core Processor\\nCPU family:                              25\\nModel:                                   1\\nThread(s) per core:                      2\\nCore(s) per socket:                      2\\nSocket(s):                               1\\nStepping:                                1\\nBogoMIPS:                                4890.84\\nFlags:                                   fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ht syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm constant_tsc rep_good nopl tsc_reliable nonstop_tsc cpuid extd_apicid aperfmperf tsc_known_freq pni pclmulqdq ssse3 fma cx16 pcid sse4_1 sse4_2 movbe popcnt aes xsave avx f16c rdrand hypervisor lahf_lm cmp_legacy svm cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw topoext vmmcall fsgsbase bmi1 avx2 smep bmi2 erms invpcid rdseed adx smap clflushopt clwb sha_ni xsaveopt xsavec xgetbv1 xsaves user_shstk clzero xsaveerptr rdpru arat npt nrip_save tsc_scale vmcb_clean flushbyasid decodeassists pausefilter pfthreshold v_vmsave_vmload umip vaes vpclmulqdq rdpid fsrm\\nVirtualization:                          AMD-V\\nHypervisor vendor:                       Microsoft\\nVirtualization type:                     full\\nL1d cache:                               64 KiB (2 instances)\\nL1i cache:                               64 KiB (2 instances)\\nL2 cache:                                1 MiB (2 instances)\\nL3 cache:                                32 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Vulnerable: Safe RET, no microcode\\nVulnerability Spec store bypass:         Vulnerable\\nVulnerability Spectre v1:                Mitigation; usercopy/swapgs barriers and __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; Retpolines; STIBP disabled; RSB filling; PBRSB-eIBRS Not affected; BHI Not affected\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Vulnerable: No microcode\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24\", \"runner_image_version\": \"20260920.314.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-x64/libpng/photo_rgba8 rgba8",
            "value": 52.48,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Linux-6.17.0-1022-azure-x86_64-with-glibc2.39\", \"machine\": \"x86_64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            x86_64\\nCPU op-mode(s):                          32-bit, 64-bit\\nAddress sizes:                           48 bits physical, 48 bits virtual\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               AuthenticAMD\\nModel name:                              AMD EPYC 7763 64-Core Processor\\nCPU family:                              25\\nModel:                                   1\\nThread(s) per core:                      2\\nCore(s) per socket:                      2\\nSocket(s):                               1\\nStepping:                                1\\nBogoMIPS:                                4890.84\\nFlags:                                   fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ht syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm constant_tsc rep_good nopl tsc_reliable nonstop_tsc cpuid extd_apicid aperfmperf tsc_known_freq pni pclmulqdq ssse3 fma cx16 pcid sse4_1 sse4_2 movbe popcnt aes xsave avx f16c rdrand hypervisor lahf_lm cmp_legacy svm cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw topoext vmmcall fsgsbase bmi1 avx2 smep bmi2 erms invpcid rdseed adx smap clflushopt clwb sha_ni xsaveopt xsavec xgetbv1 xsaves user_shstk clzero xsaveerptr rdpru arat npt nrip_save tsc_scale vmcb_clean flushbyasid decodeassists pausefilter pfthreshold v_vmsave_vmload umip vaes vpclmulqdq rdpid fsrm\\nVirtualization:                          AMD-V\\nHypervisor vendor:                       Microsoft\\nVirtualization type:                     full\\nL1d cache:                               64 KiB (2 instances)\\nL1i cache:                               64 KiB (2 instances)\\nL2 cache:                                1 MiB (2 instances)\\nL3 cache:                                32 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Vulnerable: Safe RET, no microcode\\nVulnerability Spec store bypass:         Vulnerable\\nVulnerability Spectre v1:                Mitigation; usercopy/swapgs barriers and __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; Retpolines; STIBP disabled; RSB filling; PBRSB-eIBRS Not affected; BHI Not affected\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Vulnerable: No microcode\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24\", \"runner_image_version\": \"20260920.314.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-x64/ptpng-vs-libpng/photo_gray8 native",
            "value": 284.33,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 \nRunner: {\"os\": \"Linux-6.17.0-1022-azure-x86_64-with-glibc2.39\", \"machine\": \"x86_64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            x86_64\\nCPU op-mode(s):                          32-bit, 64-bit\\nAddress sizes:                           48 bits physical, 48 bits virtual\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               AuthenticAMD\\nModel name:                              AMD EPYC 7763 64-Core Processor\\nCPU family:                              25\\nModel:                                   1\\nThread(s) per core:                      2\\nCore(s) per socket:                      2\\nSocket(s):                               1\\nStepping:                                1\\nBogoMIPS:                                4890.84\\nFlags:                                   fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ht syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm constant_tsc rep_good nopl tsc_reliable nonstop_tsc cpuid extd_apicid aperfmperf tsc_known_freq pni pclmulqdq ssse3 fma cx16 pcid sse4_1 sse4_2 movbe popcnt aes xsave avx f16c rdrand hypervisor lahf_lm cmp_legacy svm cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw topoext vmmcall fsgsbase bmi1 avx2 smep bmi2 erms invpcid rdseed adx smap clflushopt clwb sha_ni xsaveopt xsavec xgetbv1 xsaves user_shstk clzero xsaveerptr rdpru arat npt nrip_save tsc_scale vmcb_clean flushbyasid decodeassists pausefilter pfthreshold v_vmsave_vmload umip vaes vpclmulqdq rdpid fsrm\\nVirtualization:                          AMD-V\\nHypervisor vendor:                       Microsoft\\nVirtualization type:                     full\\nL1d cache:                               64 KiB (2 instances)\\nL1i cache:                               64 KiB (2 instances)\\nL2 cache:                                1 MiB (2 instances)\\nL3 cache:                                32 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Vulnerable: Safe RET, no microcode\\nVulnerability Spec store bypass:         Vulnerable\\nVulnerability Spectre v1:                Mitigation; usercopy/swapgs barriers and __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; Retpolines; STIBP disabled; RSB filling; PBRSB-eIBRS Not affected; BHI Not affected\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Vulnerable: No microcode\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24\", \"runner_image_version\": \"20260920.314.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-x64/libpng/photo_gray8 native",
            "value": 214.54,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Linux-6.17.0-1022-azure-x86_64-with-glibc2.39\", \"machine\": \"x86_64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            x86_64\\nCPU op-mode(s):                          32-bit, 64-bit\\nAddress sizes:                           48 bits physical, 48 bits virtual\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               AuthenticAMD\\nModel name:                              AMD EPYC 7763 64-Core Processor\\nCPU family:                              25\\nModel:                                   1\\nThread(s) per core:                      2\\nCore(s) per socket:                      2\\nSocket(s):                               1\\nStepping:                                1\\nBogoMIPS:                                4890.84\\nFlags:                                   fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ht syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm constant_tsc rep_good nopl tsc_reliable nonstop_tsc cpuid extd_apicid aperfmperf tsc_known_freq pni pclmulqdq ssse3 fma cx16 pcid sse4_1 sse4_2 movbe popcnt aes xsave avx f16c rdrand hypervisor lahf_lm cmp_legacy svm cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw topoext vmmcall fsgsbase bmi1 avx2 smep bmi2 erms invpcid rdseed adx smap clflushopt clwb sha_ni xsaveopt xsavec xgetbv1 xsaves user_shstk clzero xsaveerptr rdpru arat npt nrip_save tsc_scale vmcb_clean flushbyasid decodeassists pausefilter pfthreshold v_vmsave_vmload umip vaes vpclmulqdq rdpid fsrm\\nVirtualization:                          AMD-V\\nHypervisor vendor:                       Microsoft\\nVirtualization type:                     full\\nL1d cache:                               64 KiB (2 instances)\\nL1i cache:                               64 KiB (2 instances)\\nL2 cache:                                1 MiB (2 instances)\\nL3 cache:                                32 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Vulnerable: Safe RET, no microcode\\nVulnerability Spec store bypass:         Vulnerable\\nVulnerability Spectre v1:                Mitigation; usercopy/swapgs barriers and __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; Retpolines; STIBP disabled; RSB filling; PBRSB-eIBRS Not affected; BHI Not affected\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Vulnerable: No microcode\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24\", \"runner_image_version\": \"20260920.314.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-x64/ptpng-vs-libpng/photo_gray8 rgba8",
            "value": 270.94,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 \nRunner: {\"os\": \"Linux-6.17.0-1022-azure-x86_64-with-glibc2.39\", \"machine\": \"x86_64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            x86_64\\nCPU op-mode(s):                          32-bit, 64-bit\\nAddress sizes:                           48 bits physical, 48 bits virtual\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               AuthenticAMD\\nModel name:                              AMD EPYC 7763 64-Core Processor\\nCPU family:                              25\\nModel:                                   1\\nThread(s) per core:                      2\\nCore(s) per socket:                      2\\nSocket(s):                               1\\nStepping:                                1\\nBogoMIPS:                                4890.84\\nFlags:                                   fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ht syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm constant_tsc rep_good nopl tsc_reliable nonstop_tsc cpuid extd_apicid aperfmperf tsc_known_freq pni pclmulqdq ssse3 fma cx16 pcid sse4_1 sse4_2 movbe popcnt aes xsave avx f16c rdrand hypervisor lahf_lm cmp_legacy svm cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw topoext vmmcall fsgsbase bmi1 avx2 smep bmi2 erms invpcid rdseed adx smap clflushopt clwb sha_ni xsaveopt xsavec xgetbv1 xsaves user_shstk clzero xsaveerptr rdpru arat npt nrip_save tsc_scale vmcb_clean flushbyasid decodeassists pausefilter pfthreshold v_vmsave_vmload umip vaes vpclmulqdq rdpid fsrm\\nVirtualization:                          AMD-V\\nHypervisor vendor:                       Microsoft\\nVirtualization type:                     full\\nL1d cache:                               64 KiB (2 instances)\\nL1i cache:                               64 KiB (2 instances)\\nL2 cache:                                1 MiB (2 instances)\\nL3 cache:                                32 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Vulnerable: Safe RET, no microcode\\nVulnerability Spec store bypass:         Vulnerable\\nVulnerability Spectre v1:                Mitigation; usercopy/swapgs barriers and __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; Retpolines; STIBP disabled; RSB filling; PBRSB-eIBRS Not affected; BHI Not affected\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Vulnerable: No microcode\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24\", \"runner_image_version\": \"20260920.314.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-x64/libpng/photo_gray8 rgba8",
            "value": 155.89,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Linux-6.17.0-1022-azure-x86_64-with-glibc2.39\", \"machine\": \"x86_64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            x86_64\\nCPU op-mode(s):                          32-bit, 64-bit\\nAddress sizes:                           48 bits physical, 48 bits virtual\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               AuthenticAMD\\nModel name:                              AMD EPYC 7763 64-Core Processor\\nCPU family:                              25\\nModel:                                   1\\nThread(s) per core:                      2\\nCore(s) per socket:                      2\\nSocket(s):                               1\\nStepping:                                1\\nBogoMIPS:                                4890.84\\nFlags:                                   fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ht syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm constant_tsc rep_good nopl tsc_reliable nonstop_tsc cpuid extd_apicid aperfmperf tsc_known_freq pni pclmulqdq ssse3 fma cx16 pcid sse4_1 sse4_2 movbe popcnt aes xsave avx f16c rdrand hypervisor lahf_lm cmp_legacy svm cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw topoext vmmcall fsgsbase bmi1 avx2 smep bmi2 erms invpcid rdseed adx smap clflushopt clwb sha_ni xsaveopt xsavec xgetbv1 xsaves user_shstk clzero xsaveerptr rdpru arat npt nrip_save tsc_scale vmcb_clean flushbyasid decodeassists pausefilter pfthreshold v_vmsave_vmload umip vaes vpclmulqdq rdpid fsrm\\nVirtualization:                          AMD-V\\nHypervisor vendor:                       Microsoft\\nVirtualization type:                     full\\nL1d cache:                               64 KiB (2 instances)\\nL1i cache:                               64 KiB (2 instances)\\nL2 cache:                                1 MiB (2 instances)\\nL3 cache:                                32 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Vulnerable: Safe RET, no microcode\\nVulnerability Spec store bypass:         Vulnerable\\nVulnerability Spectre v1:                Mitigation; usercopy/swapgs barriers and __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; Retpolines; STIBP disabled; RSB filling; PBRSB-eIBRS Not affected; BHI Not affected\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Vulnerable: No microcode\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24\", \"runner_image_version\": \"20260920.314.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-x64/ptpng-vs-libpng/photo_gray16 native",
            "value": 303.41,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 \nRunner: {\"os\": \"Linux-6.17.0-1022-azure-x86_64-with-glibc2.39\", \"machine\": \"x86_64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            x86_64\\nCPU op-mode(s):                          32-bit, 64-bit\\nAddress sizes:                           48 bits physical, 48 bits virtual\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               AuthenticAMD\\nModel name:                              AMD EPYC 7763 64-Core Processor\\nCPU family:                              25\\nModel:                                   1\\nThread(s) per core:                      2\\nCore(s) per socket:                      2\\nSocket(s):                               1\\nStepping:                                1\\nBogoMIPS:                                4890.84\\nFlags:                                   fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ht syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm constant_tsc rep_good nopl tsc_reliable nonstop_tsc cpuid extd_apicid aperfmperf tsc_known_freq pni pclmulqdq ssse3 fma cx16 pcid sse4_1 sse4_2 movbe popcnt aes xsave avx f16c rdrand hypervisor lahf_lm cmp_legacy svm cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw topoext vmmcall fsgsbase bmi1 avx2 smep bmi2 erms invpcid rdseed adx smap clflushopt clwb sha_ni xsaveopt xsavec xgetbv1 xsaves user_shstk clzero xsaveerptr rdpru arat npt nrip_save tsc_scale vmcb_clean flushbyasid decodeassists pausefilter pfthreshold v_vmsave_vmload umip vaes vpclmulqdq rdpid fsrm\\nVirtualization:                          AMD-V\\nHypervisor vendor:                       Microsoft\\nVirtualization type:                     full\\nL1d cache:                               64 KiB (2 instances)\\nL1i cache:                               64 KiB (2 instances)\\nL2 cache:                                1 MiB (2 instances)\\nL3 cache:                                32 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Vulnerable: Safe RET, no microcode\\nVulnerability Spec store bypass:         Vulnerable\\nVulnerability Spectre v1:                Mitigation; usercopy/swapgs barriers and __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; Retpolines; STIBP disabled; RSB filling; PBRSB-eIBRS Not affected; BHI Not affected\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Vulnerable: No microcode\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24\", \"runner_image_version\": \"20260920.314.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-x64/libpng/photo_gray16 native",
            "value": 151.96,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Linux-6.17.0-1022-azure-x86_64-with-glibc2.39\", \"machine\": \"x86_64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            x86_64\\nCPU op-mode(s):                          32-bit, 64-bit\\nAddress sizes:                           48 bits physical, 48 bits virtual\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               AuthenticAMD\\nModel name:                              AMD EPYC 7763 64-Core Processor\\nCPU family:                              25\\nModel:                                   1\\nThread(s) per core:                      2\\nCore(s) per socket:                      2\\nSocket(s):                               1\\nStepping:                                1\\nBogoMIPS:                                4890.84\\nFlags:                                   fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ht syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm constant_tsc rep_good nopl tsc_reliable nonstop_tsc cpuid extd_apicid aperfmperf tsc_known_freq pni pclmulqdq ssse3 fma cx16 pcid sse4_1 sse4_2 movbe popcnt aes xsave avx f16c rdrand hypervisor lahf_lm cmp_legacy svm cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw topoext vmmcall fsgsbase bmi1 avx2 smep bmi2 erms invpcid rdseed adx smap clflushopt clwb sha_ni xsaveopt xsavec xgetbv1 xsaves user_shstk clzero xsaveerptr rdpru arat npt nrip_save tsc_scale vmcb_clean flushbyasid decodeassists pausefilter pfthreshold v_vmsave_vmload umip vaes vpclmulqdq rdpid fsrm\\nVirtualization:                          AMD-V\\nHypervisor vendor:                       Microsoft\\nVirtualization type:                     full\\nL1d cache:                               64 KiB (2 instances)\\nL1i cache:                               64 KiB (2 instances)\\nL2 cache:                                1 MiB (2 instances)\\nL3 cache:                                32 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Vulnerable: Safe RET, no microcode\\nVulnerability Spec store bypass:         Vulnerable\\nVulnerability Spectre v1:                Mitigation; usercopy/swapgs barriers and __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; Retpolines; STIBP disabled; RSB filling; PBRSB-eIBRS Not affected; BHI Not affected\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Vulnerable: No microcode\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24\", \"runner_image_version\": \"20260920.314.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-x64/ptpng-vs-libpng/photo_gray16 rgba8",
            "value": 285.84,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 \nRunner: {\"os\": \"Linux-6.17.0-1022-azure-x86_64-with-glibc2.39\", \"machine\": \"x86_64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            x86_64\\nCPU op-mode(s):                          32-bit, 64-bit\\nAddress sizes:                           48 bits physical, 48 bits virtual\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               AuthenticAMD\\nModel name:                              AMD EPYC 7763 64-Core Processor\\nCPU family:                              25\\nModel:                                   1\\nThread(s) per core:                      2\\nCore(s) per socket:                      2\\nSocket(s):                               1\\nStepping:                                1\\nBogoMIPS:                                4890.84\\nFlags:                                   fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ht syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm constant_tsc rep_good nopl tsc_reliable nonstop_tsc cpuid extd_apicid aperfmperf tsc_known_freq pni pclmulqdq ssse3 fma cx16 pcid sse4_1 sse4_2 movbe popcnt aes xsave avx f16c rdrand hypervisor lahf_lm cmp_legacy svm cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw topoext vmmcall fsgsbase bmi1 avx2 smep bmi2 erms invpcid rdseed adx smap clflushopt clwb sha_ni xsaveopt xsavec xgetbv1 xsaves user_shstk clzero xsaveerptr rdpru arat npt nrip_save tsc_scale vmcb_clean flushbyasid decodeassists pausefilter pfthreshold v_vmsave_vmload umip vaes vpclmulqdq rdpid fsrm\\nVirtualization:                          AMD-V\\nHypervisor vendor:                       Microsoft\\nVirtualization type:                     full\\nL1d cache:                               64 KiB (2 instances)\\nL1i cache:                               64 KiB (2 instances)\\nL2 cache:                                1 MiB (2 instances)\\nL3 cache:                                32 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Vulnerable: Safe RET, no microcode\\nVulnerability Spec store bypass:         Vulnerable\\nVulnerability Spectre v1:                Mitigation; usercopy/swapgs barriers and __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; Retpolines; STIBP disabled; RSB filling; PBRSB-eIBRS Not affected; BHI Not affected\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Vulnerable: No microcode\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24\", \"runner_image_version\": \"20260920.314.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-x64/libpng/photo_gray16 rgba8",
            "value": 99.88,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Linux-6.17.0-1022-azure-x86_64-with-glibc2.39\", \"machine\": \"x86_64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            x86_64\\nCPU op-mode(s):                          32-bit, 64-bit\\nAddress sizes:                           48 bits physical, 48 bits virtual\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               AuthenticAMD\\nModel name:                              AMD EPYC 7763 64-Core Processor\\nCPU family:                              25\\nModel:                                   1\\nThread(s) per core:                      2\\nCore(s) per socket:                      2\\nSocket(s):                               1\\nStepping:                                1\\nBogoMIPS:                                4890.84\\nFlags:                                   fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ht syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm constant_tsc rep_good nopl tsc_reliable nonstop_tsc cpuid extd_apicid aperfmperf tsc_known_freq pni pclmulqdq ssse3 fma cx16 pcid sse4_1 sse4_2 movbe popcnt aes xsave avx f16c rdrand hypervisor lahf_lm cmp_legacy svm cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw topoext vmmcall fsgsbase bmi1 avx2 smep bmi2 erms invpcid rdseed adx smap clflushopt clwb sha_ni xsaveopt xsavec xgetbv1 xsaves user_shstk clzero xsaveerptr rdpru arat npt nrip_save tsc_scale vmcb_clean flushbyasid decodeassists pausefilter pfthreshold v_vmsave_vmload umip vaes vpclmulqdq rdpid fsrm\\nVirtualization:                          AMD-V\\nHypervisor vendor:                       Microsoft\\nVirtualization type:                     full\\nL1d cache:                               64 KiB (2 instances)\\nL1i cache:                               64 KiB (2 instances)\\nL2 cache:                                1 MiB (2 instances)\\nL3 cache:                                32 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Vulnerable: Safe RET, no microcode\\nVulnerability Spec store bypass:         Vulnerable\\nVulnerability Spectre v1:                Mitigation; usercopy/swapgs barriers and __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; Retpolines; STIBP disabled; RSB filling; PBRSB-eIBRS Not affected; BHI Not affected\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Vulnerable: No microcode\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24\", \"runner_image_version\": \"20260920.314.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-x64/ptpng-vs-libpng/graphic_pal8 native",
            "value": 6293.87,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 \nRunner: {\"os\": \"Linux-6.17.0-1022-azure-x86_64-with-glibc2.39\", \"machine\": \"x86_64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            x86_64\\nCPU op-mode(s):                          32-bit, 64-bit\\nAddress sizes:                           48 bits physical, 48 bits virtual\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               AuthenticAMD\\nModel name:                              AMD EPYC 7763 64-Core Processor\\nCPU family:                              25\\nModel:                                   1\\nThread(s) per core:                      2\\nCore(s) per socket:                      2\\nSocket(s):                               1\\nStepping:                                1\\nBogoMIPS:                                4890.84\\nFlags:                                   fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ht syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm constant_tsc rep_good nopl tsc_reliable nonstop_tsc cpuid extd_apicid aperfmperf tsc_known_freq pni pclmulqdq ssse3 fma cx16 pcid sse4_1 sse4_2 movbe popcnt aes xsave avx f16c rdrand hypervisor lahf_lm cmp_legacy svm cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw topoext vmmcall fsgsbase bmi1 avx2 smep bmi2 erms invpcid rdseed adx smap clflushopt clwb sha_ni xsaveopt xsavec xgetbv1 xsaves user_shstk clzero xsaveerptr rdpru arat npt nrip_save tsc_scale vmcb_clean flushbyasid decodeassists pausefilter pfthreshold v_vmsave_vmload umip vaes vpclmulqdq rdpid fsrm\\nVirtualization:                          AMD-V\\nHypervisor vendor:                       Microsoft\\nVirtualization type:                     full\\nL1d cache:                               64 KiB (2 instances)\\nL1i cache:                               64 KiB (2 instances)\\nL2 cache:                                1 MiB (2 instances)\\nL3 cache:                                32 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Vulnerable: Safe RET, no microcode\\nVulnerability Spec store bypass:         Vulnerable\\nVulnerability Spectre v1:                Mitigation; usercopy/swapgs barriers and __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; Retpolines; STIBP disabled; RSB filling; PBRSB-eIBRS Not affected; BHI Not affected\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Vulnerable: No microcode\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24\", \"runner_image_version\": \"20260920.314.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-x64/libpng/graphic_pal8 native",
            "value": 388.65,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Linux-6.17.0-1022-azure-x86_64-with-glibc2.39\", \"machine\": \"x86_64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            x86_64\\nCPU op-mode(s):                          32-bit, 64-bit\\nAddress sizes:                           48 bits physical, 48 bits virtual\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               AuthenticAMD\\nModel name:                              AMD EPYC 7763 64-Core Processor\\nCPU family:                              25\\nModel:                                   1\\nThread(s) per core:                      2\\nCore(s) per socket:                      2\\nSocket(s):                               1\\nStepping:                                1\\nBogoMIPS:                                4890.84\\nFlags:                                   fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ht syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm constant_tsc rep_good nopl tsc_reliable nonstop_tsc cpuid extd_apicid aperfmperf tsc_known_freq pni pclmulqdq ssse3 fma cx16 pcid sse4_1 sse4_2 movbe popcnt aes xsave avx f16c rdrand hypervisor lahf_lm cmp_legacy svm cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw topoext vmmcall fsgsbase bmi1 avx2 smep bmi2 erms invpcid rdseed adx smap clflushopt clwb sha_ni xsaveopt xsavec xgetbv1 xsaves user_shstk clzero xsaveerptr rdpru arat npt nrip_save tsc_scale vmcb_clean flushbyasid decodeassists pausefilter pfthreshold v_vmsave_vmload umip vaes vpclmulqdq rdpid fsrm\\nVirtualization:                          AMD-V\\nHypervisor vendor:                       Microsoft\\nVirtualization type:                     full\\nL1d cache:                               64 KiB (2 instances)\\nL1i cache:                               64 KiB (2 instances)\\nL2 cache:                                1 MiB (2 instances)\\nL3 cache:                                32 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Vulnerable: Safe RET, no microcode\\nVulnerability Spec store bypass:         Vulnerable\\nVulnerability Spectre v1:                Mitigation; usercopy/swapgs barriers and __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; Retpolines; STIBP disabled; RSB filling; PBRSB-eIBRS Not affected; BHI Not affected\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Vulnerable: No microcode\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24\", \"runner_image_version\": \"20260920.314.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-x64/ptpng-vs-libpng/graphic_pal8 rgba8",
            "value": 1618.88,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 \nRunner: {\"os\": \"Linux-6.17.0-1022-azure-x86_64-with-glibc2.39\", \"machine\": \"x86_64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            x86_64\\nCPU op-mode(s):                          32-bit, 64-bit\\nAddress sizes:                           48 bits physical, 48 bits virtual\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               AuthenticAMD\\nModel name:                              AMD EPYC 7763 64-Core Processor\\nCPU family:                              25\\nModel:                                   1\\nThread(s) per core:                      2\\nCore(s) per socket:                      2\\nSocket(s):                               1\\nStepping:                                1\\nBogoMIPS:                                4890.84\\nFlags:                                   fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ht syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm constant_tsc rep_good nopl tsc_reliable nonstop_tsc cpuid extd_apicid aperfmperf tsc_known_freq pni pclmulqdq ssse3 fma cx16 pcid sse4_1 sse4_2 movbe popcnt aes xsave avx f16c rdrand hypervisor lahf_lm cmp_legacy svm cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw topoext vmmcall fsgsbase bmi1 avx2 smep bmi2 erms invpcid rdseed adx smap clflushopt clwb sha_ni xsaveopt xsavec xgetbv1 xsaves user_shstk clzero xsaveerptr rdpru arat npt nrip_save tsc_scale vmcb_clean flushbyasid decodeassists pausefilter pfthreshold v_vmsave_vmload umip vaes vpclmulqdq rdpid fsrm\\nVirtualization:                          AMD-V\\nHypervisor vendor:                       Microsoft\\nVirtualization type:                     full\\nL1d cache:                               64 KiB (2 instances)\\nL1i cache:                               64 KiB (2 instances)\\nL2 cache:                                1 MiB (2 instances)\\nL3 cache:                                32 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Vulnerable: Safe RET, no microcode\\nVulnerability Spec store bypass:         Vulnerable\\nVulnerability Spectre v1:                Mitigation; usercopy/swapgs barriers and __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; Retpolines; STIBP disabled; RSB filling; PBRSB-eIBRS Not affected; BHI Not affected\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Vulnerable: No microcode\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24\", \"runner_image_version\": \"20260920.314.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-x64/libpng/graphic_pal8 rgba8",
            "value": 238.84,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Linux-6.17.0-1022-azure-x86_64-with-glibc2.39\", \"machine\": \"x86_64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            x86_64\\nCPU op-mode(s):                          32-bit, 64-bit\\nAddress sizes:                           48 bits physical, 48 bits virtual\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               AuthenticAMD\\nModel name:                              AMD EPYC 7763 64-Core Processor\\nCPU family:                              25\\nModel:                                   1\\nThread(s) per core:                      2\\nCore(s) per socket:                      2\\nSocket(s):                               1\\nStepping:                                1\\nBogoMIPS:                                4890.84\\nFlags:                                   fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ht syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm constant_tsc rep_good nopl tsc_reliable nonstop_tsc cpuid extd_apicid aperfmperf tsc_known_freq pni pclmulqdq ssse3 fma cx16 pcid sse4_1 sse4_2 movbe popcnt aes xsave avx f16c rdrand hypervisor lahf_lm cmp_legacy svm cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw topoext vmmcall fsgsbase bmi1 avx2 smep bmi2 erms invpcid rdseed adx smap clflushopt clwb sha_ni xsaveopt xsavec xgetbv1 xsaves user_shstk clzero xsaveerptr rdpru arat npt nrip_save tsc_scale vmcb_clean flushbyasid decodeassists pausefilter pfthreshold v_vmsave_vmload umip vaes vpclmulqdq rdpid fsrm\\nVirtualization:                          AMD-V\\nHypervisor vendor:                       Microsoft\\nVirtualization type:                     full\\nL1d cache:                               64 KiB (2 instances)\\nL1i cache:                               64 KiB (2 instances)\\nL2 cache:                                1 MiB (2 instances)\\nL3 cache:                                32 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Vulnerable: Safe RET, no microcode\\nVulnerability Spec store bypass:         Vulnerable\\nVulnerability Spectre v1:                Mitigation; usercopy/swapgs barriers and __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; Retpolines; STIBP disabled; RSB filling; PBRSB-eIBRS Not affected; BHI Not affected\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Vulnerable: No microcode\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24\", \"runner_image_version\": \"20260920.314.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-x64/ptpng-vs-libpng/graphic_rgb8 native",
            "value": 927.04,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 \nRunner: {\"os\": \"Linux-6.17.0-1022-azure-x86_64-with-glibc2.39\", \"machine\": \"x86_64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            x86_64\\nCPU op-mode(s):                          32-bit, 64-bit\\nAddress sizes:                           48 bits physical, 48 bits virtual\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               AuthenticAMD\\nModel name:                              AMD EPYC 7763 64-Core Processor\\nCPU family:                              25\\nModel:                                   1\\nThread(s) per core:                      2\\nCore(s) per socket:                      2\\nSocket(s):                               1\\nStepping:                                1\\nBogoMIPS:                                4890.84\\nFlags:                                   fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ht syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm constant_tsc rep_good nopl tsc_reliable nonstop_tsc cpuid extd_apicid aperfmperf tsc_known_freq pni pclmulqdq ssse3 fma cx16 pcid sse4_1 sse4_2 movbe popcnt aes xsave avx f16c rdrand hypervisor lahf_lm cmp_legacy svm cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw topoext vmmcall fsgsbase bmi1 avx2 smep bmi2 erms invpcid rdseed adx smap clflushopt clwb sha_ni xsaveopt xsavec xgetbv1 xsaves user_shstk clzero xsaveerptr rdpru arat npt nrip_save tsc_scale vmcb_clean flushbyasid decodeassists pausefilter pfthreshold v_vmsave_vmload umip vaes vpclmulqdq rdpid fsrm\\nVirtualization:                          AMD-V\\nHypervisor vendor:                       Microsoft\\nVirtualization type:                     full\\nL1d cache:                               64 KiB (2 instances)\\nL1i cache:                               64 KiB (2 instances)\\nL2 cache:                                1 MiB (2 instances)\\nL3 cache:                                32 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Vulnerable: Safe RET, no microcode\\nVulnerability Spec store bypass:         Vulnerable\\nVulnerability Spectre v1:                Mitigation; usercopy/swapgs barriers and __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; Retpolines; STIBP disabled; RSB filling; PBRSB-eIBRS Not affected; BHI Not affected\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Vulnerable: No microcode\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24\", \"runner_image_version\": \"20260920.314.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-x64/libpng/graphic_rgb8 native",
            "value": 131.51,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Linux-6.17.0-1022-azure-x86_64-with-glibc2.39\", \"machine\": \"x86_64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            x86_64\\nCPU op-mode(s):                          32-bit, 64-bit\\nAddress sizes:                           48 bits physical, 48 bits virtual\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               AuthenticAMD\\nModel name:                              AMD EPYC 7763 64-Core Processor\\nCPU family:                              25\\nModel:                                   1\\nThread(s) per core:                      2\\nCore(s) per socket:                      2\\nSocket(s):                               1\\nStepping:                                1\\nBogoMIPS:                                4890.84\\nFlags:                                   fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ht syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm constant_tsc rep_good nopl tsc_reliable nonstop_tsc cpuid extd_apicid aperfmperf tsc_known_freq pni pclmulqdq ssse3 fma cx16 pcid sse4_1 sse4_2 movbe popcnt aes xsave avx f16c rdrand hypervisor lahf_lm cmp_legacy svm cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw topoext vmmcall fsgsbase bmi1 avx2 smep bmi2 erms invpcid rdseed adx smap clflushopt clwb sha_ni xsaveopt xsavec xgetbv1 xsaves user_shstk clzero xsaveerptr rdpru arat npt nrip_save tsc_scale vmcb_clean flushbyasid decodeassists pausefilter pfthreshold v_vmsave_vmload umip vaes vpclmulqdq rdpid fsrm\\nVirtualization:                          AMD-V\\nHypervisor vendor:                       Microsoft\\nVirtualization type:                     full\\nL1d cache:                               64 KiB (2 instances)\\nL1i cache:                               64 KiB (2 instances)\\nL2 cache:                                1 MiB (2 instances)\\nL3 cache:                                32 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Vulnerable: Safe RET, no microcode\\nVulnerability Spec store bypass:         Vulnerable\\nVulnerability Spectre v1:                Mitigation; usercopy/swapgs barriers and __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; Retpolines; STIBP disabled; RSB filling; PBRSB-eIBRS Not affected; BHI Not affected\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Vulnerable: No microcode\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24\", \"runner_image_version\": \"20260920.314.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-x64/ptpng-vs-libpng/graphic_rgb8 rgba8",
            "value": 742.91,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 \nRunner: {\"os\": \"Linux-6.17.0-1022-azure-x86_64-with-glibc2.39\", \"machine\": \"x86_64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            x86_64\\nCPU op-mode(s):                          32-bit, 64-bit\\nAddress sizes:                           48 bits physical, 48 bits virtual\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               AuthenticAMD\\nModel name:                              AMD EPYC 7763 64-Core Processor\\nCPU family:                              25\\nModel:                                   1\\nThread(s) per core:                      2\\nCore(s) per socket:                      2\\nSocket(s):                               1\\nStepping:                                1\\nBogoMIPS:                                4890.84\\nFlags:                                   fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ht syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm constant_tsc rep_good nopl tsc_reliable nonstop_tsc cpuid extd_apicid aperfmperf tsc_known_freq pni pclmulqdq ssse3 fma cx16 pcid sse4_1 sse4_2 movbe popcnt aes xsave avx f16c rdrand hypervisor lahf_lm cmp_legacy svm cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw topoext vmmcall fsgsbase bmi1 avx2 smep bmi2 erms invpcid rdseed adx smap clflushopt clwb sha_ni xsaveopt xsavec xgetbv1 xsaves user_shstk clzero xsaveerptr rdpru arat npt nrip_save tsc_scale vmcb_clean flushbyasid decodeassists pausefilter pfthreshold v_vmsave_vmload umip vaes vpclmulqdq rdpid fsrm\\nVirtualization:                          AMD-V\\nHypervisor vendor:                       Microsoft\\nVirtualization type:                     full\\nL1d cache:                               64 KiB (2 instances)\\nL1i cache:                               64 KiB (2 instances)\\nL2 cache:                                1 MiB (2 instances)\\nL3 cache:                                32 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Vulnerable: Safe RET, no microcode\\nVulnerability Spec store bypass:         Vulnerable\\nVulnerability Spectre v1:                Mitigation; usercopy/swapgs barriers and __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; Retpolines; STIBP disabled; RSB filling; PBRSB-eIBRS Not affected; BHI Not affected\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Vulnerable: No microcode\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24\", \"runner_image_version\": \"20260920.314.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-x64/libpng/graphic_rgb8 rgba8",
            "value": 115.75,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Linux-6.17.0-1022-azure-x86_64-with-glibc2.39\", \"machine\": \"x86_64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            x86_64\\nCPU op-mode(s):                          32-bit, 64-bit\\nAddress sizes:                           48 bits physical, 48 bits virtual\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               AuthenticAMD\\nModel name:                              AMD EPYC 7763 64-Core Processor\\nCPU family:                              25\\nModel:                                   1\\nThread(s) per core:                      2\\nCore(s) per socket:                      2\\nSocket(s):                               1\\nStepping:                                1\\nBogoMIPS:                                4890.84\\nFlags:                                   fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ht syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm constant_tsc rep_good nopl tsc_reliable nonstop_tsc cpuid extd_apicid aperfmperf tsc_known_freq pni pclmulqdq ssse3 fma cx16 pcid sse4_1 sse4_2 movbe popcnt aes xsave avx f16c rdrand hypervisor lahf_lm cmp_legacy svm cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw topoext vmmcall fsgsbase bmi1 avx2 smep bmi2 erms invpcid rdseed adx smap clflushopt clwb sha_ni xsaveopt xsavec xgetbv1 xsaves user_shstk clzero xsaveerptr rdpru arat npt nrip_save tsc_scale vmcb_clean flushbyasid decodeassists pausefilter pfthreshold v_vmsave_vmload umip vaes vpclmulqdq rdpid fsrm\\nVirtualization:                          AMD-V\\nHypervisor vendor:                       Microsoft\\nVirtualization type:                     full\\nL1d cache:                               64 KiB (2 instances)\\nL1i cache:                               64 KiB (2 instances)\\nL2 cache:                                1 MiB (2 instances)\\nL3 cache:                                32 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Vulnerable: Safe RET, no microcode\\nVulnerability Spec store bypass:         Vulnerable\\nVulnerability Spectre v1:                Mitigation; usercopy/swapgs barriers and __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; Retpolines; STIBP disabled; RSB filling; PBRSB-eIBRS Not affected; BHI Not affected\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Vulnerable: No microcode\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24\", \"runner_image_version\": \"20260920.314.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-x64/memory-copy-vs-libpng-zng/64MiB",
            "value": 22864.66,
            "unit": "MB/s",
            "extra": "Warm buffers; 128 MiB working set; median of five batches; payload bytes only; measured reference, not a theoretical limit\nRunner: {\"os\": \"Linux-6.17.0-1022-azure-x86_64-with-glibc2.39\", \"machine\": \"x86_64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            x86_64\\nCPU op-mode(s):                          32-bit, 64-bit\\nAddress sizes:                           48 bits physical, 48 bits virtual\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               AuthenticAMD\\nModel name:                              AMD EPYC 7763 64-Core Processor\\nCPU family:                              25\\nModel:                                   1\\nThread(s) per core:                      2\\nCore(s) per socket:                      2\\nSocket(s):                               1\\nStepping:                                1\\nBogoMIPS:                                4890.84\\nFlags:                                   fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ht syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm constant_tsc rep_good nopl tsc_reliable nonstop_tsc cpuid extd_apicid aperfmperf tsc_known_freq pni pclmulqdq ssse3 fma cx16 pcid sse4_1 sse4_2 movbe popcnt aes xsave avx f16c rdrand hypervisor lahf_lm cmp_legacy svm cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw topoext vmmcall fsgsbase bmi1 avx2 smep bmi2 erms invpcid rdseed adx smap clflushopt clwb sha_ni xsaveopt xsavec xgetbv1 xsaves user_shstk clzero xsaveerptr rdpru arat npt nrip_save tsc_scale vmcb_clean flushbyasid decodeassists pausefilter pfthreshold v_vmsave_vmload umip vaes vpclmulqdq rdpid fsrm\\nVirtualization:                          AMD-V\\nHypervisor vendor:                       Microsoft\\nVirtualization type:                     full\\nL1d cache:                               64 KiB (2 instances)\\nL1i cache:                               64 KiB (2 instances)\\nL2 cache:                                1 MiB (2 instances)\\nL3 cache:                                32 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Vulnerable: Safe RET, no microcode\\nVulnerability Spec store bypass:         Vulnerable\\nVulnerability Spectre v1:                Mitigation; usercopy/swapgs barriers and __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; Retpolines; STIBP disabled; RSB filling; PBRSB-eIBRS Not affected; BHI Not affected\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Vulnerable: No microcode\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24\", \"runner_image_version\": \"20260920.314.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}"
          },
          {
            "name": "linux-x64/ptpng-vs-libpng-zng/photo_rgb8 native",
            "value": 187.18,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 \nRunner: {\"os\": \"Linux-6.17.0-1022-azure-x86_64-with-glibc2.39\", \"machine\": \"x86_64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            x86_64\\nCPU op-mode(s):                          32-bit, 64-bit\\nAddress sizes:                           48 bits physical, 48 bits virtual\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               AuthenticAMD\\nModel name:                              AMD EPYC 7763 64-Core Processor\\nCPU family:                              25\\nModel:                                   1\\nThread(s) per core:                      2\\nCore(s) per socket:                      2\\nSocket(s):                               1\\nStepping:                                1\\nBogoMIPS:                                4890.84\\nFlags:                                   fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ht syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm constant_tsc rep_good nopl tsc_reliable nonstop_tsc cpuid extd_apicid aperfmperf tsc_known_freq pni pclmulqdq ssse3 fma cx16 pcid sse4_1 sse4_2 movbe popcnt aes xsave avx f16c rdrand hypervisor lahf_lm cmp_legacy svm cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw topoext vmmcall fsgsbase bmi1 avx2 smep bmi2 erms invpcid rdseed adx smap clflushopt clwb sha_ni xsaveopt xsavec xgetbv1 xsaves user_shstk clzero xsaveerptr rdpru arat npt nrip_save tsc_scale vmcb_clean flushbyasid decodeassists pausefilter pfthreshold v_vmsave_vmload umip vaes vpclmulqdq rdpid fsrm\\nVirtualization:                          AMD-V\\nHypervisor vendor:                       Microsoft\\nVirtualization type:                     full\\nL1d cache:                               64 KiB (2 instances)\\nL1i cache:                               64 KiB (2 instances)\\nL2 cache:                                1 MiB (2 instances)\\nL3 cache:                                32 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Vulnerable: Safe RET, no microcode\\nVulnerability Spec store bypass:         Vulnerable\\nVulnerability Spectre v1:                Mitigation; usercopy/swapgs barriers and __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; Retpolines; STIBP disabled; RSB filling; PBRSB-eIBRS Not affected; BHI Not affected\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Vulnerable: No microcode\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24\", \"runner_image_version\": \"20260920.314.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-x64/libpng-zng/photo_rgb8 native",
            "value": 170.93,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Linux-6.17.0-1022-azure-x86_64-with-glibc2.39\", \"machine\": \"x86_64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            x86_64\\nCPU op-mode(s):                          32-bit, 64-bit\\nAddress sizes:                           48 bits physical, 48 bits virtual\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               AuthenticAMD\\nModel name:                              AMD EPYC 7763 64-Core Processor\\nCPU family:                              25\\nModel:                                   1\\nThread(s) per core:                      2\\nCore(s) per socket:                      2\\nSocket(s):                               1\\nStepping:                                1\\nBogoMIPS:                                4890.84\\nFlags:                                   fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ht syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm constant_tsc rep_good nopl tsc_reliable nonstop_tsc cpuid extd_apicid aperfmperf tsc_known_freq pni pclmulqdq ssse3 fma cx16 pcid sse4_1 sse4_2 movbe popcnt aes xsave avx f16c rdrand hypervisor lahf_lm cmp_legacy svm cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw topoext vmmcall fsgsbase bmi1 avx2 smep bmi2 erms invpcid rdseed adx smap clflushopt clwb sha_ni xsaveopt xsavec xgetbv1 xsaves user_shstk clzero xsaveerptr rdpru arat npt nrip_save tsc_scale vmcb_clean flushbyasid decodeassists pausefilter pfthreshold v_vmsave_vmload umip vaes vpclmulqdq rdpid fsrm\\nVirtualization:                          AMD-V\\nHypervisor vendor:                       Microsoft\\nVirtualization type:                     full\\nL1d cache:                               64 KiB (2 instances)\\nL1i cache:                               64 KiB (2 instances)\\nL2 cache:                                1 MiB (2 instances)\\nL3 cache:                                32 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Vulnerable: Safe RET, no microcode\\nVulnerability Spec store bypass:         Vulnerable\\nVulnerability Spectre v1:                Mitigation; usercopy/swapgs barriers and __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; Retpolines; STIBP disabled; RSB filling; PBRSB-eIBRS Not affected; BHI Not affected\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Vulnerable: No microcode\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24\", \"runner_image_version\": \"20260920.314.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-x64/ptpng-vs-libpng-zng/photo_rgb8 rgba8",
            "value": 179.49,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 \nRunner: {\"os\": \"Linux-6.17.0-1022-azure-x86_64-with-glibc2.39\", \"machine\": \"x86_64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            x86_64\\nCPU op-mode(s):                          32-bit, 64-bit\\nAddress sizes:                           48 bits physical, 48 bits virtual\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               AuthenticAMD\\nModel name:                              AMD EPYC 7763 64-Core Processor\\nCPU family:                              25\\nModel:                                   1\\nThread(s) per core:                      2\\nCore(s) per socket:                      2\\nSocket(s):                               1\\nStepping:                                1\\nBogoMIPS:                                4890.84\\nFlags:                                   fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ht syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm constant_tsc rep_good nopl tsc_reliable nonstop_tsc cpuid extd_apicid aperfmperf tsc_known_freq pni pclmulqdq ssse3 fma cx16 pcid sse4_1 sse4_2 movbe popcnt aes xsave avx f16c rdrand hypervisor lahf_lm cmp_legacy svm cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw topoext vmmcall fsgsbase bmi1 avx2 smep bmi2 erms invpcid rdseed adx smap clflushopt clwb sha_ni xsaveopt xsavec xgetbv1 xsaves user_shstk clzero xsaveerptr rdpru arat npt nrip_save tsc_scale vmcb_clean flushbyasid decodeassists pausefilter pfthreshold v_vmsave_vmload umip vaes vpclmulqdq rdpid fsrm\\nVirtualization:                          AMD-V\\nHypervisor vendor:                       Microsoft\\nVirtualization type:                     full\\nL1d cache:                               64 KiB (2 instances)\\nL1i cache:                               64 KiB (2 instances)\\nL2 cache:                                1 MiB (2 instances)\\nL3 cache:                                32 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Vulnerable: Safe RET, no microcode\\nVulnerability Spec store bypass:         Vulnerable\\nVulnerability Spectre v1:                Mitigation; usercopy/swapgs barriers and __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; Retpolines; STIBP disabled; RSB filling; PBRSB-eIBRS Not affected; BHI Not affected\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Vulnerable: No microcode\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24\", \"runner_image_version\": \"20260920.314.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-x64/libpng-zng/photo_rgb8 rgba8",
            "value": 148.33,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Linux-6.17.0-1022-azure-x86_64-with-glibc2.39\", \"machine\": \"x86_64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            x86_64\\nCPU op-mode(s):                          32-bit, 64-bit\\nAddress sizes:                           48 bits physical, 48 bits virtual\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               AuthenticAMD\\nModel name:                              AMD EPYC 7763 64-Core Processor\\nCPU family:                              25\\nModel:                                   1\\nThread(s) per core:                      2\\nCore(s) per socket:                      2\\nSocket(s):                               1\\nStepping:                                1\\nBogoMIPS:                                4890.84\\nFlags:                                   fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ht syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm constant_tsc rep_good nopl tsc_reliable nonstop_tsc cpuid extd_apicid aperfmperf tsc_known_freq pni pclmulqdq ssse3 fma cx16 pcid sse4_1 sse4_2 movbe popcnt aes xsave avx f16c rdrand hypervisor lahf_lm cmp_legacy svm cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw topoext vmmcall fsgsbase bmi1 avx2 smep bmi2 erms invpcid rdseed adx smap clflushopt clwb sha_ni xsaveopt xsavec xgetbv1 xsaves user_shstk clzero xsaveerptr rdpru arat npt nrip_save tsc_scale vmcb_clean flushbyasid decodeassists pausefilter pfthreshold v_vmsave_vmload umip vaes vpclmulqdq rdpid fsrm\\nVirtualization:                          AMD-V\\nHypervisor vendor:                       Microsoft\\nVirtualization type:                     full\\nL1d cache:                               64 KiB (2 instances)\\nL1i cache:                               64 KiB (2 instances)\\nL2 cache:                                1 MiB (2 instances)\\nL3 cache:                                32 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Vulnerable: Safe RET, no microcode\\nVulnerability Spec store bypass:         Vulnerable\\nVulnerability Spectre v1:                Mitigation; usercopy/swapgs barriers and __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; Retpolines; STIBP disabled; RSB filling; PBRSB-eIBRS Not affected; BHI Not affected\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Vulnerable: No microcode\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24\", \"runner_image_version\": \"20260920.314.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-x64/ptpng-vs-libpng-zng/photo_rgba8 native",
            "value": 74.18,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 \nRunner: {\"os\": \"Linux-6.17.0-1022-azure-x86_64-with-glibc2.39\", \"machine\": \"x86_64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            x86_64\\nCPU op-mode(s):                          32-bit, 64-bit\\nAddress sizes:                           48 bits physical, 48 bits virtual\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               AuthenticAMD\\nModel name:                              AMD EPYC 7763 64-Core Processor\\nCPU family:                              25\\nModel:                                   1\\nThread(s) per core:                      2\\nCore(s) per socket:                      2\\nSocket(s):                               1\\nStepping:                                1\\nBogoMIPS:                                4890.84\\nFlags:                                   fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ht syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm constant_tsc rep_good nopl tsc_reliable nonstop_tsc cpuid extd_apicid aperfmperf tsc_known_freq pni pclmulqdq ssse3 fma cx16 pcid sse4_1 sse4_2 movbe popcnt aes xsave avx f16c rdrand hypervisor lahf_lm cmp_legacy svm cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw topoext vmmcall fsgsbase bmi1 avx2 smep bmi2 erms invpcid rdseed adx smap clflushopt clwb sha_ni xsaveopt xsavec xgetbv1 xsaves user_shstk clzero xsaveerptr rdpru arat npt nrip_save tsc_scale vmcb_clean flushbyasid decodeassists pausefilter pfthreshold v_vmsave_vmload umip vaes vpclmulqdq rdpid fsrm\\nVirtualization:                          AMD-V\\nHypervisor vendor:                       Microsoft\\nVirtualization type:                     full\\nL1d cache:                               64 KiB (2 instances)\\nL1i cache:                               64 KiB (2 instances)\\nL2 cache:                                1 MiB (2 instances)\\nL3 cache:                                32 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Vulnerable: Safe RET, no microcode\\nVulnerability Spec store bypass:         Vulnerable\\nVulnerability Spectre v1:                Mitigation; usercopy/swapgs barriers and __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; Retpolines; STIBP disabled; RSB filling; PBRSB-eIBRS Not affected; BHI Not affected\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Vulnerable: No microcode\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24\", \"runner_image_version\": \"20260920.314.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-x64/libpng-zng/photo_rgba8 native",
            "value": 75.83,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Linux-6.17.0-1022-azure-x86_64-with-glibc2.39\", \"machine\": \"x86_64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            x86_64\\nCPU op-mode(s):                          32-bit, 64-bit\\nAddress sizes:                           48 bits physical, 48 bits virtual\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               AuthenticAMD\\nModel name:                              AMD EPYC 7763 64-Core Processor\\nCPU family:                              25\\nModel:                                   1\\nThread(s) per core:                      2\\nCore(s) per socket:                      2\\nSocket(s):                               1\\nStepping:                                1\\nBogoMIPS:                                4890.84\\nFlags:                                   fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ht syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm constant_tsc rep_good nopl tsc_reliable nonstop_tsc cpuid extd_apicid aperfmperf tsc_known_freq pni pclmulqdq ssse3 fma cx16 pcid sse4_1 sse4_2 movbe popcnt aes xsave avx f16c rdrand hypervisor lahf_lm cmp_legacy svm cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw topoext vmmcall fsgsbase bmi1 avx2 smep bmi2 erms invpcid rdseed adx smap clflushopt clwb sha_ni xsaveopt xsavec xgetbv1 xsaves user_shstk clzero xsaveerptr rdpru arat npt nrip_save tsc_scale vmcb_clean flushbyasid decodeassists pausefilter pfthreshold v_vmsave_vmload umip vaes vpclmulqdq rdpid fsrm\\nVirtualization:                          AMD-V\\nHypervisor vendor:                       Microsoft\\nVirtualization type:                     full\\nL1d cache:                               64 KiB (2 instances)\\nL1i cache:                               64 KiB (2 instances)\\nL2 cache:                                1 MiB (2 instances)\\nL3 cache:                                32 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Vulnerable: Safe RET, no microcode\\nVulnerability Spec store bypass:         Vulnerable\\nVulnerability Spectre v1:                Mitigation; usercopy/swapgs barriers and __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; Retpolines; STIBP disabled; RSB filling; PBRSB-eIBRS Not affected; BHI Not affected\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Vulnerable: No microcode\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24\", \"runner_image_version\": \"20260920.314.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-x64/ptpng-vs-libpng-zng/photo_rgba8 rgba8",
            "value": 70.36,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 \nRunner: {\"os\": \"Linux-6.17.0-1022-azure-x86_64-with-glibc2.39\", \"machine\": \"x86_64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            x86_64\\nCPU op-mode(s):                          32-bit, 64-bit\\nAddress sizes:                           48 bits physical, 48 bits virtual\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               AuthenticAMD\\nModel name:                              AMD EPYC 7763 64-Core Processor\\nCPU family:                              25\\nModel:                                   1\\nThread(s) per core:                      2\\nCore(s) per socket:                      2\\nSocket(s):                               1\\nStepping:                                1\\nBogoMIPS:                                4890.84\\nFlags:                                   fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ht syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm constant_tsc rep_good nopl tsc_reliable nonstop_tsc cpuid extd_apicid aperfmperf tsc_known_freq pni pclmulqdq ssse3 fma cx16 pcid sse4_1 sse4_2 movbe popcnt aes xsave avx f16c rdrand hypervisor lahf_lm cmp_legacy svm cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw topoext vmmcall fsgsbase bmi1 avx2 smep bmi2 erms invpcid rdseed adx smap clflushopt clwb sha_ni xsaveopt xsavec xgetbv1 xsaves user_shstk clzero xsaveerptr rdpru arat npt nrip_save tsc_scale vmcb_clean flushbyasid decodeassists pausefilter pfthreshold v_vmsave_vmload umip vaes vpclmulqdq rdpid fsrm\\nVirtualization:                          AMD-V\\nHypervisor vendor:                       Microsoft\\nVirtualization type:                     full\\nL1d cache:                               64 KiB (2 instances)\\nL1i cache:                               64 KiB (2 instances)\\nL2 cache:                                1 MiB (2 instances)\\nL3 cache:                                32 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Vulnerable: Safe RET, no microcode\\nVulnerability Spec store bypass:         Vulnerable\\nVulnerability Spectre v1:                Mitigation; usercopy/swapgs barriers and __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; Retpolines; STIBP disabled; RSB filling; PBRSB-eIBRS Not affected; BHI Not affected\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Vulnerable: No microcode\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24\", \"runner_image_version\": \"20260920.314.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-x64/libpng-zng/photo_rgba8 rgba8",
            "value": 75.51,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Linux-6.17.0-1022-azure-x86_64-with-glibc2.39\", \"machine\": \"x86_64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            x86_64\\nCPU op-mode(s):                          32-bit, 64-bit\\nAddress sizes:                           48 bits physical, 48 bits virtual\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               AuthenticAMD\\nModel name:                              AMD EPYC 7763 64-Core Processor\\nCPU family:                              25\\nModel:                                   1\\nThread(s) per core:                      2\\nCore(s) per socket:                      2\\nSocket(s):                               1\\nStepping:                                1\\nBogoMIPS:                                4890.84\\nFlags:                                   fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ht syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm constant_tsc rep_good nopl tsc_reliable nonstop_tsc cpuid extd_apicid aperfmperf tsc_known_freq pni pclmulqdq ssse3 fma cx16 pcid sse4_1 sse4_2 movbe popcnt aes xsave avx f16c rdrand hypervisor lahf_lm cmp_legacy svm cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw topoext vmmcall fsgsbase bmi1 avx2 smep bmi2 erms invpcid rdseed adx smap clflushopt clwb sha_ni xsaveopt xsavec xgetbv1 xsaves user_shstk clzero xsaveerptr rdpru arat npt nrip_save tsc_scale vmcb_clean flushbyasid decodeassists pausefilter pfthreshold v_vmsave_vmload umip vaes vpclmulqdq rdpid fsrm\\nVirtualization:                          AMD-V\\nHypervisor vendor:                       Microsoft\\nVirtualization type:                     full\\nL1d cache:                               64 KiB (2 instances)\\nL1i cache:                               64 KiB (2 instances)\\nL2 cache:                                1 MiB (2 instances)\\nL3 cache:                                32 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Vulnerable: Safe RET, no microcode\\nVulnerability Spec store bypass:         Vulnerable\\nVulnerability Spectre v1:                Mitigation; usercopy/swapgs barriers and __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; Retpolines; STIBP disabled; RSB filling; PBRSB-eIBRS Not affected; BHI Not affected\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Vulnerable: No microcode\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24\", \"runner_image_version\": \"20260920.314.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-x64/ptpng-vs-libpng-zng/photo_gray8 native",
            "value": 286.76,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 \nRunner: {\"os\": \"Linux-6.17.0-1022-azure-x86_64-with-glibc2.39\", \"machine\": \"x86_64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            x86_64\\nCPU op-mode(s):                          32-bit, 64-bit\\nAddress sizes:                           48 bits physical, 48 bits virtual\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               AuthenticAMD\\nModel name:                              AMD EPYC 7763 64-Core Processor\\nCPU family:                              25\\nModel:                                   1\\nThread(s) per core:                      2\\nCore(s) per socket:                      2\\nSocket(s):                               1\\nStepping:                                1\\nBogoMIPS:                                4890.84\\nFlags:                                   fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ht syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm constant_tsc rep_good nopl tsc_reliable nonstop_tsc cpuid extd_apicid aperfmperf tsc_known_freq pni pclmulqdq ssse3 fma cx16 pcid sse4_1 sse4_2 movbe popcnt aes xsave avx f16c rdrand hypervisor lahf_lm cmp_legacy svm cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw topoext vmmcall fsgsbase bmi1 avx2 smep bmi2 erms invpcid rdseed adx smap clflushopt clwb sha_ni xsaveopt xsavec xgetbv1 xsaves user_shstk clzero xsaveerptr rdpru arat npt nrip_save tsc_scale vmcb_clean flushbyasid decodeassists pausefilter pfthreshold v_vmsave_vmload umip vaes vpclmulqdq rdpid fsrm\\nVirtualization:                          AMD-V\\nHypervisor vendor:                       Microsoft\\nVirtualization type:                     full\\nL1d cache:                               64 KiB (2 instances)\\nL1i cache:                               64 KiB (2 instances)\\nL2 cache:                                1 MiB (2 instances)\\nL3 cache:                                32 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Vulnerable: Safe RET, no microcode\\nVulnerability Spec store bypass:         Vulnerable\\nVulnerability Spectre v1:                Mitigation; usercopy/swapgs barriers and __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; Retpolines; STIBP disabled; RSB filling; PBRSB-eIBRS Not affected; BHI Not affected\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Vulnerable: No microcode\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24\", \"runner_image_version\": \"20260920.314.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-x64/libpng-zng/photo_gray8 native",
            "value": 256.41,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Linux-6.17.0-1022-azure-x86_64-with-glibc2.39\", \"machine\": \"x86_64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            x86_64\\nCPU op-mode(s):                          32-bit, 64-bit\\nAddress sizes:                           48 bits physical, 48 bits virtual\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               AuthenticAMD\\nModel name:                              AMD EPYC 7763 64-Core Processor\\nCPU family:                              25\\nModel:                                   1\\nThread(s) per core:                      2\\nCore(s) per socket:                      2\\nSocket(s):                               1\\nStepping:                                1\\nBogoMIPS:                                4890.84\\nFlags:                                   fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ht syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm constant_tsc rep_good nopl tsc_reliable nonstop_tsc cpuid extd_apicid aperfmperf tsc_known_freq pni pclmulqdq ssse3 fma cx16 pcid sse4_1 sse4_2 movbe popcnt aes xsave avx f16c rdrand hypervisor lahf_lm cmp_legacy svm cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw topoext vmmcall fsgsbase bmi1 avx2 smep bmi2 erms invpcid rdseed adx smap clflushopt clwb sha_ni xsaveopt xsavec xgetbv1 xsaves user_shstk clzero xsaveerptr rdpru arat npt nrip_save tsc_scale vmcb_clean flushbyasid decodeassists pausefilter pfthreshold v_vmsave_vmload umip vaes vpclmulqdq rdpid fsrm\\nVirtualization:                          AMD-V\\nHypervisor vendor:                       Microsoft\\nVirtualization type:                     full\\nL1d cache:                               64 KiB (2 instances)\\nL1i cache:                               64 KiB (2 instances)\\nL2 cache:                                1 MiB (2 instances)\\nL3 cache:                                32 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Vulnerable: Safe RET, no microcode\\nVulnerability Spec store bypass:         Vulnerable\\nVulnerability Spectre v1:                Mitigation; usercopy/swapgs barriers and __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; Retpolines; STIBP disabled; RSB filling; PBRSB-eIBRS Not affected; BHI Not affected\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Vulnerable: No microcode\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24\", \"runner_image_version\": \"20260920.314.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-x64/ptpng-vs-libpng-zng/photo_gray8 rgba8",
            "value": 272.05,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 \nRunner: {\"os\": \"Linux-6.17.0-1022-azure-x86_64-with-glibc2.39\", \"machine\": \"x86_64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            x86_64\\nCPU op-mode(s):                          32-bit, 64-bit\\nAddress sizes:                           48 bits physical, 48 bits virtual\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               AuthenticAMD\\nModel name:                              AMD EPYC 7763 64-Core Processor\\nCPU family:                              25\\nModel:                                   1\\nThread(s) per core:                      2\\nCore(s) per socket:                      2\\nSocket(s):                               1\\nStepping:                                1\\nBogoMIPS:                                4890.84\\nFlags:                                   fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ht syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm constant_tsc rep_good nopl tsc_reliable nonstop_tsc cpuid extd_apicid aperfmperf tsc_known_freq pni pclmulqdq ssse3 fma cx16 pcid sse4_1 sse4_2 movbe popcnt aes xsave avx f16c rdrand hypervisor lahf_lm cmp_legacy svm cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw topoext vmmcall fsgsbase bmi1 avx2 smep bmi2 erms invpcid rdseed adx smap clflushopt clwb sha_ni xsaveopt xsavec xgetbv1 xsaves user_shstk clzero xsaveerptr rdpru arat npt nrip_save tsc_scale vmcb_clean flushbyasid decodeassists pausefilter pfthreshold v_vmsave_vmload umip vaes vpclmulqdq rdpid fsrm\\nVirtualization:                          AMD-V\\nHypervisor vendor:                       Microsoft\\nVirtualization type:                     full\\nL1d cache:                               64 KiB (2 instances)\\nL1i cache:                               64 KiB (2 instances)\\nL2 cache:                                1 MiB (2 instances)\\nL3 cache:                                32 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Vulnerable: Safe RET, no microcode\\nVulnerability Spec store bypass:         Vulnerable\\nVulnerability Spectre v1:                Mitigation; usercopy/swapgs barriers and __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; Retpolines; STIBP disabled; RSB filling; PBRSB-eIBRS Not affected; BHI Not affected\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Vulnerable: No microcode\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24\", \"runner_image_version\": \"20260920.314.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-x64/libpng-zng/photo_gray8 rgba8",
            "value": 180.18,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Linux-6.17.0-1022-azure-x86_64-with-glibc2.39\", \"machine\": \"x86_64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            x86_64\\nCPU op-mode(s):                          32-bit, 64-bit\\nAddress sizes:                           48 bits physical, 48 bits virtual\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               AuthenticAMD\\nModel name:                              AMD EPYC 7763 64-Core Processor\\nCPU family:                              25\\nModel:                                   1\\nThread(s) per core:                      2\\nCore(s) per socket:                      2\\nSocket(s):                               1\\nStepping:                                1\\nBogoMIPS:                                4890.84\\nFlags:                                   fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ht syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm constant_tsc rep_good nopl tsc_reliable nonstop_tsc cpuid extd_apicid aperfmperf tsc_known_freq pni pclmulqdq ssse3 fma cx16 pcid sse4_1 sse4_2 movbe popcnt aes xsave avx f16c rdrand hypervisor lahf_lm cmp_legacy svm cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw topoext vmmcall fsgsbase bmi1 avx2 smep bmi2 erms invpcid rdseed adx smap clflushopt clwb sha_ni xsaveopt xsavec xgetbv1 xsaves user_shstk clzero xsaveerptr rdpru arat npt nrip_save tsc_scale vmcb_clean flushbyasid decodeassists pausefilter pfthreshold v_vmsave_vmload umip vaes vpclmulqdq rdpid fsrm\\nVirtualization:                          AMD-V\\nHypervisor vendor:                       Microsoft\\nVirtualization type:                     full\\nL1d cache:                               64 KiB (2 instances)\\nL1i cache:                               64 KiB (2 instances)\\nL2 cache:                                1 MiB (2 instances)\\nL3 cache:                                32 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Vulnerable: Safe RET, no microcode\\nVulnerability Spec store bypass:         Vulnerable\\nVulnerability Spectre v1:                Mitigation; usercopy/swapgs barriers and __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; Retpolines; STIBP disabled; RSB filling; PBRSB-eIBRS Not affected; BHI Not affected\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Vulnerable: No microcode\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24\", \"runner_image_version\": \"20260920.314.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-x64/ptpng-vs-libpng-zng/photo_gray16 native",
            "value": 299.56,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 \nRunner: {\"os\": \"Linux-6.17.0-1022-azure-x86_64-with-glibc2.39\", \"machine\": \"x86_64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            x86_64\\nCPU op-mode(s):                          32-bit, 64-bit\\nAddress sizes:                           48 bits physical, 48 bits virtual\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               AuthenticAMD\\nModel name:                              AMD EPYC 7763 64-Core Processor\\nCPU family:                              25\\nModel:                                   1\\nThread(s) per core:                      2\\nCore(s) per socket:                      2\\nSocket(s):                               1\\nStepping:                                1\\nBogoMIPS:                                4890.84\\nFlags:                                   fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ht syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm constant_tsc rep_good nopl tsc_reliable nonstop_tsc cpuid extd_apicid aperfmperf tsc_known_freq pni pclmulqdq ssse3 fma cx16 pcid sse4_1 sse4_2 movbe popcnt aes xsave avx f16c rdrand hypervisor lahf_lm cmp_legacy svm cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw topoext vmmcall fsgsbase bmi1 avx2 smep bmi2 erms invpcid rdseed adx smap clflushopt clwb sha_ni xsaveopt xsavec xgetbv1 xsaves user_shstk clzero xsaveerptr rdpru arat npt nrip_save tsc_scale vmcb_clean flushbyasid decodeassists pausefilter pfthreshold v_vmsave_vmload umip vaes vpclmulqdq rdpid fsrm\\nVirtualization:                          AMD-V\\nHypervisor vendor:                       Microsoft\\nVirtualization type:                     full\\nL1d cache:                               64 KiB (2 instances)\\nL1i cache:                               64 KiB (2 instances)\\nL2 cache:                                1 MiB (2 instances)\\nL3 cache:                                32 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Vulnerable: Safe RET, no microcode\\nVulnerability Spec store bypass:         Vulnerable\\nVulnerability Spectre v1:                Mitigation; usercopy/swapgs barriers and __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; Retpolines; STIBP disabled; RSB filling; PBRSB-eIBRS Not affected; BHI Not affected\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Vulnerable: No microcode\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24\", \"runner_image_version\": \"20260920.314.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-x64/libpng-zng/photo_gray16 native",
            "value": 208.08,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Linux-6.17.0-1022-azure-x86_64-with-glibc2.39\", \"machine\": \"x86_64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            x86_64\\nCPU op-mode(s):                          32-bit, 64-bit\\nAddress sizes:                           48 bits physical, 48 bits virtual\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               AuthenticAMD\\nModel name:                              AMD EPYC 7763 64-Core Processor\\nCPU family:                              25\\nModel:                                   1\\nThread(s) per core:                      2\\nCore(s) per socket:                      2\\nSocket(s):                               1\\nStepping:                                1\\nBogoMIPS:                                4890.84\\nFlags:                                   fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ht syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm constant_tsc rep_good nopl tsc_reliable nonstop_tsc cpuid extd_apicid aperfmperf tsc_known_freq pni pclmulqdq ssse3 fma cx16 pcid sse4_1 sse4_2 movbe popcnt aes xsave avx f16c rdrand hypervisor lahf_lm cmp_legacy svm cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw topoext vmmcall fsgsbase bmi1 avx2 smep bmi2 erms invpcid rdseed adx smap clflushopt clwb sha_ni xsaveopt xsavec xgetbv1 xsaves user_shstk clzero xsaveerptr rdpru arat npt nrip_save tsc_scale vmcb_clean flushbyasid decodeassists pausefilter pfthreshold v_vmsave_vmload umip vaes vpclmulqdq rdpid fsrm\\nVirtualization:                          AMD-V\\nHypervisor vendor:                       Microsoft\\nVirtualization type:                     full\\nL1d cache:                               64 KiB (2 instances)\\nL1i cache:                               64 KiB (2 instances)\\nL2 cache:                                1 MiB (2 instances)\\nL3 cache:                                32 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Vulnerable: Safe RET, no microcode\\nVulnerability Spec store bypass:         Vulnerable\\nVulnerability Spectre v1:                Mitigation; usercopy/swapgs barriers and __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; Retpolines; STIBP disabled; RSB filling; PBRSB-eIBRS Not affected; BHI Not affected\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Vulnerable: No microcode\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24\", \"runner_image_version\": \"20260920.314.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-x64/ptpng-vs-libpng-zng/photo_gray16 rgba8",
            "value": 282.05,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 \nRunner: {\"os\": \"Linux-6.17.0-1022-azure-x86_64-with-glibc2.39\", \"machine\": \"x86_64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            x86_64\\nCPU op-mode(s):                          32-bit, 64-bit\\nAddress sizes:                           48 bits physical, 48 bits virtual\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               AuthenticAMD\\nModel name:                              AMD EPYC 7763 64-Core Processor\\nCPU family:                              25\\nModel:                                   1\\nThread(s) per core:                      2\\nCore(s) per socket:                      2\\nSocket(s):                               1\\nStepping:                                1\\nBogoMIPS:                                4890.84\\nFlags:                                   fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ht syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm constant_tsc rep_good nopl tsc_reliable nonstop_tsc cpuid extd_apicid aperfmperf tsc_known_freq pni pclmulqdq ssse3 fma cx16 pcid sse4_1 sse4_2 movbe popcnt aes xsave avx f16c rdrand hypervisor lahf_lm cmp_legacy svm cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw topoext vmmcall fsgsbase bmi1 avx2 smep bmi2 erms invpcid rdseed adx smap clflushopt clwb sha_ni xsaveopt xsavec xgetbv1 xsaves user_shstk clzero xsaveerptr rdpru arat npt nrip_save tsc_scale vmcb_clean flushbyasid decodeassists pausefilter pfthreshold v_vmsave_vmload umip vaes vpclmulqdq rdpid fsrm\\nVirtualization:                          AMD-V\\nHypervisor vendor:                       Microsoft\\nVirtualization type:                     full\\nL1d cache:                               64 KiB (2 instances)\\nL1i cache:                               64 KiB (2 instances)\\nL2 cache:                                1 MiB (2 instances)\\nL3 cache:                                32 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Vulnerable: Safe RET, no microcode\\nVulnerability Spec store bypass:         Vulnerable\\nVulnerability Spectre v1:                Mitigation; usercopy/swapgs barriers and __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; Retpolines; STIBP disabled; RSB filling; PBRSB-eIBRS Not affected; BHI Not affected\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Vulnerable: No microcode\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24\", \"runner_image_version\": \"20260920.314.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-x64/libpng-zng/photo_gray16 rgba8",
            "value": 123.26,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Linux-6.17.0-1022-azure-x86_64-with-glibc2.39\", \"machine\": \"x86_64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            x86_64\\nCPU op-mode(s):                          32-bit, 64-bit\\nAddress sizes:                           48 bits physical, 48 bits virtual\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               AuthenticAMD\\nModel name:                              AMD EPYC 7763 64-Core Processor\\nCPU family:                              25\\nModel:                                   1\\nThread(s) per core:                      2\\nCore(s) per socket:                      2\\nSocket(s):                               1\\nStepping:                                1\\nBogoMIPS:                                4890.84\\nFlags:                                   fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ht syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm constant_tsc rep_good nopl tsc_reliable nonstop_tsc cpuid extd_apicid aperfmperf tsc_known_freq pni pclmulqdq ssse3 fma cx16 pcid sse4_1 sse4_2 movbe popcnt aes xsave avx f16c rdrand hypervisor lahf_lm cmp_legacy svm cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw topoext vmmcall fsgsbase bmi1 avx2 smep bmi2 erms invpcid rdseed adx smap clflushopt clwb sha_ni xsaveopt xsavec xgetbv1 xsaves user_shstk clzero xsaveerptr rdpru arat npt nrip_save tsc_scale vmcb_clean flushbyasid decodeassists pausefilter pfthreshold v_vmsave_vmload umip vaes vpclmulqdq rdpid fsrm\\nVirtualization:                          AMD-V\\nHypervisor vendor:                       Microsoft\\nVirtualization type:                     full\\nL1d cache:                               64 KiB (2 instances)\\nL1i cache:                               64 KiB (2 instances)\\nL2 cache:                                1 MiB (2 instances)\\nL3 cache:                                32 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Vulnerable: Safe RET, no microcode\\nVulnerability Spec store bypass:         Vulnerable\\nVulnerability Spectre v1:                Mitigation; usercopy/swapgs barriers and __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; Retpolines; STIBP disabled; RSB filling; PBRSB-eIBRS Not affected; BHI Not affected\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Vulnerable: No microcode\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24\", \"runner_image_version\": \"20260920.314.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-x64/ptpng-vs-libpng-zng/graphic_pal8 native",
            "value": 6471.03,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 \nRunner: {\"os\": \"Linux-6.17.0-1022-azure-x86_64-with-glibc2.39\", \"machine\": \"x86_64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            x86_64\\nCPU op-mode(s):                          32-bit, 64-bit\\nAddress sizes:                           48 bits physical, 48 bits virtual\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               AuthenticAMD\\nModel name:                              AMD EPYC 7763 64-Core Processor\\nCPU family:                              25\\nModel:                                   1\\nThread(s) per core:                      2\\nCore(s) per socket:                      2\\nSocket(s):                               1\\nStepping:                                1\\nBogoMIPS:                                4890.84\\nFlags:                                   fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ht syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm constant_tsc rep_good nopl tsc_reliable nonstop_tsc cpuid extd_apicid aperfmperf tsc_known_freq pni pclmulqdq ssse3 fma cx16 pcid sse4_1 sse4_2 movbe popcnt aes xsave avx f16c rdrand hypervisor lahf_lm cmp_legacy svm cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw topoext vmmcall fsgsbase bmi1 avx2 smep bmi2 erms invpcid rdseed adx smap clflushopt clwb sha_ni xsaveopt xsavec xgetbv1 xsaves user_shstk clzero xsaveerptr rdpru arat npt nrip_save tsc_scale vmcb_clean flushbyasid decodeassists pausefilter pfthreshold v_vmsave_vmload umip vaes vpclmulqdq rdpid fsrm\\nVirtualization:                          AMD-V\\nHypervisor vendor:                       Microsoft\\nVirtualization type:                     full\\nL1d cache:                               64 KiB (2 instances)\\nL1i cache:                               64 KiB (2 instances)\\nL2 cache:                                1 MiB (2 instances)\\nL3 cache:                                32 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Vulnerable: Safe RET, no microcode\\nVulnerability Spec store bypass:         Vulnerable\\nVulnerability Spectre v1:                Mitigation; usercopy/swapgs barriers and __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; Retpolines; STIBP disabled; RSB filling; PBRSB-eIBRS Not affected; BHI Not affected\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Vulnerable: No microcode\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24\", \"runner_image_version\": \"20260920.314.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-x64/libpng-zng/graphic_pal8 native",
            "value": 1275.3,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Linux-6.17.0-1022-azure-x86_64-with-glibc2.39\", \"machine\": \"x86_64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            x86_64\\nCPU op-mode(s):                          32-bit, 64-bit\\nAddress sizes:                           48 bits physical, 48 bits virtual\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               AuthenticAMD\\nModel name:                              AMD EPYC 7763 64-Core Processor\\nCPU family:                              25\\nModel:                                   1\\nThread(s) per core:                      2\\nCore(s) per socket:                      2\\nSocket(s):                               1\\nStepping:                                1\\nBogoMIPS:                                4890.84\\nFlags:                                   fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ht syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm constant_tsc rep_good nopl tsc_reliable nonstop_tsc cpuid extd_apicid aperfmperf tsc_known_freq pni pclmulqdq ssse3 fma cx16 pcid sse4_1 sse4_2 movbe popcnt aes xsave avx f16c rdrand hypervisor lahf_lm cmp_legacy svm cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw topoext vmmcall fsgsbase bmi1 avx2 smep bmi2 erms invpcid rdseed adx smap clflushopt clwb sha_ni xsaveopt xsavec xgetbv1 xsaves user_shstk clzero xsaveerptr rdpru arat npt nrip_save tsc_scale vmcb_clean flushbyasid decodeassists pausefilter pfthreshold v_vmsave_vmload umip vaes vpclmulqdq rdpid fsrm\\nVirtualization:                          AMD-V\\nHypervisor vendor:                       Microsoft\\nVirtualization type:                     full\\nL1d cache:                               64 KiB (2 instances)\\nL1i cache:                               64 KiB (2 instances)\\nL2 cache:                                1 MiB (2 instances)\\nL3 cache:                                32 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Vulnerable: Safe RET, no microcode\\nVulnerability Spec store bypass:         Vulnerable\\nVulnerability Spectre v1:                Mitigation; usercopy/swapgs barriers and __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; Retpolines; STIBP disabled; RSB filling; PBRSB-eIBRS Not affected; BHI Not affected\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Vulnerable: No microcode\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24\", \"runner_image_version\": \"20260920.314.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-x64/ptpng-vs-libpng-zng/graphic_pal8 rgba8",
            "value": 1604.66,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 \nRunner: {\"os\": \"Linux-6.17.0-1022-azure-x86_64-with-glibc2.39\", \"machine\": \"x86_64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            x86_64\\nCPU op-mode(s):                          32-bit, 64-bit\\nAddress sizes:                           48 bits physical, 48 bits virtual\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               AuthenticAMD\\nModel name:                              AMD EPYC 7763 64-Core Processor\\nCPU family:                              25\\nModel:                                   1\\nThread(s) per core:                      2\\nCore(s) per socket:                      2\\nSocket(s):                               1\\nStepping:                                1\\nBogoMIPS:                                4890.84\\nFlags:                                   fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ht syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm constant_tsc rep_good nopl tsc_reliable nonstop_tsc cpuid extd_apicid aperfmperf tsc_known_freq pni pclmulqdq ssse3 fma cx16 pcid sse4_1 sse4_2 movbe popcnt aes xsave avx f16c rdrand hypervisor lahf_lm cmp_legacy svm cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw topoext vmmcall fsgsbase bmi1 avx2 smep bmi2 erms invpcid rdseed adx smap clflushopt clwb sha_ni xsaveopt xsavec xgetbv1 xsaves user_shstk clzero xsaveerptr rdpru arat npt nrip_save tsc_scale vmcb_clean flushbyasid decodeassists pausefilter pfthreshold v_vmsave_vmload umip vaes vpclmulqdq rdpid fsrm\\nVirtualization:                          AMD-V\\nHypervisor vendor:                       Microsoft\\nVirtualization type:                     full\\nL1d cache:                               64 KiB (2 instances)\\nL1i cache:                               64 KiB (2 instances)\\nL2 cache:                                1 MiB (2 instances)\\nL3 cache:                                32 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Vulnerable: Safe RET, no microcode\\nVulnerability Spec store bypass:         Vulnerable\\nVulnerability Spectre v1:                Mitigation; usercopy/swapgs barriers and __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; Retpolines; STIBP disabled; RSB filling; PBRSB-eIBRS Not affected; BHI Not affected\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Vulnerable: No microcode\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24\", \"runner_image_version\": \"20260920.314.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-x64/libpng-zng/graphic_pal8 rgba8",
            "value": 455.14,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Linux-6.17.0-1022-azure-x86_64-with-glibc2.39\", \"machine\": \"x86_64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            x86_64\\nCPU op-mode(s):                          32-bit, 64-bit\\nAddress sizes:                           48 bits physical, 48 bits virtual\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               AuthenticAMD\\nModel name:                              AMD EPYC 7763 64-Core Processor\\nCPU family:                              25\\nModel:                                   1\\nThread(s) per core:                      2\\nCore(s) per socket:                      2\\nSocket(s):                               1\\nStepping:                                1\\nBogoMIPS:                                4890.84\\nFlags:                                   fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ht syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm constant_tsc rep_good nopl tsc_reliable nonstop_tsc cpuid extd_apicid aperfmperf tsc_known_freq pni pclmulqdq ssse3 fma cx16 pcid sse4_1 sse4_2 movbe popcnt aes xsave avx f16c rdrand hypervisor lahf_lm cmp_legacy svm cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw topoext vmmcall fsgsbase bmi1 avx2 smep bmi2 erms invpcid rdseed adx smap clflushopt clwb sha_ni xsaveopt xsavec xgetbv1 xsaves user_shstk clzero xsaveerptr rdpru arat npt nrip_save tsc_scale vmcb_clean flushbyasid decodeassists pausefilter pfthreshold v_vmsave_vmload umip vaes vpclmulqdq rdpid fsrm\\nVirtualization:                          AMD-V\\nHypervisor vendor:                       Microsoft\\nVirtualization type:                     full\\nL1d cache:                               64 KiB (2 instances)\\nL1i cache:                               64 KiB (2 instances)\\nL2 cache:                                1 MiB (2 instances)\\nL3 cache:                                32 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Vulnerable: Safe RET, no microcode\\nVulnerability Spec store bypass:         Vulnerable\\nVulnerability Spectre v1:                Mitigation; usercopy/swapgs barriers and __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; Retpolines; STIBP disabled; RSB filling; PBRSB-eIBRS Not affected; BHI Not affected\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Vulnerable: No microcode\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24\", \"runner_image_version\": \"20260920.314.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-x64/ptpng-vs-libpng-zng/graphic_rgb8 native",
            "value": 898.17,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 \nRunner: {\"os\": \"Linux-6.17.0-1022-azure-x86_64-with-glibc2.39\", \"machine\": \"x86_64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            x86_64\\nCPU op-mode(s):                          32-bit, 64-bit\\nAddress sizes:                           48 bits physical, 48 bits virtual\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               AuthenticAMD\\nModel name:                              AMD EPYC 7763 64-Core Processor\\nCPU family:                              25\\nModel:                                   1\\nThread(s) per core:                      2\\nCore(s) per socket:                      2\\nSocket(s):                               1\\nStepping:                                1\\nBogoMIPS:                                4890.84\\nFlags:                                   fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ht syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm constant_tsc rep_good nopl tsc_reliable nonstop_tsc cpuid extd_apicid aperfmperf tsc_known_freq pni pclmulqdq ssse3 fma cx16 pcid sse4_1 sse4_2 movbe popcnt aes xsave avx f16c rdrand hypervisor lahf_lm cmp_legacy svm cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw topoext vmmcall fsgsbase bmi1 avx2 smep bmi2 erms invpcid rdseed adx smap clflushopt clwb sha_ni xsaveopt xsavec xgetbv1 xsaves user_shstk clzero xsaveerptr rdpru arat npt nrip_save tsc_scale vmcb_clean flushbyasid decodeassists pausefilter pfthreshold v_vmsave_vmload umip vaes vpclmulqdq rdpid fsrm\\nVirtualization:                          AMD-V\\nHypervisor vendor:                       Microsoft\\nVirtualization type:                     full\\nL1d cache:                               64 KiB (2 instances)\\nL1i cache:                               64 KiB (2 instances)\\nL2 cache:                                1 MiB (2 instances)\\nL3 cache:                                32 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Vulnerable: Safe RET, no microcode\\nVulnerability Spec store bypass:         Vulnerable\\nVulnerability Spectre v1:                Mitigation; usercopy/swapgs barriers and __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; Retpolines; STIBP disabled; RSB filling; PBRSB-eIBRS Not affected; BHI Not affected\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Vulnerable: No microcode\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24\", \"runner_image_version\": \"20260920.314.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-x64/libpng-zng/graphic_rgb8 native",
            "value": 892.5,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Linux-6.17.0-1022-azure-x86_64-with-glibc2.39\", \"machine\": \"x86_64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            x86_64\\nCPU op-mode(s):                          32-bit, 64-bit\\nAddress sizes:                           48 bits physical, 48 bits virtual\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               AuthenticAMD\\nModel name:                              AMD EPYC 7763 64-Core Processor\\nCPU family:                              25\\nModel:                                   1\\nThread(s) per core:                      2\\nCore(s) per socket:                      2\\nSocket(s):                               1\\nStepping:                                1\\nBogoMIPS:                                4890.84\\nFlags:                                   fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ht syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm constant_tsc rep_good nopl tsc_reliable nonstop_tsc cpuid extd_apicid aperfmperf tsc_known_freq pni pclmulqdq ssse3 fma cx16 pcid sse4_1 sse4_2 movbe popcnt aes xsave avx f16c rdrand hypervisor lahf_lm cmp_legacy svm cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw topoext vmmcall fsgsbase bmi1 avx2 smep bmi2 erms invpcid rdseed adx smap clflushopt clwb sha_ni xsaveopt xsavec xgetbv1 xsaves user_shstk clzero xsaveerptr rdpru arat npt nrip_save tsc_scale vmcb_clean flushbyasid decodeassists pausefilter pfthreshold v_vmsave_vmload umip vaes vpclmulqdq rdpid fsrm\\nVirtualization:                          AMD-V\\nHypervisor vendor:                       Microsoft\\nVirtualization type:                     full\\nL1d cache:                               64 KiB (2 instances)\\nL1i cache:                               64 KiB (2 instances)\\nL2 cache:                                1 MiB (2 instances)\\nL3 cache:                                32 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Vulnerable: Safe RET, no microcode\\nVulnerability Spec store bypass:         Vulnerable\\nVulnerability Spectre v1:                Mitigation; usercopy/swapgs barriers and __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; Retpolines; STIBP disabled; RSB filling; PBRSB-eIBRS Not affected; BHI Not affected\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Vulnerable: No microcode\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24\", \"runner_image_version\": \"20260920.314.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-x64/ptpng-vs-libpng-zng/graphic_rgb8 rgba8",
            "value": 737.01,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 \nRunner: {\"os\": \"Linux-6.17.0-1022-azure-x86_64-with-glibc2.39\", \"machine\": \"x86_64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            x86_64\\nCPU op-mode(s):                          32-bit, 64-bit\\nAddress sizes:                           48 bits physical, 48 bits virtual\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               AuthenticAMD\\nModel name:                              AMD EPYC 7763 64-Core Processor\\nCPU family:                              25\\nModel:                                   1\\nThread(s) per core:                      2\\nCore(s) per socket:                      2\\nSocket(s):                               1\\nStepping:                                1\\nBogoMIPS:                                4890.84\\nFlags:                                   fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ht syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm constant_tsc rep_good nopl tsc_reliable nonstop_tsc cpuid extd_apicid aperfmperf tsc_known_freq pni pclmulqdq ssse3 fma cx16 pcid sse4_1 sse4_2 movbe popcnt aes xsave avx f16c rdrand hypervisor lahf_lm cmp_legacy svm cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw topoext vmmcall fsgsbase bmi1 avx2 smep bmi2 erms invpcid rdseed adx smap clflushopt clwb sha_ni xsaveopt xsavec xgetbv1 xsaves user_shstk clzero xsaveerptr rdpru arat npt nrip_save tsc_scale vmcb_clean flushbyasid decodeassists pausefilter pfthreshold v_vmsave_vmload umip vaes vpclmulqdq rdpid fsrm\\nVirtualization:                          AMD-V\\nHypervisor vendor:                       Microsoft\\nVirtualization type:                     full\\nL1d cache:                               64 KiB (2 instances)\\nL1i cache:                               64 KiB (2 instances)\\nL2 cache:                                1 MiB (2 instances)\\nL3 cache:                                32 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Vulnerable: Safe RET, no microcode\\nVulnerability Spec store bypass:         Vulnerable\\nVulnerability Spectre v1:                Mitigation; usercopy/swapgs barriers and __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; Retpolines; STIBP disabled; RSB filling; PBRSB-eIBRS Not affected; BHI Not affected\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Vulnerable: No microcode\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24\", \"runner_image_version\": \"20260920.314.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "linux-x64/libpng-zng/graphic_rgb8 rgba8",
            "value": 502.07,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Linux-6.17.0-1022-azure-x86_64-with-glibc2.39\", \"machine\": \"x86_64\", \"logical_cpus\": 4, \"cpu\": \"Architecture:                            x86_64\\nCPU op-mode(s):                          32-bit, 64-bit\\nAddress sizes:                           48 bits physical, 48 bits virtual\\nByte Order:                              Little Endian\\nCPU(s):                                  4\\nOn-line CPU(s) list:                     0-3\\nVendor ID:                               AuthenticAMD\\nModel name:                              AMD EPYC 7763 64-Core Processor\\nCPU family:                              25\\nModel:                                   1\\nThread(s) per core:                      2\\nCore(s) per socket:                      2\\nSocket(s):                               1\\nStepping:                                1\\nBogoMIPS:                                4890.84\\nFlags:                                   fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ht syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm constant_tsc rep_good nopl tsc_reliable nonstop_tsc cpuid extd_apicid aperfmperf tsc_known_freq pni pclmulqdq ssse3 fma cx16 pcid sse4_1 sse4_2 movbe popcnt aes xsave avx f16c rdrand hypervisor lahf_lm cmp_legacy svm cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw topoext vmmcall fsgsbase bmi1 avx2 smep bmi2 erms invpcid rdseed adx smap clflushopt clwb sha_ni xsaveopt xsavec xgetbv1 xsaves user_shstk clzero xsaveerptr rdpru arat npt nrip_save tsc_scale vmcb_clean flushbyasid decodeassists pausefilter pfthreshold v_vmsave_vmload umip vaes vpclmulqdq rdpid fsrm\\nVirtualization:                          AMD-V\\nHypervisor vendor:                       Microsoft\\nVirtualization type:                     full\\nL1d cache:                               64 KiB (2 instances)\\nL1i cache:                               64 KiB (2 instances)\\nL2 cache:                                1 MiB (2 instances)\\nL3 cache:                                32 MiB (1 instance)\\nNUMA node(s):                            1\\nNUMA node0 CPU(s):                       0-3\\nVulnerability Gather data sampling:      Not affected\\nVulnerability Ghostwrite:                Not affected\\nVulnerability Indirect target selection: Not affected\\nVulnerability Itlb multihit:             Not affected\\nVulnerability L1tf:                      Not affected\\nVulnerability Mds:                       Not affected\\nVulnerability Meltdown:                  Not affected\\nVulnerability Mmio stale data:           Not affected\\nVulnerability Old microcode:             Not affected\\nVulnerability Reg file data sampling:    Not affected\\nVulnerability Retbleed:                  Not affected\\nVulnerability Spec rstack overflow:      Vulnerable: Safe RET, no microcode\\nVulnerability Spec store bypass:         Vulnerable\\nVulnerability Spectre v1:                Mitigation; usercopy/swapgs barriers and __user pointer sanitization\\nVulnerability Spectre v2:                Mitigation; Retpolines; STIBP disabled; RSB filling; PBRSB-eIBRS Not affected; BHI Not affected\\nVulnerability Srbds:                     Not affected\\nVulnerability Tsa:                       Vulnerable: No microcode\\nVulnerability Tsx async abort:           Not affected\\nVulnerability Vmscape:                   Not affected\", \"runner_image\": \"ubuntu24\", \"runner_image_version\": \"20260920.314.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "macos-arm64/memory-copy-vs-libpng/64MiB",
            "value": 16132.91,
            "unit": "MB/s",
            "extra": "Warm buffers; 128 MiB working set; median of five batches; payload bytes only; measured reference, not a theoretical limit\nRunner: {\"os\": \"macOS-14.8.9-arm64-arm-64bit\", \"machine\": \"arm64\", \"logical_cpus\": 3, \"cpu\": \"machdep.cpu.brand_string: Apple M1 (Virtual)\\nhw.ncpu: 3\\nhw.memsize: 7516192768\", \"runner_image\": \"macos14\", \"runner_image_version\": \"20260831.0302.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}"
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng/photo_rgb8 native",
            "value": 242.31,
            "unit": "MPix/s",
            "extra": "neon \nRunner: {\"os\": \"macOS-14.8.9-arm64-arm-64bit\", \"machine\": \"arm64\", \"logical_cpus\": 3, \"cpu\": \"machdep.cpu.brand_string: Apple M1 (Virtual)\\nhw.ncpu: 3\\nhw.memsize: 7516192768\", \"runner_image\": \"macos14\", \"runner_image_version\": \"20260831.0302.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "macos-arm64/libpng/photo_rgb8 native",
            "value": 113.2,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"macOS-14.8.9-arm64-arm-64bit\", \"machine\": \"arm64\", \"logical_cpus\": 3, \"cpu\": \"machdep.cpu.brand_string: Apple M1 (Virtual)\\nhw.ncpu: 3\\nhw.memsize: 7516192768\", \"runner_image\": \"macos14\", \"runner_image_version\": \"20260831.0302.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng/photo_rgb8 rgba8",
            "value": 175.23,
            "unit": "MPix/s",
            "extra": "neon \nRunner: {\"os\": \"macOS-14.8.9-arm64-arm-64bit\", \"machine\": \"arm64\", \"logical_cpus\": 3, \"cpu\": \"machdep.cpu.brand_string: Apple M1 (Virtual)\\nhw.ncpu: 3\\nhw.memsize: 7516192768\", \"runner_image\": \"macos14\", \"runner_image_version\": \"20260831.0302.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "macos-arm64/libpng/photo_rgb8 rgba8",
            "value": 89.46,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"macOS-14.8.9-arm64-arm-64bit\", \"machine\": \"arm64\", \"logical_cpus\": 3, \"cpu\": \"machdep.cpu.brand_string: Apple M1 (Virtual)\\nhw.ncpu: 3\\nhw.memsize: 7516192768\", \"runner_image\": \"macos14\", \"runner_image_version\": \"20260831.0302.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng/photo_rgba8 native",
            "value": 70.1,
            "unit": "MPix/s",
            "extra": "neon \nRunner: {\"os\": \"macOS-14.8.9-arm64-arm-64bit\", \"machine\": \"arm64\", \"logical_cpus\": 3, \"cpu\": \"machdep.cpu.brand_string: Apple M1 (Virtual)\\nhw.ncpu: 3\\nhw.memsize: 7516192768\", \"runner_image\": \"macos14\", \"runner_image_version\": \"20260831.0302.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "macos-arm64/libpng/photo_rgba8 native",
            "value": 46.85,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"macOS-14.8.9-arm64-arm-64bit\", \"machine\": \"arm64\", \"logical_cpus\": 3, \"cpu\": \"machdep.cpu.brand_string: Apple M1 (Virtual)\\nhw.ncpu: 3\\nhw.memsize: 7516192768\", \"runner_image\": \"macos14\", \"runner_image_version\": \"20260831.0302.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng/photo_rgba8 rgba8",
            "value": 61.75,
            "unit": "MPix/s",
            "extra": "neon \nRunner: {\"os\": \"macOS-14.8.9-arm64-arm-64bit\", \"machine\": \"arm64\", \"logical_cpus\": 3, \"cpu\": \"machdep.cpu.brand_string: Apple M1 (Virtual)\\nhw.ncpu: 3\\nhw.memsize: 7516192768\", \"runner_image\": \"macos14\", \"runner_image_version\": \"20260831.0302.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "macos-arm64/libpng/photo_rgba8 rgba8",
            "value": 44.42,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"macOS-14.8.9-arm64-arm-64bit\", \"machine\": \"arm64\", \"logical_cpus\": 3, \"cpu\": \"machdep.cpu.brand_string: Apple M1 (Virtual)\\nhw.ncpu: 3\\nhw.memsize: 7516192768\", \"runner_image\": \"macos14\", \"runner_image_version\": \"20260831.0302.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng/photo_gray8 native",
            "value": 341.03,
            "unit": "MPix/s",
            "extra": "neon \nRunner: {\"os\": \"macOS-14.8.9-arm64-arm-64bit\", \"machine\": \"arm64\", \"logical_cpus\": 3, \"cpu\": \"machdep.cpu.brand_string: Apple M1 (Virtual)\\nhw.ncpu: 3\\nhw.memsize: 7516192768\", \"runner_image\": \"macos14\", \"runner_image_version\": \"20260831.0302.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "macos-arm64/libpng/photo_gray8 native",
            "value": 180.65,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"macOS-14.8.9-arm64-arm-64bit\", \"machine\": \"arm64\", \"logical_cpus\": 3, \"cpu\": \"machdep.cpu.brand_string: Apple M1 (Virtual)\\nhw.ncpu: 3\\nhw.memsize: 7516192768\", \"runner_image\": \"macos14\", \"runner_image_version\": \"20260831.0302.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng/photo_gray8 rgba8",
            "value": 282.84,
            "unit": "MPix/s",
            "extra": "neon \nRunner: {\"os\": \"macOS-14.8.9-arm64-arm-64bit\", \"machine\": \"arm64\", \"logical_cpus\": 3, \"cpu\": \"machdep.cpu.brand_string: Apple M1 (Virtual)\\nhw.ncpu: 3\\nhw.memsize: 7516192768\", \"runner_image\": \"macos14\", \"runner_image_version\": \"20260831.0302.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "macos-arm64/libpng/photo_gray8 rgba8",
            "value": 135.88,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"macOS-14.8.9-arm64-arm-64bit\", \"machine\": \"arm64\", \"logical_cpus\": 3, \"cpu\": \"machdep.cpu.brand_string: Apple M1 (Virtual)\\nhw.ncpu: 3\\nhw.memsize: 7516192768\", \"runner_image\": \"macos14\", \"runner_image_version\": \"20260831.0302.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng/photo_gray16 native",
            "value": 276.73,
            "unit": "MPix/s",
            "extra": "neon \nRunner: {\"os\": \"macOS-14.8.9-arm64-arm-64bit\", \"machine\": \"arm64\", \"logical_cpus\": 3, \"cpu\": \"machdep.cpu.brand_string: Apple M1 (Virtual)\\nhw.ncpu: 3\\nhw.memsize: 7516192768\", \"runner_image\": \"macos14\", \"runner_image_version\": \"20260831.0302.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "macos-arm64/libpng/photo_gray16 native",
            "value": 133.54,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"macOS-14.8.9-arm64-arm-64bit\", \"machine\": \"arm64\", \"logical_cpus\": 3, \"cpu\": \"machdep.cpu.brand_string: Apple M1 (Virtual)\\nhw.ncpu: 3\\nhw.memsize: 7516192768\", \"runner_image\": \"macos14\", \"runner_image_version\": \"20260831.0302.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng/photo_gray16 rgba8",
            "value": 192.48,
            "unit": "MPix/s",
            "extra": "neon \nRunner: {\"os\": \"macOS-14.8.9-arm64-arm-64bit\", \"machine\": \"arm64\", \"logical_cpus\": 3, \"cpu\": \"machdep.cpu.brand_string: Apple M1 (Virtual)\\nhw.ncpu: 3\\nhw.memsize: 7516192768\", \"runner_image\": \"macos14\", \"runner_image_version\": \"20260831.0302.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "macos-arm64/libpng/photo_gray16 rgba8",
            "value": 83.06,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"macOS-14.8.9-arm64-arm-64bit\", \"machine\": \"arm64\", \"logical_cpus\": 3, \"cpu\": \"machdep.cpu.brand_string: Apple M1 (Virtual)\\nhw.ncpu: 3\\nhw.memsize: 7516192768\", \"runner_image\": \"macos14\", \"runner_image_version\": \"20260831.0302.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng/graphic_pal8 native",
            "value": 4334.09,
            "unit": "MPix/s",
            "extra": "neon \nRunner: {\"os\": \"macOS-14.8.9-arm64-arm-64bit\", \"machine\": \"arm64\", \"logical_cpus\": 3, \"cpu\": \"machdep.cpu.brand_string: Apple M1 (Virtual)\\nhw.ncpu: 3\\nhw.memsize: 7516192768\", \"runner_image\": \"macos14\", \"runner_image_version\": \"20260831.0302.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "macos-arm64/libpng/graphic_pal8 native",
            "value": 461.84,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"macOS-14.8.9-arm64-arm-64bit\", \"machine\": \"arm64\", \"logical_cpus\": 3, \"cpu\": \"machdep.cpu.brand_string: Apple M1 (Virtual)\\nhw.ncpu: 3\\nhw.memsize: 7516192768\", \"runner_image\": \"macos14\", \"runner_image_version\": \"20260831.0302.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng/graphic_pal8 rgba8",
            "value": 441.93,
            "unit": "MPix/s",
            "extra": "neon \nRunner: {\"os\": \"macOS-14.8.9-arm64-arm-64bit\", \"machine\": \"arm64\", \"logical_cpus\": 3, \"cpu\": \"machdep.cpu.brand_string: Apple M1 (Virtual)\\nhw.ncpu: 3\\nhw.memsize: 7516192768\", \"runner_image\": \"macos14\", \"runner_image_version\": \"20260831.0302.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "macos-arm64/libpng/graphic_pal8 rgba8",
            "value": 235.78,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"macOS-14.8.9-arm64-arm-64bit\", \"machine\": \"arm64\", \"logical_cpus\": 3, \"cpu\": \"machdep.cpu.brand_string: Apple M1 (Virtual)\\nhw.ncpu: 3\\nhw.memsize: 7516192768\", \"runner_image\": \"macos14\", \"runner_image_version\": \"20260831.0302.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng/graphic_rgb8 native",
            "value": 716.32,
            "unit": "MPix/s",
            "extra": "neon \nRunner: {\"os\": \"macOS-14.8.9-arm64-arm-64bit\", \"machine\": \"arm64\", \"logical_cpus\": 3, \"cpu\": \"machdep.cpu.brand_string: Apple M1 (Virtual)\\nhw.ncpu: 3\\nhw.memsize: 7516192768\", \"runner_image\": \"macos14\", \"runner_image_version\": \"20260831.0302.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "macos-arm64/libpng/graphic_rgb8 native",
            "value": 100.48,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"macOS-14.8.9-arm64-arm-64bit\", \"machine\": \"arm64\", \"logical_cpus\": 3, \"cpu\": \"machdep.cpu.brand_string: Apple M1 (Virtual)\\nhw.ncpu: 3\\nhw.memsize: 7516192768\", \"runner_image\": \"macos14\", \"runner_image_version\": \"20260831.0302.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng/graphic_rgb8 rgba8",
            "value": 330.94,
            "unit": "MPix/s",
            "extra": "neon \nRunner: {\"os\": \"macOS-14.8.9-arm64-arm-64bit\", \"machine\": \"arm64\", \"logical_cpus\": 3, \"cpu\": \"machdep.cpu.brand_string: Apple M1 (Virtual)\\nhw.ncpu: 3\\nhw.memsize: 7516192768\", \"runner_image\": \"macos14\", \"runner_image_version\": \"20260831.0302.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "macos-arm64/libpng/graphic_rgb8 rgba8",
            "value": 97.2,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"macOS-14.8.9-arm64-arm-64bit\", \"machine\": \"arm64\", \"logical_cpus\": 3, \"cpu\": \"machdep.cpu.brand_string: Apple M1 (Virtual)\\nhw.ncpu: 3\\nhw.memsize: 7516192768\", \"runner_image\": \"macos14\", \"runner_image_version\": \"20260831.0302.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "macos-arm64/memory-copy-vs-libpng-zng/64MiB",
            "value": 16166.43,
            "unit": "MB/s",
            "extra": "Warm buffers; 128 MiB working set; median of five batches; payload bytes only; measured reference, not a theoretical limit\nRunner: {\"os\": \"macOS-14.8.9-arm64-arm-64bit\", \"machine\": \"arm64\", \"logical_cpus\": 3, \"cpu\": \"machdep.cpu.brand_string: Apple M1 (Virtual)\\nhw.ncpu: 3\\nhw.memsize: 7516192768\", \"runner_image\": \"macos14\", \"runner_image_version\": \"20260831.0302.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}"
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng-zng/photo_rgb8 native",
            "value": 204.54,
            "unit": "MPix/s",
            "extra": "neon \nRunner: {\"os\": \"macOS-14.8.9-arm64-arm-64bit\", \"machine\": \"arm64\", \"logical_cpus\": 3, \"cpu\": \"machdep.cpu.brand_string: Apple M1 (Virtual)\\nhw.ncpu: 3\\nhw.memsize: 7516192768\", \"runner_image\": \"macos14\", \"runner_image_version\": \"20260831.0302.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "macos-arm64/libpng-zng/photo_rgb8 native",
            "value": 126.04,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"macOS-14.8.9-arm64-arm-64bit\", \"machine\": \"arm64\", \"logical_cpus\": 3, \"cpu\": \"machdep.cpu.brand_string: Apple M1 (Virtual)\\nhw.ncpu: 3\\nhw.memsize: 7516192768\", \"runner_image\": \"macos14\", \"runner_image_version\": \"20260831.0302.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng-zng/photo_rgb8 rgba8",
            "value": 163.81,
            "unit": "MPix/s",
            "extra": "neon \nRunner: {\"os\": \"macOS-14.8.9-arm64-arm-64bit\", \"machine\": \"arm64\", \"logical_cpus\": 3, \"cpu\": \"machdep.cpu.brand_string: Apple M1 (Virtual)\\nhw.ncpu: 3\\nhw.memsize: 7516192768\", \"runner_image\": \"macos14\", \"runner_image_version\": \"20260831.0302.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "macos-arm64/libpng-zng/photo_rgb8 rgba8",
            "value": 132.54,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"macOS-14.8.9-arm64-arm-64bit\", \"machine\": \"arm64\", \"logical_cpus\": 3, \"cpu\": \"machdep.cpu.brand_string: Apple M1 (Virtual)\\nhw.ncpu: 3\\nhw.memsize: 7516192768\", \"runner_image\": \"macos14\", \"runner_image_version\": \"20260831.0302.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng-zng/photo_rgba8 native",
            "value": 65.8,
            "unit": "MPix/s",
            "extra": "neon \nRunner: {\"os\": \"macOS-14.8.9-arm64-arm-64bit\", \"machine\": \"arm64\", \"logical_cpus\": 3, \"cpu\": \"machdep.cpu.brand_string: Apple M1 (Virtual)\\nhw.ncpu: 3\\nhw.memsize: 7516192768\", \"runner_image\": \"macos14\", \"runner_image_version\": \"20260831.0302.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "macos-arm64/libpng-zng/photo_rgba8 native",
            "value": 57.42,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"macOS-14.8.9-arm64-arm-64bit\", \"machine\": \"arm64\", \"logical_cpus\": 3, \"cpu\": \"machdep.cpu.brand_string: Apple M1 (Virtual)\\nhw.ncpu: 3\\nhw.memsize: 7516192768\", \"runner_image\": \"macos14\", \"runner_image_version\": \"20260831.0302.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng-zng/photo_rgba8 rgba8",
            "value": 62.77,
            "unit": "MPix/s",
            "extra": "neon \nRunner: {\"os\": \"macOS-14.8.9-arm64-arm-64bit\", \"machine\": \"arm64\", \"logical_cpus\": 3, \"cpu\": \"machdep.cpu.brand_string: Apple M1 (Virtual)\\nhw.ncpu: 3\\nhw.memsize: 7516192768\", \"runner_image\": \"macos14\", \"runner_image_version\": \"20260831.0302.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "macos-arm64/libpng-zng/photo_rgba8 rgba8",
            "value": 55.81,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"macOS-14.8.9-arm64-arm-64bit\", \"machine\": \"arm64\", \"logical_cpus\": 3, \"cpu\": \"machdep.cpu.brand_string: Apple M1 (Virtual)\\nhw.ncpu: 3\\nhw.memsize: 7516192768\", \"runner_image\": \"macos14\", \"runner_image_version\": \"20260831.0302.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng-zng/photo_gray8 native",
            "value": 268.05,
            "unit": "MPix/s",
            "extra": "neon \nRunner: {\"os\": \"macOS-14.8.9-arm64-arm-64bit\", \"machine\": \"arm64\", \"logical_cpus\": 3, \"cpu\": \"machdep.cpu.brand_string: Apple M1 (Virtual)\\nhw.ncpu: 3\\nhw.memsize: 7516192768\", \"runner_image\": \"macos14\", \"runner_image_version\": \"20260831.0302.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "macos-arm64/libpng-zng/photo_gray8 native",
            "value": 184.56,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"macOS-14.8.9-arm64-arm-64bit\", \"machine\": \"arm64\", \"logical_cpus\": 3, \"cpu\": \"machdep.cpu.brand_string: Apple M1 (Virtual)\\nhw.ncpu: 3\\nhw.memsize: 7516192768\", \"runner_image\": \"macos14\", \"runner_image_version\": \"20260831.0302.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng-zng/photo_gray8 rgba8",
            "value": 277.38,
            "unit": "MPix/s",
            "extra": "neon \nRunner: {\"os\": \"macOS-14.8.9-arm64-arm-64bit\", \"machine\": \"arm64\", \"logical_cpus\": 3, \"cpu\": \"machdep.cpu.brand_string: Apple M1 (Virtual)\\nhw.ncpu: 3\\nhw.memsize: 7516192768\", \"runner_image\": \"macos14\", \"runner_image_version\": \"20260831.0302.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "macos-arm64/libpng-zng/photo_gray8 rgba8",
            "value": 152.71,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"macOS-14.8.9-arm64-arm-64bit\", \"machine\": \"arm64\", \"logical_cpus\": 3, \"cpu\": \"machdep.cpu.brand_string: Apple M1 (Virtual)\\nhw.ncpu: 3\\nhw.memsize: 7516192768\", \"runner_image\": \"macos14\", \"runner_image_version\": \"20260831.0302.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng-zng/photo_gray16 native",
            "value": 283.07,
            "unit": "MPix/s",
            "extra": "neon \nRunner: {\"os\": \"macOS-14.8.9-arm64-arm-64bit\", \"machine\": \"arm64\", \"logical_cpus\": 3, \"cpu\": \"machdep.cpu.brand_string: Apple M1 (Virtual)\\nhw.ncpu: 3\\nhw.memsize: 7516192768\", \"runner_image\": \"macos14\", \"runner_image_version\": \"20260831.0302.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "macos-arm64/libpng-zng/photo_gray16 native",
            "value": 169.45,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"macOS-14.8.9-arm64-arm-64bit\", \"machine\": \"arm64\", \"logical_cpus\": 3, \"cpu\": \"machdep.cpu.brand_string: Apple M1 (Virtual)\\nhw.ncpu: 3\\nhw.memsize: 7516192768\", \"runner_image\": \"macos14\", \"runner_image_version\": \"20260831.0302.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng-zng/photo_gray16 rgba8",
            "value": 219.86,
            "unit": "MPix/s",
            "extra": "neon \nRunner: {\"os\": \"macOS-14.8.9-arm64-arm-64bit\", \"machine\": \"arm64\", \"logical_cpus\": 3, \"cpu\": \"machdep.cpu.brand_string: Apple M1 (Virtual)\\nhw.ncpu: 3\\nhw.memsize: 7516192768\", \"runner_image\": \"macos14\", \"runner_image_version\": \"20260831.0302.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "macos-arm64/libpng-zng/photo_gray16 rgba8",
            "value": 105.78,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"macOS-14.8.9-arm64-arm-64bit\", \"machine\": \"arm64\", \"logical_cpus\": 3, \"cpu\": \"machdep.cpu.brand_string: Apple M1 (Virtual)\\nhw.ncpu: 3\\nhw.memsize: 7516192768\", \"runner_image\": \"macos14\", \"runner_image_version\": \"20260831.0302.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng-zng/graphic_pal8 native",
            "value": 4094.91,
            "unit": "MPix/s",
            "extra": "neon \nRunner: {\"os\": \"macOS-14.8.9-arm64-arm-64bit\", \"machine\": \"arm64\", \"logical_cpus\": 3, \"cpu\": \"machdep.cpu.brand_string: Apple M1 (Virtual)\\nhw.ncpu: 3\\nhw.memsize: 7516192768\", \"runner_image\": \"macos14\", \"runner_image_version\": \"20260831.0302.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "macos-arm64/libpng-zng/graphic_pal8 native",
            "value": 1558.6,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"macOS-14.8.9-arm64-arm-64bit\", \"machine\": \"arm64\", \"logical_cpus\": 3, \"cpu\": \"machdep.cpu.brand_string: Apple M1 (Virtual)\\nhw.ncpu: 3\\nhw.memsize: 7516192768\", \"runner_image\": \"macos14\", \"runner_image_version\": \"20260831.0302.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng-zng/graphic_pal8 rgba8",
            "value": 605.32,
            "unit": "MPix/s",
            "extra": "neon \nRunner: {\"os\": \"macOS-14.8.9-arm64-arm-64bit\", \"machine\": \"arm64\", \"logical_cpus\": 3, \"cpu\": \"machdep.cpu.brand_string: Apple M1 (Virtual)\\nhw.ncpu: 3\\nhw.memsize: 7516192768\", \"runner_image\": \"macos14\", \"runner_image_version\": \"20260831.0302.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "macos-arm64/libpng-zng/graphic_pal8 rgba8",
            "value": 533.17,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"macOS-14.8.9-arm64-arm-64bit\", \"machine\": \"arm64\", \"logical_cpus\": 3, \"cpu\": \"machdep.cpu.brand_string: Apple M1 (Virtual)\\nhw.ncpu: 3\\nhw.memsize: 7516192768\", \"runner_image\": \"macos14\", \"runner_image_version\": \"20260831.0302.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng-zng/graphic_rgb8 native",
            "value": 742.64,
            "unit": "MPix/s",
            "extra": "neon \nRunner: {\"os\": \"macOS-14.8.9-arm64-arm-64bit\", \"machine\": \"arm64\", \"logical_cpus\": 3, \"cpu\": \"machdep.cpu.brand_string: Apple M1 (Virtual)\\nhw.ncpu: 3\\nhw.memsize: 7516192768\", \"runner_image\": \"macos14\", \"runner_image_version\": \"20260831.0302.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "macos-arm64/libpng-zng/graphic_rgb8 native",
            "value": 581.31,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"macOS-14.8.9-arm64-arm-64bit\", \"machine\": \"arm64\", \"logical_cpus\": 3, \"cpu\": \"machdep.cpu.brand_string: Apple M1 (Virtual)\\nhw.ncpu: 3\\nhw.memsize: 7516192768\", \"runner_image\": \"macos14\", \"runner_image_version\": \"20260831.0302.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "macos-arm64/ptpng-vs-libpng-zng/graphic_rgb8 rgba8",
            "value": 318.86,
            "unit": "MPix/s",
            "extra": "neon \nRunner: {\"os\": \"macOS-14.8.9-arm64-arm-64bit\", \"machine\": \"arm64\", \"logical_cpus\": 3, \"cpu\": \"machdep.cpu.brand_string: Apple M1 (Virtual)\\nhw.ncpu: 3\\nhw.memsize: 7516192768\", \"runner_image\": \"macos14\", \"runner_image_version\": \"20260831.0302.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "macos-arm64/libpng-zng/graphic_rgb8 rgba8",
            "value": 320.88,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"macOS-14.8.9-arm64-arm-64bit\", \"machine\": \"arm64\", \"logical_cpus\": 3, \"cpu\": \"machdep.cpu.brand_string: Apple M1 (Virtual)\\nhw.ncpu: 3\\nhw.memsize: 7516192768\", \"runner_image\": \"macos14\", \"runner_image_version\": \"20260831.0302.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-arm64/memory-copy-vs-libpng/64MiB",
            "value": 29294.79,
            "unit": "MB/s",
            "extra": "Warm buffers; 128 MiB working set; median of five batches; payload bytes only; measured reference, not a theoretical limit\nRunner: {\"os\": \"Windows-11-10.0.26200-SP0\", \"machine\": \"ARM64\", \"logical_cpus\": 4, \"cpu\": \"Cobalt 100\", \"runner_image\": \"win11-vs2026-arm64\", \"runner_image_version\": \"20260920.164.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}"
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng/photo_rgb8 native",
            "value": 251.24,
            "unit": "MPix/s",
            "extra": "neon \nRunner: {\"os\": \"Windows-11-10.0.26200-SP0\", \"machine\": \"ARM64\", \"logical_cpus\": 4, \"cpu\": \"Cobalt 100\", \"runner_image\": \"win11-vs2026-arm64\", \"runner_image_version\": \"20260920.164.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-arm64/libpng/photo_rgb8 native",
            "value": 146.63,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Windows-11-10.0.26200-SP0\", \"machine\": \"ARM64\", \"logical_cpus\": 4, \"cpu\": \"Cobalt 100\", \"runner_image\": \"win11-vs2026-arm64\", \"runner_image_version\": \"20260920.164.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng/photo_rgb8 rgba8",
            "value": 189.14,
            "unit": "MPix/s",
            "extra": "neon \nRunner: {\"os\": \"Windows-11-10.0.26200-SP0\", \"machine\": \"ARM64\", \"logical_cpus\": 4, \"cpu\": \"Cobalt 100\", \"runner_image\": \"win11-vs2026-arm64\", \"runner_image_version\": \"20260920.164.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-arm64/libpng/photo_rgb8 rgba8",
            "value": 129.76,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Windows-11-10.0.26200-SP0\", \"machine\": \"ARM64\", \"logical_cpus\": 4, \"cpu\": \"Cobalt 100\", \"runner_image\": \"win11-vs2026-arm64\", \"runner_image_version\": \"20260920.164.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng/photo_rgba8 native",
            "value": 90.95,
            "unit": "MPix/s",
            "extra": "neon \nRunner: {\"os\": \"Windows-11-10.0.26200-SP0\", \"machine\": \"ARM64\", \"logical_cpus\": 4, \"cpu\": \"Cobalt 100\", \"runner_image\": \"win11-vs2026-arm64\", \"runner_image_version\": \"20260920.164.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-arm64/libpng/photo_rgba8 native",
            "value": 65.41,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Windows-11-10.0.26200-SP0\", \"machine\": \"ARM64\", \"logical_cpus\": 4, \"cpu\": \"Cobalt 100\", \"runner_image\": \"win11-vs2026-arm64\", \"runner_image_version\": \"20260920.164.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng/photo_rgba8 rgba8",
            "value": 86.45,
            "unit": "MPix/s",
            "extra": "neon \nRunner: {\"os\": \"Windows-11-10.0.26200-SP0\", \"machine\": \"ARM64\", \"logical_cpus\": 4, \"cpu\": \"Cobalt 100\", \"runner_image\": \"win11-vs2026-arm64\", \"runner_image_version\": \"20260920.164.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-arm64/libpng/photo_rgba8 rgba8",
            "value": 65.54,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Windows-11-10.0.26200-SP0\", \"machine\": \"ARM64\", \"logical_cpus\": 4, \"cpu\": \"Cobalt 100\", \"runner_image\": \"win11-vs2026-arm64\", \"runner_image_version\": \"20260920.164.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng/photo_gray8 native",
            "value": 441.82,
            "unit": "MPix/s",
            "extra": "neon \nRunner: {\"os\": \"Windows-11-10.0.26200-SP0\", \"machine\": \"ARM64\", \"logical_cpus\": 4, \"cpu\": \"Cobalt 100\", \"runner_image\": \"win11-vs2026-arm64\", \"runner_image_version\": \"20260920.164.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-arm64/libpng/photo_gray8 native",
            "value": 255.48,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Windows-11-10.0.26200-SP0\", \"machine\": \"ARM64\", \"logical_cpus\": 4, \"cpu\": \"Cobalt 100\", \"runner_image\": \"win11-vs2026-arm64\", \"runner_image_version\": \"20260920.164.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng/photo_gray8 rgba8",
            "value": 351.77,
            "unit": "MPix/s",
            "extra": "neon \nRunner: {\"os\": \"Windows-11-10.0.26200-SP0\", \"machine\": \"ARM64\", \"logical_cpus\": 4, \"cpu\": \"Cobalt 100\", \"runner_image\": \"win11-vs2026-arm64\", \"runner_image_version\": \"20260920.164.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-arm64/libpng/photo_gray8 rgba8",
            "value": 179.21,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Windows-11-10.0.26200-SP0\", \"machine\": \"ARM64\", \"logical_cpus\": 4, \"cpu\": \"Cobalt 100\", \"runner_image\": \"win11-vs2026-arm64\", \"runner_image_version\": \"20260920.164.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng/photo_gray16 native",
            "value": 364.54,
            "unit": "MPix/s",
            "extra": "neon \nRunner: {\"os\": \"Windows-11-10.0.26200-SP0\", \"machine\": \"ARM64\", \"logical_cpus\": 4, \"cpu\": \"Cobalt 100\", \"runner_image\": \"win11-vs2026-arm64\", \"runner_image_version\": \"20260920.164.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-arm64/libpng/photo_gray16 native",
            "value": 199.06,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Windows-11-10.0.26200-SP0\", \"machine\": \"ARM64\", \"logical_cpus\": 4, \"cpu\": \"Cobalt 100\", \"runner_image\": \"win11-vs2026-arm64\", \"runner_image_version\": \"20260920.164.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng/photo_gray16 rgba8",
            "value": 253.64,
            "unit": "MPix/s",
            "extra": "neon \nRunner: {\"os\": \"Windows-11-10.0.26200-SP0\", \"machine\": \"ARM64\", \"logical_cpus\": 4, \"cpu\": \"Cobalt 100\", \"runner_image\": \"win11-vs2026-arm64\", \"runner_image_version\": \"20260920.164.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-arm64/libpng/photo_gray16 rgba8",
            "value": 123.04,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Windows-11-10.0.26200-SP0\", \"machine\": \"ARM64\", \"logical_cpus\": 4, \"cpu\": \"Cobalt 100\", \"runner_image\": \"win11-vs2026-arm64\", \"runner_image_version\": \"20260920.164.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng/graphic_pal8 native",
            "value": 3828.99,
            "unit": "MPix/s",
            "extra": "neon \nRunner: {\"os\": \"Windows-11-10.0.26200-SP0\", \"machine\": \"ARM64\", \"logical_cpus\": 4, \"cpu\": \"Cobalt 100\", \"runner_image\": \"win11-vs2026-arm64\", \"runner_image_version\": \"20260920.164.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-arm64/libpng/graphic_pal8 native",
            "value": 442.61,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Windows-11-10.0.26200-SP0\", \"machine\": \"ARM64\", \"logical_cpus\": 4, \"cpu\": \"Cobalt 100\", \"runner_image\": \"win11-vs2026-arm64\", \"runner_image_version\": \"20260920.164.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng/graphic_pal8 rgba8",
            "value": 558.49,
            "unit": "MPix/s",
            "extra": "neon \nRunner: {\"os\": \"Windows-11-10.0.26200-SP0\", \"machine\": \"ARM64\", \"logical_cpus\": 4, \"cpu\": \"Cobalt 100\", \"runner_image\": \"win11-vs2026-arm64\", \"runner_image_version\": \"20260920.164.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-arm64/libpng/graphic_pal8 rgba8",
            "value": 297,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Windows-11-10.0.26200-SP0\", \"machine\": \"ARM64\", \"logical_cpus\": 4, \"cpu\": \"Cobalt 100\", \"runner_image\": \"win11-vs2026-arm64\", \"runner_image_version\": \"20260920.164.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng/graphic_rgb8 native",
            "value": 793.82,
            "unit": "MPix/s",
            "extra": "neon \nRunner: {\"os\": \"Windows-11-10.0.26200-SP0\", \"machine\": \"ARM64\", \"logical_cpus\": 4, \"cpu\": \"Cobalt 100\", \"runner_image\": \"win11-vs2026-arm64\", \"runner_image_version\": \"20260920.164.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-arm64/libpng/graphic_rgb8 native",
            "value": 154.74,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Windows-11-10.0.26200-SP0\", \"machine\": \"ARM64\", \"logical_cpus\": 4, \"cpu\": \"Cobalt 100\", \"runner_image\": \"win11-vs2026-arm64\", \"runner_image_version\": \"20260920.164.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng/graphic_rgb8 rgba8",
            "value": 395.35,
            "unit": "MPix/s",
            "extra": "neon \nRunner: {\"os\": \"Windows-11-10.0.26200-SP0\", \"machine\": \"ARM64\", \"logical_cpus\": 4, \"cpu\": \"Cobalt 100\", \"runner_image\": \"win11-vs2026-arm64\", \"runner_image_version\": \"20260920.164.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-arm64/libpng/graphic_rgb8 rgba8",
            "value": 136.89,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Windows-11-10.0.26200-SP0\", \"machine\": \"ARM64\", \"logical_cpus\": 4, \"cpu\": \"Cobalt 100\", \"runner_image\": \"win11-vs2026-arm64\", \"runner_image_version\": \"20260920.164.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-arm64/memory-copy-vs-libpng-zng/64MiB",
            "value": 26937.42,
            "unit": "MB/s",
            "extra": "Warm buffers; 128 MiB working set; median of five batches; payload bytes only; measured reference, not a theoretical limit\nRunner: {\"os\": \"Windows-11-10.0.26200-SP0\", \"machine\": \"ARM64\", \"logical_cpus\": 4, \"cpu\": \"Cobalt 100\", \"runner_image\": \"win11-vs2026-arm64\", \"runner_image_version\": \"20260920.164.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}"
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng-zng/photo_rgb8 native",
            "value": 253,
            "unit": "MPix/s",
            "extra": "neon \nRunner: {\"os\": \"Windows-11-10.0.26200-SP0\", \"machine\": \"ARM64\", \"logical_cpus\": 4, \"cpu\": \"Cobalt 100\", \"runner_image\": \"win11-vs2026-arm64\", \"runner_image_version\": \"20260920.164.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-arm64/libpng-zng/photo_rgb8 native",
            "value": 211.17,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Windows-11-10.0.26200-SP0\", \"machine\": \"ARM64\", \"logical_cpus\": 4, \"cpu\": \"Cobalt 100\", \"runner_image\": \"win11-vs2026-arm64\", \"runner_image_version\": \"20260920.164.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng-zng/photo_rgb8 rgba8",
            "value": 188.36,
            "unit": "MPix/s",
            "extra": "neon \nRunner: {\"os\": \"Windows-11-10.0.26200-SP0\", \"machine\": \"ARM64\", \"logical_cpus\": 4, \"cpu\": \"Cobalt 100\", \"runner_image\": \"win11-vs2026-arm64\", \"runner_image_version\": \"20260920.164.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-arm64/libpng-zng/photo_rgb8 rgba8",
            "value": 179.21,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Windows-11-10.0.26200-SP0\", \"machine\": \"ARM64\", \"logical_cpus\": 4, \"cpu\": \"Cobalt 100\", \"runner_image\": \"win11-vs2026-arm64\", \"runner_image_version\": \"20260920.164.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng-zng/photo_rgba8 native",
            "value": 91.49,
            "unit": "MPix/s",
            "extra": "neon \nRunner: {\"os\": \"Windows-11-10.0.26200-SP0\", \"machine\": \"ARM64\", \"logical_cpus\": 4, \"cpu\": \"Cobalt 100\", \"runner_image\": \"win11-vs2026-arm64\", \"runner_image_version\": \"20260920.164.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-arm64/libpng-zng/photo_rgba8 native",
            "value": 81.94,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Windows-11-10.0.26200-SP0\", \"machine\": \"ARM64\", \"logical_cpus\": 4, \"cpu\": \"Cobalt 100\", \"runner_image\": \"win11-vs2026-arm64\", \"runner_image_version\": \"20260920.164.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng-zng/photo_rgba8 rgba8",
            "value": 86.56,
            "unit": "MPix/s",
            "extra": "neon \nRunner: {\"os\": \"Windows-11-10.0.26200-SP0\", \"machine\": \"ARM64\", \"logical_cpus\": 4, \"cpu\": \"Cobalt 100\", \"runner_image\": \"win11-vs2026-arm64\", \"runner_image_version\": \"20260920.164.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-arm64/libpng-zng/photo_rgba8 rgba8",
            "value": 81.88,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Windows-11-10.0.26200-SP0\", \"machine\": \"ARM64\", \"logical_cpus\": 4, \"cpu\": \"Cobalt 100\", \"runner_image\": \"win11-vs2026-arm64\", \"runner_image_version\": \"20260920.164.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng-zng/photo_gray8 native",
            "value": 445.62,
            "unit": "MPix/s",
            "extra": "neon \nRunner: {\"os\": \"Windows-11-10.0.26200-SP0\", \"machine\": \"ARM64\", \"logical_cpus\": 4, \"cpu\": \"Cobalt 100\", \"runner_image\": \"win11-vs2026-arm64\", \"runner_image_version\": \"20260920.164.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-arm64/libpng-zng/photo_gray8 native",
            "value": 276.5,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Windows-11-10.0.26200-SP0\", \"machine\": \"ARM64\", \"logical_cpus\": 4, \"cpu\": \"Cobalt 100\", \"runner_image\": \"win11-vs2026-arm64\", \"runner_image_version\": \"20260920.164.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng-zng/photo_gray8 rgba8",
            "value": 353.36,
            "unit": "MPix/s",
            "extra": "neon \nRunner: {\"os\": \"Windows-11-10.0.26200-SP0\", \"machine\": \"ARM64\", \"logical_cpus\": 4, \"cpu\": \"Cobalt 100\", \"runner_image\": \"win11-vs2026-arm64\", \"runner_image_version\": \"20260920.164.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-arm64/libpng-zng/photo_gray8 rgba8",
            "value": 188.71,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Windows-11-10.0.26200-SP0\", \"machine\": \"ARM64\", \"logical_cpus\": 4, \"cpu\": \"Cobalt 100\", \"runner_image\": \"win11-vs2026-arm64\", \"runner_image_version\": \"20260920.164.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng-zng/photo_gray16 native",
            "value": 368.96,
            "unit": "MPix/s",
            "extra": "neon \nRunner: {\"os\": \"Windows-11-10.0.26200-SP0\", \"machine\": \"ARM64\", \"logical_cpus\": 4, \"cpu\": \"Cobalt 100\", \"runner_image\": \"win11-vs2026-arm64\", \"runner_image_version\": \"20260920.164.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-arm64/libpng-zng/photo_gray16 native",
            "value": 241.27,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Windows-11-10.0.26200-SP0\", \"machine\": \"ARM64\", \"logical_cpus\": 4, \"cpu\": \"Cobalt 100\", \"runner_image\": \"win11-vs2026-arm64\", \"runner_image_version\": \"20260920.164.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng-zng/photo_gray16 rgba8",
            "value": 250.88,
            "unit": "MPix/s",
            "extra": "neon \nRunner: {\"os\": \"Windows-11-10.0.26200-SP0\", \"machine\": \"ARM64\", \"logical_cpus\": 4, \"cpu\": \"Cobalt 100\", \"runner_image\": \"win11-vs2026-arm64\", \"runner_image_version\": \"20260920.164.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-arm64/libpng-zng/photo_gray16 rgba8",
            "value": 137.41,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Windows-11-10.0.26200-SP0\", \"machine\": \"ARM64\", \"logical_cpus\": 4, \"cpu\": \"Cobalt 100\", \"runner_image\": \"win11-vs2026-arm64\", \"runner_image_version\": \"20260920.164.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng-zng/graphic_pal8 native",
            "value": 3746.07,
            "unit": "MPix/s",
            "extra": "neon \nRunner: {\"os\": \"Windows-11-10.0.26200-SP0\", \"machine\": \"ARM64\", \"logical_cpus\": 4, \"cpu\": \"Cobalt 100\", \"runner_image\": \"win11-vs2026-arm64\", \"runner_image_version\": \"20260920.164.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-arm64/libpng-zng/graphic_pal8 native",
            "value": 1171.81,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Windows-11-10.0.26200-SP0\", \"machine\": \"ARM64\", \"logical_cpus\": 4, \"cpu\": \"Cobalt 100\", \"runner_image\": \"win11-vs2026-arm64\", \"runner_image_version\": \"20260920.164.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng-zng/graphic_pal8 rgba8",
            "value": 551.18,
            "unit": "MPix/s",
            "extra": "neon \nRunner: {\"os\": \"Windows-11-10.0.26200-SP0\", \"machine\": \"ARM64\", \"logical_cpus\": 4, \"cpu\": \"Cobalt 100\", \"runner_image\": \"win11-vs2026-arm64\", \"runner_image_version\": \"20260920.164.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-arm64/libpng-zng/graphic_pal8 rgba8",
            "value": 509.84,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Windows-11-10.0.26200-SP0\", \"machine\": \"ARM64\", \"logical_cpus\": 4, \"cpu\": \"Cobalt 100\", \"runner_image\": \"win11-vs2026-arm64\", \"runner_image_version\": \"20260920.164.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng-zng/graphic_rgb8 native",
            "value": 786.73,
            "unit": "MPix/s",
            "extra": "neon \nRunner: {\"os\": \"Windows-11-10.0.26200-SP0\", \"machine\": \"ARM64\", \"logical_cpus\": 4, \"cpu\": \"Cobalt 100\", \"runner_image\": \"win11-vs2026-arm64\", \"runner_image_version\": \"20260920.164.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-arm64/libpng-zng/graphic_rgb8 native",
            "value": 712.65,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Windows-11-10.0.26200-SP0\", \"machine\": \"ARM64\", \"logical_cpus\": 4, \"cpu\": \"Cobalt 100\", \"runner_image\": \"win11-vs2026-arm64\", \"runner_image_version\": \"20260920.164.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-arm64/ptpng-vs-libpng-zng/graphic_rgb8 rgba8",
            "value": 393.7,
            "unit": "MPix/s",
            "extra": "neon \nRunner: {\"os\": \"Windows-11-10.0.26200-SP0\", \"machine\": \"ARM64\", \"logical_cpus\": 4, \"cpu\": \"Cobalt 100\", \"runner_image\": \"win11-vs2026-arm64\", \"runner_image_version\": \"20260920.164.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-arm64/libpng-zng/graphic_rgb8 rgba8",
            "value": 447.81,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Windows-11-10.0.26200-SP0\", \"machine\": \"ARM64\", \"logical_cpus\": 4, \"cpu\": \"Cobalt 100\", \"runner_image\": \"win11-vs2026-arm64\", \"runner_image_version\": \"20260920.164.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-x64/memory-copy-vs-libpng/64MiB",
            "value": 28779.55,
            "unit": "MB/s",
            "extra": "Warm buffers; 128 MiB working set; median of five batches; payload bytes only; measured reference, not a theoretical limit\nRunner: {\"os\": \"Windows-2025Server-10.0.26100-SP0\", \"machine\": \"AMD64\", \"logical_cpus\": 4, \"cpu\": \"AMD EPYC 9V45 96-Core Processor\", \"runner_image\": \"win25-vs2026\", \"runner_image_version\": \"20260907.229.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}"
          },
          {
            "name": "windows-x64/ptpng-vs-libpng/photo_rgb8 native",
            "value": 298.74,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 \nRunner: {\"os\": \"Windows-2025Server-10.0.26100-SP0\", \"machine\": \"AMD64\", \"logical_cpus\": 4, \"cpu\": \"AMD EPYC 9V45 96-Core Processor\", \"runner_image\": \"win25-vs2026\", \"runner_image_version\": \"20260907.229.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-x64/libpng/photo_rgb8 native",
            "value": 157.11,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Windows-2025Server-10.0.26100-SP0\", \"machine\": \"AMD64\", \"logical_cpus\": 4, \"cpu\": \"AMD EPYC 9V45 96-Core Processor\", \"runner_image\": \"win25-vs2026\", \"runner_image_version\": \"20260907.229.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-x64/ptpng-vs-libpng/photo_rgb8 rgba8",
            "value": 250.6,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 \nRunner: {\"os\": \"Windows-2025Server-10.0.26100-SP0\", \"machine\": \"AMD64\", \"logical_cpus\": 4, \"cpu\": \"AMD EPYC 9V45 96-Core Processor\", \"runner_image\": \"win25-vs2026\", \"runner_image_version\": \"20260907.229.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-x64/libpng/photo_rgb8 rgba8",
            "value": 144.61,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Windows-2025Server-10.0.26100-SP0\", \"machine\": \"AMD64\", \"logical_cpus\": 4, \"cpu\": \"AMD EPYC 9V45 96-Core Processor\", \"runner_image\": \"win25-vs2026\", \"runner_image_version\": \"20260907.229.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-x64/ptpng-vs-libpng/photo_rgba8 native",
            "value": 105.85,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 \nRunner: {\"os\": \"Windows-2025Server-10.0.26100-SP0\", \"machine\": \"AMD64\", \"logical_cpus\": 4, \"cpu\": \"AMD EPYC 9V45 96-Core Processor\", \"runner_image\": \"win25-vs2026\", \"runner_image_version\": \"20260907.229.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-x64/libpng/photo_rgba8 native",
            "value": 65.71,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Windows-2025Server-10.0.26100-SP0\", \"machine\": \"AMD64\", \"logical_cpus\": 4, \"cpu\": \"AMD EPYC 9V45 96-Core Processor\", \"runner_image\": \"win25-vs2026\", \"runner_image_version\": \"20260907.229.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-x64/ptpng-vs-libpng/photo_rgba8 rgba8",
            "value": 98.76,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 \nRunner: {\"os\": \"Windows-2025Server-10.0.26100-SP0\", \"machine\": \"AMD64\", \"logical_cpus\": 4, \"cpu\": \"AMD EPYC 9V45 96-Core Processor\", \"runner_image\": \"win25-vs2026\", \"runner_image_version\": \"20260907.229.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-x64/libpng/photo_rgba8 rgba8",
            "value": 65.58,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Windows-2025Server-10.0.26100-SP0\", \"machine\": \"AMD64\", \"logical_cpus\": 4, \"cpu\": \"AMD EPYC 9V45 96-Core Processor\", \"runner_image\": \"win25-vs2026\", \"runner_image_version\": \"20260907.229.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-x64/ptpng-vs-libpng/photo_gray8 native",
            "value": 501.87,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 \nRunner: {\"os\": \"Windows-2025Server-10.0.26100-SP0\", \"machine\": \"AMD64\", \"logical_cpus\": 4, \"cpu\": \"AMD EPYC 9V45 96-Core Processor\", \"runner_image\": \"win25-vs2026\", \"runner_image_version\": \"20260907.229.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-x64/libpng/photo_gray8 native",
            "value": 267.86,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Windows-2025Server-10.0.26100-SP0\", \"machine\": \"AMD64\", \"logical_cpus\": 4, \"cpu\": \"AMD EPYC 9V45 96-Core Processor\", \"runner_image\": \"win25-vs2026\", \"runner_image_version\": \"20260907.229.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-x64/ptpng-vs-libpng/photo_gray8 rgba8",
            "value": 393.9,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 \nRunner: {\"os\": \"Windows-2025Server-10.0.26100-SP0\", \"machine\": \"AMD64\", \"logical_cpus\": 4, \"cpu\": \"AMD EPYC 9V45 96-Core Processor\", \"runner_image\": \"win25-vs2026\", \"runner_image_version\": \"20260907.229.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-x64/libpng/photo_gray8 rgba8",
            "value": 207.62,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Windows-2025Server-10.0.26100-SP0\", \"machine\": \"AMD64\", \"logical_cpus\": 4, \"cpu\": \"AMD EPYC 9V45 96-Core Processor\", \"runner_image\": \"win25-vs2026\", \"runner_image_version\": \"20260907.229.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-x64/ptpng-vs-libpng/photo_gray16 native",
            "value": 453.95,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 \nRunner: {\"os\": \"Windows-2025Server-10.0.26100-SP0\", \"machine\": \"AMD64\", \"logical_cpus\": 4, \"cpu\": \"AMD EPYC 9V45 96-Core Processor\", \"runner_image\": \"win25-vs2026\", \"runner_image_version\": \"20260907.229.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-x64/libpng/photo_gray16 native",
            "value": 221.37,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Windows-2025Server-10.0.26100-SP0\", \"machine\": \"AMD64\", \"logical_cpus\": 4, \"cpu\": \"AMD EPYC 9V45 96-Core Processor\", \"runner_image\": \"win25-vs2026\", \"runner_image_version\": \"20260907.229.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-x64/ptpng-vs-libpng/photo_gray16 rgba8",
            "value": 353.12,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 \nRunner: {\"os\": \"Windows-2025Server-10.0.26100-SP0\", \"machine\": \"AMD64\", \"logical_cpus\": 4, \"cpu\": \"AMD EPYC 9V45 96-Core Processor\", \"runner_image\": \"win25-vs2026\", \"runner_image_version\": \"20260907.229.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-x64/libpng/photo_gray16 rgba8",
            "value": 149.96,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Windows-2025Server-10.0.26100-SP0\", \"machine\": \"AMD64\", \"logical_cpus\": 4, \"cpu\": \"AMD EPYC 9V45 96-Core Processor\", \"runner_image\": \"win25-vs2026\", \"runner_image_version\": \"20260907.229.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-x64/ptpng-vs-libpng/graphic_pal8 native",
            "value": 4931.45,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 \nRunner: {\"os\": \"Windows-2025Server-10.0.26100-SP0\", \"machine\": \"AMD64\", \"logical_cpus\": 4, \"cpu\": \"AMD EPYC 9V45 96-Core Processor\", \"runner_image\": \"win25-vs2026\", \"runner_image_version\": \"20260907.229.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-x64/libpng/graphic_pal8 native",
            "value": 534.13,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Windows-2025Server-10.0.26100-SP0\", \"machine\": \"AMD64\", \"logical_cpus\": 4, \"cpu\": \"AMD EPYC 9V45 96-Core Processor\", \"runner_image\": \"win25-vs2026\", \"runner_image_version\": \"20260907.229.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-x64/ptpng-vs-libpng/graphic_pal8 rgba8",
            "value": 1164.24,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 \nRunner: {\"os\": \"Windows-2025Server-10.0.26100-SP0\", \"machine\": \"AMD64\", \"logical_cpus\": 4, \"cpu\": \"AMD EPYC 9V45 96-Core Processor\", \"runner_image\": \"win25-vs2026\", \"runner_image_version\": \"20260907.229.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-x64/libpng/graphic_pal8 rgba8",
            "value": 326.26,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Windows-2025Server-10.0.26100-SP0\", \"machine\": \"AMD64\", \"logical_cpus\": 4, \"cpu\": \"AMD EPYC 9V45 96-Core Processor\", \"runner_image\": \"win25-vs2026\", \"runner_image_version\": \"20260907.229.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-x64/ptpng-vs-libpng/graphic_rgb8 native",
            "value": 951.7,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 \nRunner: {\"os\": \"Windows-2025Server-10.0.26100-SP0\", \"machine\": \"AMD64\", \"logical_cpus\": 4, \"cpu\": \"AMD EPYC 9V45 96-Core Processor\", \"runner_image\": \"win25-vs2026\", \"runner_image_version\": \"20260907.229.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-x64/libpng/graphic_rgb8 native",
            "value": 151.5,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Windows-2025Server-10.0.26100-SP0\", \"machine\": \"AMD64\", \"logical_cpus\": 4, \"cpu\": \"AMD EPYC 9V45 96-Core Processor\", \"runner_image\": \"win25-vs2026\", \"runner_image_version\": \"20260907.229.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-x64/ptpng-vs-libpng/graphic_rgb8 rgba8",
            "value": 577.85,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 \nRunner: {\"os\": \"Windows-2025Server-10.0.26100-SP0\", \"machine\": \"AMD64\", \"logical_cpus\": 4, \"cpu\": \"AMD EPYC 9V45 96-Core Processor\", \"runner_image\": \"win25-vs2026\", \"runner_image_version\": \"20260907.229.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-x64/libpng/graphic_rgb8 rgba8",
            "value": 139.05,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Windows-2025Server-10.0.26100-SP0\", \"machine\": \"AMD64\", \"logical_cpus\": 4, \"cpu\": \"AMD EPYC 9V45 96-Core Processor\", \"runner_image\": \"win25-vs2026\", \"runner_image_version\": \"20260907.229.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-x64/memory-copy-vs-libpng-zng/64MiB",
            "value": 29025.54,
            "unit": "MB/s",
            "extra": "Warm buffers; 128 MiB working set; median of five batches; payload bytes only; measured reference, not a theoretical limit\nRunner: {\"os\": \"Windows-2025Server-10.0.26100-SP0\", \"machine\": \"AMD64\", \"logical_cpus\": 4, \"cpu\": \"AMD EPYC 9V45 96-Core Processor\", \"runner_image\": \"win25-vs2026\", \"runner_image_version\": \"20260907.229.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}"
          },
          {
            "name": "windows-x64/ptpng-vs-libpng-zng/photo_rgb8 native",
            "value": 299.22,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 \nRunner: {\"os\": \"Windows-2025Server-10.0.26100-SP0\", \"machine\": \"AMD64\", \"logical_cpus\": 4, \"cpu\": \"AMD EPYC 9V45 96-Core Processor\", \"runner_image\": \"win25-vs2026\", \"runner_image_version\": \"20260907.229.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-x64/libpng-zng/photo_rgb8 native",
            "value": 268.39,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Windows-2025Server-10.0.26100-SP0\", \"machine\": \"AMD64\", \"logical_cpus\": 4, \"cpu\": \"AMD EPYC 9V45 96-Core Processor\", \"runner_image\": \"win25-vs2026\", \"runner_image_version\": \"20260907.229.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-x64/ptpng-vs-libpng-zng/photo_rgb8 rgba8",
            "value": 249.73,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 \nRunner: {\"os\": \"Windows-2025Server-10.0.26100-SP0\", \"machine\": \"AMD64\", \"logical_cpus\": 4, \"cpu\": \"AMD EPYC 9V45 96-Core Processor\", \"runner_image\": \"win25-vs2026\", \"runner_image_version\": \"20260907.229.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-x64/libpng-zng/photo_rgb8 rgba8",
            "value": 231.78,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Windows-2025Server-10.0.26100-SP0\", \"machine\": \"AMD64\", \"logical_cpus\": 4, \"cpu\": \"AMD EPYC 9V45 96-Core Processor\", \"runner_image\": \"win25-vs2026\", \"runner_image_version\": \"20260907.229.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-x64/ptpng-vs-libpng-zng/photo_rgba8 native",
            "value": 105.44,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 \nRunner: {\"os\": \"Windows-2025Server-10.0.26100-SP0\", \"machine\": \"AMD64\", \"logical_cpus\": 4, \"cpu\": \"AMD EPYC 9V45 96-Core Processor\", \"runner_image\": \"win25-vs2026\", \"runner_image_version\": \"20260907.229.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-x64/libpng-zng/photo_rgba8 native",
            "value": 90.03,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Windows-2025Server-10.0.26100-SP0\", \"machine\": \"AMD64\", \"logical_cpus\": 4, \"cpu\": \"AMD EPYC 9V45 96-Core Processor\", \"runner_image\": \"win25-vs2026\", \"runner_image_version\": \"20260907.229.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-x64/ptpng-vs-libpng-zng/photo_rgba8 rgba8",
            "value": 99,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 \nRunner: {\"os\": \"Windows-2025Server-10.0.26100-SP0\", \"machine\": \"AMD64\", \"logical_cpus\": 4, \"cpu\": \"AMD EPYC 9V45 96-Core Processor\", \"runner_image\": \"win25-vs2026\", \"runner_image_version\": \"20260907.229.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-x64/libpng-zng/photo_rgba8 rgba8",
            "value": 90.56,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Windows-2025Server-10.0.26100-SP0\", \"machine\": \"AMD64\", \"logical_cpus\": 4, \"cpu\": \"AMD EPYC 9V45 96-Core Processor\", \"runner_image\": \"win25-vs2026\", \"runner_image_version\": \"20260907.229.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-x64/ptpng-vs-libpng-zng/photo_gray8 native",
            "value": 521.22,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 \nRunner: {\"os\": \"Windows-2025Server-10.0.26100-SP0\", \"machine\": \"AMD64\", \"logical_cpus\": 4, \"cpu\": \"AMD EPYC 9V45 96-Core Processor\", \"runner_image\": \"win25-vs2026\", \"runner_image_version\": \"20260907.229.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-x64/libpng-zng/photo_gray8 native",
            "value": 347.41,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Windows-2025Server-10.0.26100-SP0\", \"machine\": \"AMD64\", \"logical_cpus\": 4, \"cpu\": \"AMD EPYC 9V45 96-Core Processor\", \"runner_image\": \"win25-vs2026\", \"runner_image_version\": \"20260907.229.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-x64/ptpng-vs-libpng-zng/photo_gray8 rgba8",
            "value": 393.54,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 \nRunner: {\"os\": \"Windows-2025Server-10.0.26100-SP0\", \"machine\": \"AMD64\", \"logical_cpus\": 4, \"cpu\": \"AMD EPYC 9V45 96-Core Processor\", \"runner_image\": \"win25-vs2026\", \"runner_image_version\": \"20260907.229.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-x64/libpng-zng/photo_gray8 rgba8",
            "value": 245.08,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Windows-2025Server-10.0.26100-SP0\", \"machine\": \"AMD64\", \"logical_cpus\": 4, \"cpu\": \"AMD EPYC 9V45 96-Core Processor\", \"runner_image\": \"win25-vs2026\", \"runner_image_version\": \"20260907.229.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-x64/ptpng-vs-libpng-zng/photo_gray16 native",
            "value": 455.34,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 \nRunner: {\"os\": \"Windows-2025Server-10.0.26100-SP0\", \"machine\": \"AMD64\", \"logical_cpus\": 4, \"cpu\": \"AMD EPYC 9V45 96-Core Processor\", \"runner_image\": \"win25-vs2026\", \"runner_image_version\": \"20260907.229.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-x64/libpng-zng/photo_gray16 native",
            "value": 302.02,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Windows-2025Server-10.0.26100-SP0\", \"machine\": \"AMD64\", \"logical_cpus\": 4, \"cpu\": \"AMD EPYC 9V45 96-Core Processor\", \"runner_image\": \"win25-vs2026\", \"runner_image_version\": \"20260907.229.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-x64/ptpng-vs-libpng-zng/photo_gray16 rgba8",
            "value": 354.39,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 \nRunner: {\"os\": \"Windows-2025Server-10.0.26100-SP0\", \"machine\": \"AMD64\", \"logical_cpus\": 4, \"cpu\": \"AMD EPYC 9V45 96-Core Processor\", \"runner_image\": \"win25-vs2026\", \"runner_image_version\": \"20260907.229.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-x64/libpng-zng/photo_gray16 rgba8",
            "value": 184.94,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Windows-2025Server-10.0.26100-SP0\", \"machine\": \"AMD64\", \"logical_cpus\": 4, \"cpu\": \"AMD EPYC 9V45 96-Core Processor\", \"runner_image\": \"win25-vs2026\", \"runner_image_version\": \"20260907.229.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-x64/ptpng-vs-libpng-zng/graphic_pal8 native",
            "value": 5109.61,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 \nRunner: {\"os\": \"Windows-2025Server-10.0.26100-SP0\", \"machine\": \"AMD64\", \"logical_cpus\": 4, \"cpu\": \"AMD EPYC 9V45 96-Core Processor\", \"runner_image\": \"win25-vs2026\", \"runner_image_version\": \"20260907.229.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-x64/libpng-zng/graphic_pal8 native",
            "value": 2157.73,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Windows-2025Server-10.0.26100-SP0\", \"machine\": \"AMD64\", \"logical_cpus\": 4, \"cpu\": \"AMD EPYC 9V45 96-Core Processor\", \"runner_image\": \"win25-vs2026\", \"runner_image_version\": \"20260907.229.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-x64/ptpng-vs-libpng-zng/graphic_pal8 rgba8",
            "value": 1189.95,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 \nRunner: {\"os\": \"Windows-2025Server-10.0.26100-SP0\", \"machine\": \"AMD64\", \"logical_cpus\": 4, \"cpu\": \"AMD EPYC 9V45 96-Core Processor\", \"runner_image\": \"win25-vs2026\", \"runner_image_version\": \"20260907.229.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-x64/libpng-zng/graphic_pal8 rgba8",
            "value": 600.55,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Windows-2025Server-10.0.26100-SP0\", \"machine\": \"AMD64\", \"logical_cpus\": 4, \"cpu\": \"AMD EPYC 9V45 96-Core Processor\", \"runner_image\": \"win25-vs2026\", \"runner_image_version\": \"20260907.229.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-x64/ptpng-vs-libpng-zng/graphic_rgb8 native",
            "value": 960.64,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 \nRunner: {\"os\": \"Windows-2025Server-10.0.26100-SP0\", \"machine\": \"AMD64\", \"logical_cpus\": 4, \"cpu\": \"AMD EPYC 9V45 96-Core Processor\", \"runner_image\": \"win25-vs2026\", \"runner_image_version\": \"20260907.229.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-x64/libpng-zng/graphic_rgb8 native",
            "value": 689.23,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Windows-2025Server-10.0.26100-SP0\", \"machine\": \"AMD64\", \"logical_cpus\": 4, \"cpu\": \"AMD EPYC 9V45 96-Core Processor\", \"runner_image\": \"win25-vs2026\", \"runner_image_version\": \"20260907.229.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-x64/ptpng-vs-libpng-zng/graphic_rgb8 rgba8",
            "value": 587.48,
            "unit": "MPix/s",
            "extra": "avx2 sse4.1 ssse3 sse2 pclmul bmi2 \nRunner: {\"os\": \"Windows-2025Server-10.0.26100-SP0\", \"machine\": \"AMD64\", \"logical_cpus\": 4, \"cpu\": \"AMD EPYC 9V45 96-Core Processor\", \"runner_image\": \"win25-vs2026\", \"runner_image_version\": \"20260907.229.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          },
          {
            "name": "windows-x64/libpng-zng/graphic_rgb8 rgba8",
            "value": 492.6,
            "unit": "MPix/s",
            "extra": "\nRunner: {\"os\": \"Windows-2025Server-10.0.26100-SP0\", \"machine\": \"AMD64\", \"logical_cpus\": 4, \"cpu\": \"AMD EPYC 9V45 96-Core Processor\", \"runner_image\": \"win25-vs2026\", \"runner_image_version\": \"20260907.229.1\", \"run_id\": \"36055836629\", \"affinity\": \"OS scheduled; no fixed CPU affinity\"}\nMethod: median of 12 alternating rounds after warm-up; older entries used best of 12."
          }
        ]
      }
    ]
  }
}