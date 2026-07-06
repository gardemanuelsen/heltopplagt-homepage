import {
  Briefcase,
  TrendingUp,
  Award,
  Coffee,
  MapPin,
  Clock,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import { PageHero, SectionHeader } from "../components/PageHero";

const openings = [
  {
    title: "Kantinemedarbeider",
    location: "Oslo sentrum",
    type: "Heltid",
    description:
      "Vi søker en erfaren kantinemedarbeider til å bli en del av vårt team hos en av våre største kunder.",
  },
  {
    title: "Renholdsassistent",
    location: "Fornebu",
    type: "Deltid",
    description:
      "Deltidsstilling som renholdsassistent hos en av våre kunder på Fornebu.",
  },
  {
    title: "Cateringsjef",
    location: "Oslo",
    type: "Heltid",
    description:
      "Vi søker en dyktig cateringsjef med erfaring fra større arrangementer.",
  },
  {
    title: "Inneklimatekniker",
    location: "Stor-Oslo",
    type: "Heltid",
    description:
      "Erfaren tekniker til arbeid med ventilasjons- og inneklimaløsninger.",
  },
];

const benefits = [
  {
    icon: TrendingUp,
    title: "Karriereutvikling",
    description:
      "Vi investerer i våre ansatte med kurs, opplæring og muligheter for forfremmelse.",
  },
  {
    icon: Award,
    title: "Konkurransedyktig lønn",
    description:
      "Vi tilbyr gode lønns- og pensjonsordninger tilpasset bransjen.",
  },
  {
    icon: Coffee,
    title: "Godt arbeidsmiljø",
    description:
      "Et inkluderende og støttende miljø med fokus på trivsel.",
  },
  {
    icon: Briefcase,
    title: "Fleksibilitet",
    description:
      "Vi tilbyr fleksible arbeidsordninger som passer ditt liv.",
  },
];

export function KarrierePage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHero
        eyebrow="Karriere"
        title={
          <>
            Bli en del av{" "}
            <span className="text-[#0078C4] italic font-light">gjengen</span>
          </>
        }
        description="Vi søker dedikerte medarbeidere som ønsker å gjøre en forskjell for arbeidsplasser over hele Oslo-området."
      >
        <div className="mt-9">
          <a
            href="#stillinger"
            className="bg-[#0078C4] text-white px-6 py-3.5 rounded-md text-sm font-medium hover:bg-[#0062a3] transition-colors inline-flex items-center gap-2"
          >
            Se ledige stillinger
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </PageHero>

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-8">
          <SectionHeader
            eyebrow="Hvorfor jobbe hos oss?"
            title={
              <>
                Mer enn bare en jobb —
                <br />
                en karriere
              </>
            }
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="group border border-gray-200 rounded-2xl p-7 hover:border-[#0078C4]/40 hover:shadow-[0_12px_32px_rgba(0,120,196,0.08)] transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-[#f5f9fc] rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#0078C4] transition-colors duration-300">
                    <Icon
                      className="w-6 h-6 text-[#0078C4] group-hover:text-white transition-colors duration-300"
                      strokeWidth={1.75}
                    />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 tracking-tight mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-[15px] text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open positions */}
      <section id="stillinger" className="py-24 bg-[#f5f9fc] border-y border-gray-200 scroll-mt-20">
        <div className="max-w-[1280px] mx-auto px-8">
          <SectionHeader
            eyebrow="Ledige stillinger"
            title={
              <>
                Vi ser etter
                <br />
                nye kollegaer
              </>
            }
          />

          <div className="max-w-4xl space-y-4">
            {openings.map((job, index) => (
              <a
                key={index}
                href="mailto:karriere@heltopplagt.no"
                className="group bg-white border border-gray-200 rounded-2xl p-7 flex flex-col md:flex-row md:items-center gap-5 hover:border-[#0078C4]/40 hover:shadow-[0_12px_32px_rgba(0,120,196,0.08)] transition-all duration-300 block"
              >
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 tracking-tight mb-2 group-hover:text-[#0078C4] transition-colors">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-[13px] text-gray-500 mb-2.5">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#0078C4]" />
                      {job.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#0078C4]" />
                      {job.type}
                    </span>
                  </div>
                  <p className="text-[15px] text-gray-600 leading-relaxed">
                    {job.description}
                  </p>
                </div>
                <span className="inline-flex items-center justify-center gap-2 bg-[#0078C4] text-white px-6 py-3 rounded-md text-sm font-medium group-hover:bg-[#0062a3] transition-colors whitespace-nowrap flex-shrink-0">
                  Søk nå
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Open application */}
      <section className="bg-[rgb(17,31,55)] py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="max-w-[860px] mx-auto px-8 text-center relative z-[2]">
          <div className="flex items-center justify-center gap-2.5 mb-4">
            <div className="w-8 h-0.5 bg-[#0078C4]" />
            <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#66aedc]">
              Åpen søknad
            </span>
          </div>
          <h2 className="text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.15] mb-4">
            Finner du ikke en passende stilling?
          </h2>
          <p className="text-[16px] text-white/55 leading-relaxed mb-9 max-w-[520px] mx-auto">
            Vi mottar gjerne uoppfordrede søknader! Send oss din CV og noen ord
            om deg selv, så tar vi kontakt.
          </p>
          <a
            href="mailto:karriere@heltopplagt.no"
            className="bg-[#0078C4] text-white px-7 py-3.5 rounded-md text-[15px] font-medium hover:bg-[#0062a3] transition-colors inline-flex items-center gap-2"
          >
            Send åpen søknad
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
