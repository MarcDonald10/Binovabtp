'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { testimonials } from '@/lib/data'

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1], delay },
  }),
}

export function TestimonialsPremium() {
  return (
    <section id="testimonials" className="py-28 bg-white scroll-mt-20 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#1E6B3A_0.8px,transparent_1px)] [background-size:40px_40px] opacity-[0.015]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
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
            className="inline-flex items-center gap-3 mb-6"
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-[#1E6B3A] to-transparent" />
            <span className="uppercase tracking-[3px] text-sm font-medium text-[#1E6B3A]">
              Ils nous font confiance
            </span>
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-[#1E6B3A] to-transparent" />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            custom={0.1}
            className="font-serif text-[clamp(42px,6.5vw,72px)] leading-none font-light text-gray-950 mb-6"
          >
            Témoignages de <span className="text-[#1E6B3A]">confiance</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={0.2}
            className="text-xl text-gray-600 max-w-2xl mx-auto font-light"
          >
            Ce que nos clients disent de notre expertise géologique et de notre engagement sans compromis.
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              custom={0.15 + idx * 0.1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.4 } }}
              className="group relative p-10 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col"
            >
              {/* Quote Icon */}
              <Quote 
                size={42} 
                className="text-[#1E6B3A]/10 group-hover:text-[#1E6B3A]/20 transition-colors mb-8" 
              />

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={20} 
                    className="fill-[#1E6B3A] text-[#1E6B3A]" 
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-[17px] leading-relaxed text-gray-700 font-light mb-10 flex-1 italic">
                “{testimonial.text}”
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-[#1E6B3A]/10 flex items-center justify-center text-[#1E6B3A] font-semibold text-xl transition-all group-hover:bg-[#1E6B3A] group-hover:text-white">
                  {testimonial.name.charAt(0)}
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                  <p className="text-[#1E6B3A] text-sm font-medium mt-0.5">
                    {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Subtle bottom accent line */}
              <div className="absolute bottom-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-[#1E6B3A]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        {/* Social Proof Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-24 grid grid-cols-1 sm:grid-cols-3 gap-10 border-t border-gray-100 pt-16"
        >
          <div className="text-center">
            <div className="text-6xl font-serif font-light text-[#1E6B3A] mb-3">4.9</div>
            <p className="text-gray-600">Note moyenne sur 5</p>
            <div className="h-px w-12 mx-auto bg-[#1E6B3A]/30 mt-6" />
          </div>

          <div className="text-center">
            <div className="text-6xl font-serif font-light text-[#1E6B3A] mb-3">98%</div>
            <p className="text-gray-600">Taux de satisfaction</p>
            <div className="h-px w-12 mx-auto bg-[#1E6B3A]/30 mt-6" />
          </div>

          <div className="text-center">
            <div className="text-6xl font-serif font-light text-[#1E6B3A] mb-3">847</div>
            <p className="text-gray-600">Projets recommandés</p>
            <div className="h-px w-12 mx-auto bg-[#1E6B3A]/30 mt-6" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}