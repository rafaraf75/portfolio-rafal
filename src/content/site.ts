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
  email: "rafal@example.com",
  socials: {
    github: {
      label: "GitHub",
      href: "https://github.com/your-handle",
    },
    linkedin: {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/your-handle/",
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

