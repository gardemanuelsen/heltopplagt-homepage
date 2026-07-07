import { Link, useParams } from "react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { CtaSection } from "../../components/CtaSection";
import {
  Breadcrumb,
  ContentBlock,
  OtherServices,
  ServicePageData,
} from "../../components/ServicePage";
import { fruktData } from "./Frukt";
import { cateringData } from "./Catering";
import { kantineData } from "./Kantine";
import { lunsjData } from "./Lunsj";
import { inneklimaData } from "./Inneklima";
import { renholdData } from "./Renhold";

const services: Record<string, { label: string; data: ServicePageData }> = {
  frukt: { label: "Frukt", data: fruktData },
  catering: { label: "Catering", data: cateringData },
  kantine: { label: "Kantine", data: kantineData },
  lunsj: { label: "Lunsj", data: lunsjData },
  inneklima: { label: "Inneklima", data: inneklimaData },
  renhold: { label: "Renhold", data: renholdData },
};

/**
 * Placeholder page for all sub-services (e.g. /tjenester/frukt/fruktkurv).
 * Renders title, description and image from the parent service's data.
 * Replace with dedicated content per subpage when ready.
 */
export function SubServicePage() {
  const { service, slug } = useParams<{ service: string; slug: string }>();
  const entry = service ? services[service] : undefined;
  const sub = entry?.data.subServices.find((s) => s.slug === slug);

  if (!entry || !sub) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center px-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Fant ikke siden
        </h1>
        <Link
          to="/"
          className="text-[#0078C4] font-medium inline-flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Til forsiden
        </Link>
      </div>
    );
  }

  const siblings = entry.data.subServices.filter((s) => s.slug !== sub.slug);

  return (
    <div className="min-h-screen bg-white">
      {/* Page heading */}
      <div className="max-w-[1280px] mx-auto px-8 pt-32 lg:pt-36">
        <Breadcrumb
          items={[
            { label: "Alle tjenester", to: "/tjenester" },
            { label: entry.label, to: entry.data.path },
            { label: sub.title },
          ]}
        />

        <h1 className="text-3xl lg:text-[40px] font-bold text-gray-900 leading-[1.15] tracking-tight mb-4">
          {sub.title}
        </h1>

        {sub.description && (
          <p className="text-base lg:text-[17px] text-gray-600 leading-relaxed max-w-[680px] mb-6">
            {sub.description}
          </p>
        )}

        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            to="/kontakt"
            className="bg-[#0078C4] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#0062a3] transition-colors inline-flex items-center justify-center gap-2"
          >
            Ta kontakt for tilbud
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Page content */}
      {sub.content && sub.content.length > 0 && (
        <section className="py-14 bg-white border-b border-gray-100">
          <div className="max-w-[1280px] mx-auto px-8 space-y-12">
            {sub.content.map((block, i) => (
              <ContentBlockView key={i} block={block} />
            ))}
          </div>
        </section>
      )}

      {/* More from this service */}
      {siblings.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-[1280px] mx-auto px-8">
            <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#0078C4] mb-2">
              Utforsk mer
            </p>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight mb-8">
              Mer innen {entry.label.toLowerCase()}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {siblings.map((s) => (
                <Link
                  key={s.slug}
                  to={`${entry.data.path}/${s.slug}`}
                  className="group border border-gray-200 rounded-xl p-5 flex items-center justify-between gap-3 hover:border-[#0078C4]/40 hover:shadow-[0_8px_24px_rgba(0,120,196,0.08)] transition-all duration-300"
                >
                  <span className="text-sm font-semibold text-gray-900">
                    {s.title}
                  </span>
                  <ArrowUpRight className="w-4 h-4 flex-shrink-0 text-gray-300 group-hover:text-[#0078C4] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <OtherServices currentPath={entry.data.path} />

      <CtaSection />
    </div>
  );
}

export function ContentBlockView({ block }: { block: ContentBlock }) {
  if (block.type === "text") {
    return (
      <div className="max-w-[780px]">
        {block.heading && (
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight mb-4">
            {block.heading}
          </h2>
        )}
        <div className="space-y-4">
          {block.paragraphs.map((p, i) => (
            <p key={i} className="text-[17px] text-gray-600 leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </div>
    );
  }

  if (block.type === "image") {
    return (
      <div className="rounded-2xl overflow-hidden max-w-[780px]">
        <img src={block.src} alt={block.alt ?? ""} className="w-full" />
      </div>
    );
  }

  if (block.type === "table") {
    return (
      <div>
        {block.heading && (
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight mb-5">
            {block.heading}
          </h2>
        )}
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          <table className="w-full text-[15px]">
            <tbody>
              {block.rows.map((row, i) => (
                <tr
                  key={i}
                  className={i % 2 === 1 ? "bg-[#f5f9fc]" : "bg-white"}
                >
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className={`px-4 py-3 align-top text-gray-700 ${
                        j === 0 ? "font-medium text-gray-900" : ""
                      } ${j === row.length - 1 ? "text-right whitespace-nowrap" : ""}`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {block.footnote && (
          <p className="text-sm text-gray-500 italic mt-3 leading-relaxed">
            {block.footnote}
          </p>
        )}
      </div>
    );
  }

  if (block.type === "bullets") {
    return (
      <div className="max-w-[780px]">
        {block.heading && (
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight mb-5">
            {block.heading}
          </h2>
        )}
        <ul className="space-y-3.5">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-[#f5f9fc] flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-3 h-3 text-[#0078C4]" strokeWidth={3} />
              </span>
              <span className="text-[15px] text-gray-700 leading-relaxed">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div>
      {block.heading && (
        <h2 className="text-2xl font-bold text-gray-900 tracking-tight mb-6">
          {block.heading}
        </h2>
      )}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {block.items.map((item, i) => (
          <div
            key={i}
            className="rounded-2xl border border-gray-200 overflow-hidden"
          >
            {item.image && (
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="p-5">
              <h3 className="text-base font-bold text-gray-900 tracking-tight mb-1.5">
                {item.title}
              </h3>
              {item.description && (
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
