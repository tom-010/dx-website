export const theme = {
  paper: "#f5f1ea",
  card: "#ffffff",
  ink: "#1a1612",
  mute: "#6b5e50",
  slate: "#4f4338",
  accent: "#a83829",
  accentInk: "#7a230d",
  soft: "#e6dccb",
  warm: "#efe2c6",
  rule: "#1a1612",
  photoTone: "#e6dccb",
  serif: `"Source Serif 4", "Source Serif Pro", Georgia, serif`,
  sans: `Inter, system-ui, -apple-system, sans-serif`,
  mono: `"IBM Plex Mono", ui-monospace, "JetBrains Mono", monospace`,
  brand: "DxApp",
  headline: "Jemand, der nur an *deinem* Fall arbeitet.",
  showPhotos: true,
} as const;

export type Theme = typeof theme;

export function renderHeadline(text: string, t: Theme) {
  const parts = String(text).split(/(\*[^*]+\*)/g);
  return parts.map((p, i) => {
    if (p.startsWith("*") && p.endsWith("*")) {
      return (
        <em key={i} style={{ fontStyle: "italic", color: t.accent }}>
          {p.slice(1, -1)}
        </em>
      );
    }
    return <span key={i}>{p}</span>;
  });
}
