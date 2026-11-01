"""Draws the example images used on the site (assets/img). Run: python3 make_images.py"""
import os, numpy as np
from PIL import Image, ImageDraw, ImageFilter
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "assets", "img")
os.makedirs(OUT, exist_ok=True)
K, W, H = 2, 1600, 1200
INK, GOLD = (11, 27, 58), (255, 184, 28)
s = lambda v: int(v * K)
def R(d, box, r, fill): d.rounded_rectangle([s(v) for v in box], radius=s(r), fill=fill)
def C(d, cx, cy, r, fill): d.ellipse([s(cx - r), s(cy - r), s(cx + r), s(cy + r)], fill=fill)
def P(d, pts, fill): d.polygon([(s(x), s(y)) for x, y in pts], fill=fill)

def background():
    y = np.linspace(0, 1, H * K)[:, None, None]
    top, bot = np.array([191, 216, 255]), np.array([255, 231, 184])
    arr = (top * (1 - y) + bot * y) * np.ones((1, W * K, 1))
    im = Image.fromarray(arr.astype("uint8"), "RGB"); d = ImageDraw.Draw(im)
    C(d, 1180, 300, 150, (255, 226, 150)); C(d, 1180, 300, 105, (255, 201, 77))
    for x, y0, w in [(220, 200, 1.0), (1000, 130, 0.8), (620, 300, 0.7)]:
        for dx, dy, rw, rh in [(0, 30, 200, 60), (60, 0, 200, 100), (160, 35, 170, 55)]:
            d.ellipse([s(x + dx * w), s(y0 + dy * w), s(x + (dx + rw) * w), s(y0 + (dy + rh) * w)], fill=(255, 255, 255))
    P(d, [(0, 700), (0, 560), (220, 470), (460, 580), (720, 440), (1000, 590), (1280, 450), (1600, 580), (1600, 800), (0, 800)], (143, 168, 214))
    for x, w, h in [(120, 90, 200), (230, 70, 140), (1290, 100, 210), (1410, 80, 150), (1510, 90, 230)]:
        d.rectangle([s(x), s(700 - h), s(x + w), s(700)], fill=(167, 183, 217))
        for wy in range(700 - h + 20, 690, 36):
            for wx in range(x + 14, x + w - 14, 28): d.rectangle([s(wx), s(wy), s(wx + 12), s(wy + 14)], fill=(206, 216, 238))
    P(d, [(0, 800), (0, 690), (300, 640), (620, 720), (900, 660), (1250, 740), (1600, 670), (1600, 800)], (111, 176, 146))
    d.rectangle([0, s(780), s(W), s(H)], fill=(201, 154, 98)); d.rectangle([0, s(780), s(W), s(800)], fill=(222, 178, 120))
    for gy in (870, 950, 1040, 1130): d.rectangle([0, s(gy), s(W), s(gy + 4)], fill=(186, 140, 86))
    return im

def camera(d):
    R(d, (480, 560, 1120, 900), 60, INK); R(d, (690, 480, 910, 580), 30, (20, 40, 79))
    R(d, (520, 500, 640, 572), 16, GOLD); R(d, (940, 515, 1010, 565), 14, GOLD)
    R(d, (480, 600, 560, 860), 40, (24, 46, 87)); C(d, 1040, 625, 22, GOLD)
    C(d, 800, 735, 130, (217, 222, 234)); C(d, 800, 735, 108, (27, 46, 87)); C(d, 800, 735, 80, (15, 29, 61))
    C(d, 800, 735, 42, (59, 91, 219)); C(d, 770, 705, 16, (200, 215, 255))

def finish(im): return im.resize((W, H), Image.LANCZOS)
bg = background()
shadow = Image.new("RGBA", bg.size, (0, 0, 0, 0)); ImageDraw.Draw(shadow).ellipse([s(470), s(870), s(1130), s(950)], fill=(90, 55, 20, 120))
scene = Image.alpha_composite(Image.alpha_composite(bg.convert("RGBA"), shadow.filter(ImageFilter.GaussianBlur(s(14)))), Image.new("RGBA", bg.size, (0, 0, 0, 0)))
d = ImageDraw.Draw(scene); camera(d)
cut = Image.new("RGBA", bg.size, (0, 0, 0, 0)); camera(ImageDraw.Draw(cut))
scene, cut = finish(scene).convert("RGB"), finish(cut)
fit = lambda im, w: im.resize((w, int(im.height * w / im.width)), Image.LANCZOS)

fit(scene, 1000).save(f"{OUT}/scene.jpg", quality=86, optimize=True)
fit(cut, 1000).save(f"{OUT}/cutout.png", optimize=True)
f = Image.new("RGB", cut.size, GOLD); f.paste(cut, mask=cut.split()[3]); fit(f, 1000).save(f"{OUT}/filled.jpg", quality=88)
fit(scene, 250).resize((1000, 752), Image.NEAREST).save(f"{OUT}/low.jpg", quality=90)
noisy = np.asarray(fit(scene, 1000)).astype("float32") + np.random.default_rng(4).normal(0, 16, (750, 1000, 3))
n = Image.fromarray(np.clip(noisy, 0, 255).astype("uint8")); n.save(f"{OUT}/heavy.png"); n.save(f"{OUT}/light.jpg", quality=45)
cx, cy = 800, 690
for name, (w, h), size in [("crop-square", (1000, 1000), (700, 700)), ("crop-wide", (1600, 900), (960, 540)), ("crop-tall", (675, 1200), (405, 720))]:
    x0, y0 = max(0, min(W - w, cx - w // 2)), max(0, min(H - h, cy - h // 2))
    scene.crop((x0, y0, x0 + w, y0 + h)).resize(size, Image.LANCZOS).save(f"{OUT}/{name}.jpg", quality=86)
open(f"{OUT}/../favicon.svg", "w").write('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="8" fill="#FFB81C"/><circle cx="16" cy="16" r="7" fill="#0B1B3A"/></svg>')
for fn in sorted(os.listdir(OUT)): print(fn, os.path.getsize(f"{OUT}/{fn}") // 1024, "KB")
