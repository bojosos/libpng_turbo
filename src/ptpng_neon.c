/*
 * ptpng_neon.c - ARM NEON accelerated paths, hooked from
 * ptpng_cpu_init() on NEON builds.  Each kernel mirrors the tested
 * x86 equivalent 1:1 (vqtbl1q zeroes out-of-range indices exactly like
 * pshufb's high-bit control bytes).
 */
#include "ptpng_internal.h"

#if PTPNG_ARM_NEON

/* ---- filters ---- */

void ptpng_filter_up_neon(uint8_t *dst, const uint8_t *src,
                          const uint8_t *prev, size_t count, unsigned bpp)
{
    size_t i = 0;
    (void)bpp;
    for (; i + 64 <= count; i += 64) {
        vst1q_u8(dst + i, vaddq_u8(vld1q_u8(src + i), vld1q_u8(prev + i)));
        vst1q_u8(dst + i + 16,
                 vaddq_u8(vld1q_u8(src + i + 16), vld1q_u8(prev + i + 16)));
        vst1q_u8(dst + i + 32,
                 vaddq_u8(vld1q_u8(src + i + 32), vld1q_u8(prev + i + 32)));
        vst1q_u8(dst + i + 48,
                 vaddq_u8(vld1q_u8(src + i + 48), vld1q_u8(prev + i + 48)));
    }
    for (; i + 16 <= count; i += 16)
        vst1q_u8(dst + i, vaddq_u8(vld1q_u8(src + i), vld1q_u8(prev + i)));
    for (; i < count; i++)
        dst[i] = (uint8_t)(src[i] + prev[i]);
}

/* ---- conversions (mirror of the pshufb versions) ---- */

/* gray8 -> RGBA8: gg holds each value twice; controls index 0,2,4,6 and
 * 8,10,12,14; index 16 (out of table) zeroes the alpha lane which is
 * then filled by the OR constant. */
static void rgba8_g8_neon(const uint8_t *src, uint8_t *dst, uint32_t n,
                          const struct ptpng_cvt *c)
{
    static const uint8x16_t dup_lo = {
        0, 0, 0, 16, 2, 2, 2, 16, 4, 4, 4, 16, 6, 6, 6, 16 };
    static const uint8x16_t dup_hi = {
        8, 8, 8, 16, 10, 10, 10, 16, 12, 12, 12, 16, 14, 14, 14, 16 };
    static const uint8x16_t alpha = { 0, 0, 0, 255, 0, 0, 0, 255,
                                      0, 0, 0, 255, 0, 0, 0, 255 };
    uint32_t i = 0;
    (void)c;
    for (; i + 8 <= n; i += 8) {
        uint8x8_t g = vld1_u8(src + i);
        uint8x8x2_t z = vzip_u8(g, g);       /* g0 g0 g1 g1 ... g7 g7 */
        uint8x16_t gg = vcombine_u8(z.val[0], z.val[1]);
        vst1q_u8(dst + i * 4,
                 vorrq_u8(vqtbl1q_u8(gg, dup_lo), alpha));
        vst1q_u8(dst + i * 4 + 16,
                 vorrq_u8(vqtbl1q_u8(gg, dup_hi), alpha));
    }
    for (; i < n; i++) {
        uint8_t gv = src[i];
        dst[i * 4] = dst[i * 4 + 1] = dst[i * 4 + 2] = gv;
        dst[i * 4 + 3] = 255;
    }
}

/* gray+alpha 8-bit -> RGBA8: [g,g,g,a] straight from the interleaved
 * source bytes. */
static void rgba8_ga8_neon(const uint8_t *src, uint8_t *dst, uint32_t n,
                           const struct ptpng_cvt *c)
{
    static const uint8x16_t lo = {
        0, 0, 0, 1, 2, 2, 2, 3, 4, 4, 4, 5, 6, 6, 6, 7 };
    static const uint8x16_t hi = {
        8, 8, 8, 9, 10, 10, 10, 11, 12, 12, 12, 13, 14, 14, 14, 15 };
    uint32_t i = 0;
    (void)c;
    for (; i + 8 <= n; i += 8) {
        uint8x16_t v = vld1q_u8(src + i * 2); /* g0 a0 g1 a1 ... */
        vst1q_u8(dst + i * 4, vqtbl1q_u8(v, lo));
        vst1q_u8(dst + i * 4 + 16, vqtbl1q_u8(v, hi));
    }
    for (; i < n; i++) {
        uint8_t g = src[i * 2];
        dst[i * 4] = dst[i * 4 + 1] = dst[i * 4 + 2] = g;
        dst[i * 4 + 3] = src[i * 2 + 1];
    }
}

/* rgba16 BE -> rgba8: keep the high byte of each sample; process four
 * pixels (32 in-bytes) per iteration. */
static void rgba8_rgba16_neon(const uint8_t *src, uint8_t *dst, uint32_t n,
                              const struct ptpng_cvt *c)
{
    static const uint8x16_t pick = {
        0, 2, 4, 6, 8, 10, 12, 14, 0, 0, 0, 0, 0, 0, 0, 0 };
    uint32_t i = 0;
    (void)c;
    for (; i + 4 <= n; i += 4) {
        uint8x16_t a = vld1q_u8(src + i * 8);      /* px0 px1 */
        uint8x16_t b = vld1q_u8(src + i * 8 + 16); /* px2 px3 */
        uint8x16_t pa = vqtbl1q_u8(a, pick);
        uint8x16_t pb = vqtbl1q_u8(b, pick);
        vst1q_u8(dst + i * 4,
                 vcombine_u8(vget_low_u8(pa), vget_low_u8(pb)));
    }
    for (; i < n; i++) {
        dst[i * 4] = src[i * 8];
        dst[i * 4 + 1] = src[i * 8 + 2];
        dst[i * 4 + 2] = src[i * 8 + 4];
        dst[i * 4 + 3] = src[i * 8 + 6];
    }
}

/* ---- conversion tables (mutable copies, hot entries overridden) ---- */

ptpng_cvt_fn ptpng_cvt_table_rgba8_neon[128];
ptpng_cvt_fn ptpng_cvt_table_rgb8_neon[128];

void ptpng_neon_init(void)
{
    memcpy(ptpng_cvt_table_rgba8_neon, ptpng_cvt_table_rgba8_scalar,
           sizeof(ptpng_cvt_table_rgba8_neon));
    memcpy(ptpng_cvt_table_rgb8_neon, ptpng_cvt_table_rgb8_scalar,
           sizeof(ptpng_cvt_table_rgb8_neon));

    if (!ptpng_cpu.neon)
        return;
    ptpng_cpu.filter_up = ptpng_filter_up_neon;
    ptpng_cpu.cvt_table_rgba8 = ptpng_cvt_table_rgba8_neon;
    ptpng_cpu.cvt_table_rgb8 = ptpng_cvt_table_rgb8_neon;
    ptpng_cvt_table_rgba8_neon[(0 << 4) | 3] = rgba8_g8_neon;
    ptpng_cvt_table_rgba8_neon[(4 << 4) | 3] = rgba8_ga8_neon;
    ptpng_cvt_table_rgba8_neon[(6 << 4) | 4] = rgba8_rgba16_neon;
}

#endif /* PTPNG_ARM_NEON */
