import {
  Apple,
  ChefHat,
  ChevronDown,
  ExternalLink,
  Mail,
  Menu,
  Phone,
  Sandwich,
  Sparkles,
  UtensilsCrossed,
  Wind,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import logoSrc from "../../images/logo.png";
import { CONTAINER } from "./site";
import { SERVICES } from "./livery";

/** One icon per service for the small-screen dropdown. */
const SERVICE_ICONS: Record<string, LucideIcon> = {
  Frukt: Apple,
  Lunsj: Sandwich,
  Kantine: UtensilsCrossed,
  Catering: ChefHat,
  Inneklima: Wind,
  Renhold: Sparkles,
};

const secondaryLinks = [
  { label: "Om oss", to: "/om-oss" },
  { label: "Referanser", to: "/referanser" },
  { label: "Aktuelt", to: "/aktuelt" },
  { label: "Ansvar", to: "/ansvar" },
  { label: "Karriere", to: "/karriere" },
  { label: "Kontakt", to: "/kontakt" },
];

const MENU_POPOVER_ID = "header-menu-popover";
const MENU_LINK_STEP = 45;
const MENU_SECOND_COLUMN_START = 150;

function menuLinkDelay(row: number, col: number) {
  return col === 0
    ? row * MENU_LINK_STEP
    : MENU_SECOND_COLUMN_START + row * MENU_LINK_STEP;
}

function closeMenu() {
  const el = document.getElementById(MENU_POPOVER_ID) as
    | (HTMLElement & { hidePopover?: () => void })
    | null;
  el?.hidePopover?.();
}

export function Header() {
  const menuRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDetailsElement>(null);
  const [menuExpanded, setMenuExpanded] = useState(false);

  /* The <details>-based dropdown doesn't close on outside clicks by itself. */
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = servicesRef.current;
      if (el?.open && !el.contains(e.target as Node)) el.removeAttribute("open");
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    const el = menuRef.current;
    if (!el) return;
    const onToggle = (e: Event) => {
      const newState = (e as unknown as { newState?: string }).newState;
      if (newState === "open") {
        setMenuExpanded(false);
        requestAnimationFrame(() => setMenuExpanded(true));
        return;
      }
      setMenuExpanded(false);
    };
    el.addEventListener("toggle", onToggle);
    return () => el.removeEventListener("toggle", onToggle);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-navy/8 bg-white/95 backdrop-blur">
      <div className={`${CONTAINER} flex h-[4.5rem] items-center gap-5 lg:gap-7`}>
        <Link to="/" className="flex-shrink-0">
          <img src={logoSrc} alt="Helt Opplagt" className="h-8 object-contain" />
        </Link>

        {/* The six services, directly clickable (lg+). Page links live in the menu. */}
        <nav aria-label="Tjenester" className="hidden items-center gap-4 lg:flex xl:gap-6">
          {SERVICES.map((s) => (
            <Link
              key={s.href}
              to={s.href}
              className="text-[14px] font-medium text-navy/70 transition-colors hover:text-brand"
            >
              {s.name}
            </Link>
          ))}
        </nav>

        {/* Between sm and lg the services collapse into a dropdown. On phones
            it is hidden entirely — the fullscreen menu covers the services,
            and the dropdown was redundant next to it. */}
        <details ref={servicesRef} className="dropdown hidden sm:block lg:hidden">
          <summary className="flex cursor-pointer list-none items-center gap-1 text-[14px] font-medium text-navy/70 transition-colors hover:text-brand [&::-webkit-details-marker]:hidden">
            Tjenester
            <ChevronDown className="h-4 w-4" strokeWidth={2.25} />
          </summary>
          <ul className="dropdown-content menu z-[60] mt-3 w-52 rounded-2xl border border-navy/10 bg-white p-2 shadow-[0_16px_36px_-12px_rgba(13,43,64,0.25)]">
            {SERVICES.map((s) => {
              const Icon = SERVICE_ICONS[s.name] ?? ChevronDown;
              return (
                <li key={s.href}>
                  <Link
                    to={s.href}
                    onClick={() => servicesRef.current?.removeAttribute("open")}
                    className="flex items-center gap-2.5 rounded-xl px-4 py-2.5 text-[14px] font-medium text-navy hover:bg-cloud hover:text-brand"
                  >
                    <Icon
                      className="h-4 w-4 flex-shrink-0 text-brand"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                    {s.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </details>

        <div className="ml-auto flex items-center gap-2.5 sm:gap-3">
          <a
            href="tel:02346"
            className="hidden items-center gap-2 text-[14px] font-semibold text-navy transition-colors hover:text-brand md:flex"
          >
            <Phone className="h-4 w-4 text-brand" strokeWidth={2.25} />
            02346
          </a>

          <Link
            to="/kontakt"
            className="hidden items-center justify-center rounded-full bg-brand px-5 py-2.5 text-[13.5px] font-semibold text-white transition-colors hover:bg-brand-deep sm:inline-flex"
          >
            Kontakt oss
          </Link>

          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full border border-navy/20 px-4 py-2.5 text-[13.5px] font-semibold text-navy transition-colors hover:border-brand hover:text-brand"
            {...({ popovertarget: MENU_POPOVER_ID } as Record<string, string>)}
          >
            <Menu className="h-4 w-4" />
            Meny
          </button>
        </div>
      </div>

      {/* Full-page menu */}
      <div
        ref={menuRef}
        className="modal z-[70]"
        id={MENU_POPOVER_ID}
        {...({ popover: "auto" } as Record<string, string>)}
      >
        <div
          className={
            "modal-box flex h-full max-h-none w-full max-w-none flex-col rounded-none bg-navy p-0 text-white transition-[scale,opacity] duration-300 ease-out " +
            (menuExpanded ? "scale-100 opacity-100" : "scale-95 opacity-0")
          }
        >
          <div className="flex h-[4.5rem] flex-shrink-0 items-center justify-between border-b border-white/10 px-6 sm:px-8">
            <Link to="/" onClick={closeMenu} className="flex-shrink-0">
              <img
                src={logoSrc}
                alt="Helt Opplagt"
                className="h-8 object-contain brightness-0 invert"
              />
            </Link>
            <button
              type="button"
              aria-label="Lukk meny"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:border-white hover:bg-white/10"
              {...({
                popovertarget: MENU_POPOVER_ID,
                popovertargetaction: "hide",
              } as Record<string, string>)}
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Compact on mobile so all links fit without scrolling. */}
          <div className="flex-1 overflow-y-auto px-6 py-6 sm:px-8 sm:py-14">
            <div className="mx-auto grid max-w-[1000px] gap-6 sm:grid-cols-2 sm:gap-16">
              <nav>
                <p className="mb-2.5 flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-white/50 sm:mb-5">
                  <span aria-hidden="true" className="text-[14px] font-bold text-aqua">/</span>
                  Tjenester
                </p>
                <ul className="flex flex-col gap-1">
                  {SERVICES.map((s, i) => (
                    <li key={s.href} className="overflow-hidden">
                      <Link
                        to={s.href}
                        onClick={closeMenu}
                        style={{
                          transitionDelay: menuExpanded
                            ? `${menuLinkDelay(i, 0)}ms`
                            : "0ms",
                        }}
                        className={
                          "inline-block py-0.5 font-lato text-xl font-light tracking-[-0.01em] transition-[translate,opacity,color] duration-300 ease-out hover:text-aqua sm:py-1.5 sm:text-4xl " +
                          (menuExpanded
                            ? "translate-x-0 opacity-100"
                            : "-translate-x-3 opacity-0")
                        }
                      >
                        {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <nav>
                <p className="mb-2.5 flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-white/50 sm:mb-5">
                  <span aria-hidden="true" className="text-[14px] font-bold text-aqua">/</span>
                  Om Helt Opplagt
                </p>
                <ul className="flex flex-col gap-1">
                  {secondaryLinks.map((l, i) => (
                    <li key={l.to} className="overflow-hidden">
                      <Link
                        to={l.to}
                        onClick={closeMenu}
                        style={{
                          transitionDelay: menuExpanded
                            ? `${menuLinkDelay(i, 1)}ms`
                            : "0ms",
                        }}
                        className={
                          "inline-block py-0.5 font-lato text-xl font-light tracking-[-0.01em] transition-[translate,opacity,color] duration-300 ease-out hover:text-aqua sm:py-1.5 sm:text-4xl " +
                          (menuExpanded
                            ? "translate-x-0 opacity-100"
                            : "-translate-x-3 opacity-0")
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

          <div className="flex flex-shrink-0 flex-col items-start justify-between gap-4 border-t border-white/10 px-6 py-6 sm:flex-row sm:items-center sm:px-8">
            <div className="flex flex-col gap-2 sm:flex-row sm:gap-6">
              <a
                href="mailto:bli@heltopplagt.no"
                className="flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-aqua"
              >
                <Mail className="h-4 w-4" />
                bli@heltopplagt.no
              </a>
              <a
                href="tel:02346"
                className="flex items-center gap-2 text-sm font-semibold text-white/70 transition-colors hover:text-aqua"
              >
                <Phone className="h-4 w-4" />
                02346
              </a>
            </div>
            <a
              href="https://www.linkedin.com/company/helt-opplagt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:border-aqua hover:text-aqua"
              aria-label="LinkedIn"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="modal-backdrop">
          <button
            {...({
              popovertarget: MENU_POPOVER_ID,
              popovertargetaction: "hide",
            } as Record<string, string>)}
          >
            close
          </button>
        </div>
      </div>
    </header>
  );
}
