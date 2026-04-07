'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { TrustBadges } from '@/components/trust-badges'
import { MajorClientsSection } from '@/components/major-clients'
import { ImpactSection } from '@/components/impact-section'
import { CaseStudiesSection } from '@/components/case-studies-section'
import { TestimonialsPremium } from '@/components/testimonials-premium'
import { CertificationsSection } from '@/components/certifications-section'
import { FAQSection } from '@/components/faq-section'
import { UrgencySection } from '@/components/urgency-section'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Zap, Hammer, Drill, Award, Lightbulb, Lock } from 'lucide-react'
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
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[90vh] max-h-screen flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(/hero-background.jpg)',
              backgroundAttachment: 'fixed'
            }}
          />
          <div className="absolute inset-0 z-1 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
          
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute top-20 right-20 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl animate-shimmer" />
            <div className="absolute bottom-20 left-20 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl animate-shimmer" />
          </div>
          
          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
            <div data-animate className="opacity-0">
              <div className="inline-block mb-6">
                <span className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm font-semibold text-white backdrop-blur-md">
                  🏆 Leader Européen depuis 28 Ans
                </span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold mb-8 leading-tight text-white">
                Les Plus Grands Projets BTP Vous Font Confiance
              </h1>
              
              <p className="text-lg sm:text-xl text-white/85 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
                847 projets livrés. 250 experts permanents. 99.2% taux de succès. Solutions innovantes pour tunnelage, minage et terrassement.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/devis" className="w-full sm:w-auto">
                  <button className="w-full px-8 py-4 bg-accent text-accent-foreground rounded-sm font-semibold hover:shadow-2xl hover:shadow-accent/50 transition-all duration-300 hover:scale-105 text-base flex items-center justify-center gap-2">
                    Devis Gratuit en 24h <ArrowRight size={20} />
                  </button>
                </Link>
                <Link href="#case-studies" className="w-full sm:w-auto">
                  <button className="w-full px-8 py-4 border-2 border-white text-white rounded-sm font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm text-base">
                    Voir Nos Projets
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-white/50 rounded-full animate-shimmer" />
            </div>
          </div>
        </section>

        {/* Trust Badges Section - Animated Stats */}
        <TrustBadges />

        {/* Major Clients Section */}
        <MajorClientsSection />

        {/* Services Section */}
        <section className="py-20 sm:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16" data-animate>
              <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-6">Solutions Éprouvées</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light">
                Expertise reconnue dans les 3 domaines les plus exigeants du BTP
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
              {[
                {
                  icon: <Drill className="w-8 h-8" />,
                  title: 'Tunnelage',
                  description: '156 tunnels complétés. De 100m à 58 km. Leader en infrastructure souterraine.',
                  link: '/tunnelage'
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: 'Minage',
                  description: '847+ mines opérées. Extraction à 99.2% de succès. Zéro accident mortel.',
                  link: '/minage'
                },
                {
                  icon: <Hammer className="w-8 h-8" />,
                  title: 'Terrassement',
                  description: '30M+ m³/an excavés. Précision centimétrique. Respect calendaire 100%.',
                  link: '/terrassement'
                }
              ].map((service, i) => (
                <Link key={i} href={service.link}>
                  <div data-animate className="group opacity-0 h-full p-8 bg-card border border-border/50 rounded-sm hover:border-accent hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col">
                    <div className="w-14 h-14 bg-accent/10 rounded-sm flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                      <div className="text-accent group-hover:text-accent-foreground transition-colors">{service.icon}</div>
                    </div>
                    <h3 className="text-2xl font-serif font-bold mb-4">{service.title}</h3>
                    <p className="text-muted-foreground mb-6 flex-1 font-light">{service.description}</p>
                    <div className="flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all">
                      Découvrir <ArrowRight size={18} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Trust Us Section */}
        <section className="py-20 sm:py-32 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div data-animate className="opacity-0">
                <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-8">Pourquoi Nous Faire Confiance?</h2>
                <div className="space-y-6">
                  {[
                    { icon: <Award size={24} />, title: '28 Ans d\'Excellence', desc: 'Plus de 2 décennies d\'expertise inégalée' },
                    { icon: <Lock size={24} />, title: 'Zéro Accident depuis 2015', desc: 'Standards de sécurité les plus stricts' },
                    { icon: <Lightbulb size={24} />, title: 'Innovation Continue', desc: 'Technologie de pointe & R&D investie' },
                    { icon: <CheckCircle size={24} />, title: '99.2% de Succès', desc: 'Livraison calendaire & budgétaire garantie' }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-sm flex items-center justify-center text-accent">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                        <p className="text-muted-foreground font-light text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div data-animate className="opacity-0 space-y-6">
                <blockquote className="border-l-4 border-accent pl-6 py-4">
                  <p className="text-lg text-foreground/80 font-light italic mb-3">
                    "BINOVA a dépassé nos attentes sur le projet Lyon-Turin. Leur expertise technique est sans pareils."
                  </p>
                  <footer className="text-sm font-semibold">— Jean-Marie Dubois, Directeur Général, SNCF Infra</footer>
                </blockquote>
                
                <blockquote className="border-l-4 border-accent pl-6 py-4">
                  <p className="text-lg text-foreground/80 font-light italic mb-3">
                    "Les 250 experts de BINOVA résolvent des défis géotechniques complexes en temps record."
                  </p>
                  <footer className="text-sm font-semibold">— Sophie Laurent, Vinci Construction</footer>
                </blockquote>

                <Link href="#testimonials" className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all pt-4">
                  Lire Plus de Témoignages <ArrowRight size={20} />
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
        <section className="py-20 sm:py-32 bg-background">
          <div className="max-w-4xl mx-auto px-6 text-center" data-animate>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-6">Commencez Aujourd&apos;hui</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 font-light">
              Parlez avec un expert en 24h. Zéro engagement. Étude complète de votre projet BTP.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/devis">
                <button className="px-8 py-4 bg-accent text-accent-foreground rounded-sm font-semibold hover:shadow-lg transition-all hover:scale-105">
                  Demander un Devis Gratuit
                </button>
              </Link>
              <Link href="/contact">
                <button className="px-8 py-4 border-2 border-foreground text-foreground rounded-sm font-semibold hover:bg-foreground hover:text-primary-foreground transition-all">
                  Nous Appeler Directement
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
