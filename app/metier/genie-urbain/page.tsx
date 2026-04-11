'use client'

import { Building, MapPin, Users, Zap, Leaf, TrendingUp } from 'lucide-react'

export default function GenieUrbainPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Génie Urbain</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mb-8">
            Nous accompagnons des communautés, des collectivités et des institutions dans le développement des territoires. Terrassements, VRD, Canalisations, ouvrages d'art, 
            aménagements...Animés par la même passion pour l'excellence, nos collaborateurs œuvrent chaque jour pour construire et développer des infrastructures solides et durables afin de donner un visage unique à nos villes.
          </p>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-serif font-bold mb-12">Nos Domaines</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border border-border/50 rounded-lg hover:border-accent/50 transition-colors">
              <Building className="text-accent mb-4" size={28} />
              <h3 className="text-lg font-semibold mb-3">Projets Mixtes</h3>
              <p className="text-muted-foreground text-sm">
                Résidences, commerces, bureaux et espaces publics intégrés. Création de lieux de vie dynamiques et inclusifs.
              </p>
            </div>
            <div className="p-6 border border-border/50 rounded-lg hover:border-accent/50 transition-colors">
              <MapPin className="text-accent mb-4" size={28} />
              <h3 className="text-lg font-semibold mb-3">Aménagements Urbains</h3>
              <p className="text-muted-foreground text-sm">
                Rénovation quartiers, réaménagement espaces publics, préserver le patrimoine historique.
              </p>
            </div>
            <div className="p-6 border border-border/50 rounded-lg hover:border-accent/50 transition-colors">
              <Leaf className="text-accent mb-4" size={28} />
              <h3 className="text-lg font-semibold mb-3">Villes Vertes</h3>
              <p className="text-muted-foreground text-sm">
                Espaces verts, parcs publics, corridors écologiques et réseaux de biodiversité urbaine.
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
              <div className="text-4xl font-bold text-accent mb-2">156+</div>
              <p className="font-semibold">Projets urbains</p>
              <p className="text-sm text-muted-foreground">Tous continents</p>
            </div>
            <div className="text-center p-6 bg-background border border-border/50 rounded-lg">
              <div className="text-4xl font-bold text-accent mb-2">15M+</div>
              <p className="font-semibold">Personnes impactées</p>
              <p className="text-sm text-muted-foreground">Cadre de vie amélioré</p>
            </div>
            <div className="text-center p-6 bg-background border border-border/50 rounded-lg">
              <div className="text-4xl font-bold text-accent mb-2">€32B</div>
              <p className="font-semibold">Valeur projets</p>
              <p className="text-sm text-muted-foreground">Investissements urbains</p>
            </div>
            <div className="text-center p-6 bg-background border border-border/50 rounded-lg">
              <div className="text-4xl font-bold text-accent mb-2">90%</div>
              <p className="font-semibold">Durabilité LEED</p>
              <p className="text-sm text-muted-foreground">Certifications vertes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-serif font-bold mb-12">Transformations Urbaines</h2>
          <div className="space-y-6">
            <div className="border border-border/50 rounded-lg p-6 hover:border-accent/50 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold">Métropole Sustainable - Singapour</h3>
                  <p className="text-sm text-muted-foreground">Réaménagement zone centrale</p>
                </div>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded text-xs font-semibold">€2.8B</span>
              </div>
              <p className="text-muted-foreground text-sm">
                700 hectares. 50,000 logements LEED Platinum. Corridors verts continus, mobilité zéro-carbone, énergie 100% renouvelable.
              </p>
            </div>
            <div className="border border-border/50 rounded-lg p-6 hover:border-accent/50 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold">Quartier du Caire - Revitalisation</h3>
                  <p className="text-sm text-muted-foreground">Patrimoine + modernité</p>
                </div>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded text-xs font-semibold">€1.5B</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Restauration architecte historique + infrastructures modernes. 200,000 habitants. Préservation patrimoine UNESCO.
              </p>
            </div>
            <div className="border border-border/50 rounded-lg p-6 hover:border-accent/50 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold">Barcelona Green Belt</h3>
                  <p className="text-sm text-muted-foreground">Espaces publics durables</p>
                </div>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded text-xs font-semibold">€680M</span>
              </div>
              <p className="text-muted-foreground text-sm">
                85km de parcs linéaires, forêts urbaines, espaces récréatifs. Impact : meilleure qualité de l'air, réduction île de chaleur.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 bg-muted/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-serif font-bold mb-12">Notre Approche Participative</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-background border border-border/50 rounded-lg p-8">
              <Users className="text-accent mb-4" size={28} />
              <h3 className="text-lg font-semibold mb-3">Consultation Citoyens</h3>
              <p className="text-muted-foreground">
                Ateliers participatifs, sondages locaux, implication des communautés dans chaque phase de design.
              </p>
            </div>
            <div className="bg-background border border-border/50 rounded-lg p-8">
              <Leaf className="text-accent mb-4" size={28} />
              <h3 className="text-lg font-semibold mb-3">Durabilité Intégrée</h3>
              <p className="text-muted-foreground">
                Objectifs Net-Zéro, biodiversité positive, économie circulaire et mobilité décarbonée.
              </p>
            </div>
            <div className="bg-background border border-border/50 rounded-lg p-8">
              <Zap className="text-accent mb-4" size={28} />
              <h3 className="text-lg font-semibold mb-3">Technologie Smart City</h3>
              <p className="text-muted-foreground">
                IoT, éclairage intelligent, gestion trafic, systèmes d'energie distribuée et données temps réel.
              </p>
            </div>
            <div className="bg-background border border-border/50 rounded-lg p-8">
              <TrendingUp className="text-accent mb-4" size={28} />
              <h3 className="text-lg font-semibold mb-3">Valeur Économique</h3>
              <p className="text-muted-foreground">
                Augmentation valeur propriétés, création emplois, économies long terme et attractivité ville.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent/5 border-y border-border/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Transformer Votre Ville</h2>
          <p className="text-lg text-muted-foreground mb-8">
            156+ projets urbains. 15 millions de personnes impactées. Villes plus vertes, plus intelligentes, plus humaines.
          </p>
          <a href="/contact" className="inline-block px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
            Parlons Développement Urbain
          </a>
        </div>
      </section>
    </>
  )
}
