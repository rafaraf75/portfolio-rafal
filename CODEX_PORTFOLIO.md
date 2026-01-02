# CODEX_PORTFOLIO.md — Zadanie dla Codex (bez YAML)

Zbuduj portfolio (single-page) w Next.js App Router + TS + Tailwind.
UI ma być możliwie podobne do wzoru SilverStorm2/portfolio (sekcje, spacing, cards),
ale w tym repo (osobne) z własnymi treściami.

## Wymagania funkcjonalne
1) Sekcje: Home(Hero), About, Projects, Contact
2) PL/EN toggle w navbarze (cała strona tłumaczona)
3) Dark mode:
   - domyślnie włączony (dark)
   - toggle w navbarze
   - użyj `next-themes`, `attribute="class"`, `defaultTheme="dark"`, `enableSystem={false}`
   - Tailwind `darkMode: "class"`

## Content (Twoje dane)
- Name: Rafał Łabuński
- Role: Fullstack Developer / Software Engineer
- Skills (tagi): React, Next.js, TypeScript, Node.js, Express, Supabase, PostgreSQL/MySQL, C#, .NET, REST API, Tailwind, Git, Cloudinary, OpenAI API

### Hero — copy
PL:
- “Buduję aplikacje webowe i mobilne: React/Next.js, Node/Express oraz .NET. Skupiam się na realnych produktach i dopracowanym UX.”
EN:
- “I build web and mobile apps with React/Next.js, Node/Express, and .NET. I focus on real-world products with clean UX.”

CTA:
- PL: “Zobacz projekty”, “Kontakt”
- EN: “View projects”, “Get in touch”

## Projekty do sekcji Projects (bez YAML)
Dane trzymaj w `src/content/projects.ts` jako tablica obiektów.
Każdy obiekt: `title`, `descriptionPL`, `descriptionEN`, `tech[]`, `links.source`, `links.demo?`.
Jeśli `demo` brak → nie renderuj przycisku demo.

Lista:
1) GazDoDechy — fullstack marketplace/community  
   source: (wstaw link do repo)  
   demo: (wstaw link jeśli jest)
2) NaSpontanie — .NET MAUI + ASP.NET Core REST API  
   source: (wstaw link do repo)  
   demo: (opcjonalnie)
3) AutoFix — ASP.NET Core MVC dla warsztatu  
   source: (wstaw link do repo)  
   demo: (opcjonalnie)
4) ai-site-mvp — dopieszczony Next.js (dark mode, i18n, SEO)  
   source: (wstaw link do repo)  
   demo: (wstaw link jeśli jest)
5) kurs-hiszpanskiego-ai — AI edukacja  
   source: (wstaw link do repo)  
   demo: brak na start OK (ukryj przycisk)

## Contact
- Jeśli `NEXT_PUBLIC_FORMSPREE_ENDPOINT` ustawione → pokaż formularz i wysyłaj do Formspree
- Jeśli nie → pokaż kontakt przez mailto + GitHub + LinkedIn
- Zadbaj o a11y: labelki, focus, komunikaty.

## Struktura plików (docelowa)
- `src/app/page.tsx` — składa sekcje
- `src/components/sections/*` — Hero/About/Projects/Contact
- `src/components/ui/*` — małe komponenty (Button, Card, Tag)
- `src/content/site.ts` — name/role/social/seo
- `src/content/texts.ts` — PL/EN copy
- `src/content/projects.ts` — projekty

## Definition of Done
- działa `yarn dev` i build
- PL/EN działa globalnie
- dark mode domyślnie dark + toggle
- 5 kart projektów, brak demo nie psuje UI
- brak sekretów w repo (ENV tylko w `.env.local` / Vercel env)
