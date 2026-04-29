'use client'

import { motion, cubicBezier } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Zap, Target, Shield, Users, TrendingUp, Award, ChevronRight } from 'lucide-react'

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
const S   = '#2A2A2A'   // anthracite (primary)
const SL  = '#707070'   // slate (accent)
const GD  = '#C9A84C'   // gold highlight
const BK  = '#0B0B0B'
const LBG = '#F2F2F0'
const TG  = '#6B6B6B'

export default function TravauxSouterrainPage() {
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
          backgroundImage: `url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070')`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          filter: 'brightness(0.28)',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: `linear-gradient(150deg, rgba(11,11,11,0.92) 40%, rgba(42,42,42,0.50) 100%)`,
        }} />
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0,
          width: 6,
          background: `linear-gradient(to bottom, ${GD}, ${SL})`,
        }} />

        <div style={{ position: 'relative', zIndex: 10, maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>
          <motion.div initial="hidden" animate="visible">

            <motion.div variants={fadeUp} custom={0} style={{
              display: 'inline-flex', alignItems: 'center', gap: 12,
              color: GD, letterSpacing: 4, fontSize: 12, fontWeight: 600,
              textTransform: 'uppercase', marginBottom: 28,
            }}>
              <div style={{ height: 2, width: 40, background: GD }} />
              TRAVAUX SOUTERRAINS — BINOVA ROCK BUILDERS
              <div style={{ height: 2, width: 40, background: GD }} />
            </motion.div>

            <motion.h1 variants={fadeUp} custom={0.1} style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(46px, 7.5vw, 88px)',
              fontWeight: 700, lineHeight: 1.05,
              color: '#fff', marginBottom: 28, maxWidth: 860,
            }}>
              Maîtriser la profondeur.<br />
              Construire l'<span style={{ color: GD }}>avenir</span>.
            </motion.h1>

            <motion.p variants={fadeUp} custom={0.25} style={{
              maxWidth: 620, fontSize: 20, color: 'rgba(255,255,255,0.82)',
              fontWeight: 300, lineHeight: 1.7, marginBottom: 48,
            }}>
              Tunneliers, minage de précision, soutènements complexes : nous intervenons sur tous types
              de terrains et dans les conditions géologiques les plus exigeantes.
            </motion.p>

            <motion.div variants={fadeUp} custom={0.38} style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link href="/contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                padding: '16px 36px', borderRadius: 8,
                background: S, color: '#fff',
                fontSize: 16, fontWeight: 600, textDecoration: 'none',
                boxShadow: `0 4px 24px rgba(42,42,42,0.6)`,
                transition: 'background 0.2s, transform 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = SL; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.background = S; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                Parlons de votre projet souterrain <ArrowRight size={18} />
              </Link>

              <Link href="#realisations" style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                padding: '16px 36px', borderRadius: 8,
                background: GD, color: BK,
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
            Explorer en profondeur
          </span>
          <div style={{ width: 1, height: 56, background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.5), transparent)' }} />
        </motion.div>

        {/* <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          background: `rgba(42,42,42,0.95)`, backdropFilter: 'blur(6px)',
          padding: '14px 40px', display: 'flex', alignItems: 'center', gap: 48,
          borderTop: `1px solid rgba(201,168,76,0.3)`,
        }}>
          {['156 tunnels complétés', '850+ km creusés', '28 ans sans accident mortel', '€45B de projets'].map((t, i) => (
            <span key={i} style={{ color: 'rgba(255,255,255,0.85)', fontSize: 13, fontWeight: 500, whiteSpace: 'nowrap' }}>
              <span style={{ color: GD, marginRight: 8 }}>◆</span>{t}
            </span>
          ))}
        </div> */}
      </section>

      

      {/* ══════════════════════════════════════════════════════
          DOMAINES DE MAÎTRISE
      ══════════════════════════════════════════════════════ */}
      <section style={{ padding: '100px 40px', background: LBG }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: 64 }}>
            <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: 4, color: S, textTransform: 'uppercase', marginBottom: 16 }}>Ce que nous faisons</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 48, fontWeight: 700, color: BK, lineHeight: 1.15 }}>Nos Domaines de Maîtrise</h2>
            <div style={{ width: 64, height: 4, background: GD, borderRadius: 2, margin: '24px auto 0' }} />
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {[
              { Icon: Zap,    title: 'Tunnelage par Tunnelier (TBM)', desc: 'Tunnel boring machines de 6 à 12 mètres de diamètre. Percement en géologies complexes avec gestion des pressions et consolidations adaptées en temps réel.', color: S  },
              { Icon: Target, title: 'Excavation Contrôlée & Minage', desc: 'Minage de précision, explosifs de nouvelle génération, contrôle strict des vibrations et protection rigoureuse des structures environnantes.', color: SL },
              { Icon: Shield, title: 'Géotechnique & Soutènement',    desc: 'Soutènements complexes, contrôle des tassements, consolidation sol-roche et prévention des effondrements en environnement urbain ou montagneux.', color: GD },
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
          EXCELLENCE TECHNIQUE
      ══════════════════════════════════════════════════════ */}
      <section style={{ padding: '100px 40px', background: LBG }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: 64 }}>
            <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: 4, color: S, textTransform: 'uppercase', marginBottom: 16 }}>Méthodologie</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 48, fontWeight: 700, color: BK, lineHeight: 1.15 }}>Excellence Technique</h2>
            <div style={{ width: 64, height: 4, background: GD, borderRadius: 2, margin: '24px auto 0' }} />
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24, maxWidth: 1100, margin: '0 auto' }}>
            {[
              { Icon: Users,     title: 'Équipes Hautement Spécialisées', desc: 'Plus de 150 ingénieurs certifiés en tunnelage. Experts en géologie, hydrogéologie, structures et sismique pour chaque projet.', color: S  },
              { Icon: TrendingUp, title: 'Monitoring en Temps Réel',      desc: 'Plus de 1 000 capteurs par tunnel. Surveillance continue des déformations, pressions, vibrations et stabilité structurelle.', color: SL },
              { Icon: Award,     title: 'Gestion des Risques',            desc: 'Plans d\'urgence détaillés, simulations d\'incidents régulières et protocoles de sécurité conformes aux normes internationales.', color: GD },
              { Icon: Shield,    title: 'Sécurité Absolue',               desc: '28 ans sans accident mortel. Ventilation active, systèmes de sauvetage de pointe et formations SSE continues pour toutes les équipes.', color: S  },
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
          backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.12)',
        }} />
        <div style={{ position: 'absolute', top: -80, right: -80, width: 400, height: 400, borderRadius: '50%', border: `80px solid rgba(112,112,112,0.08)`, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -100, left: -60, width: 320, height: 320, borderRadius: '50%', border: `60px solid rgba(201,168,76,0.08)`, pointerEvents: 'none' }} />

        <div style={{ position: 'relative', zIndex: 2, maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div style={{ display: 'inline-block', padding: '6px 20px', borderRadius: 4, background: GD, color: BK, fontSize: 12, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 32 }}>
              Binova Rock Builders
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(40px, 5.5vw, 64px)', fontWeight: 700, color: '#fff', lineHeight: 1.15, marginBottom: 24 }}>
              Percer en profondeur.<br />Construire avec <span style={{ color: GD }}>maîtrise</span>.
            </h2>
            {/* <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.72)', lineHeight: 1.7, fontWeight: 300, marginBottom: 56 }}>
              156 tunnels réalisés. 850+ km creusés.<br />28 ans de sécurité exemplaire sans accident mortel.
            </p> */}
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: 12,
                padding: '18px 44px', borderRadius: 8,
                background: S, color: '#fff', fontSize: 17, fontWeight: 600, textDecoration: 'none',
                boxShadow: `0 4px 32px rgba(42,42,42,0.6)`, transition: 'background 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = SL }}
              onMouseLeave={e => { e.currentTarget.style.background = S }}
              >
                Discuter de votre projet souterrain <ArrowRight size={20} />
              </Link>
              {/* <Link href="/about" style={{
                display: 'inline-flex', alignItems: 'center', gap: 12,
                padding: '18px 44px', borderRadius: 8,
                border: `2px solid rgba(255,255,255,0.25)`, color: '#fff',
                fontSize: 17, fontWeight: 500, textDecoration: 'none', transition: 'border-color 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = GD }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)' }}
              >
                En savoir plus
              </Link> */}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}