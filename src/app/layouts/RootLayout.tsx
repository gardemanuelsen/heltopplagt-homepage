import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

/** Scroll to top on route change (unless navigating to an in-page anchor). */
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

export function RootLayout() {
  return (
    <div className="min-h-dvh bg-white">
      <ScrollToTop />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-base-100 focus:text-base-content focus:px-4 focus:py-2 focus:rounded-md focus:shadow-lg"
      >
        Hopp til hovedinnhold
      </a>
      <Header />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
