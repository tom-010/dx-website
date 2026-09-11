import type { Route } from "./+types/faq";
import { PageShell, PageHero, BackToHome } from "../components/PageShell";
import { SectionFAQ } from "../components/Sections";

export function meta({}: Route.MetaArgs) {
  return [{ title: "FAQ · Zebriss" }];
}

export default function FAQ() {
  return (
    <PageShell current="/faq">
      {(t) => (
        <>
          <PageHero
            path="/faq"
            title="Häufige Fragen."
            intro="Die zweite Welle Fragen, die eine vorsichtige Person stellt. Wenn deine Frage hier nicht steht: schreib uns. Es geht direkt zu einer Person, nicht in ein Postfach."
          />
          <SectionFAQ t={t} />
          <BackToHome />
        </>
      )}
    </PageShell>
  );
}
