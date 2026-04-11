'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const stats = [
    { label: 'Projets', value: '847+' },
    { label: 'Années', value: '28' },
    { label: 'Experts', value: '250+' }
  ]

  return (
    <footer className="bg-black text-white relative overflow-hidden border-t border-white/10">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        
        {/* Statistics Section */}
        <div className="grid grid-cols-3 gap-0 mb-20 border border-white/20">
          {stats.map((stat, i) => (
            <div key={i} className={`py-10 px-4 text-center ${i < stats.length - 1 ? 'border-r border-white/20' : ''}`}>
              <div className="text-3xl sm:text-4xl font-serif font-bold text-white mb-2">{stat.value}</div>
              <div className="text-xs sm:text-sm text-white/50 uppercase tracking-widest font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-8">
            <div className="flex items-end gap-4">
              <div className="relative w-16 h-16 flex-shrink-0">
                <Image 
                  src="/logo.png" 
                  alt="Binova Rock Builders" 
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-serif text-3xl font-bold tracking-tight">BINOVA</h3>
                <p className="text-xs text-white/60 font-medium uppercase tracking-widest mt-1">Rock Builders</p>
              </div>
            </div>

            <p className="text-white/70 text-sm font-light leading-relaxed max-w-sm">
              Spécialistes en infrastructures souterraines complexes. Solutions premium depuis 1998.
            </p>

            {/* Contact Information */}
            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-3 group">
                <div className="w-8 h-8 border border-white/30 flex items-center justify-center group-hover:border-white transition-colors">
                  <Phone size={16} className="text-white/50 group-hover:text-white transition-colors" />
                </div>
                <span className="text-sm text-white/60 group-hover:text-white transition-colors font-light"></span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-8 h-8 border border-white/30 flex items-center justify-center group-hover:border-white transition-colors">
                  <Mail size={16} className="text-white/50 group-hover:text-white transition-colors" />
                </div>
                <span className="text-sm text-white/60 group-hover:text-white transition-colors font-light"></span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-8 h-8 border border-white/30 flex items-center justify-center group-hover:border-white transition-colors">
                  <MapPin size={16} className="text-white/50 group-hover:text-white transition-colors" />
                </div>
                <span className="text-sm text-white/60 group-hover:text-white transition-colors font-light"></span>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div className="space-y-8 md:border-l border-white/20 md:pl-8">
            <h4 className="font-serif text-xs font-bold uppercase tracking-widest text-white">Solutions</h4>
            <ul className="space-y-3">
              {[
                { name: 'Tunnelage', href: '/tunnelage' },
                { name: 'Minage', href: '/minage' },
                { name: 'Terrassement', href: '/terrassement' }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-white/60 hover:text-white transition-colors font-light inline-flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-white/40 group-hover:bg-white transition-colors"></span>
                    <span className="group-hover:translate-x-0.5 transition-transform">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-8 md:border-l border-white/20 md:pl-8">
            <h4 className="font-serif text-xs font-bold uppercase tracking-widest text-white">Services</h4>
            <ul className="space-y-3">
              {[
                { name: 'Engagement Client', href: '/engagement-clients' },
                { name: 'Travaux Souterrains', href: '/travaux-souterrains' },
                { name: 'Devis IA', href: '/devis' }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-white/60 hover:text-white transition-colors font-light inline-flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-white/40 group-hover:bg-white transition-colors"></span>
                    <span className="group-hover:translate-x-0.5 transition-transform">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-8 md:border-l border-white/20 md:pl-8">
            <h4 className="font-serif text-xs font-bold uppercase tracking-widest text-white">Légal</h4>
            <ul className="space-y-3">
              {[
                { name: 'Mentions Légales', href: '/mentions-legales' },
                { name: 'Confidentialité', href: '/politique-confidentialite' },
                { name: 'Conditions', href: '/conditions-utilisation' }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-white/60 hover:text-white transition-colors font-light inline-flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-white/40 group-hover:bg-white transition-colors"></span>
                    <span className="group-hover:translate-x-0.5 transition-transform">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="border-t border-white/20 pt-16 mb-16">
          <div className="max-w-2xl">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-4 text-white">Transformez Votre Vision</h2>
            <p className="text-white/70 mb-8 text-sm font-light leading-relaxed">
              Experts en génie civil complexe. Disponibles pour discuter de votre projet et proposer une solution adaptée.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="flex items-center justify-center gap-2 px-8 py-3 bg-white text-black font-semibold hover:bg-white/90 transition-colors">
                Nous Contacter <ArrowRight size={18} />
              </Link>
              <Link href="/devis" className="flex items-center justify-center gap-2 px-8 py-3 border-2 border-white text-white font-semibold hover:bg-white hover:text-black transition-colors">
                Devis Gratuit
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-xs text-white/50 font-light">
            © {currentYear} BINOVA ROCKBUILDERS — Tous droits réservés
          </p>
          <div className="flex items-center gap-10">
            {[
              { name: 'LinkedIn', href: 'https://linkedin.com' },
              { name: 'Twitter', href: 'https://twitter.com' },
              { name: 'Facebook', href: 'https://facebook.com' }
            ].map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-white/50 hover:text-white transition-colors font-semibold uppercase tracking-wider"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
