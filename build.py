"""Generates every page of Pixlab. Set DOMAIN, then run: python3 build.py"""
import json, os
DOMAIN = "https://www.example.com"   # <- your real domain
SITE = "Pixlab"
OUT = os.path.dirname(os.path.abspath(__file__))
IMG = "assets/img/"
def size(f):
    b = os.path.getsize(os.path.join(OUT, IMG, f)); return f"{b/1048576:.1f} MB" if b > 1048576 else f"{round(b/1024)} KB"

W = "mx-auto w-full max-w-7xl 2xl:max-w-[1700px] px-4 sm:px-6 lg:px-10 2xl:px-14"
CHECK = "bg-tint bg-[conic-gradient(#E8EDF7_25%,#fff_0_50%,#E8EDF7_0_75%,#fff_0)] bg-[length:20px_20px]"
INP = "w-full rounded-xl border border-line bg-white px-4 py-3 text-base font-normal outline-none focus:border-ink focus:ring-4 focus:ring-gold/40"
H2 = "font-head text-3xl font-bold tracking-tight sm:text-4xl 2xl:text-5xl"
BTN = "inline-flex items-center justify-center rounded-full px-7 py-3.5 font-semibold transition"
GOLDBTN = f"{BTN} bg-gold text-ink hover:bg-ink hover:text-white"
CHEV = '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" class="h-4 w-4 transition group-hover:rotate-180 group-focus-within:rotate-180"><path d="m5 8 5 5 5-5"/></svg>'

TOOLS = [
 dict(key="bg", file="background-remover.html", name="Background remover", btn="Remove background", short="Transparent or solid colour", thumb="filled.jpg",
  title=f"Background Remover – Remove Image Background Online | {SITE}",
  desc="Remove the background from any photo online. Download a transparent PNG or fill the space with a colour you choose. No account needed.",
  h1="Remove the background from any image",
  intro="Upload a photo and get the subject back on a transparent background. Prefer a solid backdrop? Type a colour code and the empty space is filled for you.",
  chips=["Returns a PNG", "Transparent or coloured", "Up to 50 MB"],
  home_h="Cut the subject out in one step", home_p="Product shots, portraits, logos. Get a transparent PNG, or fill the space with any colour so every picture shares the same backdrop.",
  good=[("Product photos", "Put every item on the same clean colour for a shop or catalogue."), ("Design work", "Take a subject into a poster, slide or social post as a transparent PNG."), ("Profile pictures", "Replace a cluttered room with a plain backdrop.")],
  faq=[("What file do I get back?", "A PNG. The background is transparent unless you enter a fill colour."),
       ("How do I fill the background with a colour?", "Type a hex code such as #FFFFFF or FF0000 in the fill colour box. Leave it empty to keep the background transparent."),
       ("Which images can I upload?", "PNG, JPEG, JPG, WEBP, BMP, TIFF, GIF and AVIF files up to 50 MB.")]),
 dict(key="upscale", file="image-upscaler.html", name="Image upscaler", btn="Upscale image", short="2x, 3x or 4x larger", thumb="scene.jpg",
  title=f"Image Upscaler – Enlarge Images 2x, 3x or 4x Online | {SITE}",
  desc="Enlarge a small image 2x, 3x or 4x online. See the new pixel dimensions and file size, then download the result. No account needed.",
  h1="Make your image bigger",
  intro="Choose how many times larger you want the picture. You see the old and new dimensions and file sizes side by side before you download.",
  chips=["2x, 3x or 4x", "Keeps your format", "Up to 50 MB"],
  home_h="Enlarge small pictures", home_p="Turn a small file into a bigger one for print, banners or a sharper preview. Pick 2x, 3x or 4x and compare the sizes before you save.",
  good=[("Print and posters", "Get more pixels to work with before sending a file to the printer."), ("Old photos", "Enlarge a small scan or an old download."), ("Web banners", "Make a small graphic wide enough for a full-width section.")],
  faq=[("Which scales are available?", "2x, 3x and 4x. The default is 2x."),
       ("Will the file size grow?", "Yes. A larger image has more pixels, so the file is bigger. The result panel shows exactly how much."),
       ("Which format do I get back?", "The same format as the file you uploaded.")]),
 dict(key="reduce", file="image-compressor.html", name="Image compressor", btn="Compress image", short="Fit a size limit in KB", thumb="light.jpg",
  title=f"Image Compressor – Reduce Image File Size to Target KB | {SITE}",
  desc="Compress an image to a target file size in KB. Useful for forms, email and uploads with size limits. No account needed.",
  h1="Compress an image to the size you need",
  intro="Got an upload form that only accepts 200 KB? Type the size you need and the image is compressed to fit. The result panel shows how much was saved.",
  chips=["Set a target in KB", "Keeps your format", "Up to 50 MB"],
  home_h="Shrink a file to your limit", home_p="Tell the compressor the size you need, in KB, and it reduces the file to fit. Ideal for application forms, email attachments and website uploads.",
  good=[("Application forms", "Meet the strict size limit on government and job portals."), ("Email", "Send photos without hitting attachment limits."), ("Website speed", "Smaller images load faster on phones.")],
  faq=[("Can I choose the exact file size?", "You set a target in KB and the tool compresses the image to reach it. The result panel shows the final size."),
       ("Will quality drop?", "Smaller files mean more compression. The further the target is below the original size, the more quality is lost."),
       ("Which format do I get back?", "The same format as the file you uploaded.")]),
 dict(key="resize", file="image-resizer.html", name="Image resizer", btn="Resize image", short="Exact width and height", thumb="crop-square.jpg",
  title=f"Image Resizer – Resize Image to Exact Pixels Online | {SITE}",
  desc="Resize an image to an exact width and height in pixels. Smart cropping keeps the main subject in frame. No account needed.",
  h1="Resize an image to exact pixels",
  intro="Type the width and height you need, from 8 to 8000 pixels. If the shape differs from your original, the crop keeps the most important part of the picture.",
  chips=["8 to 8000 px", "Subject-aware crop", "Up to 50 MB"],
  home_h="Get the exact size every time", home_p="Square for a profile, wide for a cover, tall for a story. Enter the pixels you need and the crop follows the main subject so it stays in frame.",
  good=[("Social media", "Match the sizes profiles, covers and stories ask for."), ("Marketplaces", "Make every listing photo the same dimensions."), ("Document uploads", "Hit the exact pixel size a form requires.")],
  faq=[("What sizes are allowed?", "Between 8 and 8000 pixels for both width and height."),
       ("Will my image be stretched?", "No. It is cropped to the new shape, and the crop follows the most noticeable part of the image."),
       ("Which format do I get back?", "The same format as the file you uploaded.")]),
]
LEGAL = [("terms.html", "Terms of Service"), ("privacy.html", "Privacy Policy")]

