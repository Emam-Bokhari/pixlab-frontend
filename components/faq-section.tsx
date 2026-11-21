"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  items: FAQItem[];
  categories?: { label: string; value: string }[];
}

export function FAQSection({
  title = "Frequently asked questions",
  subtitle = "Everything you need to know about image processing, file formats, and privacy.",
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
    <section className="bg-white py-16 sm:py-20 lg:py-24 border-t border-line">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-head text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-ink">
            {title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-dim max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>

          {/* Category Filter Tabs */}
          {categories && categories.length > 0 && (
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
              <button
                type="button"
                onClick={() => setActiveCategory("all")}
                className={cn(
                  "rounded-full px-5 py-2 text-xs sm:text-sm font-semibold transition-all",
                  activeCategory === "all"
                    ? "bg-ink text-white shadow-sm"
                    : "text-dim hover:text-ink hover:bg-mist"
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
                    "rounded-full px-5 py-2 text-xs sm:text-sm font-semibold transition-all",
                    activeCategory === cat.value
                      ? "bg-ink text-white shadow-sm"
                      : "text-dim hover:text-ink hover:bg-mist"
                  )}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Accordion List */}
        <div className="mt-12 space-y-4">
          {filteredItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition-all hover:border-ink/30"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between p-5 sm:p-6 text-left font-head font-bold text-ink"
                >
                  <span className="text-base sm:text-lg pr-4">{item.question}</span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 shrink-0 text-dim transition-transform duration-200",
                      isOpen && "rotate-180 text-ink"
                    )}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-6 pt-1 sm:px-6 text-dim text-sm sm:text-base leading-relaxed border-t border-line/60 bg-mist/30 animate-in fade-in-50 duration-200">
                    {item.answer}
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
