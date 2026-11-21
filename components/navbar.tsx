"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const TOOLS = [
  {
    title: "Background remover",
    description: "Transparent or solid studio fill",
    href: "/background-remover",
    image: "/assets/img/nav-tool-bg.jpg",
  },
  {
    title: "Image upscaler",
    description: "2x, 3x or 4x razor-sharp scale",
    href: "/image-upscaler",
    image: "/assets/img/nav-tool-upscale.jpg",
  },
  {
    title: "Image compressor",
    description: "Fit exact target limits in KB",
    href: "/image-compressor",
    image: "/assets/img/nav-tool-compress.jpg",
  },
  {
    title: "Image resizer",
    description: "Exact width, height & aspect ratios",
    href: "/image-resizer",
    image: "/assets/img/nav-tool-resize.jpg",
  },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [toolsDropdownOpen, setToolsDropdownOpen] = React.useState(false);

  const isToolActive = TOOLS.some((t) => pathname === t.href);

  // Close menus on path change
  React.useEffect(() => {
    setMobileMenuOpen(false);
    setToolsDropdownOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:h-20 lg:px-10 2xl:max-w-[1700px] 2xl:px-14">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex shrink-0 items-center transition hover:opacity-90"
          aria-label="Pixlab Home"
        >
          <img
            src="/assets/logo/logo.svg"
            alt="Pixlab"
            className="h-8 w-auto sm:h-9"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Main" className="hidden items-center gap-1.5 lg:flex">
          <Link
            href="/"
            className={cn(
              "rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200",
              pathname === "/"
                ? "bg-ink text-white shadow-sm"
                : "text-dim hover:bg-mist hover:text-ink"
            )}
          >
            Home
          </Link>

          {/* Tools Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setToolsDropdownOpen(true)}
            onMouseLeave={() => setToolsDropdownOpen(false)}
          >
            <button
              type="button"
              onClick={() => setToolsDropdownOpen(!toolsDropdownOpen)}
              className={cn(
                "flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200",
                isToolActive
                  ? "bg-ink text-white shadow-sm"
                  : "text-dim hover:bg-mist hover:text-ink"
              )}
            >
              Tools
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform duration-200",
                  toolsDropdownOpen && "rotate-180"
                )}
              />
            </button>

            {/* Tools Menu Flyout */}
            <div
              className={cn(
                "absolute left-1/2 top-full w-[38rem] -translate-x-1/2 pt-3 transition-all duration-200",
                toolsDropdownOpen
                  ? "visible opacity-100 translate-y-0"
                  : "invisible opacity-0 -translate-y-2 pointer-events-none"
              )}
            >
              <div className="grid grid-cols-2 gap-2 rounded-3xl border border-line bg-white p-3.5 shadow-2xl">
                {TOOLS.map((tool) => (
                  <Link
                    key={tool.href}
                    href={tool.href}
                    className={cn(
                      "group/item flex items-center gap-3.5 rounded-2xl p-3 transition-all hover:bg-mist",
                      pathname === tool.href && "bg-mist/70"
                    )}
                  >
                    <div className="h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-line bg-mist shadow-sm">
                      <img
                        src={tool.image}
                        alt={tool.title}
                        className="h-full w-full object-cover transition duration-300 group-hover/item:scale-105"
                      />
                    </div>
                    <div>
                      <span className="block font-semibold text-ink group-hover/item:text-ink">
                        {tool.title}
                      </span>
                      <span className="mt-0.5 block text-xs text-dim">
                        {tool.description}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/about"
            className={cn(
              "rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200",
              pathname === "/about"
                ? "bg-ink text-white shadow-sm"
                : "text-dim hover:bg-mist hover:text-ink"
            )}
          >
            About
          </Link>

          <Link
            href="/contact"
            className={cn(
              "rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200",
              pathname === "/contact"
                ? "bg-ink text-white shadow-sm"
                : "text-dim hover:bg-mist hover:text-ink"
            )}
          >
            Contact
          </Link>
        </nav>

        {/* Header Right Action */}
        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild variant="gold" className="px-6 font-semibold">
            <Link href="/background-remover">
              Open Studio
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="grid h-11 w-11 place-items-center rounded-full border border-line text-ink transition hover:bg-mist lg:hidden"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="border-b border-line bg-white p-4 shadow-2xl lg:hidden animate-in slide-in-from-top-2">
          <nav className="flex flex-col space-y-1">
            <Link
              href="/"
              className={cn(
                "rounded-xl px-4 py-3 text-sm font-semibold transition",
                pathname === "/"
                  ? "bg-ink text-white shadow-sm"
                  : "text-dim hover:bg-mist hover:text-ink"
              )}
            >
              Home
            </Link>

            <div className="pt-2">
              <p className="px-4 pb-1 text-xs font-bold uppercase tracking-wider text-dim">
                Studio Tools
              </p>
              <div className="space-y-1 pt-1">
                {TOOLS.map((tool) => (
                  <Link
                    key={tool.href}
                    href={tool.href}
                    className={cn(
                      "flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium transition",
                      pathname === tool.href
                        ? "bg-ink text-white shadow-sm font-semibold"
                        : "text-dim hover:bg-mist hover:text-ink"
                    )}
                  >
                    <div className="h-8 w-8 shrink-0 overflow-hidden rounded-lg border border-line bg-mist">
                      <img
                        src={tool.image}
                        alt={tool.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <span>{tool.title}</span>
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/about"
              className={cn(
                "rounded-xl px-4 py-3 text-sm font-semibold transition mt-2",
                pathname === "/about"
                  ? "bg-ink text-white shadow-sm"
                  : "text-dim hover:bg-mist hover:text-ink"
              )}
            >
              About Us
            </Link>

            <Link
              href="/contact"
              className={cn(
                "rounded-xl px-4 py-3 text-sm font-semibold transition",
                pathname === "/contact"
                  ? "bg-ink text-white shadow-sm"
                  : "text-dim hover:bg-mist hover:text-ink"
              )}
            >
              Contact
            </Link>

            <div className="pt-3">
              <Button asChild variant="gold" className="w-full justify-center">
                <Link href="/background-remover">Open Studio</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
