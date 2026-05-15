import type { Route } from "./+types/home";
import { PageShell } from "../components/PageShell";
import {
  Hero,
  HomeBistDuHier,
  HomeDreiSaeulen,
  HomeBlickInDieApp,
  HomeAblauf,
  HomeBouldering,
  HomeVersprechen,
  HomeAlphaKurz,
  HomeBewerbungShort,
} from "../components/HomeSections";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Tester-Akquise · das Programm (Working Title)" },
    {
      name: "description",
      content:
        "Ein Recherche-Programm für seltene und schwer zu diagnostizierende Krankheiten.",
    },
  ];
}

export default function Home(_: Route.ComponentProps) {
  return (
    <PageShell current="/">
      {(t) => (
        <>
          <Hero t={t} />
          <HomeBistDuHier t={t} />
          <HomeDreiSaeulen t={t} />
          <HomeBlickInDieApp t={t} />
          <HomeAblauf t={t} />
          <HomeBouldering t={t} />
          <HomeVersprechen t={t} />
          <HomeAlphaKurz t={t} />
          <HomeBewerbungShort t={t} />
        </>
      )}
    </PageShell>
  );
}
