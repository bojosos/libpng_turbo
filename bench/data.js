window.BENCHMARK_DATA = {
  "lastUpdate": 1790279035104,
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
      }
    ]
  }
}