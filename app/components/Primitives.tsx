import type { Theme } from "./theme";

export function Section({
  id,
  kicker,
  children,
  className = "",
  divider = false,
}: {
  id?: string;
  kicker?: string;
  children: React.ReactNode;
  /** Tailwind classes for the section wrapper (e.g. "bg-card") */
  className?: string;
  divider?: boolean;
}) {
  return (
    <section
      id={id}
      data-section={kicker}
      className={
        (divider ? "border-t border-soft " : "") +
        (className || "")
      }
    >
      <div className="container-page py-16 sm:py-20 lg:py-24">
        {kicker && <SectionKicker>{kicker}</SectionKicker>}
        {children}
      </div>
    </section>
  );
}

export function SectionKicker({
  children,
  tone = "accent",
}: {
  children: React.ReactNode;
  tone?: "accent" | "paper";
}) {
  const textColor = tone === "paper" ? "text-paper/80" : "text-accent";
  const lineColor = tone === "paper" ? "bg-paper/40" : "bg-ink/85";
  return (
    <div className="mb-7 flex items-center gap-3 sm:gap-4">
      <span
        className={
          "whitespace-nowrap font-mono text-[10px] uppercase tracking-[.2em] sm:text-[11px] " +
          textColor
        }
      >
        {children}
      </span>
      <span className={"h-px flex-1 " + lineColor} />
    </div>
  );
}

/**
 * iPhone-style screenshot frame. Scales fluidly: maxWidth caps the rendered
 * size on wide viewports; on narrow viewports it shrinks to fit its column.
 * Aspect ratio is preserved automatically.
 */
export function AppScreenshot({
  src,
  alt = "",
  maxWidth = 320,
}: {
  src: string;
  alt?: string;
  maxWidth?: number;
}) {
  return (
    <div className="inline-flex flex-col items-center" style={{ width: "100%", maxWidth }}>
      <div
        className="relative w-full overflow-hidden rounded-[10%/4.5%] bg-[#0e0f12] p-[2.5%]"
        style={{
          aspectRatio: "1080 / 2424",
          boxShadow:
            "0 1px 0 rgba(255,255,255,.05) inset, 0 0 0 1.5px #2a2c30, 0 30px 80px -28px rgba(15,28,40,.35), 0 6px 18px -8px rgba(15,28,40,.18)",
        }}
      >
        <div
          className="h-full w-full overflow-hidden rounded-[8%/3.5%] bg-[#ece5d3]"
        >
          <img
            src={src}
            alt={alt}
            draggable={false}
            loading="lazy"
            decoding="async"
            className="pointer-events-none block h-full w-full select-none object-cover object-top"
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
      className="relative flex w-full items-center justify-center overflow-hidden text-ink/70"
      style={{
        aspectRatio: aspect,
        background: bg,
        backgroundImage: `repeating-linear-gradient(135deg, transparent 0 14px, ${lineColor} 14px 15px)`,
      }}
    >
      <span className="absolute left-2 top-2 h-[14px] w-[14px] border-l-[1.5px] border-t-[1.5px] border-ink/55" />
      <span className="absolute right-2 top-2 h-[14px] w-[14px] border-r-[1.5px] border-t-[1.5px] border-ink/55" />
      <span className="absolute bottom-2 left-2 h-[14px] w-[14px] border-b-[1.5px] border-l-[1.5px] border-ink/55" />
      <span className="absolute bottom-2 right-2 h-[14px] w-[14px] border-b-[1.5px] border-r-[1.5px] border-ink/55" />

      <div className="max-w-[85%] border border-dashed border-ink/40 bg-white/60 px-5 py-4 text-center backdrop-blur-[2px] sm:px-7 sm:py-5">
        <div className="mb-1 text-[10px] font-semibold uppercase tracking-[.18em] text-ink/55">
          {kind}
        </div>
        <div className="text-[13px] leading-[1.45] text-ink/85">{label}</div>
      </div>
    </div>
  );
}

/** Helper passed by some callers; not used by the new components, but kept
 * to avoid an unused-import warning if it's referenced elsewhere. */
export type { Theme };
