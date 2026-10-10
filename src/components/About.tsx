import { Sparkles } from "lucide-react";
import { about, site } from "@/data/portfolio";
import { icons } from "./icons";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function About() {
  const facts = [
    { label: "Degree", value: site.education.degree },
    { label: "University", value: `${site.education.school} (${site.education.schoolShort})` },
    { label: "Expected graduation", value: site.education.graduation },
    { label: "Location", value: site.location },
    { label: "Interests", value: site.interests.join(", ") },
  ];

  return (
    <Section id="about" eyebrow="About" title="An IT student who likes building things that work.">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <Reveal className="space-y-5 text-[17px] leading-relaxed text-pretty text-muted">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </Reveal>

        <Reveal delay={100}>
          <div className="rounded-2xl border border-line bg-surface p-6">
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-subtle">At a glance</h3>
            <dl className="mt-5 space-y-4">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-xs text-subtle">{fact.label}</dt>
                  <dd className="mt-0.5 text-sm text-fg">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>

      <ul className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {about.highlights.map((item, i) => {
          const Icon = icons[item.icon];
          return (
            <li key={item.title}>
              <Reveal delay={(i % 3) * 70} className="h-full">
                <div className="h-full rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-line-strong">
                  <Icon className="size-5 text-accent" aria-hidden="true" />
                  <h3 className="mt-4 font-medium">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                </div>
              </Reveal>
            </li>
          );
        })}
      </ul>

      <Reveal className="mt-6">
        <div className="grid gap-8 rounded-2xl border border-accent/25 bg-accent/[0.06] p-6 sm:p-8 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <div className="inline-flex items-center gap-2 text-accent">
              <Sparkles className="size-5" aria-hidden="true" />
              <span className="font-mono text-xs uppercase tracking-[0.18em]">AI-assisted development</span>
            </div>
            <h3 className="mt-3 text-xl font-semibold tracking-tight">{about.ai.title}</h3>
            <p className="mt-3 leading-relaxed text-pretty text-muted">{about.ai.intro}</p>
          </div>
          <ul className="space-y-3 self-center">
            {about.ai.principles.map((principle) => (
              <li key={principle} className="flex gap-3 text-sm leading-relaxed text-muted">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                {principle}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
