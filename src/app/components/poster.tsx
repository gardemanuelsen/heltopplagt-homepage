/**
 * "Poster" — shared primitives for the 2026-09-04 homepage redesign.
 *
 * Oversized Lato display type on a fluid scale (the `display-*`, `numeral*`,
 * `quote-scale`, `label-caps` utilities in tailwind.css), full-bleed photos,
 * navy and brand-blue blocks against white, and two radii only: `rounded-btn`
 * (4px) for controls and `rounded-photo` (8px) for framed photos. No pills,
 * no arches, no motifs.
 *
 * Colors are the DESIGN.md brand set: brand, navy, amber, lime, aqua, white.
 * lime/amber/aqua sit at ~2:1 on white, so they are only ever bars, squares,
 * plates behind navy text, or details on navy — never text on white.
 */
import { type CSSProperties, type ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import type { Accent } from "../../lib/services";
import { formatNb } from "../../lib/format";

export { formatNb };

/** Page wrap. Wider than the old 1360 so the poster type has room. */
export const WRAP = "mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-12 2xl:px-16";

/** Vertical rhythm for a standard section. */
export const SECTION_Y = "py-20 sm:py-28 lg:py-36";

/** Square icon button (prev/next, close, socials). Add border colour + hover. */
export const SQUARE_BTN =
  "inline-flex h-12 w-12 items-center justify-center rounded-btn border transition-colors";

/** Per-service accent colours as literal class strings so Tailwind sees them. */
export const ACCENT: Record<
  Accent,
  { text: string; bg: string; border: string; hex: string }
> = {
  lime: { text: "text-lime", bg: "bg-lime", border: "border-lime", hex: "#8dbe23" },
  amber: { text: "text-amber", bg: "bg-amber", border: "border-amber", hex: "#f8a924" },
  aqua: { text: "text-aqua", bg: "bg-aqua", border: "border-aqua", hex: "#70c4e9" },
};

type LabelTone = "navy" | "white" | "brand" | Accent;

const LABEL_TONES: Record<LabelTone, { text: string; bar: string }> = {
  navy: { text: "text-navy/60", bar: "bg-brand" },
  white: { text: "text-white/70", bar: "bg-amber" },
  brand: { text: "text-brand", bar: "bg-brand" },
  lime: { text: "text-navy/60", bar: "bg-lime" },
  amber: { text: "text-navy/60", bar: "bg-amber" },
  aqua: { text: "text-navy/60", bar: "bg-aqua" },
};

/** Kicker: a short 2px bar and a tracked caps label. */
export function Label({
  children,
  tone = "navy",
  className = "",
}: {
  children: ReactNode;
  tone?: LabelTone;
  className?: string;
}) {
  const t = LABEL_TONES[tone];
  return (
    <p className={`label-caps flex items-center gap-3 ${t.text} ${className}`}>
      <span aria-hidden="true" className={`h-[2px] w-8 flex-shrink-0 ${t.bar}`} />
      {children}
    </p>
  );
}

/**
 * Section head on a 12-column grid: label + display H2 across the first
 * eight columns, lede and action bottom-aligned in the last four.
 */
export function PosterHead({
  label,
  title,
  lede,
  action,
  onDark = false,
  id,
}: {
  label: string;
  title: string;
  lede?: string;
  action?: ReactNode;
  onDark?: boolean;
  id?: string;
}) {
  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-x-12">
      <div className="lg:col-span-8">
        <Label tone={onDark ? "white" : "navy"}>{label}</Label>
        <h2
          id={id}
          data-split
          className={
            "mt-5 display-1 max-w-[18ch] " + (onDark ? "text-white" : "text-navy")
          }
        >
          {title}
        </h2>
      </div>
      {(lede || action) && (
        <div className="flex flex-col items-start gap-6 lg:col-span-4 lg:pb-2">
          {lede && (
            <p
              className={
                "max-w-[38ch] text-[17px] leading-[1.55] " +
                (onDark ? "text-white/75" : "text-navy/65")
              }
            >
              {lede}
            </p>
          )}
          {action}
        </div>
      )}
    </div>
  );
}

