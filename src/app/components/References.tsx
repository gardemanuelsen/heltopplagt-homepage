export function References() {
  const clients = [
    "DNB",
    "Telenor",
    "Equinor",
    "Schibsted",
    "Aftenposten",
    "Oslo Kommune",
    "Nordea",
    "Statoil",
  ];

  return (
    <section className="py-12 bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-sm text-gray-600 uppercase tracking-wider mb-4">
            Våre kunder
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center text-gray-400 hover:text-[#2a76b8] transition-colors"
            >
              <span className="text-lg">{client}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