# ---------- visual examples (real image files in assets/img) ----------
def fig(src, label, alt, aspect="aspect-[4/3]", checker=False):
    return (f'<figure class="relative {aspect} overflow-hidden rounded-2xl border border-line bg-white {CHECK if checker else ""}">'
            f'<img src="{IMG}{src}" alt="{alt}" loading="lazy" class="h-full w-full object-cover">'
            f'<figcaption class="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-semibold text-ink shadow">{label}</figcaption></figure>')

def visual(key, three=False):
    if key == "bg":
        g = [fig("scene.jpg", "Original", "Camera on a table in front of a busy background"), fig("cutout.png", "Transparent PNG", "Camera with the background removed", checker=True)]
        if three: g.append(fig("filled.jpg", "Filled with a colour", "Camera on a solid gold background"))
        return f'<div class="grid gap-3 sm:grid-cols-{3 if three else 2}">{"".join(g)}</div>'
    if key == "upscale":
        return f'<div class="grid gap-3 sm:grid-cols-2">{fig("low.jpg", "Before: 250 × 188 px", "Small low resolution image")}{fig("scene.jpg", "After: 4x, 1000 × 750 px", "Enlarged sharp image")}</div>'
    if key == "reduce":
        return f'<div class="grid gap-3 sm:grid-cols-2">{fig("heavy.png", "Before: " + size("heavy.png"), "Large image file")}{fig("light.jpg", "After: " + size("light.jpg"), "Compressed image that looks the same")}</div>'
    return (f'<div class="grid grid-cols-[1fr_1.6fr_0.7fr] items-end gap-3">{fig("crop-square.jpg", "1:1", "Square crop", "aspect-square")}'
            f'{fig("crop-wide.jpg", "16:9", "Wide crop", "aspect-video")}{fig("crop-tall.jpg", "9:16", "Tall crop", "aspect-[9/16]")}</div>')

# ---------- shell ----------
def head(title, desc, file, extra=""):
    url = DOMAIN + "/" + ("" if file == "index.html" else file)
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>{title}</title>
<meta name="description" content="{desc}">
<link rel="canonical" href="{url}">
<link rel="icon" href="assets/favicon.svg" type="image/svg+xml">
<meta name="theme-color" content="#0B1B3A">
<meta property="og:type" content="website">
<meta property="og:site_name" content="{SITE}">
<meta property="og:title" content="{title}">
<meta property="og:description" content="{desc}">
<meta property="og:url" content="{url}">
<meta property="og:image" content="{DOMAIN}/{IMG}crop-wide.jpg">
<meta name="twitter:card" content="summary_large_image">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap" rel="stylesheet">
<script src="https://cdn.tailwindcss.com?plugins=typography"></script>
<script src="assets/tailwind-config.js"></script>
{extra}</head>
"""

LOGO = f'<a href="index.html" class="flex shrink-0 items-center gap-2.5 font-head text-xl font-bold tracking-tight"><span class="grid h-9 w-9 place-items-center rounded-xl bg-gold"><span class="h-4 w-4 rounded-full bg-ink"></span></span>{SITE}</a>'

def header(active):
    tool_on = any(t["file"] == active for t in TOOLS)
    link = lambda f, l: f'<a href="{f}" class="rounded-full px-4 py-2 text-sm font-semibold transition {"bg-tint text-ink" if f == active else "text-dim hover:bg-mist hover:text-ink"}">{l}</a>'
    menu = "".join(f'<a href="{t["file"]}" class="flex items-center gap-3 rounded-2xl p-3 transition hover:bg-mist"><img src="{IMG}{t["thumb"]}" alt="" class="h-14 w-14 shrink-0 rounded-xl object-cover"><span><span class="block font-semibold">{t["name"]}</span><span class="block text-sm text-dim">{t["short"]}</span></span></a>' for t in TOOLS)
    mob = lambda f, l, ind=False: f'<a href="{f}" class="block rounded-xl px-4 py-3 text-sm font-semibold {"bg-tint" if f == active else "hover:bg-mist"} {"ml-3 font-medium text-dim" if ind else ""}">{l}</a>'
    return f"""<body{{BODY}} class="flex min-h-screen flex-col bg-white font-body text-ink antialiased 2xl:text-lg">
