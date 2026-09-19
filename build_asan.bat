@echo off
rem build_asan.bat - AddressSanitizer build of ptpng + fuzz tool
setlocal
call "C:\Program Files\Microsoft Visual Studio\2022\Professional\VC\Auxiliary\Build\vcvars64.bat" >nul
if errorlevel 1 exit /b 1
if not exist build\asan mkdir build\asan

set CORE=/nologo /W3 /O1 /Zi /MT /DNDEBUG /D_CRT_SECURE_NO_WARNINGS /Iinclude /Isrc /fsanitize=address

cl %CORE% /c src\ptpng.c         /Fo"build\asan\ptpng.obj"         || exit /b 1
cl %CORE% /c src\ptpng_inflate.c /Fo"build\asan\ptpng_inflate.obj" || exit /b 1
cl %CORE% /c src\ptpng_crc.c     /Fo"build\asan\ptpng_crc.obj"     || exit /b 1
cl %CORE% /c src\ptpng_filters.c /Fo"build\asan\ptpng_filters.obj" || exit /b 1
cl %CORE% /arch:AVX2 /c src\ptpng_avx2.c /Fo"build\asan\ptpng_avx2.obj" || exit /b 1
cl %CORE% tools\ptpng_tool.c /link /nologo /out:build\asan\ptpng_tool.exe build\asan\ptpng.obj build\asan\ptpng_inflate.obj build\asan\ptpng_crc.obj build\asan\ptpng_filters.obj build\asan\ptpng_avx2.obj || exit /b 1
cl %CORE% tools\fuzz_png.c /link /nologo /out:build\asan\fuzz_png.exe build\asan\ptpng.obj build\asan\ptpng_inflate.obj build\asan\ptpng_crc.obj build\asan\ptpng_filters.obj build\asan\ptpng_avx2.obj || exit /b 1

echo asan build OK
endlocal
