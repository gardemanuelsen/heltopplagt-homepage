import { useCallback, useEffect, useRef, type RefObject } from "react";
import { gsap, useGSAP, ScrollTrigger, MOTION_OK } from "./gsap";

interface HeaderHideOptions {
  /** Scroll depth below which the header always shows, in px. */
  threshold?: number;
  /** While true (menu open) the header stays visible. */
  disabled?: boolean;
}

/**
 * Slides a sticky header out of view on scroll down and back in on scroll
 * up. Under reduced motion the header simply never hides. Returns `show()`
 * for callers that must reveal it (e.g. when a header link receives focus).
 */
export function useHeaderHide(
  header: RefObject<HTMLElement | null>,
  { threshold = 80, disabled = false }: HeaderHideOptions = {}
) {
  const disabledRef = useRef(disabled);
  disabledRef.current = disabled;
  const showRef = useRef<() => void>(() => {});

  useGSAP(
    () => {
      const el = header.current;
      if (!el) return;
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        let hidden = false;
        const setHidden = (next: boolean) => {
          if (next === hidden) return;
          hidden = next;
          gsap.to(el, {
            yPercent: next ? -100 : 0,
            duration: 0.35,
            ease: "power2.out",
            overwrite: true,
          });
        };
        showRef.current = () => setHidden(false);
        ScrollTrigger.create({
          start: 0,
          end: "max",
          onUpdate: (self) => {
            if (disabledRef.current) return setHidden(false);
            setHidden(!(self.scroll() < threshold || self.direction === -1));
          },
        });
        return () => {
          showRef.current = () => {};
        };
      });
      return () => mm.revert();
    },
    { scope: header }
  );

  useEffect(() => {
    if (disabled) showRef.current();
  }, [disabled]);

  const show = useCallback(() => showRef.current(), []);
  return { show };
}
