"use client";

import * as React from "react";
import { useLanguage } from "@/components/language-provider";
import { texts } from "@/content/texts";
import { site } from "@/content/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { GradientCard } from "@/components/ui/gradient-card";
import { SectionShell } from "@/components/sections/section-shell";
import { Github, Linkedin, Mail } from "lucide-react";

type FormState = {
  name: string;
  email: string;
  message: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function ContactSection() {
  const { locale } = useLanguage();
  const t = texts[locale];

  const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

  const [form, setForm] = React.useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = React.useState<
    Partial<Record<keyof FormState, string>>
  >({});
  const [status, setStatus] = React.useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const onChange =
    (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [key]: e.target.value }));
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    };

  const validate = React.useCallback(() => {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) nextErrors.name = t.contact.form.required;
    if (!form.email.trim()) nextErrors.email = t.contact.form.required;
    else if (!isValidEmail(form.email)) nextErrors.email = t.contact.form.invalidEmail;
    if (!form.message.trim()) nextErrors.message = t.contact.form.required;
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }, [form.email, form.message, form.name, t.contact.form.invalidEmail, t.contact.form.required]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!endpoint) return;
    if (!validate()) return;

    setStatus("sending");
    try {
      const body = new FormData();
      body.set("name", form.name);
      body.set("email", form.email);
      body.set("message", form.message);

      const res = await fetch(endpoint, {
        method: "POST",
        body,
        headers: { Accept: "application/json" },
      });

      if (!res.ok) throw new Error("Bad response");

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <SectionShell id="contact" className="pb-28">
      <div className="flex flex-col gap-10">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
          <p className="text-xs font-semibold tracking-widest text-muted-foreground">
            {t.contact.kicker.toUpperCase()}
          </p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
            {t.contact.title}
          </h2>
          <p className="text-pretty text-muted-foreground">{t.contact.subtitle}</p>
          <p className="text-sm text-muted-foreground">
            {t.contact.preferEmail}{" "}
            <a
              className="font-medium underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              href={`mailto:${site.email}`}
            >
              {site.email}
            </a>
          </p>
        </div>

        {endpoint ? (
          <div className="mx-auto w-full max-w-3xl">
            <GradientCard innerClassName="p-6 sm:p-8">
              <form className="grid gap-5" onSubmit={onSubmit} noValidate>
                <div className="grid gap-2">
                  <Label htmlFor="name">{t.contact.form.name}</Label>
                  <Input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={onChange("name")}
                    placeholder={locale === "pl" ? "Jan Kowalski" : locale === "es" ? "Juan Pérez" : "John Doe"}
                    aria-invalid={Boolean(errors.name)}
                  />
                  {errors.name ? (
                    <p className="text-sm text-muted-foreground">{errors.name}</p>
                  ) : null}
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="email">{t.contact.form.email}</Label>
                  <Input
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={onChange("email")}
                    placeholder="name@example.com"
                    aria-invalid={Boolean(errors.email)}
                  />
                  {errors.email ? (
                    <p className="text-sm text-muted-foreground">{errors.email}</p>
                  ) : null}
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="message">{t.contact.form.message}</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={onChange("message")}
                    placeholder={
                      locale === "pl"
                        ? "Opisz krótko cel, termin i zakres."
                        : locale === "es"
                          ? "Describe brevemente el objetivo, plazo y alcance."
                          : "Briefly describe goals, timeline, and scope."
                    }
                    aria-invalid={Boolean(errors.message)}
                  />
                  {errors.message ? (
                    <p className="text-sm text-muted-foreground">
                      {errors.message}
                    </p>
                  ) : null}
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm text-muted-foreground">{t.contact.consent}</p>
                  <Button type="submit" disabled={status === "sending"}>
                    {status === "sending"
                      ? t.contact.form.sending
                      : t.contact.form.submit}
                  </Button>
                </div>

                <div className="text-sm text-muted-foreground" role="status">
                  {status === "success" ? t.contact.form.success : null}
                  {status === "error" ? t.contact.form.error : null}
                </div>
              </form>
            </GradientCard>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                className="inline-flex h-10 items-center justify-center gap-2 rounded-full border border-border bg-background/60 px-4 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                href={`mailto:${site.email}`}
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                {t.contact.mailLabel}
              </a>
              <a
                className="inline-flex h-10 items-center justify-center gap-2 rounded-full border border-border bg-background/60 px-4 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                href={site.socials.github.href}
                target="_blank"
                rel="noreferrer"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
                {site.socials.github.label}
              </a>
              <a
                className="inline-flex h-10 items-center justify-center gap-2 rounded-full border border-border bg-background/60 px-4 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                href={site.socials.linkedin.href}
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
                {site.socials.linkedin.label}
              </a>
            </div>
          </div>
        ) : (
          <div className="mx-auto w-full max-w-3xl">
            <GradientCard innerClassName="p-6 sm:p-8">
              <div className="flex flex-col gap-5">
                <div className="grid gap-2">
                  <p className="text-sm font-medium">{t.contact.mailLabel}</p>
                  <a
                    className="text-sm text-muted-foreground underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    href={`mailto:${site.email}`}
                  >
                    {site.email}
                  </a>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    className="inline-flex h-10 items-center justify-center gap-2 rounded-full border border-border bg-background/60 px-4 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    href={site.socials.github.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github className="h-4 w-4" aria-hidden="true" />
                    {site.socials.github.label}
                  </a>
                  <a
                    className="inline-flex h-10 items-center justify-center gap-2 rounded-full border border-border bg-background/60 px-4 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    href={site.socials.linkedin.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Linkedin className="h-4 w-4" aria-hidden="true" />
                    {site.socials.linkedin.label}
                  </a>
                </div>
              </div>
            </GradientCard>
          </div>
        )}
      </div>
    </SectionShell>
  );
}
