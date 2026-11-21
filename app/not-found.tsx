import Link from "next/link";
import { Home, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="relative overflow-hidden bg-white min-h-[calc(100vh-12rem)] flex flex-col justify-center items-center text-center px-4 py-16">
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[550px] w-[1000px] rounded-full bg-gradient-to-b from-tint/80 via-mist/60 to-transparent blur-3xl opacity-80" />

      <div className="relative z-10 max-w-2xl mx-auto my-auto">
        <div className="select-none mb-2">
          <span className="font-head font-black tracking-tight text-8xl sm:text-9xl lg:text-[160px] leading-none text-transparent bg-clip-text bg-gradient-to-b from-ink via-ink/80 to-ink/25">
            404
          </span>
        </div>

        <h1 className="font-head text-3xl sm:text-4xl font-extrabold tracking-tight text-ink">
          Lost in the studio? Let&apos;s get you back on track.
        </h1>

        <p className="mt-4 text-base sm:text-lg text-dim leading-relaxed">
          The address you requested does not exist, has been archived, or was moved. Head back home or explore our core editing tools below.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button asChild variant="gold" size="lg" className="font-bold shadow-md">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Back to Homepage
            </Link>
          </Button>

          <Button asChild variant="outline" size="lg" className="font-semibold">
            <Link href="/background-remover">
              Explore Tools
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
