import * as React from "react";
import { cn } from "@/lib/cn";

export function Card({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/40",
        className,
      )}
      {...props}
    />
  );
}

