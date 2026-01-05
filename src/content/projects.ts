export type Project = {
  title: string;
  descriptionPL: string;
  descriptionEN: string;
  descriptionES: string;
  tech: string[];
  links: {
    source: string;
    demo?: string;
  };
};

export const projects: Project[] = [
  {
    title: "ai-site-mvp",
    descriptionPL:
      "Next.js starter produktu: dark mode, i18n, SEO i komponenty UI pod szybkie iteracje.",
    descriptionEN:
      "Next.js product starter: dark mode, i18n, SEO, and UI components for fast iteration.",
    descriptionES:
      "Starter de producto en Next.js: modo oscuro, i18n, SEO y componentes UI para iterar rápido.",
    tech: ["Next.js", "TypeScript", "SEO", "i18n", "next-themes"],
    links: {
      source: "https://github.com/rafaraf75/ai-site-mvp",
      demo: "https://raflabsite.vercel.app/pl",
    },
  },
  {
    title: "AutoFix",
    descriptionPL:
      "ASP.NET Core MVC dla warsztatu: klienci, zlecenia, historia napraw i panel administracyjny.",
    descriptionEN:
      "ASP.NET Core MVC workshop app: customers, work orders, repair history, and admin panel.",
    descriptionES:
      "App para taller en ASP.NET Core MVC: clientes, órdenes, historial de reparaciones y panel admin.",
    tech: ["ASP.NET Core", "MVC", "C#", "SQL"],
    links: {
      source: "https://github.com/rafaraf75/autofix",
    },
  },
  {
    title: "Agent AI",
    descriptionPL:
      "Lokalny generator postów z UI w przeglądarce, oparty o webhook (np. n8n) i konfigurację w `.env`.",
    descriptionEN:
      "Local browser UI post generator powered by a webhook (e.g. n8n) with `.env` configuration.",
    descriptionES:
      "Generador local de publicaciones con UI en el navegador, basado en webhook (p. ej. n8n) y configuración `.env`.",
    tech: ["Node.js", "n8n", "Webhooks", "HTML"],
    links: {
      source: "https://github.com/rafaraf75/agent-ai",
    },
  },
  {
    title: "blog-app",
    descriptionPL:
      "Aplikacja blogowa z nowoczesnym UI: wpisy, nawigacja i dopracowany layout pod publikację treści.",
    descriptionEN:
      "Blog application with a modern UI: posts, navigation, and a polished content-focused layout.",
    descriptionES:
      "Aplicación de blog con UI moderna: posts, navegación y un layout pulido para contenido.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
    links: {
      source: "https://github.com/rafaraf75/blog-app",
      demo: "https://blog-app-black-alpha.vercel.app/",
    },
  },
  {
    title: "BookApp",
    descriptionPL:
      "Aplikacja do zarządzania książkami: przegląd, szczegóły, szybka nawigacja i dopracowany UI.",
    descriptionEN:
      "Book management app: browsing, details, fast navigation, and a polished UI.",
    descriptionES:
      "App de gestión de libros: listado, detalles, navegación rápida y UI pulida.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
    links: {
      source: "https://github.com/rafaraf75/BookApp",
      demo: "https://book-app-ten-omega.vercel.app/",
    },
  },
  {
    title: "waiter-app",
    descriptionPL:
      "Aplikacja dla obsługi restauracji: workflow zamówień i czytelny panel do pracy w biegu.",
    descriptionEN:
      "Restaurant waiter app: order workflow and a clear dashboard for on-the-go work.",
    descriptionES:
      "App para camareros: flujo de pedidos y un panel claro para trabajar en movimiento.",
    tech: ["TypeScript", "React", "UI", "Workflow"],
    links: {
      source: "https://github.com/rafaraf75/waiter-app",
    },
  },
  {
    title: "GazDoDechy",
    descriptionPL:
      "Fullstack marketplace/community: ogłoszenia, profile, wyszukiwanie i panel użytkownika.",
    descriptionEN:
      "Fullstack marketplace/community: listings, profiles, search, and user dashboard.",
    descriptionES:
      "Marketplace/comunidad fullstack: anuncios, perfiles, búsqueda y panel de usuario.",
    tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind"],
    links: {
      source: "https://github.com/rafaraf75/GazDoDechy",
    },
  },
  {
    title: "NaSpontanie",
    descriptionPL:
      ".NET MAUI + ASP.NET Core REST API: aplikacja mobilna z backendem, auth i synchronizacją danych.",
    descriptionEN:
      ".NET MAUI + ASP.NET Core REST API: mobile app with backend, auth, and data sync.",
    descriptionES:
      ".NET MAUI + ASP.NET Core REST API: app móvil con backend, autenticación y sincronización.",
    tech: [".NET MAUI", "ASP.NET Core", "C#", "REST API"],
    links: {
      source: "https://github.com/rafaraf75/NaSpontanie",
    },
  },
];
