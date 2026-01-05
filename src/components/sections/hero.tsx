"use client";

import * as React from "react";
import { site } from "@/content/site";
import { texts } from "@/content/texts";
import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import { SectionShell } from "@/components/sections/section-shell";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function HeroSection() {
  const { locale } = useLanguage();
  const t = texts[locale];

  return (
    <SectionShell id="home" className="pt-28">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-b from-muted/80 to-background p-8 sm:p-12">
        <div className="pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(1200px_circle_at_20%_0%,black,transparent)]">
          <div className="absolute -top-24 left-10 h-72 w-72 rounded-full bg-foreground/10 blur-3xl" />
          <div className="absolute -bottom-40 right-10 h-72 w-72 rounded-full bg-foreground/10 blur-3xl" />
        </div>

        <div className="relative flex flex-col items-center gap-8 text-center">
          <div className="flex flex-col items-center gap-3">
            <p className="text-xs font-semibold tracking-widest text-muted-foreground">
              {t.hero.hello.toUpperCase()}
            </p>
            <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
              {site.name}
            </h1>
            <p className="text-sm font-medium text-muted-foreground">
              {site.role}
            </p>
            <p className="max-w-2xl text-pretty text-lg leading-8 text-muted-foreground">
              {t.hero.lead}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button onClick={() => scrollToId("projects")}>
              {t.hero.ctaProjects}
            </Button>
            <Button variant="secondary" onClick={() => scrollToId("contact")}>
              {t.hero.ctaContact}
            </Button>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
