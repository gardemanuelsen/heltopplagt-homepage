import { useState } from "react";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { About } from "../components/About";
import { CtaSection } from "../components/CtaSection";
import { Contact } from "../components/Contact";
import { FarmCta } from "../components/FarmCta";
import { References } from "../components/References";
import { Reviews } from "../components/Reviews";

export function HomePage() {
  const [quoteRequest, setQuoteRequest] = useState<{
    services: string[];
    companySize: string | null;
  } | null>(null);

  return (
    <>
      <Hero />
      <Services />
      <CtaSection
        onRequestQuote={(services, companySize) => setQuoteRequest({ services, companySize })}
      />
      <Reviews />
      <About />
      <FarmCta />
      <References />
      <Contact
        initialServices={quoteRequest?.services}
        initialCompanySize={quoteRequest?.companySize ?? null}
      />
    </>
  );
}
