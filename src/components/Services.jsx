import { Button } from '@/components/ui/button'
import { Code, Smartphone, Globe, Database, Users, Search, Clock, Shield } from 'lucide-react'

const Services = () => {
  const softwareServices = [
    {
      icon: Globe,
      title: "Web-Anwendungen",
      description: "Entwicklung moderner, responsiver Web-Anwendungen mit Fokus auf Java/Spring Boot und Angular."
    },
    {
      icon: Database,
      title: "Cloud-Lösungen (Azure)",
      description: "Migration und Entwicklung von Anwendungen in der Azure-Cloud, inklusive Microservices und Kubernetes."
    },
    {
      icon: Code,
      title: "Event Sourcing (Kafka)",
      description: "Implementierung von Event Sourcing Architekturen mit Apache Kafka für skalierbare und wartbare Systeme."
    },
    {
      icon: Code,
      title: "Enterprise-Lösungen",
      description: "Skalierbare Unternehmenssoftware und Datenbanklösungen für komplexe Geschäftsprozesse in regulierten Umfeldern (Versicherung, Banking)."
    },
    {
      icon: Code,
      title: "Beratung & Konzeption",
      description: "Strategische IT-Beratung, Architekturdesign und technische Konzeption für Ihre digitalen Projekte."
    }
  ]

  const personalServices = [
    {
      icon: Search,
      title: "IT-Personalvermittlung",
      description: "Vermittlung von qualifizierten Softwareentwicklern, Consultants und IT-Spezialisten (mit Personalverleih-Lizenz)."
    },
    {
      icon: Clock,
      title: "Temporäre Einsätze",
      description: "Flexible Personallösungen für Projekte und Überbrückung von Personalengpässen."
    },
    {
      icon: Users,
      title: "Projektbasierte Teams",
      description: "Zusammenstellung kompletter Entwicklungsteams für Ihre Projekte mit allen benötigten Kompetenzen."
    },
    {
      icon: Shield,
      title: "Recruiting-Services",
      description: "Umfassende Rekrutierungsdienstleistungen von der Stellenausschreibung bis zur Einstellung."
    }
  ]

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Unsere Expertise und Dienstleistungen
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Vathius GmbH bietet spezialisierte Lösungen in der Softwareentwicklung und Personaldienstleistung, 
              basierend auf langjähriger Erfahrung und tiefgreifendem technischem Know-how.
            </p>
          </div>

          {/* Software Development Section */}
          <div className="mb-20">
            <div className="bg-gradient-to-r from-primary/10 to-blue-400/10 rounded-2xl p-8 mb-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Softwareentwicklung & Consulting</h3>
                  <p className="text-muted-foreground">Massgeschneiderte, skalierbare und wartbare Lösungen</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {softwareServices.map((service, index) => {
                  const IconComponent = service.icon
                  return (
                    <div key={index} className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 hover:bg-card/70 transition-all duration-300 group">
                      <div className="flex items-start space-x-4">
                        <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors flex-shrink-0">
                          <IconComponent className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-foreground mb-2">{service.title}</h4>
                          <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Personnel Services Section */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-blue-400/10 to-primary/10 rounded-2xl p-8 mb-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">IT-Personaldienstleistung</h3>
                  <p className="text-muted-foreground">Qualifizierte IT-Fachkräfte für Ihr Team</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {personalServices.map((service, index) => {
                  const IconComponent = service.icon
                  return (
                    <div key={index} className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 hover:bg-card/70 transition-all duration-300 group">
                      <div className="flex items-start space-x-4">
                        <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors flex-shrink-0">
                          <IconComponent className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-foreground mb-2">{service.title}</h4>
                          <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-card/30 rounded-2xl p-8 border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Bereit für Ihr nächstes Projekt?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Kontaktieren Sie uns für eine kostenlose Beratung und erfahren Sie, 
              wie wir Ihr Unternehmen mit unserer End-to-End-Expertise unterstützen können.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Kostenlose Beratung
              </Button>
              <Button size="lg" variant="outline" className="border-border hover:bg-card">
                Portfolio ansehen
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services


