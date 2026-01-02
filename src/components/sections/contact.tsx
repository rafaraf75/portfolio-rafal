"use client";

import * as React from "react";
import { useLanguage } from "@/components/language-provider";
import { texts } from "@/content/texts";
import { site } from "@/content/site";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionShell } from "@/components/sections/section-shell";

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
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {t.contact.title}
          </h2>
          <p className="max-w-3xl text-muted-foreground">{t.contact.subtitle}</p>
        </div>

        {endpoint ? (
          <Card className="p-6">
            <form className="grid gap-4" onSubmit={onSubmit} noValidate>
              <div className="grid gap-2">
                <label className="text-sm font-medium" htmlFor="name">
                  {t.contact.form.name}
                </label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={onChange("name")}
                  className="h-12 rounded-xl border border-border bg-background px-4 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  aria-invalid={Boolean(errors.name)}
                />
                {errors.name ? (
                  <p className="text-sm text-muted-foreground">{errors.name}</p>
                ) : null}
              </div>

              <div className="grid gap-2">
                <label className="text-sm font-medium" htmlFor="email">
                  {t.contact.form.email}
                </label>
                <input
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={onChange("email")}
                  className="h-12 rounded-xl border border-border bg-background px-4 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  aria-invalid={Boolean(errors.email)}
                />
                {errors.email ? (
                  <p className="text-sm text-muted-foreground">{errors.email}</p>
                ) : null}
              </div>

              <div className="grid gap-2">
                <label className="text-sm font-medium" htmlFor="message">
                  {t.contact.form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={onChange("message")}
                  className="min-h-32 resize-y rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  aria-invalid={Boolean(errors.message)}
                />
                {errors.message ? (
                  <p className="text-sm text-muted-foreground">
                    {errors.message}
                  </p>
                ) : null}
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <Button type="submit" disabled={status === "sending"}>
                  {status === "sending"
                    ? t.contact.form.sending
                    : t.contact.form.submit}
                </Button>
                <div className="text-sm text-muted-foreground" role="status">
                  {status === "success" ? t.contact.form.success : null}
                  {status === "error" ? t.contact.form.error : null}
                </div>
              </div>
            </form>
          </Card>
        ) : (
          <Card className="p-6">
            <div className="flex flex-col gap-4">
              <div className="grid gap-1">
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
                  className="inline-flex h-10 items-center justify-center rounded-full border border-border bg-background px-4 text-sm font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  href={site.socials.github.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {site.socials.github.label}
                </a>
                <a
                  className="inline-flex h-10 items-center justify-center rounded-full border border-border bg-background px-4 text-sm font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  href={site.socials.linkedin.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {site.socials.linkedin.label}
                </a>
              </div>
            </div>
          </Card>
        )}
      </div>
    </SectionShell>
  );
}

