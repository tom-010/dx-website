import type { Theme } from "./theme";
import { renderHeadline } from "./theme";
import { Section, SectionKicker, AppScreenshot } from "./Primitives";

export function Hero({ t }: { t: Theme }) {
  return (
    <section style={{ background: t.paper }}>
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "64px 48px 96px",
          display: "grid",
          gridTemplateColumns: "1fr 420px",
          gap: 64,
          alignItems: "center",
        }}
      >
        <div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: t.soft,
              padding: "7px 14px",
              borderRadius: 999,
              fontSize: 12,
              color: t.accent,
              fontWeight: 500,
            }}
          >
            <span style={{ width: 6, height: 6, background: t.accent, borderRadius: 999 }} />
            Für Menschen, denen das normale System keine Diagnose geben kann
          </div>
          <h1
            style={{
              fontFamily: t.serif,
              fontWeight: 400,
              fontSize: 82,
              lineHeight: 1.0,
              letterSpacing: "-0.022em",
              margin: "26px 0 0",
              maxWidth: 760,
              color: t.ink,
              textWrap: "balance",
            }}
          >
            {renderHeadline(t.headline, t)}
          </h1>
          <p
            style={{
              fontFamily: t.serif,
              fontWeight: 300,
              fontSize: 23,
              lineHeight: 1.48,
              color: t.slate,
              marginTop: 28,
              maxWidth: 620,
            }}
          >
            Ein Recherche-Programm für seltene und schwer zu diagnostizierende Krankheiten. Wir
            lesen die medizinische Forschung auf deinen Fall hin, bereiten deine Facharzttermine
            vor und arbeiten mit dir, bis du eine Antwort hast.
          </p>

          <div
            style={{
              marginTop: 22,
              padding: "14px 18px",
              background: t.warm,
              borderLeft: `3px solid ${t.accent}`,
              maxWidth: 620,
              display: "flex",
              gap: 18,
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontFamily: t.mono,
                fontSize: 10,
                letterSpacing: ".18em",
                color: t.accent,
                textTransform: "uppercase",
              }}
            >
              Alpha-Phase
            </span>
            <span style={{ fontSize: 14, color: t.ink, lineHeight: 1.5 }}>
              Persönlicher Data Scientist inklusive · kostenlos
            </span>
          </div>

          <div
            style={{
              marginTop: 36,
              display: "flex",
              gap: 18,
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href="/bewerbung"
              style={{
                background: t.ink,
                color: t.paper,
                padding: "15px 26px",
                fontSize: 15,
                fontWeight: 500,
                textDecoration: "none",
                letterSpacing: ".02em",
              }}
            >
              Schauen, ob das zu dir passt →
            </a>
            <a
              href="/methode"
              style={{
                color: t.ink,
                fontSize: 14,
                textDecoration: "none",
                borderBottom: `1px solid ${t.ink}`,
                paddingBottom: 2,
              }}
            >
              Oder erst die Methode lesen
            </a>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center", position: "relative" }}>
          <div
            style={{
              position: "absolute",
              inset: -40,
              background: `radial-gradient(55% 50% at 60% 50%, ${t.warm} 0%, transparent 70%)`,
              filter: "blur(10px)",
            }}
          />
          <div style={{ position: "relative" }}>
            <AppScreenshot
              src="/screens/home_02_anamnesis_done.png"
              alt="Tab Heute — der aktuelle Fall"
              width={340}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomeBistDuHier({ t }: { t: Theme }) {
  return (
    <Section t={t} kicker="§01 · Bist du hier richtig?" divider>
      <div style={{ display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: 56, alignItems: "end" }}>
        <h2
          style={{
            fontFamily: t.serif,
            fontWeight: 400,
            fontSize: 56,
            lineHeight: 1.04,
            letterSpacing: "-0.015em",
            margin: 0,
            color: t.ink,
            textWrap: "balance",
          }}
        >
          Diese Seite ist nicht für jeden.
        </h2>
        <p style={{ fontFamily: t.serif, fontSize: 21, lineHeight: 1.5, color: t.slate, margin: 0 }}>
          Du warst bei deinem Hausarzt oder deiner Hausärztin. Du warst danach bei mindestens
          einer:m Spezialist:in — und bist ohne Diagnose herausgekommen. Du bist krank, schon
          länger, und das normale System hat dich bisher nicht weitergebracht.{" "}
          <em style={{ fontStyle: "italic", color: t.ink }}>
            Wenn du hier nickst, bist du hier richtig.
          </em>
        </p>
      </div>

      <div style={{ marginTop: 32 }}>
        <a
          href="/wer-passt"
          style={{
            display: "inline-block",
            fontFamily: t.serif,
            fontSize: 17,
            color: t.ink,
            textDecoration: "none",
            borderBottom: `1px solid ${t.ink}`,
            paddingBottom: 2,
          }}
        >
          Ausführlich: Bist du hier richtig? →
        </a>
      </div>
    </Section>
  );
}

export function HomeDreiSaeulen({ t }: { t: Theme }) {
  const pillars = [
    {
      n: "01",
      title: "Du findest die richtigen Spezialist:innen.",
      body: "Aus deiner Geschichte, deinen Befunden und der medizinischen Forschung leiten wir ab, welche Fachrichtung als nächste sinnvoll ist — und wenn nötig, welche konkrete Klinik oder welche:r Ärzt:in.",
      foot: "Keine eigenen Google-Suchen mehr. Keine drei Monate Wartezeit auf den falschen Termin.",
      mark: "→ Wen sehen.",
    },
    {
      n: "02",
      title: "Deine Ärzt:innen werden für dich produktiver.",
      body: "Vor jedem Termin bekommt dein:e Ärzt:in ein zweiseitiges Briefing: die relevanten Fakten über dich, die passende aktuelle Forschung, eine konkrete Frage. Wo es hilft, auch rechnerische Entscheidungshilfen.",
      foot: "Aus fünfzehn Minuten Sprechstunde wird ein fokussierter Schritt nach vorn.",
      mark: "→ Was fragen.",
    },
    {
      n: "03",
      title: "Wir behalten für dich den Überblick.",
      body: "Befunde, Termine, Hypothesen, neue Studien — alles fließt in ein wachsendes Gesamtbild zusammen. Niemand verlangt von dir, das selbst zu koordinieren.",
      foot: "Mit jedem Ergebnis wird die Liste plausibler Ursachen kürzer und schärfer — bis dein:e Ärzt:in eine fundierte Diagnose stellen kann.",
      mark: "→ Den Überblick behalten.",
    },
  ];

  return (
    <section id="saeulen" style={{ background: t.card, borderTop: `1px solid ${t.soft}` }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "112px 48px" }}>
        <SectionKicker t={t}>§02 · Was du bekommst</SectionKicker>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 1fr",
            gap: 56,
            alignItems: "end",
            marginBottom: 72,
          }}
        >
          <h2
            style={{
              fontFamily: t.serif,
              fontWeight: 400,
              fontSize: 76,
              lineHeight: 1.0,
              letterSpacing: "-0.022em",
              margin: 0,
              color: t.ink,
              textWrap: "balance",
            }}
          >
            Drei Dinge, die dir das normale System nicht geben kann.
          </h2>
          <p
            style={{
              fontFamily: t.serif,
              fontSize: 20,
              lineHeight: 1.55,
              color: t.slate,
              margin: 0,
              maxWidth: 460,
            }}
          >
            Wir lösen nicht alles. Aber das hier — diese drei Dinge — ist das, was zwischen dir
            und einer Antwort meistens fehlt. Und es ist das, woran wir arbeiten, jeden Tag, an
            deinem Fall.
          </p>
        </div>

        <ol
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 0,
            borderTop: `1.5px solid ${t.ink}`,
          }}
        >
          {pillars.map((p, i) => (
            <li
              key={p.n}
              style={{
                padding: "44px 36px 44px 0",
                paddingLeft: i === 0 ? 0 : 36,
                paddingRight: i === pillars.length - 1 ? 0 : 36,
                borderRight: i < pillars.length - 1 ? `1px solid ${t.soft}` : "none",
                display: "flex",
                flexDirection: "column",
                gap: 20,
                position: "relative",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                  gap: 12,
                }}
              >
                <span
                  style={{
                    fontFamily: t.serif,
                    fontStyle: "italic",
                    fontSize: 64,
                    lineHeight: 1,
                    color: t.accent,
                    letterSpacing: "-0.02em",
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {p.n}
                </span>
                <span
                  style={{
                    fontFamily: t.mono,
                    fontSize: 11,
                    letterSpacing: ".14em",
                    textTransform: "uppercase",
                    color: t.accent,
                    textAlign: "right",
                  }}
                >
                  {p.mark}
                </span>
              </div>

              <h3
                style={{
                  fontFamily: t.serif,
                  fontWeight: 500,
                  fontSize: 30,
                  lineHeight: 1.15,
                  letterSpacing: "-0.01em",
                  margin: 0,
                  color: t.ink,
                  textWrap: "balance",
                }}
              >
                {p.title}
              </h3>

              <p style={{ fontSize: 16, lineHeight: 1.65, color: t.slate, margin: 0 }}>{p.body}</p>

              <p
                style={{
                  fontFamily: t.serif,
                  fontStyle: "italic",
                  fontSize: 17,
                  lineHeight: 1.5,
                  color: t.ink,
                  margin: 0,
                  marginTop: "auto",
                  paddingTop: 18,
                  borderTop: `1px dashed ${t.soft}`,
                }}
              >
                {p.foot}
              </p>
            </li>
          ))}
        </ol>

        <div
          style={{
            marginTop: 56,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <p style={{ fontSize: 15, color: t.slate, margin: 0, maxWidth: 640, lineHeight: 1.6 }}>
            Wie das genau funktioniert — Sherlock-Holmes-Prinzip, sechs Schritte, was wir anders
            machen als eine Sprechstunde — steht auf der Methode-Seite.
          </p>
          <a
            href="/methode"
            style={{
              fontFamily: t.serif,
              fontSize: 17,
              color: t.ink,
              textDecoration: "none",
              borderBottom: `1px solid ${t.ink}`,
              paddingBottom: 2,
            }}
          >
            Im Detail: Wie wir arbeiten →
          </a>
        </div>
      </div>
    </section>
  );
}

export function HomeBlickInDieApp({ t }: { t: Theme }) {
  const screens = [
    {
      src: "/screens/home_02_anamnesis_done.png",
      tab: "Heute",
      title: "Dein Fall, auf einen Blick.",
      caption:
        "Nächster Termin, was wir gerade lesen, deine Ablage — alles an einer Stelle.",
    },
    {
      src: "/screens/home_05_doing_answer_question.png",
      tab: "Anamnese",
      title: "Erzähl in deinem Tempo.",
      caption:
        "Offene Fragen darfst du einsprechen — wir transkribieren. Kein Pflichttext.",
    },
    {
      src: "/screens/tasks_01_overview.png",
      tab: "Aufgaben",
      title: "Wenn wir etwas von dir brauchen.",
      caption:
        "Rückfragen und Fragebögen, die das System aktuell zur Recherche braucht.",
    },
    {
      src: "/screens/journal_01_my_notes.png",
      tab: "Notizbuch",
      title: "Beobachtungen festhalten.",
      caption:
        "Schreiben oder sprechen — kleine Notizen, die für deine Ärzt:innen wichtig werden können.",
    },
    {
      src: "/screens/visits_02_visit_detail.png",
      tab: "Termin",
      title: "Briefing für deine Ärzt:in.",
      caption:
        "Zwei Seiten Fakten, Forschungsstand, konkrete Frage. Du bringst es mit.",
    },
  ];

  return (
    <section style={{ background: t.card, borderTop: `1px solid ${t.soft}` }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "112px 48px 96px" }}>
        <SectionKicker t={t}>§02b · Ein Blick in die App</SectionKicker>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 1fr",
            gap: 56,
            alignItems: "end",
            marginBottom: 56,
          }}
        >
          <h2
            style={{
              fontFamily: t.serif,
              fontWeight: 400,
              fontSize: 64,
              lineHeight: 1.02,
              letterSpacing: "-0.02em",
              margin: 0,
              color: t.ink,
              textWrap: "balance",
            }}
          >
            Eine ruhige App. Vier Tabs. Kein Dashboard, das dich erschlägt.
          </h2>
          <p
            style={{
              fontFamily: t.serif,
              fontSize: 19,
              lineHeight: 1.5,
              color: t.slate,
              margin: 0,
              maxWidth: 460,
            }}
          >
            Du musst sie nicht jeden Tag öffnen. Wenn etwas von dir gebraucht wird, sagen wir
            Bescheid — dazwischen läuft die Recherche im Hintergrund weiter.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(220px, 280px) 1fr",
            gap: 64,
            alignItems: "center",
            paddingBottom: 56,
            borderBottom: `1px solid ${t.soft}`,
          }}
        >
          <div style={{ display: "flex", justifyContent: "center", position: "relative" }}>
            <div
              style={{
                position: "absolute",
                inset: -36,
                background: `radial-gradient(60% 50% at 50% 50%, ${t.warm} 0%, transparent 70%)`,
                opacity: 0.55,
                filter: "blur(10px)",
              }}
            />
            <div style={{ position: "relative" }}>
              <AppScreenshot src={screens[0].src} width={260} alt={screens[0].title} />
            </div>
          </div>
          <div>
            <div
              style={{
                fontFamily: t.mono,
                fontSize: 11,
                letterSpacing: ".18em",
                color: t.accent,
                textTransform: "uppercase",
              }}
            >
              Tab · {screens[0].tab} · Startbildschirm
            </div>
            <h3
              style={{
                fontFamily: t.serif,
                fontWeight: 500,
                fontSize: 40,
                lineHeight: 1.1,
                letterSpacing: "-0.012em",
                color: t.ink,
                margin: "12px 0 0",
                textWrap: "balance",
              }}
            >
              {screens[0].title}
            </h3>
            <p
              style={{
                fontFamily: t.serif,
                fontSize: 19,
                lineHeight: 1.55,
                color: t.slate,
                marginTop: 18,
                maxWidth: 520,
              }}
            >
              Nächster Termin, was wir gerade lesen, deine Befunde — alles auf einer Karte. Kein
              Zahlen-Dashboard, keine Push-Lawine. Du musst die App nicht jeden Tag öffnen.
            </p>
          </div>
        </div>

        <div
          style={{
            marginTop: 56,
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 32,
          }}
        >
          {screens.slice(1).map((s, i) => (
            <figure
              key={i}
              style={{
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: 18,
                paddingTop: i % 2 ? 24 : 0,
              }}
            >
              <div style={{ display: "flex", justifyContent: "center" }}>
                <AppScreenshot src={s.src} width={184} alt={s.title} />
              </div>
              <figcaption style={{ padding: "0 4px" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
                  <span
                    style={{
                      fontFamily: t.serif,
                      fontStyle: "italic",
                      fontSize: 20,
                      color: t.accent,
                      lineHeight: 1,
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {String(i + 2).padStart(2, "0")}
                  </span>
                  <span
                    style={{
                      fontFamily: t.mono,
                      fontSize: 10,
                      letterSpacing: ".18em",
                      color: t.accent,
                      textTransform: "uppercase",
                    }}
                  >
                    Tab · {s.tab}
                  </span>
                </div>
                <div
                  style={{
                    fontFamily: t.serif,
                    fontSize: 18,
                    lineHeight: 1.2,
                    color: t.ink,
                    marginTop: 8,
                    fontWeight: 500,
                    textWrap: "balance",
                  }}
                >
                  {s.title}
                </div>
                <div style={{ fontSize: 13, lineHeight: 1.55, color: t.slate, marginTop: 6 }}>
                  {s.caption}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div
          style={{
            marginTop: 40,
            paddingTop: 20,
            borderTop: `1px dashed ${t.soft}`,
            fontFamily: t.mono,
            fontSize: 11,
            letterSpacing: ".14em",
            color: t.mute,
            textTransform: "uppercase",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <span>Screenshots aus der aktuellen Alpha</span>
          <span>Inhalte beispielhaft · {t.brand} v0.x</span>
        </div>
      </div>
    </section>
  );
}

export function HomeAblauf({ t }: { t: Theme }) {
  const steps: [string, string][] = [
    ["Kennenlernen", "Anamnese, deine Unterlagen, deine Geschichte."],
    ["Mögliche Ursachen auf die Liste", "Auch die seltenen, auch die unwahrscheinlichen."],
    ["Aussortieren, was nicht passt", "Aus allem, was wir über dich wissen."],
    ["Nach Wahrscheinlichkeit sortieren", "Was bleibt, wird priorisiert."],
    ["Nächsten Termin vorbereiten", "Welche Fachrichtung, welche Frage."],
    ["Termin findet statt", "Befunde fließen zurück."],
    ["Die Liste wird kürzer", "Schritte 3–6 wiederholen sich — bis eine Diagnose steht."],
  ];

  return (
    <Section t={t} kicker="§03 · Wie das funktioniert" divider>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.1fr 1fr",
          gap: 56,
          marginBottom: 56,
          alignItems: "start",
        }}
      >
        <div>
          <div
            style={{
              fontFamily: t.mono,
              fontSize: 11,
              letterSpacing: ".18em",
              color: t.accent,
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            Das Sherlock-Holmes-Prinzip
          </div>
          <h2
            style={{
              fontFamily: t.serif,
              fontWeight: 400,
              fontSize: 56,
              lineHeight: 1.03,
              letterSpacing: "-0.018em",
              margin: 0,
              color: t.ink,
              textWrap: "balance",
            }}
          >
            Genau so arbeiten Ärzt:innen in der Theorie. In der Praxis fehlt dafür die Zeit.
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: t.slate, marginTop: 22 }}>
            Differenzialdiagnostik: nichts vorab ausschließen, dann systematisch aussortieren, bis
            die Wahrheit übrig bleibt. Das Problem ist nicht die Methode. Das Problem ist die
            Zeit, die sie braucht. <strong style={{ color: t.ink }}>Wir haben sie.</strong>
          </p>
        </div>

        <blockquote
          style={{
            margin: 0,
            padding: "32px 36px",
            background: t.card,
            borderLeft: `3px solid ${t.accent}`,
            fontFamily: t.serif,
          }}
        >
          <p
            style={{
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: 22,
              lineHeight: 1.45,
              color: t.ink,
              margin: 0,
            }}
          >
            „Wenn man das Unmögliche ausgeschlossen hat, muss das, was übrig bleibt — wie
            unwahrscheinlich es auch sein mag — die Wahrheit sein."
          </p>
          <footer
            style={{
              fontFamily: t.sans,
              fontSize: 13,
              color: t.mute,
              marginTop: 18,
              letterSpacing: ".02em",
            }}
          >
            — Arthur Conan Doyle
          </footer>
        </blockquote>
      </div>

      <div style={{ background: t.card, border: `1px solid ${t.ink}`, padding: "32px 36px" }}>
        <div
          style={{
            fontFamily: t.mono,
            fontSize: 11,
            letterSpacing: ".18em",
            color: t.accent,
            textTransform: "uppercase",
            marginBottom: 22,
          }}
        >
          Der Ablauf · sieben Schritte
        </div>
        <ol
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
            gap: 14,
            position: "relative",
          }}
        >
          {steps.map(([title, body], i) => (
            <li
              key={i}
              style={{
                position: "relative",
                paddingTop: 22,
                borderTop: `2px solid ${i >= 2 && i <= 5 ? t.accent : t.ink}`,
              }}
            >
              <div
                style={{
                  fontFamily: t.mono,
                  fontSize: 10,
                  letterSpacing: ".14em",
                  color: t.accent,
                  textTransform: "uppercase",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <div
                style={{
                  fontFamily: t.serif,
                  fontWeight: 500,
                  fontSize: 16,
                  lineHeight: 1.2,
                  color: t.ink,
                  marginTop: 6,
                  textWrap: "balance",
                }}
              >
                {title}
              </div>
              <div style={{ fontSize: 12, lineHeight: 1.45, color: t.slate, marginTop: 6 }}>
                {body}
              </div>
            </li>
          ))}
        </ol>
        <div
          style={{
            marginTop: 24,
            padding: "14px 18px",
            background: t.paper,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontFamily: t.mono,
            fontSize: 11,
            letterSpacing: ".14em",
            color: t.accent,
            textTransform: "uppercase",
            border: `1px dashed ${t.accent}`,
          }}
        >
          <span>↻ Schritte 3 – 6 wiederholen sich</span>
          <span>so lange, bis eine Diagnose steht</span>
        </div>
      </div>

      <div style={{ marginTop: 32, textAlign: "right" }}>
        <a
          href="/methode"
          style={{
            fontFamily: t.serif,
            fontSize: 17,
            color: t.ink,
            textDecoration: "none",
            borderBottom: `1px solid ${t.ink}`,
            paddingBottom: 2,
          }}
        >
          Mehr zur Methode →
        </a>
      </div>
    </Section>
  );
}

export function HomeBouldering({ t }: { t: Theme }) {
  return (
    <section style={{ background: t.ink, color: t.paper, borderTop: `1px solid ${t.soft}` }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "112px 48px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}>
          <span
            style={{
              fontFamily: t.mono,
              fontSize: 11,
              letterSpacing: ".2em",
              textTransform: "uppercase",
              color: `${t.paper}cc`,
            }}
          >
            §04 · Wir haben das einmal selbst durchgemacht
          </span>
          <span style={{ flex: 1, height: 1, background: `${t.paper}55` }} />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr",
            gap: 72,
            alignItems: "start",
          }}
        >
          <div style={{ fontFamily: t.serif }}>
            <h2
              style={{
                fontFamily: t.serif,
                fontWeight: 400,
                fontSize: 56,
                lineHeight: 1.04,
                letterSpacing: "-0.018em",
                margin: 0,
                color: t.paper,
                textWrap: "balance",
              }}
            >
              Monatelang Fußschmerzen. Niemand wusste, warum.
            </h2>

            <p
              style={{
                fontSize: 20,
                lineHeight: 1.55,
                marginTop: 28,
                color: t.paper,
                fontWeight: 400,
              }}
            >
              Einer von uns hatte monatelang Fußschmerzen nach einer Sportverletzung. Hausarzt,
              Spezialärztin, MRT, Röntgen — die Entzündung war klar zu sehen, die Ursache nicht.
              Empfehlung: noch drei Monate Pause.
            </p>

            <p style={{ fontSize: 18, lineHeight: 1.65, marginTop: 20, color: `${t.paper}dd` }}>
              Wir haben den Fall in eine frühe Version unseres Systems gefüttert. Es stellte
              ähnliche Fragen wie die Ärztin — aber im Gegensatz zu ihr hatte es Zeit, jede
              einzelne Antwort kritisch zu hinterfragen. Eine seiner Antworten war nämlich
              falsch. Nicht aus bösem Willen — er konnte den Zusammenhang als Patient einfach
              nicht sehen. <strong style={{ color: t.paper }}>Das System fand ihn.</strong> Die
              Ursache war kein Sportthema. Es waren zu enge Kletterschuhe.
            </p>

            <p
              style={{
                fontFamily: t.serif,
                fontStyle: "italic",
                fontSize: 19,
                lineHeight: 1.5,
                marginTop: 24,
                color: `${t.paper}cc`,
                paddingTop: 20,
                borderTop: `1px solid ${t.paper}33`,
              }}
            >
              Im Nachhinein wirkt die Diagnose trivial. Das geht oft so, wenn man die Antwort
              kennt. Die Ärztin hätte sie mit genug Zeit auch gefunden. Sie hatte sie nicht.
              Computer haben unbegrenzt davon.
            </p>

            <div style={{ marginTop: 28 }}>
              <a
                href="/ueber-uns#erster-fall"
                style={{
                  fontFamily: t.serif,
                  fontSize: 17,
                  color: t.warm,
                  textDecoration: "none",
                  borderBottom: `1px solid ${t.warm}`,
                  paddingBottom: 2,
                }}
              >
                Die ganze Geschichte →
              </a>
            </div>
          </div>

          <aside style={{ paddingTop: 12 }}>
            {t.showPhotos && (
              <picture>
                <source srcSet="/boulder_shoes.webp" type="image/webp" />
                <img
                  src="/boulder_shoes.jpg"
                  alt="Detail eines Kletterschuhs"
                  loading="lazy"
                  decoding="async"
                  width={1200}
                  height={1800}
                  style={{
                    width: "100%",
                    aspectRatio: "4/5",
                    objectFit: "cover",
                    display: "block",
                    background: `${t.paper}22`,
                  }}
                />
              </picture>
            )}
            <div
              style={{
                marginTop: 24,
                padding: 22,
                background: `${t.paper}10`,
                border: `1px solid ${t.paper}33`,
              }}
            >
              <div
                style={{
                  fontFamily: t.mono,
                  fontSize: 11,
                  letterSpacing: ".18em",
                  color: t.warm,
                  textTransform: "uppercase",
                  marginBottom: 12,
                }}
              >
                Was die Geschichte zeigt
              </div>
              <p
                style={{
                  fontFamily: t.serif,
                  fontSize: 17,
                  lineHeight: 1.55,
                  color: t.paper,
                  margin: 0,
                  fontStyle: "italic",
                }}
              >
                Computer haben Zeit. Sie hinterfragen geduldig. Und sie übernehmen keine Aussage
                kritiklos — auch nicht deine eigene.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export function HomeVersprechen({ t }: { t: Theme }) {
  const can = [
    "Wir lesen mehr Studien zu deinem Fall, als ein:e Ärzt:in es je schaffen könnte. Wenn die Antwort in der Forschung steht, finden wir sie.",
    "Wir bereiten deine Termine so vor, dass dein:e Ärzt:in den vollen relevanten Stand des Wissens hat — auf einer Seite.",
    "Wir nehmen dir die Navigation des Gesundheitssystems ab: DSGVO-Schreiben, Fachrichtung-Recherche, Befundordnung.",
    "Du behältst die Zügel: deine Ärzt:innen, deine Entscheidungen.",
  ];
  const cant = [
    "Keine garantierte Diagnose. Manche Fälle bleiben ungelöst.",
    "Keine Heilung. Auch eine Diagnose ist nicht immer behandelbar.",
    "Keine schnelle Antwort. Der Prozess dauert Monate.",
    "Wir ersetzen weder Hausarzt:in noch Facharzt:in — wir arbeiten mit ihnen.",
    "Wir sind keine zugelassene medizinische Versorgung — ein Forschungsprogramm im Frühstadium.",
  ];

  return (
    <Section t={t} kicker="§05 · Was wir versprechen — und was nicht" bg={t.card} divider>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.05fr 1fr",
          gap: 56,
          alignItems: "end",
          marginBottom: 48,
        }}
      >
        <h2
          style={{
            fontFamily: t.serif,
            fontWeight: 400,
            fontSize: 60,
            lineHeight: 1.03,
            letterSpacing: "-0.018em",
            margin: 0,
            color: t.ink,
            textWrap: "balance",
          }}
        >
          Ehrlichkeit ist Teil der Methode.
        </h2>
        <p
          style={{
            fontFamily: t.serif,
            fontSize: 19,
            lineHeight: 1.5,
            color: t.slate,
            margin: 0,
          }}
        >
          In einem Markt, der von Heilsversprechen lebt, ist das Weglassen das Statement.
          Versprechen, die beim ersten Rückschlag im Alltag einbrechen, kosten das Vertrauen,
          das sie aufgebaut haben.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 0,
          borderTop: `1.5px solid ${t.ink}`,
        }}
      >
        <div style={{ padding: "32px 32px 32px 0", borderRight: `1px solid ${t.ink}` }}>
          <div
            style={{
              fontFamily: t.mono,
              fontSize: 11,
              letterSpacing: ".18em",
              color: t.accent,
              textTransform: "uppercase",
              marginBottom: 18,
            }}
          >
            Was wir versprechen können
          </div>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: 18,
            }}
          >
            {can.map((it, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  gap: 14,
                  fontSize: 17,
                  lineHeight: 1.55,
                  color: t.ink,
                }}
              >
                <span
                  style={{
                    color: t.accent,
                    fontFamily: t.mono,
                    fontSize: 16,
                    width: 18,
                    flexShrink: 0,
                  }}
                >
                  ✓
                </span>
                <span style={{ flex: 1 }}>{it}</span>
              </li>
            ))}
          </ul>
        </div>
        <div style={{ padding: "32px 0 32px 32px" }}>
          <div
            style={{
              fontFamily: t.mono,
              fontSize: 11,
              letterSpacing: ".18em",
              color: t.mute,
              textTransform: "uppercase",
              marginBottom: 18,
            }}
          >
            Was wir nicht versprechen
          </div>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: 18,
            }}
          >
            {cant.map((it, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  gap: 14,
                  fontSize: 17,
                  lineHeight: 1.55,
                  color: t.ink,
                }}
              >
                <span
                  style={{
                    color: t.mute,
                    fontFamily: t.mono,
                    fontSize: 16,
                    width: 18,
                    flexShrink: 0,
                  }}
                >
                  ·
                </span>
                <span style={{ flex: 1 }}>{it}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div style={{ marginTop: 32, textAlign: "right" }}>
        <a
          href="/transparenz"
          style={{
            fontFamily: t.serif,
            fontSize: 17,
            color: t.ink,
            textDecoration: "none",
            borderBottom: `1px solid ${t.ink}`,
            paddingBottom: 2,
          }}
        >
          Mehr zur Transparenz: Daten, Finanzierung, Stadium →
        </a>
      </div>
    </Section>
  );
}

