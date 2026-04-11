import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, Shield, Zap, Layers, TrendingUp } from 'lucide-react'

export const metadata = {
  title: 'Travaux Souterrains | BINOVA ROCKBUILDERS',
  description: 'Solutions complètes pour infrastructure souterraine : tunnels, cavernes et ouvrages souterrains.',
}

export default function TravauxSouterrains() {
  return (
    <>
      {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-muted/50 to-background">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-5xl font-bold mb-6">Travaux Souterrains</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Solutions complètes pour tous vos besoins en infrastructures souterraines. Expertise globale du tunnelage à la stabilisation.
            </p>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl font-bold mb-6">Une Expertise Complète</h2>
                <p className="text-muted-foreground mb-4">
                  Les travaux souterrains représentent le sommet de la complexité en BTP. Nos équipes combinent expertise technique, rigueur et innovation pour transformer les défis les plus difficiles en succès tangibles.
                </p>
                <p className="text-muted-foreground mb-6">
                  De la reconnaissance géotechnique à la mise en service, nous pilotrons chaque phase avec précision millimétrique et attention constante à la sécurité.
                </p>
                
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <Shield className="text-accent flex-shrink-0 w-5 h-5 mt-1" />
                    <div>
                      <p className="font-semibold text-sm">Sécurité Souterraine</p>
                      <p className="text-xs text-muted-foreground">Protocoles stricts pour environnement confined</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Zap className="text-accent flex-shrink-0 w-5 h-5 mt-1" />
                    <div>
                      <p className="font-semibold text-sm">Technologie Avancée</p>
                      <p className="text-xs text-muted-foreground">Équipement souterrain de pointe</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Layers className="text-accent flex-shrink-0 w-5 h-5 mt-1" />
                    <div>
                      <p className="font-semibold text-sm">Gestion Géologique</p>
                      <p className="text-xs text-muted-foreground">Adaptation en temps réel aux formations</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg h-96 flex items-center justify-center">
                <p className="text-center text-muted-foreground">Image Souterrain</p>
              </div>
            </div>
          </div>
        </section>

        {/* Domaines */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-16">Domaines d&apos;Intervention</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Tunnelage',
                  description: 'Tunnels routiers, ferroviaires et hydrauliques avec techniques modernes.',
                  link: '/tunnelage'
                },
                {
                  title: 'Minage Contrôlé',
                  description: 'Extraction rocheuse sécurisée avec maîtrise complète des impacts.',
                  link: '/minage'
                },
                {
                  title: 'Cavernes',
                  description: 'Création d\'espaces souterrains pour stockage, équipements ou usage commercial.',
                  features: ['Stockage produits', 'Stockage énergétique', 'Data centers']
                },
                {
                  title: 'Soutènement',
                  description: 'Boulonnage, projection béton et soutènement pour stabilité maximale.',
                  features: ['Boulons d\'ancrage', 'Béton projeté', 'Cintres']
                },
                {
                  title: 'Revêtement & Finition',
                  description: 'Mise en place de revêtements et finitions pour durabilité long terme.',
                  features: ['Béton coffré', 'Revêtement étanche', 'Finitions']
                },
                {
                  title: 'Ventilation Souterraine',
                  description: 'Systèmes de ventilation et qualité d\'air pour environnement confined.',
                  features: ['Ventilation naturelle', 'Ventilation mécanique', 'Filtration']
                }
              ].map((domaine, idx) => (
                <div key={idx} className="bg-background rounded-lg p-8 border border-border hover:border-accent transition">
                  <h3 className="text-xl font-bold mb-3">{domaine.title}</h3>
                  <p className="text-muted-foreground mb-4">{domaine.description}</p>
                  {domaine.features && (
                    <ul className="space-y-2">
                      {domaine.features.map((feature, fidx) => (
                        <li key={fidx} className="flex gap-2 text-sm">
                          <span className="text-accent">▪</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                  {domaine.link && (
                    <Link href={domaine.link} className="text-accent font-medium hover:underline flex items-center gap-2 mt-4">
                      En savoir plus <ArrowRight size={16} />
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilités */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12">Nos Capacités</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-muted/30 rounded-lg p-8 border border-border">
                <h3 className="font-bold mb-4">Profondeurs de Travail</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <span className="text-accent">✓</span> Jusqu&apos;à 500 m de profondeur
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">✓</span> Sous-marin jusqu&apos;à 100 m
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">✓</span> Toutes formations géologiques
                  </li>
                </ul>
              </div>
              
              <div className="bg-muted/30 rounded-lg p-8 border border-border">
                <h3 className="font-bold mb-4">Dimensions</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <span className="text-accent">✓</span> Micro-tunnels dès 500 mm de diamètre
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">✓</span> Tunnels principaux jusqu&apos;à 15 m
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">✓</span> Cavernes jusqu&apos;à 50 m de portée
                  </li>
                </ul>
              </div>
              
              <div className="bg-muted/30 rounded-lg p-8 border border-border">
                <h3 className="font-bold mb-4">Longueurs</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <span className="text-accent">✓</span> Linéaires continus jusqu&apos;à 58 km
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">✓</span> Gestion multi-chantiers coordonnés
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">✓</span> Travaux continus 24/24, 7/7
                  </li>
                </ul>
              </div>
              
              <div className="bg-muted/30 rounded-lg p-8 border border-border">
                <h3 className="font-bold mb-4">Environnements</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <span className="text-accent">✓</span> Zones urbaines densément construites
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">✓</span> Environnements sensibles
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">✓</span> Zones côtières et sous-marines
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Méthodologie */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-16">Notre Méthodologie</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-4">
                <h3 className="font-bold text-lg">Phase de Conception</h3>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <TrendingUp className="text-accent flex-shrink-0 w-5 h-5" />
                    <p className="text-sm text-muted-foreground">Études géotechniques approfondies et modélisation 3D</p>
                  </div>
                  <div className="flex gap-3">
                    <TrendingUp className="text-accent flex-shrink-0 w-5 h-5" />
                    <p className="text-sm text-muted-foreground">Simulations numériques et analyse des risques</p>
                  </div>
                  <div className="flex gap-3">
                    <TrendingUp className="text-accent flex-shrink-0 w-5 h-5" />
                    <p className="text-sm text-muted-foreground">Sélection de la technologie optimale</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-bold text-lg">Phase d&apos;Exécution</h3>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <TrendingUp className="text-accent flex-shrink-0 w-5 h-5" />
                    <p className="text-sm text-muted-foreground">Montage chantier et préparation sécurité 3 mois</p>
                  </div>
                  <div className="flex gap-3">
                    <TrendingUp className="text-accent flex-shrink-0 w-5 h-5" />
                    <p className="text-sm text-muted-foreground">Suivi géotechnique en temps réel</p>
                  </div>
                  <div className="flex gap-3">
                    <TrendingUp className="text-accent flex-shrink-0 w-5 h-5" />
                    <p className="text-sm text-muted-foreground">Adaptations dynamiques aux conditions rencontrées</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-4">Projet d&apos;Infrastructure Souterraine?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Discutons de comment nous pouvons réaliser votre vision souterraine.
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
