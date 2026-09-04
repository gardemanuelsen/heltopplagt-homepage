import type { RefObject } from "react";
import { gsap, useGSAP, MOTION_OK } from "./gsap";

interface RevealOptions {
  /** Play on mount (hero) instead of when scrolled into view. */
  immediate?: boolean;
  /** Extra delay before the first immediate reveal, in seconds. */
  delay?: number;
  /** Gap between immediate reveals / staggered children, in seconds. */
  stagger?: number;
  /** Rise distance in px. */
  y?: number;
}

/**
 * `[data-reveal]` descendants rise and fade in once, each when it enters the
 * viewport (or on mount with `immediate`). `[data-reveal-stagger]` animates
 * its children as one staggered batch. Nothing happens under reduced motion.
 */
export function useReveal(
  scope: RefObject<HTMLElement | null>,
  { immediate = false, delay = 0, stagger = 0.1, y = 40 }: RevealOptions = {}
) {
  useGSAP(
    () => {
      const root = scope.current;
      if (!root) return;
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        root.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el, i) => {
          gsap.from(el, {
            y,
            opacity: 0,
            duration: 0.9,
            delay: immediate ? delay + i * stagger : 0,
            scrollTrigger: immediate
              ? undefined
              : { trigger: el, start: "top 88%", once: true },
          });
        });
        root
          .querySelectorAll<HTMLElement>("[data-reveal-stagger]")
          .forEach((el) => {
            gsap.from(el.children, {
              y,
              opacity: 0,
              duration: 0.9,
              stagger,
              scrollTrigger: { trigger: el, start: "top 88%", once: true },
            });
          });
      });
      return () => mm.revert();
    },
    { scope }
  );
}
