import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary-foreground rounded-full flex items-center justify-center">
                <span className="text-primary text-lg">🎓</span>
              </div>
              <h3>Government High School</h3>
            </div>
            <p className="opacity-90">
              Excellence in Education since 1975
            </p>
          </div>

          <div>
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-2 opacity-90">
              <li><a href="#about" className="hover:opacity-70 transition-opacity">About Us</a></li>
              <li><a href="#academics" className="hover:opacity-70 transition-opacity">Academics</a></li>
              <li><a href="#facilities" className="hover:opacity-70 transition-opacity">Facilities</a></li>
              <li><a href="#admissions" className="hover:opacity-70 transition-opacity">Admissions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Information</h4>
            <ul className="space-y-2 opacity-90">
              <li><a href="#" className="hover:opacity-70 transition-opacity">Faculty</a></li>
              <li><a href="#" className="hover:opacity-70 transition-opacity">Events</a></li>
              <li><a href="#" className="hover:opacity-70 transition-opacity">News</a></li>
              <li><a href="#" className="hover:opacity-70 transition-opacity">Gallery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Connect With Us</h4>
            <div className="flex gap-3 mb-4">
              <a href="#" className="w-10 h-10 bg-primary-foreground text-primary rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground text-primary rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground text-primary rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground text-primary rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            <p className="opacity-90 text-sm">
              Stay updated with our latest news and events
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center opacity-90">
          <p>© {currentYear} Government High School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;