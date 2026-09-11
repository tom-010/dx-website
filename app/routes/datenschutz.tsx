import type { Route } from "./+types/datenschutz";
import { PageShell, PageHero, BackToHome } from "../components/PageShell";
import { Section } from "../components/Primitives";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Datenschutzerklärung · Zebriss" }];
}

export default function Datenschutz() {
  return (
    <PageShell current="/datenschutz">
      {() => (
        <>
          <PageHero
            path="/datenschutz"
            title="Datenschutzerklärung."
            intro="Wie wir mit deinen Daten umgehen — die ehrliche Kurzfassung steht hier, die vollständige juristische Fassung folgt."
          />
          <Section kicker="§ Platzhalter">
            <div className="mb-10 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-14">
              <div>
                <div className="kicker mb-3">Hinweis</div>
                <h2 className="m-0 font-serif text-[1.5rem] font-medium leading-[1.1] text-ink sm:text-[1.75rem] lg:text-[1.875rem]">
                  Finale Datenschutzerklärung folgt vor öffentlichem Launch.
                </h2>
              </div>
              <div className="font-serif text-base leading-[1.6] text-slate sm:text-[17px]">
                <p className="m-0">
                  Solange das Programm in der eingeladenen Alpha läuft, gilt die Zusicherung,
                  die du auf der Seite{" "}
                  <a
                    href="/transparenz"
                    className="border-b border-ink pb-[1px] text-ink no-underline"
                  >
                    /transparenz
                  </a>{" "}
                  findest: Daten ausschließlich für deinen Fall, kein Verkauf, kein Weitergeben,
                  kein unspezifisches KI-Training. Export und Löschung jederzeit auf Anfrage.
                </p>
                <p className="mt-4">
                  Eine vollständige Erklärung mit allen Auftragsverarbeitern, Rechtsgrundlagen
                  und Betroffenenrechten erscheint hier, bevor das Programm öffentlich
                  zugänglich wird.
                </p>
              </div>
            </div>

            <div className="border-l-[3px] border-accent bg-paper p-6 sm:p-8">
              <div className="mb-2.5 font-mono text-[10px] uppercase tracking-[.18em] text-accent sm:text-[11px]">
                Direkter Kontakt
              </div>
              <p className="m-0 font-serif text-lg leading-[1.5] text-ink sm:text-xl lg:text-[21px]">
                Datenschutzfragen gehen direkt an eine echte Person — kein Ticket-System.
              </p>
              <a
                href="mailto:info@zebriss.de"
                className="mt-5 inline-flex items-center justify-center whitespace-nowrap bg-ink px-5 py-3 text-[13px] font-medium text-paper no-underline"
              >
                → info@zebriss.de
              </a>
            </div>
          </Section>
          <BackToHome />
        </>
      )}
    </PageShell>
  );
}
