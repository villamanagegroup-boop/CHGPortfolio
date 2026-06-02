import type { Metadata } from "next";
import "./globals.css";
import CursorFollower from "./components/CursorFollower";
import Grain from "./components/Grain";

export const metadata: Metadata = {
  title: "Chanel Hicks-Gray — Solutions Architect & Builder",
  description:
    "I solve business problems end to end — strategy, systems, and software. Sometimes that means AI, sometimes a clean workflow and good engineering. For founders, teams, and the work in between.",
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
