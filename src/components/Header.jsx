import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { smoothScroll } from '../lib/smoothScroll'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-primary flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">V</span>
                </div>
                <span className="text-xl font-bold text-foreground">VATHIUS</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a onClick={() => smoothScroll("home")} className="cursor-pointer text-foreground hover:text-primary transition-colors duration-200 px-3 py-2 text-sm font-medium">
                Start
              </a>
              <a onClick={() => smoothScroll("about")} className="cursor-pointer text-muted-foreground hover:text-primary transition-colors duration-200 px-3 py-2 text-sm font-medium">
                Über uns
              </a>
              <a onClick={() => smoothScroll("services")} className="cursor-pointer text-muted-foreground hover:text-primary transition-colors duration-200 px-3 py-2 text-sm font-medium">
                Dienstleistungen
              </a>
              <a onClick={() => smoothScroll("contact")} className="cursor-pointer text-muted-foreground hover:text-primary transition-colors duration-200 px-3 py-2 text-sm font-medium">
                Kontakt
              </a>
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Projekt besprechen
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              className="text-foreground hover:text-primary"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card border-t border-border">
              <a onClick={() => { smoothScroll("home"); toggleMenu(); }} className="cursor-pointer text-foreground hover:text-primary block px-3 py-2 text-base font-medium transition-colors duration-200">
                Start
              </a>
              <a onClick={() => { smoothScroll("about"); toggleMenu(); }} className="cursor-pointer text-muted-foreground hover:text-primary block px-3 py-2 text-base font-medium transition-colors duration-200">
                Über uns
              </a>
              <a onClick={() => { smoothScroll("services"); toggleMenu(); }} className="cursor-pointer text-muted-foreground hover:text-primary block px-3 py-2 text-base font-medium transition-colors duration-200">
                Dienstleistungen
              </a>
              <a onClick={() => { smoothScroll("contact"); toggleMenu(); }} className="cursor-pointer text-muted-foreground hover:text-primary block px-3 py-2 text-base font-medium transition-colors duration-200">
                Kontakt
              </a>
              <div className="px-3 py-2">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Projekt besprechen
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header

