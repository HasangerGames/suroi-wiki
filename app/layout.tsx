import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import TanstackQuery from "@/components/providers/TanstackQuery";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://suroiwautowiki.vercel.app"),

  title: {
    default: "Suroi Auto Wiki",
    template: "%s | Suroi Auto Wiki",
  },
  description: "Automatically updating knowledge base for suroi.io",
  openGraph: {
    type: "website",
  },
  keywords: ["suroi", "surviv", "suroi.io", "suroiio", "wiki", "community", "shooter"],
};

export const viewport: Viewport = {
  themeColor: "#ff7300",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen bg-background font-sans antialiased text-white box-border dark ${font.className}`}
      >
        <TanstackQuery>{children}</TanstackQuery>
        <Analytics />
      </body>
    </html>
  );
}
