import type { Route } from "./+types/agb";
import { PageShell, PageHero, BackToHome } from "../components/PageShell";
import { Section } from "../components/Primitives";

export function meta({}: Route.MetaArgs) {
  return [{ title: "AGB · Alpha · Zebriss" }];
}

export default function AGB() {
  return (
    <PageShell current="/agb">
      {() => (
        <>
          <PageHero
            path="/agb"
            title="AGB · Alpha."
            intro="Die Bedingungen, unter denen die kostenlose Alpha-Teilnahme läuft."
          />
          <Section kicker="§ Platzhalter">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-14">
              <div>
                <div className="kicker mb-3">Hinweis</div>
                <h2 className="m-0 font-serif text-[1.5rem] font-medium leading-[1.1] text-ink sm:text-[1.75rem] lg:text-[1.875rem]">
                  Finale AGB folgen vor öffentlichem Launch.
                </h2>
              </div>
              <div className="font-serif text-base leading-[1.6] text-slate sm:text-[17px]">
                <p className="m-0">
                  Die Alpha läuft mit individuell vereinbarten Bedingungen pro Tester:in — die
                  wesentlichen Punkte stehen im Onboarding-Call und in der Bestätigungsmail. Eine
                  ausformulierte AGB-Fassung wird hier veröffentlicht, sobald das Programm aus
                  der eingeladenen Phase in die allgemeine Nutzung übergeht.
                </p>
                <p className="mt-4">
                  Die Grundzusagen sind die, die auf{" "}
                  <a
                    href="/transparenz"
                    className="border-b border-ink pb-[1px] text-ink no-underline"
                  >
                    /transparenz
                  </a>{" "}
                  beschrieben sind: kostenlos in der Alpha, keine Diagnose durch uns, jederzeit
                  abbrechbar.
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