type ButtonVariant =
  | "brand"
  | "navy"
  | "white"
  | "outline"
  | "outline-inverse"
  | "link"
  | "link-inverse";

const BUTTON_VARIANTS: Record<ButtonVariant, string> = {
  brand: "bg-brand text-white hover:bg-brand-deep",
  navy: "bg-navy text-white hover:bg-brand",
  white: "bg-white text-navy hover:bg-cloud",
  outline:
    "border border-navy/25 text-navy hover:border-navy hover:bg-navy hover:text-white",
  "outline-inverse":
    "border border-white/40 text-white hover:border-white hover:bg-white hover:text-navy",
  link: "text-brand underline-offset-[6px] hover:underline",
  "link-inverse": "text-white underline-offset-[6px] hover:underline",
};

const BUTTON_SIZES = {
  sm: "h-10 px-5 text-[14px]",
  md: "h-12 px-6 text-[15px]",
  lg: "h-14 px-8 text-[16px]",
};

/**
 * Every action. Rectangular (4px), semibold, optional sliding arrow. Renders a
 * router Link with `to`, an anchor with `href`, otherwise a button — extra
 * props (type="submit", target, aria-*) pass straight through.
 */
export function Button({
  to,
  href,
  children,
  variant = "brand",
  size = "md",
  arrow = false,
  className = "",
  ...rest
}: {
  to?: string;
  href?: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: keyof typeof BUTTON_SIZES;
  arrow?: boolean;
  className?: string;
} & Record<string, unknown>) {
  const isLink = variant === "link" || variant === "link-inverse";
  const cls = [
    "group inline-flex items-center justify-center gap-2.5 whitespace-nowrap font-semibold transition-colors duration-200",
    isLink ? "" : "rounded-btn",
    isLink ? "text-[15px]" : BUTTON_SIZES[size],
    BUTTON_VARIANTS[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");
  const body = (
    <>
      {children}
      {arrow && (
        <ArrowRight
          aria-hidden="true"
          className="h-4 w-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-1"
          strokeWidth={2.5}
        />
      )}
    </>
  );
  if (to) {
    return (
      <Link to={to} className={cls} {...rest}>
        {body}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={cls} {...rest}>
        {body}
      </a>
    );
  }
  return (
    <button type="button" className={cls} {...rest}>
      {body}
    </button>
  );
}

/** Zero-padded two-digit index, e.g. "01". Decorative. */
export function Index({
  n,
  className = "",
  style,
}: {
  n: number;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <span
      aria-hidden="true"
      className={`font-lato tabular-nums ${className}`}
      style={style}
    >
      {String(n).padStart(2, "0")}
    </span>
  );
}

/**
 * A big statistic. The final value is in the markup; `useCountUp` animates it
 * in from 0 when motion is allowed.
 */
export function Stat({
  value,
  suffix = "",
  label,
  tone = "white",
  size = "numeral",
  layout = "stack",
  className = "",
}: {
  value: number;
  suffix?: string;
  label: string;
  tone?: "white" | "navy";
  size?: "numeral" | "numeral-sm";
  /** `stack`: label under the numeral. `row`: numeral left, label right, for ruled lists. */
  layout?: "stack" | "row";
  className?: string;
}) {
  const dark = tone === "white";
  const row = layout === "row";
  return (
    <div
      className={
        (row ? "flex items-baseline justify-between gap-6 " : "") + className
      }
    >
      <p
        className={`${size} ${dark ? "text-white" : "text-navy"}`}
        data-countup={value}
        data-suffix={suffix}
      >
        {formatNb(value)}
        {suffix}
      </p>
      <p
        className={
          (row ? "text-right " : "mt-3 ") +
          "label-caps " +
          (dark ? "text-white/70" : "text-navy/60")
        }
      >
        {label}
      </p>
    </div>
  );
}
