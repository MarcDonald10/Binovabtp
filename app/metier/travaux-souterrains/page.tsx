'use client'

import { motion, cubicBezier } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Zap, Target, Shield, Users, Award, TrendingUp } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 70 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: cubicBezier(0.23, 1, 0.32, 1), delay },
  }),
}

export default function TravauxSouterrainMetierPage() {
  return (
    <>
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-[#0a0906] text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1581092160607-5d9c2d6c4b6e?q=80&w=2070')`, // Image tunnel / travaux souterrains
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
              TRAVAUX SOUTERRAINS
              <div className="h-px w-16 bg-current" />
            </motion.div>

            <motion.h1 
              variants={fadeUp}
              custom={0.1}
              className="font-serif text-[clamp(54px,8.5vw,92px)] leading-[1.02] font-light mb-8"
            >
              Maîtriser la profondeur.<br />
              Construire l’avenir.
            </motion.h1>

            <motion.p 
              variants={fadeUp}
              custom={0.3}
              className="max-w-3xl text-2xl text-white/90 font-light leading-relaxed"
            >
              Grâce à nos équipes expérimentées et à notre maîtrise des techniques les plus avancées 
              (tunneliers, minage de précision, soutènements complexes), nous intervenons sur tous types 
              de terrains et dans les conditions les plus exigeantes.
            </motion.p>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/70 flex flex-col items-center"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 3.5, repeat: Infinity }}
        >
          <span className="text-xs tracking-widest">EXPLORER EN PROFONDEUR</span>
          <div className="mt-3 w-px h-16 bg-gradient-to-b from-transparent via-white/60 to-transparent" />
        </motion.div>
      </section>

      {/* ==================== STATS ==================== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "156", label: "Tunnels complétés", desc: "Tous types et géologies" },
              { value: "850+", label: "Kilomètres creusés", desc: "Longueur totale réalisée" },
              { value: "28 ans", label: "Sans accident mortel", desc: "Record de sécurité exemplaire" },
              { value: "€45B", label: "Valeur des projets", desc: "Travaux souterrains" },
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

      {/* ==================== DOMAINES DE MAÎTRISE ==================== */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-6xl font-light text-gray-950">Nos Domaines de Maîtrise</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: Zap,
                title: "Tunnelage par Tunnelier (TBM)",
                desc: "Tunnel boring machines de 6 à 12 mètres de diamètre. Percement en géologies complexes avec gestion des pressions et consolidations adaptées."
              },
              {
                icon: Target,
                title: "Excavation Contrôlée & Minage",
                desc: "Minage de précision, utilisation d’explosifs écologiques, contrôle strict des vibrations et protection des structures environnantes."
              },
              {
                icon: Shield,
                title: "Géotechnique & Soutènement Avancé",
                desc: "Soutènements complexes, contrôle des tassements, consolidation sol-roche et prévention des effondrements en environnement urbain ou montagneux."
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
          <h2 className="font-serif text-6xl font-light text-center mb-16">Projets Emblématiques</h2>

          <div className="space-y-12 max-w-5xl mx-auto">
            {[
              {
                title: "Lyon-Turin : Base Tunnel",
                location: "France – Italie",
                value: "€12.5B",
                desc: "Plus long tunnel ferroviaire d’Europe (58 km). Conditions géologiques extrêmes, TBM de 9,58 m et coordination binationale exemplaire."
              },
              {
                title: "Extensions du Métro de Bangkok",
                location: "Thaïlande",
                value: "€3.2B",
                desc: "5 tunnels entrelacés sous une ville ultra-dense. Excavation avec TBM multi-usages et protection rigoureuse des bâtiments environnants."
              },
              {
                title: "Mine d’Or Souterraine – Afrique",
                location: "Burkina Faso",
                value: "€1.8B",
                desc: "Réseau de galeries à plus de 3 500 m de profondeur. 400 000 tonnes/an extraites avec un taux de récupération de 91 % et sécurité maximale."
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
                  <div className="text-right self-start">
                    <div className="text-[#C9826B] text-4xl font-light font-serif">{project.value}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== EXCELLENCE TECHNIQUE ==================== */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-6xl font-light text-center mb-16">Excellence Technique</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Users,
                title: "Équipes Hautement Spécialisées",
                desc: "Plus de 150 ingénieurs et techniciens certifiés en tunnelage. Experts en géologie, hydrogéologie, structures et sismique."
              },
              {
                icon: TrendingUp,
                title: "Monitoring en Temps Réel",
                desc: "Plus de 1 000 capteurs par tunnel. Surveillance continue des déformations, pressions d’eau, vibrations et stabilité."
              },
              {
                icon: Award,
                title: "Gestion des Risques",
                desc: "Plans d’urgence détaillés, simulations d’incidents et protocoles de sécurité renforcés."
              },
              {
                icon: Shield,
                title: "Sécurité Absolue",
                desc: "28 ans sans accident mortel. Ventilation active, systèmes de sauvetage et formations SSE continues."
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i * 0.15}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white p-10 rounded-3xl border border-gray-100 hover:shadow-xl hover:border-[#C9826B]/30 transition-all group"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#C9826B]/10 flex items-center justify-center mb-8 group-hover:bg-[#C9826B] group-hover:text-white transition-all">
                  <item.icon size={36} />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-5">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FINAL CTA ==================== */}
      <section className="py-28 bg-[#0a0906] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-6xl font-light leading-tight mb-8">
            Percer en profondeur.<br />
            Construire avec maîtrise.
          </h2>
          <p className="text-2xl text-white/80 mb-12">
            156 tunnels réalisés • 850+ km creusés • 28 ans de sécurité exemplaire
          </p>

          <Link 
            href="/contact"
            className="inline-flex items-center gap-6 px-16 py-8 bg-[#C9826B] hover:bg-[#E89A7A] text-[#0a0906] rounded-3xl text-2xl font-medium transition-all hover:shadow-2xl"
          >
            Discuter de votre projet souterrain
            <ArrowRight size={32} />
          </Link>
        </div>
      </section>
    </>
  )
}