<header class="sticky top-0 z-30 border-b border-line bg-white/95 backdrop-blur">
  <div class="{W} flex h-16 items-center justify-between gap-6 lg:h-20">
    {LOGO}
    <nav aria-label="Main" class="hidden items-center gap-1 lg:flex">
      {link("index.html", "Home")}
      <div class="group relative">
        <button type="button" class="flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition {"bg-tint text-ink" if tool_on else "text-dim hover:bg-mist hover:text-ink"}">Tools {CHEV}</button>
        <div class="invisible absolute left-1/2 top-full w-[36rem] -translate-x-1/2 pt-3 opacity-0 transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
          <div class="grid grid-cols-2 gap-1 rounded-3xl border border-line bg-white p-3 shadow-2xl">{menu}</div></div>
      </div>
      {link("about.html", "About")}
      {link("contact.html", "Contact")}
    </nav>
    <a href="background-remover.html" class="hidden rounded-full bg-gold px-6 py-2.5 text-sm font-semibold text-ink transition hover:bg-ink hover:text-white lg:inline-flex">Try it now</a>
    <details class="lg:hidden">
      <summary class="grid h-11 w-11 cursor-pointer list-none place-items-center rounded-full border border-line [&::-webkit-details-marker]:hidden" aria-label="Menu">
        <span class="grid gap-1.5"><span class="h-0.5 w-5 bg-ink"></span><span class="h-0.5 w-5 bg-ink"></span><span class="h-0.5 w-5 bg-ink"></span></span></summary>
      <nav aria-label="Mobile" class="absolute inset-x-0 top-full max-h-[calc(100vh-4rem)] overflow-y-auto border-b border-line bg-white p-3 shadow-xl">
        {mob("index.html", "Home")}<p class="px-4 pb-1 pt-3 text-xs font-semibold text-dim">Tools</p>
        {"".join(mob(t["file"], t["name"], True) for t in TOOLS)}
        {mob("about.html", "About")}{mob("contact.html", "Contact")}
        <a href="background-remover.html" class="{GOLDBTN} mt-3 w-full">Try it now</a>
      </nav>
    </details>
  </div>
</header>
<main class="flex-1">
"""

def footer():
    return f"""</main>
