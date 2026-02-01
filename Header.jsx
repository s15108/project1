import { Menu, Phone, Mail } from "lucide-react";
import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <a href="tel:+1234567890" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone className="w-4 h-4" />
              <span className="text-sm">+1 (234) 567-890</span>
            </a>
            <a href="mailto:info@govschool.edu" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Mail className="w-4 h-4" />
              <span className="text-sm">info@govschool.edu</span>
            </a>
          </div>
        </div>
      </div>

      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground text-xl">🎓</span>
            </div>
            <div>
              <h1 className="text-primary">Government High School</h1>
              <p className="text-sm text-muted-foreground">Excellence in Education</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 items-center">
            <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
            <li><a href="#academics" className="hover:text-primary transition-colors">Academics</a></li>
            <li><a href="#facilities" className="hover:text-primary transition-colors">Facilities</a></li>
            <li><a href="#admissions" className="hover:text-primary transition-colors">Admissions</a></li>
            <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="md:hidden mt-4 flex flex-col gap-3 pb-4">
            <li><a href="#home" className="block py-2 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Home</a></li>
            <li><a href="#about" className="block py-2 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>About</a></li>
            <li><a href="#academics" className="block py-2 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Academics</a></li>
            <li><a href="#facilities" className="block py-2 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Facilities</a></li>
            <li><a href="#admissions" className="block py-2 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Admissions</a></li>
            <li><a href="#contact" className="block py-2 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
          </ul>
        )}
      </nav>
    </header>
  );
}
export default Header;