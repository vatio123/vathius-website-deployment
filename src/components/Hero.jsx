import { Button } from '@/components/ui/button'
import { ArrowRight, Code, Users } from 'lucide-react'
import heroBackground from '../assets/hero-background.png'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-background/60"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Ihr erfahrener{' '}
            <span className="text-primary bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              Softwareentwicklungs-Consultant
            </span>
            {' '}und{' '}
            <span className="text-primary bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              IT-Personalexperte
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Vathius GmbH bietet massgeschneiderte Softwarelösungen mit Schwerpunkt Java/Angular, Azure-Cloud und Event Sourcing (Kafka). 
            Wir schlagen die Brücke zwischen Business und Technik – von der Anforderung bis zum stabilen Betrieb.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group">
              Projekt besprechen
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-border hover:bg-card">
              Mehr erfahren
            </Button>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 hover:bg-card/70 transition-all duration-300 group">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4 mx-auto group-hover:bg-primary/20 transition-colors">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Softwareentwicklung</h3>
              <p className="text-muted-foreground text-sm">
                Erstklassige Web-Anwendungen und massgeschneiderte Lösungen mit modernsten Technologien
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 hover:bg-card/70 transition-all duration-300 group">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4 mx-auto group-hover:bg-primary/20 transition-colors">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Personaldienstleistung</h3>
              <p className="text-muted-foreground text-sm">
                Qualifizierte IT-Fachkräfte und umfassende Personalvermittlung für Ihr Unternehmen
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero

