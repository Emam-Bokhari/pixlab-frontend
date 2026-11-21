import type { Metadata } from "next";
import { ToolStudio } from "@/components/tool-studio";
import { FAQSection } from "@/components/faq-section";
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
      {/* WORKBENCH STUDIO */}
      <ToolStudio
        tool="compress"
        title="Upload & Target Size"
        subtitle="Select photo and specify target limit in KB"
        sampleBefore="/assets/img/heavy.png"
        sampleAfter="/assets/img/light.jpg"
      />

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
