import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { StickyCallBar } from "@/components/StickyCallBar";
import { site } from "@/lib/content";
import "./globals.css";

const heading = DM_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} | Demo`,
    template: `%s | ${site.name} Demo`,
  },
  description: site.subline,
  metadataBase: new URL(
    "https://thoriumsteinar.github.io/upgrade-piperight-demo/"
  ),
  openGraph: {
    siteName: `${site.name} Demo`,
    locale: "en_AU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable} h-full`}>
      <body className="flex min-h-full flex-col antialiased">
        <div className="border-b border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-2 text-center text-xs text-[var(--color-muted)] sm:text-sm">
          {site.demoNote}
        </div>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyCallBar />
      </body>
    </html>
  );
}
