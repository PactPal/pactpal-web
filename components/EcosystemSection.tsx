import {
  UsersRound,
  FlaskConical,
  GraduationCap,
  BarChart3,
  Sparkles,
} from "lucide-react";

function Card({
  title,
  subtitle,
  icon,
  comingSoon,
  children,
}: {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  comingSoon?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
            {icon}
          </div>
          <div>
            <div className="text-lg font-semibold text-white">{title}</div>
            <div className="mt-1 text-sm text-slate-300">{subtitle}</div>
          </div>
        </div>

        {comingSoon ? (
          <span className="inline-flex items-center gap-1 rounded-full border border-amber-200/20 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-200">
            <Sparkles className="h-3.5 w-3.5" />
            Coming Soon
          </span>
        ) : null}
      </div>

      <div className="mt-4 text-sm leading-relaxed text-slate-300">{children}</div>
    </div>
  );
}

export function EcosystemSection() {
  return (
    <section className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-white">
            The PactPal Ecosystem: More Than Just a Tracker
          </h2>
          <p className="mt-3 text-slate-300">
            PactPal is built as a complete accountability system: private pressure,
            public learning, guidance, and progress proof-all designed to turn
            consistency into identity.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">  
          <Card
            title="The Private Pod: Small Groups, Big Results"
            subtitle="Closed circle accountability"
            icon={<UsersRound className="h-5 w-5 text-sky-200" />}
          >
            Chat and share victories privately. Your pod is a closed circle where
            social pressure becomes progress, away from the noise of traditional
            social media.
          </Card>

          <Card
            title="The Community Lab: Level Up Collectively"
            subtitle="Global network of high-performers"
            icon={<FlaskConical className="h-5 w-5 text-emerald-200" />}
          >
            Beyond your pod, join a global network of high-performers. Discover
            Pro-Tips, engage in shared challenges, and get answers to your toughest
            consistency questions.
          </Card>

          <Card
            title="Coach’s Corner: Professional Guidance"
            subtitle="Expert Assist"
            icon={<GraduationCap className="h-5 w-5 text-amber-200" />}
            comingSoon
          >
            <div className="space-y-3">
              <p>
                Expertise on Demand (Coming Soon) - Don’t just track-optimize. We
                are bringing in trained mentors and high-performing power users to
                the Coach’s Corner. Whether you need to troubleshoot a plateau or
                need an extra push to lead your pack, professional guidance is on
                the way to ensure your Success Progress never stops.
              </p>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="text-xs font-semibold text-slate-200">
                  Why this matters
                </div>
                <div className="mt-1 text-sm text-slate-300">
                  This positions PactPal as an accountability platform-not a simple
                  habit tracker-by adding a professional layer of support.
                </div>
              </div>
            </div>
          </Card>

          <Card
            title="Success Dashboard: Visualize Your Identity"
            subtitle="Progress charts + streak proof"
            icon={<BarChart3 className="h-5 w-5 text-teal-200" />}
          >
            Turn consistency into data. Monitor your Success Progress through
            monthly charts and 14-day streaks that provide proof of who you are
            becoming.
          </Card>
        </div>
      </div>
    </section>
  );
}
