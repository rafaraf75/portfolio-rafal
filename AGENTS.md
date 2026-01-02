# AGENTS.md — Portfolio Rafał Łabuński

Cel: zbudować portfolio w Next.js + TS + Tailwind, z układem podobnym do wzoru (sekcje, karty projektów, typografia),
ale jako osobne repo i z Twoimi danymi. Bez YAML — dane w TypeScript `src/content`.

## Agent 0 — Repo & Tooling
- Next.js App Router + TypeScript + Tailwind
- Struktura katalogów w `src/`
- Skrypty: dev/build/lint
- Git init i gotowość do Vercel

## Agent 1 — Layout & Navigation
- Navbar + Footer, sticky nav
- Sekcje: Home / About / Projects / Contact
- Scroll do anchorów, aktywny link
- Mobile menu

## Agent 2 — Theme (Dark mode)
- Dark mode jako domyślny
- `next-themes`, `darkMode: "class"` (Tailwind)
- Toggle w navbarze + zapis preferencji

## Agent 3 — Content + i18n (PL/EN)
- Treści w `src/content` jako TS (bez YAML)
- Przełącznik języka w navbarze
- Pełne tłumaczenia: Hero/About/Projects/Contact

## Agent 4 — Projects
- Grid kart projektów (responsywny)
- Karta: tytuł, opis, tech tagi, linki Demo/Source
- Jeśli brak demo → ukryj przycisk “Demo”

## Agent 5 — Contact
- Formularz (opcjonalnie Formspree) lub fallback mailto
- Walidacja + komunikaty sukces/błąd
- Social linki (GitHub/LinkedIn)

## Agent 6 — SEO & Polish
- title/description + OG, favicon
- canonical z `NEXT_PUBLIC_SITE_URL`
- Lighthouse sensownie wysoko (a11y/seo)
