/*
 * IEEE CRC-32 folding adapted from zlib-ng 2.2.4
 * arch/x86/crc32_pclmulqdq_tpl.h and crc32_fold_pclmulqdq_tpl.h.
 * This altered version is a one-shot checksum with unaligned exact loads,
 * four folding chains, and a scalar tail. It has no zlib dependency.
 *
 * Copyright (C) 2013 Intel Corporation. All rights reserved.
 * Copyright (C) 2016 Marian Beermann (support for initial value)
 * Authors: Wajdi Feghali, Jim Guilford, Vinodh Gopal, Erdinc Ozturk,
 *          Jim Kukunas.
 * (C) 1995-2024 Jean-loup Gailly and Mark Adler
 *
 * This software is provided 'as-is', without any express or implied
 * warranty. In no event will the authors be held liable for any damages
 * arising from the use of this software.
 *
 * Permission is granted to anyone to use this software for any purpose,
 * including commercial applications, and to alter it and redistribute it
 * freely, subject to the following restrictions:
 *
 * 1. The origin of this software must not be misrepresented; you must not
 *    claim that you wrote the original software. If you use this software
 *    in a product, an acknowledgment in the product documentation would be
 *    appreciated but is not required.
 * 2. Altered source versions must be plainly marked as such, and must not be
 *    misrepresented as being the original software.
 * 3. This notice may not be removed or altered from any source distribution.
 */
#include "ptpng_internal.h"

#if PTPNG_X86
PTPNG_API_INLINE __m128i crc_fold(__m128i v, __m128i k)
{
    return _mm_xor_si128(_mm_clmulepi64_si128(v, k, 0x01),
                         _mm_clmulepi64_si128(v, k, 0x10));
}

static uint32_t crc32_pclmul(const uint8_t *p, size_t n)
{
    const __m128i k64 = _mm_set_epi32(1, 0x54442bd4, 1, (int)0xc6e41596u);
    const __m128i k16 = _mm_set_epi32(1, 0x751997d0, 0, (int)0xccaa009eu);
    const __m128i k_reduce = _mm_set_epi32(1, 0x63cd6124, 0, (int)0xccaa009eu);
    const __m128i k_barrett = _mm_set_epi32(1, (int)0xdb710640u,
                                          1, (int)0xf7011640u);
    static const uint32_t nibble[16] = {
        0x00000000u, 0x1db71064u, 0x3b6e20c8u, 0x26d930acu,
        0x76dc4190u, 0x6b6b51f4u, 0x4db26158u, 0x5005713cu,
        0xedb88320u, 0xf00f9344u, 0xd6d6a3e8u, 0xcb61b38cu,
        0x9b64c2b0u, 0x86d3d2d4u, 0xa00ae278u, 0xbdbdf21cu
    };
    __m128i x0, x1, x2, x3, t, u;
    uint32_t c;

    if (n < 64)
        return ptpng_crc32_slice8(p, n);

    /* This seed represents the initial all-ones CRC in the four-chain
     * folding domain. The final complement is applied after the tail. */
    x0 = crc_fold(_mm_cvtsi32_si128((int)0x9db42487u), k64);
    x0 = _mm_xor_si128(x0, _mm_loadu_si128((const __m128i *)p));
    x1 = _mm_loadu_si128((const __m128i *)(p + 16));
    x2 = _mm_loadu_si128((const __m128i *)(p + 32));
    x3 = _mm_loadu_si128((const __m128i *)(p + 48));
    p += 64;
    n -= 64;
    while (n >= 64) {
        x0 = _mm_xor_si128(crc_fold(x0, k64),
                           _mm_loadu_si128((const __m128i *)p));
        x1 = _mm_xor_si128(crc_fold(x1, k64),
                           _mm_loadu_si128((const __m128i *)(p + 16)));
        x2 = _mm_xor_si128(crc_fold(x2, k64),
                           _mm_loadu_si128((const __m128i *)(p + 32)));
        x3 = _mm_xor_si128(crc_fold(x3, k64),
                           _mm_loadu_si128((const __m128i *)(p + 48)));
        p += 64;
        n -= 64;
    }
    x1 = _mm_xor_si128(x1, crc_fold(x0, k16));
    x2 = _mm_xor_si128(x2, crc_fold(x1, k16));
    x3 = _mm_xor_si128(x3, crc_fold(x2, k16));
    while (n >= 16) {
        x3 = _mm_xor_si128(crc_fold(x3, k16),
                           _mm_loadu_si128((const __m128i *)p));
        p += 16;
        n -= 16;
    }

    /* Reduce the folded polynomial to an ordinary reflected CRC. */
    t = _mm_srli_si128(x3, 8);
    x3 = _mm_xor_si128(_mm_clmulepi64_si128(x3, k_reduce, 0), t);
    t = x3;
    x3 = _mm_clmulepi64_si128(_mm_slli_si128(x3, 4), k_reduce, 0x10);
    x3 = _mm_and_si128(_mm_xor_si128(x3, t), _mm_set_epi32(-1, -1, -1, 0));
    t = x3;
    x3 = _mm_xor_si128(_mm_clmulepi64_si128(x3, k_barrett, 0), x3);
    x3 = _mm_and_si128(x3, _mm_set_epi32(0, 0, -1, -1));
    u = x3;
    x3 = _mm_clmulepi64_si128(x3, k_barrett, 0x10);
    x3 = _mm_xor_si128(_mm_xor_si128(x3, u), t);
    c = (uint32_t)_mm_cvtsi128_si32(_mm_srli_si128(x3, 8));
    while (n--) {
        c ^= *p++;
        c = (c >> 4) ^ nibble[c & 15];
        c = (c >> 4) ^ nibble[c & 15];
    }
    return ~c;
}

void ptpng_crc_x86_init(void)
{
    if (ptpng_cpu.pclmul && ptpng_cpu.sse2)
        ptpng_cpu.crc32 = crc32_pclmul;
}
#endif
