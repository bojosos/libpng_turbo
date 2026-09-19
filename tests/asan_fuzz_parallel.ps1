$ErrorActionPreference = "Continue"
# parallel ASan fuzz: small corpus images x N seeds, one process per core
$seeds = @(
    "third_party\libpng-libpng16\contrib\testpngs\palette-1.png",
    "third_party\libpng-libpng16\contrib\testpngs\palette-2-tRNS.png",
    "third_party\libpng-libpng16\contrib\testpngs\gray-1-tRNS.png",
    "third_party\libpng-libpng16\contrib\testpngs\gray-4.png",
    "third_party\libpng-libpng16\contrib\testpngs\gray-16-tRNS.png",
    "third_party\libpng-libpng16\contrib\testpngs\rgb-8-1.8.png",
    "third_party\libpng-libpng16\contrib\testpngs\rgb-16-tRNS.png",
    "third_party\libpng-libpng16\contrib\testpngs\gray-alpha-8.png",
    "tests\gen\c6d16_i1_f4.png",
    "tests\gen\paltrns_d4.png",
    "tests\gen\multiidat.png",
    "tests\gen\ancillary.png",
    "tests\gen\sz_c3d4_33x17_i1.png",
    "tests\gen\trns_c2d8.png",
    "tests\gen\stored.png",
    "tests\gen\fixedhuff.png"
)
$batch = $args[0]          # batch id (0..)
$iters = 40000
$jobs = @()
$i = 0
foreach ($s in $seeds) {
    $seed = 1000000 * $batch + 4242 + $i * 7
    $p = Start-Process -FilePath build\asan\fuzz_png.exe `
        -ArgumentList "`"$s`"", "$iters", "$seed" `
        -NoNewWindow -PassThru `
        -RedirectStandardOutput "build\fuzz_$batch`_$i.out" `
        -RedirectStandardError "build\fuzz_$batch`_$i.err"
    $jobs += $p
    $i++
}
$crashes = 0
foreach ($p in $jobs) {
    WaitForExit -Process $p | Out-Null
    if ($p.ExitCode -ne 0) { $crashes++ }
}
"batch ${batch}: $($jobs.Count) procs x $iters muts, crashes=$crashes"
if ($crashes -gt 0) {
    Get-ChildItem build\fuzz_*.err | Where-Object { (Get-Item $_).Length -gt 0 } |
        ForEach-Object { Get-Content $_ | Select-Object -First 25 }
}
exit $crashes
