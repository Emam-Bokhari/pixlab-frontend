import ImageCompressor from "@/components/modules/ImageCompressor";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Image Compressor – Target File Size in KB | Pixlab",
  description:
    "Compress images to exact target limits in KB without noticeable quality loss. Perfect for strict upload portals and web speed optimization.",
};

export default function ImageCompressorPage() {
  return <ImageCompressor />;
}
