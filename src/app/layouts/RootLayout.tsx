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
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
