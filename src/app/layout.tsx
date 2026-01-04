import * as React from "react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://apprentice-bingo.tylerbuilds.com"),
  title: "The Apprentice (UK) Bingo",
  description: "A breathtaking bingo game for The Apprentice UK TV show. Play along, mark events, and don't get fired!",
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "The Apprentice (UK) Bingo",
    description: "The ultimate 2026 Apprentice Bingo experience.",
    url: "https://apprentice-bingo.tylerbuilds.com",
    siteName: "Apprentice Bingo",
    images: [
      {
        url: "/images/bg-2026.png",
        width: 1200,
        height: 630,
        alt: "Apprentice Bingo 2026",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Apprentice (UK) Bingo",
    description: "The ultimate 2026 Apprentice Bingo experience.",
    images: ["/images/bg-2026.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#111827",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gray-950 text-white antialiased`}>{children}</body>
    </html>
  );
} 