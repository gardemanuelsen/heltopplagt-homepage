import { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SubService } from "./ServicePage";
import { Kicker } from "./site";

/**
 * Thumbnail strip for flipping between sub-pages that are variants of the same
 * product (fruit baskets, lunch boxes). Each variant keeps its own URL — a
 * click navigates to the sibling slug with `preserveScroll` so the page
 * doesn't jump to the top (see ScrollToTop in RootLayout).
 */
export function VariantSwitcher({
  label,
  items,
  activeSlug,
  basePath,
}: {
  /** Accessible name, e.g. "Velg fruktkurv". */
  label: string;
  /** The full variant set, in data order (includes the active one). */
  items: SubService[];
  activeSlug: string;
  basePath: string;
}) {
  const navigate = useNavigate();
  const rowRef = useRef<HTMLDivElement>(null);
  const thumbRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const mountedRef = useRef(false);

  const activeIndex = items.findIndex((s) => s.slug === activeSlug);

  function goTo(offset: number) {
    const target = items[(activeIndex + offset + items.length) % items.length];
    navigate(`${basePath}/${target.slug}`, {
      state: { preserveScroll: true },
    });
  }

  /* Keep the active thumb in view inside the strip. Horizontal-only scroll,
     deliberately NOT scrollIntoView — that also scrolls the PAGE vertically
     (see the same note in Reviews.tsx). */
  useEffect(() => {
    const row = rowRef.current;
    const el = thumbRefs.current[activeSlug];
    if (!row || !el) return;
    const left =
      el.getBoundingClientRect().left -
      row.getBoundingClientRect().left +
      row.scrollLeft -
      (row.clientWidth - el.clientWidth) / 2;
    row.scrollTo({ left, behavior: mountedRef.current ? "smooth" : "auto" });
    mountedRef.current = true;
  }, [activeSlug]);

  return (
    <nav aria-label={label}>
      <div className="flex items-end justify-between gap-4">
        <Kicker>{label}</Kicker>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => goTo(-1)}
            aria-label="Forrige"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy/20 text-navy transition-colors hover:border-brand hover:text-brand"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={2.5} />
          </button>
          <button
            type="button"
            onClick={() => goTo(1)}
            aria-label="Neste"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy/20 text-navy transition-colors hover:border-brand hover:text-brand"
          >
            <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
          </button>
        </div>
      </div>

      {/* px/pt so the cards' rings aren't clipped by the scroll container
          (rings draw outside the box); negative mx keeps the strip aligned
          with the section edge. */}
      <div
        ref={rowRef}
        className="mt-4 -mx-1 flex gap-3 overflow-x-auto px-1 pt-1 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((s) => {
          const active = s.slug === activeSlug;
          return (
            <Link
              key={s.slug}
              ref={(el) => {
                thumbRefs.current[s.slug] = el;
              }}
              to={`${basePath}/${s.slug}`}
              state={{ preserveScroll: true }}
              aria-current={active ? "page" : undefined}
              className={`w-[104px] flex-shrink-0 overflow-hidden rounded-[1rem] bg-white text-center shadow-[0_1px_2px_rgba(13,43,64,0.06)] transition-shadow sm:w-[120px] ${
                active
                  ? "ring-2 ring-brand"
                  : "ring-1 ring-navy/10 hover:shadow-[0_10px_24px_rgba(13,43,64,0.1)]"
              }`}
            >
              <span className="block aspect-square bg-white">
                <img
                  src={s.image}
                  alt=""
                  loading={active ? "eager" : "lazy"}
                  decoding="async"
                  className="h-full w-full object-contain p-2 mix-blend-multiply"
                />
              </span>
              <span className="block px-2 pb-3">
                <span
                  className={`block text-[13px] font-semibold leading-snug ${
                    active ? "text-brand" : "text-navy"
                  }`}
                >
                  {s.title}
                </span>
                {s.priceNote && (
                  <span className="mt-0.5 block text-[11px] text-navy/55">
                    {s.priceNote}
                  </span>
                )}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
