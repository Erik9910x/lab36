import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "LAB36",
  description: "Building intelligent tools with clarity and precision.",
  keywords: ["lab36", "infinite dev team", "ai", "digital currency", "experimental", "hackathon"],
  authors: [{ name: "LAB36" }],
  openGraph: {
    title: "LAB36",
    description: "Where ideas are tested, not just taught. Building intelligent tools with clarity and precision.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/tablogo.png" />
      </head>
      <body style={{ fontFamily: 'var(--font-inter), sans-serif' }} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
