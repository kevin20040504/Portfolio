import { ImageResponse } from "next/og";
import { site } from "@/data/portfolio";

// The preview image shown when the site link is shared on LinkedIn, Messenger, etc.
export const alt = `${site.name}: ${site.headline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#09090b",
          backgroundImage:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(139,143,248,0.18), transparent)",
          color: "#f4f4f5",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: 14,
              border: "2px solid #32323a",
              background: "#111114",
              color: "#8b8ff8",
              fontSize: 26,
              fontWeight: 700,
            }}
          >
            KA
          </div>
          <div style={{ fontSize: 26, color: "#a1a1aa" }}>
            {`${site.education.schoolShort} · BS Information Technology`}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: -2 }}>{site.name}</div>
          <div style={{ fontSize: 34, color: "#8b8ff8" }}>{site.roles.join("  ·  ")}</div>
        </div>
        <div style={{ fontSize: 26, color: "#71717a" }}>{site.location}</div>
      </div>
    ),
    size,
  );
}
