"""Generate deterministic RGBA16 benchmarks with Paeth on every scanline.

These synthetic photo-like and flat-color images exercise all eight byte
chains, including the low bytes of each 16-bit sample. Only the Python
standard library is required.
"""
from pathlib import Path
import random
import struct
import zlib


def chunk(kind, data):
    return (struct.pack(">I", len(data)) + kind + data +
            struct.pack(">I", zlib.crc32(kind + data)))


def filter_paeth(row, previous):
    filtered = bytearray(len(row) + 1)
    filtered[0] = 4
    for i, value in enumerate(row):
        a = row[i - 8] if i >= 8 else 0
        b = previous[i]
        c = previous[i - 8] if i >= 8 else 0
        p = a + b - c
        pa, pb, pc = abs(p - a), abs(p - b), abs(p - c)
        predictor = a if pa <= pb and pa <= pc else b if pb <= pc else c
        filtered[i + 1] = (value - predictor) & 255
    return filtered


def write_png(path, width, height, photo):
    rng = random.Random(20260924)
    previous = bytes(width * 8)
    filtered = bytearray()
    for y in range(height):
        row = bytearray(width * 8)
        for x in range(width):
            if photo:
                noise = rng.randrange(1024)
                samples = (x * 64000 // width + noise,
                           y * 64000 // height + noise,
                           (x + y) * 64000 // (width + height) + noise,
                           (x * y * 17) & 65535)
            else:
                samples = (((x // 73 + y // 61) * 13001) & 65535,
                           ((x // 101 + y // 47) * 7733) & 65535,
                           ((x // 59 + y // 131) * 27011) & 65535,
                           65535)
            struct.pack_into(">4H", row, x * 8, *samples)
        filtered.extend(filter_paeth(row, previous))
        previous = row
    header = struct.pack(">IIBBBBB", width, height, 16, 6, 0, 0, 0)
    path.write_bytes(b"\x89PNG\r\n\x1a\n" + chunk(b"IHDR", header) +
                     chunk(b"IDAT", zlib.compress(filtered, 6)) + chunk(b"IEND", b""))
    print(path.name, path.stat().st_size)


if __name__ == "__main__":
    output = Path(__file__).resolve().parent / "bench"
    output.mkdir(exist_ok=True)
    write_png(output / "photo_rgba16_paeth.png", 1024, 768, True)
    write_png(output / "graphic_rgba16_paeth.png", 1024, 768, False)
