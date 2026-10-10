import fs from "node:fs";
import path from "node:path";
import type {
  Certification,
  Project,
  ProjectImage,
  ResolvedCertification,
  ResolvedImage,
  ResolvedProject,
} from "@/data/types";

/**
 * Server-only helpers that check whether files referenced in portfolio.ts
 * actually exist in /public. Missing files are shown as placeholders
 * instead of broken images. Runs at build time (and on every request in dev).
 */
export function publicFileExists(publicPath?: string): boolean {
  if (!publicPath) return false;
  if (/^https?:\/\//i.test(publicPath)) return true;
  const clean = decodeURI(publicPath.split(/[?#]/)[0]).replace(/^\/+/, "");
  return fs.existsSync(path.join(process.cwd(), "public", clean));
}

export function resolveImage(image: ProjectImage): ResolvedImage {
  return { ...image, available: publicFileExists(image.src) };
}

export function resolveProject(project: Project): ResolvedProject {
  return {
    ...project,
    cover: resolveImage(project.cover),
    screenshots: project.screenshots.map(resolveImage),
  };
}

export function resolveCertification(cert: Certification): ResolvedCertification {
  return {
    ...cert,
    imageAvailable: publicFileExists(cert.image),
    fileAvailable: publicFileExists(cert.file),
  };
}
