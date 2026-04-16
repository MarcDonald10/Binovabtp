'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, Award, Zap } from 'lucide-react'
import { notFound } from 'next/navigation'
import { caseStudies } from '@/lib/data'



export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = caseStudies.find(s => s.slug === params.slug)

  if (!study) {
    notFound()
  }

  const currentIndex = caseStudies.findIndex(s => s.slug === params.slug)
  const nextStudy = caseStudies[(currentIndex + 1) % caseStudies.length]

  return (
    <>
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative min-h-[85vh] flex items-center bg-[#0a0906] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#E89A7A_0.8px,transparent_1px)] [background-size:60px_60px] opacity-10" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 pt-20">
          <Link 
            href="/#projects" 
            className="inline-flex items-center gap-3 text-white/70 hover:text-white transition-colors mb-12 group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Retour aux réalisations
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.23, 1, 0.32, 1] }}
          >
            <p className="text-[#E89A7A] uppercase tracking-[4px] text-sm font-medium mb-6">{study.client}</p>
            
            <h1 className="font-serif text-[clamp(52px,8vw,90px)] leading-[1.05] font-light mb-10 max-w-5xl">
              {study.title}
            </h1>

            <p className="text-2xl text-white/80 font-light max-w-3xl leading-tight">
              {study.subtitle || study.highlights}
            </p>
          </motion.div>

          {/* Meta Information */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-10 border-t border-white/10 pt-12">
            {[
              { label: "Budget", value: study.budget },
              { label: "Durée", value: study.duration },
              { label: "Équipe", value: `${study.team}+ personnes` },
              { label: "Année", value: study.year || "2024" },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <p className="text-white/50 text-xs uppercase tracking-widest mb-3">{item.label}</p>
                <p className="text-4xl font-serif font-light text-white">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== MAIN VISUAL ==================== */}
      <section className="relative -mt-16 z-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative aspect-[16/9.5] rounded-3xl overflow-hidden shadow-2xl border border-white/5">
            <div 
              className="absolute inset-0 bg-cover bg-center scale-105"
              style={{ backgroundImage: `url(${study.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/70" />
          </div>
        </div>
      </section>

      {/* ==================== CONTENT SECTION ==================== */}
      <section className="py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 space-y-28">

          {/* Le Défi */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-6xl font-light text-gray-950 mb-10">Le Défi</h2>
            <p className="text-2xl text-gray-700 leading-relaxed font-light">
              {study.challenge}
            </p>
          </motion.div>

          {/* Notre Solution */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-6xl font-light text-gray-950 mb-10">Notre Solution</h2>
            <p className="text-2xl text-gray-700 leading-relaxed font-light">
              {study.solution}
            </p>
          </motion.div>

          {/* Résultats */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-3xl p-14 border border-gray-100"
          >
            <h2 className="font-serif text-6xl font-light text-gray-950 mb-12">Résultats Obtenus</h2>
            <ul className="space-y-8">
              {study.results.map((result, idx) => (
                <li key={idx} className="flex gap-6 text-xl text-gray-700">
                  <span className="text-[#C9826B] text-4xl leading-none mt-1">•</span>
                  <span className="leading-relaxed">{result}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Points Clés */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-6xl font-light text-gray-950 mb-12">Points Clés du Projet</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-10 bg-white border border-gray-100 rounded-3xl hover:shadow-xl transition-shadow">
                <div className="text-[#C9826B] mb-6">
                  <Award size={48} />
                </div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-5">Impact Technique</h3>
                <p className="text-gray-700 text-[17.5px] leading-relaxed">
                  Ce projet a repoussé les limites de l’ingénierie géotechnique et est devenu une référence dans le secteur.
                </p>
              </div>

              <div className="p-10 bg-white border border-gray-100 rounded-3xl hover:shadow-xl transition-shadow">
                <div className="text-[#C9826B] mb-6">
                  <Zap size={48} />
                </div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-5">Innovation & Savoir-faire</h3>
                <p className="text-gray-700 text-[17.5px] leading-relaxed">
                  Les solutions développées ici ont été intégrées à notre méthodologie standard et partagées avec l’industrie.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==================== NEXT PROJECT ==================== */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="uppercase text-xs tracking-[3px] text-gray-500 mb-6">Projet suivant</p>
          
          <Link href={`/case-study/${nextStudy.slug}`} className="group block">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="flex-1">
                <h3 className="font-serif text-6xl font-light text-gray-950 group-hover:text-[#C9826B] transition-colors leading-tight">
                  {nextStudy.title}
                </h3>
                <p className="mt-8 text-2xl text-gray-600 leading-relaxed">
                  {nextStudy.subtitle || nextStudy.highlights}
                </p>
              </div>

              <div className="flex items-center gap-6 text-[#C9826B] font-medium text-2xl group-hover:gap-8 transition-all">
                Découvrir ce projet
                <ArrowRight size={36} className="group-hover:translate-x-3 transition-transform" />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ==================== FINAL CTA ==================== */}
      <section className="py-28 bg-[#0a0906] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-7xl font-light leading-tight mb-10">
            Votre projet mérite<br />la même exigence
          </h2>
          <p className="text-2xl text-white/75 mb-14 max-w-2xl mx-auto">
            Discutons ensemble de vos défis géologiques et techniques complexes.
          </p>
          
          <Link 
            href="/contact"
            className="inline-flex items-center gap-6 px-16 py-8 bg-[#C9826B] hover:bg-[#E89A7A] text-[#0a0906] rounded-3xl text-2xl font-medium transition-all hover:shadow-2xl"
          >
            Lancer votre projet avec nous
            <ArrowRight size={30} />
          </Link>
        </div>
      </section>
    </>
  )
}