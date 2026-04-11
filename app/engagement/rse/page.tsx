'use client'

import { Users, Target, Leaf, Award, TrendingUp, Heart } from 'lucide-react'

export default function RSEPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Responsabilité Sociale et Environnementale</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mb-8">
            La RSE est au cœur de notre stratégie. Nous croyons que la croissance durable s'accompagne d'une responsabilité envers nos collaborateurs, nos partenaires et la société.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="p-6 border border-border/50 rounded-lg hover:border-accent/50 transition-colors">
              <div className="text-3xl font-bold text-accent mb-2">250+</div>
              <p className="text-sm font-medium">Collaborateurs engagés</p>
              <p className="text-xs text-muted-foreground mt-2">Formation continue et développement</p>
            </div>
            <div className="p-6 border border-border/50 rounded-lg hover:border-accent/50 transition-colors">
              <div className="text-3xl font-bold text-accent mb-2">100%</div>
              <p className="text-sm font-medium">Certification ISO 9001</p>
              <p className="text-xs text-muted-foreground mt-2">Management de la qualité</p>
            </div>
            <div className="p-6 border border-border/50 rounded-lg hover:border-accent/50 transition-colors">
              <div className="text-3xl font-bold text-accent mb-2">50+</div>
              <p className="text-sm font-medium">Actions sociales annuelles</p>
              <p className="text-xs text-muted-foreground mt-2">Engagement communautaire</p>
            </div>
            <div className="p-6 border border-border/50 rounded-lg hover:border-accent/50 transition-colors">
              <div className="text-3xl font-bold text-accent mb-2">€2M</div>
              <p className="text-sm font-medium">Investissement RSE/an</p>
              <p className="text-xs text-muted-foreground mt-2">Développement durable</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-serif font-bold mb-12">Nos Engagements</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <Users className="text-accent" size={24} />
              </div>
              <h3 className="text-xl font-semibold">Bien-être Collaborateurs</h3>
              <p className="text-muted-foreground">
                Salaires justes, avantages sociaux complémentaires, formations régulières et plans de carrière adaptés pour nos 250+ collaborateurs.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <Leaf className="text-accent" size={24} />
              </div>
              <h3 className="text-xl font-semibold">Impact Local</h3>
              <p className="text-muted-foreground">
                Création d'emplois locaux, partenariats avec les communautés, développement de compétences et transfert de technologies.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <Award className="text-accent" size={24} />
              </div>
              <h3 className="text-xl font-semibold">Gouvernance Responsable</h3>
              <p className="text-muted-foreground">
                Transparence, éthique commerciale, conformité légale et dialogue permanent avec tous nos stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-serif font-bold mb-12">Initiatives Clés</h2>
          <div className="space-y-6">
            <div className="border border-border/50 rounded-lg p-6 hover:border-accent/50 transition-colors">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <TrendingUp className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Programme de Bourse d'Études</h3>
                  <p className="text-muted-foreground">
                    20+ bourses annuelles pour les enfants de collaborateurs et jeunes issus de régions où nous opérons.
                  </p>
                </div>
              </div>
            </div>
            <div className="border border-border/50 rounded-lg p-6 hover:border-accent/50 transition-colors">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Heart className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Santé et Bien-être</h3>
                  <p className="text-muted-foreground">
                    Programme complet de santé, médecine du travail renforcée et suivi psychologique pour prévenir les risques.
                  </p>
                </div>
              </div>
            </div>
            <div className="border border-border/50 rounded-lg p-6 hover:border-accent/50 transition-colors">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Leaf className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Reforestation et Biodiversité</h3>
                  <p className="text-muted-foreground">
                    10,000 arbres plantés chaque année dans les régions où nous opérons pour compenser notre impact environnemental.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent/5 border-y border-border/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Rejoignez notre Mouvement RSE</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Ensemble, construisons un avenir plus responsable et durable.
          </p>
          <a href="/contact" className="inline-block px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
            Nous Contacter
          </a>
        </div>
      </section>
    </>
  )
}
