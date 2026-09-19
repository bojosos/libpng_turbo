/* filters_test.c - verify SIMD filter kernels and paeth predictor */
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <intrin.h>
#include "ptpng_internal.h"

static unsigned rng = 987654321u;
#define NEXT() (rng = rng * 1664525u + 1013904223u)

static int paeth_ref(int a, int b, int c)
{
    int p = a + b - c;
    int pa = p - a; if (pa < 0) pa = -pa;
    int pb = p - b; if (pb < 0) pb = -pb;
    int pc = p - c; if (pc < 0) pc = -pc;
    if (pa <= pb && pa <= pc) return a;
    if (pb <= pc) return b;
    return c;
}

extern int ptpng_paeth_pred_ext(int, int, int);

static int test_paeth_pred(void)
{
    int a, b, c;
    for (a = 0; a < 256; a++)
        for (b = 0; b < 256; b++)
            for (c = 0; c < 256; c += 1)
                if (ptpng_paeth_pred_ext(a, b, c) != paeth_ref(a, b, c)) {
                    printf("paeth_pred mismatch a=%d b=%d c=%d\n", a, b, c);
                    return 1;
                }
    return 0;
}

enum { N = 4096 };
static uint8_t src[N + 64], ref[N + 64], got[N + 64], prev[N + 64];

static int check_full(int kind, const char *name, unsigned bpp)
{
    size_t counts[] = {1, 2, 3, 5, 7, 8, 9, 15, 16, 17, 31, 32, 33, 63,
                       64, 65, 100, 127, 128, 129, 255, 256, 257, 511,
                       512, 513, 767, 768, 769, 1023, 1024, 2048, 4096};
    unsigned c, i;
    size_t k;
    for (c = 0; c < sizeof(counts) / sizeof(counts[0]); c++) {
        size_t count = counts[c];
        for (i = 0; i < count; i++) {
            src[i] = (uint8_t)(NEXT() >> 24);
            prev[i] = (uint8_t)(NEXT() >> 24);
        }
        /* reference fused reconstruction */
        for (k = 0; k < count; k++) {
            if (kind == 1) { /* sub: no filtering before bpp */
                ref[k] = (k >= bpp)
                    ? (uint8_t)(src[k] + ref[k - bpp]) : src[k];
            } else if (kind == 2) { /* up */
                ref[k] = (uint8_t)(src[k] + prev[k]);
            } else {
                int a = (k >= bpp) ? ref[k - bpp] : 0;
                int b = prev[k], c2 = (k >= bpp) ? prev[k - bpp] : 0;
                if (k < bpp) {
                    /* prologue: a = c = 0 */
                    ref[k] = (kind == 3)
                        ? (uint8_t)(src[k] + (b >> 1))
                        : (uint8_t)(src[k] + b);
                } else if (kind == 3) {
                    ref[k] = (uint8_t)(src[k] + ((a + b) >> 1));
                } else {
                    ref[k] = (uint8_t)(src[k] + paeth_ref(a, b, c2));
                }
            }
        }
        /* kernel under test */
        if (kind == 1) ptpng_filter_sub_scalar(got, src, prev, count, bpp);
        else if (kind == 2) ptpng_filter_up_scalar(got, src, prev, count, bpp);
        else if (kind == 3) ptpng_filter_avg_scalar(got, src, prev, count, bpp);
        else ptpng_filter_paeth_scalar(got, src, prev, count, bpp);
        if (memcmp(ref, got, count)) {
            k = 0;
            while (ref[k] == got[k]) k++;
            printf("%s bpp=%u count=%zu MISMATCH at %zu (ref=%d got=%d)\n",
                   name, bpp, count, k, ref[k], got[k]);
            return 1;
        }
        /* SIMD sub/up kernels */
        if (kind == 1 || kind == 2) {
            void (*fn)(uint8_t *, const uint8_t *, const uint8_t *,
                       size_t, unsigned);
            fn = (kind == 1) ? ptpng_filter_sub_sse2 : ptpng_filter_up_sse2;
            fn(got, src, prev, count, bpp);
            if (memcmp(ref, got, count)) {
                k = 0;
                while (ref[k] == got[k]) k++;
                printf("%s_sse2 bpp=%u count=%zu MISMATCH at %zu\n", name,
                       bpp, count, k);
                return 1;
            }
            fn = (kind == 1) ? ptpng_filter_sub_avx2 : ptpng_filter_up_avx2;
            fn(got, src, prev, count, bpp);
            if (memcmp(ref, got, count)) {
                k = 0;
                while (ref[k] == got[k]) k++;
                printf("%s_avx2 bpp=%u count=%zu MISMATCH at %zu\n", name,
                       bpp, count, k);
                return 1;
            }
        }
    }
    return 0;
}

int main(void)
{
    unsigned bpps[] = {1, 2, 3, 4, 6, 8};
    unsigned i;
    int bad = 0;
    ptpng_cpu_init();
    if (test_paeth_pred()) bad = 1;
    for (i = 0; i < 6; i++) {
        if (check_full(1, "sub", bpps[i])) bad = 1;
        if (check_full(2, "up", bpps[i])) bad = 1;
        if (check_full(3, "avg", bpps[i])) bad = 1;
        if (check_full(4, "paeth", bpps[i])) bad = 1;
    }
    if (bad) return 1;
    printf("filters OK\n");
    return 0;
}
