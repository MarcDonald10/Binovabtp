'use client'

import { useState, useEffect } from 'react'
import { HeroSection } from '@/components/hero-section'
import { Mail, Phone, MapPin, Send, Clock, CheckCircle } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up')
        }
      })
    }, { threshold: 0.1 })

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <>
      {/* Hero Section */}
        <HeroSection
          title="Nous Contacter"
          description="Une question? Un projet à discuter? Notre équipe d'experts est prête à vous aider et à explorer les meilleures solutions pour vos besoins."
          backgroundImage="/hero-background.jpg"
          badge="Contactez-Nous"
        />

        {/* Contact Information Cards */}
        <section className="py-20 sm:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {[
                {
                  icon: <Phone className="w-8 h-8" />,
                  title: 'Téléphone',
                  content: '+237 655 167 040',
                  subtitle: 'Appelez-nous directement'
                },
                {
                  icon: <Mail className="w-8 h-8" />,
                  title: 'Email',
                  content: 'info@binova-rockbuilders.com',
                  subtitle: 'Réponse sous 24h'
                },
                {
                  icon: <MapPin className="w-8 h-8" />,
                  title: 'Adresse',
                  content: 'Bel Air, Kribi, Cameroun',
                  subtitle: 'Visitez notre bureau régional'
                }
              ].map((info, i) => (
                <div key={i} data-animate className=" p-8 bg-card border border-border/50 rounded-sm hover:border-accent hover:shadow-xl transition-all duration-300 group text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-sm flex items-center justify-center mx-auto mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                    <div className="text-accent group-hover:text-accent-foreground transition-colors">{info.icon}</div>
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-3">{info.title}</h3>
                  <p className="text-lg font-semibold text-foreground mb-2">{info.content}</p>
                  <p className="text-sm text-muted-foreground font-light">{info.subtitle}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Contact Form */}
              <div data-animate className="">
                <h2 className="text-4xl font-serif font-bold mb-8">Envoyez-Nous un Message</h2>
                
                {submitted ? (
                  <div className="p-12 bg-accent/10 border border-accent rounded-sm text-center">
                    <div className="w-16 h-16 bg-accent rounded-sm flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-8 h-8 text-accent-foreground" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold mb-2">Merci!</h3>
                    <p className="text-muted-foreground">Votre message a été envoyé avec succès. Nous vous répondrons sous 24 heures.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Nom</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Votre nom"
                        required
                        className="w-full px-4 py-3 bg-muted/50 border border-border rounded-sm focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold mb-2">Email</label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="votre@email.com"
                          required
                          className="w-full px-4 py-3 bg-muted/50 border border-border rounded-sm focus:outline-none focus:border-accent transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2">Téléphone</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="........."
                          className="w-full px-4 py-3 bg-muted/50 border border-border rounded-sm focus:outline-none focus:border-accent transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">Sujet</label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        placeholder="Sujet de votre demande"
                        required
                        className="w-full px-4 py-3 bg-muted/50 border border-border rounded-sm focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">Message</label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Décrivez votre demande..."
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-muted/50 border border-border rounded-sm focus:outline-none focus:border-accent transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full px-6 py-4 bg-accent text-accent-foreground rounded-sm font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                    >
                      <Send size={20} />
                      Envoyer le Message
                    </button>
                  </form>
                )}
              </div>

              {/* Additional Info */}
              <div className="space-y-8">
                <div data-animate className="">
                  <h3 className="text-3xl font-serif font-bold mb-6">Heures d&apos;Ouverture</h3>
                  <div className="space-y-3">
                    {[
                      { day: 'Lundi - Vendredi', hours: '08:00 - 18:00' },
                      { day: 'Samedi', hours: '09:00 - 13:00' },
                      { day: 'Dimanche', hours: 'Fermé' }
                    ].map((time, i) => (
                      <div key={i} className="flex justify-between items-center pb-3 border-b border-border/30">
                        <span className="font-medium">{time.day}</span>
                        <span className="text-muted-foreground font-light">{time.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div data-animate className="">
                  <h3 className="text-3xl font-serif font-bold mb-6">Temps de Réponse</h3>
                  <div className="space-y-4">
                    {[
                      { label: 'Email', time: 'Sous 24h' },
                      { label: 'Téléphone', time: 'Immédiat pendant les heures' },
                      { label: 'Devis Urgent', time: 'Sous 48h' }
                    ].map((response, i) => (
                      <div key={i} className="flex items-center gap-3 p-4 bg-muted/50 rounded-sm">
                        <Clock className="text-accent w-5 h-5 flex-shrink-0" />
                        <div className="flex-1">
                          <p className="font-semibold text-sm">{response.label}</p>
                          <p className="text-muted-foreground text-sm">{response.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* <div data-animate className=" p-6 bg-accent/10 border border-accent rounded-sm">
                  <p className="text-sm text-muted-foreground font-light">
                    <strong>Besoin d&apos;une estimation rapide?</strong> Utilisez notre <a href="/devis" className="text-accent font-semibold hover:underline">outil de devis IA</a> pour une première évaluation instantanée.
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </section>

        {/* Offices Section */}
        <section className="py-20 sm:py-32 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-serif font-bold mb-16 text-center">Nos Bureau Régionaux</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Siège Social',
                  address: 'Bel Air, Kribi, Cameroun',
                  phone: '+237 655 167 040',
                  email: 'info@binova-rockbuilders.com'
                }
              ].map((office, i) => (
                <div key={i} data-animate className=" p-8 bg-background border border-border/50 rounded-sm hover:border-accent hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-serif font-bold mb-4">{office.name}</h3>
                  <div className="space-y-3 text-sm">
                    <p className="text-muted-foreground font-light">{office.address}</p>
                    <p className="text-muted-foreground font-light">{office.phone}</p>
                    <p className="text-muted-foreground font-light">{office.email}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
    </>
  )
}
