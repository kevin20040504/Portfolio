"use client";

import { Award, ExternalLink, FileText, Maximize2 } from "lucide-react";
import { useState } from "react";
import type { ResolvedCertification } from "@/data/types";
import { isPlaceholder, isRealLink } from "@/lib/utils";
import { Lightbox } from "./Lightbox";
import { SafeImage } from "./SafeImage";

export function CertificationGrid({ certifications }: { certifications: ResolvedCertification[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Only certificates with an image can be opened in the viewer.
  const viewable = certifications.filter((c) => c.imageAvailable && c.image);
  const lightboxImages = viewable.map((c) => ({
    src: c.image!,
    caption: `${c.title} · ${c.issuer}`,
    alt: `${c.title} certificate from ${c.issuer}`,
  }));

  return (
    <>
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert) => {
          const viewIndex = viewable.indexOf(cert);
          return (
            <li key={`${cert.issuer}-${cert.title}`}>
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-colors hover:border-line-strong">
                <div className="relative aspect-[1.414] border-b border-line bg-elevated">
                  {viewIndex >= 0 ? (
                    <button
                      type="button"
                      onClick={() => setOpenIndex(viewIndex)}
                      className="group absolute inset-0 overflow-hidden"
                      aria-label={`View ${cert.title} certificate full size`}
                    >
                      <SafeImage
                        src={cert.image!}
                        alt={`${cert.title} certificate from ${cert.issuer}`}
                        sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                      <span className="absolute right-3 bottom-3 rounded-full border border-line-strong bg-canvas/75 p-2 text-muted opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                        <Maximize2 className="size-4" aria-hidden="true" />
                      </span>
                    </button>
                  ) : (
                    <div className="bg-grid absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
                      <div className="rounded-full border border-line-strong bg-surface p-3 text-accent">
                        <Award className="size-6" aria-hidden="true" />
                      </div>
                      <p className="text-sm font-medium text-muted">{cert.issuer}</p>
                      <p className="text-xs text-subtle">
                        {cert.fileAvailable ? "Certificate available as PDF" : "Certificate image coming soon"}
                      </p>
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <p className="font-mono text-xs text-subtle">
                    {cert.issuer} · {cert.date}
                  </p>
                  <h3 className="mt-2 leading-snug font-medium text-balance">{cert.title}</h3>
                  {cert.credentialId && !isPlaceholder(cert.credentialId) && (
                    <p className="mt-2 font-mono text-xs text-subtle">ID: {cert.credentialId}</p>
                  )}
                  {(isRealLink(cert.verifyUrl) || cert.fileAvailable) && (
                    <div className="mt-auto flex flex-wrap gap-x-4 gap-y-2 pt-4 text-sm">
                      {isRealLink(cert.verifyUrl) && (
                        <a
                          href={cert.verifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-accent hover:text-accent-hover"
                        >
                          Verify
                          <ExternalLink className="size-3.5" aria-hidden="true" />
                          <span className="sr-only">(opens in a new tab)</span>
                        </a>
                      )}
                      {cert.fileAvailable && (
                        <a
                          href={cert.file}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-accent hover:text-accent-hover"
                        >
                          <FileText className="size-3.5" aria-hidden="true" />
                          View PDF
                          <span className="sr-only">(opens in a new tab)</span>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            </li>
          );
        })}
      </ul>

      <Lightbox
        images={lightboxImages}
        index={openIndex}
        onClose={() => setOpenIndex(null)}
        onIndexChange={setOpenIndex}
      />
    </>
  );
}
