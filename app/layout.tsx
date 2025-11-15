import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import { WebVitals } from "./web-vitals";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "COOforRent - Fractional COO Services",
    template: "%s | COOforRent",
  },
  description: "Fractional COO for hire based in Texas. 25+ years in operations, field service, construction, and franchise systems. I build systems, people, and processes that hold up when your business is moving fast.",
  keywords: ["fractional COO", "COO for hire", "operations consulting", "field service operations", "construction operations", "franchise systems", "Texas COO", "operational leadership", "business systems"],
  authors: [{ name: "COOforRent" }],
  creator: "COOforRent",
  publisher: "COOforRent",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://cooforrent.com'),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "COOforRent - Fractional COO for Hire",
    description: "Fractional COO for hire based in Texas. 25+ years in operations, field service, construction, and franchise systems. I build systems that hold up when your business is moving fast.",
    siteName: "COOforRent",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "COOforRent - Fractional COO Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "COOforRent - Fractional COO for Hire",
    description: "Fractional COO for hire based in Texas. 25+ years in operations, field service, construction, and franchise systems. I build systems that hold up when your business is moving fast.",
    images: ["/og-image.png"],
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
    // Add verification tokens when available
    // google: "your-google-verification-token",
    // yandex: "your-yandex-verification-token",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className="font-primary antialiased">
        <WebVitals />
        {children}
      </body>
    </html>
  );
}
