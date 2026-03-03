import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import logoSrc from "../../images/logo.jpg";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src={logoSrc} alt="Helt Opplagt" className="h-10" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/referanser" className="text-gray-700 hover:text-[#2a76b8] transition-colors">
              Referanser
            </Link>
            <Link to="/om-oss" className="text-gray-700 hover:text-[#2a76b8] transition-colors">
              Om oss
            </Link>
            <Link to="/aktuelt" className="text-gray-700 hover:text-[#2a76b8] transition-colors">
              Aktuelt
            </Link>
            <Link to="/ansvar" className="text-gray-700 hover:text-[#2a76b8] transition-colors">
              Ansvar
            </Link>
            <Link to="/kontakt" className="text-gray-700 hover:text-[#2a76b8] transition-colors">
              Kontakt
            </Link>
            <Link to="/karriere" className="text-gray-700 hover:text-[#2a76b8] transition-colors">
              Karriere
            </Link>
            <Link
              to="/kontakt"
              className="bg-[#2a76b8] text-white px-6 py-2 rounded-md hover:bg-[#152643] transition-colors"
            >
              Få tilbud
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-[#2a76b8]"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link
                to="/referanser"
                className="text-gray-700 hover:text-[#2a76b8] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Referanser
              </Link>
              <Link
                to="/om-oss"
                className="text-gray-700 hover:text-[#2a76b8] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Om oss
              </Link>
              <Link
                to="/aktuelt"
                className="text-gray-700 hover:text-[#2a76b8] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Aktuelt
              </Link>
              <Link
                to="/ansvar"
                className="text-gray-700 hover:text-[#2a76b8] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Ansvar
              </Link>
              <Link
                to="/kontakt"
                className="text-gray-700 hover:text-[#2a76b8] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Kontakt
              </Link>
              <Link
                to="/karriere"
                className="text-gray-700 hover:text-[#2a76b8] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Karriere
              </Link>
              <Link
                to="/kontakt"
                className="bg-[#2a76b8] text-white px-6 py-2 rounded-md hover:bg-[#152643] transition-colors text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Få tilbud
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}