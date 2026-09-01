import { Mail, Phone, MapPin, ArrowRight, Calendar } from "lucide-react";
import { useEffect, useState } from "react";
import { LIVERY_CONTAINER, SectionPlate } from "./livery";

const services = ["Lunsj", "Kantine", "Catering", "Frukt", "Inneklima", "Renhold"];

const contactItems = [
  { icon: Phone, label: "Telefon", value: "02346", href: "tel:02346" },
  {
    icon: Mail,
    label: "E-post",
    value: "bli@heltopplagt.no",
    href: "mailto:bli@heltopplagt.no",
  },
  { icon: MapPin, label: "Adresse", value: "Oslo, Norge", href: undefined },
];

interface ContactProps {
  initialServices?: string[];
}

const CHIP_ON =
  "border border-signal bg-signal px-3.5 py-2 font-archivo text-[12px] font-bold uppercase tracking-[0.1em] text-white";
const CHIP_OFF =
  "border border-ink/20 px-3.5 py-2 font-archivo text-[12px] font-bold uppercase tracking-[0.1em] text-ink/60 transition-colors hover:border-signal hover:text-signal";
const FIELD =
  "w-full border border-ink/20 bg-tint px-3.5 py-2.5 text-[15px] text-ink outline-none transition-colors placeholder:text-ink/35 focus:border-signal";

