import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, Layers, HardHat, Ruler, BarChart3 } from 'lucide-react'

export const metadata = {
  title: 'Infrastructure | BINOVA ROCKBUILDERS',
  description: 'Conception et réalisation d\'ouvrages majeurs à forte valeur stratégique et technique.',
}

export default function Infrastructure() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-muted/50 to-background">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">Expertise en Infrastructure</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
            Conception et réalisation d&apos;ouvrages majeurs à forte valeur stratégique et technique, pour des infrastructures durables et performantes.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6">L&apos;Infrastructure Maîtrisée</h2>
              <p className="text-muted-foreground mb-4">
                L&apos;infrastructure est le socle de tout développement économique et territorial. Notre expertise repose sur une approche intégrée alliant ingénierie de pointe, rigueur technique et respect des délais.
              </p>
              <p className="text-muted-foreground mb-6">
                Nous concevons et réalisons des ouvrages dart, des tunnels, des ponts et des plateformes industrielles avec une maîtrise totale des contraintes géotechniques et environnementales.
              </p>

              <div className="space-y-3">
                <div className="flex gap-3">
                  <Layers className="text-accent flex-shrink-0 w-5 h-5 mt-1" />
                  <div>
                    <p className="font-semibold text-sm">Conception Intégrée</p>
                    <p className="text-xs text-muted-foreground">BIM et modélisation numérique avancée</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <HardHat className="text-accent flex-shrink-0 w-5 h-5 mt-1" />
                  <div>
                    <p className="font-semibold text-sm">Sécurité Structurelle</p>
                    <p className="text-xs text-muted-foreground">Contrôle qualité à chaque étape du projet</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Ruler className="text-accent flex-shrink-0 w-5 h-5 mt-1" />
                  <div>
                    <p className="font-semibold text-sm">Précision d&apos;Exécution</p>
                    <p className="text-xs text-muted-foreground">Tolérances strictes pour ouvrages critiques</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg h-96 flex items-center justify-center">
              <img src="/infrastructure.jpeg" alt="Infrastructure" className="object-cover rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Nos Services d&apos;Infrastructure</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Ouvrages dArt',
                description: 'Conception et construction de ponts, viaducs et passages souterrains.',
                features: ['Ponts et viaducs', 'Passerelles piétonnes', 'Murs de soutènement']
              },
              {
                title: 'Travaux Souterrains',
                description: 'Réalisation de tunnels et galeries pour transport et utilités.',
                features: ['Tunnels routiers', 'Galeries techniques', 'Excavation mécanique']
              },
              {
                title: 'Plateformes Industrielles',
                description: 'Aménagement de sites industriels et zones logistiques de grande envergure.',
                features: ['Terrassements lourds', 'Voiries industrielles', 'Fondations spéciales']
              },
              {
                title: 'Génie Civil Urbain',
                description: 'Réseaux et ouvrages intégrés au tissu urbain avec impact minimal.',
                features: ['Réseaux enterrés', 'Tranchées couvertes', 'Consolidation de sols']
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
              { name: 'Modélisation BIM', desc: 'Maquette numérique collaborative pour tous les corps de métier' },
              { name: 'Géotechnique Avancée', desc: 'Analyse des sols et conception de fondations adaptées' },
              { name: 'Béton Haute Performance', desc: 'Formulations spéciales pour ouvrages soumis à fortes contraintes' },
              { name: 'Topographie de Précision', desc: 'Levés et implantations au millimètre avec GPS différentiel' },
              { name: 'Engins Spécialisés', desc: 'Matériel de terrassement et de forage de dernière génération' },
              { name: 'Suivi Environnemental', desc: 'Contrôle des impacts hydrologiques et écologiques en temps réel' }
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
                    <span className="text-accent">✓</span> OHSAS 18001 (Sécurité)
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-3">Protocoles</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <span className="text-accent">✓</span> Eurocode 2 (Béton armé)
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">✓</span> Eurocode 7 (Géotechnique)
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">✓</span> Normes NF EN 1337
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-3">Formations</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <span className="text-accent">✓</span> Formation génie civil 3 ans
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">✓</span> Habilitation chantiers sensibles
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
          <h2 className="text-4xl font-bold mb-4">Un Projet d&apos;Infrastructure?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Discutons de la meilleure approche technique pour concrétiser vos ouvrages stratégiques.
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