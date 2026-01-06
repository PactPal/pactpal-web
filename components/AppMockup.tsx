function Pill({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
      {children}
    </div>
  );
}

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="text-sm font-semibold text-white">{title}</div>
      <div className="mt-2 text-sm text-slate-300">{children}</div>
    </div>
  );
}

export function AppMockup() {
  return (
    <div className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/0 p-4">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold text-white">PactPal</div>
        <Pill>Pod • Today</Pill>
      </div>

      <div className="mt-4 grid gap-3">
        <Card title="Private Pod">
          <div className="flex flex-wrap gap-2">
            <Pill>3 members</Pill>
            <Pill>Closed circle</Pill>
            <Pill>Daily pressure</Pill>
          </div>
        </Card>

        <Card title="Daily Check-In">
          “I showed up today.” <span className="text-slate-400">+ proof</span>
          <div className="mt-2 flex flex-wrap gap-2">
            <Pill>Checked in: 2/3</Pill>
            <Pill>Reminder: none</Pill>
          </div>
        </Card>

        <Card title="Streaks">
          <div className="flex items-center gap-2">
            <Pill>14-day</Pill>
            <Pill>Identity badges</Pill>
            <Pill>Progress chart</Pill>
          </div>
        </Card>
      </div>

      <div className="pointer-events-none absolute -inset-2 rounded-[28px] bg-gradient-to-r from-sky-500/15 to-emerald-400/15 blur-2xl" />
    </div>
  );
}
