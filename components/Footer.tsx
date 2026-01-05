// components/Footer.tsx
import Link from "next/link";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 md:flex-row md:items-center md:justify-between">
        <div className="text-sm text-slate-300">
          <div className="font-semibold text-white">{SITE.name}</div>
          <div className="mt-1">{SITE.tagline}</div>
          <div className="mt-3">
            Support:{" "}
            <a
              className="underline decoration-white/20 underline-offset-4 hover:text-white"
              href={`mailto:${SITE.supportEmail}`}
            >
              {SITE.supportEmail}
            </a>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-slate-300">
          <Link className="hover:text-white" href="/download">
            Download
          </Link>
          <Link className="hover:text-white" href="/support">
            Support
          </Link>
          <Link className="hover:text-white" href="/privacy">
            Privacy
          </Link>
          <Link className="hover:text-white" href="/terms">
            Terms
          </Link>
        </div>

        <div className="text-xs text-slate-500">
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
