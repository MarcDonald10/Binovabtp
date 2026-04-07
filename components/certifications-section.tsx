'use client'

import { certifications } from '@/lib/data'
import { CheckCircle2, Globe, Shield, Zap, Award, Flag } from 'lucide-react'

const iconMap: Record<string, React.ComponentType<{ size: number; className?: string }>> = {
  CheckCircle2,
  Globe,
  Shield,
  Zap,
  Award,
  Flag,
}

export function CertificationsSection() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-3">Certifications & Standards</h2>
          <p className="text-muted-foreground font-light">
            Garanties internationales pour votre tranquillité d&apos;esprit
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => {
            const IconComponent = iconMap[cert.icon]
            return (
              <div
                key={idx}
                className="p-6 border border-border/50 rounded-sm hover:border-accent/50 hover:bg-muted/30 transition-all group animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.08}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 group-hover:scale-125 transition-transform">
                    {IconComponent && <IconComponent size={32} className="text-accent" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground mb-1 text-sm break-words">{cert.name}</h3>
                    <p className="text-xs text-muted-foreground font-light">{cert.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-12 p-6 bg-muted/30 rounded-sm border border-border/50 animate-fade-in-up">
          <p className="text-center text-foreground/80 font-light">
            Toutes nos certifications sont vérifiées auprès des organismes officiels. Zéro accident mortel depuis 2015. Conformité complète à toutes réglementations européennes et locales.
          </p>
        </div>
      </div>
    </section>
  )
}
