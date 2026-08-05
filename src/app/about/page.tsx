import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { demoImages, demoImg, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Dave & Kylie",
  description:
    "Meet the PipeRight crew — local Gold Coast plumbers, licensed and family-run.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-accent)]">
        About
      </p>
      <h1 className="mt-2 text-3xl font-bold text-[var(--color-text)] sm:text-4xl">
        Dave &amp; Kylie — PipeRight Solutions
      </h1>

      <div className="mt-10 grid gap-6 lg:grid-cols-12">
        <div className="relative min-h-[260px] overflow-hidden rounded-2xl border border-[var(--color-border)] lg:col-span-7 lg:min-h-[340px]">
          <Image
            src={demoImg(demoImages.aboutVan, 900)}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 58vw"
          />
        </div>
        <div className="relative min-h-[200px] overflow-hidden rounded-2xl border border-[var(--color-border)] lg:col-span-5">
          <Image
            src={demoImg(demoImages.aboutTools, 600)}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 42vw"
          />
        </div>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <div className="space-y-4 text-[var(--color-muted)] leading-relaxed">
          <p>
            We&apos;re Dave and Kylie — a small plumbing crew based on the Gold
            Coast. For about {site.years} years we&apos;ve worked mostly through
            word-of-mouth, Google Maps, and the occasional Facebook post when
            someone asks for a recommendation.
          </p>
          <p>
            Kylie handles the books and keeps us organised; Dave is on the tools
            for emergencies and planned jobs. We&apos;re not a franchise or a
            Sydney call centre — when you ring, you get us.
          </p>
          <p>
            This demo site is a preview of how we&apos;d like to look online
            before we buy a domain and go live for real customers.
          </p>
        </div>
        <div className="rounded-2xl border border-[var(--color-border)] bg-white p-6">
          <h2 className="font-[family-name:var(--font-heading)] text-lg font-bold text-[var(--color-text)]">
            At a glance
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-[var(--color-muted)]">
            <li>
              <span className="font-semibold text-[var(--color-text)]">
                Licensed
              </span>{" "}
              — demo claim for portfolio
            </li>
            <li>
              <span className="font-semibold text-[var(--color-text)]">
                Service area
              </span>{" "}
              — {site.suburbs.join(", ")}
            </li>
            <li>
              <span className="font-semibold text-[var(--color-text)]">
                Best for
              </span>{" "}
              — homeowners &amp; rental agents
            </li>
            <li>
              <span className="font-semibold text-[var(--color-text)]">
                Emergencies
              </span>{" "}
              — call {site.phone}
            </li>
          </ul>
          <a
            href={site.phoneHref}
            className="mt-6 inline-block rounded-xl bg-[var(--color-call)] px-5 py-3 text-sm font-bold text-white hover:bg-[var(--color-call-dark)]"
          >
            Call {site.phone}
          </a>
        </div>
      </div>

      <div className="mt-10 rounded-2xl border border-dashed border-[var(--color-border)] bg-[var(--color-bg)] p-6 text-sm text-[var(--color-muted)]">
        Photos on this page are stock placeholders (van &amp; tools mood) — not
        real Dave/Kylie portraits. See README for Unsplash credits; files in{" "}
        <code className="text-xs">public/images/demo/</code>.
      </div>
    </div>
  );
}
