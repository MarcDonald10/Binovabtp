'use client'

import { motion } from 'framer-motion'
import { Leaf, Droplets, Wind, Recycle, TrendingDown, Sprout, ArrowRight, Globe } from 'lucide-react'
import Link from 'next/link'

const fadeUp = {
  hidden: { opacity: 0, y: 70 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.23, 1, 0.32, 1], delay },
  }),
}

export default function EnvironnementPage() {
  return (
    <>
      {/* ==================== HERO MAGNIFIQUE ==================== */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2070')`, // Image nature / reforestation / durabilité
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />

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
              ENVIRONNEMENT & DURABILITÉ
              <div className="h-px w-16 bg-current" />
            </motion.div>

            <motion.h1 
              variants={fadeUp}
              custom={0.1}
              className="font-serif text-[clamp(56px,8.5vw,94px)] leading-[1.02] font-light text-white mb-8"
            >
              Nous ne nous contentons pas<br />
              d’extraire. Nous <span className="text-[#E89A7A]">restaurons</span>.
            </motion.h1>

            <motion.p 
              variants={fadeUp}
              custom={0.3}
              className="max-w-3xl mx-auto text-2xl text-white/90 font-light leading-relaxed"
            >
              Une approche responsable qui allie performance géologique et préservation durable des écosystèmes.
            </motion.p>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/70 flex flex-col items-center"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 3.5, repeat: Infinity }}
        >
          <span className="text-xs tracking-widest">NOTRE ENGAGEMENT ENVIRONNEMENTAL</span>
          <div className="mt-3 w-px h-16 bg-gradient-to-b from-transparent via-white/60 to-transparent" />
        </motion.div>
      </section>

      {/* ==================== ACHIEVEMENTS – Design Premium ==================== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl font-light text-gray-950">Nos Résultats Concrets</h2>
            <p className="text-gray-600 mt-4 text-lg">Des engagements mesurables et vérifiés</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "-60%", label: "Émissions CO₂", desc: "Par rapport au transport routier traditionnel" },
              { number: "ISO", unit: "14001", label: "Management Environnemental", desc: "Certification internationale" },
              { number: "100k", unit: "tonnes", label: "Matériaux recyclés", desc: "Chaque année" },
              { number: "4000+", label: "Hectares protégés", desc: "Biodiversité préservée et restaurée" },
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
                  {stat.number}{stat.unit && <span className="text-4xl">{stat.unit}</span>}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{stat.label}</h3>
                <p className="text-gray-600">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== STRATÉGIE ENVIRONNEMENTALE ==================== */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-6xl font-light text-gray-950">Notre Stratégie Environnementale</h2>
            <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
              Trois axes majeurs pour minimiser notre impact et maximiser notre contribution positive
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: TrendingDown,
                title: "Réduction des Émissions",
                desc: "Objectif Net-Zéro d’ici 2040. Électrification progressive de notre flotte, optimisation logistique et utilisation d’énergies renouvelables sur nos sites.",
              },
              {
                icon: Recycle,
                title: "Économie Circulaire",
                desc: "Valorisation maximale des matériaux : 100 000 tonnes recyclées chaque année. Réutilisation systématique des déblais et démolition sur site.",
              },
              {
                icon: Leaf,
                title: "Protection de la Biodiversité",
                desc: "Plans de conservation avant, pendant et après chaque projet. Plantation de plus de 10 000 arbres par an et restauration active des écosystèmes.",
              },
            ].map((strategy, i) => (
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
                  <strategy.icon size={42} />
                </div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-6">{strategy.title}</h3>
                <p className="text-gray-700 text-[17px] leading-relaxed">{strategy.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== INITIATIVES CONCRÈTES ==================== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-6xl font-light text-gray-950">Initiatives Concrètes</h2>
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            {[
              {
                icon: Droplets,
                title: "Gestion Responsable de l’Eau",
                desc: "Systèmes de récupération, traitement et recyclage des eaux de chantier. Réduction moyenne de 40% de la consommation d’eau sur nos projets.",
              },
              {
                icon: Wind,
                title: "Transition Énergétique",
                desc: "50% de notre énergie provient déjà de sources renouvelables. Objectif : 100% d’ici 2035 grâce à l’installation de panneaux solaires et éoliennes sur site.",
              },
              {
                icon: Sprout,
                title: "Restauration des Écosystèmes",
                desc: "Après chaque projet d’excavation ou d’exploitation, nous réalisons une restauration complète et scientifiquement suivie des sites. Plus de 4 000 hectares restaurés depuis 2010.",
              },
            ].map((init, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col md:flex-row gap-10 items-center bg-gray-50 rounded-3xl p-12 group"
              >
                <div className="flex-shrink-0 w-24 h-24 rounded-3xl bg-white shadow-xl flex items-center justify-center text-[#C9826B] group-hover:rotate-6 transition-transform">
                  <init.icon size={48} />
                </div>
                <div>
                  <h3 className="text-3xl font-semibold text-gray-900 mb-5">{init.title}</h3>
                  <p className="text-gray-700 text-[17.5px] leading-relaxed">{init.desc}</p>
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
            Protéger la planète,<br />un projet à la fois
          </h2>
          <p className="text-2xl text-white/80 mb-12">
            Nous croyons qu’une industrie géologique performante peut et doit être exemplaire sur le plan environnemental.
          </p>

          <Link 
            href="/contact"
            className="group inline-flex items-center gap-6 px-16 py-8 bg-[#C9826B] hover:bg-[#E89A7A] text-[#0a0906] rounded-3xl text-2xl font-medium transition-all hover:shadow-2xl"
          >
            Discuter de nos solutions durables
            <ArrowRight className="group-hover:translate-x-3 transition-transform" size={32} />
          </Link>
        </div>
      </section>
    </>
  )
}