import { ArrowUp, Mail } from "lucide-react";
import { site, socials } from "@/data/portfolio";
import { cn, container, isRealLink } from "@/lib/utils";
import { GitHubIcon, LinkedInIcon } from "./BrandIcons";

export function Footer() {
  const links = [
    { label: "Email", href: `mailto:${site.email}`, Icon: Mail },
    { label: "LinkedIn", href: socials.linkedin, Icon: LinkedInIcon },
    { label: "GitHub", href: socials.github, Icon: GitHubIcon },
  ].filter((link) => isRealLink(link.href));

  return (
    <footer className="border-t border-line/70">
      <div
        className={cn(
          container,
          "flex flex-col gap-6 py-10 text-sm text-subtle sm:flex-row sm:items-center sm:justify-between",
        )}
      >
        <div>
          <p className="text-muted">
            © {new Date().getFullYear()} {site.name}
          </p>
          <p className="mt-1">Built with Next.js and Tailwind CSS, with help from AI tools.</p>
        </div>
        <div className="flex items-center gap-1">
          {links.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              className="grid size-10 place-items-center rounded-full transition-colors hover:bg-elevated hover:text-fg"
              aria-label={label}
            >
              <Icon className="size-[18px]" aria-hidden="true" />
            </a>
          ))}
          <a
            href="#main"
            className="ml-2 inline-flex h-10 items-center gap-1.5 rounded-full border border-line px-4 transition-colors hover:border-line-strong hover:text-fg"
          >
            <ArrowUp className="size-4" aria-hidden="true" />
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
