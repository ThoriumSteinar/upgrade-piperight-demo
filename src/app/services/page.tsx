import type { Metadata } from "next";
import { ServiceCard } from "@/components/ServiceCard";
import { services, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Plumbing services",
  description:
    "Emergency plumbing, blocked drains, hot water, and tap repairs on the Gold Coast.",
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-accent)]">
        Services
      </p>
      <h1 className="mt-2 text-3xl font-bold text-[var(--color-text)] sm:text-4xl">
        What PipeRight does
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-[var(--color-muted)]">
        Emergency jobs — call{" "}
        <a href={site.phoneHref} className="font-bold text-[var(--color-call)]">
          {site.phone}
        </a>
        . For everything else, request a quote and we&apos;ll get back to you.
      </p>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        <ServiceCard service={services[0]} large />
        {services.slice(1).map((s) => (
          <ServiceCard key={s.slug} service={s} />
        ))}
      </div>
    </div>
  );
}
