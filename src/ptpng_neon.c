/*
 * ptpng_neon.c - ARM NEON accelerated paths, hooked from
 * ptpng_cpu_init() on NEON builds.  Each kernel mirrors the tested
 * x86 equivalent 1:1 (vqtbl1q zeroes out-of-range indices exactly like
 * pshufb's high-bit control bytes).
 */
#include "ptpng_internal.h"

#if PTPNG_ARM_NEON

/* ---- filters ---- */

/* Prefix sums within each register, then repeat the final pixel as the
 * carry for the following register. The table also rotates RGB carries
 * when a register ends partway through a pixel. */
#define SUB_PREFIX(v, BPP)                                               \
    (v) = vaddq_u8((v), vextq_u8(zero, (v), 16 - (BPP)));                \
    if ((BPP) < 8) (v) = vaddq_u8((v),                                  \
        vextq_u8(zero, (v), (16 - (BPP) * 2) & 15));                     \
    if ((BPP) < 4) (v) = vaddq_u8((v),                                  \
        vextq_u8(zero, (v), (16 - (BPP) * 4) & 15));                     \
    if ((BPP) == 1) (v) = vaddq_u8((v), vextq_u8(zero, (v), 8));

#define SUB_BLOCKS(BPP, ...)                                             \
    {                                                                    \
        static const uint8_t ctrl_bytes[16] = {__VA_ARGS__};              \
        const uint8x16_t ctrl = vld1q_u8(ctrl_bytes);                     \
        const uint8x16_t zero = vdupq_n_u8(0);                            \
        uint8x16_t carry = zero;                                         \
        size_t i = 0;                                                    \
        for (; i + 64 <= count; i += 64) {                               \
            uint8x16_t v0 = vld1q_u8(src + i);                           \
            uint8x16_t v1 = vld1q_u8(src + i + 16);                      \
            uint8x16_t v2 = vld1q_u8(src + i + 32);                      \
            uint8x16_t v3 = vld1q_u8(src + i + 48);                      \
            SUB_PREFIX(v0, BPP) SUB_PREFIX(v1, BPP)                      \
            SUB_PREFIX(v2, BPP) SUB_PREFIX(v3, BPP)                      \
            v0 = vaddq_u8(v0, carry);                                    \
            v1 = vaddq_u8(v1, vqtbl1q_u8(v0, ctrl));                      \
            v2 = vaddq_u8(v2, vqtbl1q_u8(v1, ctrl));                      \
            v3 = vaddq_u8(v3, vqtbl1q_u8(v2, ctrl));                      \
            carry = vqtbl1q_u8(v3, ctrl);                                \
            vst1q_u8(dst + i, v0);                                      \
            vst1q_u8(dst + i + 16, v1);                                 \
            vst1q_u8(dst + i + 32, v2);                                 \
            vst1q_u8(dst + i + 48, v3);                                 \
        }                                                                \
        for (; i + 16 <= count; i += 16) {                               \
            uint8x16_t v = vld1q_u8(src + i);                            \
            SUB_PREFIX(v, BPP)                                          \
            v = vaddq_u8(v, carry);                                      \
            carry = vqtbl1q_u8(v, ctrl);                                 \
            vst1q_u8(dst + i, v);                                       \
        }                                                                \
        for (; i < count; i++)                                          \
            dst[i] = (uint8_t)(src[i] + (i >= (BPP) ? dst[i - (BPP)] : 0));\
        return;                                                          \
    }

static void ptpng_filter_sub_neon(uint8_t *dst, const uint8_t *src,
                                 const uint8_t *prev, size_t count, unsigned bpp)
{
    switch (bpp) {
    case 1: SUB_BLOCKS(1, 15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15)
    case 2: SUB_BLOCKS(2, 14,15,14,15,14,15,14,15,14,15,14,15,14,15,14,15)
    case 3: SUB_BLOCKS(3, 13,14,15,13,14,15,13,14,15,13,14,15,13,14,15,13)
    case 4: SUB_BLOCKS(4, 12,13,14,15,12,13,14,15,12,13,14,15,12,13,14,15)
    case 6: SUB_BLOCKS(6, 10,11,12,13,14,15,10,11,12,13,14,15,10,11,12,13)
    case 8: SUB_BLOCKS(8, 8,9,10,11,12,13,14,15,8,9,10,11,12,13,14,15)
    default: ptpng_filter_sub_scalar(dst, src, prev, count, bpp);
    }
}

