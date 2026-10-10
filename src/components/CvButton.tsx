import { Download, Mail } from "lucide-react";
import { site } from "@/data/portfolio";
import { button, cn } from "@/lib/utils";

/**
 * Downloads the CV when public/cv/Kevin-Ang-CV.pdf exists.
 * Until then it becomes a "Request CV" email link, so it never leads to a 404.
 */
export function CvButton({
  available,
  variant = "secondary",
  className,
  compact,
}: {
  available: boolean;
  variant?: keyof typeof button;
  className?: string;
  compact?: boolean;
}) {
  const size = compact ? "h-9 px-4" : "";
  if (available) {
    return (
      <a
        href={site.cvPath}
        download="Kevin-Ang-CV.pdf"
        className={cn(button[variant], size, className)}
      >
        <Download aria-hidden="true" />
        Download CV
      </a>
    );
  }
  return (
    <a
      href={`mailto:${site.email}?subject=${encodeURIComponent("CV request")}`}
      className={cn(button[variant], size, className)}
      title="My CV is available on request"
    >
      <Mail aria-hidden="true" />
      Request CV
    </a>
  );
}
