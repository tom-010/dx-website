import { Form } from "react-router";
import type { Theme } from "./theme";
import { Section, SectionKicker, AppScreenshot, PhotoSlot } from "./Primitives";

// ─── /wer-passt ──────────────────────────────────────────────────────────
function Card({
  t,
  label,
  accent,
  children,
}: {
  t: Theme;
  label: string;
  accent: "ok" | "no";
  children: React.ReactNode;
}) {
  const isOk = accent === "ok";
  return (
    <div style={{ background: t.card, border: `1px solid ${t.soft}`, padding: 28, position: "relative" }}>
      <div
        style={{
          fontFamily: t.mono,
          fontSize: 11,
          letterSpacing: ".16em",
          textTransform: "uppercase",
          color: isOk ? t.accent : t.mute,
          marginBottom: 14,
        }}
      >
        {label}
      </div>
      {children}
    </div>
  );
}

function Bullets({
  t,
  kind,
  items,
}: {
  t: Theme;
  kind: "check" | "cross";
  items: React.ReactNode[];
}) {
  const isCheck = kind === "check";
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
      {items.map((c, i) => (
        <li
          key={i}
          style={{
            display: "flex",
            gap: 12,
            alignItems: "baseline",
            fontSize: 16,
            color: t.ink,
            lineHeight: 1.45,
          }}
        >
          <span
            style={{
              flex: "0 0 auto",
              fontFamily: t.mono,
              fontSize: 15,
              color: isCheck ? t.accent : t.mute,
              width: 14,
            }}
          >
            {isCheck ? "✓" : "×"}
          </span>
          <span style={{ flex: 1 }}>{c}</span>
        </li>
      ))}
    </ul>
  );
}

export function SectionBistDuHierRichtig({ t }: { t: Theme }) {
  return (
    <Section t={t} kicker="§II · Bist du hier richtig?" divider>
      <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 56, marginBottom: 48 }}>
        <h2
          style={{
            fontFamily: t.serif,
            fontWeight: 400,
            fontSize: 56,
            lineHeight: 1.04,
            letterSpacing: "-0.015em",
            margin: 0,
            color: t.ink,
          }}
        >
          Diese Seite ist nicht für jeden.
        </h2>
        <p
          style={{
            fontFamily: t.serif,
            fontSize: 20,
            lineHeight: 1.5,
            color: t.slate,
            margin: 0,
            alignSelf: "end",
          }}
        >
          Wir filtern in beide Richtungen — für dich, und für uns. Lies das hier zuerst, bevor du dich
          bewirbst.
        </p>
      </div>

      <div
        style={{
          background: t.card,
          border: `1px solid ${t.soft}`,
          padding: "40px 48px",
          marginBottom: 32,
          maxWidth: 920,
        }}
      >
        <div
          style={{
            fontFamily: t.mono,
            fontSize: 11,
            letterSpacing: ".18em",
            color: t.accent,
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          Wenn das ungefähr deine Situation ist
        </div>
        <p style={{ fontFamily: t.serif, fontSize: 21, lineHeight: 1.55, color: t.ink, margin: 0 }}>
          Vielleicht sitzt du gerade am Handy. Vielleicht hat dir jemand den Link geschickt. Vielleicht
          hast du dir deine Symptome ergooglet und bist hier gelandet.{" "}
          <em style={{ fontStyle: "italic", color: t.accent }}>Was sicher ist:</em> du bist krank,
          schon länger, nicht erst seit gestern.
        </p>
        <p style={{ fontFamily: t.serif, fontSize: 19, lineHeight: 1.6, color: t.slate, marginTop: 18 }}>
          Du warst bei deinem Hausarzt oder deiner Hausärztin. Du hast Wochen oder Monate auf einen
          Spezialarzttermin gewartet. Du bist mit Hoffnung in den Termin gegangen, vielleicht mit
          einer vorbereiteten Liste von Fragen. Und du bist mit nichts wieder herausgekommen. Vielleicht
          mit einem „warten Sie noch drei Monate ab". Vielleicht mit „setzen Sie das Medikament weiter".
          Vielleicht mit einer Vermutung, die sich später als falsch herausgestellt hat.
        </p>
        <p
          style={{
            fontFamily: t.serif,
            fontStyle: "italic",
            fontSize: 20,
            lineHeight: 1.55,
            color: t.ink,
            marginTop: 22,
            paddingTop: 18,
            borderTop: `1px dashed ${t.soft}`,
          }}
        >
          Wenn das ungefähr deine Situation ist, dann bist du hier richtig.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
        <Card t={t} accent="ok" label="Was wir voraussetzen">
          <Bullets
            t={t}
            kind="check"
            items={[
              "Du warst bei deinem Hausarzt oder deiner Hausärztin.",
              "Du warst danach bei mindestens einer:m Fachärzt:in, und sie:er konnte dir keine klare Diagnose geben.",
              "Du hast die Arztbriefe von beiden — oder kannst sie anfordern. Sie sind unser Startpunkt.",
              "Du bist bereit für einen Prozess, der Wochen bis Monate dauert.",
            ]}
          />
        </Card>
        <Card t={t} accent="no" label="Diese Seite ist nicht für dich, wenn">
          <Bullets
            t={t}
            kind="cross"
            items={[
              "du einen normalen Schnupfen oder ein klares Akut-Problem hast — geh zu deinem Hausarzt, das System funktioniert für dich.",
              "du eine Zweitmeinung zu einer bestehenden Diagnose suchst — wir machen Erstdiagnostik, kein Review.",
              "du Behandlung, Medikamentenmanagement oder chronische Begleitung suchst — wir hören vor der Behandlung auf.",
              "du noch nicht bei einem:r Facharzt:ärztin warst — du musst diesen Weg zuerst gehen.",
            ]}
          />
        </Card>
      </div>

      <div
        style={{
          marginTop: 32,
          padding: "24px 28px",
          background: t.ink,
          color: t.paper,
          display: "grid",
          gridTemplateColumns: "auto 1fr",
          gap: 24,
          alignItems: "start",
        }}
      >
        <div
          style={{
            fontFamily: t.mono,
            fontSize: 11,
            letterSpacing: ".18em",
            color: t.warm,
            textTransform: "uppercase",
            whiteSpace: "nowrap",
            paddingTop: 4,
          }}
        >
          Wichtig — Notfall
        </div>
        <div>
          <p style={{ fontFamily: t.serif, fontSize: 17, lineHeight: 1.55, margin: 0 }}>
            Wenn du dich gerade in einer akuten Krise befindest — körperlich oder seelisch — wende
            dich bitte direkt an den ärztlichen Bereitschaftsdienst{" "}
            <strong style={{ color: t.warm }}>116 117</strong> oder im Notfall an die{" "}
            <strong style={{ color: t.warm }}>112</strong>. Die Telefonseelsorge ist kostenfrei rund
            um die Uhr erreichbar: <strong style={{ color: t.warm }}>0800 111 0 111</strong>.
          </p>
          <p
            style={{
              fontSize: 14,
              lineHeight: 1.6,
              color: `${t.paper}aa`,
              marginTop: 10,
              fontStyle: "italic",
              fontFamily: t.serif,
            }}
          >
            Wir sind kein Akut-Kanal und können in einer Krise nicht schnell genug helfen.
          </p>
        </div>
      </div>
    </Section>
  );
}

