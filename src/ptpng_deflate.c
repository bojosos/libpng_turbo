/* Fast, bounded-search DEFLATE encoder.  A single fixed-Huffman block
 * avoids tree construction; incompressible input uses stored blocks.
 * All compression state belongs to the call. */
#include "ptpng_internal.h"

static const uint16_t deflate_len_base[29] = {
    3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,
    115,131,163,195,227,258
};
static const uint8_t deflate_len_extra[29] = {
    0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0
};
static const uint8_t deflate_reverse4[16] = {
    0,8,4,12,2,10,6,14,1,9,5,13,3,11,7,15
};

typedef struct {
    uint8_t *dst;
    size_t pos, limit;
    uint64_t bits;
    unsigned count;
} deflate_writer;

PTPNG_API_INLINE unsigned deflate_reverse8(unsigned value)
{
    return ((unsigned)deflate_reverse4[value & 15] << 4) |
           deflate_reverse4[(value >> 4) & 15];
}

/* count is at most 31. The x64 writer keeps fewer than eight pending
 * bits; the portable writer keeps fewer than 32. */
PTPNG_API_INLINE int deflate_put(deflate_writer *w, uint32_t value,
                                 unsigned count)
{
    w->bits |= (uint64_t)value << w->count;
    w->count += count;
#if PTPNG_X64
    {
        unsigned bytes = w->count >> 3;
        /* An unaligned little-endian store commits all complete bytes at
         * once. Extra bytes stay inside the allocation and are overwritten
         * by later writes. Close to the limit, store only valid bytes. */
        if (w->limit - w->pos >= 8) {
            memcpy(w->dst + w->pos, &w->bits, sizeof(w->bits));
        } else {
            unsigned i;
            if (bytes > w->limit - w->pos) return 0;
            for (i = 0; i < bytes; ++i)
                w->dst[w->pos+i] = (uint8_t)(w->bits >> (8*i));
        }
        w->pos += bytes;
        w->bits >>= bytes*8;
        w->count &= 7;
    }
#else
    if (w->count >= 32) {
        uint32_t word = (uint32_t)w->bits;
        if (w->limit - w->pos < 4) return 0;
        w->dst[w->pos] = (uint8_t)word;
        w->dst[w->pos + 1] = (uint8_t)(word >> 8);
        w->dst[w->pos + 2] = (uint8_t)(word >> 16);
        w->dst[w->pos + 3] = (uint8_t)(word >> 24);
        w->pos += 4;
        w->bits >>= 32;
        w->count -= 32;
    }
#endif
    return 1;
}

PTPNG_API_INLINE uint32_t deflate_load32(const uint8_t *p)
{
    uint32_t value;
    memcpy(&value, p, sizeof(value));
    return value;
}

PTPNG_API_INLINE unsigned deflate_hash(const uint8_t *p, unsigned bits)
{
    return (deflate_load32(p) * UINT32_C(2654435761)) >> (32 - bits);
}

PTPNG_API_INLINE unsigned deflate_log2(unsigned value)
{
#if defined(_MSC_VER)
    unsigned long bit;
    _BitScanReverse(&bit, value);
    return (unsigned)bit;
#elif defined(__GNUC__) || defined(__clang__)
    return 31u - (unsigned)__builtin_clz(value);
#else
    unsigned bit = 0;
    while (value >>= 1) ++bit;
    return bit;
#endif
}

/* Pack the fixed distance symbol and its extra bits into one write. */
PTPNG_API_INLINE uint32_t deflate_distance(unsigned distance,
                                          unsigned *count)
{
    unsigned code, extra = 0, offset = 0;
    if (distance <= 4) {
        code = distance - 1;
    } else {
        unsigned top = deflate_log2(distance - 1);
        extra = top - 1;
        code = top * 2 + (((distance - 1) >> extra) & 1);
        offset = (distance - 1) & ((1u << extra) - 1);
    }
    *count = 5 + extra;
    return (deflate_reverse8(code) >> 3) | (offset << 5);
}

static void deflate_make_codes(uint16_t literals[256], uint32_t lengths[259])
{
    unsigned symbol, index;
    for (symbol = 0; symbol < 256; ++symbol) {
        unsigned code, bits;
        if (symbol < 144) {
            code = deflate_reverse8(symbol + 48);
            bits = 8;
        } else {
            unsigned forward = symbol + 256;
            code = (deflate_reverse8(forward) << 1) | (forward >> 8);
            bits = 9;
        }
        literals[symbol] = (uint16_t)(code | (bits << 9));
    }
    for (index = 0; index < 29; ++index) {
        unsigned bits, code, length;
        unsigned end = index == 28 ? 259 : deflate_len_base[index + 1];
        symbol = 257 + index;
        if (symbol < 280) {
            code = deflate_reverse8(symbol - 256) >> 1;
            bits = 7;
        } else {
            code = deflate_reverse8(symbol - 280 + 192);
            bits = 8;
        }
        for (length = deflate_len_base[index]; length < end; ++length) {
            lengths[length] = code |
                ((length - deflate_len_base[index]) << bits) |
                ((bits + deflate_len_extra[index]) << 16);
        }
    }
}

