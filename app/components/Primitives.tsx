import type { Theme } from "./theme";

export function Section({
  t,
  id,
  kicker,
  children,
  bg,
  divider,
  maxWidth = 1280,
  pad = 96,
}: {
  t: Theme;
  id?: string;
  kicker?: string;
  children: React.ReactNode;
  bg?: string;
  divider?: boolean;
  maxWidth?: number;
  pad?: number;
}) {
  return (
    <section
      id={id}
      data-section={kicker}
      style={{
        background: bg || "transparent",
        borderTop: divider ? `1px solid ${t.soft}` : undefined,
      }}
    >
      <div style={{ maxWidth, margin: "0 auto", padding: `${pad}px 48px` }}>
        {kicker && <SectionKicker t={t}>{kicker}</SectionKicker>}
        {children}
      </div>
    </section>
  );
}

export function SectionKicker({ t, children }: { t: Theme; children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}>
      <span
        style={{
          fontFamily: t.mono,
          fontSize: 11,
          letterSpacing: ".2em",
          textTransform: "uppercase",
          color: t.accent,
          whiteSpace: "nowrap",
        }}
      >
        {children}
      </span>
      <span style={{ flex: 1, height: 1, background: t.ink, opacity: 0.85 }} />
    </div>
  );
}

export function AppScreenshot({
  src,
  alt = "",
  width = 320,
}: {
  src: string;
  alt?: string;
  width?: number;
}) {
  const w = width;
  const h = (2424 / 1080) * w;
  const r = 40;
  const pad = 8;
  return (
    <div
      style={{
        flex: "0 0 auto",
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: w,
          height: h,
          background: "#0e0f12",
          borderRadius: r,
          padding: pad,
          boxShadow:
            "0 1px 0 rgba(255,255,255,.05) inset, 0 0 0 1.5px #2a2c30, 0 30px 80px -28px rgba(15,28,40,.35), 0 6px 18px -8px rgba(15,28,40,.18)",
          position: "relative",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: r - pad,
            overflow: "hidden",
            background: "#ece5d3",
            position: "relative",
          }}
        >
          <img
            src={src}
            alt={alt}
            draggable={false}
            style={{
              display: "block",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top center",
              userSelect: "none",
              pointerEvents: "none",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export function PhotoSlot({
  label,
  aspect = "16/9",
  kind = "Stockfoto",
  tone,
}: {
  label: string;
  aspect?: string;
  kind?: string;
  tone?: string;
}) {
  const bg = tone || "#e6dccb";
  const lineColor = "rgba(26,22,18,0.18)";
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: aspect,
        background: bg,
        backgroundImage: `repeating-linear-gradient(135deg, transparent 0 14px, ${lineColor} 14px 15px)`,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Inter, system-ui, sans-serif",
        color: "rgba(26,22,18,0.7)",
      }}
    >
      {[
        { top: 8, left: 8, bt: 1, bl: 1 },
        { top: 8, right: 8, bt: 1, br: 1 },
        { bottom: 8, left: 8, bb: 1, bl: 1 },
        { bottom: 8, right: 8, bb: 1, br: 1 },
      ].map((c, i) => (
        <span
          key={i}
          style={{
            position: "absolute",
            width: 14,
            height: 14,
            borderTop: c.bt ? `1.5px solid rgba(26,22,18,.55)` : undefined,
            borderBottom: c.bb ? `1.5px solid rgba(26,22,18,.55)` : undefined,
            borderLeft: c.bl ? `1.5px solid rgba(26,22,18,.55)` : undefined,
            borderRight: c.br ? `1.5px solid rgba(26,22,18,.55)` : undefined,
            top: c.top,
            left: c.left,
            right: c.right,
            bottom: c.bottom,
          }}
        />
      ))}

      <div
        style={{
          padding: "20px 28px",
          textAlign: "center",
          maxWidth: "85%",
          background: "rgba(255,255,255,0.62)",
          backdropFilter: "blur(2px)",
          border: `1px dashed rgba(26,22,18,.4)`,
        }}
      >
        <div
          style={{
            fontSize: 10,
            letterSpacing: ".18em",
            textTransform: "uppercase",
            color: "rgba(26,22,18,.55)",
            marginBottom: 6,
            fontWeight: 600,
          }}
        >
          {kind}
        </div>
        <div style={{ fontSize: 13, lineHeight: 1.45, color: "rgba(26,22,18,.85)" }}>
          {label}
        </div>
      </div>
    </div>
  );
}
