/* Repeated, single-threaded API calls for external profilers.
 * Usage: profile_png encode|decode image.png seconds [native|rgba8|rgb8]
 * File I/O, warm-up and round-trip validation precede the timed loop.
 * The profiler sees the whole process, including this brief setup phase.
 */
#include "ptpng.h"
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <time.h>
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

static void *read_file(const char *path, size_t *size)
{
    FILE *f = fopen(path, "rb");
    long n;
    void *p;
    if (!f) return NULL;
    if (fseek(f, 0, SEEK_END) || (n = ftell(f)) <= 0 ||
        fseek(f, 0, SEEK_SET)) { fclose(f); return NULL; }
    p = malloc((size_t)n);
    if (!p) { fclose(f); return NULL; }
    if (fread(p, 1, (size_t)n, f) != (size_t)n) {
        free(p); fclose(f); return NULL;
    }
    fclose(f); *size = (size_t)n; return p;
}

int main(int argc, char **argv)
{
    ptpng_opts opts = {0};
    ptpng_info info = {0};
    void *input = NULL, *pixels = NULL, *encoded = NULL, *check = NULL;
    size_t input_n = 0, pixels_n = 0, encoded_n = 0, check_n = 0;
    size_t output_n = 0, iterations = 0;
    double seconds, start, elapsed;
    char *end;
    int encode, err = PTPNG_OK, status = 1;
    if (argc < 4 || argc > 5 ||
        (strcmp(argv[1], "encode") && strcmp(argv[1], "decode"))) {
        fprintf(stderr, "Usage: %s encode|decode image.png seconds [native|rgba8|rgb8]\n", argv[0]);
        return 2;
    }
    encode = !strcmp(argv[1], "encode");
    seconds = strtod(argv[3], &end);
    if (end == argv[3] || *end || !(seconds > 0 && seconds <= 60)) {
        fprintf(stderr, "seconds must be in (0, 60]\n"); return 2;
    }
    if (argc == 5) {
        if (!strcmp(argv[4], "rgba8")) opts.output_format = PTPNG_OUT_RGBA8;
        else if (!strcmp(argv[4], "rgb8")) opts.output_format = PTPNG_OUT_RGB8;
        else if (strcmp(argv[4], "native")) {
            fprintf(stderr, "Unknown output format\n"); return 2;
        }
    }
    input = read_file(argv[2], &input_n);
    if (!input) { fprintf(stderr, "Cannot read %s\n", argv[2]); goto done; }
    err = ptpng_decode(input, input_n, &opts, &pixels, &pixels_n, &info);
    if (err) goto done;
    /* Decode metadata preserves the file's color type and sample depth. */
    if (opts.output_format != PTPNG_OUT_NATIVE) {
        info.color_type = opts.output_format == PTPNG_OUT_RGBA8 ? 6 : 2;
        info.bit_depth = 8;
    }
    if (encode) {
        err = ptpng_encode(pixels, pixels_n, info.width, info.height,
                           info.rowbytes, info.color_type, info.bit_depth,
                           NULL, &encoded, &encoded_n);
        if (err) goto done;
        err = ptpng_decode(encoded, encoded_n, NULL, &check, &check_n, NULL);
    } else {
        err = ptpng_decode(input, input_n, &opts, &check, &check_n, NULL);
    }
    if (err) goto done;
    if (check_n != pixels_n || memcmp(check, pixels, pixels_n)) {
        fprintf(stderr, "Warm-up pixel validation failed\n"); goto done;
    }
    ptpng_free(check); check = NULL;
    ptpng_free(encoded); encoded = NULL;
    start = now_sec();
    do {
        if (encode) {
            err = ptpng_encode(pixels, pixels_n, info.width, info.height,
                               info.rowbytes, info.color_type, info.bit_depth,
                               NULL, &encoded, &output_n);
            ptpng_free(encoded); encoded = NULL;
        } else {
            err = ptpng_decode(input, input_n, &opts, &check, &output_n, NULL);
            ptpng_free(check); check = NULL;
        }
        if (err) goto done;
        ++iterations;
        elapsed = now_sec() - start;
    } while (elapsed < seconds);
    printf("operation=%s image=%s format=%s width=%u height=%u "
           "input_bytes=%zu decoded_bytes=%zu output_bytes=%zu "
           "iterations=%zu seconds=%.6f MPix_per_second=%.3f features=%s\n",
           argv[1], argv[2], argc == 5 ? argv[4] : "native",
           info.width, info.height, input_n, pixels_n, output_n,
           iterations, elapsed, (double)info.width * info.height *
           (double)iterations / elapsed / 1e6, ptpng_features());
    status = 0;
done:
    if (err) fprintf(stderr, "%s\n", ptpng_strerror(err));
    ptpng_free(check); ptpng_free(encoded); ptpng_free(pixels);
    ptpng_info_free(&info); free(input);
    return status;
}
