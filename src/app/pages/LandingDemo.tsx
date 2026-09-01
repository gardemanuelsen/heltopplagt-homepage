/**
 * Helt Opplagt — standalone services landing page (design exploration).
 * Not linked from the live site's navigation; reachable at /landing-demo.
 */
import { useState } from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  List,
  X,
  Quotes,
  Phone,
  EnvelopeSimple,
} from "@phosphor-icons/react";

import heroImg from "../../images/hero/web/hero-lunsj.jpg";
import kantineImg from "../../images/hero/web/hero-kantine.jpg";
import cateringImg from "../../images/hero/web/hero-catering.jpg";
import fruktImg from "../../images/hero/web/hero-frukt.jpg";
import lunsjImg from "../../images/hero/web/hero-lunsj.jpg";
import inneklimaImg from "../../images/hero/web/hero-inneklima.jpg";
import renholdImg from "../../images/hero/web/hero-renhold.jpg";

import intilityLogo from "../../images/logo/intility.png";
import allianceLogo from "../../images/logo/alliance.png";
import sporveienLogo from "../../images/logo/sporveien.png";
import xxlLogo from "../../images/logo/xxl.png";
import riksrevisjonenLogo from "../../images/logo/riksrevisjonen.png";

const CONTACT_CTA = "Få et tilbud";

const services = [
  {
    name: "Kantine",
    description: "Fullservice kantinedrift, uten at dere trenger eget kjøkken.",
    image: kantineImg,
  },
  {
    name: "Catering",
    description: "Møtemat og eventcatering, laget fra bunnen i vårt eget kjøkken.",
    image: cateringImg,
  },
  {
    name: "Frukt",
    description: "Fersk frukt levert til kontoret, daglig eller etter behov.",
    image: fruktImg,
  },
  {
    name: "Lunsj",
    description: "Lønnsomme lunsjordninger for fem ansatte og oppover.",
    image: lunsjImg,
  },
  {
    name: "Inneklima",
    description: "Renere luft og riktig temperatur, uten byggtekniske endringer.",
    image: inneklimaImg,
  },
  {
    name: "Renhold",
    description: "Renhold som holder arbeidsmiljøet i orden, hver eneste dag.",
    image: renholdImg,
  },
] as const;

const clientLogos = [
  { name: "Intility", logo: intilityLogo },
  { name: "Alliance Healthcare", logo: allianceLogo },
  { name: "Sporveien", logo: sporveienLogo },
  { name: "XXL", logo: xxlLogo },
  { name: "Riksrevisjonen", logo: riksrevisjonenLogo },
];

