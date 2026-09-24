/* Fast PNG writing. The format and filters follow W3C PNG, sections 5/9/10. */
#include "ptpng_internal.h"

static unsigned paeth(unsigned a, unsigned b, unsigned c)
{
    int p = (int)a + (int)b - (int)c;
    int da = abs(p - (int)a), db = abs(p - (int)b), dc = abs(p - (int)c);
    return da <= db && da <= dc ? a : db <= dc ? b : c;
}

void ptpng_encode_filter_scalar(uint8_t *dst, const uint8_t *src,
    const uint8_t *prev, size_t count, unsigned bpp, int filter)
{
    size_t i;
    for (i = 0; i < count; ++i) {
        unsigned a = i >= bpp ? src[i-bpp] : 0;
        unsigned b = prev ? prev[i] : 0;
        unsigned c = prev && i >= bpp ? prev[i-bpp] : 0;
        unsigned predictor = filter == 1 ? a : filter == 2 ? b :
            filter == 3 ? (a+b)/2 : filter == 4 ? paeth(a,b,c) : 0;
        dst[i] = (uint8_t)(src[i] - predictor);
    }
}

static unsigned cost(unsigned x)
{
    x &= 255;
    return x < 128 ? x : 256-x;
}

/* Score at most 192 bytes spread across each row, then run only the
 * selected full-row filter. Sampling trades some compression for speed. */
static int choose_filter(const uint8_t *src, const uint8_t *prev,
                         size_t count, unsigned bpp)
{
    unsigned scores[5] = {0,0,0,0,0};
    size_t ranges = count <= 192 ? 1 : 3;
    size_t length = count <= 192 ? count : 64;
    size_t r, j;
    int best = 0, f;
    for (r = 0; r < ranges; ++r) {
        size_t start = r == 0 ? 0 : r == 1 ? (count-64)/2 : count-64;
        for (j = start; j < start + length; ++j) {
            unsigned x = src[j], a = j >= bpp ? src[j-bpp] : 0;
            unsigned b = prev ? prev[j] : 0;
            unsigned c = prev && j >= bpp ? prev[j-bpp] : 0;
            scores[0] += cost(x);
            scores[1] += cost(x-a);
            scores[2] += cost(x-b);
            scores[3] += cost(x-(a+b)/2);
            scores[4] += cost(x-paeth(a,b,c));
        }
    }
    for (f = 1; f < 5; ++f)
        if (scores[f] < scores[best]) best = f;
    return best;
}

static void put32(uint8_t *p, uint32_t n)
{
    p[0] = (uint8_t)(n >> 24); p[1] = (uint8_t)(n >> 16);
    p[2] = (uint8_t)(n >> 8); p[3] = (uint8_t)n;
}

static uint8_t *chunk(uint8_t *dst, const char *type,
                       const uint8_t *data, size_t size)
{
    put32(dst, (uint32_t)size);
    memcpy(dst+4, type, 4);
    if (size) memcpy(dst+8, data, size);
    put32(dst+8+size, ptpng_crc32(dst+4, size+4));
    return dst+size+12;
}

int ptpng_encode(const void *pixels, size_t pixels_size,
                 uint32_t width, uint32_t height, size_t stride,
                 int color_type, int bit_depth, const ptpng_encode_opts *opts,
                 void **out, size_t *out_len)
{
    static const uint8_t signature[8] = {137,80,78,71,13,10,26,10};
    const size_t chunk_size = 1u << 20;
    const uint8_t *src = (const uint8_t *)pixels, *prev = NULL;
    uint8_t *raw, *compressed = NULL, *png, *p, header[13] = {0};
    size_t rowbytes, raw_size, compressed_size = 0, total, nchunks, offset;
    unsigned channels, bpp;
    uint32_t y;
    int rc, filter = opts ? opts->filter : PTPNG_ENCODE_FILTER_ADAPTIVE;
    ptpng_encode_filter_fn forward = ptpng_encode_filter_scalar;
    if (out) *out = NULL;
    if (out_len) *out_len = 0;
    if (!out || !out_len || !pixels || !width || !height ||
        width > 0x7fffffffu || height > 0x7fffffffu || filter < -1 || filter > 4)
        return PTPNG_E_BAD_ARG;
    if ((bit_depth != 8 && bit_depth != 16) ||
        (color_type != 0 && color_type != 2 && color_type != 4 && color_type != 6))
        return PTPNG_E_COLOR_DEPTH;
    channels = color_type == 0 ? 1 : color_type == 2 ? 3 : color_type == 4 ? 2 : 4;
    bpp = channels * (unsigned)(bit_depth/8);
    if ((size_t)width > (SIZE_MAX-1)/bpp) return PTPNG_E_TOO_LARGE;
    rowbytes = (size_t)width*bpp;
    if (!stride) stride = rowbytes;
    if (stride < rowbytes) return PTPNG_E_BAD_ARG;
    if ((size_t)(height-1) > (SIZE_MAX-rowbytes)/stride)
        return PTPNG_E_TOO_LARGE;
    if ((size_t)(height-1)*stride + rowbytes > pixels_size)
        return PTPNG_E_BAD_ARG;
    if (height > SIZE_MAX/(rowbytes+1) ||
        height > PTPNG_DEFAULT_MAX_BYTES/(rowbytes+1))
        return PTPNG_E_TOO_LARGE;
    raw_size = (rowbytes+1)*height;
    raw = (uint8_t *)malloc(raw_size);
    if (!raw) return PTPNG_E_OUT_OF_MEMORY;
    ptpng_cpu_init();
#if PTPNG_X86
    if (ptpng_cpu.avx2) forward = ptpng_encode_filter_avx2;
#elif PTPNG_ARM_NEON
    if (ptpng_cpu.neon) forward = ptpng_encode_filter_neon;
#endif
    for (y = 0; y < height; ++y) {
        int selected = filter < 0 ? choose_filter(src, prev, rowbytes, bpp) : filter;
        uint8_t *row = raw+(rowbytes+1)*y;
        row[0] = (uint8_t)selected;
        if (!selected) memcpy(row+1, src, rowbytes);
        else forward(row+1, src, prev, rowbytes, bpp, selected);
        prev = src;
        if (y+1 < height) src += stride;
    }
    rc = ptpng_deflate(raw, raw_size, &compressed, &compressed_size);
    free(raw);
    if (rc != PTPNG_OK) return rc;
    nchunks = compressed_size/chunk_size + (compressed_size%chunk_size != 0);
    if (compressed_size > SIZE_MAX-45 || nchunks > (SIZE_MAX-45-compressed_size)/12) {
        free(compressed);
        return PTPNG_E_TOO_LARGE;
    }
    total = 45 + compressed_size + 12*nchunks;
    png = (uint8_t *)malloc(total);
    if (!png) { free(compressed); return PTPNG_E_OUT_OF_MEMORY; }
    memcpy(png, signature, 8);
    put32(header, width); put32(header+4, height);
    header[8] = (uint8_t)bit_depth; header[9] = (uint8_t)color_type;
    p = chunk(png+8, "IHDR", header, 13);
    for (offset = 0; offset < compressed_size;) {
        size_t n = compressed_size-offset;
        if (n > chunk_size) n = chunk_size;
        p = chunk(p, "IDAT", compressed+offset, n);
        offset += n;
    }
    chunk(p, "IEND", NULL, 0);
    free(compressed);
    *out = png; *out_len = total;
    return PTPNG_OK;
}
