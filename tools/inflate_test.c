/* inflate_test.c - unit-test ptpng_inflate against produced streams.
 * stdin: none; args: stream_file expected_file out_len_hex */
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "ptpng_internal.h"

int main(int argc, char **argv)
{
    FILE *f;
    uint8_t *stream, *expect, *out;
    long slen, elen, olen;
    int rc;
    if (argc < 4) return 2;
    f = fopen(argv[1], "rb"); fseek(f, 0, SEEK_END); slen = ftell(f);
    fseek(f, 0, SEEK_SET); stream = malloc((size_t)slen);
    if (fread(stream, 1, (size_t)slen, f) != (size_t)slen) return 2;
    fclose(f);
    f = fopen(argv[2], "rb"); fseek(f, 0, SEEK_END); elen = ftell(f);
    fseek(f, 0, SEEK_SET); expect = malloc((size_t)elen);
    if (fread(expect, 1, (size_t)elen, f) != (size_t)elen) return 2;
    fclose(f);
    olen = strtol(argv[3], NULL, 0);
    if (olen != elen) { printf("len mismatch meta\n"); return 3; }
    out = malloc((size_t)(olen ? olen : 1));
    rc = ptpng_inflate(stream, (size_t)slen, out, (size_t)olen,
                      getenv("SKIP_ADLER") ? PTPNG_INF_NO_ADLER : 0);
    if (rc) { printf("inflate rc=%d (%s)\n", rc, ptpng_strerror(rc)); return 1; }
    if (memcmp(out, expect, (size_t)elen)) {
        long i;
        for (i = 0; i < elen && out[i] == expect[i]; i++) {}
        printf("data mismatch at %ld (got %02x want %02x)\n", i, out[i], expect[i]);
        return 1;
    }
    printf("OK %ld bytes\n", elen);
    return 0;
}
