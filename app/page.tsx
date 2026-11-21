import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BeforeAfterSlider } from "@/components/before-after-slider";
import { StudioToolsSection } from "@/components/studio-tools-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { FAQSection } from "@/components/faq-section";
import { CtaSection } from "@/components/cta-section";

const HOME_FAQS = [
  {
    category: "general",
    question: "Do I need to create an account or provide payment details?",
    answer:
      "No account, login, or subscription is required. Pixlab is free to use directly in your browser with zero sign-up barriers.",
  },
  {
    category: "quality",
    question: "Does background removal reduce image resolution or blur fine edges?",
    answer:
      "No. Our segmentation model preserves the native canvas resolution and isolates intricate hair strands, lace textures, and product silhouettes with 32-bit alpha precision.",
  },
  {
    category: "privacy",
    question: "Are my uploaded photos stored or used to train AI models?",
    answer:
      "Never. Uploaded assets are processed strictly in volatile RAM and discarded immediately upon completion. We do not write files to permanent disks, nor do we retain user data.",
  },
  {
    category: "formats",
    question: "What file formats and image sizes are supported?",
    answer:
      "We support PNG, JPEG, JPG, WEBP, BMP, TIFF, GIF, and AVIF files up to 50 MB in size and up to 8000x8000 pixels in resolution.",
  },
  {
    category: "commercial",
    question: "Can I use images processed on Pixlab for commercial stores and client projects?",
    answer:
      "Yes. You retain 100% intellectual property rights over all processed and exported imagery with zero royalties or commercial limitations.",
  },
];

const FAQ_CATEGORIES = [
  { label: "General", value: "general" },
  { label: "Quality", value: "quality" },
  { label: "Privacy & Security", value: "privacy" },
  { label: "Supported Formats", value: "formats" },
  { label: "Commercial Rights", value: "commercial" },
];

export default function HomePage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-white py-12 lg:py-20 border-b border-line">
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[950px] rounded-full bg-gradient-to-b from-tint/70 via-mist to-transparent blur-3xl opacity-75" />

        <div className="mx-auto w-full max-w-7xl 2xl:max-w-[1700px] px-4 sm:px-6 lg:px-10 2xl:px-14 grid items-center gap-12 lg:grid-cols-[1.1fr_1.15fr] lg:gap-16">
          <div className="relative z-10">
            <h1 className="font-head text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl text-ink">
              Professional image processing for products, apparel and portraits
            </h1>

            <p className="mt-6 max-w-xl text-base text-dim sm:text-lg lg:text-xl leading-relaxed">
              Four dedicated studio tools in one unified dashboard: cut backgrounds with pixel-perfect edges, upscale textures up to 4x, compress to target file limits, and resize with focal framing.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button asChild variant="gold" size="lg" className="font-bold">
                <Link href="/background-remover">
                  Remove a background
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="font-semibold">
                <Link href="/image-upscaler">Upscale an image</Link>
              </Button>
            </div>
          </div>

          {/* Interactive Before/After Slider */}
          <div className="relative z-10">
            <BeforeAfterSlider
              originalSrc="/assets/img/hero-watch-original.jpg"
              afterSrc="/assets/img/hero-watch-transparent.png"
            />
          </div>
        </div>
      </section>

      {/* CORE FOUR TOOLS SHOWCASE */}
      <StudioToolsSection />

      {/* HOW IT WORKS SECTION */}
      <HowItWorksSection />

      {/* FAQ SECTION */}
      <FAQSection
        title="Frequently asked questions"
        subtitle="Common questions about image quality, security, and tool operations."
        items={HOME_FAQS}
        categories={FAQ_CATEGORIES}
      />

      {/* BOTTOM CTA BANNER */}
      <CtaSection />
    </>
  );
}
