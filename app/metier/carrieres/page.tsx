'use client'

import { Pickaxe, TrendingUp, Leaf, Shield, Users, Globe } from 'lucide-react'

export default function CarrieresMeterPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Carrières et Exploitation Minière</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mb-8">
            Au Cameroun comme à l'étranger, nous créons et exploitons des carrières pour l'exécution de nos chantiers et pour satisfaire les besoins des populations en granulats, 
            tout ceci dans le plus grand respect des normes de sécurité et environnementales.
          </p>
        </div>
      </section>

      {/* Operational Scope */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-serif font-bold mb-12">Type de Carrières</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border border-border/50 rounded-lg hover:border-accent/50 transition-colors">
              <Pickaxe className="text-accent mb-4" size={28} />
              <h3 className="text-lg font-semibold mb-3">Mines Métaux Précieux</h3>
              <p className="text-muted-foreground text-sm">
                Or, argent, cuivre, zinc. Extraction souterraine et à ciel ouvert. Récupération 90%+ avec technologies avancées.
              </p>
            </div>
            <div className="p-6 border border-border/50 rounded-lg hover:border-accent/50 transition-colors">
              <Globe className="text-accent mb-4" size={28} />
              <h3 className="text-lg font-semibold mb-3">Carrières Matériaux</h3>
              <p className="text-muted-foreground text-sm">
                Granulats, pierres, calcaire, sable. 10 millions tonnes/an pour construction et béton.
              </p>
            </div>
            <div className="p-6 border border-border/50 rounded-lg hover:border-accent/50 transition-colors">
              <Leaf className="text-accent mb-4" size={28} />
              <h3 className="text-lg font-semibold mb-3">Exploitation Durable</h3>
              <p className="text-muted-foreground text-sm">
                Restauration écologique post-extraction. Impact minimal, biodiversité maximale, eau gérée responsable.
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
              <div className="text-4xl font-bold text-accent mb-2">15M+</div>
              <p className="font-semibold">Tonnes extraites/an</p>
              <p className="text-sm text-muted-foreground">Production mondiale</p>
            </div>
            <div className="text-center p-6 bg-background border border-border/50 rounded-lg">
              <div className="text-4xl font-bold text-accent mb-2">35+</div>
              <p className="font-semibold">Carrières opérées</p>
              <p className="text-sm text-muted-foreground">Afrique, Asie, Amériques</p>
            </div>
            <div className="text-center p-6 bg-background border border-border/50 rounded-lg">
              <div className="text-4xl font-bold text-accent mb-2">91%</div>
              <p className="font-semibold">Récupération moyenne</p>
              <p className="text-sm text-muted-foreground">Taux d'extraction</p>
            </div>
            <div className="text-center p-6 bg-background border border-border/50 rounded-lg">
              <div className="text-4xl font-bold text-accent mb-2">€8.7B</div>
              <p className="font-semibold">Valeur projets</p>
              <p className="text-sm text-muted-foreground">Carrières & mines</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Operations */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-serif font-bold mb-12">Opérations Majeures</h2>
          <div className="space-y-6">
            <div className="border border-border/50 rounded-lg p-6 hover:border-accent/50 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold">Mine d'Or Burkina Faso</h3>
                  <p className="text-sm text-muted-foreground">Extraction souterraine - Afrique de l'Ouest</p>
                </div>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded text-xs font-semibold">€1.8B</span>
              </div>
              <p className="text-muted-foreground text-sm mb-3">
                400,000 tonnes/an. 91% récupération. Impact socio-économique : 500+ emplois locaux créés, €150M revenus annuels.
              </p>
              <div className="flex gap-4 text-xs font-medium">
                <span className="px-2 py-1 bg-muted rounded">Profondeur: 1200m</span>
                <span className="px-2 py-1 bg-muted rounded">Emplois: 500+</span>
                <span className="px-2 py-1 bg-muted rounded">Type: Souterrain</span>
              </div>
            </div>
            <div className="border border-border/50 rounded-lg p-6 hover:border-accent/50 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold">Carrière de Granulats - France</h3>
                  <p className="text-sm text-muted-foreground">Matériaux de construction - Domaine Français</p>
                </div>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded text-xs font-semibold">€280M</span>
              </div>
              <p className="text-muted-foreground text-sm mb-3">
                3.2M tonnes/an. Fourniture béton national. Extraction responsable, zones de réserve naturelle intégrées.
              </p>
              <div className="flex gap-4 text-xs font-medium">
                <span className="px-2 py-1 bg-muted rounded">Superficie: 320 ha</span>
                <span className="px-2 py-1 bg-muted rounded">Production: 3.2Mt/an</span>
                <span className="px-2 py-1 bg-muted rounded">Durée: 45 ans</span>
              </div>
            </div>
            <div className="border border-border/50 rounded-lg p-6 hover:border-accent/50 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold">Mine de Cuivre - Pérou</h3>
                  <p className="text-sm text-muted-foreground">Métaux industriels - Amérique du Sud</p>
                </div>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded text-xs font-semibold">€2.4B</span>
              </div>
              <p className="text-muted-foreground text-sm mb-3">
                250,000 tonnes cuivre/an. Complexe ciel-ouvert souterrain. Gestion eau avancée, génie environnemental leadership.
              </p>
              <div className="flex gap-4 text-xs font-medium">
                <span className="px-2 py-1 bg-muted rounded">Cuivre: 250kt/an</span>
                <span className="px-2 py-1 bg-muted rounded">Emplois: 3.500+</span>
                <span className="px-2 py-1 bg-muted rounded">Durée: 60+ ans</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainable Practices */}
      <section className="py-20 bg-muted/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-serif font-bold mb-12">Exploitation Responsable</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background border border-border/50 rounded-lg p-8">
              <Leaf className="text-accent mb-4" size={28} />
              <h3 className="text-lg font-semibold mb-3">Restauration Écologique</h3>
              <p className="text-muted-foreground">
                Post-extraction : reforestation, création lacs et écosystèmes. 5,000+ hectares restaurés depuis 2010.
              </p>
            </div>
            <div className="bg-background border border-border/50 rounded-lg p-8">
              <Shield className="text-accent mb-4" size={28} />
              <h3 className="text-lg font-semibold mb-3">Gestion de l'Eau</h3>
              <p className="text-muted-foreground">
                Système filtration avancé, traitement complet, réduction consommation 45%, recharge nappes phréatiques.
              </p>
            </div>
            <div className="bg-background border border-border/50 rounded-lg p-8">
              <Users className="text-accent mb-4" size={28} />
              <h3 className="text-lg font-semibold mb-3">Contrats Locaux</h3>
              <p className="text-muted-foreground">
                Emplois locaux prioritaires, formation professionnelle, revenus partage équitable, développement communautaire.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent/5 border-y border-border/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Extraire Responsablement, Créer Durablement</h2>
          <p className="text-lg text-muted-foreground mb-8">
            15 millions de tonnes par an. 91% de récupération. Impact positif local garanti.
          </p>
          <a href="/contact" className="inline-block px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
            Discuter de votre Exploitation
          </a>
        </div>
      </section>
    </>
  )
}
