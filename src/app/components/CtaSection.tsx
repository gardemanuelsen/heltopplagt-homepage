import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

export function CtaSection() {
  return (
    <section className="bg-[#f5f9fc] py-20 px-8 border-t border-gray-200">
      <div className="max-w-[860px] mx-auto text-center">
        <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#0078C4] mb-4">
          Kom i gang
        </p>
        <h2 className="text-3xl lg:text-[44px] font-bold text-gray-900 tracking-tight leading-[1.15] mb-4">
          Klar for det helt opplagte valget?
        </h2>
        <p className="text-[17px] text-gray-600 mb-9 leading-relaxed">
          Fortell oss om dine behov, så setter vi opp en skreddersydd løsning for
          din bedrift.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <Link
            to="/kontakt"
            className="bg-[#0078C4] text-white px-7 py-3.5 rounded-md text-[15px] font-medium hover:bg-[#0062a3] transition-colors inline-flex items-center gap-2"
          >
            Få gratis tilbud
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/om-oss"
            className="bg-white text-gray-700 border-[1.5px] border-gray-200 px-7 py-3.5 rounded-md text-[15px] font-medium hover:border-[#0078C4] hover:text-[#0078C4] transition-all"
          >
            Lær mer om oss
          </Link>
        </div>
      </div>
    </section>
  );
}
