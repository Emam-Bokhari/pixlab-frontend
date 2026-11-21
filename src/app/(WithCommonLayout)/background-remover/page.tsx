import BackgroundRemover from "@/components/modules/BackgroundRemover";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Background Remover – Precision Image Cutout Studio | Pixlab",
  description:
    "Remove image backgrounds with studio precision. Export transparent PNGs or apply uniform solid backdrops. Free browser-based image isolation.",
};

export default function BackgroundRemoverPage() {
  return <BackgroundRemover />;
}
