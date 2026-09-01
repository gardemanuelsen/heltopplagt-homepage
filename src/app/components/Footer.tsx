import { Linkedin, Mail, Phone } from "lucide-react";
import { Link } from "react-router";
import logoSrc from "../../images/logo.png";
import { LIVERY_CONTAINER, SERVICES } from "./livery";

const companyLinks = [
  { label: "Om oss", to: "/om-oss" },
  { label: "Referanser", to: "/referanser" },
  { label: "Aktuelt", to: "/aktuelt" },
  { label: "Ansvar", to: "/ansvar" },
  { label: "Karriere", to: "/karriere" },
  { label: "Kontakt", to: "/kontakt" },
];

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div
        className={`${LIVERY_CONTAINER} grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.4fr] lg:gap-12`}
      >
        <div>
          <img
            src={logoSrc}
            alt="Helt Opplagt"
            className="mb-5 h-8 object-contain brightness-0 invert"
          />
          <p className="mb-6 max-w-[280px] text-[14px] leading-[1.7] text-white/60">
            Profesjonelle fasilitetsløsninger for arbeidsplassen: frukt, lunsj,
            kantine, catering, inneklima og renhold — hos én leverandør.
          </p>
          <div className="flex gap-2">
            <a
              href="https://www.linkedin.com/company/helt-opplagt"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-10 w-10 items-center justify-center border border-white/15 text-white/60 transition-colors hover:border-aqua hover:text-aqua"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="mailto:bli@heltopplagt.no"
              aria-label="E-post"
              className="inline-flex h-10 w-10 items-center justify-center border border-white/15 text-white/60 transition-colors hover:border-aqua hover:text-aqua"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <nav className="flex flex-col gap-2">
          <h2 className="mb-1 font-archivo text-[11px] font-bold uppercase tracking-[0.16em] text-white/50">
            Tjenester
          </h2>
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

        <nav className="flex flex-col gap-2">
          <h2 className="mb-1 font-archivo text-[11px] font-bold uppercase tracking-[0.16em] text-white/50">
            Selskapet
          </h2>
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

        {/* Contact plate */}
        <div className="livery-notch bg-white/[0.04] p-6">
          <p className="mb-4 font-archivo text-[11px] font-bold uppercase tracking-[0.16em] text-white/50">
            Kontakt
          </p>
          {[
            { label: "E-post", val: "bli@heltopplagt.no" },
            { label: "Telefon", val: "02346" },
            { label: "Adresse", val: "Oslo, Norge" },
          ].map((item) => (
            <div key={item.label} className="mb-4">
              <p className="font-archivo text-[10px] font-bold uppercase tracking-[0.12em] text-white/50">
                {item.label}
              </p>
              <p className="mt-0.5 text-[14px] text-white/70">{item.val}</p>
            </div>
          ))}
          <Link
            to="/kontakt"
            className="livery-notch mt-1 inline-flex w-full items-center justify-center gap-2 bg-aqua px-5 py-2.5 font-archivo text-[12px] font-bold uppercase tracking-[0.12em] text-ink transition-colors hover:bg-white"
          >
            <Phone className="h-3.5 w-3.5" strokeWidth={2.5} />
            Send oss en melding
          </Link>
        </div>
      </div>

      <div className="border-t border-white/[0.06]">
        <div
          className={`${LIVERY_CONTAINER} flex flex-wrap items-center justify-between gap-2 py-5`}
        >
          <p className="text-[12px] text-white/50">
            &copy; {new Date().getFullYear()} Helt Opplagt AS. Alle rettigheter
            reservert.
          </p>
          <p className="font-archivo text-[11px] font-bold uppercase tracking-[0.14em] text-white/45">
            Helt Opplagt på jobben
          </p>
        </div>
      </div>
    </footer>
  );
}
