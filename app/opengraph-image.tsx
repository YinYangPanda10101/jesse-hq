import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} — ${site.tagline}`;
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
          background: "#211d17",
          color: "#faf7f1",
          padding: 80,
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#a89f8f",
          }}
        >
          {`${site.name} · ${site.role}`}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 76,
            lineHeight: 1.15,
            letterSpacing: -1.5,
            maxWidth: 980,
          }}
        >
          I build software that gives people their time back.
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 48, height: 2, background: "#8f4a2a" }} />
          <div style={{ display: "flex", fontSize: 24, color: "#a89f8f" }}>
            Technology should make people more human. Not less.
          </div>
        </div>
      </div>
    ),
    size
  );
}
