import { site } from "@/lib/content";

export function StickyCallBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-[var(--color-border)] bg-white p-3 shadow-[0_-4px_20px_rgba(26,35,50,0.08)] md:hidden">
      <a
        href={site.phoneHref}
        className="flex w-full items-center justify-center rounded-xl bg-[var(--color-call)] py-3.5 text-base font-bold text-white"
      >
        Call now — {site.phone}
      </a>
    </div>
  );
}
