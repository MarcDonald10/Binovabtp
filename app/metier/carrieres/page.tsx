'use client'

import { motion, cubicBezier } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Pickaxe, Globe, Leaf, Shield, Users, TrendingUp } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 70 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: cubicBezier(0.23, 1, 0.32, 1), delay },
  }),
}

export default function CarrieresMeterPage() {
  return (
    <>
      {/* ==================== HERO MAGNIFIQUE ==================== */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-[#0a0906] text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1581092160607-5d9c2d6c4b6e?q=80&w=2070')`, // Image carrière moderne / mine responsable
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
              CARRIÈRES & EXPLOITATION
              <div className="h-px w-16 bg-current" />
            </motion.div>

            <motion.h1 
              variants={fadeUp}
              custom={0.1}
              className="font-serif text-[clamp(54px,8.5vw,92px)] leading-[1.02] font-light mb-8"
            >
              Extraire avec <span className="text-[#E89A7A]">responsabilité</span>.<br />
              Construire avec <span className="text-[#E89A7A]">excellence</span>.
            </motion.h1>

            <motion.p 
              variants={fadeUp}
              custom={0.3}
              className="max-w-3xl text-2xl text-white/90 font-light leading-relaxed"
            >
              Au Cameroun comme à l’international, nous exploitons des carrières et mines 
              avec les plus hauts standards de sécurité, d’environnement et de développement local.
            </motion.p>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/70 flex flex-col items-center"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 3.5, repeat: Infinity }}
        >
          <span className="text-xs tracking-widest">DÉCOUVRIR NOS OPÉRATIONS</span>
          <div className="mt-3 w-px h-16 bg-gradient-to-b from-transparent via-white/60 to-transparent" />
        </motion.div>
      </section>

      {/* ==================== CHIFFRES CLÉS ==================== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl font-light text-gray-950">Nos Performances</h2>
            <p className="text-gray-600 mt-4 text-lg">Une exploitation responsable et performante</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "15M+", label: "Tonnes extraites", desc: "Par an à l’échelle mondiale" },
              { number: "35+", label: "Carrières & Mines", desc: "Opérées sur 3 continents" },
              { number: "91%", label: "Taux de récupération", desc: "Moyenne de nos opérations" },
              { number: "€8.7B", label: "Valeur des projets", desc: "Carrières et mines actives" },
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
                  {stat.number}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{stat.label}</h3>
                <p className="text-gray-600">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== TYPES DE CARRIÈRES ==================== */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-6xl font-light text-gray-950">Nos Domaines d’Exploitation</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: Pickaxe,
                title: "Mines de Métaux Précieux",
                desc: "Or, argent, cuivre, zinc. Extraction souterraine et à ciel ouvert avec des taux de récupération supérieurs à 90% grâce à des technologies de pointe.",
              },
              {
                icon: Globe,
                title: "Carrières de Matériaux",
                desc: "Granulats, pierres concassées, calcaire et sable. Production de plus de 10 millions de tonnes par an pour les grands chantiers de construction et béton.",
              },
              {
                icon: Leaf,
                title: "Exploitation Durable",
                desc: "Modèle d’exploitation responsable : restauration écologique, gestion de l’eau, préservation de la biodiversité et minimisation de l’impact environnemental.",
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

      {/* ==================== OPÉRATIONS MAJEURES ==================== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-6xl font-light text-center mb-16">Opérations Majeures</h2>

          <div className="space-y-12 max-w-5xl mx-auto">
            {[
              {
                title: "Mine d’Or – Burkina Faso",
                location: "Afrique de l’Ouest",
                value: "€1.8B",
                desc: "Extraction souterraine avancée. 400 000 tonnes/an avec un taux de récupération de 91%. Création de plus de 500 emplois locaux directs.",
                tags: ["1200m profondeur", "500+ emplois", "Souterrain"],
              },
              {
                title: "Carrière de Granulats – France",
                location: "Région métropolitaine",
                value: "€280M",
                desc: "Production de 3,2 millions de tonnes par an. Fourniture pour les grands projets d’infrastructure nationale avec une exploitation respectueuse des zones naturelles.",
                tags: ["320 ha", "3.2 Mt/an", "45 ans d’exploitation"],
              },
              {
                title: "Mine de Cuivre – Pérou",
                location: "Amérique du Sud",
                value: "€2.4B",
                desc: "Complexe ciel ouvert + souterrain. Gestion avancée de l’eau et réhabilitation environnementale exemplaire. Plus de 3 500 emplois créés.",
                tags: ["250kt cuivre/an", "3 500+ emplois", "60+ ans"],
              },
            ].map((op, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-50 rounded-3xl p-10 md:p-14 border border-gray-100 hover:border-[#C9826B]/30 transition-all"
              >
                <div className="flex flex-col md:flex-row justify-between gap-8">
                  <div className="flex-1">
                    <h3 className="text-3xl font-semibold text-gray-900 mb-2">{op.title}</h3>
                    <p className="text-gray-600 mb-6">{op.location}</p>
                    <p className="text-gray-700 text-[17.5px] leading-relaxed">{op.desc}</p>
                  </div>

                  <div className="flex-shrink-0">
                    <div className="px-6 py-3 bg-white rounded-2xl text-[#C9826B] font-semibold text-xl mb-8">
                      {op.value}
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {op.tags.map((tag, idx) => (
                        <span key={idx} className="px-4 py-2 bg-white text-sm rounded-xl border border-gray-200">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== EXPLOITATION RESPONSABLE ==================== */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-6xl font-light text-gray-950">Exploitation Responsable</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: Leaf,
                title: "Restauration Écologique",
                desc: "Reforestation systématique et création d’écosystèmes après extraction. Plus de 5 000 hectares restaurés depuis 2010.",
              },
              {
                icon: Shield,
                title: "Gestion Responsable de l’Eau",
                desc: "Traitement avancé, recyclage et réduction de 45% de la consommation. Recharge des nappes phréatiques protégée.",
              },
              {
                icon: Users,
                title: "Développement Local",
                desc: "Priorité aux emplois locaux, formation professionnelle et partage équitable des retombées économiques avec les communautés.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i * 0.15}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white p-12 rounded-3xl border border-gray-100 hover:shadow-2xl hover:border-[#C9826B]/30 transition-all group"
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
            Extraire aujourd’hui.<br />
            Préserver pour demain.
          </h2>
          <p className="text-2xl text-white/80 mb-12">
            15 millions de tonnes par an avec un engagement fort pour l’environnement et les communautés locales.
          </p>

          <Link 
            href="/contact"
            className="inline-flex items-center gap-6 px-16 py-8 bg-[#C9826B] hover:bg-[#E89A7A] text-[#0a0906] rounded-3xl text-2xl font-medium transition-all hover:shadow-2xl"
          >
            Discuter de votre projet d’exploitation
            <ArrowRight size={32} />
          </Link>
        </div>
      </section>
    </>
  )
}