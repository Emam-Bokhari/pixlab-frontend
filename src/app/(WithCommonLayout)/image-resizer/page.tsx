import ImageResizer from "@/components/modules/ImageResizer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Image Resizer – Exact Pixel Dimensions & Aspect Ratios | Pixlab",
  description:
    "Resize images to exact pixel widths and heights. Smart focal centering keeps subjects in frame without distortion or stretching.",
};

export default function ImageResizerPage() {
  return <ImageResizer />;
}
