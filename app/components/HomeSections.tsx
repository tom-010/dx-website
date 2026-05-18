import type { Theme } from "./theme";
import { renderHeadline } from "./theme";
import { Section, SectionKicker, AppScreenshot } from "./Primitives";

export function Hero({ t }: { t: Theme }) {
  return (
    <section className="bg-paper">
      <div className="container-page grid grid-cols-1 items-center gap-10 py-10 sm:py-14 lg:grid-cols-[1fr_minmax(280px,420px)] lg:gap-16 lg:pb-24 lg:pt-16">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-soft px-3.5 py-1.5 text-[11px] font-medium text-accent sm:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span>
              Für Menschen, denen das normale System keine Diagnose geben kann
            </span>
          </div>

          <h1 className="h-display mt-6 max-w-[18ch] text-[2.5rem] leading-[1.05] text-ink sm:mt-7 sm:text-[3.5rem] md:text-[4.5rem] lg:mt-7 lg:max-w-[16ch] lg:text-[5.125rem]">
            {renderHeadline(t.headline)}
          </h1>

          <p className="mt-6 max-w-[55ch] font-serif text-lg font-light leading-[1.5] text-slate sm:text-xl lg:mt-7 lg:text-[23px]">
            Ein Recherche-Programm für seltene und schwer zu diagnostizierende Krankheiten.
            Wir lesen die medizinische Forschung auf deinen Fall hin, bereiten deine
            Facharzttermine vor und arbeiten mit dir, bis du eine Antwort hast.
          </p>

          <div className="mt-5 flex max-w-[55ch] flex-wrap items-center gap-3 border-l-[3px] border-accent bg-warm px-4 py-3 sm:gap-4">
            <span className="font-mono text-[10px] uppercase tracking-[.18em] text-accent">
              Alpha-Phase
            </span>
            <span className="text-sm leading-[1.5] text-ink">
              Persönlicher Data Scientist inklusive · kostenlos
            </span>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 sm:mt-9 sm:gap-5">
            <a
              href="/bewerbung"
              className="inline-flex items-center bg-ink px-5 py-3 text-[15px] font-medium tracking-wide text-paper no-underline sm:px-6 sm:py-[15px]"
            >
              Schauen, ob das zu dir passt →
            </a>
            <a
              href="/methode"
              className="border-b border-ink pb-[2px] text-sm text-ink no-underline"
            >
              Oder erst die Methode lesen
            </a>
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-[340px] items-center justify-center lg:max-w-none">
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-10 blur-[10px]"
            style={{
              background: `radial-gradient(55% 50% at 60% 50%, var(--color-warm) 0%, transparent 70%)`,
            }}
          />
          <div className="relative w-full">
            <AppScreenshot
              src="/screens/home_02_anamnesis_done.png"
              alt="Tab Heute — der aktuelle Fall"
              maxWidth={340}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomeBistDuHier(_: { t: Theme }) {
  return (
    <Section kicker="§01 · Bist du hier richtig?" divider>
      <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
        <h2 className="m-0 font-serif text-[2rem] font-normal leading-[1.05] tracking-[-0.015em] text-balance text-ink sm:text-[2.75rem] lg:text-[3.5rem]">
          Diese Seite ist nicht für jeden.
        </h2>
        <p className="m-0 font-serif text-lg leading-[1.5] text-slate sm:text-xl lg:text-[21px]">
          Du warst bei deinem Hausarzt oder deiner Hausärztin. Du warst danach bei mindestens
          einer:m Spezialist:in — und bist ohne Diagnose herausgekommen. Du bist krank, schon
          länger, und das normale System hat dich bisher nicht weitergebracht.{" "}
          <em className="italic text-ink">Wenn du hier nickst, bist du hier richtig.</em>
        </p>
      </div>

      <div className="mt-8">
        <a
          href="/wer-passt"
          className="inline-block border-b border-ink pb-[2px] font-serif text-base text-ink no-underline sm:text-[17px]"
        >
          Ausführlich: Bist du hier richtig? →
        </a>
      </div>
    </Section>
  );
}

export function HomeDreiSaeulen(_: { t: Theme }) {
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
    <section id="saeulen" className="border-t border-soft bg-card">
      <div className="container-page py-20 lg:py-28">
        <SectionKicker>§02 · Was du bekommst</SectionKicker>

        <div className="mb-14 grid grid-cols-1 items-end gap-8 lg:mb-[72px] lg:grid-cols-[1.1fr_1fr] lg:gap-14">
          <h2 className="h-display m-0 max-w-[18ch] text-[2.25rem] leading-[1.05] text-ink sm:text-[3rem] md:text-[3.75rem] lg:text-[4.75rem]">
            Drei Dinge, die dir das normale System nicht geben kann.
          </h2>
          <p className="m-0 max-w-[55ch] font-serif text-lg leading-[1.55] text-slate sm:text-xl lg:text-[20px]">
            Wir lösen nicht alles. Aber das hier — diese drei Dinge — ist das, was zwischen
            dir und einer Antwort meistens fehlt. Und es ist das, woran wir arbeiten, jeden
            Tag, an deinem Fall.
          </p>
        </div>

        <ol className="m-0 grid list-none grid-cols-1 gap-0 border-t-[1.5px] border-ink p-0 md:grid-cols-3">
          {pillars.map((p, i) => (
            <li
              key={p.n}
              className={
                "relative flex flex-col gap-5 py-9 md:py-11 " +
                (i === 0 ? "pl-0" : "md:pl-9") +
                " " +
                (i === pillars.length - 1 ? "pr-0" : "md:pr-9") +
                " " +
                (i < pillars.length - 1
                  ? "border-b border-soft md:border-b-0 md:border-r md:border-soft"
                  : "")
              }
            >
              <div className="flex items-baseline justify-between gap-3">
                <span className="font-serif text-[3rem] italic leading-none tracking-[-0.02em] text-accent tabular-nums sm:text-[3.5rem] lg:text-[4rem]">
                  {p.n}
                </span>
                <span className="text-right font-mono text-[10px] uppercase tracking-[.14em] text-accent sm:text-[11px]">
                  {p.mark}
                </span>
              </div>

              <h3 className="m-0 font-serif text-[1.5rem] font-medium leading-[1.15] tracking-[-0.01em] text-balance text-ink sm:text-[1.75rem] lg:text-[1.875rem]">
                {p.title}
              </h3>

              <p className="m-0 text-[15px] leading-[1.65] text-slate sm:text-base">{p.body}</p>

              <p className="m-0 mt-auto border-t border-dashed border-soft pt-5 font-serif text-base italic leading-[1.5] text-ink sm:text-[17px]">
                {p.foot}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex flex-col flex-wrap items-start justify-between gap-4 sm:flex-row sm:items-baseline lg:mt-14">
          <p className="m-0 max-w-[60ch] text-[15px] leading-[1.6] text-slate">
            Wie das genau funktioniert — Sherlock-Holmes-Prinzip, sechs Schritte, was wir
            anders machen als eine Sprechstunde — steht auf der Methode-Seite.
          </p>
          <a
            href="/methode"
            className="border-b border-ink pb-[2px] font-serif text-base text-ink no-underline sm:text-[17px]"
          >
            Im Detail: Wie wir arbeiten →
          </a>
        </div>
      </div>
    </section>
  );
}

export function HomeBlickInDieApp(_: { t: Theme }) {
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
    <section className="border-t border-soft bg-card">
      <div className="container-page py-20 lg:py-28">
        <SectionKicker>§02b · Ein Blick in die App</SectionKicker>

        <div className="mb-12 grid grid-cols-1 items-end gap-8 lg:mb-14 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
          <h2 className="h-display m-0 max-w-[20ch] text-[2rem] leading-[1.05] text-ink sm:text-[2.75rem] md:text-[3.25rem] lg:text-[4rem]">
            Eine ruhige App. Vier Tabs. Kein Dashboard, das dich erschlägt.
          </h2>
          <p className="m-0 max-w-[55ch] font-serif text-lg leading-[1.5] text-slate sm:text-xl lg:text-[19px]">
            Du musst sie nicht jeden Tag öffnen. Wenn etwas von dir gebraucht wird, sagen
            wir Bescheid — dazwischen läuft die Recherche im Hintergrund weiter.
          </p>
        </div>

        <div className="grid grid-cols-1 items-center gap-10 border-b border-soft pb-12 sm:gap-12 lg:grid-cols-[minmax(220px,280px)_1fr] lg:gap-16">
          <div className="relative mx-auto flex w-full max-w-[260px] justify-center sm:max-w-[280px] lg:mx-0">
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-9 opacity-55 blur-[10px]"
              style={{
                background: `radial-gradient(60% 50% at 50% 50%, var(--color-warm) 0%, transparent 70%)`,
              }}
            />
            <div className="relative w-full">
              <AppScreenshot src={screens[0].src} alt={screens[0].title} maxWidth={280} />
            </div>
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[.18em] text-accent sm:text-[11px]">
              Tab · {screens[0].tab} · Startbildschirm
            </div>
            <h3 className="mt-3 max-w-[20ch] font-serif text-[1.75rem] font-medium leading-[1.1] tracking-[-0.012em] text-balance text-ink sm:text-[2.25rem] lg:text-[2.5rem]">
              {screens[0].title}
            </h3>
            <p className="mt-4 max-w-[60ch] font-serif text-base leading-[1.55] text-slate sm:text-lg lg:mt-[18px] lg:text-[19px]">
              Nächster Termin, was wir gerade lesen, deine Befunde — alles auf einer Karte.
              Kein Zahlen-Dashboard, keine Push-Lawine. Du musst die App nicht jeden Tag
              öffnen.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6 sm:gap-8 lg:mt-14 lg:grid-cols-4">
          {screens.slice(1).map((s, i) => (
            <figure
              key={i}
              className={
                "m-0 flex flex-col gap-4 " +
                (i % 2 ? "lg:pt-6" : "")
              }
            >
              <div className="flex justify-center">
                <AppScreenshot src={s.src} alt={s.title} maxWidth={184} />
              </div>
              <figcaption className="px-1">
                <div className="flex items-baseline gap-2.5">
                  <span className="font-serif text-lg italic leading-none text-accent tabular-nums">
                    {String(i + 2).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[.18em] text-accent">
                    Tab · {s.tab}
                  </span>
                </div>
                <div className="mt-2 font-serif text-[17px] font-medium leading-[1.2] text-balance text-ink sm:text-lg">
                  {s.title}
                </div>
                <div className="mt-1.5 text-[13px] leading-[1.55] text-slate">
                  {s.caption}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 flex flex-col flex-wrap justify-between gap-2 border-t border-dashed border-soft pt-5 font-mono text-[10px] uppercase tracking-[.14em] text-mute sm:flex-row sm:gap-4 sm:text-[11px]">
          <span>Screenshots aus der aktuellen Alpha</span>
          <span>Inhalte beispielhaft</span>
        </div>
      </div>
    </section>
  );
}

export function HomeAblauf(_: { t: Theme }) {
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
    <Section kicker="§03 · Wie das funktioniert" divider>
      <div className="mb-12 grid grid-cols-1 items-start gap-10 lg:mb-14 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
        <div>
          <div className="kicker mb-3">Das Sherlock-Holmes-Prinzip</div>
          <h2 className="m-0 font-serif text-[2rem] font-normal leading-[1.05] tracking-[-0.018em] text-balance text-ink sm:text-[2.75rem] lg:text-[3.5rem]">
            Genau so arbeiten Ärzt:innen in der Theorie. In der Praxis fehlt dafür die Zeit.
          </h2>
          <p className="mt-5 text-base leading-[1.65] text-slate sm:text-[17px]">
            Differenzialdiagnostik: nichts vorab ausschließen, dann systematisch aussortieren,
            bis die Wahrheit übrig bleibt. Das Problem ist nicht die Methode. Das Problem ist
            die Zeit, die sie braucht. <strong className="text-ink">Wir haben sie.</strong>
          </p>
        </div>

        <blockquote className="m-0 border-l-[3px] border-accent bg-card p-7 font-serif sm:p-9">
          <p className="m-0 font-serif text-lg italic leading-[1.45] text-ink sm:text-xl lg:text-[22px]">
            „Wenn man das Unmögliche ausgeschlossen hat, muss das, was übrig bleibt — wie
            unwahrscheinlich es auch sein mag — die Wahrheit sein."
          </p>
          <footer className="mt-4 text-[13px] tracking-wide text-mute">— Arthur Conan Doyle</footer>
        </blockquote>
      </div>

      <div className="border border-ink bg-card p-6 sm:p-8 lg:p-9">
        <div className="kicker mb-5">Der Ablauf · sieben Schritte</div>

        {/* Mobile: stacked column. Tablet+: 7-column grid */}
        <ol className="relative m-0 list-none p-0">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-7 lg:gap-3.5">
            {steps.map(([title, body], i) => (
              <li
                key={i}
                className={
                  "relative border-t-2 pt-4 " +
                  (i >= 2 && i <= 5 ? "border-accent" : "border-ink")
                }
              >
                <div className="font-mono text-[10px] uppercase tracking-[.14em] text-accent">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="mt-1.5 font-serif text-[15px] font-medium leading-[1.2] text-balance text-ink sm:text-base">
                  {title}
                </div>
                <div className="mt-1.5 text-xs leading-[1.45] text-slate sm:text-[12px]">
                  {body}
                </div>
              </li>
            ))}
          </div>
        </ol>

        <div className="mt-6 flex flex-col flex-wrap items-start justify-between gap-2 border border-dashed border-accent bg-paper px-4 py-3 font-mono text-[10px] uppercase tracking-[.14em] text-accent sm:flex-row sm:items-center sm:gap-4 sm:px-5 sm:text-[11px]">
          <span>↻ Schritte 3 – 6 wiederholen sich</span>
          <span>so lange, bis eine Diagnose steht</span>
        </div>
      </div>

      <div className="mt-8 text-right">
        <a
          href="/methode"
          className="border-b border-ink pb-[2px] font-serif text-base text-ink no-underline sm:text-[17px]"
        >
          Mehr zur Methode →
        </a>
      </div>
    </Section>
  );
}

export function HomeBouldering({ t }: { t: Theme }) {
  return (
    <section className="border-t border-soft bg-ink text-paper">
      <div className="container-page py-20 lg:py-28">
        <SectionKicker tone="paper">§04 · Wir haben das einmal selbst durchgemacht</SectionKicker>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-[72px]">
          <div className="font-serif">
            <h2 className="m-0 font-serif text-[2rem] font-normal leading-[1.05] tracking-[-0.018em] text-balance text-paper sm:text-[2.75rem] lg:text-[3.5rem]">
              Monatelang Fußschmerzen. Niemand wusste, warum.
            </h2>

            <p className="mt-6 text-lg leading-[1.55] text-paper sm:mt-7 sm:text-xl">
              Einer von uns hatte monatelang Fußschmerzen nach einer Sportverletzung.
              Hausarzt, Spezialärztin, MRT, Röntgen — die Entzündung war klar zu sehen,
              die Ursache nicht. Empfehlung: noch drei Monate Pause.
            </p>

            <p className="mt-5 text-base leading-[1.65] text-paper/85 sm:text-lg">
              Wir haben den Fall in eine frühe Version unseres Systems gefüttert. Es
              stellte ähnliche Fragen wie die Ärztin — aber im Gegensatz zu ihr hatte es
              Zeit, jede einzelne Antwort kritisch zu hinterfragen. Eine seiner Antworten
              war nämlich falsch. Nicht aus bösem Willen — er konnte den Zusammenhang als
              Patient einfach nicht sehen. <strong className="text-paper">Das System fand ihn.</strong>{" "}
              Die Ursache war kein Sportthema. Es waren zu enge Kletterschuhe.
            </p>

            <p className="mt-6 border-t border-paper/20 pt-5 font-serif text-base italic leading-[1.5] text-paper/80 sm:text-lg lg:text-[19px]">
              Im Nachhinein wirkt die Diagnose trivial. Das geht oft so, wenn man die
              Antwort kennt. Die Ärztin hätte sie mit genug Zeit auch gefunden. Sie hatte
              sie nicht. Computer haben unbegrenzt davon.
            </p>

            <div className="mt-7">
              <a
                href="/ueber-uns#erster-fall"
                className="border-b border-warm pb-[2px] font-serif text-base text-warm no-underline sm:text-[17px]"
              >
                Die ganze Geschichte →
              </a>
            </div>
          </div>

          <aside className="pt-3">
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
                  className="block aspect-[4/5] w-full bg-paper/10 object-cover"
                />
              </picture>
            )}
            <div className="mt-6 border border-paper/20 bg-paper/[0.06] p-5 sm:p-6">
              <div className="mb-3 font-mono text-[10px] uppercase tracking-[.18em] text-warm sm:text-[11px]">
                Was die Geschichte zeigt
              </div>
              <p className="m-0 font-serif text-base italic leading-[1.55] text-paper sm:text-[17px]">
                Computer haben Zeit. Sie hinterfragen geduldig. Und sie übernehmen keine
                Aussage kritiklos — auch nicht deine eigene.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export function HomeVersprechen(_: { t: Theme }) {
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
    <Section
      kicker="§05 · Was wir versprechen — und was nicht"
      divider
      className="bg-card"
    >
      <div className="mb-10 grid grid-cols-1 items-end gap-8 lg:mb-12 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
        <h2 className="h-display m-0 max-w-[18ch] text-[2rem] leading-[1.05] text-ink sm:text-[2.75rem] lg:text-[3.75rem]">
          Ehrlichkeit ist Teil der Methode.
        </h2>
        <p className="m-0 max-w-[55ch] font-serif text-lg leading-[1.5] text-slate sm:text-xl lg:text-[19px]">
          In einem Markt, der von Heilsversprechen lebt, ist das Weglassen das Statement.
          Versprechen, die beim ersten Rückschlag im Alltag einbrechen, kosten das
          Vertrauen, das sie aufgebaut haben.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-0 border-t-[1.5px] border-ink md:grid-cols-2">
        <div className="border-b border-ink py-7 md:border-b-0 md:border-r md:border-ink md:pr-8 md:py-8 lg:pr-9">
          <div className="kicker mb-4">Was wir versprechen können</div>
          <ul className="m-0 flex list-none flex-col gap-4 p-0">
            {can.map((it, i) => (
              <li key={i} className="flex gap-3 text-base leading-[1.55] text-ink sm:text-[17px]">
                <span className="w-4 flex-shrink-0 font-mono text-base text-accent">✓</span>
                <span className="flex-1">{it}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="py-7 md:py-8 md:pl-8 lg:pl-9">
          <div className="mb-4 font-mono text-[10px] uppercase tracking-[.18em] text-mute sm:text-[11px]">
            Was wir nicht versprechen
          </div>
          <ul className="m-0 flex list-none flex-col gap-4 p-0">
            {cant.map((it, i) => (
              <li key={i} className="flex gap-3 text-base leading-[1.55] text-ink sm:text-[17px]">
                <span className="w-4 flex-shrink-0 font-mono text-base text-mute">·</span>
                <span className="flex-1">{it}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 text-right">
        <a
          href="/transparenz"
          className="border-b border-ink pb-[2px] font-serif text-base text-ink no-underline sm:text-[17px]"
        >
          Mehr zur Transparenz: Daten, Finanzierung, Stadium →
        </a>
      </div>
    </Section>
  );
}

export function HomeAlphaKurz(_: { t: Theme }) {
  const cards: [string, string, string][] = [
    ["1", "Data Scientist", "feste Bezugsperson · vom ersten Call bis zur Diagnose"],
    ["0 €", "in der Alpha", "kostenpflichtig erst in späteren Phasen"],
    ["Eigen-", "finanziert", "keine Investor:innen, keine Wachstumsmetriken"],
  ];
  return (
    <Section kicker="§06 · Was die Alpha besonders macht" divider>
      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
        <div>
          <h2 className="m-0 font-serif text-[2rem] font-normal leading-[1.05] tracking-[-0.016em] text-balance text-ink sm:text-[2.75rem] lg:text-[3.5rem]">
            Eine Form der Aufmerksamkeit, die in zwei Jahren so nicht mehr existiert.
          </h2>
          <p className="mt-5 text-base leading-[1.65] text-slate sm:text-[18px]">
            Aktuell begleiten wir eine kleine Hand voll Patient:innen parallel —
            persönlich, mit großem Aufwand pro Fall. Wer jetzt mitmacht, bekommt eine:n
            Data Scientist als feste Bezugsperson, vom ersten Onboarding-Call bis zur
            Diagnose.
          </p>
          <p className="mt-3.5 text-base leading-[1.65] text-slate sm:text-[18px]">
            Wir sind aus Eigenmitteln finanziert, ohne Investor:innen mit Wachstumsdruck.
            Genau deshalb können wir die Alpha kostenlos anbieten — wir brauchen
            Tester:innen, keine Kund:innen, und wir lernen aus echten Fällen, was wir aus
            simulierten nicht lernen können.
          </p>
        </div>

        <div className="flex flex-col gap-3.5">
          {cards.map(([big, label, sub], i) => (
            <div
              key={i}
              className="grid grid-cols-[auto_1fr] items-baseline gap-5 border border-ink bg-card px-5 py-5 sm:px-6"
            >
              <div className="whitespace-nowrap font-serif text-[2rem] font-medium leading-[0.95] tracking-[-0.02em] text-ink tabular-nums sm:text-[2.5rem] lg:text-[2.625rem]">
                {big}
              </div>
              <div>
                <div className="text-[15px] font-medium text-ink">{label}</div>
                <div className="mt-1 text-[13px] leading-[1.5] text-slate">{sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function HomeBewerbungShort(_: { t: Theme }) {
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
    <section className="border-t border-soft bg-paper">
      <div className="container-page py-20 lg:py-28">
        <SectionKicker>§07 · Bewerbung</SectionKicker>

        <div className="mb-12 grid grid-cols-1 items-end gap-8 lg:mb-14 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
          <h2 className="h-display m-0 text-[2.25rem] leading-[1.02] text-ink sm:text-[3.25rem] lg:text-[4.25rem]">
            In drei Schritten.
          </h2>
          <p className="m-0 max-w-[55ch] font-serif text-lg leading-[1.5] text-slate sm:text-xl lg:text-[20px]">
            Wir reservieren keinen Platz, bevor wir gesprochen haben. Und du musst dich
            nicht entschieden haben, bevor wir gesprochen haben.
          </p>
        </div>

        <ol className="m-0 grid list-none grid-cols-1 gap-0 border-t-[1.5px] border-ink p-0 md:grid-cols-3">
          {steps.map(([n, h, b], i, arr) => (
            <li
              key={n}
              className={
                "py-9 md:py-9 " +
                (i === 0 ? "pl-0" : "md:pl-8") +
                " " +
                (i === arr.length - 1 ? "pr-0" : "md:pr-8") +
                " " +
                (i < arr.length - 1
                  ? "border-b border-soft md:border-b-0 md:border-r md:border-soft"
                  : "")
              }
            >
              <div className="font-serif text-[2.5rem] italic leading-none tracking-[-0.02em] text-accent tabular-nums sm:text-[2.75rem]">
                {n}
              </div>
              <div className="mt-4 font-serif text-[1.375rem] font-medium leading-[1.2] text-balance text-ink sm:text-[1.5rem] lg:text-[1.625rem]">
                {h}
              </div>
              <p className="mt-3 text-[15px] leading-[1.6] text-slate">{b}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 grid grid-cols-1 items-center gap-6 bg-ink px-6 py-6 text-paper sm:gap-8 sm:px-8 lg:mt-12 lg:grid-cols-[1fr_auto] lg:px-9 lg:py-7">
          <div>
            <div className="mb-2 font-mono text-[10px] uppercase tracking-[.18em] text-warm sm:text-[11px]">
              Nächster Schritt
            </div>
            <div className="font-serif text-xl leading-[1.2] sm:text-2xl lg:text-[26px]">
              Bereit? Schauen wir gemeinsam, ob das passt.
            </div>
          </div>
          <a
            href="/bewerbung"
            className="inline-flex items-center whitespace-nowrap bg-warm px-6 py-3.5 text-[15px] font-medium tracking-wide text-ink no-underline lg:px-7 lg:py-4"
          >
            Zum Bewerbungsformular →
          </a>
        </div>
      </div>
    </section>
  );
}
