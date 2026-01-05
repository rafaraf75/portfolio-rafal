"use client";

import * as React from "react";
import { useLanguage } from "@/components/language-provider";
import { texts } from "@/content/texts";
import { site } from "@/content/site";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionShell } from "@/components/sections/section-shell";

export function AboutSection() {
  const { locale } = useLanguage();
  const t = texts[locale];

  return (
    <SectionShell id="about">
      <div className="flex flex-col gap-10">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold tracking-widest text-muted-foreground">
              {locale === "pl"
                ? "TWORZĘ NOWOCZESNE APLIKACJE"
                : locale === "es"
                  ? "CREO APLICACIONES MODERNAS"
                  : "CRAFTING MODERN APPS"}
            </p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {t.about.title}
            </h2>
            <p className="max-w-3xl text-muted-foreground">{t.about.p1}</p>
            <p className="max-w-3xl text-muted-foreground">{t.about.p2}</p>
          </div>

          <Card className="p-6">
            <p className="text-xs font-semibold tracking-widest text-muted-foreground">
              {t.about.skillsTitle.toUpperCase()}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {site.skills.map((skill) => (
                <Badge key={skill}>{skill}</Badge>
              ))}
            </div>
          </Card>
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
