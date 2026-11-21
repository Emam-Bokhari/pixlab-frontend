"use client";

import * as React from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

interface FAQSectionProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  items: FAQItem[];
  categories?: { label: string; value: string }[];
}

export function FAQSection({
  badge = "Frequently Asked Questions",
  title = "Frequently asked questions",
  subtitle = "Common questions about image quality, security, and tool operations.",
  items,
  categories,
}: FAQSectionProps) {
  const [activeCategory, setActiveCategory] = React.useState<string>("all");
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const filteredItems = React.useMemo(() => {
    if (!activeCategory || activeCategory === "all") return items;
    return items.filter(
      (item) => item.category && item.category.includes(activeCategory)
    );
  }, [items, activeCategory]);

  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20 border-t border-line">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Studio Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-line/80 bg-mist px-3.5 py-1 shadow-xs mb-3.5">
            <HelpCircle className="h-3.5 w-3.5 text-gold-600" />
            <span className="font-mono text-[10px] font-bold tracking-widest text-ink/75 uppercase">
              {badge}
            </span>
          </div>

          {/* Compact, Refined Headline */}
          <h2 className="font-head text-xl sm:text-2xl lg:text-[26px] font-bold tracking-tight text-ink">
            {title}
          </h2>

          {/* Subtitle */}
          {subtitle && (
            <p className="mt-2 text-xs sm:text-sm text-dim max-w-lg mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}

          {/* Modern Segmented Filter Dock */}
          {categories && categories.length > 0 && (
            <div className="mt-7 flex flex-wrap items-center justify-center gap-1.5 p-1 rounded-full border border-line bg-mist/60 max-w-fit mx-auto">
              <button
                type="button"
                onClick={() => setActiveCategory("all")}
                className={cn(
                  "rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all duration-150",
                  activeCategory === "all"
                    ? "bg-ink text-white shadow-xs"
                    : "text-dim hover:text-ink hover:bg-white"
                )}
              >
                All Questions
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  type="button"
                  onClick={() => setActiveCategory(cat.value)}
                  className={cn(
                    "rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all duration-150",
                    activeCategory === cat.value
                      ? "bg-ink text-white shadow-xs"
                      : "text-dim hover:text-ink hover:bg-white"
                  )}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Refined Accordion List */}
        <div className="mt-10 space-y-3">
          {filteredItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={cn(
                  "overflow-hidden rounded-xl border transition-all duration-200",
                  isOpen
                    ? "border-ink/25 bg-white shadow-sm"
                    : "border-line bg-white hover:border-ink/20"
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between p-4 sm:p-5 text-left font-head font-bold text-ink"
                >
                  <span className="text-sm sm:text-base pr-4 text-ink">
                    {item.question}
                  </span>
                  <div
                    className={cn(
                      "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line bg-mist/60 text-dim transition-all duration-200",
                      isOpen && "rotate-180 bg-ink text-white border-ink"
                    )}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>
                {isOpen && (
                  <div className="px-4 pb-5 pt-0 sm:px-5 text-dim text-xs sm:text-sm leading-relaxed border-t border-line/50 bg-mist/20 animate-in fade-in-50 duration-200">
                    <p className="pt-3">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
