'use client'

import { motion, cubicBezier } from 'framer-motion'
import Link from 'next/link'
import { caseStudies } from '@/lib/data'
import { ArrowRight, Zap, Award, Users } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
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
      ease: cubicBezier(0.23, 1, 0.32, 1),
    },
  },
}

export function CaseStudiesSection() {
  return (
    <section className="relative py-20 px-6 overflow-hidden bg-background">
      {/* Premium background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient background */}
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 10% 50%, rgba(201, 130, 107, 0.08) 0%, transparent 50%)',
              'radial-gradient(circle at 90% 50%, rgba(201, 130, 107, 0.08) 0%, transparent 50%)',
              'radial-gradient(circle at 10% 50%, rgba(201, 130, 107, 0.08) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0"
        />

        {/* Grain texture */}
        <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" /%3E%3C/filter%3E%3Crect width="400" height="400" filter="url(%23noiseFilter)"/%3E%3C/svg%3E")',
            backgroundSize: '200px 200px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Premium Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 max-w-3xl"
        >
          <motion.div
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}>
              <Award className="w-5 h-5 text-accent" />
            </motion.div>
            <span className="text-xs font-semibold text-accent uppercase tracking-[0.15em]">CAS D'ÉTUDE PREMIUM</span>
          </motion.div>

          <motion.h2
            className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Projets qui <motion.span
              className="bg-gradient-to-r from-accent via-accent/70 to-accent bg-clip-text text-transparent"
              initial={{ backgroundPosition: '0% 50%' }}
              animate={{ backgroundPosition: '100% 50%' }}
              transition={{ duration: 8, repeat: Infinity }}
            >
              Changent le Monde
            </motion.span>
          </motion.h2>

          <motion.p
            className="text-lg text-muted-foreground font-light max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Découvrez comment nous avons transformé les plus grands défis du BTP en succès mesurables. De la conception innovante à la livraison exceptionnelle, chaque projet raconte une histoire d'expertise.
          </motion.p>
        </motion.div>

        {/* Case Studies Grid - Premium Design */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-10"
        >
          {caseStudies.map((study, idx) => (
            <motion.div
              key={study.id}
              variants={itemVariants}
              className="group"
            >
              <Link href={`/case-study/${study.slug}`}>
                <motion.div
                  whileHover={{ borderColor: 'rgba(201, 130, 107, 0.3)' }}
                  className="relative grid md:grid-cols-2 gap-6 items-center p-6 sm:p-8 rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.02] to-white/[0.01] backdrop-blur-xl overflow-hidden transition-all duration-700 cursor-pointer"
                >
                  {/* Animated border */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl border border-accent/0 group-hover:border-accent/40 transition-colors duration-700 z-10"
                    initial={false}
                  />

                  {/* Glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700 z-0"
                    initial={false}
                  />

                  {/* Top accent line */}
                  <motion.div
                    className="absolute top-0 left-0 h-1 bg-gradient-to-r from-accent to-accent/0 rounded-full z-20"
                    initial={{ width: '0%' }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.6 }}
                  />

                  {/* Image Section */}
                  <div className="order-2 md:order-1 relative h-56 sm:h-72 md:h-80 rounded-xl overflow-hidden bg-muted">
                    {/* Background overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent z-10" />

                    {/* Parallax image */}
                    <motion.div
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${study.image})` }}
                      initial={{ scale: 1.1, filter: 'blur(8px)' }}
                      whileHover={{ scale: 1.05, filter: 'blur(4px)' }}
                      transition={{ duration: 0.6 }}
                    />

                    {/* Shimmer overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 z-15"
                      initial={false}
                      animate={{ x: ['100%', '-100%'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                    />
                  </div>

                  {/* Content Section */}
                  <div className="order-1 md:order-2 space-y-4 relative z-20">
                    {/* Client & Title */}
                    <motion.div
                      className="space-y-3"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <motion.p
                        className="text-xs font-semibold text-accent uppercase tracking-[0.15em] group-hover:text-accent/80 transition-colors"
                        animate={{ letterSpacing: ['0.15em', '0.2em', '0.15em'] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        {study.client}
                      </motion.p>
                      <motion.h3
                        className="text-2xl sm:text-4xl font-serif font-bold text-foreground group-hover:text-accent transition-colors duration-400"
                        initial={false}
                      >
                        {study.title}
                      </motion.h3>
                      <motion.p className="text-lg text-muted-foreground font-light">
                        {study.subtitle}
                      </motion.p>
                    </motion.div>

                    {/* Highlights */}
                    <motion.p
                      className="text-base text-foreground/80 font-light leading-relaxed"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {study.highlights}
                    </motion.p>

                    {/* Animated Stats Grid */}
                    <motion.div
                      className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2"
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      {[
                        { label: 'Budget', value: study.budget, icon: '💰' },
                        { label: 'Durée', value: study.duration, icon: '⏱️' },
                        { label: 'Experts', value: `${study.team}+`, icon: '👥' },
                        { label: 'Année', value: study.year, icon: '📅' }
                      ].map((stat, i) => (
                        <motion.div
                          key={i}
                          variants={itemVariants}
                          className="group/stat relative space-y-1 p-2 rounded-lg bg-white/[0.02] border border-white/5 hover:border-accent/20 hover:bg-white/[0.04] transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                        >
                          {/* Animated background reveal */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover/stat:opacity-100 transition-opacity duration-300 rounded-lg"
                            initial={false}
                          />

                          <motion.p
                            className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider relative z-10"
                            animate={{ y: [0, -2, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                          >
                            {stat.label}
                          </motion.p>
                          <motion.p
                            className="text-sm font-serif font-bold text-foreground group-hover/stat:text-accent transition-colors relative z-10"
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 }}
                          >
                            {stat.value}
                          </motion.p>
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* Results with animated checkmarks */}
                    <motion.ul
                      className="space-y-1 pt-2 border-t border-white/5"
                      initial="hidden"
                      whileInView="visible"
                      variants={containerVariants}
                    >
                      {study.results.slice(0, 3).map((result, i) => (
                        <motion.li
                          key={i}
                          variants={itemVariants}
                          className="text-xs font-light text-foreground/80 flex items-start gap-2 group/item"
                        >
                          <motion.span
                            className="text-accent font-bold mt-0.5 flex-shrink-0"
                            animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.15 }}
                          >
                            ✓
                          </motion.span>
                          <motion.span
                            className="group-hover/item:text-accent transition-colors"
                            initial={false}
                          >
                            {result}
                          </motion.span>
                        </motion.li>
                      ))}
                    </motion.ul>

                    {/* CTA */}
                    <motion.div
                      className="pt-2"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <motion.span
                        className="inline-flex items-center gap-2 text-accent font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        whileHover={{ gap: '12px' }}
                      >
                        <span>Découvrir le Projet</span>
                        <motion.div animate={{ x: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                          <ArrowRight size={20} />
                        </motion.div>
                      </motion.span>
                    </motion.div>
                  </div>

                  {/* Shimmer on card */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 z-15 rounded-2xl"
                    initial={false}
                    animate={{ x: ['100%', '-100%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  />
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA - Premium */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-12 pt-12 border-t border-white/5"
        >
          <motion.div
            className="relative p-8 sm:p-10 rounded-2xl border border-accent/20 bg-gradient-to-r from-accent/10 to-accent/5 backdrop-blur-md overflow-hidden text-center"
            whileHover={{ borderColor: 'rgba(201, 130, 107, 0.4)' }}
          >
            {/* Animated background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-accent/0 to-accent/10"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            />

            <motion.p
              className="text-base text-muted-foreground font-light mb-4 relative z-10"
              initial={false}
            >
              Votre projet pourrait être la <motion.span
                className="text-accent font-semibold"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                prochaine success story
              </motion.span>
            </motion.p>

            <Link href="/contact">
              <motion.button
                className="group relative inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-accent to-accent/70 text-white rounded-xl font-semibold shadow-lg hover:shadow-accent/50 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Shimmer inside button */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={false}
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

            <motion.p
              className="text-xs text-muted-foreground mt-3 relative z-10"
              initial={false}
            >
              Réponse rapide • Sans engagement • Consultation confidentielle
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