// ─── /methode helpers ────────────────────────────────────────────────────
function MethodSixStepFlow({ t }: { t: Theme }) {
  const steps = [
    "Wir lernen dich kennen",
    "Alle möglichen Krankheiten auf die Liste",
    "Streichen, was nicht passt",
    "Termin vorbereiten",
    "Termin findet statt — Befund kommt",
    "Liste wird kürzer — nächste Runde",
  ];
  const w = 1180;
  const cardW = 168;
  const cardH = 110;
  const gap = (w - 6 * cardW) / 5;
  const h = 280;
  const cardY = 130;
  const x6 = 5 * (cardW + gap) + cardW / 2;
  const x3 = 2 * (cardW + gap) + cardW / 2;
  const yTop = cardY - 12;
  const peak = 40;

  return (
    <div style={{ background: t.card, border: `1px solid ${t.ink}`, padding: 24, overflow: "hidden" }}>
      <svg viewBox={`0 0 ${w} ${h}`} width="100%" style={{ display: "block" }}>
        <defs>
          <marker id="m6arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="9" markerHeight="9" orient="auto">
            <path d="M0,0 L10,5 L0,10 Z" fill={t.ink} />
          </marker>
          <marker
            id="m6arrAcc"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="9"
            markerHeight="9"
            orient="auto"
          >
            <path d="M0,0 L10,5 L0,10 Z" fill={t.accent} />
          </marker>
        </defs>

        <g>
          <path
            d={`M ${x6} ${yTop} C ${x6} ${peak}, ${x3} ${peak}, ${x3} ${yTop}`}
            fill="none"
            stroke={t.accent}
            strokeWidth="1.8"
            strokeDasharray="6 4"
            markerEnd="url(#m6arrAcc)"
          />
          <text
            x={(x6 + x3) / 2}
            y={peak - 6}
            textAnchor="middle"
            fontFamily={t.mono}
            fontSize="11"
            letterSpacing="0.12em"
            fill={t.accent}
          >
            WIEDERHOLT SICH, BIS DIE DIAGNOSE STEHT
          </text>
        </g>

        {steps.map((label, i) => {
          const x = i * (cardW + gap);
          const words = label.split(" ");
          const lines: string[] = [];
          let cur = "";
          const maxChars = 22;
          for (const word of words) {
            if ((cur + " " + word).trim().length > maxChars) {
              lines.push(cur.trim());
              cur = word + " ";
            } else {
              cur += word + " ";
            }
          }
          if (cur) lines.push(cur.trim());
          return (
            <g key={i}>
              <rect
                x={x}
                y={cardY}
                width={cardW}
                height={cardH}
                fill={t.paper}
                stroke={t.ink}
                strokeWidth="1.5"
              />
              <text
                x={x + 14}
                y={cardY + 24}
                fontFamily={t.mono}
                fontSize="11"
                letterSpacing="0.14em"
                fill={t.accent}
              >
                SCHRITT {String(i + 1).padStart(2, "0")}
              </text>
              {lines.slice(0, 3).map((ln, li) => (
                <text
                  key={li}
                  x={x + 14}
                  y={cardY + 50 + li * 18}
                  fontFamily="Inter"
                  fontSize="14"
                  fontWeight="500"
                  fill={t.ink}
                >
                  {ln}
                </text>
              ))}
              {i < steps.length - 1 && (
                <line
                  x1={x + cardW + 4}
                  y1={cardY + cardH / 2}
                  x2={x + cardW + gap - 4}
                  y2={cardY + cardH / 2}
                  stroke={t.ink}
                  strokeWidth="1.5"
                  markerEnd="url(#m6arr)"
                />
              )}
            </g>
          );
        })}

        <g>
          <line
            x1={x6}
            y1={cardY + cardH}
            x2={x6}
            y2={cardY + cardH + 30}
            stroke={t.ink}
            strokeWidth="1.2"
          />
          <rect x={x6 - 90} y={cardY + cardH + 30} width={180} height={40} fill={t.ink} stroke={t.ink} />
          <text
            x={x6}
            y={cardY + cardH + 55}
            textAnchor="middle"
            fontFamily={t.serif}
            fontStyle="italic"
            fontSize="16"
            fill={t.paper}
          >
            → Diagnose steht
          </text>
        </g>
      </svg>
    </div>
  );
}

function StoryRow({
  t,
  n,
  title,
  body,
  subBody,
  imgSide,
  imgSrc,
  imgLabel,
  imgAspect,
}: {
  t: Theme;
  n: string;
  title: string;
  body: string;
  subBody?: string;
  imgSide: "left" | "right";
  imgSrc?: string;
  imgLabel?: string;
  imgAspect?: string;
}) {
  const text = (
    <div style={{ padding: "0 8px" }}>
      <div
        style={{
          fontFamily: t.mono,
          fontSize: 12,
          letterSpacing: ".18em",
          color: t.accent,
          textTransform: "uppercase",
        }}
      >
        Schritt {n}
      </div>
      <h3
        style={{
          fontFamily: t.serif,
          fontWeight: 400,
          fontSize: 38,
          lineHeight: 1.08,
          letterSpacing: "-0.012em",
          margin: "14px 0 0",
          color: t.ink,
        }}
      >
        {title}
      </h3>
      <p style={{ fontSize: 17, lineHeight: 1.6, color: t.slate, marginTop: 18 }}>{body}</p>
      {subBody && (
        <p
          style={{
            fontFamily: t.serif,
            fontStyle: "italic",
            fontSize: 16,
            color: t.mute,
            lineHeight: 1.55,
            marginTop: 14,
          }}
        >
          {subBody}
        </p>
      )}
    </div>
  );

  const img = (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "16px 0",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 32,
          background: `radial-gradient(50% 50% at 50% 50%, ${t.warm} 0%, transparent 70%)`,
          opacity: 0.45,
          pointerEvents: "none",
        }}
      />
      <div style={{ position: "relative" }}>
        {imgSrc ? (
          <AppScreenshot src={imgSrc} width={260} alt={title} />
        ) : (
          <div style={{ width: 360 }}>
            <PhotoSlot label={imgLabel || ""} aspect={imgAspect || "4/3"} tone={t.photoTone} />
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div
      style={{
        padding: "48px 0",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 56,
        alignItems: "center",
        borderTop: `1px solid ${t.soft}`,
      }}
    >
      {imgSide === "left" ? (
        <>
          {img}
          {text}
        </>
      ) : (
        <>
          {text}
          {img}
        </>
      )}
    </div>
  );
}

export function SectionMethode({ t }: { t: Theme }) {
  return (
    <section style={{ background: t.paper, borderTop: `1px solid ${t.soft}` }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "96px 48px" }}>
        <SectionKicker t={t}>§IV · Die Methode</SectionKicker>

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
                fontSize: 60,
                lineHeight: 1.03,
                letterSpacing: "-0.018em",
                margin: 0,
                color: t.ink,
              }}
            >
              Unsere Methode hat einen alten Namen.
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.6, color: t.slate, marginTop: 24 }}>
              Sherlock Holmes hat sie in einem Satz beschrieben — und sie ist im Grunde genau das, was
              Ärzt:innen lernen, wenn sie Differenzialdiagnostik studieren: nichts vorab ausschließen,
              dann systematisch aussortieren, bis die Wahrheit übrig bleibt. Das Problem ist nicht die
              Methode. Das Problem ist die Zeit, die sie braucht.
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
                fontSize: 24,
                lineHeight: 1.4,
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
              — Arthur Conan Doyle, <em style={{ fontFamily: t.serif }}>Das Zeichen der Vier</em>
            </footer>
          </blockquote>
        </div>

        <div style={{ marginTop: 24, marginBottom: 64 }}>
          <div
            style={{
              fontFamily: t.mono,
              fontSize: 11,
              letterSpacing: ".18em",
              color: t.accent,
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            Wie wir arbeiten · sechs Schritte
          </div>
          <MethodSixStepFlow t={t} />
        </div>

        <h3
          style={{
            fontFamily: t.serif,
            fontWeight: 400,
            fontSize: 42,
            lineHeight: 1.08,
            letterSpacing: "-0.012em",
            margin: "32px 0 8px",
            color: t.ink,
          }}
        >
          Die sechs Schritte im Detail.
        </h3>
        <p style={{ fontSize: 17, lineHeight: 1.6, color: t.slate, marginBottom: 32, maxWidth: 820 }}>
          Was hinter jedem Schritt steht — und warum wir das anders machen können als eine Sprechstunde,
          die fünfzehn Minuten hat.
        </p>

        <StoryRow
          t={t}
          n="01"
          title="Wir legen uns nicht zu früh fest."
          body="Eine der häufigsten Fehlerquellen in der Diagnostik ist die verfrühte Festlegung — wenn ein:e Ärzt:in eine plausible Erklärung findet und mit der Suche aufhört, bevor andere Möglichkeiten geprüft sind. Das ist menschlich und in einer Sprechstunde fast unvermeidlich."
          subBody="Unser System verfolgt eine offene Liste plausibler Ursachen so lange, bis jede ernsthaft geprüft wurde. Auch dann, wenn die erste Erklärung gut zu passen scheint."
          imgSide="left"
          imgLabel="Stockfoto: abstrakte Verzweigung — Gabelung, mehrere Wege, halb-geometrisch."
          imgAspect="4/3"
        />

        <StoryRow
          t={t}
          n="02"
          title="Wir durchsuchen die medizinische Forschung — auf deinen Fall hin."
          body="Es gibt jedes Jahr hunderttausende neue medizinische Studien. Selbst eine spezialisierte Fachärzt:in kann nicht alles lesen, was in ihrem eigenen Feld publiziert wird, geschweige denn was in angrenzenden Feldern erscheint. Was wäre, wenn die Studie, die deinen Fall erklärt, vor zwei Jahren in einer kleinen Klinik in Adelaide veröffentlicht wurde? Niemand kann dir versprechen, dass sie dein:e Ärzt:in gelesen hat."
          subBody="Unser System nimmt sich pro Recherchezyklus etwa eine Woche Zeit, durchsucht zehntausende Paper für deinen Fall, filtert das Relevante heraus. In der Alpha-Phase kontrolliert eine echte Person dieses Ergebnis Schritt für Schritt mit."
          imgSide="right"
          imgLabel="Stockfoto: Wissenschafts-Bibliothek, Papier-Stapel, ruhige Leselicht-Aufnahme."
          imgAspect="4/3"
        />

        <StoryRow
          t={t}
          n="03"
          title="Wir finden auch die richtige Fachrichtung — und manchmal die konkrete Adresse."
          body="Aus den verfolgten Hypothesen folgt nicht nur, was gefragt werden muss, sondern auch wen du dafür sehen solltest. Beispiel: bei einer ungeklärten Gelenkentzündung kann sich aus den Befunden ergeben, dass eine Hautkrankheit als Ursache in Frage kommt — und dann ist die nächste sinnvolle Tür die dermatologische."
          subBody="Über Spezialdatenbanken können wir bei seltenen Verdachtsdiagnosen auch konkrete Spezialkliniken oder spezialisierte Ärzt:innen finden. Wo es hilft, schlagen wir es vor."
          imgSide="left"
          imgSrc="/screens/home_03_observing_research.png"
        />

        <StoryRow
          t={t}
          n="04"
          title="Jeder Termin beantwortet eine fokussierte Frage."
          body="Vor jedem Facharzttermin bekommt dein:e Ärzt:in ein zweiseitiges Briefing: eine präzise Frage und der relevante Hintergrund über dich. Du musst nicht deine ganze Geschichte erzählen. Der Termin kann mit dem Schweren anfangen."
          subBody="Und wenn die:der Ärzt:in zurückkommt mit „das ist es nicht“ — auch das ist Fortschritt. Es verkürzt die Liste."
          imgSide="right"
          imgSrc="/screens/visits_02_visit_detail.png"
        />

        <StoryRow
          t={t}
          n="05"
          title="Schleifen, keine Gerade."
          body="Jeder neue Befund fließt in das Gesamtbild zurück. Die Methode beginnt von vorne, jetzt mit mehr Information. Das ist nicht ein Aufschub — das ist die Methode."
          subBody="Auch wenn du heute keine Energie hast, läuft im Hintergrund weiter, was wir tun können: Literaturrecherche, Befundordnung, das Verknüpfen neuer Daten. Du verlierst keinen Tag, nur weil du einen schlechten Tag hast."
          imgSide="left"
          imgLabel="Stockfoto: konzentrische Form (Spirale, Schichtung, Wellen) — abstrakt, ruhig."
          imgAspect="4/3"
        />

        <StoryRow
          t={t}
          n="06"
          title="Die Diagnose stellt am Ende immer ein Mensch."
          body="Wir entscheiden nicht, was du hast. Wir bereiten so vor, dass dein:e Ärzt:in fundiert entscheiden kann — mit allen Befunden, der passenden Forschung, der konkreten Frage."
          subBody="Eine wirkende Therapie bestätigt am Ende die Diagnose. Bis dahin bleiben wir vorsichtig."
          imgSide="right"
          imgLabel="Stockfoto: Detail aus Praxis — leerer Schreibtisch mit Akte, Lampe, Stuhl."
          imgAspect="4/3"
        />
      </div>
    </section>
  );
}

