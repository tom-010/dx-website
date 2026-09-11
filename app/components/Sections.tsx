import { Form } from "react-router";
import type { Theme } from "./theme";
import { Section, SectionKicker, AppScreenshot } from "./Primitives";

// ─── /wer-passt ──────────────────────────────────────────────────────────
function Card({
  label,
  accent,
  children,
}: {
  label: string;
  accent: "ok" | "no";
  children: React.ReactNode;
}) {
  const isOk = accent === "ok";
  return (
    <div className="relative border border-soft bg-card p-6 sm:p-7">
      <div
        className={
          "mb-3.5 font-mono text-[10px] uppercase tracking-[.16em] sm:text-[11px] " +
          (isOk ? "text-accent" : "text-mute")
        }
      >
        {label}
      </div>
      {children}
    </div>
  );
}

function Bullets({
  kind,
  items,
}: {
  kind: "check" | "cross";
  items: React.ReactNode[];
}) {
  const isCheck = kind === "check";
  return (
    <ul className="m-0 flex list-none flex-col gap-3.5 p-0">
      {items.map((c, i) => (
        <li
          key={i}
          className="flex items-baseline gap-3 text-[15px] leading-[1.45] text-ink sm:text-base"
        >
          <span
            className={
              "w-3.5 flex-shrink-0 font-mono text-[15px] " +
              (isCheck ? "text-accent" : "text-mute")
            }
          >
            {isCheck ? "✓" : "×"}
          </span>
          <span className="flex-1">{c}</span>
        </li>
      ))}
    </ul>
  );
}

export function SectionBistDuHierRichtig(_: { t: Theme }) {
  return (
    <Section kicker="§II · Bist du hier richtig?" divider>
      <div className="mb-10 grid grid-cols-1 gap-8 lg:mb-12 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
        <h2 className="m-0 font-serif text-[2rem] font-normal leading-[1.05] tracking-[-0.015em] text-ink sm:text-[2.75rem] lg:text-[3.5rem]">
          Diese Seite ist nicht für jeden.
        </h2>
        <p className="m-0 font-serif text-lg leading-[1.5] text-slate sm:self-end sm:text-xl lg:text-[20px]">
          Wir filtern in beide Richtungen — für dich, und für uns. Lies das hier zuerst, bevor du
          dich bewirbst.
        </p>
      </div>

      <div className="mb-8 max-w-[920px] border border-soft bg-card p-6 sm:p-9 lg:p-10">
        <div className="kicker mb-4">Wenn das ungefähr deine Situation ist</div>
        <p className="m-0 font-serif text-lg leading-[1.55] text-ink sm:text-xl lg:text-[21px]">
          Vielleicht sitzt du gerade am Handy. Vielleicht hat dir jemand den Link geschickt.
          Vielleicht hast du dir deine Symptome ergooglet und bist hier gelandet.{" "}
          <em className="italic text-accent">Was sicher ist:</em> du bist krank, schon länger,
          nicht erst seit gestern.
        </p>
        <p className="mt-5 font-serif text-base leading-[1.6] text-slate sm:text-lg lg:text-[19px]">
          Du warst bei deinem Hausarzt oder deiner Hausärztin. Du hast Wochen oder Monate auf
          einen Spezialarzttermin gewartet. Du bist mit Hoffnung in den Termin gegangen,
          vielleicht mit einer vorbereiteten Liste von Fragen. Und du bist mit nichts wieder
          herausgekommen. Vielleicht mit einem „warten Sie noch drei Monate ab". Vielleicht mit
          „setzen Sie das Medikament weiter". Vielleicht mit einer Vermutung, die sich später
          als falsch herausgestellt hat.
        </p>
        <p className="mt-6 border-t border-dashed border-soft pt-5 font-serif text-lg italic leading-[1.55] text-ink sm:text-xl lg:text-[20px]">
          Wenn das ungefähr deine Situation ist, dann bist du hier richtig.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Card accent="ok" label="Was wir voraussetzen">
          <Bullets
            kind="check"
            items={[
              "Du warst bei deinem Hausarzt oder deiner Hausärztin.",
              "Du warst danach bei mindestens einer:m Fachärzt:in, und sie:er konnte dir keine klare Diagnose geben.",
              "Du hast die Arztbriefe von beiden — oder kannst sie anfordern. Sie sind unser Startpunkt.",
              "Du bist bereit für einen Prozess, der Wochen bis Monate dauert.",
            ]}
          />
        </Card>
        <Card accent="no" label="Diese Seite ist nicht für dich, wenn">
          <Bullets
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

      <div className="mt-8 grid grid-cols-1 items-start gap-5 bg-ink px-6 py-6 text-paper sm:grid-cols-[auto_1fr] sm:gap-6 sm:px-7">
        <div className="whitespace-nowrap pt-1 font-mono text-[10px] uppercase tracking-[.18em] text-warm sm:text-[11px]">
          Wichtig — Notfall
        </div>
        <div>
          <p className="m-0 font-serif text-base leading-[1.55] sm:text-[17px]">
            Wenn du dich gerade in einer akuten Krise befindest — körperlich oder seelisch —
            wende dich bitte direkt an den ärztlichen Bereitschaftsdienst{" "}
            <strong className="text-warm">116 117</strong> oder im Notfall an die{" "}
            <strong className="text-warm">112</strong>. Die Telefonseelsorge ist kostenfrei rund
            um die Uhr erreichbar: <strong className="text-warm">0800 111 0 111</strong>.
          </p>
          <p className="mt-2.5 font-serif text-[13px] italic leading-[1.6] text-paper/70 sm:text-sm">
            Wir sind kein Akut-Kanal und können in einer Krise nicht schnell genug helfen.
          </p>
        </div>
      </div>
    </Section>
  );
}

// ─── /methode → 7-step flow (responsive replacement for SVG) ─────────────
function MethodSevenStepFlow() {
  const steps = [
    "Wir lernen dich kennen",
    "Alle möglichen Krankheiten auf die Liste",
    "Streichen, was nicht passt",
    "Termin vorbereiten",
    "Termin findet statt — Befund kommt",
    "Liste wird kürzer — nächste Runde",
  ];

  return (
    <div className="border border-ink bg-card p-5 sm:p-7 lg:p-8">
      <div className="mb-4 flex items-center gap-3 border border-dashed border-accent bg-paper px-4 py-2.5 font-mono text-[10px] uppercase tracking-[.12em] text-accent sm:text-[11px]">
        <span aria-hidden>↻</span>
        <span>Wiederholt sich, bis die Diagnose steht — Schritte 3–6 sind die Schleife</span>
      </div>

      <ol className="m-0 grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-2 lg:grid-cols-6 lg:gap-3">
        {steps.map((label, i) => {
          const inLoop = i >= 2 && i <= 5;
          return (
            <li
              key={i}
              className={
                "relative flex flex-col gap-1.5 border-t-2 bg-paper p-4 " +
                (inLoop ? "border-accent" : "border-ink")
              }
            >
              <div className="font-mono text-[10px] uppercase tracking-[.14em] text-accent">
                Schritt {String(i + 1).padStart(2, "0")}
              </div>
              <div className="text-[15px] font-medium leading-[1.25] text-ink sm:text-base">
                {label}
              </div>
            </li>
          );
        })}
      </ol>

      <div className="mt-4 inline-flex items-center bg-ink px-4 py-2 font-serif text-base italic text-paper sm:text-[17px]">
        → Diagnose steht
      </div>
    </div>
  );
}

