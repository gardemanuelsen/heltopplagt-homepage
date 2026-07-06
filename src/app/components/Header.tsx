import { Menu, X, ChevronDown, Utensils, Coffee, Apple, Sparkles, Wind, Mail, Phone } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import logoSrc from "../../images/logo.png";

const services = [
  { label: "Frukt", to: "/tjenester/frukt", desc: "Du bestemmer størrelse og innhold.", icon: Apple },
  { label: "Lunsj", to: "/tjenester/lunsj", desc: "For 5 personer og oppover.", icon: Coffee },
  { label: "Kantine", to: "/tjenester/kantine", desc: "Fullservice lunsjavvikling.", icon: Utensils },
  { label: "Catering", to: "/tjenester/catering", desc: "Fra varmmat til møtemat.", icon: Utensils },
  { label: "Inneklima", to: "/tjenester/inneklima", desc: "Ren luft, rett temperatur.", icon: Wind },
  { label: "Renhold", to: "/tjenester/renhold", desc: "Bedre trivsel og arbeidsmiljø.", icon: Sparkles },
];

const navLinks = [
  { label: "Om oss", to: "/om-oss" },
  { label: "Referanser", to: "/referanser" },
  { label: "Aktuelt", to: "/aktuelt" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-4 sm:px-6 pt-4 pointer-events-none">
      {/* Floating pill */}
      <div
        className={`pointer-events-auto max-w-[1180px] mx-auto h-[72px] bg-white/90 backdrop-blur-xl border border-gray-200/80 rounded-full pl-3 pr-3 sm:pl-6 sm:pr-3.5 grid grid-cols-[1fr_auto_1fr] items-center transition-shadow duration-300 ${
          scrolled
            ? "shadow-[0_10px_32px_rgba(13,26,45,0.14)]"
            : "shadow-[0_2px_12px_rgba(13,26,45,0.06)]"
        }`}
      >
        {/* Left: Logo + contact */}
        <div className="flex items-center gap-4">
          <Link to="/" className="flex-shrink-0 pl-2 sm:pl-0">
            <img src={logoSrc} alt="Helt Opplagt" className="h-[32px]" />
          </Link>
          <div className="hidden lg:flex items-center gap-4 pl-4 border-l border-gray-200">
            <a
              href="mailto:bli@heltopplagt.no"
              className="flex items-center gap-1.5 text-[11px] text-gray-400 hover:text-[#0078C4] transition-colors"
            >
              <Mail className="w-3 h-3" />
              bli@heltopplagt.no
            </a>
            <a
              href="tel:02346"
              className="flex items-center gap-1.5 text-[11px] text-gray-400 hover:text-[#0078C4] transition-colors"
            >
              <Phone className="w-3 h-3" />
              02346
            </a>
          </div>
        </div>

        {/* Center: Nav (desktop) */}
        <nav className="hidden md:flex items-center gap-0.5">
          {/* Tjenester dropdown */}
          <div
            ref={dropdownRef}
            className="relative inline-block"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 px-3.5 py-1.5 rounded-full text-sm font-medium text-gray-700 hover:text-[#0078C4] transition-colors">
              Tjenester
              <ChevronDown
                className={`w-3 h-3 transition-transform duration-200 ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {dropdownOpen && (
              <div
                className="absolute top-[calc(100%+22px)] left-1/2 -translate-x-1/2 bg-white rounded-2xl border border-gray-200 shadow-[0_16px_48px_rgba(0,0,0,0.12)] p-2 min-w-[600px] grid grid-cols-2 gap-0.5 z-[200]
                before:content-[''] before:absolute before:-top-6 before:left-0 before:w-full before:h-6"
              >
                {services.map((s) => {
                  const Icon = s.icon;
                  return (
                    <Link
                      key={s.label}
                      to={s.to}
                      onClick={() => setDropdownOpen(false)}
                      className="flex items-center gap-3 px-3.5 py-3 rounded-lg text-left hover:bg-[#f5f9fc] transition-colors"
                    >
                      <Icon className="w-[22px] h-[22px] text-[#0078C4] flex-shrink-0" strokeWidth={1.75} />
                      <span>
                        <span className="block text-[13px] font-semibold text-gray-900 mb-px">
                          {s.label}
                        </span>
                        <span className="block text-xs text-gray-600">{s.desc}</span>
                      </span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-3.5 py-1.5 rounded-full text-sm font-medium text-gray-700 hover:text-[#0078C4] transition-colors whitespace-nowrap"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Right: CTA (desktop) */}
        <div className="hidden md:flex items-center justify-end">
          <Link
            to="/kontakt"
            className="bg-[#152643] text-white px-6 py-2.5 rounded-full border-2 border-[#152643] text-sm font-medium hover:bg-white hover:text-[#152643] transition-colors whitespace-nowrap"
          >
            Kontakt oss
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex justify-end pr-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-700 hover:text-[#0078C4]"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation panel */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto md:hidden max-w-[1180px] mx-auto mt-2 bg-white/95 backdrop-blur-xl border border-gray-200/80 rounded-2xl shadow-[0_16px_48px_rgba(13,26,45,0.14)] py-4 px-5">
          <div className="flex flex-col space-y-1">
            <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-gray-400 mt-1 mb-2">
              Tjenester
            </p>
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.label}
                  to={s.to}
                  className="flex items-center gap-3 px-2 py-2 rounded-lg text-gray-700 hover:bg-[#f5f9fc] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Icon className="w-5 h-5 text-[#0078C4]" strokeWidth={1.75} />
                  <span className="text-sm font-medium">{s.label}</span>
                </Link>
              );
            })}
            <div className="border-t border-gray-200 my-2" />
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="px-2 py-2 text-sm font-medium text-gray-700 hover:text-[#0078C4] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/kontakt"
              className="bg-[#152643] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#0078C4] transition-colors text-center mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Kontakt oss
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
