/*
 * libpng_bench.c - decode with libpng (reference implementation) for
 * byte-exact comparison against ptpng, and benchmarking.
 */
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <windows.h>
#include "png.h"

static double now_sec(void)
{
    LARGE_INTEGER c, f;
    QueryPerformanceCounter(&c);
    QueryPerformanceFrequency(&f);
    return (double)c.QuadPart / (double)f.QuadPart;
}

int main(int argc, char **argv)
{
    const char *path = NULL, *outpath = NULL;
    int fmt = 0 /*native*/, bench = 0; /* 1 rgba8 2 rgb8 */
    int i;
    FILE *f;
    png_image image;

    for (i = 1; i < argc; i++) {
        if (!strcmp(argv[i], "--rgba8")) fmt = 1;
        else if (!strcmp(argv[i], "--rgb8")) fmt = 2;
        else if (!strcmp(argv[i], "--native")) fmt = 0;
        else if (!strcmp(argv[i], "-o") && i + 1 < argc) outpath = argv[++i];
        else if (!strcmp(argv[i], "--bench") && i + 1 < argc) bench = atoi(argv[++i]);
        else path = argv[i];
    }
    if (!path) {
        fprintf(stderr, "usage: libpng_bench file.png [--native|--rgba8|--rgb8] [-o out] [--bench N]\n");
        return 2;
    }

    /* simple libpng read replicating ptpng's formats */
    if (fmt == 0) {
        /* native: png_read_image, packed as stored */
        png_structp png;
        png_infop info;
        png_bytep *rows;
        png_uint_32 w, h;
        int depth, ct;
        FILE *out;
        f = fopen(path, "rb");
        if (!f) { perror(path); return 2; }
        png = png_create_read_struct(PNG_LIBPNG_VER_STRING, NULL, NULL, NULL);
        info = png_create_info_struct(png);
        if (setjmp(png_jmpbuf(png))) {
            fprintf(stderr, "libpng error\n");
            return 1;
        }
        png_init_io(png, f);
        png_read_info(png, info);
        w = png_get_image_width(png, info);
        h = png_get_image_height(png, info);
        depth = png_get_bit_depth(png, info);
        ct = png_get_color_type(png, info);
        rows = (png_bytep *)malloc(sizeof(png_bytep) * h);
        {
            size_t rb = png_get_rowbytes(png, info);
            png_uint_32 y;
            for (y = 0; y < h; y++)
                rows[y] = (png_bytep)calloc(rb + 64, 1);
            png_read_image(png, rows);
            if (bench > 0) {
                double best = 1e30;
                int it;
                for (it = 0; it < bench; it++) {
                    png_uint_32 y2;
                    double t0 = now_sec();
                    png_structp p2 = png_create_read_struct(PNG_LIBPNG_VER_STRING, NULL, NULL, NULL);
                    png_infop i2 = png_create_info_struct(p2);
                    rewind(f);
                    png_init_io(p2, f);
                    png_read_info(p2, i2);
                    png_read_image(p2, rows); /* reuse row buffers */
                    png_destroy_read_struct(&p2, &i2, NULL);
                    best = now_sec() - t0 < best ? now_sec() - t0 : best;
                    (void)y2;
                }
                printf("bench: best %.3f ms\n", best * 1e3);
            }
            fclose(f);
            out = outpath ? fopen(outpath, "wb") : NULL;
            printf("%s: %ux%u depth=%d ct=%d out=%zu\n", path, w, h, depth,
                   ct, rb * h);
            if (out) {
                for (y = 0; y < h; y++)
                    fwrite(rows[y], 1, rb, out);
                fclose(out);
            }
            for (y = 0; y < h; y++)
                free(rows[y]);
            free(rows);
        }
        png_destroy_read_struct(&png, &info, NULL);
        return 0;
    } else {
        /* transformed 8-bit rgb/rgba via png_image simplified API? no:
         * replicate ptpng semantics with the low-level API */
        png_structp png;
        png_infop info;
        png_bytep *rows;
        png_uint_32 w, h;
        int depth, ct, has_alpha;
        size_t rb;
        png_uint_32 y;
        FILE *out;
        f = fopen(path, "rb");
        if (!f) { perror(path); return 2; }
        png = png_create_read_struct(PNG_LIBPNG_VER_STRING, NULL, NULL, NULL);
        info = png_create_info_struct(png);
        if (setjmp(png_jmpbuf(png))) {
            fprintf(stderr, "libpng error\n");
            return 1;
        }
        png_init_io(png, f);
        png_read_info(png, info);
        w = png_get_image_width(png, info);
        h = png_get_image_height(png, info);
        depth = png_get_bit_depth(png, info);
        ct = png_get_color_type(png, info);
        has_alpha = (ct & PNG_COLOR_MASK_ALPHA) ||
                    png_get_valid(png, info, PNG_INFO_tRNS);

        png_set_expand(png);
        if (depth == 16)
            png_set_strip_16(png);
        if (!(ct & PNG_COLOR_MASK_COLOR))
            png_set_gray_to_rgb(png);
        if (fmt == 1 && !has_alpha)
            png_set_filler(png, 0xFFFFFFFF, PNG_FILLER_AFTER);
        if (fmt == 2)
            png_set_strip_alpha(png);
        png_read_update_info(png, info);
        rb = png_get_rowbytes(png, info);
        rows = (png_bytep *)malloc(sizeof(png_bytep) * h);
        for (y = 0; y < h; y++)
            rows[y] = (png_bytep)calloc(rb + 64, 1);
        png_read_image(png, rows);
        if (bench > 0) {
            double best = 1e30;
            int it;
            for (it = 0; it < bench; it++) {
                double t0 = now_sec();
                png_structp p2 = png_create_read_struct(PNG_LIBPNG_VER_STRING, NULL, NULL, NULL);
                png_infop i2 = png_create_info_struct(p2);
                rewind(f);
                png_init_io(p2, f);
                png_read_info(p2, i2);
                /* apply same transforms */
                {
                    int d2 = png_get_bit_depth(p2, i2);
                    int c2 = png_get_color_type(p2, i2);
                    png_set_expand(p2);
                    if (d2 == 16)
                        png_set_strip_16(p2);
                    if (!(c2 & PNG_COLOR_MASK_COLOR))
                        png_set_gray_to_rgb(p2);
                    if (fmt == 1 && !has_alpha)
                        png_set_filler(p2, 0xFFFFFFFF, PNG_FILLER_AFTER);
                    if (fmt == 2)
                        png_set_strip_alpha(p2);
                }
                png_read_update_info(p2, i2);
                png_read_image(p2, rows);
                png_destroy_read_struct(&p2, &i2, NULL);
                if (now_sec() - t0 < best) best = now_sec() - t0;
            }
            printf("bench: best %.3f ms\n", best * 1e3);
        }
        fclose(f);
        printf("%s: %ux%u depth=%d ct=%d out=%zu\n", path, w, h, depth, ct,
               rb * h);
        out = outpath ? fopen(outpath, "wb") : NULL;
        if (out) {
            for (y = 0; y < h; y++)
                fwrite(rows[y], 1, rb, out);
            fclose(out);
        }
        for (y = 0; y < h; y++)
            free(rows[y]);
        free(rows);
        png_destroy_read_struct(&png, &info, NULL);
        return 0;
    }
}
