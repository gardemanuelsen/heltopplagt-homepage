import { Menu, X, ChevronDown, Mail, Phone, Linkedin } from "lucide-react";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Link } from "react-router";
import logoSrc from "../../images/logo.png";
import fruktIcon from "../../images/icons/fruktkurv (1).png";
import lunsjIcon from "../../images/icons/lunsj (1).png";
import kantineIcon from "../../images/icons/jobbsmoothie (1).png";
import cateringIcon from "../../images/icons/catering (1).png";
import inneklimaIcon from "../../images/icons/inneklima (1).png";
import renholdIcon from "../../images/icons/renhold (1).png";

const services = [
  { label: "Frukt", to: "/tjenester/frukt", desc: "Du bestemmer størrelse og innhold.", icon: fruktIcon },
  { label: "Lunsj", to: "/tjenester/lunsj", desc: "For 5 personer og oppover.", icon: lunsjIcon },
  { label: "Kantine", to: "/tjenester/kantine", desc: "Fullservice lunsjavvikling.", icon: kantineIcon },
  { label: "Catering", to: "/tjenester/catering", desc: "Fra varmmat til møtemat.", icon: cateringIcon },
  { label: "Inneklima", to: "/tjenester/inneklima", desc: "Ren luft, rett temperatur.", icon: inneklimaIcon },
  { label: "Renhold", to: "/tjenester/renhold", desc: "Bedre trivsel og arbeidsmiljø.", icon: renholdIcon },
];

const secondaryLinks = [
  { label: "Om oss", to: "/om-oss" },
  { label: "Referanser", to: "/referanser" },
  { label: "Aktuelt", to: "/aktuelt" },
  { label: "Karriere", to: "/karriere" },
  { label: "Kontakt", to: "/kontakt" },
];

const SERVICES_POPOVER_ID = "header-services-popover";
const SERVICES_ANCHOR = "--header-services-anchor";
const MENU_POPOVER_ID = "header-menu-popover";

const MENU_LINK_STEP = 45;
/** A small head start for "Tjenester" before "Om Helt Opplagt" begins its own cascade. */
const MENU_SECOND_COLUMN_START = 150;

/** Stagger delay so each column cascades top to bottom, with the second column starting a beat after the first. */
function menuLinkDelay(row: number, col: number) {
  return col === 0 ? row * MENU_LINK_STEP : MENU_SECOND_COLUMN_START + row * MENU_LINK_STEP;
}

function closeMenu() {
  const el = document.getElementById(MENU_POPOVER_ID) as (HTMLElement & { hidePopover?: () => void }) | null;
  el?.hidePopover?.();
}

