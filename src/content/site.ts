export type SocialLink = {
  label: string;
  href: string;
};

export type SiteSeo = {
  title: string;
  description: string;
};

export const site = {
  name: "Rafał Łabuński",
  role: "Fullstack Developer / Software Engineer",
  email: "rafallabunski@gmail.com",
  socials: {
    github: {
      label: "GitHub",
      href: "https://github.com/rafaraf75",
    },
    linkedin: {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/rafa%C5%82-%C5%82abu%C5%84ski-300324206/",
    },
  } satisfies Record<string, SocialLink>,
  seo: {
    title: "Rafał Łabuński — Portfolio",
    description:
      "Portfolio: projekty, technologie i kontakt. React/Next.js, Node/Express oraz .NET.",
  } satisfies SiteSeo,
  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express",
    "Supabase",
    "PostgreSQL/MySQL",
    "C#",
    ".NET",
    "REST API",
    "Tailwind",
    "Git",
    "Cloudinary",
    "OpenAI API",
  ],
} as const;

