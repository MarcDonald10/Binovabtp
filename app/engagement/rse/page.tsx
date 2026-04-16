'use client'

import { motion } from 'framer-motion'
import { Users, Leaf, Award, TrendingUp, Heart, Globe, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const fadeUp = {
  hidden: { opacity: 0, y: 70 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.23, 1, 0.32, 1], delay },
  }),
}

export default function RSEPage() {
  return (
    <>
      {/* ==================== HERO MAGNIFIQUE ==================== */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/85" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p 
              variants={fadeUp}
              custom={0}
              className="text-[#E89A7A] uppercase tracking-[4px] text-sm font-medium mb-6"
            >
              Responsabilité • Durabilité • Excellence
            </motion.p>

            <motion.h1 
              variants={fadeUp}
              custom={0.1}
              className="font-serif text-[clamp(58px,8.5vw,96px)] leading-[1.02] font-light text-white mb-8"
            >
              Nous extrayons le <span className="text-[#E89A7A]">présent</span>,<br />
              en préservant <span className="text-[#E89A7A]">l’avenir</span>.
            </motion.h1>

            <motion.p 
              variants={fadeUp}
              custom={0.3}
              className="max-w-3xl mx-auto text-2xl text-white/90 font-light leading-relaxed"
            >
              Une approche géologique responsable où performance économique, 
              protection environnementale et développement humain avancent ensemble.
            </motion.p>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/70 flex flex-col items-center gap-2"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 3.5, repeat: Infinity }}
        >
          <span className="text-xs tracking-widest">DÉCOUVRIR NOS ENGAGEMENTS</span>
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/60 to-transparent" />
        </motion.div>
      </section>

      {/* ==================== STATS – Organisation claire ==================== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl font-light text-gray-950">Chiffres Clés</h2>
            <p className="text-gray-600 mt-4 text-lg">Notre engagement se mesure au quotidien</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "250+", label: "Collaborateurs", desc: "Accompagnés et formés en continu" },
              { number: "100%", label: "ISO 9001 & 14001", desc: "Qualité et management environnemental" },
              { number: "50+", label: "Projets communautaires", desc: "Menés chaque année" },
              { number: "2M€", label: "Investissement RSE", desc: "Annuel dédié à la durabilité" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i * 0.1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group p-10 bg-white border border-gray-100 rounded-3xl hover:border-[#C9826B]/30 hover:shadow-2xl transition-all duration-500"
              >
                <div className="text-7xl font-serif font-light text-[#C9826B] mb-6 transition-transform group-hover:scale-110">
                  {stat.number}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{stat.label}</h3>
                <p className="text-gray-600">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== ENGAGEMENTS – Magnifique & Organisé ==================== */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-6xl font-light text-gray-950 mb-4">Nos Engagements Stratégiques</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trois piliers fondamentaux qui guident toutes nos opérations géologiques
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: Users,
                title: "Capital Humain",
                desc: "Développement professionnel, bien-être, égalité des chances et formation continue en géosciences pour nos équipes.",
                color: "from-blue-500 to-cyan-600"
              },
              {
                icon: Leaf,
                title: "Excellence Environnementale",
                desc: "Restauration des sites, reforestation native, préservation de la biodiversité et réduction mesurée de notre empreinte carbone.",
                color: "from-emerald-500 to-teal-600"
              },
              {
                icon: Award,
                title: "Gouvernance Responsable",
                desc: "Transparence totale, conformité aux standards internationaux (IRMA, GRI) et dialogue permanent avec toutes les parties prenantes.",
                color: "from-amber-500 to-orange-600"
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i * 0.15}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group bg-white rounded-3xl p-12 border border-gray-100 hover:border-[#C9826B]/20 hover:shadow-2xl transition-all duration-700"
              >
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-10 text-white shadow-xl group-hover:scale-110 transition-transform`}>
                  <item.icon size={42} />
                </div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-6">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed text-[17px]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== INITIATIVES – Organisation visuelle ==================== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-6xl font-light">Initiatives Concrètes</h2>
            <p className="mt-4 text-gray-600 text-lg">Des actions tangibles aux résultats mesurables</p>
          </div>

          <div className="space-y-14">
            {[
              {
                icon: TrendingUp,
                title: "Programme Éducation & Bourses d’Études",
                desc: "Attribution de plus de 25 bourses annuelles aux jeunes des communautés locales et enfants de collaborateurs, avec priorité aux filières scientifiques et géologiques.",
              },
              {
                icon: Heart,
                title: "Santé & Sécurité des Équipes Terrain",
                desc: "Programme médical avancé, suivi psychologique, formation aux risques géotechniques et ergonomie des postes sur site.",
              },
              {
                icon: Globe,
                title: "Reforestation & Régénération Écologique",
                desc: "Plantation annuelle de plus de 12 000 arbres d’espèces locales, suivi scientifique de la biodiversité et réhabilitation complète des sites après exploitation.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col md:flex-row gap-12 items-center bg-gray-50 rounded-3xl p-10 md:p-14 group"
              >
                <div className="flex-shrink-0 w-28 h-28 rounded-3xl bg-white shadow-xl flex items-center justify-center text-[#C9826B] group-hover:rotate-6 transition-transform">
                  <item.icon size={52} />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-semibold text-gray-900 mb-5">{item.title}</h3>
                  <p className="text-gray-700 text-[17.5px] leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA FINAL – Magnifique ==================== */}
      <section className="py-28 bg-[#0a0906] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-6xl md:text-7xl font-light leading-tight mb-8"
          >
            Ensemble, construisons<br />un avenir responsable
          </motion.h2>

          <p className="text-2xl text-white/80 mb-12 max-w-2xl mx-auto">
            Nous croyons que l’excellence géologique et la responsabilité durable ne sont pas contradictoires — elles sont indissociables.
          </p>

          <Link 
            href="/contact"
            className="group inline-flex items-center gap-6 px-16 py-8 bg-[#C9826B] hover:bg-[#E89A7A] text-[#0a0906] rounded-3xl text-2xl font-medium transition-all hover:shadow-2xl"
          >
            Rejoignez notre engagement RSE
            <ArrowRight className="group-hover:translate-x-3 transition-transform" size={32} />
          </Link>
        </div>
      </section>
    </>
  )
}