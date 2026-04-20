'use client'

import { ArrowRight, Phone, Shield, Zap, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const trustItems = [
  { icon: Shield, label: 'Zéro risque' },
  { icon: Zap, label: 'Réponse sous 24h' },
  { icon: CheckCircle2, label: 'Sans engagement' },
]

export function FinalCTASection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [60, -60])

  return (
    <section
      ref={ref}
      className="relative py-36 px-6 overflow-hidden bg-background"
    >
      {/* ── Background: cinematic split ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Diagonal split */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 15% 50%, rgba(201,130,107,0.10) 0%, transparent 70%),
              radial-gradient(ellipse 60% 80% at 85% 50%, rgba(201,130,107,0.06) 0%, transparent 70%)
            `,
          }}
        />

        {/* Parallax grid lines */}
        <motion.div
          style={{ y }}
          className="absolute inset-0 opacity-[0.025]"
          aria-hidden
        >
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute top-0 bottom-0 w-px bg-[#1E6B3A]"
              style={{ left: `${(i + 1) * 11.1}%` }}
            />
          ))}
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute left-0 right-0 h-px bg-[#1E6B3A]"
              style={{ top: `${(i + 1) * 16.6}%` }}
            />
          ))}
        </motion.div>

        {/* Corner ornaments */}
        <div className="absolute top-8 left-8 w-16 h-16 border-l border-t border-[#1E6B3A]/20 rounded-tl-lg" />
        <div className="absolute top-8 right-8 w-16 h-16 border-r border-t border-[#1E6B3A]/20 rounded-tr-lg" />
        <div className="absolute bottom-8 left-8 w-16 h-16 border-l border-b border-[#1E6B3A]/20 rounded-bl-lg" />
        <div className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-[#1E6B3A]/20 rounded-br-lg" />

        {/* Horizontal separator lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1E6B3A]/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1E6B3A]/15 to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* ── Two-column asymmetric layout ── */}
        <div className="grid lg:grid-cols-[1fr_auto] gap-16 items-center">

          {/* ── Left: Text Content ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-7">
              <div className="h-px w-8 bg-[#1E6B3A]" />
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#1E6B3A]">
                Commencez maintenant
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-[clamp(2.8rem,5.5vw,4.5rem)] font-serif font-bold text-foreground leading-[1.02] mb-7">
              Un projet.
              <br />
              Une équipe.
              <br />
              <span className="relative inline-block">
                <em className="not-italic text-[#1E6B3A]">Zéro compromis.</em>
                {/* Underline decoration */}
                <motion.div
                  className="absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-[#1E6B3A] to-[#1E6B3A]/0"
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                />
              </span>
            </h2>

            {/* Body */}
            <p className="text-[17px] text-muted-foreground font-light leading-relaxed max-w-lg mb-10">
              28 ans d'expertise à votre service. Discutons de votre projet lors d'un premier échange confidentiel et sans engagement — et voyons ensemble comment BINOVA peut transformer votre vision en réalité.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-5">
              {trustItems.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-2 text-[13px] text-muted-foreground"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  <div className="w-5 h-5 rounded-full bg-[#1E6B3A]/15 flex items-center justify-center flex-shrink-0">
                    <item.icon size={11} className="text-[#1E6B3A]" strokeWidth={2} />
                  </div>
                  <span>{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Right: CTA Card ── */}
          <motion.div
            className="lg:w-[320px] xl:w-[360px]"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative p-8 rounded-2xl border border-white/[0.07] bg-white/[0.02] overflow-hidden">
              {/* Inner ambient glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1E6B3A]/8 via-transparent to-transparent pointer-events-none" />

              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#1E6B3A]/70 to-transparent rounded-t-2xl" />

              <div className="relative z-10 space-y-4">
                {/* Label */}
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#1E6B3A] font-semibold mb-6">
                  Démarrer le projet
                </p>

                {/* Primary CTA */}
                <Link href="/devis" className="group block">
                  <motion.div
                    className="relative flex items-center justify-between w-full px-6 py-4 rounded-xl bg-[#1E6B3A] text-white font-semibold text-[15px] overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  >
                    {/* Shimmer */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full"
                      animate={{ translateX: ['−100%', '200%'] }}
                      transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1.5, ease: 'easeInOut' }}
                    />
                    <span className="relative">Demander un Devis</span>
                    <motion.div
                      className="relative"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <ArrowRight size={18} />
                    </motion.div>
                  </motion.div>
                </Link>

                {/* Secondary CTA */}
                <Link href="/contact" className="group block">
                  <motion.div
                    className="relative flex items-center justify-between w-full px-6 py-4 rounded-xl border border-[#1E6B3A]/30 text-[#1E6B3A] font-semibold text-[15px] hover:bg-[#1E6B3A]/8 transition-colors duration-300"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  >
                    <span>Parler à un Expert</span>
                    <motion.div
                      animate={{ scale: [1, 1.15, 1] }}
                      transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <Phone size={16} />
                    </motion.div>
                  </motion.div>
                </Link>

                {/* Divider */}
                <div className="relative flex items-center gap-4 py-1">
                  <div className="flex-1 h-px bg-white/[0.06]" />
                  <span className="text-[11px] text-muted-foreground uppercase tracking-widest">ou</span>
                  <div className="flex-1 h-px bg-white/[0.06]" />
                </div>

                {/* Micro stats */}
                <div className="grid grid-cols-3 gap-3 pt-1">
                  {[
                    { value: '847', label: 'projets' },
                    { value: '28', label: 'années' },
                    { value: '99%', label: 'succès' },
                  ].map((s, i) => (
                    <div key={i} className="text-center py-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                      <p className="text-lg font-serif font-bold text-foreground">{s.value}</p>
                      <p className="text-[10px] text-muted-foreground mt-0.5">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}