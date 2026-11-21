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
  const toolsDropdownRef = React.useRef<HTMLDivElement>(null);

  const isToolActive = TOOLS.some((t) => pathname === t.href);

  // Close menus on path change
  React.useEffect(() => {
    setMobileMenuOpen(false);
    setToolsDropdownOpen(false);
  }, [pathname]);

  // Auto-close mobile menu on desktop resize
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock background scroll when mobile menu is open
  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Click outside to close tools dropdown
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        toolsDropdownRef.current &&
        !toolsDropdownRef.current.contains(event.target as Node)
      ) {
        setToolsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur-md relative">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-20 lg:px-10 2xl:max-w-[1700px] 2xl:px-14">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex shrink-0 items-center transition hover:opacity-90"
          aria-label="Pixlab Home"
          onClick={() => setMobileMenuOpen(false)}
        >
          <img
            src="/assets/logo/logo.svg"
            alt="Pixlab"
            className="h-8 w-auto sm:h-9"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Main" className="hidden shrink-0 items-center gap-1 xl:gap-1.5 lg:flex">
          <Link
            href="/"
            className={cn(
              "whitespace-nowrap rounded-full px-4 xl:px-5 py-2 text-sm font-semibold transition-all duration-200",
              pathname === "/"
                ? "bg-ink text-white shadow-sm"
                : "text-dim hover:bg-mist hover:text-ink"
            )}
          >
            Home
          </Link>

          {/* Tools Dropdown */}
          <div
            ref={toolsDropdownRef}
            className="relative"
            onMouseEnter={() => setToolsDropdownOpen(true)}
            onMouseLeave={() => setToolsDropdownOpen(false)}
          >
            <button
              type="button"
              onClick={() => setToolsDropdownOpen(!toolsDropdownOpen)}
              className={cn(
                "whitespace-nowrap flex items-center gap-1.5 rounded-full px-3.5 xl:px-4 py-2 text-sm font-semibold transition-all duration-200",
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
                    onClick={() => setToolsDropdownOpen(false)}
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
              "whitespace-nowrap rounded-full px-4 xl:px-5 py-2 text-sm font-semibold transition-all duration-200",
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
              "whitespace-nowrap rounded-full px-4 xl:px-5 py-2 text-sm font-semibold transition-all duration-200",
              pathname === "/contact"
                ? "bg-ink text-white shadow-sm"
                : "text-dim hover:bg-mist hover:text-ink"
            )}
          >
            Contact
          </Link>
        </nav>

        {/* Header Right Action */}
        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <Button asChild variant="gold" className="px-5 xl:px-6 font-semibold whitespace-nowrap">
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
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line text-ink transition hover:bg-mist lg:hidden"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Backdrop for Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-16 z-30 bg-ink/25 backdrop-blur-xs lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer Menu (Positioned Absolutely as an overlay) */}
      {mobileMenuOpen && (
        <div className="absolute inset-x-0 top-full z-40 max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-line bg-white p-4 shadow-2xl lg:hidden animate-in slide-in-from-top-2">
          <nav className="flex flex-col space-y-1">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
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
                    onClick={() => setMobileMenuOpen(false)}
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
              onClick={() => setMobileMenuOpen(false)}
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
              onClick={() => setMobileMenuOpen(false)}
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
                <Link
                  href="/background-remover"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Open Studio
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
