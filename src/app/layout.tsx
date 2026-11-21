import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0B1B3A",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://pixlab.studio"),
  title: "Pixlab – Remove Background, Upscale, Compress and Resize Images Online",
  description:
    "Four professional image tools in one place: remove backgrounds, upscale textures, compress to exact KB limits, and resize with focal precision. Fast, private, browser-based.",
  icons: {
    icon: "/assets/logo/icon.svg",
    apple: "/assets/logo/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Pixlab – Professional Studio Image Tools Online",
    description:
      "Remove backgrounds, upscale, compress, and resize high-resolution images online without quality loss.",
    images: ["/assets/img/hero-watch-original.jpg"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="min-h-screen bg-white font-body text-ink antialiased 2xl:text-lg">
        {children}
      </body>
    </html>
  );
}
