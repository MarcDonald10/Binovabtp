'use client'

import { ReactNode } from 'react'

interface StatItem {
  number: string
  label: string
  icon?: ReactNode
}

interface StatsSectionProps {
  title?: string
  description?: string
  stats: StatItem[]
  variant?: 'dark' | 'light'
}

export function StatsSection({
  title,
  description,
  stats,
  variant = 'dark'
}: StatsSectionProps) {
  const isDark = variant === 'dark'

  return (
    <section className={isDark ? 'bg-foreground text-white' : 'bg-background'}>
      <div className="max-w-7xl mx-auto px-6 py-20 sm:py-32">
        {(title || description) && (
          <div className="text-center mb-16">
            {title && <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-6">{title}</h2>}
            {description && <p className={`text-lg max-w-3xl mx-auto font-light ${isDark ? 'text-white/80' : 'text-muted-foreground'}`}>{description}</p>}
          </div>
        )}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {stats.map((stat, i) => (
            <div key={i} data-animate className="opacity-0 text-center">
              {stat.icon && (
                <div className={`flex justify-center mb-4 ${isDark ? 'text-accent' : 'text-accent'}`}>
                  {stat.icon}
                </div>
              )}
              <div className={`text-4xl sm:text-5xl font-serif font-bold mb-2 ${isDark ? 'text-accent' : 'text-accent'}`}>
                {stat.number}
              </div>
              <p className={`text-sm sm:text-base ${isDark ? 'text-white/70' : 'text-muted-foreground'} font-light`}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
