import type { Metadata } from "next";
import Link from "next/link";
import { ToolStudio } from "@/components/tool-studio";
import { FAQSection } from "@/components/faq-section";

export const metadata: Metadata = {
  title: "Image Upscaler – Razor-Sharp AI Super Resolution | Pixlab",
  description:
    "Scale low-resolution photos 2x, 3x, or 4x without pixelation or blur. High-fidelity texture magnification.",
};

const UPSCALE_FAQS = [
  {
    question: "What is the difference between 2x, 3x, and 4x magnification?",
    answer:
      "2x doubles each axis (4x pixel count) and is optimal for web previews; 3x triples the dimensions; 4x produces sixteen times the original pixel count, suitable for billboard prints and high-density retina displays.",
  },
  {
    question: "Will upscaling introduce blurring or plastic smoothing?",
    answer:
      "No. Our algorithm reconstructs microscopic fabric fibers, skin pores, and metallic reflections while eliminating compression artifacts.",
  },
  {
    question: "What is the maximum output resolution?",
    answer:
      "Images can be upscaled up to a maximum dimension of 8000x8000 pixels or 64 megapixels total canvas area.",
  },
];

export default function ImageUpscalerPage() {
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
            <span className="text-ink font-medium">Image Upscaler</span>
          </div>

          <h1 className="mx-auto max-w-4xl font-head text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight text-ink">
            Enlarge an image with razor-sharp clarity
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg lg:text-xl text-dim leading-relaxed">
            Scale low-resolution photos 2x, 3x, or 4x without pixelation or blur. Perfect for prints, product zoom, vintage photo restorations, and web graphics.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs sm:text-sm font-medium text-dim">
            <span className="rounded-full border border-line bg-mist/80 px-4 py-1.5 shadow-sm">
              2x, 3x or 4x Scale
            </span>
            <span className="rounded-full border border-line bg-mist/80 px-4 py-1.5 shadow-sm">
              Preserves Fine Detail
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
        tool="upscale"
        title="Upload & Scale Factor"
        subtitle="Select photo and choose magnification multiplier"
        sampleBefore="/assets/img/low.jpg"
        sampleAfter="/assets/img/jacket-upscale.jpg"
      />

      <FAQSection
        title="Image upscaler questions"
        subtitle="Answers on super-resolution factors, print preparation, and detail synthesis."
        items={UPSCALE_FAQS}
      />
    </>
  );
}
