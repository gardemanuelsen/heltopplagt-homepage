/**
 * The ONE place gsap is imported from the package. Components and hooks import
 * `gsap`, `useGSAP`, `ScrollTrigger`, `SplitText`, `Observer` from here so the
 * plugins are registered exactly once.
 *
 * The motion contract for the site:
 *   1. Every tween and ScrollTrigger is created inside
 *      `gsap.matchMedia().add(MOTION_OK, …)` (or `DESKTOP` for triggers that
 *      only change React state). With reduced motion the callbacks never run,
 *      so every element is simply visible, nothing pins and nothing drifts.
 *   2. No CSS ever hides content waiting for JS. Initial hidden states come
 *      only from `gsap.from` / `gsap.set` inside those callbacks.
 *   3. Every hook runs inside `useGSAP(…, { scope })`, so the context reverts
 *      on unmount; imperative handlers go through `contextSafe`.
 *   4. Every image sits in a fixed-aspect box, and `ScrollTriggerRefresher`
 *      (RootLayout) refreshes on route change, fonts-ready and load.
 */
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { Observer } from "gsap/Observer";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText, Observer);
gsap.defaults({ ease: "power3.out", duration: 0.8 });
ScrollTrigger.config({ ignoreMobileResize: true });

export const MOTION_OK = "(prefers-reduced-motion: no-preference)";
export const DESKTOP = "(min-width: 64rem)";

export { gsap, useGSAP, ScrollTrigger, SplitText, Observer };
