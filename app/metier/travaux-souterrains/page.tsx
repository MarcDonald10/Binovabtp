'use client'

import { Zap, TrendingUp, Target, Shield, Users, Award } from 'lucide-react'

export default function TravauxSouterrainMetierPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Travaux Souterrains</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mb-8">
            Grâce à nos équipes expérimentées et leur capacité d'innovation continue, nous maitrisons toutes les techniques de creusements et de soutènement (tunneliers), 
            ce qui nous permet d'intervenir sur tous types de terrain.
          </p>
        </div>
      </section>

      {/* Expertise Matrix */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-serif font-bold mb-12">Domaines de Maîtrise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border border-border/50 rounded-lg hover:border-accent/50 transition-colors">
              <Zap className="text-accent mb-4" size={28} />
              <h3 className="text-lg font-semibold mb-3">Tunnelage TBM</h3>
              <p className="text-muted-foreground text-sm">
                Tunnel boring machines 6 à 12m. Percement géologies complexes, gestion pressions, consolidations adaptées.
              </p>
            </div>
            <div className="p-6 border border-border/50 rounded-lg hover:border-accent/50 transition-colors">
              <Target className="text-accent mb-4" size={28} />
              <h3 className="text-lg font-semibold mb-3">Excavation Contrôlée</h3>
              <p className="text-muted-foreground text-sm">
                Minage de précision, explosifs écologiques, vibrations minimales, protection environnement strict.
              </p>
            </div>
            <div className="p-6 border border-border/50 rounded-lg hover:border-accent/50 transition-colors">
              <Shield className="text-accent mb-4" size={28} />
              <h3 className="text-lg font-semibold mb-3">Géotechnique Avancée</h3>
              <p className="text-muted-foreground text-sm">
                Soutènements complexes, contrôle tassements, consolidation sol-roche et prévention d'effondrements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-20 bg-muted/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-background border border-border/50 rounded-lg">
              <div className="text-4xl font-bold text-accent mb-2">156</div>
              <p className="font-semibold">Tunnels complétés</p>
              <p className="text-sm text-muted-foreground">Tous types</p>
            </div>
            <div className="text-center p-6 bg-background border border-border/50 rounded-lg">
              <div className="text-4xl font-bold text-accent mb-2">850+ km</div>
              <p className="font-semibold">Longueur totale</p>
              <p className="text-sm text-muted-foreground">Tunnels construits</p>
            </div>
            <div className="text-center p-6 bg-background border border-border/50 rounded-lg">
              <div className="text-4xl font-bold text-accent mb-2">28 ans</div>
              <p className="font-semibold">Sans accident mortel</p>
              <p className="text-sm text-muted-foreground">Sécurité exemplaire</p>
            </div>
            <div className="text-center p-6 bg-background border border-border/50 rounded-lg">
              <div className="text-4xl font-bold text-accent mb-2">€45B</div>
              <p className="font-semibold">Valeur travaux</p>
              <p className="text-sm text-muted-foreground">Souterrains</p>
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Projects */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-serif font-bold mb-12">Exploits Souterrains</h2>
          <div className="space-y-6">
            <div className="border border-border/50 rounded-lg p-6 hover:border-accent/50 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold">Lyon-Turin : 58km sous les Alpes</h3>
                  <p className="text-sm text-muted-foreground">France-Italie - Tunnel Ferroviaire</p>
                </div>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded text-xs font-semibold">€12.5B</span>
              </div>
              <p className="text-muted-foreground text-sm mb-3">
                Plus long tunnel d'Europe. TBM 9.58m, conditions géologiques extrêmes, équipes France-Italie coordonnées. Zéro retard.
              </p>
              <div className="flex gap-4 text-xs font-medium">
                <span className="px-2 py-1 bg-muted rounded">Durée: 8 ans</span>
                <span className="px-2 py-1 bg-muted rounded">Équipe: 450</span>
                <span className="px-2 py-1 bg-muted rounded">Délai: Respecté</span>
              </div>
            </div>
            <div className="border border-border/50 rounded-lg p-6 hover:border-accent/50 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold">Métro Bangkok : 5 tunnels entrelacés</h3>
                  <p className="text-sm text-muted-foreground">Thaïlande - Métro urbain</p>
                </div>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded text-xs font-semibold">€3.2B</span>
              </div>
              <p className="text-muted-foreground text-sm mb-3">
                Excavation sous ville dense. TBM multi-usages, passages interstations critiques, protection bâtiments.
              </p>
              <div className="flex gap-4 text-xs font-medium">
                <span className="px-2 py-1 bg-muted rounded">Longueur: 65km</span>
                <span className="px-2 py-1 bg-muted rounded">Usage: Urbain</span>
                <span className="px-2 py-1 bg-muted rounded">Défi: Densité</span>
              </div>
            </div>
            <div className="border border-border/50 rounded-lg p-6 hover:border-accent/50 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold">Mine d'Or Souterraine - Afrique</h3>
                  <p className="text-sm text-muted-foreground">Burkina Faso - Extraction minière</p>
                </div>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded text-xs font-semibold">€1.8B</span>
              </div>
              <p className="text-muted-foreground text-sm mb-3">
                Réseaux galeries 3.500m profondeur. 400k tonnes/an extrait. Sécurité maximale, ventilation contrôlée, système drainage.
              </p>
              <div className="flex gap-4 text-xs font-medium">
                <span className="px-2 py-1 bg-muted rounded">Profondeur: 3.5km</span>
                <span className="px-2 py-1 bg-muted rounded">Récupération: 91%</span>
                <span className="px-2 py-1 bg-muted rounded">Production: 400kt/an</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Excellence */}
      <section className="py-20 bg-muted/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-serif font-bold mb-12">Excellence Technique</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-background border border-border/50 rounded-lg p-8">
              <Users className="text-accent mb-4" size={28} />
              <h3 className="text-lg font-semibold mb-3">Équipes Spécialisées</h3>
              <p className="text-muted-foreground">
                150+ ingénieurs tunnelage certifiés. Experts géologie, hydrogéologie, structures et séismique. Formation continue.
              </p>
            </div>
            <div className="bg-background border border-border/50 rounded-lg p-8">
              <TrendingUp className="text-accent mb-4" size={28} />
              <h3 className="text-lg font-semibold mb-3">Monitoring Temps Réel</h3>
              <p className="text-muted-foreground">
                1000+ capteurs par tunnel. Surveillance déformation, pression eau, vibrations et stabilité continue.
              </p>
            </div>
            <div className="bg-background border border-border/50 rounded-lg p-8">
              <Award className="text-accent mb-4" size={28} />
              <h3 className="text-lg font-semibold mb-3">Gestion des Risques</h3>
              <p className="text-muted-foreground">
                Plans d'urgence détaillés, simulation incidents, protocoles sécurité renforcés, assurance couverture maxi.
              </p>
            </div>
            <div className="bg-background border border-border/50 rounded-lg p-8">
              <Shield className="text-accent mb-4" size={28} />
              <h3 className="text-lg font-semibold mb-3">Sécurité Absolue</h3>
              <p className="text-muted-foreground">
                28 ans sans accident mortel. Ventilation active, systèmes sauvetage, formations SSE renforcées continuelles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent/5 border-y border-border/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Percer, Explorer, Construire en Profondeur</h2>
          <p className="text-lg text-muted-foreground mb-8">
            156 tunnels. 850+ km. 28 ans de sécurité. Maîtrise absolue des défis souterrains.
          </p>
          <a href="/contact" className="inline-block px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
            Votre Projet Souterrain
          </a>
        </div>
      </section>
    </>
  )
}
