import type { RefObject } from "react";
import { gsap, useGSAP, MOTION_OK } from "./gsap";

interface ParallaxOptions {
  selector?: string;
  /** Drift in percent of the image's height, each way. */
  amount?: number;
}

/**
 * `[data-parallax]` images drift inside their (overflow-hidden, fixed-aspect)
 * frame as the frame crosses the viewport. The image is scaled up just enough
 * that the drift never exposes the frame's background.
 */
export function useParallax(
  scope: RefObject<HTMLElement | null>,
  { selector = "[data-parallax]", amount = 8 }: ParallaxOptions = {}
) {
  useGSAP(
    () => {
      const root = scope.current;
      if (!root) return;
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        root.querySelectorAll<HTMLElement>(selector).forEach((img) => {
          const frame = img.parentElement ?? img;
          const scale = 1 + amount / 50;
          gsap.fromTo(
            img,
            { yPercent: -amount, scale },
            {
              yPercent: amount,
              scale,
              ease: "none",
              scrollTrigger: {
                trigger: frame,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          );
        });
      });
      return () => mm.revert();
    },
    { scope }
  );
}
