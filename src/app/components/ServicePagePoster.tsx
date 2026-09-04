/**
 * "Poster" service-page template (2026-09-04) — the service pages' counterpart
 * to the homepage's Services section. Same data model as `ServicePage.tsx`
 * (`ServicePageData`), so a service switches templates by changing one import;
 * Frukt is the first to run on it.
 *
 * Section order is unchanged from the old template — it runs in the order a
 * buyer asks the questions:
 *   Hero (white, photo in a plain frame)  → promise strip (hairline grid)
 *   → explainer (brand-blue block)        → catalogs (numbered product grid)
 *   → benefits / sub-services / quote     → FAQ (ruled) → Les mer (ruled rows)
 *   → closing navy block with the other services as a numbered list.
 *
 * Skin: poster.tsx primitives, Lato Light display scale, hairline grids
 * instead of cards, `rounded-photo` frames, the service's accent colour
 * (lime for Frukt) as bars, plates and tags. GSAP reveals behind
 * reduced-motion, like everywhere else.
 */
import { useRef, type ReactNode } from "react";
import { ArrowRight, ArrowUpRight, Check, Download, Phone } from "lucide-react";
import { Link } from "react-router";
import { SERVICES } from "../../lib/services";
import { useDocumentMeta } from "../../lib/use-document-meta";
import { useParallax } from "../../lib/motion/useParallax";
import { useReveal } from "../../lib/motion/useReveal";
import { useSplitReveal } from "../../lib/motion/useSplitReveal";
import {
  ACCENT,
  Button,
  Index,
  Label,
  SECTION_Y,
  WRAP,
} from "./poster";
import {
  Breadcrumb,
  FaqList,
  type BenefitItem,
  type CatalogSection,
  type HeroPoint,
  type ReadMoreLink,
  type ServicePageData,
  type SubService,
} from "./ServicePage";

/* ---------- small pieces ---------- */

