// app/privacy/page.tsx
import { SITE } from "@/lib/site";

const legalProse =
  `
    mt-8 max-w-none text-slate-300 leading-7
    prose prose-invert
    prose-p:my-4
    prose-li:my-2
    prose-ul:my-4
    prose-ol:my-4
    prose-h2:mt-10 prose-h2:mb-3 prose-h2:text-xl
    prose-h3:mt-6 prose-h3:mb-2 prose-h3:text-base prose-h3:font-semibold
    prose-strong:text-white
    prose-a:underline prose-a:decoration-white/20 prose-a:hover:decoration-white/60
    prose-hr:my-8 prose-hr:border-white/10
  `;

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <header className="border-b border-white/10 pb-6">
        <h1 className="text-3xl font-bold">Privacy Policy</h1>
        <p className="mt-2 text-sm text-slate-400">Last Updated: January 4, 2026</p>
        <p className="mt-1 text-sm text-slate-400">Effective Date: January 4, 2026</p>
      </header>

      <div className={legalProse}>
        <h2>1. SCOPE AND CONSENT</h2>
        <p>
          This Privacy Policy governs the collection, processing, and disclosure of
          data by PactPal (“Company,” “we,” “us,” or “our”) via our mobile application and
          website (the “Service”). By creating an account or interacting with the Service,
          you consent to the data practices described herein. This policy is incorporated
          into and subject to our Terms of Service.
        </p>

        <hr />

        <h2>2. TAXONOMY OF DATA COLLECTION</h2>
        <p>We categorize the information we collect into three distinct streams:</p>

        <h3>2.1 Information Disclosed Voluntarily</h3>
        <ul>
          <li>
            <strong>Account Credentials:</strong> Primary identifiers including email address,
            encrypted passwords, and profile metadata (username, display name).
          </li>
          <li>
            <strong>User-Generated Content (UGC):</strong> All check-ins, habit logs, "pod"
            communications, comments, and reactions.
          </li>
          <li>
            <strong>Communications:</strong> Any data transmitted during support requests,
            including diagnostic screenshots or contact details.
          </li>
        </ul>

        <h3>2.2 Automatically Collected Technical Data</h3>
        <ul>
          <li>
            <strong>Persistent Identifiers:</strong> IP addresses, Device ID (IDFA/AAID), and
            browser fingerprints.
          </li>
          <li>
            <strong>Telemetry and Logs:</strong> Granular engagement data, including feature
            latency, session duration, and clickstream paths.
          </li>
          <li>
            <strong>Diagnostic Data:</strong> Stack traces and crash reports managed through
            third-party processors (e.g., Sentry, Firebase).
          </li>
        </ul>

        <h3>2.3 Integration Data (Health &amp; Fitness)</h3>
        <p>
          If explicitly authorized via system-level permissions, we may ingest data from
          Apple HealthKit or Google Fit. This data is processed locally or on our secure
          servers solely for "habit verification" and is strictly excluded from any
          third-party marketing or advertising ecosystems.
        </p>

        <hr />

        <h2>3. DATA ARCHITECTURE AND VISIBILITY</h2>
        <p>PactPal is a social accountability engine. You acknowledge that:</p>
        <ul>
          <li>
            <strong>Public Pods:</strong> Information shared in Public Pods is accessible to all
            users of the Service and is not considered "private."
          </li>
          <li>
            <strong>Private Pods:</strong> Access is restricted to invited members; however,
            PactPal administrators may access this data for safety and moderation purposes.
          </li>
          <li>
            <strong>Anonymization:</strong> Upon account deletion, certain UGC (like comments)
            may be retained in an anonymized format to preserve the integrity of the "pod"
            experience for remaining users.
          </li>
        </ul>

        <hr />

        <h2>4. LEGAL BASIS FOR PROCESSING (EEA/UK)</h2>
        <p>For users in the European Economic Area or UK, our processing is justified under:</p>
        <ul>
          <li>
            <strong>Contractual Necessity:</strong> To provide the Service as defined in our Terms.
          </li>
          <li>
            <strong>Legitimate Interests:</strong> For fraud prevention, network security, and
            product optimization.
          </li>
          <li>
            <strong>Consent:</strong> Where you have provided opt-in authorization (e.g., marketing
            or health data).
          </li>
        </ul>

        <hr />

        <h2>5. DATA DISCLOSURE AND THIRD-PARTY TRANSFERS</h2>
        <p>We do not sell personal information. Disclosure is limited to:</p>
        <ul>
          <li>
            <strong>Sub-Processors:</strong> Infrastructure providers (AWS/Google Cloud),
            analytics engines, and communication APIs.
          </li>
          <li>
            <strong>Regulatory Compliance:</strong> Disclosure required by law, valid court order,
            or to protect the vital interests of any individual.
          </li>
          <li>
            <strong>Corporate Restructuring:</strong> Data may be transferred as an asset during
            mergers, acquisitions, or due diligence phases.
          </li>
        </ul>

        <hr />

        <h2>6. GLOBAL PRIVACY RIGHTS</h2>
        <p>Regardless of your geography, PactPal provides the following controls:</p>
        <ul>
          <li>
            <strong>The Right to Erasure:</strong> You may request the permanent deletion of your
            personal data.
          </li>
          <li>
            <strong>The Right to Portability:</strong> You may request an export of your data in a
            machine-readable format.
          </li>
          <li>
            <strong>California-Specific (CPRA):</strong> We do not "Share" or "Sell" data for
            cross-contextual behavioral advertising. You have the right to limit the use of
            "Sensitive Personal Information."
          </li>
        </ul>

        <hr />

        <h2>7. INTERNATIONAL DATA TRANSFERS</h2>
        <p>
          PactPal is operated in the United States. If you access the Service from abroad, your
          data will be transferred to U.S. servers. We utilize Standard Contractual Clauses (SCCs)
          to ensure that your data receives a level of protection equivalent to that of your home
          jurisdiction.
        </p>

        <hr />

        <h2>8. SECURITY POSTURE</h2>
        <p>We implement an enterprise-grade security framework, including:</p>
        <ul>
          <li>
            <strong>Encryption:</strong> Data is encrypted at rest using AES-256 and in transit via
            TLS 1.3.
          </li>
          <li>
            <strong>Access Control:</strong> Least-privilege access protocols for all internal
            employees.
          </li>
          <li>
            <strong>Vulnerability Management:</strong> Periodic security audits and dependency
            monitoring.
          </li>
        </ul>

        <hr />

        <h2>9. RETENTION POLICY</h2>
        <p>
          We retain Personal Data only as long as necessary to fulfill the purposes for which it
          was collected. Typical retention for active accounts is the duration of the account's
          life plus a 30-day "grace period" following a deletion request to allow for database
          propagation.
        </p>

        <hr />

        <h2>10. CONTACT AND DPO</h2>
        <p>
          To exercise your rights or contact our Data Protection Officer:
          <br />
          PactPal Legal Dept. Email:{" "}
          <a href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a>
        </p>
      </div>
    </div>
  );
}