// ─── /ueber-uns ───────────────────────────────────────────────────────────
export function SectionBouldering({ t }: { t: Theme }) {
  return (
    <section style={{ background: t.ink, color: t.paper, borderTop: `1px solid ${t.soft}` }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "96px 48px" }}>
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
            §IV.b · Unser eigener erster Fall
          </span>
          <span style={{ flex: 1, height: 1, background: `${t.paper}55` }} />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            marginBottom: 48,
            alignItems: "end",
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
            }}
          >
            Wie das in der Praxis aussah — an unserem eigenen Fall.
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: `${t.paper}bb`, margin: 0 }}>
            Bevor wir andere Patient:innen begleitet haben, haben wir die erste Version des Systems an
            einem von uns ausprobiert. Keine Vorher/Nachher-Inszenierung — der Punkt der Geschichte
            ist die <em style={{ fontFamily: t.serif }}>Mechanik</em>, nicht der Heldenmoment.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 64 }}>
          <div style={{ fontFamily: t.serif, color: t.paper }}>
            <p style={{ fontSize: 21, lineHeight: 1.55, margin: 0, fontWeight: 400 }}>
              Einer von uns ist Ultramarathonläufer. Eine Verletzung, drei Monate Pause — und nach
              dieser Pause begann der Fuß zu schmerzen. Seltsam: warum erst nach drei Monaten? Über
              die nächsten Monate wurde es schlimmer. Keine fünfhundert Meter Spaziergang mehr ohne
              Schmerzmittel. Beziehung leidet, Alltag schrumpft.
            </p>
            <p style={{ fontSize: 18, lineHeight: 1.65, marginTop: 22, color: `${t.paper}dd` }}>
              Hausarzt: kein klares Bild, Ibuprofen. Zwei Monate Wartezeit auf die Fachärztin. MRT,
              Röntgen, alle Untersuchungen sorgfältig. Klare Entzündung im Bild — aber niemand konnte
              erklären, woher sie kommt. Empfehlung: nochmal drei Monate Pause.
            </p>
            <p style={{ fontSize: 18, lineHeight: 1.65, marginTop: 18, color: `${t.paper}dd` }}>
              Wir sind Data Scientists. Also haben wir die erste Version unserer Diagnose-Software
              gebaut und unseren eigenen Fall reingegeben. Das System stellte ähnliche Fragen wie die
              Ärztin: welche Bewegungen, welche Belastung, welche Verschlechterungsmuster. Und hier
              kommt der Punkt: er hat — als Patient — die falsche Antwort gegeben.
            </p>
            <p style={{ fontSize: 18, lineHeight: 1.65, marginTop: 18, color: `${t.paper}dd` }}>
              Weil er keine Ultras mehr laufen konnte, hatte er Bouldern angefangen. Wurde besser,
              kaufte sich engere Kletterschuhe. Während des Kletterns und am Tag danach tat der Fuß
              nicht weh — erst zwei Tage später. Als Patient konnte er den Zusammenhang nicht sehen.
              Also sagte er der Ärztin: nach dem Klettern wird es nicht schlimmer. Sie hat ihm
              geglaubt. Sie war eine gute Ärztin, und mit mehr Zeit hätte sie genau diese Aussage
              hinterfragt. Aber sie hatte keine Zeit. Er hatte ja schon zwei Monate auf den Termin
              gewartet.
            </p>
            <p style={{ fontSize: 18, lineHeight: 1.65, marginTop: 18, color: `${t.paper}dd` }}>
              <strong style={{ color: t.paper }}>Das System hatte Zeit.</strong> Es recherchierte,
              fand die Literaturlage zu druckbedingten Entzündungen — und es stellte die eigene Aussage
              des Patienten in Frage: könnte es nicht doch an den engen Schuhen liegen? Die Datenlage
              passte zu gut, um das nicht zu testen.
            </p>
            <p style={{ fontSize: 18, lineHeight: 1.65, marginTop: 18, color: `${t.paper}dd` }}>
              Also wurde experimentiert. Alte, lockere Schuhe: zwei Stunden intensives Klettern, keine
              zusätzlichen Schmerzen am übernächsten Tag. Enge Schuhe: vierzig Minuten lockeres
              Klettern, deutlich schlimmer. Zwei Tage später wieder lockere Schuhe, zwei Stunden
              intensiv, nichts. Der Druck war die Ursache der Entzündung, die im MRT sichtbar, aber
              unerklärt war.
            </p>
            <p style={{ fontSize: 18, lineHeight: 1.65, marginTop: 18, color: `${t.paper}dd` }}>
              Neue Schuhe, ein paar Monate Geduld, bis die Entzündung abklang. Die Diagnose wirkt im
              Nachhinein trivial — das geht oft so, wenn man die Antwort kennt. Die Ärztin hätte das
              mit genug Zeit zum Hinterfragen und Experimentieren wahrscheinlich auch gefunden. Sie
              hatte sie nicht. Computer haben unbegrenzt davon.
            </p>
          </div>

          <aside style={{ paddingTop: 12 }}>
            {t.showPhotos && (
              <div style={{ marginBottom: 28 }}>
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
              </div>
            )}
            <div
              style={{
                background: `${t.paper}10`,
                border: `1px solid ${t.paper}33`,
                padding: 24,
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
                Was diese Geschichte zeigt
              </div>
              <p
                style={{
                  fontFamily: t.serif,
                  fontSize: 19,
                  fontStyle: "italic",
                  lineHeight: 1.5,
                  color: t.paper,
                  margin: 0,
                }}
              >
                Nicht jeder Fall ist so klar wie unserer. Manche bleiben ungelöst. Aber: keine Frage,
                die hinterfragt werden müsste, bleibt unhinterfragt. Keine Aussage wird kritiklos
                übernommen. Und niemand muss innerhalb von fünf Minuten zu einem Schluss kommen.
              </p>
            </div>

            <div
              style={{
                marginTop: 24,
                fontFamily: t.mono,
                fontSize: 11,
                letterSpacing: ".12em",
                color: `${t.paper}88`,
                lineHeight: 1.7,
                textTransform: "uppercase",
              }}
            >
              <div>· Eigene Fallgeschichte · anonymisiert</div>
              <div>· Methodologische Illustration · kein Testimonial</div>
              <div>· Vor der Alpha-Phase · nicht Teil der validierten Fälle</div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

// ─── /methode → Begleitung ────────────────────────────────────────────────
export function SectionBegleitung({ t }: { t: Theme }) {
  return (
    <Section t={t} kicker="§V · Wer dich begleitet" bg={t.card} divider>
      <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 64, alignItems: "start" }}>
        <div>
          <h2
            style={{
              fontFamily: t.serif,
              fontWeight: 400,
              fontSize: 56,
              lineHeight: 1.04,
              letterSpacing: "-0.015em",
              margin: 0,
              color: t.ink,
            }}
          >
            Dein:e Data Scientist. Eine echte Person. Vom ersten Gespräch bis zur Diagnose.
          </h2>
          <p style={{ fontFamily: t.serif, fontSize: 19, lineHeight: 1.55, marginTop: 22, color: t.ink }}>
            In der Alpha-Phase wird dir eine echte Person zugewiesen, die dich vom ersten Gespräch bis
            zur Diagnose begleitet — die ganze Zeit dieselbe Person. Wir nennen diese Rolle Data
            Scientist, weil das ehrlich beschreibt, was sie tut: Daten analysieren, Literatur durchgehen,
            Recherchen kontrollieren, Algorithmen für deinen konkreten Fall einrichten.
          </p>

          <div
            style={{
              marginTop: 28,
              padding: "26px 28px",
              background: t.paper,
              borderLeft: `3px solid ${t.accent}`,
            }}
          >
            <div
              style={{
                fontFamily: t.mono,
                fontSize: 11,
                letterSpacing: ".18em",
                color: t.accent,
                textTransform: "uppercase",
                marginBottom: 10,
              }}
            >
              Die Metapher · einmal
            </div>
            <p style={{ fontFamily: t.serif, fontSize: 19, lineHeight: 1.5, color: t.ink, margin: 0 }}>
              Stell dir vor, du hättest einen medizinischen Assistenten, der unbegrenzt Zeit und
              Motivation hat. Er kann zehntausende Studien in Stunden durchsehen. Er schläft nie. Er
              macht keine Denkfehler, weil er müde ist. Klüger als ein:e Ärzt:in ist er deshalb nicht
              — und er muss es auch nicht sein. Das letzte Wort hat immer dein:e Ärzt:in.
            </p>
            <p
              style={{
                fontFamily: t.serif,
                fontSize: 17,
                lineHeight: 1.55,
                color: t.slate,
                margin: "12px 0 0",
              }}
            >
              Was er kann, ist ergänzen, was eine Sprechstunde nicht leisten kann: Tage Recherche,
              vollständige Hinterfragung, geduldiges Verknüpfen von allem, was über deinen Fall
              bekannt ist.{" "}
              <em style={{ fontStyle: "italic", color: t.ink }}>
                Nicht im Wettstreit mit den Ärzt:innen — sondern an ihrer Seite.
              </em>
            </p>
          </div>

          <div style={{ marginTop: 28, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}>
            <div>
              <div
                style={{
                  fontFamily: t.mono,
                  fontSize: 11,
                  letterSpacing: ".14em",
                  color: t.accent,
                  textTransform: "uppercase",
                }}
              >
                Was sie ist
              </div>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: t.slate, marginTop: 8 }}>
                Der menschliche Teil des Bildes. Erreichbar per Chat in der App für asynchrone Fragen,
                in geplanten Teams-Calls für Dinge, die ein Gespräch brauchen.
              </p>
            </div>
            <div>
              <div
                style={{
                  fontFamily: t.mono,
                  fontSize: 11,
                  letterSpacing: ".14em",
                  color: t.mute,
                  textTransform: "uppercase",
                }}
              >
                Was sie nicht ist
              </div>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: t.slate, marginTop: 8 }}>
                Kein:e Ärzt:in. Sie behandelt nicht, verschreibt nicht, diagnostiziert nicht — das
                ärztliche Urteil bleibt bei deinen Ärzt:innen.
              </p>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <AppScreenshot src="/screens/home_05_doing_answer_question.png" width={300} alt="Chat" />
        </div>
      </div>

      <div
        style={{
          marginTop: 64,
          padding: "32px 36px",
          background: t.paper,
          border: `1px solid ${t.soft}`,
          display: "grid",
          gridTemplateColumns: "1fr 1.4fr",
          gap: 48,
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
              marginBottom: 10,
            }}
          >
            Vor allem anderen
          </div>
          <h3
            style={{
              fontFamily: t.serif,
              fontWeight: 500,
              fontSize: 34,
              lineHeight: 1.1,
              color: t.ink,
              margin: 0,
            }}
          >
            Der erste Call.
          </h3>
        </div>
        <div style={{ fontSize: 16, lineHeight: 1.65, color: t.slate }}>
          <p style={{ margin: 0 }}>
            Bevor du die App überhaupt installierst, gibt es einen Onboarding-Call mit uns. Etwa eine
            halbe Stunde bis Stunde, je nachdem wie das Gespräch läuft. Vorab schickst du uns einen
            kurzen Überblick über deine Situation — ein paar Sätze reichen.
          </p>
          <p style={{ marginTop: 14 }}>
            Im Call lernen wir uns gegenseitig kennen, stellen dir das System vor, gehen vielleicht
            schon den ersten Teil der Anamnese zusammen durch, und richten die App ein. Wir reden
            über deine Krankheit, was wir erwarten können, was nicht.{" "}
            <strong style={{ color: t.ink }}>Du entscheidest danach</strong>, ob du teilnehmen willst
            — und wir entscheiden, ob wir gut helfen können. Wenn es nicht passt, sagen wir das
            ehrlich.
          </p>
        </div>
      </div>
    </Section>
  );
}

