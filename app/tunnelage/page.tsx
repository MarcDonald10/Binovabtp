'use client'

import { HeroSection } from '@/components/hero-section'
import Link from 'next/link'
import { ArrowRight, Target, Zap, ShieldCheck, TrendingUp, CheckCircle } from 'lucide-react'
import { useEffect } from 'react'

export default function Tunnelage() {
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

  return (
    <>
      {/* Hero Section */}
        <HeroSection
          title="Expertise en Tunnelage Premium"
          description="Techniques avancées et leadership technologique pour vos infrastructures souterraines les plus complexes. 25+ années d'excellence et 500+ projets réussis."
          backgroundImage="/tunnelage-hero.jpg"
          badge="Expertise Tunnelage"
          primaryCTA={{ text: 'Demander un Devis', href: '/devis' }}
          secondaryCTA={{ text: 'Nos Services', href: '#services' }}
        />

        {/* Overview Section */}
        <section className="py-20 sm:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div data-animate className="opacity-0">
                <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-8 leading-tight">Qu&apos;est-ce que le Tunnelage?</h2>
                <p className="text-lg text-muted-foreground mb-6 font-light leading-relaxed">
                  Le tunnelage est une technique spécialisée de travaux souterrains permettant la création de galeries et de tunnels à travers les formations géologiques les plus difficiles.
                </p>
                <p className="text-lg text-muted-foreground mb-8 font-light leading-relaxed">
                  Notre expertise couvre les tunnels routiers, ferroviaires, d&apos;adduction d&apos;eau et hydrauliques, avec des capacités allant jusqu&apos;à 10 km de linéaire.
                </p>
                
                <div className="space-y-4">
                  {[
                    { icon: <Target className="w-5 h-5" />, title: 'Précision Millimétrique', desc: 'Tolérances strictes pour tous les paramètres' },
                    { icon: <Zap className="w-5 h-5" />, title: 'Technologies Avancées', desc: 'Équipements dernier cri et techniques modernes' },
                    { icon: <ShieldCheck className="w-5 h-5" />, title: 'Sécurité Maximale', desc: 'Normes ISO et protocoles de sécurité stricts' }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-accent/10">
                          <div className="text-accent">{item.icon}</div>
                        </div>
                      </div>
                      <div>
                        <p className="font-serif font-bold">{item.title}</p>
                        <p className="text-sm text-muted-foreground font-light">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div data-animate className="opacity-0">
                <img 
                  src="/tunnelage-hero.jpg" 
                  alt="Expertise en tunnelage"
                  className="w-full rounded-sm shadow-2xl object-cover h-96 sm:h-[500px]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 sm:py-32 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16" data-animate>
              <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-6">Nos Services en Tunnelage</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-light">
                Solutions complètes et intégrées pour tous vos besoins en tunnelage
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {[
                { title: 'Tunnels Routiers', desc: 'Infrastructure routière souterraine pour contournement urbain et traversée géographique' },
                { title: 'Tunnels Ferroviaires', desc: 'Liaisons ferroviaires souterraines hautes performances et haute capacité' },
                { title: 'Adductions d\'Eau', desc: 'Systèmes d\'approvisionnement en eau long distance et étanche' },
                { title: 'Tunnels Hydrauliques', desc: 'Infrastructures pour dériv ations hydrauliques et centrales souterraines' }
              ].map((service, i) => (
                <div key={i} data-animate className="opacity-0 p-8 bg-card border border-border/50 rounded-sm hover:border-accent hover:shadow-xl transition-all duration-300 group">
                  <h3 className="text-2xl font-serif font-bold mb-4 group-hover:text-accent transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground font-light">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="py-20 sm:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div data-animate className="opacity-0">
                <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-8">Référence: Tunnel Lyon-Turin</h2>
                <p className="text-lg text-muted-foreground mb-6 font-light leading-relaxed">
                  Projet majeur de 58 km de tunnel de base pour liaison ferroviaire transalpine entre la France et l&apos;Italie.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    { label: 'Linéaire:', value: '58 km' },
                    { label: 'Profondeur:', value: 'jusqu\'à 2000m' },
                    { label: 'Technique:', value: 'Excavation mécanique + Minage contrôlé' },
                    { label: 'Durée:', value: '12+ années' },
                    { label: 'Partenaires:', value: 'Équipes France & Italie' }
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center pb-3 border-b border-border/30">
                      <span className="font-serif font-bold text-foreground">{item.label}</span>
                      <span className="text-muted-foreground font-light">{item.value}</span>
                    </div>
                  ))}
                </ul>
                <Link href="/devis">
                  <button className="px-6 py-3 bg-accent text-accent-foreground rounded-sm font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
                    Obtenir un Devis Personnalisé
                  </button>
                </Link>
              </div>

              <div data-animate className="opacity-0">
                <img 
                  src="/tunnelage-hero.jpg" 
                  alt="Tunnel Lyon-Turin"
                  className="w-full rounded-sm shadow-2xl object-cover h-96 sm:h-[500px]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 sm:py-32 bg-muted/50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
          </div>
          
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10" data-animate>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-6">Besoin d&apos;Une Solution de Tunnelage?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 font-light">
              Nos experts vous aident à trouver la meilleure solution pour votre projet. Contactez-nous dès aujourd&apos;hui.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/devis">
                <button className="px-8 py-4 bg-accent text-accent-foreground rounded-sm font-semibold hover:shadow-2xl hover:shadow-accent/50 transition-all duration-300 hover:scale-105">
                  Demander un Devis
                </button>
              </Link>
              <Link href="/contact">
                <button className="px-8 py-4 border-2 border-foreground text-foreground rounded-sm font-semibold hover:bg-foreground/5 transition-all duration-300">
                  Nous Contacter
                </button>
              </Link>
            </div>
          </div>
        </section>
    </>
  )
}
