import { Contact } from "../components/Contact";
import { PageHero } from "../components/PageHero";
import { useDocumentMeta } from "../../lib/use-document-meta";

export function KontaktPage() {
  useDocumentMeta(
    "Kontakt",
    "Fortell oss om behovene deres, så finner vi løsningen som passer. Vi svarer raskt, som regel samme dag."
  );

  return (
    <div className="min-h-dvh bg-white">
      <PageHero
        eyebrow="Kontakt"
        title={
          <>
            La oss ta en{" "}
            <span className="text-[#0078C4] italic font-light">
              uforpliktende prat
            </span>
          </>
        }
        description="Fortell oss om behovene deres, så finner vi løsningen som passer. Vi svarer raskt — som regel samme dag."
      />

      <Contact />
    </div>
  );
}
