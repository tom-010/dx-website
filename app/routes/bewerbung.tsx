import { useActionData, useNavigation } from "react-router";
import type { Route } from "./+types/bewerbung";
import { PageShell, PageHero, BackToHome } from "../components/PageShell";
import { SectionBewerbung, type BewerbungFormState } from "../components/Sections";
import { recordApplication } from "../db.server";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Bewerbung · DxApp" }];
}

export async function action({ request }: Route.ActionArgs): Promise<BewerbungFormState> {
  const data = await request.formData();
  const name = String(data.get("name") ?? "").trim();
  const email = String(data.get("email") ?? "").trim();
  const age = String(data.get("age") ?? "").trim() || null;
  const phone = String(data.get("phone") ?? "").trim() || null;
  const situation = String(data.get("situation") ?? "").trim() || null;
  const consentNoDiagnosis = data.get("consent_no_diagnosis") === "1";
  const consentRecords = data.get("consent_records") === "1";

  if (!name) {
    return { status: "error", message: "Bitte gib deinen Namen an." };
  }
  if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return { status: "error", message: "Bitte gib eine gültige E-Mail-Adresse an." };
  }
  if (!consentNoDiagnosis || !consentRecords) {
    return {
      status: "error",
      message: "Bitte bestätige die beiden Voraussetzungen, damit wir prüfen können, ob das Programm zu dir passt.",
    };
  }

  const id = recordApplication({
    name,
    age,
    email,
    phone,
    situation,
    consent_no_diagnosis: 1,
    consent_records: 1,
    user_agent: request.headers.get("user-agent"),
  });

  return { status: "success", id };
}

export default function Bewerbung() {
  const state = useActionData<typeof action>() ?? null;
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <PageShell current="/bewerbung">
      {(t) => (
        <>
          <PageHero
            path="/bewerbung"
            title={
              <>
                Bewerbung als <em className="italic text-accent">Tester:in</em>.
              </>
            }
            intro="Etwa eine halbe bis ganze Stunde Onboarding-Call. Du entscheidest danach, ob du teilnehmen willst — wir entscheiden, ob wir gut helfen können. Wenn es nicht passt, sagen wir das ehrlich."
          />
          <SectionBewerbung t={t} state={state} isSubmitting={isSubmitting} />
          <BackToHome />
        </>
      )}
    </PageShell>
  );
}
