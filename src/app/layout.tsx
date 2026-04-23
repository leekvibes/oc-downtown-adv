import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileStickyBar } from "@/components/MobileStickyBar";
import { SeasonCountdown } from "@/components/SeasonCountdown";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: "OC Downtown Adventures | Jet Ski & Pontoon Boat Rentals in Ocean City, MD",
  description:
    "Book jet ski and pontoon boat rentals in Ocean City, Maryland. Explore Assateague Bay, see wild horses and dolphins. Family-friendly adventures downtown on the water.",
  keywords: [
    "jet ski rental ocean city md",
    "pontoon boat rental ocean city",
    "ocean city water sports",
    "assateague bay",
    "OC Downtown Adventures",
  ],
  openGraph: {
    title: "OC Downtown Adventures | Jet Ski & Pontoon Boat Rentals",
    description:
      "Book jet ski and pontoon boat adventures in Ocean City, MD. Explore Assateague Bay and see wild horses!",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-logo.png",
        width: 1200,
        height: 630,
        alt: "OC Downtown Adventures Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} h-full`}>
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
