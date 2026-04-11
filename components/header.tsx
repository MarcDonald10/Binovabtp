'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-black text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="relative w-20 h-20 flex-shrink-0">
              <Image 
                src="/logo.png" 
                alt="Binova Rock Builders" 
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link href="/" className="px-4 py-2 text-sm font-medium text-white hover:text-yellow-400 transition-colors">
              Accueil
            </Link>
            
            <div className="relative group">
              <button className="px-4 py-2 text-sm font-medium text-white hover:text-yellow-400 transition-colors flex items-center gap-1.5">
                Engagement
                <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-300" />
              </button>
              <div className="absolute left-0 mt-0 w-56 bg-gray-900 border border-white/10 rounded-sm shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 top-full">
                <Link href="/engagement/rse" className="block px-5 py-3.5 text-sm text-white hover:bg-gray-800 hover:text-yellow-400 transition-colors border-b border-white/10 last:border-b-0">
                  RSE
                </Link>
                <Link href="/engagement/securite-sante" className="block px-5 py-3.5 text-sm text-white hover:bg-gray-800 hover:text-yellow-400 transition-colors border-b border-white/10 last:border-b-0">
                  Sécurité et Santé
                </Link>
                <Link href="/engagement/environnement" className="block px-5 py-3.5 text-sm text-white hover:bg-gray-800 hover:text-yellow-400 transition-colors border-b border-white/10 last:border-b-0">
                  Environnement
                </Link>
                <Link href="/engagement/ethique" className="block px-5 py-3.5 text-sm text-white hover:bg-gray-800 hover:text-yellow-400 transition-colors border-b border-white/10 last:border-b-0">
                  Éthique
                </Link>
              </div>
            </div>

            <div className="relative group">
              <button className="px-4 py-2 text-sm font-medium text-white hover:text-yellow-400 transition-colors flex items-center gap-1.5">
                Métier
                <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-300" />
              </button>
              <div className="absolute left-0 mt-0 w-72 bg-gray-900 border border-white/10 rounded-sm shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 top-full">
                <Link href="/metier/genie-civil" className="block px-5 py-3.5 text-sm text-white hover:bg-gray-800 hover:text-yellow-400 transition-colors border-b border-white/10 last:border-b-0">
                  Génie Civil et Ouvrages d'Art
                </Link>
                <Link href="/metier/barrages" className="block px-5 py-3.5 text-sm text-white hover:bg-gray-800 hover:text-yellow-400 transition-colors border-b border-white/10 last:border-b-0">
                  Barrages
                </Link>
                <Link href="/metier/genie-urbain" className="block px-5 py-3.5 text-sm text-white hover:bg-gray-800 hover:text-yellow-400 transition-colors border-b border-white/10 last:border-b-0">
                  Génie Urbain
                </Link>
                <Link href="/metier/infrastructures-lineaires" className="block px-5 py-3.5 text-sm text-white hover:bg-gray-800 hover:text-yellow-400 transition-colors border-b border-white/10 last:border-b-0">
                  Infrastructures Linéaires
                </Link>
                <Link href="/metier/travaux-souterrains" className="block px-5 py-3.5 text-sm text-white hover:bg-gray-800 hover:text-yellow-400 transition-colors border-b border-white/10 last:border-b-0">
                  Travaux Souterrains
                </Link>
                <Link href="/metier/carrieres" className="block px-5 py-3.5 text-sm text-white hover:bg-gray-800 hover:text-yellow-400 transition-colors border-b border-white/10 last:border-b-0">
                  Carrières
                </Link>
              </div>
            </div>

            <Link href="/contact" className="px-4 py-2 text-sm font-medium text-white hover:text-yellow-400 transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-3">
            <Link 
              href="/devis" 
              className="hidden sm:block px-5 py-2.5 bg-yellow-500 text-black rounded-sm text-sm font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Demander un Devis
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-gray-800 rounded-sm transition-colors text-white"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 flex flex-col gap-1 border-t border-white/10 pt-4 animate-fade-in-up">
            <Link href="/" className="px-4 py-2.5 text-sm font-medium text-white hover:bg-gray-800 rounded transition-colors">
              Accueil
            </Link>
            
            {/* Engagement Menu Mobile */}
            <div className="border-b border-white/10">
              <details className="group">
                <summary className="px-4 py-2.5 text-sm font-medium text-white hover:bg-gray-800 rounded transition-colors cursor-pointer flex items-center justify-between">
                  <span>Engagement</span>
                  <span className="transition-transform group-open:rotate-180">▼</span>
                </summary>
                <div className="bg-gray-800/50">
                  <Link href="/engagement/rse" className="block px-8 py-2.5 text-sm text-white hover:bg-gray-700 rounded transition-colors">
                    RSE
                  </Link>
                  <Link href="/engagement/securite-sante" className="block px-8 py-2.5 text-sm text-white hover:bg-gray-700 rounded transition-colors">
                    Sécurité et Santé
                  </Link>
                  <Link href="/engagement/environnement" className="block px-8 py-2.5 text-sm text-white hover:bg-gray-700 rounded transition-colors">
                    Environnement
                  </Link>
                  <Link href="/engagement/ethique" className="block px-8 py-2.5 text-sm text-white hover:bg-gray-700 rounded transition-colors">
                    Éthique
                  </Link>
                </div>
              </details>
            </div>

            {/* Métier Menu Mobile */}
            <div className="border-b border-white/10">
              <details className="group">
                <summary className="px-4 py-2.5 text-sm font-medium text-white hover:bg-gray-800 rounded transition-colors cursor-pointer flex items-center justify-between">
                  <span>Métier</span>
                  <span className="transition-transform group-open:rotate-180">▼</span>
                </summary>
                <div className="bg-gray-800/50">
                  <Link href="/metier/genie-civil" className="block px-8 py-2.5 text-sm text-white hover:bg-gray-700 rounded transition-colors">
                    Génie Civil et Ouvrages d'Art
                  </Link>
                  <Link href="/metier/barrages" className="block px-8 py-2.5 text-sm text-white hover:bg-gray-700 rounded transition-colors">
                    Barrages
                  </Link>
                  <Link href="/metier/genie-urbain" className="block px-8 py-2.5 text-sm text-white hover:bg-gray-700 rounded transition-colors">
                    Génie Urbain
                  </Link>
                  <Link href="/metier/infrastructures-lineaires" className="block px-8 py-2.5 text-sm text-white hover:bg-gray-700 rounded transition-colors">
                    Infrastructures Linéaires
                  </Link>
                  <Link href="/metier/travaux-souterrains" className="block px-8 py-2.5 text-sm text-white hover:bg-gray-700 rounded transition-colors">
                    Travaux Souterrains
                  </Link>
                  <Link href="/metier/carrieres" className="block px-8 py-2.5 text-sm text-white hover:bg-gray-700 rounded transition-colors">
                    Carrières
                  </Link>
                </div>
              </details>
            </div>

            <Link href="/contact" className="px-4 py-2.5 text-sm font-medium text-white hover:bg-gray-800 rounded transition-colors">
              Contact
            </Link>
            <Link 
              href="/devis" 
              className="px-4 py-2.5 mt-2 bg-yellow-500 text-black rounded-sm text-sm font-semibold hover:opacity-90 transition-all"
            >
              Demander un Devis
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
