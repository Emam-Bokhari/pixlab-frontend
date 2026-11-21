"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface BeforeAfterSliderProps {
  originalSrc?: string;
  originalAlt?: string;
  afterSrc?: string;
  afterAlt?: string;
  className?: string;
}

export function BeforeAfterSlider({
  originalSrc = "/assets/img/hero-watch-original.jpg",
  originalAlt = "Studio watch photo with background",
  afterSrc = "/assets/img/hero-watch-transparent.png",
  afterAlt = "Studio watch cutout isolated on transparent background",
  className,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = React.useState(50);
  const [isDragging, setIsDragging] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const handleMove = React.useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setPosition(percentage);
    },
    []
  );

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      className={cn(
        "group relative select-none overflow-hidden rounded-3xl border border-line bg-mist shadow-2xl transition-all duration-300",
        className
      )}
    >
      {/* Background (After / Cutout) Layer with checkered pattern for transparency */}
      <div
        className="relative h-full min-h-[340px] sm:min-h-[460px] lg:min-h-[520px] w-full"
        style={{
          backgroundImage:
            "radial-gradient(#DDE2EC 1px, transparent 1px), radial-gradient(#DDE2EC 1px, #F7F8FA 1px)",
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 10px 10px",
        }}
      >
        <img
          src={afterSrc}
          alt={afterAlt}
          className="h-full w-full object-contain p-6 sm:p-10 pointer-events-none"
        />

        {/* After Label */}
        <div className="absolute bottom-4 right-4 z-10 rounded-full border border-line bg-white/90 px-3.5 py-1 text-xs font-semibold text-ink shadow-sm backdrop-blur">
          Cutout Result
        </div>
      </div>

      {/* Foreground (Original) Layer clipped by position */}
      <div
        className="absolute inset-0 h-full w-full overflow-hidden pointer-events-none"
        style={{
          clipPath: `inset(0 ${100 - position}% 0 0)`,
        }}
      >
        <img
          src={originalSrc}
          alt={originalAlt}
          className="h-full w-full object-cover"
        />

        {/* Before Label */}
        <div className="absolute bottom-4 left-4 z-10 rounded-full border border-line bg-ink/80 px-3.5 py-1 text-xs font-semibold text-white shadow-sm backdrop-blur">
          Original Photo
        </div>
      </div>

      {/* Center Divider Bar & Drag Knob */}
      <div
        className="absolute bottom-0 top-0 z-20 w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)] pointer-events-none"
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border-2 border-white bg-ink text-gold shadow-2xl transition-transform group-hover:scale-110">
          <svg
            className="h-5 w-5 sm:h-6 sm:w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 9l-4 3 4 3m8-6l4 3-4 3"
            />
          </svg>
        </div>
      </div>

      {/* Accessible Slider Input */}
      <input
        type="range"
        min="0"
        max="100"
        value={position}
        onChange={(e) => setPosition(Number(e.target.value))}
        aria-label="Before and after image comparison slider"
        className="absolute inset-0 z-30 h-full w-full opacity-0 cursor-ew-resize"
      />
    </div>
  );
}

export default BeforeAfterSlider;
