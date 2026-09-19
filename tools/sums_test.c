/* adler/crc unit test */
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <intrin.h>
#include "ptpng_internal.h"

int main(void)
{
    unsigned i, j;
    /* deterministic pseudo-random */
    unsigned rng = 12345;
#define NEXT() (rng = rng * 1664525u + 1013904223u)
    for (i = 0; i < 3000; i++) {
        size_t n = i;
        uint8_t *buf = (uint8_t *)malloc(n ? n : 1);
        size_t k;
        uint32_t a_ref, c_ref;
        for (k = 0; k < n; k++)
            buf[k] = (uint8_t)(NEXT() >> 24);
        /* reference adler */
        {
            uint32_t a = 1, b = 0;
            for (k = 0; k < n; k++) {
                a += buf[k]; b += a;
            }
            a %= 65521u; b %= 65521u;
            a_ref = (b << 16) | a;
        }
        /* reference crc (bit-by-bit) */
        {
            uint32_t c = 0xFFFFFFFFu;
            for (k = 0; k < n; k++) {
                c ^= buf[k];
                for (j = 0; j < 8; j++)
                    c = (c >> 1) ^ (0xEDB88320u & (uint32_t)(-(int32_t)(c & 1)));
            }
            c_ref = ~c;
        }
        ptpng_cpu_init();
        {
            uint32_t got = ptpng_adler32(buf, n);
            uint32_t got2 = ptpng_adler32_scalar(buf, n);
            uint32_t gotc = ptpng_crc32_slice8(buf, n);
            if (got != a_ref || got2 != a_ref) {
                printf("adler FAIL n=%zu sse2=%08x scalar=%08x ref=%08x\n",
                       n, got, got2, a_ref);
                if (n <= 32) {
                    printf("bytes:");
                    for (k = 0; k < n; k++) printf(" %02x", buf[k]);
                    printf("\n");
#if defined(_M_X64)
                    {
                        const __m128i zero = _mm_setzero_si128();
                        const __m128i ones = _mm_set1_epi16(1);
                        __m128i d = _mm_loadu_si128((const __m128i *)buf);
                        __m128i lo16 = _mm_unpacklo_epi8(d, zero);
                        __m128i hi16 = _mm_unpackhi_epi8(d, zero);
                        __m128i w = _mm_setr_epi8(16, 15, 14, 13, 12, 11,
                                                  10, 9, 8, 7, 6, 5, 4, 3,
                                                  2, 1);
                        __m128i S1 = _mm_madd_epi16(lo16, ones);
                        __m128i W1 = _mm_madd_epi16(lo16, w);
                        int s4[4], w4[4];
                        _mm_storeu_si128((__m128i *)s4, S1);
                        _mm_storeu_si128((__m128i *)w4, W1);
                        printf("lo16 madd-ones lanes: %d %d %d %d\n",
                               s4[0], s4[1], s4[2], s4[3]);
                        printf("lo16 madd-w lanes: %d %d %d %d\n",
                               w4[0], w4[1], w4[2], w4[3]);
                    }
#endif
                    {
                        uint32_t W = 0;
                        for (k = 0; k < n; k++)
                            W += (uint32_t)(n - k) * buf[k];
                        printf("expected W=%u chunk*a=%u => b=%u\n",
                               W, (unsigned)n, W + (unsigned)n);
                    }
                }
                return 1;
            }
            if (gotc != c_ref) {
                printf("crc FAIL n=%zu got=%08x ref=%08x\n", n, gotc, c_ref);
                return 1;
            }
        }
        free(buf);
    }
    /* all-0xFF and all-0x00 large buffers (weight edge cases) */
    for (i = 0; i < 2; i++) {
        size_t n = 70000;
        uint8_t *buf = (uint8_t *)malloc(n);
        unsigned long long a = 1, b = 0;
        memset(buf, i ? 0xFF : 0x00, n);
        for (size_t k = 0; k < n; k++) { a += buf[k]; b += a; }
        a %= 65521u; b %= 65521u;
        ptpng_cpu_init();
        if (ptpng_adler32(buf, n) != (uint32_t)((b << 16) | a)) {
            printf("adler large FAIL pattern=%u\n", i);
            return 1;
        }
        free(buf);
    }
    printf("checksums OK\n");
    return 0;
}
