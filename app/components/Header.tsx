import { useEffect, useState } from "react";
import { theme } from "./theme";

const NAV_ITEMS = [
  { label: "Was du bekommst", href: "/#saeulen" },
  { label: "Methode", href: "/methode" },
  { label: "Wer passt", href: "/wer-passt" },
  { label: "Transparenz", href: "/transparenz" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "FAQ", href: "/faq" },
];

export function Header({ current = "/" }: { current?: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-soft bg-paper/95 backdrop-blur supports-[backdrop-filter]:bg-paper/80">
      <div className="container-page flex h-[56px] items-center justify-between gap-6 sm:h-[64px] lg:h-[72px]">
        <a
          href="/"
          className="font-serif text-xl italic text-ink no-underline sm:text-[22px]"
          onClick={() => setOpen(false)}
        >
          {theme.brand}
        </a>

        <nav className="hidden items-center gap-5 text-sm text-slate lg:flex">
          {NAV_ITEMS.map((it) => {
            const active = current === it.href.split("#")[0];
            return (
              <a
                key={it.href}
                href={it.href}
                className={
                  "border-b pb-[2px] no-underline transition-colors " +
                  (active
                    ? "border-accent font-medium text-ink"
                    : "border-transparent hover:text-ink")
                }
              >
                {it.label}
              </a>
            );
          })}
          <a
            href="/bewerbung"
            className="rounded-full border border-ink px-[18px] py-[9px] font-medium text-ink no-underline transition-colors hover:bg-ink hover:text-paper"
          >
            Bewerben
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-md text-ink lg:hidden"
        >
          <span className="relative block h-4 w-6">
            <span
              className={
                "absolute left-0 right-0 h-px bg-ink transition-transform duration-200 " +
                (open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0")
              }
            />
            <span
              className={
                "absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-ink transition-opacity duration-150 " +
                (open ? "opacity-0" : "opacity-100")
              }
            />
            <span
              className={
                "absolute left-0 right-0 h-px bg-ink transition-transform duration-200 " +
                (open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0")
              }
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={
          "lg:hidden overflow-hidden border-t border-soft bg-paper transition-[max-height,opacity] duration-300 ease-out " +
          (open ? "max-h-[80vh] opacity-100" : "pointer-events-none max-h-0 opacity-0")
        }
      >
        <nav className="container-page flex flex-col py-3">
          {NAV_ITEMS.map((it) => {
            const active = current === it.href.split("#")[0];
            return (
              <a
                key={it.href}
                href={it.href}
                onClick={() => setOpen(false)}
                className={
                  "border-b border-soft py-3 text-base no-underline " +
                  (active ? "font-medium text-ink" : "text-slate")
                }
              >
                {it.label}
              </a>
            );
          })}
          <a
            href="/bewerbung"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex items-center justify-center rounded-full border border-ink px-6 py-3 text-base font-medium text-ink no-underline"
          >
            Bewerben
          </a>
        </nav>
      </div>
    </header>
  );
}
