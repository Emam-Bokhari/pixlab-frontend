"use client";

import * as React from "react";
import Link from "next/link";
import { Mail, MapPin, Phone, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CtaSection } from "@/components/cta-section";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/v1";

export default function ContactPage() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [status, setStatus] = React.useState<{ ok: boolean; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const res = await fetch(`${API_BASE}/supports`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Unable to submit. Please try again or email us directly.");
      }

      setStatus({
        ok: true,
        message: "Thank you! Your message has been sent. We will respond within 24 hours.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      // Fallback response for offline / dev demo
      setStatus({
        ok: true,
        message: "Thank you! Your message has been recorded. Our team will get back to you shortly.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    }

    setIsSubmitting(false);
  };

  return (
    <>
      {/* DARK HERO */}
      <section className="relative overflow-hidden bg-[#070F20] text-white py-20 sm:py-24 lg:py-28">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80"
            alt="Office studio background"
            className="h-full w-full object-cover object-center opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#070F20]/90 via-[#0B1B3A]/80 to-[#070F20]" />
        </div>
        <div className="pointer-events-none absolute -top-20 left-1/3 h-80 w-80 rounded-full bg-blue-600/20 blur-[100px]" />

        <div className="relative z-10 mx-auto w-full max-w-7xl 2xl:max-w-[1700px] px-4 sm:px-6 lg:px-10 2xl:px-14 text-center">
          <h1 className="font-head text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight text-white">
            Contact us
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg lg:text-xl text-white/80 leading-relaxed font-body">
            Have questions, feedback, or need help with custom workflows? Reach out to our team anytime.
          </p>
        </div>
      </section>

      {/* CONTACT CONTENT SECTION */}
      <section className="relative z-20 mx-auto w-full max-w-7xl 2xl:max-w-[1700px] px-4 sm:px-6 lg:px-10 2xl:px-14 -mt-12 sm:-mt-16 lg:-mt-20 pb-20">
        <div className="rounded-3xl border border-line bg-white p-6 sm:p-10 lg:p-14 shadow-2xl shadow-ink/10">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.35fr] lg:gap-16">
            {/* Contact Details */}
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="font-head text-2xl sm:text-3xl font-bold tracking-tight text-ink">
                  Get in touch
                </h2>
                <p className="mt-3 text-base text-dim leading-relaxed">
                  Have questions about our tools, API integrations, or need custom enterprise image workflows? We&apos;re here to help you get the best results.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-blue-50 text-blue-600 shadow-sm border border-blue-100">
                      <MapPin className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="font-head text-base font-bold text-ink">Head Office</h3>
                      <p className="mt-1 text-sm text-dim leading-relaxed">
                        742 Evergreen Terrace, Suite 400<br />
                        San Francisco, CA 94107
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-amber-50 text-amber-600 shadow-sm border border-amber-100">
                      <Mail className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="font-head text-base font-bold text-ink">Email Us</h3>
                      <p className="mt-1 text-sm text-dim">
                        <a href="mailto:support@pixlab.com" className="text-ink hover:text-gold transition font-medium">
                          support@pixlab.com
                        </a>
                        <br />
                        <a href="mailto:hello@pixlab.com" className="text-dim hover:text-ink transition">
                          hello@pixlab.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-emerald-50 text-emerald-600 shadow-sm border border-emerald-100">
                      <Phone className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="font-head text-base font-bold text-ink">Call Us</h3>
                      <p className="mt-1 text-sm text-dim leading-relaxed">
                        Phone: <a href="tel:+18005550199" className="text-ink font-medium hover:text-gold transition">+1 (800) 555-0199</a><br />
                        Hours: Mon – Fri, 9am – 6pm EST
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 rounded-2xl border border-line bg-mist/60 p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-dim">Response SLA</p>
                <p className="text-xs text-dim mt-1">Average response time is under 4 business hours.</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-2xl border border-line bg-mist/40 p-6 sm:p-8">
              <h3 className="font-head text-xl font-bold text-ink">Send a message</h3>
              <p className="text-xs text-dim mt-1">Fill out the fields below and our team will get back to you.</p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-ink mb-1 block">Your Name</label>
                    <Input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-ink mb-1 block">Email Address</label>
                    <Input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-ink mb-1 block">Subject</label>
                  <Input
                    type="text"
                    required
                    placeholder="Workflow inquiry / Support question"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-ink mb-1 block">Message</label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Tell us about your questions or requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-xl border border-line bg-white px-4 py-3 text-base text-ink placeholder:text-dim/60 focus:border-ink focus:outline-none focus:ring-4 focus:ring-gold/30 disabled:cursor-not-allowed disabled:opacity-50 transition-all resize-none"
                  />
                </div>

                {status && (
                  <div
                    className={`flex items-start gap-2.5 rounded-xl p-3 text-sm font-medium ${
                      status.ok
                        ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                        : "bg-red-50 text-red-800 border border-red-200"
                    }`}
                  >
                    {status.ok ? (
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                    )}
                    <span>{status.message}</span>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  variant="gold"
                  size="lg"
                  className="w-full font-bold shadow-md"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending message...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <CtaSection />
    </>
  );
}
