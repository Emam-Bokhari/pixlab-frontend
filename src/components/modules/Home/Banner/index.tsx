import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import BeforeAfterSlider from "@/components/modules/Home/BeforeAfterSlider";

export function BannerSection() {
  return (
    <section className="relative overflow-hidden bg-white py-12 lg:py-20 border-b border-line">
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[950px] rounded-full bg-gradient-to-b from-tint/70 via-mist to-transparent blur-3xl opacity-75" />

      <div className="mx-auto w-full max-w-7xl 2xl:max-w-[1700px] px-4 sm:px-6 lg:px-10 2xl:px-14 grid items-center gap-12 lg:grid-cols-[1.1fr_1.15fr] lg:gap-16">
        <div className="relative z-10">
          <h1 className="font-head text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl text-ink">
            Professional image processing for products, apparel and portraits
          </h1>

          <p className="mt-6 max-w-xl text-base text-dim sm:text-lg lg:text-xl leading-relaxed">
            Four dedicated studio tools in one unified dashboard: cut backgrounds with pixel-perfect edges, upscale textures up to 4x, compress to target file limits, and resize with focal framing.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button asChild variant="gold" size="lg" className="font-bold">
              <Link href="/background-remover">
                Remove a background
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-semibold">
              <Link href="/image-upscaler">Upscale an image</Link>
            </Button>
          </div>
        </div>

        {/* Interactive Before/After Slider */}
        <div className="relative z-10">
          <BeforeAfterSlider
            originalSrc="/assets/img/hero-watch-original.jpg"
            afterSrc="/assets/img/hero-watch-transparent.png"
          />
        </div>
      </div>
    </section>
  );
}

export default BannerSection;
