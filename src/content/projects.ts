export type Project = {
  title: string;
  descriptionPL: string;
  descriptionEN: string;
  tech: string[];
  links: {
    source: string;
    demo?: string;
  };
};

export const projects: Project[] = [
  {
    title: "GazDoDechy",
    descriptionPL:
      "Fullstack marketplace/community — ogłoszenia, profile, wyszukiwanie i nowoczesny panel użytkownika.",
    descriptionEN:
      "Fullstack marketplace/community — listings, profiles, search, and a modern user dashboard.",
    tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind"],
    links: {
      source: "https://github.com/your-handle/gazdodechy",
      demo: "https://example.com",
    },
  },
  {
    title: "NaSpontanie",
    descriptionPL:
      ".NET MAUI + ASP.NET Core REST API — aplikacja mobilna z backendem, uwierzytelnianiem i synchronizacją danych.",
    descriptionEN:
      ".NET MAUI + ASP.NET Core REST API — mobile app with backend, auth, and data sync.",
    tech: [".NET MAUI", "ASP.NET Core", "C#", "REST API"],
    links: {
      source: "https://github.com/your-handle/naspontanie",
    },
  },
  {
    title: "AutoFix",
    descriptionPL:
      "ASP.NET Core MVC dla warsztatu — zarządzanie zleceniami, klientami i historią napraw.",
    descriptionEN:
      "ASP.NET Core MVC for a workshop — managing orders, customers, and repair history.",
    tech: ["ASP.NET Core", "MVC", "C#", "SQL"],
    links: {
      source: "https://github.com/your-handle/autofix",
    },
  },
  {
    title: "ai-site-mvp",
    descriptionPL:
      "Dopieszczony Next.js: dark mode, i18n, SEO i komponenty UI pod szybkie iteracje produktu.",
    descriptionEN:
      "Polished Next.js: dark mode, i18n, SEO, and UI components for fast product iteration.",
    tech: ["Next.js", "TypeScript", "SEO", "next-themes"],
    links: {
      source: "https://github.com/your-handle/ai-site-mvp",
      demo: "https://example.com",
    },
  },
  {
    title: "kurs-hiszpanskiego-ai",
    descriptionPL:
      "AI edukacja — generator ćwiczeń i materiałów do nauki języka, z naciskiem na prosty UX.",
    descriptionEN:
      "AI education — exercise/material generator for language learning with a simple UX.",
    tech: ["Next.js", "OpenAI API", "TypeScript"],
    links: {
      source: "https://github.com/your-handle/kurs-hiszpanskiego-ai",
    },
  },
];

