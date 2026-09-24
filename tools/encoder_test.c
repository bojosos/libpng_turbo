/* Encoder round trips, exact input bounds, and optional independent libpng reads. */
#include "ptpng.h"
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#ifdef PTPNG_TEST_LIBPNG
#include "png.h"
#endif

static int failures;
static unsigned cases;
#define CHECK(e) do { if (!(e)) { \
    fprintf(stderr, "line %d: %s\n", __LINE__, #e); failures++; \
} } while (0)

#ifdef PTPNG_TEST_LIBPNG
typedef struct { const unsigned char *p; size_t n; } reader;
static void read_memory(png_structp png, png_bytep dst, png_size_t n)
{
    reader *r = (reader *)png_get_io_ptr(png);
    if (n > r->n) png_error(png, "truncated input");
    memcpy(dst, r->p, n); r->p += n; r->n -= n;
}

static int reference_check(const void *data, size_t size,
                           const unsigned char *pixels, size_t stride,
                           uint32_t w, uint32_t h, int ct, int depth, size_t rb)
{
    png_structp png = png_create_read_struct(PNG_LIBPNG_VER_STRING, NULL, NULL, NULL);
    png_infop info;
    unsigned char * volatile row = NULL;
    reader r = {(const unsigned char *)data, size};
    uint32_t y;
    int ok = 1;
    if (!png) return 0;
    info = png_create_info_struct(png);
    if (!info) { png_destroy_read_struct(&png, NULL, NULL); return 0; }
    if (setjmp(png_jmpbuf(png))) {
        free(row); png_destroy_read_struct(&png, &info, NULL); return 0;
    }
    png_set_read_fn(png, &r, read_memory);
    png_read_info(png, info);
    if (png_get_image_width(png, info) != w || png_get_image_height(png, info) != h ||
        png_get_color_type(png, info) != ct || png_get_bit_depth(png, info) != depth ||
        png_get_rowbytes(png, info) != rb)
        png_error(png, "header mismatch");
    row = (unsigned char *)malloc(rb);
    if (!row) png_error(png, "allocation failed");
    for (y = 0; y < h; y++) {
        png_read_row(png, row, NULL);
        if (memcmp(row, pixels + y * stride, rb)) ok = 0;
    }
    png_read_end(png, info);
    free(row); png_destroy_read_struct(&png, &info, NULL);
    return ok;
}
#endif

static void roundtrip(uint32_t w, uint32_t h, int ct, int depth,
                      int filter, size_t padding, unsigned pattern, int defaults)
{
    int channels = ct == 0 ? 1 : ct == 2 ? 3 : ct == 4 ? 2 : 4;
    size_t rb = (size_t)w * channels * (depth / 8), stride = rb + padding;
    /* No padding after the last row: ASan catches any excess source read. */
    size_t n = stride * (h - 1) + rb, out_n = 0, decoded_n = 0, x;
    unsigned char *pixels = (unsigned char *)malloc(n);
    void *out = NULL, *decoded = NULL;
    ptpng_encode_opts opts = {filter};
    ptpng_info info;
    uint32_t y, rng = 0x917ea34bu;
    int rc;
    CHECK(pixels != NULL);
    if (!pixels) return;
    memset(pixels, 0xa5, n);
    for (y = 0; y < h; y++) for (x = 0; x < rb; x++) {
        rng ^= rng << 13; rng ^= rng >> 17; rng ^= rng << 5;
        pixels[y * stride + x] = pattern == 0 ? 0 : pattern == 1 ?
            (unsigned char)(x * 3 + y * 7 + (x / 19) * 31) : (unsigned char)rng;
    }
    rc = ptpng_encode(pixels, n, w, h, padding ? stride : 0, ct, depth,
                       defaults ? NULL : &opts, &out, &out_n);
    CHECK(rc == PTPNG_OK);
    if (rc != PTPNG_OK) goto done;
    CHECK(out != NULL && out_n > 0);
    memset(&info, 0, sizeof(info));
    rc = ptpng_decode(out, out_n, NULL, &decoded, &decoded_n, &info);
    CHECK(rc == PTPNG_OK);
    if (rc == PTPNG_OK) {
        CHECK(info.width == w && info.height == h && info.color_type == ct);
        CHECK(info.bit_depth == depth && info.interlace == 0 && info.rowbytes == rb);
        CHECK(decoded_n == rb * h);
        if (decoded_n == rb * h) for (y = 0; y < h; y++)
            CHECK(!memcmp((unsigned char *)decoded + y * rb, pixels + y * stride, rb));
    }
    ptpng_info_free(&info);
#ifdef PTPNG_TEST_LIBPNG
    CHECK(reference_check(out, out_n, pixels, stride, w, h, ct, depth, rb));
#endif
    cases++;
done:
    ptpng_free(decoded); ptpng_free(out); free(pixels);
}

