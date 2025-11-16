import type { Metadata } from "next";
import { Spectral } from 'next/font/google';
import StructuredData from "@/components/StructuredData";
import { WebVitals } from "./web-vitals";
import "./globals.css";

const spectral = Spectral({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-spectral',
});

export const metadata: Metadata = {
  title: {
    default: "COO for Rent | Fractional COO Services Texas | 25+ Years Operations Experience",
    template: "%s | COO for Rent",
  },
  description: "Hire a Fractional COO in Texas with 25+ years experience in operations, field service, construction & franchise systems. Expert operational leadership for scaling businesses. Get systems that work.",
  keywords: [
    "fractional COO",
    "COO for rent",
    "fractional COO Texas",
    "operations consulting",
    "field service operations",
    "construction operations",
    "franchise systems",
    "operational leadership",
    "business systems",
    "interim COO",
    "part-time COO",
    "operations management",
    "dispatch operations",
    "profit optimization",
    "operational efficiency",
    "COO services",
    "Texas operations consultant",
    "scaling operations",
    "business operations expert"
  ],
  authors: [{ name: "Sonny - COO for Rent", url: "https://cooforrent.com" }],
  creator: "COO for Rent",
  publisher: "COO for Rent",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://cooforrent.com'),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "COO for Rent | Fractional COO Services Texas | 25+ Years Experience",
    description: "Hire a Fractional COO in Texas with 25+ years experience. Expert in operations, field service, construction & franchise systems. Build systems that scale with your business.",
    siteName: "COO for Rent",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "COO for Rent - Fractional COO Services in Texas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "COO for Rent | Fractional COO Services Texas",
    description: "Hire a Fractional COO in Texas with 25+ years experience in operations, field service, construction & franchise systems. Expert operational leadership for scaling businesses.",
    images: ["/og-image.png"],
    creator: "@cooforrent",
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
  category: "Business Services",
  classification: "Professional Services",
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
      <body className={`${spectral.variable} font-spectral antialiased`}>
        <WebVitals />
        {children}
      </body>
    </html>
  );
}
