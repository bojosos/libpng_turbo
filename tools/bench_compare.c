/*
 * bench_compare.c - portable ptpng-vs-libpng benchmark.
 * Emits a table to stdout and a github-action-benchmark JSON file
 * (customBiggerIsBetter, unit MB/s) named by the given platform tag so
 * nightly runs chart every OS/arch combination over time.
 *
 * usage: bench_compare <tag> <outfile.json> <img1.png> [img2.png ...]
 */
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <time.h>
#ifdef _WIN32
#include <windows.h>
#endif
#include "ptpng.h"
#include "png.h"

#ifndef REF_LABEL
#define REF_LABEL "libpng" /* stock zlib; bench_zlibng defines its own */
#endif

static double now_sec(void)
{
#ifdef _WIN32
    LARGE_INTEGER c, f;
    QueryPerformanceCounter(&c);
    QueryPerformanceFrequency(&f);
    return (double)c.QuadPart / (double)f.QuadPart;
#else
    struct timespec ts;
    clock_gettime(CLOCK_MONOTONIC, &ts);
    return (double)ts.tv_sec + (double)ts.tv_nsec * 1e-9;
#endif
}

static void *read_file(const char *path, size_t *len)
{
    FILE *f = fopen(path, "rb");
    long sz;
    void *buf;
    if (!f) return NULL;
    fseek(f, 0, SEEK_END); sz = ftell(f); fseek(f, 0, SEEK_SET);
    buf = malloc((size_t)sz);
    if (fread(buf, 1, (size_t)sz, f) != (size_t)sz) { fclose(f); free(buf); return NULL; }
    fclose(f);
    *len = (size_t)sz;
    return buf;
}

static void mem_read_fn(png_structp png, png_bytep out, png_size_t len)
{
    const uint8_t **pp = (const uint8_t **)png_get_io_ptr(png);
    memcpy(out, *pp, len);
    *pp += len;
}

static double bench_ptpng(const uint8_t *data, size_t size, int fmt,
                          int iters, size_t *out_len)
{
    int i;
    double best = 1e30;
    void *out = NULL;
    size_t olen = 0;
    ptpng_opts opts;
    memset(&opts, 0, sizeof(opts));
    opts.output_format = fmt;
    opts.max_bytes = 1u << 28;
    for (i = 0; i < iters; i++) {
        double t0 = now_sec(), t1;
        int rc = ptpng_decode(data, size, &opts, &out, &olen, NULL);
        t1 = now_sec();
        ptpng_free(out);
        out = NULL;
        if (rc != PTPNG_OK)
            return -1.0;
        if (t1 - t0 < best)
            best = t1 - t0;
    }
    *out_len = olen;
    return best;
}

static double bench_libpng(const uint8_t *data, size_t size, int fmt,
                           int iters, size_t *out_len)
{
    int i;
    double best = 1e30;
    *out_len = 0;
    for (i = 0; i < iters; i++) {
        png_structp png = png_create_read_struct(PNG_LIBPNG_VER_STRING,
                                                 NULL, NULL, NULL);
        png_infop info = png_create_info_struct(png);
        const uint8_t *cur = data;
        png_bytep *rows;
        size_t rb;
        png_uint_32 w, h, y;
        int depth, ct, has_alpha;
        double t0, t1;
        if (setjmp(png_jmpbuf(png))) {
            png_destroy_read_struct(&png, &info, NULL);
            return -1.0;
        }
        t0 = now_sec();
        png_set_read_fn(png, &cur, mem_read_fn);
        png_read_info(png, info);
        w = png_get_image_width(png, info);
        h = png_get_image_height(png, info);
        depth = png_get_bit_depth(png, info);
        ct = png_get_color_type(png, info);
        has_alpha = (ct & PNG_COLOR_MASK_ALPHA) ||
                    png_get_valid(png, info, PNG_INFO_tRNS);
        if (fmt != 0) {
            png_set_expand(png);
            if (depth == 16)
                png_set_strip_16(png);
            if (!(ct & PNG_COLOR_MASK_COLOR))
                png_set_gray_to_rgb(png);
            if (fmt == 1 && !has_alpha)
                png_set_filler(png, 0xFFFFFFFF, PNG_FILLER_AFTER);
            if (fmt == 2)
                png_set_strip_alpha(png);
        }
        png_read_update_info(png, info);
        rb = png_get_rowbytes(png, info);
        rows = (png_bytep *)malloc(sizeof(png_bytep) * (h ? h : 1));
        for (y = 0; y < h; y++)
            rows[y] = (png_bytep)malloc(rb ? rb : 1);
        png_read_image(png, rows);
        t1 = now_sec();
        *out_len = rb * h;
        for (y = 0; y < h; y++)
            free(rows[y]);
        free(rows);
        png_destroy_read_struct(&png, &info, NULL);
        if (t1 - t0 < best)
            best = t1 - t0;
    }
    return best;
}

