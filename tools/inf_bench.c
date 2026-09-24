/* inf_bench.c - time ptpng_inflate on raw zlib streams */
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <errno.h>
#include <time.h>
#ifdef _WIN32
#include <windows.h>
#endif
#include "ptpng_internal.h"

static double now_sec(void)
{
#ifdef _WIN32
    LARGE_INTEGER c, f;
    QueryPerformanceCounter(&c);
    QueryPerformanceFrequency(&f);
    return (double)c.QuadPart / (double)f.QuadPart;
#else
    struct timespec ts;
    clock_gettime(CLOCK_MONOTONIC, &ts);
    return (double)ts.tv_sec + (double)ts.tv_nsec * 1e-9;
#endif
}

int main(int argc, char **argv)
{
    FILE *f;
    long slen;
    uint8_t *stream, *out;
    size_t olen;
    unsigned long long requested;
    char *end;
    double best = 1e30;
    int it;
    if (argc != 3) {
        fprintf(stderr, "usage: inf_bench <zlib-stream> <output-bytes>\n");
        return 2;
    }
    errno = 0;
    requested = strtoull(argv[2], &end, 0);
    if (errno || argv[2][0] == '-' || end == argv[2] || *end ||
        requested == 0 || requested > SIZE_MAX) {
        fprintf(stderr, "invalid output size\n");
        return 2;
    }
    olen = (size_t)requested;
    f = fopen(argv[1], "rb");
    if (!f) { perror(argv[1]); return 2; }
    if (fseek(f, 0, SEEK_END) || (slen = ftell(f)) <= 0 ||
        fseek(f, 0, SEEK_SET)) { fclose(f); return 2; }
    stream = malloc((size_t)slen);
    if (!stream) { fclose(f); return 2; }
    if (fread(stream, 1, (size_t)slen, f) != (size_t)slen) {
        free(stream); fclose(f); return 2;
    }
    fclose(f);
    out = malloc(olen);
    if (!out) { free(stream); return 2; }
    memset(out, 0, olen);
    ptpng_cpu_init();
    /* Validate once outside timing, including the stream checksum. */
    {
        int rc = ptpng_inflate(stream, (size_t)slen, out, olen, 0);
        if (rc) {
            fprintf(stderr, "inflate failed: %s\n", ptpng_strerror(rc));
            free(out); free(stream); return 1;
        }
    }
    {
        double b2 = 1e30;
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
        if (rc) { printf("rc=%d\n", rc); free(out); free(stream); return 1; }
        if (t1 - t0 < best) best = t1 - t0;
    }
    printf("inflate: %ld -> %zu bytes, best %.3f ms = %.1f MB/s out, %.1f MB/s in\n",
           slen, olen, best * 1e3, olen / best / 1e6, slen / best / 1e6);
    free(out);
    free(stream);
    return 0;
}
