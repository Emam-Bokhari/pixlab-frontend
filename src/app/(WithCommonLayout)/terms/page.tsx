import Terms from "@/components/modules/Terms";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service & Commercial Usage | Pixlab",
  description:
    "Clear rules of engagement for creators, agencies, and e-commerce studios. You retain 100% intellectual property ownership over every photograph, composite, and export.",
};

export default function TermsPage() {
  return <Terms />;
}
