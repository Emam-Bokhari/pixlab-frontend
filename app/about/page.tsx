import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Zap, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FAQSection } from "@/components/faq-section";
import { CtaSection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "About Pixlab – Simple Online Image Studio Tools",
  description:
    "Learn why Pixlab exists, our design philosophy, and our commitment to privacy and lossless image processing.",
};

const ABOUT_FAQS = [
  {
    category: "mission",
    question: "Why was Pixlab built?",
    answer:
      "Most image editing tools online are weighed down by heavy subscription walls, mandatory registrations, aggressive ad pop-ups, and hidden data harvesting. We built Pixlab to provide professional, mathematically precise image processing with zero friction.",
  },
  {
    category: "privacy",
    question: "How do you guarantee image privacy?",
    answer:
      "Our processing pipeline operates entirely in volatile RAM. No uploaded images or processed outputs are ever saved to hard disks, shared with third parties, or used to train machine learning models.",
  },
  {
    category: "infrastructure",
    question: "Where is Pixlab hosted and what runs under the hood?",
    answer:
      "Pixlab uses cutting-edge browser WebAssembly and optimized headless edge microservices to deliver sub-second response times worldwide.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-white pt-16 pb-12 sm:pt-20 sm:pb-16 lg:pt-24 lg:pb-20 border-b border-line">
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[950px] rounded-full bg-gradient-to-b from-tint/70 via-mist to-transparent blur-3xl opacity-75" />

        <div className="relative z-10 mx-auto w-full max-w-7xl 2xl:max-w-[1700px] px-4 sm:px-6 lg:px-10 2xl:px-14 text-center">
          <div className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm text-dim mb-4">
            <Link href="/" className="hover:text-ink transition">
              Home
            </Link>
            <span>/</span>
            <span className="text-ink font-medium">About Us</span>
          </div>

          <h1 className="mx-auto max-w-4xl font-head text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight text-ink">
            Built for modern creative &amp; image workflows
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-dim sm:text-lg lg:text-xl">
            Fast, distortion-free image processing built for creators, sellers, and businesses. Pixlab provides a focused suite of browser-native tools to remove backgrounds, enlarge, compress, and resize pictures without complex software or subscriptions.
          </p>

          {/* 3-Image Showcase Cards */}
          <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center text-left">
            <div className="group relative overflow-hidden rounded-3xl border border-line bg-mist p-3 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:border-gold/60">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-white">
                <img
                  src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80"
                  alt="Studio camera equipment"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-3">
                <h3 className="font-head text-base sm:text-lg font-bold text-ink">Studio Precision</h3>
                <p className="text-xs sm:text-sm text-dim mt-1.5 leading-relaxed">Calibrated optics &amp; sub-pixel isolation algorithms.</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-3xl border border-line bg-white p-3.5 shadow-xl shadow-ink/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl md:-mt-4">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-mist">
                <img
                  src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80"
                  alt="Product footwear showcase"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-3">
                <h3 className="font-head text-base sm:text-lg font-bold text-ink">E-Commerce Ready</h3>
                <p className="text-xs sm:text-sm text-dim mt-1.5 leading-relaxed">Ready for Amazon, Shopify, and global product catalogs.</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-3xl border border-line bg-mist p-3 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:border-gold/60">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-white">
                <img
                  src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80"
                  alt="Creative design workspace"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-3">
                <h3 className="font-head text-base sm:text-lg font-bold text-ink">Zero Data Retention</h3>
                <p className="text-xs sm:text-sm text-dim mt-1.5 leading-relaxed">Volatile RAM guarantees absolute privacy.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THREE CORE PRINCIPLES */}
      <section className="bg-mist py-14 sm:py-16 lg:py-20 border-b border-line">
        <div className="mx-auto w-full max-w-7xl 2xl:max-w-[1700px] px-4 sm:px-6 lg:px-10 2xl:px-14">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <h2 className="font-head text-xl sm:text-2xl lg:text-[26px] font-bold tracking-tight text-ink">
              Our guiding principles
            </h2>
            <p className="mt-2.5 text-xs sm:text-sm text-dim leading-relaxed max-w-md mx-auto">
              Why thousands of designers and product teams trust Pixlab every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="rounded-3xl border border-line bg-white p-7 sm:p-8 shadow-sm">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-amber-50 text-gold mb-6 border border-amber-100">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="font-head text-base sm:text-lg font-bold text-ink">Mathematical Precision</h3>
              <p className="mt-2.5 text-xs sm:text-sm text-dim leading-relaxed">
                We avoid fuzzy approximations. Whether extracting a background or resizing an image, every pixel transformation is deterministic, lossless, and sharp.
              </p>
            </div>

            <div className="rounded-3xl border border-line bg-white p-7 sm:p-8 shadow-sm">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-50 text-emerald-600 mb-6 border border-emerald-100">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="font-head text-base sm:text-lg font-bold text-ink">Zero Persistent Storage</h3>
              <p className="mt-2.5 text-xs sm:text-sm text-dim leading-relaxed">
                Your imagery is never saved to a database, hard drive, or training bucket. When your tab closes, every trace of data disappears instantly.
              </p>
            </div>

            <div className="rounded-3xl border border-line bg-white p-7 sm:p-8 shadow-sm">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-blue-600 mb-6 border border-blue-100">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="font-head text-base sm:text-lg font-bold text-ink">Zero Friction</h3>
              <p className="mt-2.5 text-xs sm:text-sm text-dim leading-relaxed">
                No subscription pop-ups, mandatory credit cards, or credit counters. Just open the tool and do your work in seconds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQS */}
      <FAQSection
        title="Frequently asked questions about Pixlab"
        subtitle="Insights into our philosophy, security architecture, and tools."
        items={ABOUT_FAQS}
      />

      {/* BOTTOM CTA */}
      <CtaSection />
    </>
  );
}
