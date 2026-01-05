export type Locale = "pl" | "en" | "es";

export type Texts = {
  nav: {
    home: string;
    about: string;
    projects: string;
    contact: string;
  };
  controls: {
    menu: string;
    language: string;
    theme: string;
    themeToLight: string;
    themeToDark: string;
  };
  hero: {
    hello: string;
    lead: string;
    ctaProjects: string;
    ctaContact: string;
  };
  about: {
    title: string;
    skillsTitle: string;
    p1: string;
    p2: string;
    cards: Array<{
      title: string;
      body: string;
    }>;
  };
  projects: {
    title: string;
    subtitle: string;
    demo: string;
    source: string;
  };
  contact: {
    title: string;
    subtitle: string;
    mailLabel: string;
    form: {
      name: string;
      email: string;
      message: string;
      submit: string;
      sending: string;
      success: string;
      error: string;
      required: string;
      invalidEmail: string;
    };
  };
  footer: {
    note: string;
  };
};

export const texts: Record<Locale, Texts> = {
  pl: {
    nav: {
      home: "Start",
      about: "O mnie",
      projects: "Projekty",
      contact: "Kontakt",
    },
    controls: {
      menu: "Menu",
      language: "Język",
      theme: "Motyw",
      themeToLight: "Jasny",
      themeToDark: "Ciemny",
    },
    hero: {
      hello: "Cześć, jestem",
      lead: "Buduję aplikacje webowe i mobilne: React/Next.js, Node/Express oraz .NET. Skupiam się na realnych produktach i dopracowanym UX.",
      ctaProjects: "Zobacz projekty",
      ctaContact: "Kontakt",
    },
    about: {
      title: "O mnie",
      skillsTitle: "Technologie",
      p1: "Tworzę aplikacje end‑to‑end: od UI, przez API, po bazę danych i wdrożenie. Lubię pracę nad produktem, gdzie liczą się detale, wydajność i czytelny kod.",
      p2: "Najczęściej pracuję z React/Next.js, TypeScript, Node/Express i .NET. Dbam o UX, dostępność (a11y) i SEO, a także o stabilne integracje z usługami zewnętrznymi.",
      cards: [
        {
          title: "UI",
          body: "React/Next.js, Tailwind, komponenty, dostępność i responsywność.",
        },
        {
          title: "API & Backend",
          body: "REST API, Node/Express i .NET, integracje, auth i dobre praktyki.",
        },
      ],
    },
    projects: {
      title: "Projekty",
      subtitle:
        "Wybrane realizacje — opis, technologie i linki do repozytorium (oraz demo, jeśli dostępne).",
      demo: "Demo",
      source: "Source",
    },
    contact: {
      title: "Kontakt",
      subtitle:
        "Masz pomysł lub chcesz współpracować? Napisz — odpowiem możliwie szybko.",
      mailLabel: "Email",
      form: {
        name: "Imię",
        email: "Email",
        message: "Wiadomość",
        submit: "Wyślij",
        sending: "Wysyłanie…",
        success: "Dzięki! Wiadomość została wysłana.",
        error: "Coś poszło nie tak. Spróbuj ponownie lub napisz maila.",
        required: "To pole jest wymagane.",
        invalidEmail: "Podaj poprawny adres email.",
      },
    },
    footer: {
      note: "Zbudowane w Next.js + Tailwind.",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact",
    },
    controls: {
      menu: "Menu",
      language: "Language",
      theme: "Theme",
      themeToLight: "Light",
      themeToDark: "Dark",
    },
    hero: {
      hello: "Hello, I'm",
      lead: "I build web and mobile apps with React/Next.js, Node/Express, and .NET. I focus on real-world products with clean UX.",
      ctaProjects: "View projects",
      ctaContact: "Get in touch",
    },
    about: {
      title: "About",
      skillsTitle: "Core skills",
      p1: "I build end‑to‑end applications: UI, APIs, databases, and deployments. I enjoy product work where details, performance, and readable code matter.",
      p2: "Most often I work with React/Next.js, TypeScript, Node/Express, and .NET. I care about UX, accessibility, SEO, and stable integrations with external services.",
      cards: [
        {
          title: "UI",
          body: "React/Next.js, Tailwind, components, accessibility, and responsive layouts.",
        },
        {
          title: "API & Backend",
          body: "REST APIs, Node/Express and .NET, integrations, auth, and best practices.",
        },
      ],
    },
    projects: {
      title: "Projects",
      subtitle:
        "Selected work — description, tech stack, and links to source (and demo when available).",
      demo: "Demo",
      source: "Source",
    },
    contact: {
      title: "Contact",
      subtitle:
        "Have an idea or want to work together? Send a message — I’ll reply soon.",
      mailLabel: "Email",
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        submit: "Send message",
        sending: "Sending…",
        success: "Thanks! Your message has been sent.",
        error: "Something went wrong. Try again or email me directly.",
        required: "This field is required.",
        invalidEmail: "Please enter a valid email address.",
      },
    },
    footer: {
      note: "Built with Next.js + Tailwind.",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      projects: "Proyectos",
      contact: "Contacto",
    },
    controls: {
      menu: "Menú",
      language: "Idioma",
      theme: "Tema",
      themeToLight: "Claro",
      themeToDark: "Oscuro",
    },
    hero: {
      hello: "Hola, soy",
      lead: "Construyo aplicaciones web y móviles con React/Next.js, Node/Express y .NET. Me enfoco en productos reales con una UX limpia.",
      ctaProjects: "Ver proyectos",
      ctaContact: "Contactar",
    },
    about: {
      title: "Sobre mí",
      skillsTitle: "Tecnologías",
      p1: "Creo aplicaciones end‑to‑end: desde la interfaz, pasando por la API, hasta la base de datos y el despliegue. Me gusta el trabajo de producto donde importan los detalles, el rendimiento y un código claro.",
      p2: "Trabajo principalmente con React/Next.js, TypeScript, Node/Express y .NET. Cuido la UX, la accesibilidad (a11y), el SEO y las integraciones estables con servicios externos.",
      cards: [
        {
          title: "UI",
          body: "React/Next.js, Tailwind, componentes, accesibilidad y diseño responsive.",
        },
        {
          title: "API & Backend",
          body: "REST API, Node/Express y .NET, integraciones, autenticación y buenas prácticas.",
        },
      ],
    },
    projects: {
      title: "Proyectos",
      subtitle:
        "Trabajos seleccionados — descripción, tecnologías y enlaces al código (y demo cuando esté disponible).",
      demo: "Demo",
      source: "Código",
    },
    contact: {
      title: "Contacto",
      subtitle:
        "¿Tienes una idea o quieres colaborar? Escríbeme — responderé lo antes posible.",
      mailLabel: "Email",
      form: {
        name: "Nombre",
        email: "Email",
        message: "Mensaje",
        submit: "Enviar",
        sending: "Enviando…",
        success: "¡Gracias! Tu mensaje fue enviado.",
        error:
          "Algo salió mal. Inténtalo de nuevo o escríbeme por correo directamente.",
        required: "Este campo es obligatorio.",
        invalidEmail: "Introduce un email válido.",
      },
    },
    footer: {
      note: "Hecho con Next.js + Tailwind.",
    },
  },
};

