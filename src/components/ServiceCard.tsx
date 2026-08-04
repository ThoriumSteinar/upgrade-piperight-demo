import Image from "next/image";
import Link from "next/link";
import {
  demoImages,
  demoImg,
  type DemoImageKey,
  type Service,
} from "@/lib/content";

export function ServiceCard({
  service,
  large,
}: {
  service: Service;
  large?: boolean;
}) {
  const img = demoImages[service.image];
  return (
    <article
      className={`group flex flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white shadow-sm transition hover:shadow-md ${
        large ? "lg:col-span-2 lg:flex-row" : ""
      }`}
    >
      <div
        className={`relative overflow-hidden ${
          large ? "aspect-[16/10] lg:aspect-auto lg:min-h-[220px] lg:w-2/5" : "aspect-[4/3]"
        }`}
      >
        <Image
          src={demoImg(img, large ? 800 : 600)}
          alt=""
          fill
          className="object-cover transition group-hover:scale-[1.02]"
          sizes={large ? "(max-width: 1024px) 100vw, 40vw" : "(max-width: 768px) 100vw, 33vw"}
        />
        {service.urgent ? (
          <span className="absolute left-3 top-3 rounded-full bg-[var(--color-call)] px-3 py-1 text-xs font-bold text-white">
            Emergency
          </span>
        ) : null}
      </div>
      <div className={`flex flex-1 flex-col p-5 ${large ? "lg:justify-center lg:p-6" : ""}`}>
        <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-[var(--color-text)]">
          {service.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--color-muted)]">
          {service.summary}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {service.urgent ? (
            <a
              href="tel:+61755500142"
              className="rounded-lg bg-[var(--color-call)] px-4 py-2 text-sm font-bold text-white hover:bg-[var(--color-call-dark)]"
            >
              Call now
            </a>
          ) : null}
          <Link
            href="/contact"
            className="rounded-lg border border-[var(--color-border)] px-4 py-2 text-sm font-semibold text-[var(--color-text)] hover:bg-[var(--color-bg)]"
          >
            Get a quote
          </Link>
        </div>
      </div>
    </article>
  );
}

export function ServiceTeaser({
  name,
  imageKey,
  href,
  tall,
}: {
  name: string;
  imageKey: DemoImageKey;
  href: string;
  tall?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group relative block overflow-hidden rounded-2xl border border-[var(--color-border)] shadow-sm ${
        tall ? "h-full" : ""
      }`}
    >
      <div
        className={`relative w-full overflow-hidden ${
          tall ? "h-full min-h-[320px] lg:min-h-[420px]" : "aspect-[4/3]"
        }`}
      >
        <Image
          src={demoImg(demoImages[imageKey], tall ? 900 : 600)}
          alt=""
          fill
          className="object-cover transition group-hover:scale-[1.03]"
          sizes={
            tall
              ? "(max-width: 1024px) 100vw, 50vw"
              : "(max-width: 768px) 50vw, 25vw"
          }
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a2332]/75 via-transparent to-transparent" />
        <p className="absolute bottom-3 left-3 right-3 font-[family-name:var(--font-heading)] text-sm font-bold text-white sm:text-base">
          {name}
        </p>
      </div>
    </Link>
  );
}
