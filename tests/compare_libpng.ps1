$ErrorActionPreference = "Continue"
$dir = "third_party\libpng-libpng16\contrib\testpngs"
$formats = @("native", "rgba8", "rgb8")
$pass = 0; $fail = 0
New-Item -ItemType Directory -Force -Path build\cmp | Out-Null
foreach ($tag in $formats) {
    $flag = "--$tag"
    foreach ($f in Get-ChildItem $dir -Filter *.png) {
        $null = & cmd /c ".\build\ptpng_tool `"$($f.FullName)`" $flag -o build\cmp\pt.bin 2>&1"
        $rc1 = $LASTEXITCODE
        $null = & cmd /c ".\build\libpng_bench.exe `"$($f.FullName)`" $flag -o build\cmp\lp.bin 2>&1"
        $rc2 = $LASTEXITCODE
        if ($rc1 -ne 0) { $fail++; Write-Output "PTFAIL $($f.Name) $tag rc=$rc1"; continue }
        if ($rc2 -ne 0) { $fail++; Write-Output "LPFAIL $($f.Name) $tag rc=$rc2"; continue }
        $b1 = [IO.File]::ReadAllBytes("$PWD\build\cmp\pt.bin")
        $b2 = [IO.File]::ReadAllBytes("$PWD\build\cmp\lp.bin")
        if ($b1.Length -ne $b2.Length) { $fail++; Write-Output "LENN $tag $($f.Name) pt=$($b1.Length) lp=$($b2.Length)"; continue }
        $diff = 0
        for ($k = 0; $k -lt $b1.Length; $k++) { if ($b1[$k] -ne $b2[$k]) { $diff++ } }
        if ($diff) { $fail++; Write-Output ("MISMATCH {0} {1} ({2} bytes, first at {3})" -f $f.Name, $tag, $b1.Length, $(for ($k=0; $k -lt $b1.Length; $k++) { if ($b1[$k] -ne $b2[$k]) { $k; break } })) }
        else { $pass++ }
    }
}
"pass=$pass fail=$fail"
if ($fail -gt 0 -or $pass -eq 0) { exit 1 }
