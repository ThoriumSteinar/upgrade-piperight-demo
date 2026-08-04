import Link from "next/link";
import { nav, site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-white pb-20 md:pb-0">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-[family-name:var(--font-heading)] text-lg font-bold text-[var(--color-text)]">
            {site.name}
          </p>
          <p className="mt-2 text-sm text-[var(--color-muted)]">{site.subline}</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-[var(--color-text)]">Contact</p>
          <p className="mt-2 text-sm">
            <a href={site.phoneHref} className="font-bold text-[var(--color-call)]">
              {site.phone}
            </a>
          </p>
          <p className="mt-1 text-sm text-[var(--color-muted)]">{site.email}</p>
          <p className="mt-2 text-sm text-[var(--color-muted)]">
            Service area: {site.suburbs.join(" · ")}
          </p>
          <a
            href={site.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-sm font-semibold text-[var(--color-accent)] hover:text-[var(--color-accent-dark)]"
          >
            Open in Google Maps →
          </a>
        </div>
        <div>
          <p className="text-sm font-semibold text-[var(--color-text)]">Pages</p>
          <ul className="mt-2 space-y-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-[var(--color-muted)] hover:text-[var(--color-call)]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-4 text-center text-xs text-[var(--color-muted)] sm:text-sm">
        {site.demoNote} · {site.fictionNote}
      </div>
    </footer>
  );
}
