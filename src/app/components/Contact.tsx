import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

const services = ["Lunsj", "Katine", "Catering", "Frukt", "Inneklima", "Renhold"];

export function Contact() {
const [selectedServices, setSelectedServices] = useState<string[]>([]);

    const toggleCheckbox = (value: string) => {
    setSelectedServices(prev => 
      prev.includes(value) 
        ? prev.filter(item => item !== value) // Fjern hvis allerede valgt
        : [...prev, value]                    // Legg til hvis ikke valgt
    );
  };

  return (
    <section id="kontakt" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
                Kom i kontakt med oss
              </h2>
              <p className="text-lg text-gray-600">
                Vi er klare til å hjelpe deg med fasilitetsløsninger tilpasset dine behov. 
                Ta kontakt i dag for en uforpliktende samtale.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#f5f9fc] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#2a76b8]" />
                </div>
                <div>
                  <h3 className="text-lg text-gray-900 mb-1">
                    Telefon
                  </h3>
                  <a href="tel:+4722000000" className="text-gray-600 hover:text-[#2a76b8]">
                    +47 22 00 00 00
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#f5f9fc] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#2a76b8]" />
                </div>
                <div>
                  <h3 className="text-lg text-gray-900 mb-1">
                    E-post
                  </h3>
                  <a href="mailto:post@heltopplagt.no" className="text-gray-600 hover:text-[#2a76b8]">
                    post@heltopplagt.no
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#f5f9fc] rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#2a76b8]" />
                </div>
                <div>
                  <h3 className="text-lg text-gray-900 mb-1">
                    Adresse
                  </h3>
                  <p className="text-gray-600">
                    Oslo, Norge
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-700 mb-2">
                  Navn
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2a76b8] bg-white"
                  placeholder="Ditt navn"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm text-gray-700 mb-2">
                  Firmanavn
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2a76b8] bg-white"
                  placeholder="Ditt firmanavn"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
                  E-post
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2a76b8] bg-white"
                  placeholder="din@epost.no"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm text-gray-700 mb-2">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2a76b8] bg-white"
                  placeholder="+47 123 45 678"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-3">
                  Jeg er interessert i
                </label>
                <div className="space-y-3">
 {services.map(service => (
        <label key={service} className="flex items-center space-x-3 cursor-pointer">
          <input
            type="checkbox"
            checked={selectedServices.includes(service)}
            onChange={() => toggleCheckbox(service)}
          className="appearance-none w-5 h-5 border-2 border-[#2a76b8] rounded 
                   checked:bg-[#2a76b8] checked:border-[#2a76b8]
                   checked:bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22%23fff%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%223%22%20d%3D%22m6%2010%203%203%206-6%22%2F%3E%3C%2Fsvg%3E')] 
                   bg-center bg-no-repeat bg-[length:100%_100%]
                   focus:outline-none transition-all"
          />
          <span className="text-gray-700">{service}</span>
        </label>
      ))}


   
   
   


                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-gray-700 mb-2">
                  Melding
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2a76b8] bg-white"
                  placeholder="Beskriv dine behov..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#2a76b8] text-white px-8 py-3 rounded-md hover:bg-[#0062a3] transition-colors"
              >
                Send melding
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}