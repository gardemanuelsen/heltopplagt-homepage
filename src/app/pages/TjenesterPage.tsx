import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import { CtaSection } from "../components/CtaSection";
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

export function TjenesterPage() {
  useDocumentMeta(
    "Våre tjenester",
    "Frukt, lunsj, kantine, catering, inneklima og renhold, samlet hos én leverandør for bedrifter i Oslo-området."
  );

  return (
    <div className="min-h-dvh bg-white">
      {/* Page heading */}
      <div className="max-w-[1280px] mx-auto px-8 pt-32 lg:pt-36">
        <h1 className="text-3xl lg:text-[40px] font-bold text-gray-900 leading-[1.15] tracking-tight mb-4">
          Alle tjenester
        </h1>

        <p className="text-base lg:text-[17px] text-gray-600 leading-relaxed max-w-[680px]">
          Alt din bedrift trenger, under ett tak. Velg en tjeneste for å lese
          mer om hva vi kan tilby din arbeidsplass.
        </p>
      </div>

      {/* Service cards */}
      <section className="py-14 bg-white">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <Link
                key={s.data.path}
                to={s.data.path}
                className="group flex flex-col rounded-2xl border border-gray-200 overflow-hidden hover:border-[#0078C4]/40 hover:shadow-[0_16px_40px_rgba(0,120,196,0.10)] transition-all duration-300"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={s.data.image}
                    alt={s.label}
                    className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col flex-1 p-6">
                  <h2 className="text-lg font-bold text-gray-900 tracking-tight mb-2">
                    {s.label}
                  </h2>
                  <p className="text-[15px] text-gray-600 leading-relaxed mb-5">
                    {s.description}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-[#0078C4]">
                    Les mer
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
