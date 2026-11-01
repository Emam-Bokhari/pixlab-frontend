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
<link rel="icon" href="assets/logo/icon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="assets/logo/apple-touch-icon.png">
<link rel="manifest" href="site.webmanifest">
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

LOGO = f'<a href="index.html" class="flex shrink-0 items-center transition hover:opacity-90" aria-label="{SITE}"><img src="assets/logo/logo.svg" alt="{SITE}" class="h-8 sm:h-9 w-auto"></a>'

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
          <a href="index.html" class="inline-flex items-center transition hover:opacity-90" aria-label="{SITE}">
            <img src="assets/logo/logo-light.svg" alt="{SITE}" class="h-9 sm:h-10 w-auto">
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
ld = json.dumps({"@context": "https://schema.org", "@type": "WebSite", "name": SITE, "url": DOMAIN + "/", "image": f"{DOMAIN}/assets/logo/logo.png"})
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
about = """<!-- HERO SECTION -->
<section class="relative overflow-hidden bg-white pt-16 pb-12 sm:pt-20 sm:pb-16 lg:pt-24 lg:pb-20 border-b border-line">
  <div class="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[950px] rounded-full bg-gradient-to-b from-tint/70 via-mist to-transparent blur-3xl opacity-75"></div>

  <div class="relative z-10 mx-auto w-full max-w-7xl 2xl:max-w-[1700px] px-4 sm:px-6 lg:px-10 2xl:px-14 text-center">
    <div class="inline-flex items-center gap-2 rounded-full border border-line bg-mist/90 px-4 py-1.5 text-xs font-semibold text-ink backdrop-blur shadow-sm mb-6">
      <span class="h-2 w-2 rounded-full bg-gold animate-pulse"></span>
      <span>Next-Gen Visual Intelligence</span>
    </div>

    <h1 class="mx-auto max-w-4xl font-head text-4xl font-extrabold leading-[1.12] tracking-tight text-ink sm:text-5xl lg:text-6xl 2xl:text-7xl">
      Built for modern <br class="hidden sm:inline" />creative & image workflows
    </h1>

    <p class="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-dim sm:text-lg lg:text-xl 2xl:max-w-3xl">
      Creative velocity depends on fast, distortion-free AI image processing. Pixlab provides a unified suite of browser-native tools to transform, upscale, and refine visual assets with zero friction.
    </p>

    <!-- 3-Image Showcase Cards -->
    <div class="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center text-left">
      <div class="group relative overflow-hidden rounded-3xl border border-line bg-mist p-3 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:border-gold/60">
        <div class="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-white">
          <img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80" alt="Precision studio camera setup" loading="lazy" class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div class="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-transparent"></div>
          <div class="absolute bottom-3 left-3 flex items-center gap-2">
            <span class="rounded-full bg-white/95 backdrop-blur px-3 py-1 text-xs font-semibold text-ink shadow-sm flex items-center gap-1.5">
              <span class="h-2 w-2 rounded-full bg-emerald-500"></span>
              Instant Neural Cutout
            </span>
          </div>
        </div>
      </div>

      <div class="group relative overflow-hidden rounded-3xl border-2 border-gold/50 bg-white p-3.5 shadow-xl shadow-gold/15 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl md:-mt-4">
        <div class="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-tint">
          <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80" alt="Studio portrait with clean lighting" loading="lazy" class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div class="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent"></div>
          <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between">
            <span class="rounded-full bg-gold px-3.5 py-1 text-xs font-bold text-ink shadow-md flex items-center gap-1.5">
              <svg class="h-3.5 w-3.5 fill-current" viewBox="0 0 20 20"><path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"/></svg>
              100+ Formats Supported
            </span>
            <span class="rounded-full bg-white/95 backdrop-blur px-2.5 py-1 text-[11px] font-semibold text-ink shadow-sm">
              100% In-Browser
            </span>
          </div>
        </div>
      </div>

      <div class="group relative overflow-hidden rounded-3xl border border-line bg-mist p-3 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:border-gold/60">
        <div class="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-white">
          <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80" alt="Ultra detailed product photography" loading="lazy" class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div class="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-transparent"></div>
          <div class="absolute bottom-3 left-3 flex items-center gap-2">
            <span class="rounded-full bg-white/95 backdrop-blur px-3 py-1 text-xs font-semibold text-ink shadow-sm flex items-center gap-1.5">
              <span class="h-2 w-2 rounded-full bg-blue-500"></span>
              Lossless 4x Super-Res
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Mission Statement Banner -->
    <div class="mx-auto mt-14 max-w-4xl text-center sm:mt-20">
      <p class="font-head text-xl sm:text-2xl lg:text-3xl font-medium leading-relaxed text-ink">
        We are on a mission to help creators and teams reach their <span class="font-extrabold text-ink underline decoration-gold decoration-4 underline-offset-8">full potential</span> through smarter and more <span class="font-extrabold text-ink">efficient image tools</span> across global digital workflows.
      </p>
    </div>

    <!-- Stats Grid -->
    <div class="mt-12 sm:mt-16 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4 text-center">
      <div class="rounded-3xl border border-line bg-white p-6 sm:p-8 shadow-sm transition hover:shadow-md hover:border-gold/50">
        <p class="font-head text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-ink">25M+</p>
        <p class="mt-2 text-xs sm:text-sm font-semibold text-dim uppercase tracking-wider">Images Processed</p>
      </div>
      <div class="rounded-3xl border border-line bg-white p-6 sm:p-8 shadow-sm transition hover:shadow-md hover:border-gold/50">
        <p class="font-head text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-ink">99.8%</p>
        <p class="mt-2 text-xs sm:text-sm font-semibold text-dim uppercase tracking-wider">Edge & Subject Accuracy</p>
      </div>
      <div class="rounded-3xl border border-line bg-white p-6 sm:p-8 shadow-sm transition hover:shadow-md hover:border-gold/50">
        <p class="font-head text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-ink">&lt; 400ms</p>
        <p class="mt-2 text-xs sm:text-sm font-semibold text-dim uppercase tracking-wider">Average Processing Speed</p>
      </div>
      <div class="rounded-3xl border border-line bg-white p-6 sm:p-8 shadow-sm transition hover:shadow-md hover:border-gold/50">
        <p class="font-head text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-ink">140+</p>
        <p class="mt-2 text-xs sm:text-sm font-semibold text-dim uppercase tracking-wider">Countries Worldwide</p>
      </div>
    </div>
  </div>
</section>

<!-- FEATURE SHOWCASE 1: Delivering Certainty -->
<section class="border-b border-line bg-white py-16 sm:py-20 lg:py-28">
  <div class="mx-auto w-full max-w-7xl 2xl:max-w-[1700px] px-4 sm:px-6 lg:px-10 2xl:px-14 grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
    <div>
      <span class="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-700 border border-emerald-200">
        Solution
      </span>
      <h2 class="mt-4 font-head text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-5xl leading-tight">
        Delivering Certainty in Every Single Pixel
      </h2>
      <p class="mt-5 text-base sm:text-lg leading-relaxed text-dim">
        Most creators don't need a heavy desktop suite with dozens of menus. They need a product photo with a pure clean backdrop, a small file that uploads without errors, or an exact aspect ratio for an ad. Pixlab makes high-precision image operations instantaneous without requiring account registration.
      </p>

      <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-line pt-8">
        <div>
          <div class="flex items-center gap-2.5">
            <span class="grid h-8 w-8 place-items-center rounded-lg bg-tint text-ink">
              <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </span>
            <h3 class="font-head font-bold text-ink">Sub-Second Processing</h3>
          </div>
          <p class="mt-2 text-sm text-dim leading-relaxed">
            Real-time neural heuristics detect edges and subjects in under 400ms directly in your session.
          </p>
        </div>

        <div>
          <div class="flex items-center gap-2.5">
            <span class="grid h-8 w-8 place-items-center rounded-lg bg-tint text-ink">
              <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </span>
            <h3 class="font-head font-bold text-ink">Lossless Precision</h3>
          </div>
          <p class="mt-2 text-sm text-dim leading-relaxed">
            Export true transparent PNGs and pixel-perfect crops without chromatic aberration or blur.
          </p>
        </div>
      </div>
    </div>

    <!-- Right Showcase Image with Floating Metric Cards -->
    <div class="relative">
      <div class="relative overflow-hidden rounded-3xl border border-line bg-mist shadow-xl">
        <img src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1000&q=80" alt="Precision digital design workflow" loading="lazy" class="aspect-[4/3] w-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-tr from-ink/30 via-transparent to-transparent"></div>
      </div>

      <div class="absolute -top-5 -right-3 sm:-right-6 rounded-2xl border border-line bg-white/95 p-4 shadow-xl backdrop-blur max-w-[200px] sm:max-w-[220px]">
        <div class="flex items-baseline gap-2">
          <span class="font-head text-2xl sm:text-3xl font-black text-ink">10x</span>
          <span class="text-xs font-semibold text-emerald-600">Faster</span>
        </div>
        <p class="mt-1 text-xs text-dim">Speed increase compared to manual lasso & clipping</p>
      </div>

      <div class="absolute -bottom-6 -left-3 sm:-left-6 rounded-2xl border border-line bg-white/95 p-4 shadow-xl backdrop-blur max-w-[210px] sm:max-w-[230px]">
        <div class="flex items-baseline gap-2">
          <span class="font-head text-2xl sm:text-3xl font-black text-ink">95%</span>
          <span class="text-xs font-semibold text-blue-600">Storage Saved</span>
        </div>
        <p class="mt-1 text-xs text-dim">Adaptive compression without noticeable visual loss</p>
      </div>
    </div>
  </div>
</section>

<!-- FEATURE SHOWCASE 2: Unparalleled Experience -->
<section class="border-b border-line bg-mist/60 py-16 sm:py-20 lg:py-28">
  <div class="mx-auto w-full max-w-7xl 2xl:max-w-[1700px] px-4 sm:px-6 lg:px-10 2xl:px-14 grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
    <div class="relative order-2 lg:order-1">
      <div class="relative overflow-hidden rounded-3xl border border-line bg-white shadow-xl">
        <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1000&q=80" alt="Creative agency team reviewing image assets" loading="lazy" class="aspect-[4/3] w-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent"></div>

        <div class="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 rounded-2xl border border-white/20 bg-white/95 p-5 shadow-2xl backdrop-blur">
          <p class="text-xs sm:text-sm font-medium leading-relaxed text-ink/90 italic">
            "Pixlab brings rapid turnaround, crisp accuracy, and consistent studio quality we can depend on across hundreds of e-commerce catalog launches daily."
          </p>
          <div class="mt-3 flex items-center justify-between border-t border-line/60 pt-3">
            <div class="flex items-center gap-2">
              <img src="assets/logo/icon.svg" alt="Pixlab" class="h-6 w-6 rounded-lg object-contain">
              <span class="text-xs font-bold text-ink">Pixlab Enterprise Partner</span>
            </div>
            <span class="text-[11px] font-semibold text-dim">Verified Review</span>
          </div>
        </div>
      </div>
    </div>

    <div class="order-1 lg:order-2">
      <span class="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-700 border border-blue-200">
        Solution
      </span>
      <h2 class="mt-4 font-head text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-5xl leading-tight">
        Unparalleled Experience for Teams & Creators
      </h2>
      <p class="mt-5 text-base sm:text-lg leading-relaxed text-dim">
        We bring modern visual technology right to your fingertips. Whether you are generating social banners, polishing Amazon listings, or fitting photos to strict upload size limits, Pixlab delivers measurable ROI and efficiency at scale.
      </p>

      <ul class="mt-8 space-y-4">
        <li class="flex items-start gap-3.5">
          <span class="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold text-ink font-bold text-xs">✓</span>
          <div>
            <h3 class="font-head text-base font-bold text-ink">Deep Computer Vision Expertise</h3>
            <p class="text-sm text-dim">Engineered by researchers focused exclusively on pixel-level clarity and edge preservation.</p>
          </div>
        </li>
        <li class="flex items-start gap-3.5">
          <span class="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold text-ink font-bold text-xs">✓</span>
          <div>
            <h3 class="font-head text-base font-bold text-ink">Zero Setup & Account Barriers</h3>
            <p class="text-sm text-dim">Open any tool, drag-and-drop your asset, and download the finished file in seconds.</p>
          </div>
        </li>
        <li class="flex items-start gap-3.5">
          <span class="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold text-ink font-bold text-xs">✓</span>
          <div>
            <h3 class="font-head text-base font-bold text-ink">Guaranteed Client-Side Privacy</h3>
            <p class="text-sm text-dim">Your files are processed securely in temporary sandbox sessions without persistent storage or unauthorized model training.</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</section>

<!-- TEAM SECTION -->
<section class="border-b border-line bg-white py-16 sm:py-20 lg:py-28">
  <div class="mx-auto w-full max-w-7xl 2xl:max-w-[1700px] px-4 sm:px-6 lg:px-10 2xl:px-14">
    <div class="text-center max-w-2xl mx-auto">
      <span class="inline-flex items-center gap-1.5 rounded-full bg-teal-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-teal-700 border border-teal-200">
        Team
      </span>
      <h2 class="mt-4 font-head text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-5xl">
        Meet the Pixlab people
      </h2>
      <p class="mt-4 text-base sm:text-lg text-dim">
        We deliver reliable visual intelligence and effortless image tools for a sustainable digital future.
      </p>
    </div>

    <div class="mt-14 sm:mt-18 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      <div class="group relative overflow-hidden rounded-[2rem] border border-line bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-gold/60">
        <div class="mb-4">
          <h3 class="font-head text-xl font-bold text-ink group-hover:text-gold transition-colors">Royal Hooper</h3>
          <p class="text-sm font-medium text-dim">CEO · Founder</p>
        </div>
        <div class="aspect-[4/4.5] w-full overflow-hidden rounded-2xl bg-tint/60">
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80" alt="Royal Hooper" loading="lazy" class="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105" />
        </div>
      </div>

      <div class="group relative overflow-hidden rounded-[2rem] border border-line bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-gold/60">
        <div class="mb-4">
          <h3 class="font-head text-xl font-bold text-ink group-hover:text-gold transition-colors">Matilda Shelton</h3>
          <p class="text-sm font-medium text-dim">Head of Product</p>
        </div>
        <div class="aspect-[4/4.5] w-full overflow-hidden rounded-2xl bg-tint/60">
          <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80" alt="Matilda Shelton" loading="lazy" class="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105" />
        </div>
      </div>

      <div class="group relative overflow-hidden rounded-[2rem] border border-line bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-gold/60">
        <div class="mb-4">
          <h3 class="font-head text-xl font-bold text-ink group-hover:text-gold transition-colors">Tony Manning</h3>
          <p class="text-sm font-medium text-dim">Lead Vision Engineer</p>
        </div>
        <div class="aspect-[4/4.5] w-full overflow-hidden rounded-2xl bg-tint/60">
          <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80" alt="Tony Manning" loading="lazy" class="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105" />
        </div>
      </div>

      <div class="group relative overflow-hidden rounded-[2rem] border border-line bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-gold/60">
        <div class="mb-4">
          <h3 class="font-head text-xl font-bold text-ink group-hover:text-gold transition-colors">Jennifer Davis</h3>
          <p class="text-sm font-medium text-dim">Operations & Quality Manager</p>
        </div>
        <div class="aspect-[4/4.5] w-full overflow-hidden rounded-2xl bg-tint/60">
          <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80" alt="Jennifer Davis" loading="lazy" class="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105" />
        </div>
      </div>

      <div class="group relative overflow-hidden rounded-[2rem] border border-line bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-gold/60">
        <div class="mb-4">
          <h3 class="font-head text-xl font-bold text-ink group-hover:text-gold transition-colors">Tommie Harvey</h3>
          <p class="text-sm font-medium text-dim">Lead AI & ML Scientist</p>
        </div>
        <div class="aspect-[4/4.5] w-full overflow-hidden rounded-2xl bg-tint/60">
          <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80" alt="Tommie Harvey" loading="lazy" class="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105" />
        </div>
      </div>

      <div class="group relative overflow-hidden rounded-[2rem] border border-line bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-gold/60">
        <div class="mb-4">
          <h3 class="font-head text-xl font-bold text-ink group-hover:text-gold transition-colors">Christi Hampton</h3>
          <p class="text-sm font-medium text-dim">Lead Marketing & UX Strategist</p>
        </div>
        <div class="aspect-[4/4.5] w-full overflow-hidden rounded-2xl bg-tint/60">
          <img src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=600&q=80" alt="Christi Hampton" loading="lazy" class="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105" />
        </div>
      </div>
    </div>
  </div>
</section>

<!-- FREQUENTLY ASKED QUESTIONS -->
<section class="border-b border-line bg-mist/40 py-16 sm:py-20 lg:py-28">
  <div class="mx-auto w-full max-w-5xl 2xl:max-w-6xl px-4 sm:px-6 lg:px-10">
    <div class="text-center max-w-2xl mx-auto">
      <h2 class="font-head text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-5xl">
        Frequently Asked Questions
      </h2>
      <p class="mt-4 text-base sm:text-lg text-dim">
        Clear answers to common questions about our platform, features, privacy, and performance.
      </p>

      <div class="mt-8 inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-line bg-white p-1.5 shadow-sm" id="faq-tabs">
        <button type="button" data-filter="all" class="faq-tab-btn rounded-full px-5 py-2 text-xs sm:text-sm font-semibold transition bg-ink text-white shadow-sm">
          General
        </button>
        <button type="button" data-filter="platform" class="faq-tab-btn rounded-full px-5 py-2 text-xs sm:text-sm font-semibold transition text-dim hover:text-ink hover:bg-mist">
          Platform
        </button>
        <button type="button" data-filter="features" class="faq-tab-btn rounded-full px-5 py-2 text-xs sm:text-sm font-semibold transition text-dim hover:text-ink hover:bg-mist">
          Features
        </button>
        <button type="button" data-filter="support" class="faq-tab-btn rounded-full px-5 py-2 text-xs sm:text-sm font-semibold transition text-dim hover:text-ink hover:bg-mist">
          Support
        </button>
      </div>
    </div>

    <div class="mt-12 space-y-4" id="faq-accordion">
      <details class="group rounded-2xl border border-line bg-white p-5 sm:p-6 transition-all duration-200 open:border-ink/40 open:shadow-md" data-category="general platform" open>
        <summary class="flex cursor-pointer list-none items-center justify-between gap-4 font-head text-base sm:text-lg font-bold text-ink [&::-webkit-details-marker]:hidden">
          <span class="flex items-center gap-3">
            <span class="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-tint text-ink text-xs font-bold">Q1</span>
            What is Pixlab and how does it process images?
          </span>
          <span class="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line bg-mist text-dim transition group-open:rotate-180 group-open:bg-ink group-open:text-white">
            <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
          </span>
        </summary>
        <p class="mt-4 pl-10 text-sm sm:text-base leading-relaxed text-dim border-t border-line/60 pt-4">
          Pixlab is a modern online image lab designed to remove backgrounds, upscale images up to 4x, compress to exact KB targets, and resize with smart focal cropping. Everything works through browser-accelerated WebAssembly and neural heuristics to give you instant studio-grade results.
        </p>
      </details>

      <details class="group rounded-2xl border border-line bg-white p-5 sm:p-6 transition-all duration-200 open:border-ink/40 open:shadow-md" data-category="general">
        <summary class="flex cursor-pointer list-none items-center justify-between gap-4 font-head text-base sm:text-lg font-bold text-ink [&::-webkit-details-marker]:hidden">
          <span class="flex items-center gap-3">
            <span class="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-tint text-ink text-xs font-bold">Q2</span>
            Do I need to sign up or create an account to use the tools?
          </span>
          <span class="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line bg-mist text-dim transition group-open:rotate-180 group-open:bg-ink group-open:text-white">
            <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
          </span>
        </summary>
        <p class="mt-4 pl-10 text-sm sm:text-base leading-relaxed text-dim border-t border-line/60 pt-4">
          No. Pixlab is built with zero friction in mind. All four core tools (Background Remover, Upscaler, Compressor, Resizer) are completely free to use directly in your browser without requiring passwords, credit cards, or email logins.
        </p>
      </details>

      <details class="group rounded-2xl border border-line bg-white p-5 sm:p-6 transition-all duration-200 open:border-ink/40 open:shadow-md" data-category="platform support">
        <summary class="flex cursor-pointer list-none items-center justify-between gap-4 font-head text-base sm:text-lg font-bold text-ink [&::-webkit-details-marker]:hidden">
          <span class="flex items-center gap-3">
            <span class="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-tint text-ink text-xs font-bold">Q3</span>
            How does Pixlab guarantee the privacy of my uploaded photos?
          </span>
          <span class="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line bg-mist text-dim transition group-open:rotate-180 group-open:bg-ink group-open:text-white">
            <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
          </span>
        </summary>
        <p class="mt-4 pl-10 text-sm sm:text-base leading-relaxed text-dim border-t border-line/60 pt-4">
          Your media privacy is central to our engineering. Files uploaded for processing are handled in temporary sandboxed volatile memory and are purged immediately after the output is downloaded. We do not store your images, sell your data, or use your private photos to train public models.
        </p>
      </details>

      <details class="group rounded-2xl border border-line bg-white p-5 sm:p-6 transition-all duration-200 open:border-ink/40 open:shadow-md" data-category="features">
        <summary class="flex cursor-pointer list-none items-center justify-between gap-4 font-head text-base sm:text-lg font-bold text-ink [&::-webkit-details-marker]:hidden">
          <span class="flex items-center gap-3">
            <span class="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-tint text-ink text-xs font-bold">Q4</span>
            What scales and formats does the Image Upscaler support?
          </span>
          <span class="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line bg-mist text-dim transition group-open:rotate-180 group-open:bg-ink group-open:text-white">
            <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
          </span>
        </summary>
        <p class="mt-4 pl-10 text-sm sm:text-base leading-relaxed text-dim border-t border-line/60 pt-4">
          The upscaler supports 2x, 3x, and 4x enlargement for PNG, JPG, JPEG, WEBP, BMP, and TIFF files up to 50 MB. It intelligently sharpens fine boundaries and reconstructs high-frequency textures without creating pixelated blocks.
        </p>
      </details>

      <details class="group rounded-2xl border border-line bg-white p-5 sm:p-6 transition-all duration-200 open:border-ink/40 open:shadow-md" data-category="features">
        <summary class="flex cursor-pointer list-none items-center justify-between gap-4 font-head text-base sm:text-lg font-bold text-ink [&::-webkit-details-marker]:hidden">
          <span class="flex items-center gap-3">
            <span class="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-tint text-ink text-xs font-bold">Q5</span>
            Can I compress an image down to a specific target file size in KB?
          </span>
          <span class="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line bg-mist text-dim transition group-open:rotate-180 group-open:bg-ink group-open:text-white">
            <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
          </span>
        </summary>
        <p class="mt-4 pl-10 text-sm sm:text-base leading-relaxed text-dim border-t border-line/60 pt-4">
          Yes! Our Image Compressor lets you define an exact target limit (e.g. 200 KB or 500 KB), which is essential when submitting official documents, government portals, university admissions, and online marketplaces that enforce strict upload caps.
        </p>
      </details>

      <details class="group rounded-2xl border border-line bg-white p-5 sm:p-6 transition-all duration-200 open:border-ink/40 open:shadow-md" data-category="support platform">
        <summary class="flex cursor-pointer list-none items-center justify-between gap-4 font-head text-base sm:text-lg font-bold text-ink [&::-webkit-details-marker]:hidden">
          <span class="flex items-center gap-3">
            <span class="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-tint text-ink text-xs font-bold">Q6</span>
            What should I do if I need enterprise volume or custom API access?
          </span>
          <span class="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line bg-mist text-dim transition group-open:rotate-180 group-open:bg-ink group-open:text-white">
            <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
          </span>
        </summary>
        <p class="mt-4 pl-10 text-sm sm:text-base leading-relaxed text-dim border-t border-line/60 pt-4">
          If your business processes thousands of images daily and requires automated batch workflows or custom headless API access, reach out to our team via our <a href="contact.html" class="font-semibold text-ink underline decoration-gold">Contact page</a>. We provide dedicated solutions for high-volume catalogs.
        </p>
      </details>
    </div>
  </div>
</section>

<!-- CALL TO ACTION BANNER -->
<section class="relative overflow-hidden bg-[#070F20] py-16 sm:py-20 lg:py-24 text-white">
  <div class="pointer-events-none absolute -top-24 left-1/4 h-80 w-80 rounded-full bg-blue-600/20 blur-[100px]"></div>
  <div class="pointer-events-none absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-gold/15 blur-[100px]"></div>

  <div class="relative z-10 mx-auto w-full max-w-7xl 2xl:max-w-[1700px] px-4 sm:px-6 lg:px-10 2xl:px-14 flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
    <div class="max-w-2xl">
      <span class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold backdrop-blur">
        Ready to create?
      </span>
      <h2 class="mt-4 font-head text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-white">
        Transform your visual content in seconds
      </h2>
      <p class="mt-3 text-base sm:text-lg text-white/70">
        Join thousands of creators, online sellers, and designers who rely on Pixlab for flawless, high-speed image processing.
      </p>
    </div>
    <div class="flex flex-wrap items-center justify-center gap-4 shrink-0">
      <a href="background-remover.html" class="inline-flex items-center justify-center rounded-full bg-gold px-8 py-3.5 font-semibold text-ink transition hover:bg-white hover:shadow-xl hover:shadow-gold/20">
        Try Background Remover
      </a>
      <a href="contact.html" class="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-3.5 font-semibold text-white backdrop-blur transition hover:bg-white/15 hover:border-white/40">
        Contact Team
      </a>
    </div>
  </div>
</section>
"""
about_extra = """<script>
  // Interactive FAQ Tab Filtering
  document.addEventListener('DOMContentLoaded', () => {
    const faqBtns = document.querySelectorAll('.faq-tab-btn');
    const faqItems = document.querySelectorAll('#faq-accordion details');

    faqBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');

        faqBtns.forEach((b) => {
          b.className = 'faq-tab-btn rounded-full px-5 py-2 text-xs sm:text-sm font-semibold transition text-dim hover:text-ink hover:bg-mist';
        });
        btn.className = 'faq-tab-btn rounded-full px-5 py-2 text-xs sm:text-sm font-semibold transition bg-ink text-white shadow-sm';

        faqItems.forEach((item) => {
          const categories = item.getAttribute('data-category') || '';
          if (filter === 'all' || categories.includes(filter)) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  });
</script>
"""
write("about.html", f"About {SITE} – Simple Online Image Tools", f"Learn why {SITE} exists, how it works and what we care about.", about, "about.html", extra=about_extra)

