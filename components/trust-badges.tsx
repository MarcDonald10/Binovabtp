'use client'

import { companyStats, trustIndicators } from '@/lib/data'
import { useEffect, useRef } from 'react'
import { Trophy, Users, Globe, Check, BarChart3, Lock } from 'lucide-react'

const iconMap: Record<string, React.ComponentType<{ size: number; className?: string }>> = {
  Trophy, Users, Globe, Check, BarChart3, Lock,
}

function easeOut(t: number) {
  return 1 - Math.pow(1 - t, 3)
}

function useCountUp(target: number, duration = 1800) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const start = performance.now()

    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1)
      el.textContent = String(Math.round(target * easeOut(t)))
      if (t < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [target, duration])

  return ref
}

function StatItem({ target, suffix = '', label, delay }: {
  target: number
  suffix?: string
  label: string
  delay: number
}) {
  const ref = useCountUp(target)

  return (
    <div
      className="flex-1 px-8 py-7 text-center border-r border-border last:border-r-0
                 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <p className="text-[38px] font-semibold leading-none text-[#d4a853] mb-2 tabular-nums">
        <span ref={ref}>0</span>{suffix}
      </p>
      <p className="text-xs uppercase tracking-wide text-muted-foreground">{label}</p>
    </div>
  )
}

export function TrustBadges() {
  return (
    <section className="py-14 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">

        {/* Stats row — une seule carte unifiée */}
        <div className="flex rounded-xl border border-border bg-background overflow-hidden mb-10">
          <StatItem target={companyStats.yearsInBusiness}   suffix="+" label="Ans d'expertise"     delay={0}   />
          <StatItem target={companyStats.totalProjects}     suffix="+" label="Projets complétés"    delay={80}  />
          <StatItem target={companyStats.teamMembers}       suffix="+" label="Experts en équipe"    delay={160} />
          <StatItem target={companyStats.countriesOperating}          label="Pays opérationnels"   delay={240} />
        </div>

        {/* Séparateur */}
        <div className="flex justify-center mb-8">
          <div className="w-10 h-px bg-[#d4a853]/40" />
        </div>

        {/* Trust badges — grille unifiée avec séparateurs */}
        <div className="grid grid-cols-3 sm:grid-cols-6 divide-x divide-y sm:divide-y-0 divide-border
                        border border-border rounded-xl overflow-hidden bg-background">
          {trustIndicators.map((indicator, idx) => {
            const Icon = iconMap[indicator.icon]
            return (
              <div
                key={idx}
                className="flex flex-col items-center gap-2.5 px-4 py-5
                           hover:bg-muted/50 transition-colors duration-200
                           animate-fade-in-up"
                style={{ animationDelay: `${320 + idx * 60}ms` }}
              >
                <div className="w-9 h-9 rounded-full bg-[#d4a853]/10 flex items-center justify-center shrink-0">
                  {Icon && <Icon size={18} className="text-[#d4a853]" />}
                </div>
                <p className="text-[11px] text-muted-foreground text-center leading-snug">
                  {indicator.text}
                </p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}