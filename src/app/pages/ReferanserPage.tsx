import { Quote, Star } from "lucide-react";
import { PageHero, SectionHeader } from "../components/PageHero";
import { CtaSection } from "../components/CtaSection";
import { useDocumentMeta } from "../../lib/use-document-meta";
import intilityLogo from "../../images/logo/intility.png";
import allianceLogo from "../../images/logo/alliance.png";
import sporveienLogo from "../../images/logo/sporveien.png";
import xxlLogo from "../../images/logo/xxl.png";
import riksrevisjonenLogo from "../../images/logo/riksrevisjonen.png";

const customers = [
  { name: "Intility", logo: intilityLogo },
  { name: "Alliance Healthcare", logo: allianceLogo },
  { name: "Sporveien", logo: sporveienLogo },
  { name: "XXL", logo: xxlLogo },
  { name: "Riksrevisjonen", logo: riksrevisjonenLogo },
];

const testimonials = [
  {
    service: "Kantine",
    name: "Wenche Revhaug",
    company: "Kronos Titan",
    role: "Styremedlem",
    text: "Helt Opplagt leverer god, variert og sunn mat — fersk og frisk. De gir oss det lille ekstra for at vi skal få et hyggelig avbrekk og en bra matopplevelse, hver dag! Helt Opplagt er fleksible og imøtekommende med høy servicegrad — vi er superfornøyd.",
  },
  {
    service: "Lunsj",
    name: "Tor Anders Andersen",
    company: "Team Verksted AS Avd Follo",
    role: "Avdelingsleder",
    text: "Med denne ordningen sparer vi tid, da vi ikke trenger å reise ut for å kjøpe lunsj lenger. Våre ansatte opplever ordningen som et flott tilbud, og nå som alle spiser samtidig og er samlet i kantinen gjør det også godt for arbeidsmiljøet og det sosiale. Helt Opplagt fungerer helt utmerket som leverandør for oss.",
  },
  {
    service: "Frukt",
    name: "Maria Bergström",
    company: "Vinmonopolet AS",
    role: "Kontorsjef",
    text: "Vinmonopolet har fått frukt til 170 ansatte fra Helt Opplagt siden 2018. Frukten er veldig populær, og det er konkurranse om å kaste seg over kurvene når de kommer. Vi er veldig godt fornøyd med Helt Opplagt — de er svært fleksible og raske til å følge opp ønsker.",
  },
  {
    service: "Renhold",
    name: "Helge Stensrud",
    company: "Schibsted Trykk Oslo AS",
    role: "Driftsansvarlig",
    text: "Et godt renhold gir et bra arbeidsmiljø, og Helt Opplagt innfrir alle forventningene vi hadde til kvalitet. Jeg vil spesielt trekke frem positiviteten Helt Opplagt viser. De er løsningsorienterte, bestandig imøtekommende og fikser alt vi ber om. Vi er glade for valget vi tok om ny samarbeidspartner.",
  },
];

const stats = [
  { value: "200+", label: "Fornøyde bedrifter" },
  { value: "98%", label: "Kundetilfredshet" },
  { value: "6", label: "Tjenester under ett tak" },
  { value: "1", label: "Kontaktpunkt for alt" },
];

export function ReferanserPage() {
  useDocumentMeta(
    "Referanser",
    "Se hva kundene våre sier om Helt Opplagt: ekte tilbakemeldinger fra bedrifter som bruker våre tjenester innen lunsj, kantine, frukt og renhold."
  );

  return (
    <div className="min-h-dvh bg-white">
      <PageHero
        eyebrow="Referanser"
        title={
          <>
            Bedrifter som allerede tok det{" "}
            <span className="text-[#0078C4] italic font-light">
              opplagte valget
            </span>
          </>
        }
        description="Vi er stolte av å samarbeide med noen av Norges ledende bedrifter og organisasjoner — og enda stoltere av hva de sier om oss."
      />

      {/* Logo wall */}
      <section className="border-b border-gray-200 bg-white">
        <div className="max-w-[1280px] mx-auto px-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {customers.map((customer, index) => (
            <div
              key={index}
              className="flex items-center justify-center py-12 px-6 border-gray-200 [&:not(:first-child)]:lg:border-l"
            >
              <img
                src={customer.logo}
                alt={customer.name}
                className="max-w-full h-14 object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#f5f9fc]">
        <div className="max-w-[1280px] mx-auto px-8">
          <SectionHeader
            eyebrow="Kundehistorier"
            title={
              <>
                Hva kundene våre
                <br />
                sier om oss
              </>
            }
          />

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col hover:shadow-[0_12px_32px_rgba(0,120,196,0.08)] transition-shadow duration-300"
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="inline-block px-3 py-1 bg-[#f5f9fc] text-[#0078C4] text-[11px] font-semibold tracking-[0.08em] uppercase rounded-full">
                    {testimonial.service}
                  </span>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#0078C4] text-[#0078C4]"
                      />
                    ))}
                  </div>
                </div>
                <Quote className="w-6 h-6 text-[#0078C4]/30 mb-3 rotate-180" />
                <p className="text-[15px] text-gray-700 leading-relaxed mb-6 flex-1">
                  {testimonial.text}
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-sm font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[rgb(17,31,55)] py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="max-w-[1280px] mx-auto px-8 grid grid-cols-2 lg:grid-cols-4 gap-10 relative z-[2]">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl lg:text-5xl font-bold text-white tracking-tight mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-white/50">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
