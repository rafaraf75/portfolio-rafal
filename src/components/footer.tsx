"use client";

import * as React from "react";
import { useLanguage } from "@/components/language-provider";
import { texts } from "@/content/texts";
import { site } from "@/content/site";

export function Footer() {
  const { locale } = useLanguage();
  const t = texts[locale];
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-3 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          © {year} {site.name}. {t.footer.note}
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            className="text-sm text-muted-foreground underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            href={site.socials.github.href}
            target="_blank"
            rel="noreferrer"
          >
            {site.socials.github.label}
          </a>
          <a
            className="text-sm text-muted-foreground underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            href={site.socials.linkedin.href}
            target="_blank"
            rel="noreferrer"
          >
            {site.socials.linkedin.label}
          </a>
        </div>
      </div>
    </footer>
  );
}

