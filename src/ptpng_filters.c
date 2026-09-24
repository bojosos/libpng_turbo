/*
 * ptpng_filters.c - PNG reconstruction filters.
 *
 * Contract: dst receives the reconstructed (and compacted) row read from
 * the filtered bytes at src; prev is the previous reconstructed row.
 *
 * none : plain memmove by the caller.
 * sub  : additive prefix recurrence, mod 256.  Copy src->dst then
 *        log-distance doubling (each step pure; descending order).
 *        bpp==1 uses blocked in-register doubling with byte carries.
 * up   : wide vector add of src + prev straight into dst.
 * avg / paeth : the left-neighbor dependency is nonlinear, so scalar
 *        code specialized per bpp carries the bpp interleaved
 *        recurrences in named locals (register chains; no store->load
 *        forwarding on the critical path) with a fully branchless
 *        predictor (setcc + cmov).  Both are single pass over src/prev.
 */
#include "ptpng_internal.h"



/* ---------------- scalar ---------------- */

/* branchless predictor: abs via cmov, selects via single-condition
 * ternaries (cmov), no short-circuit && to keep MSVC from branching */
PTPNG_API_INLINE int paeth_pred(int a, int b, int c)
{
    int p = a + b - c;
    int pa_ = p - a, pb_ = p - b, pc_ = p - c;
    unsigned pa = (unsigned)(pa_ < 0 ? -pa_ : pa_);
    unsigned pb = (unsigned)(pb_ < 0 ? -pb_ : pb_);
    unsigned pc = (unsigned)(pc_ < 0 ? -pc_ : pc_);
    int bc = (pb <= pc) ? b : c;       /* winner of b vs c */
    int is_a = (pa <= pb) & (pa <= pc); /* 1 if a wins both */
    return is_a ? a : bc;
}

/* non-inline export for the exhaustive unit test */
int ptpng_paeth_pred_ext(int a, int b, int c) { return paeth_pred(a, b, c); }

/* ---- sub ---- */

/* blocked prefix-sum for bpp >= 2: each 64-byte group gets an
 * in-register log-doubling, then a linear cross-register carry chain of
 * the last pixel, then the incoming carry pixel.  One pass over the
 * row, O(n) total.
 * In-register reach required (worst byte span): bpp 2 -> 14, 3 -> 15,
 * 4 -> 12, 6 -> 12, 8 -> 8; steps below reach those spans. */
#if PTPNG_X64
static void sub_chains(uint8_t *dst, size_t count, unsigned bpp);

#define SUB_BLOCK_BODY(BPP, BROADCAST, STEPS)                              \
    {                                                                      \
        size_t i = 0;                                                      \
        __m128i carry = _mm_setzero_si128();                               \
        for (; i + 64 <= count; i += 64) {                                 \
            __m128i v0 = _mm_loadu_si128((const __m128i *)(dst + i));      \
            __m128i v1 = _mm_loadu_si128((const __m128i *)(dst + i + 16)); \
            __m128i v2 = _mm_loadu_si128((const __m128i *)(dst + i + 32)); \
            __m128i v3 = _mm_loadu_si128((const __m128i *)(dst + i + 48)); \
            STEPS(v0, BPP)                                                 \
            STEPS(v0, BPP * 2)                                             \
            STEPS(v0, BPP * 4)                                             \
            STEPS(v1, BPP)                                                 \
            STEPS(v1, BPP * 2)                                             \
            STEPS(v1, BPP * 4)                                             \
            STEPS(v2, BPP)                                                 \
            STEPS(v2, BPP * 2)                                             \
            STEPS(v2, BPP * 4)                                             \
            STEPS(v3, BPP)                                                 \
            STEPS(v3, BPP * 2)                                             \
            STEPS(v3, BPP * 4)                                             \
            v0 = _mm_add_epi8(v0, carry);                                  \
            v1 = _mm_add_epi8(v1, BROADCAST(v0));                           \
            v2 = _mm_add_epi8(v2, BROADCAST(v1));                           \
            v3 = _mm_add_epi8(v3, BROADCAST(v2));                           \
            carry = BROADCAST(v3);                                        \
            _mm_storeu_si128((__m128i *)(dst + i), v0);                    \
            _mm_storeu_si128((__m128i *)(dst + i + 16), v1);               \
            _mm_storeu_si128((__m128i *)(dst + i + 32), v2);               \
            _mm_storeu_si128((__m128i *)(dst + i + 48), v3);               \
        }                                                                  \
        {                                                                  \
            unsigned char last[16];                                        \
            unsigned s;                                                    \
            _mm_storeu_si128((__m128i *)last, carry);                      \
            for (; i < count; i++) {                                       \
                s = (unsigned)(i % (BPP));                                 \
                dst[i] = (uint8_t)(dst[i] + last[s]);                      \
                last[s] = dst[i];                                          \
            }                                                              \
        }                                                                  \
    }

