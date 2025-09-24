import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      message: ''
    })
    alert('Vielen Dank für Ihre Nachricht! Wir melden uns bald bei Ihnen.')
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "E-Mail",
      value: "info@vathius.ch",
      link: "mailto:info@vathius.ch"
    },
    {
      icon: Phone,
      title: "Telefon",
      value: "+41 78 656 93 55",
      link: "tel:+41786569355"
    },
    {
      icon: MapPin,
      title: "Adresse",
      value: "Hasenmattstrasse 39a, 4900 Langenthal",
      link: "https://maps.google.com/?q=Hasenmattstrasse+39a,+4900+Langenthal"
    }
  ]

  return (
    <section id="contact" className="py-20 bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Kontaktieren Sie uns
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Haben Sie Fragen zu unseren Dienstleistungen oder möchten Sie ein Projekt besprechen? 
              Wir freuen uns auf Ihre Nachricht.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-8">
                Sprechen wir über Ihr Projekt
              </h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-1">{info.title}</h4>
                        <a 
                          href={info.link}
                          className="text-muted-foreground hover:text-primary transition-colors duration-200"
                          target={info.title === "Adresse" ? "_blank" : undefined}
                          rel={info.title === "Adresse" ? "noopener noreferrer" : undefined}
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-blue-400/10 rounded-2xl p-6 border border-border">
                <h4 className="text-lg font-semibold text-foreground mb-3">
                  Warum Vathius wählen?
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Kostenlose Erstberatung
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Transparente Kommunikation
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Schnelle Reaktionszeiten
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Langfristige Partnerschaften
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Nachricht senden
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-background/50 border-border focus:border-primary"
                        placeholder="Ihr Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        E-Mail *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-background/50 border-border focus:border-primary"
                        placeholder="ihre@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Unternehmen
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="bg-background/50 border-border focus:border-primary"
                      placeholder="Ihr Unternehmen"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Nachricht *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-background/50 border-border focus:border-primary resize-none"
                      placeholder="Beschreiben Sie Ihr Projekt oder Ihre Anfrage..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group"
                  >
                    Nachricht senden
                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

