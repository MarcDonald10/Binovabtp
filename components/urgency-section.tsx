'use client'

import { motion } from 'framer-motion'
import { conversionElements } from '@/lib/data'
import { AlertCircle, Clock, Zap, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

export function UrgencySection() {
  return (
    <section className="py-16 bg-foreground text-primary-foreground relative overflow-hidden">
      {/* Animated premium background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-accent/20 via-transparent to-accent/20"
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], x: [0, 40, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-6">
        {/* Main Alert - Documentaire */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="group relative border border-accent/40 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 backdrop-blur-md p-6 sm:p-8 overflow-hidden"
        >
          {/* Animated border glow */}
          <motion.div
            className="absolute inset-0 rounded-2xl border border-accent/20 group-hover:border-accent/60 transition-colors duration-700"
            initial={false}
          />

          {/* Top accent line */}
          <motion.div
            className="absolute top-0 left-0 h-1 bg-gradient-to-r from-accent to-accent/0"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.5, delay: 0.3 }}
          />

          <div className="relative z-10 flex gap-4 items-start">
            <motion.div
              animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex-shrink-0"
            >
              <AlertCircle size={32} className="text-accent mt-1" />
            </motion.div>
            <div className="flex-1">
              <motion.h3
                className="text-2xl sm:text-3xl font-serif font-bold mb-3 text-primary-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Forte demande sur nos équipes
              </motion.h3>
              <motion.p
                className="text-primary-foreground/80 font-light text-lg leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Nos équipes sont fortement sollicitées sur {' '}
                <motion.span
                  className="text-accent font-semibold"
                  animate={{ scale: [0.95, 1.05, 0.95], opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  des projets stratégiques.
                </motion.span>
                Les disponibilités sont limitées afin de garantir  <motion.span
                  className="text-accent font-semibold inline-flex items-center gap-1"
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Zap size={16} className="inline" /> un niveau d’exigence
                </motion.span> constant sur chaque mission.
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Key Points - Animated Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 gap-4"
        >
          {conversionElements.urgency.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group relative flex gap-3 p-4 rounded-lg border border-primary-foreground/20 bg-primary-foreground/5 hover:border-accent/40 hover:bg-primary-foreground/10 transition-all duration-500 cursor-pointer"
              whileHover={{ scale: 1.05, x: 4 }}
            >
              {/* Glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"
                initial={false}
              />

              <motion.div
                animate={{ bounce: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                className="flex-shrink-0 mt-1"
              >
                <Clock size={20} className="text-accent" />
              </motion.div>
              <motion.p className="text-primary-foreground font-light text-sm relative z-10">
                {item}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        {/* Social Proof Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-primary-foreground/20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {conversionElements.socialProof.map((proof, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group text-center p-3 rounded-lg border border-primary-foreground/20 hover:border-accent/40 hover:bg-primary-foreground/5 transition-all duration-500"
              whileHover={{ scale: 1.05 }}
            >
              <motion.p
                className="text-xs font-light text-primary-foreground/80 group-hover:text-accent transition-colors relative z-10"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 3, repeat: Infinity, delay: idx * 0.2 }}
              >
                {proof}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons - Premium Animated */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 pt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <Link href="/devis" className="flex-1">
            <motion.button
              className="group relative w-full px-8 py-4 bg-gradient-to-r from-accent to-accent/70 text-accent-foreground rounded-lg font-semibold shadow-lg overflow-hidden flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(201, 130, 107, 0.6)' }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Shimmer */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: ['0%', '100%'] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <span className="relative flex items-center gap-2">
                Demander une étude de projet
                <motion.div animate={{ x: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                  <ArrowRight size={16} />
                </motion.div>
              </span>
            </motion.button>
          </Link>

          <Link href="/contact" className="flex-1">
            <motion.button
              className="group relative w-full px-8 py-4 border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-all overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Border glow */}
              <motion.div
                className="absolute inset-0 rounded-lg border-2 border-accent opacity-0 group-hover:opacity-100"
                animate={{ boxShadow: ['0 0 0 0 rgba(201, 130, 107, 0.7)', '0 0 0 10px rgba(201, 130, 107, 0)'] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="relative">Échanger avec un expert</span>
            </motion.button>
          </Link>
        </motion.div>

        {/* Final Reassurance - Animated */}
        <motion.p
          className="text-center text-primary-foreground/70 font-light text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          animate={{ opacity: [0.6, 1, 0.6] }}
          transitionOpacity={{ duration: 3, repeat: Infinity }}
        >
          ✓ Réponse rapide et accompagnement personnalisé
        </motion.p>
      </div>
    </section>
  )
}
