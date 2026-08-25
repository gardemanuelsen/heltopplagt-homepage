import { Mail, Phone, MapPin, ArrowRight, Calendar } from "lucide-react";
import { useEffect, useState } from "react";
import { companySizes } from "../../lib/offer-data";

const services = ["Lunsj", "Kantine", "Catering", "Frukt", "Inneklima", "Renhold"];

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
    value: "Oslo, Norge",
    href: undefined,
  },
];

interface ContactProps {
  initialServices?: string[];
  initialCompanySize?: string | null;
}

export function Contact({ initialServices, initialCompanySize }: ContactProps) {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [companySize, setCompanySize] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"form" | "booking">("form");

  useEffect(() => {
    if (initialServices) setSelectedServices(initialServices);
    if (initialCompanySize) setCompanySize(initialCompanySize);
  }, [initialServices, initialCompanySize]);

  const toggleCheckbox = (value: string) => {
    setSelectedServices((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  return (
    <section id="kontakt" className="py-24 bg-base-100 scroll-mt-20">
      <div className="max-w-[1440px] 2xl:max-w-[1560px] 3xl:max-w-[1680px] 4xl:max-w-[1800px] 5xl:max-w-[1920px] mx-auto px-8 2xl:px-12 3xl:px-16 4xl:px-20 5xl:px-24">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-14">
          {/* Contact Info */}
          <div>
            <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-primary mb-2.5">
              Ta kontakt
            </p>
            <h2 className="text-3xl lg:text-[40px] font-bold text-base-content tracking-tight leading-[1.1] mb-5">
              Kom i kontakt
              <br />
              med oss
            </h2>
            <p className="text-[17px] text-base-content/65 leading-relaxed mb-10">
              Vi er klare til å hjelpe deg med løsninger tilpasset dine behov.
              Ta kontakt i dag for en uforpliktende samtale.
            </p>

            <div className="space-y-3">
              {contactItems.map((item, index) => {
                const Icon = item.icon;
                const content = (
                  <>
                    <div className="w-11 h-11 bg-base-200 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                      <Icon
                        className="w-5 h-5 text-primary group-hover:text-primary-content transition-colors duration-300"
                        strokeWidth={1.75}
                      />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold tracking-[0.08em] uppercase text-base-content/40 mb-0.5">
                        {item.label}
                      </p>
                      <p className="text-[15px] font-medium text-base-content">
                        {item.value}
                      </p>
                    </div>
                  </>
                );
                return item.href ? (
                  <a
                    key={index}
                    href={item.href}
                    className="group flex items-center gap-4 border border-base-300 rounded-xl px-5 py-4 hover:border-primary/40 transition-colors"
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={index}
                    className="group flex items-center gap-4 border border-base-300 rounded-xl px-5 py-4"
                  >
                    {content}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact Form / Booking */}
          <div className="bg-base-200 border border-base-300 p-8 lg:p-10 rounded-2xl">
            {/* Tab switcher */}
            <div role="tablist" className="tabs tabs-box w-full bg-base-100 border border-base-300 mb-8">
              <label className="tab flex-1 gap-2">
                <input
                  type="radio"
                  name="contact_tabs"
                  checked={activeTab === "form"}
                  onChange={() => setActiveTab("form")}
                />
                <Mail className="w-4 h-4" />
                Kontaktskjema
              </label>
              <label className="tab flex-1 gap-2">
                <input
                  type="radio"
                  name="contact_tabs"
                  checked={activeTab === "booking"}
                  onChange={() => setActiveTab("booking")}
                />
                <Calendar className="w-4 h-4" />
                Book et møte
              </label>
            </div>

            {activeTab === "form" ? (
              <form onSubmit={(e) => e.preventDefault()}>
                <fieldset className="fieldset gap-5 p-0">
                  <legend className="sr-only">Kontaktskjema</legend>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="label text-[13px] font-medium text-base-content/80 mb-1.5">
                        Navn
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="input input-sm w-full bg-base-100"
                        placeholder="Ditt navn"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="label text-[13px] font-medium text-base-content/80 mb-1.5">
                        Firmanavn
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="input input-sm w-full bg-base-100"
                        placeholder="Ditt firmanavn"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="label text-[13px] font-medium text-base-content/80 mb-1.5">
                        E-post
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="input input-sm validator w-full bg-base-100"
                        placeholder="din@epost.no"
                      />
                      <p className="validator-hint hidden">Skriv inn en gyldig e-postadresse</p>
                    </div>
                    <div>
                      <label htmlFor="phone" className="label text-[13px] font-medium text-base-content/80 mb-1.5">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="input input-sm validator w-full bg-base-100 tabular-nums"
                        placeholder="+47 123 45 678"
                        pattern="[0-9 +]*"
                        minLength={8}
                        title="Telefonnummer med minst 8 siffer"
                      />
                      <p className="validator-hint hidden">Skriv inn et gyldig telefonnummer</p>
                    </div>
                  </div>

                  <div>
                    <p className="label text-[13px] font-medium text-base-content/80 mb-2.5">
                      Jeg er interessert i
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {services.map((service) => {
                        const selected = selectedServices.includes(service);
                        return (
                          <button
                            key={service}
                            type="button"
                            onClick={() => toggleCheckbox(service)}
                            aria-pressed={selected}
                            className={
                              selected
                                ? "btn btn-sm btn-primary rounded-full h-auto px-4 py-2 text-[13px] font-medium"
                                : "btn btn-sm rounded-full h-auto px-4 py-2 text-[13px] font-medium bg-base-100 text-base-content/70 border-base-300 hover:border-primary hover:text-primary"
                            }
                          >
                            {service}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <p className="label text-[13px] font-medium text-base-content/80 mb-2.5">
                      Antall ansatte
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {companySizes.map((cs) => {
                        const selected = companySize === cs.value;
                        return (
                          <button
                            key={cs.value}
                            type="button"
                            onClick={() => setCompanySize(cs.value)}
                            aria-pressed={selected}
                            className={
                              selected
                                ? "btn btn-sm btn-primary rounded-full h-auto px-4 py-2 text-[13px] font-medium"
                                : "btn btn-sm rounded-full h-auto px-4 py-2 text-[13px] font-medium bg-base-100 text-base-content/70 border-base-300 hover:border-primary hover:text-primary"
                            }
                          >
                            {cs.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="label text-[13px] font-medium text-base-content/80 mb-1.5">
                      Melding
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="textarea w-full bg-base-100 resize-none"
                      placeholder="Beskriv dine behov..."
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary w-full h-auto px-8 py-3.5 text-[15px]">
                    Send melding
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </fieldset>
              </form>
            ) : (
              <div className="flex flex-col items-center text-center py-6">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Calendar className="w-7 h-7 text-primary" strokeWidth={1.75} />
                </div>
                <h3 className="text-2xl font-bold text-base-content tracking-tight mb-3">
                  Book et møte med oss
                </h3>
                <p className="text-[15px] text-base-content/65 leading-relaxed mb-8 max-w-md">
                  Velg et tidspunkt som passer for deg, så tar vi en uforpliktende
                  samtale om løsninger tilpasset dine behov.
                </p>
                <a
                  href="https://outlook.office.com/book/Bookmtemedmeg@heltopplagt.no/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary w-full sm:w-auto h-auto px-8 py-3.5 text-[15px]"
                >
                  Velg tidspunkt
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