// ─── /methode → Kosten ───────────────────────────────────────────────────
export function SectionKosten({ t }: { t: Theme }) {
  return (
    <Section t={t} kicker="§VIII · Was du dafür einbringst" bg={t.card} divider>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.1fr 1fr",
          gap: 56,
          marginBottom: 48,
          alignItems: "end",
        }}
      >
        <h2
          style={{
            fontFamily: t.serif,
            fontWeight: 400,
            fontSize: 60,
            lineHeight: 1.03,
            letterSpacing: "-0.016em",
            margin: 0,
            color: t.ink,
          }}
        >
          Drei Dinge brauchen wir von dir. Wir sagen vorab, wie viel.
        </h2>
        <p style={{ fontSize: 17, lineHeight: 1.6, color: t.slate, margin: 0 }}>
          Wenn deine Energie knapp ist, hilft Vorhersehbarkeit. Hier ist, womit du rechnen kannst —
          kein Schock, keine versteckten Aufwände.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
        <div
          style={{
            background: t.paper,
            border: `1px solid ${t.soft}`,
            padding: 28,
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <div
            style={{
              fontFamily: t.mono,
              fontSize: 11,
              letterSpacing: ".18em",
              color: t.accent,
              textTransform: "uppercase",
            }}
          >
            Zeit
          </div>
          <h3
            style={{
              fontFamily: t.serif,
              fontWeight: 500,
              fontSize: 28,
              lineHeight: 1.15,
              color: t.ink,
              margin: 0,
            }}
          >
            Die intensivste Phase sind die ersten zwei Wochen.
          </h3>

          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 4 }}>
            {([
              ["~ 1 Std.", "Telefonat zum Einstieg"],
              ["~ 2 Std.", "Anamnese in der App (in mehreren kurzen Sitzungen)"],
              ["~ 1 Std.", "Anforderung deiner Patientenakten — wir helfen dabei"],
            ] as const).map(([big, lab], i) => (
              <div
                key={i}
                style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: 14, alignItems: "baseline" }}
              >
                <div
                  style={{
                    fontFamily: t.serif,
                    fontWeight: 500,
                    fontSize: 22,
                    color: t.ink,
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {big}
                </div>
                <div style={{ fontSize: 14, color: t.slate, lineHeight: 1.45 }}>{lab}</div>
              </div>
            ))}
          </div>

          <p
            style={{
              fontFamily: t.serif,
              fontStyle: "italic",
              fontSize: 15,
              color: t.mute,
              lineHeight: 1.55,
              margin: 0,
              paddingTop: 14,
              borderTop: `1px dashed ${t.soft}`,
            }}
          >
            Du kannst die Anamnese aufteilen, wie du willst. Heute zehn Minuten, übermorgen zwanzig.
            Es gibt keinen Termindruck von unserer Seite.
          </p>

          <p style={{ fontSize: 14, color: t.slate, lineHeight: 1.55, margin: 0 }}>
            Danach: deutlich weniger. Kurze Rückfragen per Push, optional ein kurzes Tagebuch (wenige
            Minuten am Tag, wenn überhaupt). Plus die Facharzttermine, die du sowieso haben würdest.
          </p>
        </div>

        <div
          style={{
            background: t.paper,
            border: `1px solid ${t.soft}`,
            padding: 28,
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <div
            style={{
              fontFamily: t.mono,
              fontSize: 11,
              letterSpacing: ".18em",
              color: t.accent,
              textTransform: "uppercase",
            }}
          >
            Kraft
          </div>
          <h3
            style={{
              fontFamily: t.serif,
              fontWeight: 500,
              fontSize: 28,
              lineHeight: 1.15,
              color: t.ink,
              margin: 0,
            }}
          >
            Anamnese ist anstrengend. Wir wissen das.
          </h3>

          <p style={{ fontSize: 15, color: t.slate, lineHeight: 1.6, margin: 0 }}>
            Die App ist so gebaut, dass du jederzeit pausieren und später weitermachen kannst, ohne
            von vorne anzufangen. Wenn du heute keine Energie hast, läuft im Hintergrund trotzdem
            etwas — Literaturrecherche, Befundordnung.
          </p>

          <div
            style={{
              padding: 16,
              background: t.warm,
              borderLeft: `3px solid ${t.accent}`,
              fontFamily: t.serif,
              fontStyle: "italic",
              fontSize: 16,
              color: t.ink,
              lineHeight: 1.5,
            }}
          >
            Du verlierst keinen Tag, nur weil du einen schlechten Tag hast.
          </div>

          <p style={{ fontSize: 14, color: t.slate, lineHeight: 1.55, margin: 0 }}>
            Wenn eine andere Person dich unterstützt — Partner:in, Eltern, erwachsene Kinder — können
            sie viele Schritte übernehmen oder vorbereiten: Anamnese-Antworten vorausfüllen (Lücken
            füllst du später), Dokumente von Ärzt:innen anfordern, mit uns telefonieren, Termine
            ausmachen. <strong style={{ color: t.ink }}>Du musst nicht alles selbst tippen.</strong>
          </p>
        </div>

        <div
          style={{
            background: t.paper,
            border: `1px solid ${t.soft}`,
            padding: 28,
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <div
            style={{
              fontFamily: t.mono,
              fontSize: 11,
              letterSpacing: ".18em",
              color: t.accent,
              textTransform: "uppercase",
            }}
          >
            Geld
          </div>

          <div
            style={{
              fontFamily: t.serif,
              fontWeight: 500,
              fontSize: 96,
              lineHeight: 0.9,
              letterSpacing: "-0.03em",
              color: t.ink,
              fontVariantNumeric: "tabular-nums",
              marginTop: 4,
            }}
          >
            0&nbsp;€
          </div>
          <div
            style={{
              fontFamily: t.serif,
              fontSize: 18,
              color: t.slate,
              lineHeight: 1.4,
              fontStyle: "italic",
            }}
          >
            in der Alpha. Inklusive Data Scientist, allen Recherchezyklen, allen Termin-Briefings,
            allen Calls.
          </div>

          <p style={{ fontSize: 14, color: t.slate, lineHeight: 1.6, margin: 0 }}>
            Wir brauchen in dieser Phase Tester:innen, nicht Kund:innen. Das Programm ist aus
            Eigenmitteln finanziert, wir müssen aktuell nicht verdienen — wir müssen lernen, was an
            echten Fällen funktioniert.
          </p>

          <div
            style={{
              padding: 16,
              border: `1px dashed ${t.ink}`,
              fontSize: 14,
              color: t.ink,
              lineHeight: 1.6,
            }}
          >
            <strong>Spätere Phasen werden kostenpflichtig sein.</strong> Wir sagen das jetzt, damit
            es kein Schock wird, wenn das Modell sich ändert.
          </div>
        </div>
      </div>
    </Section>
  );
}

// ─── /transparenz → Daten ────────────────────────────────────────────────
export function SectionDaten({ t }: { t: Theme }) {
  return (
    <Section t={t} kicker="§IX · Wie wir mit deinen Daten umgehen — ehrlich" divider>
      <div style={{ display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: 56, marginBottom: 48 }}>
        <h2
          style={{
            fontFamily: t.serif,
            fontWeight: 400,
            fontSize: 58,
            lineHeight: 1.04,
            letterSpacing: "-0.015em",
            margin: 0,
            color: t.ink,
          }}
        >
          Wir können dir nur helfen, wenn wir mit deinen Daten arbeiten.
        </h2>
        <p
          style={{
            fontFamily: t.serif,
            fontSize: 19,
            lineHeight: 1.5,
            color: t.slate,
            alignSelf: "end",
            margin: 0,
          }}
        >
          Und zwar nicht oberflächlich, sondern intensiv: vollständige Anamnese, alle Vor-Befunde,
          alles, was uns hilft, deinen Fall zu verstehen. Das ist die Voraussetzung dafür, dass das,
          was wir versprechen, überhaupt möglich ist.
        </p>
      </div>

      <div
        style={{
          background: t.warm,
          borderLeft: `3px solid ${t.accent}`,
          padding: "32px 36px",
          marginBottom: 32,
        }}
      >
        <div
          style={{
            fontFamily: t.mono,
            fontSize: 11,
            letterSpacing: ".18em",
            color: t.accent,
            textTransform: "uppercase",
            marginBottom: 14,
          }}
        >
          Ehrlich vorab — externe Anbieter
        </div>
        <p style={{ fontFamily: t.serif, fontSize: 19, lineHeight: 1.55, color: t.ink, margin: 0 }}>
          Wir nutzen für die Analyse externe Werkzeuge — darunter Sprachmodelle und Recherche-Systeme
          von Anbietern wie <strong>OpenAI</strong> oder <strong>Google</strong>. Diese Werkzeuge
          sind aktuell das Beste, was es für diese Aufgabe gibt. Sie nicht zu nutzen, wäre auf deine
          Kosten — und das wollen wir nicht.
        </p>
        <p style={{ fontSize: 16, lineHeight: 1.6, color: t.slate, margin: "14px 0 0" }}>
          Das bedeutet aber auch: deine Daten laufen in einem gewissen Umfang durch die Server dieser
          Anbieter.{" "}
          <strong>
            Wir sagen das offen, weil wir nicht wollen, dass du es später irgendwo herausfindest und
            dich überrumpelt fühlst.
          </strong>
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
        <div style={{ background: t.card, border: `1px solid ${t.soft}`, padding: 28 }}>
          <div
            style={{
              fontFamily: t.mono,
              fontSize: 11,
              letterSpacing: ".14em",
              color: t.accent,
              textTransform: "uppercase",
              marginBottom: 14,
            }}
          >
            Was wir konkret zusichern können
          </div>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            {[
              "Wir nutzen deine Daten ausschließlich für deinen Fall.",
              "Wir verkaufen sie nicht. Geben sie nicht weiter. Nutzen sie nicht für Werbung. Nicht für unspezifisches KI-Training.",
              "Du kannst jederzeit eine vollständige Kopie exportieren — auch ohne Anlass.",
              "Du kannst jederzeit die Löschung verlangen.",
              "Eine eindeutig benannte Person bei uns ist für Datenschutzfragen zuständig — direkt per Mail erreichbar, kein Ticket-System.",
            ].map((it, i) => (
              <li
                key={i}
                style={{ display: "flex", gap: 12, fontSize: 15, lineHeight: 1.55, color: t.ink }}
              >
                <span style={{ color: t.accent, fontFamily: t.mono, fontSize: 14, width: 14 }}>✓</span>
                <span style={{ flex: 1 }}>{it}</span>
              </li>
            ))}
          </ul>
        </div>

        <div style={{ background: t.card, border: `1px solid ${t.soft}`, padding: 28 }}>
          <div
            style={{
              fontFamily: t.mono,
              fontSize: 11,
              letterSpacing: ".14em",
              color: t.mute,
              textTransform: "uppercase",
              marginBottom: 14,
            }}
          >
            Was wir nicht versprechen können
          </div>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            {[
              "Wir sind keine zugelassene medizinische Versorgung. Wir haben nicht die formalen Datenschutz-Prozesse einer Arztpraxis.",
              "Theoretisch könnten Daten bei einem Hackerangriff auf einen unserer externen Anbieter abfließen. Wir halten das für unwahrscheinlich, aber unmöglich ist nichts, was im Internet liegt.",
              "Diese Risikoabwägung musst du selbst treffen.",
              "Wenn dir maximaler Datenschutz wichtiger ist als der bestmögliche Recherche-Stand für deinen Fall, ist das Programm nicht das richtige für dich. Das ist okay — und ehrlicher, als dir etwas zu versprechen, das wir nicht halten können.",
            ].map((it, i) => (
              <li
                key={i}
                style={{ display: "flex", gap: 12, fontSize: 15, lineHeight: 1.55, color: t.ink }}
              >
                <span style={{ color: t.mute, fontFamily: t.mono, fontSize: 14, width: 14 }}>·</span>
                <span style={{ flex: 1 }}>{it}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        style={{
          marginTop: 28,
          padding: "20px 28px",
          border: `1px dashed ${t.ink}`,
          display: "grid",
          gridTemplateColumns: "auto 1fr",
          gap: 24,
          alignItems: "center",
          fontSize: 15,
          color: t.slate,
          lineHeight: 1.6,
        }}
      >
        <span
          style={{
            fontFamily: t.mono,
            fontSize: 11,
            letterSpacing: ".18em",
            color: t.accent,
            textTransform: "uppercase",
            whiteSpace: "nowrap",
          }}
        >
          Was du zurückhalten kannst
        </span>
        <span>
          Du kannst einzelne Themen oder Dokumente von vornherein aussparen. Sei dir aber bewusst:
          je weniger wir haben, desto weniger können wir suchen. Wo du die Grenze ziehst, entscheidest
          du.
        </span>
      </div>
    </Section>
  );
}

// ─── /transparenz → Alpha ────────────────────────────────────────────────
export function SectionAlpha({ t }: { t: Theme }) {
  return (
    <Section t={t} kicker="§X · Wo wir gerade stehen" bg={t.card} divider>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 56,
          marginBottom: 48,
          alignItems: "end",
        }}
      >
        <h2
          style={{
            fontFamily: t.serif,
            fontWeight: 400,
            fontSize: 60,
            lineHeight: 1.03,
            letterSpacing: "-0.016em",
            margin: 0,
            color: t.ink,
          }}
        >
          Wir sind in einem frühen Stadium. Hier ist, wo genau.
        </h2>
        <p style={{ fontSize: 16, lineHeight: 1.6, color: t.slate, margin: 0 }}>
          Diese Sektion ist offener, als auf Customer-Pages üblich. Wir glauben: Reziprozität ist im
          Frühstadium das stärkere Vertrauenssignal als Hochglanz.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "320px 1fr", gap: 56, alignItems: "start" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          {([
            ["1", "ernster Fall begleitet", "der eigene Bouldering-Fall (§IV.b)"],
            ["10", "Validierungs-Fälle gesucht", "die nächsten — du könntest einer sein"],
            ["0 €", "Kosten in der Alpha", "kostenpflichtig erst in späteren Phasen"],
          ] as const).map(([n, l, sub], i) => (
            <div key={i} style={{ background: t.paper, border: `1px solid ${t.ink}`, padding: 22 }}>
              <div
                style={{
                  fontFamily: t.serif,
                  fontWeight: 500,
                  fontSize: 44,
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                  color: t.ink,
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {n}
              </div>
              <div style={{ fontSize: 14, marginTop: 6, color: t.ink, fontWeight: 500 }}>{l}</div>
              <div style={{ fontSize: 12, color: t.mute, marginTop: 4 }}>{sub}</div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: t.slate, margin: 0 }}>
            Konkret: wir haben einen ersten ernsten Fall begleitet (siehe §IV.b), in dem die Methode
            funktioniert hat. Jetzt validieren wir, ob das reproduzierbar ist — an den nächsten zehn
            Fällen. <strong style={{ color: t.ink }}>Du bist einer davon, wenn du teilnimmst.</strong>
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: t.slate, margin: 0 }}>
            Davor haben wir die Methode an simulierten Fällen aus Medizinstudium-Unterlagen
            durchgespielt. Das ist nicht dasselbe wie die echte Welt, aber es ist die Vorarbeit, auf
            der wir aufsetzen.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: t.slate, margin: 0 }}>
            In dieser Phase ist vieles noch handgemacht. Der Algorithmus übernimmt die Last der
            Recherche, aber jeder Schritt wird von einer:m Data Scientist kontrolliert. Das ist nicht
            eine Notlösung — das ist angemessen für ein Programm in der Validierung. Mit größerer
            Kohorte später wird die Begleitung notwendigerweise stärker automatisiert.{" "}
            <strong style={{ color: t.ink }}>
              Wer jetzt mitmacht, bekommt eine Form der Aufmerksamkeit, die in zwei Jahren so nicht
              mehr existieren wird.
            </strong>
          </p>

          <div
            style={{
              padding: "20px 24px",
              background: t.warm,
              borderLeft: `3px solid ${t.accent}`,
              fontFamily: t.serif,
              fontSize: 19,
              fontStyle: "italic",
              lineHeight: 1.5,
              color: t.ink,
            }}
          >
            Warum machen wir das in dieser Form? Weil wir nicht zwei Jahre warten wollen, bis Menschen,
            die heute krank sind, Hilfe bekommen können. Und weil wir aus echten Fällen lernen
            müssen, was wir aus simulierten nicht lernen können.
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}>
            <div>
              <div
                style={{
                  fontFamily: t.mono,
                  fontSize: 11,
                  letterSpacing: ".14em",
                  color: t.accent,
                  textTransform: "uppercase",
                }}
              >
                Was wir von dir brauchen
              </div>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: t.slate, marginTop: 8 }}>
                Geduld bei Rauheiten der App, ehrliches Feedback, Bereitschaft zu Terminen mit uns.
              </p>
            </div>
            <div>
              <div
                style={{
                  fontFamily: t.mono,
                  fontSize: 11,
                  letterSpacing: ".14em",
                  color: t.accent,
                  textTransform: "uppercase",
                }}
              >
                Wie wir finanziert sind
              </div>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: t.slate, marginTop: 8 }}>
                Aus Eigenmitteln. Keine Investor:innen, die uns zu Wachstumsmetriken treiben. Genau
                deshalb können wir die Alpha kostenlos anbieten und uns die Zeit nehmen, die die
                Methode braucht.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

