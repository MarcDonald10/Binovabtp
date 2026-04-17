'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-black text-white border-b border-slate-700/50 shadow-elevated">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3 hover:opacity-90 transition-opacity duration-300">
            <div className="relative w-12 h-12 flex-shrink-0 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
              <span className="font-serif font-bold text-white text-lg">B</span>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-serif font-bold text-sm leading-tight">BINOVA</span>
              <span className="text-xs text-slate-400">Rock Builders</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-slate-300 hover:text-white hover:text-amber-400 transition-colors duration-200 relative group">
              Accueil
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-accent group-hover:w-full transition-all duration-300"></span>
            </Link>
            
            <div className="relative group">
              <button className="text-sm font-medium text-slate-300 hover:text-white group-hover:text-amber-400 transition-colors duration-200 flex items-center gap-2">
                Engagement
                <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-300" />
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-slate-900 border border-slate-700/50 rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 top-full">
                <Link href="/engagement/rse" className="block px-5 py-3 text-sm text-slate-300 hover:bg-slate-800 hover:text-amber-400 transition-colors border-b border-slate-700/30 last:border-b-0 first:rounded-t-lg last:rounded-b-lg">
                  RSE
                </Link>
                <Link href="/engagement/securite-sante" className="block px-5 py-3 text-sm text-slate-300 hover:bg-slate-800 hover:text-amber-400 transition-colors border-b border-slate-700/30 last:border-b-0">
                  Sécurité et Santé
                </Link>
                <Link href="/engagement/environnement" className="block px-5 py-3 text-sm text-slate-300 hover:bg-slate-800 hover:text-amber-400 transition-colors border-b border-slate-700/30 last:border-b-0">
                  Environnement
                </Link>
                <Link href="/engagement/ethique" className="block px-5 py-3 text-sm text-slate-300 hover:bg-slate-800 hover:text-amber-400 transition-colors last:rounded-b-lg">
                  Éthique
                </Link>
              </div>
            </div>

            <div className="relative group">
              <button className="text-sm font-medium text-slate-300 hover:text-white group-hover:text-amber-400 transition-colors duration-200 flex items-center gap-2">
                Métier
                <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-300" />
              </button>
              <div className="absolute left-0 mt-2 w-72 bg-slate-900 border border-slate-700/50 rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 top-full">
                <Link href="/metier/genie-civil" className="block px-5 py-3 text-sm text-slate-300 hover:bg-slate-800 hover:text-amber-400 transition-colors border-b border-slate-700/30 last:border-b-0 first:rounded-t-lg">
                  Génie Civil et Ouvrages d'Art
                </Link>
                <Link href="/metier/barrages" className="block px-5 py-3 text-sm text-slate-300 hover:bg-slate-800 hover:text-amber-400 transition-colors border-b border-slate-700/30 last:border-b-0">
                  Barrages
                </Link>
                <Link href="/metier/genie-urbain" className="block px-5 py-3 text-sm text-slate-300 hover:bg-slate-800 hover:text-amber-400 transition-colors border-b border-slate-700/30 last:border-b-0">
                  Génie Urbain
                </Link>
                <Link href="/metier/infrastructures-lineaires" className="block px-5 py-3 text-sm text-slate-300 hover:bg-slate-800 hover:text-amber-400 transition-colors border-b border-slate-700/30 last:border-b-0">
                  Infrastructures Linéaires
                </Link>
                <Link href="/metier/travaux-souterrains" className="block px-5 py-3 text-sm text-slate-300 hover:bg-slate-800 hover:text-amber-400 transition-colors border-b border-slate-700/30 last:border-b-0">
                  Travaux Souterrains
                </Link>
                <Link href="/metier/carrieres" className="block px-5 py-3 text-sm text-slate-300 hover:bg-slate-800 hover:text-amber-400 transition-colors last:rounded-b-lg">
                  Carrières
                </Link>
              </div>
            </div>

            <Link href="/contact" className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors duration-200 relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-3">
            <Link 
              href="/devis" 
              className="hidden sm:flex items-center gap-2 px-6 py-2.5 bg-gradient-accent text-black rounded-lg text-sm font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-yellow"
            >
              Devis
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-slate-800 rounded-lg transition-colors text-white"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-6 flex flex-col gap-2 border-t border-slate-700/50 pt-6"
            >
              <Link href="/" className="px-4 py-3 text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-amber-400 rounded-lg transition-colors">
                Accueil
              </Link>
              
              {/* Engagement Menu Mobile */}
              <details className="group">
                <summary className="px-4 py-3 text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-amber-400 rounded-lg transition-colors cursor-pointer flex items-center justify-between">
                  <span>Engagement</span>
                  <span className="transition-transform group-open:rotate-180">▼</span>
                </summary>
                <div className="bg-slate-800/50 rounded-lg mt-1">
                  <Link href="/engagement/rse" className="block px-8 py-2.5 text-sm text-slate-300 hover:text-amber-400 rounded transition-colors">
                    RSE
                  </Link>
                  <Link href="/engagement/securite-sante" className="block px-8 py-2.5 text-sm text-slate-300 hover:text-amber-400 rounded transition-colors">
                    Sécurité et Santé
                  </Link>
                  <Link href="/engagement/environnement" className="block px-8 py-2.5 text-sm text-slate-300 hover:text-amber-400 rounded transition-colors">
                    Environnement
                  </Link>
                  <Link href="/engagement/ethique" className="block px-8 py-2.5 text-sm text-slate-300 hover:text-amber-400 rounded transition-colors">
                    Éthique
                  </Link>
                </div>
              </details>

              {/* Métier Menu Mobile */}
              <details className="group">
                <summary className="px-4 py-3 text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-amber-400 rounded-lg transition-colors cursor-pointer flex items-center justify-between">
                  <span>Métier</span>
                  <span className="transition-transform group-open:rotate-180">▼</span>
                </summary>
                <div className="bg-slate-800/50 rounded-lg mt-1">
                  <Link href="/metier/genie-civil" className="block px-8 py-2.5 text-sm text-slate-300 hover:text-amber-400 rounded transition-colors">
                    Génie Civil et Ouvrages d'Art
                  </Link>
                  <Link href="/metier/barrages" className="block px-8 py-2.5 text-sm text-slate-300 hover:text-amber-400 rounded transition-colors">
                    Barrages
                  </Link>
                  <Link href="/metier/genie-urbain" className="block px-8 py-2.5 text-sm text-slate-300 hover:text-amber-400 rounded transition-colors">
                    Génie Urbain
                  </Link>
                  <Link href="/metier/infrastructures-lineaires" className="block px-8 py-2.5 text-sm text-slate-300 hover:text-amber-400 rounded transition-colors">
                    Infrastructures Linéaires
                  </Link>
                  <Link href="/metier/travaux-souterrains" className="block px-8 py-2.5 text-sm text-slate-300 hover:text-amber-400 rounded transition-colors">
                    Travaux Souterrains
                  </Link>
                  <Link href="/metier/carrieres" className="block px-8 py-2.5 text-sm text-slate-300 hover:text-amber-400 rounded transition-colors">
                    Carrières
                  </Link>
                </div>
              </details>

              <Link href="/contact" className="px-4 py-3 text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-amber-400 rounded-lg transition-colors">
                Contact
              </Link>
              <Link 
                href="/devis" 
                className="px-4 py-3 mt-2 bg-gradient-accent text-black rounded-lg text-sm font-semibold hover:opacity-90 transition-all text-center"
              >
                Demander un Devis
              </Link>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