# ---------- CONTACT ----------
contact = f"""<section class="relative overflow-hidden bg-[#070F20] text-white py-24 sm:py-28 lg:py-36">
  <div class="absolute inset-0 z-0">
    <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80" alt="Office workspace background" class="h-full w-full object-cover object-center opacity-25">
    <div class="absolute inset-0 bg-gradient-to-b from-[#070F20]/90 via-[#0B1B3A]/80 to-[#070F20]"></div>
  </div>
  <div class="pointer-events-none absolute -top-20 left-1/3 h-80 w-80 rounded-full bg-blue-600/20 blur-[100px]"></div>
  <div class="pointer-events-none absolute top-1/2 right-1/4 h-72 w-72 rounded-full bg-indigo-500/15 blur-[90px]"></div>
  <div class="relative z-10 {W} text-center">
    <span class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold backdrop-blur">Get in touch</span>
    <h1 class="mt-6 font-head text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white">Contact us</h1>
    <p class="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-white/80 leading-relaxed font-body">{SITE} is ready to provide the right solution according to your needs. Reach out to our team anytime.</p>
  </div>
</section>

<section class="relative z-20 {W} -mt-16 sm:-mt-24 lg:-mt-28">
  <div class="rounded-3xl border border-line bg-white p-6 sm:p-10 lg:p-14 shadow-2xl shadow-ink/10">
    <div class="grid gap-12 lg:grid-cols-[1fr_1.35fr] lg:gap-16">
      
      <div class="flex flex-col justify-between">
        <div>
          <h2 class="font-head text-2xl sm:text-3xl font-extrabold text-ink tracking-tight">Get in touch</h2>
          <p class="mt-3 text-sm sm:text-base text-dim leading-relaxed">Have questions about our tools, API integrations, or need custom enterprise image workflows? We're here to help you get the best results.</p>
          <div class="mt-8 space-y-6">
            <div class="flex items-start gap-4">
              <span class="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-blue-50 text-blue-600 shadow-sm border border-blue-100">
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </span>
              <div>
                <h3 class="font-head text-base font-bold text-ink">Head Office</h3>
                <p class="mt-1 text-sm text-dim leading-relaxed">742 Evergreen Terrace, Suite 400<br>San Francisco, CA 94107</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <span class="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-amber-50 text-amber-600 shadow-sm border border-amber-100">
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </span>
              <div>
                <h3 class="font-head text-base font-bold text-ink">Email Us</h3>
                <p class="mt-1 text-sm text-dim"><a href="mailto:support@pixlab.com" class="text-ink hover:text-gold transition font-medium">support@pixlab.com</a><br><a href="mailto:hello@pixlab.com" class="text-dim hover:text-ink transition">hello@pixlab.com</a></p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <span class="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-emerald-50 text-emerald-600 shadow-sm border border-emerald-100">
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </span>
              <div>
                <h3 class="font-head text-base font-bold text-ink">Call Us</h3>
                <p class="mt-1 text-sm text-dim leading-relaxed">Phone: <a href="tel:+18005550199" class="text-ink font-medium hover:text-gold transition">+1 (800) 555-0199</a><br>Hours: Mon – Fri, 9am – 6pm EST</p>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-10 pt-8 border-t border-line">
          <h3 class="font-head text-sm font-bold uppercase tracking-wider text-dim">Follow our social media</h3>
          <div class="mt-4 flex flex-wrap items-center gap-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" class="grid h-11 w-11 place-items-center rounded-xl border border-line bg-mist text-dim transition-all duration-200 hover:border-blue-600 hover:bg-blue-600 hover:text-white hover:shadow-md hover:-translate-y-0.5">
              <svg class="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="grid h-11 w-11 place-items-center rounded-xl border border-line bg-mist text-dim transition-all duration-200 hover:border-pink-600 hover:bg-pink-600 hover:text-white hover:shadow-md hover:-translate-y-0.5">
              <svg class="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter / X" class="grid h-11 w-11 place-items-center rounded-xl border border-line bg-mist text-dim transition-all duration-200 hover:border-ink hover:bg-ink hover:text-white hover:shadow-md hover:-translate-y-0.5">
              <svg class="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="grid h-11 w-11 place-items-center rounded-xl border border-line bg-mist text-dim transition-all duration-200 hover:border-blue-700 hover:bg-blue-700 hover:text-white hover:shadow-md hover:-translate-y-0.5">
              <svg class="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" class="grid h-11 w-11 place-items-center rounded-xl border border-line bg-mist text-dim transition-all duration-200 hover:border-red-600 hover:bg-red-600 hover:text-white hover:shadow-md hover:-translate-y-0.5">
              <svg class="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
          </div>
        </div>
      </div>

      <div>
        <h2 class="font-head text-2xl sm:text-3xl font-extrabold text-ink tracking-tight">Send us a message</h2>
        <form data-r="contact" class="mt-6 grid gap-5 sm:grid-cols-2">
          <label class="flex flex-col gap-1.5 text-sm font-semibold text-ink">Name
            <input name="name" required minlength="2" maxlength="100" autocomplete="name" placeholder="Your name" class="w-full rounded-xl border border-line bg-mist/50 px-4 py-3 text-base font-normal outline-none transition focus:border-ink focus:bg-white focus:ring-4 focus:ring-gold/30">
          </label>
          <label class="flex flex-col gap-1.5 text-sm font-semibold text-ink">Company
            <input name="company" maxlength="100" autocomplete="organization" placeholder="Your company name" class="w-full rounded-xl border border-line bg-mist/50 px-4 py-3 text-base font-normal outline-none transition focus:border-ink focus:bg-white focus:ring-4 focus:ring-gold/30">
          </label>
          <label class="flex flex-col gap-1.5 text-sm font-semibold text-ink">Phone
            <input name="phone" type="tel" autocomplete="tel" placeholder="+1 (555) 000-0000" class="w-full rounded-xl border border-line bg-mist/50 px-4 py-3 text-base font-normal outline-none transition focus:border-ink focus:bg-white focus:ring-4 focus:ring-gold/30">
          </label>
          <label class="flex flex-col gap-1.5 text-sm font-semibold text-ink">Email
            <input name="email" type="email" required autocomplete="email" placeholder="you@company.com" class="w-full rounded-xl border border-line bg-mist/50 px-4 py-3 text-base font-normal outline-none transition focus:border-ink focus:bg-white focus:ring-4 focus:ring-gold/30">
          </label>
          <label class="flex flex-col gap-1.5 text-sm font-semibold text-ink sm:col-span-2">Subject
            <input name="subject" required minlength="5" maxlength="150" placeholder="How can we help?" class="w-full rounded-xl border border-line bg-mist/50 px-4 py-3 text-base font-normal outline-none transition focus:border-ink focus:bg-white focus:ring-4 focus:ring-gold/30">
          </label>
          <label class="flex flex-col gap-1.5 text-sm font-semibold text-ink sm:col-span-2">Message
            <textarea name="message" required minlength="10" maxlength="2000" rows="5" placeholder="Tell us what you need or what you tried..." class="w-full rounded-xl border border-line bg-mist/50 px-4 py-3 text-base font-normal outline-none transition focus:border-ink focus:bg-white focus:ring-4 focus:ring-gold/30"></textarea>
          </label>
          <p data-r="cstatus" role="status" class="hidden sm:col-span-2"></p>
          <button class="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-ink py-4 font-semibold text-white shadow-lg transition-all duration-200 hover:bg-gold hover:text-ink hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-60 sm:col-span-2">
            <span>Send message</span>
            <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </button>
        </form>
      </div>

    </div>
  </div>
</section>

<section class="{W} py-16 sm:py-20">
  <div class="relative overflow-hidden rounded-3xl border border-line shadow-xl shadow-ink/5 aspect-[16/7] min-h-[360px] sm:min-h-[440px] w-full">
    <iframe title="Pixlab Office Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555098464!2d-122.50764017940733!3d37.75781500057217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" class="absolute inset-0 h-full w-full border-0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
</section>"""
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
 f'<section class="{W} py-24 text-center"><a href="index.html" class="inline-flex mb-8 transition hover:opacity-90"><img src="assets/logo/logo-stacked.svg" alt="{SITE}" class="h-16 sm:h-20 w-auto"></a><h1 class="font-head text-5xl font-extrabold tracking-tight sm:text-7xl">Page not found</h1><p class="mx-auto mt-5 max-w-md text-dim">That address does not lead anywhere. Pick a tool from the Tools menu or go back home.</p><a href="index.html" class="{GOLDBTN} mt-8">Go to the home page</a></section>')

pages = ["index.html"] + [t["file"] for t in TOOLS] + ["about.html", "contact.html", "terms.html", "privacy.html"]
sm = "".join(f"  <url><loc>{DOMAIN}/{'' if p == 'index.html' else p}</loc></url>\n" for p in pages)
open(os.path.join(OUT, "sitemap.xml"), "w").write(f'<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n{sm}</urlset>\n')
open(os.path.join(OUT, "robots.txt"), "w").write(f"User-agent: *\nAllow: /\n\nSitemap: {DOMAIN}/sitemap.xml\n")
print("built", len(pages) + 1, "pages")
