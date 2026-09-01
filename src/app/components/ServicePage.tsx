/**
 * "Opplagt" — the service-page template (2026-09-01 refresh).
 *
 * One template carries all six services (/tjenester/*). The section ORDER is
 * unchanged from the previous template — it runs in the order a buyer asks
 * the questions:
 *   Hero + promise strip  (what is this, and the facts at a glance)
 *   Explainer             (what it actually is, plainly)
 *   Catalogs              (what can I get — the brochure's own spreads)
 *   Benefits              (why should I care)
 *   FAQ                   (what else)
 *   Les mer + ServiceFooter (deeper reading, then act)
 *
 * The skin is the homepage's Opplagt system: Lato Light display headings,
 * pill actions, white rounded-[1.5rem] cards, and section grounds alternating
 * white ↔ cloud with no seams or curves. Every coloured section carries ONE
 * puzzle motif (the brand's own logo piece, masked and tinted) — filled
 * variants behind the content, outline variants over a corner, never over
 * running text, always bleeding off an edge with its own rotation and size.
 */
import { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, ArrowUpRight, Check, ChevronRight, Download, Phone, Plus } from "lucide-react";
import { Link } from "react-router";
import { CONTAINER, Pill } from "./site";
import { useDocumentMeta } from "../../lib/use-document-meta";

export const allServices = [
  { label: "Lunsj", to: "/tjenester/lunsj" },
  { label: "Kantine", to: "/tjenester/kantine" },
  { label: "Frukt", to: "/tjenester/frukt" },
  { label: "Catering", to: "/tjenester/catering" },
  { label: "Inneklima", to: "/tjenester/inneklima" },
  { label: "Renhold", to: "/tjenester/renhold" },
];

/**
 * The puzzle-motif set for coloured sections, cycled in order. Every instance
 * carries its own rotation, size, corner and colour, because repeats of one
 * shape at one angle read as a stamp rather than as texture.
 */
const MOTIFS = [
  "livery-puzzle-outline aspect-[100/129] -right-12 -bottom-10 w-40 rotate-[22deg] bg-brand/25 lg:-right-6 lg:w-56",
  "livery-puzzle aspect-[100/129] -right-20 top-10 w-48 rotate-[9deg] bg-lime/15 lg:-right-12 lg:w-64",
  "livery-puzzle-outline aspect-[100/129] -left-14 -bottom-8 w-36 -rotate-[12deg] bg-navy/20 lg:-left-8 lg:w-52",
  "livery-puzzle-outline aspect-[100/129] -right-14 top-8 w-40 rotate-[15deg] bg-brand/20 lg:-right-8 lg:w-56",
];

