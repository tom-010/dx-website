import type { Theme } from "./theme";

const NAV_ITEMS = [
  { label: "Was du bekommst", href: "/#saeulen" },
  { label: "Methode", href: "/methode" },
  { label: "Wer passt", href: "/wer-passt" },
  { label: "Transparenz", href: "/transparenz" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "FAQ", href: "/faq" },
];

export function Header({ t, current = "/" }: { t: Theme; current?: string }) {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: `${t.paper}f0`,
        backdropFilter: "blur(8px)",
        borderBottom: `1px solid ${t.soft}`,
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "18px 48px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 32,
        }}
      >
        <a href="/" style={{ textDecoration: "none", color: t.ink }}>
          <div style={{ fontFamily: t.serif, fontStyle: "italic", fontSize: 22, color: t.ink }}>
            {t.brand}
          </div>
        </a>
        <nav
          style={{
            display: "flex",
            gap: 22,
            fontSize: 14,
            color: t.slate,
            alignItems: "center",
            flexWrap: "wrap",
            justifyContent: "flex-end",
          }}
        >
          {NAV_ITEMS.map((it) => {
            const active = current === it.href.split("#")[0];
            return (
              <a
                key={it.href}
                href={it.href}
                style={{
                  color: active ? t.ink : "inherit",
                  textDecoration: "none",
                  fontWeight: active ? 500 : 400,
                  borderBottom: active ? `1px solid ${t.accent}` : "1px solid transparent",
                  paddingBottom: 2,
                }}
              >
                {it.label}
              </a>
            );
          })}
          <a
            href="/bewerbung"
            style={{
              padding: "9px 18px",
              border: `1px solid ${t.ink}`,
              color: t.ink,
              fontWeight: 500,
              textDecoration: "none",
              borderRadius: 999,
            }}
          >
            Bewerben
          </a>
        </nav>
      </div>
    </header>
  );
}
