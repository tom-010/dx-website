import { theme } from "./theme";

/**
 * Site-wide notice: the product is in development and this website is,
 * for now, a vision document rather than a description of a live service.
 */
export function DevBanner() {
  return (
    <div
      role="note"
      aria-label="Hinweis zum Entwicklungsstand"
      className="border-b border-accent-deep bg-accent text-paper"
    >
      <div className="container-page flex flex-col gap-1 py-2.5 text-[13px] leading-[1.45] sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:text-sm">
        <p className="m-0">
          <span className="mr-2 font-mono text-[10px] uppercase tracking-[.18em] text-paper/80 sm:text-[11px]">
            In Entwicklung
          </span>
          {theme.brand} befindet sich noch im Aufbau. Diese Website ist derzeit ein
          Visionsdokument: Sie beschreibt, was wir bauen — nicht, was es schon gibt.
        </p>
        <a
          href={`mailto:${theme.email}`}
          className="shrink-0 whitespace-nowrap border-b border-paper/60 pb-[1px] font-medium text-paper no-underline hover:border-paper"
        >
          {theme.email}
        </a>
      </div>
    </div>
  );
}