// ─── /ueber-uns → Wer wir sind ───────────────────────────────────────────
export function SectionWerWirSind({ t }: { t: Theme }) {
  return (
    <Section t={t} kicker="§XI · Wer das hier macht" divider>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.05fr 1fr",
          gap: 56,
          marginBottom: 48,
          alignItems: "end",
        }}
      >
        <h2
          style={{
            fontFamily: t.serif,
            fontWeight: 400,
            fontSize: 60,
            lineHeight: 1.04,
            letterSpacing: "-0.016em",
            margin: 0,
            color: t.ink,
          }}
        >
          {t.brand} wird von Tom und Christoph entwickelt.
        </h2>
        <p style={{ fontSize: 16, lineHeight: 1.6, color: t.slate, margin: 0 }}>
          Reflektierte Patient:innen googeln sowieso — wir wollen die Zeit sparen, indem wir hier
          sagen, was zu wissen ist.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 40 }}>
        {[
          {
            name: "Tom",
            role: "Co-Founder · Data Science",
            blurb:
              "Über zehn Jahre Arbeit an komplexen Datensystemen für große Unternehmen — KI-Anwendungen, Information Retrieval, Arbeit mit großen wissenschaftlichen Datenbanken.",
            note: "Der Patient aus der Bouldering-Geschichte in §IV.b — das hat unsere Sicht auf das Problem geprägt.",
          },
          {
            name: "Christoph",
            role: "Co-Founder · Data Science",
            blurb:
              "Über zehn Jahre Arbeit an komplexen Datensystemen für große Unternehmen — KI-Anwendungen, Information Retrieval, Arbeit mit großen wissenschaftlichen Datenbanken.",
            note: null as string | null,
          },
        ].map((p, i) => (
          <div
            key={i}
            style={{
              background: t.card,
              border: `1px solid ${t.soft}`,
              padding: 28,
              display: "grid",
              gridTemplateColumns: "180px 1fr",
              gap: 24,
              alignItems: "start",
            }}
          >
            <PhotoSlot
              label={`Echtfoto: ${p.name}, ruhiger Halbporträt-Look, ohne Berufs-Cliché.`}
              aspect="4/5"
              tone={t.photoTone}
            />
            <div>
              <div
                style={{
                  fontFamily: t.mono,
                  fontSize: 11,
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  color: t.accent,
                }}
              >
                {p.role}
              </div>
              <div
                style={{
                  fontFamily: t.serif,
                  fontSize: 28,
                  lineHeight: 1.15,
                  marginTop: 6,
                  color: t.ink,
                }}
              >
                {p.name}
              </div>
              <p style={{ fontSize: 14, color: t.slate, lineHeight: 1.55, marginTop: 10 }}>{p.blurb}</p>
              {p.note && (
                <p
                  style={{
                    fontSize: 13,
                    color: t.mute,
                    lineHeight: 1.55,
                    fontStyle: "italic",
                    fontFamily: t.serif,
                    marginTop: 10,
                    paddingTop: 10,
                    borderTop: `1px dashed ${t.soft}`,
                  }}
                >
                  {p.note}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          marginBottom: 40,
          padding: "28px 32px",
          background: t.paper,
          borderLeft: `3px solid ${t.accent}`,
        }}
      >
        <div
          style={{
            fontFamily: t.mono,
            fontSize: 11,
            letterSpacing: ".18em",
            color: t.accent,
            textTransform: "uppercase",
            marginBottom: 10,
          }}
        >
          Warum wir das machen
        </div>
        <p style={{ fontFamily: t.serif, fontSize: 21, lineHeight: 1.5, color: t.ink, margin: 0 }}>
          Wir wollen irgendwann nicht mehr Software für Konzerne bauen, sondern für Menschen, denen
          wir tatsächlich helfen können.
        </p>
        <p style={{ fontSize: 16, lineHeight: 1.6, color: t.slate, margin: "14px 0 0" }}>
          Wir sind selbst betroffen — nicht im Sinne einer schweren chronischen Krankheit, aber genug,
          um die Ohnmacht zu kennen, die kommt, wenn niemand sagen kann, was los ist.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 48 }}>
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
            Was wir nicht haben — und ehrlich nicht haben
          </div>
          <h3
            style={{
              fontFamily: t.serif,
              fontWeight: 500,
              fontSize: 30,
              lineHeight: 1.1,
              color: t.ink,
              margin: 0,
            }}
          >
            Klein, eigenfinanziert, ohne Beirat.
          </h3>
        </div>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          {([
            [
              "Keine Ärzt:innen im Gründungsteam.",
              "Das sind wir nicht und behaupten wir nicht zu sein. Was wir sind: Data Scientists mit Erfahrung in komplexen Wissenssystemen. Die klinische Expertise im Programm kommt durch die Ärzt:innen, mit denen unsere Patient:innen ohnehin arbeiten — und nach der Alpha-Phase auch durch direkte Zusammenarbeit mit Kliniken.",
            ],
            ["Aktuell keinen klinischen Beirat.", "Wir arbeiten daran, das ist aber noch nicht so weit."],
            ["Keinen Standort in einer Klinik.", "Wir sind ein kleines, eigenfinanziertes Team."],
            [
              "Keine vorgefertigte Geschichte erfolgreicher Fälle.",
              "Mit denen wir uns schmücken könnten — wir haben einen.",
            ],
          ] as const).map(([h, b], i) => (
            <li key={i} style={{ borderTop: `1px solid ${t.ink}`, paddingTop: 12 }}>
              <div
                style={{
                  fontFamily: t.serif,
                  fontSize: 19,
                  lineHeight: 1.3,
                  color: t.ink,
                  fontWeight: 500,
                }}
              >
                {h}
              </div>
              <div style={{ fontSize: 14, lineHeight: 1.55, color: t.slate, marginTop: 6 }}>{b}</div>
            </li>
          ))}
        </ul>
      </div>

      <div
        style={{
          marginTop: 40,
          display: "grid",
          gridTemplateColumns: "auto 1fr auto",
          gap: 24,
          alignItems: "center",
          padding: 20,
          border: `1px dashed ${t.ink}`,
        }}
      >
        <div
          style={{
            fontFamily: t.mono,
            fontSize: 11,
            letterSpacing: ".14em",
            color: t.accent,
            textTransform: "uppercase",
          }}
        >
          Persönlich erreichbar
        </div>
        <div style={{ fontSize: 15, color: t.slate, lineHeight: 1.55 }}>
          Wenn du uns direkt erreichen willst, geht das. Keine Hotline, keine Tickets.
        </div>
        <a
          href="mailto:kontakt@dxapp.health"
          style={{
            padding: "12px 18px",
            background: t.ink,
            color: t.paper,
            fontSize: 13,
            fontWeight: 500,
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}
        >
          → kontakt@dxapp.health
        </a>
      </div>
    </Section>
  );
}

