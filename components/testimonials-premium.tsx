'use client'

import { testimonials } from '@/lib/data'
import { Star, Quote } from 'lucide-react'

export function TestimonialsPremium() {
  return (
    <section id="testimonials" className="py-20 bg-muted/30 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-5xl font-serif font-bold mb-4">Témoignages de Confiance</h2>
          <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
            Ce que les leaders de l&apos;industrie disent de notre expertise
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="p-8 bg-background border border-border/50 rounded-sm hover:border-accent/50 transition-all group animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>

              {/* Quote Icon */}
              <Quote size={24} className="text-accent/30 mb-4" />

              {/* Testimonial Text */}
              <p className="text-foreground/80 font-light leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-accent-foreground transition-all">
                  <span className="font-bold text-sm">{testimonial.name.charAt(0)}</span>
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-foreground text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-muted-foreground font-light">{testimonial.role}</p>
                  <p className="text-xs font-semibold text-accent mt-1">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof */}
        <div className="mt-16 grid sm:grid-cols-3 gap-6 pt-12 border-t border-border/50 animate-fade-in-up">
          <div className="text-center">
            <div className="text-4xl font-serif font-bold text-accent mb-2">4/5</div>
            <p className="text-sm text-muted-foreground font-light">Note moyenne des clients</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-serif font-bold text-accent mb-2">98%</div>
            <p className="text-sm text-muted-foreground font-light">Clients satisfaits</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-serif font-bold text-accent mb-2">847</div>
            <p className="text-sm text-muted-foreground font-light">Projets recommandés</p>
          </div>
        </div>
      </div>
    </section>
  )
}
