'use client'

import { conversionElements } from '@/lib/data'
import { AlertCircle, Clock, Users } from 'lucide-react'
import Link from 'next/link'

export function UrgencySection() {
  return (
    <section className="py-16 bg-foreground text-primary-foreground relative overflow-hidden">
      {/* Subtle background animation */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-accent via-transparent to-accent" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="space-y-8">
          {/* Main Alert */}
          <div className="animate-fade-in-up">
            <div className="flex gap-4 items-start mb-6">
              <AlertCircle size={32} className="text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-3">
                  Calendriers Serrés pour 2024-2025
                </h3>
                <p className="text-primary-foreground/80 font-light text-lg">
                  Les équipes BINOVA sont actuellement réservées jusqu&apos;à 18 mois à l&apos;avance. Seuls <span className="text-accent font-semibold">3 créneaux</span> restent disponibles cette année pour de nouveaux clients.
                </p>
              </div>
            </div>
          </div>

          {/* Key Points */}
          <div className="grid sm:grid-cols-2 gap-6">
            {conversionElements.urgency.map((item, idx) => (
              <div
                key={idx}
                className="flex gap-3 items-start p-4 bg-primary-foreground/5 rounded-sm hover:bg-primary-foreground/10 transition-colors animate-fade-in-up"
                style={{ animationDelay: `${0.1 + idx * 0.1}s` }}
              >
                <Clock size={20} className="text-accent flex-shrink-0 mt-1" />
                <p className="text-primary-foreground font-light">{item}</p>
              </div>
            ))}
          </div>

          {/* Trust Badges in Urgency Section */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8 border-t border-primary-foreground/20">
            {conversionElements.socialProof.map((proof, idx) => (
              <div
                key={idx}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${0.4 + idx * 0.1}s` }}
              >
                <p className="text-sm font-light text-primary-foreground/80">{proof}</p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 pt-8">
            <Link
              href="/devis"
              className="flex-1 px-8 py-4 bg-accent text-accent-foreground rounded-sm font-semibold hover:shadow-lg transition-all hover:scale-105 text-center"
            >
              Réserver une Consultation (24-48h)
            </Link>
            <Link
              href="/contact"
              className="flex-1 px-8 py-4 bg-primary-foreground text-foreground rounded-sm font-semibold hover:shadow-lg transition-all hover:scale-105 text-center"
            >
              Contacter Directement
            </Link>
          </div>

          {/* Final Reassurance */}
          <p className="text-center text-primary-foreground/70 font-light text-sm">
            Réponse garantie dans les 24 heures
          </p>
        </div>
      </div>
    </section>
  )
}
