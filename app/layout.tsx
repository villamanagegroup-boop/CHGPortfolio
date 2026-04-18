import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chanel Hicks-Gray — Creative Strategist & Vibe Coder",
  description:
    "I design systems that feel good. Creative strategy, AI systems, and operations design for brands that want to move differently.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
