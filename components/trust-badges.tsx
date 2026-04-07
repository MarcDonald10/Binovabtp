'use client'

import { companyStats, trustIndicators } from '@/lib/data'
import { useEffect, useState } from 'react'
import { Trophy, Users, Globe, Check, BarChart3, Lock } from 'lucide-react'

const iconMap: Record<string, React.ComponentType<{ size: number; className?: string }>> = {
  Trophy,
  Users,
  Globe,
  Check,
  BarChart3,
  Lock,
}

export function TrustBadges() {
  const [counts, setCounts] = useState({
    years: 0,
    projects: 0,
    team: 0,
    countries: 0,
  })

  useEffect(() => {
    const intervals = [
      setInterval(() => setCounts(prev => ({ ...prev, years: Math.min(prev.years + 1, companyStats.yearsInBusiness) })), 30),
      setInterval(() => setCounts(prev => ({ ...prev, projects: Math.min(prev.projects + 15, companyStats.totalProjects) })), 2),
      setInterval(() => setCounts(prev => ({ ...prev, team: Math.min(prev.team + 5, companyStats.teamMembers) })), 15),
      setInterval(() => setCounts(prev => ({ ...prev, countries: Math.min(prev.countries + 0.5, companyStats.countriesOperating) })), 50),
    ]

    return () => intervals.forEach(clearInterval)
  }, [])

  return (
    <section className="py-12 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12">
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '0s' }}>
            <div className="text-3xl sm:text-4xl font-serif font-bold text-accent mb-2">
              {counts.years}+
            </div>
            <p className="text-sm font-light text-muted-foreground">Ans d&apos;Expertise</p>
          </div>
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="text-3xl sm:text-4xl font-serif font-bold text-accent mb-2">
              {counts.projects.toLocaleString()}+
            </div>
            <p className="text-sm font-light text-muted-foreground">Projets Complétés</p>
          </div>
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-3xl sm:text-4xl font-serif font-bold text-accent mb-2">
              {counts.team}+
            </div>
            <p className="text-sm font-light text-muted-foreground">Experts en Équipe</p>
          </div>
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="text-3xl sm:text-4xl font-serif font-bold text-accent mb-2">
              {Math.round(counts.countries)}
            </div>
            <p className="text-sm font-light text-muted-foreground">Pays Opérationnels</p>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
          {trustIndicators.map((indicator, idx) => {
            const IconComponent = iconMap[indicator.icon]
            return (
              <div key={idx} className="text-center animate-fade-in-up p-3 rounded-sm hover:bg-background transition-colors" style={{ animationDelay: `${0.4 + idx * 0.05}s` }}>
                <div className="flex justify-center mb-2">
                  {IconComponent && <IconComponent size={24} className="text-accent" />}
                </div>
                <p className="text-xs font-light text-foreground leading-tight">{indicator.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
