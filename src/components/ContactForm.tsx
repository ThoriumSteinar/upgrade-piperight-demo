"use client";

import { FormEvent, useState } from "react";
import { site, suburbOptions, urgentOptions } from "@/lib/content";

type FormErrors = Partial<
  Record<"name" | "phone" | "email" | "message", string>
>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  function validate(form: FormData): FormErrors {
    const next: FormErrors = {};
    if (!String(form.get("name") ?? "").trim()) next.name = "Name is required.";
    if (!String(form.get("phone") ?? "").trim())
      next.phone = "Phone is required.";
    const email = String(form.get("email") ?? "").trim();
    if (!email) next.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Enter a valid email.";
    if (!String(form.get("message") ?? "").trim())
      next.message = "Message is required.";
    return next;
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const nextErrors = validate(new FormData(e.currentTarget));
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-6"
        role="status"
      >
        <p className="text-lg font-semibold text-[var(--color-text)]">
          Thank you — request received (demo)
        </p>
        <p className="mt-2 text-sm text-[var(--color-muted)]">
          This portfolio demo does not send messages. For emergencies, call{" "}
          <a href={site.phoneHref} className="font-bold text-[var(--color-call)]">
            {site.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  const input =
    "mt-1 w-full rounded-xl border border-[var(--color-border)] bg-white px-3 py-2.5 outline-none focus:ring-2 focus:ring-[var(--color-call)]/20";

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <p className="rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-950">
        {site.demoNote}
      </p>
      <label className="block text-sm font-medium text-[var(--color-text)]">
        Name *
        <input name="name" className={input} autoComplete="name" />
        {errors.name ? (
          <span className="mt-1 block text-xs text-red-600">{errors.name}</span>
        ) : null}
      </label>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-[var(--color-text)]">
          Phone *
          <input name="phone" type="tel" className={input} autoComplete="tel" />
          {errors.phone ? (
            <span className="mt-1 block text-xs text-red-600">{errors.phone}</span>
          ) : null}
        </label>
        <label className="block text-sm font-medium text-[var(--color-text)]">
          Email *
          <input name="email" type="email" className={input} autoComplete="email" />
          {errors.email ? (
            <span className="mt-1 block text-xs text-red-600">{errors.email}</span>
          ) : null}
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-[var(--color-text)]">
          Suburb
          <select name="suburb" defaultValue="" className={input}>
            <option value="">Select suburb</option>
            {suburbOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-medium text-[var(--color-text)]">
          Urgent?
          <select name="urgent" defaultValue="" className={input}>
            <option value="">Select</option>
            {urgentOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label className="block text-sm font-medium text-[var(--color-text)]">
        Message *
        <textarea name="message" rows={4} className={input} />
        {errors.message ? (
          <span className="mt-1 block text-xs text-red-600">{errors.message}</span>
        ) : null}
      </label>
      <button
        type="submit"
        className="rounded-xl border-2 border-[var(--color-text)] bg-white px-5 py-3 text-sm font-semibold text-[var(--color-text)] hover:bg-[var(--color-bg)]"
      >
        Send quote request
      </button>
    </form>
  );
}