<footer class="relative overflow-hidden bg-[#070F20] text-white/70 pt-20 pb-12 lg:pt-28 lg:pb-16 border-t border-white/10">
  <div class="pointer-events-none absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-blue-600/15 blur-[120px]"></div>
  <div class="pointer-events-none absolute bottom-10 left-1/2 -translate-x-1/2 h-72 w-[600px] rounded-full bg-gold/5 blur-[140px]"></div>
  
  <div class="pointer-events-none absolute -right-24 top-1/2 -translate-y-1/2 h-[520px] w-[520px] rounded-full bg-[#132A5E]/40 blur-sm"></div>
  <div class="pointer-events-none absolute right-16 top-12 h-80 w-80 rounded-full bg-[#1A3B80]/30 blur-[2px]"></div>
  <div class="pointer-events-none absolute right-52 top-1/3 h-64 w-64 rounded-full bg-[#0E2045]/60 blur-md"></div>
  <div class="pointer-events-none absolute -right-10 bottom-4 h-96 w-96 rounded-full bg-blue-500/10 blur-[90px]"></div>

  <div class="relative z-10 {W}">
    <div class="grid gap-12 lg:grid-cols-[1.6fr_1fr_1fr_1fr] pb-16 border-b border-white/10">
      <div class="flex flex-col justify-between">
        <div>
          <a href="index.html" class="inline-flex items-center gap-3 font-head text-2xl font-black tracking-tight text-white group">
            <span class="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-tr from-gold to-amber-300 text-ink shadow-lg shadow-gold/20 transition-transform duration-300 group-hover:scale-105">
              <span class="h-4 w-4 rounded-full bg-ink"></span>
            </span>
            <span class="tracking-tight text-2xl">Pix<span class="text-gold">lab</span></span>
          </a>
          <p class="mt-5 max-w-sm text-sm sm:text-base leading-relaxed text-white/60">
            Next-generation online image laboratory. Fast, browser-based tools to remove backgrounds, enlarge, compress, and resize with zero friction.
          </p>
        </div>

        <div class="mt-8 flex flex-wrap items-center gap-3">
          <a href="#" aria-label="LinkedIn" class="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-white/70 backdrop-blur transition-all duration-300 hover:border-gold/50 hover:bg-gold hover:text-ink hover:shadow-lg hover:shadow-gold/20 hover:-translate-y-0.5">
            <svg class="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
          </a>
          <a href="#" aria-label="X (Twitter)" class="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-white/70 backdrop-blur transition-all duration-300 hover:border-gold/50 hover:bg-gold hover:text-ink hover:shadow-lg hover:shadow-gold/20 hover:-translate-y-0.5">
            <svg class="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href="#" aria-label="GitHub" class="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-white/70 backdrop-blur transition-all duration-300 hover:border-gold/50 hover:bg-gold hover:text-ink hover:shadow-lg hover:shadow-gold/20 hover:-translate-y-0.5">
            <svg class="h-4 w-4 fill-current" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
          </a>
        </div>
      </div>

      <div>
        <h2 class="font-head text-sm font-bold uppercase tracking-wider text-white">Tools</h2>
        <ul class="mt-5 grid gap-3 text-sm">
          <li><a href="background-remover.html" class="transition-colors hover:text-white">Background remover</a></li>
          <li><a href="image-upscaler.html" class="transition-colors hover:text-white">Image upscaler</a></li>
          <li><a href="image-compressor.html" class="transition-colors hover:text-white">Image compressor</a></li>
          <li><a href="image-resizer.html" class="transition-colors hover:text-white">Image resizer</a></li>
        </ul>
      </div>

      <div>
        <h2 class="font-head text-sm font-bold uppercase tracking-wider text-white">Company</h2>
        <ul class="mt-5 grid gap-3 text-sm">
          <li><a href="index.html" class="transition-colors hover:text-white">Home</a></li>
          <li><a href="about.html" class="transition-colors hover:text-white">About Us</a></li>
          <li><a href="contact.html" class="transition-colors hover:text-white">Contact</a></li>
        </ul>
      </div>

      <div>
        <h2 class="font-head text-sm font-bold uppercase tracking-wider text-white">Legal</h2>
        <ul class="mt-5 grid gap-3 text-sm">
          <li><a href="terms.html" class="transition-colors hover:text-white">Terms of Service</a></li>
          <li><a href="privacy.html" class="transition-colors hover:text-white">Privacy Policy</a></li>
        </ul>
      </div>
    </div>

    <div class="relative w-full overflow-hidden select-none pointer-events-none pt-12 sm:pt-16 pb-2 sm:pb-4 flex justify-center items-center">
      <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-36 w-3/4 max-w-4xl rounded-full bg-gradient-to-r from-blue-600/15 via-gold/15 to-indigo-600/15 blur-3xl"></div>
      <p class="font-head font-black tracking-[-0.04em] text-[18vw] sm:text-[17vw] lg:text-[16vw] xl:text-[210px] leading-none uppercase text-transparent bg-clip-text bg-gradient-to-b from-white/[0.12] via-white/[0.04] to-transparent drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)]">
        PIXLAB
      </p>
    </div>

    <div class="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10 text-xs sm:text-sm text-white/50">
      <p>© 2026 {SITE}. All rights reserved.</p>
      <div class="flex items-center gap-6">
        <a href="privacy.html" class="transition hover:text-white">Privacy Policy</a>
        <a href="terms.html" class="transition hover:text-white">Terms of Service</a>
      </div>
    </div>
  </div>
</footer>
<script src="assets/app.js"></script>
</body>
</html>
"""

def write(file, title, desc, body, active="", tool="", extra=""):
    html = head(title, desc, file, extra) + header(active).replace("{BODY}", f' data-tool="{tool}"' if tool else "") + body + footer()
    open(os.path.join(OUT, file), "w", encoding="utf-8").write(html)

def pagehead(h1, intro):
    return f'<section class="border-b border-line bg-tint"><div class="{W} py-12 sm:py-16 lg:py-20"><h1 class="max-w-4xl font-head text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl 2xl:text-7xl">{h1}</h1><p class="mt-5 max-w-2xl text-base text-dim sm:text-lg 2xl:max-w-3xl 2xl:text-xl">{intro}</p></div></section>\n'

def cta(h, p, href, label):
    return f'<section class="bg-gold"><div class="{W} flex flex-col items-start justify-between gap-8 py-14 lg:flex-row lg:items-center lg:py-20"><div><h2 class="max-w-2xl font-head text-3xl font-extrabold tracking-tight sm:text-4xl 2xl:text-5xl">{h}</h2><p class="mt-3 max-w-xl text-ink/75">{p}</p></div><a href="{href}" class="{BTN} shrink-0 bg-ink text-white hover:bg-white hover:text-ink">{label}</a></div></section>\n'

# ---------- HOME ----------
rows = ""
for i, t in enumerate(TOOLS):
    rows += f"""<div class="grid items-center gap-8 py-12 lg:grid-cols-2 lg:gap-16 lg:py-16">
  <div class="{"lg:order-last" if i % 2 == 0 else ""}">{visual(t["key"])}</div>
  <div><p class="text-sm font-semibold text-dim">{t["name"]}</p>
    <h3 class="mt-2 font-head text-2xl font-bold tracking-tight sm:text-4xl">{t["home_h"]}</h3>
    <p class="mt-4 max-w-lg text-dim sm:text-lg">{t["home_p"]}</p>
    <ul class="mt-6 flex flex-wrap gap-2">{"".join(f'<li class="rounded-full border border-line bg-white px-3.5 py-1.5 text-sm font-medium">{c}</li>' for c in t["chips"])}</ul>
    <a href="{t["file"]}" class="{BTN} mt-8 bg-ink text-white hover:bg-gold hover:text-ink">Open the {t["name"].lower()}</a></div></div>
