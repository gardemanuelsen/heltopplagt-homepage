import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { CONTAINER, Kicker } from "../components/site";
import { fruktData } from "./tjenester/Frukt";
import { cateringData } from "./tjenester/Catering";
import { kantineData } from "./tjenester/Kantine";
import { lunsjData } from "./tjenester/Lunsj";
import { inneklimaData } from "./tjenester/Inneklima";
import { renholdData } from "./tjenester/Renhold";
import { useDocumentMeta } from "../../lib/use-document-meta";

const services = [
  {
    label: "Frukt",
    data: fruktData,
    description:
      "Du bestemmer størrelse og innhold. Vi leverer daglig eller etter behov.",
  },
  {
    label: "Lunsj",
    data: lunsjData,
    description:
      "Lønnsomme og velsmakende lunsjordninger for 5 personer og oppover.",
  },
  {
    label: "Kantine",
    data: kantineData,
    description:
      "Et fullservicetilbud som passer alle typer kjøkken der vi tar oss av hele lunsjavviklingen.",
  },
  {
    label: "Catering",
    data: cateringData,
    description:
      "Vi tilbereder alt i vårt eget kjøkken. Fra varmmat, salater og påsmurt til spennende møte- og kursmat.",
  },
  {
    label: "Inneklima",
    data: inneklimaData,
    description:
      "Vi leverer ren luft og rett temperatur, helt uten byggtekniske endringer.",
  },
  {
    label: "Renhold",
    data: renholdData,
    description:
      "Godt renhold gir bedre trivsel og sørger for et bedre arbeidsmiljø.",
  },
];

/**
 * The services index, in the same Opplagt grammar as the service pages:
 * cloud hero with one puzzle motif, then the standard service-card grid.
 * Deliberately no closing CTA section (user's call) — the global footer
 * carries the contact actions.
 */
export function TjenesterPage() {
  useDocumentMeta(
    "Våre tjenester",
    "Frukt, lunsj, kantine, catering, inneklima og renhold, samlet hos én leverandør for bedrifter i Oslo-området."
  );

  return (
    <div className="min-h-dvh bg-white">
      <section className="relative isolate overflow-hidden bg-cloud text-navy">
        <span
          aria-hidden="true"
          className="livery-puzzle aspect-[100/129] -right-20 -bottom-12 w-44 rotate-[12deg] bg-brand/10 lg:-right-10 lg:w-64"
        />
        <div className={`${CONTAINER} relative z-10 py-14 lg:py-20`}>
          <Kicker>Våre tjenester</Kicker>
          <h1 className="mt-4 font-lato text-[34px] font-light leading-[1.08] tracking-[-0.01em] text-navy sm:text-[42px] lg:text-[48px]">
            Alle tjenester
          </h1>
          <p className="mt-5 max-w-[42rem] text-[15px] leading-relaxed text-navy/65 lg:text-[17px]">
            Alt din bedrift trenger, under ett tak. Velg en tjeneste for å lese
            mer om hva vi kan tilby din arbeidsplass.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className={CONTAINER}>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            {services.map((s) => (
              <Link
                key={s.data.path}
                to={s.data.path}
                className="group flex flex-col overflow-hidden rounded-[1.5rem] bg-white shadow-[0_1px_2px_rgba(13,43,64,0.06)] ring-1 ring-navy/5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-12px_rgba(13,43,64,0.18)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={s.data.image}
                    alt={s.label}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h2 className="font-lato text-[21px] font-bold text-navy sm:text-[23px]">
                    {s.label}
                  </h2>
                  <p className="mt-2.5 flex-1 text-[15px] leading-relaxed text-navy/60">
                    {s.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold text-brand">
                    Les mer
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      strokeWidth={2.5}
                    />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
