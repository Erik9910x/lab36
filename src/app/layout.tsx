import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Team 36 Group | Tech Collective",
  description: "An experimental tech collective building high-risk digital systems powered by AI and humans.",
  keywords: ["team 36", "tech collective", "ai", "digital systems", "experimental"],
  authors: [{ name: "Team 36 Group" }],
  openGraph: {
    title: "Team 36 Group | Tech Collective",
    description: "An experimental tech collective building high-risk digital systems powered by AI and humans.",
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