"""
fmts = "".join(f'<li class="grid place-items-center rounded-2xl border border-line bg-mist py-6 font-head text-lg font-bold">{f}</li>' for f in ["PNG", "JPEG", "JPG", "WEBP", "BMP", "TIFF", "GIF", "AVIF"])
steps = [("Choose a tool", "Open the page for the job: background, size up, size down or exact dimensions."), ("Upload your image", "Drop a file in and set the one or two options the tool asks for."), ("Download the result", "Compare before and after, with dimensions and file sizes, then save the new file.")]
home = f"""<section class="bg-white"><div class="{W} grid items-center gap-12 py-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16 lg:py-20">
  <div>
    <h1 class="font-head text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl 2xl:text-7xl">Remove backgrounds, enlarge, compress and resize images.</h1>
    <p class="mt-6 max-w-xl text-base text-dim sm:text-lg 2xl:text-xl">Drop in a picture, choose what to change and download the result. No account, nothing to install.</p>
    <div class="mt-9 flex flex-wrap gap-3">
      <a href="background-remover.html" class="{GOLDBTN}">Remove a background</a>
      <a href="image-compressor.html" class="{BTN} border border-line hover:border-ink">Compress an image</a>
    </div>
    <p class="mt-8 text-sm text-dim">Drag the handle on the picture to see a background disappear.</p>
  </div>
  <div class="relative aspect-[4/3] select-none overflow-hidden rounded-3xl border border-line shadow-2xl shadow-ink/10">
    <div class="absolute inset-0 {CHECK}"><img src="{IMG}cutout.png" alt="Camera with the background removed" class="h-full w-full object-cover"></div>
    <img data-r="top" src="{IMG}scene.jpg" alt="Camera in front of a busy background" class="absolute inset-0 h-full w-full object-cover">
    <span class="absolute left-4 top-4 rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold shadow">Before</span>
    <span class="absolute right-4 top-4 rounded-full bg-ink px-3.5 py-1.5 text-xs font-semibold text-white shadow">After</span>
    <div data-r="knob" class="absolute inset-y-0 w-1 -translate-x-1/2 bg-white shadow-lg"><span class="absolute top-1/2 grid h-11 w-11 -translate-x-[45%] -translate-y-1/2 place-items-center rounded-full bg-gold font-bold shadow-xl">||</span></div>
    <input data-r="range" type="range" min="0" max="100" value="50" aria-label="Compare before and after" class="absolute inset-0 h-full w-full cursor-ew-resize opacity-0">
  </div></div></section>
<section class="border-y border-line bg-mist"><div class="{W} py-14 lg:py-20">
  <h2 class="{H2}">Four tools, each built for one job</h2>
  <p class="mt-3 max-w-2xl text-dim sm:text-lg">Every example below shows a real before and after.</p>
  <div class="mt-6 divide-y divide-line">{rows}</div></div></section>
<section class="bg-ink text-white"><div class="{W} py-14 lg:py-20">
  <h2 class="{H2}">How it works</h2>
  <ol class="mt-10 grid gap-10 md:grid-cols-3">{"".join(f'<li class="border-t border-white/20 pt-6"><span class="font-head text-5xl font-extrabold text-gold">{i+1}</span><h3 class="mt-4 font-head text-xl font-bold">{a}</h3><p class="mt-2 text-white/70">{b}</p></li>' for i, (a, b) in enumerate(steps))}</ol></div></section>
