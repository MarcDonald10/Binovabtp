import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, Layers, MapPin, Zap, Maximize2 } from 'lucide-react'

export const metadata = {
  title: 'Terrassement | BINOVA ROCKBUILDERS',
  description: 'Travaux de terrassement de précision pour tous types de terrain et d\'infrastructure.',
}

export default function Terrassement() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-muted/50 to-background">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-5xl font-bold mb-6">Expertise en Terrassement</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Solutions de terrassement de précision adaptées à tous les types de terrain. De la préparation de site aux travaux complexes.
            </p>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl font-bold mb-6">Terrassement Professionnel</h2>
                <p className="text-muted-foreground mb-4">
                  Le terrassement est la fondation de tout projet BTP. Nos équipes maîtrisent les techniques les plus sophistiquées pour préparer votre terrain avec précision.
                </p>
                <p className="text-muted-foreground mb-6">
                  De la reconnaissance géotechnique à la stabilisation des pentes, nous gérons chaque aspect du terrassement avec professionnalisme et rigueur.
                </p>
                
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <MapPin className="text-accent flex-shrink-0 w-5 h-5 mt-1" />
                    <div>
                      <p className="font-semibold text-sm">Topographie Précise</p>
                      <p className="text-xs text-muted-foreground">GPS et drone pour relevés exacts</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Layers className="text-accent flex-shrink-0 w-5 h-5 mt-1" />
                    <div>
                      <p className="font-semibold text-sm">Gestion des Couches</p>
                      <p className="text-xs text-muted-foreground">Compactage et traitement spécialisé</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Maximize2 className="text-accent flex-shrink-0 w-5 h-5 mt-1" />
                    <div>
                      <p className="font-semibold text-sm">Adaptabilité</p>
                      <p className="text-xs text-muted-foreground">Tous types de sols et pentes</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg h-96 flex items-center justify-center">
                <p className="text-center text-muted-foreground">Image Terrassement</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-16">Nos Services de Terrassement</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Préparation de Site',
                  description: 'Déblai, remblai et mise en forme du terrain pour la construction.',
                  features: ['Topographie', 'Nivellement', 'Déroctage']
                },
                {
                  title: 'Fondations',
                  description: 'Creusement et préparation des fondations pour structures.',
                  features: ['Tranchées', 'Fouilles', 'Pieux']
                },
                {
                  title: 'Routes et Infrastructures',
                  description: 'Travaux de terrassement pour voiries et infrastructures linéaires.',
                  features: ['Décapage', 'Bordures', 'Assainissement']
                },
                {
                  title: 'Stabilisation de Pentes',
                  description: 'Soutènement et stabilisation pour terrains en pente.',
                  features: ['Pentes raide', 'Glissements', 'Boulonnage']
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

        {/* Equipment */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12">Équipements Disponibles</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: 'Pelles Hydrauliques', desc: '20 à 45 tonnes pour tous types de creusement' },
                { name: 'Bulldozers', desc: 'Pour travaux de déplacement et nivellement' },
                { name: 'Dumpers Articulés', desc: 'Transport de matériaux en zone difficile' },
                { name: 'Compacteurs', desc: 'Statiques et vibrants pour compactage optimal' },
                { name: 'Forages', desc: 'Foreuses pour reconnaissance géotechnique' },
                { name: 'GPS & Drones', desc: 'Levés topographiques haute précision' }
              ].map((equipment, idx) => (
                <div key={idx} className="bg-muted/30 rounded-lg p-6 border border-border">
                  <p className="font-semibold mb-2">{equipment.name}</p>
                  <p className="text-sm text-muted-foreground">{equipment.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-16">Notre Processus</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="font-bold mb-2">Reconnaissance</h3>
                <p className="text-sm text-muted-foreground">
                  Étude géotechnique et topographique du site.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="font-bold mb-2">Planification</h3>
                <p className="text-sm text-muted-foreground">
                  Conception du plan terrassement détaillé.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="font-bold mb-2">Exécution</h3>
                <p className="text-sm text-muted-foreground">
                  Déblai/remblai avec suivi de compactage.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="font-bold mb-2">Contrôle</h3>
                <p className="text-sm text-muted-foreground">
                  Vérification conformité et réception.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-16">Projets Réalisés</h2>
            
            <div className="space-y-8">
              {[
                {
                  name: 'Parc Éolien Bourgogne',
                  location: 'Côte d\'Or',
                  scope: ['25 fondations', '500 m de pistes', 'Stabilisation talus'],
                  year: 2023
                },
                {
                  name: 'Aménagement Portuaire Marseille',
                  location: 'Marseille',
                  scope: ['15 000 m² déblai', 'Stabilisation berge', '50 000 m³ matériau'],
                  year: 2024
                },
                {
                  name: 'Autoroute A89 Section',
                  location: 'Côte-d\'Or / Saône-et-Loire',
                  scope: ['8 km linéaire', 'Trois remblais', 'Deux tranchées'],
                  year: 2023
                }
              ].map((project, idx) => (
                <div key={idx} className="bg-muted/50 rounded-lg p-8 border border-border hover:border-accent transition">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                      <p className="text-muted-foreground">{project.location}</p>
                    </div>
                    <span className="text-accent font-medium">{project.year}</span>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    {project.scope.map((item, sidx) => (
                      <span key={sidx} className="text-sm text-muted-foreground">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-4">Projet de Terrassement?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Confiez-nous vos travaux de terrassement pour une exécution impeccable.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Demander un Devis <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
