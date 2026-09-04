/**
 * Bildekoren / "The Livery" — shared primitives for the redesigned homepage world.
 *
 * The drawn, repeating marks a fleet identity is built from: the stencil plate,
 * the riveted window-cut panel, the reflective chevron seam, the notched CTA.
 * Every homepage section is assembled from exactly these.
 */
import { type ReactNode } from "react";
import { Link } from "react-router";

export const LIVERY_CONTAINER =
  "mx-auto w-full max-w-[1440px] 2xl:max-w-[1560px] 3xl:max-w-[1680px] 4xl:max-w-[1800px] 5xl:max-w-[1920px] px-6 sm:px-8 2xl:px-12 3xl:px-16 4xl:px-20 5xl:px-24";

/* The service data now lives in src/lib/services.ts; re-exported here for the
   pages that still import it from this module. */
export { SERVICES } from "../../lib/services";
export type { Service as LiveryService } from "../../lib/services";

/**
 * Small stencil-cut plate: a tracked-caps label. Overlays photo panels and tags cards.
 */
export function StencilPlate({
  label,
  tone = "signal",
  className = "",
}: {
  label: string;
  tone?: "signal" | "aqua" | "onblue" | "ink";
  className?: string;
}) {
  const tones: Record<string, string> = {
    signal: "bg-signal text-white",
    aqua: "bg-aqua text-ink",
    onblue: "bg-white/12 text-white",
    ink: "bg-ink text-white",
  };
  return (
    <span
      className={
        "inline-flex items-center px-3 py-1 font-jakarta text-[12px] font-semibold tracking-[0.01em] " +
        tones[tone] +
        " " +
        className
      }
    >
      {label}
    </span>
  );
}

/**
 * The per-section heading: a plain name of the section, set calmly in the
 * corporate heading face, with one real proof fact as a plain caption beneath.
 */
export function SectionPlate({
  title,
  proof,
  onBlue = false,
  action,
}: {
  title: string;
  proof?: string;
  onBlue?: boolean;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
      <div className="min-w-0">
        <h2
          className={
            "whitespace-pre-line font-jakarta text-[26px] font-bold leading-[1.15] tracking-[-0.015em] sm:text-[32px] lg:text-[38px] " +
            (onBlue ? "text-white" : "text-ink")
          }
        >
          {title}
        </h2>
        {proof && (
          <p
            className={
              "mt-3 max-w-[52ch] text-[15px] leading-relaxed " +
              (onBlue ? "text-white/70" : "text-ink/60")
            }
          >
            {proof}
          </p>
        )}
      </div>
      {action && <div className="flex-shrink-0">{action}</div>}
    </div>
  );
}

/** A single calm hairline between major sections. */
export function Seam() {
  return <div aria-hidden="true" className="livery-seam" />;
}

/** Primary action — deep-blue fill, white text, notched. Ghost variants for light/dark grounds. */
export function LiveryCta({
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
  variant?: "primary" | "ghost-light" | "ghost-dark";
  className?: string;
} & Record<string, unknown>) {
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3 font-jakarta text-[14px] font-semibold transition-colors livery-notch";
  const variants: Record<string, string> = {
    primary: "bg-deck text-white hover:bg-signal",
    "ghost-light":
      "border border-white/40 text-white hover:border-white hover:bg-white/10",
    "ghost-dark":
      "border border-ink/25 text-ink hover:border-signal hover:text-signal",
  };
  const cls = `${base} ${variants[variant]} ${className}`;
  if (to) {
    return (
      <Link to={to} className={cls} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={cls} {...rest}>
      {children}
    </a>
  );
}
