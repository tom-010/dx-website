import type { Route } from "./+types/impressum";
import { PageShell, PageHero, BackToHome } from "../components/PageShell";
import { Section } from "../components/Primitives";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Impressum · DxApp" }];
}

export default function Impressum() {
  return (
    <PageShell current="/impressum">
      {() => (
        <>
          <PageHero
            path="/impressum"
            title="Impressum."
            intro="Anbieterkennzeichnung gemäß § 5 DDG."
          />
          <Section kicker="§ Platzhalter">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-14">
              <div>
                <div className="kicker mb-3">Hinweis</div>
                <h2 className="m-0 font-serif text-[1.5rem] font-medium leading-[1.1] text-ink sm:text-[1.75rem] lg:text-[1.875rem]">
                  Finaler Text folgt vor öffentlichem Launch.
                </h2>
              </div>
              <div className="font-serif text-base leading-[1.6] text-slate sm:text-[17px]">
                <p className="m-0">
                  Während der geschlossenen Alpha läuft die Kommunikation direkt über die im
                  Footer hinterlegten Mail-Adressen. Eine vollständige Anbieterkennzeichnung
                  mit ladungsfähiger Anschrift, Vertretungsberechtigten und Kontaktdaten wird
                  veröffentlicht, sobald das Programm aus der eingeladenen Phase in die
                  allgemeine Nutzung übergeht.
                </p>
                <p className="mt-4">
                  Für rechtliche Anfragen in der Zwischenzeit:{" "}
                  <a
                    href="mailto:kontakt@dxapp.health"
                    className="border-b border-ink pb-[1px] text-ink no-underline"
                  >
                    kontakt@dxapp.health
                  </a>
                  .
                </p>
              </div>
            </div>
          </Section>
          <BackToHome />
        </>
      )}
    </PageShell>
  );
}
