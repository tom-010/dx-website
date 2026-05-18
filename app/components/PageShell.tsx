import type { Theme } from "./theme";
import { theme } from "./theme";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function PageShell({
  current,
  children,
}: {
  current: string;
  children: (t: Theme) => React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink">
      <Header current={current} />
      <main className="flex-1">{children(theme)}</main>
      <Footer />
    </div>
  );
}

export function PageHero({
  path,
  title,
  intro,
}: {
  path: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
}) {
  return (
    <section className="bg-paper">
      <div className="container-page pb-8 pt-10 sm:pt-12 lg:pb-10 lg:pt-16">
        <div className="kicker mb-4 sm:mb-5">Unterseite · {path}</div>
        <h1 className="h-display m-0 max-w-[18ch] text-[2.5rem] leading-[1.05] text-ink sm:text-[3.5rem] md:text-[4.5rem] lg:max-w-[20ch] lg:text-[5.25rem]">
          {title}
        </h1>
        {intro && (
          <p className="mt-5 max-w-[60ch] font-serif text-lg leading-[1.5] text-slate sm:text-xl lg:mt-6 lg:text-[22px]">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}

export function BackToHome() {
  return (
    <section className="border-t border-soft bg-paper">
      <div className="container-page flex flex-col items-start justify-between gap-5 py-10 sm:flex-row sm:items-center sm:gap-6 lg:py-14">
        <a
          href="/"
          className="border-b border-ink pb-[2px] font-serif text-base text-ink no-underline sm:text-[17px]"
        >
          ← Zurück zur Startseite
        </a>
        <a
          href="/bewerbung"
          className="inline-flex items-center bg-ink px-6 py-3 text-sm font-medium text-paper no-underline sm:text-[14px]"
        >
          Zur Bewerbung →
        </a>
      </div>
    </section>
  );
}