/* steps whose shift >= 16 (register width) compile away */
#define SUB_STEP_ALL(v, sh)                                                \
    v = _mm_add_epi8(v, _mm_slli_si128(v, (int)(sh)));
#define SUB_STEP_2(v, sh)                                                  \
    if (sh >= 16) {                                                        \
    } else SUB_STEP_ALL(v, sh)

#define SUB_CARRY_2(v) _mm_shuffle_epi32(                                 \
    _mm_shufflehi_epi16((v), _MM_SHUFFLE(3, 3, 3, 3)),                    \
    _MM_SHUFFLE(3, 3, 3, 3))
#define SUB_CARRY_4(v) _mm_shuffle_epi32((v), _MM_SHUFFLE(3, 3, 3, 3))
#define SUB_CARRY_8(v) _mm_unpackhi_epi64((v), (v))

void ptpng_sub_blocked_sse2(uint8_t *dst, size_t count, unsigned bpp)
{
    /* the pixel-carry scheme is valid only when 16 % bpp == 0 (the
     * register ends on a pixel boundary); bpp 3 and 6 use scalar
     * register chains (sub chains are a single add, so they are as
     * fast as the vector path). */
    switch (bpp) {
    case 2:
        SUB_BLOCK_BODY(2, SUB_CARRY_2, SUB_STEP_2)
        break;
    case 4: /* reach 12 -> steps 4,8 */
        SUB_BLOCK_BODY(4, SUB_CARRY_4, SUB_STEP_2)
        break;
    case 8: /* reach 8 -> step 8 */
        SUB_BLOCK_BODY(8, SUB_CARRY_8, SUB_STEP_2)
        break;
    case 3:
    case 6:
    default:
        sub_chains(dst, count, bpp);
        break;
    }
}

/* scalar register chains: r_k = src + r_k per stream; named locals keep
 * the chains in registers (no modulo, no spills) */
