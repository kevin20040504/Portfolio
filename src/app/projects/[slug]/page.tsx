import { ArrowLeft, ArrowRight, CheckCircle2, CircleDashed, ExternalLink, Loader } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { GitHubIcon } from "@/components/BrandIcons";
import { PlaceholderNote } from "@/components/PlaceholderNote";
import { ProjectGallery } from "@/components/ProjectGallery";
import { StatusBadge } from "@/components/StatusBadge";
import { TechTags } from "@/components/TechTags";
import { projects, site } from "@/data/portfolio";
import type { FeatureState, ProjectFeature } from "@/data/types";
import { resolveProject } from "@/lib/assets";
import { button, cn, container, isPlaceholder, isRealLink } from "@/lib/utils";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.title} | ${site.shortName}`,
      description: project.summary,
      url: `/projects/${project.slug}`,
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const project = resolveProject(projects[index]);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  const { github, demo } = project.links;
  const hasGithub = isRealLink(github);
  const hasDemo = isRealLink(demo);

  return (
    <article className="pb-24">
      {/* Header */}
      <header className="relative overflow-hidden border-b border-line/70">
        <div
          aria-hidden="true"
          className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_0%,black,transparent)]"
        />
        <div className={cn(container, "relative pt-10 pb-14 sm:pt-14")}>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-fg"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            All projects
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <StatusBadge status={project.status} />
            <span className="font-mono text-xs text-subtle">
              {project.category} · {project.year}
            </span>
          </div>
          <h1 className="mt-4 max-w-4xl text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
            {project.title}
          </h1>
          {project.fullTitle && project.fullTitle !== project.title && (
            <p className="mt-3 max-w-3xl text-muted">{project.fullTitle}</p>
          )}
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-pretty text-muted">{project.summary}</p>

          {(hasGithub || hasDemo) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {hasDemo && (
                <a href={demo} target="_blank" rel="noopener noreferrer" className={button.primary}>
                  <ExternalLink aria-hidden="true" />
                  Live demo
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              )}
              {hasGithub && (
                <a href={github} target="_blank" rel="noopener noreferrer" className={button.secondary}>
                  <GitHubIcon />
                  Source code
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              )}
            </div>
          )}
        </div>
      </header>

      {/* Screenshots */}
      <div className={cn(container, "pt-12")}>
        <h2 className="sr-only">Screenshots</h2>
        <ProjectGallery images={project.screenshots} title={project.title} />
      </div>

      {/* Details */}
      <div className={cn(container, "mt-16 grid gap-12 lg:grid-cols-[1fr_300px] lg:gap-16")}>
        <div className="min-w-0 space-y-14">
          <Block title="Overview">
            <TextOrNote value={project.overview} />
          </Block>

          <Block title="The problem">
            <TextOrNote value={project.problem} />
          </Block>

          <ListBlock title="Objectives" items={project.objectives} />

          <FeaturesBlock features={project.features} />

          <ListBlock title="My role and contributions" items={project.role} />

          <ParagraphBlock title="Technical implementation" items={project.implementation} />

          <ChallengesBlock challenges={project.challenges} />

          <ListBlock title="Key takeaways" items={project.takeaways} />
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl border border-line bg-surface p-6">
            <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-subtle">Project details</h2>
            <dl className="mt-5 space-y-4 text-sm">
              <Fact label="Context">{project.context}</Fact>
              <Fact label="Year">{project.year}</Fact>
              <Fact label="Category">{project.category}</Fact>
              <Fact label="Status">{project.status}</Fact>
              <Fact label="Technologies">
                <TechTags items={project.technologies} className="mt-1" />
              </Fact>
              <Fact label="Links">
                {hasGithub || hasDemo ? (
                  <span className="flex flex-col gap-1.5">
                    {hasDemo && <SideLink href={demo}>Live demo</SideLink>}
                    {hasGithub && <SideLink href={github}>GitHub repository</SideLink>}
                  </span>
                ) : (
                  <span className="text-subtle">No public repository or demo</span>
                )}
              </Fact>
            </dl>
          </div>
        </aside>
      </div>

      {/* Previous / next */}
      {projects.length > 1 && (
        <nav aria-label="More projects" className={cn(container, "mt-20")}>
          <div className="grid gap-4 border-t border-line/70 pt-10 sm:grid-cols-2">
            <Link
              href={`/projects/${prev.slug}`}
              className="group rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-line-strong"
            >
              <span className="inline-flex items-center gap-1.5 text-xs text-subtle">
                <ArrowLeft className="size-3.5" aria-hidden="true" /> Previous project
              </span>
              <span className="mt-1 block font-medium group-hover:text-accent">{prev.title}</span>
            </Link>
            <Link
              href={`/projects/${next.slug}`}
              className="group rounded-2xl border border-line bg-surface p-5 text-right transition-colors hover:border-line-strong"
            >
              <span className="inline-flex items-center gap-1.5 text-xs text-subtle">
                Next project <ArrowRight className="size-3.5" aria-hidden="true" />
              </span>
              <span className="mt-1 block font-medium group-hover:text-accent">{next.title}</span>
            </Link>
          </div>
        </nav>
      )}
    </article>
  );
}

/* ---------- Helpers: hide placeholder ("TODO") content unless site.showPlaceholders is on ---------- */

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function TextOrNote({ value }: { value: string }) {
  if (isPlaceholder(value)) return site.showPlaceholders ? <PlaceholderNote text={value} /> : null;
  return <p className="leading-relaxed text-pretty text-muted">{value}</p>;
}

/** Splits a list into real items and "TODO" notes. Returns null when there's nothing to show. */
function splitItems(items: string[]) {
  const real = items.filter((item) => !isPlaceholder(item));
  const todos = site.showPlaceholders ? items.filter((item) => isPlaceholder(item)) : [];
  return { real, todos, empty: real.length === 0 && todos.length === 0 };
}

function Notes({ items }: { items: string[] }) {
  if (items.length === 0) return null;
  return (
    <div className="mt-4 space-y-2">
      {items.map((t) => (
        <PlaceholderNote key={t} text={t} />
      ))}
    </div>
  );
}

function ListBlock({ title, items }: { title: string; items: string[] }) {
  const { real, todos, empty } = splitItems(items);
  if (empty) return null;
  return (
    <Block title={title}>
      {real.length > 0 && (
        <ul className="space-y-3">
          {real.map((item) => (
            <li key={item} className="flex gap-3 leading-relaxed text-muted">
              <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      )}
      <Notes items={todos} />
    </Block>
  );
}

function ParagraphBlock({ title, items }: { title: string; items: string[] }) {
  const { real, todos, empty } = splitItems(items);
  if (empty) return null;
  return (
    <Block title={title}>
      <div className="space-y-4">
        {real.map((p) => (
          <p key={p} className="leading-relaxed text-pretty text-muted">
            {p}
          </p>
        ))}
      </div>
      <Notes items={todos} />
    </Block>
  );
}

const featureGroups: { state: FeatureState; label: string; Icon: typeof CheckCircle2; tone: string }[] = [
  { state: "implemented", label: "Implemented", Icon: CheckCircle2, tone: "text-emerald-400" },
  { state: "in-progress", label: "In progress", Icon: Loader, tone: "text-amber-400" },
  { state: "planned", label: "Planned", Icon: CircleDashed, tone: "text-subtle" },
];

function FeaturesBlock({ features }: { features: ProjectFeature[] }) {
  if (features.length === 0) {
    return site.showPlaceholders ? (
      <Block title="Features and functionality">
        <PlaceholderNote text="List the project's features in src/data/portfolio.ts and mark each as implemented, in-progress, or planned." />
      </Block>
    ) : null;
  }
  const onlyPlanned = features.every((f) => f.state === "planned");
  return (
    <Block title={onlyPlanned ? "Planned features" : "Features and functionality"}>
      {onlyPlanned && (
        <p className="mb-5 text-sm text-subtle">
          These features are planned and not built yet. This page will be updated as development progresses.
        </p>
      )}
      <div className="space-y-6">
        {featureGroups.map(({ state, label, Icon, tone }) => {
          const group = features.filter((f) => f.state === state);
          if (group.length === 0) return null;
          return (
            <div key={state}>
              <h3 className={cn("inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.15em]", tone)}>
                <Icon className="size-3.5" aria-hidden="true" />
                {label}
              </h3>
              <ul className="mt-3 grid gap-3 sm:grid-cols-2">
                {group.map((feature) => (
                  <li key={feature.name} className="rounded-xl border border-line bg-surface p-4">
                    <p className="font-medium">{feature.name}</p>
                    {feature.description && (
                      <p className="mt-1 text-sm leading-relaxed text-muted">{feature.description}</p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </Block>
  );
}

function ChallengesBlock({ challenges }: { challenges: { challenge: string; approach: string }[] }) {
  if (challenges.length === 0) {
    return site.showPlaceholders ? (
      <Block title="Challenges and how I addressed them">
        <PlaceholderNote text="Add real challenges you faced and how you solved them." />
      </Block>
    ) : null;
  }
  return (
    <Block title="Challenges and how I addressed them">
      <ul className="space-y-4">
        {challenges.map((item) => (
          <li key={item.challenge} className="rounded-xl border border-line bg-surface p-5">
            <p className="text-xs font-medium tracking-wide text-subtle uppercase">Challenge</p>
            <p className="mt-1 text-fg">{item.challenge}</p>
            <p className="mt-4 text-xs font-medium tracking-wide text-accent uppercase">Approach</p>
            <p className="mt-1 leading-relaxed text-muted">{item.approach}</p>
          </li>
        ))}
      </ul>
    </Block>
  );
}

function Fact({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <dt className="text-xs text-subtle">{label}</dt>
      <dd className="mt-1 text-fg">{children}</dd>
    </div>
  );
}

function SideLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-accent hover:text-accent-hover"
    >
      {children}
      <ExternalLink className="size-3.5" aria-hidden="true" />
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  );
}
