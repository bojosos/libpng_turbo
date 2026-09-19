$ErrorActionPreference = "Continue"
# run the whole valid corpus under ASan (must decode cleanly)
$dirs = @("third_party\libpng-libpng16\contrib\testpngs", "tests\gen", "tests\bench")
$ok = 0; $fail = 0
foreach ($d in $dirs) {
    foreach ($f in Get-ChildItem $d -Filter *.png) {
        foreach ($mode in @("--native", "--rgba8", "--rgb8")) {
            $out = & cmd /c "build\asan\ptpng_tool.exe `"$($f.FullName)`" $mode -o build\cmp\asan.bin 2>&1"
            if ($LASTEXITCODE -ne 0) {
                $fail++
                Write-Output "ASAN-FAIL: $($f.Name) $mode rc=$LASTEXITCODE"
                Write-Output ($out | Select-Object -First 12)
            } else { $ok++ }
        }
    }
}
"corpus under ASan: ok=$ok fail=$fail"
