import { Mail, MapPin } from "lucide-react";
import { contact, site, socials } from "@/data/portfolio";
import { button, isRealLink } from "@/lib/utils";
import { GitHubIcon, LinkedInIcon } from "./BrandIcons";
import { CopyEmailButton } from "./CopyEmailButton";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Contact() {
  const profiles = [
    { label: "LinkedIn", url: socials.linkedin, Icon: LinkedInIcon },
    { label: "GitHub", url: socials.github, Icon: GitHubIcon },
  ];

  return (
    <Section id="contact" eyebrow="Contact" title={contact.heading} description={contact.description}>
      <Reveal>
        <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          <div className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
            <p className="text-sm text-subtle">The best way to reach me is by email:</p>
            <a
              href={`mailto:${site.email}`}
              className="mt-2 block text-xl font-semibold tracking-tight break-all transition-colors hover:text-accent sm:text-2xl"
            >
              {site.email}
            </a>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`mailto:${site.email}`} className={button.primary}>
                <Mail aria-hidden="true" />
                Send me an email
              </a>
              <CopyEmailButton email={site.email} />
            </div>
            <p className="mt-8 inline-flex items-center gap-1.5 text-sm text-subtle">
              <MapPin className="size-4" aria-hidden="true" />
              Based in {site.location}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {profiles.map(({ label, url, Icon }) =>
              isRealLink(url) ? (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-1 items-center gap-4 rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-line-strong"
                >
                  <Icon className="size-6 text-muted transition-colors group-hover:text-fg" />
                  <span className="flex-1">
                    <span className="block font-medium">{label}</span>
                    <span className="block text-sm break-all text-subtle">
                      {url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}
                    </span>
                  </span>
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              ) : site.showPlaceholders ? (
                <div
                  key={label}
                  className="flex flex-1 items-center gap-4 rounded-2xl border border-dashed border-line-strong p-6"
                >
                  <Icon className="size-6 text-subtle" />
                  <span>
                    <span className="block font-medium text-muted">{label}</span>
                    <span className="block text-sm text-subtle">
                      Add your {label} URL in src/data/portfolio.ts
                    </span>
                  </span>
                </div>
              ) : null,
            )}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
