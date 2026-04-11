'use client'

import { AnimatedSection } from './animated-section'
import { LucideIcon } from 'lucide-react'
import Link from 'next/link'

interface MetierPageTemplateProps {
  title: string
  vision: string
  excellence: string
  stats: Array<{ value: string; label: string; description: string }>
  expertise: Array<{ icon: LucideIcon; title: string; description: string }>
  projects: Array<{ title: string; description: string; stats: string }>
  approach: string
  ctaText?: string
  ctaLink?: string
}

export function MetierPageTemplate({
  title,
  vision,
  excellence,
  stats,
  expertise,
  projects,
  approach,
  ctaText = "Demander un Devis",
  ctaLink = "/contact"
}: MetierPageTemplateProps) {
  return (
    <>
      {/* Premium Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-12">
          <AnimatedSection>
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-sm font-semibold text-accent">
                ✨ Excellence & Innovation
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-8 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              {title}
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <p className="text-xl text-muted-foreground max-w-4xl leading-relaxed mb-12">
              {vision}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-background to-muted/50 border border-border/50 rounded-xl p-8 hover:border-accent/30 transition-all duration-300 hover:shadow-lg">
                <h3 className="text-2xl font-serif font-bold mb-4">Notre Excellence</h3>
                <p className="text-muted-foreground leading-relaxed">{excellence}</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="text-4xl font-serif font-bold mb-16 text-center">Résultats Probants</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <AnimatedSection key={idx} delay={idx * 100}>
                <div className="group bg-background border border-border/50 rounded-xl p-6 hover:border-accent/50 hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <div className="text-4xl font-bold text-accent mb-3 group-hover:scale-110 transition-transform">
                    {stat.value}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{stat.label}</h3>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Cards */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="text-4xl font-serif font-bold mb-16 text-center">Domaines d'Expertise</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {expertise.map((item, idx) => {
              const Icon = item.icon
              return (
                <AnimatedSection key={idx} delay={idx * 100}>
                  <div className="group relative bg-gradient-to-br from-background to-muted/30 border border-border/50 rounded-xl p-8 hover:border-accent/50 transition-all duration-300">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-3xl group-hover:bg-accent/10 transition-colors" />
                    
                    <div className="relative">
                      <div className="w-14 h-14 bg-accent/10 group-hover:bg-accent/20 rounded-lg flex items-center justify-center mb-6 transition-all group-hover:scale-110">
                        <Icon className="text-accent" size={28} />
                      </div>
                      <h3 className="text-xl font-semibold mb-4 group-hover:text-accent transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="text-4xl font-serif font-bold mb-4 text-center">Projets Majeurs</h2>
            <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
              Découvrez nos réalisations exceptionnelles et nos approches innovantes
            </p>
          </AnimatedSection>

          <div className="space-y-6">
            {projects.map((project, idx) => (
              <AnimatedSection key={idx} delay={idx * 50}>
                <div className="group bg-background border border-border/50 rounded-xl p-8 hover:border-accent/50 hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-semibold group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                      {project.stats}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/20 rounded-2xl p-12">
              <h2 className="text-4xl font-serif font-bold mb-8 text-center">Notre Approche</h2>
              <p className="text-lg text-muted-foreground leading-relaxed text-center">
                {approach}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Premium CTA */}
      <section className="py-20 bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10 border-y border-accent/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-serif font-bold mb-6">Prêt pour Votre Prochain Projet ?</h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Nos experts sont disponibles pour discuter de vos besoins spécifiques et imaginer ensemble les solutions les plus innovantes.
            </p>
            <Link href={ctaLink}>
              <button className="px-10 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:shadow-2xl hover:shadow-accent/50 transition-all duration-300 hover:scale-105 text-lg">
                {ctaText}
              </button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
