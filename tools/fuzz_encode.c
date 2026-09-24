/* libFuzzer input: eight header bytes, then repeating pixel bytes.
 * Header: width-1 (%128), height-1 (%64), format (%8: G8/RGB8/GA8/RGBA8,
 * G16/RGB16/GA16/RGBA16), filter (%7: adaptive/None/Sub/Up/Average/Paeth/
 * default options), stride padding (%32), pattern (%3: repeat bytes/repeat
 * row/solid byte), invalid-argument selector (%4), reserved.
 * At most 64 KiB of pixels plus row padding. The last row has no padding.
 * PTPNG_FUZZ_LIBPNG adds an independent decoder oracle.
 */
#include "ptpng.h"
#include <stdint.h>
#include <stdlib.h>
#include <string.h>
#ifdef PTPNG_FUZZ_LIBPNG
#include "png.h"
#endif

#define REQUIRE(e) do { if (!(e)) abort(); } while (0)

#ifdef PTPNG_FUZZ_LIBPNG
typedef struct { const uint8_t *data; size_t size; } fuzz_reader;
static void read_png(png_structp png, png_bytep out, png_size_t size)
{
    fuzz_reader *reader = (fuzz_reader *)png_get_io_ptr(png);
    if (size > reader->size) png_error(png, "truncated encoder output");
    memcpy(out, reader->data, size);
    reader->data += size;
    reader->size -= size;
}

static void reference_check(const void *encoded, size_t encoded_size,
                            const uint8_t *pixels, size_t stride, size_t rowbytes,
                            uint32_t width, uint32_t height, int ct, int depth)
{
    png_structp png = png_create_read_struct(PNG_LIBPNG_VER_STRING, NULL, NULL, NULL);
    png_infop info;
    uint8_t *row;
    uint32_t y;
    fuzz_reader reader = {(const uint8_t *)encoded, encoded_size};
    REQUIRE(png != NULL);
    info = png_create_info_struct(png);
    REQUIRE(info != NULL);
    /* A libpng error is a fuzz finding, so no recoverable longjmp state needed. */
    if (setjmp(png_jmpbuf(png))) abort();
    png_set_read_fn(png, &reader, read_png);
    png_read_info(png, info);
    REQUIRE(png_get_image_width(png, info) == width);
    REQUIRE(png_get_image_height(png, info) == height);
    REQUIRE(png_get_color_type(png, info) == ct);
    REQUIRE(png_get_bit_depth(png, info) == depth);
    REQUIRE(png_get_rowbytes(png, info) == rowbytes);
    row = (uint8_t *)malloc(rowbytes);
    REQUIRE(row != NULL);
    for (y = 0; y < height; ++y) {
        png_read_row(png, row, NULL);
        REQUIRE(memcmp(row, pixels + y * stride, rowbytes) == 0);
    }
    png_read_end(png, info);
    free(row);
    png_destroy_read_struct(&png, &info, NULL);
}
#endif

int LLVMFuzzerTestOneInput(const uint8_t *data, size_t size)
{
    static const int color_types[] = {0, 2, 4, 6};
    static const unsigned channels[] = {1, 3, 2, 4};
    uint32_t width, height, y;
    unsigned fmt, mode;
    int ct, depth, rc;
    size_t rowbytes, stride, pixel_size, x, encoded_size = SIZE_MAX, decoded_size;
    uint8_t *pixels, sentinel;
    void *encoded = &sentinel, *decoded = NULL;
    ptpng_encode_opts opts;
    ptpng_opts decode_opts = {0, PTPNG_OUT_NATIVE, 1u << 20};
    ptpng_info info;
    if (size <= 8 || size > (1u << 16) + 8) return 0;
    width = 1 + data[0] % 128;
    height = 1 + data[1] % 64;
    fmt = data[2] % 8;
    ct = color_types[fmt % 4];
    depth = fmt < 4 ? 8 : 16;
    opts.filter = (int)(data[3] % 7) - 1;
    rowbytes = (size_t)width * channels[fmt % 4] * (depth / 8);
    stride = rowbytes + data[4] % 32;
    pixel_size = stride * (height - 1) + rowbytes;
    pixels = (uint8_t *)malloc(pixel_size);
    if (!pixels) return 0;
    memset(pixels, 0xa5, pixel_size);
    mode = data[5] % 3;
    for (y = 0; y < height; ++y) for (x = 0; x < rowbytes; ++x) {
        size_t index = mode == 2 ? 0 : mode == 1 ? x : y * rowbytes + x;
        pixels[y * stride + x] = data[8 + index % (size - 8)];
    }
    rc = ptpng_encode(pixels, pixel_size, width, height, stride, ct, depth,
                       opts.filter == 5 ? NULL : &opts, &encoded, &encoded_size);
    REQUIRE(rc == PTPNG_OK);
    REQUIRE(encoded != NULL && encoded != &sentinel && encoded_size != 0);
    memset(&info, 0, sizeof(info));
    rc = ptpng_decode(encoded, encoded_size, &decode_opts, &decoded, &decoded_size, &info);
    REQUIRE(rc == PTPNG_OK && decoded != NULL);
    REQUIRE(info.width == width && info.height == height);
    REQUIRE(info.color_type == ct && info.bit_depth == depth && info.interlace == 0);
    REQUIRE(info.rowbytes == rowbytes && decoded_size == rowbytes * height);
    for (y = 0; y < height; ++y)
        REQUIRE(memcmp((const uint8_t *)decoded + y * rowbytes,
                       pixels + y * stride, rowbytes) == 0);
    ptpng_free(decoded);
    ptpng_info_free(&info);
#ifdef PTPNG_FUZZ_LIBPNG
    reference_check(encoded, encoded_size, pixels, stride, rowbytes,
                     width, height, ct, depth);
#endif
    ptpng_free(encoded);

    /* Invalid arguments must reset both outputs, without reading outside pixels. */
    encoded = &sentinel;
    encoded_size = SIZE_MAX;
    switch (data[6] % 4) {
    case 0: pixel_size--; break;
    case 1: width = 0; break;
    case 2: ct = 3; break;
    default: opts.filter = 6; break;
    }
    if (opts.filter == 5) opts.filter = PTPNG_ENCODE_FILTER_ADAPTIVE;
    rc = ptpng_encode(pixels, pixel_size, width, height, stride, ct, depth,
                       &opts, &encoded, &encoded_size);
    REQUIRE(rc != PTPNG_OK && encoded == NULL && encoded_size == 0);
    free(pixels);
    return 0;
}
