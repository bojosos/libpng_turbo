/* Encode identical decoded pixels; report median latency AND output size.
 * Usage: bench_encode [--cpu N] <tag> <out.json> <input.png> [...]
 * JSON uses github-action-benchmark customSmallerIsBetter (ms and bytes).
 * Five timed encodes, excluding output free, after a verified warm-up.
 */
#include "ptpng.h"
#include "png.h"
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <time.h>
#ifndef REF_LABEL
#define REF_LABEL "libpng"
#endif
#ifdef _WIN32
#include <windows.h>
#endif

static double now_sec(void)
{
#ifdef _WIN32
    LARGE_INTEGER c, f;
    QueryPerformanceCounter(&c); QueryPerformanceFrequency(&f);
    return (double)c.QuadPart / (double)f.QuadPart;
#else
    struct timespec ts;
    clock_gettime(CLOCK_MONOTONIC, &ts);
    return (double)ts.tv_sec + (double)ts.tv_nsec * 1e-9;
#endif
}

static void *read_file(const char *path, size_t *n)
{
    FILE *f = fopen(path, "rb");
    long len;
    void *p;
    if (!f) return NULL;
    if (fseek(f, 0, SEEK_END) || (len = ftell(f)) <= 0 || fseek(f, 0, SEEK_SET)) {
        fclose(f); return NULL;
    }
    p = malloc((size_t)len);
    if (!p) { fclose(f); return NULL; }
    if (fread(p, 1, (size_t)len, f) != (size_t)len) {
        free(p); fclose(f); return NULL;
    }
    fclose(f); *n = (size_t)len; return p;
}

typedef struct { unsigned char *data; size_t size, capacity; } buffer;
static void write_memory(png_structp png, png_bytep data, png_size_t n)
{
    buffer *b = (buffer *)png_get_io_ptr(png);
    size_t needed, capacity;
    unsigned char *p;
    if (n > SIZE_MAX - b->size) png_error(png, "output too large");
    needed = b->size + n;
    if (needed > b->capacity) {
        capacity = b->capacity ? b->capacity : 65536;
        while (capacity < needed) {
            if (capacity > SIZE_MAX / 2) { capacity = needed; break; }
            capacity *= 2;
        }
        p = (unsigned char *)realloc(b->data, capacity);
        if (!p) png_error(png, "allocation failed");
        b->data = p; b->capacity = capacity;
    }
    memcpy(b->data + b->size, data, n); b->size = needed;
}
static void flush_memory(png_structp png) { (void)png; }

static int encode_reference(const void *pixels, const ptpng_info *im, int level,
                            void **out, size_t *out_n)
{
    png_structp png = png_create_write_struct(PNG_LIBPNG_VER_STRING, NULL, NULL, NULL);
    png_infop info;
    /* Heap state remains defined if libpng returns through longjmp. */
    buffer *b;
    uint32_t y;
    *out = NULL; *out_n = 0;
    if (!png) return 0;
    info = png_create_info_struct(png);
    if (!info) { png_destroy_write_struct(&png, NULL); return 0; }
    b = (buffer *)calloc(1, sizeof(*b));
    if (!b) { png_destroy_write_struct(&png, &info); return 0; }
    if (setjmp(png_jmpbuf(png))) {
        free(b->data); free(b); png_destroy_write_struct(&png, &info); return 0;
    }
    png_set_write_fn(png, b, write_memory, flush_memory);
    png_set_compression_level(png, level);
    png_set_filter(png, PNG_FILTER_TYPE_BASE, PNG_ALL_FILTERS);
    png_set_IHDR(png, info, im->width, im->height, im->bit_depth, im->color_type,
                 PNG_INTERLACE_NONE, PNG_COMPRESSION_TYPE_BASE, PNG_FILTER_TYPE_BASE);
    png_write_info(png, info);
    for (y = 0; y < im->height; y++)
        png_write_row(png, (png_const_bytep)pixels + (size_t)y * im->rowbytes);
    png_write_end(png, info);
    png_destroy_write_struct(&png, &info);
    *out = b->data; *out_n = b->size; free(b);
    return 1;
}

static int encode_one(const void *pixels, size_t size, const ptpng_info *im,
                      int method, void **out, size_t *out_n)
{
    if (method == 0)
        return ptpng_encode(pixels, size, im->width, im->height, im->rowbytes,
                            im->color_type, im->bit_depth, NULL, out, out_n) == PTPNG_OK;
    return encode_reference(pixels, im, method == 1 ? 1 : 6, out, out_n);
}

static int verify(const void *png, size_t n, const void *pixels, size_t size,
                   const ptpng_info *im)
{
    void *decoded = NULL;
    size_t decoded_n = 0;
    ptpng_info info;
    int rc, ok;
    memset(&info, 0, sizeof(info));
    rc = ptpng_decode(png, n, NULL, &decoded, &decoded_n, &info);
    ok = rc == PTPNG_OK && decoded_n == size && info.width == im->width &&
         info.height == im->height && info.bit_depth == im->bit_depth &&
         info.color_type == im->color_type && !memcmp(decoded, pixels, size);
    ptpng_free(decoded); ptpng_info_free(&info);
    return ok;
}

static int cmp_double(const void *a, const void *b)
{
    double x = *(const double *)a, y = *(const double *)b;
    return (x > y) - (x < y);
}

/* JSON strings can contain user-provided paths and platform tags. */
static void json_string(FILE *f, const char *s)
{
    const unsigned char *p = (const unsigned char *)s;
    fputc('"', f);
    for (; *p; p++) {
        if (*p == '"' || *p == '\\') { fputc('\\', f); fputc(*p, f); }
        else if (*p < 32) fprintf(f, "\\u%04x", (unsigned)*p);
        else fputc(*p, f);
    }
    fputc('"', f);
}

