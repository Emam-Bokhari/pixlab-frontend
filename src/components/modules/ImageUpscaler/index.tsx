import ToolStudio from "@/components/modules/Tools/ToolStudio";
import FAQSection from "@/components/shared/FAQSection";
import CtaSection from "@/components/shared/CtaSection";

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

export function ImageUpscaler() {
  return (
    <>
      {/* WORKBENCH STUDIO */}
      <ToolStudio
        tool="upscale"
        title="Upload & Scale Factor"
        subtitle="Select photo and choose magnification multiplier"
        sampleBefore="/assets/img/low.jpg"
        sampleAfter="/assets/img/jacket-upscale.jpg"
      />

      {/* FAQS */}
      <FAQSection
        title="Image upscaler questions"
        subtitle="Answers on super-resolution factors, print preparation, and detail synthesis."
        items={UPSCALE_FAQS}
      />

      {/* BOTTOM CTA */}
      <CtaSection />
    </>
  );
}

export default ImageUpscaler;
