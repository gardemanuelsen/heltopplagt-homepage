import {
  Leaf,
  Recycle,
  Heart,
  Users,
  Sprout,
  ShieldCheck,
} from "lucide-react";
import { PageHero, SectionHeader } from "../components/PageHero";
import { CtaSection } from "../components/CtaSection";

const initiatives = [
  {
    icon: Leaf,
    title: "Bærekraftig innkjøp",
    description:
      "Vi prioriterer lokale og økologiske leverandører for alle våre produkter. Over 80% av våre råvarer kommer fra norske produsenter.",
  },
  {
    icon: Recycle,
    title: "Avfallshåndtering",
    description:
      "Vi har implementert omfattende kildesortering og resirkulering i alle våre kantiner. Matavfall komposteres eller brukes til biogassproduksjon.",
  },
  {
    icon: Heart,
    title: "Sosialt ansvar",
    description:
      "Vi donerer overskuddsmat til lokale veldedighetsorganisasjoner og støtter sosiale prosjekter i Oslo-området.",
  },
  {
    icon: Users,
    title: "Ansattes velferd",
    description:
      "Vi investerer i våre ansatte gjennom opplæring, gode arbeidsforhold og muligheter for karriereutvikling.",
  },
];

const goals = [
  "Redusere matsvinn med 50% innen 2027",
  "100% fornybar energi i alle våre fasiliteter innen 2026",
  "Kun bruk av miljøvennlige rengjøringsprodukter",
  "Samarbeide med minst 5 nye lokale leverandører årlig",
  "Donere minimum 1000 måltider til trengende per år",
];

const certifications = [
  {
    icon: Sprout,
    title: "Miljøfyrtårn",
    description: "Miljøsertifisering",
  },
  {
    icon: ShieldCheck,
    title: "HACCP",
    description: "Mattrygghet",
  },
];

export function AnsvarPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHero
        eyebrow="Samfunnsansvar"
        title={
          <>
            Ansvar for miljø,{" "}
            <span className="text-[#0078C4] italic font-light">
              mennesker og samfunn
            </span>
          </>
        }
        description="Hos Helt Opplagt er bærekraft en naturlig del av alt vi gjør — fra råvarene vi kjøper inn til menneskene som leverer tjenestene."
      />

      {/* Initiatives */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-8">
          <SectionHeader
            eyebrow="Våre initiativer"
            title={
              <>
                Konkrete tiltak,
                <br />
                ikke bare fine ord
              </>
            }
          />

          <div className="grid md:grid-cols-2 gap-6">
            {initiatives.map((initiative, index) => {
              const Icon = initiative.icon;
              return (
                <div
                  key={index}
                  className="group border border-gray-200 rounded-2xl p-8 hover:border-[#0078C4]/40 hover:shadow-[0_12px_32px_rgba(0,120,196,0.08)] transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-[#f5f9fc] rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#0078C4] transition-colors duration-300">
                    <Icon
                      className="w-6 h-6 text-[#0078C4] group-hover:text-white transition-colors duration-300"
                      strokeWidth={1.75}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 tracking-tight mb-2.5">
                    {initiative.title}
                  </h3>
                  <p className="text-[15px] text-gray-600 leading-relaxed">
                    {initiative.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Goals */}
      <section className="bg-[rgb(17,31,55)] py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="max-w-[1280px] mx-auto px-8 grid lg:grid-cols-[1fr_1.4fr] gap-14 relative z-[2]">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-0.5 bg-[#0078C4]" />
              <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#66aedc]">
                Våre mål
              </span>
            </div>
            <h2 className="text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.1] mb-5">
              Dette har vi
              <br />
              forpliktet oss til
            </h2>
            <p className="text-[16px] text-white/55 leading-relaxed">
              Målene våre er konkrete og målbare — og vi rapporterer åpent på
              fremdriften.
            </p>
          </div>

          <div className="space-y-3">
            {goals.map((goal, index) => (
              <div
                key={index}
                className="flex items-center gap-5 bg-white/[0.05] border border-white/10 rounded-xl px-6 py-5 hover:bg-white/[0.08] transition-colors"
              >
                <span className="text-[15px] font-bold text-[#0078C4] bg-white/[0.06] border border-white/10 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                  0{index + 1}
                </span>
                <p className="text-[15px] text-white/85 leading-relaxed">
                  {goal}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="text-center mb-14">
            <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#0078C4] mb-2.5">
              Dokumentert kvalitet
            </p>
            <h2 className="text-3xl lg:text-[40px] font-bold text-gray-900 tracking-tight leading-[1.1]">
              Sertifiseringer og standarder
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {certifications.map((certification, index) => {
              const Icon = certification.icon;
              return (
                <div
                  key={index}
                  className="border border-gray-200 rounded-2xl p-8 text-center hover:border-[#0078C4]/40 hover:shadow-[0_12px_32px_rgba(0,120,196,0.08)] transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-[#f5f9fc] rounded-xl flex items-center justify-center mx-auto mb-5">
                    <Icon className="w-7 h-7 text-[#0078C4]" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 tracking-tight mb-1.5">
                    {certification.title}
                  </h3>
                  <p className="text-[15px] text-gray-600">
                    {certification.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