export function Contact({ initialServices }: ContactProps) {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<"form" | "booking">("form");

  useEffect(() => {
    if (initialServices) setSelectedServices(initialServices);
  }, [initialServices]);

  const toggleCheckbox = (value: string) => {
    setSelectedServices((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  return (
    <section id="kontakt" className="scroll-mt-20 bg-tint text-ink">
      <div className={`${LIVERY_CONTAINER} py-20 lg:py-28`}>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          {/* The order slip header */}
          <div>
            <SectionPlate
              title="Kontakt oss"
              proof="Uforpliktende — vi setter sammen ett tilbud på alt dere velger"
            />
            <p className="mt-6 max-w-[40ch] text-[15px] leading-relaxed text-ink/70 lg:text-[17px]">
              Vi er klare til å hjelpe deg med løsninger tilpasset dine behov. Ta
              kontakt i dag for en uforpliktende samtale.
            </p>

            <div className="mt-9 flex flex-col divide-y divide-ink/12 border-y border-ink/15">
              {contactItems.map((item) => {
                const Icon = item.icon;
                const body = (
                  <>
                    <Icon
                      className="h-5 w-5 flex-shrink-0 text-signal"
                      strokeWidth={2}
                    />
                    <span className="font-archivo text-[11px] font-bold uppercase tracking-[0.14em] text-ink/45">
                      {item.label}
                    </span>
                    <span className="ml-auto text-[15px] font-medium text-ink">
                      {item.value}
                    </span>
                  </>
                );
                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-3 py-4 transition-colors hover:text-signal"
                  >
                    {body}
                  </a>
                ) : (
                  <div key={item.label} className="flex items-center gap-3 py-4">
                    {body}
                  </div>
                );
              })}
            </div>
          </div>

          {/* The docket */}
          <div className="livery-notch bg-white p-7 text-ink sm:p-9 lg:p-10">
            <div className="mb-8 flex border border-ink/15">
              <button
                type="button"
                onClick={() => setActiveTab("form")}
                className={
                  "flex flex-1 items-center justify-center gap-2 py-3 font-archivo text-[12px] font-bold uppercase tracking-[0.12em] transition-colors " +
                  (activeTab === "form"
                    ? "bg-signal text-white"
                    : "text-ink/50 hover:text-signal")
                }
              >
                <Mail className="h-4 w-4" strokeWidth={2.25} />
                Kontaktskjema
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("booking")}
                className={
                  "flex flex-1 items-center justify-center gap-2 py-3 font-archivo text-[12px] font-bold uppercase tracking-[0.12em] transition-colors " +
                  (activeTab === "booking"
                    ? "bg-signal text-white"
                    : "text-ink/50 hover:text-signal")
                }
              >
                <Calendar className="h-4 w-4" strokeWidth={2.25} />
                Book et møte
              </button>
            </div>

            {activeTab === "form" ? (
              <form
                key="form"
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col gap-5 motion-safe:transition-opacity motion-safe:duration-200 starting:opacity-0"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1.5 block font-archivo text-[11px] font-bold uppercase tracking-[0.12em] text-ink/60">
                      Navn
                    </span>
                    <input
                      type="text"
                      name="name"
                      className={FIELD}
                      placeholder="Ditt navn"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block font-archivo text-[11px] font-bold uppercase tracking-[0.12em] text-ink/60">
                      Firmanavn
                    </span>
                    <input
                      type="text"
                      name="company"
                      className={FIELD}
                      placeholder="Ditt firmanavn"
                    />
                  </label>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1.5 block font-archivo text-[11px] font-bold uppercase tracking-[0.12em] text-ink/60">
                      E-post
                    </span>
                    <input
                      type="email"
                      name="email"
                      className={`${FIELD} validator`}
                      placeholder="din@epost.no"
                    />
                    <p className="validator-hint hidden">
                      Skriv inn en gyldig e-postadresse
                    </p>
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block font-archivo text-[11px] font-bold uppercase tracking-[0.12em] text-ink/60">
                      Telefon
                    </span>
                    <input
                      type="tel"
                      name="phone"
                      className={`${FIELD} validator tabular-nums`}
                      placeholder="+47 123 45 678"
                      pattern="[0-9 +]*"
                      minLength={8}
                      title="Telefonnummer med minst 8 siffer"
                    />
                    <p className="validator-hint hidden">
                      Skriv inn et gyldig telefonnummer
                    </p>
                  </label>
                </div>

                <div>
                  <span className="mb-2.5 block font-archivo text-[11px] font-bold uppercase tracking-[0.12em] text-ink/60">
                    Jeg er interessert i
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {services.map((service) => {
                      const on = selectedServices.includes(service);
                      return (
                        <button
                          key={service}
                          type="button"
                          onClick={() => toggleCheckbox(service)}
                          aria-pressed={on}
                          className={on ? CHIP_ON : CHIP_OFF}
                        >
                          {service}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <label className="block">
                  <span className="mb-1.5 block font-archivo text-[11px] font-bold uppercase tracking-[0.12em] text-ink/60">
                    Melding
                  </span>
                  <textarea
                    name="message"
                    rows={4}
                    className={`${FIELD} resize-none`}
                    placeholder="Beskriv dine behov..."
                  />
                </label>

                <button
                  type="submit"
                  className="livery-notch mt-1 inline-flex items-center justify-center gap-2 bg-deck px-8 py-3.5 font-archivo text-[13px] font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-signal"
                >
                  Send melding
                  <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                </button>
              </form>
            ) : (
              <div
                key="booking"
                className="flex flex-col items-center py-6 text-center motion-safe:transition-opacity motion-safe:duration-200 starting:opacity-0"
              >
                <div className="livery-notch flex h-14 w-14 items-center justify-center bg-signal/10">
                  <Calendar className="h-7 w-7 text-signal" strokeWidth={1.75} />
                </div>
                <h3 className="mt-6 font-archivo text-[22px] font-black uppercase tracking-[-0.01em] text-ink">
                  Book et møte med oss
                </h3>
                <p className="mt-3 max-w-md text-[15px] leading-relaxed text-ink/65">
                  Velg et tidspunkt som passer for deg, så tar vi en uforpliktende
                  samtale om løsninger tilpasset dine behov.
                </p>
                <a
                  href="https://outlook.office.com/book/Bookmtemedmeg@heltopplagt.no/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="livery-notch mt-8 inline-flex items-center justify-center gap-2 bg-deck px-8 py-3.5 font-archivo text-[13px] font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-signal"
                >
                  Velg tidspunkt
                  <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
