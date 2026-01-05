import * as React from "react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

export function GradientCard({
  className,
  innerClassName,
  children,
}: {
  className?: string;
  innerClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-gradient-to-b from-foreground/20 via-border to-transparent p-px",
        className,
      )}
    >
      <Card
        className={cn(
          "rounded-2xl bg-card/70 backdrop-blur supports-[backdrop-filter]:bg-card/60",
          innerClassName,
        )}
      >
        {children}
      </Card>
    </div>
  );
}

