import type { Theme } from "./theme";

function FooterCol({ title, t, children }: { title: string; t: Theme; children: React.ReactNode }) {
  return (
    <div>
      <div
        style={{
          fontSize: 10,
          letterSpacing: ".18em",
          textTransform: "uppercase",
          marginBottom: 12,
          opacity: 0.6,
          fontFamily: t.mono,
        }}
      >
        {title}
      </div>
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "flex",
          flexDirection: "column",
          gap: 8,
          fontSize: 14,
        }}
      >
        {children}
      </ul>
    </div>
  );
}

function FL({ href, children }: { href?: string; children: React.ReactNode }) {
  return (
    <li>
      <a href={href} style={{ color: "inherit", textDecoration: "none", opacity: 0.92 }}>
        {children}
      </a>
    </li>
  );
}

export function Footer({ t }: { t: Theme }) {
  return (
    <footer style={{ background: t.ink, color: t.paper, padding: "56px 0 32px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 1fr", gap: 48 }}>
          <div>
            <div style={{ fontFamily: t.serif, fontStyle: "italic", fontSize: 26, marginBottom: 14 }}>
              {t.brand}
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: `${t.paper}aa`, maxWidth: 420, margin: 0 }}>
              Ein Recherche-Programm für Menschen, deren seltene oder schwer zu diagnostizierende
              Krankheit das normale Sprechstunden-Format nicht lösen kann. Wir bereiten
              Facharzttermine vor — die Diagnose stellt immer ein:e Ärzt:in.
            </p>
          </div>
          <FooterCol title="Programm" t={t}>
            <FL href="/wer-passt">Wer passt — und wer nicht</FL>
            <FL href="/methode">Die Methode</FL>
            <FL href="/transparenz">Transparenz</FL>
            <FL href="/ueber-uns">Über uns</FL>
            <FL href="/faq">Häufige Fragen</FL>
          </FooterCol>
          <FooterCol title="Rechtlich" t={t}>
            <FL>Impressum</FL>
            <FL>Datenschutzerklärung</FL>
            <FL>AGB · Alpha</FL>
          </FooterCol>
          <FooterCol title="Kontakt" t={t}>
            <FL>kontakt@dxapp.health</FL>
            <FL>datenschutz@dxapp.health</FL>
            <div style={{ fontSize: 12, color: `${t.paper}88`, marginTop: 8, lineHeight: 1.5 }}>
              Datenschutz: direkt an eine echte Person, kein Ticket-System.
            </div>
          </FooterCol>
        </div>
        <div
          style={{
            marginTop: 48,
            paddingTop: 22,
            borderTop: `1px solid ${t.paper}22`,
            display: "flex",
            justifyContent: "space-between",
            fontSize: 11,
            color: `${t.paper}88`,
            fontFamily: t.mono,
            letterSpacing: ".06em",
            textTransform: "uppercase",
          }}
        >
          <span>© 2026 · Eigenfinanziert · keine Investor:innen</span>
          <span>{t.brand} ist Working Title — finaler Name folgt</span>
        </div>
      </div>
    </footer>
  );
}
