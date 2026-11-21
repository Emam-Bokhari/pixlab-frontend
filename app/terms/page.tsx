import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, Scale, FileText } from "lucide-react";
import { CtaSection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Terms of Service & Commercial Usage | Pixlab",
  description:
    "Clear rules of engagement for creators, agencies, and e-commerce studios. You retain 100% intellectual property ownership over every photograph, composite, and export.",
};

export default function TermsPage() {
  return (
    <>
      {/* DARK HERO */}
      <section className="relative overflow-hidden bg-[#070F20] text-white py-20 sm:py-24 lg:py-28">
        <div className="pointer-events-none absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-blue-900/20 blur-[130px]" />
        <div className="pointer-events-none absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-gold/5 blur-[120px]" />

        <div className="relative z-10 mx-auto w-full max-w-7xl 2xl:max-w-[1700px] px-4 sm:px-6 lg:px-10 2xl:px-14 text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-gold">
            Commercial Governance &bull; Terms of Use
          </p>
          <h1 className="mt-4 max-w-4xl mx-auto font-head text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight text-white">
            Terms of service &amp; commercial usage
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-base sm:text-lg lg:text-xl text-white/70 leading-relaxed font-body">
            Clear rules of engagement for creators, agencies, and e-commerce studios. You retain 100% intellectual property ownership over every photograph, composite, and export.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-6 text-left max-w-5xl mx-auto">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur transition hover:bg-white/[0.07]">
              <p className="font-head text-2xl sm:text-3xl font-extrabold text-gold">100% Owned</p>
              <p className="mt-1 text-xs text-white/70">Full user copyright &amp; asset retention</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur transition hover:bg-white/[0.07]">
              <p className="font-head text-2xl sm:text-3xl font-extrabold text-gold">0 Royalties</p>
              <p className="mt-1 text-xs text-white/70">Unrestricted commercial monetization</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur transition hover:bg-white/[0.07]">
              <p className="font-head text-2xl sm:text-3xl font-extrabold text-gold">50 MB Cap</p>
              <p className="mt-1 text-xs text-white/70">Single-image volatile memory limit</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur transition hover:bg-white/[0.07]">
              <p className="font-head text-2xl sm:text-3xl font-extrabold text-gold">Worldwide</p>
              <p className="mt-1 text-xs text-white/70">Global commercial validity</p>
            </div>
          </div>
        </div>
      </section>

      {/* COVENANT SECTION */}
      <section className="bg-white py-16 lg:py-24 border-b border-line">
        <div className="mx-auto w-full max-w-7xl 2xl:max-w-[1700px] px-4 sm:px-6 lg:px-10 2xl:px-14">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-wider text-dim">Rights &amp; Authority</p>
            <h2 className="mt-3 font-head text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-ink">
              The Creator&apos;s Ownership Covenant
            </h2>
            <p className="mt-3 text-base sm:text-lg text-dim leading-relaxed">
              We built Pixlab with complete respect for intellectual property. Here is the explicit balance of rights between you and our processing studio.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border-2 border-ink bg-white p-8 sm:p-10 shadow-lg shadow-ink/5">
              <div className="flex items-center justify-between pb-6 border-b border-line">
                <h3 className="font-head text-xl sm:text-2xl font-bold text-ink">Your Absolute Property</h3>
                <span className="rounded-full bg-ink px-4 py-1 text-xs font-bold text-white uppercase tracking-wider">
                  100% User Owned
                </span>
              </div>
              <ul className="mt-6 space-y-4 text-sm sm:text-base text-dim">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-ink shrink-0 mt-0.5" />
                  <span><strong>Full Copyright Retention:</strong> You retain complete, undivided copyright and moral ownership of all raw uploads and exported results.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-ink shrink-0 mt-0.5" />
                  <span><strong>Unrestricted Commercial Freedom:</strong> Monetize, distribute, print, sell, or advertise your images worldwide without fees or revenue sharing.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-ink shrink-0 mt-0.5" />
                  <span><strong>Zero Attribution Obligation:</strong> You are never required to credit Pixlab in any digital store, client lookbook, or marketing campaign.</span>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-line bg-mist p-8 sm:p-10 shadow-sm">
              <div className="flex items-center justify-between pb-6 border-b border-line">
                <h3 className="font-head text-xl sm:text-2xl font-bold text-ink">Pixlab&apos;s Limited Scope</h3>
                <span className="rounded-full bg-line px-4 py-1 text-xs font-bold text-ink uppercase tracking-wider">
                  Volatile RAM Only
                </span>
              </div>
              <ul className="mt-6 space-y-4 text-sm sm:text-base text-dim">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span><strong>Execution License Only:</strong> We receive only a transient, non-exclusive license to transform pixel buffers strictly to return your file.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span><strong>No Algorithmic Training:</strong> User-submitted photos are never harvested, scraped, or used to train machine learning models.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span><strong>Zero Disk Archiving:</strong> Image buffers exist strictly in volatile RAM and are permanently wiped after transmission completes.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <CtaSection />
    </>
  );
}
