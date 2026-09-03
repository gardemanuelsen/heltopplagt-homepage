import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Calendar,
  ChevronDown,
  Clock,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { CONTAINER, Kicker } from "./site";

const services = ["Lunsj", "Kantine", "Catering", "Frukt", "Inneklima", "Renhold"];

/* Real contact details from heltopplagt.no/kontakt. */
const contactItems = [
  {
    icon: Phone,
    label: "Telefon",
    value: "02346 (fra utlandet: +47 22 76 37 60)",
    href: "tel:02346",
  },
  {
    icon: Mail,
    label: "E-post",
    value: "bli@heltopplagt.no",
    href: "mailto:bli@heltopplagt.no",
  },
  {
    icon: MapPin,
    label: "Adresse",
    value: "Slimeveien 2b, 1275 Oslo",
    href: "https://maps.app.goo.gl/QtSdi3VgGdhP9QE86",
  },
  {
    icon: Clock,
    label: "Åpningstider",
    value: "08.00–16.00, mandag–fredag",
    href: undefined,
  },
];

interface ContactProps {
  initialServices?: string[];
}

const CHIP_ON =
  "rounded-full border border-brand bg-brand px-4 py-2 text-[13px] font-semibold text-white transition-colors";
const CHIP_OFF =
  "rounded-full border border-navy/20 px-4 py-2 text-[13px] font-semibold text-navy/60 transition-colors hover:border-brand hover:text-brand";
const FIELD =
  "w-full rounded-xl border border-navy/15 bg-cloud/50 px-4 py-2.5 text-[15px] text-navy outline-none transition-colors placeholder:text-navy/35 focus:border-brand focus:bg-white";
const LABEL = "mb-1.5 block text-[13px] font-medium text-navy/70";

