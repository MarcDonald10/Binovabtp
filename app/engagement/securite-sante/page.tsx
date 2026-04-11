'use client'

import { Shield, CheckCircle2, AlertCircle, Users, Target, Zap } from 'lucide-react'

export default function SecuriteSantePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Sécurité et Santé au Travail</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mb-8">
            Zéro accident, zéro tolérance face aux risques. La sécurité n'est pas un objectif, c'est notre culture.
          </p>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="p-6 border border-border/50 rounded-lg hover:border-accent/50 transition-colors">
              <div className="text-3xl font-bold text-accent mb-2">28 ans</div>
              <p className="text-sm font-medium">Sans accident mortel</p>
              <p className="text-xs text-muted-foreground mt-2">Histoire de sécurité exemplaire</p>
            </div>
            <div className="p-6 border border-border/50 rounded-lg hover:border-accent/50 transition-colors">
              <div className="text-3xl font-bold text-accent mb-2">ISO 45001</div>
              <p className="text-sm font-medium">Certification SSE</p>
              <p className="text-xs text-muted-foreground mt-2">Management avancé</p>
            </div>
            <div className="p-6 border border-border/50 rounded-lg hover:border-accent/50 transition-colors">
              <div className="text-3xl font-bold text-accent mb-2">150+</div>
              <p className="text-sm font-medium">Ingénieurs SSE</p>
              <p className="text-xs text-muted-foreground mt-2">Experts seniors</p>
            </div>
            <div className="p-6 border border-border/50 rounded-lg hover:border-accent/50 transition-colors">
              <div className="text-3xl font-bold text-accent mb-2">500h+</div>
              <p className="text-sm font-medium">Formation/an/collaborateur</p>
              <p className="text-xs text-muted-foreground mt-2">Prévention continue</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20 bg-muted/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-serif font-bold mb-12">Les 4 Piliers de Notre Approche</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-background border border-border/50 rounded-lg p-8">
              <div className="flex gap-4 mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="text-accent" size={24} />
                </div>
                <h3 className="text-xl font-semibold self-center">Prévention Réactive</h3>
              </div>
              <p className="text-muted-foreground">
                Identification systématique des dangers, évaluations régulières des risques et plans d'action préventifs.
              </p>
            </div>
            <div className="bg-background border border-border/50 rounded-lg p-8">
              <div className="flex gap-4 mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="text-accent" size={24} />
                </div>
                <h3 className="text-xl font-semibold self-center">Culture de Sécurité</h3>
              </div>
              <p className="text-muted-foreground">
                Chaque collaborateur est responsable. Formation intensive, sensibilisation continue et implication de tous.
              </p>
            </div>
            <div className="bg-background border border-border/50 rounded-lg p-8">
              <div className="flex gap-4 mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="text-accent" size={24} />
                </div>
                <h3 className="text-xl font-semibold self-center">Inspection et Conformité</h3>
              </div>
              <p className="text-muted-foreground">
                Audits internes réguliers, conformité aux normes internationales et vérifications sur les chantiers.
              </p>
            </div>
            <div className="bg-background border border-border/50 rounded-lg p-8">
              <div className="flex gap-4 mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="text-accent" size={24} />
                </div>
                <h3 className="text-xl font-semibold self-center">Réaction Rapide</h3>
              </div>
              <p className="text-muted-foreground">
                Enquêtes approfondies après incident, débriefing d'équipe et mise en œuvre rapide des corrections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-serif font-bold mb-12">Nos Programmes</h2>
          <div className="space-y-6">
            <div className="border border-border/50 rounded-lg p-6 hover:border-accent/50 transition-colors">
              <div className="flex gap-4">
                <CheckCircle2 className="text-accent flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Formation SSE Obligatoire</h3>
                  <p className="text-muted-foreground">
                    500+ heures de formation par an par collaborateur. Risques spécifiques, protocoles de sécurité, équipements de protection.
                  </p>
                </div>
              </div>
            </div>
            <div className="border border-border/50 rounded-lg p-6 hover:border-accent/50 transition-colors">
              <div className="flex gap-4">
                <CheckCircle2 className="text-accent flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Surveillance Médicale</h3>
                  <p className="text-muted-foreground">
                    Examens médicaux réguliers, prévention des maladies liées au travail et suivi personnalisé de chaque collaborateur.
                  </p>
                </div>
              </div>
            </div>
            <div className="border border-border/50 rounded-lg p-6 hover:border-accent/50 transition-colors">
              <div className="flex gap-4">
                <CheckCircle2 className="text-accent flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Accidents & Incidents</h3>
                  <p className="text-muted-foreground">
                    Taux de fréquence 0.5 pour 1M heures travaillées. Zéro tolérance pour les carences de sécurité.
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
          <h2 className="text-3xl font-serif font-bold mb-4">Bienvenue dans notre Équipe SSE</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Rejoignez une organisation où la sécurité est notre priorité absolue.
          </p>
          <a href="/contact" className="inline-block px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
            Nous Contacter
          </a>
        </div>
      </section>
    </>
  )
}
