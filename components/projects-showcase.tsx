'use client'

import { motion, useViewportScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, MapPin, Users, Clock, Award } from 'lucide-react'
import { useRef, useEffect, useState } from 'react'
import { caseStudies } from '@/lib/data'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

interface ProjectCardProps {
  study: any
  index: number
  isActive: boolean
}

function ProjectCard({ study, index, isActive }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0.6, scale: 0.85 }}
      transition={{ duration: 0.6 }}
      className="relative h-full min-w-[90vw] sm:min-w-[85vw] md:min-w-[700px] flex-shrink-0 group cursor-pointer"
    >
      <Link href={`/case-study/${study.slug}`}>
        {/* Card Wrapper */}
        <div className="relative h-full rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl shadow-2xl hover:border-accent/30 transition-all duration-500">
          {/* Background Image */}
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${study.image})`,
              backgroundPosition: 'center',
            }}
            initial={{ scale: 1.1, filter: 'blur(10px)' }}
            animate={isActive ? { scale: 1.05, filter: 'blur(5px)' } : { scale: 1.1, filter: 'blur(10px)' }}
            transition={{ duration: 0.8 }}
          />

          {/* Premium Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />

          {/* Top Glow Effect */}
          <motion.div
            className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl"
            initial={false}
          />

          {/* Animated Border Glow */}
          <motion.div
            className="absolute inset-0 rounded-3xl border border-accent/0 group-hover:border-accent/40 transition-colors duration-700 pointer-events-none"
            initial={false}
          />

          {/* Content Container */}
          <div className="relative h-full flex flex-col justify-end p-6 sm:p-8 md:p-10 z-10">
            {/* Top Accent Line */}
            <motion.div
              className="absolute top-0 left-0 h-1 bg-gradient-to-r from-accent to-accent/0 rounded-full"
              initial={{ width: '0%' }}
              animate={isActive ? { width: '100%' } : { width: '0%' }}
              transition={{ duration: 0.8 }}
            />

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="inline-flex w-fit items-center gap-2 mb-4 px-4 py-2 rounded-full bg-accent/20 border border-accent/40 backdrop-blur-sm"
            >
              <Award size={16} className="text-accent" />
              <span className="text-xs font-semibold text-accent uppercase tracking-wide">{study.client}</span>
            </motion.div>

            {/* Title */}
            <motion.h3
              className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-3 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0.7, y: 10 }}
              transition={{ delay: 0.15, duration: 0.6 }}
            >
              {study.title}
            </motion.h3>

            {/* Subtitle */}
            <motion.p
              className="text-lg text-white/90 font-light mb-6 max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0.6, y: 10 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {study.highlights}
            </motion.p>

            {/* Stats Row */}
            <motion.div
              className="flex flex-wrap gap-4 md:gap-6 mb-6"
              initial={{ opacity: 0 }}
              animate={isActive ? { opacity: 1 } : { opacity: 0.5 }}
              transition={{ delay: 0.25, duration: 0.6 }}
            >
              {[
                { icon: Clock, label: 'Durée', value: study.duration },
                { icon: Users, label: 'Équipe', value: `${study.team}+` },
                { icon: Award, label: 'Budget', value: study.budget },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-2"
                  animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0.6, x: -5 }}
                  transition={{ delay: 0.3 + i * 0.05, duration: 0.6 }}
                >
                  <stat.icon size={16} className="text-accent" />
                  <span className="text-sm text-white/80">
                    <span className="font-semibold text-white">{stat.value}</span> {stat.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              className="flex items-center gap-3 text-accent font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ opacity: 0, x: -10 }}
              animate={isActive ? { opacity: 0 } : { opacity: 0 }}
              whileHover={{ gap: 12 }}
            >
              <span>Découvrir</span>
              <motion.div animate={{ x: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                <ArrowRight size={20} />
              </motion.div>
            </motion.div>
          </div>

          {/* Shimmer Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl"
            initial={false}
            animate={{ x: ['100%', '-100%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          />
        </div>
      </Link>
    </motion.div>
  )
}

export function ProjectsShowcase() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = 400
      const newScroll = containerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount)
      containerRef.current.scrollTo({ left: newScroll, behavior: 'smooth' })
    }
  }

  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)

      // Update active index based on scroll position
      const cardWidth = 400
      const newIndex = Math.round(scrollLeft / cardWidth)
      setActiveIndex(Math.min(newIndex, caseStudies.length - 1))
    }
  }

  useEffect(() => {
    const container = containerRef.current
    container?.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => container?.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative py-20 px-6 overflow-hidden bg-background">
      {/* Premium Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/2 -left-1/2 w-full h-full bg-accent/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 180, 270, 360] }}
          transition={{ duration: 40, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-1/3 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, -50, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 25, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Premium Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <motion.div
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              <Award className="w-5 h-5 text-accent" />
            </motion.div>
            <span className="text-xs font-semibold text-accent uppercase tracking-[0.15em]">PROJETS SÉLECTIONNÉS</span>
          </motion.div>

          <motion.h2
            className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Nos Réalisations <br />
            <motion.span
              className="bg-gradient-to-r from-accent via-accent/70 to-accent bg-clip-text text-transparent"
              animate={{ backgroundPosition: '0% 50%' }}
              transition={{ duration: 8, repeat: Infinity }}
            >
              Qui Parlent d'Elles
            </motion.span>
          </motion.h2>

          <motion.p
            className="text-lg text-muted-foreground font-light max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Explorez nos projets emblématiques : défis géologiques complexes relevés, délais respectés, sécurité garantie. Chaque projet raconte une histoire d'innovation et d'excellence.
          </motion.p>
        </motion.div>

        {/* Horizontal Scroll Container */}
        <div className="relative group">
          {/* Scroll Container */}
          <div
            ref={containerRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4 -mx-6 px-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            style={{ scrollBehavior: 'smooth' }}
          >
            {caseStudies.map((study, index) => (
              <ProjectCard
                key={study.id}
                study={study}
                index={index}
                isActive={index === activeIndex}
              />
            ))}
          </div>

          {/* Navigation Buttons */}
          <motion.button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className="absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-accent/40 to-accent/10 border border-accent/30 text-accent hover:border-accent/60 hover:from-accent/60 transition-all disabled:opacity-30 disabled:cursor-not-allowed z-20 flex items-center justify-center backdrop-blur-md"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>

          <motion.button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className="absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-accent/40 to-accent/10 border border-accent/30 text-accent hover:border-accent/60 hover:from-accent/60 transition-all disabled:opacity-30 disabled:cursor-not-allowed z-20 flex items-center justify-center backdrop-blur-md"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>

          {/* Scroll Indicators */}
          <motion.div
            className="absolute -bottom-16 left-0 right-0 flex justify-center gap-2"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {caseStudies.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => {
                  if (containerRef.current) {
                    const scrollAmount = i * 400
                    containerRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' })
                  }
                }}
                className={`h-2 rounded-full transition-all ${
                  i === activeIndex ? 'w-8 bg-accent' : 'w-2 bg-accent/30 hover:bg-accent/50'
                }`}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-32 text-center"
        >
          <Link href="/contact">
            <motion.button
              className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-accent to-accent/70 text-white rounded-xl font-semibold shadow-lg hover:shadow-accent/50 overflow-hidden"
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(201, 130, 107, 0.8)' }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Shimmer */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: ['0%', '100%'] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <span className="relative flex items-center gap-2">
                Discuter de Votre Projet
                <motion.div animate={{ x: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                  <ArrowRight size={20} />
                </motion.div>
              </span>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
