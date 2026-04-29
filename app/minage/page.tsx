import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, Gauge, Shield, Zap, BarChart3 } from 'lucide-react'

export const metadata = {
  title: 'Minage | BINOVA ROCKBUILDERS',
  description: 'Solutions de minage contrôlées pour extraction sécurisée et efficace.',
}

export default function Minage() {
  return (
    <>
      {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-muted/50 to-background">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-5xl font-bold mb-6">Expertise en Minage</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Solutions de minage contrôlées pour une extraction sécurisée, précise et efficace dans tous les contextes géologiques.
            </p>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl font-bold mb-6">Le Minage Maîtrisé</h2>
                <p className="text-muted-foreground mb-4">
                  Le minage est une technique clé pour le déplacement et l&apos;extraction de roches. Notre expertise repose sur une maîtrise complète des explosifs, des délais et des impacts.
                </p>
                <p className="text-muted-foreground mb-6">
                  Nous utilisons les techniques les plus avancées pour minimiser les vibrations, le bruit et les impacts environnementaux tout en maximisant l&apos;efficacité opérationnelle.
                </p>
                
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <Gauge className="text-accent flex-shrink-0 w-5 h-5 mt-1" />
                    <div>
                      <p className="font-semibold text-sm">Contrôle Vibratoire</p>
                      <p className="text-xs text-muted-foreground">Suivi en temps réel avec capteurs</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Shield className="text-accent flex-shrink-0 w-5 h-5 mt-1" />
                    <div>
                      <p className="font-semibold text-sm">Sécurité Renforcée</p>
                      <p className="text-xs text-muted-foreground">Protocoles de pyrotechnie certifiés</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Zap className="text-accent flex-shrink-0 w-5 h-5 mt-1" />
                    <div>
                      <p className="font-semibold text-sm">Efficacité Optimisée</p>
                      <p className="text-xs text-muted-foreground">Rendement maximal par charge</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg h-96 flex items-center justify-center">
                 <img src="/minage.webp" alt="Minage" className="object-cover rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-16">Nos Services de Minage</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Minage de Dégagement',
                  description: 'Déplacement de volumes rocheux pour infrastructures souterraines.',
                  features: ['Tunnel dégagement', 'Cavernes', 'Chambres']
                },
                {
                  title: 'Minage de Production',
                  description: 'Extraction efficace de matériaux dans carrières et mines.',
                  features: ['Carrière roche', 'Minerai', 'Optimisation rendement']
                },
                {
                  title: 'Minage Contrôlé',
                  description: 'Techniques spéciales pour zones sensibles et urbaines.',
                  features: ['Découpage d\'avancement', 'Minage en paroi', 'Anti-vibrations']
                },
                {
                  title: 'Démolition Minée',
                  description: 'Abattage de structures massives avec maîtrise complète.',
                  features: ['Bâtiments béton', 'Rochers ', 'Structures mixtes']
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
                { name: 'Pyrotechnie Civile', desc: 'Certification internationale pour explosifs civils' },
                { name: 'Modélisation 3D', desc: 'Simulation numérique des abattages avant exécution' },
                { name: 'Vibromètres', desc: 'Monitoring continu des vibrations et ondes sismiques' },
                { name: 'Découpage d\'Avancement', desc: 'Techniques de coupe précise en galerie' },
                { name: 'Nécessaire de Forage', desc: 'Foreuses d\'avancement dernière génération' },
                { name: 'Contrôle Environnemental', desc: 'Mesure pollution air et bruit' }
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
                      <span className="text-accent">✓</span> BNPA - Bonne Tenue Pyrotechnie
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent">✓</span> ISO 9001 (Qualité)
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent">✓</span> CNAMTS (Sécurité)
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold mb-3">Protocoles</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2">
                      <span className="text-accent">✓</span> Décret 2011-497 (Pyrotechnie)
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent">✓</span> Décret 2020-1723 (Explosifs)
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent">✓</span> Conformité ATEX
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold mb-3">Formations</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2">
                      <span className="text-accent">✓</span> Formation pyrotechnie 2 ans
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent">✓</span> Habilitation par expert
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent">✓</span> Formation continue annuelle
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
            <h2 className="text-4xl font-bold mb-4">Besoin de Services de Minage?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Découvrez comment nous pouvons optimiser vos opérations d&apos;extraction.
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
