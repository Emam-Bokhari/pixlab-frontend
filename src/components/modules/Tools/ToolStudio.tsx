"use client";

import * as React from "react";
import {
  Upload,
  Sparkles,
  Download,
  RotateCcw,
  AlertCircle,
  Loader2,
  Sliders,
  Image as ImageIcon,
  FileCheck,
  Scissors,
  Maximize2,
  Minimize2,
  Crop,
  Scaling,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { cn, formatFileSize } from "@/lib/utils";
import { removeBackground } from "@/services/BgRemove";
import { reduceImage } from "@/services/Reduce";
import { resizeImage } from "@/services/Resize";
import { upscaleImage } from "@/services/Upscale";
import { toast } from "sonner";

export type ToolType = "bg" | "upscale" | "compress" | "resize";

const TOOL_ACTION_ICONS: Record<ToolType, React.ElementType> = {
  bg: Scissors,
  upscale: Maximize2,
  compress: Minimize2,
  resize: Scaling,
};

interface ToolStudioProps {
  tool: ToolType;
  title: string;
  subtitle: string;
  sampleBefore?: string;
  sampleAfter?: string;
  actionIcon?: React.ElementType;
}

export function ToolStudio({
  tool,
  title,
  subtitle,
  sampleBefore,
  sampleAfter,
  actionIcon,
}: ToolStudioProps) {
  const ActionIcon = actionIcon || TOOL_ACTION_ICONS[tool] || Maximize2;

  // File & image states
  const [file, setFile] = React.useState<File | null>(null);
  const [origUrl, setOrigUrl] = React.useState<string | null>(null);
  const [origDims, setOrigDims] = React.useState<{ width: number; height: number } | null>(null);

  // Result states
  const [resultUrl, setResultUrl] = React.useState<string | null>(null);
  const [resultDims, setResultDims] = React.useState<{ width: number; height: number } | null>(null);
  const [resultSize, setResultSize] = React.useState<number | null>(null);
  const [stats, setStats] = React.useState<{ label: string; value: string }[]>([]);

  // Processing & Error states
  const [isProcessing, setIsProcessing] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [isDragOver, setIsDragOver] = React.useState(false);

  // Tool Specific Options
  // 1. Background remover
  const [bgColor, setBgColor] = React.useState<string>(""); // empty = transparent
  // 2. Upscaler
  const [scaleFactor, setScaleFactor] = React.useState<number>(2);
  // 3. Compressor
  const [targetKb, setTargetKb] = React.useState<number>(200);
  // 4. Resizer
  const [targetWidth, setTargetWidth] = React.useState<number>(800);
  const [targetHeight, setTargetHeight] = React.useState<number>(600);
  const [maintainAspect, setMaintainAspect] = React.useState<boolean>(true);

  // Handle file select
  const handleFileSelect = (selectedFile: File) => {
    if (!selectedFile) return;
    setError(null);
    setFile(selectedFile);
    const url = URL.createObjectURL(selectedFile);
    setOrigUrl(url);
    setResultUrl(null);
    setResultDims(null);
    setResultSize(null);
    setStats([]);

    const img = new window.Image();
    img.onload = () => {
      setOrigDims({ width: img.naturalWidth, height: img.naturalHeight });
      if (tool === "resize") {
        setTargetWidth(img.naturalWidth);
        setTargetHeight(img.naturalHeight);
      }
    };
    img.src = url;
  };

  // Drag and drop handlers
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileSelect(e.dataTransfer.files[0]);
    }
  };

  // Perform processing
  const handleProcess = async () => {
    if (!file || !origUrl) {
      setError("Please select an image file first.");
      toast.error("Please select an image file first.");
      return;
    }

    setIsProcessing(true);
    setError(null);

    try {
      if (tool === "bg") {
        const res = await removeBackground(file, bgColor);
        if (res.success && res.data) {
          const current = res.data.current;
          setResultUrl(current.imageUrl);
          setResultDims({ width: current.widthPx, height: current.heightPx });
          setResultSize(current.sizeBytes);
          setStats([
            {
              label: "Background",
              value: res.data.bgColor ? `#${res.data.bgColor.replace(/^#/, "")}` : "Transparent",
            },
            {
              label: "Output Format",
              value: current.format.toUpperCase(),
            },
            {
              label: "Original Size",
              value: formatFileSize(res.data.original.sizeBytes),
            },
            {
              label: "Output Size",
              value: formatFileSize(current.sizeBytes),
            },
          ]);
          toast.success(res.message || "Background removed successfully!");
          setIsProcessing(false);
          return;
        } else {
          const msg = (res as any)?.error?.[0]?.message || res?.message || "Failed to remove background.";
          setError(msg);
          toast.error(msg);
        }
      } else if (tool === "upscale") {
        const res = await upscaleImage(file, scaleFactor);
        if (res.success && res.data) {
          const current = res.data.current;
          setResultUrl(current.imageUrl);
          setResultDims({ width: current.widthPx, height: current.heightPx });
          setResultSize(current.sizeBytes);
          setStats([
            {
              label: "Scale Multiplier",
              value: `${res.data.scale}x`,
            },
            {
              label: "Upscaled Resolution",
              value: `${current.widthPx} × ${current.heightPx} px`,
            },
            {
              label: "Original Resolution",
              value: `${res.data.original.widthPx} × ${res.data.original.heightPx} px`,
            },
            {
              label: "Original Size",
              value: formatFileSize(res.data.original.sizeBytes),
            },
            {
              label: "Upscaled Size",
              value: formatFileSize(current.sizeBytes),
            },
          ]);
          toast.success(res.message || "Image upscaled successfully!");
          setIsProcessing(false);
          return;
        } else {
          const msg = (res as any)?.error?.[0]?.message || res?.message || "Failed to upscale image.";
          setError(msg);
          toast.error(msg);
        }
      } else if (tool === "compress") {
        const res = await reduceImage(file, targetKb);
        if (res.success && res.data) {
          const current = res.data.current;
          setResultUrl(current.imageUrl);
          setResultDims({ width: current.widthPx, height: current.heightPx });
          setResultSize(current.sizeBytes);
          setStats([
            {
              label: "Target Size",
              value: `${res.data.targetSizeKb} KB`,
            },
            {
              label: "Resulting Size",
              value: `${current.sizeKB.toFixed(1)} KB`,
            },
            {
              label: "Reduction",
              value: `-${res.data.reductionPercentage.toFixed(1)}%`,
            },
            {
              label: "Original Size",
              value: formatFileSize(res.data.original.sizeBytes),
            },
            {
              label: "Resolution",
              value: `${current.widthPx} × ${current.heightPx} px`,
            },
          ]);
          toast.success(res.message || "Image compressed successfully!");
          setIsProcessing(false);
          return;
        } else {
          const msg = (res as any)?.error?.[0]?.message || res?.message || "Failed to compress image.";
          setError(msg);
          toast.error(msg);
        }
      } else if (tool === "resize") {
        const res = await resizeImage(file, targetWidth, targetHeight);
        if (res.success && res.data) {
          const current = res.data.current;
          setResultUrl(current.imageUrl);
          setResultDims({ width: current.widthPx, height: current.heightPx });
          setResultSize(current.sizeBytes);
          setStats([
            {
              label: "Target Dimensions",
              value: `${current.widthPx} × ${current.heightPx} px`,
            },
            {
              label: "Original Dimensions",
              value: `${res.data.original.widthPx} × ${res.data.original.heightPx} px`,
            },
            {
              label: "Original Size",
              value: formatFileSize(res.data.original.sizeBytes),
            },
            {
              label: "Output Size",
              value: formatFileSize(current.sizeBytes),
            },
          ]);
          toast.success(res.message || "Image resized successfully!");
          setIsProcessing(false);
          return;
        } else {
          const msg = (res as any)?.error?.[0]?.message || res?.message || "Failed to resize image.";
          setError(msg);
          toast.error(msg);
        }
      }
    } catch (apiErr: any) {
      console.warn("Backend API request failed, attempting local fallback:", apiErr);
      // Fallback to local canvas if server is unreachable
      try {
        const result = await processOnClient(file, origUrl, tool, {
          bgColor,
          scaleFactor,
          targetKb,
          targetWidth,
          targetHeight,
        });
        const outUrl = URL.createObjectURL(result.blob);
        setResultUrl(outUrl);
        setResultSize(result.blob.size);
        setStats(result.stats);

        const outImg = new window.Image();
        outImg.onload = () => {
          setResultDims({ width: outImg.naturalWidth, height: outImg.naturalHeight });
        };
        outImg.src = outUrl;
        toast.info("Processed via local fallback engine");
      } catch (clientErr: any) {
        const msg = apiErr?.message || clientErr?.message || "Could not process image.";
        setError(msg);
        toast.error(msg);
      }
    }

    setIsProcessing(false);
  };

  return (
    <section id="workspace" className="bg-mist py-10 lg:py-16 border-b border-line">
      <div className="mx-auto w-full max-w-7xl 2xl:max-w-[1700px] px-4 sm:px-6 lg:px-10 2xl:px-14">
        <div className="grid items-stretch gap-8 lg:grid-cols-12">
          {/* LEFT WORKBENCH CARD: Upload & Configuration */}
          <div className="lg:col-span-5 flex h-full flex-col justify-between rounded-3xl border border-line bg-white p-6 sm:p-8 shadow-xl shadow-ink/5">
            <div>
              <div className="pb-5 border-b border-line">
                <h2 className="font-head text-lg font-bold text-ink">{title}</h2>
                <p className="text-xs text-dim mt-0.5">{subtitle}</p>
              </div>

              {/* Upload Dropzone */}
              <div className="mt-6">
                <label
                  onDragEnter={(e) => {
                    e.preventDefault();
                    setIsDragOver(true);
                  }}
                  onDragOver={(e) => {
                    e.preventDefault();
                    setIsDragOver(true);
                  }}
                  onDragLeave={(e) => {
                    e.preventDefault();
                    setIsDragOver(false);
                  }}
                  onDrop={handleDrop}
                  className={cn(
                    "group relative flex cursor-pointer flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-line bg-mist/60 px-6 py-10 text-center transition-all duration-200 hover:border-gold hover:bg-mist",
                    isDragOver && "border-gold bg-gold/10"
                  )}
                >
                  <input
                    type="file"
                    accept="image/png,image/jpeg,image/webp,image/bmp,image/tiff,image/gif,image/avif"
                    className="sr-only"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        handleFileSelect(e.target.files[0]);
                      }
                    }}
                  />
                  <div className="grid h-12 w-12 place-items-center rounded-2xl border border-line bg-white text-ink shadow-sm transition-transform duration-200 group-hover:scale-105 group-hover:border-gold">
                    <Upload className="h-6 w-6 text-ink" />
                  </div>
                  <div>
                    <span className="font-head text-sm font-bold text-ink">
                      Click to choose an image
                    </span>
                    <span className="block text-xs text-dim mt-1">
                      or drag &amp; drop file here
                    </span>
                  </div>
                  <span className="text-[11px] text-dim/70">
                    PNG, JPEG, WEBP, AVIF up to 50 MB
                  </span>
                </label>

                {/* Selected File Name / Status */}
                {file && (
                  <div className="mt-3 flex items-center justify-between rounded-xl border border-line bg-mist/80 p-3 text-xs font-medium text-ink">
                    <div className="flex items-center gap-2 truncate pr-2">
                      <FileCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span className="truncate">{file.name}</span>
                    </div>
                    <span className="shrink-0 text-dim">
                      {formatFileSize(file.size)}
                    </span>
                  </div>
                )}
              </div>

              {/* Dynamic Tool Specific Configuration */}
              <div className="mt-6 space-y-4">
                {tool === "bg" && (
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-wider text-dim block">
                      Background Fill
                    </label>
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                      <button
                        type="button"
                        onClick={() => setBgColor("")}
                        className={cn(
                          "rounded-xl border p-2.5 text-xs font-semibold transition-all",
                          bgColor === ""
                            ? "border-ink bg-ink text-white shadow-sm"
                            : "border-line bg-mist hover:border-ink"
                        )}
                      >
                        Transparent
                      </button>
                      <button
                        type="button"
                        onClick={() => setBgColor("#FFFFFF")}
                        className={cn(
                          "rounded-xl border p-2.5 text-xs font-semibold transition-all flex items-center justify-center gap-1.5",
                          bgColor.toUpperCase() === "#FFFFFF"
                            ? "border-ink bg-ink text-white shadow-sm"
                            : "border-line bg-mist hover:border-ink"
                        )}
                      >
                        <span className="h-3 w-3 rounded-full border border-line bg-white shrink-0" />
                        White
                      </button>
                      <button
                        type="button"
                        onClick={() => setBgColor("#0B1B3A")}
                        className={cn(
                          "rounded-xl border p-2.5 text-xs font-semibold transition-all flex items-center justify-center gap-1.5",
                          bgColor === "#0B1B3A"
                            ? "border-ink bg-ink text-white shadow-sm"
                            : "border-line bg-mist hover:border-ink"
                        )}
                      >
                        <span className="h-3 w-3 rounded-full bg-[#0B1B3A] shrink-0" />
                        Navy
                      </button>
                      <button
                        type="button"
                        onClick={() => setBgColor("#000000")}
                        className={cn(
                          "rounded-xl border p-2.5 text-xs font-semibold transition-all flex items-center justify-center gap-1.5",
                          bgColor === "#000000"
                            ? "border-ink bg-ink text-white shadow-sm"
                            : "border-line bg-mist hover:border-ink"
                        )}
                      >
                        <span className="h-3 w-3 rounded-full bg-black shrink-0" />
                        Black
                      </button>
                    </div>

                    <div className="flex items-center gap-2 pt-1">
                      <Input
                        type="text"
                        placeholder="Custom Hex (e.g. #F7F8FA)"
                        value={bgColor}
                        onChange={(e) => setBgColor(e.target.value)}
                        className="text-xs font-mono h-10"
                      />
                      <input
                        type="color"
                        value={bgColor || "#ffffff"}
                        onChange={(e) => setBgColor(e.target.value)}
                        className="h-10 w-10 cursor-pointer rounded-xl border border-line p-1 bg-white"
                        title="Pick color"
                      />
                    </div>
                  </div>
                )}

                {tool === "upscale" && (
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-wider text-dim block">
                      Magnification Factor
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[2, 3, 4].map((scale) => (
                        <button
                          key={scale}
                          type="button"
                          onClick={() => setScaleFactor(scale)}
                          className={cn(
                            "rounded-2xl border p-4 text-center transition-all",
                            scaleFactor === scale
                              ? "border-ink bg-ink text-white shadow-md"
                              : "border-line bg-mist hover:border-ink/50"
                          )}
                        >
                          <span className="block font-head text-xl font-extrabold">
                            {scale}x
                          </span>
                          <span
                            className={cn(
                              "mt-0.5 block text-[11px]",
                              scaleFactor === scale ? "text-gold" : "text-dim"
                            )}
                          >
                            {scale === 2 ? "High Detail" : scale === 3 ? "Ultra Sharp" : "Maximum 4K"}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {tool === "compress" && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-bold uppercase tracking-wider text-dim">
                        Target File Size (KB)
                      </label>
                      <span className="text-xs font-mono font-bold text-ink">
                        {targetKb} KB
                      </span>
                    </div>
                    <Input
                      type="number"
                      min={10}
                      max={20000}
                      value={targetKb}
                      onChange={(e) => setTargetKb(Number(e.target.value))}
                      className="h-11"
                    />
                    <div className="flex flex-wrap gap-2 pt-1">
                      {[50, 100, 200, 500, 1000].map((kb) => (
                        <button
                          key={kb}
                          type="button"
                          onClick={() => setTargetKb(kb)}
                          className={cn(
                            "rounded-full px-3 py-1 text-xs font-medium transition",
                            targetKb === kb
                              ? "bg-ink text-white"
                              : "bg-mist text-dim hover:text-ink hover:bg-mist/80 border border-line"
                          )}
                        >
                          {kb} KB
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {tool === "resize" && (
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-wider text-dim block">
                      Target Dimensions (px)
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <span className="text-[11px] text-dim font-medium mb-1 block">Width</span>
                        <Input
                          type="number"
                          min={8}
                          max={8000}
                          value={targetWidth}
                          onChange={(e) => {
                            const w = Number(e.target.value);
                            setTargetWidth(w);
                            if (maintainAspect && origDims && origDims.width > 0) {
                              setTargetHeight(Math.round((w * origDims.height) / origDims.width));
                            }
                          }}
                          className="h-10 text-sm"
                        />
                      </div>
                      <div>
                        <span className="text-[11px] text-dim font-medium mb-1 block">Height</span>
                        <Input
                          type="number"
                          min={8}
                          max={8000}
                          value={targetHeight}
                          onChange={(e) => {
                            const h = Number(e.target.value);
                            setTargetHeight(h);
                            if (maintainAspect && origDims && origDims.height > 0) {
                              setTargetWidth(Math.round((h * origDims.width) / origDims.height));
                            }
                          }}
                          className="h-10 text-sm"
                        />
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 pt-1">
                      <button
                        type="button"
                        onClick={() => {
                          setTargetWidth(1080);
                          setTargetHeight(1080);
                        }}
                        className="rounded-full border border-line bg-mist px-3 py-1 text-xs font-medium text-dim hover:text-ink"
                      >
                        1:1 Square
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setTargetWidth(1080);
                          setTargetHeight(1350);
                        }}
                        className="rounded-full border border-line bg-mist px-3 py-1 text-xs font-medium text-dim hover:text-ink"
                      >
                        4:5 Portrait
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setTargetWidth(1920);
                          setTargetHeight(1080);
                        }}
                        className="rounded-full border border-line bg-mist px-3 py-1 text-xs font-medium text-dim hover:text-ink"
                      >
                        16:9 Banner
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Error Notification */}
              {error && (
                <div className="mt-4 flex items-start gap-2 rounded-xl bg-red-50 p-3 text-xs font-medium text-red-700 border border-red-200">
                  <AlertCircle className="h-4 w-4 shrink-0 text-red-600 mt-0.5" />
                  <span>{error}</span>
                </div>
              )}
            </div>

            {/* Bottom Workbench Action */}
            <div className="pt-6 border-t border-line mt-6">
              <Button
                type="button"
                onClick={handleProcess}
                disabled={!file || isProcessing}
                variant="gold"
                className="w-full text-base font-bold shadow-md h-12"
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Processing Studio Output...
                  </>
                ) : (
                  <>
                    <ActionIcon className="mr-2 h-5 w-5" />
                    Process Image
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* RIGHT PREVIEW & RESULTS CARD */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-3xl border border-line bg-white p-6 sm:p-8 shadow-xl shadow-ink/5">
            <div>
              <div className="pb-5 border-b border-line">
                <h3 className="font-head text-lg font-bold text-ink">
                  Studio Canvas &amp; Output
                </h3>
                <p className="text-xs text-dim mt-0.5">
                  Live side-by-side verification and inspection
                </p>
              </div>

              {/* Display Canvas / Viewport */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Original Image View */}
                <div className="flex flex-col">
                  <div className="flex items-center justify-between pb-2 text-xs font-semibold text-dim">
                    <span>Source Image</span>
                    {origDims && <span>{origDims.width} × {origDims.height} px</span>}
                  </div>
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-line bg-mist flex items-center justify-center p-2">
                    {origUrl ? (
                      <img
                        src={origUrl}
                        alt="Original upload"
                        className="h-full w-full object-contain rounded-xl"
                      />
                    ) : sampleBefore ? (
                      <img
                        src={sampleBefore}
                        alt="Sample input"
                        className="h-full w-full object-contain rounded-xl opacity-70"
                      />
                    ) : (
                      <div className="text-center p-4">
                        <ImageIcon className="mx-auto h-8 w-8 text-dim/40 mb-1" />
                        <span className="text-xs text-dim">No source uploaded</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Result Image View */}
                <div className="flex flex-col">
                  <div className="flex items-center justify-between pb-2 text-xs font-semibold text-dim">
                    <span className="text-ink font-bold">Processed Result</span>
                    {resultDims && (
                      <span className="text-emerald-700 font-mono">
                        {resultDims.width} × {resultDims.height} px
                      </span>
                    )}
                  </div>
                  <div
                    className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-line bg-mist flex items-center justify-center p-2"
                    style={{
                      backgroundImage:
                        tool === "bg" && !bgColor
                          ? "radial-gradient(#DDE2EC 1px, transparent 1px), radial-gradient(#DDE2EC 1px, #F7F8FA 1px)"
                          : undefined,
                      backgroundSize: "16px 16px",
                      backgroundPosition: "0 0, 8px 8px",
                      backgroundColor: bgColor || undefined,
                    }}
                  >
                    {resultUrl ? (
                      <img
                        src={resultUrl}
                        alt="Processed result"
                        className="h-full w-full object-contain rounded-xl"
                      />
                    ) : sampleAfter ? (
                      <img
                        src={sampleAfter}
                        alt="Sample result"
                        className="h-full w-full object-contain rounded-xl opacity-70"
                      />
                    ) : (
                      <div className="text-center p-4">
                        <ActionIcon className="mx-auto h-8 w-8 text-dim/40 mb-1" />
                        <span className="text-xs text-dim">
                          Output will render here
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Statistics & Insights Grid */}
              {stats.length > 0 && (
                <div className="mt-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-dim mb-3">
                    Inspection &amp; Metrics
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {stats.map((item, idx) => (
                      <div
                        key={idx}
                        className="rounded-2xl border border-line bg-mist/60 p-3.5 transition hover:bg-mist"
                      >
                        <dt className="text-xs text-dim">{item.label}</dt>
                        <dd className="mt-1 font-head text-base sm:text-lg font-bold text-ink truncate">
                          {item.value}
                        </dd>
                      </div>
                    ))}
                    {resultSize && (
                      <div className="rounded-2xl border border-line bg-mist/60 p-3.5 transition hover:bg-mist">
                        <dt className="text-xs text-dim">Output Size</dt>
                        <dd className="mt-1 font-head text-base sm:text-lg font-bold text-emerald-600 truncate">
                          {formatFileSize(resultSize)}
                        </dd>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Download Bar */}
            {resultUrl && (
              <div className="pt-6 border-t border-line mt-6 flex flex-wrap items-center justify-end gap-4">
                <Button
                  asChild
                  variant="default"
                  className="font-semibold shadow-md"
                >
                  <a
                    href={resultUrl}
                    download={`pixlab-${tool}-${file?.name || "export.png"}`}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Output
                  </a>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// Client-side HTML5 Canvas fallback for instant zero-dependency processing
async function processOnClient(
  file: File,
  origUrl: string,
  tool: ToolType,
  options: {
    bgColor: string;
    scaleFactor: number;
    targetKb: number;
    targetWidth: number;
    targetHeight: number;
  }
): Promise<{ blob: Blob; stats: { label: string; value: string }[] }> {
  return new Promise((resolve, reject) => {
    const img = new window.Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) return reject(new Error("Canvas 2D context not available."));

      if (tool === "bg") {
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;

        if (options.bgColor) {
          ctx.fillStyle = options.bgColor;
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        }

        ctx.drawImage(img, 0, 0);

        if (!options.bgColor) {
          // Transparent cut-out chroma keying threshold simulation
          const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
          const data = imgData.data;
          // sample top-left corner background color
          const r0 = data[0], g0 = data[1], b0 = data[2];
          for (let i = 0; i < data.length; i += 4) {
            const r = data[i], g = data[i + 1], b = data[i + 2];
            const dist = Math.sqrt(
              (r - r0) ** 2 + (g - g0) ** 2 + (b - b0) ** 2
            );
            if (dist < 45) {
              data[i + 3] = 0; // make transparent
            }
          }
          ctx.putImageData(imgData, 0, 0);
        }

        canvas.toBlob((blob) => {
          if (!blob) return reject(new Error("Failed to export blob."));
          resolve({
            blob,
            stats: [
              { label: "Background", value: options.bgColor || "Transparent (Alpha PNG)" },
              { label: "Resolution", value: `${canvas.width} × ${canvas.height} px` },
            ],
          });
        }, "image/png");
      } else if (tool === "upscale") {
        const factor = options.scaleFactor;
        canvas.width = img.naturalWidth * factor;
        canvas.height = img.naturalHeight * factor;
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        canvas.toBlob((blob) => {
          if (!blob) return reject(new Error("Failed to export blob."));
          resolve({
            blob,
            stats: [
              { label: "Scale Factor", value: `${factor}x Scale` },
              { label: "Output Resolution", value: `${canvas.width} × ${canvas.height} px` },
              { label: "Original Resolution", value: `${img.naturalWidth} × ${img.naturalHeight} px` },
            ],
          });
        }, "image/png");
      } else if (tool === "resize") {
        canvas.width = options.targetWidth;
        canvas.height = options.targetHeight;
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";

        // Center focal cover crop
        const sAspect = img.naturalWidth / img.naturalHeight;
        const dAspect = canvas.width / canvas.height;
        let sWidth = img.naturalWidth;
        let sHeight = img.naturalHeight;
        let sx = 0;
        let sy = 0;

        if (sAspect > dAspect) {
          sWidth = img.naturalHeight * dAspect;
          sx = (img.naturalWidth - sWidth) / 2;
        } else {
          sHeight = img.naturalWidth / dAspect;
          sy = (img.naturalHeight - sHeight) / 2;
        }

        ctx.drawImage(img, sx, sy, sWidth, sHeight, 0, 0, canvas.width, canvas.height);

        canvas.toBlob((blob) => {
          if (!blob) return reject(new Error("Failed to export blob."));
          resolve({
            blob,
            stats: [
              { label: "Resized Resolution", value: `${canvas.width} × ${canvas.height} px` },
              { label: "Original Resolution", value: `${img.naturalWidth} × ${img.naturalHeight} px` },
            ],
          });
        }, "image/png");
      } else if (tool === "compress") {
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        ctx.drawImage(img, 0, 0);

        // Quality search for target KB
        const targetBytes = options.targetKb * 1024;
        let quality = 0.85;
        if (file.size > targetBytes) {
          quality = Math.max(0.1, Math.min(0.9, targetBytes / file.size));
        }

        canvas.toBlob(
          (blob) => {
            if (!blob) return reject(new Error("Failed to export blob."));
            const reduction = Math.max(
              0,
              Math.round(((file.size - blob.size) / file.size) * 100)
            );
            resolve({
              blob,
              stats: [
                { label: "Target Size", value: `${options.targetKb} KB` },
                { label: "Compressed Size", value: formatFileSize(blob.size) },
                { label: "Reduction", value: `${reduction}% smaller` },
              ],
            });
          },
          "image/jpeg",
          quality
        );
      }
    };
    img.onerror = () => reject(new Error("Failed to load image into canvas."));
    img.src = origUrl;
  });
}

export default ToolStudio;
