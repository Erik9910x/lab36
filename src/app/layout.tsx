import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "LAB36 - INFINITE DEV TEAM",
  description: "An experimental tech collective building AI-and-human-powered digital currency demos.",
  keywords: ["lab36", "infinite dev team", "ai", "digital currency", "experimental", "hackathon"],
  authors: [{ name: "LAB36" }],
  openGraph: {
    title: "LAB36 - INFINITE DEV TEAM",
    description: "Where ideas are tested, not just taught. An experimental tech collective building AI-and-human-powered digital currency demos.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
