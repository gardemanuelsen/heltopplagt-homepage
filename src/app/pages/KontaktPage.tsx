import { CONTAINER, Kicker } from "../components/site";
import { Contact } from "../components/Contact";
import { useDocumentMeta } from "../../lib/use-document-meta";

export function KontaktPage() {
  useDocumentMeta(
    "Kontakt",
    "Be om en uforpliktende prat — vi kontakter deg! Ring 02346 eller send oss en melding."
  );

  return (
    <div className="min-h-dvh bg-white">
      <section className="relative isolate overflow-hidden bg-cloud text-navy">
        <span
          aria-hidden="true"
          className="livery-puzzle aspect-[100/129] -right-20 -bottom-12 w-44 rotate-[12deg] bg-brand/10 lg:-right-10 lg:w-64"
        />
        <div className={`${CONTAINER} relative z-10 py-14 lg:py-20`}>
          <Kicker>Kontakt</Kicker>
          <h1 className="mt-4 font-lato text-[34px] font-light leading-[1.08] tracking-[-0.01em] text-navy sm:text-[42px] lg:text-[48px]">
            Be om en uforpliktende prat
          </h1>
          <p className="mt-5 max-w-[42rem] text-[15px] leading-relaxed text-navy/65 lg:text-[17px]">
            Fortell oss hvordan dere har det på jobben, så kontakter vi deg med
            et forslag som passer. Du når oss på telefon 02346, hverdager
            08–16.
          </p>
        </div>
      </section>

      <Contact />
    </div>
  );
}
