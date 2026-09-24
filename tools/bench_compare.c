/*
 * bench_compare.c - portable ptpng-vs-libpng benchmark.
 * Emits a table to stdout and a github-action-benchmark JSON file
 * (customBiggerIsBetter, unit MPix/s) named by the given platform tag so
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
    if (fseek(f, 0, SEEK_END) || (sz = ftell(f)) <= 0 ||
        fseek(f, 0, SEEK_SET)) { fclose(f); return NULL; }
    buf = malloc((size_t)sz);
    if (!buf) { fclose(f); return NULL; }
    if (fread(buf, 1, (size_t)sz, f) != (size_t)sz) { fclose(f); free(buf); return NULL; }
    fclose(f);
    *len = (size_t)sz;
    return buf;
}

typedef struct { const uint8_t *p; size_t remaining; } mem_reader;

static void mem_read_fn(png_structp png, png_bytep out, png_size_t len)
{
    mem_reader *r = (mem_reader *)png_get_io_ptr(png);
    if (len > r->remaining) png_error(png, "read past end");
    memcpy(out, r->p, len);
    r->p += len;
    r->remaining -= len;
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
        double t0 = now_sec(), t1;
        png_structp png = png_create_read_struct(PNG_LIBPNG_VER_STRING,
                                                 NULL, NULL, NULL);
        png_infop info;
        mem_reader reader = {data, size};
        png_bytep * volatile rows = NULL;
        uint8_t * volatile pixels = NULL;
        size_t rb;
        png_uint_32 w, h, y;
        int depth, ct, has_alpha;
        if (!png) return -1.0;
        info = png_create_info_struct(png);
        if (!info) { png_destroy_read_struct(&png, NULL, NULL); return -1.0; }
        if (setjmp(png_jmpbuf(png))) {
            free(pixels);
            free(rows);
            png_destroy_read_struct(&png, &info, NULL);
            return -1.0;
        }
        png_set_read_fn(png, &reader, mem_read_fn);
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
        png_set_interlace_handling(png);
        png_read_update_info(png, info);
        rb = png_get_rowbytes(png, info);
        rows = (png_bytep *)malloc(sizeof(png_bytep) * (h ? h : 1));
        pixels = (uint8_t *)malloc(rb * h);
        if (!rows || !pixels) png_error(png, "out of memory");
        for (y = 0; y < h; y++)
            rows[y] = pixels + y * rb;
        png_read_image(png, rows);
        png_read_end(png, info);
        free(rows);
        rows = NULL;
        png_destroy_read_struct(&png, &info, NULL);
        t1 = now_sec();
        *out_len = rb * h;
        free(pixels);
        if (t1 - t0 < best)
            best = t1 - t0;
    }
    return best;
}

static const char *base_name(const char *p)
{
    const char *a = strrchr(p, '\\');
    const char *b = strrchr(p, '/');
    if (b && (!a || b > a)) a = b;
    return a ? a + 1 : p;
}

static double median12(double values[12])
{
    int i, j;
    for (i = 1; i < 12; ++i) {
        double value = values[i];
        for (j = i; j > 0 && values[j-1] > value; --j) values[j] = values[j-1];
        values[j] = value;
    }
    return (values[5] + values[6])/2;
}

static int bench_pair(const uint8_t *data, size_t size, int format,
                       double *pt, double *ref)
{
    double pt_times[12], ref_times[12];
    size_t pt_len = 0, ref_len = 0;
    int i;
    /* Warm both decoders; alternate order each round to reduce clock/load drift. */
    if (bench_ptpng(data, size, format, 1, &pt_len) <= 0 ||
        bench_libpng(data, size, format, 1, &ref_len) <= 0) return 0;
    for (i = 0; i < 12; ++i) {
        if (i & 1) {
            ref_times[i] = bench_libpng(data, size, format, 1, &ref_len);
            pt_times[i] = bench_ptpng(data, size, format, 1, &pt_len);
        } else {
            pt_times[i] = bench_ptpng(data, size, format, 1, &pt_len);
            ref_times[i] = bench_libpng(data, size, format, 1, &ref_len);
        }
        if (pt_times[i] <= 0 || ref_times[i] <= 0 || pt_len != ref_len) return 0;
    }
    *pt = median12(pt_times); *ref = median12(ref_times);
    return 1;
}

/* A measured copy reference, not a theoretical PNG limit. Warm buffers,
 * 128 MiB total working set; report payload bytes, not read+write traffic.
 * The volatile function pointer keeps every copy observable to the compiler. */
static double bench_memory_copy(void)
{
    const size_t size = 64u << 20;
    uint8_t *src = (uint8_t *)malloc(size), *dst = (uint8_t *)malloc(size);
    void *(*volatile copy_fn)(void *, const void *, size_t) = memcpy;
    double samples[5];
    int i, j;
    if (!src || !dst) { free(src); free(dst); return -1; }
    memset(src, 73, size);
    memset(dst, 0, size);
    copy_fn(dst, src, size);
    for (i = 0; i < 5; ++i) {
        double start = now_sec();
        for (j = 0; j < 8; ++j) copy_fn(dst, src, size);
        samples[i] = now_sec()-start;
    }
    if (memcmp(dst, src, size)) { free(src); free(dst); return -1; }
    free(src); free(dst);
    for (i = 1; i < 5; ++i) {
        double value = samples[i];
        for (j = i; j > 0 && samples[j-1] > value; --j) samples[j] = samples[j-1];
        samples[j] = value;
    }
    return samples[2] > 0 ? 8.0*size/samples[2]/1e6 : -1;
}