static const char *base_name(const char *p)
{
    const char *a = strrchr(p, '\\');
    const char *b = strrchr(p, '/');
    if (b > a) a = b;
    return a ? a + 1 : p;
}

int main(int argc, char **argv)
{
    const char *tag, *outfile;
    int i, iters = 12;
    FILE *js;
    if (argc < 4) {
        fprintf(stderr, "usage: bench_compare <tag> <out.json> <img...>\n");
        return 2;
    }
    tag = argv[1];
    outfile = argv[2];
    printf("ptpng %s | features: %s\n", ptpng_version(), ptpng_features());

    js = fopen(outfile, "w");
    fprintf(js, "[\n");
    for (i = 3; i < argc; i++) {
        size_t size, pt_len = 0, lp_len = 0;
        uint8_t *data = (uint8_t *)read_file(argv[i], &size);
        const char *nm = base_name(argv[i]);
        char clean[128];
        char *dot;
        double tpt_n, tlp_n, tpt_r, tlp_r;
        size_t pixels;
        ptpng_info info;
        ptpng_opts opts;
        void *probe = NULL;
        if (!data) {
            fprintf(stderr, "cannot read %s\n", argv[i]);
            return 2;
        }
        memset(&opts, 0, sizeof(opts));
        opts.output_format = PTPNG_OUT_NATIVE;
        opts.max_bytes = 1u << 28;
        if (ptpng_decode(data, size, &opts, &probe, NULL, &info) !=
            PTPNG_OK) {
            fprintf(stderr, "skip %s\n", nm);
            free(data);
            continue;
        }
        ptpng_free(probe);
        pixels = (size_t)info.width * info.height;
        snprintf(clean, sizeof(clean), "%s", nm);
        dot = strrchr(clean, '.');
        if (dot) *dot = 0;

        tpt_n = bench_ptpng(data, size, PTPNG_OUT_NATIVE, iters, &pt_len);
        tlp_n = bench_libpng(data, size, 0, iters, &lp_len);
        tpt_r = bench_ptpng(data, size, PTPNG_OUT_RGBA8, iters, &pt_len);
        tlp_r = bench_libpng(data, size, 1, iters, &lp_len);

        printf("%-18s [" REF_LABEL "] native: ptpng %7.2f MB/s  ref %7.2f MB/s (%.2fx)"
               "   rgba8: ptpng %7.2f   ref %7.2f  (%.2fx)\n",
               nm,
               pixels / tpt_n / 1e6, pixels / tlp_n / 1e6,
               tlp_n / tpt_n,
               pixels / tpt_r / 1e6, pixels / tlp_r / 1e6,
               tlp_r / tpt_r);

        fprintf(js,
                "  {\"name\": \"%s/ptpng/%s native\", \"unit\": \"MB/s\", "
                "\"value\": %.2f, \"extra\": \"%s\"},\n",
                tag, clean, pixels / tpt_n / 1e6, ptpng_features());
        fprintf(js,
                "  {\"name\": \"%s/libpng/%s native\", \"unit\": \"MB/s\", "
                "\"value\": %.2f},\n",
                tag, clean, pixels / tlp_n / 1e6);
        fprintf(js,
                "  {\"name\": \"%s/ptpng/%s rgba8\", \"unit\": \"MB/s\", "
                "\"value\": %.2f, \"extra\": \"%s\"},\n",
                tag, clean, pixels / tpt_r / 1e6, ptpng_features());
        fprintf(js,
                "  {\"name\": \"%s/libpng/%s rgba8\", \"unit\": \"MB/s\", "
                "\"value\": %.2f}%s\n",
                tag, clean, pixels / tlp_r / 1e6,
                (i == argc - 1) ? "" : ",");
        free(data);
    }
    fprintf(js, "]\n");
    fclose(js);
    printf("wrote %s\n", outfile);
    return 0;
}
