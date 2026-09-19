/* inf_bench.c - time ptpng_inflate on raw zlib streams */
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <windows.h>
#include "ptpng_internal.h"

static double now_sec(void)
{
    LARGE_INTEGER c, f;
    QueryPerformanceCounter(&c);
    QueryPerformanceFrequency(&f);
    return (double)c.QuadPart / (double)f.QuadPart;
}

int main(int argc, char **argv)
{
    FILE *f = fopen(argv[1], "rb");
    long slen;
    uint8_t *stream, *out;
    size_t olen = (size_t)strtoull(argv[2], NULL, 0);
    double best = 1e30;
    int it;
    if (!f) return 2;
    fseek(f, 0, SEEK_END); slen = ftell(f); fseek(f, 0, SEEK_SET);
    stream = malloc((size_t)slen);
    if (fread(stream, 1, (size_t)slen, f) != (size_t)slen) return 2;
    fclose(f);
    out = malloc(olen);
    ptpng_cpu_init();
    {
        double b2 = 1e30;
        int it;
        for (it = 0; it < 5; it++) {
            double t0 = now_sec();
            volatile uint32_t a = ptpng_adler32(out, olen);
            double t1 = now_sec();
            (void)a;
            if (t1 - t0 < b2) b2 = t1 - t0;
        }
        printf("adler alone: best %.3f ms (%.1f MB/s)\n", b2 * 1e3,
               olen / b2 / 1e6);
    }
    for (it = 0; it < 10; it++) {
        double t0 = now_sec();
        int rc = ptpng_inflate(stream, (size_t)slen, out, olen,
                               PTPNG_INF_NO_ADLER);
        double t1 = now_sec();
        if (rc) { printf("rc=%d\n", rc); return 1; }
        if (t1 - t0 < best) best = t1 - t0;
    }
    printf("inflate: %ld -> %zu bytes, best %.3f ms = %.1f MB/s out, %.1f MB/s in\n",
           slen, olen, best * 1e3, olen / best / 1e6, slen / best / 1e6);
    return 0;
}
