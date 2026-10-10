"use client";

import Image from "next/image";
import { useState } from "react";
import { ImagePlaceholder } from "./ImagePlaceholder";

/**
 * next/image with a graceful fallback. If the file is missing (available=false)
 * or fails to load, a placeholder is shown instead of a broken image.
 * The parent element must be `relative` and have a size (e.g. an aspect ratio).
 */
export function SafeImage({
  src,
  alt,
  available = true,
  sizes,
  className,
  priority,
}: {
  src: string;
  alt: string;
  available?: boolean;
  sizes: string;
  className?: string;
  priority?: boolean;
}) {
  const [failed, setFailed] = useState(false);

  if (!available || failed) return <ImagePlaceholder label={alt} path={src} />;

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
