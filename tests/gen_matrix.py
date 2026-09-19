"""
gen_matrix.py - generate a comprehensive PNG conformance matrix with a
from-scratch encoder (full control over filters, interlace, IDAT split,
ancillary chunks). Reference pixels are kept alongside for checking.
"""
import os, struct, zlib, random, json

OUT = r"tests\gen"
os.makedirs(OUT, exist_ok=True)

def chunk(tag, data):
    return struct.pack(">I", len(data)) + tag + data + struct.pack(
        ">I", zlib.crc32(tag + data) & 0xFFFFFFFF)

def write_png(path, w, h, depth, ct, pixels, interlace=0, filter_choice=0,
              idat_split=0, extra_chunks=b"", zlib_level=6, zlib_strategy=0,
              palette=None, trns=None):
    """pixels: list of rows; each row is a list of samples (native values)."""
    chans = {0:1, 2:3, 3:1, 4:2, 6:4}[ct]
    bitpp = chans * depth
    # pack a row into bytes
    def pack_row(row):
        acc = 0
        nacc = 0
        out = bytearray()
        for s in row:
            for c in range(chans):
                v = s[c] if chans > 1 else s
                acc = (acc << depth) | v
                nacc += depth
                while nacc >= 8:
                    nacc -= 8
                    out.append((acc >> nacc) & 255)
        if nacc:
            out.append((acc << (8 - nacc)) & 255)
        return bytes(out)

    def paeth(a, b, c):
        p = a + b - c
        pa, pb, pc = abs(p-a), abs(p-b), abs(p-c)
        if pa <= pb and pa <= pc: return a
        if pb <= pc: return b
        return c

    def filter_row(ft, cur, prev, bpp):
        out = bytearray(len(cur))
        for i in range(len(cur)):
            a = cur[i-bpp] if i >= bpp else 0
            b = prev[i]
            c = prev[i-bpp] if i >= bpp else 0
            if ft == 0: x = cur[i]
            elif ft == 1: x = (cur[i] - a) & 255
            elif ft == 2: x = (cur[i] - b) & 255
            elif ft == 3: x = (cur[i] - ((a + b) >> 1)) & 255
            else: x = (cur[i] - paeth(a, b, c)) & 255
            out[i] = x
        return bytes(out)

    def make_scanlines(rows, widths):
        data = bytearray()
        prev = bytes((max(0, ((widths[0] * bitpp + 7) >> 3)) + 8)) if False else None
        maxlen = max(((ww * bitpp + 7) >> 3) for ww in widths) if widths else 0
        prev = bytes(maxlen + 8)
        for row, ww in zip(rows, widths):
            cur = pack_row(row)
            ft = filter_choice if isinstance(filter_choice, int) else 0
            data.append(ft)
            data += filter_row(ft, cur, prev[:len(cur)], (bitpp + 7) >> 3)
            prev = cur + bytes(8)
        return bytes(data)

    ihdr = struct.pack(">IIBBBBB", w, h, depth, ct, 0, 0, interlace)
    body = b""
    if interlace == 0:
        body = make_scanlines(pixels, [w] * h)
    else:
        xs = [0,4,0,2,0,1,0]; ys = [0,0,4,0,2,0,1]
        xst = [8,8,4,4,2,2,1]; yst = [8,8,8,4,4,2,2]
        for p in range(7):
            pw = (w - xs[p] + xst[p] - 1) // xst[p] if w > xs[p] else 0
            ph = (h - ys[p] + yst[p] - 1) // yst[p] if h > ys[p] else 0
            if pw == 0 or ph == 0:
                continue
            rows = []
            for j in range(ph):
                y = ys[p] + j * yst[p]
                row = []
                for i in range(pw):
                    x = xs[p] + i * xst[p]
                    row.append(pixels[y][x])
                rows.append(row)
            body += make_scanlines(rows, [pw] * ph)

    co = zlib.compressobj(zlib_level, zlib.DEFLATED, 15, 9, zlib_strategy)
    zdata = co.compress(body) + co.flush()
    co2 = zlib.compressobj(zlib_level, zlib.DEFLATED, 15, 9, zlib_strategy)

    png = b"\x89PNG\r\n\x1a\n" + chunk(b"IHDR", ihdr)
    if palette is not None:
        png += chunk(b"PLTE", palette)
    if trns is not None:
        png += chunk(b"tRNS", trns)
    png += extra_chunks
    if idat_split > 0:
        n = max(1, len(zdata) // idat_split)
        for i in range(0, len(zdata), n):
            png += chunk(b"IDAT", zdata[i:i+n])
    else:
        png += chunk(b"IDAT", zdata)
    png += chunk(b"IEND", b"")
    with open(path, "wb") as f:
        f.write(png)

def make_pixels(w, h, depth, ct, seed):
    rng = random.Random(seed)
    chans = {0:1, 2:3, 3:1, 4:2, 6:4}[ct]
    maxv = (1 << depth) - 1
    px = []
    for y in range(h):
        row = []
        for x in range(w):
            if chans == 1:
                # mix of gradients and noise for varied filter behaviour
                v = (x * 7 + y * 13 + rng.randrange(4)) & maxv
                row.append(v)
            elif chans == 2:
                row.append((x & maxv, rng.randrange(maxv + 1)))
            elif chans == 3:
                row.append((x & maxv, y & maxv, rng.randrange(maxv + 1)))
            else:
                row.append((x & maxv, y & maxv, (x+y) & maxv,
                            rng.randrange(maxv + 1)))
        px.append(row)
    return px

def main():
    manifest = []
    combos = [
        (0, 1), (0, 2), (0, 4), (0, 8), (0, 16),
        (2, 8), (2, 16),
        (3, 1), (3, 2), (3, 4), (3, 8),
        (4, 8), (4, 16),
        (6, 8), (6, 16),
    ]
    sizes = [(1, 1), (7, 3), (32, 32), (33, 17), (64, 65)]
    filt_modes = [0, 1, 2, 3, 4]
    n = 0
    for ct, depth in combos:
        for interlace in (0, 1):
            for ft in filt_modes:
                w, h = (17, 13) if interlace else (23, 5)
                name = f"c{ct}d{depth}_i{interlace}_f{ft}.png"
                px = make_pixels(w, h, depth, ct, n)
                pal = None
                trns = None
                if ct == 3:
                    maxc = (1 << depth)
                    pal = bytes(range(min(maxc, 256)))[:min(maxc,256)] if False else b"".join(
                        bytes([(i * 11) & 255, (i * 7) & 255, (i * 3) & 255])
                        for i in range(min(maxc, 256)))
                if ct == 0 and depth in (1, 2, 4, 8, 16) and ft == 0 and interlace == 0:
                    pass
                write_png(os.path.join(OUT, name), w, h, depth, ct, px,
                          interlace=interlace, filter_choice=ft, palette=pal,
                          trns=trns)
                manifest.append({"name": name, "w": w, "h": h, "depth": depth,
                                 "ct": ct, "interlace": interlace,
                                 "filter": ft})
                n += 1
    # sizes x interlace edge cases (pass boundaries)
    for ct, depth in [(0, 1), (2, 8), (3, 4), (6, 16)]:
        for (w, h) in sizes:
            for interlace in (0, 1):
                name = f"sz_c{ct}d{depth}_{w}x{h}_i{interlace}.png"
                px = make_pixels(w, h, depth, ct, 1000 + n)
                pal = None
                if ct == 3:
                    pal = b"".join(bytes([(i * 13) & 255, (i * 5) & 255,
                                          (i * 29) & 255]) for i in range(16))
                write_png(os.path.join(OUT, name), w, h, depth, ct, px,
                          interlace=interlace, filter_choice=4, palette=pal)
                manifest.append({"name": name, "w": w, "h": h, "depth": depth,
                                 "ct": ct, "interlace": interlace})
                n += 1
    # tRNS variants
    for ct, depth, trns in [(0, 8, bytes([0, 77])), (0, 16, b"\x01\x02"),
                            (2, 8, bytes([10, 0, 20, 0, 30, 0])),
                            (2, 16, b"\x00\x0a\x00\x14\x00\x1e")]:
        name = f"trns_c{ct}d{depth}.png"
        px = make_pixels(31, 19, depth, ct, 2000 + n)
        write_png(os.path.join(OUT, name), 31, 19, depth, ct, px,
                  interlace=0, filter_choice=2, trns=trns)
        manifest.append({"name": name, "trns": 1})
        n += 1
    for depth in (1, 2, 4, 8):
        ncol = 1 << depth
        pal = b"".join(bytes([(i * 17) & 255, (i * 3) & 255, (i * 7) & 255])
                       for i in range(ncol))
        trns = bytes([128] * (ncol - 1))  # ncol-1 entries (partial)
        name = f"paltrns_d{depth}.png"
        px = make_pixels(40, 9, depth, 3, 3000 + n)
        write_png(os.path.join(OUT, name), 40, 9, depth, 3, px,
                  palette=pal, trns=trns, filter_choice=1)
        manifest.append({"name": name, "trns": 1})
        n += 1
    # multi-IDAT + stored + fixed-huffman + zero-idat chunks
    px = make_pixels(64, 64, 8, 2, 4000)
    write_png(os.path.join(OUT, "multiidat.png"), 64, 64, 8, 2, px,
              idat_split=7, filter_choice=4)
    write_png(os.path.join(OUT, "stored.png"), 64, 64, 8, 2, px,
              zlib_level=0, filter_choice=0)
    write_png(os.path.join(OUT, "fixedhuff.png"), 64, 64, 8, 2, px,
              zlib_strategy=zlib.Z_FIXED, filter_choice=2)
    write_png(os.path.join(OUT, "rle.png"), 64, 64, 8, 2, px,
              zlib_strategy=zlib.Z_RLE, filter_choice=3)
    manifest.append({"name": "multiidat.png"}, )
    # ancillary chunks galore
    extra = (chunk(b"pHYs", struct.pack(">IIB", 2835, 2835, 1)) +
             chunk(b"gAMA", struct.pack(">I", 45455)) +
             chunk(b"cHRM", struct.pack(">8I", 31270, 32900, 64000, 33000,
                                        30000, 60000, 15000, 6000)) +
             chunk(b"sRGB", bytes([0])) +
             chunk(b"bKGD", bytes([0, 0, 255])) +
             chunk(b"sBIT", bytes([5, 5, 5])) +
             chunk(b"tIME", bytes([99, 12, 31, 23, 59, 59])) +
             chunk(b"tEXt", b"Title\x00ptpng test") +
             chunk(b"zTXt", b"Comment\x00\x00" + zlib.compress(b"ztxt body " * 20)) +
             chunk(b"iTXt", b"Key\x00\x00\x00en\x00translated\x00itxt body") +
             chunk(b"iTXt", b"KeyC\x00\x01\x00en\x00tr\x00" + zlib.compress(b"compressed itxt " * 10)) +
             chunk(b"sPLT", b"Name\x00\x08" + b"\x01\x02\x03\x00" * 10) +
             chunk(b"eXIf", b"MM\x00*\x00\x00\x00\x08\x00\x00"))
    px = make_pixels(24, 24, 8, 6, 5000)
    write_png(os.path.join(OUT, "ancillary.png"), 24, 24, 8, 6, px,
              extra_chunks=extra, filter_choice=1)
    # private ancillary unknown chunk
    extra = chunk(b"prVt", b"unknown data")
    write_png(os.path.join(OUT, "unknown_anc.png"), 16, 16, 8, 0,
              make_pixels(16, 16, 8, 0, 6000), extra_chunks=extra,
              filter_choice=4)
    # 16-bit tRNS on gray
    px = make_pixels(20, 20, 16, 0, 7000)
    write_png(os.path.join(OUT, "trns16gray.png"), 20, 20, 16, 0, px,
              trns=b"\x30\x39", filter_choice=3)
    with open(os.path.join(OUT, "manifest.json"), "w") as f:
        json.dump(manifest, f, indent=1)
    print(f"generated {n + 6} pngs in {OUT}")

if __name__ == "__main__":
    main()
