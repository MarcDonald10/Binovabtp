'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useRef, useEffect, useState, useCallback } from 'react'
import { caseStudies } from '@/lib/data'

// Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay },
  }),
}

interface ProjectCardProps {
  study: any
  isActive: boolean
}

function ProjectCard({ study, isActive }: ProjectCardProps) {


  return (
    <motion.div
      className="relative flex-shrink-0 w-[min(700px, 92vw)] h-[480px] group snap-center"
      animate={{
        scale: isActive ? 1.02 : 0.96,
        opacity: isActive ? 1 : 0.82,
      }}
      transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
    >
      <Link href={`/case-study/${study.slug}`} className="block h-full">
        <div className="relative h-full rounded-3xl overflow-hidden border border-gray-100 bg-white shadow-sm group-hover:shadow-2xl transition-shadow duration-700">

          {/* Image */}
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${study.image})` }}
            animate={{ scale: isActive ? 1.04 : 1.08 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/65 to-transparent" />

          {/* Accent line */}
          <motion.div
            className="absolute top-0 left-0 h-1 bg-gradient-to-r from-[#1E6B3A] to-[#2E8B57] z-10"
            animate={{ width: isActive ? "100%" : "40%" }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          />

          {/* Content */}
          <div className="relative h-full flex flex-col justify-end p-10 z-20">

            <motion.div
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0.7, y: 15 }}
              className="inline-flex items-center gap-3 mb-6"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-[#1E6B3A]" />
              <span className="text-xs font-semibold tracking-[2px] text-[#1E6B3A] uppercase">
                {study.client}
              </span>
            </motion.div>

            <motion.h3
              className="font-serif text-[clamp(28px,4.2vw,44px)] leading-tight font-medium text-white mb-5"
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0.9, y: 10 }}
            >
              {study.title}
            </motion.h3>

            <motion.p
              className="text-[17px] text-white/90 leading-relaxed max-w-md mb-8"
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0.75, y: 12 }}
            >
              {study.highlights}
            </motion.p>

           

            
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

// ====================== MAIN COMPONENT ======================

export function ProjectsShowcase() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [canLeft, setCanLeft] = useState(false)
  const [canRight, setCanRight] = useState(true)

  const total = caseStudies.length
  const autoScrollInterval = useRef<NodeJS.Timeout | null>(null)

  // Auto-scroll continu très fluide
  const startAutoScroll = useCallback(() => {
    if (autoScrollInterval.current) clearInterval(autoScrollInterval.current)

    autoScrollInterval.current = setInterval(() => {
      if (isHovered || !trackRef.current) return

      setActiveIndex((prev) => {
        const next = (prev + 1) % total
        scrollToIndex(next)
        return next
      })
    }, 4200) // Toutes les 4.2 secondes (rythme professionnel)
  }, [isHovered, total])

  const scrollToIndex = (index: number) => {
    if (!trackRef.current) return
    const card = trackRef.current.children[index] as HTMLElement
    if (!card) return

    const scrollPosition = card.offsetLeft - (window.innerWidth - card.offsetWidth) / 2 + 20

    trackRef.current.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    })
  }

  const go = (direction: -1 | 1) => {
    const next = (activeIndex + direction + total) % total
    setActiveIndex(next)
    scrollToIndex(next)
  }

  // Détection du scroll manuel + mise à jour activeIndex
  const handleScroll = () => {
    if (!trackRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = trackRef.current

    setCanLeft(scrollLeft > 50)
    setCanRight(scrollLeft < scrollWidth - clientWidth - 50)

    let closest = 0
    let minDist = Infinity

    Array.from(trackRef.current.children).forEach((child, i) => {
      const el = child as HTMLElement
      const dist = Math.abs(el.offsetLeft - scrollLeft)
      if (dist < minDist) {
        minDist = dist
        closest = i
      }
    })
    setActiveIndex(closest)
  }

  // Gestion du hover (pause / reprise)
  useEffect(() => {
    if (isHovered) {
      if (autoScrollInterval.current) clearInterval(autoScrollInterval.current)
    } else {
      startAutoScroll()
    }
  }, [isHovered, startAutoScroll])

  // Initialisation
  useEffect(() => {
    startAutoScroll()
    const el = trackRef.current
    el?.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      if (autoScrollInterval.current) clearInterval(autoScrollInterval.current)
      el?.removeEventListener('scroll', handleScroll)
    }
  }, [startAutoScroll])

  return (
    <section className="relative py-28 px-6 bg-white overflow-hidden">
      {/* Ambient light elements */}
      <motion.div
        className="absolute top-0 left-1/3 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(201,130,107,0.04) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeUp} custom={0} className="mb-6">
            <span className="inline-block px-6 py-2 rounded-full border border-[#1E6B3A]/20 text-[#1E6B3A] text-sm tracking-[3px] font-medium">
              NOS RÉALISATIONS
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            custom={0.1}
            className="font-serif text-[clamp(52px,7.5vw,82px)] leading-none font-light text-gray-950 mb-6"
          >
            Des projets <span className="text-[#1E6B3A]">d'exception</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={0.2}
            className="max-w-xl mx-auto text-xl text-gray-600"
          >
            Chaque réalisation reflète notre engagement pour l’excellence technique et esthétique.
          </motion.p>
        </motion.div>

        {/* Scroll Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            ref={trackRef}
            className="flex gap-10 overflow-x-auto pb-16 snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {caseStudies.map((study, i) => (
              <ProjectCard
                key={study.id}
                study={study}
                isActive={i === activeIndex}
              />
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center px-6 mt-4">
            <div className="flex gap-3">
              {caseStudies.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => {
                    setActiveIndex(i)
                    scrollToIndex(i)
                  }}
                  className="h-1 rounded-full bg-gray-200 transition-all"
                  animate={{
                    width: i === activeIndex ? 52 : 14,
                    backgroundColor: i === activeIndex ? '#1E6B3A' : '#e5e7eb'
                  }}
                />
              ))}
            </div>

            <div className="flex gap-4">
              <motion.button
                onClick={() => go(-1)}
                className="w-14 h-14 flex items-center justify-center rounded-2xl border border-gray-200 hover:border-gray-400 text-2xl text-gray-400 hover:text-gray-800 transition-all"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                ←
              </motion.button>
              <motion.button
                onClick={() => go(1)}
                className="w-14 h-14 flex items-center justify-center rounded-2xl border border-gray-200 hover:border-gray-400 text-2xl text-gray-400 hover:text-gray-800 transition-all"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                →
              </motion.button>
            </div>
          </div>
        </div>

        {/* CTA */}
        <motion.div className="mt-20 flex justify-center">
          <Link href="/contact">
            <motion.button
              className="group px-14 py-7 bg-[#1E6B3A] text-white text-lg font-medium rounded-3xl flex items-center gap-5 hover:bg-[#155a2f] transition-all shadow-xl"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Discuter de votre projet
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}