static void sub_chains(uint8_t *dst, size_t count, unsigned bpp)
{
    switch (bpp) {
    case 2: {
        unsigned r0, r1;
        const uint8_t *s = dst, *pend;
        uint8_t *d = dst;
        if (count < 2)
            break;
        r0 = d[0]; r1 = d[1];
        s += 2; d += 2;
        pend = dst + (count & ~(size_t)1);
        for (; s < pend; s += 2, d += 2) {
            r0 = (uint8_t)(s[0] + r0); d[0] = (uint8_t)r0;
            r1 = (uint8_t)(s[1] + r1); d[1] = (uint8_t)r1;
        }
        if (count & 1)
            d[0] = (uint8_t)(s[0] + r0);
        return;
    }
    case 3: {
        unsigned r0, r1, r2;
        const uint8_t *s = dst, *pend;
        uint8_t *d = dst;
        if (count < 3)
            break;
        r0 = d[0]; r1 = d[1]; r2 = d[2];
        s += 3; d += 3;
        pend = dst + (count - count % 3);
        for (; s < pend; s += 3, d += 3) {
            r0 = (uint8_t)(s[0] + r0); d[0] = (uint8_t)r0;
            r1 = (uint8_t)(s[1] + r1); d[1] = (uint8_t)r1;
            r2 = (uint8_t)(s[2] + r2); d[2] = (uint8_t)r2;
        }
        switch (count % 3) {
        case 2: d[1] = (uint8_t)(s[1] + r1); /* fallthrough */
        case 1: d[0] = (uint8_t)(s[0] + r0);
        }
        return;
    }
    case 6: {
        unsigned r0, r1, r2, r3, r4, r5;
        const uint8_t *s = dst, *pend;
        uint8_t *d = dst;
        if (count < 6)
            break;
        r0 = d[0]; r1 = d[1]; r2 = d[2]; r3 = d[3]; r4 = d[4]; r5 = d[5];
        s += 6; d += 6;
        pend = dst + (count - count % 6);
        for (; s < pend; s += 6, d += 6) {
            r0 = (uint8_t)(s[0] + r0); d[0] = (uint8_t)r0;
            r1 = (uint8_t)(s[1] + r1); d[1] = (uint8_t)r1;
            r2 = (uint8_t)(s[2] + r2); d[2] = (uint8_t)r2;
            r3 = (uint8_t)(s[3] + r3); d[3] = (uint8_t)r3;
            r4 = (uint8_t)(s[4] + r4); d[4] = (uint8_t)r4;
            r5 = (uint8_t)(s[5] + r5); d[5] = (uint8_t)r5;
        }
        {
            unsigned tail = (unsigned)(count % 6);
            unsigned k;
            unsigned rr[6];
            rr[0] = r0; rr[1] = r1; rr[2] = r2; rr[3] = r3; rr[4] = r4;
            rr[5] = r5;
            for (k = 0; k < tail; k++)
                d[k] = (uint8_t)(s[k] + rr[k]);
        }
        return;
    }
    }
    /* generic fallback */
    {
        unsigned char last[8];
        unsigned s;
        size_t i;
        memset(last, 0, sizeof(last));
        for (i = 0; i < bpp && i < count; i++) {
            s = (unsigned)(i % bpp);
            dst[i] = (uint8_t)(dst[i] + last[s]);
            last[s] = dst[i];
        }
        for (; i < count; i++) {
            s = (unsigned)(i % bpp);
            dst[i] = (uint8_t)(dst[i] + last[s]);
            last[s] = dst[i];
        }
    }
}
#endif /* PTPNG_X64 */

static void sub_doubling(uint8_t *dst, size_t count, unsigned bpp)
{
#if PTPNG_X64
    if (bpp >= 2) {
        ptpng_sub_blocked_sse2(dst, count, bpp);
        return;
    }
    {
        size_t d;
        for (d = bpp; d < count; d <<= 1) {
            size_t t = count;
            size_t align = count & ~(size_t)15;
            while (t > align && t > d) {
                t--;
                dst[t] = (uint8_t)(dst[t] + dst[t - d]);
            }
            while (t >= 16 + d) {
                __m128i v = _mm_loadu_si128((const __m128i *)(dst + t - 16));
                __m128i s = _mm_loadu_si128((const __m128i *)(dst + t - 16 - d));
                _mm_storeu_si128((__m128i *)(dst + t - 16),
                                 _mm_add_epi8(v, s)); /* byte-wise: no carries */
                t -= 16;
            }
            while (t > d) {
                t--;
                dst[t] = (uint8_t)(dst[t] + dst[t - d]);
            }
        }
    }
#else
    /* A scalar doubling block must not consume bytes updated in the same
     * pass. Use the direct recurrence, which is linear and in-place safe. */
    size_t i;
    for (i = bpp; i < count; i++)
        dst[i] = (uint8_t)(dst[i] + dst[i - bpp]);
#endif
}

void ptpng_filter_sub_scalar(uint8_t *dst, const uint8_t *src,
                             const uint8_t *prev, size_t count, unsigned bpp)
{
    (void)prev;
    memmove(dst, src, count);
    sub_doubling(dst, count, bpp);
}

/* ---- up ---- */

void ptpng_filter_up_scalar(uint8_t *dst, const uint8_t *src,
                            const uint8_t *prev, size_t count, unsigned bpp)
{
    size_t i;
    (void)bpp;
    for (i = 0; i < count; i++)
        dst[i] = (uint8_t)(src[i] + prev[i]);
}

/* ---- avg / paeth register chains ---- */

#define AVG_STEP(R, SRCB, B, C)                                            \
    R = (uint8_t)((SRCB) + ((((int)(R) + (int)(B)) >> 1) & 0xFF))
#define PAETH_STEP(R, SRCB, B, C)                                          \
    R = (uint8_t)((SRCB) + paeth_pred((int)(R), (int)(B), (int)(C)))

