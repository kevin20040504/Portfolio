"use client";

import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import type { ResolvedImage } from "@/data/types";
import { cn } from "@/lib/utils";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { Lightbox } from "./Lightbox";
import { SafeImage } from "./SafeImage";

/**
 * Screenshot carousel for a project page: a large preview, thumbnails underneath,
 * and a full-screen viewer for images that exist. Missing images show a placeholder.
 */
export function ProjectGallery({ images, title }: { images: ResolvedImage[]; title: string }) {
  const [current, setCurrent] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (images.length === 0) return null;

  const available = images.filter((img) => img.available);
  const image = images[current];
  const multiple = images.length > 1;
  const go = (step: number) => setCurrent((i) => (i + step + images.length) % images.length);

  const openViewer = () => {
    const index = available.indexOf(image);
    if (index >= 0) setLightboxIndex(index);
  };

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={`${title} screenshots`}
      onKeyDown={(e) => {
        if (!multiple || lightboxIndex !== null) return;
        if (e.key === "ArrowRight") go(1);
        if (e.key === "ArrowLeft") go(-1);
      }}
    >
      <figure>
        <div className="group relative aspect-[16/10] overflow-hidden rounded-2xl border border-line bg-elevated">
          {image.available ? (
            <button
              type="button"
              onClick={openViewer}
              className="absolute inset-0"
              aria-label={`View "${image.caption}" full screen`}
            >
              <SafeImage
                key={image.src}
                src={image.src}
                alt={image.alt ?? image.caption}
                sizes="(min-width: 1152px) 1088px, 100vw"
                className="object-contain"
                priority={current === 0}
              />
              <span className="absolute right-3 bottom-3 inline-flex items-center gap-1.5 rounded-full border border-line-strong bg-canvas/75 px-3 py-1.5 text-xs text-muted opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100 group-focus-within:opacity-100">
                <Maximize2 className="size-3.5" aria-hidden="true" />
                Enlarge
              </span>
            </button>
          ) : (
            <ImagePlaceholder label={image.caption} path={image.src} />
          )}

          {multiple && (
            <>
              <button
                type="button"
                onClick={() => go(-1)}
                className="absolute top-1/2 left-3 z-10 -translate-y-1/2 rounded-full border border-line-strong bg-canvas/75 p-2 text-muted backdrop-blur-sm transition-colors hover:text-fg"
                aria-label="Previous screenshot"
              >
                <ChevronLeft className="size-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                className="absolute top-1/2 right-3 z-10 -translate-y-1/2 rounded-full border border-line-strong bg-canvas/75 p-2 text-muted backdrop-blur-sm transition-colors hover:text-fg"
                aria-label="Next screenshot"
              >
                <ChevronRight className="size-5" aria-hidden="true" />
              </button>
            </>
          )}
        </div>
        <figcaption className="mt-3 flex items-baseline justify-between gap-4 text-sm" aria-live="polite">
          <span className="text-muted">{image.caption}</span>
          {multiple && (
            <span className="shrink-0 font-mono text-xs text-subtle">
              {current + 1} / {images.length}
            </span>
          )}
        </figcaption>
      </figure>

      {multiple && (
        <ul className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-6" aria-label="Choose a screenshot">
          {images.map((img, i) => (
            <li key={`${img.src}-${i}`}>
              <button
                type="button"
                onClick={() => setCurrent(i)}
                aria-label={`Show screenshot ${i + 1}: ${img.caption}`}
                aria-current={i === current ? "true" : undefined}
                className={cn(
                  "relative block aspect-[16/10] w-full overflow-hidden rounded-lg border bg-elevated transition",
                  i === current
                    ? "border-accent ring-1 ring-accent"
                    : "border-line opacity-60 hover:opacity-100",
                )}
              >
                {img.available ? (
                  <Image src={img.src} alt="" fill sizes="180px" className="object-cover object-top" />
                ) : (
                  <span className="bg-grid absolute inset-0 grid place-items-center p-1 text-[10px] leading-tight text-subtle">
                    {img.caption}
                  </span>
                )}
              </button>
            </li>
          ))}
        </ul>
      )}

      <Lightbox
        images={available}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onIndexChange={(i) => {
          setLightboxIndex(i);
          setCurrent(images.indexOf(available[i]));
        }}
      />
    </div>
  );
}
