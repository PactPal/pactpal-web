// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: `${SITE.name} - ${SITE.tagline}`,
  description:
    "PactPal is an accountability engine. Create or join a pod, check in daily, and build consistency through real social pressure.",
  metadataBase: new URL(`https://${SITE.domain}`),
  openGraph: {
    title: `${SITE.name} - ${SITE.tagline}`,
    description:
      "Join a pod. Check in daily. Consistency becomes identity.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-white">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
