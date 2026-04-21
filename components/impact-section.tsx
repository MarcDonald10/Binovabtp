'use client'

import { motion } from 'framer-motion'
import { companyStats } from '@/lib/data'

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

// Counter animation component
function AnimatedCounter({ value, suffix = '' }: { value: number | string; suffix?: string }) {
  const numValue = typeof value === 'string' ? parseInt(value.replace(/[^0-9]/g, '')) : value
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.span
        className="text-5xl sm:text-6xl font-serif font-bold text-accent"
      >
        {typeof value === 'string' ? value : numValue}
      </motion.span>
      <span className="text-5xl sm:text-6xl font-serif font-bold text-accent">{suffix}</span>
    </motion.div>
  )
}

export function ImpactSection() {
  return (
    <section className="py-20 bg-foreground text-primary-foreground relative overflow-hidden">
      {/* Premium animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, -50, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], x: [0, -40, 0], y: [0, 40, 0] }}
          transition={{ duration: 20, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Premium Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.h2
            className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            Notre <motion.span
              className="text-accent"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Impact Vérifié
            </motion.span>
          </motion.h2>
          <motion.p
            className="text-lg text-primary-foreground/80 font-light max-w-2xl mx-auto"
          >
            Des réalisations concrètes, une approche rigoureuse et des résultats qui parlent d’eux-mêmes.
          </motion.p>
        </motion.div>

        {/* Primary Stats Grid - Documentaire style */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          {[
            { value: '✔', suffix: '', label: 'Expertise Confirmée', desc: 'Approche maîtrisée et éprouvée' },
            { value: '✔', suffix: '', label: 'Projets Maîtrisés', desc: 'Exécution rigoureuse et structurée' },
            { value: '✔', suffix: '', label: 'Résultats Fiables', desc: 'Qualité, délais et sécurité assurés' }
          ].map((stat, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="group text-center p-6 rounded-2xl border border-primary-foreground/20 bg-primary-foreground/5 backdrop-blur-sm hover:border-accent/40 hover:bg-primary-foreground/10 transition-all duration-500 cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              {/* Animated border */}
              <motion.div
                className="absolute inset-0 rounded-2xl border border-accent/0 group-hover:border-accent/40 transition-colors duration-700"
                initial={false}
              />

              {/* Glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700 rounded-2xl"
                initial={false}
              />

              <motion.div
                className="text-5xl sm:text-6xl font-serif font-bold text-accent mb-3 relative z-10"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
              >
                <motion.span animate={{ y: [0, -4, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.15 }}>
                  {stat.value}{stat.suffix}
                </motion.span>
              </motion.div>

              <motion.p
                className="text-lg font-light text-primary-foreground/90 mb-2 relative z-10"
                initial={false}
              >
                {stat.label}
              </motion.p>
              <motion.p
                className="text-sm text-primary-foreground/60 font-light relative z-10"
                initial={false}
              >
                {stat.desc}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        {/* Secondary Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 gap-6 pt-12 border-t border-primary-foreground/20"
        >
          {[
            { value: '✔', suffix: '', label: 'Équipe Qualifiée', desc: 'Professionnels expérimentés et engagés' },
            { value: '✔', suffix: '', label: 'Présence Internationale', desc: 'Interventions sur divers territoires' },
            { value: '✔', suffix: '', label: 'Maîtrise Technique', desc: 'Expertise en travaux complexes' },
            { value: '✔', suffix: '', label: 'Performance Durable', desc: 'Résultats solides et continus' }
          ].map((stat, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="group p-5 rounded-xl border border-primary-foreground/20 bg-primary-foreground/5 backdrop-blur-sm hover:border-accent/30 hover:bg-primary-foreground/10 transition-all duration-500"
              whileHover={{ scale: 1.03 }}
            >
              {/* Glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700 rounded-xl"
                initial={false}
              />

              <motion.div
                className="text-3xl sm:text-4xl font-serif font-bold text-accent mb-2 relative z-10"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 }}
              >
                {stat.value}{stat.suffix}
              </motion.div>

              <motion.p
                className="text-primary-foreground/90 font-light mb-1 relative z-10"
                initial={false}
              >
                {stat.label}
              </motion.p>
              <motion.p
                className="text-sm text-primary-foreground/60 font-light relative z-10"
                initial={false}
              >
                {stat.desc}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        {/* Key Achievement - Documentaire */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-12 pt-8 text-center"
        >
          <motion.div
            className="inline-block relative"
            whileHover={{ scale: 1.05 }}
          >
            <motion.p className="text-4xl sm:text-5xl font-serif font-bold text-accent mb-3">
              Sécurité
            </motion.p>

            <motion.p className="text-lg text-primary-foreground/90 font-light">
              Tolérance zéro face aux risques critiques
            </motion.p>

            <motion.p className="text-sm text-primary-foreground/60 font-light mt-2">
              Protocoles stricts et culture sécurité intégrée
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
