"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useRef } from "react";
import { SafeImage } from "./SafeImage";

export interface LightboxImage {
  src: string;
  caption: string;
  alt?: string;
}

/**
 * Full-screen image viewer built on the native <dialog> element, which
 * handles focus trapping and the Escape key. Arrow keys and swipes move
 * between images.
 */
export function Lightbox({
  images,
  index,
  onClose,
  onIndexChange,
}: {
  images: LightboxImage[];
  index: number | null;
  onClose: () => void;
  onIndexChange: (index: number) => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const touchStartX = useRef<number | null>(null);
  const open = index !== null && images.length > 0;
  const current = open ? images[index] : null;
  const multiple = images.length > 1;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  // Prevent the page behind the viewer from scrolling.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  const go = useCallback(
    (step: number) => {
      if (index === null || !multiple) return;
      onIndexChange((index + step + images.length) % images.length);
    },
    [index, images.length, multiple, onIndexChange],
  );

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      aria-label={current ? `Image viewer: ${current.caption}` : "Image viewer"}
      className="fixed inset-0 m-0 h-dvh max-h-none w-screen max-w-none border-0 bg-transparent p-0 text-fg"
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") go(1);
        if (e.key === "ArrowLeft") go(-1);
      }}
    >
      {current && (
        <div
          className="flex h-full w-full flex-col items-center justify-center gap-4 px-4 py-14 sm:px-16"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
          onTouchStart={(e) => {
            touchStartX.current = e.touches[0].clientX;
          }}
          onTouchEnd={(e) => {
            if (touchStartX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchStartX.current;
            if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
            touchStartX.current = null;
          }}
        >
          <figure className="flex h-full w-full max-w-6xl flex-col items-center gap-4">
            <div className="relative min-h-0 w-full flex-1">
              <SafeImage
                key={current.src}
                src={current.src}
                alt={current.alt ?? current.caption}
                sizes="100vw"
                className="object-contain"
              />
            </div>
            <figcaption className="text-center text-sm text-muted">
              {current.caption}
              {multiple && (
                <span className="ml-2 font-mono text-xs text-subtle">
                  {index! + 1} / {images.length}
                </span>
              )}
            </figcaption>
          </figure>

          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 rounded-full border border-line-strong bg-surface/80 p-2 text-muted transition-colors hover:text-fg"
            aria-label="Close image viewer"
            autoFocus
          >
            <X className="size-5" aria-hidden="true" />
          </button>

          {multiple && (
            <>
              <button
                type="button"
                onClick={() => go(-1)}
                className="absolute top-1/2 left-2 -translate-y-1/2 rounded-full border border-line-strong bg-surface/80 p-2 text-muted transition-colors hover:text-fg sm:left-4"
                aria-label="Previous image"
              >
                <ChevronLeft className="size-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full border border-line-strong bg-surface/80 p-2 text-muted transition-colors hover:text-fg sm:right-4"
                aria-label="Next image"
              >
                <ChevronRight className="size-5" aria-hidden="true" />
              </button>
            </>
          )}
        </div>
      )}
    </dialog>
  );
}
