// components/StoreButtons.tsx
import { SITE } from "@/lib/site";

export function StoreButtons({ large = false }: { large?: boolean }) {
  const hasLinks = Boolean(SITE.appStoreUrl) || Boolean(SITE.playStoreUrl);

  const base =
    "inline-flex items-center justify-center rounded-xl font-semibold transition";
  const size = large ? "px-5 py-3 text-sm" : "px-4 py-2 text-sm";

  if (!hasLinks) {
    return (
      <div className="flex flex-col gap-3 sm:flex-row">
        <a
          href={`mailto:${SITE.supportEmail}?subject=PactPal%20Early%20Access&body=Hi%20PactPal%20team,%20please%20notify%20me%20when%20the%20app%20is%20available.%0A%0APlatform:%20(iOS/Android)%0AName:%20`}
          className={`${base} ${size} bg-white text-slate-950 hover:bg-slate-100`}
        >
          Get notified (Early Access)
        </a>
        <div
          className={`${base} ${size} border border-white/20 bg-white/5 text-white`}
        >
          iOS & Android coming soon
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      {SITE.appStoreUrl ? (
        <a
          href={SITE.appStoreUrl}
          className={`${base} ${size} bg-white text-slate-950 hover:bg-slate-100`}
        >
          Download on App Store
        </a>
      ) : null}

      {SITE.playStoreUrl ? (
        <a
          href={SITE.playStoreUrl}
          className={`${base} ${size} border border-white/20 bg-transparent text-white hover:border-white/40`}
        >
          Get it on Google Play
        </a>
      ) : null}
    </div>
  );
}
