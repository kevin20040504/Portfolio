import { skillCategories } from "@/data/portfolio";
import { icons } from "./icons";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills & technologies"
      title="What I work with."
      description="Technologies and practices I've used in coursework and projects. I'm still growing in each of them, so there are no percentage bars here."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {skillCategories.map((category, i) => {
          const Icon = icons[category.icon];
          return (
            <Reveal key={category.title} delay={(i % 2) * 80} className="h-full">
              <div className="h-full rounded-2xl border border-line bg-surface p-6 sm:p-7">
                <div className="flex items-start gap-4">
                  <div className="grid size-10 shrink-0 place-items-center rounded-xl border border-line-strong bg-elevated text-accent">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-medium">{category.title}</h3>
                    <p className="mt-1 text-sm text-muted">{category.description}</p>
                  </div>
                </div>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-lg border border-line bg-elevated px-3 py-1.5 text-sm text-fg/90"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
