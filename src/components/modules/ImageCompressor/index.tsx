import ToolStudio from "@/components/modules/Tools/ToolStudio";
import FAQSection from "@/components/shared/FAQSection";
import CtaSection from "@/components/shared/CtaSection";

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

export function ImageCompressor() {
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

export default ImageCompressor;
