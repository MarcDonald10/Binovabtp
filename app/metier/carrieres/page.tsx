'use client'

import { motion, cubicBezier } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Pickaxe, Globe, Leaf, Shield, Users, TrendingUp, Droplets, Zap, ChevronRight } from 'lucide-react'
import { useBreakpoint } from '@/hooks/useBreakpoint'
import { rs } from '@/components/ui/ResponsiveStyles'

const ease = cubicBezier(0.23, 1, 0.32, 1)
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.9, ease, delay } }),
}

const R   = '#7A3B1E'
const RL  = '#1E6B3A'
const AM  = '#E89A7A'
const BK  = '#0B0B0B'
const LBG = '#F7F3F0'
const TG  = '#6B6B6B'

export default function CarrieresPage() {
  const { is } = useBreakpoint()
  const screen = { isMobile: is.mobile, isTablet: is.tablet, isDesktop: is.desktop }
  const r = rs(screen)

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif" }}>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section style={{
        position: 'relative', minHeight: '92vh',
        display: 'flex', alignItems: 'center',
        background: BK, overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070')`,
          backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.30)',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: `linear-gradient(150deg, rgba(11,11,11,0.10) 40%, rgba(122,59,30,0.50) 100%)`,
        }} />
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 6, background: `linear-gradient(to bottom, ${AM}, ${RL})` }} />

        <div style={{ position: 'relative', zIndex: 10, ...r.container, ...r.heroPadding, paddingTop: is.mobile ? 100 : 0 }}>
          <motion.div initial="hidden" animate="visible">

            {!is.mobile && (
              <motion.div variants={fadeUp} custom={0} style={{
                display: 'inline-flex', alignItems: 'center', gap: 12,
                color: AM, letterSpacing: 4, fontSize: 12, fontWeight: 600,
                textTransform: 'uppercase', marginBottom: 28,
              }}>
                <div style={{ height: 2, width: 40, background: AM }} />
                CARRIÈRES & EXPLOITATION — BINOVA ROCK BUILDERS
                <div style={{ height: 2, width: 40, background: AM }} />
              </motion.div>
            )}

            <motion.h1 variants={fadeUp} custom={0.1} style={{
              fontFamily: "'Playfair Display', serif",
              ...r.heroTitle,
              fontWeight: 700, lineHeight: 1.05,
              color: '#fff', marginBottom: 24, maxWidth: 860,
            }}>
              Extraire avec<br />
              <span style={{ color: RL }}>responsabilité</span>.
            </motion.h1>

            <motion.p variants={fadeUp} custom={0.25} style={{
              maxWidth: 580, ...r.heroSub,
              color: 'rgba(255,255,255,0.82)', fontWeight: 300, lineHeight: 1.7, marginBottom: 40,
            }}>
              Au Cameroun comme à l'international, nous exploitons carrières et mines avec les plus hauts
              standards de sécurité, d'environnement et de développement local.
            </motion.p>

            <motion.div variants={fadeUp} custom={0.38} style={{ ...r.ctaGroup }}>
              <Link href="/contact" style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                padding: '16px 32px', borderRadius: 8,
                background: R, color: '#fff',
                fontSize: is.mobile ? 15 : 16, fontWeight: 600, textDecoration: 'none',
                boxShadow: `0 4px 24px rgba(122,59,30,0.5)`,
                ...r.btn,
              }}>
                Parlons de votre projet <ArrowRight size={18} />
              </Link>
              <Link href="#realisations" style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                padding: '16px 32px', borderRadius: 8,
                background: AM, color: BK,
                fontSize: is.mobile ? 15 : 16, fontWeight: 600, textDecoration: 'none',
                ...r.btn,
              }}>
                Voir nos réalisations
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator — desktop only */}
        {is.desktop && (
          <motion.div
            style={{
              position: 'absolute', bottom: 72, left: '50%', transform: 'translateX(-50%)',
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
        )}

        {/* Ticker */}
        {/* <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          background: `rgba(122,59,30,0.92)`, backdropFilter: 'blur(6px)',
          borderTop: `1px solid rgba(201,130,107,0.3)`,
          ...r.ticker,
        }}>
          {['15M+ tonnes extraites', '35+ carrières & mines', '91% récupération', '€8.7B de projets'].map((t, i) => (
            <span key={i} style={{ color: 'rgba(255,255,255,0.85)', fontSize: is.mobile ? 11 : 13, fontWeight: 500, whiteSpace: 'nowrap', flexShrink: 0 }}>
              <span style={{ color: AM, marginRight: 6 }}>◆</span>{t}
            </span>
          ))}
        </div> */}
      </section>

      

      {/* ── EXPERTISE ─────────────────────────────────────────────────────── */}
      <section style={{ background: LBG, ...r.section }}>
        <div style={r.container}>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: is.mobile ? 40 : 64 }}>
            <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: 4, color: R, textTransform: 'uppercase', marginBottom: 16 }}>Ce que nous faisons</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", ...r.sectionTitle, fontWeight: 700, color: BK, lineHeight: 1.15 }}>
              Nos Domaines d'Expertise
            </h2>
            <div style={{ width: 64, height: 4, background: AM, borderRadius: 2, margin: '20px auto 0' }} />
          </motion.div>

          <div style={r.grid(300)}>
            {[
              { Icon: Pickaxe, title: 'Mines de Métaux Précieux', desc: 'Or, argent, cuivre, zinc. Extraction souterraine et à ciel ouvert avec des taux de récupération supérieurs à 90% grâce aux technologies de pointe et à l\'optimisation continue des procédés.', color: R  },
              { Icon: Globe,   title: 'Carrières de Matériaux',   desc: 'Granulats, pierres concassées, calcaire et sable. Production de plus de 10 millions de tonnes par an pour les grands chantiers de BTP et d\'infrastructures.', color: RL },
              { Icon: Leaf,    title: 'Exploitation Durable',     desc: 'Modèle d\'extraction responsable : restauration écologique progressive, gestion rigoureuse de l\'eau, préservation de la biodiversité et minimisation de l\'empreinte environnementale.', color: AM },
            ].map(({ Icon, title, desc, color }, i) => (
              <motion.div key={i} variants={fadeUp} custom={i * 0.12} initial="hidden" whileInView="visible" viewport={{ once: true }}
                style={{
                  background: '#fff', borderRadius: 8,
                  padding: is.mobile ? '32px 24px' : '48px 36px',
                  border: '1px solid #E8E8E8', boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
                  position: 'relative', overflow: 'hidden', cursor: 'default',
                }}
                whileHover={{ y: -6, boxShadow: '0 16px 48px rgba(0,0,0,0.12)' }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: color }} />
                <div style={{ width: 56, height: 56, borderRadius: 8, background: `${color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24, color }}>
                  <Icon size={28} />
                </div>
                <h3 style={{ fontSize: is.mobile ? 18 : 22, fontWeight: 600, color: BK, marginBottom: 12 }}>{title}</h3>
                <p style={{ fontSize: is.mobile ? 14 : 15, color: TG, lineHeight: 1.75, fontWeight: 300 }}>{desc}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, color, fontWeight: 600, fontSize: 14, marginTop: 24 }}>
                  En savoir plus <ChevronRight size={16} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RÉALISATIONS ──────────────────────────────────────────────────── */}
      <section id="realisations" style={{ background: '#fff', ...r.section }}>
        <div style={r.container}>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            style={{ marginBottom: is.mobile ? 40 : 64 }}>
            <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: 4, color: R, textTransform: 'uppercase', marginBottom: 16 }}>Portfolio sélectif</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", ...r.sectionTitle, fontWeight: 700, color: BK, lineHeight: 1.15 }}>
              Exploitations Emblématiques
            </h2>
            <div style={{ width: 64, height: 4, background: AM, borderRadius: 2, marginTop: 20 }} />
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { num: '01', title: 'Mine d\'Or de Bibiani – Ghana',    value: '€2.1B', desc: 'Exploitation souterraine et à ciel ouvert sur 850 hectares. Taux de récupération de 93%, production annuelle de 250 000 onces d\'or et réhabilitation écologique en continu.', tags: ['250k onces/an', '93% récupération', '850 ha'], accent: R  },
              { num: '02', title: 'Carrière de Granites – Cameroun',  value: '€340M', desc: 'Production de 3,5 millions de tonnes de granites concassés par an pour les grands projets d\'infrastructure régionaux. Certification environnementale ISO 14001 obtenue.',       tags: ['3.5M t/an', 'ISO 14001', 'Cameroun'],         accent: RL },
              { num: '03', title: 'Mine de Cuivre Katanga – RDC',     value: '€1.4B', desc: 'Extraction de 180 000 tonnes de cuivre par an à 2 800 m de profondeur. Programme de développement communautaire intégré bénéficiant à 45 000 habitants des zones riveraines.',  tags: ['180k t/an', '2 800 m', '45k habitants'],       accent: AM },
            ].map((project, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7, ease }}
                style={{
                  background: '#fff', borderRadius: 8,
                  border: '1px solid #E8E8E8', boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
                  borderLeft: `6px solid ${project.accent}`,
                  ...r.projectCard,
                }}
              >
                {/* Numéro — masqué sur mobile */}
                <div style={{ ...r.projectNum }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 64, fontWeight: 700, color: `${project.accent}22`, lineHeight: 1, minWidth: 80, textAlign: 'center', userSelect: 'none' }}>
                    {project.num}
                  </div>
                </div>

                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: is.mobile ? 17 : 22, fontWeight: 600, color: BK, marginBottom: 10 }}>{project.title}</h3>
                  <p style={{ fontSize: is.mobile ? 13 : 15, color: TG, lineHeight: 1.7, fontWeight: 300, marginBottom: 14 }}>{project.desc}</p>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    {project.tags.map(t => (
                      <span key={t} style={{ padding: '4px 10px', borderRadius: 4, background: `${project.accent}15`, color: project.accent, fontSize: 11, fontWeight: 600, letterSpacing: 1 }}>{t}</span>
                    ))}
                  </div>
                </div>

                <div style={{ ...r.projectValue }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: is.mobile ? 28 : 40, fontWeight: 700, color: project.accent, lineHeight: 1 }}>{project.value}</div>
                  <div style={{ fontSize: 11, color: TG, fontWeight: 500, marginTop: 6, textTransform: 'uppercase', letterSpacing: 2 }}>Valeur du projet</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPROCHE RESPONSABLE ──────────────────────────────────────────── */}
      <section style={{ background: LBG, ...r.section }}>
        <div style={r.container}>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: is.mobile ? 40 : 64 }}>
            <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: 4, color: R, textTransform: 'uppercase', marginBottom: 16 }}>Méthodologie</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", ...r.sectionTitle, fontWeight: 700, color: BK, lineHeight: 1.15 }}>
              Notre Approche Responsable
            </h2>
            <div style={{ width: 64, height: 4, background: AM, borderRadius: 2, margin: '20px auto 0' }} />
          </motion.div>

          <div style={r.grid(260)}>
            {[
              { Icon: Leaf,     title: 'Restauration Écologique', desc: 'Reforestation systématique post-extraction, création d\'écosystèmes restaurés et plus de 5 000 hectares réhabilités depuis 2010.', color: R  },
              { Icon: Droplets, title: 'Gestion de l\'Eau',       desc: 'Traitement avancé, recyclage intégral et réduction de 45% de la consommation. Qualité des nappes phréatiques garantie sur chaque site.', color: RL },
              { Icon: Zap,      title: 'Énergie & Efficacité',    desc: 'Intégration d\'énergies renouvelables, réduction des émissions de 30% par tonne extraite et processus de production éco-responsables.', color: AM },
              { Icon: Users,    title: 'Développement Local',     desc: 'Priorité aux emplois locaux, formation professionnelle certifiante et partage équitable des retombées économiques avec les communautés.', color: R  },
            ].map(({ Icon, title, desc, color }, i) => (
              <motion.div key={i} variants={fadeUp} custom={i * 0.1} initial="hidden" whileInView="visible" viewport={{ once: true }}
                style={{
                  background: '#fff', borderRadius: 8,
                  padding: is.mobile ? '28px 20px' : '40px 32px',
                  border: '1px solid #E8E8E8', boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
                  position: 'relative', overflow: 'hidden', cursor: 'default',
                }}
                whileHover={{ y: -6, boxShadow: '0 16px 48px rgba(0,0,0,0.12)' }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: color }} />
                <div style={{ width: 48, height: 48, borderRadius: 8, background: `${color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20, color }}>
                  <Icon size={24} />
                </div>
                <h3 style={{ fontSize: is.mobile ? 16 : 20, fontWeight: 600, color: BK, marginBottom: 10 }}>{title}</h3>
                <p style={{ fontSize: 14, color: TG, lineHeight: 1.75, fontWeight: 300 }}>{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section style={{ padding: is.mobile ? '80px 20px' : '120px 40px', background: BK, position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url('https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070')`,
          backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.2)',
        }} />
        {!is.mobile && <>
          <div style={{ position: 'absolute', top: -80, right: -80, width: 400, height: 400, borderRadius: '50%', border: `80px solid rgba(201,130,107,0.08)`, pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: -100, left: -60, width: 320, height: 320, borderRadius: '50%', border: `60px solid rgba(232,154,122,0.08)`, pointerEvents: 'none' }} />
        </>}

        <div style={{ position: 'relative', zIndex: 2, maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div style={{ display: 'inline-block', padding: '6px 20px', borderRadius: 4, background: AM, color: BK, fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 28 }}>
              Binova Rock Builders
            </div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: is.mobile ? 32 : 'clamp(40px, 5.5vw, 64px)',
              fontWeight: 700, color: '#fff', lineHeight: 1.15, marginBottom: 20,
            }}>
              Extraire aujourd'hui.<br />Préserver pour <span style={{ color: RL }}>demain</span>.
            </h2>
            {/* <p style={{ fontSize: is.mobile ? 15 : 18, color: 'rgba(255,255,255,0.72)', lineHeight: 1.7, fontWeight: 300, marginBottom: 48 }}>
              15 millions de tonnes par an.<br />Un engagement fort pour l'environnement et les communautés locales.
            </p> */}
            <div style={{ ...r.ctaGroup, justifyContent: is.mobile ? 'stretch' : 'center' }}>
              <Link href="/contact" style={{
                display: 'inline-flex', alignItems: 'center', justifyContent:'center', gap: 12,
                padding: '16px 36px', borderRadius: 8,
                background: R, color: '#fff', fontSize: is.mobile ? 15 : 17, fontWeight: 600, textDecoration: 'none',
                ...r.btn,
              }}>
                Discuter de votre projet <ArrowRight size={20} />
              </Link>
             
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}