// app/terms/page.tsx
import { SITE } from "@/lib/site";

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-3xl font-bold">Terms of Service</h1>
      <p className="mt-2 text-sm text-slate-400">Last updated: 2026-01-04</p>

      <div className="prose prose-invert mt-8 max-w-none prose-p:text-slate-300 prose-li:text-slate-300">
        <p>
          These Terms of Service (“Terms”) govern your use of {SITE.name}. By
          using our services, you agree to these Terms.
        </p>

        <h2>Eligibility</h2>
        <p>
          You must be legally able to form a contract in your jurisdiction to
          use {SITE.name}.
        </p>

        <h2>Accounts</h2>
        <ul>
          <li>You are responsible for your account and keeping it secure.</li>
          <li>You agree not to impersonate others or misuse the service.</li>
        </ul>

        <h2>Acceptable use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Harass, threaten, or abuse others.</li>
          <li>Post illegal content or violate others’ rights.</li>
          <li>Attempt to access systems or data you are not authorized to.</li>
        </ul>

        <h2>Pods and content</h2>
        <p>
          Content you post (check-ins, posts, comments) may be visible to others
          depending on where you post it (pod vs public areas). You retain
          ownership of your content, but you grant us a license to host and
          display it as necessary to operate the service.
        </p>

        <h2>Termination</h2>
        <p>
          We may suspend or terminate accounts that violate these Terms or pose
          security or safety risks.
        </p>

        <h2>Disclaimers</h2>
        <p>
          {SITE.name} is provided “as is.” We do not guarantee uninterrupted
          service or specific outcomes from using the app.
        </p>

        <h2>Limitation of liability</h2>
        <p>
          To the maximum extent permitted by law, {SITE.name} will not be liable
          for indirect or consequential damages.
        </p>

        <h2>Contact</h2>
        <p>
          Questions? Contact{" "}
          <a href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a>.
        </p>
      </div>
    </div>
  );
}
