import { Menu, X, Mail, Phone, Linkedin } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import logoSrc from "../../images/logo.png";
import { LIVERY_CONTAINER, SERVICES } from "./livery";

const secondaryLinks = [
  { label: "Om oss", to: "/om-oss" },
  { label: "Referanser", to: "/referanser" },
  { label: "Aktuelt", to: "/aktuelt" },
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
  const [menuExpanded, setMenuExpanded] = useState(false);

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
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-white text-ink">
      <div
        className={`${LIVERY_CONTAINER} flex h-16 items-center gap-6`}
      >
        <Link to="/" className="flex-shrink-0">
          <img src={logoSrc} alt="Helt Opplagt" className="h-8 object-contain" />
        </Link>

        <nav
          aria-label="Tjenester"
          className="hidden items-center gap-3.5 lg:flex xl:gap-5"
        >
          {SERVICES.map((s) => (
            <Link
              key={s.href}
              to={s.href}
              className="font-jakarta text-[13.5px] font-medium text-ink/70 transition-colors hover:text-signal"
            >
              {s.name}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          <div className="mr-1 hidden items-center gap-4 border-r border-ink/12 pr-4 lg:flex">
            <a
              href="mailto:bli@heltopplagt.no"
              className="flex items-center gap-1.5 text-[13px] text-ink/60 transition-colors hover:text-signal"
            >
              <Mail className="h-3.5 w-3.5" strokeWidth={2} />
              <span className="hidden xl:inline">bli@heltopplagt.no</span>
            </a>
            <a
              href="tel:02346"
              className="flex items-center gap-1.5 text-[13px] font-medium text-ink/75 transition-colors hover:text-signal"
            >
              <Phone className="h-3.5 w-3.5" strokeWidth={2} />
              02346
            </a>
          </div>

          <Link
            to="/kontakt"
            className="livery-notch hidden bg-deck px-4 py-2 font-jakarta text-[13px] font-semibold text-white transition-colors hover:bg-signal sm:inline-flex"
          >
            Kontakt oss
          </Link>

          <button
            type="button"
            className="inline-flex items-center gap-1.5 border border-ink/25 px-3.5 py-2 font-jakarta text-[13px] font-semibold text-ink transition-colors hover:border-signal hover:text-signal"
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
            "modal-box flex h-full max-h-none w-full max-w-none flex-col rounded-none bg-ink p-0 text-white transition-[scale,opacity] duration-300 ease-out " +
            (menuExpanded ? "scale-100 opacity-100" : "scale-95 opacity-0")
          }
        >
          <div className="flex h-16 flex-shrink-0 items-center justify-between border-b border-white/10 px-6 sm:px-8">
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
              className="inline-flex h-9 w-9 items-center justify-center border border-white/20 text-white"
              {...({
                popovertarget: MENU_POPOVER_ID,
                popovertargetaction: "hide",
              } as Record<string, string>)}
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-10 sm:px-8 sm:py-14">
            <div className="mx-auto grid max-w-[1000px] gap-10 sm:grid-cols-2 sm:gap-16">
              <nav>
                <p className="mb-4 font-jakarta text-[12px] font-semibold uppercase tracking-[0.08em] text-aqua">
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
                          "inline-block py-1.5 font-jakarta text-2xl font-bold tracking-tight transition-[translate,opacity,color] duration-300 ease-out hover:text-aqua sm:text-3xl " +
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
                <p className="mb-4 font-jakarta text-[12px] font-semibold uppercase tracking-[0.08em] text-aqua">
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
                          "inline-block py-1.5 font-jakarta text-2xl font-bold tracking-tight transition-[translate,opacity,color] duration-300 ease-out hover:text-aqua sm:text-3xl " +
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
                className="flex items-center gap-2 font-archivo text-sm font-bold uppercase tracking-[0.12em] text-white/70 transition-colors hover:text-aqua"
              >
                <Phone className="h-4 w-4" />
                02346
              </a>
            </div>
            <a
              href="https://www.linkedin.com/company/helt-opplagt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center border border-white/20 text-white transition-colors hover:border-aqua hover:text-aqua"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
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
