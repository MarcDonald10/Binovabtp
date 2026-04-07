'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center">
              <span className="text-accent-foreground font-serif text-lg font-bold">B</span>
            </div>
            <span className="font-serif font-bold text-lg tracking-wide hidden sm:inline">BINOVA</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link href="/" className="px-4 py-2 text-sm font-medium text-foreground hover:text-accent transition-colors">
              Accueil
            </Link>
            
            <div className="relative group">
              <button className="px-4 py-2 text-sm font-medium text-foreground hover:text-accent transition-colors flex items-center gap-1.5">
                Services
                <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-300" />
              </button>
              <div className="absolute left-0 mt-0 w-56 bg-background border border-border/50 rounded-sm shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 top-full">
                <Link href="/engagement-clients" className="block px-5 py-3.5 text-sm hover:bg-muted/50 hover:text-accent transition-colors border-b border-border/30 last:border-b-0">
                  Engagement Clients
                </Link>
                <Link href="/travaux-souterrains" className="block px-5 py-3.5 text-sm hover:bg-muted/50 hover:text-accent transition-colors border-b border-border/30 last:border-b-0">
                  Travaux Souterrains
                </Link>
              </div>
            </div>

            <div className="relative group">
              <button className="px-4 py-2 text-sm font-medium text-foreground hover:text-accent transition-colors flex items-center gap-1.5">
                Métiers
                <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-300" />
              </button>
              <div className="absolute left-0 mt-0 w-56 bg-background border border-border/50 rounded-sm shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 top-full">
                <Link href="/tunnelage" className="block px-5 py-3.5 text-sm hover:bg-muted/50 hover:text-accent transition-colors border-b border-border/30 last:border-b-0">
                  Tunnelage
                </Link>
                <Link href="/minage" className="block px-5 py-3.5 text-sm hover:bg-muted/50 hover:text-accent transition-colors border-b border-border/30 last:border-b-0">
                  Minage
                </Link>
                <Link href="/terrassement" className="block px-5 py-3.5 text-sm hover:bg-muted/50 hover:text-accent transition-colors border-b border-border/30 last:border-b-0">
                  Terrassement
                </Link>
              </div>
            </div>

            <Link href="/contact" className="px-4 py-2 text-sm font-medium text-foreground hover:text-accent transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-3">
            <Link 
              href="/devis" 
              className="hidden sm:block px-5 py-2.5 bg-accent text-accent-foreground rounded-sm text-sm font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Demander un Devis
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-muted rounded-sm transition-colors"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 flex flex-col gap-1 border-t border-border/30 pt-4 animate-fade-in-up">
            <Link href="/" className="px-4 py-2.5 text-sm font-medium text-foreground hover:bg-muted/50 rounded transition-colors">
              Accueil
            </Link>
            <Link href="/engagement-clients" className="px-4 py-2.5 text-sm font-medium text-foreground hover:bg-muted/50 rounded transition-colors pl-8">
              Engagement Clients
            </Link>
            <Link href="/travaux-souterrains" className="px-4 py-2.5 text-sm font-medium text-foreground hover:bg-muted/50 rounded transition-colors pl-8">
              Travaux Souterrains
            </Link>
            <Link href="/tunnelage" className="px-4 py-2.5 text-sm font-medium text-foreground hover:bg-muted/50 rounded transition-colors pl-8">
              Tunnelage
            </Link>
            <Link href="/minage" className="px-4 py-2.5 text-sm font-medium text-foreground hover:bg-muted/50 rounded transition-colors pl-8">
              Minage
            </Link>
            <Link href="/terrassement" className="px-4 py-2.5 text-sm font-medium text-foreground hover:bg-muted/50 rounded transition-colors pl-8">
              Terrassement
            </Link>
            <Link href="/contact" className="px-4 py-2.5 text-sm font-medium text-foreground hover:bg-muted/50 rounded transition-colors">
              Contact
            </Link>
            <Link 
              href="/devis" 
              className="px-4 py-2.5 mt-2 bg-accent text-accent-foreground rounded-sm text-sm font-semibold hover:opacity-90 transition-all"
            >
              Demander un Devis
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
