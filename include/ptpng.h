/*
 * ptpng.h - maximum-speed single-threaded PNG decoder.
 *
 * Decodes every valid PNG per the PNG specification (all color types,
 * bit depths 1/2/4/8/16, Adam7 interlacing, tRNS, all standard ancillary
 * chunks).  Output is byte-compatible with libpng's png_read_image().
 *
 * Single header, no dependencies, C11.
 */
#ifndef PTPNG_H
#define PTPNG_H

#include <stddef.h>
#include <stdint.h>

#ifdef __cplusplus
extern "C" {
#endif

/* ---- error codes ---------------------------------------------------- */
enum {
    PTPNG_OK = 0,
    PTPNG_E_BAD_ARG,          /* NULL argument                          */
    PTPNG_E_BAD_SIGNATURE,    /* not a PNG file                         */
    PTPNG_E_TRUNCATED,        /* file/chunk cut short                   */
    PTPNG_E_BAD_CHUNK_LEN,    /* impossible chunk length                */
    PTPNG_E_BAD_CRC,          /* CRC mismatch on a critical chunk       */
    PTPNG_E_BAD_ZLIB_HEADER,  /* bad CMF/FLG, FDICT set, CINFO > 7      */
    PTPNG_E_BAD_ADLER,        /* zlib adler32 mismatch                  */
    PTPNG_E_INFLATE_CORRUPT,  /* invalid deflate stream                 */
    PTPNG_E_INFLATE_SIZE,     /* inflated data != expected raw size     */
    PTPNG_E_BAD_IHDR,         /* invalid header fields                  */
    PTPNG_E_COLOR_DEPTH,      /* invalid color type / bit depth combo   */
    PTPNG_E_NO_PLTE,          /* palette image without PLTE             */
    PTPNG_E_BAD_PLTE,         /* malformed PLTE                         */
    PTPNG_E_BAD_TRNS,         /* malformed tRNS                         */
    PTPNG_E_INTERLACE,        /* invalid interlace method               */
    PTPNG_E_UNKNOWN_CRITICAL, /* unknown critical chunk                 */
    PTPNG_E_OUT_OF_MEMORY,
    PTPNG_E_CHUNK_ORDER,      /* chunk in wrong place                   */
    PTPNG_E_NO_IDAT,
    PTPNG_E_NO_IEND,
    PTPNG_E_TOO_LARGE,        /* exceeds opts.max_bytes                 */
    PTPNG_E_EMPTY_PLTE,       /* zero-color PLTE                        */
    PTPNG_E_BAD_HUFFMAN,      /* oversubscribed/incomplete code lengths */
    PTPNG_E_UNSUPPORTED       /* valid PNG, unsupported corner case     */
};

const char *ptpng_strerror(int err);

/* ---- options -------------------------------------------------------- */
#define PTPNG_OUT_NATIVE 0   /* raw scanlines, packed as in the file    */
#define PTPNG_OUT_RGBA8  1   /* 8-bit RGBA, tRNS expanded to alpha     */
#define PTPNG_OUT_RGB8   2   /* 8-bit RGB (no alpha; tRNS ignored)     */

#define PTPNG_FLAG_NO_VERIFY_CRC    0x1  /* skip chunk CRC verification */
#define PTPNG_FLAG_NO_VERIFY_ADLER  0x2  /* skip zlib adler32 check     */

typedef struct {
    uint32_t flags;
    int      output_format;   /* PTPNG_OUT_* (default NATIVE)            */
    uint64_t max_bytes;       /* cap on decompressed size (default 3 GiB)*/
} ptpng_opts;

/* default max decompressed bytes (2^31 - 1 scanline bytes guard) */
#define PTPNG_DEFAULT_MAX_BYTES 0xC0000000ULL

/* ---- text chunks ----------------------------------------------------- */
typedef struct {
    const char *keyword;   /* NUL-terminated, latin-1 as stored         */
    const char *language; /* iTXt language tag, "" if none             */
    const char *translated;/* iTXt translated keyword, "" if none       */
    const char *text;     /* NUL-terminated; decompressed if zTXt/iTXt */
    int   compressed;     /* 1 if it was zTXt or compressed iTXt       */
} ptpng_text;

#define PTPNG_MAX_TEXT 128

typedef struct {
    const uint8_t *entries; /* raw entries as stored (see PNG spec)     */
    uint32_t nentries;
    const char *name;
    uint8_t sample_depth;   /* 8 or 16                                  */
} ptpng_splt;

#define PTPNG_MAX_SPLT 16

/* ---- decoded image information -------------------------------------- */
typedef struct {
    uint32_t width, height;
    uint8_t  bit_depth;       /* 1, 2, 4, 8, 16                         */
    uint8_t  color_type;      /* 0 gray, 2 RGB, 3 palette, 4 gray+a, 6 RGBA */
    uint8_t  interlace;       /* 0 or 1 (Adam7)                          */
    uint8_t  channels;        /* 1, 2, 3, 4                              */
    size_t   rowbytes;        /* row size of the returned buffer         */

    /* palette (color_type 3; also present if a suggested PLTE for
     * truecolor images was included).  palette[0..767] = RGB triples;
     * palette[768..1023] = tRNS alpha entries for palette images. */
    uint16_t num_palette;     /* 0 if no PLTE, else 1..256               */
    uint8_t  palette[1024];
    uint16_t num_trans;       /* tRNS entries when color_type 3          */

    /* tRNS (color_type 0: trns[0] = gray sample (host order);
     *        color_type 2: trns[0..2] = R,G,B samples;
     *        color_type 3: use palette/num_trans instead)              */
    uint8_t  has_trns;
    uint16_t trns[3];

    uint8_t  has_gAMA; uint32_t gAMA;
    uint8_t  has_cHRM; uint32_t cHRM[8];
    uint8_t  has_sRGB; uint8_t sRGB_intent;
    uint8_t  has_sBIT; uint8_t sBIT[4];
    uint8_t  has_bKGD; uint16_t bKGD[3]; /* ct3: bKGD[0]=index          */
    uint8_t  has_pHYs; uint32_t pHYs[3]; /* x ppu, y ppu, unit (1=m)    */
    uint8_t  has_tIME; uint8_t tIME[7];
    uint8_t  has_hIST; uint16_t num_hIST; const uint16_t *hIST; /* host order */
    uint8_t  has_iCCP; char iccp_name[80]; void *iccp_profile;
    size_t   iccp_profile_len;

    ptpng_text texts[PTPNG_MAX_TEXT]; int num_texts;
    ptpng_splt splts[PTPNG_MAX_SPLT]; int num_splts;

    uint8_t  has_eXIf; const uint8_t *eXIf_data; size_t eXIf_len;

    /* ancillary chunks whose CRC failed (informational) */
    uint32_t crc_warnings;

    /* internal: ancillary heap buffers referenced above; release with
     * ptpng_info_free() when done with the info (must not be freed
     * before the text/splt/hIST/iCCP pointers are no longer used). */
    void *_allocs[64];
    int _n_allocs;
} ptpng_info;

/* release ancillary buffers referenced by info; safe to call twice */
void ptpng_info_free(ptpng_info *info);

/* ---- API ------------------------------------------------------------- */

/* Decode a complete PNG from memory.  On success returns PTPNG_OK, stores
 * a malloc'd pixel buffer in *out (free with ptpng_free), its size in
 * *out_len (may be NULL) and fills *info (may be NULL).  Layout of *out:
 *   NATIVE - w*h packed scanlines exactly as PNG stores them (sub-byte
 *            depths packed MSB-first; 16-bit samples big-endian; palette
 *            indices), i.e. identical to libpng png_read_image() output.
 *   RGBA8  - w*h*4 bytes, tRNS expanded to alpha, 16-bit chopped to 8.
 *   RGB8   - w*h*3 bytes, 16-bit chopped to 8.                        */
int ptpng_decode(const void *data, size_t size, const ptpng_opts *opts,
                 void **out, size_t *out_len, ptpng_info *info);

void ptpng_free(void *p);

/* "ptpng 1.1 (sse2+avx2 pclmul)" style diagnostic string */
const char *ptpng_version(void);

/* space-separated runtime-detected CPU features used by this build,
 * e.g. "avx2 sse4.1 sse2 pclmul bmi2 " or "neon " */
const char *ptpng_features(void);

#ifdef __cplusplus
}
#endif

#endif /* PTPNG_H */
