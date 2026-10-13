/**
 * Type definitions for the portfolio content in `portfolio.ts`.
 * You normally don't need to edit this file. TypeScript uses it to warn you
 * if a project or certificate is missing a required field.
 */

export type ProjectStatus =
  | "Completed"
  | "In Development"
  | "Academic Project"
  | "Capstone Project";

/** Used by the project filter buttons. Add a new category here AND in `projectFilters`. */
export type ProjectCategory = "Personal Project" | "Web Development" | "System Development";

export interface ProjectImage {
  /** Path inside the `public` folder, e.g. "/images/projects/athletesync/dashboard.png" */
  src: string;
  /** Short caption shown under the image and in the full-screen viewer. */
  caption: string;
  /** Optional longer description for screen readers. Defaults to the caption. */
  alt?: string;
}

/**
 * "implemented" = working in the current version
 * "in-progress" = partially built
 * "planned"     = not built yet
 */
export type FeatureState = "implemented" | "in-progress" | "planned";

export interface ProjectFeature {
  name: string;
  description?: string;
  state: FeatureState;
}

export interface Challenge {
  challenge: string;
  approach: string;
}

export interface Project {
  /** Used in the URL: /projects/<slug>. Lowercase, hyphens only. */
  slug: string;
  title: string;
  /** Optional longer official name, shown on the project page. */
  fullTitle?: string;
  year: string;
  category: ProjectCategory;
  /** e.g. "Academic project · University of Asia and the Pacific" */
  context: string;
  status: ProjectStatus;
  /** One or two sentences shown on the project card. */
  summary: string;
  /** The image shown on the project card. Can be the same file as one of the screenshots. */
  cover: ProjectImage;
  /** All screenshots for the project page gallery, in display order. */
  screenshots: ProjectImage[];
  technologies: string[];
  overview: string;
  problem: string;
  objectives: string[];
  features: ProjectFeature[];
  role: string[];
  /** One string per paragraph. */
  implementation: string[];
  challenges: Challenge[];
  takeaways: string[];
  /** Leave as "" when there's no public link. Empty links are never shown as broken buttons. */
  links: {
    github: string;
    demo: string;
  };
}

export type ResolvedImage = ProjectImage & { available: boolean };

export type ResolvedProject = Omit<Project, "cover" | "screenshots"> & {
  cover: ResolvedImage;
  screenshots: ResolvedImage[];
};

export interface Certification {
  title: string;
  issuer: string;
  /** Free text, e.g. "20 Aug 2025" or "2026" */
  date: string;
  credentialId?: string;
  /** Public verification page, if the issuer provides one. */
  verifyUrl?: string;
  /** Image of the certificate, inside /public. */
  image?: string;
  /** PDF of the certificate, inside /public. */
  file?: string;
}

export type ResolvedCertification = Certification & {
  imageAvailable: boolean;
  fileAvailable: boolean;
};

export type ExperienceType =
  | "Leadership"
  | "Academic Collaboration"
  | "Internship"
  | "Work Experience"
  | "Volunteer";

export interface ExperienceItem {
  role: string;
  organization: string;
  type: ExperienceType;
  period: string;
  description: string;
  highlights: string[];
  skills: string[];
}

export type IconKey =
  | "code"
  | "cloud"
  | "shield"
  | "wrench"
  | "layout"
  | "search"
  | "users"
  | "sparkles"
  | "bug"
  | "workflow"
  | "database";

export interface SkillCategory {
  title: string;
  icon: IconKey;
  description: string;
  skills: string[];
}

export interface Highlight {
  title: string;
  description: string;
  icon: IconKey;
}