export function HomeAlphaKurz({ t }: { t: Theme }) {
  const cards: [string, string, string][] = [
    ["1", "Data Scientist", "feste Bezugsperson · vom ersten Call bis zur Diagnose"],
    ["0 €", "in der Alpha", "kostenpflichtig erst in späteren Phasen"],
    ["Eigen-", "finanziert", "keine Investor:innen, keine Wachstumsmetriken"],
  ];
  return (
    <Section t={t} kicker="§06 · Was die Alpha besonders macht" divider>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.1fr 1fr",
          gap: 56,
          alignItems: "start",
        }}
      >
        <div>
          <h2
            style={{
              fontFamily: t.serif,
              fontWeight: 400,
              fontSize: 56,
              lineHeight: 1.04,
              letterSpacing: "-0.016em",
              margin: 0,
              color: t.ink,
              textWrap: "balance",
            }}
          >
            Eine Form der Aufmerksamkeit, die in zwei Jahren so nicht mehr existiert.
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.65, color: t.slate, marginTop: 22 }}>
            Aktuell begleiten wir eine kleine Hand voll Patient:innen parallel — persönlich, mit
            großem Aufwand pro Fall. Wer jetzt mitmacht, bekommt eine:n Data Scientist als feste
            Bezugsperson, vom ersten Onboarding-Call bis zur Diagnose.
          </p>
          <p style={{ fontSize: 18, lineHeight: 1.65, color: t.slate, marginTop: 14 }}>
            Wir sind aus Eigenmitteln finanziert, ohne Investor:innen mit Wachstumsdruck. Genau
            deshalb können wir die Alpha kostenlos anbieten — wir brauchen Tester:innen, keine
            Kund:innen, und wir lernen aus echten Fällen, was wir aus simulierten nicht lernen
            können.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {cards.map(([big, label, sub], i) => (
            <div
              key={i}
              style={{
                background: t.card,
                border: `1px solid ${t.ink}`,
                padding: "20px 22px",
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                gap: 22,
                alignItems: "baseline",
              }}
            >
              <div
                style={{
                  fontFamily: t.serif,
                  fontWeight: 500,
                  fontSize: 42,
                  lineHeight: 0.95,
                  color: t.ink,
                  letterSpacing: "-0.02em",
                  fontVariantNumeric: "tabular-nums",
                  whiteSpace: "nowrap",
                }}
              >
                {big}
              </div>
              <div>
                <div style={{ fontSize: 15, color: t.ink, fontWeight: 500 }}>{label}</div>
                <div style={{ fontSize: 13, color: t.slate, marginTop: 4, lineHeight: 1.5 }}>
                  {sub}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function HomeBewerbungShort({ t }: { t: Theme }) {
  const steps: [string, string, string][] = [
    [
      "01",
      "Kurzes Formular ausfüllen.",
      "Name, Alter, Kontakt, ein paar Häkchen — optional zwei Sätze zur Situation.",
    ],
    [
      "02",
      "Onboarding-Call mit uns.",
      "Wir melden uns innerhalb von ein bis drei Werktagen mit Terminvorschlägen.",
    ],
    [
      "03",
      "App-Zugang nach dem Call.",
      "Wenn es für beide Seiten passt. Wenn nicht, sagen wir das ehrlich.",
    ],
  ];

  return (
    <section style={{ background: t.paper, borderTop: `1px solid ${t.soft}` }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "112px 48px" }}>
        <SectionKicker t={t}>§07 · Bewerbung</SectionKicker>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 1fr",
            gap: 56,
            alignItems: "end",
            marginBottom: 56,
          }}
        >
          <h2
            style={{
              fontFamily: t.serif,
              fontWeight: 400,
              fontSize: 68,
              lineHeight: 1.02,
              letterSpacing: "-0.02em",
              margin: 0,
              color: t.ink,
              textWrap: "balance",
            }}
          >
            In drei Schritten.
          </h2>
          <p
            style={{
              fontFamily: t.serif,
              fontSize: 20,
              lineHeight: 1.5,
              color: t.slate,
              margin: 0,
              maxWidth: 460,
            }}
          >
            Wir reservieren keinen Platz, bevor wir gesprochen haben. Und du musst dich nicht
            entschieden haben, bevor wir gesprochen haben.
          </p>
        </div>

        <ol
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 0,
            borderTop: `1.5px solid ${t.ink}`,
          }}
        >
          {steps.map(([n, h, b], i, arr) => (
            <li
              key={n}
              style={{
                padding: "36px 32px 36px 0",
                paddingLeft: i === 0 ? 0 : 32,
                paddingRight: i === arr.length - 1 ? 0 : 32,
                borderRight: i < arr.length - 1 ? `1px solid ${t.soft}` : "none",
              }}
            >
              <div
                style={{
                  fontFamily: t.serif,
                  fontStyle: "italic",
                  fontSize: 44,
                  color: t.accent,
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {n}
              </div>
              <div
                style={{
                  fontFamily: t.serif,
                  fontWeight: 500,
                  fontSize: 26,
                  lineHeight: 1.2,
                  marginTop: 16,
                  color: t.ink,
                  textWrap: "balance",
                }}
              >
                {h}
              </div>
              <p style={{ fontSize: 15, color: t.slate, marginTop: 12, lineHeight: 1.6 }}>{b}</p>
            </li>
          ))}
        </ol>

        <div
          style={{
            marginTop: 48,
            padding: "28px 32px",
            background: t.ink,
            color: t.paper,
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: 32,
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: t.mono,
                fontSize: 11,
                letterSpacing: ".18em",
                color: t.warm,
                textTransform: "uppercase",
                marginBottom: 8,
              }}
            >
              Nächster Schritt
            </div>
            <div style={{ fontFamily: t.serif, fontSize: 26, lineHeight: 1.2 }}>
              Bereit? Schauen wir gemeinsam, ob das passt.
            </div>
          </div>
          <a
            href="/bewerbung"
            style={{
              background: t.warm,
              color: t.ink,
              padding: "16px 26px",
              fontSize: 15,
              fontWeight: 500,
              textDecoration: "none",
              letterSpacing: ".02em",
              whiteSpace: "nowrap",
            }}
          >
            Zum Bewerbungsformular →
          </a>
        </div>
      </div>
    </section>
  );
}
