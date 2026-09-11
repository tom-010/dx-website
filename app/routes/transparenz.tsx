import type { Route } from "./+types/transparenz";
import { PageShell, PageHero, BackToHome } from "../components/PageShell";
import { SectionAlpha, SectionDaten, SectionHaftung } from "../components/Sections";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Transparenz · Zebriss" }];
}

export default function Transparenz() {
  return (
    <PageShell current="/transparenz">
      {(t) => (
        <>
          <PageHero
            path="/transparenz"
            title="Transparenz."
            intro="Wir sind ein Forschungsprogramm in einer frühen Phase. Hier ist, wo genau wir stehen, wie wir mit deinen Daten umgehen, wie wir finanziert sind — und wer haftet, wenn etwas schiefläuft."
          />
          <SectionAlpha t={t} />
          <SectionDaten t={t} />
          <SectionHaftung t={t} />
          <BackToHome />
        </>
      )}
    </PageShell>
  );
}
