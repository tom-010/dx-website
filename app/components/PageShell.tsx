import type { Theme } from "./theme";
import { theme } from "./theme";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function PageShell({
  current,
  children,
}: {
  current: string;
  children: (t: Theme) => React.ReactNode;
}) {
  const t = theme;
  return (
    <div
      style={{
        background: t.paper,
        color: t.ink,
        fontFamily: t.sans,
        minHeight: "100vh",
      }}
    >
      <Header t={t} current={current} />
      {children(t)}
      <Footer t={t} />
    </div>
  );
}

export function PageHero({
  t,
  path,
  title,
  intro,
}: {
  t: Theme;
  path: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
}) {
  return (
    <section style={{ background: t.paper }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "64px 48px 32px" }}>
        <div
          style={{
            fontFamily: t.mono,
            fontSize: 11,
            letterSpacing: ".2em",
            color: t.accent,
            textTransform: "uppercase",
            marginBottom: 18,
          }}
        >
          Unterseite · {path}
        </div>
        <h1
          style={{
            fontFamily: t.serif,
            fontWeight: 400,
            fontSize: 84,
            lineHeight: 1.0,
            letterSpacing: "-0.022em",
            margin: 0,
            color: t.ink,
            textWrap: "balance",
            maxWidth: 980,
          }}
        >
          {title}
        </h1>
        {intro && (
          <p
            style={{
              fontFamily: t.serif,
              fontSize: 22,
              lineHeight: 1.5,
              color: t.slate,
              marginTop: 22,
              maxWidth: 820,
            }}
          >
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}

export function BackToHome({ t }: { t: Theme }) {
  return (
    <section style={{ background: t.paper, borderTop: `1px solid ${t.soft}` }}>
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "56px 48px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 24,
        }}
      >
        <a
          href="/"
          style={{
            fontFamily: t.serif,
            fontSize: 17,
            color: t.ink,
            textDecoration: "none",
            borderBottom: `1px solid ${t.ink}`,
            paddingBottom: 2,
          }}
        >
          ← Zurück zur Startseite
        </a>
        <a
          href="/bewerbung"
          style={{
            background: t.ink,
            color: t.paper,
            padding: "14px 24px",
            fontSize: 14,
            fontWeight: 500,
            textDecoration: "none",
          }}
        >
          Zur Bewerbung →
        </a>
      </div>
    </section>
  );
}
