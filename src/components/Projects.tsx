import { projectFilters, projects } from "@/data/portfolio";
import { resolveProject } from "@/lib/assets";
import { ProjectGrid } from "./ProjectGrid";
import { Section } from "./Section";

export function Projects() {
  // Checks on the server which screenshots exist, so missing ones show a placeholder.
  const resolved = projects.map(resolveProject);

  return (
    <Section
      id="projects"
      eyebrow="Featured projects"
      title="Academic and personal projects I've worked on."
      description="Each project has its own page with screenshots, my role, how it was built, and what I learned. These are academic and personal projects, not professional client work."
    >
      <ProjectGrid projects={resolved} filters={projectFilters} />
    </Section>
  );
}
