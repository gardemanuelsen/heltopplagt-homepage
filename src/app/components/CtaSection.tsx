import { useState } from "react";
import { ArrowRight, CheckCircle2, Circle } from "lucide-react";
import { companySizes, servicePriceHints } from "../../lib/offer-data";
import fruktIcon from "../../images/icons/fruktkurv (1).png";
import lunsjIcon from "../../images/icons/lunsj (1).png";
import kantineIcon from "../../images/icons/jobbsmoothie (1).png";
import cateringIcon from "../../images/icons/catering (1).png";
import inneklimaIcon from "../../images/icons/inneklima (1).png";
import renholdIcon from "../../images/icons/renhold (1).png";

interface ServiceOption {
  name: string;
  blurb: string;
  icon: string;
}

const serviceOptions: ServiceOption[] = [
  { name: "Frukt", blurb: "Fersk kurv, daglig eller etter behov. Den enkleste starten.", icon: fruktIcon },
  { name: "Lunsj", blurb: "Velsmakende ordninger for fem personer og oppover.", icon: lunsjIcon },
  { name: "Kantine", blurb: "Full lunsjopplevelse — også uten eget kjøkken.", icon: kantineIcon },
  { name: "Catering", blurb: "Møtemat, varmmat og event fra eget kjøkken.", icon: cateringIcon },
  { name: "Inneklima", blurb: "Ren luft og rett temperatur, uten byggtekniske endringer.", icon: inneklimaIcon },
  { name: "Renhold", blurb: "Rene lokaler gir bedre trivsel og lavere sykefravær.", icon: renholdIcon },
];

interface CtaSectionProps {
  onRequestQuote?: (services: string[], companySize: string | null) => void;
}

