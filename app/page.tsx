'use client'

import { TrustBadges } from '@/components/trust-badges'
import { MajorClientsSection } from '@/components/major-clients'
import { ImpactSection } from '@/components/impact-section'
import { CaseStudiesSection } from '@/components/case-studies-section'
import { TestimonialsPremium } from '@/components/testimonials-premium'
import { CertificationsSection } from '@/components/certifications-section'
import { FAQSection } from '@/components/faq-section'
import { UrgencySection } from '@/components/urgency-section'
import { HeroCarousel } from '@/components/hero-carousel'
import { CheckCircle, Zap, Hammer, Drill, Award, Lightbulb, Lock, ArrowRight, Phone } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up')
        }
      })
    }, { threshold: 0.1 })

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observerRef.current?.observe(el)
    })

    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <>
      {/* Hero Carousel Section */}
      <HeroCarousel />

        {/* Trust Badges Section - Animated Stats */}
        <TrustBadges />

        {/* Major Clients Section */}
        <MajorClientsSection />

        {/* Services Section */}
        <section className="py-20 sm:py-32 bg-background relative z-10 overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/50 rounded-full blur-3xl" />
          </div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16" data-animate>
              <div className="inline-block mb-6">
                <span className="px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-sm font-semibold text-accent">
                  ✨ Nos Solutions
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-6 bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">Solutions Éprouvées</h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto font-light">
                Expertise reconnue dans les 3 domaines les plus exigeants du BTP. 847 projets livrés avec excellence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  icon: <Drill className="w-8 h-8" />,
                  title: 'Tunnelage',
                  description: '156 tunnels complétés. De 100m à 58 km. Leader en infrastructure souterraine.',
                  link: '/tunnelage',
                  gradient: 'from-blue-500/20 to-transparent'
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: 'Minage',
                  description: '847+ mines opérées. Extraction à 99.2% de succès. Zéro accident mortel.',
                  link: '/minage',
                  gradient: 'from-yellow-500/20 to-transparent'
                },
                {
                  icon: <Hammer className="w-8 h-8" />,
                  title: 'Terrassement',
                  description: '30M+ m³/an excavés. Précision centimétrique. Respect calendaire 100%.',
                  link: '/terrassement',
                  gradient: 'from-orange-500/20 to-transparent'
                }
              ].map((service, i) => (
                <Link key={i} href={service.link}>
                  <div data-animate className={`group relative h-full p-8 bg-gradient-to-br ${service.gradient} border border-border/50 rounded-lg hover:border-accent/50 hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-accent/30 to-accent/10 rounded-lg flex items-center justify-center group-hover:from-accent/50 group-hover:to-accent/20 transition-all duration-300">
                          <div className="text-accent group-hover:scale-110 transition-transform">{service.icon}</div>
                        </div>
                        <span className="text-sm font-bold text-accent/60 group-hover:text-accent transition-colors">0{i + 1}</span>
                      </div>
                      <h3 className="text-2xl font-serif font-bold mb-4 group-hover:text-accent transition-colors">{service.title}</h3>
                      <p className="text-muted-foreground mb-8 flex-1 font-light leading-relaxed">{service.description}</p>
                      <div className="flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all">
                        Découvrir <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Trust Us Section */}
        <section className="py-20 sm:py-32 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
          </div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div data-animate className="">
                <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-8 bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">Pourquoi Nous Faire Confiance?</h2>
                <div className="space-y-4">
                  {[
                    { icon: <Award size={24} />, title: '28 Ans d\'Excellence', desc: 'Plus de 2 décennies d\'expertise inégalée' },
                    { icon: <Lock size={24} />, title: 'Zéro Accident depuis 2015', desc: 'Standards de sécurité les plus stricts' },
                    { icon: <Lightbulb size={24} />, title: 'Innovation Continue', desc: 'Technologie de pointe & R&D investie' },
                    { icon: <CheckCircle size={24} />, title: '99.2% de Succès', desc: 'Livraison calendaire & budgétaire garantie' }
                  ].map((item, i) => (
                    <div key={i} className="group flex gap-4 p-4 rounded-lg hover:bg-accent/5 transition-all duration-300">
                      <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-accent/30 to-accent/10 rounded-lg flex items-center justify-center text-accent group-hover:from-accent/50 group-hover:to-accent/20 group-hover:scale-110 transition-all duration-300">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">{item.title}</h3>
                        <p className="text-muted-foreground font-light text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div data-animate className="space-y-6">
                <blockquote className="group relative bg-gradient-to-br from-accent/10 to-transparent border-l-4 border-accent pl-6 py-6 rounded-lg hover:shadow-xl transition-all duration-300">
                  <p className="text-lg text-foreground/80 font-light italic mb-4 leading-relaxed">
                    "BINOVA a dépassé nos attentes sur le projet Lyon-Turin. Leur expertise technique est sans pareils."
                  </p>
                  <footer className="text-sm font-semibold text-accent group-hover:text-accent/80 transition-colors">— Jean-Marie Dubois, Directeur Général, SNCF Infra</footer>
                </blockquote>
                
                <blockquote className="group relative bg-gradient-to-br from-accent/10 to-transparent border-l-4 border-accent pl-6 py-6 rounded-lg hover:shadow-xl transition-all duration-300">
                  <p className="text-lg text-foreground/80 font-light italic mb-4 leading-relaxed">
                    "Les 250 experts de BINOVA résolvent des défis géotechniques complexes en temps record."
                  </p>
                  <footer className="text-sm font-semibold text-accent group-hover:text-accent/80 transition-colors">— Sophie Laurent, Vinci Construction</footer>
                </blockquote>

                <Link href="#testimonials" className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all pt-4 hover:text-accent/80">
                  Lire Plus de Témoignages <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <ImpactSection />

        {/* Case Studies Section */}
        <section id="case-studies" className="scroll-mt-20">
          <CaseStudiesSection />
        </section>

        {/* Testimonials Section */}
        <TestimonialsPremium />

        {/* Certifications */}
        <CertificationsSection />

        {/* Urgency/FOMO Section */}
        <UrgencySection />

        {/* FAQ */}
        <FAQSection />

        {/* Final CTA */}
        <section className="py-20 sm:py-32 bg-gradient-to-br from-background via-accent/5 to-background relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/3 w-96 h-96 bg-accent rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-accent/50 rounded-full blur-3xl" />
          </div>
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10" data-animate>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-6 bg-gradient-to-r from-foreground via-accent to-foreground bg-clip-text text-transparent">Commencez Aujourd&apos;hui</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 font-light leading-relaxed">
              Parlez avec un expert en 24h. Zéro engagement. Étude complète de votre projet BTP.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/devis">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-accent to-accent/80 text-accent-foreground rounded-lg font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/80 to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="relative flex items-center justify-center gap-2">
                    Demander un Devis Gratuit
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </Link>
              <Link href="/contact">
                <button className="group relative px-8 py-4 border-2 border-foreground text-foreground rounded-lg font-semibold hover:bg-foreground hover:text-background transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="relative flex items-center justify-center gap-2">
                    Nous Appeler Directement
                    <Phone size={18} className="group-hover:scale-110 transition-transform" />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </section>
      </>
  )
}
