// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: `${SITE.name} — ${SITE.tagline}`,
  description:
    "Build better habits through real accountability. Join a pod, check in daily, and turn consistency into identity with PactPal.",
  metadataBase: new URL(`https://${SITE.domain}`),

  openGraph: {
    title: `${SITE.name} — ${SITE.tagline}`,
    description:
      "Stop relying on motivation. Build consistency through real accountability.",
    url: `https://${SITE.domain}`,
    siteName: SITE.name,
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.tagline}`,
    description:
      "Stop relying on motivation. Build consistency through real accountability.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-white antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
