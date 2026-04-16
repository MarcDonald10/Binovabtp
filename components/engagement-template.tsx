'use client'

import { ReactNode } from 'react'
import Link from 'next/link'
import { ArrowRight, LucideIcon } from 'lucide-react'

interface EngagementPageProps {
  accentColor: string
  tagLabel: string
  heroTitle: React.ReactNode
  heroSubtitle: string
  statsLabel: string
  statsTitle: string
  statsDescription: string
  stats: Array<{ value: string; label: string; desc?: string }>
  strategiesLabel: string
  strategiesTitle: string
  strategiesDescription: string
  strategies: Array<{ icon: LucideIcon; title: string; desc?: string; description?: string }>
  initiativesLabel: string
  initiativesTitle: string
  initiativesDescription: string
  initiatives: Array<{ icon: LucideIcon; title: string; desc?: string; items?: string[] }>
  ctaTitle: React.ReactNode
  ctaDescription: string
  ctaButtonText: string
  ctaLink?: string
  bgDarkColor?: string
}

function SectionLabel({ children, accentColor }: { children: React.ReactNode; accentColor: string }) {
  return (
    <p className="text-[11px] tracking-[3px] uppercase mb-3" style={{ color: accentColor }}>
      {children}
    </p>
  )
}

export function EngagementTemplate({
  accentColor,
  tagLabel,
  heroTitle,
  heroSubtitle,
  statsLabel,
  statsTitle,
  statsDescription,
  stats,
  strategiesLabel,
  strategiesTitle,
  strategiesDescription,
  strategies,
  initiativesLabel,
  initiativesTitle,
  initiativesDescription,
  initiatives,
  ctaTitle,
  ctaDescription,
  ctaButtonText,
  ctaLink = '/contact',
  bgDarkColor = '#0d1a0d',
}: EngagementPageProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center text-center bg-[#0d1a0d] overflow-hidden px-6">
        {/* Grille de fond subtile */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg,#fff,#fff 1px,transparent 1px,transparent 48px),repeating-linear-gradient(90deg,#fff,#fff 1px,transparent 1px,transparent 48px)',
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto">
          {/* Tag centré avec tirets */}
          <div className="inline-flex items-center gap-3 text-white/40 text-[11px] tracking-[3px] uppercase mb-8">
            <span className="block w-8 h-px bg-white/30" />
            {tagLabel}
            <span className="block w-8 h-px bg-white/30" />
          </div>

          <h1 className="font-serif text-[clamp(36px,5vw,58px)] font-light text-white leading-[1.1] mb-6">
            {heroTitle}
          </h1>

          <p className="text-white/55 text-base leading-relaxed max-w-xl mx-auto">{heroSubtitle}</p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <SectionLabel accentColor={accentColor}>{statsLabel}</SectionLabel>
        <h2 className="font-serif text-3xl font-light mb-2">{statsTitle}</h2>
        <p className="text-sm text-muted-foreground mb-10">{statsDescription}</p>

        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-border border border-border rounded-xl overflow-hidden bg-background">
          {stats.map((s, i) => (
            <div key={i} className="px-6 py-8 text-center">
              <p className="font-serif text-4xl font-medium mb-2 leading-none" style={{ color: accentColor }}>
                {s.value}
              </p>
              <p className="text-sm font-medium mb-1">{s.label}</p>
              <p className="text-xs text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stratégie */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <SectionLabel accentColor={accentColor}>{strategiesLabel}</SectionLabel>
          <h2 className="font-serif text-3xl font-light mb-2">{strategiesTitle}</h2>
          <p className="text-sm text-muted-foreground mb-10">{strategiesDescription}</p>

          <div className="grid md:grid-cols-3 gap-4">
            {strategies.map((s, i) => (
              <div
                key={i}
                className="p-7 rounded-xl border border-border bg-background hover:border-opacity-40 transition-colors duration-200"
                style={{ '--hover-color': accentColor } as any}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = accentColor + '66'
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'
                }}
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-5" style={{ background: accentColor + '1a' }}>
                  <s.icon size={18} color={accentColor} />
                </div>
                <h3 className="font-medium mb-2 text-[15px]">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <SectionLabel accentColor={accentColor}>{initiativesLabel}</SectionLabel>
        <h2 className="font-serif text-3xl font-light mb-2">{initiativesTitle}</h2>
        <p className="text-sm text-muted-foreground mb-10">{initiativesDescription}</p>

        <div className="flex flex-col gap-2">
          {initiatives.map((init, i) => (
            <div key={i} className="flex items-start gap-5 p-6 rounded-xl bg-muted/40 hover:bg-muted/70 transition-colors duration-200">
              <div className="w-11 h-11 rounded-lg border border-border bg-background flex items-center justify-center shrink-0 mt-0.5">
                <init.icon size={18} color={accentColor} />
              </div>
              <div>
                <h3 className="font-medium text-[15px] mb-1">{init.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{init.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#0d1a0d] text-center">
        <h2 className="font-serif text-[clamp(28px,3.5vw,42px)] font-light text-white leading-snug mb-4">
          {ctaTitle}
        </h2>
        <p className="text-white/50 text-[15px] max-w-md mx-auto mb-10 leading-relaxed">{ctaDescription}</p>
        <Link href={ctaLink}>
          <button
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-md text-white text-sm font-medium transition-colors duration-200 group"
            style={{ background: accentColor }}
          >
            {ctaButtonText}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </Link>
      </section>
    </>
  )
}
