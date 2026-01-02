"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/cn";
import { site } from "@/content/site";
import { texts } from "@/content/texts";
import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import { Dropdown, DropdownItem } from "@/components/ui/dropdown";
import { MoonIcon, SunIcon } from "@/components/ui/icons";

const SECTION_IDS = ["home", "about", "projects", "contact"] as const;
type SectionId = (typeof SECTION_IDS)[number];

function scrollToId(id: SectionId) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  history.replaceState(null, "", `#${id}`);
}

export function Navbar() {
  const { locale, setLocale } = useLanguage();
  const t = texts[locale];

  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [active, setActive] = React.useState<SectionId>("home");

  React.useEffect(() => setMounted(true), []);

  React.useEffect(() => {
    const nodes = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      Boolean,
    ) as HTMLElement[];
    if (nodes.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));
        const top = visible[0];
        if (!top) return;
        const id = top.target.getAttribute("id") as SectionId | null;
        if (id) setActive(id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.1, 0.25] },
    );

    for (const n of nodes) observer.observe(n);
    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  function onNavClick(id: SectionId) {
    setMenuOpen(false);
    scrollToId(id);
  }

  const navItems: Array<{ id: SectionId; label: string }> = [
    { id: "home", label: t.nav.home },
    { id: "about", label: t.nav.about },
    { id: "projects", label: t.nav.projects },
    { id: "contact", label: t.nav.contact },
  ];

  const currentTheme = mounted ? (theme ?? "dark") : "dark";
  const themeIcon =
    currentTheme === "dark" ? (
      <MoonIcon title={t.controls.themeToDark} />
    ) : (
      <SunIcon title={t.controls.themeToLight} />
    );

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6">
        <a
          className="text-sm font-semibold tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            onNavClick("home");
          }}
        >
          {site.name}
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                onNavClick(item.id);
              }}
              className={cn(
                "rounded-full px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                active === item.id
                  ? "bg-muted text-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Dropdown
            align="end"
            trigger={({ buttonProps }) => (
              <button {...buttonProps} aria-label={t.controls.language}>
                {locale.toUpperCase()}
              </button>
            )}
          >
            {({ close }) => (
              <div className="grid gap-1">
                <DropdownItem
                  close={close}
                  onSelect={() => setLocale("pl")}
                  className={cn(locale === "pl" && "bg-muted")}
                >
                  PL
                </DropdownItem>
                <DropdownItem
                  close={close}
                  onSelect={() => setLocale("en")}
                  className={cn(locale === "en" && "bg-muted")}
                >
                  EN
                </DropdownItem>
              </div>
            )}
          </Dropdown>

          <Dropdown
            align="end"
            trigger={({ buttonProps }) => (
              <button {...buttonProps} aria-label={t.controls.theme}>
                {themeIcon}
              </button>
            )}
          >
            {({ close }) => (
              <div className="grid gap-1">
                <DropdownItem
                  close={close}
                  onSelect={() => setTheme("light")}
                  className={cn(currentTheme === "light" && "bg-muted")}
                  disabled={!mounted}
                  ariaLabel={t.controls.themeToLight}
                  title={t.controls.themeToLight}
                >
                  <SunIcon />
                </DropdownItem>
                <DropdownItem
                  close={close}
                  onSelect={() => setTheme("dark")}
                  className={cn(currentTheme === "dark" && "bg-muted")}
                  disabled={!mounted}
                  ariaLabel={t.controls.themeToDark}
                  title={t.controls.themeToDark}
                >
                  <MoonIcon />
                </DropdownItem>
              </div>
            )}
          </Dropdown>

          <Button
            variant="ghost"
            size="sm"
            type="button"
            className="md:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {t.controls.menu}
          </Button>
        </div>
      </div>

      {menuOpen ? (
        <div
          id="mobile-menu"
          className="border-t border-border bg-background/95 backdrop-blur md:hidden"
        >
          <div className="mx-auto flex w-full max-w-5xl flex-col gap-2 px-6 py-4">
            <div className="grid gap-1 pt-2">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavClick(item.id);
                  }}
                  className={cn(
                    "rounded-xl px-3 py-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                    active === item.id
                      ? "bg-muted text-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground",
                  )}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
