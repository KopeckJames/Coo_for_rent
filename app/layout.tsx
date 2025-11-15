import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import { WebVitals } from "./web-vitals";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "COOforRent - Fractional COO Services",
    template: "%s | COOforRent",
  },
  description: "Professional fractional COO services for growing businesses. Expert operational leadership on demand to scale your company efficiently.",
  keywords: ["fractional COO", "COO services", "operational leadership", "business operations", "executive services", "part-time COO"],
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
    title: "COOforRent - Fractional COO Services",
    description: "Professional fractional COO services for growing businesses. Expert operational leadership on demand to scale your company efficiently.",
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
    title: "COOforRent - Fractional COO Services",
    description: "Professional fractional COO services for growing businesses. Expert operational leadership on demand to scale your company efficiently.",
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
