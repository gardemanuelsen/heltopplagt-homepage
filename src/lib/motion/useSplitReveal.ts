import type { RefObject } from "react";
import { gsap, useGSAP, SplitText, MOTION_OK } from "./gsap";

interface SplitRevealOptions {
  selector?: string;
  /** Play on mount (hero) instead of when scrolled into view. */
  immediate?: boolean;
  /** Selector for descendants SplitText must leave intact (e.g. the payoff span). */
  ignore?: string;
}

/**
 * Headings marked `[data-split]` rise line by line out of masks. Waits for
 * `document.fonts.ready` so the line breaks are final before splitting; the
 * heading is hidden only for that wait, and only when motion is allowed.
 */
export function useSplitReveal(
  scope: RefObject<HTMLElement | null>,
  { selector = "[data-split]", immediate = false, ignore }: SplitRevealOptions = {}
) {
  useGSAP(
    () => {
      const root = scope.current;
      if (!root) return;
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const els = Array.from(root.querySelectorAll<HTMLElement>(selector));
        if (els.length === 0) return;
        let cancelled = false;
        const splits: SplitText[] = [];
        gsap.set(els, { autoAlpha: 0 });

        document.fonts.ready.then(() => {
          if (cancelled) return;
          els.forEach((el) => {
            gsap.set(el, { autoAlpha: 1 });
            splits.push(
              SplitText.create(el, {
                type: "lines",
                mask: "lines",
                autoSplit: true,
                ignore,
                onSplit: (self) =>
                  gsap.from(self.lines, {
                    yPercent: 110,
                    duration: 1,
                    stagger: 0.08,
                    ease: "expo.out",
                    scrollTrigger: immediate
                      ? undefined
                      : { trigger: el, start: "top 88%", once: true },
                  }),
              })
            );
          });
        });

        return () => {
          cancelled = true;
          splits.forEach((s) => s.revert());
        };
      });
      return () => mm.revert();
    },
    { scope }
  );
}
