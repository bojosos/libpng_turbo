/* libFuzzer input: an unmodified PNG file, including its signature.
 * Mutations may produce another valid image. Only API invariants are checked;
 * changed pixels are not an error. Run with ASan/UBSan and a process RSS limit.
 * max_bytes bounds pixels; ancillary decompression has its own library limits.
 */
#include "ptpng.h"
#include <stdint.h>
#include <stdlib.h>
#include <string.h>

#define REQUIRE(e) do { if (!(e)) abort(); } while (0)

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
