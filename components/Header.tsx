// components/Header.tsx
import Link from "next/link";
import { SITE } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-sky-500 to-emerald-400" />
          <span className="text-lg font-semibold text-white">{SITE.name}</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-slate-200 md:flex">
          <Link href="/download" className="hover:text-white">
            Download
          </Link>
          <Link href="/support" className="hover:text-white">
            Support
          </Link>
          <Link href="/privacy" className="hover:text-white">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-white">
            Terms
          </Link>
        </nav>

        <Link
          href="/download"
          className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-slate-100"
        >
          Get the app
        </Link>
      </div>
    </header>
  );
}
