import { CheckCircle, Target, Users, Zap } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Zielorientiert",
      description: "Wir fokussieren uns auf Ihre Geschäftsziele und entwickeln Lösungen, die echten Mehrwert schaffen."
    },
    {
      icon: Users,
      title: "Teamwork",
      description: "Unser erfahrenes Team arbeitet eng mit Ihnen zusammen, um optimale Ergebnisse zu erzielen."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Wir setzen auf modernste Technologien und innovative Ansätze für zukunftssichere Lösungen."
    },
    {
      icon: CheckCircle,
      title: "Qualität",
      description: "Höchste Qualitätsstandards und sorgfältige Prüfungen garantieren erstklassige Ergebnisse."
    }
  ]

  return (
    <section id="about" className="py-20 bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Über Vathius GmbH
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Seit unserer Gründung sind wir Ihr vertrauensvoller Partner für Softwareentwicklung 
              und Personaldienstleistungen im IT-Bereich.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Unsere Mission
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Als erfahrener Consultant und Senior Full-Stack-Softwareentwickler mit Spezialisierung auf Java/Angular, Azure-Cloud und Event Sourcing (Kafka) 
                entwickelt Vathius GmbH massgeschneiderte, wartbare und skalierbare Lösungen. Wir verstehen es, die komplexen Anforderungen zwischen Business und Technik zu überbrücken.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Unsere Expertise erstreckt sich über den gesamten Lebenszyklus eines Projekts – von der Anforderungsanalyse über Architektur und Umsetzung bis hin zum stabilen Betrieb. 
                Wir bringen fundierte Enterprise-Erfahrung aus regulierten Umfeldern wie Versicherung, Banking und dem öffentlichen Sektor mit.
              </p>
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">Jahre Erfahrung</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Projekte</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Kundenzufriedenheit</div>
                </div>
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-blue-400/20 rounded-2xl p-8 backdrop-blur-sm border border-border">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-card/50 rounded-lg p-4 text-center">
                    <div className="text-lg font-semibold text-foreground">Web Apps</div>
                    <div className="text-sm text-muted-foreground">Moderne Lösungen</div>
                  </div>
                  <div className="bg-card/50 rounded-lg p-4 text-center">
                    <div className="text-lg font-semibold text-foreground">IT-Personal</div>
                    <div className="text-sm text-muted-foreground">Qualifizierte Fachkräfte</div>
                  </div>
                  <div className="bg-card/50 rounded-lg p-4 text-center">
                    <div className="text-lg font-semibold text-foreground">Beratung</div>
                    <div className="text-sm text-muted-foreground">Strategische Unterstützung</div>
                  </div>
                  <div className="bg-card/50 rounded-lg p-4 text-center">
                    <div className="text-lg font-semibold text-foreground">Support</div>
                    <div className="text-sm text-muted-foreground">Langfristige Betreuung</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground text-center mb-12">
              Unsere Werte
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const IconComponent = value.icon
                return (
                  <div key={index} className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 text-center hover:bg-card/70 transition-all duration-300 group">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4 mx-auto group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">{value.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

