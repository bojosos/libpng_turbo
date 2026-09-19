/*
 * ptpng_crc.c - CRC-32 (PNG polynomial 0xEDB88320) and adler32.
 *
 * CRC: slicing-by-8 table method.
 * Adler: SSE2 with 32-bit lanes; each 2048-byte chunk computes the plain
 * byte sum S and the descending-weight sum W = sum (chunk - j)*byte_j
 * via _mm_madd_epi16; overflow bounds: W <= 255*2048*2049/2 < 2^31 and
 * b <= b_prev + 2048*65520 + W < 2^32, reduced mod 65521 per chunk.
 */
#include "ptpng_internal.h"

static uint32_t crc_tab[8][256];
static int crc_ready;

static void crc_init(void)
{
    uint32_t c;
    unsigned n, k, i;
    for (n = 0; n < 256; n++) {
        c = n;
        for (k = 0; k < 8; k++)
            c = (c & 1) ? 0xEDB88320u ^ (c >> 1) : c >> 1;
        crc_tab[0][n] = c;
    }
    for (i = 1; i < 8; i++)
        for (n = 0; n < 256; n++)
            crc_tab[i][n] = (crc_tab[i - 1][n] >> 8) ^
                            crc_tab[0][crc_tab[i - 1][n] & 0xFF];
    crc_ready = 1;
}

uint32_t ptpng_crc32_slice8(const uint8_t *p, size_t n)
{
    uint32_t c = 0xFFFFFFFFu;
    if (!crc_ready)
        crc_init();
    while (n >= 8) {
        uint32_t one, two;
        memcpy(&one, p, 4);
        memcpy(&two, p + 4, 4);
        one ^= c;
        c = crc_tab[7][one & 0xFF] ^ crc_tab[6][(one >> 8) & 0xFF] ^
            crc_tab[5][(one >> 16) & 0xFF] ^ crc_tab[4][one >> 24] ^
            crc_tab[3][two & 0xFF] ^ crc_tab[2][(two >> 8) & 0xFF] ^
            crc_tab[1][(two >> 16) & 0xFF] ^ crc_tab[0][two >> 24];
        p += 8;
        n -= 8;
    }
    while (n--)
        c = crc_tab[0][(c ^ *p++) & 0xFF] ^ (c >> 8);
    return ~c;
}

uint32_t ptpng_adler32_scalar(const uint8_t *p, size_t n)
{
    uint32_t a = 1, b = 0;
    while (n) {
        size_t blk = n < 5552 ? n : 5552;
        n -= blk;
        while (blk--) {
            a += *p++;
            b += a;
        }
        a %= 65521u;
        b %= 65521u;
    }
    return (b << 16) | a;
}

#if PTPNG_X64
uint32_t ptpng_adler32_sse2(const uint8_t *p, size_t n)
{
    const __m128i zero = _mm_setzero_si128();
    const __m128i ones = _mm_set1_epi16(1);
    const __m128i step = _mm_set1_epi16(16);
    uint32_t a = 1, b = 0;

    while (n >= 16) {
        unsigned chunk = n < 2048 ? (unsigned)n : 2048;
        chunk &= ~15u;
        __m128i S = zero, W = zero;
        __m128i wl = _mm_setr_epi16((short)chunk, (short)(chunk - 1),
                                    (short)(chunk - 2), (short)(chunk - 3),
                                    (short)(chunk - 4), (short)(chunk - 5),
                                    (short)(chunk - 6), (short)(chunk - 7));
        __m128i wh = _mm_setr_epi16((short)(chunk - 8), (short)(chunk - 9),
                                    (short)(chunk - 10), (short)(chunk - 11),
                                    (short)(chunk - 12), (short)(chunk - 13),
                                    (short)(chunk - 14), (short)(chunk - 15));
        unsigned i;
        for (i = 0; i < chunk; i += 16) {
            __m128i d = _mm_loadu_si128((const __m128i *)(p + i));
            __m128i lo16 = _mm_unpacklo_epi8(d, zero);
            __m128i hi16 = _mm_unpackhi_epi8(d, zero);
            S = _mm_add_epi32(S, _mm_madd_epi16(lo16, ones));
            S = _mm_add_epi32(S, _mm_madd_epi16(hi16, ones));
            W = _mm_add_epi32(W, _mm_madd_epi16(lo16, wl));
            W = _mm_add_epi32(W, _mm_madd_epi16(hi16, wh));
            wl = _mm_sub_epi16(wl, step);
            wh = _mm_sub_epi16(wh, step);
        }
        p += chunk;
        n -= chunk;
        {
            uint32_t s4[4], w4[4];
            _mm_storeu_si128((__m128i *)s4, S);
            _mm_storeu_si128((__m128i *)w4, W);
            uint32_t Ssum = s4[0] + s4[1] + s4[2] + s4[3];
            uint32_t Wsum = w4[0] + w4[1] + w4[2] + w4[3];
            /* b += chunk*a + W; a += S; both mod 65521 */
            b += chunk * a + Wsum;
            a += Ssum;
            b %= 65521u;
            a %= 65521u;
        }
    }
    /* scalar tail (n < 16) plus streams shorter than 16 bytes */
    while (n) {
        a += *p++;
        b += a;
        n--;
    }
    a %= 65521u;
    b %= 65521u;
    return (b << 16) | a;
}
#endif