#define AVG_PRO(N)                                                         \
    r##N = (uint8_t)(src[N] + (prev[N] >> 1)); dst[N] = (uint8_t)r##N;
#define PAETH_PRO(N)                                                       \
    r##N = (uint8_t)(src[N] + prev[N]); dst[N] = (uint8_t)r##N;
#define AVG_BODY(N)                                                        \
    r##N = (uint8_t)(s[N] + ((((int)r##N + (int)p[N]) >> 1) & 0xFF));      \
    d[N] = (uint8_t)r##N;
#define PAETH_BODY(N)                                                      \
    r##N = (uint8_t)(s[N] + paeth_pred((int)r##N, (int)p[N], (int)p[N - BPP])); \
    d[N] = (uint8_t)r##N;
#define GEN_AVG2                                                            \
static void avg_chain_2(uint8_t *dst, const uint8_t *src,                   \
                        const uint8_t *prev, size_t count)                  \
{                                                                           \
    unsigned r0, r1;                                                        \
    const uint8_t *p, *s, *pend;                                            \
    uint8_t *d;                                                             \
    size_t i;                                                               \
    if (count < 2) {                                                        \
        for (pend = prev + count; prev != pend; prev++, src++, dst++)       \
            *dst = (uint8_t)(*src + (*prev >> 1));                          \
        return;                                                             \
    }                                                                       \
    AVG_PRO(0) AVG_PRO(1)                                                   \
    p = prev + 2; s = src + 2; d = dst + 2;                                 \
    pend = prev + (count & ~(size_t)1);                                     \
    for (; p < pend; p += 2, s += 2, d += 2) {                              \
        AVG_STEP(r0, s[0], p[0], p[-2]); d[0] = (uint8_t)r0;                \
        AVG_STEP(r1, s[1], p[1], p[-1]); d[1] = (uint8_t)r1;                \
    }                                                                       \
    i = (size_t)(p - prev);                                                 \
    for (; i < count; i++)                                                  \
        dst[i] = (uint8_t)(src[i] + (((int)dst[i - 2] + (int)prev[i]) >> 1));\
}
#define GEN_AVG3                                                            \
static void avg_chain_3(uint8_t *dst, const uint8_t *src,                   \
                        const uint8_t *prev, size_t count)                  \
{                                                                           \
    unsigned r0, r1, r2;                                                    \
    const uint8_t *p, *s, *pend;                                            \
    uint8_t *d;                                                             \
    size_t i;                                                               \
    if (count < 3) {                                                        \
        for (pend = prev + count; prev != pend; prev++, src++, dst++)       \
            *dst = (uint8_t)(*src + (*prev >> 1));                          \
        return;                                                             \
    }                                                                       \
    AVG_PRO(0) AVG_PRO(1) AVG_PRO(2)                                        \
    p = prev + 3; s = src + 3; d = dst + 3;                                 \
    pend = prev + (count - count % 3);                                      \
    for (; p < pend; p += 3, s += 3, d += 3) {                              \
        AVG_STEP(r0, s[0], p[0], p[-3]); d[0] = (uint8_t)r0;                \
        AVG_STEP(r1, s[1], p[1], p[-2]); d[1] = (uint8_t)r1;                \
        AVG_STEP(r2, s[2], p[2], p[-1]); d[2] = (uint8_t)r2;                \
    }                                                                       \
    i = (size_t)(p - prev);                                                 \
    for (; i < count; i++)                                                  \
        dst[i] = (uint8_t)(src[i] + (((int)dst[i - 3] + (int)prev[i]) >> 1));\
}
#define GEN_AVG4                                                            \
static void avg_chain_4(uint8_t *dst, const uint8_t *src,                   \
                        const uint8_t *prev, size_t count)                  \
{                                                                           \
    unsigned r0, r1, r2, r3;                                                \
    const uint8_t *p, *s, *pend;                                            \
    uint8_t *d;                                                             \
    size_t i;                                                               \
    if (count < 4) {                                                        \
        for (pend = prev + count; prev != pend; prev++, src++, dst++)       \
            *dst = (uint8_t)(*src + (*prev >> 1));                          \
        return;                                                             \
    }                                                                       \
    AVG_PRO(0) AVG_PRO(1) AVG_PRO(2) AVG_PRO(3)                             \
    p = prev + 4; s = src + 4; d = dst + 4;                                 \
    pend = prev + (count & ~(size_t)3);                                     \
    for (; p < pend; p += 4, s += 4, d += 4) {                              \
        AVG_STEP(r0, s[0], p[0], p[-4]); d[0] = (uint8_t)r0;                \
        AVG_STEP(r1, s[1], p[1], p[-3]); d[1] = (uint8_t)r1;                \
        AVG_STEP(r2, s[2], p[2], p[-2]); d[2] = (uint8_t)r2;                \
        AVG_STEP(r3, s[3], p[3], p[-1]); d[3] = (uint8_t)r3;                \
    }                                                                       \
    i = (size_t)(p - prev);                                                 \
    for (; i < count; i++)                                                  \
        dst[i] = (uint8_t)(src[i] + (((int)dst[i - 4] + (int)prev[i]) >> 1));\
}

