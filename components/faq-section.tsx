'use client'

import { faqItems } from '@/lib/data'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 text-center animate-fade-in-up">
          <h2 className="text-3xl sm:text-5xl font-serif font-bold mb-4">Questions Fréquentes</h2>
          <p className="text-lg text-muted-foreground font-light">
            Tout ce que vous devez savoir avant de nous contacter
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqItems.map((item, idx) => (
            <div
              key={idx}
              className="border border-border/50 rounded-sm overflow-hidden hover:border-accent/50 transition-colors animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                className="w-full px-6 py-5 flex items-center justify-between hover:bg-muted/50 transition-colors text-left"
              >
                <span className="text-lg font-semibold text-foreground pr-4">{item.question}</span>
                <ChevronDown
                  size={20}
                  className={`flex-shrink-0 text-accent transition-transform duration-300 ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openIndex === idx && (
                <div className="px-6 py-4 border-t border-border/30 bg-background/50 animate-fade-in">
                  <p className="text-foreground/80 font-light leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 pt-12 border-t border-border/50 text-center animate-fade-in-up">
          <p className="text-lg text-foreground font-semibold mb-4">Encore des questions?</p>
          <p className="text-muted-foreground font-light mb-6">
            Nos experts sont disponibles pour discuter de vos besoins spécifiques
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-sm font-semibold hover:shadow-lg transition-all hover:scale-105"
          >
            Contacter nos Experts →
          </a>
        </div>
      </div>
    </section>
  )
}
