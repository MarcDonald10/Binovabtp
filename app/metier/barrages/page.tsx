'use client'

import { motion, cubicBezier } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Waves, Zap, Droplets, Mountain, Cog, Leaf, Gauge, ChevronRight } from 'lucide-react'

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
const B   = '#1A3F5C'   // deep blue (primary)
const BL  = '#6EA3C8'   // light blue (accent)
const CY  = '#3BBFCF'   // cyan highlight
const SL  = '#8FB8CC'   // slate blue (muted accent)
const BK  = '#0B0B0B'
const LBG = '#F4F7FA'
const TG  = '#6B6B6B'

export default function BarragesPage() {
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
          backgroundImage: `url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070')`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          filter: 'brightness(0.32)',
        }} />

        {/* Gradient overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: `linear-gradient(150deg, rgba(11,11,11,0.90) 40%, rgba(26,63,92,0.55) 100%)`,
        }} />

        {/* Left accent bar */}
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0,
          width: 6,
          background: `linear-gradient(to bottom, ${CY}, ${BL})`,
        }} />

        <div style={{ position: 'relative', zIndex: 10, maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>
          <motion.div initial="hidden" animate="visible">

            {/* Eyebrow */}
            <motion.div variants={fadeUp} custom={0} style={{
              display: 'inline-flex', alignItems: 'center', gap: 12,
              color: CY, letterSpacing: 4, fontSize: 12, fontWeight: 600,
              textTransform: 'uppercase', marginBottom: 28,
            }}>
              <div style={{ height: 2, width: 40, background: CY }} />
              BARRAGES & RETENUES D'EAU — BINOVA ROCK BUILDERS
              <div style={{ height: 2, width: 40, background: CY }} />
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={fadeUp} custom={0.1} style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(46px, 7.5vw, 88px)',
              fontWeight: 700, lineHeight: 1.05,
              color: '#fff', marginBottom: 28, maxWidth: 860,
            }}>
              Maîtriser l'eau,<br />
              produire l'<span style={{ color: BL }}>énergie</span>.
            </motion.h1>

            {/* Sub */}
            <motion.p variants={fadeUp} custom={0.25} style={{
              maxWidth: 620, fontSize: 20, color: 'rgba(255,255,255,0.82)',
              fontWeight: 300, lineHeight: 1.7, marginBottom: 48,
            }}>
              32 barrages construits. 1 850 km³ d'eau stockée.
              Électricité durable et gestion intégrée des ressources hydriques pour 50 millions de foyers.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} custom={0.38} style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link href="/contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                padding: '16px 36px', borderRadius: 8,
                background: B, color: '#fff',
                fontSize: 16, fontWeight: 600, textDecoration: 'none',
                boxShadow: `0 4px 24px rgba(26,63,92,0.5)`,
                transition: 'background 0.2s, transform 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = BL; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.background = B; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                Parlons de votre projet hydraulique <ArrowRight size={18} />
              </Link>

              <Link href="#realisations" style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                padding: '16px 36px', borderRadius: 8,
                background: CY, color: BK,
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
            Découvrir nos réalisations hydrauliques
          </span>
          <div style={{
            width: 1, height: 56,
            background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.5), transparent)',
          }} />
        </motion.div>

        {/* Bottom ticker */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          background: `rgba(26,63,92,0.92)`, backdropFilter: 'blur(6px)',
          padding: '14px 40px', display: 'flex', alignItems: 'center', gap: 48,
          borderTop: `1px solid rgba(110,163,200,0.3)`,
        }}>
          {['32 barrages construits', '1 850 km³ stockés', '+15 GW installés', '50M+ foyers alimentés'].map((t, i) => (
            <span key={i} style={{ color: 'rgba(255,255,255,0.85)', fontSize: 13, fontWeight: 500, whiteSpace: 'nowrap' }}>
              <span style={{ color: CY, marginRight: 8 }}>◆</span>{t}
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
            <div style={{ width: 4, height: 40, background: CY, borderRadius: 2 }} />
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 700, color: BK }}>
              Nos Chiffres Clés
            </span>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
            {[
              { value: '32',        label: 'Barrages construits',      desc: 'Projets livrés dans le monde entier',  accent: B  },
              { value: '1 850 km³', label: 'Eau stockée',              desc: 'Réservoirs de première catégorie',     accent: BL },
              { value: '+15 GW',    label: 'Capacité énergétique',     desc: 'Production hydroélectrique installée', accent: CY },
              { value: '50M+',      label: 'Foyers alimentés',         desc: 'Accès à l\'énergie renouvelable',      accent: B  },
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
                  cursor: 'default',
                }}
                whileHover={{ y: -6, boxShadow: '0 12px 40px rgba(0,0,0,0.12)' }}
              >
                <div style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 52, fontWeight: 700,
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
            <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: 4, color: B, textTransform: 'uppercase', marginBottom: 16 }}>Ce que nous faisons</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 48, fontWeight: 700, color: BK, lineHeight: 1.15 }}>
              Nos Domaines d'Expertise
            </h2>
            <div style={{ width: 64, height: 4, background: CY, borderRadius: 2, margin: '24px auto 0' }} />
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {[
              {
                Icon: Waves,
                title: 'Conception hydraulique',
                desc: 'Structures massives optimisées pour maximiser le stockage d\'eau et minimiser les pertes par infiltration. Modélisation numérique et études d\'impact intégrées.',
                color: B,
              },
              {
                Icon: Zap,
                title: 'Production hydroélectrique',
                desc: 'Turbines haute performance et systèmes de génération pour une électricité 100% renouvelable, fiable et à très long terme.',
                color: BL,
              },
              {
                Icon: Leaf,
                title: 'Environnement & Biodiversité',
                desc: 'Passes à poissons, corridors écologiques, gestion des sédiments et intégration paysagère pour des projets respectueux des écosystèmes.',
                color: CY,
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
          RÉALISATIONS EMBLÉMATIQUES
      ══════════════════════════════════════════════════════ */}
      <section id="realisations" style={{ padding: '100px 40px', background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ marginBottom: 64 }}>
            <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: 4, color: B, textTransform: 'uppercase', marginBottom: 16 }}>Portfolio sélectif</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 48, fontWeight: 700, color: BK, lineHeight: 1.15 }}>
              Réalisations Hydrauliques Emblématiques
            </h2>
            <div style={{ width: 64, height: 4, background: CY, borderRadius: 2, marginTop: 24 }} />
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {[
              {
                num: '01',
                title: "Grand Barrage de l'Inga — RDC",
                desc: "Aménagement hydroélectrique de 4 200 MW sur le fleuve Congo. Alimentation en énergie propre de 12 pays d'Afrique subsaharienne avec un impact transformateur sur le développement régional.",
                value: '€3.1B',
                tags: ['4 200 MW', 'Fleuve Congo', '12 pays'],
                accent: B,
              },
              {
                num: '02',
                title: "Retenue de Souapiti — Guinée",
                desc: "Barrage de 450 m de longueur avec réservoir de 6 700 km² et turbines de 450 MW. Irrigation de 200 000 hectares de terres agricoles et protection contre les crues.",
                value: '€1.8B',
                tags: ['450 MW', '6 700 km²', '200k ha irrigués'],
                accent: BL,
              },
              {
                num: '03',
                title: "Système de Retenues — Maroc",
                desc: "Réseau intégré de 8 barrages pour l'alimentation en eau potable de Casablanca et Rabat, production agricole sécurisée et hydroélectricité pour 3,5 millions de foyers.",
                value: '€920M',
                tags: ['8 barrages', '3.5M foyers', 'Eau potable'],
                accent: CY,
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
          APPROCHE TECHNIQUE
      ══════════════════════════════════════════════════════ */}
      <section style={{ padding: '100px 40px', background: LBG }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: 64 }}>
            <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: 4, color: B, textTransform: 'uppercase', marginBottom: 16 }}>Méthodologie</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 48, fontWeight: 700, color: BK, lineHeight: 1.15 }}>
              Notre Approche Technique
            </h2>
            <div style={{ width: 64, height: 4, background: CY, borderRadius: 2, margin: '24px auto 0' }} />
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24, maxWidth: 1100, margin: '0 auto' }}>
            {[
              {
                Icon: Mountain,
                title: 'Géotechnique de Pointe',
                desc: 'Études géologiques approfondies, caractérisation des fondations, imperméabilisation complète et suivi d\'auscultation sur toute la durée de vie.',
                color: B,
              },
              {
                Icon: Droplets,
                title: 'Gestion des Ressources en Eau',
                desc: 'Régulation du débit, optimisation du remplissage, irrigation raisonnée et approvisionnement en eau potable avec modèles hydrologiques avancés.',
                color: BL,
              },
              {
                Icon: Cog,
                title: 'Systèmes de Contrôle Avancés',
                desc: 'Automatisation complète, monitoring en temps réel via SCADA, détection précoce des anomalies et plans d\'intervention d\'urgence.',
                color: CY,
              },
              {
                Icon: Gauge,
                title: 'Sécurité & Performance',
                desc: 'Rendement énergétique > 92%, plans de surveillance renforcés, maintenance prédictive et garantie de durabilité structurelle sur 100+ ans.',
                color: B,
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
          backgroundImage: `url('https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070')`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          filter: 'brightness(0.18)',
        }} />

        {/* Decorative circles */}
        <div style={{
          position: 'absolute', top: -80, right: -80, width: 400, height: 400,
          borderRadius: '50%', border: `80px solid rgba(110,163,200,0.08)`, pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: -100, left: -60, width: 320, height: 320,
          borderRadius: '50%', border: `60px solid rgba(59,191,207,0.08)`, pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', zIndex: 2, maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>

            <div style={{
              display: 'inline-block', padding: '6px 20px', borderRadius: 4,
              background: CY, color: BK,
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
              Votre barrage mérite<br />
              l'<span style={{ color: BL }}>excellence</span>
            </h2>

            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.72)', lineHeight: 1.7, fontWeight: 300, marginBottom: 56 }}>
              32 barrages construits. +15 GW d'énergie propre installée.<br />
              Des infrastructures hydrauliques durables, sûres et performantes.
            </p>

            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: 12,
                padding: '18px 44px', borderRadius: 8,
                background: B, color: '#fff',
                fontSize: 17, fontWeight: 600, textDecoration: 'none',
                boxShadow: `0 4px 32px rgba(26,63,92,0.5)`,
                transition: 'background 0.2s, transform 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = BL }}
              onMouseLeave={e => { e.currentTarget.style.background = B }}
              >
                Lancer votre projet <ArrowRight size={20} />
              </Link>

              <Link href="/about" style={{
                display: 'inline-flex', alignItems: 'center', gap: 12,
                padding: '18px 44px', borderRadius: 8,
                border: `2px solid rgba(255,255,255,0.25)`,
                color: '#fff',
                fontSize: 17, fontWeight: 500, textDecoration: 'none',
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = CY }}
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