import type { RefObject } from "react";
import { gsap, useGSAP, MOTION_OK } from "./gsap";

interface MarqueeOptions {
  pxPerSecond?: number;
}

/**
 * Drifts a track that contains its content TWICE (second copy aria-hidden)
 * by exactly half its width, forever, so the loop is seamless. Each item must
 * carry its own horizontal padding (no `gap` on the track) so both halves
 * measure the same. Pauses on hover and keyboard focus; the speed stays
 * constant when the track is resized.
 */
export function useMarquee(
  track: RefObject<HTMLElement | null>,
  { pxPerSecond = 50 }: MarqueeOptions = {}
) {
  useGSAP(
    () => {
      const el = track.current;
      if (!el) return;
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const secondsForWidth = () =>
          Math.max(1, el.scrollWidth / 2 / pxPerSecond);
        const tween = gsap.to(el, {
          xPercent: -50,
          ease: "none",
          repeat: -1,
          duration: secondsForWidth(),
        });
        const pause = () => tween.pause();
        const play = () => tween.play();
        el.addEventListener("mouseenter", pause);
        el.addEventListener("mouseleave", play);
        el.addEventListener("focusin", pause);
        el.addEventListener("focusout", play);
        const ro = new ResizeObserver(() => tween.duration(secondsForWidth()));
        ro.observe(el);
        return () => {
          ro.disconnect();
          el.removeEventListener("mouseenter", pause);
          el.removeEventListener("mouseleave", play);
          el.removeEventListener("focusin", pause);
          el.removeEventListener("focusout", play);
        };
      });
      return () => mm.revert();
    },
    { scope: track }
  );
}