#undef SUB_BLOCKS
#undef SUB_PREFIX

/* Modulo reduction every 2048 bytes keeps the weighted sum below 2^31,
 * even for all-255 input. Accumulate four independent sums per vector. */
static uint32_t ptpng_adler32_neon(const uint8_t *p, size_t n)
{
    static const uint8_t weight_bytes[16] = {16, 15, 14, 13, 12, 11, 10, 9,
                                            8, 7, 6, 5, 4, 3, 2, 1};
    const uint8x8_t weight_lo = vld1_u8(weight_bytes);
    const uint8x8_t weight_hi = vld1_u8(weight_bytes + 8);
    uint32_t a = 1, b = 0;
    while (n >= 16) {
        unsigned chunk = n < 2048 ? (unsigned)n : 2048;
        uint32x4_t sums = vdupq_n_u32(0), weighted = vdupq_n_u32(0);
        unsigned i;
        chunk &= ~15u;
        for (i = 0; i < chunk; i += 16) {
            uint8x16_t bytes = vld1q_u8(p + i);
            uint16x8_t weights = vaddq_u16(
                vmull_u8(vget_low_u8(bytes), weight_lo),
                vmull_u8(vget_high_u8(bytes), weight_hi));
            weighted = vaddq_u32(weighted, vshlq_n_u32(sums, 4));
            weighted = vpadalq_u16(weighted, weights);
            sums = vpadalq_u16(sums, vpaddlq_u8(bytes));
        }
        b = (b + chunk * a + vaddvq_u32(weighted)) % 65521u;
        a = (a + vaddvq_u32(sums)) % 65521u;
        p += chunk;
        n -= chunk;
    }
    while (n--) {
        a += *p++;
        b += a;
    }
    return ((b % 65521u) << 16) | (a % 65521u);
}

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
    static const uint8_t dup_lo_bytes[16] = {
        0, 0, 0, 16, 2, 2, 2, 16, 4, 4, 4, 16, 6, 6, 6, 16 };
    static const uint8_t dup_hi_bytes[16] = {
        8, 8, 8, 16, 10, 10, 10, 16, 12, 12, 12, 16, 14, 14, 14, 16 };
    static const uint8_t alpha_bytes[16] = { 0, 0, 0, 255, 0, 0, 0, 255,
                                      0, 0, 0, 255, 0, 0, 0, 255 };
    const uint8x16_t dup_lo = vld1q_u8(dup_lo_bytes);
    const uint8x16_t dup_hi = vld1q_u8(dup_hi_bytes);
    const uint8x16_t alpha = vld1q_u8(alpha_bytes);
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
    static const uint8_t lo_bytes[16] = {
        0, 0, 0, 1, 2, 2, 2, 3, 4, 4, 4, 5, 6, 6, 6, 7 };
    static const uint8_t hi_bytes[16] = {
        8, 8, 8, 9, 10, 10, 10, 11, 12, 12, 12, 13, 14, 14, 14, 15 };
    const uint8x16_t lo = vld1q_u8(lo_bytes);
    const uint8x16_t hi = vld1q_u8(hi_bytes);
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
    static const uint8_t pick_bytes[16] = {
        0, 2, 4, 6, 8, 10, 12, 14, 0, 0, 0, 0, 0, 0, 0, 0 };
    const uint8x16_t pick = vld1q_u8(pick_bytes);
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
    ptpng_cpu.filter_sub = ptpng_filter_sub_neon;
    ptpng_cpu.adler32 = ptpng_adler32_neon;
    ptpng_cpu.filter_up = ptpng_filter_up_neon;
    ptpng_cpu.cvt_table_rgba8 = ptpng_cvt_table_rgba8_neon;
    ptpng_cpu.cvt_table_rgb8 = ptpng_cvt_table_rgb8_neon;
    ptpng_cvt_table_rgba8_neon[(0 << 4) | 3] = rgba8_g8_neon;
    ptpng_cvt_table_rgba8_neon[(4 << 4) | 3] = rgba8_ga8_neon;
    ptpng_cvt_table_rgba8_neon[(6 << 4) | 4] = rgba8_rgba16_neon;
}

#endif /* PTPNG_ARM_NEON */
