import ImageUpscaler from "@/components/modules/ImageUpscaler";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Image Upscaler – Razor-Sharp AI Super Resolution | Pixlab",
  description:
    "Scale low-resolution photos 2x, 3x, or 4x without pixelation or blur. High-fidelity texture magnification.",
};

export default function ImageUpscalerPage() {
  return <ImageUpscaler />;
}
