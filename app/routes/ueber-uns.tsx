import type { Route } from "./+types/ueber-uns";
import { PageShell, PageHero, BackToHome } from "../components/PageShell";
import { SectionWerWirSind, SectionBouldering } from "../components/Sections";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Über uns · DxApp" }];
}

export default function UeberUns() {
  return (
    <PageShell current="/ueber-uns">
      {(t) => (
        <>
          <PageHero
            t={t}
            path="/ueber-uns"
            title="Tom und Christoph."
            intro="Wer das hier macht — und der Fall, mit dem alles angefangen hat."
          />
          <SectionWerWirSind t={t} />
          <div id="erster-fall">
            <SectionBouldering t={t} />
          </div>
          <BackToHome t={t} />
        </>
      )}
    </PageShell>
  );
}
