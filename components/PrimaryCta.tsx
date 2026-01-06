import Link from "next/link";

export function PrimaryCta({
  href = "/download",
  label = "Get Early Access",
  sublabel = "Build better habits. Together.",
}: {
  href?: string;
  label?: string;
  sublabel?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <Link
        href={href}
        className="inline-flex w-fit items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
      >
        {label}
      </Link>
      <div className="text-sm text-slate-300">{sublabel}</div>
    </div>
  );
}
