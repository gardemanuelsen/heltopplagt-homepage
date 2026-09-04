import { Calendar, Check, Clock, Mail, MapPin, Phone } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useReveal } from "../../lib/motion/useReveal";
import { useSplitReveal } from "../../lib/motion/useSplitReveal";
import { Button, Label, WRAP } from "./poster";

const services = ["Lunsj", "Kantine", "Catering", "Frukt", "Inneklima", "Renhold"];

/* Real contact details from heltopplagt.no/kontakt. */
const contactItems = [
  {
    icon: Phone,
    label: "Telefon",
    value: "02346",
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
    value: "08.00–16.00",
    href: undefined,
  },
];

interface ContactProps {
  initialServices?: string[];
}

/* Underlined fields on the light panel: no boxes, one hairline that turns brand on focus. */
const FIELD =
  "peer block w-full border-0 border-b border-navy/25 bg-transparent px-0 py-2.5 text-[16px] text-navy outline-none transition-colors placeholder:text-navy/35 focus:border-brand user-invalid:border-amber";
const LABEL = "block text-[13px] font-medium text-navy/60";
const TAB =
  "relative -mb-px flex items-center gap-2 border-b-2 pb-3 text-[14px] font-semibold transition-colors sm:text-[15px]";
const HINT = "mt-1.5 hidden text-[13px] text-navy/70 peer-user-invalid:block";
const CHIP_ON =
  "inline-flex h-10 items-center justify-center gap-1.5 rounded-btn border border-navy bg-navy px-2 text-[13px] font-semibold text-white transition-colors sm:h-11 sm:gap-2 sm:px-4 sm:text-[14px]";
const CHIP_OFF =
  "inline-flex h-10 items-center justify-center gap-1.5 rounded-btn border border-navy/20 bg-white px-2 text-[13px] font-semibold text-navy transition-colors hover:border-navy sm:h-11 sm:gap-2 sm:px-4 sm:text-[14px]";

/**
 * Contact on white: details and the booking card on the left, the form on a
 * light panel with underlined fields on the right. Also rendered by /kontakt,
 * which may preselect services. The form has no backend yet — submit is a
 * no-op on purpose.
 */
