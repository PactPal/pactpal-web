// app/download/page.tsx
import { StoreButtons } from "@/components/StoreButtons";

export default function DownloadPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-3xl font-bold">Download PactPal</h1>
      <p className="mt-3 max-w-2xl text-slate-300">
        Choose your platform. If you’re on desktop, scan the QR code later (v2),
        or open this page on your phone.
      </p>

      <div className="mt-8">
        <StoreButtons large />
      </div>

      <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
        <div className="text-lg font-semibold">Coming next</div>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-300">
          <li>Smart redirect to App Store vs Google Play</li>
          <li>QR codes for desktop</li>
          <li>Open invite links directly in-app</li>
        </ul>
      </div>
    </div>
  );
}
