'use client'

import { Gavel, Shield, Users, Eye, Handshake, TrendingUp } from 'lucide-react'

export default function EthiquePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Éthique et Intégrité</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mb-8">
            L'intégrité guide chacune de nos décisions. Nos clients, nos collaborateurs et nos partenaires méritent une entreprise fiable et transparente.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-muted/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-serif font-bold mb-12">Nos Valeurs Fondamentales</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background border border-border/50 rounded-lg p-8 hover:shadow-lg transition-all">
              <Gavel className="text-accent mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-3">Conformité & Légalité</h3>
              <p className="text-muted-foreground">
                Respect strict des lois, réglementations et conventions internationales. Audit régulier de nos pratiques commerciales.
              </p>
            </div>
            <div className="bg-background border border-border/50 rounded-lg p-8 hover:shadow-lg transition-all">
              <Eye className="text-accent mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-3">Transparence</h3>
              <p className="text-muted-foreground">
                Communication claire avec tous les stakeholders. Rapports annuels de déclaration de conformité éthique.
              </p>
            </div>
            <div className="bg-background border border-border/50 rounded-lg p-8 hover:shadow-lg transition-all">
              <Handshake className="text-accent mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-3">Partenariats Responsables</h3>
              <p className="text-muted-foreground">
                Sélection rigoureuse de nos fournisseurs et sous-traitants selon des critères éthiques stricts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Code of Conduct */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-serif font-bold mb-12">Code de Conduite</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-border/50 rounded-lg p-6 hover:border-accent/50 transition-colors">
              <div className="flex gap-4">
                <Shield className="text-accent flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Lutte Anticorruption</h3>
                  <p className="text-muted-foreground">
                    Zéro tolérance pour la corruption, les conflits d'intérêts ou les pratiques déloyales. Formation obligatoire annuelle.
                  </p>
                </div>
              </div>
            </div>
            <div className="border border-border/50 rounded-lg p-6 hover:border-accent/50 transition-colors">
              <div className="flex gap-4">
                <Users className="text-accent flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Respect des Droits Humains</h3>
                  <p className="text-muted-foreground">
                    Pas de travail forcé, pas de discrimination, pas d'enfants travailleurs. Respect des droits universels.
                  </p>
                </div>
              </div>
            </div>
            <div className="border border-border/50 rounded-lg p-6 hover:border-accent/50 transition-colors">
              <div className="flex gap-4">
                <Eye className="text-accent flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Liberté d'Expression</h3>
                  <p className="text-muted-foreground">
                    Droit de dénonciation protégé. Ligne d'alerte éthique confidentielle disponible 24/7.
                  </p>
                </div>
              </div>
            </div>
            <div className="border border-border/50 rounded-lg p-6 hover:border-accent/50 transition-colors">
              <div className="flex gap-4">
                <TrendingUp className="text-accent flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Excellence Professionnelle</h3>
                  <p className="text-muted-foreground">
                    Compétence, intégrité et respect des délais. Engagement qualité sur chaque projet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="py-20 bg-muted/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-serif font-bold mb-12">Gouvernance et Contrôle</h2>
          <div className="border border-border/50 rounded-lg p-8 bg-background">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold mb-4">Comité d'Éthique</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>✓ Audit interne trimestriel</li>
                  <li>✓ Vérification conformité</li>
                  <li>✓ Gestion des plaintes</li>
                  <li>✓ Formation du personnel</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Contrôle Fournisseurs</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>✓ Audit SSE/RSE</li>
                  <li>✓ Évaluation éthique</li>
                  <li>✓ Suivi régulier</li>
                  <li>✓ Exclusion des mauvais acteurs</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Documentation</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>✓ Politique écrite</li>
                  <li>✓ Rapports annuels</li>
                  <li>✓ Certifications externes</li>
                  <li>✓ Transparence publique</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent/5 border-y border-border/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Partenaire Éthique et Fiable</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Basez votre confiance sur l'intégrité et la transparence. C'est notre promesse.
          </p>
          <a href="/contact" className="inline-block px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
            Nous Contacter
          </a>
        </div>
      </section>
    </>
  )
}
