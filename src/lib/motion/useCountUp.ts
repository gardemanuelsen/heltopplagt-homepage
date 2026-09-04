import type { RefObject } from "react";
import { formatNb } from "../format";
import { gsap, useGSAP, MOTION_OK } from "./gsap";

interface CountUpOptions {
  selector?: string;
  duration?: number;
}

/**
 * `[data-countup="12000"][data-suffix="+"]` elements count up from 0 once
 * they enter the viewport. The markup already holds the final formatted
 * value, so with motion off the number is simply correct.
 */
export function useCountUp(
  scope: RefObject<HTMLElement | null>,
  { selector = "[data-countup]", duration = 1.6 }: CountUpOptions = {}
) {
  useGSAP(
    () => {
      const root = scope.current;
      if (!root) return;
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const restore: Array<() => void> = [];
        root.querySelectorAll<HTMLElement>(selector).forEach((el) => {
          const end = Number(el.dataset.countup);
          if (!Number.isFinite(end)) return;
          const suffix = el.dataset.suffix ?? "";
          const original = el.textContent;
          restore.push(() => {
            el.textContent = original;
          });
          const proxy = { v: 0 };
          el.textContent = formatNb(0) + suffix;
          gsap.to(proxy, {
            v: end,
            duration,
            ease: "power2.out",
            snap: { v: 1 },
            onUpdate: () => {
              el.textContent = formatNb(proxy.v) + suffix;
            },
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          });
        });
        return () => restore.forEach((fn) => fn());
      });
      return () => mm.revert();
    },
    { scope }
  );
}
