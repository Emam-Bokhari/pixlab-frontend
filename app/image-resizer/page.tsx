import type { Metadata } from "next";
import Link from "next/link";
import { ToolStudio } from "@/components/tool-studio";
import { FAQSection } from "@/components/faq-section";

export const metadata: Metadata = {
  title: "Image Resizer – Exact Pixel Dimensions & Aspect Ratios | Pixlab",
  description:
    "Resize images to exact pixel widths and heights. Smart focal centering keeps subjects in frame without distortion or stretching.",
};

const RESIZE_FAQS = [
  {
    question: "How does focal center framing work?",
    answer:
      "When changing aspect ratios (e.g. from 16:9 landscape to 1:1 square), the focal engine automatically locates the primary visual subject and frames it smoothly without squishing or stretching pixels.",
  },
  {
    question: "Can I lock aspect ratios while resizing?",
    answer:
      "Yes. When you change width, height automatically calculates proportionately so your image retains its original perspective.",
  },
  {
    question: "What are the common aspect ratios available?",
    answer:
      "Quick presets include 1:1 Square (Instagram / Product grid), 4:5 Portrait (Social stories & mobile feeds), 16:9 Landscape (YouTube banners & desktop headers), and custom pixel inputs.",
  },
];

export default function ImageResizerPage() {
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
            <span className="text-ink font-medium">Image Resizer</span>
          </div>

          <h1 className="mx-auto max-w-4xl font-head text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight text-ink">
            Resize an image to exact pixel dimensions
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg lg:text-xl text-dim leading-relaxed">
            Enter your exact target width and height in pixels. Smart focal framing keeps the subject centered without distortion or blur.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs sm:text-sm font-medium text-dim">
            <span className="rounded-full border border-line bg-mist/80 px-4 py-1.5 shadow-sm">
              Exact Pixel Dimensions
            </span>
            <span className="rounded-full border border-line bg-mist/80 px-4 py-1.5 shadow-sm">
              Smart Subject Crop
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
        tool="resize"
        title="Upload & Dimensions"
        subtitle="Specify exact target width and height in pixels"
        sampleBefore="/assets/img/man-portrait.jpg"
        sampleAfter="/assets/img/man-crop-square.jpg"
      />

      <FAQSection
        title="Image resizer questions"
        subtitle="Details on aspect ratios, focal cropping algorithms, and sharpness."
        items={RESIZE_FAQS}
      />
    </>
  );
}
