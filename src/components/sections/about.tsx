"use client";

import * as React from "react";
import { useLanguage } from "@/components/language-provider";
import { texts } from "@/content/texts";
import { Card } from "@/components/ui/card";
import { SectionShell } from "@/components/sections/section-shell";

export function AboutSection() {
  const { locale } = useLanguage();
  const t = texts[locale];

  return (
    <SectionShell id="about">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {t.about.title}
          </h2>
          <p className="max-w-3xl text-muted-foreground">{t.about.p1}</p>
          <p className="max-w-3xl text-muted-foreground">{t.about.p2}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {t.about.cards.map((card) => (
            <Card key={card.title} className="p-6">
              <h3 className="text-sm font-semibold">{card.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{card.body}</p>
            </Card>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
