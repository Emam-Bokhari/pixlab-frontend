import Link from "next/link";
import { Scissors, Maximize2, Minimize2, Scaling, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface StudioToolItem {
  id: string;
  name: string;
  href: string;
  icon: LucideIcon;
}

export const STUDIO_TOOLS: StudioToolItem[] = [
  {
    id: "bg-remove",
    name: "Background Remover",
    href: "/background-remover",
    icon: Scissors,
  },
  {
    id: "upscale",
    name: "Image Upscaler",
    href: "/image-upscaler",
    icon: Maximize2,
  },
  {
    id: "compress",
    name: "Image Compressor",
    href: "/image-compressor",
    icon: Minimize2,
  },
  {
    id: "resize",
    name: "Image Resizer",
    href: "/image-resizer",
    icon: Scaling,
  },
];

export interface StudioToolsSectionProps {
  title?: string;
  subtitle?: string;
  className?: string;
  currentToolId?: string;
}

export function StudioToolsSection({
  title = "Four specialized studio tools built for high-throughput workflows",
  subtitle = "No bloated editors or complicated layer trees. Each tool does exactly one job with uncompromising precision.",
  className,
  currentToolId,
}: StudioToolsSectionProps) {
  return (
    <section className={cn("bg-mist/70 py-12 sm:py-16 border-b border-line", className)}>
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <h2 className="font-head text-xl sm:text-2xl lg:text-[26px] font-bold tracking-tight text-ink">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-2.5 text-xs sm:text-sm text-dim leading-relaxed max-w-lg mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-4 gap-2.5 sm:gap-4 md:gap-6 max-w-3xl mx-auto">
          {STUDIO_TOOLS.map((tool) => {
            const ToolIcon = tool.icon;
            const isCurrent = currentToolId === tool.id;
            return (
              <Link
                key={tool.id}
                href={tool.href}
                className={cn(
                  "group flex flex-col items-center justify-center rounded-2xl border bg-white p-3.5 sm:p-5 md:p-6 shadow-xs transition-all duration-200 hover:border-ink/20 hover:shadow-md hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-ink",
                  isCurrent ? "border-gold/60 ring-2 ring-gold/20" : "border-line"
                )}
              >
                <div
                  className={cn(
                    "mb-2 sm:mb-3 flex items-center justify-center text-ink transition-transform duration-200 group-hover:scale-110",
                    isCurrent ? "text-gold-600" : "group-hover:text-gold-600"
                  )}
                >
                  <ToolIcon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 stroke-[1.75]" />
                </div>
                <span className="font-head text-[11px] sm:text-xs md:text-sm font-bold text-ink text-center leading-tight">
                  {tool.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
