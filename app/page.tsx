import Link from "next/link";
import { ArrowRight, Scissors, Sparkles, Minimize2, Crop } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BeforeAfterSlider } from "@/components/before-after-slider";
import { FAQSection } from "@/components/faq-section";

const STUDIO_TOOLS = [
  {
    id: "bg-remove",
    name: "Background Remover",
    href: "/background-remover",
    icon: Scissors,
  },
  {
    id: "upscale",
    name: "Image Upscaler",
    href: "/image-upscaler",
    icon: Sparkles,
  },
  {
    id: "compress",
    name: "Image Compressor",
    href: "/image-compressor",
    icon: Minimize2,
  },
  {
    id: "resize",
    name: "Image Resizer",
    href: "/image-resizer",
    icon: Crop,
  },
];

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
      <section className="bg-mist py-12 sm:py-16 border-b border-line">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <p className="text-xs font-bold uppercase tracking-wider text-dim">
              Everything in One Place
            </p>
            <h2 className="mt-2 font-head text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-ink">
              Four specialized studio tools built for high-throughput workflows
            </h2>
            <p className="mt-3 text-sm sm:text-base text-dim leading-relaxed max-w-xl mx-auto">
              No bloated editors or complicated layer trees. Each tool does exactly one job with uncompromising precision.
            </p>
          </div>

          {/* 4 Minimalist Icon Cards in One Line (Screenshot Style) */}
          <div className="grid grid-cols-4 gap-2.5 sm:gap-4 md:gap-6 max-w-3xl mx-auto">
            {STUDIO_TOOLS.map((tool) => {
              const ToolIcon = tool.icon;
              return (
                <Link
                  key={tool.id}
                  href={tool.href}
                  className="group flex flex-col items-center justify-center rounded-2xl border border-line bg-white p-3.5 sm:p-5 md:p-6 shadow-xs transition-all duration-200 hover:border-ink/20 hover:shadow-md hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-ink"
                >
                  <div className="mb-2 sm:mb-3 flex items-center justify-center text-ink transition-transform duration-200 group-hover:scale-110 group-hover:text-gold-600">
                    <ToolIcon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 stroke-[1.75]" />
                  </div>
                  <span className="font-head text-[11px] sm:text-xs md:text-sm font-bold text-ink text-center leading-tight">
                    {tool.name}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="bg-white py-16 sm:py-20 lg:py-24 border-b border-line">
        <div className="mx-auto w-full max-w-7xl 2xl:max-w-[1700px] px-4 sm:px-6 lg:px-10 2xl:px-14">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-bold uppercase tracking-wider text-dim">
              Frictionless Pipeline
            </p>
            <h2 className="mt-2 font-head text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-ink">
              Three simple steps from raw photo to studio export
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative rounded-3xl border border-line bg-mist/50 p-8">
              <span className="font-mono text-4xl font-extrabold text-ink/20">01</span>
              <h3 className="mt-4 font-head text-xl font-bold text-ink">
                Upload your picture
              </h3>
              <p className="mt-2 text-sm text-dim leading-relaxed">
                Drag and drop your file into the workbench or choose it from your device. Supports all major photo formats up to 50 MB.
              </p>
            </div>

            <div className="relative rounded-3xl border border-line bg-mist/50 p-8">
              <span className="font-mono text-4xl font-extrabold text-gold">02</span>
              <h3 className="mt-4 font-head text-xl font-bold text-ink">
                Adjust parameters
              </h3>
              <p className="mt-2 text-sm text-dim leading-relaxed">
                Choose transparent cutout, solid hex color, upscale multiplier (2x-4x), target KB size, or custom pixel dimensions.
              </p>
            </div>

            <div className="relative rounded-3xl border border-line bg-mist/50 p-8">
              <span className="font-mono text-4xl font-extrabold text-ink/20">03</span>
              <h3 className="mt-4 font-head text-xl font-bold text-ink">
                Inspect &amp; download
              </h3>
              <p className="mt-2 text-sm text-dim leading-relaxed">
                Review side-by-side results with instant metric verification. Download high-resolution unwatermarked output directly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <FAQSection
        title="Frequently asked questions"
        subtitle="Common questions about image quality, security, and tool operations."
        items={HOME_FAQS}
        categories={FAQ_CATEGORIES}
      />

      {/* BOTTOM CTA BANNER */}
      <section className="bg-gold">
        <div className="mx-auto w-full max-w-7xl 2xl:max-w-[1700px] px-4 sm:px-6 lg:px-10 2xl:px-14 flex flex-col items-start justify-between gap-8 py-14 lg:flex-row lg:items-center lg:py-20">
          <div>
            <h2 className="max-w-2xl font-head text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-ink">
              Process your first image in seconds
            </h2>
            <p className="mt-3 max-w-xl text-base sm:text-lg text-ink/80 leading-relaxed">
              Choose a tool and inspect high-precision results right away. No software installation needed.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="bg-ink text-white hover:bg-white hover:text-ink font-bold">
              <Link href="/background-remover">Open background remover</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/30 text-ink border-ink/20 hover:bg-white font-semibold">
              <Link href="/image-compressor">Compress an image</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
