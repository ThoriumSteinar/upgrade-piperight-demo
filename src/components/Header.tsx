import Link from "next/link";
import { nav, site } from "@/lib/content";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-border)] bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">
        <Link href="/" className="min-w-0">
          <span className="block truncate font-[family-name:var(--font-heading)] text-lg font-bold tracking-tight text-[var(--color-text)] sm:text-xl">
            {site.name}
          </span>
          <span className="block text-xs font-medium text-[var(--color-muted)]">
            {site.regionLine}
          </span>
        </Link>
        <nav className="hidden items-center gap-5 text-sm font-medium text-[var(--color-muted)] lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-[var(--color-call)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <a
            href={site.phoneHref}
            className="rounded-lg bg-[var(--color-call)] px-3 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-[var(--color-call-dark)] sm:px-4"
          >
            Call {site.phone}
          </a>
        </div>
      </div>
      <nav className="flex overflow-x-auto border-t border-[var(--color-border)] bg-[var(--color-bg)] lg:hidden">
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="shrink-0 px-4 py-3 text-sm font-medium text-[var(--color-muted)] hover:bg-white hover:text-[var(--color-call)]"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
