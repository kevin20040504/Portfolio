import type { ReactNode } from "react";
import { container, cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={cn("border-t border-line/70 py-20 sm:py-28", className)}
    >
      <div className={container}>
        <Reveal>
          <header className="mb-12 max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
            <h2
              id={`${id}-title`}
              className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
            >
              {title}
            </h2>
            {description && (
              <div className="mt-4 leading-relaxed text-pretty text-muted">{description}</div>
            )}
          </header>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
