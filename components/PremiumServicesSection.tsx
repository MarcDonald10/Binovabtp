'use client'

import {
  Drill,
  Pickaxe,
  Hammer,
  Building2,
  ArrowUpRight,
  MoveRight,
} from 'lucide-react'

import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const services = [
  {
    index: '01',
    title: 'Tunnelage',
    subtitle: 'Infrastructure souterraine',
    description:
      'Percement de structures complexes avec une précision millimétrique sur des projets internationaux.',
    tag: 'Grande profondeur',
    icon: Drill,
    link: '/tunnelage',
    image: '/slides/tunell.jpg',
    accent: '#1E6B3A',
  },
  {
    index: '02',
    title: 'Minage',
    subtitle: 'Exploitation minière',
    description:
      'Maîtrise des opérations d’abattage contrôlé et optimisation des environnements à forte contrainte.',
    tag: 'Haute précision',
    icon: Pickaxe,
    link: '/minage',
    image: '/slides/minage.jpg',
    accent: '#1E6B3A',
  },
  {
    index: '03',
    title: 'Terrassement',
    subtitle: 'Génie civil de précision',
    description:
      'Excavation à grande échelle avec contrôle avancé des volumes et des terrains complexes.',
    tag: 'Ingénierie terrain',
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
      'Conception et réalisation d’ouvrages majeurs à forte valeur stratégique et technique.',
    tag: 'Expertise globale',
    icon: Building2,
    link: '/metier',
    image: '/slides/dams.jpg',
    accent: '#1E6B3A',
  },
]

export function PremiumServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = services[activeIndex]

  return (
    <section className="relative py-28 bg-background overflow-hidden">

      {/* Background lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1E6B3A]/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1E6B3A]/15 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="mb-16 flex flex-wrap items-end justify-between gap-8">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-[#1E6B3A]" />
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#1E6B3A]">
                Expertise mondiale
              </span>
            </div>

            <h2 className="text-[clamp(2.4rem,4.5vw,3.8rem)] font-serif font-bold leading-[1.05]">
              Quatre piliers.
              <br />
              <em className="not-italic text-[#1E6B3A]">
                Un standard d'excellence.
              </em>
            </h2>
          </div>

          <p className="text-[15px] text-muted-foreground font-light max-w-sm">
            Des projets infrastructuraux simples aux plus complexes, notre engagement: Zéro compromis sur la qualité.
          </p>
        </div>

        {/* LAYOUT */}
        <div className="grid lg:grid-cols-[1fr_480px] gap-10">

          {/* IMAGE */}
          <motion.div
            className="relative rounded-2xl overflow-hidden bg-white/5 min-h-[480px]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={active.image}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${active.image})` }}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.6 }}
              />
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* TOP INFO */}
            <div className="absolute top-6 left-6 right-6 flex justify-between">
              <div className="px-3 py-1.5 bg-black/40 rounded-full text-[11px] text-white/70 border border-white/10">
                {active.subtitle}
              </div>

              <div className="text-right text-white">
                <p className="text-2xl font-bold">{active.index}</p>
              </div>
            </div>

            {/* BOTTOM CONTENT */}
            <div className="absolute bottom-0 p-8 text-white">
              <h3 className="text-4xl font-serif font-bold mb-2">
                {active.title}
              </h3>

              <p className="text-white/60 text-sm mb-5 max-w-xs">
                {active.description}
              </p>

              <Link href={active.link}>
                <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1E6B3A] rounded-xl text-sm font-semibold">
                  Découvrir
                  <ArrowUpRight size={14} />
                </div>
              </Link>
            </div>
          </motion.div>

          {/* LIST */}
          <div className="flex flex-col gap-3">

            {services.map((s, i) => {
              const isActive = i === activeIndex

              return (
                <motion.button
                  key={s.index}
                  onClick={() => setActiveIndex(i)}
                  className={`text-left rounded-xl border transition-all duration-300 p-5 overflow-hidden ${isActive
                      ? 'border-[#1E6B3A]/40 bg-[#1E6B3A]/5'
                      : 'border-black/10 bg-black/5 hover:bg-black/10'
                    }`}
                  whileHover={{ scale: isActive ? 1 : 1.01 }}
                >

                  {/* HEADER */}
                  <div className="flex items-start gap-4">

                    {/* INDEX */}
                    <span className={`text-xs font-mono mt-1 ${isActive ? 'text-[#1E6B3A]' : 'text-black/60'
                      }`}>
                      {s.index}
                    </span>

                    {/* ICON */}
                    <div className={`w-10 h-10 flex items-center justify-center rounded-lg flex-shrink-0 ${isActive
                        ? 'bg-[#1E6B3A]/20 text-[#1E6B3A]'
                        : 'bg-black/10 text-black/60'
                      }`}>
                      <s.icon size={18} />
                    </div>

                    {/* TEXT CONTENT */}
                    <div className="flex-1 min-w-0">

                      {/* TITLE + TAG */}
                      <div className="flex items-center justify-between gap-2 flex-wrap">

                        <p className={`font-semibold transition-colors duration-300 ${isActive ? 'text-[#1E6B3A]' : 'text-black/80'
                          }`}>
                          {s.title}
                        </p>

                        <span className={`text-[10px] px-2 py-0.5 rounded-full border transition-all duration-300 ${isActive
                            ? 'border-[#1E6B3A]/40 text-[#1E6B3A] bg-[#1E6B3A]/10'
                            : 'border-black/10 text-black/70'
                          }`}>
                          {s.tag}
                        </span>

                      </div>

                      {/* SUBTITLE */}
                      <p className="text-xs text-black/70 mt-0.5">
                        {s.subtitle}
                      </p>

                    </div>
                  </div>

                  {/* DESCRIPTION (IMPORTANT FIX VISIBILITÉ) */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        className="overflow-hidden"
                      >
                        <p className="text-xs text-black/80 mt-4 pl-[52px] leading-relaxed border-t border-black/10 pt-3">
                          {s.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </motion.button>
              )
            })}

          </div>
        </div>
      </div>
    </section>
  )
}