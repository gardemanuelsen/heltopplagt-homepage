/**
 * Bildekoren / "The Livery" — the service-page template.
 *
 * Composition seed 485bdd0d, surface scope, Persuade. One template carries all
 * six services (/tjenester/*).
 *
 * Sections run in the order a buyer asks the questions:
 *   Slik fungerer det (how does this work) — an ordered, numbered process
 *   Catalogs          (what can I get)     — the printed brochure's own spreads
 *   Hvorfor …         (why should I care)  — the brochure's benefit list
 *   Spørsmål …        (what else)          — expandable FAQ
 *   Closing statement (the brand's line)   — the page lands, then acts
 *
 * The process leads because a first-time visitor asks it before they are ready
 * to choose a variant. Each section is a distinct layout family on purpose:
 * borderless numbered steps, centred text panels, bordered product cards, a
 * wide band, a statement-plus-checklist split, hairline accordion rules.
 *
 * Catalog layout is lifted from the print brochure; its palette is not — the
 * brochure's maroon and orange stay out, and everything renders in the Livery
 * blues.
 *
 * Section separation is one treatment only: THE SECTION CURVE
 * (`.livery-curve-b` / `-t`), a shallow ellipse arc. A curve belongs to a
 * boundary, never to a section: nothing curves both edges, and straight is the
 * default, so the page stays a mix rather than a ripple. A second, sharper
 * edge was tried on the hero and removed; two competing edge treatments read
 * as noise. Coloured sections carry a pale sky fill (`aqua/12`); components
 * inside keep hard corners and the notch.
 *
 * This supersedes DESIGN.md's Every-Other Rule (white ↔ grey tint) and its
 * flat-edge shape language for this template, at the client's direction.
 */
import { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, ArrowUpRight, Check, ChevronRight, Download, Phone, Plus } from "lucide-react";
import { Link } from "react-router";
import { LIVERY_CONTAINER, LiveryCta, SectionPlate, StencilPlate } from "./livery";
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
 * The puzzle-motif set. Two variants, alternating, and deliberately sparse:
 * only every other coloured section takes one, so the mark stays an accent
 * rather than a rhythm. A page ends up with two or three, not one per band.
 *
 * `livery-puzzle`         filled, low alpha, BEHIND the content.
 * `livery-puzzle-outline` stroked, stronger alpha, ON TOP of the content, and
 *                         only ever placed over a section edge or a panel,
 *                         never over running text.
 *
 * Every instance carries its own rotation, size, corner and colour, because
 * repeats of one shape at one angle read as a stamp rather than as texture.
 */
