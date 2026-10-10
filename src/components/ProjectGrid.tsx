"use client";

import { useState } from "react";
import type { ProjectCategory, ResolvedProject } from "@/data/types";
import { cn } from "@/lib/utils";
import { ProjectCard } from "./ProjectCard";

type Filter = "All" | ProjectCategory;

export function ProjectGrid({
  projects,
  filters,
}: {
  projects: ResolvedProject[];
  filters: ProjectCategory[];
}) {
  const [filter, setFilter] = useState<Filter>("All");
  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  const options: { value: Filter; label: string; count: number }[] = [
    { value: "All", label: "All Projects", count: projects.length },
    ...filters.map((category) => ({
      value: category,
      label: category,
      count: projects.filter((p) => p.category === category).length,
    })),
  ];

  return (
    <>
      <div role="group" aria-label="Filter projects by category" className="mb-8 flex flex-wrap gap-2">
        {options.map((option) => {
          const selected = filter === option.value;
          return (
            <button
              key={option.value}
              type="button"
              aria-pressed={selected}
              onClick={() => setFilter(option.value)}
              className={cn(
                "inline-flex h-9 items-center gap-2 rounded-full border px-4 text-sm transition-colors",
                selected
                  ? "border-accent/50 bg-accent/10 text-fg"
                  : "border-line bg-surface text-muted hover:border-line-strong hover:text-fg",
              )}
            >
              {option.label}
              <span className={cn("font-mono text-xs", selected ? "text-accent" : "text-subtle")}>
                {option.count}
              </span>
            </button>
          );
        })}
      </div>

      <p className="sr-only" aria-live="polite">
        Showing {visible.length} {visible.length === 1 ? "project" : "projects"}
      </p>

      {visible.length > 0 ? (
        <ul className="grid gap-6 md:grid-cols-2">
          {visible.map((project, i) => (
            <li key={project.slug}>
              <ProjectCard project={project} priority={i < 2} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="rounded-2xl border border-dashed border-line-strong p-10 text-center text-muted">
          No projects in this category yet.
        </p>
      )}
    </>
  );
}
