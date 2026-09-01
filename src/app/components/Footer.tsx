import { Mail } from "lucide-react";
import { Link } from "react-router";
import logoSrc from "../../images/logo.png";

const serviceLinks = [
  { label: "Frukt", to: "/tjenester/frukt" },
  { label: "Kantine", to: "/tjenester/kantine" },
  { label: "Lunsj", to: "/tjenester/lunsj" },
  { label: "Renhold", to: "/tjenester/renhold" },
  { label: "Inneklima", to: "/tjenester/inneklima" },
  { label: "Catering", to: "/tjenester/catering" },
];
const companyLinks = [
  { label: "Om oss", to: "/om-oss" },
  { label: "Referanser", to: "/referanser" },
  { label: "Aktuelt", to: "/aktuelt" },
  { label: "Karriere", to: "/karriere" },
  { label: "Kontakt", to: "/kontakt" },
];

export function Footer() {
  return (
    <footer className="bg-neutral text-neutral-content">
      {/* Main grid */}
      <div className="footer sm:footer-horizontal max-w-[1280px] mx-auto px-8 pt-[72px] pb-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.6fr_2fr_1.4fr] gap-10 lg:gap-12">
        {/* Brand col */}
        <aside>
          <img src={logoSrc} alt="Helt Opplagt" className="h-[30px] object-contain brightness-0 invert mb-5" />
          <p className="text-sm text-neutral-content/45 leading-[1.75] max-w-[280px] mb-7">
            Profesjonelle fasilitetsløsninger for arbeidsplassen — kantine,
            renhold, frukt og mer.
          </p>
          <div className="flex gap-2">
            {[Mail].map((Icon, i) => (
              <div
                key={i}
                className="btn btn-circle btn-ghost bg-neutral-content/[0.07] text-neutral-content/60 hover:bg-primary hover:text-primary-content"
              >
                <Icon className="w-4 h-4" />
              </div>
            ))}
          </div>
        </aside>

        {/* Link columns — side by side on all screen sizes */}
        <div className="grid grid-cols-2 gap-8">
          <nav className="flex flex-col gap-0.5">
            <h6 className="footer-title text-neutral-content/30">Tjenester</h6>
            {serviceLinks.map((s) => (
              <Link key={s.to} to={s.to} className="link link-hover text-neutral-content/55 text-sm">
                {s.label}
              </Link>
            ))}
          </nav>

          <nav className="flex flex-col gap-0.5">
            <h6 className="footer-title text-neutral-content/30">Selskapet</h6>
            {companyLinks.map((l) => (
              <Link key={l.to} to={l.to} className="link link-hover text-neutral-content/55 text-sm">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact col */}
        <div className="bg-neutral-content/[0.04] rounded-xl px-6 py-7 md:col-span-2 lg:col-span-1">
          <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-neutral-content/30 mb-[18px]">
            Kontakt
          </p>
          {[
            { label: "E-post", val: "bli@heltopplagt.no" },
            { label: "Telefon", val: "02346" },
            { label: "Adresse", val: "Oslo, Norge" },
          ].map((item, i) => (
            <div key={i} className="mb-4">
              <p className="text-[10px] font-semibold tracking-[0.08em] uppercase text-neutral-content/30 mb-0.5">
                {item.label}
              </p>
              <p className="text-sm text-neutral-content/70">{item.val}</p>
            </div>
          ))}
          <Link to="/kontakt" className="btn btn-primary btn-sm w-full mt-2">
            Send oss en melding
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-neutral-content/[0.06] px-8 py-[18px]">
        <div className="max-w-[1280px] mx-auto flex justify-between items-center flex-wrap gap-2">
          <p className="text-xs text-neutral-content/25">
            &copy; {new Date().getFullYear()} Helt Opplagt AS. Alle rettigheter reservert.
          </p>
        </div>
      </div>
    </footer>
  );
}
