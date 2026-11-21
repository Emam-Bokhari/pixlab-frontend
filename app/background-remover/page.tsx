import type { Metadata } from "next";
import { ToolStudio } from "@/components/tool-studio";
import { FAQSection } from "@/components/faq-section";
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
      {/* WORKBENCH STUDIO COMPONENT */}
      <ToolStudio
        tool="bg"
        title="Upload & Configure"
        subtitle="Select image and optional backdrop fill"
        sampleBefore="/assets/img/tool-sneaker-original.jpg"
        sampleAfter="/assets/img/tool-sneaker-transparent.png"
      />

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