<section class="{W} grid items-center gap-10 py-14 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:py-20">
  <div><h2 class="{H2}">Works with the files you already have</h2>
    <p class="mt-4 max-w-lg text-dim sm:text-lg">Upload up to 50 MB per image. The resizer accepts any width or height from 8 to 8000 pixels. Background removal always returns a PNG; the other tools give you back the format you sent.</p></div>
  <ul class="grid grid-cols-2 gap-3 sm:grid-cols-4">{fmts}</ul></section>
{cta("Start with your own image", "Pick a tool and see the result in a few seconds.", "background-remover.html", "Open the background remover")}"""
ld = json.dumps({"@context": "https://schema.org", "@type": "WebSite", "name": SITE, "url": DOMAIN + "/"})
write("index.html", f"{SITE} – Remove Background, Upscale, Compress and Resize Images Online",
      "Four image tools in one place: remove backgrounds, upscale, compress to a target size and resize to exact pixels. No account needed.",
      home, "index.html", extra=f'<script type="application/ld+json">{ld}</script>\n')

# ---------- TOOL PAGES ----------
def workspace(t):
    return f"""<section class="bg-mist"><div class="{W} py-10 lg:py-14">
  <div class="grid items-start gap-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
    <div class="flex flex-col gap-5 rounded-3xl border border-line bg-white p-5 shadow-xl shadow-ink/5 sm:p-7">
      <label data-r="drop" class="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-line bg-mist px-6 py-10 text-center transition hover:border-gold focus-within:border-ink">
        <input data-r="file" type="file" accept="image/png,image/jpeg,image/webp,image/bmp,image/tiff,image/gif,image/avif" class="sr-only">
        <span class="grid h-12 w-12 place-items-center rounded-full bg-ink text-2xl font-bold text-gold">+</span>
        <span class="font-semibold">Drop an image here or click to choose</span>
        <span data-r="fname" class="max-w-full truncate text-sm text-dim">No file selected</span>
      </label>
      <div data-r="fields" class="grid grid-cols-2 gap-4"></div>
      <p data-r="err" role="alert" class="hidden rounded-xl bg-red-50 p-3 text-sm font-medium text-red-700"></p>
      <button data-r="go" class="flex w-full items-center justify-center gap-3 rounded-xl bg-ink py-3.5 font-semibold text-white transition hover:bg-ink/90 disabled:cursor-wait disabled:opacity-60">
        <span data-r="spin" class="hidden h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white"></span>{t["btn"]}</button>
    </div>
    <div class="flex flex-col gap-5">
      <div class="grid gap-4 sm:grid-cols-2">
        <figure class="overflow-hidden rounded-3xl border border-line bg-white">
          <div class="flex min-h-56 items-center justify-center {CHECK} p-2 sm:min-h-72"><span data-r="origph" class="rounded-full bg-white px-4 py-1.5 text-sm text-dim">Your image appears here</span><img data-r="orig" alt="Original image" class="hidden max-h-[55vh] w-full object-contain"></div>
          <figcaption class="px-5 py-3 text-sm font-semibold">Original</figcaption></figure>
        <figure class="overflow-hidden rounded-3xl border border-line bg-white">
          <div class="flex min-h-56 items-center justify-center {CHECK} p-2 sm:min-h-72"><span data-r="resph" class="rounded-full bg-white px-4 py-1.5 text-sm text-dim">Result appears here</span><img data-r="res" alt="Processed image" class="hidden max-h-[55vh] w-full object-contain"></div>
          <figcaption class="px-5 py-3 text-sm font-semibold">Result</figcaption></figure>
      </div>
      <dl data-r="stats" class="grid grid-cols-2 gap-3 sm:grid-cols-3"></dl>
      <a data-r="dl" class="hidden w-full rounded-xl bg-gold py-3.5 text-center font-semibold text-ink transition hover:bg-ink hover:text-white sm:w-fit sm:px-10">Download image</a>
    </div>
  </div></div></section>
"""

for t in TOOLS:
    good = "".join(f'<li class="flex gap-4"><span class="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-gold"></span><div><h3 class="font-semibold">{a}</h3><p class="mt-1 text-dim">{b}</p></div></li>' for a, b in t["good"])
    faq = "".join(f'<details class="group border-b border-line py-4"><summary class="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold [&::-webkit-details-marker]:hidden">{q}<span class="text-2xl text-dim transition group-open:rotate-45">+</span></summary><p class="mt-3 max-w-3xl text-dim">{a}</p></details>' for q, a in t["faq"])
    body = f"""<section class="border-b border-line bg-white"><div class="{W} py-10 sm:py-14 lg:py-16">
  <p class="mb-4 text-sm text-dim"><a href="index.html" class="hover:text-ink">Home</a> / {t["name"]}</p>
  <h1 class="max-w-4xl font-head text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl 2xl:text-7xl">{t["h1"]}</h1>
  <p class="mt-5 max-w-2xl text-base text-dim sm:text-lg 2xl:max-w-3xl 2xl:text-xl">{t["intro"]}</p>
  <ul class="mt-6 flex flex-wrap gap-2">{"".join(f'<li class="rounded-full bg-tint px-4 py-1.5 text-sm font-semibold">{c}</li>' for c in t["chips"])}</ul></div></section>
{workspace(t)}
<section class="bg-white"><div class="{W} py-14 lg:py-20">
  <h2 class="font-head text-2xl font-bold tracking-tight sm:text-4xl">What the result looks like</h2>
  <p class="mt-3 max-w-2xl text-dim">An example of what this tool does to a picture.</p>
  <div class="mt-8">{visual(t["key"], three=True)}</div></div></section>
<section class="border-t border-line bg-mist"><div class="{W} grid gap-12 py-14 lg:grid-cols-2 lg:gap-20 lg:py-20">
  <div><h2 class="font-head text-2xl font-bold tracking-tight sm:text-3xl">Good for</h2><ul class="mt-6 grid gap-6">{good}</ul></div>
  <div><h2 class="font-head text-2xl font-bold tracking-tight sm:text-3xl">Common questions</h2><div class="mt-6 border-t border-line">{faq}</div></div></div></section>
