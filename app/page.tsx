// app/page.tsx
import Link from "next/link";
import { StoreButtons } from "@/components/StoreButtons";
import { SITE } from "@/lib/site";
import { EcosystemSection } from "@/components/EcosystemSection";

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-r from-sky-500/40 to-emerald-400/40 blur-3xl" />
        </div>

        <div className="mx-auto max-w-6xl px-4 py-20">
          <div className="max-w-2xl">
            <p className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-200">
              Accountability that actually works
            </p>

            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              Stop relying on motivation.
              <span className="block text-slate-200">
                Build consistency through real accountability.
              </span>
            </h1>

            <p className="mt-5 text-lg text-slate-300">
              {SITE.name} turns goals into shared pacts. Join a pod, check in
              daily, and make quitting uncomfortable.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              <StoreButtons large />
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

          {/* Value props */}
          <div className="mt-16 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Pods, not solo tracking",
                desc: "Small groups create real social pressure-the kind that sticks.",
              },
              {
                title: "Daily check-ins",
                desc: "One action per day that proves you kept your word.",
              },
              {
                title: "Identity, not hype",
                desc: "Streaks become self-leadership. Consistency becomes identity.",
              },
            ].map((x) => (
              <div
                key={x.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <div className="text-lg font-semibold">{x.title}</div>
                <div className="mt-2 text-sm text-slate-300">{x.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-white/10 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-bold">How it works</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Create or join a pod",
                desc: "Start a mission with friends or join via link/code.",
              },
              {
                step: "02",
                title: "Make a pact",
                desc: "Define what “showing up” means for your pod.",
              },
              {
                step: "03",
                title: "Check in daily",
                desc: "Your pod sees your consistency. Pressure becomes progress.",
              },
            ].map((x) => (
              <div
                key={x.step}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <div className="text-xs text-slate-400">STEP {x.step}</div>
                <div className="mt-2 text-lg font-semibold">{x.title}</div>
                <div className="mt-2 text-sm text-slate-300">{x.desc}</div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <StoreButtons />
          </div>
        </div>
      </section>
     <EcosystemSection />
    </div>
  );
}