export function Contact({ initialServices }: ContactProps) {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<"form" | "booking">("form");
  const servicesRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    if (initialServices) setSelectedServices(initialServices);
  }, [initialServices]);

  /* Close the mobile service dropdown on outside clicks (details doesn't). */
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = servicesRef.current;
      if (el?.open && !el.contains(e.target as Node)) el.removeAttribute("open");
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const toggleCheckbox = (value: string) => {
    setSelectedServices((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  return (
    <section id="kontakt" className="scroll-mt-20 bg-white">
      <div className={`${CONTAINER} py-20 lg:py-28`}>
        <div className="relative isolate grid gap-12 overflow-hidden rounded-[2rem] bg-navy p-7 sm:p-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16 lg:p-14">
          {/* Puzzle motif — outline variant on the panel's bottom-left edge,
              in the open navy below the contact rows, clear of the form.
              lg+ only: on the stacked mobile layout the form card sits there. */}
          <span
            aria-hidden="true"
            className="livery-puzzle-outline aspect-[100/129] -bottom-12 hidden w-52 -rotate-[14deg] bg-aqua/30 lg:-left-6 lg:block"
          />
          <div className="relative z-10">
            <Kicker onDark>Kontakt oss</Kicker>
            <h2 className="mt-4 font-lato text-[30px] font-light leading-[1.12] tracking-[-0.01em] text-white sm:text-[38px] lg:text-[44px]">
              Klar for en litt bedre arbeidsdag?
            </h2>
            <p className="mt-5 max-w-[40ch] text-[15px] leading-relaxed text-white/70 lg:text-[16px]">
              Ta kontakt for en uforpliktende samtale — vi setter sammen ett
              tilbud på alt dere velger.
            </p>

            <div className="mt-10 flex flex-col gap-6">
              {contactItems.map((item) => {
                const Icon = item.icon;
                const body = (
                  <>
                    <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-white/10">
                      <Icon className="h-5 w-5 text-aqua" strokeWidth={2} />
                    </span>
                    <span>
                      <span className="block text-[12px] font-semibold uppercase tracking-[0.1em] text-white/45">
                        {item.label}
                      </span>
                      <span className="mt-0.5 block text-[16px] font-semibold text-white">
                        {item.value}
                      </span>
                    </span>
                  </>
                );
                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    {...(item.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="flex items-center gap-4 transition-opacity hover:opacity-80"
                  >
                    {body}
                  </a>
                ) : (
                  <div key={item.label} className="flex items-center gap-4">
                    {body}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Form card */}
          <div className="relative z-10 rounded-[1.5rem] bg-white p-6 sm:p-8 lg:p-10">
            <div
              role="tablist"
              className="mb-8 flex rounded-full bg-navy/5 p-1"
            >
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === "form"}
                onClick={() => setActiveTab("form")}
                className={
                  "flex flex-1 items-center justify-center gap-2 rounded-full py-2.5 text-[13px] font-semibold transition-colors " +
                  (activeTab === "form"
                    ? "bg-white text-navy shadow-sm"
                    : "text-navy/50 hover:text-navy")
                }
              >
                {/* Icon hidden on mobile — the tabs are too tight for both. */}
                <Mail className="hidden h-4 w-4 sm:block" strokeWidth={2.25} />
                Kontaktskjema
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === "booking"}
                onClick={() => setActiveTab("booking")}
                className={
                  "flex flex-1 items-center justify-center gap-2 rounded-full py-2.5 text-[13px] font-semibold transition-colors " +
                  (activeTab === "booking"
                    ? "bg-white text-navy shadow-sm"
                    : "text-navy/50 hover:text-navy")
                }
              >
                <Calendar className="hidden h-4 w-4 sm:block" strokeWidth={2.25} />
                Book et møte
              </button>
            </div>

            {activeTab === "form" ? (
              /* Short fields pair up two-across even on mobile, so the form
                 stays compact instead of stacking every field full-width. */
              <form
                key="form"
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col gap-4 motion-safe:transition-opacity motion-safe:duration-200 starting:opacity-0"
              >
                <div className="grid grid-cols-2 gap-4">
                  <label className="block">
                    <span className={LABEL}>Navn</span>
                    <input
                      type="text"
                      name="name"
                      className={FIELD}
                      placeholder="Ditt navn"
                    />
                  </label>
                  <label className="block">
                    <span className={LABEL}>Firmanavn</span>
                    <input
                      type="text"
                      name="company"
                      className={FIELD}
                      placeholder="Ditt firmanavn"
                    />
                  </label>
                </div>

                <label className="block">
                  <span className={LABEL}>E-post</span>
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

                <div className="grid grid-cols-2 gap-4">
                  <label className="block">
                    <span className={LABEL}>Telefon</span>
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
                  <label className="block">
                    <span className={LABEL}>Antall ansatte</span>
                    <input
                      type="number"
                      name="employees"
                      inputMode="numeric"
                      min={1}
                      className={`${FIELD} tabular-nums`}
                      placeholder="F.eks. 25"
                    />
                  </label>
                </div>

                <div>
                  <span className="mb-2.5 block text-[13px] font-medium text-navy/70">
                    Jeg er interessert i
                  </span>

                  {/* Mobile: the six pill toggles took three rows, so they
                      collapse into one input-styled multi-select dropdown. */}
                  <details ref={servicesRef} className="dropdown w-full sm:hidden">
                    <summary
                      className={`${FIELD} flex cursor-pointer list-none items-center justify-between gap-2 [&::-webkit-details-marker]:hidden`}
                    >
                      <span
                        className={
                          "truncate " +
                          (selectedServices.length > 0
                            ? "text-navy"
                            : "text-navy/35")
                        }
                      >
                        {selectedServices.length > 0
                          ? selectedServices.join(", ")
                          : "Velg tjenester"}
                      </span>
                      <ChevronDown
                        className="h-4 w-4 flex-shrink-0 text-navy/50"
                        strokeWidth={2.25}
                      />
                    </summary>
                    <div className="dropdown-content z-20 mt-2 w-full rounded-xl border border-navy/10 bg-white p-2 shadow-[0_16px_36px_-12px_rgba(13,43,64,0.25)]">
                      {services.map((service) => (
                        <label
                          key={service}
                          className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-[14px] font-medium text-navy hover:bg-cloud"
                        >
                          <input
                            type="checkbox"
                            checked={selectedServices.includes(service)}
                            onChange={() => toggleCheckbox(service)}
                            className="h-4 w-4"
                          />
                          {service}
                        </label>
                      ))}
                    </div>
                  </details>

                  {/* Desktop keeps the pill toggles. */}
                  <div className="hidden flex-wrap gap-2 sm:flex">
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
                  <span className={LABEL}>Melding</span>
                  <textarea
                    name="message"
                    rows={3}
                    className={`${FIELD} resize-none`}
                    placeholder="Beskriv dine behov..."
                  />
                </label>

                <button
                  type="submit"
                  className="mt-1 inline-flex items-center justify-center gap-2 self-start rounded-full bg-brand px-7 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-brand-deep"
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
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand/10">
                  <Calendar className="h-7 w-7 text-brand" strokeWidth={1.75} />
                </div>
                <h3 className="mt-6 font-lato text-[24px] font-bold text-navy">
                  Book et møte med oss
                </h3>
                <p className="mt-3 max-w-md text-[15px] leading-relaxed text-navy/60">
                  Velg et tidspunkt som passer for deg, så tar vi en
                  uforpliktende samtale om løsninger tilpasset dine behov.
                </p>
                <a
                  href="https://outlook.office.com/book/Bookmtemedmeg@heltopplagt.no/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-brand-deep"
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
