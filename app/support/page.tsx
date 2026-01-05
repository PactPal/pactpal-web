// app/support/page.tsx
import { SITE } from "@/lib/site";

export default function SupportPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-3xl font-bold">Support</h1>
      <p className="mt-3 text-slate-300">
        Need help? Email{" "}
        <a
          className="underline decoration-white/20 underline-offset-4 hover:text-white"
          href={`mailto:${SITE.supportEmail}`}
        >
          {SITE.supportEmail}
        </a>
        .
      </p>

      <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
        <h2 className="text-lg font-semibold">FAQ</h2>
        <div className="mt-4 space-y-4 text-sm text-slate-300">
          <div>
            <div className="font-semibold text-white">
              How do I join a pod?
            </div>
            <div>
              Use an invite link or code from a friend, or create your own pod
              in the app.
            </div>
          </div>
          <div>
            <div className="font-semibold text-white">
              My check-in didn’t show up.
            </div>
            <div>
              Try refreshing the feed. If it persists, email support with your
              username and approximate time of the check-in.
            </div>
          </div>
          <div>
            <div className="font-semibold text-white">
              How do I delete my account?
            </div>
            <div>
              Email support from the address used on your account and request
              deletion.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