const MOTIFS = [
  "livery-puzzle aspect-[100/129] -left-16 top-8 w-40 -rotate-[17deg] bg-lime/14 lg:-left-10 lg:w-56",
  "livery-puzzle-outline aspect-[100/129] -right-12 -bottom-10 w-40 rotate-[22deg] bg-deck/25 lg:-right-6 lg:w-56",
  "livery-puzzle aspect-[100/129] -right-20 top-10 w-48 rotate-[9deg] bg-amber/12 lg:-right-12 lg:w-64",
  "livery-puzzle-outline aspect-[100/129] -left-14 -top-8 w-36 -rotate-[12deg] bg-ink/15 lg:-left-8 lg:w-52",
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
      className="mb-5 flex flex-wrap items-center gap-1.5 font-jakarta text-[13px]"
    >
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5">
          {i > 0 && (
            <ChevronRight className="h-3.5 w-3.5 text-ink/30" aria-hidden="true" />
          )}
          {item.to ? (
            <Link
              to={item.to}
              className="text-ink/55 transition-colors hover:text-signal"
            >
              {item.label}
            </Link>
          ) : (
            <span className="font-semibold text-ink">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
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
        (sky
          ? "livery-curve-t bg-aqua/12 py-[4.5rem] lg:py-[6rem]"
          : "bg-white py-16 lg:py-20")
      }
    >
      {sky && (
        <span
          aria-hidden="true"
          className="livery-puzzle-outline aspect-[100/129] -right-16 -top-10 w-40 rotate-[18deg] bg-deck/20 lg:-right-8 lg:w-56"
        />
      )}

      <div className={`${LIVERY_CONTAINER} relative z-10`}>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-jakarta text-[30px] font-bold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[38px] lg:text-[44px]">
              Bli Helt Opplagt
            </h2>
            <p className="mt-4 max-w-[48ch] text-[17px] leading-relaxed text-ink/70">
              Én leverandør, én kontaktperson, én faktura. Fortell oss hvordan
              dere har det på jobben, så setter vi sammen et forslag som passer.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-shrink-0 sm:flex-row sm:items-center">
            <LiveryCta to="/kontakt">
              Snakk med oss
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </LiveryCta>
            <a
              href="tel:+4702346"
              className="inline-flex items-center gap-2 font-jakarta text-[15px] font-semibold text-ink transition-colors hover:text-signal"
            >
              <Phone className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
              02346
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-ink/12 pt-9">
          <h3 className="font-jakarta text-[17px] font-bold tracking-[-0.01em] text-ink">
            Andre tjenester
          </h3>
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {others.map((s) => (
              <Link
                key={s.to}
                to={s.to}
                className="livery-notch group flex items-center justify-between gap-3 bg-white px-5 py-4 shadow-[inset_0_0_0_1px_rgba(13,26,45,0.12)] transition-shadow duration-300 hover:shadow-[inset_0_0_0_1px_rgba(13,26,45,0.28)]"
              >
                <span className="font-jakarta text-[15px] font-semibold text-ink transition-colors group-hover:text-signal">
                  {s.label}
                </span>
                <ArrowUpRight
                  className="h-4 w-4 flex-shrink-0 text-ink/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal"
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
  /** Small plate carried over from the printed brochure, e.g. "Populær". */
  tag?: string;
  /** One short checked fact under the description, e.g. "Ny kurv hver uke". */
  spec?: string;
}

/**
 * A catalog section, lifted from the printed fruit brochure.
 *
 * The brochure's maroon-and-orange palette does NOT come with the layout;
 * these render in the Livery blues per DESIGN.md.
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
      /* drop-shadow on the unclipped wrapper so the lift follows the notched
         silhouette (a box-shadow on the clipped card would be cut away) */
      className="group block transition duration-300 [filter:drop-shadow(0_1px_2px_rgba(13,26,45,0.05))] hover:[filter:drop-shadow(0_16px_30px_rgba(13,26,45,0.13))]"
    >
      <div className="livery-notch flex h-full flex-col bg-white shadow-[inset_0_0_0_1px_rgba(13,26,45,0.12)] transition-shadow duration-300 group-hover:shadow-[inset_0_0_0_1px_rgba(13,26,45,0.22)]">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={sub.image}
            alt=""
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 via-ink/25 to-transparent px-5 pb-4 pt-16">
            <h3 className="font-jakarta text-[19px] font-bold leading-tight tracking-[-0.01em] text-white sm:text-[22px]">
              {sub.title}
            </h3>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <p className="flex-1 text-[15px] leading-relaxed text-ink/70">
            {sub.description}
          </p>
          <span className="mt-5 inline-flex items-center gap-1.5 font-jakarta text-[13px] font-semibold text-ink transition-colors group-hover:text-signal">
            Se tjenesten
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              strokeWidth={2.5}
            />
          </span>
        </div>
      </div>
    </Link>
  );
}

/**
 * "Slik jobber vi" — every proof fact in one grid. Deliberately NOT cards:
 * no border, no fill, no notch on a container. A photograph, the figure, the
 * sentence. That keeps it distinct from the bordered sub-service cards it sits
 * near, and puts three facts in the space one used to take.
 */
function CatalogSectionView({ catalog }: { catalog: CatalogSection }) {
  /*
     Cards are always white with a 1px inset ring and the same faint resting
     drop-shadow as the homepage service cards, so the two card grids on the
     site are one component in two places.

     No tinted panel: six colour photographs on a tinted card on a tinted
     section was more colour than the grid could carry. The photo cell stays
     white for the multiply blend, and `object-contain` keeps each basket
     whole where `cover` would crop it.
  */
  return (
    <>
      <SectionPlate title={catalog.heading} proof={catalog.proof} />

      {catalog.note && (
        <p className="mt-5 max-w-[70ch] font-jakarta text-[15px] font-semibold text-signal">
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
              className="livery-notch flex flex-col items-center bg-white px-6 py-9 text-center shadow-[inset_0_0_0_1px_rgba(13,26,45,0.12)] [filter:drop-shadow(0_1px_2px_rgba(13,26,45,0.05))]"
            >
              <h3 className="font-jakarta text-[20px] font-bold leading-tight tracking-[-0.01em] text-ink">
                {item.name}
              </h3>
              <p className="mt-3.5 max-w-[30ch] text-[15px] leading-relaxed text-ink/70">
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
              className="livery-notch grid bg-white shadow-[inset_0_0_0_1px_rgba(13,26,45,0.12)] [filter:drop-shadow(0_1px_2px_rgba(13,26,45,0.05))] sm:grid-cols-[minmax(0,14rem)_1fr] sm:items-center"
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
                {item.tag && <StencilPlate label={item.tag} className="mb-3" />}
                <h3 className="font-jakarta text-[20px] font-bold leading-tight tracking-[-0.01em] text-ink">
                  {item.name}
                </h3>
                <p className="mt-2.5 max-w-[58ch] text-[15px] leading-relaxed text-ink/70">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {catalog.items.map((item) => (
            <div
              key={item.name}
              className="livery-notch flex flex-col bg-white shadow-[inset_0_0_0_1px_rgba(13,26,45,0.12)] [filter:drop-shadow(0_1px_2px_rgba(13,26,45,0.05))]"
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

              <div className="flex flex-1 flex-col items-center p-5 text-center">
                {item.tag && <StencilPlate label={item.tag} className="mb-3" />}
                <h3 className="font-jakarta text-[19px] font-bold leading-tight tracking-[-0.01em] text-ink">
                  {item.name}
                </h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-ink/70">
                  {item.description}
                </p>
                {item.spec && (
                  <p className="mt-3.5 inline-flex items-center gap-1.5 font-jakarta text-[13px] font-semibold text-ink">
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
          <LiveryCta to={catalog.link.to} variant="ghost-dark">
            {catalog.link.label}
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
          </LiveryCta>
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
 * or four operational facts that make the offer legible at a glance. Vertical
 * hairlines rather than cards, so it reads as one band and not as a fourth
 * grid of tiles.
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
              className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-deck"
            >
              <Icon className="h-4 w-4 text-white" strokeWidth={2.5} />
            </span>
            <div className="min-w-0">
              <p className="font-jakarta text-[15px] font-semibold leading-snug text-ink">
                {point.label}
              </p>
              {point.body && (
                <p className="mt-1.5 text-[14px] leading-relaxed text-ink/65">
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
 *
 * Borderless on the ground rather than in cards. The catalog sections below
 * are already bordered panels, and a bordered icon grid on top of them is the
 * "wall of identical tiles" this page has been pulled out of twice.
 */
function BenefitGrid({ items }: { items: BenefitItem[] }) {
  return (
    <ul className="mt-10 grid grid-cols-1 gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => {
        const Icon = item.icon ?? Check;
        return (
          <li key={item.label}>
            <Icon
              className="h-6 w-6 text-signal"
              strokeWidth={1.75}
              aria-hidden="true"
            />
            <h3 className="mt-4 font-jakarta text-[17px] font-bold leading-tight tracking-[-0.01em] text-ink">
              {item.label}
            </h3>
            {item.body && (
              <p className="mt-2 max-w-[42ch] text-[15px] leading-relaxed text-ink/70">
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
          className="group flex items-center justify-between gap-6 border-b border-ink/12 py-5 first:border-t first:border-ink/12"
        >
          <span className="min-w-0">
            <span className="block font-jakarta text-[17px] font-semibold leading-snug text-ink transition-colors group-hover:text-signal">
              {link.label}
            </span>
            {link.description && (
              <span className="mt-1 block text-[15px] leading-relaxed text-ink/65">
                {link.description}
              </span>
            )}
          </span>
          <ArrowUpRight
            className="h-5 w-5 flex-shrink-0 text-ink/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal"
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
          className="group border-b border-ink/12 first:border-t first:border-ink/12"
        >
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 font-jakarta text-[17px] font-semibold leading-snug text-ink transition-colors hover:text-signal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal [&::-webkit-details-marker]:hidden">
            <span>{item.question}</span>
            <Plus
              className="mt-0.5 h-5 w-5 flex-shrink-0 text-signal transition-transform duration-300 group-open:rotate-45"
              strokeWidth={2.5}
              aria-hidden="true"
            />
          </summary>
          <div className="max-w-[68ch] pb-6 text-[15px] leading-relaxed text-ink/75">
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
   *   why should I bother   → the benefit grid, leading
   *   what can I get        → the catalogs
   *   what else do I ask    → the FAQ
   *   where do I read more  → the "Les mer" links
   *
   * Benefits lead because that is the case this page has to make; the
   * operational detail (packing, routes, cold chain) lives on the routines
   * sub-page, reachable from "Les mer", rather than taking a section here.
   *
   * Every entry is optional, so a service that has only its sub-service cards
   * still reads as a finished page; nothing renders an empty section.
   */
  const blocks: ReactNode[] = [];

  /* A block's index decides its ground, and blocks.length is that index at
     push time — so a section can be built already knowing what it sits on. */
  const groundAt = (i: number): "white" | "sky" => (i % 2 === 0 ? "sky" : "white");

  if (data.explainer) {
    const ex = data.explainer;
    blocks.push(
      /* `auto` on the image column, not a fraction: the photograph is a
         supporting detail here, so it takes only the width it is given and
         the copy keeps the rest. */
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
        <div>
          <h2 className="max-w-[20ch] font-jakarta text-[26px] font-bold leading-[1.15] tracking-[-0.015em] text-ink sm:text-[32px] lg:text-[38px]">
            {ex.heading ?? "Hva tilbyr vi"}
          </h2>
          {ex.body.map((p, n) => (
            <p
              key={n}
              className="mt-5 max-w-[54ch] text-[17px] leading-relaxed text-ink/75"
            >
              {p}
            </p>
          ))}
          {ex.points && ex.points.length > 0 && (
            <ul className="mt-8 grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
              {ex.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <Check
                    className="mt-1 h-4 w-4 flex-shrink-0 text-lime"
                    strokeWidth={3}
                    aria-hidden="true"
                  />
                  <span className="text-[15px] leading-relaxed text-ink/80">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="livery-notch relative aspect-[4/3] w-full max-w-[380px] overflow-hidden bg-white shadow-[inset_0_0_0_1px_rgba(13,26,45,0.12)] lg:aspect-[4/5] lg:w-[260px] xl:w-[300px]">
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
        <SectionPlate
          title={data.benefits.heading}
          proof={data.benefits.proof}
        />
        <BenefitGrid items={data.benefits.items} />
      </>
    );
  }

  (data.catalogs ?? []).forEach((catalog) => {
    blocks.push(
      <CatalogSectionView catalog={catalog} />
    );
  });

  if (data.subServices.length > 0 && !data.hideSubServiceCards) {
    blocks.push(
      <>
        <SectionPlate
          title={data.subServicesHeading ?? `Dette leverer vi innen ${lowerLabel}`}
          proof={data.subServicesProof}
        />
        <div
          className={
            "mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2" +
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
        <blockquote className="font-jakarta text-[22px] font-bold leading-[1.35] tracking-[-0.015em] text-ink sm:text-[26px]">
          <span aria-hidden="true" className="text-signal">
            &ldquo;
          </span>
          {data.quote.text}
          <span aria-hidden="true" className="text-signal">
            &rdquo;
          </span>
        </blockquote>
        <figcaption className="mt-7 text-[15px] leading-relaxed">
          <span className="font-jakarta font-semibold text-ink">
            {data.quote.name}
          </span>
          <span className="block text-ink/60">
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
        <SectionPlate
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
        <SectionPlate title={data.readMoreHeading ?? "Les mer"} />
        <ReadMoreList links={data.readMore} />
      </>
    );
  }

  /* Grounds keep alternating past the blocks, so the last content section and
     the two closing sections never collide on the same fill. */
  const otherServicesGround = blocks.length % 2 === 0 ? "sky" : "white";
  /* The closing band takes a curved TOP so it lifts off the white above it,
     and stays straight at the bottom where it meets the ink footer. */
  const closeGround =
    otherServicesGround === "sky"
      ? "bg-white"
      : "livery-curve-t bg-aqua/12";

  return (
    <div className="min-h-dvh bg-white">
      {/*
        The hero: a tinted field with the photograph bleeding off the right
        viewport edge, rather than a contained panel on white.

        The photo is absolutely positioned to the right half from `lg` up, so it
        reaches the viewport edge instead of stopping at the container gutter;
        below `lg` it returns to normal flow underneath the copy, so the
        headline and the primary action stay first on a phone.
      */}
      <section className="livery-curve-b relative isolate overflow-hidden bg-aqua/25 text-ink">
        {/* The hero carries two: a filled piece behind the copy column, and a
            white outline laid over the photograph. */}
        <span
          aria-hidden="true"
          className="livery-puzzle aspect-[100/129] -left-20 bottom-[-3rem] w-44 -rotate-[14deg] bg-lime/14 lg:-left-12 lg:w-64"
        />
        <div className={`${LIVERY_CONTAINER} relative z-10`}>
          <div className="lg:grid lg:grid-cols-[1fr_46%]">
            <div className="max-w-[42rem] py-12 lg:max-w-none lg:py-24 lg:pr-14 xl:py-28">
              <Breadcrumb
                items={[
                  { label: "Alle tjenester", to: "/tjenester" },
                  { label: serviceLabel },
                ]}
              />

              <h1 className="font-jakarta text-[30px] font-bold leading-[1.05] tracking-[-0.025em] text-ink sm:text-[38px] lg:text-[44px] xl:text-[52px] 2xl:text-[58px]">
                {data.title}
              </h1>

              {data.subtitle && (
                <p className="mt-5 max-w-[30rem] font-jakarta text-[17px] font-bold leading-snug tracking-[-0.01em] text-ink lg:text-[20px]">
                  {data.subtitle}
                </p>
              )}

              <p className="mt-5 max-w-[34rem] text-[15px] leading-relaxed text-ink/70 lg:text-[17px]">
                {data.intro}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row xl:mt-10">
                {/* Same label as the footer's: both go to /kontakt with the
                    same intent, so two wordings would read as two offers. */}
                <LiveryCta to="/kontakt">
                  Snakk med oss
                  <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                </LiveryCta>
                {data.brochureUrl && (
                  <LiveryCta
                    href={data.brochureUrl}
                    variant="ghost-dark"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="h-4 w-4" strokeWidth={2.5} />
                    Last ned brosjyren
                  </LiveryCta>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-[62vw] max-h-[24rem] w-full sm:h-[26rem] lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:max-h-none lg:w-[46%]">
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

      {/* The promise strip, on white directly under the torn hero edge. */}
      {data.heroPoints && data.heroPoints.length > 0 && (
        <section className="bg-white py-10 lg:py-12">
          <div className={LIVERY_CONTAINER}>
            <HeroPointStrip points={data.heroPoints} />
          </div>
        </section>
      )}

      {/*
        Sections alternate white and a pale sky field. The sky sections are torn
        top and bottom, so the white page ground shows through the teeth; the
        white sections need no divider at all, because the torn band above and
        below already does the separating. No hairline seams, no grey.
      */}
      {blocks.map((block, i) => {
        const sky = i % 2 === 0;
        /*
          Not every coloured band curves. Straight is the default; a curve
          marks a change of chapter, so the page reads as layered paper rather
          than a ripple. Coloured bands sit at even `i`, and every other one of
          those takes the curve — offset by 2 so the first band after the
          curved hero stays straight and the two curves never crowd.
        */
        const curved = sky && i % 4 === 2;
        /* Only every OTHER coloured section takes a motif, so the mark stays
           an accent. Coloured bands sit at even `i`, so `i % 4 === 0` picks
           half of them; the index into MOTIFS keeps filled and outline
           variants alternating down the page. */
        const motif = sky && i % 4 === 0 ? MOTIFS[(i / 4) % MOTIFS.length] : null;
        return (
          <section
            key={i}
            className={
              sky
                ? `relative isolate overflow-hidden ${
                    curved ? "livery-curve-b " : ""
                  }bg-aqua/12 py-[4.5rem] lg:py-[5.5rem]`
                : "bg-white py-16 lg:py-20"
            }
          >
            {motif && <span aria-hidden="true" className={motif} />}
            <div className={`${LIVERY_CONTAINER} relative z-10`}>{block}</div>
          </section>
        );
      })}

      <ServiceFooter currentPath={data.path} ground={otherServicesGround} />
    </div>
  );
}
