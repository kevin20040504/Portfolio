import type { ProjectStatus } from "@/data/types";

export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

/** Text starting with "TODO" (or empty) is a placeholder, not real content. */
export function isPlaceholder(value?: string | null): boolean {
  return !value || value.trim() === "" || value.trim().toUpperCase().startsWith("TODO");
}

/** Strips the "TODO:" prefix so the hint reads naturally in a placeholder note. */
export function placeholderHint(value: string): string {
  return value.replace(/^\s*TODO:?\s*/i, "");
}

export function isRealLink(url?: string): url is string {
  return Boolean(url && /^(https?:|mailto:)/i.test(url.trim()));
}

export const container = "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8";

const btnBase =
  "inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-medium transition-colors duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0";

export const button = {
  primary: cn(btnBase, "bg-accent text-canvas hover:bg-accent-hover"),
  secondary: cn(btnBase, "border border-line-strong bg-surface text-fg hover:border-subtle hover:bg-elevated"),
  ghost: cn(btnBase, "px-3 text-muted hover:text-fg"),
};

export const statusStyles: Record<ProjectStatus, string> = {
  Completed: "border-emerald-400/25 bg-emerald-400/10 text-emerald-300",
  "In Progress": "border-amber-400/25 bg-amber-400/10 text-amber-300",
  "Academic Project": "border-sky-400/25 bg-sky-400/10 text-sky-300",
  "Capstone Project": "border-violet-400/25 bg-violet-400/10 text-violet-300",
};
