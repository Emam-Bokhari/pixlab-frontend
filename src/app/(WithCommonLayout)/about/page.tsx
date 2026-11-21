import About from "@/components/modules/About";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Pixlab – Simple Online Image Studio Tools",
  description:
    "Learn why Pixlab exists, our design philosophy, and our commitment to privacy and lossless image processing.",
};

export default function AboutPage() {
  return <About />;
}