#define GEN_PAETH2                                                          \
static void paeth_chain_2(uint8_t *dst, const uint8_t *src,                 \
                          const uint8_t *prev, size_t count)                \
{                                                                           \
    unsigned r0, r1;                                                        \
    const uint8_t *p, *s, *pend;                                            \
    uint8_t *d;                                                             \
    size_t i;                                                               \
    if (count < 2) {                                                        \
        for (pend = prev + count; prev != pend; prev++, src++, dst++)       \
            *dst = (uint8_t)(*src + *prev);                                 \
        return;                                                             \
    }                                                                       \
    PAETH_PRO(0) PAETH_PRO(1)                                               \
    p = prev + 2; s = src + 2; d = dst + 2;                                 \
    pend = prev + (count & ~(size_t)1);                                     \
    for (; p < pend; p += 2, s += 2, d += 2) {                              \
        PAETH_STEP(r0, s[0], p[0], p[-2]); d[0] = (uint8_t)r0;              \
        PAETH_STEP(r1, s[1], p[1], p[-1]); d[1] = (uint8_t)r1;              \
    }                                                                       \
    i = (size_t)(p - prev);                                                 \
    for (; i < count; i++) {                                                \
        int a = dst[i - 2], b = prev[i], c = prev[i - 2];                   \
        dst[i] = (uint8_t)(src[i] + paeth_pred(a, b, c));                   \
    }                                                                       \
}
#define GEN_PAETH3                                                          \
static void paeth_chain_3(uint8_t *dst, const uint8_t *src,                 \
                          const uint8_t *prev, size_t count)                \
{                                                                           \
    unsigned r0, r1, r2;                                                    \
    const uint8_t *p, *s, *pend;                                            \
    uint8_t *d;                                                             \
    size_t i;                                                               \
    if (count < 3) {                                                        \
        for (pend = prev + count; prev != pend; prev++, src++, dst++)       \
            *dst = (uint8_t)(*src + *prev);                                 \
        return;                                                             \
    }                                                                       \
    PAETH_PRO(0) PAETH_PRO(1) PAETH_PRO(2)                                  \
    p = prev + 3; s = src + 3; d = dst + 3;                                 \
    pend = prev + (count - count % 3);                                      \
    for (; p < pend; p += 3, s += 3, d += 3) {                              \
        PAETH_STEP(r0, s[0], p[0], p[-3]); d[0] = (uint8_t)r0;              \
        PAETH_STEP(r1, s[1], p[1], p[-2]); d[1] = (uint8_t)r1;              \
        PAETH_STEP(r2, s[2], p[2], p[-1]); d[2] = (uint8_t)r2;              \
    }                                                                       \
    i = (size_t)(p - prev);                                                 \
    for (; i < count; i++) {                                                \
        int a = dst[i - 3], b = prev[i], c = prev[i - 3];                   \
        dst[i] = (uint8_t)(src[i] + paeth_pred(a, b, c));                   \
    }                                                                       \
}
#define GEN_PAETH4                                                          \
static void paeth_chain_4(uint8_t *dst, const uint8_t *src,                 \
                          const uint8_t *prev, size_t count)                \
{                                                                           \
    unsigned r0, r1, r2, r3;                                                \
    const uint8_t *p, *s, *pend;                                            \
    uint8_t *d;                                                             \
    size_t i;                                                               \
    if (count < 4) {                                                        \
        for (pend = prev + count; prev != pend; prev++, src++, dst++)       \
            *dst = (uint8_t)(*src + *prev);                                 \
        return;                                                             \
    }                                                                       \
    PAETH_PRO(0) PAETH_PRO(1) PAETH_PRO(2) PAETH_PRO(3)                     \
    p = prev + 4; s = src + 4; d = dst + 4;                                 \
    pend = prev + (count & ~(size_t)3);                                     \
    for (; p < pend; p += 4, s += 4, d += 4) {                              \
        PAETH_STEP(r0, s[0], p[0], p[-4]); d[0] = (uint8_t)r0;              \
        PAETH_STEP(r1, s[1], p[1], p[-3]); d[1] = (uint8_t)r1;              \
        PAETH_STEP(r2, s[2], p[2], p[-2]); d[2] = (uint8_t)r2;              \
        PAETH_STEP(r3, s[3], p[3], p[-1]); d[3] = (uint8_t)r3;              \
    }                                                                       \
    i = (size_t)(p - prev);                                                 \
    for (; i < count; i++) {                                                \
        int a = dst[i - 4], b = prev[i], c = prev[i - 4];                   \
        dst[i] = (uint8_t)(src[i] + paeth_pred(a, b, c));                   \
    }                                                                       \
}

