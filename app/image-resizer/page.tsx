import type { Metadata } from "next";
import { ToolStudio } from "@/components/tool-studio";
import { FAQSection } from "@/components/faq-section";
import { CtaSection } from "@/components/cta-section";

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
      {/* WORKBENCH STUDIO */}
      <ToolStudio
        tool="resize"
        title="Upload & Dimensions"
        subtitle="Specify exact target width and height in pixels"
        sampleBefore="/assets/img/man-portrait.jpg"
        sampleAfter="/assets/img/man-crop-square.jpg"
      />

      {/* FAQS */}
      <FAQSection
        title="Image resizer questions"
        subtitle="Details on aspect ratios, focal cropping algorithms, and sharpness."
        items={RESIZE_FAQS}
      />

      {/* BOTTOM CTA */}
      <CtaSection />
    </>
  );
}
