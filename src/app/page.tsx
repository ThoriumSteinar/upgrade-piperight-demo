import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ServiceTeaser } from "@/components/ServiceCard";
import {
  demoImages,
  demoImg,
  reviews,
  services,
  site,
  trustBadges,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Gold Coast plumbing — emergencies & repairs",
  description:
    "PipeRight Solutions — local Gold Coast plumbers. Emergency burst pipes and planned repairs. Call 07 5550 0142.",
};

export default function HomePage() {
  const teaserReviews = reviews.slice(0, 3);

  return (
    <>
      {/* Bento hero — daylight, asymmetric (not dark full-bleed) */}
      <section className="border-b border-[var(--color-border)]">
        <div className="mx-auto grid max-w-6xl gap-4 px-4 py-8 sm:px-6 sm:py-10 lg:grid-cols-12 lg:grid-rows-[auto_auto] lg:gap-5">
          <div className="flex flex-col justify-center rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-sm lg:col-span-7 lg:row-span-2 lg:p-10">
            <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-accent)]">
              Gold Coast locals · {site.years} years
            </p>
            <h1 className="mt-3 text-4xl font-bold leading-[1.1] text-[var(--color-text)] sm:text-5xl">
              {site.tagline}
            </h1>
            <p className="mt-4 max-w-xl text-lg text-[var(--color-muted)]">
              Dave &amp; Kylie — small crew for burst pipes, blocked drains, hot
              water, and everyday fixes across Nerang, Robina &amp; Helensvale.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={site.phoneHref}
                className="rounded-xl bg-[var(--color-call)] px-6 py-3.5 text-base font-bold text-white shadow-sm hover:bg-[var(--color-call-dark)]"
              >
                Call now — {site.phone}
              </a>
              <Link
                href="/contact"
                className="rounded-xl border-2 border-[var(--color-text)] px-6 py-3.5 text-base font-semibold text-[var(--color-text)] hover:bg-[var(--color-bg)]"
              >
                Get a quote
              </Link>
            </div>
          </div>

          <div className="relative min-h-[220px] overflow-hidden rounded-2xl border border-[var(--color-border)] shadow-sm lg:col-span-5 lg:min-h-[280px]">
            <Image
              src={demoImg(demoImages.hero, 900)}
              alt=""
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            <div className="rounded-2xl border border-[var(--color-call)]/20 bg-[var(--color-call)]/5 p-5">
              <p className="font-[family-name:var(--font-heading)] text-sm font-bold uppercase tracking-wide text-[var(--color-call)]">
                Emergency
              </p>
              <p className="mt-2 text-sm text-[var(--color-text)]">
                Burst pipe or major leak? Call — we prioritise urgent jobs.
              </p>
              <a
                href={site.phoneHref}
                className="mt-3 inline-block text-sm font-bold text-[var(--color-call)]"
              >
                {site.phone} →
              </a>
            </div>
            <div className="rounded-2xl border border-[var(--color-border)] bg-white p-5">
              <p className="font-[family-name:var(--font-heading)] text-sm font-bold uppercase tracking-wide text-[var(--color-muted)]">
                Planned visit
              </p>
              <p className="mt-2 text-sm text-[var(--color-muted)]">
                Drains, hot water, taps — book via our quote form.
              </p>
              <Link
                href="/contact"
                className="mt-3 inline-block text-sm font-bold text-[var(--color-text)]"
              >
                Request a quote →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--color-border)] bg-white py-6">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-2 px-4 sm:gap-3 sm:px-6">
          {trustBadges.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-2 text-xs font-medium text-[var(--color-text)] sm:text-sm"
            >
              {badge}
            </span>
          ))}
        </div>
        <p className="mx-auto mt-2 max-w-6xl px-4 text-center text-xs text-[var(--color-muted)] sm:px-6">
          *Same-day emergency is a demo claim for portfolio purposes only.
        </p>
      </section>

      {/* Services bento — 4 uneven tiles, not 3 equal cards */}
      <section className="border-b border-[var(--color-border)]">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-[var(--color-text)] sm:text-3xl">
                What we fix
              </h2>
              <p className="mt-2 max-w-lg text-[var(--color-muted)]">
                Four core services — emergency first, everything else clear and
                photo-led.
              </p>
            </div>
            <Link
              href="/services"
              className="text-sm font-semibold text-[var(--color-call)] hover:text-[var(--color-call-dark)]"
            >
              All services →
            </Link>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
            <div className="sm:col-span-2 lg:row-span-2">
              <ServiceTeaser
                name={services[0].name}
                imageKey="emergency"
                href="/services"
              />
            </div>
            <ServiceTeaser name={services[1].name} imageKey="drains" href="/services" />
            <ServiceTeaser name={services[2].name} imageKey="hotWater" href="/services" />
            <div className="sm:col-span-2 lg:col-span-2">
              <ServiceTeaser name={services[3].name} imageKey="taps" href="/services" />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews teaser — offset layout */}
      <section className="border-b border-[var(--color-border)] bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <h2 className="text-2xl font-bold text-[var(--color-text)]">
            Neighbours say
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {teaserReviews.map((r, i) => (
              <blockquote
                key={r.name}
                className={`rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-5 ${
                  i === 1 ? "md:translate-y-4" : ""
                }`}
              >
                <p className="text-sm leading-relaxed text-[var(--color-text)]">
                  &ldquo;{r.text}&rdquo;
                </p>
                <footer className="mt-4 text-xs font-semibold text-[var(--color-muted)]">
                  {r.name} · {r.suburb}
                </footer>
              </blockquote>
            ))}
          </div>
          <Link
            href="/reviews"
            className="mt-8 inline-block text-sm font-semibold text-[var(--color-call)]"
          >
            Read all reviews →
          </Link>
        </div>
      </section>

      {/* About teaser */}
      <section>
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-5 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[var(--color-border)] lg:col-span-2">
            <Image
              src={demoImg(demoImages.aboutVan, 700)}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-bold text-[var(--color-text)]">
              Dave &amp; Kylie — your local crew
            </h2>
            <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
              Eight years on the Gold Coast, mostly word-of-mouth and Google
              Maps — now building a proper site so you can see who we are before
              you call. Licensed, straightforward, and never a call centre.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-block rounded-xl border border-[var(--color-border)] bg-white px-5 py-2.5 text-sm font-semibold hover:bg-[var(--color-bg)]"
            >
              About us →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
