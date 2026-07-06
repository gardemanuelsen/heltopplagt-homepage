import { ReactNode } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Quote,
  Utensils,
  Coffee,
  Apple,
  Sparkles,
  Wind,
} from "lucide-react";
import { Link } from "react-router";
import { PageHero } from "./PageHero";
import { CtaSection } from "./CtaSection";

const allServices = [
  { label: "Frukt", to: "/tjenester/frukt", icon: Apple },
  { label: "Lunsj", to: "/tjenester/lunsj", icon: Coffee },
  { label: "Kantine", to: "/tjenester/kantine", icon: Utensils },
  { label: "Catering", to: "/tjenester/catering", icon: Utensils },
  { label: "Inneklima", to: "/tjenester/inneklima", icon: Wind },
  { label: "Renhold", to: "/tjenester/renhold", icon: Sparkles },
];

export interface ServicePageData {
  /** Category badge shown in the hero image chip, e.g. "Mat & Drikke" */
  badge: string;
  title: ReactNode;
  intro: string;
  image: string;
  imageAlt: string;
  steps: { title: string; description: string }[];
  highlight: {
    eyebrow: string;
    title: string;
    description: string;
    points: string[];
    image: string;
  };
  quote?: { text: string; name: string; role: string; company: string };
  /** Path of this page, used to exclude it from "other services" */
  path: string;
}

export function ServicePage({ data }: { data: ServicePageData }) {
  const otherServices = allServices.filter((s) => s.to !== data.path);

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        eyebrow={`Tjenester · ${data.badge}`}
        title={data.title}
        description={data.intro}
        image={data.image}
        imageAlt={data.imageAlt}
        chip={{ label: "Kategori", value: data.badge }}
      >
        <div className="mt-9">
          <Link
            to="/kontakt"
            className="bg-[#0078C4] text-white px-6 py-3.5 rounded-full text-sm font-medium hover:bg-[#0062a3] transition-colors inline-flex items-center justify-center gap-2"
          >
            Få et uforpliktende tilbud
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </PageHero>

      {/* Highlight: image + checklist */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-8 grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] order-2 lg:order-1">
            <img
              src={data.highlight.image}
              alt={data.highlight.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 w-1 h-full bg-[#0078C4]" />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#0078C4] mb-2.5">
              {data.highlight.eyebrow}
            </p>
            <h2 className="text-3xl lg:text-[40px] font-bold text-gray-900 tracking-tight leading-[1.1] mb-5">
              {data.highlight.title}
            </h2>
            <p className="text-[17px] text-gray-600 leading-relaxed mb-8">
              {data.highlight.description}
            </p>
            <ul className="space-y-3.5">
              {data.highlight.points.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#f5f9fc] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#0078C4]" strokeWidth={3} />
                  </span>
                  <span className="text-[15px] text-gray-700 leading-relaxed">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-[rgb(17,31,55)] py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="max-w-[1280px] mx-auto px-8 relative z-[2]">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-8 h-0.5 bg-[#0078C4]" />
            <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#66aedc]">
              Slik fungerer det
            </span>
          </div>
          <h2 className="text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.1] mb-14 max-w-[520px]">
            Kom i gang på under en uke
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {data.steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex items-center gap-4 mb-5">
                  <span className="text-[15px] font-bold text-[#0078C4] bg-white/[0.06] border border-white/10 rounded-full w-11 h-11 flex items-center justify-center flex-shrink-0">
                    0{index + 1}
                  </span>
                  <div className="h-px flex-1 bg-white/10" />
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight mb-2">
                  {step.title}
                </h3>
                <p className="text-[15px] text-white/55 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      {data.quote && (
        <section className="bg-[#f5f9fc] py-20 border-b border-gray-200">
          <div className="max-w-[860px] mx-auto px-8 text-center">
            <Quote className="w-8 h-8 text-[#0078C4] mx-auto mb-6 rotate-180" />
            <blockquote className="text-xl lg:text-2xl font-medium text-gray-900 leading-relaxed tracking-tight mb-8">
              &ldquo;{data.quote.text}&rdquo;
            </blockquote>
            <p className="text-sm font-semibold text-gray-900">{data.quote.name}</p>
            <p className="text-sm text-gray-500">
              {data.quote.role}, {data.quote.company}
            </p>
          </div>
        </section>
      )}

      {/* Other services */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#0078C4] mb-2">
                Utforsk mer
              </p>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight">
                Andre tjenester
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {otherServices.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.to}
                  to={service.to}
                  className="group border border-gray-200 rounded-xl p-5 flex flex-col gap-4 hover:border-[#0078C4]/40 hover:shadow-[0_8px_24px_rgba(0,120,196,0.08)] transition-all duration-300"
                >
                  <Icon className="w-6 h-6 text-[#0078C4]" strokeWidth={1.75} />
                  <span className="flex items-center justify-between text-sm font-semibold text-gray-900">
                    {service.label}
                    <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover:text-[#0078C4] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
