

export function Hero() {
  return (
    <section id="hjem" className="relative bg-[#f5f9fc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl text-gray-900">
              Det <span className="text-[#2a76b8]">Helt Opplagte </span>valg for en sunnere, renere og enklere hverdag!
            </h1>
            <p className="text-lg lg:text-xl text-gray-600">
              Vi leverer profesjonelle fasilitetsløsninger som gjør hverdagen enklere for din bedrift. 
              Fra kantine til renhold – vi tar oss av alt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#kontakt"
                className="bg-[#2a76b8] text-white px-8 py-3 rounded-md hover:bg-[#152643] transition-colors text-center"
              >
                Kontakt oss i dag
              </a>
              <a
                href="#tjenester"
                className="border-2 border-[#2a76b8] text-[#2a76b8] px-8 py-3 rounded-md hover:bg-[#f5f9fc] transition-colors text-center"
              >
                Se våre tjenester
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.teamtailor-cdn.com/images/s3/teamtailor-production/user_picture_800_crop-v4/image_uploads/ad1e67e5-90ff-43d4-ab8c-c8eea0884b77/original.jpg"
                alt="Moderne kontorbygg i Oslo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}