/** Small breadcrumb trail, e.g. Alle tjenester / Frukt / Jobbsmoothie */
export function Breadcrumb({
  items,
}: {
  items: { label: string; to?: string }[];
}) {
  return (
    <nav
      aria-label="Brødsmulesti"
      className="mb-5 flex flex-wrap items-center gap-1.5 text-[13px]"
    >
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5">
          {i > 0 && (
            <ChevronRight className="h-3.5 w-3.5 text-navy/30" aria-hidden="true" />
          )}
          {item.to ? (
            <Link
              to={item.to}
              className="text-navy/55 transition-colors hover:text-brand"
            >
              {item.label}
            </Link>
          ) : (
            <span className="font-semibold text-navy">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

/**
 * The per-section heading: a light Lato display line with one plain proof
 * caption beneath. The template's counterpart to the homepage SectionHead,
 * without a kicker — the page's sections answer questions, they don't need
 * department labels.
 */
function Head({ title, proof }: { title: string; proof?: string }) {
  return (
    <div className="max-w-[46rem]">
      <h2 className="font-lato text-[26px] font-light leading-[1.15] tracking-[-0.01em] text-navy sm:text-[32px] lg:text-[38px]">
        {title}
      </h2>
      {proof && (
        <p className="mt-3 max-w-[52ch] text-[15px] leading-relaxed text-navy/60">
          {proof}
        </p>
      )}
    </div>
  );
}

/**
 * The service-page footer. ONE section carrying both the closing call to
 * action and the cross-links to the other services.
 *
 * It is identical on every service page by design, including the copy: the
 * headline, the supporting line and the button never change per service, so
 * the foot of the site is a fixed landmark rather than six variations. The
 * only thing that differs is which five services are listed.
 */
export function ServiceFooter({
  currentPath,
  ground = "white",
}: {
  currentPath: string;
  ground?: "white" | "sky";
}) {
  const others = allServices.filter((s) => s.to !== currentPath);
  const sky = ground === "sky";

  return (
    <section
      className={
        "relative isolate overflow-hidden " +
        (sky ? "bg-cloud py-[4.5rem] lg:py-[6rem]" : "bg-white py-16 lg:py-20")
      }
    >
      {sky && (
        <span
          aria-hidden="true"
          className="livery-puzzle-outline aspect-[100/129] -right-16 -top-10 w-40 rotate-[18deg] bg-brand/20 lg:-right-8 lg:w-56"
        />
      )}

      <div className={`${CONTAINER} relative z-10`}>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            {/* The brand's own line, in the payoff face. */}
            <h2 className="payoff-marker font-payoff text-[30px] font-bold leading-[1.1] text-navy sm:text-[38px] lg:text-[44px]">
              Bli <span className="text-brand">Helt Opplagt</span>
            </h2>
            <p className="mt-4 max-w-[48ch] text-[16px] leading-relaxed text-navy/65">
              Én leverandør, én kontaktperson, én faktura. Fortell oss hvordan
              dere har det på jobben, så setter vi sammen et forslag som passer.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-shrink-0 sm:flex-row sm:items-center">
            <Pill to="/kontakt">
              Snakk med oss
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </Pill>
            <a
              href="tel:+4702346"
              className="inline-flex items-center gap-2 text-[15px] font-semibold text-navy transition-colors hover:text-brand"
            >
              <Phone className="h-4 w-4 text-brand" strokeWidth={2.5} aria-hidden="true" />
              02346
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-navy/10 pt-9">
          <h3 className="text-[16px] font-semibold text-navy">
            Andre tjenester
          </h3>
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {others.map((s) => (
              <Link
                key={s.to}
                to={s.to}
                className={
                  "group flex items-center justify-between gap-3 rounded-[1.25rem] bg-white px-5 py-4 transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-8px_rgba(13,43,64,0.18)] " +
                  (sky
                    ? "shadow-[0_1px_2px_rgba(13,43,64,0.06)]"
                    : "border border-navy/10")
                }
              >
                <span className="text-[15px] font-semibold text-navy transition-colors group-hover:text-brand">
                  {s.label}
                </span>
                <ArrowUpRight
                  className="h-4 w-4 flex-shrink-0 text-navy/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand"
                  strokeWidth={2.5}
                />
              </Link>
            ))}
          </div>
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

/**
 * One promise in the strip directly under the hero: the few operational facts
 * a buyer wants confirmed before they read anything else.
 *
 * This is the template's reusable hero device. Every service supplies three or
 * four; the strip is what makes the offer legible in the first viewport
 * without overloading the hero's own stack.
 */
export interface HeroPoint {
  label: string;
  body?: string;
  icon?: LucideIcon;
}

/** One benefit: a short label, one supporting line, one icon. */
export interface BenefitItem {
  label: string;
  body?: string;
  icon?: LucideIcon;
}

/**
 * The plain-language explanation of the service, directly under the hero:
 * what it actually is, and how it works, in as few words as possible.
 * Copy left, photograph right.
 */
export interface Explainer {
  /**
   * Defaults to "Hva tilbyr vi" and should stay that way: the same question in
   * the same slot on all six service pages is what makes the structure
   * repeatable. Only override it if a service genuinely cannot answer that
   * question.
   */
  heading?: string;
  /** One or two short paragraphs. Never more. */
  body: string[];
  /** Short checked lines: how it works, one fact each. */
  points?: string[];
  image: string;
  imageAlt: string;
}

/** One entry in the "Les mer" section at the foot of the page. */
export interface ReadMoreLink {
  label: string;
  description?: string;
  to: string;
}

/** Why this service pays off. The page's main argument. */
export interface BenefitBand {
  heading: string;
  proof?: string;
  items: BenefitItem[];
}

/** One expandable question at the foot of the page. */
export interface FaqItem {
  question: string;
  answer: ReactNode;
}

/** One product in a catalog section, e.g. a single fruit basket. */
export interface CatalogItem {
  name: string;
  description: string;
  /**
   * A cut-out product photo with a baked-in white background (not a
   * transparent PNG). The photo plate composites it with `mix-blend-multiply`
   * so the white drops out against the tinted ground. Absent for the "panels"
   * layout, which is text only.
   */
  image?: string;
  /** Small tag carried over from the printed brochure, e.g. "Populær". */
  tag?: string;
  /** One short checked fact under the description, e.g. "Ny kurv hver uke". */
  spec?: string;
}

/**
 * A catalog section, lifted from the printed fruit brochure.
 *
 * The brochure's maroon-and-orange palette does NOT come with the layout;
 * these render in the DESIGN.md palette.
 */
export interface CatalogSection {
  heading: string;
  proof?: string;
  /** The brochure's emphasised one-liner under the lede. */
  note?: string;
  items: CatalogItem[];
  /**
   * "panels" = three text-only panels, centred, as on the brochure's
   *   "Variasjon og fleksibilitet" spread. The overview before the detail.
   * "grid"   = three-across product cards, the main catalog.
   * "band"   = one wide horizontal row, for a single supporting product that
   *   would look overblown as a full card section of its own.
   */
  layout?: "panels" | "grid" | "band";
  link?: { label: string; to: string };
}

export interface ServicePageData {
  /** Category badge, e.g. "Helse & Trivsel". Retained for sub-page context. */
  badge: string;
  title: ReactNode;
  /** Short bold line between the headline and the lede, e.g. "Fersk frukt på kontoret. Levert daglig." */
  subtitle?: string;
  intro: string;
  /** Card/thumbnail image. Also the opening photo when `heroImage` is absent. */
  image: string;
  imageAlt: string;
  /** Full-bleed opening photograph — the service as it arrives at the customer. */
  heroImage?: string;
  /** Link to brochure PDF, shown as a secondary action in the opening panel */
  brochureUrl?: string;
  /** The promise strip directly under the hero. Three or four points. */
  heroPoints?: HeroPoint[];
  /** Plain-language "what this is", copy left and photo right. Renders first. */
  explainer?: Explainer;
  /** "Les mer" links at the foot of the page: deeper reading on this service. */
  readMore?: ReadMoreLink[];
  readMoreHeading?: string;
  /**
   * A short brand statement closing the page, above the final action.
   * e.g. "Sunnere. Renere. Enklere."
   */
  closingStatement?: string;
  benefits?: BenefitBand;
  /** Product catalogs from the brochure. Render first, right under the hero. */
  catalogs?: CatalogSection[];
  /** Link out of the "Slik jobber vi" section, e.g. to a routines sub-page. */
  processLink?: { label: string; to: string };
  /** Suppress the sub-service card grid when catalogs already cover it. */
  hideSubServiceCards?: boolean;
  /** Expandable questions, rendered as the last content section. */
  faq?: FaqItem[];
  faqHeading?: string;
  faqProof?: string;
  subServicesHeading?: string;
  subServicesProof?: string;
  /** Sub-service cards, mirroring the structure of heltopplagt.no */
  subServices: SubService[];
  quote?: { text: string; name: string; role: string; company?: string };
  /** Path of this page, used as base for sub-service links */
  path: string;
}

/** Sub-service card — the homepage service-card grammar, reused verbatim. */
function SubServiceCard({ to, sub }: { to: string; sub: SubService }) {
  return (
    <Link
      to={to}
      className="group flex flex-col overflow-hidden rounded-[1.5rem] bg-white shadow-[0_1px_2px_rgba(13,43,64,0.06)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-12px_rgba(13,43,64,0.18)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={sub.image}
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="font-lato text-[20px] font-bold text-navy sm:text-[22px]">
          {sub.title}
        </h3>
        <p className="mt-2.5 flex-1 text-[15px] leading-relaxed text-navy/60">
          {sub.description}
        </p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold text-brand">
          Les mer
          <ArrowRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            strokeWidth={2.5}
          />
        </span>
      </div>
    </Link>
  );
}

function CatalogSectionView({ catalog }: { catalog: CatalogSection }) {
  /*
     Cards are white with the same soft resting shadow as the homepage service
     cards, so the card grids across the site are one component in two places.
     The photo cell stays white for the multiply blend, and `object-contain`
     keeps each basket whole where `cover` would crop it.
  */
  return (
    <>
      <Head title={catalog.heading} proof={catalog.proof} />

      {catalog.note && (
        <p className="mt-5 max-w-[70ch] text-[15px] font-semibold text-brand">
          {catalog.note}
        </p>
      )}

      {catalog.layout === "panels" ? (
        /* The brochure's overview spread: three text-only panels, centred.
           No photographs by design, exactly as it is printed. */
        <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {catalog.items.map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-center rounded-[1.5rem] bg-white px-6 py-9 text-center shadow-[0_1px_2px_rgba(13,43,64,0.06)]"
            >
              <h3 className="font-lato text-[20px] font-bold leading-tight text-navy">
                {item.name}
              </h3>
              <p className="mt-3.5 max-w-[30ch] text-[15px] leading-relaxed text-navy/65">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      ) : catalog.layout === "band" ? (
        <div className="mt-9 flex flex-col gap-5">
          {catalog.items.map((item) => (
            <div
              key={item.name}
              className="grid overflow-hidden rounded-[1.5rem] bg-white shadow-[0_1px_2px_rgba(13,43,64,0.06)] sm:grid-cols-[minmax(0,14rem)_1fr] sm:items-center"
            >
              <div className="relative isolate aspect-[4/3] bg-white sm:aspect-square">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-contain p-4 mix-blend-multiply"
                />
              </div>
              <div className="p-6 sm:py-7 sm:pl-6 sm:pr-8">
                {item.tag && (
                  <span className="mb-3 inline-flex rounded-full bg-amber/15 px-3.5 py-1 text-[12px] font-semibold text-navy">
                    {item.tag}
                  </span>
                )}
                <h3 className="font-lato text-[20px] font-bold leading-tight text-navy">
                  {item.name}
                </h3>
                <p className="mt-2.5 max-w-[58ch] text-[15px] leading-relaxed text-navy/65">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {catalog.items.map((item) => (
            <div
              key={item.name}
              className="flex flex-col overflow-hidden rounded-[1.5rem] bg-white shadow-[0_1px_2px_rgba(13,43,64,0.06)]"
            >
              {/*
                The produce plate. A fixed height, not an aspect ratio: these
                cut-outs vary in proportion, so a ratio made the cards tall and
                uneven. `isolate` keeps the multiply blend from reaching past
                this plate into the card behind it.
              */}
              <div className="relative isolate h-44 bg-white">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-contain p-4 mix-blend-multiply"
                />
              </div>

              <div className="flex flex-1 flex-col items-center p-6 text-center">
                {item.tag && (
                  <span className="mb-3 inline-flex rounded-full bg-amber/15 px-3.5 py-1 text-[12px] font-semibold text-navy">
                    {item.tag}
                  </span>
                )}
                <h3 className="font-lato text-[19px] font-bold leading-tight text-navy">
                  {item.name}
                </h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-navy/65">
                  {item.description}
                </p>
                {item.spec && (
                  <p className="mt-3.5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-navy">
                    <Check
                      className="h-3.5 w-3.5 flex-shrink-0 text-lime"
                      strokeWidth={3}
                      aria-hidden="true"
                    />
                    {item.spec}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {catalog.link && (
        <div className="mt-8">
          <Pill to={catalog.link.to} variant="outline">
            {catalog.link.label}
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
          </Pill>
        </div>
      )}
    </>
  );
}

/**
 * The promise strip, attached to the foot of the hero.
 *
 * Deliberately inside the hero section but below its grid: the hero's own
 * stack stays at headline, lede and actions, while the strip carries the three
 * or four operational facts that make the offer legible at a glance.
 */
function HeroPointStrip({ points }: { points: HeroPoint[] }) {
  return (
    <ul className="grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-4">
      {points.map((point) => {
        const Icon = point.icon ?? Check;
        return (
          <li key={point.label} className="flex gap-3.5">
            <span
              aria-hidden="true"
              className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand/10"
            >
              <Icon className="h-4.5 w-4.5 text-brand" strokeWidth={2.25} />
            </span>
            <div className="min-w-0">
              <p className="text-[15px] font-semibold leading-snug text-navy">
                {point.label}
              </p>
              {point.body && (
                <p className="mt-1.5 text-[14px] leading-relaxed text-navy/60">
                  {point.body}
                </p>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
}

/**
 * The benefit grid: the page's main argument, one icon and one line each.
 * Borderless on the ground rather than in cards — the catalog sections are
 * already carded, and two card walls in a row read as tiles.
 */
function BenefitGrid({ items }: { items: BenefitItem[] }) {
  return (
    <ul className="mt-10 grid grid-cols-1 gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => {
        const Icon = item.icon ?? Check;
        return (
          <li key={item.label}>
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand/10">
              <Icon
                className="h-5 w-5 text-brand"
                strokeWidth={2}
                aria-hidden="true"
              />
            </span>
            <h3 className="mt-4 text-[16px] font-semibold leading-tight text-navy">
              {item.label}
            </h3>
            {item.body && (
              <p className="mt-2 max-w-[42ch] text-[15px] leading-relaxed text-navy/60">
                {item.body}
              </p>
            )}
          </li>
        );
      })}
    </ul>
  );
}

/**
 * "Les mer": the deeper reading on this service, collected in one place
 * instead of trailing off each section as a stray link.
 */
function ReadMoreList({ links }: { links: ReadMoreLink[] }) {
  return (
    <div className="mt-9 max-w-[900px]">
      {links.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          className="group flex items-center justify-between gap-6 border-b border-navy/10 py-5 first:border-t first:border-navy/10"
        >
          <span className="min-w-0">
            <span className="block text-[16px] font-semibold leading-snug text-navy transition-colors group-hover:text-brand">
              {link.label}
            </span>
            {link.description && (
              <span className="mt-1 block text-[15px] leading-relaxed text-navy/60">
                {link.description}
              </span>
            )}
          </span>
          <ArrowUpRight
            className="h-5 w-5 flex-shrink-0 text-navy/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand"
            strokeWidth={2.5}
            aria-hidden="true"
          />
        </Link>
      ))}
    </div>
  );
}

/**
 * Expandable questions. Native <details>/<summary> rather than a JS disclosure:
 * keyboard and screen-reader behaviour comes free, it survives with JS off, and
 * the browser's own find-in-page can open a closed answer.
 *
 * Rules, not boxes — a hairline between each row, no card, no fill. The plus
 * rotates 45° into a close mark; that is the section's only motion.
 */
function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="mt-10 max-w-[900px]">
      {items.map((item, i) => (
        <details
          key={i}
          className="group border-b border-navy/10 first:border-t first:border-navy/10"
        >
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-[16px] font-semibold leading-snug text-navy transition-colors hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand [&::-webkit-details-marker]:hidden">
            <span>{item.question}</span>
            <Plus
              className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand transition-transform duration-300 group-open:rotate-45"
              strokeWidth={2.5}
              aria-hidden="true"
            />
          </summary>
          <div className="max-w-[68ch] pb-6 text-[15px] leading-relaxed text-navy/70">
            {item.answer}
          </div>
        </details>
      ))}
    </div>
  );
}

export function ServicePage({ data }: { data: ServicePageData }) {
  const serviceLabel =
    allServices.find((s) => s.to === data.path)?.label ?? data.badge;

  useDocumentMeta(serviceLabel, data.intro);

  const lowerLabel = serviceLabel.toLowerCase();

  /*
   * The visitor's order of questions:
   *   what is this actually  → the explainer
   *   why should I bother    → the benefit grid
   *   what can I get         → the catalogs
   *   what else do I ask     → the FAQ
   *   where do I read more   → the "Les mer" links
   *
   * Every entry is optional, so a service that has only its sub-service cards
   * still reads as a finished page; nothing renders an empty section.
   */
  const blocks: ReactNode[] = [];

  if (data.explainer) {
    const ex = data.explainer;
    blocks.push(
      /* `auto` on the image column, not a fraction: the photograph is a
         supporting detail here, so it takes only the width it is given and
         the copy keeps the rest. */
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
        <div>
          <h2 className="max-w-[20ch] font-lato text-[26px] font-light leading-[1.15] tracking-[-0.01em] text-navy sm:text-[32px] lg:text-[38px]">
            {ex.heading ?? "Hva tilbyr vi"}
          </h2>
          {ex.body.map((p, n) => (
            <p
              key={n}
              className="mt-5 max-w-[54ch] text-[16px] leading-relaxed text-navy/70"
            >
              {p}
            </p>
          ))}
          {ex.points && ex.points.length > 0 && (
            <ul className="mt-8 grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
              {ex.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-lime/15">
                    <Check
                      className="h-3.5 w-3.5 text-lime"
                      strokeWidth={3}
                      aria-hidden="true"
                    />
                  </span>
                  <span className="text-[15px] leading-relaxed text-navy/75">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* The explainer photo takes the arch — the site's signature shape. */}
        <div className="relative aspect-[4/5] w-full max-w-[380px] overflow-hidden rounded-t-full rounded-b-[1.5rem] lg:w-[280px] xl:w-[320px]">
          <img
            src={ex.image}
            alt={ex.imageAlt}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    );
  }

  if (data.benefits) {
    blocks.push(
      <>
        <Head title={data.benefits.heading} proof={data.benefits.proof} />
        <BenefitGrid items={data.benefits.items} />
      </>
    );
  }

  (data.catalogs ?? []).forEach((catalog) => {
    blocks.push(<CatalogSectionView catalog={catalog} />);
  });

  if (data.subServices.length > 0 && !data.hideSubServiceCards) {
    blocks.push(
      <>
        <Head
          title={data.subServicesHeading ?? `Dette leverer vi innen ${lowerLabel}`}
          proof={data.subServicesProof}
        />
        <div
          className={
            "mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2" +
            /* two cards stranded in a three-column grid read as a gap, not a pair */
            (data.subServices.length > 2 ? " lg:grid-cols-3" : "")
          }
        >
          {data.subServices.map((sub) => (
            <SubServiceCard
              key={sub.slug}
              to={`${data.path}/${sub.slug}`}
              sub={sub}
            />
          ))}
        </div>
      </>
    );
  }

  if (data.quote) {
    blocks.push(
      <figure className="mx-auto max-w-[820px] text-center">
        <blockquote className="font-lato text-[22px] font-light leading-[1.4] text-navy sm:text-[26px]">
          <span aria-hidden="true" className="text-amber">
            &ldquo;
          </span>
          {data.quote.text}
          <span aria-hidden="true" className="text-amber">
            &rdquo;
          </span>
        </blockquote>
        <figcaption className="mt-7 text-[15px] leading-relaxed">
          <span className="font-semibold text-navy">{data.quote.name}</span>
          <span className="block text-navy/55">
            {data.quote.role}
            {data.quote.company ? `, ${data.quote.company}` : ""}
          </span>
        </figcaption>
      </figure>
    );
  }

  if (data.faq && data.faq.length > 0) {
    blocks.push(
      <>
        <Head
          title={data.faqHeading ?? "Spørsmål vi ofte får"}
          proof={data.faqProof}
        />
        <FaqList items={data.faq} />
      </>
    );
  }

  if (data.readMore && data.readMore.length > 0) {
    blocks.push(
      <>
        <Head title={data.readMoreHeading ?? "Les mer"} />
        <ReadMoreList links={data.readMore} />
      </>
    );
  }

  /* Grounds keep alternating past the blocks, so the last content section and
     the closing section never collide on the same fill. */
  const otherServicesGround = blocks.length % 2 === 0 ? "sky" : "white";

  return (
    <div className="min-h-dvh bg-white">
      {/*
        The hero: a cloud field with the photograph bleeding off the right
        viewport edge. From `lg` up the photo's LEFT edge is a full semicircle
        (rounded-l-full) — the service-page echo of the homepage's arch crop.
        Below `lg` it returns to normal flow underneath the copy, so the
        headline and the primary action stay first on a phone.
      */}
      <section className="relative isolate overflow-hidden bg-cloud text-navy">
        <span
          aria-hidden="true"
          className="livery-puzzle aspect-[100/129] -left-20 bottom-[-3rem] w-44 -rotate-[14deg] bg-brand/10 lg:-left-12 lg:w-64"
        />
        <div className={`${CONTAINER} relative z-10`}>
          <div className="lg:grid lg:grid-cols-[1fr_46%]">
            <div className="max-w-[42rem] py-12 lg:max-w-none lg:py-24 lg:pr-14 xl:py-28">
              <Breadcrumb
                items={[
                  { label: "Alle tjenester", to: "/tjenester" },
                  { label: serviceLabel },
                ]}
              />

              <h1 className="font-lato text-[34px] font-light leading-[1.08] tracking-[-0.01em] text-navy sm:text-[42px] lg:text-[48px] xl:text-[56px]">
                {data.title}
              </h1>

              {data.subtitle && (
                <p className="mt-5 max-w-[30rem] text-[17px] font-semibold leading-snug text-navy lg:text-[19px]">
                  {data.subtitle}
                </p>
              )}

              <p className="mt-5 max-w-[34rem] text-[15px] leading-relaxed text-navy/65 lg:text-[16px]">
                {data.intro}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row xl:mt-10">
                {/* Same label as the footer's: both go to /kontakt with the
                    same intent, so two wordings would read as two offers. */}
                <Pill to="/kontakt">
                  Snakk med oss
                  <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                </Pill>
                {data.brochureUrl && (
                  <Pill
                    href={data.brochureUrl}
                    variant="outline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="h-4 w-4" strokeWidth={2.5} />
                    Last ned brosjyren
                  </Pill>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-[62vw] max-h-[24rem] w-full overflow-hidden sm:h-[26rem] lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:max-h-none lg:w-[46%] lg:rounded-l-full">
          <img
            src={data.heroImage ?? data.image}
            alt={data.imageAlt}
            /* The page's LCP element: never lazy, and ahead of the grid
               photos. Lowercase because React 18 does not recognise the
               camelCase `fetchPriority` prop and drops it with a warning. */
            fetchpriority="high"
            decoding="async"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      {/* The promise strip, on white directly under the hero. */}
      {data.heroPoints && data.heroPoints.length > 0 && (
        <section className="bg-white py-10 lg:py-12">
          <div className={CONTAINER}>
            <HeroPointStrip points={data.heroPoints} />
          </div>
        </section>
      )}

      {/*
        Sections alternate white and the cloud field — flat ground changes, no
        seams or curves, exactly as on the homepage. Every cloud section takes
        one puzzle motif, cycled through the MOTIFS set so filled and outline
        variants alternate down the page with varied rotation and size.
      */}
      {blocks.map((block, i) => {
        const sky = i % 2 === 0;
        const motif = sky ? MOTIFS[(i / 2) % MOTIFS.length] : null;
        return (
          <section
            key={i}
            className={
              sky
                ? "relative isolate overflow-hidden bg-cloud py-[4.5rem] lg:py-[5.5rem]"
                : "bg-white py-16 lg:py-20"
            }
          >
            {motif && <span aria-hidden="true" className={motif} />}
            <div className={`${CONTAINER} relative z-10`}>{block}</div>
          </section>
        );
      })}

      <ServiceFooter currentPath={data.path} ground={otherServicesGround} />
    </div>
  );
}
