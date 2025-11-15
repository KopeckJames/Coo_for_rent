import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "COOforRent - Fractional COO Services",
  description: "Professional fractional COO services for growing businesses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-primary antialiased">{children}</body>
    </html>
  );
}
