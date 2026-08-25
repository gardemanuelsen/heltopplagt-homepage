import { ArrowRight, ArrowLeft, RotateCcw } from "lucide-react";
import { useState } from "react";

const services = [
  { name: "Lunsj", blurb: "en fast lunsjordning som sparer dere tid hver dag" },
  { name: "Kantine", blurb: "full drift av kantinen, fra frokost til varmmat" },
  { name: "Catering", blurb: "catering til møter, kurs og arrangementer" },
  { name: "Frukt", blurb: "daglig fruktlevering tilpasset antall ansatte" },
  { name: "Inneklima", blurb: "bedre luft og temperatur uten byggtekniske endringer" },
  { name: "Renhold", blurb: "renhold som holder arbeidsmiljøet i orden" },
];

const companySizes = [
  { value: "1-9", label: "1–9 ansatte" },
  { value: "10-49", label: "10–49 ansatte" },
  { value: "50-199", label: "50–199 ansatte" },
  { value: "200+", label: "200+ ansatte" },
];

const sizeFraming: Record<string, string> = {
  "1-9": "skreddersydd i mindre skala, uten unødvendige bindinger",
  "10-49": "en fleksibel ordning som vokser i takt med bedriften",
  "50-199": "full drift med en dedikert kundeansvarlig",
  "200+": "et komplett tilbud med fullservice drift på tvers av lokasjoner",
};

export function CtaSection() {
  const [step, setStep] = useState(0);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [companySize, setCompanySize] = useState<string | null>(null);

  const toggleService = (name: string) => {
    setSelectedServices((prev) =>
      prev.includes(name) ? prev.filter((s) => s !== name) : [...prev, name]
    );
  };

  const reset = () => {
    setStep(0);
    setSelectedServices([]);
    setCompanySize(null);
  };

  const chosenBlurbs = services.filter((s) => selectedServices.includes(s.name));

  return (
    <section className="py-24 bg-base-200 border-t border-base-300">
      <div className="max-w-[760px] mx-auto px-8">
        <div className="text-center mb-10">
          <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-primary mb-2.5">
            2 minutter, ingen forpliktelser
          </p>
          <h2 className="text-3xl lg:text-[40px] font-bold text-base-content tracking-tight leading-[1.15]">
            Hva trenger akkurat din bedrift?
          </h2>
        </div>

        <div className="card bg-base-100 border border-base-300 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
          <div className="card-body p-8 lg:p-10">
            <ul className="steps steps-horizontal w-full mb-10">
              <li className={step >= 0 ? "step step-primary" : "step"}>Tjenester</li>
              <li className={step >= 1 ? "step step-primary" : "step"}>Størrelse</li>
              <li className={step >= 2 ? "step step-primary" : "step"}>Anbefaling</li>
            </ul>

            {step === 0 && (
              <div>
                <p className="text-base font-semibold text-base-content mb-1">
                  Hvilke tjenester er dere interessert i?
                </p>
                <p className="text-sm text-base-content/60 mb-6">Velg en eller flere.</p>
                <div className="flex flex-wrap gap-2 mb-10">
                  {services.map((s) => {
                    const selected = selectedServices.includes(s.name);
                    return (
                      <button
                        key={s.name}
                        type="button"
                        onClick={() => toggleService(s.name)}
                        aria-pressed={selected}
                        className={
                          selected
                            ? "btn btn-sm btn-primary rounded-full h-auto px-4 py-2 text-[13px] font-medium"
                            : "btn btn-sm rounded-full h-auto px-4 py-2 text-[13px] font-medium bg-base-100 text-base-content/70 border-base-300 hover:border-primary hover:text-primary"
                        }
                      >
                        {s.name}
                      </button>
                    );
                  })}
                </div>
                <button
                  type="button"
                  disabled={selectedServices.length === 0}
                  onClick={() => setStep(1)}
                  className="btn btn-primary w-full h-auto px-8 py-3.5 text-[15px] disabled:opacity-40"
                >
                  Neste
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {step === 1 && (
              <div>
                <p className="text-base font-semibold text-base-content mb-1">
                  Hvor mange ansatte har dere?
                </p>
                <p className="text-sm text-base-content/60 mb-6">
                  Dette hjelper oss å anbefale riktig omfang.
                </p>
                <div className="join join-vertical sm:join-horizontal w-full mb-10">
                  {companySizes.map((size) => (
                    <input
                      key={size.value}
                      type="radio"
                      name="company-size"
                      aria-label={size.label}
                      className="join-item btn flex-1"
                      checked={companySize === size.value}
                      onChange={() => setCompanySize(size.value)}
                    />
                  ))}
                </div>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(0)}
                    className="btn btn-ghost h-auto px-6 py-3.5 text-[15px]"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Tilbake
                  </button>
                  <button
                    type="button"
                    disabled={!companySize}
                    onClick={() => setStep(2)}
                    className="btn btn-primary flex-1 h-auto px-8 py-3.5 text-[15px] disabled:opacity-40"
                  >
                    Se anbefaling
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {step === 2 && companySize && (
              <div>
                <p className="text-base font-semibold text-base-content mb-1">
                  Vårt forslag til dere
                </p>
                <p className="text-sm text-base-content/60 mb-6">
                  Basert på {selectedServices.length}{" "}
                  {selectedServices.length === 1 ? "tjeneste" : "tjenester"} og{" "}
                  {companySizes.find((s) => s.value === companySize)?.label.toLowerCase()}.
                </p>

                <div className="bg-base-200 rounded-xl p-6 mb-6">
                  <p className="text-sm text-base-content/80 leading-relaxed mb-4">
                    For en bedrift på denne størrelsen anbefaler vi{" "}
                    {sizeFraming[companySize]}. Konkret betyr det:
                  </p>
                  <ul className="flex flex-col gap-2.5">
                    {chosenBlurbs.map((s) => (
                      <li key={s.name} className="flex items-start gap-2.5 text-sm text-base-content/80">
                        <span className="badge badge-sm badge-primary badge-soft mt-0.5 flex-shrink-0">
                          {s.name}
                        </span>
                        <span>{s.blurb}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-sm text-base-content/60 mb-6">
                  Send oss forespørselen, så tar vi kontakt med et konkret tilbud tilpasset
                  akkurat det dere valgte over.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="#kontakt"
                    className="btn btn-primary flex-1 h-auto px-8 py-3.5 text-[15px]"
                  >
                    Kontakt oss om dette
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <button
                    type="button"
                    onClick={reset}
                    className="btn btn-ghost h-auto px-6 py-3.5 text-[15px]"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Start på nytt
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
