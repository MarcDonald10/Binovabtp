'use client'


import { Train, Waypoints, Zap, TrendingUp, Award, Globe } from 'lucide-react'

export default function InfrastructuresLineairesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Infrastructures Linéaires</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mb-8">
            Nous intervenons dans de grands chantiers au Cameroun et l'international. Infrastructures routières, ferroviaires, portuaires, aéroportuaires, ou industrielles pour relier, désenclaver et développer des territoires. Grâce aux avancés de l'IA, nous réalisons des études d'exécution et 
            développons l'expertise de topographie de terrain.
          </p>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-serif font-bold mb-12">Nos Spécialités</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border border-border/50 rounded-lg hover:border-accent/50 transition-colors">
              <Train className="text-accent mb-4" size={28} />
              <h3 className="text-lg font-semibold mb-3">Réseaux Ferroviaires</h3>
              <p className="text-muted-foreground text-sm">
                Lignes à grande vitesse, métros, tramways et systèmes régionaux. 15,000+ km construits.
              </p>
            </div>
            <div className="p-6 border border-border/50 rounded-lg hover:border-accent/50 transition-colors">
              <Waypoints className="text-accent mb-4" size={28} />
              <h3 className="text-lg font-semibold mb-3">Routes et Autoroutes</h3>
              <p className="text-muted-foreground text-sm">
                Réseaux routiers modernes, couloirs de mobilité douce, et infrastructures intelligentes.
              </p>
            </div>
            <div className="p-6 border border-border/50 rounded-lg hover:border-accent/50 transition-colors">
              <Zap className="text-accent mb-4" size={28} />
              <h3 className="text-lg font-semibold mb-3">Réseaux Énergétiques</h3>
              <p className="text-muted-foreground text-sm">
                Lignes haute tension, pipelines et Distribution d'électricité renouvelable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-20 bg-muted/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-background border border-border/50 rounded-lg">
              <div className="text-4xl font-bold text-accent mb-2">45k+</div>
              <p className="font-semibold">Km de réseaux</p>
              <p className="text-sm text-muted-foreground">Routes, rails, énergie</p>
            </div>
            <div className="text-center p-6 bg-background border border-border/50 rounded-lg">
              <div className="text-4xl font-bold text-accent mb-2">2B+</div>
              <p className="font-semibold">Personnes bénéficiaires</p>
              <p className="text-sm text-muted-foreground">Accès transport amélioré</p>
            </div>
            <div className="text-center p-6 bg-background border border-border/50 rounded-lg">
              <div className="text-4xl font-bold text-accent mb-2">€78B</div>
              <p className="font-semibold">Valeur investie</p>
              <p className="text-sm text-muted-foreground">Infrastructures de transport</p>
            </div>
            <div className="text-center p-6 bg-background border border-border/50 rounded-lg">
              <div className="text-4xl font-bold text-accent mb-2">12</div>
              <p className="font-semibold">Pays opérationnels</p>
              <p className="text-sm text-muted-foreground">Présence globale</p>
            </div>
          </div>
        </div>
      </section>

      {/* Major Projects */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-serif font-bold mb-12">Projets de Connectivité</h2>
          <div className="space-y-6">
            <div className="border border-border/50 rounded-lg p-6 hover:border-accent/50 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold">Corridor Ferroviaire Alpes-Méditerranée</h3>
                  <p className="text-sm text-muted-foreground">France-Italie-Slovénie</p>
                </div>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded text-xs font-semibold">€8.9B</span>
              </div>
              <p className="text-muted-foreground text-sm">
                1.400 km de lignes 300 km/h. Électrification complète, gares modernes, intermodalité intégrée.
              </p>
            </div>
            <div className="border border-border/50 rounded-lg p-6 hover:border-accent/50 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold">Métro du Caire - Extensions</h3>
                  <p className="text-sm text-muted-foreground">Égypte - Phase 3 &4</p>
                </div>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded text-xs font-semibold">€4.2B</span>
              </div>
              <p className="text-muted-foreground text-sm">
                250 km additionnels. 5 millions passagers quotidiens. Signalisation CBTC, stations accessibles PMR.
              </p>
            </div>
            <div className="border border-border/50 rounded-lg p-6 hover:border-accent/50 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold">Autoroute Transafricaine TAO</h3>
                  <p className="text-sm text-muted-foreground">Sénégal-Nigeria</p>
                </div>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded text-xs font-semibold">€5.8B</span>
              </div>
              <p className="text-muted-foreground text-sm">
                3.200 km. Routes 4 voies tolérantes. Intégration pays traversés, développement économique local.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 bg-muted/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-serif font-bold mb-12">Connecter Responsablement</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background border border-border/50 rounded-lg p-8">
              <Globe className="text-accent mb-4" size={28} />
              <h3 className="text-lg font-semibold mb-3">Planification Stratégique</h3>
              <p className="text-muted-foreground">
                Analyses coût-bénéfice, études impact économique et social, engagement communautés locales.
              </p>
            </div>
            <div className="bg-background border border-border/50 rounded-lg p-8">
              <TrendingUp className="text-accent mb-4" size={28} />
              <h3 className="text-lg font-semibold mb-3">Construction Agile</h3>
              <p className="text-muted-foreground">
                Planning adaptable, minimisation des interruptions trafic, phase de roulement intelligent.
              </p>
            </div>
            <div className="bg-background border border-border/50 rounded-lg p-8">
              <Award className="text-accent mb-4" size={28} />
              <h3 className="text-lg font-semibold mb-3">Exploitation Durable</h3>
              <p className="text-muted-foreground">
                Maintenance intelligente, gestion trafic temps réel et capacité adaptation croissante trafic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent/5 border-y border-border/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Connecter Continents, Rapprocher Peuples</h2>
          <p className="text-lg text-muted-foreground mb-8">
            45,000+ km de réseaux. 2 milliards de bénéficiaires. Mobilité durable pour tous.
          </p>
          <a href="/contact" className="inline-block px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
            Votre Projet d'Infrastructure
          </a>
        </div>
      </section>
    </>
  )
}
