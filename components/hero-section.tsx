'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ReactNode } from 'react'

interface HeroSectionProps {
  title: string
  description: string
  backgroundImage: string
  primaryCTA?: {
    text: string
    href: string
  }
  secondaryCTA?: {
    text: string
    href: string
  }
  badge?: string
  children?: ReactNode
}

export function HeroSection({
  title,
  description,
  backgroundImage,
  primaryCTA,
  secondaryCTA,
  badge,
  children
}: HeroSectionProps) {
  return (
    <section className="relative h-[80vh] max-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundAttachment: 'fixed'
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-1 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {badge && (
          <div className="mb-6 inline-block">
            <span className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm font-semibold text-white backdrop-blur-md">
              {badge}
            </span>
          </div>
        )}

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold mb-8 leading-tight text-white">
          {title}
        </h1>

        <p className="text-lg sm:text-xl text-white/85 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
          {description}
        </p>

        {children}

        {(primaryCTA || secondaryCTA) && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {primaryCTA && (
              <Link href={primaryCTA.href}>
                <button className="px-8 py-4 bg-accent text-accent-foreground rounded-sm font-semibold hover:shadow-2xl hover:shadow-accent/50 transition-all duration-300 hover:scale-105 text-base flex items-center justify-center gap-2">
                  {primaryCTA.text} <ArrowRight size={20} />
                </button>
              </Link>
            )}
            {secondaryCTA && (
              <Link href={secondaryCTA.href}>
                <button className="px-8 py-4 border-2 border-white text-white rounded-sm font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm text-base">
                  {secondaryCTA.text}
                </button>
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
