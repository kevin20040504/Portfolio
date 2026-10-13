import { ArrowUpRight, Images } from "lucide-react";
import Link from "next/link";
import type { ResolvedProject } from "@/data/types";
import { SafeImage } from "./SafeImage";
import { StatusBadge } from "./StatusBadge";
import { TechTags } from "./TechTags";

export function ProjectCard({ project, priority }: { project: ResolvedProject; priority?: boolean }) {
  const shots = project.screenshots.filter((s) => s.available).length;

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-colors duration-300 hover:border-line-strong">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-elevated">
        <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.03]">
          <SafeImage
            src={project.cover.src}
            alt={project.cover.alt ?? project.cover.caption}
            available={project.cover.available}
            sizes="(min-width: 1024px) 560px, (min-width: 768px) 50vw, 100vw"
            className="object-cover object-top"
            priority={priority}
          />
        </div>
        {/* Dark backing keeps the badge readable over bright screenshots. */}
        <span className="absolute top-3 left-3 rounded-full bg-canvas/90">
          <StatusBadge status={project.status} />
        </span>
        {shots > 0 && (
          <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 rounded-full border border-line-strong bg-canvas/90 px-2.5 py-1 text-xs text-muted backdrop-blur-sm">
            <Images className="size-3.5" aria-hidden="true" />
            {shots}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="font-mono text-xs text-subtle">
          {project.category} · {project.year}
        </p>
        <h3 className="mt-2 text-xl font-semibold tracking-tight text-balance">
          <Link href={`/projects/${project.slug}`} className="after:absolute after:inset-0">
            {project.title}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-pretty text-muted">{project.summary}</p>
        <TechTags items={project.technologies} max={5} className="mt-5" />
        <p className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
          View project details
          <ArrowUpRight
            className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </p>
      </div>
    </article>
  );
}
