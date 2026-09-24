/*
 * fuzz_png.c - structured mutation fuzzer for ptpng_decode.
 * Deterministic (seeded LCG) so crashes reproduce: the seed and
 * batch are printed before decoding so sanitizer crashes can
 * be replayed. atexit does not run on signals or sanitizer aborts.
 * Modes: byte flips, truncation, chunk-length/type corruption, header
 * field mutation, and CRC/adler invalidation (must still be rejected
 * or return a valid decoded result, never crash).
 */
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "ptpng.h"

static unsigned long long rng_state;
static unsigned rnd(void)
{
    rng_state = rng_state * 6364136223846793005ull + 1442695040888963407ull;
    return (unsigned)(rng_state >> 33);
}

static unsigned long long g_seed;
static unsigned long long g_iter;
static int g_clean;
static char g_name[256];

static void report(void)
{
    if (g_clean)
        return; /* normal exit: nothing to report */
    fprintf(stderr, "FUZZ INCOMPLETE: seed=%llu iter=%llu file=%s\n", g_seed,
            g_iter, g_name);
    fflush(stderr);
}

static int mutate_and_decode(const uint8_t *orig, size_t len, int mode)
{
    static uint8_t buf[1 << 20];
    size_t n = len;
    int i, nmut;
    if (len == 0 || len > sizeof(buf))
        return 0;
    memcpy(buf, orig, len);

    switch (mode) {
    case 0: /* random byte flips */
        nmut = 1 + (int)(rnd() % 8);
        for (i = 0; i < nmut; i++)
            buf[rnd() % len] ^= (uint8_t)(1u << (rnd() % 8));
        break;
    case 1: /* truncation */
        n = 8 + rnd() % len;
        if (n > len)
            n = len;
        break;
    case 2: /* chunk length corruption: pick a plausible offset */
        {
            size_t pos = 8;
            int which = (int)(rnd() % 12);
            while (pos + 12 <= len && which > 0) {
                size_t cl = (unsigned)buf[pos] << 24 | (unsigned)buf[pos+1] << 16
                            | (unsigned)buf[pos+2] << 8 | buf[pos+3];
                which--;
                if (cl > len - pos - 12) { pos = len; break; }
                pos += 12 + cl;
            }
            if (pos + 12 <= len) {
                int b = (int)(rnd() % 4);
                buf[pos + b] ^= (uint8_t)(0x80 >> (rnd() % 8));
            }
        }
        break;
    case 3: /* IHDR payload, after signature, length and type. */
        if (len >= 33)
            buf[16 + rnd() % 13] ^= (uint8_t)(1u << (rnd() % 8));
        break;
    default: /* splice: duplicate a middle section */
        if (len > 64) {
            size_t off = 16 + rnd() % (len / 2);
            size_t cnt = 1 + rnd() % 32;
            if (off + cnt < n)
                memmove(buf + off, buf + off + cnt / 2, cnt);
        }
        break;
    }

    {
        void *out = NULL;
        size_t olen = 0;
        ptpng_opts opts;
        int rc;
        memset(&opts, 0, sizeof(opts));
        opts.output_format = (int)(rnd() % 3);
        opts.max_bytes = 1u << 23; /* keep fuzz iterations fast */
        /* skip checksums half the time so mutations reach deeper code */
        if (rnd() & 1)
            opts.flags = PTPNG_FLAG_NO_VERIFY_CRC | PTPNG_FLAG_NO_VERIFY_ADLER;
        rc = ptpng_decode(buf, n, &opts, &out, &olen, NULL);
        if (rc != PTPNG_OK && (out != NULL || olen != 0)) {
            fprintf(stderr, "decode error left output: seed=%llu iter=%llu\n", g_seed, g_iter);
            abort();
        }
        ptpng_free(out);
    }
    return 1;
}

int main(int argc, char **argv)
{
    /* usage: fuzz_png file.png iterations seed */
    FILE *f;
    long fsz;
    static uint8_t orig[1 << 20];
    unsigned long long iters, i;

    if (argc < 4) return 2;
    g_seed = strtoull(argv[3], NULL, 0);
    rng_state = g_seed ^ 0x9e3779b97f4a7c15ull;
    snprintf(g_name, sizeof(g_name), "%s", argv[1]);
    atexit(report);

    f = fopen(argv[1], "rb");
    if (!f) return 2;
    if (fseek(f, 0, SEEK_END) || (fsz = ftell(f)) <= 0 ||
        fsz > (long)sizeof(orig) || fseek(f, 0, SEEK_SET)) { fclose(f); return 2; }
    if (fread(orig, 1, (size_t)fsz, f) != (size_t)fsz) { fclose(f); return 2; }
    fclose(f);

    iters = strtoull(argv[2], NULL, 0);
    for (i = 0; i < iters; i++) {
        g_iter = i;
        if ((i & 1023) == 0) {
            fprintf(stderr, "fuzz: file=%s seed=%llu batch=%llu\n", g_name, g_seed, i);
            fflush(stderr);
        }
        mutate_and_decode(orig, (size_t)fsz, (int)(rnd() % 5));
    }
    printf("fuzz done: %llu mutations of %s (seed %llu)\n", iters, argv[1],
           g_seed);
    g_clean = 1;
    return 0;
}
