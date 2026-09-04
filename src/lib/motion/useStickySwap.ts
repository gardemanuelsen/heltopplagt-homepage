import { useRef, type RefObject } from "react";
import { gsap, useGSAP, ScrollTrigger, DESKTOP } from "./gsap";

interface StickySwapOptions {
  /** Selector for the rows, in document order. */
  rows: string;
  /** Called with the index of the row currently crossing the viewport's middle. */
  onChange: (index: number) => void;
}

/**
 * Tells a sticky panel which row is "current" as the user scrolls a list at
 * lg+. This only changes React state, so it is gated on viewport width, not
 * on reduced motion — the panel's own crossfade is CSS `motion-safe:`.
 */
export function useStickySwap(
  scope: RefObject<HTMLElement | null>,
  { rows, onChange }: StickySwapOptions
) {
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;

  useGSAP(
    () => {
      const root = scope.current;
      if (!root) return;
      const mm = gsap.matchMedia();
      mm.add(DESKTOP, () => {
        root.querySelectorAll<HTMLElement>(rows).forEach((row, i) => {
          ScrollTrigger.create({
            trigger: row,
            start: "top 55%",
            end: "bottom 55%",
            onToggle: (self) => {
              if (self.isActive) onChangeRef.current(i);
            },
          });
        });
      });
      return () => mm.revert();
    },
    { scope }
  );
}
