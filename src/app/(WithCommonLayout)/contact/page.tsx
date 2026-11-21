import ContactForm from "@/components/modules/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us – Studio Support & Inquiries | Pixlab",
  description:
    "Have questions, feedback, or need help with custom workflows? Reach out to our team anytime.",
};

export default function ContactPage() {
  return <ContactForm />;
}
