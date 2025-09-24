import { Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-full border-2 border-primary flex items-center justify-center">
                <span className="text-primary font-bold text-sm">V</span>
              </div>
              <span className="text-xl font-bold text-foreground">VATHIUS</span>
            </div>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Ihr zuverlässiger Partner für Softwareentwicklung und IT-Personaldienstleistungen. 
              Massgeschneiderte Lösungen mit modernsten Technologien.
            </p>
            <div className="text-sm text-muted-foreground">
              © 2025 Vathius GmbH. Alle Rechte vorbehalten.
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  Start
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  Über uns
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  Dienstleistungen
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Kontakt</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a 
                  href="mailto:info@vathius.ch" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  info@vathius.ch
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <a 
                  href="tel:+41786569355" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  +41 78 656 93 55
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <a 
                  href="https://maps.google.com/?q=Hasenmattstrasse+39a,+4900+Langenthal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Hasenmattstrasse 39a<br />
                  4900 Langenthal
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            Vathius GmbH - Softwareentwicklung und Personaldienstleistung
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
              Impressum
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
              Datenschutz
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
              AGB
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