function StoryRow({
  n,
  title,
  body,
  subBody,
  imgSide,
  imgSrc,
  photoSrcBase,
  photoAlt,
}: {
  n: string;
  title: string;
  body: string;
  subBody?: string;
  imgSide: "left" | "right";
  imgSrc?: string;
  photoSrcBase?: string;
  photoAlt?: string;
}) {
  const text = (
    <div className="px-1">
      <div className="font-mono text-[11px] uppercase tracking-[.18em] text-accent sm:text-xs">
        Schritt {n}
      </div>
      <h3 className="mt-3.5 font-serif text-[1.75rem] font-normal leading-[1.08] tracking-[-0.012em] text-ink sm:text-[2rem] lg:text-[2.375rem]">
        {title}
      </h3>
      <p className="mt-4 text-base leading-[1.6] text-slate sm:text-[17px]">{body}</p>
      {subBody && (
        <p className="mt-3.5 font-serif text-[15px] italic leading-[1.55] text-mute sm:text-base">
          {subBody}
        </p>
      )}
    </div>
  );

  const img = (
    <div className="relative flex items-center justify-center py-4">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-8 opacity-45"
        style={{
          background: `radial-gradient(50% 50% at 50% 50%, var(--color-warm) 0%, transparent 70%)`,
        }}
      />
      <div className="relative w-full max-w-[360px]">
        {imgSrc ? (
          <div className="mx-auto w-full max-w-[240px] sm:max-w-[260px]">
            <AppScreenshot src={imgSrc} alt={title} maxWidth={260} />
          </div>
        ) : photoSrcBase ? (
          <picture>
            <source srcSet={`${photoSrcBase}.webp`} type="image/webp" />
            <img
              src={`${photoSrcBase}.jpg`}
              alt={photoAlt || title}
              loading="lazy"
              decoding="async"
              width={1200}
              height={900}
              className="block aspect-[4/3] w-full bg-soft object-cover"
            />
          </picture>
        ) : null}
      </div>
    </div>
  );

  // On mobile, always: text first, image second.
  // On desktop, respect imgSide.
  return (
    <div
      className={
        "grid grid-cols-1 items-center gap-10 border-t border-soft py-10 lg:grid-cols-2 lg:gap-14 lg:py-12 " +
        (imgSide === "left" ? "lg:[&>*:first-child]:order-2" : "")
      }
    >
      {imgSide === "left" ? (
        <>
          {text}
          {img}
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

export function SectionMethode(_: { t: Theme }) {
  return (
    <section className="border-t border-soft bg-paper">
      <div className="container-page py-16 sm:py-20 lg:py-24">
        <SectionKicker>§IV · Die Methode</SectionKicker>

        <div className="mb-12 grid grid-cols-1 items-start gap-10 lg:mb-14 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
          <div>
            <div className="kicker mb-3">Das Sherlock-Holmes-Prinzip</div>
            <h2 className="m-0 font-serif text-[2.25rem] font-normal leading-[1.05] tracking-[-0.018em] text-ink sm:text-[3rem] lg:text-[3.75rem]">
              Unsere Methode hat einen alten Namen.
            </h2>
            <p className="mt-6 text-base leading-[1.6] text-slate sm:text-lg">
              Sherlock Holmes hat sie in einem Satz beschrieben — und sie ist im Grunde genau
              das, was Ärzt:innen lernen, wenn sie Differenzialdiagnostik studieren: nichts
              vorab ausschließen, dann systematisch aussortieren, bis die Wahrheit übrig
              bleibt. Das Problem ist nicht die Methode. Das Problem ist die Zeit, die sie
              braucht.
            </p>
          </div>

          <blockquote className="m-0 border-l-[3px] border-accent bg-card p-6 font-serif sm:p-8 lg:p-9">
            <p className="m-0 font-serif text-lg italic leading-[1.4] text-ink sm:text-xl lg:text-2xl">
              „Wenn man das Unmögliche ausgeschlossen hat, muss das, was übrig bleibt — wie
              unwahrscheinlich es auch sein mag — die Wahrheit sein."
            </p>
            <footer className="mt-4 text-[13px] tracking-wide text-mute">
              — Arthur Conan Doyle, <em className="font-serif">Das Zeichen der Vier</em>
            </footer>
          </blockquote>
        </div>

        <div className="mb-14 lg:mb-16">
          <div className="kicker mb-4">Wie wir arbeiten · sechs Schritte</div>
          <MethodSevenStepFlow />
        </div>

        <h3 className="mb-2 mt-8 font-serif text-[1.75rem] font-normal leading-[1.08] tracking-[-0.012em] text-ink sm:text-[2.25rem] lg:text-[2.625rem]">
          Die sechs Schritte im Detail.
        </h3>
        <p className="mb-8 max-w-[60ch] text-base leading-[1.6] text-slate sm:text-[17px]">
          Was hinter jedem Schritt steht — und warum wir das anders machen können als eine
          Sprechstunde, die fünfzehn Minuten hat.
        </p>

        <StoryRow
          n="01"
          title="Wir legen uns nicht zu früh fest."
          body="Eine der häufigsten Fehlerquellen in der Diagnostik ist die verfrühte Festlegung — wenn ein:e Ärzt:in eine plausible Erklärung findet und mit der Suche aufhört, bevor andere Möglichkeiten geprüft sind. Das ist menschlich und in einer Sprechstunde fast unvermeidlich."
          subBody="Unser System verfolgt eine offene Liste plausibler Ursachen so lange, bis jede ernsthaft geprüft wurde. Auch dann, wenn die erste Erklärung gut zu passen scheint."
          imgSide="left"
          photoSrcBase="/method_01_branching"
          photoAlt="Abstrakte Verzweigung — Gabelung, mehrere Wege"
        />

        <StoryRow
          n="02"
          title="Wir durchsuchen die medizinische Forschung — auf deinen Fall hin."
          body="Es gibt jedes Jahr hunderttausende neue medizinische Studien. Selbst eine spezialisierte Fachärzt:in kann nicht alles lesen, was in ihrem eigenen Feld publiziert wird, geschweige denn was in angrenzenden Feldern erscheint. Was wäre, wenn die Studie, die deinen Fall erklärt, vor zwei Jahren in einer kleinen Klinik in Adelaide veröffentlicht wurde? Niemand kann dir versprechen, dass sie dein:e Ärzt:in gelesen hat."
          subBody="Unser System nimmt sich pro Recherchezyklus etwa eine Woche Zeit, durchsucht zehntausende Paper für deinen Fall, filtert das Relevante heraus. In der Alpha-Phase kontrolliert eine echte Person dieses Ergebnis Schritt für Schritt mit."
          imgSide="right"
          photoSrcBase="/method_02_library"
          photoAlt="Wissenschaftliche Bibliothek mit Papierstapeln, ruhiges Leselicht"
        />

        <StoryRow
          n="03"
          title="Wir finden auch die richtige Fachrichtung — und manchmal die konkrete Adresse."
          body="Aus den verfolgten Hypothesen folgt nicht nur, was gefragt werden muss, sondern auch wen du dafür sehen solltest. Beispiel: bei einer ungeklärten Gelenkentzündung kann sich aus den Befunden ergeben, dass eine Hautkrankheit als Ursache in Frage kommt — und dann ist die nächste sinnvolle Tür die dermatologische."
          subBody="Über Spezialdatenbanken können wir bei seltenen Verdachtsdiagnosen auch konkrete Spezialkliniken oder spezialisierte Ärzt:innen finden. Wo es hilft, schlagen wir es vor."
          imgSide="left"
          imgSrc="/screens/home_03_observing_research.png"
        />

        <StoryRow
          n="04"
          title="Jeder Termin beantwortet eine fokussierte Frage."
          body="Vor jedem Facharzttermin bekommt dein:e Ärzt:in ein zweiseitiges Briefing: eine präzise Frage und der relevante Hintergrund über dich. Du musst nicht deine ganze Geschichte erzählen. Der Termin kann mit dem Schweren anfangen."
          subBody="Und wenn die:der Ärzt:in zurückkommt mit „das ist es nicht“ — auch das ist Fortschritt. Es verkürzt die Liste."
          imgSide="right"
          imgSrc="/screens/visits_02_visit_detail.png"
        />

        <StoryRow
          n="05"
          title="Schleifen, keine Gerade."
          body="Jeder neue Befund fließt in das Gesamtbild zurück. Die Methode beginnt von vorne, jetzt mit mehr Information. Das ist nicht ein Aufschub — das ist die Methode."
          subBody="Auch wenn du heute keine Energie hast, läuft im Hintergrund weiter, was wir tun können: Literaturrecherche, Befundordnung, das Verknüpfen neuer Daten. Du verlierst keinen Tag, nur weil du einen schlechten Tag hast."
          imgSide="left"
          photoSrcBase="/method_05_spiral"
          photoAlt="Konzentrische Spirale, abstrakt"
        />

        <StoryRow
          n="06"
          title="Die Diagnose stellt am Ende immer ein Mensch."
          body="Wir entscheiden nicht, was du hast. Wir bereiten so vor, dass dein:e Ärzt:in fundiert entscheiden kann — mit allen Befunden, der passenden Forschung, der konkreten Frage."
          subBody="Eine wirkende Therapie bestätigt am Ende die Diagnose. Bis dahin bleiben wir vorsichtig."
          imgSide="right"
          photoSrcBase="/method_06_desk"
          photoAlt="Schreibtisch in einer Praxis mit Akte und Lampe"
        />
      </div>
    </section>
  );
}

// ─── /ueber-uns long bouldering story ────────────────────────────────────
export function SectionBouldering({ t }: { t: Theme }) {
  return (
    <section className="border-t border-soft bg-ink text-paper">
      <div className="container-page py-16 sm:py-20 lg:py-24">
        <SectionKicker tone="paper">§IV.b · Unser eigener erster Fall</SectionKicker>

        <div className="mb-12 grid grid-cols-1 items-end gap-10 lg:mb-14 lg:grid-cols-2 lg:gap-16">
          <h2 className="m-0 font-serif text-[2rem] font-normal leading-[1.05] tracking-[-0.02em] sm:text-[3rem] lg:text-[4rem]">
            Wie das in der Praxis aussah — an unserem eigenen Fall.
          </h2>
          <p className="m-0 text-base leading-[1.6] text-paper/75 sm:text-[17px]">
            Bevor wir andere Patient:innen begleitet haben, haben wir die erste Version des
            Systems an einem von uns ausprobiert. Keine Vorher/Nachher-Inszenierung — der
            Punkt der Geschichte ist die{" "}
            <em className="font-serif">Mechanik</em>, nicht der Heldenmoment.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div className="font-serif text-paper">
            <p className="m-0 text-lg font-normal leading-[1.55] sm:text-xl lg:text-[21px]">
              Einer von uns ist Ultramarathonläufer. Eine Verletzung, drei Monate Pause — und
              nach dieser Pause begann der Fuß zu schmerzen. Seltsam: warum erst nach drei
              Monaten? Über die nächsten Monate wurde es schlimmer. Keine fünfhundert Meter
              Spaziergang mehr ohne Schmerzmittel. Beziehung leidet, Alltag schrumpft.
            </p>
            <p className="mt-5 text-base leading-[1.65] text-paper/85 sm:text-lg">
              Hausarzt: kein klares Bild, Ibuprofen. Zwei Monate Wartezeit auf die Fachärztin.
              MRT, Röntgen, alle Untersuchungen sorgfältig. Klare Entzündung im Bild — aber
              niemand konnte erklären, woher sie kommt. Empfehlung: nochmal drei Monate Pause.
            </p>
            <p className="mt-4 text-base leading-[1.65] text-paper/85 sm:text-lg">
              Wir sind Data Scientists. Also haben wir die erste Version unserer
              Diagnose-Software gebaut und unseren eigenen Fall reingegeben. Das System
              stellte ähnliche Fragen wie die Ärztin: welche Bewegungen, welche Belastung,
              welche Verschlechterungsmuster. Und hier kommt der Punkt: er hat — als Patient
              — die falsche Antwort gegeben.
            </p>
            <p className="mt-4 text-base leading-[1.65] text-paper/85 sm:text-lg">
              Weil er keine Ultras mehr laufen konnte, hatte er Bouldern angefangen. Wurde
              besser, kaufte sich engere Kletterschuhe. Während des Kletterns und am Tag
              danach tat der Fuß nicht weh — erst zwei Tage später. Als Patient konnte er den
              Zusammenhang nicht sehen. Also sagte er der Ärztin: nach dem Klettern wird es
              nicht schlimmer. Sie hat ihm geglaubt. Sie war eine gute Ärztin, und mit mehr
              Zeit hätte sie genau diese Aussage hinterfragt. Aber sie hatte keine Zeit. Er
              hatte ja schon zwei Monate auf den Termin gewartet.
            </p>
            <p className="mt-4 text-base leading-[1.65] text-paper/85 sm:text-lg">
              <strong className="text-paper">Das System hatte Zeit.</strong> Es recherchierte,
              fand die Literaturlage zu druckbedingten Entzündungen — und es stellte die
              eigene Aussage des Patienten in Frage: könnte es nicht doch an den engen Schuhen
              liegen? Die Datenlage passte zu gut, um das nicht zu testen.
            </p>
            <p className="mt-4 text-base leading-[1.65] text-paper/85 sm:text-lg">
              Also wurde experimentiert. Alte, lockere Schuhe: zwei Stunden intensives
              Klettern, keine zusätzlichen Schmerzen am übernächsten Tag. Enge Schuhe: vierzig
              Minuten lockeres Klettern, deutlich schlimmer. Zwei Tage später wieder lockere
              Schuhe, zwei Stunden intensiv, nichts. Der Druck war die Ursache der Entzündung,
              die im MRT sichtbar, aber unerklärt war.
            </p>
            <p className="mt-4 text-base leading-[1.65] text-paper/85 sm:text-lg">
              Neue Schuhe, ein paar Monate Geduld, bis die Entzündung abklang. Die Diagnose
              wirkt im Nachhinein trivial — das geht oft so, wenn man die Antwort kennt. Die
              Ärztin hätte das mit genug Zeit zum Hinterfragen und Experimentieren
              wahrscheinlich auch gefunden. Sie hatte sie nicht. Computer haben unbegrenzt
              davon.
            </p>
          </div>

          <aside className="pt-3">
            {t.showPhotos && (
              <div className="mb-7">
                <picture>
                  <source srcSet="/boulder_shoes.webp" type="image/webp" />
                  <img
                    src="/boulder_shoes.jpg"
                    alt="Detail eines Kletterschuhs"
                    loading="lazy"
                    decoding="async"
                    width={1200}
                    height={1800}
                    className="block aspect-[4/5] w-full bg-paper/10 object-cover"
                  />
                </picture>
              </div>
            )}
            <div className="border border-paper/20 bg-paper/[0.06] p-6">
              <div className="mb-3 font-mono text-[10px] uppercase tracking-[.18em] text-warm sm:text-[11px]">
                Was diese Geschichte zeigt
              </div>
              <p className="m-0 font-serif text-base italic leading-[1.5] text-paper sm:text-lg lg:text-[19px]">
                Nicht jeder Fall ist so klar wie unserer. Manche bleiben ungelöst. Aber: keine
                Frage, die hinterfragt werden müsste, bleibt unhinterfragt. Keine Aussage wird
                kritiklos übernommen. Und niemand muss innerhalb von fünf Minuten zu einem
                Schluss kommen.
              </p>
            </div>

            <div className="mt-6 font-mono text-[10px] uppercase leading-[1.7] tracking-[.12em] text-paper/55 sm:text-[11px]">
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
export function SectionBegleitung(_: { t: Theme }) {
  return (
    <Section kicker="§V · Wer dich begleitet" divider className="bg-card">
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
        <div>
          <h2 className="m-0 font-serif text-[2rem] font-normal leading-[1.05] tracking-[-0.015em] text-ink sm:text-[2.75rem] lg:text-[3.5rem]">
            Dein:e Data Scientist. Eine echte Person. Vom ersten Gespräch bis zur Diagnose.
          </h2>
          <p className="mt-5 font-serif text-lg leading-[1.55] text-ink sm:text-xl lg:text-[19px]">
            In der Alpha-Phase wird dir eine echte Person zugewiesen, die dich vom ersten
            Gespräch bis zur Diagnose begleitet — die ganze Zeit dieselbe Person. Wir nennen
            diese Rolle Data Scientist, weil das ehrlich beschreibt, was sie tut: Daten
            analysieren, Literatur durchgehen, Recherchen kontrollieren, Algorithmen für
            deinen konkreten Fall einrichten.
          </p>

          <div className="mt-7 border-l-[3px] border-accent bg-paper px-6 py-6 sm:px-7 sm:py-7">
            <div className="mb-2.5 font-mono text-[10px] uppercase tracking-[.18em] text-accent sm:text-[11px]">
              Die Metapher · einmal
            </div>
            <p className="m-0 font-serif text-lg leading-[1.5] text-ink sm:text-xl lg:text-[19px]">
              Stell dir vor, du hättest einen medizinischen Assistenten, der unbegrenzt Zeit
              und Motivation hat. Er kann zehntausende Studien in Stunden durchsehen. Er
              schläft nie. Er macht keine Denkfehler, weil er müde ist. Klüger als ein:e
              Ärzt:in ist er deshalb nicht — und er muss es auch nicht sein. Das letzte Wort
              hat immer dein:e Ärzt:in.
            </p>
            <p className="mt-3 font-serif text-base leading-[1.55] text-slate sm:text-[17px]">
              Was er kann, ist ergänzen, was eine Sprechstunde nicht leisten kann: Tage
              Recherche, vollständige Hinterfragung, geduldiges Verknüpfen von allem, was über
              deinen Fall bekannt ist.{" "}
              <em className="italic text-ink">
                Nicht im Wettstreit mit den Ärzt:innen — sondern an ihrer Seite.
              </em>
            </p>
          </div>

          <div className="mt-7 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[.14em] text-accent sm:text-[11px]">
                Was sie ist
              </div>
              <p className="mt-2 text-[15px] leading-[1.6] text-slate">
                Der menschliche Teil des Bildes. Erreichbar per Chat in der App für asynchrone
                Fragen, in geplanten Teams-Calls für Dinge, die ein Gespräch brauchen.
              </p>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[.14em] text-mute sm:text-[11px]">
                Was sie nicht ist
              </div>
              <p className="mt-2 text-[15px] leading-[1.6] text-slate">
                Kein:e Ärzt:in. Sie behandelt nicht, verschreibt nicht, diagnostiziert nicht —
                das ärztliche Urteil bleibt bei deinen Ärzt:innen.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <AppScreenshot
            src="/screens/home_05_doing_answer_question.png"
            alt="Chat"
            maxWidth={300}
          />
        </div>
      </div>

      <div className="mt-14 grid grid-cols-1 items-start gap-10 border border-soft bg-paper p-6 sm:p-8 lg:grid-cols-[1fr_1.4fr] lg:gap-12 lg:p-9">
        <div>
          <div className="mb-2.5 font-mono text-[10px] uppercase tracking-[.18em] text-accent sm:text-[11px]">
            Vor allem anderen
          </div>
          <h3 className="m-0 font-serif text-2xl font-medium leading-[1.1] text-ink sm:text-[28px] lg:text-[2.125rem]">
            Der erste Call.
          </h3>
        </div>
        <div className="text-base leading-[1.65] text-slate">
          <p className="m-0">
            Bevor du die App überhaupt installierst, gibt es einen Onboarding-Call mit uns.
            Etwa eine halbe Stunde bis Stunde, je nachdem wie das Gespräch läuft. Vorab
            schickst du uns einen kurzen Überblick über deine Situation — ein paar Sätze
            reichen.
          </p>
          <p className="mt-3.5">
            Im Call lernen wir uns gegenseitig kennen, stellen dir das System vor, gehen
            vielleicht schon den ersten Teil der Anamnese zusammen durch, und richten die App
            ein. Wir reden über deine Krankheit, was wir erwarten können, was nicht.{" "}
            <strong className="text-ink">Du entscheidest danach</strong>, ob du teilnehmen
            willst — und wir entscheiden, ob wir gut helfen können. Wenn es nicht passt, sagen
            wir das ehrlich.
          </p>
        </div>
      </div>
    </Section>
  );
}

// ─── /methode → Kosten ───────────────────────────────────────────────────
export function SectionKosten(_: { t: Theme }) {
  return (
    <Section kicker="§VIII · Was du dafür einbringst" divider className="bg-card">
      <div className="mb-10 grid grid-cols-1 items-end gap-8 lg:mb-12 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
        <h2 className="m-0 font-serif text-[2rem] font-normal leading-[1.05] tracking-[-0.016em] text-ink sm:text-[2.75rem] lg:text-[3.75rem]">
          Drei Dinge brauchen wir von dir. Wir sagen vorab, wie viel.
        </h2>
        <p className="m-0 text-base leading-[1.6] text-slate sm:text-[17px]">
          Wenn deine Energie knapp ist, hilft Vorhersehbarkeit. Hier ist, womit du rechnen
          kannst — kein Schock, keine versteckten Aufwände.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* Card 1 — Zeit */}
        <div className="flex flex-col gap-4 border border-soft bg-paper p-6 sm:p-7">
          <div className="kicker">Zeit</div>
          <h3 className="m-0 font-serif text-[1.5rem] font-medium leading-[1.15] text-ink sm:text-[1.75rem]">
            Die intensivste Phase sind die ersten zwei Wochen.
          </h3>

          <div className="mt-1 flex flex-col gap-3">
            {([
              ["~ 1 Std.", "Telefonat zum Einstieg"],
              ["~ 2 Std.", "Anamnese in der App (in mehreren kurzen Sitzungen)"],
              ["~ 1 Std.", "Anforderung deiner Patientenakten — wir helfen dabei"],
            ] as const).map(([big, lab], i) => (
              <div
                key={i}
                className="grid grid-cols-[80px_1fr] items-baseline gap-3.5"
              >
                <div className="font-serif text-lg font-medium text-ink tabular-nums sm:text-[22px]">
                  {big}
                </div>
                <div className="text-sm leading-[1.45] text-slate">{lab}</div>
              </div>
            ))}
          </div>

          <p className="m-0 border-t border-dashed border-soft pt-3.5 font-serif text-[15px] italic leading-[1.55] text-mute">
            Du kannst die Anamnese aufteilen, wie du willst. Heute zehn Minuten, übermorgen
            zwanzig. Es gibt keinen Termindruck von unserer Seite.
          </p>

          <p className="m-0 text-sm leading-[1.55] text-slate">
            Danach: deutlich weniger. Kurze Rückfragen per Push, optional ein kurzes Tagebuch
            (wenige Minuten am Tag, wenn überhaupt). Plus die Facharzttermine, die du sowieso
            haben würdest.
          </p>
        </div>

        {/* Card 2 — Kraft */}
        <div className="flex flex-col gap-4 border border-soft bg-paper p-6 sm:p-7">
          <div className="kicker">Kraft</div>
          <h3 className="m-0 font-serif text-[1.5rem] font-medium leading-[1.15] text-ink sm:text-[1.75rem]">
            Anamnese ist anstrengend. Wir wissen das.
          </h3>

          <p className="m-0 text-[15px] leading-[1.6] text-slate">
            Die App ist so gebaut, dass du jederzeit pausieren und später weitermachen
            kannst, ohne von vorne anzufangen. Wenn du heute keine Energie hast, läuft im
            Hintergrund trotzdem etwas — Literaturrecherche, Befundordnung.
          </p>

          <div className="border-l-[3px] border-accent bg-warm p-4 font-serif text-base italic leading-[1.5] text-ink">
            Du verlierst keinen Tag, nur weil du einen schlechten Tag hast.
          </div>

          <p className="m-0 text-sm leading-[1.55] text-slate">
            Wenn eine andere Person dich unterstützt — Partner:in, Eltern, erwachsene Kinder
            — können sie viele Schritte übernehmen oder vorbereiten: Anamnese-Antworten
            vorausfüllen (Lücken füllst du später), Dokumente von Ärzt:innen anfordern, mit
            uns telefonieren, Termine ausmachen.{" "}
            <strong className="text-ink">Du musst nicht alles selbst tippen.</strong>
          </p>
        </div>

        {/* Card 3 — Geld */}
        <div className="flex flex-col gap-4 border border-soft bg-paper p-6 sm:p-7">
          <div className="kicker">Geld</div>

          <div className="mt-1 font-serif text-[4.5rem] font-medium leading-[0.9] tracking-[-0.03em] text-ink tabular-nums sm:text-[5.5rem] lg:text-[6rem]">
            0&nbsp;€
          </div>
          <div className="font-serif text-base italic leading-[1.4] text-slate sm:text-lg">
            in der Alpha. Inklusive Data Scientist, allen Recherchezyklen, allen
            Termin-Briefings, allen Calls.
          </div>

          <p className="m-0 text-sm leading-[1.6] text-slate">
            Wir brauchen in dieser Phase Tester:innen, nicht Kund:innen. Das Programm ist aus
            Eigenmitteln finanziert, wir müssen aktuell nicht verdienen — wir müssen lernen,
            was an echten Fällen funktioniert.
          </p>

          <div className="border border-dashed border-ink p-4 text-sm leading-[1.6] text-ink">
            <strong>Spätere Phasen werden kostenpflichtig sein.</strong> Wir sagen das jetzt,
            damit es kein Schock wird, wenn das Modell sich ändert.
          </div>
        </div>
      </div>
    </Section>
  );
}

// ─── /transparenz → Daten ────────────────────────────────────────────────
export function SectionDaten(_: { t: Theme }) {
  return (
    <Section kicker="§IX · Wie wir mit deinen Daten umgehen — ehrlich" divider>
      <div className="mb-10 grid grid-cols-1 gap-8 lg:mb-12 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
        <h2 className="m-0 font-serif text-[2rem] font-normal leading-[1.05] tracking-[-0.015em] text-ink sm:text-[2.75rem] lg:text-[3.625rem]">
          Wir können dir nur helfen, wenn wir mit deinen Daten arbeiten.
        </h2>
        <p className="m-0 font-serif text-lg leading-[1.5] text-slate sm:self-end sm:text-xl lg:text-[19px]">
          Und zwar nicht oberflächlich, sondern intensiv: vollständige Anamnese, alle
          Vor-Befunde, alles, was uns hilft, deinen Fall zu verstehen. Das ist die
          Voraussetzung dafür, dass das, was wir versprechen, überhaupt möglich ist.
        </p>
      </div>

      <div className="mb-8 border-l-[3px] border-accent bg-warm p-6 sm:p-8 lg:p-9">
        <div className="mb-3.5 font-mono text-[10px] uppercase tracking-[.18em] text-accent sm:text-[11px]">
          Ehrlich vorab — externe Anbieter
        </div>
        <p className="m-0 font-serif text-lg leading-[1.55] text-ink sm:text-xl lg:text-[19px]">
          Wir nutzen für die Analyse externe Werkzeuge — darunter Sprachmodelle und
          Recherche-Systeme von Anbietern wie <strong>OpenAI</strong> oder{" "}
          <strong>Google</strong>. Diese Werkzeuge sind aktuell das Beste, was es für diese
          Aufgabe gibt. Sie nicht zu nutzen, wäre auf deine Kosten — und das wollen wir nicht.
        </p>
        <p className="mt-3.5 text-base leading-[1.6] text-slate">
          Das bedeutet aber auch: deine Daten laufen in einem gewissen Umfang durch die Server
          dieser Anbieter.{" "}
          <strong>
            Wir sagen das offen, weil wir nicht wollen, dass du es später irgendwo
            herausfindest und dich überrumpelt fühlst.
          </strong>
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="border border-soft bg-card p-6 sm:p-7">
          <div className="mb-3.5 font-mono text-[10px] uppercase tracking-[.14em] text-accent sm:text-[11px]">
            Was wir konkret zusichern können
          </div>
          <ul className="m-0 flex list-none flex-col gap-3 p-0">
            {[
              "Wir nutzen deine Daten ausschließlich für deinen Fall.",
              "Wir verkaufen sie nicht. Geben sie nicht weiter. Nutzen sie nicht für Werbung. Nicht für unspezifisches KI-Training.",
              "Du kannst jederzeit eine vollständige Kopie exportieren — auch ohne Anlass.",
              "Du kannst jederzeit die Löschung verlangen.",
              "Eine eindeutig benannte Person bei uns ist für Datenschutzfragen zuständig — direkt per Mail erreichbar, kein Ticket-System.",
            ].map((it, i) => (
              <li
                key={i}
                className="flex gap-3 text-[15px] leading-[1.55] text-ink"
              >
                <span className="w-3.5 font-mono text-sm text-accent">✓</span>
                <span className="flex-1">{it}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="border border-soft bg-card p-6 sm:p-7">
          <div className="mb-3.5 font-mono text-[10px] uppercase tracking-[.14em] text-mute sm:text-[11px]">
            Was wir nicht versprechen können
          </div>
          <ul className="m-0 flex list-none flex-col gap-3 p-0">
            {[
              "Wir sind keine zugelassene medizinische Versorgung. Wir haben nicht die formalen Datenschutz-Prozesse einer Arztpraxis.",
              "Theoretisch könnten Daten bei einem Hackerangriff auf einen unserer externen Anbieter abfließen. Wir halten das für unwahrscheinlich, aber unmöglich ist nichts, was im Internet liegt.",
              "Diese Risikoabwägung musst du selbst treffen.",
              "Wenn dir maximaler Datenschutz wichtiger ist als der bestmögliche Recherche-Stand für deinen Fall, ist das Programm nicht das richtige für dich. Das ist okay — und ehrlicher, als dir etwas zu versprechen, das wir nicht halten können.",
            ].map((it, i) => (
              <li
                key={i}
                className="flex gap-3 text-[15px] leading-[1.55] text-ink"
              >
                <span className="w-3.5 font-mono text-sm text-mute">·</span>
                <span className="flex-1">{it}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-7 grid grid-cols-1 items-center gap-5 border border-dashed border-ink p-5 text-[15px] leading-[1.6] text-slate sm:grid-cols-[auto_1fr] sm:gap-6 sm:px-7">
        <span className="whitespace-nowrap font-mono text-[10px] uppercase tracking-[.18em] text-accent sm:text-[11px]">
          Was du zurückhalten kannst
        </span>
        <span>
          Du kannst einzelne Themen oder Dokumente von vornherein aussparen. Sei dir aber
          bewusst: je weniger wir haben, desto weniger können wir suchen. Wo du die Grenze
          ziehst, entscheidest du.
        </span>
      </div>
    </Section>
  );
}

// ─── /transparenz → Alpha ────────────────────────────────────────────────
export function SectionAlpha(_: { t: Theme }) {
  return (
    <Section kicker="§X · Wo wir gerade stehen" divider className="bg-card">
      <div className="mb-10 grid grid-cols-1 items-end gap-8 lg:mb-12 lg:grid-cols-2 lg:gap-14">
        <h2 className="m-0 font-serif text-[2rem] font-normal leading-[1.05] tracking-[-0.016em] text-ink sm:text-[2.75rem] lg:text-[3.75rem]">
          Wir sind in einem frühen Stadium. Hier ist, wo genau.
        </h2>
        <p className="m-0 text-base leading-[1.6] text-slate sm:text-[17px]">
          Diese Sektion ist offener, als auf Customer-Pages üblich. Wir glauben:
          Reziprozität ist im Frühstadium das stärkere Vertrauenssignal als Hochglanz.
        </p>
      </div>

      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[320px_1fr] lg:gap-14">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {([
            ["1", "ernster Fall begleitet", "der eigene Bouldering-Fall (§IV.b)"],
            ["10", "Validierungs-Fälle gesucht", "die nächsten — du könntest einer sein"],
            ["0 €", "Kosten in der Alpha", "kostenpflichtig erst in späteren Phasen"],
          ] as const).map(([n, l, sub], i) => (
            <div key={i} className="border border-ink bg-paper p-5">
              <div className="font-serif text-[2rem] font-medium leading-none tracking-[-0.02em] text-ink tabular-nums sm:text-[2.5rem] lg:text-[2.75rem]">
                {n}
              </div>
              <div className="mt-1.5 text-sm font-medium text-ink">{l}</div>
              <div className="mt-1 text-xs text-mute">{sub}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-6">
          <p className="m-0 text-base leading-[1.65] text-slate sm:text-[17px]">
            Konkret: wir haben einen ersten ernsten Fall begleitet (siehe §IV.b), in dem die
            Methode funktioniert hat. Jetzt validieren wir, ob das reproduzierbar ist — an den
            nächsten zehn Fällen.{" "}
            <strong className="text-ink">Du bist einer davon, wenn du teilnimmst.</strong>
          </p>
          <p className="m-0 text-base leading-[1.65] text-slate sm:text-[17px]">
            Davor haben wir die Methode an simulierten Fällen aus Medizinstudium-Unterlagen
            durchgespielt. Das ist nicht dasselbe wie die echte Welt, aber es ist die
            Vorarbeit, auf der wir aufsetzen.
          </p>
          <p className="m-0 text-base leading-[1.65] text-slate sm:text-[17px]">
            In dieser Phase ist vieles noch handgemacht. Der Algorithmus übernimmt die Last
            der Recherche, aber jeder Schritt wird von einer:m Data Scientist kontrolliert.
            Das ist nicht eine Notlösung — das ist angemessen für ein Programm in der
            Validierung. Mit größerer Kohorte später wird die Begleitung notwendigerweise
            stärker automatisiert.{" "}
            <strong className="text-ink">
              Wer jetzt mitmacht, bekommt eine Form der Aufmerksamkeit, die in zwei Jahren so
              nicht mehr existieren wird.
            </strong>
          </p>

          <div className="border-l-[3px] border-accent bg-warm px-5 py-5 font-serif text-base italic leading-[1.5] text-ink sm:px-6 sm:text-lg lg:text-[19px]">
            Warum machen wir das in dieser Form? Weil wir nicht zwei Jahre warten wollen, bis
            Menschen, die heute krank sind, Hilfe bekommen können. Und weil wir aus echten
            Fällen lernen müssen, was wir aus simulierten nicht lernen können.
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[.14em] text-accent sm:text-[11px]">
                Was wir von dir brauchen
              </div>
              <p className="mt-2 text-[15px] leading-[1.6] text-slate">
                Geduld bei Rauheiten der App, ehrliches Feedback, Bereitschaft zu Terminen
                mit uns.
              </p>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[.14em] text-accent sm:text-[11px]">
                Wie wir finanziert sind
              </div>
              <p className="mt-2 text-[15px] leading-[1.6] text-slate">
                Aus Eigenmitteln. Keine Investor:innen, die uns zu Wachstumsmetriken treiben.
                Genau deshalb können wir die Alpha kostenlos anbieten und uns die Zeit
                nehmen, die die Methode braucht.
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
    <Section kicker="§XI · Wer das hier macht" divider>
      <div className="mb-10 grid grid-cols-1 items-end gap-8 lg:mb-12 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
        <h2 className="m-0 font-serif text-[2rem] font-normal leading-[1.05] tracking-[-0.016em] text-ink sm:text-[2.75rem] lg:text-[3.75rem]">
          {t.brand} wird von Tom und Christoph entwickelt.
        </h2>
        <p className="m-0 text-base leading-[1.6] text-slate sm:text-[17px]">
          Reflektierte Patient:innen googeln sowieso — wir wollen die Zeit sparen, indem wir
          hier sagen, was zu wissen ist.
        </p>
      </div>

      <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        {[
          {
            name: "Tom",
            photo: "/team_tom",
            role: "Co-Founder · Data Science",
            blurb:
              "Über zehn Jahre Arbeit an komplexen Datensystemen für große Unternehmen — KI-Anwendungen, Information Retrieval, Arbeit mit großen wissenschaftlichen Datenbanken.",
            note: "Der Patient aus der Bouldering-Geschichte in §IV.b — das hat unsere Sicht auf das Problem geprägt.",
          },
          {
            name: "Christoph",
            photo: "/team_christoph",
            role: "Co-Founder · Data Science",
            blurb:
              "Mehr als ein Jahrzehnt im Engineering von KI- und Such-Systemen — von industrieller Datenverarbeitung bis hin zur Arbeit mit umfangreichen wissenschaftlichen Korpora.",
            note: null as string | null,
          },
        ].map((p, i) => (
          <div
            key={i}
            className="grid grid-cols-1 items-start gap-5 border border-soft bg-card p-5 sm:grid-cols-[140px_1fr] sm:gap-6 sm:p-6 lg:grid-cols-[180px_1fr]"
          >
            <div className="max-w-[180px]">
              <picture>
                <source srcSet={`${p.photo}.webp`} type="image/webp" />
                <img
                  src={`${p.photo}.jpg`}
                  alt={`${p.name}, Halbporträt`}
                  loading="lazy"
                  decoding="async"
                  width={600}
                  height={750}
                  className="block aspect-[4/5] w-full bg-soft object-cover"
                />
              </picture>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[.14em] text-accent sm:text-[11px]">
                {p.role}
              </div>
              <div className="mt-1.5 font-serif text-2xl leading-[1.15] text-ink sm:text-[28px]">
                {p.name}
              </div>
              <p className="mt-2.5 text-sm leading-[1.55] text-slate">{p.blurb}</p>
              {p.note && (
                <p className="mt-2.5 border-t border-dashed border-soft pt-2.5 font-serif text-[13px] italic leading-[1.55] text-mute">
                  {p.note}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mb-10 border-l-[3px] border-accent bg-paper p-6 sm:p-8">
        <div className="mb-2.5 font-mono text-[10px] uppercase tracking-[.18em] text-accent sm:text-[11px]">
          Warum wir das machen
        </div>
        <p className="m-0 font-serif text-lg leading-[1.5] text-ink sm:text-xl lg:text-[21px]">
          Wir wollen irgendwann nicht mehr Software für Konzerne bauen, sondern für Menschen,
          denen wir tatsächlich helfen können.
        </p>
        <p className="mt-3.5 text-base leading-[1.6] text-slate">
          Wir sind selbst betroffen — nicht im Sinne einer schweren chronischen Krankheit,
          aber genug, um die Ohnmacht zu kennen, die kommt, wenn niemand sagen kann, was los
          ist.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-12">
        <div>
          <div className="kicker mb-3">Was wir nicht haben — und ehrlich nicht haben</div>
          <h3 className="m-0 font-serif text-[1.5rem] font-medium leading-[1.1] text-ink sm:text-[1.75rem] lg:text-[1.875rem]">
            Klein, eigenfinanziert, ohne Beirat.
          </h3>
        </div>
        <ul className="m-0 flex list-none flex-col gap-4 p-0">
          {([
            [
              "Keine Ärzt:innen im Gründungsteam.",
              "Das sind wir nicht und behaupten wir nicht zu sein. Was wir sind: Data Scientists mit Erfahrung in komplexen Wissenssystemen. Die klinische Expertise im Programm kommt durch die Ärzt:innen, mit denen unsere Patient:innen ohnehin arbeiten — und nach der Alpha-Phase auch durch direkte Zusammenarbeit mit Kliniken.",
            ],
            [
              "Aktuell keinen klinischen Beirat.",
              "Wir arbeiten daran, das ist aber noch nicht so weit.",
            ],
            ["Keinen Standort in einer Klinik.", "Wir sind ein kleines, eigenfinanziertes Team."],
            [
              "Keine vorgefertigte Geschichte erfolgreicher Fälle.",
              "Mit denen wir uns schmücken könnten — wir haben einen.",
            ],
          ] as const).map(([h, b], i) => (
            <li key={i} className="border-t border-ink pt-3">
              <div className="font-serif text-base font-medium leading-[1.3] text-ink sm:text-[19px]">
                {h}
              </div>
              <div className="mt-1.5 text-sm leading-[1.55] text-slate">{b}</div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10 grid grid-cols-1 items-center gap-5 border border-dashed border-ink p-5 sm:grid-cols-[auto_1fr_auto] sm:gap-6">
        <div className="font-mono text-[10px] uppercase tracking-[.14em] text-accent sm:text-[11px]">
          Persönlich erreichbar
        </div>
        <div className="text-[15px] leading-[1.55] text-slate">
          Wenn du uns direkt erreichen willst, geht das. Keine Hotline, keine Tickets.
        </div>
        <a
          href="mailto:info@zebriss.de"
          className="inline-flex items-center justify-center whitespace-nowrap bg-ink px-5 py-3 text-[13px] font-medium text-paper no-underline"
        >
          → info@zebriss.de
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
    {
      q: "Kann ich jederzeit abbrechen?",
      a: "Ja, jederzeit. Daten lassen sich auf Wunsch löschen.",
    },
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
    <Section kicker="§XII · Häufige Fragen" divider className="bg-card">
      <div className="mb-12 grid grid-cols-1 gap-8 lg:mb-14 lg:grid-cols-2 lg:gap-14">
        <h2 className="m-0 font-serif text-[2rem] font-normal leading-[1.05] tracking-[-0.016em] text-ink sm:text-[2.75rem] lg:text-[3.75rem]">
          Die zweite Welle Fragen, die eine vorsichtige Person stellt.
        </h2>
        <p className="m-0 font-serif text-lg leading-[1.5] text-slate sm:self-end sm:text-xl lg:text-[19px]">
          Wenn deine Frage hier nicht steht: schreib uns. Es geht direkt zu einer Person,
          nicht in ein Postfach.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-x-12 lg:grid-cols-2">
        {cols.map((col, ci) => (
          <div key={ci}>
            {col.map((f, i) => (
              <details
                key={i}
                className="group border-t border-ink py-4 [&[open]_summary_.faq-icon]:rotate-45"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-serif text-lg font-medium leading-[1.3] text-ink sm:text-xl">
                  <span>{f.q.replace("{brand}", t.brand)}</span>
                  <span className="faq-icon mt-1 inline-block font-mono text-lg leading-none text-accent transition-transform duration-200">
                    +
                  </span>
                </summary>
                <div className="mt-3 max-w-[60ch] text-[15px] leading-[1.6] text-slate">
                  {f.a.replace("{brand}", t.brand)}
                </div>
              </details>
            ))}
          </div>
        ))}
      </div>
    </Section>
  );
}

// ─── /bewerbung ──────────────────────────────────────────────────────────
function FormField({
  label,
  name,
  type = "text",
  placeholder,
  multiline,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  multiline?: boolean;
  required?: boolean;
}) {
  const fieldClasses =
    "w-full border border-ink bg-paper px-3.5 py-3 text-[15px] text-ink placeholder:text-mute focus:outline-none focus:ring-2 focus:ring-accent/30";

  return (
    <div className="mb-4">
      <label className="mb-1.5 block font-mono text-[10px] uppercase tracking-[.14em] text-mute">
        {label}
        {required && <span className="ml-1 text-accent">*</span>}
      </label>
      {multiline ? (
        <textarea
          name={name}
          placeholder={placeholder}
          rows={4}
          required={required}
          className={fieldClasses + " resize-y"}
        />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          required={required}
          className={fieldClasses}
        />
      )}
    </div>
  );
}

function FormCheck({
  name,
  required,
  children,
}: {
  name: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="grid cursor-pointer grid-cols-[auto_1fr] items-start gap-2.5 py-2.5 text-sm leading-[1.5] text-ink">
      <input
        type="checkbox"
        name={name}
        value="1"
        required={required}
        className="mt-1 h-4 w-4 accent-accent"
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
  t: _t,
  state,
  isSubmitting,
}: {
  t: Theme;
  state?: BewerbungFormState;
  isSubmitting?: boolean;
}) {
  return (
    <section className="border-t border-soft bg-paper">
      <div className="container-page py-16 sm:py-20 lg:py-24">
        <SectionKicker>§XIII · Bewerben</SectionKicker>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-14">
          <div>
            <h2 className="m-0 font-serif text-[2.25rem] font-normal leading-[1.02] tracking-[-0.02em] text-ink sm:text-[3rem] lg:text-[4.25rem]">
              In drei Schritten — ehrlich.
            </h2>
            <p className="mt-5 max-w-[55ch] font-serif text-lg leading-[1.5] text-slate sm:mt-6 sm:text-xl lg:text-[20px]">
              Wir reservieren keinen Platz, bevor wir uns gesprochen haben — und du musst
              dich nicht entschieden haben, bevor wir uns gesprochen haben.
            </p>

            <ol className="m-0 mt-10 list-none p-0">
              {([
                [
                  "01",
                  "Kurzes Formular ausfüllen.",
                  "Unten rechts. Name, Alter, Kontakt, ein paar Häkchen, optional zwei Sätze.",
                ],
                [
                  "02",
                  "Onboarding-Call vereinbaren.",
                  "Wir melden uns innerhalb von ein bis drei Werktagen mit Terminvorschlägen.",
                ],
                [
                  "03",
                  "App-Zugang nach dem Call —",
                  "wenn wir beide das Gefühl haben, dass es passt.",
                ],
              ] as const).map(([n, h, b], i) => (
                <li
                  key={i}
                  className="grid grid-cols-[40px_1fr] gap-4 border-t border-ink py-4 sm:grid-cols-[56px_1fr] sm:gap-5"
                >
                  <span className="font-mono text-[13px] tracking-[.14em] text-accent">
                    {n}
                  </span>
                  <div>
                    <div className="font-serif text-lg font-medium leading-[1.2] text-ink sm:text-[22px]">
                      {h}
                    </div>
                    <div className="mt-1.5 text-[15px] leading-[1.55] text-slate">{b}</div>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-8 border border-dashed border-ink bg-card p-4 text-sm leading-[1.55] text-slate sm:p-5">
              <span className="mr-3 font-mono text-[10px] uppercase tracking-[.14em] text-accent sm:text-[11px]">
                Falls wir gerade keinen Platz haben
              </span>
              Wir nehmen aktuell maximal eine Hand voll Patient:innen parallel auf. Wenn alle
              Plätze belegt sind, kommst du auf eine Warteliste — mit ehrlicher Einschätzung,
              wann ein Platz frei wird. Kein „in zwei Tagen wieder verfügbar".
            </div>
          </div>

          {state?.status === "success" ? (
            <div className="flex flex-col gap-4 border border-ink bg-card p-6 sm:p-8">
              <div className="font-mono text-[10px] uppercase tracking-[.14em] text-accent sm:text-[11px]">
                Schritt 01 · Erledigt
              </div>
              <h3 className="m-0 font-serif text-2xl font-medium leading-[1.2] text-ink sm:text-[2rem]">
                Wir haben deine Bewerbung erhalten.
              </h3>
              <p className="m-0 text-[15px] leading-[1.6] text-slate">
                Eine echte Person — kein Auto-Responder — meldet sich innerhalb von ein bis
                drei Werktagen mit Terminvorschlägen für den Onboarding-Call.
              </p>
              <p className="m-0 font-mono text-[10px] uppercase tracking-[.14em] text-mute sm:text-[11px]">
                Referenz · #{String(state.id).padStart(4, "0")}
              </p>
            </div>
          ) : (
            <Form method="post" className="border border-ink bg-card p-6 sm:p-8">
              <div className="font-mono text-[10px] uppercase tracking-[.14em] text-accent sm:text-[11px]">
                Schritt 01 · Kurzes Formular
              </div>
              <h3 className="mb-6 mt-2 font-serif text-2xl font-medium leading-[1.2] text-ink sm:text-[28px]">
                Schreib uns, was du erlebt hast.
              </h3>

              {state?.status === "error" && (
                <div
                  role="alert"
                  className="mb-4 border-l-[3px] border-accent bg-warm p-3.5 text-sm leading-[1.5] text-ink"
                >
                  {state.message}
                </div>
              )}

              <FormField label="Vor- und Nachname" name="name" required />
              <FormField label="Alter" name="age" />
              <FormField
                label="E-Mail"
                name="email"
                type="email"
                placeholder="für die Antwort"
                required
              />
              <FormField
                label="Telefon"
                name="phone"
                type="tel"
                placeholder="für den Onboarding-Call"
              />

              <div className="mb-3.5 mt-1.5">
                <FormCheck name="consent_no_diagnosis" required>
                  Ich war bei meinem Hausarzt oder meiner Hausärztin und bei mindestens einer
                  Fachärzt:in, und ich habe keine klare Diagnose erhalten.
                </FormCheck>
                <FormCheck name="consent_records" required>
                  Ich habe die Arztbriefe aus diesen Besuchen vorliegen oder kann sie
                  anfordern.
                </FormCheck>
              </div>

              <FormField
                label="Ein bis zwei Sätze zur Situation (optional)"
                name="situation"
                placeholder="Du musst hier nichts schreiben — wir sprechen im Call ausführlich darüber."
                multiline
              />

              <div className="mt-3.5 text-xs leading-[1.5] text-mute">
                Keine Datenweitergabe (
                <a
                  href="/datenschutz"
                  className="border-b border-mute/60 text-mute no-underline hover:text-ink"
                >
                  Datenschutzerklärung
                </a>
                ). Wir melden uns innerhalb von ein bis drei Werktagen.
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-5 w-full bg-ink px-5 py-4 text-[15px] font-medium tracking-wide text-paper disabled:cursor-wait disabled:opacity-70"
              >
                {isSubmitting ? "Wird abgesendet …" : "Formular absenden"}
              </button>
              <div className="mt-2.5 text-center font-mono text-[10px] uppercase tracking-[.06em] text-mute sm:text-[11px]">
                Antwort innerhalb 1–3 Werktagen · echte Person
              </div>
            </Form>
          )}
        </div>
      </div>
    </section>
  );
}

// ─── /transparenz → Haftung ──────────────────────────────────────────────
export function SectionHaftung(_: { t: Theme }) {
  return (
    <Section kicker="Wer haftet" divider className="bg-card">
      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
        <h2 className="m-0 font-serif text-[2rem] font-normal leading-[1.05] tracking-[-0.015em] text-balance text-ink sm:text-[2.75rem] lg:text-[3.25rem]">
          Wir diagnostizieren und behandeln nicht.
        </h2>
        <p className="m-0 text-base leading-[1.65] text-slate sm:text-[17px]">
          Die ärztliche Verantwortung bleibt bei deinen Ärzt:innen. Wir sind ein
          Vorbereitungs- und Recherchewerkzeug, kein Medizinprodukt im regulatorischen Sinn.
          Diese Unterscheidung ist nicht kosmetisch — sie bestimmt, was wir versprechen
          können und was nicht.
        </p>
      </div>
    </Section>
  );
}
