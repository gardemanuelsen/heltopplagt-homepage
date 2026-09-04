/**
 * "Opplagt" — shared primitives for the 2026-09-01 homepage refresh.
 *
 * The whole system is four moves, borrowed from the reference sites and kept
 * deliberately small:
 *   1. Pill buttons (rounded-full) for every action.
 *   2. A kicker label ("/ VÅRE TJENESTER") over a light Lato display heading.
 *   3. Soft-rounded white cards on full tinted section grounds (cloud/sand).
 *   4. One arch photo crop (rounded-t-full) as the signature shape — hero and
 *      About only; every other image is a plain rounded rectangle.
 *
 * Colors come from DESIGN.md via the tokens in tailwind.css: brand, navy,
 * cloud, sand, plus lime for checks and amber for warm detail.
 */
import { type ReactNode } from "react";
import { Link } from "react-router";

export const CONTAINER =
  "mx-auto w-full max-w-[1360px] px-5 sm:px-8 lg:px-10";

/** Small uppercase section label with a brand-blue slash, Compass-style. */
export function Kicker({
  children,
  onDark = false,
}: {
  children: ReactNode;
  onDark?: boolean;
}) {
  return (
    <p
      className={
        "flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.16em] " +
        (onDark ? "text-white/60" : "text-navy/55")
      }
    >
      <span
        aria-hidden="true"
        className={"text-[14px] font-bold " + (onDark ? "text-aqua" : "text-brand")}
      >
        /
      </span>
      {children}
    </p>
  );
}

/** Section header: kicker + light Lato display heading, optional lede and action. */
export function SectionHead({
  kicker,
  title,
  lede,
  action,
  onDark = false,
}: {
  kicker: string;
  title: string;
  lede?: string;
  action?: ReactNode;
  onDark?: boolean;
}) {
  return (
    <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
      <div className="min-w-0 max-w-[46rem]">
        <Kicker onDark={onDark}>{kicker}</Kicker>
        <h2
          data-split
          className={
            "mt-4 font-lato text-[30px] font-light leading-[1.12] tracking-[-0.01em] sm:text-[38px] lg:text-[44px] " +
            (onDark ? "text-white" : "text-navy")
          }
        >
          {title}
        </h2>
        {lede && (
          <p
            className={
              "mt-4 max-w-[52ch] text-[15px] leading-relaxed lg:text-[16px] " +
              (onDark ? "text-white/70" : "text-navy/60")
            }
          >
            {lede}
          </p>
        )}
      </div>
      {action && <div className="flex-shrink-0">{action}</div>}
    </div>
  );
}

/** Every action on the site is a pill. */
export function Pill({
  to,
  href,
  children,
  variant = "primary",
  className = "",
  ...rest
}: {
  to?: string;
  href?: string;
  children: ReactNode;
  variant?: "primary" | "navy" | "outline" | "ghost-dark";
  className?: string;
} & Record<string, unknown>) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[14px] font-semibold transition-colors";
  const variants: Record<string, string> = {
    primary: "bg-brand text-white hover:bg-brand-deep",
    navy: "bg-navy text-white hover:bg-brand",
    outline:
      "border border-navy/20 text-navy hover:border-brand hover:text-brand",
    /* for use on the navy panel / footer */
    "ghost-dark":
      "border border-white/30 text-white hover:border-white hover:bg-white/10",
  };
  const cls = `${base} ${variants[variant]} ${className}`;
  if (to) {
    return (
      <Link to={to} className={cls} {...rest}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={cls} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" className={cls} {...rest}>
      {children}
    </button>
  );
}
