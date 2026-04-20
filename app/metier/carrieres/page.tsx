'use client'

import { motion, cubicBezier } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Pickaxe, Globe, Leaf, Shield, Users, TrendingUp, Droplets, Zap, ChevronRight } from 'lucide-react'

// Add to layout.tsx <head>:
// <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet" />

const ease = cubicBezier(0.23, 1, 0.32, 1)

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease, delay },
  }),
}

// ── Brand tokens ──────────────────────────────────────────────
const R   = '#7A3B1E'   // deep rust (primary)
const RL  = '#1E6B3A'   // light rust (accent)
const AM  = '#E89A7A'   // amber highlight
const BK  = '#0B0B0B'
const LBG = '#F7F3F0'
const TG  = '#6B6B6B'

export default function CarrieresPage() {
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif" }}>

      {/* ══════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════ */}
      <section style={{
        position: 'relative', minHeight: '92vh',
        display: 'flex', alignItems: 'center',
        background: BK, overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070')`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          filter: 'brightness(0.30)',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: `linear-gradient(150deg, rgba(11,11,11,0.90) 40%, rgba(122,59,30,0.50) 100%)`,
        }} />
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0,
          width: 6,
          background: `linear-gradient(to bottom, ${AM}, ${RL})`,
        }} />

        <div style={{ position: 'relative', zIndex: 10, maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>
          <motion.div initial="hidden" animate="visible">

            <motion.div variants={fadeUp} custom={0} style={{
              display: 'inline-flex', alignItems: 'center', gap: 12,
              color: AM, letterSpacing: 4, fontSize: 12, fontWeight: 600,
              textTransform: 'uppercase', marginBottom: 28,
            }}>
              <div style={{ height: 2, width: 40, background: AM }} />
              CARRIÈRES & EXPLOITATION MINIÈRE — BINOVA ROCK BUILDERS
              <div style={{ height: 2, width: 40, background: AM }} />
            </motion.div>

            <motion.h1 variants={fadeUp} custom={0.1} style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(46px, 7.5vw, 88px)',
              fontWeight: 700, lineHeight: 1.05,
              color: '#fff', marginBottom: 28, maxWidth: 860,
            }}>
              Extraire avec<br />
              <span style={{ color: RL }}>responsabilité</span>.
            </motion.h1>

            <motion.p variants={fadeUp} custom={0.25} style={{
              maxWidth: 620, fontSize: 20, color: 'rgba(255,255,255,0.82)',
              fontWeight: 300, lineHeight: 1.7, marginBottom: 48,
            }}>
              Au Cameroun comme à l'international, nous exploitons carrières et mines avec les plus hauts
              standards de sécurité, d'environnement et de développement local.
            </motion.p>

            <motion.div variants={fadeUp} custom={0.38} style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link href="/contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                padding: '16px 36px', borderRadius: 8,
                background: R, color: '#fff',
                fontSize: 16, fontWeight: 600, textDecoration: 'none',
                boxShadow: `0 4px 24px rgba(122,59,30,0.5)`,
                transition: 'background 0.2s, transform 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = RL; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.background = R; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                Parlons de votre projet d'exploitation <ArrowRight size={18} />
              </Link>

              <Link href="#realisations" style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                padding: '16px 36px', borderRadius: 8,
                background: AM, color: BK,
                fontSize: 16, fontWeight: 600, textDecoration: 'none',
                transition: 'opacity 0.2s, transform 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                Voir nos réalisations
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          style={{
            position: 'absolute', bottom: 48, left: '50%', transform: 'translateX(-50%)',
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            color: 'rgba(255,255,255,0.6)',
          }}
          animate={{ y: [0, 14, 0] }}
          transition={{ duration: 3.5, repeat: Infinity }}
        >
          <span style={{ fontSize: 10, letterSpacing: 4, fontWeight: 600, textTransform: 'uppercase', marginBottom: 12 }}>
            Extraire aujourd'hui, préserver pour demain
          </span>
          <div style={{ width: 1, height: 56, background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.5), transparent)' }} />
        </motion.div>

        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          background: `rgba(122,59,30,0.92)`, backdropFilter: 'blur(6px)',
          padding: '14px 40px', display: 'flex', alignItems: 'center', gap: 48,
          borderTop: `1px solid rgba(201,130,107,0.3)`,
        }}>
          {['15M+ tonnes extraites', '35+ carrières & mines', '91% taux de récupération', '€8.7B de projets'].map((t, i) => (
            <span key={i} style={{ color: 'rgba(255,255,255,0.85)', fontSize: 13, fontWeight: 500, whiteSpace: 'nowrap' }}>
              <span style={{ color: AM, marginRight: 8 }}>◆</span>{t}
            </span>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          STATS
      ══════════════════════════════════════════════════════ */}
      <section style={{ padding: '100px 40px', background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 64 }}>
            <div style={{ width: 4, height: 40, background: AM, borderRadius: 2 }} />
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 700, color: BK }}>Nos Chiffres Clés</span>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
            {[
              { value: '15M+', label: 'Tonnes extraites',      desc: 'Production annuelle garantie',           accent: R  },
              { value: '35+',  label: 'Carrières & Mines',     desc: 'Sites opérés à l\'international',        accent: RL },
              { value: '91%',  label: 'Taux de récupération',  desc: 'Efficacité d\'extraction record',         accent: AM },
              { value: '€8.7B',label: 'Valeur des projets',    desc: 'Projets d\'exploitation développés',      accent: R  },
            ].map((stat, i) => (
              <motion.div key={i} variants={fadeUp} custom={i * 0.1} initial="hidden" whileInView="visible" viewport={{ once: true }}
                style={{
                  padding: '40px 32px', borderRadius: 8,
                  border: '1px solid #E8E8E8', background: '#fff',
                  boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
                  borderLeft: `4px solid ${stat.accent}`, cursor: 'default',
                }}
                whileHover={{ y: -6, boxShadow: '0 12px 40px rgba(0,0,0,0.12)' }}
              >
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 52, fontWeight: 700, color: stat.accent, lineHeight: 1, marginBottom: 16 }}>
                  {stat.value}
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 600, color: BK, marginBottom: 8 }}>{stat.label}</h3>
                <p style={{ fontSize: 14, color: TG, fontWeight: 300 }}>{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          DOMAINES D'EXPERTISE
      ══════════════════════════════════════════════════════ */}
      <section style={{ padding: '100px 40px', background: LBG }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: 64 }}>
            <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: 4, color: R, textTransform: 'uppercase', marginBottom: 16 }}>Ce que nous faisons</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 48, fontWeight: 700, color: BK, lineHeight: 1.15 }}>Nos Domaines d'Expertise</h2>
            <div style={{ width: 64, height: 4, background: AM, borderRadius: 2, margin: '24px auto 0' }} />
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {[
              { Icon: Pickaxe, title: 'Mines de Métaux Précieux', desc: 'Or, argent, cuivre, zinc. Extraction souterraine et à ciel ouvert avec des taux de récupération supérieurs à 90% grâce aux technologies de pointe et à l\'optimisation continue des procédés.', color: R  },
              { Icon: Globe,   title: 'Carrières de Matériaux',   desc: 'Granulats, pierres concassées, calcaire et sable. Production de plus de 10 millions de tonnes par an pour les grands chantiers de BTP et d\'infrastructures.', color: RL },
              { Icon: Leaf,    title: 'Exploitation Durable',      desc: 'Modèle d\'extraction responsable : restauration écologique progressive, gestion rigoureuse de l\'eau, préservation de la biodiversité et minimisation de l\'empreinte environnementale.', color: AM },
            ].map(({ Icon, title, desc, color }, i) => (
              <motion.div key={i} variants={fadeUp} custom={i * 0.12} initial="hidden" whileInView="visible" viewport={{ once: true }}
                style={{
                  background: '#fff', borderRadius: 8, padding: '48px 36px',
                  border: '1px solid #E8E8E8', boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
                  position: 'relative', overflow: 'hidden', cursor: 'default',
                }}
                whileHover={{ y: -6, boxShadow: '0 16px 48px rgba(0,0,0,0.12)' }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: color }} />
                <div style={{ width: 64, height: 64, borderRadius: 8, background: `${color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 28, color: color }}>
                  <Icon size={32} />
                </div>
                <h3 style={{ fontSize: 22, fontWeight: 600, color: BK, marginBottom: 16 }}>{title}</h3>
                <p style={{ fontSize: 15, color: TG, lineHeight: 1.75, fontWeight: 300 }}>{desc}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: color, fontWeight: 600, fontSize: 14, marginTop: 28 }}>
                  En savoir plus <ChevronRight size={16} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          RÉALISATIONS
      ══════════════════════════════════════════════════════ */}
      <section id="realisations" style={{ padding: '100px 40px', background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ marginBottom: 64 }}>
            <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: 4, color: R, textTransform: 'uppercase', marginBottom: 16 }}>Portfolio sélectif</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 48, fontWeight: 700, color: BK, lineHeight: 1.15 }}>
              Exploitations Minières & Carrières Emblématiques
            </h2>
            <div style={{ width: 64, height: 4, background: AM, borderRadius: 2, marginTop: 24 }} />
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {[
              {
                num: '01', title: 'Mine d\'Or de Bibiani – Ghana', value: '€2.1B',
                desc: 'Exploitation souterraine et à ciel ouvert sur 850 hectares. Taux de récupération de 93%, production annuelle de 250 000 onces d\'or et réhabilitation écologique en continu.',
                tags: ['250k onces/an', '93% récupération', '850 ha'], accent: R,
              },
              {
                num: '02', title: 'Carrière de Granites – Cameroun', value: '€340M',
                desc: 'Production de 3,5 millions de tonnes de granites concassés par an pour les grands projets d\'infrastructure régionaux. Certification environnementale ISO 14001 obtenue.',
                tags: ['3.5M t/an', 'ISO 14001', 'Cameroun'], accent: RL,
              },
              {
                num: '03', title: 'Mine de Cuivre Katanga – RDC', value: '€1.4B',
                desc: 'Extraction de 180 000 tonnes de cuivre par an à 2 800 m de profondeur. Programme de développement communautaire intégré bénéficiant à 45 000 habitants des zones riveraines.',
                tags: ['180k t/an', '2 800 m', '45k habitants'], accent: AM,
              },
            ].map((project, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7, ease }}
                style={{
                  background: '#fff', borderRadius: 8, padding: '40px 48px',
                  border: '1px solid #E8E8E8', boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
                  display: 'flex', alignItems: 'center', gap: 48,
                  borderLeft: `6px solid ${project.accent}`,
                }}
              >
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 64, fontWeight: 700, color: `${project.accent}22`, lineHeight: 1, minWidth: 80, textAlign: 'center', userSelect: 'none' }}>
                  {project.num}
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: 22, fontWeight: 600, color: BK, marginBottom: 12 }}>{project.title}</h3>
                  <p style={{ fontSize: 15, color: TG, lineHeight: 1.7, fontWeight: 300, marginBottom: 16 }}>{project.desc}</p>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    {project.tags.map(t => (
                      <span key={t} style={{ padding: '4px 12px', borderRadius: 4, background: `${project.accent}15`, color: project.accent, fontSize: 12, fontWeight: 600, letterSpacing: 1 }}>{t}</span>
                    ))}
                  </div>
                </div>
                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 40, fontWeight: 700, color: project.accent, lineHeight: 1 }}>{project.value}</div>
                  <div style={{ fontSize: 12, color: TG, fontWeight: 500, marginTop: 6, textTransform: 'uppercase', letterSpacing: 2 }}>Valeur du projet</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          APPROCHE RESPONSABLE
      ══════════════════════════════════════════════════════ */}
      <section style={{ padding: '100px 40px', background: LBG }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: 64 }}>
            <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: 4, color: R, textTransform: 'uppercase', marginBottom: 16 }}>Méthodologie</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 48, fontWeight: 700, color: BK, lineHeight: 1.15 }}>Notre Approche Responsable</h2>
            <div style={{ width: 64, height: 4, background: AM, borderRadius: 2, margin: '24px auto 0' }} />
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24, maxWidth: 1100, margin: '0 auto' }}>
            {[
              { Icon: Leaf,      title: 'Restauration Écologique', desc: 'Reforestation systématique post-extraction, création d\'écosystèmes restaurés et plus de 5 000 hectares réhabilités depuis 2010.', color: R  },
              { Icon: Droplets,  title: 'Gestion de l\'Eau',       desc: 'Traitement avancé, recyclage intégral et réduction de 45% de la consommation. Qualité des nappes phréatiques garantie sur chaque site.', color: RL },
              { Icon: Zap,       title: 'Énergie & Efficacité',    desc: 'Intégration d\'énergies renouvelables, réduction des émissions de 30% par tonne extraite et processus de production éco-responsables.', color: AM },
              { Icon: Users,     title: 'Développement Local',     desc: 'Priorité aux emplois locaux, formation professionnelle certifiante et partage équitable des retombées économiques avec les communautés.', color: R  },
            ].map(({ Icon, title, desc, color }, i) => (
              <motion.div key={i} variants={fadeUp} custom={i * 0.1} initial="hidden" whileInView="visible" viewport={{ once: true }}
                style={{
                  background: '#fff', borderRadius: 8, padding: '40px 32px',
                  border: '1px solid #E8E8E8', boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
                  position: 'relative', overflow: 'hidden', cursor: 'default',
                }}
                whileHover={{ y: -6, boxShadow: '0 16px 48px rgba(0,0,0,0.12)' }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: color }} />
                <div style={{ width: 56, height: 56, borderRadius: 8, background: `${color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24, color: color }}>
                  <Icon size={28} />
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 600, color: BK, marginBottom: 12 }}>{title}</h3>
                <p style={{ fontSize: 14, color: TG, lineHeight: 1.75, fontWeight: 300 }}>{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CTA
      ══════════════════════════════════════════════════════ */}
      <section style={{ padding: '120px 40px', background: BK, position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url('https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070')`,
          backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.14)',
        }} />
        <div style={{ position: 'absolute', top: -80, right: -80, width: 400, height: 400, borderRadius: '50%', border: `80px solid rgba(201,130,107,0.08)`, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -100, left: -60, width: 320, height: 320, borderRadius: '50%', border: `60px solid rgba(232,154,122,0.08)`, pointerEvents: 'none' }} />

        <div style={{ position: 'relative', zIndex: 2, maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div style={{ display: 'inline-block', padding: '6px 20px', borderRadius: 4, background: AM, color: BK, fontSize: 12, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 32 }}>
              Binova Rock Builders
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(40px, 5.5vw, 64px)', fontWeight: 700, color: '#fff', lineHeight: 1.15, marginBottom: 24 }}>
              Extraire aujourd'hui.<br />Préserver pour <span style={{ color: RL }}>demain</span>.
            </h2>
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.72)', lineHeight: 1.7, fontWeight: 300, marginBottom: 56 }}>
              15 millions de tonnes par an.<br />Un engagement fort pour l'environnement et les communautés locales.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: 12,
                padding: '18px 44px', borderRadius: 8,
                background: R, color: '#fff', fontSize: 17, fontWeight: 600, textDecoration: 'none',
                boxShadow: `0 4px 32px rgba(122,59,30,0.5)`, transition: 'background 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = RL }}
              onMouseLeave={e => { e.currentTarget.style.background = R }}
              >
                Discuter de votre projet d'exploitation <ArrowRight size={20} />
              </Link>
              <Link href="/about" style={{
                display: 'inline-flex', alignItems: 'center', gap: 12,
                padding: '18px 44px', borderRadius: 8,
                border: `2px solid rgba(255,255,255,0.25)`, color: '#fff',
                fontSize: 17, fontWeight: 500, textDecoration: 'none', transition: 'border-color 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = AM }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)' }}
              >
                En savoir plus
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}