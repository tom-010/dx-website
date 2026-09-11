export const theme = {
  brand: "Zebriss",
  domain: "zebriss.de",
  email: "info@zebriss.de",
  headline: "Jemand, der nur an *deinem* Fall arbeitet.",
  showPhotos: true,
} as const;

export type Theme = typeof theme;

export function renderHeadline(text: string) {
  const parts = String(text).split(/(\*[^*]+\*)/g);
  return parts.map((p, i) => {
    if (p.startsWith("*") && p.endsWith("*")) {
      return (
        <em key={i} className="italic text-accent">
          {p.slice(1, -1)}
        </em>
      );
    }
    return <span key={i}>{p}</span>;
  });
}
