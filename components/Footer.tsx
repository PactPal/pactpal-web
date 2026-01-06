import Link from "next/link";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand / Mission */}
          <div className="space-y-3">
            <div className="text-lg font-semibold text-white">{SITE.name}</div>
            <p className="text-sm text-slate-300">
              Building consistency through real accountability.
              <br />
              Not motivation. Not hacks. Just structure, commitment, and growth.
            </p>
            <p className="text-sm text-slate-400">
              {SITE.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-3 text-sm text-slate-300">
            <Link className="hover:text-white" href="/download">
              Get Early Access
            </Link>
            <Link className="hover:text-white" href="/support">
              Support
            </Link>
            <Link className="hover:text-white" href="/privacy">
              Privacy Policy
            </Link>
            <Link className="hover:text-white" href="/terms">
              Terms of Service
            </Link>
          </div>

          {/* Email / Trust */}
          <div className="space-y-3">
            <div className="text-sm font-semibold text-white">
              Stay in the loop
            </div>
            <p className="text-sm text-slate-300">
              Early product updates and launch announcements.
            </p>

            <a
              href={`mailto:${SITE.supportEmail}`}
              className="inline-flex w-fit items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              {SITE.supportEmail}
            </a>

            <div className="pt-4 text-xs text-slate-500">
              Built with intention. Designed for people serious about change.
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-slate-500">
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
