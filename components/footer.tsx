import Link from 'next/link'
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-primary-foreground relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        {/* CTA Section */}
        <div className="mb-16 pb-16 border-b border-primary-foreground/10">
          <div className="max-w-3xl">
            <h3 className="text-3xl sm:text-4xl font-serif font-bold mb-4">Commençons Votre Projet</h3>
            <p className="text-primary-foreground/80 mb-6 text-lg font-light">
              Contactez nos experts pour discuter de vos besoins spécifiques et découvrir comment nous pouvons vous aider.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all">
              Nous Contacter <ArrowRight size={20} />
            </Link>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 bg-accent rounded-sm" />
              <span className="font-serif font-bold text-lg">BINOVA</span>
            </div>
            <p className="text-sm text-primary-foreground/70 mb-6 font-light">
              Leader en travaux de roche, tunnelage et mines. Solutions premium depuis 25 ans.
            </p>
            <div className="space-y-3">
              <a href="tel:+33123456789" className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                <Phone size={14} />
                <span className="font-light">+33 (0)1 23 45 67 89</span>
              </a>
              <a href="mailto:contact@binova.fr" className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                <Mail size={14} />
                <span className="font-light">contact@binova.fr</span>
              </a>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <MapPin size={14} />
                <span className="font-light">Paris, France</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif font-bold mb-6 text-base">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/engagement-clients" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors font-light">
                  Engagement Client
                </Link>
              </li>
              <li>
                <Link href="/travaux-souterrains" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors font-light">
                  Travaux Souterrains
                </Link>
              </li>
              <li>
                <Link href="/devis" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors font-light">
                  Devis IA
                </Link>
              </li>
            </ul>
          </div>

          {/* Métiers */}
          <div>
            <h4 className="font-serif font-bold mb-6 text-base">Métiers</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/tunnelage" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors font-light">
                  Tunnelage
                </Link>
              </li>
              <li>
                <Link href="/minage" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors font-light">
                  Minage
                </Link>
              </li>
              <li>
                <Link href="/terrassement" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors font-light">
                  Terrassement
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-serif font-bold mb-6 text-base">Légal</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/mentions-legales" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors font-light">
                  Mentions Légales
                </Link>
              </li>
              <li>
                <Link href="/politique-confidentialite" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors font-light">
                  Confidentialité
                </Link>
              </li>
              <li>
                <Link href="/conditions-utilisation" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors font-light">
                  Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-sm text-primary-foreground/60 font-light">
            © {currentYear} BINOVA ROCKBUILDERS. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors font-light">
              LinkedIn
            </a>
            <a href="#" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors font-light">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
