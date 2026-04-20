'use client'

import { Drill, Pickaxe, Hammer, Building2, ArrowUpRight, MoveRight } from 'lucide-react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const services = [
  {
    index: '01',
    title: 'Tunnelage',
    subtitle: 'Infrastructure souterraine',
    description:
      'De 100 m à 58 km, nous perçons la roche avec une précision millimétrique. 156 tunnels réalisés sur 4 continents.',
    stat: { value: '156', label: 'tunnels réalisés' },
    tag: 'De 100m à 58 km',
    icon: Drill,
    link: '/tunnelage',
    image: '/tunnelage-hero.jpg',
    accent: '#1E6B3A',
  },
  {
    index: '02',
    title: 'Minage',
    subtitle: 'Exploitation minière',
    description:
      'Excellence en abattage contrôlé et gestion des énergétiques. 847 mines opérées, 99.2 % de succès.',
    stat: { value: '847+', label: 'mines opérées' },
    tag: '99.2% de succès',
    icon: Pickaxe,
    link: '/minage',
    image: '/minage-hero.jpg',
    accent: '#1E6B3A',
  },
  {
    index: '03',
    title: 'Terrassement',
    subtitle: 'Génie civil de précision',
    description:
      '30 millions de m³ excavés par an avec une précision centimétrique garantie. La terre se plie à nos plans.',
    stat: { value: '30M', label: 'm³/an excavés' },
    tag: 'Précision centimétrique',
    icon: Hammer,
    link: '/terrassement',
    image: '/terrassement-hero.jpg',
    accent: '#1E6B3A',
  },
  {
    index: '04',
    title: 'Infrastructure',
    subtitle: 'Leadership multi-domaines',
    description:
      '28 ans d\'expertise cross-sectorielle. Routes, barrages, ouvrages d\'art — nous construisons l\'avenir.',
    stat: { value: '28', label: "ans d'excellence" },
    tag: 'Multi-domaines',
    icon: Building2,
    link: '/metier',
    image: '/hero-background.jpg',
    accent: '#1E6B3A',
  },
]

