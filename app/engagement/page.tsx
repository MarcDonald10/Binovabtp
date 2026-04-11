import { Users, Shield, Leaf, Gavel, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function EngagementPage() {
  const engagements = [
    {
      icon: Users,
      title: "RSE",
      subtitle: "Responsabilité Sociale et Environnementale",
      description: "Nos valeurs : bien-être collaborateurs, impact local et gouvernance responsable.",
      link: "/engagement/rse"
    },
    {
      icon: Shield,
      title: "Sécurité et Santé",
      subtitle: "Zéro accident, Culture de Sécurité",
      description: "28 ans sans accident mortel. La sécurité au cœur de chaque décision.",
      link: "/engagement/securite-sante"
    },
    {
      icon: Leaf,
      title: "Environnement",
      subtitle: "Durabilité et Impact Positif",
      description: "Réduction CO₂, économie circulaire, restauration écosystèmes.",
      link: "/engagement/environnement"
    },
    {
      icon: Gavel,
      title: "Éthique",
      subtitle: "Intégrité et Transparence",
      description: "Conformité légale, lutte anticorruption, respect droits humains.",
      link: "/engagement/ethique"
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Nos Engagements</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mb-12">
            Au-delà de la construction, nous bâtissons une entreprise responsable, éthique et durable. Nos engagements guident chaque projet, chaque décision, chaque jour.
          </p>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {engagements.map((engagement, idx) => {
              const IconComponent = engagement.icon
              return (
                <Link 
                  key={idx}
                  href={engagement.link}
                  className="group border border-border/50 rounded-lg p-8 hover:border-accent/50 hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <IconComponent className="text-accent" size={28} />
                    </div>
                    <ArrowRight className="text-accent opacity-0 group-hover:opacity-100 transition-opacity" size={24} />
                  </div>
                  <h2 className="text-2xl font-semibold mb-2 group-hover:text-accent transition-colors">
                    {engagement.title}
                  </h2>
                  <p className="text-sm text-muted-foreground mb-4 font-medium">
                    {engagement.subtitle}
                  </p>
                  <p className="text-muted-foreground">
                    {engagement.description}
                  </p>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-serif font-bold mb-12 text-center">Nos Résultats</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-background border border-border/50 rounded-lg">
              <div className="text-4xl font-bold text-accent mb-2">28</div>
              <p className="font-semibold">Ans sans accident</p>
              <p className="text-sm text-muted-foreground">Mortel en chantier</p>
            </div>
            <div className="text-center p-6 bg-background border border-border/50 rounded-lg">
              <div className="text-4xl font-bold text-accent mb-2">250+</div>
              <p className="font-semibold">Collaborateurs</p>
              <p className="text-sm text-muted-foreground">En développement continu</p>
            </div>
            <div className="text-center p-6 bg-background border border-border/50 rounded-lg">
              <div className="text-4xl font-bold text-accent mb-2">€2M</div>
              <p className="font-semibold">Investissement RSE</p>
              <p className="text-sm text-muted-foreground">Par an en impact social</p>
            </div>
            <div className="text-center p-6 bg-background border border-border/50 rounded-lg">
              <div className="text-4xl font-bold text-accent mb-2">100%</div>
              <p className="font-semibold">Certifié ISO</p>
              <p className="text-sm text-muted-foreground">Management durable</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-accent/5 border-y border-border/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Construire Durable, C'est Notre Mission</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Chaque projet, chaque collaborateur, chaque partenaire bénéficie de nos engagement profonds.
          </p>
          <a href="/contact" className="inline-block px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
            Nous Contacter
          </a>
        </div>
      </section>
    </>
  )
}
