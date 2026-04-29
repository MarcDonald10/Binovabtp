import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, Target, Zap, ShieldCheck } from 'lucide-react'

export const metadata = {
  title: 'Tunnelage | BINOVA ROCKBUILDERS',
  description: 'Techniques avancées pour vos infrastructures souterraines les plus complexes.',
}

export default function Tunnelage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-muted/50 to-background">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">Expertise en Tunnelage</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
            Techniques avancées et leadership technologique pour vos infrastructures souterraines les plus complexes, avec 25+ années d&apos;excellence.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6">Le Tunnelage Maîtrisé</h2>
              <p className="text-muted-foreground mb-4">
                Le tunnelage est une technique spécialisée de travaux souterrains permettant la création de galeries et de tunnels à travers les formations géologiques les plus difficiles.
              </p>
              <p className="text-muted-foreground mb-6">
                Notre expertise couvre les tunnels routiers, ferroviaires, d&apos;adduction d&apos;eau et hydrauliques, avec des capacités allant jusqu&apos;à 10 km de linéaire.
              </p>

              <div className="space-y-3">
                <div className="flex gap-3">
                  <Target className="text-accent flex-shrink-0 w-5 h-5 mt-1" />
                  <div>
                    <p className="font-semibold text-sm">Précision Millimétrique</p>
                    <p className="text-xs text-muted-foreground">Tolérances strictes pour tous les paramètres</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Zap className="text-accent flex-shrink-0 w-5 h-5 mt-1" />
                  <div>
                    <p className="font-semibold text-sm">Technologies Avancées</p>
                    <p className="text-xs text-muted-foreground">Équipements dernier cri et techniques modernes</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <ShieldCheck className="text-accent flex-shrink-0 w-5 h-5 mt-1" />
                  <div>
                    <p className="font-semibold text-sm">Sécurité Maximale</p>
                    <p className="text-xs text-muted-foreground">Normes ISO et protocoles de sécurité stricts</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg h-96 flex items-center justify-center">
              <img src="/tunnellage.jpeg" alt="Tunnelage" className="object-cover rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Nos Services de Tunnelage</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Tunnels Routiers',
                description: 'Infrastructure routière souterraine pour contournement urbain et traversée géographique.',
                features: ['Contournements urbains', 'Traversées montagneuses', 'Bifurcations souterraines']
              },
              {
                title: 'Tunnels Ferroviaires',
                description: 'Liaisons ferroviaires souterraines hautes performances et haute capacité.',
                features: ['Lignes grandes vitesses', 'Métros et tramways', 'Tunnels de base']
              },
              {
                title: 'Adductions d\'Eau',
                description: 'Systèmes d\'approvisionnement en eau longue distance et étanches.',
                features: ['Galeries d\'amenée', 'Collecteurs étanches', 'Réseaux gravitaires']
              },
              {
                title: 'Tunnels Hydrauliques',
                description: 'Infrastructures pour dérivations hydrauliques et centrales souterraines.',
                features: ['Galeries de dérivation', 'Centrales souterraines', 'Évacuateurs de crue']
              }
            ].map((service, idx) => (
              <div key={idx} className="bg-background rounded-lg p-8 border border-border">
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, fidx) => (
                    <li key={fidx} className="flex gap-2 text-sm">
                      <span className="text-accent">▪</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Notre Expertise Technique</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Tunnelier TBM', desc: 'Machines à bouclier pour excavation mécanisée en terrain meuble ou rocheux' },
              { name: 'Méthode NATM', desc: 'Nouvelle méthode autrichienne pour tunnels en terrain variable' },
              { name: 'Instrumentation Géotechnique', desc: 'Suivi en temps réel des déformations et pressions du terrain' },
              { name: 'Soutènement Béton Projeté', desc: 'Gunitage et ancrage pour stabilisation immédiate des parois' },
              { name: 'Ventilation Souterraine', desc: 'Systèmes de ventilation longitudinale et transversale certifiés' },
              { name: 'Drainage & Étanchéité', desc: 'Membranes et systèmes de drainage pour tunnels étanches durables' }
            ].map((tech, idx) => (
              <div key={idx} className="bg-muted/30 rounded-lg p-6 border border-border">
                <p className="font-semibold mb-2">{tech.name}</p>
                <p className="text-sm text-muted-foreground">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Certifications & Conformité</h2>

          <div className="bg-background rounded-lg p-12 border border-border">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-bold mb-3">Certifications</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <span className="text-accent">✓</span> ISO 9001 (Management Qualité)
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">✓</span> ISO 14001 (Environnement)
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">✓</span> CNAMTS (Sécurité chantier)
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-3">Protocoles</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <span className="text-accent">✓</span> Eurocode 7 (Géotechnique)
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">✓</span> Norme NF EN 12715 (Injections)
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">✓</span> Directive UE 2004/54 (Tunnels)
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-3">Formations</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <span className="text-accent">✓</span> Formation tunnelage 3 ans
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">✓</span> Habilitation travaux souterrains
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">✓</span> Recyclage sécurité annuel
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Besoin d&apos;une Solution de Tunnelage?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Nos experts vous aident à trouver la meilleure solution pour votre projet souterrain.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Nous Contacter <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}