import { caseStudies } from '@/lib/data'
import Link from 'next/link'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import { notFound } from 'next/navigation'

export const metadata = {
  title: 'Cas d\'étude - BINOVA ROCKBUILDERS',
  description: 'Découvrez nos plus grands projets BTP et comment nous avons créé des solutions innovantes',
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = caseStudies.find(s => s.slug === params.slug)

  if (!study) {
    notFound()
  }

  const nextStudy = caseStudies[(caseStudies.findIndex(s => s.slug === params.slug) + 1) % caseStudies.length]

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 bg-gradient-to-b from-muted/50 to-background">
        <div className="max-w-7xl mx-auto px-6">
          <Link href="/#case-studies" className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-6 animate-fade-in-up">
            <ArrowLeft size={16} />
            Retour aux cas d'étude
          </Link>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <p className="text-sm font-semibold text-accent uppercase tracking-wide mb-4">{study.client}</p>
            <h1 className="text-4xl sm:text-6xl font-serif font-bold mb-4 max-w-3xl">{study.title}</h1>
            <p className="text-xl text-muted-foreground font-light mb-8 max-w-2xl">{study.subtitle}</p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
              <div>
                <p className="text-xs text-muted-foreground font-medium uppercase mb-2">Budget</p>
                <p className="text-2xl font-serif font-bold">{study.budget}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium uppercase mb-2">Durée</p>
                <p className="text-2xl font-serif font-bold">{study.duration}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium uppercase mb-2">Équipe</p>
                <p className="text-2xl font-serif font-bold">{study.team}+</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium uppercase mb-2">Année</p>
                <p className="text-2xl font-serif font-bold">{study.year}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Image */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative h-96 md:h-[500px] rounded-sm overflow-hidden bg-muted animate-fade-in-up">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${study.image})` }} />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          {/* Challenge */}
          <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-3xl font-serif font-bold mb-6">Le Défi</h2>
            <p className="text-lg text-foreground/80 font-light leading-relaxed">{study.challenge}</p>
          </div>

          {/* Solution */}
          <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-3xl font-serif font-bold mb-6">Notre Solution</h2>
            <p className="text-lg text-foreground/80 font-light leading-relaxed">{study.solution}</p>
          </div>

          {/* Results */}
          <div className="mb-16 p-8 bg-muted/30 border border-border/50 rounded-sm animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h2 className="text-3xl font-serif font-bold mb-8">Résultats</h2>
            <ul className="space-y-4">
              {study.results.map((result, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <span className="text-2xl text-accent font-bold flex-shrink-0 mt-1">✓</span>
                  <span className="text-lg text-foreground/80 font-light">{result}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Insights */}
          <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-3xl font-serif font-bold mb-6">Points Clés</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 bg-background border border-border/50 rounded-sm">
                <h3 className="font-semibold text-foreground mb-3">Impact</h3>
                <p className="text-foreground/80 font-light">
                  Ce projet a démontré notre capacité à gérer des défis géotechniques extrêmes avec excellence opérationnelle.
                </p>
              </div>
              <div className="p-6 bg-background border border-border/50 rounded-sm">
                <h3 className="font-semibold text-foreground mb-3">Innovation</h3>
                <p className="text-foreground/80 font-light">
                  Les technologies et méthodes développées ici sont devenues standards dans l&apos;industrie.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-foreground text-primary-foreground">
        <div className="max-w-4xl mx-auto px-6 text-center animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">Prêt à Transformer Votre Projet?</h2>
          <p className="text-primary-foreground/80 font-light mb-8 text-lg max-w-2xl mx-auto">
            Si vous avez des défis BTP similaires, nos experts sont prêts à discuter de solutions innovantes.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-sm font-semibold hover:shadow-lg transition-all hover:scale-105"
          >
            Contacter nos Experts <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Next Case Study */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="border-t border-border/50 pt-12">
            <p className="text-sm text-muted-foreground font-semibold uppercase mb-6">Cas d&apos;étude suivant</p>
            <Link href={`/case-study/${nextStudy.slug}`} className="group">
              <div className="space-y-4">
                <h3 className="text-3xl font-serif font-bold text-foreground group-hover:text-accent transition-colors">
                  {nextStudy.title}
                </h3>
                <p className="text-lg text-muted-foreground font-light">{nextStudy.subtitle}</p>
                <div className="flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all pt-4">
                  Découvrir <ArrowRight size={20} />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
