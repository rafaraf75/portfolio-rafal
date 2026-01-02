import * as React from "react";
import { cn } from "@/lib/cn";

export function Tag({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-muted px-2.5 py-1 text-xs font-medium text-foreground/90",
        className,
      )}
      {...props}
    />
  );
}

