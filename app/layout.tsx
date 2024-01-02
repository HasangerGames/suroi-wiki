import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TanstackQuery from "@/components/providers/TanstackQuery";
import NavigationBar from "@/components/interactive/NavigationBar";
import Footer from "@/components/layouts/Footer";

const font = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://wiki.suroi.io"),

  title: {
    default: "Suroi Wiki",
    template: "%s | Suroi Wiki",
  },
  description:
    "The official wiki for Suroi, an open-source 2D battle royale game inspired by surviv.io.",
  openGraph: {
    type: "website",
  },
  keywords: [
    "suroi",
    "surviv",
    "suroi.io",
    "suroiio",
    "wiki",
    "open-source",
    "battle-royale",
    "community",
    "shooter",
  ],
  twitter: {
    card: "summary_large_image",
  },
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
        className={`min-h-screen bg-background font-sans antialiased text-white box-border dark ${font.variable}`}
      >
        <TanstackQuery>
          <NavigationBar />
          <div className="container mb-32 sm:mt-32 mt-8">
            <div>{children}</div>
          </div>
          <Footer />
        </TanstackQuery>
      </body>
    </html>
  );
}
