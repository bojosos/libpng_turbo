@echo off
rem run_tests.bat - full correctness suite for ptpng
setlocal

echo === unit tests ===
build\sums_test.exe || exit /b 1
build\filters_test.exe || exit /b 1
build\encoder_test.exe || exit /b 1
build\encoder_filters_test.exe || exit /b 1
build\deflate_test.exe || exit /b 1

echo === inflate stream tests ===
powershell -NoProfile -Command "$f=0; Get-ChildItem build\inf_test\*.z | ForEach-Object { $len = (Get-Item ('build\inf_test\' + $_.BaseName + '.raw')).Length; $r = (& build\inflate_test.exe $_.FullName ('build\inf_test\' + $_.BaseName + '.raw') $len); if ($LASTEXITCODE -ne 0) { $f++; Write-Output ('FAIL ' + $_.Name + ' : ' + $r) } }; if ($f -gt 0) { exit 1 }; Write-Output 'inflate: all pass'" || exit /b 1

echo === libpng byte-parity (104 pngstest images x 3 formats) ===
powershell -ExecutionPolicy Bypass -File tests\compare_libpng.ps1 || exit /b 1

echo === generated matrix (205 images x 3 formats) ===
powershell -ExecutionPolicy Bypass -File tests\compare_dir.ps1 tests\gen || exit /b 1

echo ALL TESTS PASSED
endlocal
