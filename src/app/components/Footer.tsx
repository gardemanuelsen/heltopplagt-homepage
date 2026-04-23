import { Linkedin, Mail } from "lucide-react";
import { Link } from "react-router";
import logoSrc from "../../images/logo.png";

const serviceLinks = ["Kantine", "Lunsj", "Frukt", "Renhold", "Inneklima", "Catering"];
const companyLinks = [
  { label: "Om oss", to: "/om-oss" },
  { label: "Referanser", to: "/referanser" },
  { label: "Aktuelt", to: "/aktuelt" },
  { label: "Karriere", to: "/karriere" },
  { label: "Kontakt", to: "/kontakt" },
];

export function Footer() {
  return (
    <footer className="bg-[#0d1a2d] text-white">
      {/* Main grid */}
      <div className="max-w-[1280px] mx-auto px-8 pt-[72px] pb-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.4fr] gap-12">
        {/* Brand col */}
        <div>
          <img
            src={logoSrc}
            alt="Helt Opplagt"
            className="h-[30px] brightness-0 invert mb-5"
          />
          <p className="text-sm text-white/[0.42] leading-[1.75] max-w-[280px] mb-7">
            Profesjonelle fasilitetsløsninger for arbeidsplassen — kantine,
            renhold, frukt og mer.
          </p>
          <div className="flex gap-2">
            {[Linkedin, Mail].map((Icon, i) => (
              <div
                key={i}
                className="w-9 h-9 rounded-full bg-white/[0.07] flex items-center justify-center cursor-pointer text-white/50 hover:bg-[#0078C4] hover:text-white transition-all duration-200"
              >
                <Icon className="w-4 h-4" />
              </div>
            ))}
          </div>
        </div>

        {/* Tjenester */}
        <div>
          <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-white/[0.28] mb-[18px]">
            Tjenester
          </p>
          <div className="flex flex-col gap-0.5">
            {serviceLinks.map((s) => (
              <Link
                key={s}
                to="/tjenester"
                className="text-sm text-white/[0.52] hover:text-white transition-colors py-[5px]"
              >
                {s}
              </Link>
            ))}
          </div>
        </div>

        {/* Selskapet */}
        <div>
          <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-white/[0.28] mb-[18px]">
            Selskapet
          </p>
          <div className="flex flex-col gap-0.5">
            {companyLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-sm text-white/[0.52] hover:text-white transition-colors py-[5px]"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact col */}
        <div className="bg-white/[0.04] rounded-xl px-6 py-7">
          <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-white/[0.28] mb-[18px]">
            Kontakt
          </p>
          {[
            { label: "E-post", val: "post@heltopplagt.no" },
            { label: "Telefon", val: "+47 22 00 00 00" },
            { label: "Adresse", val: "Oslo, Norge" },
          ].map((item, i) => (
            <div key={i} className="mb-4">
              <p className="text-[10px] font-semibold tracking-[0.08em] uppercase text-white/[0.28] mb-0.5">
                {item.label}
              </p>
              <p className="text-sm text-white/70">{item.val}</p>
            </div>
          ))}
          <Link
            to="/kontakt"
            className="mt-2 w-full block bg-[#0078C4] text-white text-center py-2.5 rounded-md text-[13px] font-medium hover:bg-[#0062a3] transition-colors"
          >
            Send oss en melding
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06] px-8 py-[18px]">
        <div className="max-w-[1280px] mx-auto flex justify-between items-center flex-wrap gap-2">
          <p className="text-xs text-white/25">
            &copy; {new Date().getFullYear()} Helt Opplagt AS. Alle rettigheter
            reservert.
          </p>
          <p className="text-xs text-white/25">ISO 9001 Sertifisert</p>
        </div>
      </div>
    </footer>
  );
}