int main(int argc, char **argv)
{
    const char *tag, *outfile;
    int i;
    FILE *js;
    if (argc < 4) {
        fprintf(stderr, "usage: bench_compare <tag> <out.json> <img...>\n");
        return 2;
    }
    tag = argv[1];
    outfile = argv[2];
    printf("ptpng %s | features: %s\n", ptpng_version(), ptpng_features());
    printf("12 alternating rounds after warm-up; median elapsed time; output free excluded\n");

    js = fopen(outfile, "w");
    if (!js) { perror(outfile); return 2; }
    fprintf(js, "[\n");
    {
        double bandwidth = bench_memory_copy();
        if (bandwidth <= 0) { fclose(js); return 1; }
        printf("warm 64 MiB memcpy: %.2f MB/s payload, %.2f MPix/s RGBA8-equivalent "
               "(reference, not a PNG ceiling)\n", bandwidth, bandwidth/4);
        fprintf(js, "{\"name\":\"%s/memory-copy-vs-" REF_LABEL "/64MiB\","
                    "\"unit\":\"MB/s\",\"value\":%.2f,\"extra\":\"Warm buffers; 128 MiB working set; "
                    "median of five batches; payload bytes only; %.2f MPix/s RGB8-equivalent, "
                    "%.2f MPix/s RGBA8-equivalent; measured reference, not a theoretical limit\"},\n",
                    tag, bandwidth, bandwidth/3, bandwidth/4);
    }
    for (i = 3; i < argc; i++) {
        size_t size;
        uint8_t *data = (uint8_t *)read_file(argv[i], &size);
        const char *nm = base_name(argv[i]);
        char clean[128];
        char *dot;
        double tpt_n, tlp_n, tpt_r, tlp_r, tpt_rgb, tlp_rgb;
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
            fprintf(stderr, "cannot decode %s\n", nm);
            free(data);
            fclose(js);
            return 1;
        }
        ptpng_free(probe);
        pixels = (size_t)info.width * info.height;
        ptpng_info_free(&info);
        snprintf(clean, sizeof(clean), "%s", nm);
        dot = strrchr(clean, '.');
        if (dot) *dot = 0;

        if (!bench_pair(data, size, PTPNG_OUT_NATIVE, &tpt_n, &tlp_n) ||
            !bench_pair(data, size, PTPNG_OUT_RGBA8, &tpt_r, &tlp_r) ||
            !bench_pair(data, size, PTPNG_OUT_RGB8, &tpt_rgb, &tlp_rgb)) {
            fprintf(stderr, "benchmark decode failed for %s\n", nm);
            free(data);
            fclose(js);
            return 1;
        }

        printf("%-18s [" REF_LABEL "] native: ptpng %7.2f MPix/s  ref %7.2f MPix/s (%.2fx)"
               "   rgba8: ptpng %7.2f   ref %7.2f  (%.2fx)"
               "   rgb8: ptpng %7.2f   ref %7.2f  (%.2fx)\n",
               nm,
               pixels / tpt_n / 1e6, pixels / tlp_n / 1e6,
               tlp_n / tpt_n,
               pixels / tpt_r / 1e6, pixels / tlp_r / 1e6,
               tlp_r / tpt_r,
               pixels / tpt_rgb / 1e6, pixels / tlp_rgb / 1e6, tlp_rgb / tpt_rgb);

        fprintf(js,
                "  {\"name\": \"%s/ptpng-vs-" REF_LABEL "/%s native\", \"unit\": \"MPix/s\", "
                "\"value\": %.2f, \"extra\": \"%s\"},\n",
                tag, clean, pixels / tpt_n / 1e6, ptpng_features());
        fprintf(js,
                "  {\"name\": \"%s/" REF_LABEL "/%s native\", \"unit\": \"MPix/s\", "
                "\"value\": %.2f},\n",
                tag, clean, pixels / tlp_n / 1e6);
        fprintf(js,
                "  {\"name\": \"%s/ptpng-vs-" REF_LABEL "/%s rgba8\", \"unit\": \"MPix/s\", "
                "\"value\": %.2f, \"extra\": \"%s\"},\n",
                tag, clean, pixels / tpt_r / 1e6, ptpng_features());
        fprintf(js,
                "  {\"name\": \"%s/" REF_LABEL "/%s rgba8\", \"unit\": \"MPix/s\", "
                "\"value\": %.2f},\n",
                tag, clean, pixels / tlp_r / 1e6);
        fprintf(js,
                "  {\"name\": \"%s/ptpng-vs-" REF_LABEL "/%s rgb8\", \"unit\": \"MPix/s\", "
                "\"value\": %.2f, \"extra\": \"%s\"},\n",
                tag, clean, pixels / tpt_rgb / 1e6, ptpng_features());
        fprintf(js,
                "  {\"name\": \"%s/" REF_LABEL "/%s rgb8\", \"unit\": \"MPix/s\", "
                "\"value\": %.2f}%s\n",
                tag, clean, pixels / tlp_rgb / 1e6,
                (i == argc - 1) ? "" : ",");
        free(data);
    }
    fprintf(js, "]\n");
    fclose(js);
    printf("wrote %s\n", outfile);
    return 0;
}
