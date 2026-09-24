/*
 * verify_suite.c - portable conformance runner: decodes every PNG in the
 * given directories with ptpng (native/rgba8/rgb8) and byte-compares
 * against a libpng reference implementation.  Exits nonzero on any
 * mismatch.  Also runs the exhaustive Paeth predictor check.
 */
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "ptpng.h"
#include "png.h"

extern int ptpng_paeth_pred_ext(int, int, int);

static int paeth_ref(int a, int b, int c)
{
    int p = a + b - c;
    int pa = p - a; if (pa < 0) pa = -pa;
    int pb = p - b; if (pb < 0) pb = -pb;
    int pc = p - c; if (pc < 0) pc = -pc;
    if (pa <= pb && pa <= pc) return a;
    if (pb <= pc) return b;
    return c;
}

static int test_paeth(void)
{
    int a, b, c;
    for (a = 0; a < 256; a++)
        for (b = 0; b < 256; b++)
            for (c = 0; c < 256; c++)
                if (ptpng_paeth_pred_ext(a, b, c) != paeth_ref(a, b, c)) {
                    printf("paeth mismatch %d %d %d\n", a, b, c);
                    return 1;
                }
    printf("paeth: 16.7M triples OK\n");
    return 0;
}

/* libpng reference: fmt 0 native, 1 rgba8, 2 rgb8 (same transforms as
 * the Windows libpng_bench reference tool); reads from memory via a
 * png_read callback so no fmemopen dependency */
typedef struct {
    const uint8_t *p;
    size_t n, off;
} mem_reader;

static void mem_read_fn(png_structp png, png_bytep out, png_size_t len)
{
    mem_reader *m = (mem_reader *)png_get_io_ptr(png);
    if (m->off + len > m->n)
        png_error(png, "read past end");
    memcpy(out, m->p + m->off, len);
    m->off += len;
}

static int ref_decode(const uint8_t *data, size_t size, int fmt,
                      uint8_t **out, size_t *out_len, png_uint_32 *w,
                      png_uint_32 *h)
{
    png_structp png;
    png_infop info;
    png_bytep *rows;
    size_t rb;
    png_uint_32 y, height;
    int depth, ct, has_alpha;
    mem_reader mr;
    *out = NULL;
    mr.p = data; mr.n = size; mr.off = 0;
    png = png_create_read_struct(PNG_LIBPNG_VER_STRING, NULL, NULL, NULL);
    info = png_create_info_struct(png);
    if (setjmp(png_jmpbuf(png))) {
        png_destroy_read_struct(&png, &info, NULL);
        return -1;
    }
    png_set_read_fn(png, &mr, mem_read_fn);
    png_read_info(png, info);
    *w = png_get_image_width(png, info);
    *h = png_get_image_height(png, info);
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
    height = *h;
    rows = (png_bytep *)malloc(sizeof(png_bytep) * (height ? height : 1));
    for (y = 0; y < height; y++)
        rows[y] = (png_bytep)calloc(rb + 64, 1); /* zeroed sub-byte pad */
    png_read_image(png, rows);
    png_destroy_read_struct(&png, &info, NULL);
    *out_len = rb * height;
    *out = (uint8_t *)malloc(*out_len ? *out_len : 1);
    {
        size_t off = 0;
        for (y = 0; y < height; y++) {
            memcpy(*out + off, rows[y], rb);
            off += rb;
            free(rows[y]);
        }
        free(rows);
    }
    return 0;
}

