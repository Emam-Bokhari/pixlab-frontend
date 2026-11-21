import type { Metadata } from "next";
import Link from "next/link";
import { ToolStudio } from "@/components/tool-studio";
import { FAQSection } from "@/components/faq-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { StudioToolsSection } from "@/components/studio-tools-section";
import { CtaSection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Background Remover – Precision Image Cutout Studio | Pixlab",
  description:
    "Remove image backgrounds with studio precision. Export transparent PNGs or apply uniform solid backdrops. Free browser-based image isolation.",
};

const BG_FAQS = [
  {
    question: "What file do I get back after background removal?",
    answer:
      "A 32-bit PNG. The background is completely transparent unless you choose an optional solid fill color.",
  },
  {
    question: "How do I fill the background with a specific studio color?",
    answer:
      "Select one of the preset color pills (White, Navy, Black) or type a hexadecimal color code such as #FFFFFF into the custom hex input box. Leave it empty to keep the background alpha-transparent.",
  },
  {
    question: "Which image formats can I upload?",
    answer:
      "PNG, JPEG, JPG, WEBP, BMP, TIFF, GIF, and AVIF files up to 50 MB in size are supported.",
  },
  {
    question: "How does the tool handle complex hair, fur, and semi-transparent objects?",
    answer:
      "Our segmentation engine applies adaptive matting algorithms that preserve individual strands, translucent fabrics, and glass edges without harsh borders.",
  },
];

export default function BackgroundRemoverPage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-white pt-12 pb-12 sm:pt-16 sm:pb-16 lg:pt-20 lg:pb-18 border-b border-line">
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[950px] rounded-full bg-gradient-to-b from-tint/70 via-mist to-transparent blur-3xl opacity-75" />

        <div className="relative z-10 mx-auto w-full max-w-7xl 2xl:max-w-[1700px] px-4 sm:px-6 lg:px-10 2xl:px-14 text-center">
          <div className="inline-flex items-center justify-center gap-2 text-sm text-dim mb-4">
            <Link href="/" className="hover:text-ink transition">
              Home
            </Link>
            <span>/</span>
            <span className="text-ink font-medium">Background Remover</span>
          </div>

          <h1 className="mx-auto max-w-4xl font-head text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight text-ink">
            Precision background isolation for studio photography
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg lg:text-xl text-dim leading-relaxed">
            Extract footwear, timepieces, apparel, and portraits with clean edge contours. Export an alpha-transparent PNG ready for composition, or fill the space with a uniform studio tone.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs sm:text-sm font-medium text-dim">
            <span className="rounded-full border border-line bg-mist/80 px-4 py-1.5 shadow-sm">
              Lossless Alpha PNG
            </span>
            <span className="rounded-full border border-line bg-mist/80 px-4 py-1.5 shadow-sm">
              Solid Hex Color Fill
            </span>
            <span className="rounded-full border border-line bg-mist/80 px-4 py-1.5 shadow-sm">
              Up to 50 MB File Size
            </span>
            <span className="rounded-full border border-line bg-mist/80 px-4 py-1.5 shadow-sm">
              Zero Account Required
            </span>
          </div>
        </div>
      </section>

      {/* WORKBENCH STUDIO COMPONENT */}
      <ToolStudio
        tool="bg"
        title="Upload & Configure"
        subtitle="Select image and optional backdrop fill"
        sampleBefore="/assets/img/tool-sneaker-original.jpg"
        sampleAfter="/assets/img/tool-sneaker-transparent.png"
      />

      {/* HOW IT WORKS */}
      <HowItWorksSection />

      {/* STUDIO TOOLS */}
      <StudioToolsSection currentToolId="bg-remove" />

      {/* FAQS */}
      <FAQSection
        title="Background remover questions"
        subtitle="Everything you need to know about isolation accuracy and color fills."
        items={BG_FAQS}
      />

      {/* BOTTOM CTA */}
      <CtaSection />
    </>
  );
}
