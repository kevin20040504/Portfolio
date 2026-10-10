import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { site } from "@/data/portfolio";
import { publicFileExists } from "@/lib/assets";
import "./globals.css";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans", display: "swap" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.headline}`,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  applicationName: `${site.shortName} Portfolio`,
  authors: [{ name: site.name }],
  creator: site.name,
  keywords: [
    "Kevin Ang",
    "Kevin Enrico Ang",
    "IT student",
    "University of Asia and the Pacific",
    "UA&P",
    "web developer",
    "software QA",
    "system analysis",
    "IT internship",
    "Philippines",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_PH",
    url: "/",
    siteName: `${site.shortName} Portfolio`,
    title: `${site.name} | IT Portfolio`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | IT Portfolio`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#09090b",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const cvAvailable = publicFileExists(site.cvPath);

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <head>
        {/* Enables scroll-reveal animations only when JavaScript runs, so content is never hidden without it. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="min-h-dvh">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:text-canvas"
        >
          Skip to content
        </a>
        <Navbar cvAvailable={cvAvailable} />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
