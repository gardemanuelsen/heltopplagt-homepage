import { ExternalLink, Mail, Menu, Phone, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router";
import logoSrc from "../../images/logo.png";
import { COMPANY_LINKS, SERVICES } from "../../lib/services";
import { gsap, useGSAP, MOTION_OK } from "../../lib/motion/gsap";
import { useHeaderHide } from "../../lib/motion/useHeaderHide";
import { Button, Index, Label, SQUARE_BTN, WRAP } from "./poster";

const FOCUSABLE =
  'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';

/**
 * Compact white bar (logo, the six services at lg+, phone, "Kontakt oss",
 * "Meny") that hides on scroll down and returns on scroll up, plus a
 * full-screen navy menu dialog where the services are set as giant numbered
 * links. React state, no Popover API, no daisyUI.
 */
export function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const menuBtnRef = useRef<HTMLButtonElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const closingRef = useRef(false);
  const closeRef = useRef<() => void>(() => {});
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const { show } = useHeaderHide(headerRef, { disabled: open });

  /* A navigation always closes the menu, instantly. */
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  /* Open/close motion. `revertOnUpdate` clears the previous context when
     `open` flips, so a half-finished tween never lingers. */
  const { contextSafe } = useGSAP(
    () => {
      const panel = panelRef.current;
      if (!open || !panel) return;
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        gsap.from(panel, { yPercent: -100, duration: 0.6, ease: "expo.out" });
        gsap.from("[data-menu-link]", {
          y: 32,
          opacity: 0,
          stagger: 0.04,
          duration: 0.6,
          delay: 0.15,
        });
      });
      return () => mm.revert();
    },
    { dependencies: [open], scope: panelRef, revertOnUpdate: true }
  );

  closeRef.current = contextSafe(() => {
    if (closingRef.current) return;
    const panel = panelRef.current;
    if (!panel || !window.matchMedia(MOTION_OK).matches) {
      setOpen(false);
      return;
    }
    closingRef.current = true;
    gsap.to(panel, {
      yPercent: -100,
      duration: 0.4,
      ease: "power3.in",
      onComplete: () => {
        closingRef.current = false;
        setOpen(false);
      },
    });
  });

  /* Dialog behaviour: scroll lock, Esc, focus in, focus trap, focus back. */
  useEffect(() => {
    if (!open) return;
    closingRef.current = false;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeRef.current();
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;
      const items = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)
      );
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
      menuBtnRef.current?.focus({ preventScroll: true });
    };
  }, [open]);

  return (
    <>
      <header
        ref={headerRef}
        onFocusCapture={show}
        className="sticky top-0 z-50 h-16 border-b border-navy/10 bg-white"
      >
        <div className={`${WRAP} flex h-full items-center gap-6`}>
          <Link to="/" className="flex-shrink-0">
            <img src={logoSrc} alt="Helt Opplagt" className="h-7 w-auto object-contain" />
          </Link>

          {/* The six services, directly clickable at lg+. Page links live in the menu. */}
          <nav aria-label="Tjenester" className="hidden items-center gap-6 lg:flex xl:gap-8">
            {SERVICES.map((s) => (
              <Link
                key={s.href}
                to={s.href}
                className="relative py-1 text-[14px] font-medium text-navy/75 transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-[2px] after:origin-left after:scale-x-0 after:bg-brand after:transition-transform after:duration-300 after:ease-out-expo hover:text-navy hover:after:scale-x-100"
              >
                {s.name}
              </Link>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-3">
            <a
              href="tel:02346"
              className="hidden items-center gap-2 text-[14px] font-semibold text-navy transition-colors hover:text-brand md:inline-flex"
            >
              <Phone className="h-4 w-4 text-brand" strokeWidth={2.25} />
              02346
            </a>
            <span className="hidden sm:inline-flex">
              <Button to="/kontakt" size="sm">
                Kontakt oss
              </Button>
            </span>
            <button
              ref={menuBtnRef}
              type="button"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-controls="site-menu"
              className="inline-flex h-10 items-center gap-2 rounded-btn border border-navy/25 px-4 text-[14px] font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
            >
              <Menu className="h-4 w-4" strokeWidth={2.25} />
              Meny
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div
          id="site-menu"
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Meny"
          className="fixed inset-0 z-[70] flex flex-col bg-navy text-white"
        >
          <div
            className={`${WRAP} flex h-16 flex-shrink-0 items-center justify-between border-b border-white/10`}
          >
            <Link to="/" className="flex-shrink-0">
              <img
                src={logoSrc}
                alt="Helt Opplagt"
                className="h-7 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <button
              ref={closeBtnRef}
              type="button"
              onClick={() => closeRef.current()}
              aria-label="Lukk meny"
              className={`${SQUARE_BTN} h-10 w-10 border-white/30 text-white hover:bg-white hover:text-navy`}
            >
              <X className="h-4 w-4" strokeWidth={2.25} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto">
            <div className={`${WRAP} grid gap-12 py-10 sm:grid-cols-12 sm:py-16`}>
              <nav aria-label="Tjenester" className="sm:col-span-7">
                <Label tone="white">Tjenester</Label>
                <ul className="mt-6">
                  {SERVICES.map((s, i) => (
                    <li key={s.href}>
                      <Link
                        to={s.href}
                        data-menu-link
                        className="group flex items-baseline gap-4 py-1.5 sm:py-2.5"
                      >
                        <Index n={i + 1} className="text-[13px] text-white/50" />
                        <span className="display-2 transition-colors group-hover:text-aqua">
                          {s.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <nav aria-label="Om Helt Opplagt" className="sm:col-span-5">
                <Label tone="white">Om Helt Opplagt</Label>
                <ul className="mt-6">
                  {COMPANY_LINKS.map((l) => (
                    <li key={l.to}>
                      <Link
                        to={l.to}
                        data-menu-link
                        className="display-3 block py-1 transition-colors hover:text-aqua sm:py-1.5"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>

          <div
            className={`${WRAP} flex flex-shrink-0 flex-wrap items-center justify-between gap-x-6 gap-y-3 border-t border-white/10 py-5 sm:py-6`}
          >
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 sm:gap-x-8">
              <a
                href="mailto:bli@heltopplagt.no"
                className="flex items-center gap-2 text-[14px] text-white/70 transition-colors hover:text-aqua"
              >
                <Mail className="h-4 w-4" />
                bli@heltopplagt.no
              </a>
              <a
                href="tel:02346"
                className="flex items-center gap-2 text-[14px] font-semibold text-white/70 transition-colors hover:text-aqua"
              >
                <Phone className="h-4 w-4" />
                02346
              </a>
            </div>
            <a
              href="https://www.linkedin.com/company/helt-opplagt"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={`${SQUARE_BTN} h-10 w-10 border-white/30 text-white hover:border-aqua hover:text-aqua`}
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
