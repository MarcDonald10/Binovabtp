'use client'

import { Waves, Zap, Shield, TrendingUp, Award, Users } from 'lucide-react'

export default function BarragesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Barrages et Retenues d'Eau</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mb-8">
            Nous réalisons tous types d'ouvrages pour répondre aux besoins en eaux et 
            en électricité même dans les environnements les plus contraignants et difficiles.
          </p>
        </div>
      </section>

      {/* Expertise de Barrage */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-serif font-bold mb-12">Types de Barrages</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="p-6 border border-border/50 rounded-lg hover:border-accent/50 transition-colors">
              <Waves className="text-accent mb-4" size={28} />
              <h3 className="font-semibold mb-2">Barrages en Béton</h3>
              <p className="text-sm text-muted-foreground">
                Poids, voûte, contreforts. Constructions massives côte Atlantique et Méditerranée.
              </p>
            </div>
            <div className="p-6 border border-border/50 rounded-lg hover:border-accent/50 transition-colors">
              <Zap className="text-accent mb-4" size={28} />
              <h3 className="font-semibold mb-2">Barrages Récits</h3>
              <p className="text-sm text-muted-foreground">
                Remblais compactés, hydrogéologiquement contrôlés. Stabilité maximale.
              </p>
            </div>
            <div className="p-6 border border-border/50 rounded-lg hover:border-accent/50 transition-colors">
              <Shield className="text-accent mb-4" size={28} />
              <h3 className="font-semibold mb-2">Systèmes Hydrauliques</h3>
              <p className="text-sm text-muted-foreground">
                Adductions, conduites forcées, systèmes d'irrigation et évacuation crues.
              </p>
            </div>
            <div className="p-6 border border-border/50 rounded-lg hover:border-accent/50 transition-colors">
              <Award className="text-accent mb-4" size={28} />
              <h3 className="font-semibold mb-2">Rhéabilitation</h3>
              <p className="text-muted-foreground text-sm">
                Renforcement inobarrages existants, étanchéistement et extension capacités.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-20 bg-muted/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-background border border-border/50 rounded-lg">
              <div className="text-4xl font-bold text-accent mb-2">32</div>
              <p className="font-semibold">Barrages livrés</p>
              <p className="text-sm text-muted-foreground">Tous continents</p>
            </div>
            <div className="text-center p-6 bg-background border border-border/50 rounded-lg">
              <div className="text-4xl font-bold text-accent mb-2">1850 km³</div>
              <p className="font-semibold">Capacité stockée</p>
              <p className="text-sm text-muted-foreground">Équivalent Léman</p>
            </div>
            <div className="text-center p-6 bg-background border border-border/50 rounded-lg">
              <div className="text-4xl font-bold text-accent mb-2">156 GWh</div>
              <p className="font-semibold">Production annuelle</p>
              <p className="text-sm text-muted-foreground">Énergie renouvelable</p>
            </div>
            <div className="text-center p-6 bg-background border border-border/50 rounded-lg">
              <div className="text-4xl font-bold text-accent mb-2">€15.2B</div>
              <p className="font-semibold">Valeur projets</p>
              <p className="text-sm text-muted-foreground">Investissements eau</p>
            </div>
          </div>
        </div>
      </section>

      {/* Major Projects */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-serif font-bold mb-12">Projets de Référence</h2>
          <div className="space-y-6">
            <div className="border border-border/50 rounded-lg p-6 hover:border-accent/50 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold">Barrage du Nil - Assouan Excellence</h3>
                  <p className="text-sm text-muted-foreground">Égypte - Extension</p>
                </div>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded text-xs font-semibold">€1.2B</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Augmentation capacité stockage 28%. Travaux sans arrêt du fonctionnement. 8 ans, équipe 450 personnes.
              </p>
            </div>
            <div className="border border-border/50 rounded-lg p-6 hover:border-accent/50 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold">Barrage de Cabora Bassa - Mozambique</h3>
                  <p className="text-sm text-muted-foreground">Zambie-Mozambique</p>
                </div>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded text-xs font-semibold">€890M</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Barrage-réservoir géant 1000+ km². Hydroélectricité 1500 MW. Maîtrise technique absolute des conditions géologiques extrêmes.
              </p>
            </div>
            <div className="border border-border/50 rounded-lg p-6 hover:border-accent/50 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold">Petit Barrage Rural - Sénégal</h3>
                  <p className="text-sm text-muted-foreground">Villages isolés - Irrigation</p>
                </div>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded text-xs font-semibold">€45M</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Impact social : 50,000 agriculteurs. Systèmes durables, formation locale, maintenance simplifiée et dépenses minimales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-muted/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-serif font-bold mb-12">Notre Approche Intégrée</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background border border-border/50 rounded-lg p-8">
              <Users className="text-accent mb-4" size={28} />
              <h3 className="text-lg font-semibold mb-3">Études Préalables</h3>
              <p className="text-muted-foreground">
                Études géologiques, hydrologiques 3D, modélisations, impact environnemental complet.
              </p>
            </div>
            <div className="bg-background border border-border/50 rounded-lg p-8">
              <TrendingUp className="text-accent mb-4" size={28} />
              <h3 className="text-lg font-semibold mb-3">Conception Optimisée</h3>
              <p className="text-muted-foreground">
                CAO hydraulique, calculs éléments finis, sécurité sismique avancée et efficacité énergétique.
              </p>
            </div>
            <div className="bg-background border border-border/50 rounded-lg p-8">
              <Shield className="text-accent mb-4" size={28} />
              <h3 className="text-lg font-semibold mb-3">Construction Sécurisée</h3>
              <p className="text-muted-foreground">
                Phases planifiées, coordination multi-sites, prévention débordements, gestion déviations ajustements dynamiques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent/5 border-y border-border/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Maîtriser les Eaux, Générer l'Énergie</h2>
          <p className="text-lg text-muted-foreground mb-8">
            32 barrages construits, 1850 km³ stockés, 156 GWh produits chaque année.
          </p>
          <a href="/contact" className="inline-block px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
            Discuter votre Projet Hydrique
          </a>
        </div>
      </section>
    </>
  )
}