static const char *basename_portable(const char *p)
{
    const char *a = strrchr(p, '/'), *b = strrchr(p, '\\');
    if (b && (!a || b > a)) a = b;
    return a ? a + 1 : p;
}

int main(int argc, char **argv)
{
    static const char *methods[] = {"ptpng-vs-" REF_LABEL, REF_LABEL "-level1", REF_LABEL "-level6"};
    int first = 1, start = 1, arg, status = 0;
    FILE *json;
    const char *tag;
    if (argc > 2 && !strcmp(argv[1], "--cpu")) {
        char *end;
        long cpu = strtol(argv[2], &end, 10);
        if (!argv[2][0] || *end || cpu < 0) {
            fprintf(stderr, "invalid CPU index\n"); return 2;
        }
#ifdef _WIN32
        if (cpu >= (long)(sizeof(DWORD_PTR) * 8) ||
            !SetProcessAffinityMask(GetCurrentProcess(), (DWORD_PTR)1 << cpu)) {
            fprintf(stderr, "unable to pin CPU %ld\n", cpu); return 2;
        }
#else
        fprintf(stderr, "--cpu is supported on Windows; use taskset on Linux\n");
        return 2;
#endif
        start = 3;
    }
    if (argc < start + 3) {
        fprintf(stderr, "usage: bench_encode [--cpu N] <tag> <out.json> <img...>\n");
        return 2;
    }
    tag = argv[start];
    json = fopen(argv[start + 1], "w");
    if (!json) { perror(argv[start + 1]); return 2; }
    fprintf(json, "[\n");
    printf("Encoder: five samples, median; checksums enabled; output free excluded\n");
    for (arg = start + 2; arg < argc; arg++) {
        size_t input_n = 0, size = 0, encoded_n[3] = {0,0,0};
        void *input = read_file(argv[arg], &input_n), *pixels = NULL;
        ptpng_info im;
        ptpng_opts opts = {0, PTPNG_OUT_NATIVE, 0};
        double times[3][5];
        int rc, m, round, failed = 0;
        memset(&im, 0, sizeof(im));
        if (!input) { fprintf(stderr, "cannot read %s\n", argv[arg]); status = 1; continue; }
        rc = ptpng_decode(input, input_n, &opts, &pixels, &size, &im);
        if (rc == PTPNG_OK && (im.color_type == 3 || im.bit_depth < 8)) {
            ptpng_free(pixels); pixels = NULL; ptpng_info_free(&im);
            opts.output_format = PTPNG_OUT_RGBA8;
            rc = ptpng_decode(input, input_n, &opts, &pixels, &size, &im);
            /* Decoder info retains the source IHDR; describe returned RGBA pixels. */
            im.color_type = 6; im.bit_depth = 8; im.channels = 4;
        }
        free(input);
        if (rc != PTPNG_OK) {
            fprintf(stderr, "decode %s: %s\n", argv[arg], ptpng_strerror(rc));
            ptpng_free(pixels); ptpng_info_free(&im); status = 1; continue;
        }
        /* A separate verified warm-up prevents correctness work entering timings. */
        for (m = 0; m < 3; m++) {
            void *out = NULL;
            printf("Verifying %s: %s\n", basename_portable(argv[arg]), methods[m]);
            fflush(stdout);
            if (!encode_one(pixels, size, &im, m, &out, &encoded_n[m]) ||
                !verify(out, encoded_n[m], pixels, size, &im)) failed = 1;
            ptpng_free(out);
        }
        /* Rotate order to distribute clock and temperature drift across encoders. */
        for (round = 0; round < 5 && !failed; round++) for (m = 0; m < 3; m++) {
            int method = (m + round) % 3;
            void *out = NULL;
            size_t n = 0;
            double t0 = now_sec();
            int ok = encode_one(pixels, size, &im, method, &out, &n);
            times[method][round] = now_sec() - t0;
            ptpng_free(out);
            if (!ok || n != encoded_n[method]) failed = 1;
        }
        if (failed) {
            fprintf(stderr, "encoding/round-trip failed: %s\n", argv[arg]); status = 1;
        } else for (m = 0; m < 3; m++) {
            char name[1024];
            double ms;
            qsort(times[m], 5, sizeof(double), cmp_double);
            ms = times[m][2] * 1000.0;
            printf("%-24s %-14s %9.3f ms %10zu bytes %8.2f MPix/s\n",
                   basename_portable(argv[arg]), methods[m], ms, encoded_n[m],
                   (double)im.width * im.height / (times[m][2] * 1e6));
            if (!first) fprintf(json, ",\n");
            first = 0;
            snprintf(name, sizeof(name), "%s / %s / %s encode time", tag,
                     basename_portable(argv[arg]), methods[m]);
            fprintf(json, "  {\"name\":"); json_string(json, name);
            fprintf(json, ",\"unit\":\"ms\",\"value\":%.6f},\n", ms);
            snprintf(name, sizeof(name), "%s / %s / %s encoded size", tag,
                     basename_portable(argv[arg]), methods[m]);
            fprintf(json, "  {\"name\":"); json_string(json, name);
            fprintf(json, ",\"unit\":\"bytes\",\"value\":%zu}", encoded_n[m]);
        }
        ptpng_free(pixels); ptpng_info_free(&im);
        fflush(stdout);
        fflush(json);
    }
    fprintf(json, "\n]\n");
    if (fclose(json)) status = 1;
    return status;
}
