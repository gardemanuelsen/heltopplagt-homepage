import { Contact } from "../components/Contact";

export function KontaktPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#f5f9fc] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl text-gray-900 mb-6">
              <span className="text-[#2a76b8]">Kontakt</span> oss
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Vi er her for å hjelpe deg med alle dine fasilitetsløsninger. 
              Ta kontakt for en uforpliktende samtale.
            </p>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
}
