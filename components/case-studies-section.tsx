'use client'

import Link from 'next/link'
import { caseStudies } from '@/lib/data'
import { ArrowRight } from 'lucide-react'

export function CaseStudiesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 max-w-2xl animate-fade-in-up">
          <h2 className="text-3xl sm:text-5xl font-serif font-bold mb-4">Cas d&apos;Étude</h2>
          <p className="text-lg text-muted-foreground font-light">
            Découvrez comment nous avons transformé les plus grands projets BTP du monde. De la conception à la livraison, nos solutions dépassent les attentes.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid gap-12">
          {caseStudies.map((study, idx) => (
            <div key={study.id} className="group animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
              <Link href={`/case-study/${study.slug}`}>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Image */}
                  <div className="order-2 md:order-1 relative h-64 sm:h-80 md:h-96 rounded-sm overflow-hidden bg-muted">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent" />
                    <div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: `url(${study.image})` }} />
                  </div>

                  {/* Content */}
                  <div className="order-1 md:order-2 space-y-4">
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-accent uppercase tracking-wide">{study.client}</p>
                      <h3 className="text-2xl sm:text-4xl font-serif font-bold text-foreground group-hover:text-accent transition-colors">
                        {study.title}
                      </h3>
                      <p className="text-lg text-muted-foreground font-light">{study.subtitle}</p>
                    </div>

                    <p className="text-base text-foreground/80 font-light leading-relaxed">
                      {study.highlights}
                    </p>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 gap-4 pt-4">
                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground font-medium uppercase">Budget</p>
                        <p className="text-lg font-serif font-bold text-foreground">{study.budget}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground font-medium uppercase">Durée</p>
                        <p className="text-lg font-serif font-bold text-foreground">{study.duration}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground font-medium uppercase">Équipe</p>
                        <p className="text-lg font-serif font-bold text-foreground">{study.team}+ experts</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground font-medium uppercase">Année</p>
                        <p className="text-lg font-serif font-bold text-foreground">{study.year}</p>
                      </div>
                    </div>

                    {/* Results Highlights */}
                    <ul className="space-y-2 pt-4 border-t border-border/50">
                      {study.results.slice(0, 3).map((result, i) => (
                        <li key={i} className="text-sm font-light text-foreground/80 flex items-start gap-2">
                          <span className="text-accent font-bold mt-1">✓</span>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <div className="pt-4">
                      <span className="inline-flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all">
                        Découvrir le Projet <ArrowRight size={20} />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 pt-16 border-t border-border/50 text-center animate-fade-in-up">
          <p className="text-lg text-muted-foreground font-light mb-6">
            Votre projet pourrait être le suivant
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-sm font-semibold hover:shadow-lg transition-all hover:scale-105"
          >
            Discuter de Votre Projet <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}