static void invalid_inputs(void)
{
    unsigned char p[32] = {0};
    void *out;
    size_t n;
    ptpng_encode_opts opts;
    int ct, depth;
#define BAD(ptr, len, w, h, stride, color, bits, options) do { \
    out = (void *)(uintptr_t)1; n = 123; \
    CHECK(ptpng_encode(ptr, len, w, h, stride, color, bits, options, &out, &n) != PTPNG_OK); \
    CHECK(out == NULL && n == 0); \
} while (0)
    BAD(NULL, sizeof(p), 1, 1, 0, 0, 8, NULL);
    BAD(p, sizeof(p), 0, 1, 0, 0, 8, NULL);
    BAD(p, sizeof(p), 1, 0, 0, 0, 8, NULL);
    BAD(p, 0, 1, 1, 0, 0, 8, NULL);
    BAD(p, 7, 2, 2, 0, 4, 8, NULL);
    BAD(p, sizeof(p), 2, 2, 1, 4, 8, NULL);
    BAD(p, 11, 2, 2, 8, 4, 8, NULL);
    BAD(p, sizeof(p), UINT32_MAX, 1, 0, 6, 16, NULL);
    BAD(p, sizeof(p), 1, UINT32_MAX, 0, 6, 16, NULL);
    BAD(p, sizeof(p), 1, 3, SIZE_MAX, 0, 8, NULL);
    BAD(p, sizeof(p), 1, 2, SIZE_MAX, 6, 16, NULL);
    for (ct = -1; ct < 9; ct++) if (ct != 0 && ct != 2 && ct != 4 && ct != 6)
        BAD(p, sizeof(p), 1, 1, 0, ct, 8, NULL);
    for (depth = -1; depth <= 32; depth++) if (depth != 8 && depth != 16)
        BAD(p, sizeof(p), 1, 1, 0, 0, depth, NULL);
    opts.filter = -2;
    BAD(p, sizeof(p), 1, 1, 0, 0, 8, &opts);
    opts.filter = 5;
    BAD(p, sizeof(p), 1, 1, 0, 0, 8, &opts);
    CHECK(ptpng_encode(p, sizeof(p), 1, 1, 0, 0, 8, NULL, NULL, &n) != PTPNG_OK);
    CHECK(ptpng_encode(p, sizeof(p), 1, 1, 0, 0, 8, NULL, &out, NULL) != PTPNG_OK);
#undef BAD
}

int main(void)
{
    static const uint32_t dims[][2] = {
        {1,1}, {2,3}, {3,2}, {15,17}, {16,4}, {17,9}, {129,3}, {8193,2}
    };
    static const int types[] = {0,2,4,6};
    size_t d, c, pad;
    int depth, filter;
    unsigned pattern;
    for (d = 0; d < sizeof(dims) / sizeof(dims[0]); d++)
        for (c = 0; c < sizeof(types) / sizeof(types[0]); c++)
            for (depth = 8; depth <= 16; depth += 8)
                for (filter = -1; filter <= 4; filter++)
                    for (pad = 0; pad <= 13; pad += 13)
                        for (pattern = 0; pattern < 3; pattern++)
                            roundtrip(dims[d][0], dims[d][1], types[c], depth,
                                      filter, pad, pattern, 0);
    /* Multiple DEFLATE blocks and long match histories in all data patterns. */
    for (pattern = 0; pattern < 3; pattern++)
        roundtrip(65537, 5, 6, 8, -1, 7, pattern, 1);
    invalid_inputs();
    printf("encoder: %u round trips, %d failures%s\n", cases, failures,
#ifdef PTPNG_TEST_LIBPNG
           " (verified with libpng)"
#else
           ""
#endif
    );
    return failures ? 1 : 0;
}
