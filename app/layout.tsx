import type { Metadata } from "next";
import "./globals.css";
import CursorFollower from "./components/CursorFollower";
import Grain from "./components/Grain";

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
      <body>
        <Grain />
        <CursorFollower />
        {children}
      </body>
    </html>
  );
}
