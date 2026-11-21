import type { Metadata } from "next";
import Link from "next/link";
import { ToolStudio } from "@/components/tool-studio";
import { FAQSection } from "@/components/faq-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { StudioToolsSection } from "@/components/studio-tools-section";
import { CtaSection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Image Compressor – Target File Size in KB | Pixlab",
  description:
    "Compress images to exact target limits in KB without noticeable quality loss. Perfect for strict upload portals and web speed optimization.",
};

const COMPRESS_FAQS = [
  {
    question: "How does exact KB target compression work?",
    answer:
      "Instead of a generic quality percentage slider, you enter the exact target file size in kilobytes (e.g. 200 KB). Our compressor iteratively calculates the optimal quantization matrix to meet or beat the size boundary while maximizing visual sharpness.",
  },
  {
    question: "Does compression change my image dimensions?",
    answer:
      "No. The width and height pixel dimensions remain exactly the same unless you choose to resize it using our Resizer tool.",
  },
  {
    question: "Will the original file format be preserved?",
    answer:
      "Yes. JPEGs stay JPEGs, PNGs stay PNGs, and WEBP files stay WEBP unless otherwise requested.",
  },
];

export default function ImageCompressorPage() {
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
            <span className="text-ink font-medium">Image Compressor</span>
          </div>

          <h1 className="mx-auto max-w-4xl font-head text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight text-ink">
            Compress an image to the exact size you need
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg lg:text-xl text-dim leading-relaxed">
            Set your target file size limit in KB. Perfect for job application portals, government upload forms, and web stores without sacrificing visual clarity.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs sm:text-sm font-medium text-dim">
            <span className="rounded-full border border-line bg-mist/80 px-4 py-1.5 shadow-sm">
              Exact Target in KB
            </span>
            <span className="rounded-full border border-line bg-mist/80 px-4 py-1.5 shadow-sm">
              Preserves Format
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

      {/* WORKBENCH STUDIO */}
      <ToolStudio
        tool="compress"
        title="Upload & Target Size"
        subtitle="Select photo and specify target limit in KB"
        sampleBefore="/assets/img/heavy.png"
        sampleAfter="/assets/img/light.jpg"
      />

      {/* HOW IT WORKS */}
      <HowItWorksSection />

      {/* STUDIO TOOLS */}
      <StudioToolsSection currentToolId="compress" />

      {/* FAQS */}
      <FAQSection
        title="Image compression questions"
        subtitle="Detailed guidance on file size quotas, compression algorithms, and clarity."
        items={COMPRESS_FAQS}
      />

      {/* BOTTOM CTA */}
      <CtaSection />
    </>
  );
}
