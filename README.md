# Pixlab – Frontend

Multi-page static website for the Pixlab image-processing backend. Plain HTML styled only with Tailwind CSS utility classes (Tailwind CDN). No custom CSS, no ids, no custom classes.

## Pages

| File | Purpose |
|---|---|
| `index.html` | Home: before/after slider, the four tools with real examples, how it works, supported formats |
| `background-remover.html` | Remove background (`POST /bg-remove`) |
| `image-upscaler.html` | Enlarge 2x/3x/4x (`POST /upscales`) |
| `image-compressor.html` | Compress to a target KB (`POST /reduce`) |
| `image-resizer.html` | Resize to exact pixels (`POST /resize`) |
| `about.html` | Why the site exists and what it values |
| `contact.html` | Support form (`POST /supports`) and quick answers |
| `terms.html`, `privacy.html` | Legal pages: match them to your real data handling |
| `404.html`, `sitemap.xml`, `robots.txt` | Not-found page and search engine files |

Navigation: Home, Tools (dropdown with all four tools), About, Contact. Every page has a full footer. Each page has its own title, meta description, canonical URL and Open Graph tags; tool pages also carry WebApplication and FAQPage structured data.

## Images

`assets/img/` holds the example pictures (a camera scene, its cut-out, a low-resolution copy, heavy and light versions, three crops). They are drawn by `make_images.py`. File sizes shown in the compressor example are read from the real files. Replace any of them with your own photos using the same file names.

## Before you publish

1. Set `DOMAIN` in `build.py`, then run `python3 build.py` (rewrites all pages, sitemap and robots.txt).
2. Set `API` at the top of `assets/app.js` to your deployed backend URL.
3. Backend CORS must expose the stats headers or the stats panel stays empty:
   `cors({ exposedHeaders: ['X-Scale','X-Original-Width','X-Original-Height','X-Original-Size-KB','X-Upscaled-Width','X-Upscaled-Height','X-Upscaled-Size-KB','X-Size-Increase-Percent','X-Reduced-Width','X-Reduced-Height','X-Reduced-Size-KB','X-Reduction-Percent','X-Target-Size-KB','X-Resized-Width','X-Resized-Height','X-Resized-Size-KB','X-Background-Color'] })`
4. Edit the terms and privacy text in `build.py` so it matches how long you really keep uploaded images.
5. For best speed, compile Tailwind with its CLI and replace the CDN script tags.
6. Submit `sitemap.xml` to Google Search Console.

## Colours

Ink `#0B1B3A`, Gold `#FFB81C`, Mist `#F7F8FA`, Line `#DDE2EC`, Dim `#5A6783`, Tint `#E8EDF7`.
