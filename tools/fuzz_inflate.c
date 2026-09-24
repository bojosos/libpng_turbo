/* libFuzzer input: 4-byte little-endian output capacity followed by a zlib
 * stream (header, DEFLATE blocks, Adler-32). Capacity is clamped to 1 MiB.
 * Exact-sized fixed buffers let ASan detect writes past the advertised end.
 */
#include "ptpng_internal.h"
#ifdef PTPNG_FUZZ_ZLIB
#include "zlib.h"
#endif

#define REQUIRE(e) do { if (!(e)) abort(); } while (0)

int LLVMFuzzerTestOneInput(const uint8_t *data, size_t size)
{
    size_t cap, dyn_size = SIZE_MAX;
    uint8_t sentinel, *dyn = &sentinel, *checked, *unchecked;
    int checked_rc, unchecked_rc, dyn_rc;
    uint32_t encoded_cap;
    if (size <= 4 || size > (1u << 20)) return 0;
    encoded_cap = (uint32_t)data[0] | (uint32_t)data[1] << 8 |
                  (uint32_t)data[2] << 16 | (uint32_t)data[3] << 24;
    cap = encoded_cap;
    if (cap == 0) cap = 1;
    if (cap > (1u << 20)) cap = 1u << 20;
    data += 4;
    size -= 4;
    checked = (uint8_t *)malloc(cap);
    unchecked = (uint8_t *)malloc(cap);
    if (!checked || !unchecked) {
        free(checked);
        free(unchecked);
        return 0;
    }
    ptpng_cpu_init();
    checked_rc = ptpng_inflate(data, size, checked, cap, 0);
    unchecked_rc = ptpng_inflate(data, size, unchecked, cap, PTPNG_INF_NO_ADLER);
    if (checked_rc == PTPNG_OK) {
        REQUIRE(unchecked_rc == PTPNG_OK);
        REQUIRE(memcmp(checked, unchecked, cap) == 0);
    }
    dyn_rc = ptpng_inflate_dyn(data, size, cap, &dyn, &dyn_size);
    if (dyn_rc == PTPNG_OK) {
        REQUIRE(dyn != NULL && dyn != &sentinel && dyn_size <= cap);
        REQUIRE(dyn[dyn_size] == 0); /* Metadata decompression promises a terminator. */
        if (dyn_size) {
            REQUIRE(ptpng_inflate(data, size, checked, dyn_size, 0) == PTPNG_OK);
            REQUIRE(memcmp(checked, dyn, dyn_size) == 0);
        }
        if (checked_rc == PTPNG_OK) REQUIRE(dyn_size == cap);
#ifdef PTPNG_FUZZ_ZLIB
        {
            uLongf reference_size = (uLongf)cap;
            REQUIRE(uncompress(unchecked, &reference_size, data, (uLong)size) == Z_OK);
            REQUIRE(reference_size == dyn_size);
            REQUIRE(memcmp(unchecked, dyn, dyn_size) == 0);
        }
#endif
        free(dyn);
    } else {
        REQUIRE(dyn == NULL && dyn_size == 0);
        REQUIRE(checked_rc != PTPNG_OK);
    }
    free(checked);
    free(unchecked);
    return 0;
}
