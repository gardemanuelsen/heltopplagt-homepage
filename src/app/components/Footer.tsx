import { ExternalLink, Mail, Phone } from "lucide-react";
import { Link } from "react-router";
import logoSrc from "../../images/logo.png";
import { CONTAINER, Pill } from "./site";
import { SERVICES } from "./livery";

const companyLinks = [
  { label: "Om oss", to: "/om-oss" },
  { label: "Referanser", to: "/referanser" },
  { label: "Aktuelt", to: "/aktuelt" },
  { label: "Ansvar", to: "/ansvar" },
  { label: "Karriere", to: "/karriere" },
  { label: "Kontakt", to: "/kontakt" },
];

const HEADING =
  "mb-4 text-[12px] font-semibold uppercase tracking-[0.16em] text-white/45";

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div
        className={`${CONTAINER} grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.3fr] lg:gap-10 lg:py-20`}
      >
        <div>
          <img
            src={logoSrc}
            alt="Helt Opplagt"
            className="mb-6 h-8 object-contain brightness-0 invert"
          />
          <p className="mb-7 max-w-[300px] text-[14px] leading-[1.7] text-white/60">
            Frukt, lunsj, kantine, catering, inneklima og renhold for
            arbeidsplassen — hos én leverandør, med én kontaktperson og én
            faktura.
          </p>
          <div className="flex gap-2.5">
            <a
              href="https://www.linkedin.com/company/helt-opplagt"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/60 transition-colors hover:border-aqua hover:text-aqua"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
            <a
              href="mailto:bli@heltopplagt.no"
              aria-label="E-post"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/60 transition-colors hover:border-aqua hover:text-aqua"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <nav className="flex flex-col gap-2.5">
          <h2 className={HEADING}>Tjenester</h2>
          {SERVICES.map((s) => (
            <Link
              key={s.href}
              to={s.href}
              className="text-[14px] text-white/70 transition-colors hover:text-aqua"
            >
              {s.name}
            </Link>
          ))}
        </nav>

        <nav className="flex flex-col gap-2.5">
          <h2 className={HEADING}>Selskapet</h2>
          {companyLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-[14px] text-white/70 transition-colors hover:text-aqua"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div>
          <h2 className={HEADING}>Kontakt</h2>
          <a
            href="tel:02346"
            className="flex items-center gap-3 py-1.5 text-[15px] font-semibold text-white transition-colors hover:text-aqua"
          >
            <Phone className="h-4 w-4 text-aqua" strokeWidth={2.25} />
            02346
          </a>
          <a
            href="mailto:bli@heltopplagt.no"
            className="flex items-center gap-3 py-1.5 text-[14px] text-white/70 transition-colors hover:text-aqua"
          >
            <Mail className="h-4 w-4 text-aqua" strokeWidth={2} />
            bli@heltopplagt.no
          </a>
          <p className="mt-1.5 text-[14px] text-white/50">Oslo, Norge</p>
          <Pill to="/kontakt" className="mt-6">
            Send oss en melding
          </Pill>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div
          className={`${CONTAINER} flex flex-wrap items-center justify-between gap-2 py-6`}
        >
          <p className="text-[12px] text-white/45">
            &copy; {new Date().getFullYear()} Helt Opplagt AS. Alle rettigheter
            reservert.
          </p>
          {/* The payoff line, in the payoff face. */}
          <p className="payoff-marker font-payoff text-[15px] font-bold text-white/60">
            Helt Opplagt på jobben
          </p>
        </div>
      </div>
    </footer>
  );
}
