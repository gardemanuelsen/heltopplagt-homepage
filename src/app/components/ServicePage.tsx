import { ReactNode } from "react";
import { ArrowRight, ArrowUpRight, ChevronRight, Download } from "lucide-react";
import { Link } from "react-router";
import { CtaSection } from "./CtaSection";

export const allServices = [
  { label: "Lunsj", to: "/tjenester/lunsj" },
  { label: "Kantine", to: "/tjenester/kantine" },
  { label: "Frukt", to: "/tjenester/frukt" },
  { label: "Catering", to: "/tjenester/catering" },
  { label: "Inneklima", to: "/tjenester/inneklima" },
  { label: "Renhold", to: "/tjenester/renhold" },
];

/** Small breadcrumb trail, e.g. Forside / Frukt / Jobbsmoothie */
export function Breadcrumb({
  items,
}: {
  items: { label: string; to?: string }[];
}) {
  return (
    <nav aria-label="Brødsmulesti" className="flex items-center flex-wrap gap-1.5 text-[13px] mb-5">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5">
          {i > 0 && <ChevronRight className="w-3.5 h-3.5 text-gray-300" />}
          {item.to ? (
            <Link
              to={item.to}
              className="text-gray-500 hover:text-[#0078C4] transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-900 font-medium">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

/** "Andre tjenester" section shown above the contact CTA */
export function OtherServices({ currentPath }: { currentPath: string }) {
  const others = allServices.filter((s) => s.to !== currentPath);

  return (
    <section className="py-16 bg-[#f5f9fc] border-t border-gray-200">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#0078C4] mb-2">
              På utkikk etter noe annet?
            </p>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight">
              Våre tjenester
            </h2>
          </div>
          <Link
            to="/tjenester"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-[#0078C4] hover:text-[#0062a3] transition-colors mb-1"
          >
            Se alle tjenester
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {others.map((s) => (
            <Link
              key={s.to}
              to={s.to}
              className="group bg-white border border-gray-200 rounded-xl px-5 py-4 flex items-center justify-between gap-3 hover:border-[#0078C4]/40 hover:shadow-[0_8px_24px_rgba(0,120,196,0.08)] transition-all duration-300"
            >
              <span className="text-sm font-semibold text-gray-900">
                {s.label}
              </span>
              <ArrowUpRight className="w-4 h-4 flex-shrink-0 text-gray-300 group-hover:text-[#0078C4] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Content blocks for sub-service pages, mirroring heltopplagt.no */
export type ContentBlock =
  | { type: "text"; heading?: string; paragraphs: string[] }
  | { type: "bullets"; heading?: string; items: string[] }
  | { type: "image"; src: string; alt?: string }
  | { type: "table"; heading?: string; rows: string[][]; footnote?: string }
  | {
      type: "cards";
      heading?: string;
      items: { title: string; description?: string; image?: string }[];
    };

export interface SubService {
  /** URL slug, e.g. "fruktkurv" → /tjenester/frukt/fruktkurv */
  slug: string;
  title: string;
  description: string;
  image: string;
  /** Page content copied from heltopplagt.no */
  content?: ContentBlock[];
}

export interface ServicePageData {
  /** Category badge shown in the hero image chip, e.g. "Mat & Drikke" */
  badge: string;
  title: ReactNode;
  intro: string;
  image: string;
  imageAlt: string;
  /** Link to brochure PDF, shown as a button in the hero */
  brochureUrl?: string;
  /** Sub-service cards, mirroring the structure of heltopplagt.no */
  subServices: SubService[];
  quote?: { text: string; name: string; role: string; company?: string };
  /** Path of this page, used as base for sub-service links */
  path: string;
}

export function ServicePage({ data }: { data: ServicePageData }) {
  const serviceLabel =
    allServices.find((s) => s.to === data.path)?.label ?? data.badge;

  return (
    <div className="min-h-screen bg-white">
      {/* Page heading */}
      <div className="max-w-[1280px] mx-auto px-8 pt-32 lg:pt-36">
        <Breadcrumb
          items={[
            { label: "Alle tjenester", to: "/tjenester" },
            { label: serviceLabel },
          ]}
        />

        <h1 className="text-3xl lg:text-[40px] font-bold text-gray-900 leading-[1.15] tracking-tight mb-4">
          {data.title}
        </h1>

        <p className="text-base lg:text-[17px] text-gray-600 leading-relaxed max-w-[680px] mb-6">
          {data.intro}
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            to="/kontakt"
            className="bg-[#0078C4] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#0062a3] transition-colors inline-flex items-center justify-center gap-2"
          >
            Ta kontakt for tilbud
            <ArrowRight className="w-4 h-4" />
          </Link>
          {data.brochureUrl && (
            <a
              href={data.brochureUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-300 text-gray-700 px-6 py-3 rounded-full text-sm font-medium hover:border-[#0078C4] hover:text-[#0078C4] transition-all inline-flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              Brosjyre
            </a>
          )}
        </div>

      </div>

      {/* Sub-service cards */}
      <section className="py-14 bg-white">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.subServices.map((sub) => (
              <Link
                key={sub.slug}
                to={`${data.path}/${sub.slug}`}
                className="group flex flex-col rounded-2xl border border-gray-200 overflow-hidden hover:border-[#0078C4]/40 hover:shadow-[0_16px_40px_rgba(0,120,196,0.10)] transition-all duration-300"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={sub.image}
                    alt={sub.title}
                    className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col flex-1 p-6">
                  <h3 className="text-lg font-bold text-gray-900 tracking-tight mb-2">
                    {sub.title}
                  </h3>
                  {sub.description && (
                    <p className="text-[15px] text-gray-600 leading-relaxed mb-5">
                      {sub.description}
                    </p>
                  )}
                  <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-[#0078C4]">
                    Les mer
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      {data.quote && (
        <section className="bg-[#f5f9fc] py-20 border-y border-gray-200">
          <div className="max-w-[860px] mx-auto px-8 text-center">
            <blockquote className="text-xl lg:text-2xl font-medium text-gray-900 leading-relaxed tracking-tight mb-8">
              &ldquo;{data.quote.text}&rdquo;
            </blockquote>
            <p className="text-sm font-semibold text-gray-900">{data.quote.name}</p>
            <p className="text-sm text-gray-500">
              {data.quote.role}
              {data.quote.company ? `, ${data.quote.company}` : ""}
            </p>
          </div>
        </section>
      )}

      <OtherServices currentPath={data.path} />

      <CtaSection />
    </div>
  );
}
