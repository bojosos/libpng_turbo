"""gen_bench.py - create large benchmark PNGs with realistic content."""
from PIL import Image, ImageDraw
import os, random
from pathlib import Path

OUT = Path(__file__).resolve().parent / "bench"
os.makedirs(OUT, exist_ok=True)
rng = random.Random(7)

def photo_rgb(w, h):
    """smooth gradients + noise (compressible, realistic photo-like)."""
    img = Image.new("RGB", (w, h))
    px = img.load()
    for y in range(h):
        for x in range(w):
            n = rng.randrange(6)
            px[x, y] = ((x * 255) // w + n, (y * 255) // h + n,
                        ((x + y) * 255) // (w + h) + n)
    return img

def photo_rgba(w, h):
    img = photo_rgb(w, h).convert("RGBA")
    px = img.load()
    for y in range(h):
        for x in range(w):
            r, g, b, _ = px[x, y]
            px[x, y] = (r, g, b, (x * y) % 256)
    return img

def flat_graphic(w, h):
    """flat areas (sub/paeth-friendly, highly compressible)."""
    img = Image.new("RGB", (w, h))
    d = ImageDraw.Draw(img)
    for i in range(200):
        x0, y0 = rng.randrange(w), rng.randrange(h)
        x1, y1 = min(w, x0 + rng.randrange(60) + 5), min(h, y0 + rng.randrange(60) + 5)
        d.rectangle([x0, y0, x1, y1],
                    fill=(rng.randrange(256), rng.randrange(256), rng.randrange(256)))
    return img

W, H = 3200, 2400
photo_rgb(W, H).save(OUT / "photo_rgb8.png", optimize=False)
photo_rgba(W, H).save(OUT / "photo_rgba8.png", optimize=False)
photo_rgb(W, H).convert("L").save(OUT / "photo_gray8.png", optimize=False)
flat_graphic(W, H).save(OUT / "graphic_rgb8.png", optimize=False)
flat_graphic(W, H).convert("P", palette=Image.ADAPTIVE, colors=256).save(
    OUT / "graphic_pal8.png", optimize=False)
photo_rgb(W, H).convert("I;16").save(OUT / "photo_gray16.png", optimize=False)
print("sizes:")
for f in sorted(os.listdir(OUT)):
    print(" ", f, os.path.getsize(os.path.join(OUT, f)))
