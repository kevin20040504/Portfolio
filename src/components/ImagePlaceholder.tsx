import { ImagePlus } from "lucide-react";
import { site } from "@/data/portfolio";

/** Shown in place of an image that hasn't been added to /public yet. Fills its (relative) parent. */
export function ImagePlaceholder({ label, path }: { label: string; path?: string }) {
  return (
    <div className="bg-grid absolute inset-0 flex flex-col items-center justify-center gap-2.5 bg-elevated p-4 text-center">
      <div className="rounded-full border border-line-strong bg-surface p-2.5 text-subtle">
        <ImagePlus className="size-5" aria-hidden="true" />
      </div>
      <p className="text-sm font-medium text-muted">{label}</p>
      {site.showPlaceholders && path ? (
        <p className="max-w-full font-mono text-[11px] break-all text-subtle">Add: public{path}</p>
      ) : (
        <p className="text-xs text-subtle">Screenshot coming soon</p>
      )}
    </div>
  );
}
