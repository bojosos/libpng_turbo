/* Decoder regressions built in memory, independent of a zlib dependency. */
#include "ptpng.h"
#include <stdio.h>
#include <string.h>

static unsigned char png_data[65536];
static size_t png_size;
static int failures;

#define CHECK(expr) do { if (!(expr)) { \
    fprintf(stderr, "line %d: %s\n", __LINE__, #expr); failures++; \
} } while (0)

static void be32(unsigned char *p, unsigned long v)
{
    p[0] = (unsigned char)(v >> 24); p[1] = (unsigned char)(v >> 16);
    p[2] = (unsigned char)(v >> 8); p[3] = (unsigned char)v;
}

static unsigned long crc32_ref(const unsigned char *p, size_t n)
{
    unsigned long c = 0xffffffffUL;
    while (n--) {
        unsigned k;
        c ^= *p++;
        for (k = 0; k < 8; k++)
            c = (c >> 1) ^ ((c & 1) ? 0xedb88320UL : 0);
    }
    return c ^ 0xffffffffUL;
}

static void chunk(const char *type, const void *data, size_t size)
{
    unsigned char *p = png_data + png_size;
    be32(p, (unsigned long)size);
    memcpy(p + 4, type, 4);
    if (size) memcpy(p + 8, data, size);
    be32(p + 8 + size, crc32_ref(p + 4, size + 4));
    png_size += size + 12;
}

/* One stored DEFLATE block with a zlib header and independent Adler-32. */
static size_t zstream(unsigned char *dst, const unsigned char *src, size_t n)
{
    unsigned long a = 1, b = 0;
    size_t i;
    dst[0] = 0x78; dst[1] = 0x01; dst[2] = 1;
    dst[3] = (unsigned char)n; dst[4] = (unsigned char)(n >> 8);
    dst[5] = (unsigned char)~n; dst[6] = (unsigned char)(~n >> 8);
    memcpy(dst + 7, src, n);
    for (i = 0; i < n; i++) {
        a = (a + src[i]) % 65521; b = (b + a) % 65521;
    }
    be32(dst + 7 + n, (b << 16) | a);
    return n + 11;
}

static const unsigned char ihdr[13] = {0,0,0,1, 0,0,0,1, 8,0,0,0,0};

static void begin_png(void)
{
    static const unsigned char sig[8] = {137,80,78,71,13,10,26,10};
    memcpy(png_data, sig, 8);
    png_size = 8;
    chunk("IHDR", ihdr, sizeof(ihdr));
}

static void pixels(void)
{
    unsigned char zs[32];
    static const unsigned char raw[2] = {0, 73};
    chunk("IDAT", zs, zstream(zs, raw, sizeof(raw)));
}

static int decode(ptpng_info *info)
{
    void *out = NULL;
    size_t len = 0;
    int rc = ptpng_decode(png_data, png_size, NULL, &out, &len, info);
    if (rc == PTPNG_OK) {
        CHECK(len == 1 && ((unsigned char *)out)[0] == 73);
    } else {
        CHECK(out == NULL && len == 0);
    }
    ptpng_free(out);
    return rc;
}

static void test_metadata(void)
{
    unsigned char payload[5200], body[5001];
    static const unsigned char date[7] = {7,234,9,24,23,59,60};
    static const unsigned char splt8[] = {'p',0,8, 1,2,3,4,0,9};
    static const unsigned char splt16[] = {'q',0,16, 0,1,0,2,0,3,0,4,0,9};
    ptpng_info info;
    size_t n;
    memset(body, 'x', sizeof(body));
    begin_png();
    chunk("tIME", date, sizeof(date));
    chunk("sPLT", splt8, sizeof(splt8));
    chunk("sPLT", splt16, sizeof(splt16));
    memcpy(payload, "short\0\0", 7);
    n = zstream(payload + 7, (const unsigned char *)"hello", 5);
    chunk("zTXt", payload, n + 7);
    memcpy(payload, "long\0\1\0en\0title\0", 16);
    n = zstream(payload + 16, body, sizeof(body));
    chunk("iTXt", payload, n + 16);
    memcpy(payload, "profile\0\0", 9);
    n = zstream(payload + 9, body, 37);
    chunk("iCCP", payload, n + 9);
    pixels(); chunk("IEND", NULL, 0);
    memset(&info, 0, sizeof(info));
    CHECK(decode(&info) == PTPNG_OK);
    CHECK(info.has_tIME && memcmp(info.tIME, date, sizeof(date)) == 0);
    CHECK(info.num_splts == 2);
    if (info.num_splts == 2) {
        CHECK(info.splts[0].nentries == 1 && info.splts[0].sample_depth == 8);
        CHECK(info.splts[1].nentries == 1 && info.splts[1].sample_depth == 16);
        CHECK(memcmp(info.splts[1].entries, splt16 + 3, 10) == 0);
    }
    CHECK(info.num_texts == 2);
    if (info.num_texts == 2) {
        CHECK(strcmp(info.texts[0].text, "hello") == 0);
        CHECK(strlen(info.texts[1].text) == sizeof(body));
        CHECK(memcmp(info.texts[1].text, body, sizeof(body)) == 0);
        CHECK(strcmp(info.texts[1].language, "en") == 0);
    }
    CHECK(info.has_iCCP && info.iccp_profile_len == 37);
    if (info.has_iCCP) CHECK(memcmp(info.iccp_profile, body, 37) == 0);
    ptpng_info_free(&info);
    ptpng_info_free(&info);
}

static void test_invalid_metadata(void)
{
    unsigned char payload[64];
    static const unsigned char bad_date[7] = {7,234,9,24,23,59,61};
    size_t n;
    ptpng_info info;
    begin_png();
    chunk("tIME", bad_date, sizeof(bad_date));
    memcpy(payload, "bad\0\0", 5);
    n = zstream(payload + 5, (const unsigned char *)"hello", 5);
    payload[5 + n - 1] ^= 1; /* valid chunk CRC, wrong stream Adler */
    chunk("zTXt", payload, n + 5);
    pixels(); chunk("IEND", NULL, 0);
    memset(&info, 0, sizeof(info));
    CHECK(decode(&info) == PTPNG_OK);
    CHECK(info.num_texts == 0 && !info.has_tIME);
    ptpng_info_free(&info);
}

static void test_cleanup_and_chunk_order(void)
{
    unsigned i;
    ptpng_info info;
    begin_png();
    for (i = 0; i < 80; i++) chunk("tEXt", "key\0value", 9);
    pixels(); chunk("IEND", NULL, 0);
    memset(&info, 0, sizeof(info));
    CHECK(decode(&info) == PTPNG_OK);
    CHECK(info.num_texts > 0 && info._n_allocs <= 64);
    ptpng_info_free(&info);
    begin_png();
    chunk("tEXt", "key\0value", 9);
    pixels();
    chunk("IHDR", ihdr, sizeof(ihdr));
    chunk("IEND", NULL, 0);
    CHECK(decode(NULL) == PTPNG_E_CHUNK_ORDER);
    begin_png(); pixels(); chunk("IEND", "x", 1);
    CHECK(decode(NULL) == PTPNG_E_BAD_CHUNK_LEN);
}

int main(void)
{
    test_metadata();
    test_invalid_metadata();
    test_cleanup_and_chunk_order();
    if (failures) return 1;
    puts("decoder: metadata, limits, and malformed chunk regressions OK");
    return 0;
}