export function Header() {
  const menuRef = useRef<HTMLDivElement>(null);
  const [menuExpanded, setMenuExpanded] = useState(false);

  useEffect(() => {
    const el = menuRef.current;
    if (!el) return;
    const onToggle = (e: Event) => {
      const newState = (e as any).newState;
      if (newState === "open") {
        setMenuExpanded(false);
        const raf = requestAnimationFrame(() => setMenuExpanded(true));
        return () => cancelAnimationFrame(raf);
      }
      setMenuExpanded(false);
    };
    el.addEventListener("toggle", onToggle);
    return () => el.removeEventListener("toggle", onToggle);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-base-100 border-b border-base-300">
      <div className="navbar max-w-[1440px] 2xl:max-w-[1560px] 3xl:max-w-[1680px] 4xl:max-w-[1800px] 5xl:max-w-[1920px] mx-auto h-20 px-8 2xl:px-12 3xl:px-16 4xl:px-20 5xl:px-24">
        {/* Left: Logo + contact + Tjenester */}
        <div className="navbar-start flex items-center gap-6">
          <Link to="/" className="flex-shrink-0">
            <img src={logoSrc} alt="Helt Opplagt" className="h-9 object-contain" />
          </Link>

          <div className="hidden lg:flex items-center gap-4 pl-4 pr-4 border-l border-r border-base-300">
            <a
              href="mailto:bli@heltopplagt.no"
              className="flex items-center gap-1.5 text-[11px] text-base-content/40 hover:text-primary transition-colors"
            >
              <Mail className="w-3 h-3" />
              bli@heltopplagt.no
            </a>
            <a
              href="tel:02346"
              className="flex items-center gap-1.5 text-[11px] text-base-content/40 hover:text-primary transition-colors"
            >
              <Phone className="w-3 h-3" />
              02346
            </a>
          </div>

          <button
            type="button"
            className="hidden md:inline-flex xl:hidden btn btn-ghost hover:bg-transparent border-transparent hover:!border-transparent shadow-none hover:!shadow-none btn-sm text-sm font-medium text-base-content normal-case"
            style={{ anchorName: SERVICES_ANCHOR } as CSSProperties}
            {...({ popovertarget: SERVICES_POPOVER_ID } as any)}
          >
            Tjenester
            <ChevronDown className="w-3 h-3" />
          </button>
          <div
            className="dropdown card card-sm bg-base-100 border border-base-300 shadow-[0_16px_48px_rgba(0,0,0,0.12)] z-[200] w-[600px] max-w-[90vw] mt-4"
            id={SERVICES_POPOVER_ID}
            style={{ positionAnchor: SERVICES_ANCHOR } as CSSProperties}
            {...({ popover: "auto" } as any)}
          >
            <div className="card-body p-2 grid grid-cols-2 gap-0.5">
              {services.map((s) => {
                return (
                  <Link
                    key={s.label}
                    to={s.to}
                    className="flex items-center gap-3 px-3.5 py-3 rounded-lg text-left hover:bg-base-200 transition-colors"
                  >
                    <span
                      aria-hidden="true"
                      className="inline-block w-[22px] h-[22px] bg-primary flex-shrink-0"
                      style={{
                        maskImage: `url("${s.icon}")`,
                        maskSize: "contain",
                        maskRepeat: "no-repeat",
                        maskPosition: "center",
                        WebkitMaskImage: `url("${s.icon}")`,
                        WebkitMaskSize: "contain",
                        WebkitMaskRepeat: "no-repeat",
                        WebkitMaskPosition: "center",
                      }}
                    />
                    <span>
                      <span className="block text-[13px] font-semibold text-base-content mb-px">
                        {s.label}
                      </span>
                      <span className="block text-xs text-base-content/60">{s.desc}</span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Monitor sizes: services listed out directly instead of behind the dropdown */}
          <div className="hidden xl:flex items-center gap-5">
            {services.map((s) => (
              <Link
                key={s.label}
                to={s.to}
                className="text-sm font-medium text-base-content/70 hover:text-primary transition-colors whitespace-nowrap"
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Right: Kontakt oss + menu */}
        <div className="navbar-end flex items-center gap-3">
          <Link
            to="/kontakt"
            className="btn btn-sm btn-secondary rounded-full whitespace-nowrap"
          >
            Kontakt oss
          </Link>

          <button
            type="button"
            className="btn btn-sm rounded-full btn-ghost hover:bg-transparent border border-base-300 hover:!border-base-300 shadow-none hover:!shadow-none text-base-content normal-case gap-1.5"
            {...({ popovertarget: MENU_POPOVER_ID } as any)}
          >
            <Menu className="w-4 h-4" />
            Meny
          </button>
        </div>
      </div>

      {/* Full-page menu */}
      <div
        ref={menuRef}
        className="modal z-[300]"
        id={MENU_POPOVER_ID}
        {...({ popover: "auto" } as any)}
      >
        <div
          className={
            menuExpanded
              ? "modal-box scale-100 opacity-100 transition-[scale,opacity] duration-300 ease-out w-full h-full max-w-none max-h-none rounded-none p-0 bg-neutral text-neutral-content flex flex-col"
              : "modal-box scale-95 opacity-0 transition-[scale,opacity] duration-300 ease-out w-full h-full max-w-none max-h-none rounded-none p-0 bg-neutral text-neutral-content flex flex-col"
          }
        >
          {/* Top bar, matches the real header's position */}
          <div className="h-20 px-6 sm:px-8 flex items-center justify-between border-b border-neutral-content/10 flex-shrink-0">
            <Link to="/" onClick={closeMenu} className="flex-shrink-0">
              <img src={logoSrc} alt="Helt Opplagt" className="h-9 object-contain brightness-0 invert" />
            </Link>
            <button
              type="button"
              aria-label="Lukk meny"
              className="btn btn-circle btn-sm btn-ghost border border-neutral-content/20 text-neutral-content"
              {...({ popovertarget: MENU_POPOVER_ID, popovertargetaction: "hide" } as any)}
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Links */}
          <div className="flex-1 overflow-y-auto px-6 sm:px-8 py-10 sm:py-14">
            <div className="max-w-[1000px] mx-auto grid sm:grid-cols-2 gap-10 sm:gap-16">
              <nav>
                <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-neutral-content/40 mb-4">
                  Tjenester
                </p>
                <ul className="flex flex-col gap-1">
                  {services.map((s, i) => (
                    <li key={s.label} className="overflow-hidden">
                      <Link
                        to={s.to}
                        onClick={closeMenu}
                        style={{ transitionDelay: menuExpanded ? `${menuLinkDelay(i, 0)}ms` : "0ms" }}
                        className={
                          menuExpanded
                            ? "inline-block py-1.5 text-2xl sm:text-3xl font-bold tracking-tight text-neutral-content hover:text-primary translate-x-0 opacity-100 transition-[translate,opacity,color] duration-300 ease-out"
                            : "inline-block py-1.5 text-2xl sm:text-3xl font-bold tracking-tight text-neutral-content hover:text-primary -translate-x-3 opacity-0 transition-[translate,opacity,color] duration-300 ease-out"
                        }
                      >
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <nav>
                <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-neutral-content/40 mb-4">
                  Om Helt Opplagt
                </p>
                <ul className="flex flex-col gap-1">
                  {secondaryLinks.map((l, i) => (
                    <li key={l.to} className="overflow-hidden">
                      <Link
                        to={l.to}
                        onClick={closeMenu}
                        style={{ transitionDelay: menuExpanded ? `${menuLinkDelay(i, 1)}ms` : "0ms" }}
                        className={
                          menuExpanded
                            ? "inline-block py-1.5 text-2xl sm:text-3xl font-bold tracking-tight text-neutral-content hover:text-primary translate-x-0 opacity-100 transition-[translate,opacity,color] duration-300 ease-out"
                            : "inline-block py-1.5 text-2xl sm:text-3xl font-bold tracking-tight text-neutral-content hover:text-primary -translate-x-3 opacity-0 transition-[translate,opacity,color] duration-300 ease-out"
                        }
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>

          {/* Contact footer */}
          <div className="flex-shrink-0 border-t border-neutral-content/10 px-6 sm:px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
              <a
                href="mailto:bli@heltopplagt.no"
                className="flex items-center gap-2 text-sm text-neutral-content/70 hover:text-neutral-content transition-colors"
              >
                <Mail className="w-4 h-4" />
                bli@heltopplagt.no
              </a>
              <a
                href="tel:02346"
                className="flex items-center gap-2 text-sm text-neutral-content/70 hover:text-neutral-content transition-colors"
              >
                <Phone className="w-4 h-4" />
                02346
              </a>
            </div>
            <a
              href="https://www.linkedin.com/company/helt-opplagt"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-circle btn-sm btn-ghost border border-neutral-content/20 text-neutral-content"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
        <div className="modal-backdrop">
          <button {...({ popovertarget: MENU_POPOVER_ID, popovertargetaction: "hide" } as any)}>close</button>
        </div>
      </div>
    </header>
  );
}
