"use client";

import * as React from "react";
import { projects } from "@/content/projects";
import { texts } from "@/content/texts";
import { useLanguage } from "@/components/language-provider";
import { Card } from "@/components/ui/card";
import { Tag } from "@/components/ui/tag";
import { SectionShell } from "@/components/sections/section-shell";

export function ProjectsSection() {
  const { locale } = useLanguage();
  const t = texts[locale];

  return (
    <SectionShell id="projects">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {t.projects.title}
          </h2>
          <p className="max-w-3xl text-muted-foreground">{t.projects.subtitle}</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project) => {
            const description =
              locale === "pl"
                ? project.descriptionPL
                : locale === "es"
                  ? project.descriptionES
                  : project.descriptionEN;
            return (
              <Card key={project.title} className="flex flex-col p-6">
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-semibold tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {description}
                  </p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {project.links.demo ? (
                    <a
                      className="inline-flex h-10 items-center justify-center rounded-full bg-foreground px-4 text-sm font-medium text-background transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      href={project.links.demo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {t.projects.demo}
                    </a>
                  ) : null}
                  <a
                    className="inline-flex h-10 items-center justify-center rounded-full border border-border bg-background px-4 text-sm font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    href={project.links.source}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t.projects.source}
                  </a>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}
