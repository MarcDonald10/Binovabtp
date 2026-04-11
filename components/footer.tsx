'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, ArrowRight, Linkedin, Twitter, Facebook } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-gradient-to-b from-background via-black to-black text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent/50 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Top Section with CTA */}
        <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20 border-b border-white/10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-6 bg-gradient-to-r from-white via-accent to-white bg-clip-text text-transparent">
                Prêt à Transformer Votre Projet?
              </h2>
              <p className="text-lg text-white/70 font-light mb-8 leading-relaxed">
                Nos experts en BTP sont disponibles pour discuter de vos besoins spécifiques et vous proposer des solutions sur-mesure.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <Link href="/devis">
                <button className="w-full px-8 py-4 bg-gradient-to-r from-accent to-accent/80 text-black rounded-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group">
                  Obtenir un Devis <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/contact">
                <button className="w-full px-8 py-4 border-2 border-accent/50 text-white rounded-lg font-semibold hover:bg-accent/10 transition-all duration-300">
                  Nous Contacter
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand Section */}
            <div className="group">
              <div className="flex items-center gap-4 mb-8">
                <div className="relative w-16 h-16 flex-shrink-0 hover:scale-110 transition-transform duration-300">
                  <Image 
                    src="/logo.png" 
                    alt="Binova Rock Builders" 
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <h3 className="font-serif font-bold text-lg mb-2 text-white">BINOVA</h3>
              <p className="text-sm text-accent font-medium mb-4">Rock Builders</p>
              <p className="text-sm text-white/60 font-light mb-6 leading-relaxed">
                Leader en travaux de roche, tunnelage et mines. Solutions premium depuis 25 ans.
              </p>
              <div className="space-y-2">
                <div className="flex items-start gap-3 text-white/60 hover:text-accent transition-colors group/item">
                  <Phone size={16} className="flex-shrink-0 mt-1 group-hover/item:rotate-12 transition-transform" />
                  <span className="text-sm font-light"></span>
                </div>
                <div className="flex items-start gap-3 text-white/60 hover:text-accent transition-colors group/item">
                  <Mail size={16} className="flex-shrink-0 mt-1 group-hover/item:rotate-12 transition-transform" />
                  <span className="text-sm font-light"></span>
                </div>
                <div className="flex items-start gap-3 text-white/60 hover:text-accent transition-colors group/item">
                  <MapPin size={16} className="flex-shrink-0 mt-1 group-hover/item:rotate-12 transition-transform" />
                  <span className="text-sm font-light"></span>
                </div>
              </div>
            </div>

            {/* Solutions */}
            <div>
              <h4 className="font-serif font-bold text-base mb-8 text-white flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-accent to-accent/50 rounded-full"></div>
                Solutions
              </h4>
              <ul className="space-y-4">
                {[
                  { name: 'Tunnelage', href: '/tunnelage' },
                  { name: 'Minage', href: '/minage' },
                  { name: 'Terrassement', href: '/terrassement' }
                ].map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm text-white/60 hover:text-accent transition-colors font-light group/link flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/50 group-hover/link:bg-accent transition-colors"></span>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-serif font-bold text-base mb-8 text-white flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-accent to-accent/50 rounded-full"></div>
                Services
              </h4>
              <ul className="space-y-4">
                {[
                  { name: 'Engagement Client', href: '/engagement-clients' },
                  { name: 'Travaux Souterrains', href: '/travaux-souterrains' },
                  { name: 'Devis IA', href: '/devis' }
                ].map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm text-white/60 hover:text-accent transition-colors font-light group/link flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/50 group-hover/link:bg-accent transition-colors"></span>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-serif font-bold text-base mb-8 text-white flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-accent to-accent/50 rounded-full"></div>
                Légal
              </h4>
              <ul className="space-y-4">
                {[
                  { name: 'Mentions Légales', href: '/mentions-legales' },
                  { name: 'Confidentialité', href: '/politique-confidentialite' },
                  { name: 'Conditions', href: '/conditions-utilisation' }
                ].map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm text-white/60 hover:text-accent transition-colors font-light group/link flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/50 group-hover/link:bg-accent transition-colors"></span>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-12"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-sm text-white/50 font-light text-center md:text-left">
              <p>© {currentYear} BINOVA ROCKBUILDERS. Tous droits réservés.</p>
              <p className="mt-2">Engineered for Excellence | Built for the Future</p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              {[
                { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
                { icon: Twitter, label: 'Twitter', href: 'https://twitter.com' },
                { icon: Facebook, label: 'Facebook', href: 'https://facebook.com' }
              ].map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-white/10 hover:bg-accent hover:text-black flex items-center justify-center transition-all duration-300 group"
                    title={social.label}
                  >
                    <Icon size={18} className="group-hover:scale-110 transition-transform" />
                  </a>
                )
              })}
            </div>

            {/* Back to Top */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 px-4 py-2 border border-white/20 rounded-lg hover:border-accent hover:bg-accent/10 transition-all duration-300 text-sm font-light"
            >
              Retour au Haut <ArrowRight size={16} className="rotate-90" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
