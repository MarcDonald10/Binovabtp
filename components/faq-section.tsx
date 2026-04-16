'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { faqItems } from '@/lib/data'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1], delay },
  }),
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section className="py-28 bg-white relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#C9826B_0.6px,transparent_1px)] [background-size:50px_50px] opacity-[0.012]" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            variants={fadeUp}
            custom={0}
            className="inline-flex items-center gap-4 mb-6"
          >
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#C9826B] to-transparent" />
            <span className="uppercase tracking-[3px] text-sm font-medium text-[#C9826B]">
              FAQ
            </span>
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#C9826B] to-transparent" />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            custom={0.1}
            className="font-serif text-[clamp(42px,6.5vw,72px)] leading-none font-light text-gray-950 mb-6"
          >
            Questions <span className="text-[#C9826B]">fréquentes</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={0.2}
            className="text-xl text-gray-600 max-w-2xl mx-auto font-light"
          >
            Retrouvez les réponses aux questions les plus courantes sur nos services géologiques.
          </motion.p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-6">
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx

            return (
              <motion.div
                key={idx}
                variants={fadeUp}
                custom={0.1 + idx * 0.08}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="border border-gray-200 rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-500"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full px-8 py-7 flex items-center justify-between text-left group hover:bg-gray-50 transition-colors"
                >
                  <span className="text-[19px] leading-tight font-medium text-gray-900 pr-8">
                    {item.question}
                  </span>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                    className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-2xl border border-gray-200 group-hover:border-[#C9826B]/30 transition-colors"
                  >
                    <ChevronDown 
                      size={22} 
                      className={`text-gray-400 group-hover:text-[#C9826B] transition-colors ${isOpen ? 'text-[#C9826B]' : ''}`} 
                    />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-9 pt-2">
                        <p className="text-gray-700 leading-relaxed text-[17px] font-light">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="inline-block bg-gray-50 border border-gray-100 rounded-3xl px-10 py-10">
            <p className="text-2xl font-light text-gray-900 mb-3">
              Vous avez une question spécifique ?
            </p>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Nos experts géologues sont à votre écoute pour vous apporter des réponses précises et personnalisées.
            </p>

            <a
              href="/contact"
              className="inline-flex items-center gap-4 px-10 py-5 bg-[#C9826B] hover:bg-[#b56f5a] text-white rounded-2xl font-medium text-lg transition-all hover:shadow-xl group"
            >
              Poser ma question
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}