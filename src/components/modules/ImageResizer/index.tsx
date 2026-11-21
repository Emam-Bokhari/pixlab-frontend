import ToolStudio from "@/components/modules/Tools/ToolStudio";
import FAQSection from "@/components/shared/FAQSection";
import CtaSection from "@/components/shared/CtaSection";

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

export function ImageResizer() {
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

export default ImageResizer;
