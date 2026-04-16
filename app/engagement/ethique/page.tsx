'use client'

import { motion } from 'framer-motion'
import { Gavel, Shield, Users, Eye, Handshake, TrendingUp, Scale, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const fadeUp = {
  hidden: { opacity: 0, y: 70 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.23, 1, 0.32, 1], delay },
  }),
}

export default function EthiquePage() {
  return (
    <>
      {/* ==================== HERO MAGNIFIQUE ==================== */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070')`, // Image élégante représentant justice, transparence et intégrité
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/75 to-black/90" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              variants={fadeUp}
              custom={0}
              className="inline-flex items-center gap-4 text-[#E89A7A] tracking-[4px] text-sm font-medium mb-6"
            >
              <div className="h-px w-16 bg-current" />
              INTÉGRITÉ & TRANSPARENCE
              <div className="h-px w-16 bg-current" />
            </motion.div>

            <motion.h1 
              variants={fadeUp}
              custom={0.1}
              className="font-serif text-[clamp(56px,8.5vw,94px)] leading-[1.02] font-light text-white mb-8"
            >
              L’intégrité n’est pas<br />
              une option. C’est notre <span className="text-[#E89A7A]">fondation</span>.
            </motion.h1>

            <motion.p 
              variants={fadeUp}
              custom={0.3}
              className="max-w-3xl mx-auto text-2xl text-white/90 font-light leading-relaxed"
            >
              Nous plaçons l’éthique au cœur de toutes nos décisions, 
              car la confiance de nos partenaires et communautés est notre bien le plus précieux.
            </motion.p>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/70 flex flex-col items-center"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 3.5, repeat: Infinity }}
        >
          <span className="text-xs tracking-widest">NOS VALEURS FONDAMENTALES</span>
          <div className="mt-3 w-px h-16 bg-gradient-to-b from-transparent via-white/60 to-transparent" />
        </motion.div>
      </section>

      {/* ==================== VALEURS FONDAMENTALES ==================== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-6xl font-light text-gray-950">Nos Valeurs Fondamentales</h2>
            <p className="text-gray-600 mt-4 text-lg">Les principes qui guident chacune de nos actions</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: Gavel,
                title: "Conformité & Légalité",
                desc: "Respect absolu des lois nationales et internationales. Audits réguliers et conformité stricte aux conventions anti-corruption.",
              },
              {
                icon: Eye,
                title: "Transparence Totale",
                desc: "Communication claire et honnête avec toutes les parties prenantes. Publication annuelle de nos rapports d’éthique et de conformité.",
              },
              {
                icon: Handshake,
                title: "Partenariats Responsables",
                desc: "Sélection rigoureuse de nos fournisseurs et sous-traitants basée sur des critères éthiques, sociaux et environnementaux stricts.",
              },
            ].map((value, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i * 0.1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white p-12 rounded-3xl border border-gray-100 hover:border-[#C9826B]/30 hover:shadow-2xl transition-all group"
              >
                <div className="w-20 h-20 rounded-2xl bg-[#C9826B]/10 flex items-center justify-center mb-10 group-hover:bg-[#C9826B] group-hover:text-white transition-all">
                  <value.icon size={42} />
                </div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-6">{value.title}</h3>
                <p className="text-gray-700 text-[17px] leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CODE DE CONDUITE ==================== */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-6xl font-light text-gray-950">Notre Code de Conduite</h2>
            <p className="text-gray-600 mt-4 text-lg">Des engagements concrets et non négociables</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Shield,
                title: "Lutte Anti-Corruption",
                desc: "Tolérance zéro envers toute forme de corruption, pots-de-vin ou conflits d’intérêts. Formation obligatoire annuelle pour tous les collaborateurs.",
              },
              {
                icon: Users,
                title: "Respect des Droits Humains",
                desc: "Interdiction formelle du travail forcé, du travail des enfants et de toute discrimination. Respect des conventions internationales (OIT).",
              },
              {
                icon: Eye,
                title: "Ligne d’Alerte Éthique",
                desc: "Mécanisme confidentiel et sécurisé disponible 24/7 permettant à chacun de signaler, en toute protection, toute violation éthique.",
              },
              {
                icon: TrendingUp,
                title: "Excellence & Intégrité Professionnelle",
                desc: "Engagement envers la compétence, l’honnêteté intellectuelle et le respect des engagements pris auprès de nos clients et partenaires.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i * 0.12}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex gap-8 p-10 bg-white rounded-3xl border border-gray-100 hover:border-[#C9826B]/30 group"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white shadow flex items-center justify-center text-[#C9826B] group-hover:scale-110 transition-transform">
                  <item.icon size={38} />
                </div>
                <div>
                  <h3 className="text-3xl font-semibold text-gray-900 mb-5">{item.title}</h3>
                  <p className="text-gray-700 text-[17.5px] leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== GOUVERNANCE ==================== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-6xl font-light text-gray-950">Gouvernance et Contrôle</h2>
          </div>

          <div className="bg-gray-50 rounded-3xl p-12 md:p-16 border border-gray-100">
            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  title: "Comité d’Éthique",
                  items: [
                    "Audit interne trimestriel",
                    "Gestion des alertes éthiques",
                    "Formation continue du personnel",
                    "Recommandations stratégiques"
                  ]
                },
                {
                  title: "Contrôle des Partenaires",
                  items: [
                    "Évaluation éthique des fournisseurs",
                    "Audits SSE & RSE réguliers",
                    "Suivi annuel des sous-traitants",
                    "Clause d’exclusion en cas de violation"
                  ]
                },
                {
                  title: "Transparence & Reporting",
                  items: [
                    "Rapport annuel d’éthique public",
                    "Politiques écrites accessibles",
                    "Certifications externes",
                    "Déclaration de conformité"
                  ]
                },
              ].map((section, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  custom={i * 0.15}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-semibold text-gray-900 mb-8">{section.title}</h3>
                  <ul className="space-y-4">
                    {section.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-4 text-gray-700">
                        <div className="mt-1.5 w-2 h-2 rounded-full bg-[#C9826B] flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CTA FINAL ==================== */}
      <section className="py-28 bg-[#0a0906] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-6xl font-light leading-tight mb-8">
            La confiance se construit<br />sur l’intégrité
          </h2>
          <p className="text-2xl text-white/80 mb-12">
            Nous nous engageons à maintenir les plus hauts standards éthiques dans toutes nos opérations.
          </p>

          <Link 
            href="/contact"
            className="group inline-flex items-center gap-6 px-16 py-8 bg-[#C9826B] hover:bg-[#E89A7A] text-[#0a0906] rounded-3xl text-2xl font-medium transition-all hover:shadow-2xl"
          >
            Discuter de nos standards éthiques
            <ArrowRight className="group-hover:translate-x-3 transition-transform" size={32} />
          </Link>
        </div>
      </section>
    </>
  )
}