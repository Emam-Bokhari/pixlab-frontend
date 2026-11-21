import CtaSection from "@/components/shared/CtaSection";

export function Privacy() {
  return (
    <>
      {/* DARK HERO */}
      <section className="relative overflow-hidden bg-[#070F20] text-white py-20 sm:py-24 lg:py-28">
        <div className="pointer-events-none absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-blue-900/20 blur-[130px]" />
        <div className="pointer-events-none absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-gold/5 blur-[120px]" />

        <div className="relative z-10 mx-auto w-full max-w-7xl 2xl:max-w-[1700px] px-4 sm:px-6 lg:px-10 2xl:px-14 text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-gold">
            Data Governance &bull; Transparency
          </p>
          <h1 className="mt-4 max-w-4xl mx-auto font-head text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight text-white">
            Privacy by design, precision in execution
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-base sm:text-lg lg:text-xl text-white/70 leading-relaxed font-body">
            We believe your photographs, client assets, and commercial artwork belong solely to you. Zero accounts, zero surveillance cookies, and ephemeral RAM-only processing.
          </p>

          {/* Key Metrics Highlight Grid */}
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-6 text-left max-w-5xl mx-auto">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur transition hover:bg-white/[0.07]">
              <p className="font-head text-2xl sm:text-3xl font-extrabold text-gold">0 Disks</p>
              <p className="mt-1 text-xs text-white/70">Zero persistent file retention</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur transition hover:bg-white/[0.07]">
              <p className="font-head text-2xl sm:text-3xl font-extrabold text-gold">100%</p>
              <p className="mt-1 text-xs text-white/70">Volatile RAM processing only</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur transition hover:bg-white/[0.07]">
              <p className="font-head text-2xl sm:text-3xl font-extrabold text-gold">0 Trackers</p>
              <p className="mt-1 text-xs text-white/70">No advertising cookies or beacons</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur transition hover:bg-white/[0.07]">
              <p className="font-head text-2xl sm:text-3xl font-extrabold text-gold">TLS 1.3</p>
              <p className="mt-1 text-xs text-white/70">256-bit cryptographic transfer</p>
            </div>
          </div>
        </div>
      </section>

      {/* LIFECYCLE SECTION */}
      <section className="bg-white py-16 lg:py-24 border-b border-line">
        <div className="mx-auto w-full max-w-7xl 2xl:max-w-[1700px] px-4 sm:px-6 lg:px-10 2xl:px-14">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-wider text-dim">
              Architectural Transparency
            </p>
            <h2 className="mt-3 font-head text-2xl sm:text-3xl font-bold tracking-tight text-ink">
              How your images move through our studio
            </h2>
            <p className="mt-2.5 text-xs sm:text-sm text-dim leading-relaxed">
              Every tool operates with a strict ephemeral lifecycle. From upload to export, files never touch persistent storage.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-line bg-mist p-7 sm:p-8 shadow-sm">
              <span className="font-head text-3xl sm:text-4xl font-extrabold text-gold">01</span>
              <h3 className="mt-4 font-head text-base sm:text-lg font-bold text-ink">Encrypted Transport</h3>
              <p className="mt-2.5 text-xs sm:text-sm text-dim leading-relaxed">
                When you submit an image, it streams directly via HTTPS TLS 1.3 encryption to an isolated volatile memory buffer on our conversion nodes. No intermediate proxies inspect your content.
              </p>
            </div>

            <div className="rounded-3xl border border-line bg-mist p-7 sm:p-8 shadow-sm">
              <span className="font-head text-3xl sm:text-4xl font-extrabold text-gold">02</span>
              <h3 className="mt-4 font-head text-base sm:text-lg font-bold text-ink">In-Memory Transformation</h3>
              <p className="mt-2.5 text-xs sm:text-sm text-dim leading-relaxed">
                The selected transformation executes strictly within volatile RAM: edge contour cutting, matrix texture upscaling, or dimension compression. Nothing is written to physical disks.
              </p>
            </div>

            <div className="rounded-3xl border border-line bg-mist p-7 sm:p-8 shadow-sm">
              <span className="font-head text-3xl sm:text-4xl font-extrabold text-gold">03</span>
              <h3 className="mt-4 font-head text-base sm:text-lg font-bold text-ink">Instant Stream &amp; Purge</h3>
              <p className="mt-2.5 text-xs sm:text-sm text-dim leading-relaxed">
                The output file is returned to your browser as a binary blob stream. The moment your browser finishes receiving the result, the temporary memory allocation is immediately purged.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* POLICY DETAILS */}
      <section className="bg-mist py-16 lg:py-24 border-b border-line">
        <div className="mx-auto w-full max-w-7xl 2xl:max-w-[1700px] px-4 sm:px-6 lg:px-10 2xl:px-14">
          <div className="max-w-2xl mb-12">
            <h2 className="font-head text-2xl sm:text-3xl font-bold tracking-tight text-ink">
              Comprehensive Privacy Statements
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-dim leading-relaxed">
              Clear breakdown of data categories and obligations.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-line bg-white p-7 sm:p-8 shadow-sm">
              <h3 className="font-head text-base sm:text-lg font-bold text-ink">In-Memory Transformation Only</h3>
              <p className="mt-2.5 text-xs sm:text-sm text-dim leading-relaxed">
                Files you upload are transmitted directly to our processing cluster to perform your selected command. Once transformed and delivered back to your browser, files are purged immediately.
              </p>
            </div>

            <div className="rounded-3xl border border-line bg-white p-7 sm:p-8 shadow-sm">
              <h3 className="font-head text-base sm:text-lg font-bold text-ink">Zero Accounts, Zero Logins</h3>
              <p className="mt-2.5 text-xs sm:text-sm text-dim leading-relaxed">
                Pixlab has no sign-up forms, user profiles, or password requirements. Because we maintain no user databases, there are no credentials to leak or track across the web.
              </p>
            </div>

            <div className="rounded-3xl border border-line bg-white p-7 sm:p-8 shadow-sm">
              <h3 className="font-head text-base sm:text-lg font-bold text-ink">No Third-Party Advertising Trackers</h3>
              <p className="mt-2.5 text-xs sm:text-sm text-dim leading-relaxed">
                We do not sell advertising space or install behavioral tracking pixels from social media platforms or ad brokers.
              </p>
            </div>

            <div className="rounded-3xl border border-line bg-white p-7 sm:p-8 shadow-sm">
              <h3 className="font-head text-base sm:text-lg font-bold text-ink">GDPR &amp; CCPA Compliance</h3>
              <p className="mt-2.5 text-xs sm:text-sm text-dim leading-relaxed">
                By maintaining zero persistent logs of uploaded content or identifying profiles, we practice privacy-by-design that meets or exceeds global data protection regulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <CtaSection />
    </>
  );
}

export default Privacy;
