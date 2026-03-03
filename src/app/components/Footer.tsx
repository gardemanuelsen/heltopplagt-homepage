import { Linkedin, Twitter, Mail, Instagram, ShoppingCart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#152643] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl text-[#66aedc] mb-4">Helt Opplagt</h3>
            <p className="text-gray-400 mb-4">
              Din pålitelige partner for profesjonelle fasilitetsløsninger i Oslo. 
              Vi leverer kvalitet og service som overgår forventningene.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg mb-4">Hurtiglenker</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-[#66aedc] transition-colors">
                  Hjem
                </a>
              </li>
              <li>
                <a href="/tjenester" className="text-gray-400 hover:text-[#66aedc] transition-colors">
                  Tjenester
                </a>
              </li>
              <li>
                <a href="/om-oss" className="text-gray-400 hover:text-[#66aedc] transition-colors">
                  Om oss
                </a>
              </li>
              <li>
                <a href="/kontakt" className="text-gray-400 hover:text-[#66aedc] transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg mb-4">Tjenester</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Kantine</li>
              <li>Lunsj</li>
              <li>Frukt</li>
              <li>Renhold</li>
              <li>Inneklima</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#2a76b8] text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Helt Opplagt. Alle rettigheter reservert.</p>
        </div>
      </div>
    </footer>
  );
}