const steps = [
  {
    number: "01",
    title: "Fortell oss om behovet",
    description: "Ta kontakt og beskriv hva bedriften trenger, i dag eller om et halvår.",
  },
  {
    number: "02",
    title: "Vi setter sammen et forslag",
    description: "Vi foreslår en løsning tilpasset antall ansatte og hvilke tjenester dere velger.",
  },
  {
    number: "03",
    title: "Kom i gang, uten bindingstid",
    description: "Én kontaktperson og én faktura, uansett hvor mange tjenester dere har hos oss.",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function Reveal({
  children,
  delay = 0,
  className,
  variants = fadeUp,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  variants?: Variants;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? undefined : "hidden"}
      whileInView={reduceMotion ? undefined : "visible"}
      viewport={{ once: true, amount: 0.3 }}
      variants={variants}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function LandingDemo() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-dvh bg-base-100 font-manrope text-base-content">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-base-300 bg-base-100/90 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-6 lg:h-[72px] lg:px-8">
          <a href="#" className="font-jakarta text-lg font-semibold tracking-tight">
            Helt Opplagt
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            <a href="#tjenester" className="text-sm font-medium text-base-content/70 transition-colors hover:text-primary">
              Tjenester
            </a>
            <a href="#slik-fungerer-det" className="text-sm font-medium text-base-content/70 transition-colors hover:text-primary">
              Slik fungerer det
            </a>
            <a href="#kontakt" className="text-sm font-medium text-base-content/70 transition-colors hover:text-primary">
              Kontakt
            </a>
          </nav>

          <a
            href="#kontakt"
            className="hidden rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-content transition-colors hover:bg-primary/90 lg:inline-flex lg:items-center lg:gap-1.5"
          >
            {CONTACT_CTA}
            <ArrowRight size={16} weight="bold" />
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Åpne meny"
            className="inline-flex items-center justify-center rounded-md p-2 text-base-content lg:hidden"
          >
            <List size={24} />
          </button>
        </div>

        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col bg-base-100 px-6 py-6 lg:hidden"
          >
            <div className="flex items-center justify-between">
              <span className="font-jakarta text-lg font-semibold tracking-tight">Helt Opplagt</span>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Lukk meny"
                className="rounded-md p-2 text-base-content"
              >
                <X size={24} />
              </button>
            </div>
            <nav className="mt-12 flex flex-col gap-6">
              {[
                { label: "Tjenester", href: "#tjenester" },
                { label: "Slik fungerer det", href: "#slik-fungerer-det" },
                { label: "Kontakt", href: "#kontakt" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-jakarta text-2xl font-semibold tracking-tight text-base-content"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <a
              href="#kontakt"
              onClick={() => setMenuOpen(false)}
              className="mt-auto inline-flex items-center justify-center gap-1.5 rounded-md bg-primary px-5 py-3.5 text-sm font-medium text-primary-content"
            >
              {CONTACT_CTA}
              <ArrowRight size={16} weight="bold" />
            </a>
          </motion.div>
        )}
      </header>

      <main>
        {/* Hero — asymmetric split, not centered */}
        <section className="mx-auto grid max-w-[1280px] gap-12 px-6 pt-16 pb-20 lg:grid-cols-2 lg:items-center lg:gap-8 lg:px-8 lg:pt-24 lg:pb-28">
          <Reveal>
            <h1 className="font-jakarta text-4xl font-semibold leading-[1.1] tracking-tight lg:text-6xl">
              Alt bedriften trenger. Én leverandør.
            </h1>
            <p className="mt-6 max-w-[46ch] text-lg leading-relaxed text-base-content/65">
              Frukt, lunsj, kantine, catering, inneklima og renhold. Én kontaktperson og én
              faktura, uansett hvor mange tjenester dere velger.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center gap-1.5 rounded-md bg-primary px-6 py-3.5 text-sm font-medium text-primary-content transition-colors hover:bg-primary/90"
              >
                {CONTACT_CTA}
                <ArrowRight size={16} weight="bold" />
              </a>
              <a
                href="#tjenester"
                className="inline-flex items-center justify-center gap-1.5 rounded-md border border-base-300 px-6 py-3.5 text-sm font-medium text-base-content transition-colors hover:border-primary hover:text-primary"
              >
                Se tjenestene
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="relative">
            <div
              aria-hidden="true"
              className="absolute -right-4 -top-4 hidden aspect-[4/5] w-full rounded-2xl border-2 border-primary/50 sm:block"
            />
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-base-200">
              <img
                src={heroImg}
                alt="Ansatte som spiser lunsj sammen på arbeidsplassen"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </section>

        {/* Trust strip — real client logos, under the hero, logo-only */}
        <section className="bg-base-200">
          <div className="mx-auto max-w-[1280px] px-6 py-12 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 sm:justify-between">
              {clientLogos.map((client) => (
                <img
                  key={client.name}
                  src={client.logo}
                  alt={client.name}
                  className="h-6 w-auto object-contain opacity-70 grayscale sm:h-7"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Services — asymmetric bento, six real cells */}
        <section id="tjenester" className="mx-auto max-w-[1280px] px-6 py-24 lg:px-8 lg:py-32">
          <Reveal>
            <h2 className="font-jakarta max-w-[24ch] text-3xl font-semibold tracking-tight lg:text-5xl">
              Velg det dere trenger
            </h2>
            <p className="mt-4 max-w-[60ch] text-base text-base-content/65">
              Hver tjeneste fungerer på egen hånd. Sammen blir de én avtale å forholde seg til.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => {
              return (
                <Reveal key={service.name} delay={i * 0.06}>
                  <a href="#kontakt" className="group flex h-full flex-col overflow-hidden rounded-2xl bg-base-200">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-tl-[2.5rem] rounded-br-[2.5rem] m-3 mb-0">
                      <img
                        src={service.image}
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-jakarta text-2xl font-semibold tracking-tight text-base-content">
                        {service.name}
                      </h3>
                      <p className="mt-2 flex-1 text-sm text-base-content/60">
                        {service.description}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-base-content transition-colors group-hover:text-primary">
                        Se tjenesten
                        <ArrowUpRight size={16} />
                      </span>
                    </div>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* Process — steps threaded together with a connecting line, reinforcing the sequence */}
        <section id="slik-fungerer-det" className="bg-base-200">
          <div className="mx-auto max-w-[1280px] px-6 py-24 lg:px-8 lg:py-32">
            <Reveal>
              <h2 className="font-jakarta max-w-[24ch] text-3xl font-semibold tracking-tight lg:text-5xl">
                Slik fungerer det
              </h2>
            </Reveal>

            <div className="relative mt-12 grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-8">
              <div
                aria-hidden="true"
                className="absolute left-0 right-0 top-6 hidden h-px bg-base-300 lg:block"
              />
              {steps.map((step, i) => (
                <Reveal key={step.number} delay={i * 0.1} className="relative">
                  <span className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-full bg-base-100 font-mono text-lg font-semibold text-primary">
                    {step.number}
                  </span>
                  <h3 className="font-jakarta mt-4 text-xl font-semibold tracking-tight">{step.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-base-content/65">
                    {step.description}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial — folded into the same surface as the CTA it leads into */}
        <section className="bg-base-100">
          <Reveal className="mx-auto max-w-[640px] px-6 py-24 text-center lg:px-8 lg:py-32">
            <Quotes size={32} weight="fill" className="mx-auto text-primary/25" />
            <p className="mt-6 text-xl leading-relaxed tracking-tight lg:text-2xl">
              Helt Opplagt leverer god, variert og sunn mat, fersk og frisk. De er fleksible og
              imøtekommende med høy servicegrad. Vi er superfornøyd.
            </p>
            <p className="mt-6 text-sm text-base-content/60">
              <span className="font-semibold text-base-content">Wenche Revhaug</span>, Styremedlem,
              Kronos Titan
            </p>
          </Reveal>
        </section>

        {/* Final CTA — the page's one deliberate dark, photo-led moment, bookending the hero */}
        <section className="relative overflow-hidden">
          <img
            src={renholdImg}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/85 to-secondary/60" />
          <Reveal className="relative mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-8 px-6 py-24 lg:flex-row lg:items-center lg:px-8 lg:py-32">
            <div>
              <h2 className="font-jakarta max-w-[20ch] text-3xl font-semibold tracking-tight text-white lg:text-4xl">
                Klar for å forenkle hverdagen?
              </h2>
              <p className="mt-3 max-w-[42ch] text-white/70">
                Fortell oss hva dere trenger, så setter vi sammen et forslag i løpet av kort tid.
              </p>
            </div>
            <a
              id="kontakt"
              href="mailto:bli@heltopplagt.no"
              className="inline-flex flex-shrink-0 items-center gap-1.5 rounded-md bg-primary px-6 py-3.5 text-sm font-medium text-primary-content transition-colors hover:bg-primary/90"
            >
              {CONTACT_CTA}
              <ArrowRight size={16} weight="bold" />
            </a>
          </Reveal>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-base-300">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-8 px-6 py-12 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <span className="font-jakarta text-sm font-semibold tracking-tight">Helt Opplagt</span>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            <a
              href="tel:02346"
              className="flex items-center gap-2 text-sm text-base-content/60 transition-colors hover:text-primary"
            >
              <Phone size={16} />
              02346
            </a>
            <a
              href="mailto:bli@heltopplagt.no"
              className="flex items-center gap-2 text-sm text-base-content/60 transition-colors hover:text-primary"
            >
              <EnvelopeSimple size={16} />
              bli@heltopplagt.no
            </a>
          </div>
          <span className="text-xs text-base-content/40">
            &copy; {new Date().getFullYear()} Helt Opplagt
          </span>
        </div>
      </footer>
    </div>
  );
}
