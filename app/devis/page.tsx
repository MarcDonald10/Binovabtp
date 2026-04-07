import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { DevisForm } from '@/components/devis-form'
import { Zap, Clock, Shield, TrendingUp } from 'lucide-react'

export const metadata = {
  title: 'Devis IA | BINOVA ROCKBUILDERS',
  description: 'Obtenez une estimation instantanée de votre projet BTP avec notre système de devis intelligent.',
}

export default function DevisPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-muted/50 to-background">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-5xl font-bold mb-6">Devis Instantané IA</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Obtenez une estimation préliminaire de votre projet BTP en quelques minutes. Notre système intelligent analyse vos paramètres pour vous fournir un chiffrage fiable.
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="text-accent w-6 h-6" />
                </div>
                <h3 className="font-bold mb-2">Rapide</h3>
                <p className="text-sm text-muted-foreground">3 minutes pour un résultat</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-accent w-6 h-6" />
                </div>
                <h3 className="font-bold mb-2">Fiable</h3>
                <p className="text-sm text-muted-foreground">Basé sur 25 ans d&apos;expérience</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-accent w-6 h-6" />
                </div>
                <h3 className="font-bold mb-2">Disponible</h3>
                <p className="text-sm text-muted-foreground">24/7, sans engagement</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="text-accent w-6 h-6" />
                </div>
                <h3 className="font-bold mb-2">Précis</h3>
                <p className="text-sm text-muted-foreground">Algorithme d&apos;IA avancé</p>
              </div>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-6">
            <DevisForm />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Questions Fréquentes</h2>
            
            <div className="space-y-6">
              <div className="bg-background rounded-lg p-6 border border-border">
                <h3 className="font-bold mb-2">Q: L&apos;estimation est-elle contractuelle?</h3>
                <p className="text-sm text-muted-foreground">
                  Non, cette estimation est préliminaire. Elle vous permet de rapidement évaluer votre budget. Un devis détaillé et contractuel sera établi après étude de site par nos experts.
                </p>
              </div>

              <div className="bg-background rounded-lg p-6 border border-border">
                <h3 className="font-bold mb-2">Q: Comment fonctionne l&apos;algorithme IA?</h3>
                <p className="text-sm text-muted-foreground">
                  Notre système analyse votre type de projet, sa localisation, les conditions géotechniques et votre planning pour calculer un coût préliminaire basé sur nos expériences passées et les coûts du marché.
                </p>
              </div>

              <div className="bg-background rounded-lg p-6 border border-border">
                <h3 className="font-bold mb-2">Q: Qui me contactera après la soumission?</h3>
                <p className="text-sm text-muted-foreground">
                  Un expert BINOVA spécialisé dans votre type de projet vous contactera sous 48 heures pour discuter des détails et programer une visite de site si nécessaire.
                </p>
              </div>

              <div className="bg-background rounded-lg p-6 border border-border">
                <h3 className="font-bold mb-2">Q: L&apos;estimation peut-elle être inférieure?</h3>
                <p className="text-sm text-muted-foreground">
                  Oui, votre coût réel peut être inférieur ou supérieur selon les conditions réelles rencontrées lors de la reconnaissance de site. L&apos;estimation est basée sur des paramètres typiques.
                </p>
              </div>

              <div className="bg-background rounded-lg p-6 border border-border">
                <h3 className="font-bold mb-2">Q: Quelle est la marge d&apos;erreur?</h3>
                <p className="text-sm text-muted-foreground">
                  Pour une estimation préliminaire, nous garantissons généralement une marge de ±20% si les paramètres fournis sont précis. Un devis après visite de site atteint ±5%.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Des Questions?</h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Contactez notre équipe directement pour un devis personnalisé et un accompagnement expert.
            </p>
            <a href="/contact" className="inline-block px-6 py-3 bg-accent hover:bg-accent/90 text-accent-foreground rounded font-medium transition">
              Nous Contacter
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
