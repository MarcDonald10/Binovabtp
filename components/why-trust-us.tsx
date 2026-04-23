'use client'

import { Award, Lock, Lightbulb, CheckCircle, ArrowUpRight, Quote } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const pillars = [
  {
    icon: Award,
    number: '',
    unit: '',
    title: "Expertise éprouvée",
    description: "Une maîtrise technique construite sur des projets complexes et exigeants, avec un haut niveau de rigueur et de précision.",
    accent: 'from-[#1E6B3A]/30 via-[#1E6B3A]/10 to-transparent',
  },
  {
    icon: Lock,
    number: '',
    unit: '',
    title: 'Sécurité maîtrisée',
    description: "Une culture de la sécurité intégrée à chaque étape, garantissant des interventions fiables et conformes aux normes les plus strictes.",
    accent: 'from-[#1E6B3A]/20 via-[#1E6B3A]/8 to-transparent',
  },
  {
    icon: Lightbulb,
    number: '',
    unit: '',
    title: 'Innovation continue',
    description: "Des solutions modernes et adaptées, basées sur une veille technologique constante et une ingénierie de pointe.",
    accent: 'from-[#1E6B3A]/25 via-[#1E6B3A]/5 to-transparent',
  },
  {
    icon: CheckCircle,
    number: '',
    unit: '',
    title: 'Exécution fiable',
    description: "Des projets menés avec rigueur, respect des engagements et maîtrise des contraintes techniques.",
    accent: 'from-[#1E6B3A]/20 via-[#1E6B3A]/8 to-transparent',
  },
]
const testimonials = [
  {
    text: "BINOVA a su transformer notre vision en une réalisation concrète avec une précision remarquable. Leur approche technique inspire une véritable confiance.",
    author: 'Jean-Marie Dubois',
    role: 'Directeur Infrastructure',
    company: 'SNCF Infra',
    initials: 'JD',
  },
  {
    text: "Une équipe capable de relever les défis géotechniques les plus complexes avec rigueur et efficacité. Un partenaire fiable sur lequel nous pouvons compter.",
    author: 'Sophie Laurent',
    role: 'VP Construction',
    company: 'Vinci Construction',
    initials: 'SL',
  },
]

function CountUp({ target, suffix = '' }: { target: number; suffix?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  if (isInView && count === 0 && target > 0) {
    const duration = 1800
    const steps = 60
    const increment = target / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(parseFloat(current.toFixed(1)))
      }
    }, duration / steps)
  }

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export function WhyTrustUsSection() {
  return (
    <section className="relative py-32 overflow-hidden bg-background">
      {/* ── Ambient background ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1E6B3A]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1E6B3A]/20 to-transparent" />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(ellipse, rgba(30,107,58,0.06) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* ── Header ── */}
        <motion.div
          className="mb-20 max-w-3xl"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-[#1E6B3A]" />
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#1E6B3A]">
              Pourquoi nous choisir
            </span>
          </div>
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-serif font-bold text-foreground leading-[1.05] mb-6">
            La confiance se construit
            <br />
            <em className="not-italic text-[#1E6B3A]">sur des preuves.</em>
          </h2>
          <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-xl">
            Nos expériences cumulées sur des projets infiniment variés ont forgé une méthode rigoureuse et une culture d'excellence sans équivalent dans le secteur.
          </p>
        </motion.div>

        {/* ── Main grid: pillars + testimonials ── */}
        <div className="grid lg:grid-cols-[1fr_420px] gap-12 xl:gap-20">

          {/* ── Left: 4 pillars ── */}
          <div className="grid sm:grid-cols-2 gap-5">
            {pillars.map((p, i) => (
              <motion.div
                key={i}
                className="group relative p-7 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-[#1E6B3A]/25 transition-all duration-500 overflow-hidden cursor-default"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Background sweep on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                {/* Top accent line */}
                <motion.div
                  className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-[#1E6B3A]/0 via-[#1E6B3A]/60 to-[#1E6B3A]/0"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.8 }}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-5 w-11 h-11 rounded-xl bg-[#1E6B3A]/10 border border-[#1E6B3A]/20 flex items-center justify-center text-[#1E6B3A] group-hover:bg-[#1E6B3A]/20 transition-colors duration-300">
                    <p.icon size={20} strokeWidth={1.5} />
                  </div>

                  {/* Number */}
                  <div className="mb-3 flex items-baseline gap-1">
                    <span className="text-5xl font-serif font-bold text-foreground tabular-nums">
                      {p.number && (
                        <div className="mb-3 flex items-baseline gap-1">
                          <span className="text-5xl font-serif font-bold text-foreground">
                            {p.number}
                          </span>
                          <span className="text-lg text-[#1E6B3A] font-semibold">
                            {p.unit}
                          </span>
                        </div>
                      )}
                    </span>
                    <span className="text-lg text-[#1E6B3A] font-semibold">{p.unit}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-[#1E6B3A] transition-colors duration-300">
                    {p.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[13px] text-muted-foreground font-light leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ── Right: Testimonials ── */}
          <div className="flex flex-col gap-6 justify-center">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                className="group relative p-7 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-[#1E6B3A]/25 hover:bg-white/[0.04] transition-all duration-500 overflow-hidden"
                initial={{ opacity: 0, x: 32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Left border accent */}
                <motion.div
                  className="absolute left-0 top-8 bottom-8 w-[2px] rounded-full bg-gradient-to-b from-[#1E6B3A] to-[#1E6B3A]/0"
                  initial={{ scaleY: 0, originY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.15, duration: 0.6 }}
                />

                <div className="pl-5">
                  {/* Quote icon */}
                  <Quote className="w-7 h-7 text-[#1E6B3A]/30 mb-4" strokeWidth={1} />

                  {/* Text */}
                  <p className="text-[15px] text-foreground/80 font-light leading-relaxed mb-6 italic">
                    "{t.text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#1E6B3A]/15 border border-[#1E6B3A]/25 flex items-center justify-center">
                      <span className="text-[11px] font-bold text-[#1E6B3A]">{t.initials}</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{t.author}</p>
                      <p className="text-xs text-muted-foreground">{t.role} · {t.company}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* CTA link
            <motion.a
              href="/references"
              className="group inline-flex items-center gap-2 text-sm text-[#1E6B3A] font-medium mt-2 self-start hover:gap-3 transition-all duration-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              Voir tous nos projets de référence
              <ArrowUpRight size={15} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300" />
            </motion.a> */}
          </div>
        </div>
      </div>
    </section>
  )
}