static int check_file(const char *path)
{
    FILE *f = fopen(path, "rb");
    long sz;
    uint8_t *data;
    int fmt, bad = 0;
    if (!f) return -1;
    fseek(f, 0, SEEK_END); sz = ftell(f); fseek(f, 0, SEEK_SET);
    data = (uint8_t *)malloc((size_t)sz);
    if (fread(data, 1, (size_t)sz, f) != (size_t)sz) { fclose(f); return -1; }
    fclose(f);

    for (fmt = 0; fmt < 3; fmt++) {
        void *pt_out = NULL;
        size_t pt_len = 0, ref_len = 0;
        uint8_t *ref_out = NULL;
        png_uint_32 w = 0, h = 0;
        ptpng_opts opts;
        int rc;
        memset(&opts, 0, sizeof(opts));
        opts.output_format = fmt;
        opts.max_bytes = 1u << 28;
        rc = ptpng_decode(data, (size_t)sz, &opts, &pt_out, &pt_len, NULL);
        if (ref_decode(data, (size_t)sz, fmt, &ref_out, &ref_len, &w, &h)) {
            /* reference fails: ptpng may legitimately fail too, but a
             * ptpng success on a broken file is a mismatch */
            if (rc == PTPNG_OK) {
                printf("MISMATCH %s fmt%d: libpng rejects, ptpng accepts\n",
                       path, fmt);
                bad = 1;
            }
            ptpng_free(pt_out);
            continue;
        }
        if (rc != PTPNG_OK) {
            printf("MISMATCH %s fmt%d: libpng decodes, ptpng rc=%d (%s)\n",
                   path, fmt, rc, ptpng_strerror(rc));
            bad = 1;
            free(ref_out);
            ptpng_free(pt_out);
            continue;
        }
        if (pt_len != ref_len || memcmp(pt_out, ref_out, ref_len)) {
            size_t k = 0;
            const uint8_t *a = (const uint8_t *)pt_out;
            if (pt_len == ref_len)
                while (k < ref_len && a[k] == ref_out[k]) k++;
            printf("MISMATCH %s fmt%d: len pt=%zu ref=%zu firstdiff=%zu\n",
                   path, fmt, pt_len, ref_len,
                   pt_len == ref_len ? k : 0);
            bad = 1;
        }
        free(ref_out);
        ptpng_free(pt_out);
    }
    free(data);
    return bad;
}

#ifdef _WIN32
#include <windows.h>
static int scan_dir(const char *dir, int *count, int *bad)
{
    WIN32_FIND_DATAA fd;
    HANDLE h;
    char pat[1024];
    snprintf(pat, sizeof(pat), "%s\\*.png", dir);
    h = FindFirstFileA(pat, &fd);
    if (h == INVALID_HANDLE_VALUE) return -1;
    do {
        char path[1024];
        snprintf(path, sizeof(path), "%s\\%s", dir, fd.cFileName);
        if (check_file(path)) { (*bad)++; printf("  ^ in %s\n", path); }
        (*count)++;
    } while (FindNextFileA(h, &fd));
    FindClose(h);
    return 0;
}
#else
#include <dirent.h>
static int scan_dir(const char *dir, int *count, int *bad)
{
    DIR *d = opendir(dir);
    struct dirent *e;
    if (!d) return -1;
    while ((e = readdir(d))) {
        size_t n = strlen(e->d_name);
        char path[1024];
        if (n < 4 || strcmp(e->d_name + n - 4, ".png"))
            continue;
        snprintf(path, sizeof(path), "%s/%s", dir, e->d_name);
        if (check_file(path)) { (*bad)++; printf("  ^ in %s\n", path); }
        (*count)++;
    }
    closedir(d);
    return 0;
}
#endif

int main(int argc, char **argv)
{
    int i, count = 0, bad = 0;
    if (argc < 2) {
        fprintf(stderr, "usage: verify_suite <dir-with-pngs> [...]\n");
        return 2;
    }
    printf("ptpng %s features: %s\n", ptpng_version(), ptpng_features());
    if (test_paeth())
        return 1;
    for (i = 1; i < argc; i++) {
        if (scan_dir(argv[i], &count, &bad)) {
            fprintf(stderr, "cannot scan %s\n", argv[i]);
            return 2;
        }
    }
    printf("verify: %d images x 3 formats, failures=%d\n", count, bad);
    return bad ? 1 : 0;
}