export function CtaSection({ onRequestQuote }: CtaSectionProps) {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [companySize, setCompanySize] = useState<string | null>(null);

  const toggleService = (name: string) => {
    setSelectedServices((prev) =>
      prev.includes(name) ? prev.filter((s) => s !== name) : [...prev, name]
    );
  };

  const size = companySizes.find((s) => s.value === companySize) ?? null;

  return (
    <section className="py-24 bg-base-200">
      <div className="max-w-[1440px] 2xl:max-w-[1560px] 3xl:max-w-[1680px] 4xl:max-w-[1800px] 5xl:max-w-[1920px] mx-auto px-8 2xl:px-12 3xl:px-16 4xl:px-20 5xl:px-24">
        <div className="bg-base-100 border border-base-300 rounded-2xl overflow-hidden">
          <div className="grid lg:grid-cols-[1.5fr_1fr]">
          {/* Left: service picker */}
          <div className="p-6 lg:p-10">
            <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-primary mb-2.5">
              Bygg arbeidsplassen din
            </p>
            <h2 className="text-3xl lg:text-[40px] font-bold text-base-content tracking-tight leading-[1.15] mb-4">
              Velg det dere trenger.
              <br />
              Vi setter sammen ett tilbud.
            </h2>
            <p className="text-base text-base-content/65 leading-relaxed mb-8 max-w-[520px]">
              Kryss av for tjenestene som passer bedriften. Det meste starter i
              det små, og vokser når dere er klare.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {serviceOptions.map((service) => {
                const selected = selectedServices.includes(service.name);
                return (
                  <button
                    key={service.name}
                    type="button"
                    onClick={() => toggleService(service.name)}
                    aria-pressed={selected}
                    className={
                      selected
                        ? "text-left flex items-start gap-3.5 rounded-xl border-2 border-primary bg-base-100 p-5 transition-colors"
                        : "text-left flex items-start gap-3.5 rounded-xl border-2 border-transparent bg-base-200 p-5 hover:border-primary/40 transition-colors"
                    }
                  >
                    <span
                      aria-hidden="true"
                      className="inline-block w-8 h-8 bg-primary flex-shrink-0 mt-0.5"
                      style={{
                        maskImage: `url("${service.icon}")`,
                        maskSize: "contain",
                        maskRepeat: "no-repeat",
                        maskPosition: "center",
                        WebkitMaskImage: `url("${service.icon}")`,
                        WebkitMaskSize: "contain",
                        WebkitMaskRepeat: "no-repeat",
                        WebkitMaskPosition: "center",
                      }}
                    />
                    <span className="flex-1">
                      <span className="block font-jakarta text-[15px] font-semibold text-base-content mb-0.5">
                        {service.name}
                      </span>
                      <span className="block text-[13px] text-base-content/60 leading-relaxed">
                        {service.blurb}
                      </span>
                    </span>
                    {selected ? (
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    ) : (
                      <Circle className="w-5 h-5 text-base-300 flex-shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: selection summary */}
          <div className="p-6 lg:p-10 bg-base-200/60 border-t lg:border-t-0 lg:border-l border-base-300">
            <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-primary mb-2">
              Ditt utvalg
            </p>

            {selectedServices.length === 0 ? (
              <p className="text-sm text-base-content/60 leading-relaxed mb-6">
                Velg en eller flere tjenester til venstre for å se et forslag.
              </p>
            ) : (
              <>
                <p className="text-3xl font-bold text-base-content tracking-tight mb-1">
                  {selectedServices.length}{" "}
                  <span className="text-base font-medium text-base-content/50">
                    {selectedServices.length === 1 ? "tjeneste" : "tjenester"}
                  </span>
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedServices.map((name) => (
                    <span
                      key={name}
                      className="badge badge-sm h-auto px-3 py-1.5 bg-primary/10 text-primary border-none text-[12px] font-medium"
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </>
            )}

            <div className="border-t border-base-300 pt-6 mb-6">
              <p className="text-[13px] font-medium text-base-content/80 mb-2.5">
                Antall ansatte
              </p>
              <div className="flex flex-wrap gap-2">
                {companySizes.map((cs) => (
                  <button
                    key={cs.value}
                    type="button"
                    onClick={() => setCompanySize(cs.value)}
                    aria-pressed={companySize === cs.value}
                    className={
                      companySize === cs.value
                        ? "btn btn-xs h-auto px-3 py-1.5 btn-primary rounded-full text-[12px] font-medium"
                        : "btn btn-xs h-auto px-3 py-1.5 rounded-full text-[12px] font-medium bg-base-100 border-none text-base-content/70 hover:bg-base-300"
                    }
                  >
                    {cs.label}
                  </button>
                ))}
              </div>
            </div>

            {selectedServices.length > 0 && size && (
              <div className="border-t border-base-300 pt-6 mb-6">
                <p className="text-[13px] font-medium text-base-content/80 mb-3">
                  Omtrentlig prisantydning
                </p>
                <ul className="flex flex-col gap-2">
                  {selectedServices.map((name) => {
                    const hint = servicePriceHints[name];
                    if (!hint) return null;
                    const low = size.min * hint.rate;
                    const high = size.max * hint.rate;
                    return (
                      <li key={name} className="flex items-baseline justify-between gap-3 text-sm">
                        <span className="text-base-content/70">{name}</span>
                        <span className="font-semibold text-base-content tabular-nums">
                          {low === high ? low : `${low}–${high}`} {hint.unit}
                        </span>
                      </li>
                    );
                  })}
                </ul>
                <p className="text-[11px] text-base-content/40 mt-3">
                  Veiledende, basert på antall ansatte. Endelig pris avtales i tilbudet.
                </p>
              </div>
            )}

            <a
              href="#kontakt"
              onClick={() => onRequestQuote?.(selectedServices, companySize)}
              aria-disabled={selectedServices.length === 0}
              className={
                selectedServices.length === 0
                  ? "btn btn-primary w-full h-auto px-8 py-3.5 text-[15px] pointer-events-none opacity-40"
                  : "btn btn-primary w-full h-auto px-8 py-3.5 text-[15px]"
              }
            >
              {selectedServices.length === 0
                ? "Velg tjenester for å få tilbud"
                : `Få tilbud på ${
                    selectedServices.length === 1
                      ? "denne tjenesten"
                      : `disse ${selectedServices.length} tjenestene`
                  }`}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
