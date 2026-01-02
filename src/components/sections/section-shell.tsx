import * as React from "react";
import { cn } from "@/lib/cn";

export function SectionShell({
  id,
  className,
  children,
}: {
  id: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn("scroll-mt-24 py-20", className)}>
      <div className="mx-auto w-full max-w-5xl px-6">{children}</div>
    </section>
  );
}

