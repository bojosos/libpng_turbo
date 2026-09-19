$ErrorActionPreference = "Continue"
# mutation fuzz under ASan: any nonzero exit = crash/ASan report
$seeds = @(
    "tests\bench\photo_rgb8.png", "tests\bench\photo_rgba8.png",
    "tests\bench\photo_gray8.png", "tests\bench\photo_gray16.png",
    "tests\bench\graphic_pal8.png", "tests\bench\graphic_rgb8.png",
    "third_party\libpng-libpng16\contrib\testpngs\palette-1.png",
    "third_party\libpng-libpng16\contrib\testpngs\gray-4-tRNS.png",
    "third_party\libpng-libpng16\contrib\testpngs\rgb-16-1.8-tRNS.png",
    "tests\gen\c6d16_i1_f4.png",
    "tests\gen\paltrns_d4.png",
    "tests\gen\multiidat.png",
    "tests\gen\ancillary.png",
    "tests\gen\sz_c3d4_33x17_i1.png"
)
$base_seed = 1
$rounds = 3
$iters = 8000
$crashes = 0
for ($r = 0; $r -lt $rounds; $r++) {
    foreach ($s in $seeds) {
        $seed = $base_seed + $r * 1000 + ($seeds.IndexOf($s))
        $out = & cmd /c "build\asan\fuzz_png.exe `"$s`" $iters $seed 2>&1"
        if ($LASTEXITCODE -ne 0) {
            $crashes++
            Write-Output "CRASH: $s seed=$seed rc=$LASTEXITCODE"
            Write-Output ($out | Select-Object -First 20)
        }
    }
}
"fuzz: $($seeds.Count * $rounds) runs x $iters mutations, crashes=$crashes"
