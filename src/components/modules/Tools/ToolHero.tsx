"use client";

import * as React from "react";
import Link from "next/link";
import {
  Scissors,
  Maximize2,
  Minimize2,
  Crop,
  Scaling,
  ChevronRight,
  Home,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

export type StudioToolId = "bg" | "upscale" | "compress" | "resize";

export interface StudioToolMeta {
  id: StudioToolId;
  name: string;
  href: string;
  icon: LucideIcon;
  defaultTitle: React.ReactNode;
  defaultSubtitle: string;
}

export const STUDIO_TOOL_METAS: Record<StudioToolId, StudioToolMeta> = {
  bg: {
    id: "bg",
    name: "Background Remover",
    href: "/background-remover",
    icon: Scissors,
    defaultTitle: (
      <>
        Precision background isolation for{" "}
        <span className="relative inline-block text-ink">
          studio photography
          <span className="absolute -bottom-1 left-0 right-0 h-2 -z-10 rounded-full bg-gold/35" />
        </span>
      </>
    ),
    defaultSubtitle:
      "Extract footwear, timepieces, apparel, and portraits with clean edge contours. Export an alpha-transparent PNG ready for composition, or fill the space with a uniform studio tone.",
  },
  upscale: {
    id: "upscale",
    name: "Image Upscaler",
    href: "/image-upscaler",
    icon: Maximize2,
    defaultTitle: (
      <>
        Enlarge an image with{" "}
        <span className="relative inline-block text-ink">
          razor-sharp clarity
          <span className="absolute -bottom-1 left-0 right-0 h-2 -z-10 rounded-full bg-gold/35" />
        </span>
      </>
    ),
    defaultSubtitle:
      "Scale low-resolution photos 2x, 3x, or 4x without pixelation or blur. Perfect for prints, product zoom, vintage photo restorations, and web graphics.",
  },
  compress: {
    id: "compress",
    name: "Image Compressor",
    href: "/image-compressor",
    icon: Minimize2,
    defaultTitle: (
      <>
        Compress an image to the{" "}
        <span className="relative inline-block text-ink">
          exact size you need
          <span className="absolute -bottom-1 left-0 right-0 h-2 -z-10 rounded-full bg-gold/35" />
        </span>
      </>
    ),
    defaultSubtitle:
      "Set your target file size limit in KB. Perfect for job application portals, government upload forms, and web stores without sacrificing visual clarity.",
  },
  resize: {
    id: "resize",
    name: "Image Resizer",
    href: "/image-resizer",
    icon: Scaling,
    defaultTitle: (
      <>
        Resize an image to{" "}
        <span className="relative inline-block text-ink">
          exact pixel dimensions
          <span className="absolute -bottom-1 left-0 right-0 h-2 -z-10 rounded-full bg-gold/35" />
        </span>
      </>
    ),
    defaultSubtitle:
      "Enter your exact target width and height in pixels. Smart focal framing keeps the subject centered without distortion or blur.",
  },
};

export interface ToolHeroProps {
  tool: StudioToolId;
  title?: React.ReactNode;
  subtitle?: string;
  className?: string;
}

export function ToolHero({
  tool,
  title,
  subtitle,
  className,
}: ToolHeroProps) {
  const meta = STUDIO_TOOL_METAS[tool];
  const activeTitle = title || meta.defaultTitle;
  const activeSubtitle = subtitle || meta.defaultSubtitle;
  const ToolIcon = meta.icon;

  return (
    <section
      className={cn(
        "relative overflow-hidden bg-gradient-to-b from-mist/70 via-white to-white pt-12 pb-12 sm:pt-16 sm:pb-16 lg:pt-20 lg:pb-18 border-b border-line",
        className
      )}
    >
      {/* Studio Dot Matrix Pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_35%,black_40%,transparent_100%)]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #0b1b3a 1px, transparent 0)`,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Ambient Lighting Orbs */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[520px] w-[950px] rounded-full bg-gradient-to-b from-tint/80 via-gold/10 to-transparent blur-3xl opacity-70" />
      <div className="pointer-events-none absolute top-10 left-1/4 -translate-x-1/2 h-72 w-72 rounded-full bg-gold/15 blur-3xl opacity-50" />
      <div className="pointer-events-none absolute top-10 right-1/4 translate-x-1/2 h-72 w-72 rounded-full bg-tint blur-3xl opacity-60" />

      <div className="relative z-10 mx-auto w-full max-w-4xl 2xl:max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="inline-flex items-center justify-center gap-1.5 text-xs sm:text-sm text-dim mb-4"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-dim hover:text-ink transition font-medium"
          >
            <Home className="h-3.5 w-3.5 text-dim/80" />
            <span>Home</span>
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-line shrink-0" />
          <span className="font-medium text-dim/90">Tools</span>
          <ChevronRight className="h-3.5 w-3.5 text-line shrink-0" />
          <span className="font-semibold text-ink flex items-center gap-1.5">
            <ToolIcon className="h-3.5 w-3.5 text-gold-600 shrink-0" />
            {meta.name}
          </span>
        </nav>

        {/* Main Headline */}
        <h1 className="mx-auto max-w-4xl font-head text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold leading-[1.1] tracking-tight text-ink">
          {activeTitle}
        </h1>

        {/* Descriptive Subtitle */}
        <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg lg:text-xl text-dim leading-relaxed">
          {activeSubtitle}
        </p>
      </div>
    </section>
  );
}

export default ToolHero;
