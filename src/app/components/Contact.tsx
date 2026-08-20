import { Mail, Phone, MapPin, ArrowRight, Calendar } from "lucide-react";
import { useState } from "react";

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

export function Contact() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<"form" | "booking">("form");

  const toggleCheckbox = (value: string) => {
    setSelectedServices((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  return (
    <section id="kontakt" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-14">
          {/* Contact Info */}
          <div>
            <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#0078C4] mb-2.5">
              Ta kontakt
            </p>
            <h2 className="text-3xl lg:text-[40px] font-bold text-gray-900 tracking-tight leading-[1.1] mb-5">
              Kom i kontakt
              <br />
              med oss
            </h2>
            <p className="text-[17px] text-gray-600 leading-relaxed mb-10">
              Vi er klare til å hjelpe deg med løsninger tilpasset dine behov.
              Ta kontakt i dag for en uforpliktende samtale.
            </p>

            <div className="space-y-3">
              {contactItems.map((item, index) => {
                const Icon = item.icon;
                const content = (
                  <>
                    <div className="w-11 h-11 bg-[#f5f9fc] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#0078C4] transition-colors duration-300">
                      <Icon
                        className="w-5 h-5 text-[#0078C4] group-hover:text-white transition-colors duration-300"
                        strokeWidth={1.75}
                      />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold tracking-[0.08em] uppercase text-gray-400 mb-0.5">
                        {item.label}
                      </p>
                      <p className="text-[15px] font-medium text-gray-900">
                        {item.value}
                      </p>
                    </div>
                  </>
                );
                return item.href ? (
                  <a
                    key={index}
                    href={item.href}
                    className="group flex items-center gap-4 border border-gray-200 rounded-xl px-5 py-4 hover:border-[#0078C4]/40 transition-colors"
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={index}
                    className="group flex items-center gap-4 border border-gray-200 rounded-xl px-5 py-4"
                  >
                    {content}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact Form / Booking */}
          <div className="bg-[#f5f9fc] border border-gray-200 p-8 lg:p-10 rounded-2xl">
            {/* Tab switcher */}
            <div className="flex gap-2 p-1 bg-white border border-gray-200 rounded-xl mb-8">
              <button
                type="button"
                onClick={() => setActiveTab("form")}
                className={`flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-[14px] font-medium transition-all ${
                  activeTab === "form"
                    ? "bg-[#0078C4] text-white"
                    : "text-gray-600 hover:text-[#0078C4]"
                }`}
              >
                <Mail className="w-4 h-4" />
                Kontaktskjema
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("booking")}
                className={`flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-[14px] font-medium transition-all ${
                  activeTab === "booking"
                    ? "bg-[#0078C4] text-white"
                    : "text-gray-600 hover:text-[#0078C4]"
                }`}
              >
                <Calendar className="w-4 h-4" />
                Book et møte
              </button>
            </div>

            {activeTab === "form" ? (
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-[13px] font-medium text-gray-700 mb-1.5"
                  >
                    Navn
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:border-[#0078C4] focus:ring-2 focus:ring-[#0078C4]/15 bg-white transition-all"
                    placeholder="Ditt navn"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-[13px] font-medium text-gray-700 mb-1.5"
                  >
                    Firmanavn
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:border-[#0078C4] focus:ring-2 focus:ring-[#0078C4]/15 bg-white transition-all"
                    placeholder="Ditt firmanavn"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-[13px] font-medium text-gray-700 mb-1.5"
                  >
                    E-post
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:border-[#0078C4] focus:ring-2 focus:ring-[#0078C4]/15 bg-white transition-all"
                    placeholder="din@epost.no"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-[13px] font-medium text-gray-700 mb-1.5"
                  >
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:border-[#0078C4] focus:ring-2 focus:ring-[#0078C4]/15 bg-white transition-all"
                    placeholder="+47 123 45 678"
                  />
                </div>
              </div>

              <div>
                <p className="block text-[13px] font-medium text-gray-700 mb-2.5">
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
                        className={`px-4 py-2 rounded-full text-[13px] font-medium transition-all ${
                          selected
                            ? "bg-[#0078C4] text-white"
                            : "bg-white text-gray-600 border border-gray-200 hover:border-[#0078C4] hover:text-[#0078C4]"
                        }`}
                      >
                        {service}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-[13px] font-medium text-gray-700 mb-1.5"
                >
                  Melding
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:border-[#0078C4] focus:ring-2 focus:ring-[#0078C4]/15 bg-white transition-all resize-none"
                  placeholder="Beskriv dine behov..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#0078C4] text-white px-8 py-3.5 rounded-md text-[15px] font-medium hover:bg-[#0062a3] transition-colors inline-flex items-center justify-center gap-2"
              >
                Send melding
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
            ) : (
              <div className="flex flex-col items-center text-center py-6">
                <div className="w-14 h-14 bg-[#0078C4]/10 rounded-2xl flex items-center justify-center mb-6">
                  <Calendar className="w-7 h-7 text-[#0078C4]" strokeWidth={1.75} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 tracking-tight mb-3">
                  Book et møte med oss
                </h3>
                <p className="text-[15px] text-gray-600 leading-relaxed mb-8 max-w-md">
                  Velg et tidspunkt som passer for deg, så tar vi en uforpliktende
                  samtale om løsninger tilpasset dine behov.
                </p>
                <a
                  href="https://outlook.office.com/book/Bookmtemedmeg@heltopplagt.no/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0078C4] text-white px-8 py-3.5 rounded-md text-[15px] font-medium hover:bg-[#0062a3] transition-colors"
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
