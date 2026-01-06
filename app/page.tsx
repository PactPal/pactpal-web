// app/page.tsx
import Link from "next/link";
import { PrimaryCta } from "@/components/PrimaryCta";
import { AppMockup } from "@/components/AppMockup";
import { EcosystemSection } from "@/components/EcosystemSection";

function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="max-w-3xl">
      <h2 className="text-2xl font-bold text-white md:text-3xl">{title}</h2>
      {subtitle ? (
        <p className="mt-3 text-slate-300">{subtitle}</p>
      ) : null}
    </div>
  );
}

function InfoCard({
  title,
  caption,
  desc,
}: {
  title: string;
  caption: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="text-xs text-slate-400">{caption}</div>
      <div className="mt-2 text-lg font-semibold text-white">{title}</div>
      <div className="mt-2 text-sm text-slate-300">{desc}</div>
    </div>
  );
}

function Stat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="text-2xl font-bold text-white">{value}</div>
      <div className="mt-2 text-sm text-slate-300">{label}</div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-r from-sky-500/40 to-emerald-400/40 blur-3xl" />
        </div>

        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 md:grid-cols-2">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-200">
              Accountability that actually works.
            </p>

            <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl">
              Consistency becomes identity.
            </h1>

            <p className="mt-5 text-lg text-slate-300">
              PactPal turns goals into shared pacts—small pods, daily check-ins,
              real social pressure, and proof you’re becoming consistent.
            </p>

            <div className="mt-8 flex flex-col gap-5">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <PrimaryCta href="/download" />

                <Link
                  href="/download"
                  className="inline-flex w-fit items-center justify-center rounded-2xl border border-white/15 bg-white/0 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
                >
                  Watch how it works (30 sec demo)
                </Link>
              </div>

              <div className="text-sm text-slate-400">
                Already have a pod invite?{" "}
                <Link
                  href="/download"
                  className="underline decoration-white/20 underline-offset-4 hover:text-white"
                >
                  Go to download page
                </Link>
                .
              </div>
            </div>
          </div>

          {/* Visual mock */}
          <div className="md:pl-6">
            <AppMockup />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS (visual cards) */}
      <section className="border-t border-white/10 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <SectionTitle
            title="How it works"
            subtitle="A simple structure that turns pressure into progress."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <InfoCard
              title="Create or Join a Pod"
              caption="You don’t do goals alone."
              desc="Start a private mission with friends or join via link/code."
            />
            <InfoCard
              title="Make Your Pact"
              caption="Public commitment creates pressure."
              desc="Define what “showing up” means for your pod."
            />
            <InfoCard
              title="Check In Daily"
              caption="Consistency becomes identity."
              desc="Your pod sees your consistency. Quitting becomes uncomfortable."
            />
          </div>

          <div className="mt-10">
            <PrimaryCta href="/download" />
          </div>
        </div>
      </section>

      {/* WHY IT WORKS (proof of philosophy + stats) */}
      <section className="border-t border-white/10 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <SectionTitle title="Why PactPal Works" />

          <div className="mt-6 max-w-3xl text-slate-300">
            <p>When people are watched, they act.</p>
            <p className="mt-2">When they act consistently, identity changes.</p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <Stat value="87%" label="of people fail goals when alone" />
            <Stat value="+65%" label="accountability increases success rates" />
            <Stat
              value="3×"
              label="social commitment outperforms reminders and streaks"
            />
          </div>

          <div className="mt-10">
            <PrimaryCta href="/download" />
          </div>

          <div className="mt-4 text-xs text-slate-500">
            Stats are placeholders and will be refined.
          </div>
        </div>
      </section>

      {/* Ecosystem section (you already added) */}
      <EcosystemSection />

      {/* Trust & Credibility block (Phase 2) */}
      <section className="border-t border-white/10 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold text-white md:text-3xl">
                Built for people who are serious about change.
              </h2>
              <p className="mt-4 text-slate-300">
                Not motivation. Not hacks. Just structure, accountability, and
                consistency.
              </p>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-sm font-semibold text-white">
                  The PactPal Standard
                </div>
                <p className="mt-2 text-sm text-slate-300">
                  We aren't a streak-tracking app. We are an accountability system.
                  If you're looking for daily quotes, look elsewhere.If you're looking for a group that won't let you quit, you're in the right place.
                </p>
              </div>

              <div className="mt-8">
                <PrimaryCta href="/download" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
