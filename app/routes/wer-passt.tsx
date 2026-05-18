import type { Route } from "./+types/wer-passt";
import { PageShell, PageHero, BackToHome } from "../components/PageShell";
import { SectionBistDuHierRichtig } from "../components/Sections";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Wer passt · DxApp" }];
}

export default function WerPasst() {
  return (
    <PageShell current="/wer-passt">
      {(t) => (
        <>
          <PageHero
            path="/wer-passt"
            title="Bist du hier richtig?"
            intro="Wir filtern in beide Richtungen — für dich, und für uns. Lies das hier zuerst, bevor du dich bewirbst."
          />
          <SectionBistDuHierRichtig t={t} />
          <BackToHome />
        </>
      )}
    </PageShell>
  );
}
