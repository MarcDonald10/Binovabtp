'use client'

import { motion } from 'framer-motion'
import { Shield, CheckCircle2, AlertCircle, Users, Target, Zap, Award, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const fadeUp = {
  hidden: { opacity: 0, y: 70 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.23, 1, 0.32, 1], delay },
  }),
}

export default function SecuriteSantePage() {
  return (
    <>
      {/* ==================== HERO MAGNIFIQUE ==================== */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1581092160607-5d9c2d6c4b6e?q=80&w=2070')`, // Image professionnelle de sécurité minière / chantier sécurisé
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
              SÉCURITÉ & SANTÉ
              <div className="h-px w-16 bg-current" />
            </motion.div>

            <motion.h1 
              variants={fadeUp}
              custom={0.1}
              className="font-serif text-[clamp(56px,8.5vw,94px)] leading-[1.02] font-light text-white mb-8"
            >
              Zéro accident.<br />
              Zéro compromis.
            </motion.h1>

            <motion.p 
              variants={fadeUp}
              custom={0.3}
              className="max-w-3xl mx-auto text-2xl text-white/90 font-light leading-relaxed"
            >
              La sécurité n’est pas une priorité parmi d’autres.<br />
              C’est la condition première de chacune de nos opérations géologiques.
            </motion.p>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/70 flex flex-col items-center"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 3.5, repeat: Infinity }}
        >
          <span className="text-xs tracking-widest">NOTRE CULTURE DE SÉCURITÉ</span>
          <div className="mt-3 w-px h-16 bg-gradient-to-b from-transparent via-white/60 to-transparent" />
        </motion.div>
      </section>

      {/* ==================== STATS – Design Premium ==================== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl font-light text-gray-950">Nos Résultats</h2>
            <p className="text-gray-600 mt-4 text-lg">Une culture de sécurité éprouvée depuis plus de 28 ans</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "28", unit: "ans", label: "Sans accident mortel", desc: "Record de sécurité exemplaire" },
              { number: "ISO", unit: "45001", label: "Certification SSE", desc: "Management de la Santé & Sécurité" },
              { number: "150+", label: "Experts SSE", desc: "Ingénieurs et techniciens dédiés" },
              { number: "500", unit: "h", label: "Formation par an", desc: "Par collaborateur" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i * 0.1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group p-10 bg-white border border-gray-100 rounded-3xl hover:border-[#C9826B]/30 hover:shadow-2xl transition-all"
              >
                <div className="text-6xl font-serif font-light text-[#C9826B] mb-6 group-hover:scale-110 transition-transform">
                  {stat.number}<span className="text-4xl">{stat.unit}</span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{stat.label}</h3>
                <p className="text-gray-600">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== LES 4 PILIERS – Magnifique ==================== */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-6xl font-light text-gray-950 mb-4">Les 4 Piliers de Notre Excellence SSE</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Une approche structurée, rigoureuse et humaine de la sécurité
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Shield,
                title: "Prévention Proactive",
                desc: "Identification systématique des risques géotechniques, évaluations quotidiennes et plans d’action préventifs adaptés à chaque site.",
              },
              {
                icon: Users,
                title: "Culture de Sécurité Partagée",
                desc: "Chaque collaborateur est acteur de sa propre sécurité et de celle des autres. Formation continue et sensibilisation quotidienne.",
              },
              {
                icon: AlertCircle,
                title: "Conformité & Audits Rigoureux",
                desc: "Audits internes et externes réguliers, conformité stricte aux normes internationales (ISO 45001, IRMA) et vérifications terrain.",
              },
              {
                icon: Zap,
                title: "Réaction Immédiate & Apprentissage",
                desc: "Enquêtes approfondies après tout incident, débriefings collectifs et mise en œuvre rapide des mesures correctives.",
              },
            ].map((pillar, i) => (
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
                  <pillar.icon size={42} />
                </div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-6">{pillar.title}</h3>
                <p className="text-gray-700 text-[17px] leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== NOS PROGRAMMES ==================== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-6xl font-light">Nos Programmes Phares</h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-10">
            {[
              {
                icon: CheckCircle2,
                title: "Formation SSE Obligatoire & Continue",
                desc: "Plus de 500 heures de formation par collaborateur et par an. Modules adaptés aux risques spécifiques du terrain (géotechnique, hauteur, machines lourdes, etc.).",
              },
              {
                icon: Users,
                title: "Surveillance Médicale Avancée",
                desc: "Examens médicaux périodiques, suivi personnalisé, prévention des TMS et des maladies professionnelles liées à l’environnement minier.",
              },
              {
                icon: Target,
                title: "Objectif Zéro Accident",
                desc: "Taux de fréquence inférieur à 0,5 pour 1 million d’heures travaillées. Système de reporting transparent et culture du « Stop Work ».",
              },
            ].map((program, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex gap-8 p-10 bg-gray-50 rounded-3xl border border-gray-100 hover:border-[#C9826B]/30 group"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white shadow flex items-center justify-center text-[#C9826B] group-hover:scale-110 transition-transform">
                  <program.icon size={38} />
                </div>
                <div>
                  <h3 className="text-3xl font-semibold text-gray-900 mb-5">{program.title}</h3>
                  <p className="text-gray-700 text-[17.5px] leading-relaxed">{program.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA FINAL ==================== */}
      <section className="py-28 bg-[#0a0906] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-6xl font-light leading-tight mb-8">
            La sécurité est notre valeur<br />la plus précieuse
          </h2>
          <p className="text-2xl text-white/80 mb-12">
            Rejoignez une équipe où chaque collaborateur est protégé, formé et valorisé.
          </p>

          <Link 
            href="/contact"
            className="group inline-flex items-center gap-6 px-16 py-8 bg-[#C9826B] hover:bg-[#E89A7A] text-[#0a0906] rounded-3xl text-2xl font-medium transition-all hover:shadow-2xl"
          >
            Nous rejoindre ou en savoir plus
            <ArrowRight className="group-hover:translate-x-3 transition-transform" size={32} />
          </Link>
        </div>
      </section>
    </>
  )
}