/** Section head: kicker + display-1 title left, proof/note right (12-col). */
function BlockHead({
  kicker,
  title,
  proof,
  note,
  onDark = false,
}: {
  kicker: string;
  title: string;
  proof?: string;
  note?: string;
  onDark?: boolean;
}) {
  return (
    <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-x-12">
      <div className="lg:col-span-7">
        <Label tone={onDark ? "white" : "navy"}>{kicker}</Label>
        <h2
          data-split
          className={"mt-5 display-1 max-w-[18ch] " + (onDark ? "text-white" : "text-navy")}
        >
          {title}
        </h2>
      </div>
      {(proof || note) && (
        <div className="lg:col-span-5 lg:pb-2">
          {proof && (
            <p
              className={
                "max-w-[44ch] text-[17px] leading-[1.55] " +
                (onDark ? "text-white/75" : "text-navy/65")
              }
            >
              {proof}
            </p>
          )}
          {note && (
            <p className={"mt-3 text-[15px] font-semibold " + (onDark ? "text-white" : "text-navy")}>
              {note}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

/** Hairline grid: cells separated by 1px lines, no cards. */
const RULED_GRID = "grid gap-px border border-navy/10 bg-navy/10";

/* ---------- blocks ---------- */

function PromiseStrip({ points, accent }: { points: HeroPoint[]; accent: string }) {
  return (
    <ul className={`${RULED_GRID} sm:grid-cols-2 lg:grid-cols-4`} data-reveal-stagger>
      {points.map((point, i) => (
        <li key={point.label} className="bg-white p-6 lg:p-8">
          <div className="flex items-center gap-3">
            <Index n={i + 1} className="text-[13px] text-navy/50" />
            <span aria-hidden="true" className={`h-[2px] w-6 ${accent}`} />
          </div>
          <p className="mt-5 font-lato text-[20px] leading-tight text-navy lg:text-[22px]">
            {point.label}
          </p>
          {point.body && (
            <p className="mt-2.5 text-[15px] leading-relaxed text-navy/65">{point.body}</p>
          )}
        </li>
      ))}
    </ul>
  );
}

function BenefitGrid({ items, accent }: { items: BenefitItem[]; accent: string }) {
  return (
    <ul className={`${RULED_GRID} mt-12 sm:grid-cols-2 lg:grid-cols-3`} data-reveal-stagger>
      {items.map((item, i) => {
        const Icon = item.icon ?? Check;
        return (
          <li key={item.label} className="bg-white p-6 lg:p-8">
            <div className="flex items-center justify-between">
              <Index n={i + 1} className="text-[13px] text-navy/50" />
              <span className={`flex h-9 w-9 items-center justify-center rounded-btn ${accent}`}>
                <Icon className="h-4 w-4 text-navy" strokeWidth={2.25} aria-hidden="true" />
              </span>
            </div>
            <h3 className="mt-5 font-lato text-[20px] leading-tight text-navy">{item.label}</h3>
            {item.body && (
              <p className="mt-2.5 text-[15px] leading-relaxed text-navy/65">{item.body}</p>
            )}
          </li>
        );
      })}
    </ul>
  );
}

function CatalogGrid({ catalog, accentBg }: { catalog: CatalogSection; accentBg: string }) {
  return (
    <div className={`${RULED_GRID} mt-12 sm:grid-cols-2 lg:grid-cols-3`} data-reveal-stagger>
      {catalog.items.map((item, i) => {
        const inner = (
          <>
            {item.image && (
              <div className="relative isolate aspect-[4/3] overflow-hidden rounded-photo bg-cloud">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  decoding="async"
                  className={
                    catalog.photo
                      ? "absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.03]"
                      : "absolute inset-0 h-full w-full object-contain p-6 mix-blend-multiply transition-transform duration-700 ease-out-expo group-hover:scale-[1.03]"
                  }
                />
                <span className="absolute left-3 top-3 inline-flex items-center rounded-btn bg-white px-2.5 py-1 text-[12px] font-semibold text-navy">
                  <Index n={i + 1} />
                </span>
                {item.tag && (
                  <span
                    className={`absolute right-3 top-3 inline-flex items-center rounded-btn px-2.5 py-1 text-[12px] font-semibold text-navy ${accentBg}`}
                  >
                    {item.tag}
                  </span>
                )}
              </div>
            )}
            <div className="mt-6 flex flex-1 flex-col">
              <h3 className="font-lato text-[24px] leading-tight text-navy transition-colors group-hover:text-brand lg:text-[26px]">
                {item.name}
              </h3>
              {item.spec && (
                <p className="mt-2 flex items-center gap-2 text-[13px] font-semibold text-navy">
                  <span aria-hidden="true" className={`h-2 w-2 flex-shrink-0 ${accentBg}`} />
                  {item.spec}
                </p>
              )}
              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-navy/65">
                {item.description}
              </p>
              {item.to && (
                <span className="mt-5 inline-flex items-center gap-2 text-[15px] font-semibold text-brand">
                  Les mer
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-1"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  />
                </span>
              )}
            </div>
          </>
        );
        const cell = "group flex flex-col bg-white p-5 lg:p-7";
        return item.to ? (
          <Link key={item.name} to={item.to} className={cell}>
            {inner}
          </Link>
        ) : (
          <div key={item.name} className={cell}>
            {inner}
          </div>
        );
      })}
    </div>
  );
}

function CatalogBand({ catalog }: { catalog: CatalogSection }) {
  return (
    <div className="mt-12 flex flex-col gap-6">
      {catalog.items.map((item) => {
        const inner = (
          <>
            {/* Same rule as the grid: real photographs cover, white-background
                cut-outs sit on the panel with the white multiplied away. */}
            <div className="relative isolate aspect-[4/3] overflow-hidden rounded-photo bg-white/60 sm:aspect-square">
              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
                decoding="async"
                className={
                  catalog.photo
                    ? "absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.03]"
                    : "absolute inset-0 h-full w-full object-contain p-5 mix-blend-multiply transition-transform duration-700 ease-out-expo group-hover:scale-[1.03]"
                }
              />
            </div>
            <div className="flex flex-col justify-center py-2 sm:py-4 sm:pr-4">
              {item.tag && <Label className="mb-4">{item.tag}</Label>}
              <h3 className="display-3 text-navy transition-colors group-hover:text-brand">
                {item.name}
              </h3>
              {item.spec && (
                <p className="mt-2 flex items-center gap-2 text-[13px] font-semibold text-navy">
                  <span aria-hidden="true" className="h-2 w-2 flex-shrink-0 bg-brand" />
                  {item.spec}
                </p>
              )}
              <p className="mt-4 max-w-[58ch] text-[16px] leading-relaxed text-navy/65">
                {item.description}
              </p>
              {item.to && (
                <span className="mt-6 inline-flex items-center gap-2 text-[15px] font-semibold text-brand">
                  Les mer
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-1"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  />
                </span>
              )}
            </div>
          </>
        );
        const cls =
          "group grid gap-6 rounded-photo bg-cloud p-5 sm:grid-cols-[minmax(0,18rem)_1fr] sm:gap-10 sm:p-6 lg:p-8";
        return item.to ? (
          <Link key={item.name} to={item.to} className={cls} data-reveal>
            {inner}
          </Link>
        ) : (
          <div key={item.name} className={cls} data-reveal>
            {inner}
          </div>
        );
      })}
    </div>
  );
}

function CatalogPanels({ catalog }: { catalog: CatalogSection }) {
  return (
    <div className={`${RULED_GRID} mt-12 sm:grid-cols-3`} data-reveal-stagger>
      {catalog.items.map((item, i) => (
        <div key={item.name} className="bg-white p-6 lg:p-8">
          <Index n={i + 1} className="text-[13px] text-navy/50" />
          <h3 className="mt-4 font-lato text-[22px] leading-tight text-navy">{item.name}</h3>
          <p className="mt-3 text-[15px] leading-relaxed text-navy/65">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

function SubServiceGrid({ base, items }: { base: string; items: SubService[] }) {
  return (
    <div
      className={
        `${RULED_GRID} mt-12 sm:grid-cols-2` + (items.length > 2 ? " lg:grid-cols-3" : "")
      }
      data-reveal-stagger
    >
      {items.map((sub, i) => (
        <Link key={sub.slug} to={`${base}/${sub.slug}`} className="group flex flex-col bg-white p-5 lg:p-7">
          <div className="relative aspect-[4/3] overflow-hidden rounded-photo bg-cloud">
            <img
              src={sub.image}
              alt=""
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.03]"
            />
            <span className="absolute left-3 top-3 inline-flex items-center rounded-btn bg-white px-2.5 py-1 text-[12px] font-semibold text-navy">
              <Index n={i + 1} />
            </span>
          </div>
          <h3 className="mt-6 font-lato text-[24px] leading-tight text-navy transition-colors group-hover:text-brand">
            {sub.title}
          </h3>
          <p className="mt-3 flex-1 text-[15px] leading-relaxed text-navy/65">{sub.description}</p>
          <span className="mt-5 inline-flex items-center gap-2 text-[15px] font-semibold text-brand">
            Les mer
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-1"
              strokeWidth={2.5}
              aria-hidden="true"
            />
          </span>
        </Link>
      ))}
    </div>
  );
}

function ReadMoreRows({ links }: { links: ReadMoreLink[] }) {
  return (
    <div className="mt-10">
      {links.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          data-reveal
          className="group grid grid-cols-[1fr_auto] items-center gap-x-5 gap-y-2 border-t border-navy/10 py-6 last:border-b lg:grid-cols-[7rem_1fr_auto] lg:gap-x-8 lg:py-7"
        >
          {link.image ? (
            <span className="order-last h-16 w-24 overflow-hidden rounded-photo bg-cloud lg:order-none lg:h-20 lg:w-28">
              <img
                src={link.image}
                alt=""
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.04]"
              />
            </span>
          ) : (
            <span className="hidden lg:block" />
          )}
          <span className="min-w-0 col-span-2 lg:col-span-1">
            <span className="block display-3 text-navy transition-colors group-hover:text-brand">
              {link.label}
            </span>
            {link.description && (
              <span className="mt-1.5 block max-w-[60ch] text-[15px] leading-relaxed text-navy/65">
                {link.description}
              </span>
            )}
          </span>
          <ArrowUpRight
            className="hidden h-5 w-5 text-navy/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand lg:block"
            strokeWidth={2.5}
            aria-hidden="true"
          />
        </Link>
      ))}
    </div>
  );
}

/** Navy close: the payoff line, the action, and the other services as a numbered list. */
function PosterServiceFooter({ currentPath }: { currentPath: string }) {
  const others = SERVICES.filter((s) => s.href !== currentPath);
  return (
    <section className={`bg-navy text-white ${SECTION_Y}`}>
      <div className={`${WRAP} grid gap-14 lg:grid-cols-12 lg:gap-x-16`}>
        <div className="lg:col-span-6">
          <Label tone="white">Neste steg</Label>
          {/* The brand's own line, in the payoff face. */}
          <h2
            data-reveal
            className="payoff-marker font-payoff mt-5 text-[clamp(2.5rem,6vw,5.5rem)] font-bold leading-[0.95] text-white"
          >
            Bli <span className="text-amber">Helt Opplagt</span>
          </h2>
          <p className="mt-6 max-w-[44ch] text-[17px] leading-[1.55] text-white/75">
            Én leverandør, én kontaktperson, én faktura. Fortell oss hvordan dere
            har det på jobben, så setter vi sammen et forslag som passer.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            <Button to="/kontakt" variant="white" size="lg" arrow>
              Snakk med oss
            </Button>
            <a
              href="tel:+4702346"
              className="inline-flex items-center gap-2 text-[16px] font-semibold text-white transition-colors hover:text-aqua"
            >
              <Phone className="h-4 w-4 text-aqua" strokeWidth={2.5} aria-hidden="true" />
              02346
            </a>
          </div>
        </div>

        <nav aria-label="Andre tjenester" className="lg:col-span-5 lg:col-start-8">
          <Label tone="white">Andre tjenester</Label>
          <ul className="mt-4">
            {others.map((s, i) => (
              <li key={s.href}>
                <Link
                  to={s.href}
                  className="group flex items-baseline justify-between gap-4 border-b border-white/15 py-4 lg:py-5"
                >
                  <span className="flex items-baseline gap-4">
                    <Index n={i + 1} className="text-[13px] text-white/50" />
                    <span className="display-3 transition-colors group-hover:text-aqua">{s.name}</span>
                  </span>
                  <ArrowRight
                    className="h-5 w-5 flex-shrink-0 self-center text-white/40 transition-all duration-300 ease-out-expo group-hover:translate-x-1 group-hover:text-aqua"
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}

/* ---------- the page ---------- */

export function ServicePagePoster({ data }: { data: ServicePageData }) {
  const ref = useRef<HTMLDivElement>(null);
  const service = SERVICES.find((s) => s.href === data.path);
  const serviceLabel = service?.name ?? data.badge;
  const index = service ? SERVICES.indexOf(service) + 1 : 0;
  const accent = ACCENT[service?.accent ?? "amber"];

  useDocumentMeta(serviceLabel, data.intro);
  useSplitReveal(ref);
  useReveal(ref, { stagger: 0.08 });
  useParallax(ref, { amount: 6 });

  const lowerLabel = serviceLabel.toLowerCase();

  /* Every block is optional; nothing renders an empty section. Blocks
     alternate white / white-with-hairline so the page reads as one sheet. */
  const blocks: { key: string; node: ReactNode; ground?: "white" | "brand" }[] = [];

  if (data.explainer) {
    const ex = data.explainer;
    blocks.push({
      key: "explainer",
      ground: "brand",
      node: (
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-x-16">
          <div className="lg:col-span-6">
            <Label tone="white">Om tjenesten</Label>
            <h2 data-split className="mt-5 display-1 max-w-[16ch] text-white">
              {ex.heading ?? "Hva tilbyr vi"}
            </h2>
            {ex.body.map((p, n) => (
              <p key={n} data-reveal className="mt-6 max-w-[54ch] text-[17px] leading-[1.6] text-white">
                {p}
              </p>
            ))}
            {ex.points && ex.points.length > 0 && (
              <ul data-reveal-stagger className="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {ex.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-[16px] font-medium text-white">
                    <span aria-hidden="true" className="mt-2 h-2.5 w-2.5 flex-shrink-0 bg-amber" />
                    {point}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="lg:col-span-6">
            <div className="aspect-[4/3] overflow-hidden rounded-photo bg-navy/20">
              <img
                src={ex.image}
                alt={ex.imageAlt}
                data-parallax
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      ),
    });
  }

  if (data.benefits) {
    blocks.push({
      key: "benefits",
      node: (
        <>
          <BlockHead kicker="Hvorfor" title={data.benefits.heading} proof={data.benefits.proof} />
          <BenefitGrid items={data.benefits.items} accent={accent.bg} />
        </>
      ),
    });
  }

  (data.catalogs ?? []).forEach((catalog, i) => {
    blocks.push({
      key: `catalog-${i}`,
      node: (
        <>
          <BlockHead
            kicker={i === 0 ? "Utvalget" : catalog.heading}
            title={catalog.heading}
            proof={catalog.proof}
            note={catalog.note}
          />
          {catalog.layout === "panels" ? (
            <CatalogPanels catalog={catalog} />
          ) : catalog.layout === "band" ? (
            <CatalogBand catalog={catalog} />
          ) : (
            <CatalogGrid catalog={catalog} accentBg={accent.bg} />
          )}
          {catalog.link && (
            <div className="mt-10">
              <Button to={catalog.link.to} variant="outline" arrow>
                {catalog.link.label}
              </Button>
            </div>
          )}
        </>
      ),
    });
  });

  if (data.subServices.length > 0 && !data.hideSubServiceCards) {
    blocks.push({
      key: "subservices",
      node: (
        <>
          <BlockHead
            kicker="Dette leverer vi"
            title={data.subServicesHeading ?? `Dette leverer vi innen ${lowerLabel}`}
            proof={data.subServicesProof}
          />
          <SubServiceGrid base={data.path} items={data.subServices} />
        </>
      ),
    });
  }

  if (data.quote) {
    blocks.push({
      key: "quote",
      node: (
        <figure className="grid gap-8 lg:grid-cols-12 lg:gap-x-16">
          <div className="lg:col-span-3">
            <Label>Kundene våre</Label>
          </div>
          <div className="lg:col-span-9">
            <span
              aria-hidden="true"
              className="block font-lato text-[5rem] font-black leading-[0.5] text-amber lg:text-[7rem]"
            >
              “
            </span>
            <blockquote className="mt-2 quote-scale max-w-[52ch] text-navy">{data.quote.text}</blockquote>
            <figcaption className="mt-8 border-t border-navy/10 pt-5 text-[15px]">
              <span className="font-semibold text-navy">{data.quote.name}</span>
              <span className="block text-navy/55">
                {data.quote.role}
                {data.quote.company ? `, ${data.quote.company}` : ""}
              </span>
            </figcaption>
          </div>
        </figure>
      ),
    });
  }

  if (data.faq && data.faq.length > 0) {
    blocks.push({
      key: "faq",
      node: (
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-x-16">
          <div className="lg:col-span-4">
            <Label>Spørsmål og svar</Label>
            <h2 data-split className="mt-5 display-1 text-navy">
              {data.faqHeading ?? "Spørsmål vi ofte får"}
            </h2>
            {data.faqProof && (
              <p className="mt-6 max-w-[36ch] text-[17px] leading-[1.55] text-navy/65">{data.faqProof}</p>
            )}
          </div>
          <div className="lg:col-span-8 [&>div]:mt-0 [&>div]:max-w-none">
            <FaqList items={data.faq} />
          </div>
        </div>
      ),
    });
  }

  if (data.readMore && data.readMore.length > 0) {
    blocks.push({
      key: "readmore",
      node: (
        <>
          <BlockHead kicker="Videre lesning" title={data.readMoreHeading ?? "Les mer"} />
          <ReadMoreRows links={data.readMore} />
        </>
      ),
    });
  }

  return (
    <div ref={ref} className="min-h-dvh bg-white">
      {/* Hero: copy left, the photograph in a plain frame right, both on white. */}
      <section className={`${WRAP} grid items-center gap-y-10 pb-16 pt-10 lg:grid-cols-12 lg:gap-x-16 lg:pb-24 lg:pt-14`}>
        <div className="lg:col-span-6">
          {/* The shared breadcrumb carries its own mb-5. */}
          <Breadcrumb items={[{ label: "Alle tjenester", to: "/tjenester" }, { label: serviceLabel }]} />
          <div className="mt-4 flex items-center gap-4">
            <Label>{data.badge}</Label>
            {index > 0 && (
              <span className="flex items-center gap-2 text-[13px] text-navy/50">
                <span aria-hidden="true" className={`h-2 w-2 ${accent.bg}`} />
                <Index n={index} /> / <Index n={SERVICES.length} />
              </span>
            )}
          </div>
          <h1 data-split className="mt-5 display-hero text-navy">
            {data.title}
          </h1>
          {data.subtitle && (
            <p data-reveal className="mt-6 max-w-[30ch] font-lato text-[24px] leading-tight text-navy lg:text-[28px]">
              {data.subtitle}
            </p>
          )}
          <p data-reveal className="mt-5 max-w-[44ch] text-[17px] leading-[1.55] text-navy/65">
            {data.intro}
          </p>
          <div data-reveal className="mt-9 flex flex-col gap-3 sm:flex-row">
            {/* Same label as the closing block's: both go to /kontakt with the
                same intent, so two wordings would read as two offers. */}
            <Button to="/kontakt" size="lg" arrow>
              Snakk med oss
            </Button>
            {data.brochureUrl && (
              <Button
                href={data.brochureUrl}
                variant="outline"
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
                Last ned brosjyren
              </Button>
            )}
          </div>
        </div>

        <div data-reveal className="lg:col-span-6">
          <div className="relative aspect-[4/3] overflow-hidden rounded-photo bg-cloud lg:aspect-[4/5] lg:max-h-[calc(100svh-8rem)]">
            <img
              src={data.heroImage ?? data.image}
              alt={data.imageAlt}
              data-parallax
              /* The page's LCP element: never lazy. Lowercase because React 18
                 does not recognise the camelCase `fetchPriority` prop. */
              {...({ fetchpriority: "high" } as Record<string, string>)}
              decoding="async"
              className="h-full w-full object-cover"
            />
            <span
              className={`absolute bottom-4 left-4 inline-flex items-center gap-3 rounded-btn px-4 py-2 text-[13px] font-semibold text-navy ${accent.bg}`}
            >
              {index > 0 && <Index n={index} />}
              {serviceLabel}
            </span>
          </div>
        </div>
      </section>

      {/* The promise strip: the argument at a glance, as a hairline grid. */}
      {data.heroPoints && data.heroPoints.length > 0 && (
        <section className={`${WRAP} pb-20 lg:pb-28`}>
          <PromiseStrip points={data.heroPoints} accent={accent.bg} />
        </section>
      )}

      {blocks.map((block, i) => {
        const brand = block.ground === "brand";
        const first = i === 0;
        return (
          <section
            key={block.key}
            className={
              brand
                ? `bg-brand text-white ${SECTION_Y}`
                : `bg-white ${SECTION_Y}` + (first ? "" : " border-t border-navy/10")
            }
          >
            <div className={WRAP}>{block.node}</div>
          </section>
        );
      })}

      <PosterServiceFooter currentPath={data.path} />
    </div>
  );
}
