import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact & quote",
  description: `Contact PipeRight Solutions — call ${site.phone} or request a quote.`,
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-accent)]">
        Contact
      </p>
      <h1 className="mt-2 text-3xl font-bold text-[var(--color-text)] sm:text-4xl">
        Call or request a quote
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-[var(--color-muted)]">
        Emergencies — call first. For planned work, use the form and we&apos;ll
        respond (demo — no real send).
      </p>

      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="rounded-2xl border-2 border-[var(--color-call)] bg-[var(--color-call)]/5 p-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-call)]">
              Emergency
            </p>
            <a
              href={site.phoneHref}
              className="mt-2 block text-3xl font-bold text-[var(--color-call)]"
            >
              {site.phone}
            </a>
            <p className="mt-2 text-sm text-[var(--color-muted)]">
              Burst pipe or major leak — call now.
            </p>
          </div>

          <div className="rounded-2xl border border-[var(--color-border)] bg-white p-6">
            <h2 className="font-[family-name:var(--font-heading)] font-bold text-[var(--color-text)]">
              Service area
            </h2>
            <p className="mt-2 text-sm text-[var(--color-muted)]">
              {site.suburbs.join(" · ")} and surrounds on the Gold Coast.
            </p>
            <p className="mt-4 text-sm">
              <span className="font-semibold text-[var(--color-text)]">Email:</span>{" "}
              {site.email}
            </p>
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm font-semibold text-[var(--color-accent)] hover:text-[var(--color-accent-dark)]"
            >
              Open in Google Maps →
            </a>
            <p className="mt-2 text-xs text-[var(--color-muted)]">
              Text link only — no embedded map (faster on mobile).
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-sm">
          <h2 className="font-[family-name:var(--font-heading)] text-lg font-bold text-[var(--color-text)]">
            Quote request
          </h2>
          <div className="mt-4">
            <Suspense fallback={<p className="text-sm text-[var(--color-muted)]">Loading form…</p>}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