export function Contact({ initialServices }: ContactProps) {
  const ref = useRef<HTMLElement>(null);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<"form" | "booking">("form");

  useSplitReveal(ref);
  useReveal(ref, { stagger: 0.08 });

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
    <section
      id="kontakt"
      ref={ref}
      className="scroll-mt-16 border-t border-navy/10 bg-white py-16 sm:py-28 lg:py-32"
    >
      <div className={`${WRAP} grid gap-10 lg:grid-cols-12 lg:gap-x-16`}>
        <div className="lg:col-span-5">
          <Label>Kontakt oss</Label>
          <h2 data-split className="mt-5 display-1 text-navy">
            Klar for en litt bedre arbeidsdag?
          </h2>
          <p className="mt-5 max-w-[40ch] text-[16px] leading-[1.55] text-navy/65 lg:text-[17px]">
            Ta kontakt for en uforpliktende samtale — vi setter sammen ett
            tilbud på alt dere velger.
          </p>

          {/* Two-by-two at every width. Compact on phones (no icon squares). */}
          <ul
            data-reveal-stagger
            className="mt-8 grid grid-cols-2 gap-x-4 gap-y-4 sm:mt-10 sm:gap-x-8 sm:gap-y-7"
          >
            {contactItems.map((item) => {
              const Icon = item.icon;
              const body = (
                <>
                  <span className="hidden h-10 w-10 flex-shrink-0 items-center justify-center rounded-btn bg-brand/10 text-brand sm:flex">
                    <Icon className="h-4.5 w-4.5" strokeWidth={2} />
                  </span>
                  <span className="min-w-0">
                    <span className="label-caps block text-navy/50">{item.label}</span>
                    <span className="mt-0.5 block break-words text-[14px] font-semibold leading-snug text-navy sm:mt-1 sm:text-[15px]">
                      {item.value}
                    </span>
                  </span>
                </>
              );
              return (
                <li key={item.label}>
                  {item.href ? (
                    <a
                      href={item.href}
                      {...(item.href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="flex items-start gap-4 transition-opacity hover:opacity-75"
                    >
                      {body}
                    </a>
                  ) : (
                    <div className="flex items-start gap-4">{body}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* The panel: two tabs, the form or the booking link. */}
        <div data-reveal className="lg:col-span-7">
          <div className="rounded-photo bg-cloud p-5 sm:p-8 lg:p-10">
            <div role="tablist" className="flex gap-6 border-b border-navy/15 sm:gap-8">
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === "form"}
                onClick={() => setActiveTab("form")}
                className={
                  TAB +
                  (activeTab === "form"
                    ? " border-brand text-navy"
                    : " border-transparent text-navy/55 hover:text-navy")
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
                  TAB +
                  (activeTab === "booking"
                    ? " border-brand text-navy"
                    : " border-transparent text-navy/55 hover:text-navy")
                }
              >
                <Calendar className="hidden h-4 w-4 sm:block" strokeWidth={2.25} />
                Book et møte
              </button>
            </div>

            {activeTab === "form" ? (
              <form
                key="form"
                onSubmit={(e) => e.preventDefault()}
                className="motion-safe:transition-opacity motion-safe:duration-200 starting:opacity-0"
              >
                {/* Short fields pair up two-across even on phones. */}
                <div className="mt-6 grid grid-cols-2 gap-x-5 gap-y-5 sm:mt-8 sm:gap-x-8 sm:gap-y-7">
                  <label className="block">
                    <span className={LABEL}>Navn</span>
                    <input type="text" name="name" className={FIELD} placeholder="Ditt navn" />
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

                  <label className="col-span-2 block">
                    <span className={LABEL}>E-post</span>
                    <input
                      type="email"
                      name="email"
                      className={FIELD}
                      placeholder="din@epost.no"
                    />
                    <p className={HINT}>Skriv inn en gyldig e-postadresse</p>
                  </label>

                  <label className="block">
                    <span className={LABEL}>Telefon</span>
                    <input
                      type="tel"
                      name="phone"
                      className={`${FIELD} tabular-nums`}
                      placeholder="+47 123 45 678"
                      pattern="[0-9 +]*"
                      minLength={8}
                      title="Telefonnummer med minst 8 siffer"
                    />
                    <p className={HINT}>Skriv inn et gyldig telefonnummer</p>
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

                <div className="mt-7 sm:mt-9">
                  <span className={LABEL}>Jeg er interessert i</span>
                  {/* Three-up grid on phones (two rows); free-flowing chips from sm. */}
                  <div className="mt-3 grid grid-cols-3 gap-2 sm:flex sm:flex-wrap">
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
                          {on && (
                            <Check className="h-4 w-4 flex-shrink-0" strokeWidth={3} aria-hidden="true" />
                          )}
                          {service}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <label className="mt-7 block sm:mt-9">
                  <span className={LABEL}>Melding</span>
                  <textarea
                    name="message"
                    rows={3}
                    className={`${FIELD} resize-none`}
                    placeholder="Beskriv dine behov..."
                  />
                </label>

                <div className="mt-7 sm:mt-9">
                  <Button type="submit" size="lg" arrow className="w-full sm:w-auto">
                    Send melding
                  </Button>
                </div>
              </form>
            ) : (
              <div
                key="booking"
                className="flex flex-col items-start pt-8 motion-safe:transition-opacity motion-safe:duration-200 starting:opacity-0 sm:pt-10"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-btn bg-brand/10 text-brand">
                  <Calendar className="h-5 w-5" strokeWidth={2} />
                </span>
                <h3 className="mt-6 font-lato text-[26px] leading-tight text-navy sm:text-[30px]">
                  Book et møte med oss
                </h3>
                <p className="mt-3 max-w-[44ch] text-[16px] leading-relaxed text-navy/65">
                  Velg et tidspunkt som passer for deg, så tar vi en
                  uforpliktende samtale om løsninger tilpasset dine behov.
                </p>
                <div className="mt-8 w-full sm:w-auto">
                  <Button
                    href="https://outlook.office.com/book/Bookmtemedmeg@heltopplagt.no/"
                    target="_blank"
                    rel="noopener noreferrer"
                    size="lg"
                    arrow
                    className="w-full sm:w-auto"
                  >
                    Velg tidspunkt
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
