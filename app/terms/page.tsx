// app/terms/page.tsx
import { SITE } from "@/lib/site";

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-3xl font-bold">Terms of Service</h1>
      <p className="mt-2 text-sm text-slate-400">Last Updated: January 4, 2026</p>

      <div className="prose prose-invert mt-8 max-w-none prose-p:text-slate-300 prose-li:text-slate-300">
        <p>
          <strong>Effective Date:</strong> January 4, 2026
        </p>

        <h2>1. EXECUTION OF AGREEMENT</h2>
        <p>
          These Terms of Service (“Terms”) constitute a high-level binding legal
          agreement between you (“User”) and PactPal (“Company,” “we,” “us,” or
          “our”). By accessing the PactPal mobile application, website, or
          associated APIs (the “Service”), you represent that you have the legal
          authority to enter into this Agreement. If you do not agree to these
          Terms, you are strictly prohibited from using the Service.
        </p>

        <h2>2. ELIGIBILITY AND REPRESENTATIONS</h2>
        <p>By using the Service, you represent and warrant that:</p>
        <ul>
          <li>
            You are at least 13 years of age (or the minimum legal age in your
            jurisdiction).
          </li>
          <li>Your use of the Service does not violate any applicable law or regulation.</li>
          <li>You have not been previously suspended or removed from the Service.</li>
        </ul>

        <h2>3. ACCOUNT INTEGRITY AND SECURITY</h2>
        <h3>3.1 Provision of Information</h3>
        <p>
          You must provide accurate and complete registration data. Any account
          found to be using deceptive or fraudulent data is subject to immediate
          termination.
        </p>

        <h3>3.2 Credential Security</h3>
        <p>
          You are exclusively responsible for the security of your
          authentication credentials. PactPal shall not be liable for losses
          resulting from unauthorized access to your account due to your
          failure to secure your credentials.
        </p>

        <h3>3.3 Account Transferability</h3>
        <p>
          Accounts are non-transferable and may not be sold, traded, or gifted
          without express written authorization from the Company.
        </p>

        <h2>4. ACCEPTABLE USE AND PROHIBITED CONDUCT</h2>
        <p>
          You agree to use the Service only for its intended purpose of social
          accountability. Prohibited conduct includes, but is not limited to:
        </p>
        <ul>
          <li>
            <strong>4.1 Systematic Data Extraction:</strong> Using automated
            scripts, "bots," or "scrapers" to harvest user data or content.
          </li>
          <li>
            <strong>4.2 Abuse and Harassment:</strong> Engaging in any behavior
            that is defamatory, obscene, or intended to harass or intimidate
            other members of a "Pod."
          </li>
          <li>
            <strong>4.3 Technical Interference:</strong> Attempting to bypass
            security protocols, reverse-engineer the application, or introduce
            malicious code (viruses, worms, etc.).
          </li>
        </ul>

        <h2>5. USER-GENERATED CONTENT (UGC) AND LICENSING</h2>
        <h3>5.1 Ownership</h3>
        <p>
          Users retain all intellectual property rights to the content they post
          (check-ins, comments, images).
        </p>

        <h3>5.2 Operational License</h3>
        <p>
          By posting content, you grant PactPal a worldwide, royalty-free,
          sublicensable, and transferable license to host, store, reproduce, and
          display your content solely for the purpose of providing and promoting
          the Service.
        </p>

        <h3>5.3 Social Nature of Content</h3>
        <p>
          You acknowledge that "Pods" are collaborative environments. Content
          shared within a Pod may be visible to other members. PactPal is not
          responsible for the actions of third-party users who may copy or share
          your content outside the platform.
        </p>

        <h3>5.4 Moderation Rights</h3>
        <p>
          We reserve the right, though not the obligation, to remove any content
          that we deem, in our sole discretion, to violate these Terms or our
          Community Guidelines.
        </p>

        <h2>6. INTELLECTUAL PROPERTY OF THE COMPANY</h2>
        <p>
          The PactPal name, logo, software code, and UI/UX design are the
          exclusive property of the Company. We grant you a limited, revocable,
          non-exclusive license to use the app for personal, non-commercial
          purposes. No other rights are granted by implication.
        </p>

        <h2>7. LIMITATION OF LIABILITY AND WARRANTY DISCLAIMER</h2>
        <p>
          <strong>7.1 "As-Is" Provision:</strong> THE SERVICE IS PROVIDED ON AN
          "AS IS" BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR
          IMPLIED.
        </p>

        <p>
          <strong>7.2 Liability Cap:</strong> TO THE MAXIMUM EXTENT PERMITTED BY
          LAW, PACTPAL’S TOTAL LIABILITY FOR ANY CLAIM ARISING OUT OF THESE TERMS
          SHALL NOT EXCEED THE GREATER OF $100.00 USD OR THE TOTAL FEES PAID BY YOU
          TO THE COMPANY IN THE PRECEDING SIX MONTHS.
        </p>

        <p>
          <strong>7.3 Consequential Damages:</strong> We shall not be liable for
          any indirect, incidental, or consequential damages (including loss of
          data or loss of profit) arising from your use of the Service.
        </p>

        <h2>8. INDEMNIFICATION</h2>
        <p>
          You agree to indemnify and hold harmless PactPal and its officers from
          any claims, damages, or legal fees resulting from your breach of these
          Terms or your violation of any third-party rights (including
          intellectual property or privacy rights).
        </p>

        <h2>9. MANDATORY ARBITRATION AND CLASS ACTION WAIVER</h2>
        <p>
          <strong>9.1 Informal Resolution:</strong> Both parties agree to attempt
          an informal resolution via{" "}
          <a href="mailto:support@pactpal.app">support@pactpal.app</a> for at
          least 60 days before initiating legal action.
        </p>

        <p>
          <strong>9.2 Binding Arbitration:</strong> Any remaining dispute shall
          be settled by binding arbitration administered by the American
          Arbitration Association (AAA) in [Your City, State/Province].
        </p>

        <p>
          <strong>9.3 Class Action Waiver:</strong> YOU WAIVE THE RIGHT TO
          PARTICIPATE IN A CLASS ACTION LAWSUIT OR CLASS-WIDE ARBITRATION. CLAIMS
          MUST BE BROUGHT ON AN INDIVIDUAL BASIS.
        </p>

        <h2>10. TERMINATION</h2>
        <p>
          <strong>10.1 Voluntary:</strong> You may terminate your account at any
          time.
        </p>

        <p>
          <strong>10.2 Involuntary:</strong> We reserve the right to suspend or
          terminate accounts for violations of these Terms or for any reason
          deemed necessary to protect the Service. Sections regarding IP,
          Liability, and Arbitration shall survive termination.
        </p>

        <h2>11. MODIFICATIONS TO TERMS</h2>
        <p>
          We reserve the right to update these Terms at any time. Material
          changes will be communicated via in-app notification or email.
          Continued use of the Service following such updates constitutes
          acceptance of the revised Terms.
        </p>

        <h2>12. GOVERNING LAW</h2>
        <p>
          This Agreement is governed by the laws of [Your State/Province], United
          States, without regard to conflict of law principles.
        </p>

        <h2>13. CONTACT INFORMATION</h2>
        <p>
          For legal notices or questions regarding these Terms: Legal Department
          Email:{" "}
          <a href="mailto:support@pactpal.app">support@pactpal.app</a>
        </p>
      </div>
    </div>
  );
}
