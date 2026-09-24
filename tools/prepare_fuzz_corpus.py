"""Build persistent seed directories for the three libFuzzer targets.

Usage: python tools/prepare_fuzz_corpus.py --output build/fuzz-corpus
Additional --png-root paths replace the default tests/gen and third_party roots.
No third-party Python dependencies. Existing coverage discoveries are preserved.
"""
import argparse
import hashlib
from pathlib import Path
import struct
import zlib


LIMIT = 1 << 20


def save(directory, data):
    (directory / hashlib.sha256(data).hexdigest()).write_bytes(data)


def idat_stream(data):
    if not data.startswith(b"\x89PNG\r\n\x1a\n"):
        return None
    pos, parts = 8, []
    while pos + 12 <= len(data):
        size = struct.unpack_from(">I", data, pos)[0]
        if size > len(data) - pos - 12:
            return None
        chunk = data[pos + 4:pos + 8]
        if chunk == b"IDAT":
            parts.append(data[pos + 8:pos + 8 + size])
        pos += size + 12
        if chunk == b"IEND":
            break
    return b"".join(parts) if parts else None


def save_inflate(directory, stream):
    if len(stream) + 4 > LIMIT:
        return
    try:
        decoder = zlib.decompressobj()
        raw = decoder.decompress(stream, LIMIT + 1)
    except zlib.error:
        return
    if len(raw) > LIMIT or not decoder.eof:
        return
    # Exact output capacity exercises normal decode and SIMD buffer ends.
    # Empty streams use capacity 1; the dynamic decoder can still succeed.
    save(directory, struct.pack("<I", max(1, len(raw))) + stream)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--output", type=Path, required=True)
    parser.add_argument("--png-root", type=Path, action="append")
    args = parser.parse_args()
    repo = Path(__file__).resolve().parent.parent
    roots = args.png_root or [repo / "tests/gen", repo / "third_party"]
    directories = {name: args.output / name for name in ("decode", "inflate", "encode")}
    for directory in directories.values():
        directory.mkdir(parents=True, exist_ok=True)
    for root in roots:
        for path in sorted(root.rglob("*.png")):
            if path.stat().st_size > LIMIT:
                continue
            data = path.read_bytes()
            if not data:
                continue
            save(directories["decode"], data)
            stream = idat_stream(data)
            if stream is not None:
                save_inflate(directories["inflate"], stream)

    # Stored, fixed and dynamic blocks; short output, overlapping matches,
    # 32 KiB history boundaries, and incompressible literal runs.
    for length in (0, 1, 2, 3, 7, 15, 16, 17, 255, 258, 4095, 4096, 32768, 65536):
        random_bytes = bytearray()
        state = 0x9E3779B9
        for _ in range(length):
            state ^= (state << 13) & 0xFFFFFFFF
            state ^= state >> 17
            state ^= (state << 5) & 0xFFFFFFFF
            random_bytes.append(state & 255)
        patterns = (bytes(length), bytes(i % 251 for i in range(length)), bytes(random_bytes))
        for raw in patterns:
            for level, strategy in ((0, zlib.Z_DEFAULT_STRATEGY),
                                    (1, zlib.Z_FIXED), (6, zlib.Z_DEFAULT_STRATEGY)):
                compressor = zlib.compressobj(level, zlib.DEFLATED, 15, 8, strategy)
                stream = compressor.compress(raw) + compressor.flush()
                save_inflate(directories["inflate"], stream)

    widths = (1, 2, 3, 4, 7, 8, 15, 16, 31, 32, 33, 63, 64, 65, 127, 128)
    payload = bytes((i * 73 + (i // 19) * 17) & 255 for i in range(512))
    for fmt in range(8):
        for filt in range(7):
            for index, width in enumerate(widths):
                height = (1, 2, 17, 64)[index % 4]
                padding = (0, 1, 15, 31)[index % 4]
                header = bytes((width - 1, height - 1, fmt, filt, padding,
                                index % 3, index % 4, 0))
                save(directories["encode"], header + payload)
    for name, directory in directories.items():
        print(f"{name}: {sum(1 for path in directory.iterdir() if path.is_file())} seeds in {directory}")


if __name__ == "__main__":
    main()
