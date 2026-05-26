import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/custom/header";
import Footer from "@/components/custom/footer";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "UnbiaslyAI — AI-verified news and content for India",
  description:
    "India's first AI-powered news and content platform built for 900M+ internet users. Every story comes with a 60-word summary, the source in plain sight, and native Indic-language framing analysis.",
  openGraph: {
    title: "UnbiaslyAI — AI-verified news and content for India",
    description:
      "AI-verified news and content for India. 60-word summaries, visible sources, native Indic-language framing analysis.",
    url: "https://unbiasly.ai",
    siteName: "UnbiaslyAI",
    type: "website",
  },
  metadataBase: new URL("https://unbiasly.ai"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-black text-white antialiased">
        <Providers>
          <div className="min-h-screen flex flex-col bg-black">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
