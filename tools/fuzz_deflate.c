/* libFuzzer input: unmodified raw bytes, including empty input, up to 2 MiB.
 * Exercise compression independently of PNG filters and image dimensions.
 * PTPNG_FUZZ_ZLIB checks the complete stream with an independent decoder.
 */
#include "ptpng_internal.h"
#ifdef PTPNG_FUZZ_ZLIB
#include "zlib.h"
#endif

#define REQUIRE(e) do { if (!(e)) abort(); } while (0)

int LLVMFuzzerTestOneInput(const uint8_t *data, size_t size)
{
    uint8_t sentinel = 0, *encoded = &sentinel, *decoded;
    size_t encoded_size = SIZE_MAX, blocks, stored_bound;
    if (size > (2u << 20)) return 0;
    /* Do not depend on the fuzzer supplying a non-NULL empty buffer. */
    if (!size) data = &sentinel;
    blocks = size / 65535 + (size % 65535 != 0);
    if (!blocks) blocks = 1;
    stored_bound = size + 5 * blocks + 6;
    ptpng_cpu_init();
    REQUIRE(ptpng_deflate(data, size, &encoded, &encoded_size) == PTPNG_OK);
    REQUIRE(encoded != NULL && encoded != &sentinel);
    REQUIRE(encoded_size >= 6 && encoded_size <= stored_bound);
    /* Exact output allocation exposes overreads/writes to ASan at both ends. */
    decoded = (uint8_t *)malloc(size ? size : 1);
    REQUIRE(decoded != NULL);
#ifdef PTPNG_FUZZ_ZLIB
    {
        uLongf reference_size = (uLongf)(size ? size : 1);
        uLong consumed = (uLong)encoded_size;
        REQUIRE(uncompress2(decoded, &reference_size, encoded, &consumed) == Z_OK);
        REQUIRE(reference_size == size && consumed == encoded_size);
        REQUIRE(memcmp(decoded, data, size) == 0);
    }
#endif
    if (size) {
        memset(decoded, 0xa5, size);
        REQUIRE(ptpng_inflate(encoded, encoded_size, decoded, size, 0) == PTPNG_OK);
        REQUIRE(memcmp(decoded, data, size) == 0);
    }
    free(decoded);
    free(encoded);
    return 0;
}
