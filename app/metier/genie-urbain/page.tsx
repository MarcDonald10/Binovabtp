'use client'

import { motion, cubicBezier } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Building, MapPin, Users, Zap, Leaf, TrendingUp, ChevronRight } from 'lucide-react'

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

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.7, ease, delay },
  }),
}

// ── Brand tokens ──────────────────────────────────────────────
const G   = '#1E5D3B'
const GL  = '#6BCB3D'
const Y   = '#F4B400'
const BK  = '#0B0B0B'
const LBG = '#F5F5F5'
const TG  = '#6B6B6B'

export default function GenieUrbainPage() {
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
        {/* BG image */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url('https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=2070')`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          filter: 'brightness(0.35)',
        }} />

        {/* Gradient overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: `linear-gradient(150deg, rgba(11,11,11,0.88) 40%, rgba(30,93,59,0.50) 100%)`,
        }} />

        {/* Left accent bar */}
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0,
          width: 6,
          background: `linear-gradient(to bottom, ${Y}, ${GL})`,
        }} />

        <div style={{ position: 'relative', zIndex: 10, maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>
          <motion.div initial="hidden" animate="visible">

            {/* Eyebrow */}
            <motion.div variants={fadeUp} custom={0} style={{
              display: 'inline-flex', alignItems: 'center', gap: 12,
              color: Y, letterSpacing: 4, fontSize: 12, fontWeight: 600,
              textTransform: 'uppercase', marginBottom: 28,
            }}>
              <div style={{ height: 2, width: 40, background: Y }} />
              GÉNIE URBAIN — BINOVA ROCK BUILDERS
              <div style={{ height: 2, width: 40, background: Y }} />
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={fadeUp} custom={0.1} style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(46px, 7.5vw, 88px)',
              fontWeight: 700, lineHeight: 1.05,
              color: '#fff', marginBottom: 28, maxWidth: 860,
            }}>
              Donner un visage<br />
              unique à nos <span style={{ color: GL }}>villes</span>.
            </motion.h1>

            {/* Sub */}
            <motion.p variants={fadeUp} custom={0.25} style={{
              maxWidth: 620, fontSize: 20, color: 'rgba(255,255,255,0.82)',
              fontWeight: 300, lineHeight: 1.7, marginBottom: 48,
            }}>
              Nous accompagnons collectivités, institutions et promoteurs dans la création
              d'espaces urbains durables, intelligents et humains.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} custom={0.38} style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link href="/contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                padding: '16px 36px', borderRadius: 8,
                background: G, color: '#fff',
                fontSize: 16, fontWeight: 600, textDecoration: 'none',
                boxShadow: `0 4px 24px rgba(30,93,59,0.4)`,
                transition: 'background 0.2s, transform 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = GL; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.background = G; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                Parlons de votre projet urbain <ArrowRight size={18} />
              </Link>

              <Link href="#realisations" style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                padding: '16px 36px', borderRadius: 8,
                background: Y, color: BK,
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

        {/* Scroll indicator */}
        <motion.div
          style={{
            position: 'absolute', bottom: 48, left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            color: 'rgba(255,255,255,0.6)',
          }}
          animate={{ y: [0, 14, 0] }}
          transition={{ duration: 3.5, repeat: Infinity }}
        >
          <span style={{ fontSize: 10, letterSpacing: 4, fontWeight: 600, textTransform: 'uppercase', marginBottom: 12 }}>
            Découvrir nos réalisations urbaines
          </span>
          <div style={{
            width: 1, height: 56,
            background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.5), transparent)',
          }} />
        </motion.div>

        {/* Bottom ticker */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          background: `rgba(30,93,59,0.92)`, backdropFilter: 'blur(6px)',
          padding: '14px 40px', display: 'flex', alignItems: 'center', gap: 48,
          borderTop: `1px solid rgba(107,203,61,0.3)`,
        }}>
          {['156+ projets urbains', '15M personnes impactées', '90% certifiés LEED/BREEAM', 'Présence internationale'].map((t, i) => (
            <span key={i} style={{ color: 'rgba(255,255,255,0.85)', fontSize: 13, fontWeight: 500, whiteSpace: 'nowrap' }}>
              <span style={{ color: Y, marginRight: 8 }}>◆</span>{t}
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
            <div style={{ width: 4, height: 40, background: Y, borderRadius: 2 }} />
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 700, color: BK }}>
              Nos Chiffres Clés
            </span>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
            {[
              { value: "156+",  label: "Projets Urbains",       desc: "Réalisés sur tous les continents", accent: G  },
              { value: "15M+",  label: "Personnes Impactées",   desc: "Cadre de vie amélioré",            accent: GL },
              { value: "€32B",  label: "Valeur Totale",         desc: "Des projets développés",           accent: Y  },
              { value: "90%",   label: "Certifications Vertes", desc: "Projets LEED / BREEAM",            accent: G  },
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i * 0.1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{
                  padding: '40px 32px', borderRadius: 8,
                  border: '1px solid #E8E8E8', background: '#fff',
                  boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
                  borderLeft: `4px solid ${stat.accent}`,
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  cursor: 'default',
                }}
                whileHover={{ y: -6, boxShadow: '0 12px 40px rgba(0,0,0,0.12)' }}
              >
                <div style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 56, fontWeight: 700,
                  color: stat.accent, lineHeight: 1, marginBottom: 16,
                }}>
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
            <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: 4, color: G, textTransform: 'uppercase', marginBottom: 16 }}>Ce que nous faisons</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 48, fontWeight: 700, color: BK, lineHeight: 1.15 }}>
              Nos Domaines d'Expertise
            </h2>
            <div style={{ width: 64, height: 4, background: Y, borderRadius: 2, margin: '24px auto 0' }} />
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {[
              {
                Icon: Building,
                title: "Projets Mixtes",
                desc: "Conception et réalisation de quartiers mixtes intégrant logements, commerces, bureaux et espaces publics. Création de lieux de vie dynamiques et inclusifs.",
                color: G,
              },
              {
                Icon: MapPin,
                title: "Aménagements Urbains",
                desc: "Rénovation de quartiers anciens, réaménagement d'espaces publics et valorisation du patrimoine historique tout en intégrant les besoins contemporains.",
                color: GL,
              },
              {
                Icon: Leaf,
                title: "Villes Vertes & Durables",
                desc: "Développement d'espaces verts, parcs urbains, corridors écologiques et solutions nature-based pour une ville plus respirable et résiliente.",
                color: Y,
              },
            ].map(({ Icon, title, desc, color }, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i * 0.12}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{
                  background: '#fff', borderRadius: 8,
                  padding: '48px 36px',
                  border: '1px solid #E8E8E8',
                  boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
                  position: 'relative', overflow: 'hidden',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  cursor: 'default',
                }}
                whileHover={{ y: -6, boxShadow: '0 16px 48px rgba(0,0,0,0.12)' }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: color }} />

                <div style={{
                  width: 64, height: 64, borderRadius: 8,
                  background: `${color}18`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 28, color: color,
                }}>
                  <Icon size={32} />
                </div>

                <h3 style={{ fontSize: 22, fontWeight: 600, color: BK, marginBottom: 16 }}>{title}</h3>
                <p style={{ fontSize: 15, color: TG, lineHeight: 1.75, fontWeight: 300 }}>{desc}</p>

                <div style={{
                  display: 'flex', alignItems: 'center', gap: 6,
                  color: color, fontWeight: 600, fontSize: 14, marginTop: 28,
                }}>
                  En savoir plus <ChevronRight size={16} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          TRANSFORMATIONS EMBLÉMATIQUES
      ══════════════════════════════════════════════════════ */}
      <section id="realisations" style={{ padding: '100px 40px', background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ marginBottom: 64 }}>
            <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: 4, color: G, textTransform: 'uppercase', marginBottom: 16 }}>Portfolio sélectif</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 48, fontWeight: 700, color: BK, lineHeight: 1.15 }}>
              Transformations Urbaines Emblématiques
            </h2>
            <div style={{ width: 64, height: 4, background: Y, borderRadius: 2, marginTop: 24 }} />
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {[
              {
                num: '01',
                title: "Métropole Durable – Singapour",
                desc: "Réaménagement sur 700 hectares d'un quartier central avec 50 000 logements certifiés LEED Platinum, corridors verts continus et mobilité zéro carbone.",
                value: "€2.8B",
                tags: ['LEED Platinum', 'Zéro Carbone', '700 ha'],
                accent: G,
              },
              {
                num: '02',
                title: "Revitalisation du Caire Historique",
                desc: "Projet mêlant préservation du patrimoine UNESCO et infrastructures modernes. Amélioration du cadre de vie pour plus de 200 000 habitants.",
                value: "€1.5B",
                tags: ['UNESCO', 'Patrimoine', '200k habitants'],
                accent: GL,
              },
              {
                num: '03',
                title: "Barcelona Green Belt",
                desc: "Création de 85 km de parcs linéaires et forêts urbaines. Amélioration significative de la qualité de l'air et réduction de l'îlot de chaleur urbain.",
                value: "€680M",
                tags: ['85 km', 'Forêts urbaines', 'Îlot de chaleur'],
                accent: Y,
              },
            ].map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7, ease }}
                style={{
                  background: '#fff', borderRadius: 8,
                  padding: '40px 48px',
                  border: '1px solid #E8E8E8',
                  boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
                  display: 'flex', alignItems: 'center', gap: 48,
                  borderLeft: `6px solid ${project.accent}`,
                }}
              >
                {/* Big number */}
                <div style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 64, fontWeight: 700,
                  color: `${project.accent}22`,
                  lineHeight: 1, minWidth: 80, textAlign: 'center',
                  userSelect: 'none',
                }}>
                  {project.num}
                </div>

                {/* Content */}
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: 22, fontWeight: 600, color: BK, marginBottom: 12 }}>{project.title}</h3>
                  <p style={{ fontSize: 15, color: TG, lineHeight: 1.7, fontWeight: 300, marginBottom: 16 }}>{project.desc}</p>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    {project.tags.map(t => (
                      <span key={t} style={{
                        padding: '4px 12px', borderRadius: 4,
                        background: `${project.accent}15`, color: project.accent,
                        fontSize: 12, fontWeight: 600, letterSpacing: 1,
                      }}>{t}</span>
                    ))}
                  </div>
                </div>

                {/* Value */}
                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <div style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 40, fontWeight: 700, color: project.accent, lineHeight: 1,
                  }}>
                    {project.value}
                  </div>
                  <div style={{ fontSize: 12, color: TG, fontWeight: 500, marginTop: 6, textTransform: 'uppercase', letterSpacing: 2 }}>
                    Valeur du projet
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          APPROCHE PARTICIPATIVE
      ══════════════════════════════════════════════════════ */}
      <section style={{ padding: '100px 40px', background: LBG }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: 64 }}>
            <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: 4, color: G, textTransform: 'uppercase', marginBottom: 16 }}>Méthodologie</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 48, fontWeight: 700, color: BK, lineHeight: 1.15 }}>
              Notre Approche Participative
            </h2>
            <div style={{ width: 64, height: 4, background: Y, borderRadius: 2, margin: '24px auto 0' }} />
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24, maxWidth: 1100, margin: '0 auto' }}>
            {[
              {
                Icon: Users,
                title: "Consultation Citoyenne",
                desc: "Ateliers participatifs, sondages et implication directe des communautés à chaque phase du projet.",
                color: G,
              },
              {
                Icon: Leaf,
                title: "Durabilité Intégrée",
                desc: "Objectifs Net-Zéro, biodiversité positive, économie circulaire et solutions nature-based.",
                color: GL,
              },
              {
                Icon: Zap,
                title: "Smart City & Innovation",
                desc: "Intégration de technologies IoT, éclairage intelligent, gestion du trafic et systèmes énergétiques distribués.",
                color: Y,
              },
              {
                Icon: TrendingUp,
                title: "Valeur Économique & Sociale",
                desc: "Création d'emplois locaux, augmentation de la valeur immobilière et renforcement de l'attractivité des territoires.",
                color: G,
              },
            ].map(({ Icon, title, desc, color }, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i * 0.1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{
                  background: '#fff', borderRadius: 8,
                  padding: '40px 32px',
                  border: '1px solid #E8E8E8',
                  boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
                  position: 'relative', overflow: 'hidden',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  cursor: 'default',
                }}
                whileHover={{ y: -6, boxShadow: '0 16px 48px rgba(0,0,0,0.12)' }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: color }} />

                <div style={{
                  width: 56, height: 56, borderRadius: 8,
                  background: `${color}18`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 24, color: color,
                }}>
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
          FINAL CTA
      ══════════════════════════════════════════════════════ */}
      <section style={{ padding: '120px 40px', background: BK, position: 'relative', overflow: 'hidden' }}>

        {/* BG texture */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2070')`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          filter: 'brightness(0.15)',
        }} />

        {/* Decorative circles */}
        <div style={{
          position: 'absolute', top: -80, right: -80, width: 400, height: 400,
          borderRadius: '50%', border: `80px solid rgba(107,203,61,0.08)`, pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: -100, left: -60, width: 320, height: 320,
          borderRadius: '50%', border: `60px solid rgba(244,180,0,0.08)`, pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', zIndex: 2, maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>

            <div style={{
              display: 'inline-block', padding: '6px 20px', borderRadius: 4,
              background: Y, color: BK,
              fontSize: 12, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase',
              marginBottom: 32,
            }}>
              Binova Rock Builders
            </div>

            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(40px, 5.5vw, 64px)', fontWeight: 700,
              color: '#fff', lineHeight: 1.15, marginBottom: 24,
            }}>
              Construisons ensemble<br />
              la ville de <span style={{ color: GL }}>demain</span>
            </h2>

            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.72)', lineHeight: 1.7, fontWeight: 300, marginBottom: 56 }}>
              156 projets urbains réalisés. 15 millions de personnes impactées.<br />
              Des villes plus vertes, plus humaines et plus intelligentes.
            </p>

            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: 12,
                padding: '18px 44px', borderRadius: 8,
                background: G, color: '#fff',
                fontSize: 17, fontWeight: 600, textDecoration: 'none',
                boxShadow: `0 4px 32px rgba(30,93,59,0.5)`,
                transition: 'background 0.2s, transform 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = GL }}
              onMouseLeave={e => { e.currentTarget.style.background = G }}
              >
                Démarrer un projet <ArrowRight size={20} />
              </Link>

              <Link href="/about" style={{
                display: 'inline-flex', alignItems: 'center', gap: 12,
                padding: '18px 44px', borderRadius: 8,
                border: `2px solid rgba(255,255,255,0.25)`,
                color: '#fff',
                fontSize: 17, fontWeight: 500, textDecoration: 'none',
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = Y }}
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