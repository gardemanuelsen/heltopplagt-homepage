import { Target, Users, Heart, Award, ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { PageHero, SectionHeader } from "../components/PageHero";
import { CtaSection } from "../components/CtaSection";
import heleGjengenImg from "../../images/hele_gjengen.jpg";
import { useDocumentMeta } from "../../lib/use-document-meta";

const stats = [
  { value: "200+", label: "Fornøyde bedrifter" },
  { value: "50+", label: "Dedikerte medarbeidere" },
  { value: "6", label: "Tjenester under ett tak" },
  { value: "98%", label: "Kundetilfredshet" },
];

const values = [
  {
    icon: Target,
    title: "Vårt oppdrag",
    description:
      "Å levere fremragende fasilitetsløsninger som gjør hverdagen enklere for våre kunder.",
  },
  {
    icon: Users,
    title: "Teamet vårt",
    description:
      "Over 50 dedikerte medarbeidere med erfaring og kompetanse innen fasilitetsforvaltning.",
  },
  {
    icon: Heart,
    title: "Våre verdier",
    description:
      "Kvalitet, pålitelighet og kundetilfredshet står i sentrum av alt vi gjør.",
  },
  {
    icon: Award,
    title: "Vår visjon",
    description:
      "Å være den foretrukne partneren for fasilitetsløsninger i Oslo-området.",
  },
];

const milestones = [
  {
    period: "Starten",
    title: "En enkel idé",
    text: "Helt Opplagt ble grunnlagt med en visjon om å tilby profesjonelle tjenester som gjør hverdagen enklere for bedrifter i Oslo-området.",
  },
  {
    period: "Veksten",
    title: "Fra én tjeneste til seks",
    text: "Fra en liten oppstart har vi vokst til å bli en av regionens ledende leverandører, med over 200 fornøyde kunder og mer enn 50 dedikerte medarbeidere.",
  },
  {
    period: "I dag",
    title: "Alt under ett tak",
    text: "I dag tilbyr vi et bredt spekter av abonnementsbaserte tjenester — fra kantinedrift og catering til renhold og inneklima. Vår styrke ligger i evnen til å tilpasse løsninger til hver enkelt kundes behov.",
  },
];

export function OmOssPage() {
  useDocumentMeta(
    "Om oss",
    "Helt Opplagt leverer fasilitetsløsninger som gjør hverdagen enklere for over 200 bedrifter i Oslo-området. Les om teamet og verdiene våre."
  );

  return (
    <div className="min-h-dvh bg-white">
      <PageHero
        eyebrow="Om oss"
        title={
          <>
            Menneskene bak det{" "}
            <span className="text-[#0078C4] italic font-light">
              helt opplagte
            </span>{" "}
            valget
          </>
        }
        description="Vi er en markedsorientert leverandør av abonnementsbaserte tjenester innen helse og trivsel på arbeidsplassen — med kvalitet og service i ryggmargen."
        image={heleGjengenImg}
        imageAlt="Hele gjengen i Helt Opplagt"
        chip={{ label: "Teamet", value: "Hele gjengen" }}
      />

      {/* Stats bar */}
      <section className="border-b border-gray-200 bg-white">
        <div className="max-w-[1280px] mx-auto px-8 grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`py-10 text-center ${
                index > 0 ? "lg:border-l border-gray-200" : ""
              }`}
            >
              <p className="text-3xl lg:text-4xl font-bold text-[#0078C4] tracking-tight mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-8">
          <SectionHeader
            eyebrow="Hvem vi er"
            title={
              <>
                Et team som brenner for
                <br />
                førsteklasses service
              </>
            }
            action={
              <Link
                to="/karriere"
                className="border-[1.5px] border-gray-200 text-gray-700 px-5 py-2.5 rounded-md text-[13px] font-medium hover:border-[#0078C4] hover:text-[#0078C4] transition-all inline-flex items-center gap-1.5"
              >
                Jobb hos oss
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            }
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
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
                    {value.title}
                  </h3>
                  <p className="text-[15px] text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* History timeline */}
      <section className="py-24 bg-[#f5f9fc] border-y border-gray-200">
        <div className="max-w-[1280px] mx-auto px-8 grid lg:grid-cols-[1fr_1.6fr] gap-14">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#0078C4] mb-2.5">
              Vår historie
            </p>
            <h2 className="text-3xl lg:text-[40px] font-bold text-gray-900 tracking-tight leading-[1.1] mb-5">
              Fra idé til
              <br />
              komplett leverandør
            </h2>
            <p className="text-[17px] text-gray-600 leading-relaxed">
              Vi er stolte av arbeidet vårt, og forpliktet til å fortsette å
              levere den høye kvaliteten kundene våre forventer av oss.
            </p>
          </div>

          <div className="space-y-0">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="relative pl-10 pb-10 last:pb-0 border-l border-gray-300 last:border-l-transparent ml-2"
              >
                <span className="absolute -left-[9px] top-0 w-[17px] h-[17px] rounded-full bg-white border-[3px] border-[#0078C4]" />
                <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#0078C4] mb-1.5">
                  {milestone.period}
                </p>
                <h3 className="text-xl font-bold text-gray-900 tracking-tight mb-2">
                  {milestone.title}
                </h3>
                <p className="text-[15px] text-gray-600 leading-relaxed max-w-[540px]">
                  {milestone.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
