import { cn } from "@/lib/utils";

export interface HowItWorksStep {
  step: string;
  number: string;
  title: string;
  description: string;
  highlight?: boolean;
}

const DEFAULT_STEPS: HowItWorksStep[] = [
  {
    step: "Step 01",
    number: "01",
    title: "Upload your picture",
    description:
      "Drag and drop your file into the workbench or choose it from your device. Supports all major photo formats up to 50 MB.",
    highlight: false,
  },
  {
    step: "Step 02",
    number: "02",
    title: "Adjust parameters",
    description:
      "Choose transparent cutout, solid hex color, upscale multiplier (2x-4x), target KB size, or custom pixel dimensions.",
    highlight: true,
  },
  {
    step: "Step 03",
    number: "03",
    title: "Inspect & download",
    description:
      "Review side-by-side results with instant metric verification. Download high-resolution unwatermarked output directly.",
    highlight: false,
  },
];

export interface HowItWorksSectionProps {
  title?: string;
  subtitle?: string;
  steps?: HowItWorksStep[];
  className?: string;
}

export function HowItWorksSection({
  title = "Three simple steps from raw photo to studio export",
  subtitle = "Browser-native processing engineered for instant execution and lossless output.",
  steps = DEFAULT_STEPS,
  className,
}: HowItWorksSectionProps) {
  return (
    <section className={cn("bg-white py-14 sm:py-16 lg:py-20 border-b border-line", className)}>
      <div className="mx-auto w-full max-w-7xl 2xl:max-w-[1700px] px-4 sm:px-6 lg:px-10 2xl:px-14">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <h2 className="font-head text-xl sm:text-2xl lg:text-[26px] font-bold tracking-tight text-ink">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-2.5 text-xs sm:text-sm text-dim leading-relaxed max-w-md mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((item, index) => {
            const isHighlight = item.highlight;
            return (
              <div
                key={index}
                className={cn(
                  "group relative rounded-2xl border bg-mist/40 p-6 sm:p-7 transition-all duration-200 hover:bg-white hover:shadow-sm",
                  isHighlight
                    ? "border-line hover:border-gold/50"
                    : "border-line hover:border-ink/25"
                )}
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={cn(
                      "font-mono text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md shadow-2xs",
                      isHighlight
                        ? "text-gold-700 bg-gold/15 border border-gold/30"
                        : "text-dim/80 bg-white border border-line/80"
                    )}
                  >
                    {item.step}
                  </span>
                  <span
                    className={cn(
                      "font-mono text-2xl font-extrabold transition-all",
                      isHighlight
                        ? "text-gold group-hover:scale-105"
                        : "text-ink/15 group-hover:text-ink/30"
                    )}
                  >
                    {item.number}
                  </span>
                </div>
                <h3 className="font-head text-base sm:text-lg font-bold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-dim leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
