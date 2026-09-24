/*
 * ptpng_tool.c - CLI: decode / verify / benchmark / info dump.
 */
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <time.h>
#ifdef _WIN32
#include <windows.h>
#endif
#include "ptpng.h"

static double now_sec(void)
{
#ifdef _WIN32
    LARGE_INTEGER count, frequency;
    QueryPerformanceCounter(&count);
    QueryPerformanceFrequency(&frequency);
    return (double)count.QuadPart / (double)frequency.QuadPart;
#else
    struct timespec ts;
    clock_gettime(CLOCK_MONOTONIC, &ts);
    return (double)ts.tv_sec + (double)ts.tv_nsec * 1e-9;
#endif
}

static const char *file_base(const char *p)
{
    const char *s = strrchr(p, '\\');
    const char *s2 = strrchr(p, '/');
    if (s2 && (!s || s2 > s)) s = s2;
    return s ? s + 1 : p;
}

int main(int argc, char **argv)
{
    const char *path = NULL, *outpath = NULL;
    int fmt = PTPNG_OUT_NATIVE, info_only = 0, bench = 0, noverify = 0;
    int i;
    FILE *f;
    long fsz;
    uint8_t *data;
    void *out = NULL;
    size_t out_len = 0;
    ptpng_info info;
    ptpng_opts opts;
    int rc;

    for (i = 1; i < argc; i++) {
        if (!strcmp(argv[i], "--rgba8")) fmt = PTPNG_OUT_RGBA8;
        else if (!strcmp(argv[i], "--rgb8")) fmt = PTPNG_OUT_RGB8;
        else if (!strcmp(argv[i], "--native")) fmt = PTPNG_OUT_NATIVE;
        else if (!strcmp(argv[i], "--info")) info_only = 1;
        else if (!strcmp(argv[i], "--noverify")) noverify = 1;
        else if (!strcmp(argv[i], "-o") && i + 1 < argc) outpath = argv[++i];
        else if (!strcmp(argv[i], "--bench") && i + 1 < argc) bench = atoi(argv[++i]);
        else if (argv[i][0] == '-' && argv[i][1]) {
            fprintf(stderr, "unknown option %s\n", argv[i]);
            return 2;
        } else path = argv[i];
    }
    if (!path) {
        fprintf(stderr,
            "usage: ptpng file.png [--native|--rgba8|--rgb8] [--info]\n"
            "                     [-o out.raw] [--bench N] [--noverify]\n");
        return 2;
    }

    f = fopen(path, "rb");
    if (!f) { perror(path); return 2; }
    fseek(f, 0, SEEK_END);
    fsz = ftell(f);
    fseek(f, 0, SEEK_SET);
    data = (uint8_t *)malloc((size_t)fsz);
    if (!data || fread(data, 1, (size_t)fsz, f) != (size_t)fsz) {
        fprintf(stderr, "read error\n");
        return 2;
    }
    fclose(f);

    memset(&opts, 0, sizeof(opts));
    opts.output_format = fmt;
    if (noverify)
        opts.flags |= PTPNG_FLAG_NO_VERIFY_CRC | PTPNG_FLAG_NO_VERIFY_ADLER;

    rc = ptpng_decode(data, (size_t)fsz, &opts, &out, &out_len, &info);
    if (rc != PTPNG_OK) {
        fprintf(stderr, "%s: ERROR %d (%s)\n", file_base(path), rc,
                ptpng_strerror(rc));
        free(data);
        return 1;
    }

    if (info_only)
        printf("%s | features: %s\n", ptpng_version(), ptpng_features());
    printf("%s: %ux%u depth=%u ct=%u interlace=%u ch=%u out=%zu",
           file_base(path), info.width, info.height, info.bit_depth,
           info.color_type, info.interlace, info.channels, out_len);
    if (info.num_palette) printf(" plte=%u", info.num_palette);
    if (info.num_trans) printf(" trans=%u", info.num_trans);
    if (info.has_trns) printf(" trns");
    if (info.has_gAMA) printf(" gAMA=%u", info.gAMA);
    if (info.has_cHRM) printf(" cHRM");
    if (info.has_sRGB) printf(" sRGB=%u", info.sRGB_intent);
    if (info.has_sBIT) printf(" sBIT");
    if (info.has_bKGD) printf(" bKGD");
    if (info.has_pHYs) printf(" pHYs");
    if (info.has_tIME) printf(" tIME");
    if (info.has_hIST) printf(" hIST=%u", info.num_hIST);
    if (info.has_iCCP) printf(" iCCP=%zu", info.iccp_profile_len);
    if (info.num_texts) printf(" texts=%d", info.num_texts);
    if (info.num_splts) printf(" sPLT=%d", info.num_splts);
    if (info.has_eXIf) printf(" eXIf=%zu", info.eXIf_len);
    if (info.crc_warnings) printf(" crcwarn=%u", info.crc_warnings);
    printf("\n");

    for (i = 0; i < info.num_texts && info_only; i++)
        printf("  text[%d] kw=\"%s\"%s len=%zu\n", i, info.texts[i].keyword,
               info.texts[i].compressed ? " (compressed)" : "",
               strlen(info.texts[i].text));

    if (outpath) {
        FILE *o = fopen(outpath, "wb");
        if (!o) { perror(outpath); return 2; }
        fwrite(out, 1, out_len, o);
        fclose(o);
    }

    if (bench > 0) {
        double best = 1e30, total = 0;
        int it;
        for (it = 0; it < bench; it++) {
            double t0 = now_sec(), t1;
            void *o2 = NULL;
            size_t l2 = 0;
            ptpng_decode(data, (size_t)fsz, &opts, &o2, &l2, NULL);
            t1 = now_sec();
            ptpng_free(o2);
            if (t1 - t0 < best) best = t1 - t0;
            total += t1 - t0;
        }
        printf("bench: %d iters, best %.3f ms, avg %.3f ms, "
               "%.1f MB/s pixels, %.1f MB/s file\n",
               bench, best * 1e3, total / bench * 1e3,
               (double)out_len / best / 1e6,
               (double)fsz / best / 1e6);
    }

    ptpng_free(out);
    ptpng_info_free(&info);
    free(data);
    return 0;
}
