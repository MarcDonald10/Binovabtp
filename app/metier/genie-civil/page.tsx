'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Landmark, Cog, Award, Users, Zap, Building2 } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 70 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.23, 1, 0.32, 1], delay },
  }),
}

export default function GenieCivilPage() {
  return (
    <>
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative min-h-[90vh] flex items-center bg-[#0a0906] text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a392ad40?q=80&w=2070')`, // Pont iconique / ouvrage d'art
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />

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
              GÉNIE CIVIL & OUVRAGES D’ART
              <div className="h-px w-16 bg-current" />
            </motion.div>

            <motion.h1 
              variants={fadeUp}
              custom={0.1}
              className="font-serif text-[clamp(54px,8.5vw,92px)] leading-[1.02] font-light mb-8"
            >
              Bâtir l’avenir<br />
              avec <span className="text-[#E89A7A]">excellence structurelle</span>.
            </motion.h1>

            <motion.p 
              variants={fadeUp}
              custom={0.3}
              className="max-w-3xl text-2xl text-white/90 font-light leading-relaxed"
            >
              Nous concevons et réalisons des ouvrages d’art et infrastructures complexes 
              qui allient performance technique, durabilité et élégance architecturale.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ==================== STATS ==================== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "847", label: "Projets Livrés", desc: "En 28 ans d’expertise" },
              { value: "€8.5B", label: "Valeur Totale", desc: "D’ouvrages réalisés" },
              { value: "99.2%", label: "Taux de Succès", desc: "En délai et budget" },
              { value: "250+", label: "Experts Permanents", desc: "Spécialisés par discipline" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i * 0.1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="p-10 border border-gray-100 rounded-3xl hover:border-[#C9826B]/30 hover:shadow-2xl transition-all group"
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

      {/* ==================== VISION & EXCELLENCE ==================== */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 className="font-serif text-5xl font-light text-gray-950 mb-8">Notre Vision</h2>
              <p className="text-2xl text-gray-700 leading-relaxed">
                Développer des infrastructures solides et durables à travers les continents. 
                Nous mobilisons les compétences les plus pointues et les outils les plus efficaces 
                pour concevoir et réaliser les ouvrages les plus complexes.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 className="font-serif text-5xl font-light text-gray-950 mb-8">L’Excellence</h2>
              <p className="text-2xl text-gray-700 leading-relaxed">
                L’excellence en génie civil signifie mobiliser les meilleures compétences, 
                les matériaux les plus performants et des méthodes constructives innovantes 
                pour garantir durabilité, sécurité et élégance structurelle.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== DOMAINES D’EXPERTISE ==================== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-6xl font-light text-center mb-16">Nos Domaines d’Expertise</h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: Landmark,
                title: "Ponts & Viaducs",
                desc: "Conception et construction de ponts à longues travées, viaducs urbains et structures complexes en acier, béton précontraint et matériaux innovants."
              },
              {
                icon: Cog,
                title: "Infrastructures Énergétiques",
                desc: "Postes électriques haute tension, fondations d’éoliennes, centrales hydroélectriques et ouvrages techniques liés à la transition énergétique."
              },
              {
                icon: Award,
                title: "Ouvrages Spécialisés",
                desc: "Structures iconiques, monuments historiques, stades et ouvrages exigeant une précision millimétrée et des techniques constructives avancées."
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
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-6xl font-light text-center mb-16">Projets Emblématiques</h2>

          <div className="space-y-16">
            {[
              {
                title: "Pont Longue Portée – Europe",
                desc: "Structure suspendue de 2,8 km franchissant un détroit. Mise en œuvre d’une technique innovante de vérinage hydraulique pour maintenir la navigation maritime.",
                value: "€1.2B"
              },
              {
                title: "Terminal Aéroportuaire Premium",
                desc: "Architecture spectaculaire avec 450 m de portée libre. Défis structuraux résolus grâce à des colonnes multiples et une distribution de charge révolutionnaire.",
                value: "€890M"
              },
              {
                title: "Viaduc Montagneux",
                desc: "Ouvrage de 12 km en zone montagneuse avec 156 piles de hauteurs variables. Adaptation complète au terrain et aux contraintes sismiques.",
                value: "€650M"
              },
            ].map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl p-12 border border-gray-100 hover:shadow-2xl transition-all"
              >
                <div className="flex flex-col md:flex-row justify-between gap-10">
                  <div className="flex-1">
                    <h3 className="text-3xl font-semibold text-gray-900 mb-4">{project.title}</h3>
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
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-6xl font-light mb-10">Notre Approche</h2>
          <p className="text-2xl text-gray-700 leading-relaxed">
            Chaque projet bénéficie d’une approche intégrée : études préalables approfondies, 
            conception paramétrique, simulation 3D avancée, méthodes constructives innovantes 
            et un suivi qualité exemplaire tout au long du cycle de vie de l’ouvrage.
          </p>
        </div>
      </section>

      {/* ==================== FINAL CTA ==================== */}
      <section className="py-28 bg-[#0a0906] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-6xl font-light leading-tight mb-8">
            Votre ouvrage d’art<br />
            mérite l’excellence
          </h2>
          <p className="text-2xl text-white/80 mb-12">
            Confiez-nous vos projets les plus ambitieux en génie civil et ouvrages d’art.
          </p>

          <Link 
            href="/contact"
            className="inline-flex items-center gap-6 px-16 py-8 bg-[#C9826B] hover:bg-[#E89A7A] text-[#0a0906] rounded-3xl text-2xl font-medium transition-all hover:shadow-2xl"
          >
            Discuter de votre projet
            <ArrowRight size={32} />
          </Link>
        </div>
      </section>
    </>
  )
}