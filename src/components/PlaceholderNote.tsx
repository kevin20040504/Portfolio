import { PencilLine } from "lucide-react";
import { placeholderHint } from "@/lib/utils";

/** A tidy "to be added" note for unfinished content. Only rendered when site.showPlaceholders is true. */
export function PlaceholderNote({ text }: { text: string }) {
  return (
    <p className="flex items-start gap-2.5 rounded-lg border border-dashed border-line-strong bg-surface/60 px-3.5 py-2.5 text-sm text-subtle">
      <PencilLine className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
      <span>
        <span className="font-medium text-muted">To be added: </span>
        {placeholderHint(text)}
      </span>
    </p>
  );
}
