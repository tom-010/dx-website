import { theme } from "./theme";

function FooterCol({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-3 font-mono text-[10px] uppercase tracking-[.18em] opacity-60">
        {title}
      </div>
      <ul className="m-0 flex list-none flex-col gap-2 p-0 text-sm">{children}</ul>
    </div>
  );
}

function FL({
  href,
  children,
}: {
  href?: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <a
        href={href}
        className="text-inherit no-underline opacity-90 hover:opacity-100"
      >
        {children}
      </a>
    </li>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink pb-8 pt-14 text-paper sm:pt-16">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] lg:gap-12">
          <div>
            <div className="mb-3 font-serif text-2xl italic sm:text-[26px]">
              {theme.brand}
            </div>
            <p className="m-0 max-w-[42ch] text-sm leading-relaxed text-paper/70">
              Ein Recherche-Programm für Menschen, deren seltene oder schwer zu
              diagnostizierende Krankheit das normale Sprechstunden-Format nicht lösen
              kann. Wir bereiten Facharzttermine vor — die Diagnose stellt immer ein:e
              Ärzt:in.
            </p>
          </div>
          <FooterCol title="Programm">
            <FL href="/wer-passt">Wer passt — und wer nicht</FL>
            <FL href="/methode">Die Methode</FL>
            <FL href="/transparenz">Transparenz</FL>
            <FL href="/ueber-uns">Über uns</FL>
            <FL href="/faq">Häufige Fragen</FL>
          </FooterCol>
          <FooterCol title="Rechtlich">
            <FL href="/impressum">Impressum</FL>
            <FL href="/datenschutz">Datenschutzerklärung</FL>
            <FL href="/agb">AGB · Alpha</FL>
          </FooterCol>
          <FooterCol title="Kontakt">
            <FL href={`mailto:${theme.email}`}>{theme.email}</FL>
            <li className="mt-2 text-xs leading-relaxed text-paper/50">
              Auch für Datenschutzfragen: direkt an eine echte Person, kein
              Ticket-System.
            </li>
          </FooterCol>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-paper/15 pt-6 font-mono text-[11px] uppercase tracking-[.06em] text-paper/50 sm:mt-12 sm:flex-row sm:justify-between sm:gap-4">
          <span>© 2026 · Eigenfinanziert · keine Investor:innen</span>
          <span>{theme.domain} · in Entwicklung · Visionsdokument</span>
        </div>
      </div>
    </footer>
  );
}