/* bpp 1, 6, 8: memory-based recurrences (bpp 1 is a single chain;
 * 6/8 spill regardless) */
#define GEN_MEM(PFX, BPP, PRO0, PRED)                                       \
static void PFX##_mem_##BPP(uint8_t *dst, const uint8_t *src,               \
                            const uint8_t *prev, size_t count)              \
{                                                                           \
    size_t i;                                                               \
    for (i = 0; i < (BPP) && i < count; i++)                                \
        dst[i] = (uint8_t)(src[i] + PRO0);                                  \
    for (; i < count; i++) {                                                \
        int a = dst[i - (BPP)], b = prev[i], c = prev[i - (BPP)];           \
        dst[i] = (uint8_t)(src[i] + PRED);                                  \
    }                                                                       \
}

GEN_AVG2
GEN_AVG3
GEN_AVG4
GEN_PAETH2
GEN_PAETH3
GEN_PAETH4
GEN_MEM(avg, 1, (prev[i] >> 1), ((a + b) >> 1))
GEN_MEM(avg, 6, (prev[i] >> 1), ((a + b) >> 1))
GEN_MEM(avg, 8, (prev[i] >> 1), ((a + b) >> 1))
GEN_MEM(paeth, 1, prev[i], paeth_pred(a, b, c))
GEN_MEM(paeth, 6, prev[i], paeth_pred(a, b, c))
GEN_MEM(paeth, 8, prev[i], paeth_pred(a, b, c))

void ptpng_filter_avg_scalar(uint8_t *dst, const uint8_t *src,
                             const uint8_t *prev, size_t count, unsigned bpp)
{
    switch (bpp) {
    case 1: avg_mem_1(dst, src, prev, count); return;
    case 2: avg_chain_2(dst, src, prev, count); return;
    case 3: avg_chain_3(dst, src, prev, count); return;
    case 4: avg_chain_4(dst, src, prev, count); return;
    case 6: avg_mem_6(dst, src, prev, count); return;
    case 8: avg_mem_8(dst, src, prev, count); return;
    }
}

void ptpng_filter_paeth_scalar(uint8_t *dst, const uint8_t *src,
                               const uint8_t *prev, size_t count,
                               unsigned bpp)
{
    switch (bpp) {
    case 1: paeth_mem_1(dst, src, prev, count); return;
    case 2: paeth_chain_2(dst, src, prev, count); return;
    case 3: paeth_chain_3(dst, src, prev, count); return;
    case 4: paeth_chain_4(dst, src, prev, count); return;
    case 6: paeth_mem_6(dst, src, prev, count); return;
    case 8: paeth_mem_8(dst, src, prev, count); return;
    }
}

/* ---------------- SSE2 ---------------- */
#if PTPNG_X64

PTPNG_API_INLINE __m128i bcast_byte_sse2(__m128i v)
{
    unsigned b = ((unsigned)(uint16_t)_mm_extract_epi16(v, 7)) >> 8;
    return _mm_set1_epi8((char)b);
}

