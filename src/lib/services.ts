/**
 * The six services — the single source for the header, footer, homepage
 * service rows and the menu. `livery.tsx` re-exports these for the older
 * pages that still import from there.
 *
 * `accent` follows the brand manual's service groups: lime = Frukt,
 * amber = Lunsj/Kantine/Catering, aqua = Inneklima/Renhold. Accents are
 * decorative (bars, squares, plates) — never text on white.
 */
export type Accent = "lime" | "amber" | "aqua";

export interface Service {
  name: string;
  slug: string;
  href: string;
  /** One checkable fact — a real client or a documented capability. Never invented. */
  proof: string;
  blurb: string;
  accent: Accent;
}

export const SERVICES: Service[] = [
  {
    name: "Frukt",
    slug: "frukt",
    href: "/tjenester/frukt",
    proof: "Frukt til Vinmonopolet siden 2018",
    blurb: "Fersk kurv, levert daglig eller etter behov. Den enkleste starten.",
    accent: "lime",
  },
  {
    name: "Lunsj",
    slug: "lunsj",
    href: "/tjenester/lunsj",
    proof: "Lunsjordning for Team Verksted, Follo",
    blurb: "Lønnsomme, velsmakende ordninger for fem personer og oppover.",
    accent: "amber",
  },
  {
    name: "Kantine",
    slug: "kantine",
    href: "/tjenester/kantine",
    proof: "Full kantinedrift for Kronos Titan",
    blurb: "Vi tar hele lunsjavviklingen — også der dere ikke har eget kjøkken.",
    accent: "amber",
  },
  {
    name: "Catering",
    slug: "catering",
    href: "/tjenester/catering",
    proof: "Alt laget i vårt eget kjøkken",
    blurb: "Varmmat, salater, påsmurt og møtemat — fra bunnen, levert klart.",
    accent: "amber",
  },
  {
    name: "Inneklima",
    slug: "inneklima",
    href: "/tjenester/inneklima",
    proof: "Ren luft uten byggtekniske endringer",
    blurb: "Riktig temperatur og renere luft, montert uten inngrep i bygget.",
    accent: "aqua",
  },
  {
    name: "Renhold",
    slug: "renhold",
    href: "/tjenester/renhold",
    proof: "Renhold for Schibsted Trykk Oslo",
    blurb: "Rene lokaler gir bedre trivsel og lavere sykefravær. Fast rute, fast folk.",
    accent: "aqua",
  },
];

export const SERVICE_BY_NAME = Object.fromEntries(
  SERVICES.map((s) => [s.name, s])
) as Record<string, Service>;

/** The company pages, in the order the header menu and footer list them. */
export const COMPANY_LINKS = [
  { label: "Om oss", to: "/om-oss" },
  { label: "Referanser", to: "/referanser" },
  { label: "Aktuelt", to: "/aktuelt" },
  { label: "Ansvar", to: "/ansvar" },
  { label: "Karriere", to: "/karriere" },
  { label: "Kontakt", to: "/kontakt" },
];
