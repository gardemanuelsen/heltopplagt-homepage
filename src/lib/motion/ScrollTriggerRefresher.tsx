import { useEffect } from "react";
import { useLocation } from "react-router";
import { ScrollTrigger } from "./gsap";

/**
 * Keeps ScrollTrigger's measurements honest: refreshes after every route
 * change (once the new page has laid out and ScrollToTop has run), when the
 * web fonts finish loading, and on window load. Renders nothing.
 */
export function ScrollTriggerRefresher() {
  const { pathname } = useLocation();

  useEffect(() => {
    const id = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh();
    document.fonts.ready.then(refresh);
    window.addEventListener("load", refresh, { once: true });
    return () => window.removeEventListener("load", refresh);
  }, []);

  return null;
}
