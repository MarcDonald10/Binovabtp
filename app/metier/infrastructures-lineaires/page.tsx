'use client'

import { motion, cubicBezier } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Train, Waypoints, Zap, TrendingUp, Award, Globe } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 70 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: cubicBezier(0.23, 1, 0.32, 1), delay },
  }),
}

export default function InfrastructuresLineairesPage() {
  return (
    <>
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-[#0a0906] text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1492144534652-916f4b6c3b2e?q=80&w=2070')`, // Image moderne d'infrastructure linéaire (pont + route + rail)
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black/90" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
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
              INFRASTRUCTURES LINÉAIRES
              <div className="h-px w-16 bg-current" />
            </motion.div>

            <motion.h1 
              variants={fadeUp}
              custom={0.1}
              className="font-serif text-[clamp(54px,8.5vw,92px)] leading-[1.02] font-light mb-8"
            >
              Relier les territoires.<br />
              Transformer les vies.
            </motion.h1>

            <motion.p 
              variants={fadeUp}
              custom={0.3}
              className="max-w-3xl text-2xl text-white/90 font-light leading-relaxed"
            >
              Routes, voies ferrées, réseaux énergétiques et infrastructures de transport : 
              nous concevons et réalisons les grands corridors de mobilité et de développement territorial.
            </motion.p>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/70 flex flex-col items-center"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 3.5, repeat: Infinity }}
        >
          <span className="text-xs tracking-widest">CONNECTER AUJOURD’HUI, DÉVELOPPER DEMAIN</span>
          <div className="mt-3 w-px h-16 bg-gradient-to-b from-transparent via-white/60 to-transparent" />
        </motion.div>
      </section>

      {/* ==================== STATS ==================== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "45k+", label: "Kilomètres construits", desc: "Routes, rails et réseaux énergétiques" },
              { value: "2B+", label: "Personnes connectées", desc: "Accès amélioré à la mobilité" },
              { value: "€78B", label: "Valeur des projets", desc: "Infrastructures linéaires réalisées" },
              { value: "12", label: "Pays d’intervention", desc: "Présence internationale" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i * 0.1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="p-10 bg-white border border-gray-100 rounded-3xl hover:border-[#C9826B]/30 hover:shadow-2xl transition-all group"
              >
                <div className="text-6xl font-serif font-light text-[#C9826B] mb-6 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{stat.label}</h3>
                <p className="text-gray-600">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SPÉCIALITÉS ==================== */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-6xl font-light text-gray-950">Nos Spécialités</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: Train,
                title: "Réseaux Ferroviaires",
                desc: "Lignes à grande vitesse, métros, tramways et réseaux régionaux. Plus de 15 000 km construits avec les technologies les plus avancées."
              },
              {
                icon: Waypoints,
                title: "Routes & Autoroutes",
                desc: "Réseaux routiers modernes, corridors de mobilité douce, autoroutes intelligentes et infrastructures résilientes."
              },
              {
                icon: Zap,
                title: "Réseaux Énergétiques",
                desc: "Lignes haute tension, pipelines, réseaux de distribution d’énergie renouvelable et infrastructures de transport d’énergie."
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i * 0.15}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white p-12 rounded-3xl border border-gray-100 hover:border-[#C9826B]/30 hover:shadow-2xl transition-all group"
              >
                <div className="w-20 h-20 rounded-2xl bg-[#C9826B]/10 flex items-center justify-center mb-10 group-hover:bg-[#C9826B] group-hover:text-white transition-all">
                  <item.icon size={42} />
                </div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-6">{item.title}</h3>
                <p className="text-gray-700 text-[17px] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PROJETS EMBLÉMATIQUES ==================== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-6xl font-light text-center mb-16">Projets de Connectivité Emblématiques</h2>

          <div className="space-y-12 max-w-5xl mx-auto">
            {[
              {
                title: "Corridor Ferroviaire Alpes-Méditerranée",
                location: "France • Italie • Slovénie",
                value: "€8.9B",
                desc: "1 400 km de lignes à grande vitesse (300 km/h). Électrification complète, gares modernes et intermodalité avancée."
              },
              {
                title: "Extensions du Métro du Caire",
                location: "Égypte – Phases 3 & 4",
                value: "€4.2B",
                desc: "250 km supplémentaires. Capacité de 5 millions de passagers par jour. Signalisation CBTC et accessibilité PMR."
              },
              {
                title: "Autoroute Transafricaine TAO",
                location: "Sénégal jusqu’au Nigeria",
                value: "€5.8B",
                desc: "3 200 km de routes à 4 voies. Intégration régionale et développement économique des zones traversées."
              },
            ].map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-50 rounded-3xl p-12 md:p-16 border border-gray-100 hover:border-[#C9826B]/30 transition-all"
              >
                <div className="flex flex-col md:flex-row justify-between gap-10">
                  <div className="flex-1">
                    <h3 className="text-3xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-6">{project.location}</p>
                    <p className="text-gray-700 text-[17.5px] leading-relaxed">{project.desc}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-[#C9826B] text-4xl font-light font-serif">{project.value}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== APPROCHE ==================== */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-6xl font-light text-center mb-16">Connecter Responsablement</h2>

          <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {[
              {
                icon: Globe,
                title: "Planification Stratégique",
                desc: "Analyses coût-bénéfice, études d’impact socio-économique et engagement des communautés locales dès la phase de conception."
              },
              {
                icon: TrendingUp,
                title: "Construction Agile",
                desc: "Méthodes de construction modernes, minimisation des perturbations de trafic et phasage intelligent des travaux."
              },
              {
                icon: Award,
                title: "Exploitation Durable",
                desc: "Maintenance prédictive, gestion intelligente du trafic et adaptation continue aux besoins futurs de mobilité."
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i * 0.15}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white p-12 rounded-3xl border border-gray-100 hover:border-[#C9826B]/30 hover:shadow-2xl transition-all group"
              >
                <div className="w-20 h-20 rounded-2xl bg-[#C9826B]/10 flex items-center justify-center mb-10 group-hover:bg-[#C9826B] group-hover:text-white transition-all">
                  <item.icon size={42} />
                </div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-6">{item.title}</h3>
                <p className="text-gray-700 text-[17px] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FINAL CTA ==================== */}
      <section className="py-28 bg-[#0a0906] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-6xl font-light leading-tight mb-8">
            Relier les territoires.<br />
            Développer les nations.
          </h2>
          <p className="text-2xl text-white/80 mb-12">
            45 000+ km de réseaux construits. Plus de 2 milliards de personnes connectées.
          </p>

          <Link 
            href="/contact"
            className="inline-flex items-center gap-6 px-16 py-8 bg-[#C9826B] hover:bg-[#E89A7A] text-[#0a0906] rounded-3xl text-2xl font-medium transition-all hover:shadow-2xl"
          >
            Discuter de votre projet d’infrastructure
            <ArrowRight size={32} />
          </Link>
        </div>
      </section>
    </>
  )
}