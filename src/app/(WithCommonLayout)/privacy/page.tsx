import Privacy from "@/components/modules/Privacy";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy – Data Governance & RAM Architecture | Pixlab",
  description:
    "We believe your photographs, client assets, and commercial artwork belong solely to you. Zero accounts, zero surveillance cookies, and ephemeral RAM-only processing.",
};

export default function PrivacyPage() {
  return <Privacy />;
}
