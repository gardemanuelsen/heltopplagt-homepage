import { Star } from "lucide-react";

const reviews = [
  {
    name: "Kristin Hansen",
    company: "DNB",
    role: "Fasilitetssjef",
    rating: 5,
    text: "Helt Opplagt har vært en uvurderlig partner for oss. Deres kantineløsning er førsteklasses, og medarbeiderne våre setter stor pris på den varierte og sunne menyen.",
  },
  {
    name: "Anders Johansen",
    company: "Telenor",
    role: "HR-direktør",
    text: "Vi har samarbeidet med Helt Opplagt i over 5 år, og de leverer konsekvent høy kvalitet. Renholdet er alltid upåklagelig, og de er svært fleksible ved behov.",
    rating: 5,
  },
  {
    name: "Maria Bergström",
    company: "Schibsted",
    role: "Kontorsjef",
    text: "Profesjonell service fra A til Å. Fruktordningen og lunsjtjenesten har blitt svært populær hos våre ansatte. Anbefales på det varmeste!",
    rating: 5,
  },
  {
    name: "Thomas Andersen",
    company: "Oslo Kommune",
    role: "Driftsansvarlig",
    text: "Helt Opplagt har gjort arbeidsdagen vår betydelig enklere. De håndterer alt fra inneklima til renhold med en profesjonalitet som er enestående.",
    rating: 5,
  },
];

export function Reviews() {
  return (
    <section className="py-20 lg:py-32 bg-[#f5f9fc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
            Hva kundene våre sier
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Vi er stolte av å levere førsteklasses service til våre kunder
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#2a76b8] text-[#2a76b8]" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 mb-6 italic">
                "{review.text}"
              </p>

              {/* Reviewer Info */}
              <div className="border-t border-gray-200 pt-4">
                <p className="text-gray-900">{review.name}</p>
                <p className="text-sm text-gray-600">
                  {review.role}, {review.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
