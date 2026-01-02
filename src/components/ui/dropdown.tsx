"use client";

import * as React from "react";
import { cn } from "@/lib/cn";

type TriggerRenderArgs = {
  open: boolean;
  buttonProps: React.ButtonHTMLAttributes<HTMLButtonElement> & {
    ref: (el: HTMLButtonElement | null) => void;
  };
};

type DropdownRenderArgs = {
  close: () => void;
};

export function Dropdown({
  className,
  align = "end",
  triggerClassName,
  menuClassName,
  trigger,
  children,
}: {
  className?: string;
  align?: "start" | "end";
  triggerClassName?: string;
  menuClassName?: string;
  trigger: (args: TriggerRenderArgs) => React.ReactNode;
  children: (args: DropdownRenderArgs) => React.ReactNode;
}) {
  const [open, setOpen] = React.useState(false);
  const [triggerEl, setTriggerEl] = React.useState<HTMLButtonElement | null>(
    null,
  );
  const [menuEl, setMenuEl] = React.useState<HTMLDivElement | null>(null);

  const close = React.useCallback(() => {
    setOpen(false);
    queueMicrotask(() => triggerEl?.focus());
  }, [triggerEl]);

  const toggle = React.useCallback(() => setOpen((v) => !v), []);

  React.useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };

    const onMouseDown = (e: MouseEvent) => {
      const target = e.target as Node | null;
      if (!target) return;
      if (triggerEl?.contains(target)) return;
      if (menuEl?.contains(target)) return;
      close();
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("mousedown", onMouseDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("mousedown", onMouseDown);
    };
  }, [close, menuEl, open, triggerEl]);

  const triggerNode = trigger({
    open,
    buttonProps: {
      ref: setTriggerEl,
      type: "button",
      "aria-haspopup": "menu",
      "aria-expanded": open,
      onClick: toggle,
      className: cn(
        "inline-flex h-9 w-full items-center justify-center rounded-xl border border-border bg-background/60 backdrop-blur transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:h-10",
        triggerClassName,
      ),
    },
  });

  return (
    <div className={cn("relative inline-block w-9 sm:w-10", className)}>
      {triggerNode}
      {open ? (
        <div
          ref={setMenuEl}
          role="menu"
          className={cn(
            "absolute top-full right-0 mt-2 w-full rounded-xl border border-border bg-background/95 p-1.5 shadow-lg backdrop-blur",
            align === "end" ? "right-0" : "left-0",
            menuClassName,
          )}
        >
          {children({ close })}
        </div>
      ) : null}
    </div>
  );
}

export function DropdownItem({
  children,
  onSelect,
  close,
  className,
  disabled,
  ariaLabel,
  title,
}: {
  children: React.ReactNode;
  onSelect: () => void;
  close: () => void;
  className?: string;
  disabled?: boolean;
  ariaLabel?: string;
  title?: string;
}) {
  return (
    <button
      type="button"
      role="menuitem"
      aria-label={ariaLabel}
      title={title}
      disabled={disabled}
      onClick={() => {
        if (disabled) return;
        onSelect();
        close();
      }}
      className={cn(
        "grid h-9 w-full place-items-center rounded-lg text-xs font-semibold text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 sm:h-10",
        className,
      )}
    >
      {children}
    </button>
  );
}
