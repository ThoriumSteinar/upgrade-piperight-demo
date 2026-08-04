import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-lg px-4 py-20 text-center">
      <h1 className="text-2xl font-bold text-[var(--color-text)]">Page not found</h1>
      <p className="mt-2 text-[var(--color-muted)]">This demo only has five pages.</p>
      <Link
        href="/"
        className="mt-6 inline-block rounded-xl bg-[var(--color-call)] px-5 py-3 text-sm font-bold text-white"
      >
        Back to home
      </Link>
    </div>
  );
}
