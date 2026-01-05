// app/privacy/page.tsx
import { SITE } from "@/lib/site";

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-3xl font-bold">Privacy Policy</h1>
      <p className="mt-2 text-sm text-slate-400">Last updated: 2026-01-04</p>

      <div className="prose prose-invert mt-8 max-w-none prose-p:text-slate-300 prose-li:text-slate-300">
        <p>
          This Privacy Policy explains how {SITE.name} (“we”, “us”) collects,
          uses, and shares information when you use our mobile application and
          website.
        </p>

        <h2>Information we collect</h2>
        <ul>
          <li>
            <strong>Account information:</strong> such as email, username, and
            profile details you provide.
          </li>
          <li>
            <strong>Usage & activity:</strong> such as check-ins, posts,
            comments, and interactions within pods.
          </li>
          <li>
            <strong>Device & diagnostics:</strong> such as device type, app
            version, and crash/error data to improve reliability.
          </li>
        </ul>

        <h2>How we use information</h2>
        <ul>
          <li>Provide and operate the service (pods, check-ins, feeds).</li>
          <li>Improve performance, fix bugs, and prevent abuse.</li>
          <li>Communicate service-related messages (e.g., important updates).</li>
        </ul>

        <h2>How we share information</h2>
        <p>
          We do not sell your personal information. We may share information:
        </p>
        <ul>
          <li>
            <strong>With service providers</strong> (hosting, analytics, crash
            reporting) to operate the app.
          </li>
          <li>
            <strong>For legal reasons</strong> if required to comply with law or
            protect safety.
          </li>
        </ul>

        <h2>Your choices</h2>
        <ul>
          <li>You can update certain profile information in the app.</li>
          <li>
            You may request deletion of your account by contacting{" "}
            <a href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a>.
          </li>
        </ul>

        <h2>Data retention</h2>
        <p>
          We retain information as needed to provide the service and comply with
          legal obligations. We may retain limited records for security and
          fraud-prevention.
        </p>

        <h2>Children</h2>
        <p>
          {SITE.name} is not intended for children under 13 (or the minimum age
          required in your jurisdiction).
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