"""
    app = {"@context": "https://schema.org", "@type": "WebApplication", "name": t["name"], "url": f"{DOMAIN}/{t['file']}", "description": t["desc"], "applicationCategory": "MultimediaApplication", "operatingSystem": "Any", "browserRequirements": "Requires JavaScript"}
    fq = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": a}} for q, a in t["faq"]]}
    write(t["file"], t["title"], t["desc"], body, t["file"], tool=t["key"], extra="".join(f'<script type="application/ld+json">{json.dumps(x)}</script>\n' for x in (app, fq)))

# ---------- ABOUT ----------
values = [("Simple on purpose", "One tool per page, a few options, and a clear result. Nothing to learn first."), ("Results you can check", "You always see the original and the result side by side, with dimensions and file sizes, before you download."), ("Open to everyone", "No account, no password. Open a tool and start.")]
about = pagehead("Image tools without the clutter", f"{SITE} does four jobs on pictures and does them without asking you to sign up.") + f"""
<section class="{W} grid items-center gap-10 py-14 lg:grid-cols-2 lg:gap-16 lg:py-20">
  <div class="grid grid-cols-2 gap-3"><div class="col-span-2">{fig("scene.jpg", "Original", "Camera on a table")}</div>{fig("cutout.png", "Cut out", "Camera cut out", checker=True)}{fig("crop-square.jpg", "Resized", "Square crop of the camera", "aspect-[4/3]")}</div>
  <div><h2 class="{H2}">Why it exists</h2>
    <p class="mt-5 text-dim sm:text-lg">Most people do not need a full photo editor. They need a product shot with a clean backdrop, a photo small enough for a form, or a picture at an exact size. Those jobs should take a minute, not an install.</p>
    <p class="mt-4 text-dim sm:text-lg">Your image is sent to our server, processed and returned straight to your browser as a file you can download. That is the whole flow.</p></div></section>
<section class="border-y border-line bg-mist"><div class="{W} py-14 lg:py-20"><h2 class="{H2}">What we care about</h2>
  <div class="mt-10 grid gap-6 md:grid-cols-3">{"".join(f'<div class="rounded-3xl border border-line bg-white p-7"><h3 class="font-head text-xl font-bold">{a}</h3><p class="mt-3 text-dim">{b}</p></div>' for a, b in values)}</div></div></section>
{cta("Found a bug or have an idea?", "Tell us what you tried and what you expected.", "contact.html", "Contact us")}"""
write("about.html", f"About {SITE} – Simple Online Image Tools", f"Learn why {SITE} exists, how it works and what we care about.", about, "about.html")

# ---------- CONTACT ----------
fld = lambda n, label, attrs, span="": f'<label class="flex flex-col gap-1.5 text-sm font-semibold {span}">{label}<input name="{n}" {attrs} class="{INP}"></label>'
quick = [("My file was rejected", "Use PNG, JPEG, JPG, WEBP, BMP, TIFF, GIF or AVIF, and keep it under 50 MB."), ("The resizer shows an error", "Width and height must each be between 8 and 8000 pixels."), ("The result looks softer than the original", "Compression and enlarging both change pixels. Try a larger target size in the compressor or a smaller scale in the upscaler.")]
contact = pagehead("Contact support", "Something not working, or a tool you wish we had? Tell us what you tried and what you saw.") + f"""
<section class="{W} grid items-start gap-10 py-12 lg:grid-cols-[1.5fr_1fr] lg:gap-14 lg:py-16">
  <form data-r="contact" class="grid gap-5 rounded-3xl border border-line bg-white p-5 shadow-xl shadow-ink/5 sm:grid-cols-2 sm:p-8">
    {fld("name", "Name", 'required minlength="2" maxlength="100" autocomplete="name"')}
    {fld("email", "Email", 'type="email" required autocomplete="email"')}
    {fld("subject", "Subject", 'required minlength="5" maxlength="150"', "sm:col-span-2")}
    <label class="flex flex-col gap-1.5 text-sm font-semibold sm:col-span-2">Message<textarea name="message" required minlength="10" maxlength="2000" rows="6" class="{INP}"></textarea></label>
    <p data-r="cstatus" role="status" class="hidden"></p>
    <button class="rounded-xl bg-ink py-3.5 font-semibold text-white transition hover:bg-ink/90 disabled:opacity-60 sm:col-span-2">Send message</button>
  </form>
  <aside class="grid gap-8">
    <div class="rounded-3xl bg-tint p-6 sm:p-8"><h2 class="font-head text-xl font-bold">Include these details</h2>
      <ul class="mt-4 grid gap-3 text-dim"><li>Which tool you were using</li><li>The file type and approximate size</li><li>The exact error message, if you saw one</li><li>Your browser and device</li></ul></div>
    <div><h2 class="font-head text-xl font-bold">Quick answers</h2><div class="mt-3 border-t border-line">{"".join(f'<details class="group border-b border-line py-4"><summary class="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold [&::-webkit-details-marker]:hidden">{q}<span class="text-2xl text-dim transition group-open:rotate-45">+</span></summary><p class="mt-3 text-dim">{a}</p></details>' for q, a in quick)}</div></div>
  </aside></section>"""
write("contact.html", f"Contact Support | {SITE}", f"Send a question, bug report or suggestion to the {SITE} team.", contact, "contact.html")

# ---------- LEGAL ----------
PROSE = "prose prose-slate max-w-3xl prose-headings:font-head prose-headings:tracking-tight prose-a:text-ink prose-a:underline-offset-4 2xl:prose-lg"
def legal(file, title, desc, h1, intro, html):
    write(file, title, desc, pagehead(h1, intro) + f'<article class="{W} py-12 lg:py-16"><div class="{PROSE}">{html}</div></article>', file)

legal("terms.html", f"Terms of Service | {SITE}", f"The rules for using {SITE}: acceptable use, your content, availability and liability.",
 "Terms of Service", f"Please read these terms before using {SITE}. Last updated: November 2026.", f"""
