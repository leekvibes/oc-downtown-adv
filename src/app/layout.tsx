import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileStickyBar } from "@/components/MobileStickyBar";
import { SeasonCountdown } from "@/components/SeasonCountdown";
import { StructuredData } from "@/components/StructuredData";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space",
});

/* ── metadataBase: on Vercel previews, resolve OG images against the Vercel
   deployment URL (so link previews work). Once DNS is connected, this
   automatically falls back to the production domain. ── */
const siteUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "https://ocdowntownadventures.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "OC Downtown Adventures | Jet Ski & Pontoon Boat Rentals in Ocean City, MD",
    template: "%s | OC Downtown Adventures",
  },
  description:
    "Book jet ski and pontoon boat rentals in Ocean City, Maryland. Guided jet ski tours and self-guided pontoon cruises on Assateague Bay. See wild horses, dolphins, and sunsets. Family-owned, brand-new 2026 fleet, free parking downtown. From $129.",
  keywords: [
    "jet ski rental ocean city md",
    "pontoon boat rental ocean city md",
    "boat rental ocean city maryland",
    "ocean city water sports",
    "assateague bay boat tour",
    "ocean city jet ski tour",
    "pontoon cruise ocean city",
    "boat ride ocean city md",
    "OC Downtown Adventures",
    "jet ski near me ocean city",
    "pontoon boat near me ocean city",
    "bay cruise ocean city maryland",
    "water activities ocean city md",
    "family boat rental ocean city",
  ],
  openGraph: {
    title: "OC Downtown Adventures | Jet Ski & Pontoon Boat Rentals in Ocean City, MD",
    description:
      "Book jet ski and pontoon boat adventures in Ocean City, MD. Guided tours on brand-new jet skis and self-guided pontoon cruises on Assateague Bay. See wild horses and dolphins!",
    type: "website",
    locale: "en_US",
    siteName: "OC Downtown Adventures",
    url: "https://ocdowntownadventures.com",
    images: [
      {
        url: "/og-logo.png",
        width: 1200,
        height: 630,
        alt: "OC Downtown Adventures - Jet Ski & Pontoon Boat Rentals in Ocean City, MD",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OC Downtown Adventures | Jet Ski & Pontoon Boat Rentals",
    description: "Book jet ski and pontoon boat rentals in Ocean City, MD. Explore Assateague Bay!",
    images: ["/og-logo.png"],
  },
  alternates: {
    canonical: "https://ocdowntownadventures.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add Google Search Console verification code when available
    // google: "your-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} h-full`}>
      <head>
        <StructuredData />
      </head>
      <body className="min-h-full flex flex-col font-[family-name:var(--font-space)] antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileStickyBar />
        <SeasonCountdown />
      </body>
    </html>
  );
}
