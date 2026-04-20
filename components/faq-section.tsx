'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, MoveRight, MessageSquare } from 'lucide-react'
import { useState } from 'react'
import { faqItems } from '@/lib/data'

const ACCENT = '#1E6B3A'

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number>(0)

  const toggle = (i: number) => setOpenIndex(openIndex === i ? -1 : i)

  return (
    <section className="relative py-28 bg-[#0a0906] overflow-hidden">

      {/* ── Ambient ── */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: `linear-gradient(to right, transparent, ${ACCENT}20, transparent)` }}
      />
      <div
        className="absolute bottom-1/4 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: `radial-gradient(ellipse, ${ACCENT}05 0%, transparent 70%)` }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6">

        {/* ── Header ── */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8" style={{ background: ACCENT }} />
            <span
              className="text-[11px] font-semibold tracking-[0.2em] uppercase"
              style={{ color: ACCENT }}
            >
              FAQ
            </span>
          </div>
          <h2 className="text-[clamp(2.2rem,4vw,3.2rem)] font-serif font-bold text-white leading-[1.05]">
            Questions fréquentes.
            <br />
            <em className="not-italic" style={{ color: ACCENT }}>Réponses précises.</em>
          </h2>
        </motion.div>

        {/* ── Accordion ── */}
        <div className="space-y-2">
          {faqItems.map((item, i) => {
            const isOpen = openIndex === i

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative rounded-xl border overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? 'border-[#1E6B3A]/30 bg-[#1E6B3A]/[0.04]'
                    : 'border-white/[0.05] bg-white/[0.02] hover:border-white/[0.09] hover:bg-white/[0.03]'
                }`}
              >
                {/* Active top accent */}
                {isOpen && (
                  <motion.div
                    className="absolute top-0 left-0 right-0 h-[1px]"
                    style={{ background: `linear-gradient(to right, transparent, ${ACCENT}60, transparent)` }}
                    layoutId={`faq-accent-${i}`}
                  />
                )}

                {/* Question row */}
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-5 px-6 py-5 text-left"
                >
                  {/* Index + text */}
                  <div className="flex items-start gap-4 flex-1 min-w-0">
                    <span
                      className="text-[10px] font-mono font-bold mt-0.5 flex-shrink-0 transition-colors duration-300"
                      style={{ color: isOpen ? ACCENT : 'rgba(255,255,255,0.2)' }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span
                      className={`text-[15px] font-medium leading-snug transition-colors duration-300 ${
                        isOpen ? 'text-white' : 'text-white/60 group-hover:text-white/80'
                      }`}
                    >
                      {item.question}
                    </span>
                  </div>

                  {/* Chevron */}
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center border transition-all duration-300"
                    style={{
                      borderColor: isOpen ? `${ACCENT}40` : 'rgba(255,255,255,0.07)',
                      background: isOpen ? `${ACCENT}12` : 'rgba(255,255,255,0.02)',
                    }}
                  >
                    <ChevronDown
                      size={14}
                      style={{ color: isOpen ? ACCENT : 'rgba(255,255,255,0.25)' }}
                    />
                  </motion.div>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pl-[3.25rem]">
                        {/* Divider */}
                        <div
                          className="h-px mb-4"
                          style={{ background: `linear-gradient(to right, ${ACCENT}20, transparent)` }}
                        />
                        <p className="text-[14px] text-white/50 font-light leading-relaxed">
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

        {/* ── Bottom CTA ── */}
        <motion.div
          className="mt-14 relative p-7 rounded-2xl border border-white/[0.05] bg-white/[0.02] overflow-hidden"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          {/* Accent top bar */}
          <div
            className="absolute top-0 left-0 right-0 h-[1px] rounded-t-2xl"
            style={{ background: `linear-gradient(to right, transparent, ${ACCENT}40, transparent)` }}
          />

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ background: `${ACCENT}15`, color: ACCENT }}
              >
                <MessageSquare size={17} strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-[15px] font-semibold text-white mb-1">
                  Une question spécifique ?
                </p>
                <p className="text-[13px] text-white/35 font-light">
                  Nos experts vous répondent sous 24h.
                </p>
              </div>
            </div>

            <a
              href="/contact"
              className="group flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-white text-[13px] font-semibold flex-shrink-0 transition-all duration-200 hover:opacity-90"
              style={{ background: ACCENT }}
            >
              Poser ma question
              <MoveRight
                size={14}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}