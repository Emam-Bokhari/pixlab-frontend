import Link from "next/link";
import { ArrowRight, ChevronRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import FAQSection from "@/components/shared/FAQSection";
import CtaSection from "@/components/shared/CtaSection";

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
  {
    category: "commercial",
    question: "Can I use images processed on Pixlab for commercial purposes?",
    answer:
      "Yes. You retain 100% intellectual property ownership of every processed asset with zero licensing fees, royalty splits, or watermarks.",
  },
];

export function About() {
  return (
    <>
      {/* MINIMALIST HERO */}
      <section className="bg-white pt-14 pb-14 sm:pt-18 sm:pb-18 lg:pt-20 lg:pb-20 border-b border-line">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="inline-flex items-center justify-center gap-1.5 text-xs sm:text-sm text-dim mb-6"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-1 text-dim hover:text-ink transition font-medium"
            >
              <Home className="h-3.5 w-3.5 text-dim/80" />
              <span>Home</span>
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-line shrink-0" />
            <span className="font-semibold text-ink">About</span>
          </nav>

          <h1 className="font-head text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-ink leading-[1.15]">
            We believe image tools should be fast, private, and simple.
          </h1>

          <p className="mt-5 text-base sm:text-lg text-dim leading-relaxed max-w-2xl mx-auto">
            Pixlab is a focused studio for high-resolution photo processing. No subscription walls, no accounts, and no data harvesting.
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <Button asChild variant="gold" size="lg" className="font-bold shadow-xs">
              <Link href="/background-remover">
                Open Studio Tools
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* EDITORIAL STORY SECTION */}
      <section className="bg-mist py-16 sm:py-20 border-b border-line">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-12 md:gap-14 items-start">
            <div className="md:col-span-5">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-dim block mb-3">
                The Story
              </span>
              <h2 className="font-head text-2xl sm:text-3xl font-bold tracking-tight text-ink leading-snug">
                Built out of frustration with modern online editors.
              </h2>
            </div>

            <div className="md:col-span-7 space-y-4 text-sm sm:text-base text-dim leading-relaxed">
              <p>
                Preparing an image for a product catalog, portfolio, or web store should take seconds. Yet most tools on the web force you to create accounts, navigate intrusive banners, pay monthly subscriptions, or hand over your personal photography to third-party databases.
              </p>
              <p>
                We built Pixlab with a straightforward philosophy: lightweight, browser-native tools that do one job exceptionally well.
              </p>
              <p>
                Whether you need to isolate intricate contours, upscale a photo up to 4x, compress down to a strict KB quota, or resize with focal centering - everything runs immediately in your browser without tracking or bloat.
              </p>
            </div>
          </div>

          {/* Clean Dual Studio Photo Display */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-xs">
              <div className="aspect-[4/3] w-full overflow-hidden bg-mist">
                <img
                  src="/assets/img/showcase-watch.jpg"
                  alt="Studio product photography"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="font-head text-sm sm:text-base font-bold text-ink">
                  Studio Precision
                </h3>
                <p className="mt-1 text-xs text-dim leading-relaxed">
                  Clean edge isolation and high-resolution texture reconstruction.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-xs">
              <div className="aspect-[4/3] w-full overflow-hidden bg-mist">
                <img
                  src="/assets/img/showcase-sneaker.jpg"
                  alt="E-commerce footwear showcase"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="font-head text-sm sm:text-base font-bold text-ink">
                  E-Commerce Ready
                </h3>
                <p className="mt-1 text-xs text-dim leading-relaxed">
                  Optimized for Shopify, Amazon, and commercial product feeds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THREE PRINCIPLES (Clean Minimalist List) */}
      <section className="bg-white py-16 sm:py-20 border-b border-line">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-dim block mb-2">
              Our Values
            </span>
            <h2 className="font-head text-2xl sm:text-3xl font-bold tracking-tight text-ink">
              Three simple commitments
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-t border-line pt-6">
              <span className="font-mono text-xs font-bold text-gold-600 block mb-2">
                01
              </span>
              <h3 className="font-head text-base sm:text-lg font-bold text-ink mb-2">
                Zero disk storage
              </h3>
              <p className="text-xs sm:text-sm text-dim leading-relaxed">
                Images stream strictly into temporary volatile memory and are purged immediately upon download. Nothing is ever written to disks or used for machine learning.
              </p>
            </div>

            <div className="border-t border-line pt-6">
              <span className="font-mono text-xs font-bold text-gold-600 block mb-2">
                02
              </span>
              <h3 className="font-head text-base sm:text-lg font-bold text-ink mb-2">
                Lossless fidelity
              </h3>
              <p className="text-xs sm:text-sm text-dim leading-relaxed">
                We avoid artificial blurring or aggressive lossy compression. Every transformation is engineered for clean, razor-sharp output ready for print and retina displays.
              </p>
            </div>

            <div className="border-t border-line pt-6">
              <span className="font-mono text-xs font-bold text-gold-600 block mb-2">
                03
              </span>
              <h3 className="font-head text-base sm:text-lg font-bold text-ink mb-2">
                Complete ownership
              </h3>
              <p className="text-xs sm:text-sm text-dim leading-relaxed">
                You retain 100% copyright and intellectual property over every exported file. Free to use across personal and commercial work with zero watermarks or attribution.
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

export default About;
