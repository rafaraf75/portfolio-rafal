import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/components/language-provider";
import type { Metadata } from "next";
import { site } from "@/content/site";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

function getCanonicalUrl(): string | undefined {
  const base = process.env.NEXT_PUBLIC_SITE_URL;
  if (!base) return undefined;
  const normalized = base.endsWith("/") ? base.slice(0, -1) : base;
  return normalized;
}

const canonical = getCanonicalUrl();

export const metadata: Metadata = {
  title: site.seo.title,
  description: site.seo.description,
  openGraph: {
    title: site.seo.title,
    description: site.seo.description,
    type: "website",
    url: canonical,
  },
  ...(canonical
    ? {
        metadataBase: new URL(canonical),
        alternates: { canonical },
      }
    : {}),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <body className="min-h-dvh bg-background text-foreground antialiased">
        <ThemeProvider>
          <LanguageProvider>
            <div className="flex min-h-dvh flex-col">
              <Navbar />
              <div className="flex-1">{children}</div>
              <Footer />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
