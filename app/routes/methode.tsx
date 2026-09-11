import type { Route } from "./+types/methode";
import { PageShell, PageHero, BackToHome } from "../components/PageShell";
import { SectionMethode, SectionBegleitung, SectionKosten } from "../components/Sections";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Methode · Zebriss" }];
}

export default function Methode() {
  return (
    <PageShell current="/methode">
      {(t) => (
        <>
          <PageHero
            path="/methode"
            title="Die Methode."
            intro={
              <>
                Unsere Methode hat einen alten Namen. Sherlock Holmes hat sie in einem Satz
                beschrieben, und im Kern ist sie das, was Ärzt:innen lernen, wenn sie
                Differenzialdiagnostik studieren: nichts vorab ausschließen, dann systematisch
                aussortieren, bis die Wahrheit übrig bleibt.{" "}
                <em className="italic text-ink">
                  Das Problem ist nicht die Methode — das Problem ist die Zeit, die sie braucht. In
                  einer Sprechstunde geht das nicht. Bei uns schon.
                </em>
              </>
            }
          />
          <SectionMethode t={t} />
          <SectionBegleitung t={t} />
          <SectionKosten t={t} />
          <BackToHome />
        </>
      )}
    </PageShell>
  );
}