static int deflate_fixed(const uint8_t *src, size_t size,
                         deflate_writer *w, uint16_t *table,
                         unsigned hash_bits)
{
    uint16_t literals[256];
    uint32_t lengths[259];
    size_t pos = 0;
    unsigned misses = 0;
    deflate_make_codes(literals, lengths);
    if (!deflate_put(w, 3, 3)) return 0; /* BFINAL=1, BTYPE=01. */
    while (size - pos >= 4) {
        unsigned hash = deflate_hash(src + pos, hash_bits);
        unsigned distance = (uint16_t)((uint16_t)pos - table[hash]);
        size_t next;
        table[hash] = (uint16_t)pos;
        /* A 16-bit position keeps the table in 32 KiB. After a wrap or
         * for an empty slot, this may suggest a different recent position.
         * It is still a valid candidate: first bound it to existing history,
         * then compare every byte before emitting a match. */
        if (distance && distance <= 32768 && distance <= pos &&
            deflate_load32(src + pos - distance) == deflate_load32(src + pos)) {
            size_t ref = pos - distance;
            size_t limit = size - pos < 258 ? size - pos : 258;
            unsigned length = 4, distance_bits;
            uint32_t length_code, distance_code;
            while (limit - length >= 8) {
                uint64_t a, b;
                memcpy(&a, src + pos + length, sizeof(a));
                memcpy(&b, src + ref + length, sizeof(b));
                if (a != b) break;
                length += 8;
            }
            while (length < limit && src[pos + length] == src[ref + length])
                ++length;
            length_code = lengths[length];
            distance_code = deflate_distance(distance, &distance_bits);
            if (!deflate_put(w, (length_code & 65535u) |
                              (distance_code << (length_code >> 16)),
                              (length_code >> 16) + distance_bits)) return 0;
            pos += length;
            /* Keep the end of the match searchable without hashing all
             * of a long repeated run. Both loads stay inside the input. */
            if (size - pos >= 4) {
                table[deflate_hash(src + pos - 2, hash_bits)] = (uint16_t)(pos - 2);
                table[deflate_hash(src + pos - 1, hash_bits)] = (uint16_t)(pos - 1);
            }
            misses = 0;
            continue;
        }
        /* Reduce hash traffic on noise. Literals are still emitted exactly;
         * only the search is skipped, by at most 32 input bytes. */
        if (misses < 1984) ++misses;
        next = pos + (size - pos < 1 + (misses >> 6) ?
                      size - pos : 1 + (misses >> 6));
        do {
            uint16_t code = literals[src[pos++]];
            if (!deflate_put(w, code & 511u, code >> 9)) return 0;
        } while (pos < next);
    }
    while (pos < size) {
        uint16_t code = literals[src[pos++]];
        if (!deflate_put(w, code & 511u, code >> 9)) return 0;
    }
    if (!deflate_put(w, 0, 7)) return 0; /* Fixed end-of-block symbol. */
    while (w->count) {
        if (w->pos == w->limit) return 0;
        w->dst[w->pos++] = (uint8_t)w->bits;
        w->bits >>= 8;
        w->count = w->count > 8 ? w->count - 8 : 0;
    }
    return 1;
}

static size_t deflate_stored(const uint8_t *src, size_t size, uint8_t *dst)
{
    size_t pos = 2;
    do {
        unsigned length = size < 65535 ? (unsigned)size : 65535;
        dst[pos++] = (uint8_t)(size <= 65535); /* BTYPE=00, byte aligned. */
        dst[pos++] = (uint8_t)length;
        dst[pos++] = (uint8_t)(length >> 8);
        dst[pos++] = (uint8_t)~length;
        dst[pos++] = (uint8_t)(~length >> 8);
        if (length) {
            memcpy(dst + pos, src, length);
            src += length;
            pos += length;
            size -= length;
        }
    } while (size);
    return pos;
}

int ptpng_deflate(const uint8_t *src, size_t size, uint8_t **out,
                   size_t *out_len)
{
    size_t blocks, capacity;
    uint16_t *table = NULL;
    unsigned hash_bits = 8;
    uint32_t adler;
    uint8_t *dst;
    deflate_writer writer;
    *out = NULL;
    *out_len = 0;
    blocks = size / 65535 + (size % 65535 != 0);
    if (!blocks) blocks = 1;
    if (size > SIZE_MAX - 6 || blocks > (SIZE_MAX - size - 6) / 5)
        return PTPNG_E_TOO_LARGE;
    capacity = size + blocks * 5 + 6;
    dst = (uint8_t *)malloc(capacity);
    if (!dst) return PTPNG_E_OUT_OF_MEMORY;
    if (size >= 4) {
        while (hash_bits < 14 && ((size_t)1 << hash_bits) < size / 4)
            ++hash_bits;
        table = (uint16_t *)calloc((size_t)1 << hash_bits, sizeof(*table));
        if (!table) {
            free(dst);
            return PTPNG_E_OUT_OF_MEMORY;
        }
    }
    dst[0] = 0x78;
    dst[1] = 0x01; /* 32 KiB window, fastest compression, no dictionary. */
    writer.dst = dst;
    writer.pos = 2;
    writer.limit = capacity - 4;
    writer.bits = 0;
    writer.count = 0;
    if (!deflate_fixed(src, size, &writer, table, hash_bits))
        writer.pos = deflate_stored(src, size, dst);
    free(table);
    adler = ptpng_adler32(src, size);
    dst[writer.pos++] = (uint8_t)(adler >> 24);
    dst[writer.pos++] = (uint8_t)(adler >> 16);
    dst[writer.pos++] = (uint8_t)(adler >> 8);
    dst[writer.pos++] = (uint8_t)adler;
    *out = dst;
    *out_len = writer.pos;
    return PTPNG_OK;
}
