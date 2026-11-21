import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#070F20] text-white/70 pt-20 pb-12 lg:pt-28 lg:pb-16 border-t border-white/10">
      {/* Glow effects */}
      <div className="pointer-events-none absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-blue-900/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-10 left-1/2 -translate-x-1/2 h-72 w-[600px] rounded-full bg-gold/5 blur-[140px]" />
      <div className="pointer-events-none absolute -right-24 top-1/2 -translate-y-1/2 h-[520px] w-[520px] rounded-full bg-[#132A5E]/40 blur-sm" />
      <div className="pointer-events-none absolute right-16 top-12 h-80 w-80 rounded-full bg-[#1A3B80]/30 blur-[2px]" />
      <div className="pointer-events-none absolute right-52 top-1/3 h-64 w-64 rounded-full bg-[#0E2045]/60 blur-md" />
      <div className="pointer-events-none absolute -right-10 bottom-4 h-96 w-96 rounded-full bg-blue-900/20 blur-[90px]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl 2xl:max-w-[1700px] px-4 sm:px-6 lg:px-10 2xl:px-14">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr_1fr_1fr] pb-16 border-b border-white/10">
          <div className="flex flex-col justify-between">
            <div>
              <Link
                href="/"
                className="inline-flex items-center transition hover:opacity-90"
                aria-label="Pixlab"
              >
                <img
                  src="/assets/logo/logo-light.svg"
                  alt="Pixlab"
                  className="h-9 sm:h-10 w-auto"
                />
              </Link>
              <p className="mt-5 max-w-sm text-sm sm:text-base leading-relaxed text-white/60">
                Professional browser-based image studio. Fast, private tools to
                remove backgrounds, enlarge textures, compress, and resize with
                production precision.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-white/70 backdrop-blur transition-all duration-300 hover:border-gold/50 hover:bg-gold hover:text-ink hover:shadow-lg hover:shadow-gold/20 hover:-translate-y-0.5"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X (Twitter)"
                className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-white/70 backdrop-blur transition-all duration-300 hover:border-gold/50 hover:bg-gold hover:text-ink hover:shadow-lg hover:shadow-gold/20 hover:-translate-y-0.5"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-white/70 backdrop-blur transition-all duration-300 hover:border-gold/50 hover:bg-gold hover:text-ink hover:shadow-lg hover:shadow-gold/20 hover:-translate-y-0.5"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h2 className="font-head text-sm font-bold uppercase tracking-wider text-white">
              Studio Tools
            </h2>
            <ul className="mt-5 grid gap-3 text-sm">
              <li>
                <Link
                  href="/background-remover"
                  className="transition-colors hover:text-white"
                >
                  Background remover
                </Link>
              </li>
              <li>
                <Link
                  href="/image-upscaler"
                  className="transition-colors hover:text-white"
                >
                  Image upscaler
                </Link>
              </li>
              <li>
                <Link
                  href="/image-compressor"
                  className="transition-colors hover:text-white"
                >
                  Image compressor
                </Link>
              </li>
              <li>
                <Link
                  href="/image-resizer"
                  className="transition-colors hover:text-white"
                >
                  Image resizer
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-head text-sm font-bold uppercase tracking-wider text-white">
              Company
            </h2>
            <ul className="mt-5 grid gap-3 text-sm">
              <li>
                <Link href="/" className="transition-colors hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition-colors hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="transition-colors hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-head text-sm font-bold uppercase tracking-wider text-white">
              Legal & Trust
            </h2>
            <ul className="mt-5 grid gap-3 text-sm">
              <li>
                <Link href="/terms" className="transition-colors hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="transition-colors hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
              <li className="pt-2 text-xs text-white/40">
                Data retained: 0 seconds (RAM ephemeral only)
              </li>
            </ul>
          </div>
        </div>

        {/* Big stylized PIXLAB watermark */}
        <div className="relative w-full overflow-hidden select-none pointer-events-none pt-12 sm:pt-16 pb-2 sm:pb-4 flex justify-center items-center">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-36 w-3/4 max-w-4xl rounded-full bg-blue-900/15 blur-3xl" />
          <p className="font-head font-black tracking-[-0.04em] text-[18vw] sm:text-[17vw] lg:text-[16vw] xl:text-[210px] leading-none uppercase text-transparent bg-clip-text bg-gradient-to-b from-white/[0.12] via-white/[0.04] to-transparent drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)]">
            PIXLAB
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10 text-xs sm:text-sm text-white/50">
          <p>&copy; {new Date().getFullYear()} Pixlab Studio. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="transition hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
