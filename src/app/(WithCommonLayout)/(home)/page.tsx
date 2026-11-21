import BannerSection from "@/components/modules/Home/Banner";
import StudioToolsSection from "@/components/modules/Home/StudioToolsSection";
import HowItWorksSection from "@/components/modules/Home/HowItWorksSection";
import FAQSection from "@/components/shared/FAQSection";
import CtaSection from "@/components/shared/CtaSection";
import { Fragment } from "react";

const HOME_FAQS = [
  {
    category: "general",
    question: "Do I need to create an account or provide payment details?",
    answer:
      "No account, login, or subscription is required. Pixlab is free to use directly in your browser with zero sign-up barriers.",
  },
  {
    category: "quality",
    question: "Does background removal reduce image resolution or blur fine edges?",
    answer:
      "No. Our segmentation model preserves the native canvas resolution and isolates intricate hair strands, lace textures, and product silhouettes with 32-bit alpha precision.",
  },
  {
    category: "privacy",
    question: "Are my uploaded photos stored or used to train AI models?",
    answer:
      "Never. Uploaded assets are processed strictly in volatile RAM and discarded immediately upon completion. We do not write files to permanent disks, nor do we retain user data.",
  },
  {
    category: "formats",
    question: "What file formats and image sizes are supported?",
    answer:
      "We support PNG, JPEG, JPG, WEBP, BMP, TIFF, GIF, and AVIF files up to 50 MB in size and up to 8000x8000 pixels in resolution.",
  },
  {
    category: "commercial",
    question: "Can I use images processed on Pixlab for commercial stores and client projects?",
    answer:
      "Yes. You retain 100% intellectual property rights over all processed and exported imagery with zero royalties or commercial limitations.",
  },
];

const FAQ_CATEGORIES = [
  { label: "General", value: "general" },
  { label: "Quality", value: "quality" },
  { label: "Privacy & Security", value: "privacy" },
  { label: "Supported Formats", value: "formats" },
  { label: "Commercial Rights", value: "commercial" },
];

export default function HomePage() {
  return (
    <Fragment>
      {/* HERO BANNER */}
      <BannerSection />

      {/* CORE FOUR TOOLS SHOWCASE */}
      <StudioToolsSection />

      {/* HOW IT WORKS SECTION */}
      <HowItWorksSection />

      {/* FAQ SECTION */}
      <FAQSection
        title="Frequently asked questions"
        subtitle="Common questions about image quality, security, and tool operations."
        items={HOME_FAQS}
        categories={FAQ_CATEGORIES}
      />

      {/* BOTTOM CTA BANNER */}
      <CtaSection />
    </Fragment>
  );
}
