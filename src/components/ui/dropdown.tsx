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
  align = "end",
  trigger,
  children,
}: {
  align?: "start" | "end";
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
    },
  });

  return (
    <div className="relative">
      {triggerNode}
      {open ? (
        <div
          ref={setMenuEl}
          role="menu"
          className={cn(
            "absolute top-full mt-2 w-44 rounded-2xl border border-border bg-background/95 p-1 shadow-lg backdrop-blur",
            align === "end" ? "right-0" : "left-0",
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
}: {
  children: React.ReactNode;
  onSelect: () => void;
  close: () => void;
  className?: string;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      role="menuitem"
      disabled={disabled}
      onClick={() => {
        if (disabled) return;
        onSelect();
        close();
      }}
      className={cn(
        "flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-sm text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
    >
      {children}
    </button>
  );
}

