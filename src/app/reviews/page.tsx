import type { Metadata } from "next";
import Link from "next/link";
import { reviews, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Customer reviews",
  description: "Demo reviews from Gold Coast customers — portfolio fiction only.",
};

function Stars({ count }: { count: number }) {
  return (
    <span className="text-[var(--color-accent)]" aria-label={`${count} stars`}>
      {"★".repeat(count)}
    </span>
  );
}

export default function ReviewsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-accent)]">
        Reviews
      </p>
      <h1 className="mt-2 text-3xl font-bold text-[var(--color-text)] sm:text-4xl">
        What locals say
      </h1>
      <p className="mt-4 max-w-2xl text-[var(--color-muted)]">
        Demo testimonials for portfolio purposes — fictional names and suburbs,
        no real surnames.
      </p>

      <div className="mt-10 columns-1 gap-5 sm:columns-2">
        {reviews.map((r) => (
          <article
            key={r.name + r.suburb}
            className="mb-5 break-inside-avoid rounded-2xl border border-[var(--color-border)] bg-white p-5 shadow-sm"
          >
            <div className="flex items-center justify-between gap-2">
              <Stars count={r.rating} />
              <span
                className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                  r.tag === "emergency"
                    ? "bg-[var(--color-call)]/10 text-[var(--color-call)]"
                    : "bg-[var(--color-bg)] text-[var(--color-muted)]"
                }`}
              >
                {r.tag === "emergency" ? "Emergency" : "Planned"}
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-text)]">
              &ldquo;{r.text}&rdquo;
            </p>
            <footer className="mt-4 text-xs font-semibold text-[var(--color-muted)]">
              {r.name} · {r.suburb}
            </footer>
          </article>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-[var(--color-border)] bg-[var(--color-call)]/5 p-6 text-center">
        <p className="text-[var(--color-text)]">
          Need a plumber? Call{" "}
          <a href={site.phoneHref} className="font-bold text-[var(--color-call)]">
            {site.phone}
          </a>{" "}
          or{" "}
          <Link href="/contact" className="font-bold text-[var(--color-text)] underline">
            send a quote request
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
