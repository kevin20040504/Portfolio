import { site } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function TechTags({
  items,
  max,
  className,
}: {
  items: string[];
  max?: number;
  className?: string;
}) {
  if (items.length === 0) {
    return site.showPlaceholders ? (
      <p className={cn("text-xs text-subtle italic", className)}>Tech stack to be added</p>
    ) : null;
  }
  const shown = max ? items.slice(0, max) : items;
  const hidden = items.length - shown.length;
  return (
    <ul className={cn("flex flex-wrap gap-1.5", className)} aria-label="Technologies">
      {shown.map((tech) => (
        <li
          key={tech}
          className="rounded-md border border-line bg-elevated px-2 py-1 font-mono text-[11px] text-muted"
        >
          {tech}
        </li>
      ))}
      {hidden > 0 && (
        <li className="rounded-md px-1.5 py-1 font-mono text-[11px] text-subtle">+{hidden} more</li>
      )}
    </ul>
  );
}
