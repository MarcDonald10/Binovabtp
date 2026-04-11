'use client'

import { Leaf, Droplets, Wind, Recycle, TrendingDown, Sprout } from 'lucide-react'

export default function EnvironnementPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Environnement et Durabilité</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mb-8">
            Construire responsablement. Réduire notre empreinte écologique sur chaque projet, dans chaque décision.
          </p>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="p-6 border border-border/50 rounded-lg hover:border-accent/50 transition-colors">
              <div className="text-3xl font-bold text-accent mb-2">-60%</div>
              <p className="text-sm font-medium">CO₂ vs transport routier</p>
              <p className="text-xs text-muted-foreground mt-2">Projets ferroviaires</p>
            </div>
            <div className="p-6 border border-border/50 rounded-lg hover:border-accent/50 transition-colors">
              <div className="text-3xl font-bold text-accent mb-2">ISO 14001</div>
              <p className="text-sm font-medium">Management Environnemental</p>
              <p className="text-xs text-muted-foreground mt-2">Certification complète</p>
            </div>
            <div className="p-6 border border-border/50 rounded-lg hover:border-accent/50 transition-colors">
              <div className="text-3xl font-bold text-accent mb-2">100k</div>
              <p className="text-sm font-medium">Tonnes recyclées/an</p>
              <p className="text-xs text-muted-foreground mt-2">Matériaux récupérés</p>
            </div>
            <div className="p-6 border border-border/50 rounded-lg hover:border-accent/50 transition-colors">
              <div className="text-3xl font-bold text-accent mb-2">4000+</div>
              <p className="text-sm font-medium">Hectares protégés</p>
              <p className="text-xs text-muted-foreground mt-2">Biodiversité sauvegardée</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-muted/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-serif font-bold mb-12">Notre Stratégie Environnementale</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <TrendingDown className="text-accent" size={24} />
              </div>
              <h3 className="text-xl font-semibold">Réduction des Émissions</h3>
              <p className="text-muted-foreground">
                Objectif net-zéro d'ici 2040. Électrification des équipements, usage d'énergies renouvelables et optimisation des transports.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <Recycle className="text-accent" size={24} />
              </div>
              <h3 className="text-xl font-semibold">Économie Circulaire</h3>
              <p className="text-muted-foreground">
                100,000 tonnes de matériaux recyclés annuellement. Réutilisation des matériaux de démolition et valorisation des débris.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <Leaf className="text-accent" size={24} />
              </div>
              <h3 className="text-xl font-semibold">Protection de la Biodiversité</h3>
              <p className="text-muted-foreground">
                Plans d'action avant/pendant/après projets. 10,000 arbres plantés annuellement pour restaurer les écosystèmes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Initiatives */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-serif font-bold mb-12">Initiatives Concrètes</h2>
          <div className="space-y-6">
            <div className="border border-border/50 rounded-lg p-6 hover:border-accent/50 transition-colors">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Droplets className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Gestion de l'Eau</h3>
                  <p className="text-muted-foreground">
                    Systèmes de récupération et traitement des eaux. Réduction de 40% de la consommation d'eau sur nos chantiers.
                  </p>
                </div>
              </div>
            </div>
            <div className="border border-border/50 rounded-lg p-6 hover:border-accent/50 transition-colors">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Wind className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Énergies Renouvelables</h3>
                  <p className="text-muted-foreground">
                    50% de l'énergie utilisée provient de sources renouvelables. Objectif 100% d'ici 2035.
                  </p>
                </div>
              </div>
            </div>
            <div className="border border-border/50 rounded-lg p-6 hover:border-accent/50 transition-colors">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Sprout className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Restauration d'Écosystèmes</h3>
                  <p className="text-muted-foreground">
                    Après chaque projet d'excavation, restauration complète des sites. 4,000+ hectares restaurés depuis 2010.
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
          <h2 className="text-3xl font-serif font-bold mb-4">Construire un Avenir Vert</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Ensemble pour une industrie plus respectueuse de la planète.
          </p>
          <a href="/contact" className="inline-block px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
            Découvrir nos Projets Verts
          </a>
        </div>
      </section>
    </>
  )
}