// ─── /faq ─────────────────────────────────────────────────────────────────
export function SectionFAQ({ t }: { t: Theme }) {
  const faqs: { q: string; a: string }[] = [
    {
      q: "Was passiert, wenn ihr keine Diagnose findet?",
      a: "Das kommt vor. Manche Fälle bleiben ungelöst — vielleicht, weil die medizinische Forschung noch keine Antwort hat, vielleicht, weil mehr Zeit gebraucht würde, als der Prozess realistisch leisten kann. Wenn wir keine fundierte Diagnose ermöglichen können, hast du trotzdem etwas: eine vollständig strukturierte Patientenakte, eine vollständige Recherche zum Stand der Wissenschaft auf deinen Fall, und ein klares Bild davon, was geprüft wurde und was offenbleibt. Das ist mehr als der Standardweg dir geben würde.",
    },
    {
      q: "Bekomme ich am Ende eine Diagnose von euch?",
      a: "Nein. Diagnose stellt immer ein:e Ärzt:in. Wir bereiten alles so vor, dass dein:e Ärzt:in fundiert entscheiden kann.",
    },
    {
      q: "Was, wenn meine Ärzt:innen nicht mitspielen?",
      a: "Das einseitige Termin-Briefing ist so gebaut, dass es null Mehraufwand bedeutet — eine Seite Fakten zu dir, eine Seite Forschungsstand, eine konkrete Frage. Viele Ärzt:innen reagieren auf das Format positiv, weil es ihnen Zeit spart. Es gibt aber Ärzt:innen, die mit externer Vorbereitung nicht arbeiten wollen. Wenn das so ist, suchen wir gemeinsam eine andere Tür.",
    },
    { q: "Kann ich jederzeit abbrechen?", a: "Ja, jederzeit. Daten lassen sich auf Wunsch löschen." },
    {
      q: "Habt ihr schon erfolgreiche Fälle?",
      a: "Ja, einen — den eigenen Fall, den wir in §IV.b erzählen. Das ist ein erstes Beispiel, kein statistischer Beweis. Die Validierung an weiteren Fällen ist genau das, was wir in der Alpha tun.",
    },
    {
      q: "Wie habt ihr die Methode vor echten Patient:innen validiert?",
      a: "An simulierten Fällen aus Medizinstudium-Unterlagen. Das ist nicht das gleiche wie reale Patient:innen, aber es ist der Schritt vor der Alpha. Wir wissen, dass die echte Welt komplexer ist als ein Lehrbuch-Fall. Genau deshalb gibt's die Alpha.",
    },
    {
      q: "Wie finanziert sich das? Wer steht dahinter?",
      a: "Aus Eigenmitteln. Keine Investor:innen. Die Alpha ist kostenlos, weil wir Tester:innen brauchen, nicht Umsatz. Wer dahinter steht: zwei Personen mit über zehn Jahren Erfahrung in komplexen Datensystemen — siehe §XI.",
    },
    {
      q: "Warum jetzt kostenlos, später kostenpflichtig?",
      a: "In der Alpha leisten wir ungewöhnlich viel pro Patient:in — vor allem die persönliche Begleitung durch eine:n Data Scientist. Das ist in dieser Form nicht skalierbar. Spätere Phasen werden notwendigerweise stärker automatisiert sein und kostenpflichtig.",
    },
    {
      q: "Wer haftet, wenn etwas schiefläuft?",
      a: "Wir diagnostizieren und behandeln nicht. Die ärztliche Verantwortung bleibt bei deinen Ärzt:innen. Wir sind ein Vorbereitungs- und Recherchewerkzeug.",
    },
    {
      q: "Wie unterscheidet ihr euch von einer Symptom-Checker-App?",
      a: "Kategorie-Unterschied. Symptom-Checker geben einen schnellen Tipp aus einer kleinen Frageliste. Wir machen pro Recherchezyklus rund eine Woche Tiefenarbeit mit zehntausenden Studien. Wochen statt Sekunden.",
    },
    {
      q: "Was, wenn ich zwischendurch keine Energie habe?",
      a: "Pausen sind erwartet, nicht Versagen. Der Prozess ist resumierbar. Wenn wir Information von dir brauchen, pausiert dieser Teil, bis du wieder antwortest. Der Rest läuft weiter.",
    },
    {
      q: "Ist das eine medizinische Diagnose-Software?",
      a: "Nein. Das ist eine wichtige juristische Unterscheidung. Wir sind ein Werkzeug für Recherche und Termin-Vorbereitung, kein Medizinprodukt im regulatorischen Sinn.",
    },
    {
      q: "Was passiert mit meinen Daten, wenn es {brand} in zwei Jahren nicht mehr gibt?",
      a: "Du kannst jederzeit eine Vollkopie exportieren. Bei Programmende geben wir dir deine Daten und löschen unsere Kopien.",
    },
    {
      q: "Bekomme ich auch alternative Medizin empfohlen?",
      a: "Nein. Wir arbeiten ausschließlich mit wissenschaftlich belegter Medizin. Studien, die noch laufen, kennzeichnen wir als vorläufig.",
    },
    {
      q: "Bin ich bei euch versichert?",
      a: "Nein, das ist eine Frage deiner Krankenkasse — wir berühren das nicht. Du behältst deine reguläre Versorgung bei deinen eigenen Ärzt:innen.",
    },
  ];

  const half = Math.ceil(faqs.length / 2);
  const cols = [faqs.slice(0, half), faqs.slice(half)];

  return (
    <Section t={t} kicker="§XII · Häufige Fragen" bg={t.card} divider>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, marginBottom: 56 }}>
        <h2
          style={{
            fontFamily: t.serif,
            fontWeight: 400,
            fontSize: 60,
            lineHeight: 1.03,
            letterSpacing: "-0.016em",
            margin: 0,
            color: t.ink,
          }}
        >
          Die zweite Welle Fragen, die eine vorsichtige Person stellt.
        </h2>
        <p
          style={{
            fontFamily: t.serif,
            fontSize: 19,
            lineHeight: 1.5,
            color: t.slate,
            margin: 0,
            alignSelf: "end",
          }}
        >
          Wenn deine Frage hier nicht steht: schreib uns. Es geht direkt zu einer Person, nicht in
          ein Postfach.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
        {cols.map((col, ci) => (
          <div key={ci}>
            {col.map((f, i) => (
              <details key={i} style={{ borderTop: `1px solid ${t.ink}`, padding: "18px 0" }}>
                <summary
                  style={{
                    fontFamily: t.serif,
                    fontSize: 20,
                    lineHeight: 1.3,
                    color: t.ink,
                    cursor: "pointer",
                    listStyle: "none",
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 16,
                    fontWeight: 500,
                  }}
                >
                  <span>{f.q.replace("{brand}", t.brand)}</span>
                  <span style={{ color: t.accent, fontFamily: t.mono, fontSize: 18 }}>+</span>
                </summary>
                <div
                  style={{
                    fontSize: 15,
                    lineHeight: 1.6,
                    color: t.slate,
                    marginTop: 12,
                    maxWidth: 540,
                  }}
                >
                  {f.a.replace("{brand}", t.brand)}
                </div>
              </details>
            ))}
            {ci === cols.length - 1 && (
              <div style={{ borderTop: `1px solid ${t.ink}`, paddingTop: 20, fontSize: 14, color: t.mute }} />
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}

// ─── /bewerbung ──────────────────────────────────────────────────────────
function FormField({
  t,
  label,
  name,
  type = "text",
  placeholder,
  multiline,
  required,
}: {
  t: Theme;
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  multiline?: boolean;
  required?: boolean;
}) {
  const shared = {
    width: "100%",
    padding: "12px 14px",
    border: `1px solid ${t.ink}`,
    background: t.paper,
    fontFamily: t.sans,
    fontSize: 15,
    color: t.ink,
    boxSizing: "border-box" as const,
  };
  return (
    <div style={{ marginBottom: 16 }}>
      <label
        style={{
          display: "block",
          fontFamily: t.mono,
          fontSize: 10,
          letterSpacing: ".14em",
          textTransform: "uppercase",
          color: t.mute,
          marginBottom: 6,
        }}
      >
        {label}
        {required && <span style={{ color: t.accent, marginLeft: 4 }}>*</span>}
      </label>
      {multiline ? (
        <textarea
          name={name}
          placeholder={placeholder}
          rows={4}
          required={required}
          style={{ ...shared, resize: "vertical" }}
        />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          required={required}
          style={shared}
        />
      )}
    </div>
  );
}

function FormCheck({
  t,
  name,
  required,
  children,
}: {
  t: Theme;
  name: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label
      style={{
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        gap: 10,
        alignItems: "start",
        padding: "10px 0",
        fontSize: 14,
        lineHeight: 1.5,
        color: t.ink,
        cursor: "pointer",
      }}
    >
      <input
        type="checkbox"
        name={name}
        value="1"
        required={required}
        style={{ marginTop: 4, accentColor: t.accent, width: 16, height: 16 }}
      />
      <span>{children}</span>
    </label>
  );
}

export type BewerbungFormState =
  | { status: "success"; id: number }
  | { status: "error"; message: string; fieldErrors?: Record<string, string> }
  | null;

export function SectionBewerbung({
  t,
  state,
  isSubmitting,
}: {
  t: Theme;
  state?: BewerbungFormState;
  isSubmitting?: boolean;
}) {
  return (
    <section style={{ background: t.paper, borderTop: `1px solid ${t.soft}` }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "96px 48px" }}>
        <SectionKicker t={t}>§XIII · Bewerben</SectionKicker>

        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 56, alignItems: "start" }}>
          <div>
            <h2
              style={{
                fontFamily: t.serif,
                fontWeight: 400,
                fontSize: 68,
                lineHeight: 1.02,
                letterSpacing: "-0.02em",
                margin: 0,
                color: t.ink,
              }}
            >
              In drei Schritten — ehrlich.
            </h2>
            <p
              style={{
                fontFamily: t.serif,
                fontSize: 20,
                lineHeight: 1.5,
                color: t.slate,
                marginTop: 24,
                maxWidth: 620,
              }}
            >
              Wir reservieren keinen Platz, bevor wir uns gesprochen haben — und du musst dich nicht
              entschieden haben, bevor wir uns gesprochen haben.
            </p>

            <ol style={{ listStyle: "none", padding: 0, margin: "40px 0 0" }}>
              {([
                ["01", "Kurzes Formular ausfüllen.", "Unten rechts. Name, Alter, Kontakt, ein paar Häkchen, optional zwei Sätze."],
                ["02", "Onboarding-Call vereinbaren.", "Wir melden uns innerhalb von ein bis drei Werktagen mit Terminvorschlägen."],
                ["03", "App-Zugang nach dem Call —", "wenn wir beide das Gefühl haben, dass es passt."],
              ] as const).map(([n, h, b], i) => (
                <li
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "56px 1fr",
                    gap: 18,
                    padding: "18px 0",
                    borderTop: `1px solid ${t.ink}`,
                  }}
                >
                  <span style={{ fontFamily: t.mono, fontSize: 13, letterSpacing: ".14em", color: t.accent }}>
                    {n}
                  </span>
                  <div>
                    <div
                      style={{
                        fontFamily: t.serif,
                        fontWeight: 500,
                        fontSize: 22,
                        lineHeight: 1.2,
                        color: t.ink,
                      }}
                    >
                      {h}
                    </div>
                    <div style={{ fontSize: 15, color: t.slate, marginTop: 6, lineHeight: 1.55 }}>{b}</div>
                  </div>
                </li>
              ))}
            </ol>

            <div
              style={{
                marginTop: 32,
                padding: 18,
                background: t.card,
                border: `1px dashed ${t.ink}`,
                fontSize: 14,
                color: t.slate,
                lineHeight: 1.55,
              }}
            >
              <span
                style={{
                  fontFamily: t.mono,
                  fontSize: 11,
                  letterSpacing: ".14em",
                  color: t.accent,
                  textTransform: "uppercase",
                  marginRight: 12,
                }}
              >
                Falls wir gerade keinen Platz haben
              </span>
              Wir nehmen aktuell maximal eine Hand voll Patient:innen parallel auf. Wenn alle Plätze
              belegt sind, kommst du auf eine Warteliste — mit ehrlicher Einschätzung, wann ein
              Platz frei wird. Kein „in zwei Tagen wieder verfügbar".
            </div>
          </div>

          {state?.status === "success" ? (
            <div
              style={{
                background: t.card,
                border: `1px solid ${t.ink}`,
                padding: 32,
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              <div
                style={{
                  fontFamily: t.mono,
                  fontSize: 11,
                  letterSpacing: ".14em",
                  color: t.accent,
                  textTransform: "uppercase",
                }}
              >
                Schritt 01 · Erledigt
              </div>
              <h3
                style={{
                  fontFamily: t.serif,
                  fontSize: 32,
                  fontWeight: 500,
                  margin: 0,
                  color: t.ink,
                  lineHeight: 1.2,
                }}
              >
                Wir haben deine Bewerbung erhalten.
              </h3>
              <p style={{ fontSize: 15, color: t.slate, lineHeight: 1.6, margin: 0 }}>
                Eine echte Person — kein Auto-Responder — meldet sich innerhalb von ein bis drei
                Werktagen mit Terminvorschlägen für den Onboarding-Call.
              </p>
              <p
                style={{
                  fontFamily: t.mono,
                  fontSize: 11,
                  letterSpacing: ".14em",
                  color: t.mute,
                  textTransform: "uppercase",
                  margin: 0,
                }}
              >
                Referenz · #{String(state.id).padStart(4, "0")}
              </p>
            </div>
          ) : (
            <Form
              method="post"
              style={{ background: t.card, border: `1px solid ${t.ink}`, padding: 32 }}
            >
              <div
                style={{
                  fontFamily: t.mono,
                  fontSize: 11,
                  letterSpacing: ".14em",
                  color: t.accent,
                  textTransform: "uppercase",
                }}
              >
                Schritt 01 · Kurzes Formular
              </div>
              <h3
                style={{
                  fontFamily: t.serif,
                  fontSize: 28,
                  fontWeight: 500,
                  margin: "10px 0 24px",
                  color: t.ink,
                  lineHeight: 1.2,
                }}
              >
                Schreib uns, was du erlebt hast.
              </h3>

              {state?.status === "error" && (
                <div
                  style={{
                    padding: "12px 14px",
                    background: t.warm,
                    borderLeft: `3px solid ${t.accent}`,
                    fontSize: 14,
                    color: t.ink,
                    lineHeight: 1.5,
                    marginBottom: 18,
                  }}
                >
                  {state.message}
                </div>
              )}

              <FormField t={t} label="Vor- und Nachname" name="name" required />
              <FormField t={t} label="Alter" name="age" />
              <FormField t={t} label="E-Mail" name="email" type="email" placeholder="für die Antwort" required />
              <FormField t={t} label="Telefon" name="phone" type="tel" placeholder="für den Onboarding-Call" />

              <div style={{ marginTop: 6, marginBottom: 14 }}>
                <FormCheck t={t} name="consent_no_diagnosis" required>
                  Ich war bei meinem Hausarzt oder meiner Hausärztin und bei mindestens einer
                  Fachärzt:in, und ich habe keine klare Diagnose erhalten.
                </FormCheck>
                <FormCheck t={t} name="consent_records" required>
                  Ich habe die Arztbriefe aus diesen Besuchen vorliegen oder kann sie anfordern.
                </FormCheck>
              </div>

              <FormField
                t={t}
                label="Ein bis zwei Sätze zur Situation (optional)"
                name="situation"
                placeholder="Du musst hier nichts schreiben — wir sprechen im Call ausführlich darüber."
                multiline
              />

              <div style={{ fontSize: 12, color: t.mute, marginTop: 14, lineHeight: 1.5 }}>
                Keine Datenweitergabe. Wir melden uns innerhalb von ein bis drei Werktagen.
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  marginTop: 20,
                  width: "100%",
                  padding: "16px 20px",
                  background: t.ink,
                  color: t.paper,
                  border: 0,
                  fontSize: 15,
                  fontWeight: 500,
                  letterSpacing: ".02em",
                  cursor: isSubmitting ? "wait" : "pointer",
                  opacity: isSubmitting ? 0.7 : 1,
                }}
              >
                {isSubmitting ? "Wird abgesendet …" : "Formular absenden"}
              </button>
              <div
                style={{
                  fontSize: 12,
                  color: t.mute,
                  marginTop: 10,
                  textAlign: "center",
                  fontFamily: t.mono,
                  letterSpacing: ".06em",
                  textTransform: "uppercase",
                }}
              >
                Antwort innerhalb 1–3 Werktagen · echte Person
              </div>
            </Form>
          )}
        </div>
      </div>
    </section>
  );
}

// ─── /transparenz → Haftung (inline-defined in page-transparenz.jsx) ────
export function SectionHaftung({ t }: { t: Theme }) {
  return (
    <Section t={t} kicker="Wer haftet" bg={t.card} divider>
      <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 56, alignItems: "start" }}>
        <h2
          style={{
            fontFamily: t.serif,
            fontWeight: 400,
            fontSize: 52,
            lineHeight: 1.04,
            letterSpacing: "-0.015em",
            margin: 0,
            color: t.ink,
            textWrap: "balance",
          }}
        >
          Wir diagnostizieren und behandeln nicht.
        </h2>
        <p style={{ fontSize: 17, lineHeight: 1.65, color: t.slate, margin: 0 }}>
          Die ärztliche Verantwortung bleibt bei deinen Ärzt:innen. Wir sind ein Vorbereitungs- und
          Recherchewerkzeug, kein Medizinprodukt im regulatorischen Sinn. Diese Unterscheidung ist
          nicht kosmetisch — sie bestimmt, was wir versprechen können und was nicht.
        </p>
      </div>
    </Section>
  );
}
