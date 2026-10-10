import { ArrowRight, Briefcase, GraduationCap, HeartHandshake, Trophy, Users } from "lucide-react";
import { experience, site } from "@/data/portfolio";
import type { ExperienceType } from "@/data/types";
import { isPlaceholder } from "@/lib/utils";
import { PlaceholderNote } from "./PlaceholderNote";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

const typeIcons: Record<ExperienceType, typeof Briefcase> = {
  Leadership: Trophy,
  "Academic Collaboration": Users,
  Internship: GraduationCap,
  "Work Experience": Briefcase,
  Volunteer: HeartHandshake,
};

export function Experience() {
  const hasIndustryExperience = experience.some(
    (item) => item.type === "Internship" || item.type === "Work Experience",
  );

  return (
    <Section
      id="experience"
      eyebrow="Experience & leadership"
      title="Where I've learned to work with others."
      description="I don't have professional IT experience yet. These are the team and leadership roles that have shaped how I work."
    >
      <ol className="relative space-y-6 border-l border-line pl-6 sm:pl-8">
        {experience.map((item, i) => {
          const Icon = typeIcons[item.type];
          const highlights = item.highlights.filter((h) => !isPlaceholder(h));
          const todos = site.showPlaceholders ? item.highlights.filter(isPlaceholder) : [];
          const periodMissing = isPlaceholder(item.period);
          return (
            <li key={`${item.organization}-${item.role}`} className="relative">
              <span
                className="absolute top-6 -left-[33px] grid size-4 place-items-center rounded-full border border-line-strong bg-canvas sm:-left-[41px]"
                aria-hidden="true"
              >
                <span className="size-1.5 rounded-full bg-accent" />
              </span>
              <Reveal delay={i * 60}>
                <article className="rounded-2xl border border-line bg-surface p-6 sm:p-7">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="inline-flex items-center gap-1.5 font-mono text-xs text-accent">
                        <Icon className="size-3.5" aria-hidden="true" />
                        {item.type}
                      </p>
                      <h3 className="mt-2 text-lg font-semibold tracking-tight">{item.role}</h3>
                      <p className="text-muted">{item.organization}</p>
                    </div>
                    {!periodMissing && (
                      <p className="rounded-full border border-line px-3 py-1 font-mono text-xs text-subtle">
                        {item.period}
                      </p>
                    )}
                  </div>

                  <p className="mt-4 leading-relaxed text-pretty text-muted">{item.description}</p>

                  {highlights.length > 0 && (
                    <ul className="mt-4 space-y-2">
                      {highlights.map((h) => (
                        <li key={h} className="flex gap-3 text-sm leading-relaxed text-muted">
                          <span className="mt-2 size-1 shrink-0 rounded-full bg-subtle" aria-hidden="true" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}

                  {(todos.length > 0 || (periodMissing && site.showPlaceholders)) && (
                    <div className="mt-4 space-y-2">
                      {periodMissing && site.showPlaceholders && <PlaceholderNote text={item.period} />}
                      {todos.map((t) => (
                        <PlaceholderNote key={t} text={t} />
                      ))}
                    </div>
                  )}

                  {item.skills.length > 0 && (
                    <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Skills developed">
                      {item.skills.map((skill) => (
                        <li
                          key={skill}
                          className="rounded-md border border-line bg-elevated px-2 py-1 text-xs text-muted"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              </Reveal>
            </li>
          );
        })}

        {!hasIndustryExperience && (
          <li className="relative">
            <span
              className="absolute top-6 -left-[33px] size-4 rounded-full border border-dashed border-line-strong bg-canvas sm:-left-[41px]"
              aria-hidden="true"
            />
            <Reveal>
              <div className="flex flex-col gap-4 rounded-2xl border border-dashed border-line-strong p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
                <div>
                  <p className="font-mono text-xs text-subtle">Next step</p>
                  <h3 className="mt-1 font-medium">Looking for my first IT internship</h3>
                  <p className="mt-1 text-sm text-muted">
                    I&apos;m keen to apply what I&apos;ve learned in a real team environment.
                  </p>
                </div>
                <a
                  href="#contact"
                  className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-hover"
                >
                  Get in touch
                  <ArrowRight className="size-4" aria-hidden="true" />
                </a>
              </div>
            </Reveal>
          </li>
        )}
      </ol>
    </Section>
  );
}