<h2>1. Acceptance</h2><p>By using {SITE} you agree to these terms. If you do not agree, please do not use the site.</p>
<h2>2. The service</h2><p>{SITE} lets you upload an image and receive a processed copy: background removal, upscaling, compression or resizing. We may change, add or remove features at any time.</p>
<h2>3. Your content</h2><p>You keep all rights to the images you upload. You give us permission to process them only so we can return the result to you. You confirm that you own the image or have the right to use it.</p>
<h2>4. Acceptable use</h2><ul>
<li>Do not upload content that is illegal or that infringes someone else’s rights.</li>
<li>Do not upload content that sexually exploits or harms children.</li>
<li>Do not attack, overload or try to break into the service, and do not use automated tools to send heavy traffic.</li>
<li>Stay within the limits shown on each tool page, including the 50 MB file size.</li></ul>
<h2>5. Availability and results</h2><p>The service is provided “as is” and “as available”. We do not promise that it will be uninterrupted or error free, or that a result will suit your purpose. Automated tools can make mistakes, so please check every result before you rely on it. Keep the original file.</p>
<h2>6. Limitation of liability</h2><p>To the extent the law allows, {SITE} is not liable for indirect or consequential loss, or for loss of data or profit, arising from your use of the service.</p>
<h2>7. Changes to these terms</h2><p>We may update these terms. The date at the top shows the latest version. Continuing to use the site after a change means you accept the new terms.</p>
<h2>8. Contact</h2><p>Questions about these terms? Reach us through the <a href="contact.html">contact page</a>.</p>""")

legal("privacy.html", f"Privacy Policy | {SITE}", f"What {SITE} collects, why, who else sees it and how to contact us about your data.",
 "Privacy Policy", f"This page explains what happens to your data when you use {SITE}. Last updated: November 2026.", f"""
<h2>What we collect</h2><ul>
<li><strong>Images you upload.</strong> They are sent to our server so we can process them and return the result.</li>
<li><strong>Support messages.</strong> If you use the contact form we store your name, email address, subject and message so we can reply.</li>
<li><strong>Technical data.</strong> Like most web servers, ours may record information such as your IP address, browser type and the time of a request, for security and troubleshooting.</li></ul>
<h2>What we do not ask for</h2><p>There are no accounts, so we do not collect passwords. We do not sell your personal information.</p>
<h2>How we use it</h2><p>We use your images only to produce the result you asked for. We use support messages only to answer you and to improve the service. We use technical data to keep the service secure and working.</p>
<h2>Third-party services</h2><p>This site loads fonts from Google Fonts and its styling library from a content delivery network. Those providers receive your IP address when your browser requests those files, under their own privacy policies.</p>
<h2>Cookies</h2><p>This site does not set cookies of its own and has no advertising trackers.</p>
<h2>Keeping your data</h2><p>We keep support messages for as long as needed to answer you and keep records of the request. Please do not upload images you are not comfortable sending to a server.</p>
<h2>Your choices</h2><p>You can ask us to delete a support message you sent, or ask what we hold about you, through the <a href="contact.html">contact page</a>.</p>
<h2>Children</h2><p>{SITE} is not directed at children under 13, and we do not knowingly collect their personal information.</p>
<h2>Changes</h2><p>If we change this policy we will update the date at the top of the page.</p>""")

write("404.html", f"Page not found | {SITE}", "The page you are looking for does not exist.",
 f'<section class="{W} py-24 text-center"><h1 class="font-head text-5xl font-extrabold tracking-tight sm:text-7xl">Page not found</h1><p class="mx-auto mt-5 max-w-md text-dim">That address does not lead anywhere. Pick a tool from the Tools menu or go back home.</p><a href="index.html" class="{GOLDBTN} mt-8">Go to the home page</a></section>')

pages = ["index.html"] + [t["file"] for t in TOOLS] + ["about.html", "contact.html", "terms.html", "privacy.html"]
sm = "".join(f"  <url><loc>{DOMAIN}/{'' if p == 'index.html' else p}</loc></url>\n" for p in pages)
open(os.path.join(OUT, "sitemap.xml"), "w").write(f'<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n{sm}</urlset>\n')
open(os.path.join(OUT, "robots.txt"), "w").write(f"User-agent: *\nAllow: /\n\nSitemap: {DOMAIN}/sitemap.xml\n")
print("built", len(pages) + 1, "pages")