void ptpng_filter_sub_sse2(uint8_t *dst, const uint8_t *src,
                           const uint8_t *prev, size_t count, unsigned bpp)
{
    (void)prev;
    memmove(dst, src, count);
    if (bpp == 1) {
        size_t i = 0;
        uint8_t carry = 0;
        for (; i + 64 <= count; i += 64) {
            __m128i v0 = _mm_loadu_si128((const __m128i *)(dst + i));
            __m128i v1 = _mm_loadu_si128((const __m128i *)(dst + i + 16));
            __m128i v2 = _mm_loadu_si128((const __m128i *)(dst + i + 32));
            __m128i v3 = _mm_loadu_si128((const __m128i *)(dst + i + 48));
#define PREFIX16(v)                                                     \
            (v) = _mm_add_epi8((v), _mm_slli_si128((v), 1));            \
            (v) = _mm_add_epi8((v), _mm_slli_si128((v), 2));            \
            (v) = _mm_add_epi8((v), _mm_slli_si128((v), 4));            \
            (v) = _mm_add_epi8((v), _mm_slli_si128((v), 8));
            PREFIX16(v0)
            PREFIX16(v1)
            PREFIX16(v2)
            PREFIX16(v3)
#undef PREFIX16
            {
                __m128i c = _mm_set1_epi8((char)carry);
                v0 = _mm_add_epi8(v0, c);
                v1 = _mm_add_epi8(v1, bcast_byte_sse2(v0));
                v2 = _mm_add_epi8(v2, bcast_byte_sse2(v1));
                v3 = _mm_add_epi8(v3, bcast_byte_sse2(v2));
                carry = (uint8_t)(((unsigned)(uint16_t)_mm_extract_epi16(v3, 7)) >> 8);
            }
            _mm_storeu_si128((__m128i *)(dst + i), v0);
            _mm_storeu_si128((__m128i *)(dst + i + 16), v1);
            _mm_storeu_si128((__m128i *)(dst + i + 32), v2);
            _mm_storeu_si128((__m128i *)(dst + i + 48), v3);
        }
        for (; i < count; i++) {
            dst[i] = (uint8_t)(dst[i] + carry);
            carry = dst[i];
        }
        return;
    }
    sub_doubling(dst, count, bpp);
}

void ptpng_filter_up_sse2(uint8_t *dst, const uint8_t *src,
                          const uint8_t *prev, size_t count, unsigned bpp)
{
    size_t i = 0;
    (void)bpp;
    for (; i + 64 <= count; i += 64) {
        __m128i a0 = _mm_loadu_si128((const __m128i *)(src + i));
        __m128i a1 = _mm_loadu_si128((const __m128i *)(src + i + 16));
        __m128i a2 = _mm_loadu_si128((const __m128i *)(src + i + 32));
        __m128i a3 = _mm_loadu_si128((const __m128i *)(src + i + 48));
        __m128i b0 = _mm_loadu_si128((const __m128i *)(prev + i));
        __m128i b1 = _mm_loadu_si128((const __m128i *)(prev + i + 16));
        __m128i b2 = _mm_loadu_si128((const __m128i *)(prev + i + 32));
        __m128i b3 = _mm_loadu_si128((const __m128i *)(prev + i + 48));
        _mm_storeu_si128((__m128i *)(dst + i),      _mm_add_epi8(a0, b0));
        _mm_storeu_si128((__m128i *)(dst + i + 16), _mm_add_epi8(a1, b1));
        _mm_storeu_si128((__m128i *)(dst + i + 32), _mm_add_epi8(a2, b2));
        _mm_storeu_si128((__m128i *)(dst + i + 48), _mm_add_epi8(a3, b3));
    }
    for (; i + 16 <= count; i += 16) {
        __m128i a = _mm_loadu_si128((const __m128i *)(src + i));
        __m128i b = _mm_loadu_si128((const __m128i *)(prev + i));
        _mm_storeu_si128((__m128i *)(dst + i), _mm_add_epi8(a, b));
    }
    for (; i < count; i++)
        dst[i] = (uint8_t)(src[i] + prev[i]);
}

#endif /* PTPNG_X64 */
