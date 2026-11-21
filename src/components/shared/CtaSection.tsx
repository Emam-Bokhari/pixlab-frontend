import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface CtaSectionProps {
  title?: string;
  subtitle?: string;
  primaryText?: string;
  primaryHref?: string;
  secondaryText?: string;
  secondaryHref?: string;
  className?: string;
}

export function CtaSection({
  title = "Process your first image in seconds",
  subtitle = "Choose a tool and inspect high-precision results right away. No software installation needed.",
  primaryText = "Open background remover",
  primaryHref = "/background-remover",
  secondaryText = "Compress an image",
  secondaryHref = "/image-compressor",
  className,
}: CtaSectionProps) {
  return (
    <section className={cn("bg-gold border-t border-gold-600/20", className)}>
      <div className="mx-auto w-full max-w-7xl 2xl:max-w-[1700px] px-4 sm:px-6 lg:px-10 2xl:px-14 flex flex-col items-start justify-between gap-6 py-12 lg:flex-row lg:items-center lg:py-14">
        <div>
          <h2 className="max-w-2xl font-head text-2xl sm:text-3xl font-bold tracking-tight text-ink">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-2 max-w-xl text-sm sm:text-base text-ink/85 leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
        <div className="flex flex-wrap items-center gap-3">
          {primaryText && (
            <Button asChild size="lg" className="bg-ink text-white hover:bg-ink/90 font-bold shadow-sm">
              <Link href={primaryHref}>{primaryText}</Link>
            </Button>
          )}
          {secondaryText && (
            <Button asChild size="lg" variant="outline" className="bg-white/40 text-ink border-ink/20 hover:bg-white font-semibold">
              <Link href={secondaryHref}>{secondaryText}</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}

export default CtaSection;
