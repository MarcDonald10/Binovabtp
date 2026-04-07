import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, Shield, Clock, Users, Award, FileCheck, AlertCircle } from 'lucide-react'

export const metadata = {
  title: 'Engagement Client | BINOVA ROCKBUILDERS',
  description: 'Nos engagements envers vous : qualité, délais, sécurité et support.',
}

export default function EngagementClients() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-muted/50 to-background">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-5xl font-bold mb-6">Nos Engagements Envers Vous</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Transparence, excellence et partenariat long terme. Voici les promesses que nous vous faisons.
            </p>
          </div>
        </section>

        {/* Main Engagements */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
              {/* Engagement 1 */}
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Award className="text-accent w-7 h-7" />
                  </div>
                  <h2 className="text-2xl font-bold">Qualité Certifiée</h2>
                </div>
                <p className="text-muted-foreground mb-4">
                  Tous nos travaux respectent les normes ISO 9001 et les standards internationaux de qualité. Chaque projet est audité régulièrement pour garantir l&apos;excellence.
                </p>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span className="text-accent">✓</span> ISO 9001 Certifiée
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">✓</span> Audits réguliers
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">✓</span> Amélioration continue
                  </li>
                </ul>
              </div>

              {/* Engagement 2 */}
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Clock className="text-accent w-7 h-7" />
                  </div>
                  <h2 className="text-2xl font-bold">Respect des Délais</h2>
                </div>
                <p className="text-muted-foreground mb-4">
                  Planification rigoureuse et gestion de projet méthodique. Nous nous engageons à respecter scrupuleusement vos échéances.
                </p>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span className="text-accent">✓</span> Planning détaillé
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">✓</span> Suivi hebdomadaire
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">✓</span> Rapport d&apos;avancement
                  </li>
                </ul>
              </div>

              {/* Engagement 3 */}
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Shield className="text-accent w-7 h-7" />
                  </div>
                  <h2 className="text-2xl font-bold">Sécurité Maximale</h2>
                </div>
                <p className="text-muted-foreground mb-4">
                  La sécurité de nos équipes et de votre site est notre priorité absolue. Protocoles stricts et formation continue.
                </p>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span className="text-accent">✓</span> Protocoles de sécurité avancés
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">✓</span> Formation 3 ans obligatoire
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">✓</span> Assurance complète
                  </li>
                </ul>
              </div>

              {/* Engagement 4 */}
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Users className="text-accent w-7 h-7" />
                  </div>
                  <h2 className="text-2xl font-bold">Support 24/7</h2>
                </div>
                <p className="text-muted-foreground mb-4">
                  Une équipe dédiée est disponible à tout moment pour vous soutenir et résoudre tout problème rapidement.
                </p>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span className="text-accent">✓</span> Équipe sur site
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">✓</span> Support d&apos;urgence
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">✓</span> Communication transparente
                  </li>
                </ul>
              </div>
            </div>

            {/* Detailed Commitments */}
            <div className="bg-muted/30 rounded-lg p-12 mb-20">
              <h3 className="text-3xl font-bold mb-8">Nos Promesses Détaillées</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <FileCheck className="text-accent flex-shrink-0 w-6 h-6 mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">Documentation Complète</h4>
                    <p className="text-muted-foreground">
                      Chaque projet est documenté intégralement avec plans, rapports et photographies régulières.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <AlertCircle className="text-accent flex-shrink-0 w-6 h-6 mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">Gestion des Risques Proactive</h4>
                    <p className="text-muted-foreground">
                      Identification anticipée des problèmes potentiels et plans de mitigation pour chaque risque.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Award className="text-accent flex-shrink-0 w-6 h-6 mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">Équipes Expertes et Certifiées</h4>
                    <p className="text-muted-foreground">
                      Tous nos technicians possèdent les certifications nécessaires et bénéficient d&apos;une formation continue.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="text-accent flex-shrink-0 w-6 h-6 mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">Réactivité Garantie</h4>
                    <p className="text-muted-foreground">
                      Temps de réponse inférieur à 2 heures pour toute demande urgente, 24h/24, 7j/7.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16">Notre Processus</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="font-bold mb-2">Analyse</h3>
                <p className="text-sm text-muted-foreground">
                  Étude approfondie de votre projet et ses contraintes.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="font-bold mb-2">Planification</h3>
                <p className="text-sm text-muted-foreground">
                  Création d&apos;un planning détaillé et réaliste.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="font-bold mb-2">Exécution</h3>
                <p className="text-sm text-muted-foreground">
                  Mise en œuvre rigoureuse selon les standards.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="font-bold mb-2">Livraison</h3>
                <p className="text-sm text-muted-foreground">
                  Transfert de projet avec documentation complète.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-4">Prêt à Commencer?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Contactez nos experts pour discuter de comment nous pouvons soutenir votre projet.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Nous Contacter <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
