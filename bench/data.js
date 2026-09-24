window.BENCHMARK_DATA = {
  "lastUpdate": 1790276286133,
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
      }
    ]
  }
}