export function PremiumServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = services[activeIndex]

  return (
    <section className="relative py-28 bg-background overflow-hidden">
      {/* ── Structural lines ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1E6B3A]/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1E6B3A]/15 to-transparent" />
        {/* Ambient glow behind image area */}
        <motion.div
          className="absolute left-0 top-1/2 -translate-y-1/2 w-[45%] h-[70%] rounded-r-3xl"
          style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(30,107,58,0.07) 0%, transparent 70%)' }}
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* ── Header ── */}
        <motion.div
          className="mb-16 flex items-end justify-between gap-8 flex-wrap"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-[#1E6B3A]" />
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#1E6B3A]">
                Expertise mondiale
              </span>
            </div>
            <h2 className="text-[clamp(2.4rem,4.5vw,3.8rem)] font-serif font-bold text-foreground leading-[1.05]">
              Trois piliers.
              <br />
              <em className="not-italic text-[#1E6B3A]">Un standard d'excellence.</em>
            </h2>
          </div>

          <p className="text-[15px] text-muted-foreground font-light leading-relaxed max-w-sm">
            847 projets d'infrastructure. 28 ans d'engagement. Zéro compromis sur la qualité — quel que soit le défi.
          </p>
        </motion.div>

        {/* ── Main layout: image left + list right ── */}
        <div className="grid lg:grid-cols-[1fr_480px] xl:grid-cols-[1fr_520px] gap-6 lg:gap-10 items-stretch">

          {/* ── LEFT: Cinematic image panel ── */}
          <motion.div
            className="relative rounded-2xl overflow-hidden bg-foreground/5"
            style={{ minHeight: 480 }}
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Image with crossfade */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active.image}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${active.image}')` }}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              />
            </AnimatePresence>

            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />

            {/* Top: index + title badge */}
            <div className="absolute top-6 left-6 right-6 flex items-start justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.index}
                  initial={{ opacity: 0, y: -12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ duration: 0.4 }}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10"
                >
                  <span className="text-[11px] font-mono text-[#1E6B3A] font-semibold">{active.index}</span>
                  <span className="text-[11px] text-white/70 uppercase tracking-wider">{active.subtitle}</span>
                </motion.div>
              </AnimatePresence>

              {/* Stat bubble */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.stat.value}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="text-right"
                >
                  <p className="text-3xl font-serif font-bold text-white">{active.stat.value}</p>
                  <p className="text-[11px] text-white/50 uppercase tracking-wider">{active.stat.label}</p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom: Title + CTA */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.45 }}
                >
                  <h3 className="text-4xl xl:text-5xl font-serif font-bold text-white mb-2 leading-tight">
                    {active.title}
                  </h3>
                  <p className="text-[14px] text-white/60 font-light mb-6 max-w-xs leading-relaxed">
                    {active.description}
                  </p>

                  <Link href={active.link}>
                    <motion.div
                      className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-[#1E6B3A] text-white text-[13px] font-semibold"
                      whileHover={{ scale: 1.04, gap: 14 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                    >
                      Découvrir
                      <ArrowUpRight size={14} />
                    </motion.div>
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Progress dots */}
            <div className="absolute bottom-8 right-8 flex flex-col gap-1.5">
              {services.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className="w-1 rounded-full bg-white/30 hover:bg-[#1E6B3A] transition-colors duration-300 cursor-pointer"
                  animate={{ height: i === activeIndex ? 24 : 8, backgroundColor: i === activeIndex ? '#1E6B3A' : 'rgba(255,255,255,0.3)' }}
                  transition={{ duration: 0.3 }}
                />
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT: Service list ── */}
          <motion.div
            className="flex flex-col gap-3"
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {services.map((s, i) => {
              const isActive = i === activeIndex
              return (
                <motion.button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`group relative text-left w-full rounded-xl border transition-all duration-400 overflow-hidden cursor-pointer ${
                    isActive
                      ? 'border-[#1E6B3A]/40 bg-[#1E6B3A]/5'
                      : 'border-white/[0.06] bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04]'
                  }`}
                  whileHover={{ x: isActive ? 0 : 4 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                >
                  {/* Active left bar */}
                  <motion.div
                    className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-xl bg-[#1E6B3A]"
                    animate={{ scaleY: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />

                  <div className="px-6 py-5">
                    <div className="flex items-center gap-4">
                      {/* Index */}
                      <span className={`text-[11px] font-mono font-bold transition-colors duration-300 ${isActive ? 'text-[#1E6B3A]' : 'text-muted-foreground/40'}`}>
                        {s.index}
                      </span>

                      {/* Icon circle */}
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        isActive
                          ? 'bg-[#1E6B3A]/20 text-[#1E6B3A]'
                          : 'bg-white/[0.04] text-muted-foreground group-hover:bg-white/[0.06]'
                      }`}>
                        <s.icon size={18} strokeWidth={1.5} />
                      </div>

                      {/* Title + tag */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className={`text-[15px] font-semibold transition-colors duration-300 ${isActive ? 'text-[#1E6B3A]' : 'text-foreground'}`}>
                            {s.title}
                          </h3>
                          <span className={`text-[10px] px-2 py-0.5 rounded-full border transition-all duration-300 ${
                            isActive
                              ? 'border-[#1E6B3A]/40 text-[#1E6B3A] bg-[#1E6B3A]/10'
                              : 'border-white/[0.08] text-muted-foreground/50'
                          }`}>
                            {s.tag}
                          </span>
                        </div>
                        <p className={`text-[12px] font-light mt-0.5 transition-colors duration-300 ${isActive ? 'text-muted-foreground' : 'text-muted-foreground/50'}`}>
                          {s.subtitle}
                        </p>
                      </div>

                      {/* Arrow */}
                      <motion.div
                        animate={{ x: isActive ? 0 : -4, opacity: isActive ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-[#1E6B3A] flex-shrink-0"
                      >
                        <MoveRight size={16} />
                      </motion.div>
                    </div>

                    {/* Expanded content */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="mt-4 pt-4 border-t border-[#1E6B3A]/15 ml-14">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-3xl font-serif font-bold text-foreground">{s.stat.value}</p>
                                <p className="text-[11px] text-muted-foreground uppercase tracking-wider mt-0.5">{s.stat.label}</p>
                              </div>
                              <Link
                                href={s.link}
                                className="inline-flex items-center gap-1.5 text-[12px] text-[#1E6B3A] font-semibold hover:gap-2.5 transition-all duration-200"
                                onClick={(e) => e.stopPropagation()}
                              >
                                En savoir plus
                                <ArrowUpRight size={12} />
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.button>
              )
            })}

            {/* Bottom callout */}
            <motion.div
              className="mt-2 p-5 rounded-xl border border-white/[0.06] bg-white/[0.02] relative overflow-hidden"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#1E6B3A]/5 to-transparent" />
              <p className="relative text-[12px] text-muted-foreground font-light text-center leading-relaxed">
                <span className="text-foreground font-semibold">847 projets infrastructure</span>
                {' · '}
                <span>Zéro accident depuis 2015</span>
                {' · '}
                <span>99.2% de satisfaction</span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}