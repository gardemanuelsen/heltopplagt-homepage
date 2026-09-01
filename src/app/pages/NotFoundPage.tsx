import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { useDocumentMeta } from "../../lib/use-document-meta";

export function NotFoundPage() {
  useDocumentMeta(
    "Siden finnes ikke",
    "Siden du leter etter finnes ikke, eller har blitt flyttet."
  );

  return (
    <section className="min-h-dvh flex items-center justify-center bg-base-100 py-24 px-8">
      <div className="max-w-[520px] text-center">
        <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-primary mb-2.5">
          404
        </p>
        <h1 className="text-3xl lg:text-[40px] font-bold text-base-content tracking-tight leading-[1.15] mb-4">
          Siden finnes ikke
        </h1>
        <p className="text-base text-base-content/65 leading-relaxed mb-8">
          Siden du leter etter finnes ikke, eller har blitt flyttet. Sjekk
          adressen, eller gå tilbake til forsiden.
        </p>
        <Link to="/" className="btn btn-primary rounded-md h-auto px-6 py-3.5 text-sm font-medium">
          Til forsiden
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
