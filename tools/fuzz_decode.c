/* libFuzzer input: an unmodified PNG file, including its signature.
 * Mutations may produce another valid image; changed pixels are not an error.
 * PTPNG_FUZZ_LIBPNG compares native pixels when both decoders accept the input.
 * Run with ASan/UBSan and a process RSS limit.
 * max_bytes bounds pixels; ancillary decompression has its own library limits.
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
typedef struct {
    const uint8_t *data;
    size_t size, rowbytes;
    uint8_t *pixels;
    png_uint_32 width, height;
    int depth, color_type;
} reference_state;

static void PNGCBAPI reference_error(png_structp png, png_const_charp message)
{
    (void)message;
    png_longjmp(png, 1);
}

static void PNGCBAPI reference_warning(png_structp png, png_const_charp message)
{
    (void)png;
    (void)message;
}

static void PNGCBAPI reference_read(png_structp png, png_bytep out, png_size_t size)
{
    reference_state *state = (reference_state *)png_get_io_ptr(png);
    if (size > state->size) png_error(png, "truncated input");
    memcpy(out, state->data, size);
    state->data += size;
    state->size -= size;
}

static void reference_check(const uint8_t *data, size_t size,
                            const uint8_t *pixels, const ptpng_info *decoded)
{
    png_structp png;
    png_infop info;
    reference_state *state;
    png_uint_32 y;
    int pass, passes;
    unsigned tail_bits;
    png = png_create_read_struct(PNG_LIBPNG_VER_STRING, NULL,
                                 reference_error, reference_warning);
    if (!png) return;
    info = png_create_info_struct(png);
    if (!info) {
        png_destroy_read_struct(&png, NULL, NULL);
        return;
    }
    state = (reference_state *)calloc(1, sizeof(*state));
    if (!state) {
        png_destroy_read_struct(&png, &info, NULL);
        return;
    }
    /* Cleanup state lives on the heap so longjmp cannot invalidate it.
     * A rejection or allocation failure in libpng is not a pixel mismatch. */
    if (setjmp(png_jmpbuf(png))) goto done;
    state->data = data;
    state->size = size;
    png_set_read_fn(png, state, reference_read);
    png_set_user_limits(png, decoded->width, decoded->height);
    png_set_chunk_malloc_max(png, 1u << 20);
    png_set_chunk_cache_max(png, 64);
    png_read_info(png, info);
    state->width = png_get_image_width(png, info);
    state->height = png_get_image_height(png, info);
    state->depth = png_get_bit_depth(png, info);
    state->color_type = png_get_color_type(png, info);
    passes = png_set_interlace_handling(png);
    png_read_update_info(png, info); /* No transformations: keep native PNG samples. */
    state->rowbytes = png_get_rowbytes(png, info);
    if (!state->height || !state->rowbytes ||
        state->rowbytes > (1u << 23) / state->height) goto done;
    state->pixels = (uint8_t *)calloc(state->height, state->rowbytes);
    if (!state->pixels) goto done;
    for (pass = 0; pass < passes; ++pass)
        for (y = 0; y < state->height; ++y)
            png_read_row(png, state->pixels + y * state->rowbytes, NULL);
    png_read_end(png, info);
    REQUIRE(state->width == decoded->width && state->height == decoded->height);
    REQUIRE(state->depth == decoded->bit_depth && state->color_type == decoded->color_type);
    REQUIRE(state->rowbytes == decoded->rowbytes);
    tail_bits = (unsigned)(((uint64_t)decoded->width * decoded->channels *
                            decoded->bit_depth) & 7u);
    for (y = 0; y < state->height; ++y) {
        const uint8_t *actual = pixels + y * state->rowbytes;
        const uint8_t *expected = state->pixels + y * state->rowbytes;
        size_t whole_bytes = state->rowbytes - (tail_bits != 0);
        REQUIRE(memcmp(actual, expected, whole_bytes) == 0);
        if (tail_bits) {
            unsigned mask = (0xffu << (8 - tail_bits)) & 0xffu;
            REQUIRE((actual[whole_bytes] & mask) == (expected[whole_bytes] & mask));
        }
    }
done:
    free(state->pixels);
    free(state);
    png_destroy_read_struct(&png, &info, NULL);
}
#endif

int LLVMFuzzerTestOneInput(const uint8_t *data, size_t size)
{
    int format;
    unsigned unchecked;
    if (size > (1u << 20)) return 0;
    for (format = PTPNG_OUT_NATIVE; format <= PTPNG_OUT_RGB8; ++format) {
        for (unchecked = 0; unchecked != 2; ++unchecked) {
            uint8_t sentinel;
            void *pixels = &sentinel;
            size_t bytes = SIZE_MAX;
            ptpng_info info;
            ptpng_opts opts = {0, format, 1u << 23};
            int rc;
            memset(&info, 0, sizeof(info));
            if (unchecked)
                opts.flags = PTPNG_FLAG_NO_VERIFY_CRC | PTPNG_FLAG_NO_VERIFY_ADLER;
            rc = ptpng_decode(data, size, &opts, &pixels, &bytes, &info);
            if (rc == PTPNG_OK) {
                REQUIRE(pixels != NULL && pixels != &sentinel);
                REQUIRE(info.width != 0 && info.height != 0);
                REQUIRE(bytes <= opts.max_bytes);
                REQUIRE(info.rowbytes <= SIZE_MAX / info.height);
                REQUIRE(bytes == info.rowbytes * info.height);
                if (format == PTPNG_OUT_RGBA8)
                    REQUIRE(info.rowbytes == (size_t)info.width * 4);
                if (format == PTPNG_OUT_RGB8)
                    REQUIRE(info.rowbytes == (size_t)info.width * 3);
#ifdef PTPNG_FUZZ_LIBPNG
                if (format == PTPNG_OUT_NATIVE && !unchecked)
                    reference_check(data, size, (const uint8_t *)pixels, &info);
#endif
                ptpng_free(pixels);
            } else {
                REQUIRE(pixels == NULL && bytes == 0);
            }
            ptpng_info_free(&info);
            ptpng_info_free(&info); /* Public contract permits repeated release. */
        }
    }
    return 0;
}
