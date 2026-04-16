'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Building, MapPin, Users, Zap, Leaf, TrendingUp } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 70 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.23, 1, 0.32, 1], delay },
  }),
}

export default function GenieUrbainPage() {
  return (
    <>
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-[#0a0906] text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=2070')`, // Image moderne de ville durable / aménagement urbain
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
              GÉNIE URBAIN
              <div className="h-px w-16 bg-current" />
            </motion.div>

            <motion.h1 
              variants={fadeUp}
              custom={0.1}
              className="font-serif text-[clamp(54px,8.5vw,92px)] leading-[1.02] font-light mb-8"
            >
              Donner un visage<br />
              unique à nos <span className="text-[#E89A7A]">villes</span>.
            </motion.h1>

            <motion.p 
              variants={fadeUp}
              custom={0.3}
              className="max-w-3xl text-2xl text-white/90 font-light leading-relaxed"
            >
              Nous accompagnons collectivités, institutions et promoteurs dans la création 
              d’espaces urbains durables, intelligents et humains.
            </motion.p>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/70 flex flex-col items-center"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 3.5, repeat: Infinity }}
        >
          <span className="text-xs tracking-widest">DÉCOUVRIR NOS RÉALISATIONS URBAINES</span>
          <div className="mt-3 w-px h-16 bg-gradient-to-b from-transparent via-white/60 to-transparent" />
        </motion.div>
      </section>

      {/* ==================== STATS ==================== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "156+", label: "Projets Urbains", desc: "Réalisés sur tous les continents" },
              { value: "15M+", label: "Personnes Impactées", desc: "Cadre de vie amélioré" },
              { value: "€32B", label: "Valeur Totale", desc: "Des projets développés" },
              { value: "90%", label: "Certifications Vertes", desc: "Projets LEED / BREEAM" },
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

      {/* ==================== DOMAINES D’EXPERTISE ==================== */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-6xl font-light text-gray-950">Nos Domaines d’Expertise</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: Building,
                title: "Projets Mixtes",
                desc: "Conception et réalisation de quartiers mixtes intégrant logements, commerces, bureaux et espaces publics. Création de lieux de vie dynamiques et inclusifs."
              },
              {
                icon: MapPin,
                title: "Aménagements Urbains",
                desc: "Rénovation de quartiers anciens, réaménagement d’espaces publics et valorisation du patrimoine historique tout en intégrant les besoins contemporains."
              },
              {
                icon: Leaf,
                title: "Villes Vertes & Durables",
                desc: "Développement d’espaces verts, parcs urbains, corridors écologiques et solutions nature-based pour une ville plus respirable et résiliente."
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

      {/* ==================== TRANSFORMATIONS URBAINES ==================== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-6xl font-light text-center mb-16">Transformations Urbaines Emblématiques</h2>

          <div className="space-y-12 max-w-5xl mx-auto">
            {[
              {
                title: "Métropole Durable – Singapour",
                desc: "Réaménagement sur 700 hectares d’un quartier central avec 50 000 logements certifiés LEED Platinum, corridors verts continus et mobilité zéro carbone.",
                value: "€2.8B"
              },
              {
                title: "Revitalisation du Caire Historique",
                desc: "Projet mêlant préservation du patrimoine UNESCO et infrastructures modernes. Amélioration du cadre de vie pour plus de 200 000 habitants.",
                value: "€1.5B"
              },
              {
                title: "Barcelona Green Belt",
                desc: "Création de 85 km de parcs linéaires et forêts urbaines. Amélioration significative de la qualité de l’air et réduction de l’îlot de chaleur urbain.",
                value: "€680M"
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
                    <h3 className="text-3xl font-semibold text-gray-900 mb-4">{project.title}</h3>
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

      {/* ==================== NOTRE APPROCHE ==================== */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-6xl font-light text-center mb-16">Notre Approche Participative</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Users,
                title: "Consultation Citoyenne",
                desc: "Ateliers participatifs, sondages et implication directe des communautés à chaque phase du projet."
              },
              {
                icon: Leaf,
                title: "Durabilité Intégrée",
                desc: "Objectifs Net-Zéro, biodiversité positive, économie circulaire et solutions nature-based."
              },
              {
                icon: Zap,
                title: "Smart City & Innovation",
                desc: "Intégration de technologies IoT, éclairage intelligent, gestion du trafic et systèmes énergétiques distribués."
              },
              {
                icon: TrendingUp,
                title: "Valeur Économique & Sociale",
                desc: "Création d’emplois locaux, augmentation de la valeur immobilière et renforcement de l’attractivité des territoires."
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
            Construisons ensemble<br />
            la ville de demain
          </h2>
          <p className="text-2xl text-white/80 mb-12">
            156 projets urbains réalisés. 15 millions de personnes impactées. Des villes plus vertes, plus humaines et plus intelligentes.
          </p>

          <Link 
            href="/contact"
            className="inline-flex items-center gap-6 px-16 py-8 bg-[#C9826B] hover:bg-[#E89A7A] text-[#0a0906] rounded-3xl text-2xl font-medium transition-all hover:shadow-2xl"
          >
            Parlons de votre projet urbain
            <ArrowRight size={32} />
          </Link>
        </div>
      </section>
    </>
  )
}