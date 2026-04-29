'use client'

import { motion, cubicBezier } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Train, Waypoints, Zap, Globe, TrendingUp, Award, ChevronRight } from 'lucide-react'
import { useBreakpoint } from '@/hooks/useBreakpoint'
import { rs } from '@/components/ui/ResponsiveStyles'

const ease = cubicBezier(0.23, 1, 0.32, 1)

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.9, ease, delay },
  }),
}

// ── Brand tokens ──────────────────────────────────────────────
const T   = '#5C3B1A'
const TL  = '#1E6B3A'
const AM  = '#E89A7A'
const BK  = '#0B0B0B'
const LBG = '#F7F4F1'
const TG  = '#6B6B6B'

export default function InfrastructuresLineairesPage() {
  const { is } = useBreakpoint()
  const screen = { isMobile: is.mobile, isTablet: is.tablet, isDesktop: is.desktop }
  const r = rs(screen)

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif" }}>

      {/* ══════════ HERO ══════════ */}
      <section style={{
        position: 'relative', minHeight: '92vh',
        display: 'flex', alignItems: 'center',
        background: BK, overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url('https://images.unsplash.com/photo-1492144534652-916f4b6c3b2e?q=80&w=2070')`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          filter: 'brightness(0.32)',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: `linear-gradient(150deg, rgba(11,11,11,0.90) 40%, rgba(92,59,26,0.50) 100%)`,
        }} />
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0,
          width: 6,
          background: `linear-gradient(to bottom, ${AM}, ${TL})`,
        }} />

        <div style={{
          position: 'relative', zIndex: 10,
          maxWidth: 1200, margin: '0 auto',
          padding: screen.isMobile ? '80px 20px 120px' : '0 40px',
          width: '100%',
        }}>
          <motion.div initial="hidden" animate="visible">

            <motion.div variants={fadeUp} custom={0} style={{
              display: 'inline-flex', alignItems: 'center', gap: screen.isMobile ? 8 : 12,
              color: AM, letterSpacing: screen.isMobile ? 2 : 4,
              fontSize: screen.isMobile ? 10 : 12, fontWeight: 600,
              textTransform: 'uppercase', marginBottom: screen.isMobile ? 20 : 28,
            }}>
              {!screen.isMobile && <div style={{ height: 2, width: 40, background: AM }} />}
              {screen.isMobile ? 'INFRA. LINÉAIRES — BINOVA' : 'INFRASTRUCTURES LINÉAIRES — BINOVA ROCK BUILDERS'}
              {!screen.isMobile && <div style={{ height: 2, width: 40, background: AM }} />}
            </motion.div>

            <motion.h1 variants={fadeUp} custom={0.1} style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: r.heroTitle.fontSize,
              fontWeight: 700, lineHeight: 1.05,
              color: '#fff', marginBottom: screen.isMobile ? 20 : 28,
              maxWidth: 860,
            }}>
              Relier les territoires.<br />
              Transformer les <span style={{ color: TL }}>vies</span>.
            </motion.h1>

            <motion.p variants={fadeUp} custom={0.25} style={{
              maxWidth: 620, fontSize: r.heroSub.fontSize,
              color: 'rgba(255,255,255,0.82)',
              fontWeight: 300, lineHeight: 1.7,
              marginBottom: screen.isMobile ? 36 : 48,
            }}>
              Routes, voies ferrées, réseaux énergétiques et corridors de mobilité :
              nous concevons et réalisons les grandes infrastructures de développement territorial.
            </motion.p>

            <motion.div variants={fadeUp} custom={0.38} style={{ ...r.ctaGroup }}>
              <Link href="/contact" style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                padding: screen.isMobile ? '14px 24px' : '16px 36px',
                borderRadius: 8, background: T, color: '#fff',
                fontSize: screen.isMobile ? 15 : 16, fontWeight: 600, textDecoration: 'none',
                boxShadow: `0 4px 24px rgba(92,59,26,0.5)`,
                width: r.btn.width,
              }}>
                Parlons de votre projet <ArrowRight size={18} />
              </Link>
              <Link href="#realisations" style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                padding: screen.isMobile ? '14px 24px' : '16px 36px',
                borderRadius: 8, background: AM, color: BK,
                fontSize: screen.isMobile ? 15 : 16, fontWeight: 600, textDecoration: 'none',
                width: r.btn.width,
              }}>
                Voir nos réalisations
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator — desktop only */}
        {!screen.isMobile && (
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
              Connecter aujourd'hui, développer demain
            </span>
            <div style={{ width: 1, height: 56, background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.5), transparent)' }} />
          </motion.div>
        )}

        {/* Bottom ticker */}
        {/* <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          background: `rgba(92,59,26,0.92)`, backdropFilter: 'blur(6px)',
          ...r.ticker,
          borderTop: `1px solid rgba(201,130,107,0.3)`,
        }}>
          {['45k+ km construits', '2B+ personnes connectées', '€78B de projets', '12 pays d\'intervention'].map((t, i) => (
            <span key={i} style={{
              color: 'rgba(255,255,255,0.85)',
              fontSize: screen.isMobile ? 11 : 13,
              fontWeight: 500, whiteSpace: 'nowrap',
            }}>
              <span style={{ color: AM, marginRight: 8 }}>◆</span>{t}
            </span>
          ))}
        </div> */}
      </section>

      

      {/* ══════════ SPÉCIALITÉS ══════════ */}
      <section style={{ ...r.section, background: LBG }}>
        <div style={{ ...r.container }}>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: screen.isMobile ? 40 : 64 }}>
            <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: 4, color: T, textTransform: 'uppercase', marginBottom: 16 }}>Ce que nous faisons</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: r.sectionTitle.fontSize, fontWeight: 700, color: BK, lineHeight: 1.15 }}>
              Nos Spécialités
            </h2>
            <div style={{ width: 64, height: 4, background: AM, borderRadius: 2, margin: '24px auto 0' }} />
          </motion.div>

          <div style={{ ...r.grid(300) }}>
            {[
              { Icon: Train,     title: 'Réseaux Ferroviaires',   desc: 'Lignes à grande vitesse, métros, tramways et réseaux régionaux. Plus de 15 000 km construits avec les technologies les plus avancées en signalisation et intermodalité.', color: T  },
              { Icon: Waypoints, title: 'Routes & Autoroutes',    desc: 'Réseaux routiers modernes, corridors de mobilité douce, autoroutes intelligentes et infrastructures résilientes adaptées aux conditions climatiques locales.', color: TL },
              { Icon: Zap,       title: 'Réseaux Énergétiques',   desc: 'Lignes haute tension, pipelines, réseaux de distribution d\'énergie renouvelable et infrastructures de transport d\'énergie sur des milliers de kilomètres.', color: AM },
            ].map(({ Icon, title, desc, color }, i) => (
              <motion.div key={i} variants={fadeUp} custom={i * 0.12} initial="hidden" whileInView="visible" viewport={{ once: true }}
                style={{
                  background: '#fff', borderRadius: 8,
                  padding: screen.isMobile ? '32px 24px' : '48px 36px',
                  border: '1px solid #E8E8E8', boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
                  position: 'relative', overflow: 'hidden',
                }}
                whileHover={{ y: -6, boxShadow: '0 16px 48px rgba(0,0,0,0.12)' }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: color }} />
                <div style={{ width: 64, height: 64, borderRadius: 8, background: `${color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 28, color }}>
                  <Icon size={32} />
                </div>
                <h3 style={{ fontSize: screen.isMobile ? 19 : 22, fontWeight: 600, color: BK, marginBottom: 16 }}>{title}</h3>
                <p style={{ fontSize: 15, color: TG, lineHeight: 1.75, fontWeight: 300 }}>{desc}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, color, fontWeight: 600, fontSize: 14, marginTop: 28 }}>
                  En savoir plus <ChevronRight size={16} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      

      {/* ══════════ APPROCHE ══════════ */}
      <section style={{ ...r.section, background: LBG }}>
        <div style={{ ...r.container }}>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: screen.isMobile ? 40 : 64 }}>
            <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: 4, color: T, textTransform: 'uppercase', marginBottom: 16 }}>Méthodologie</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: r.sectionTitle.fontSize, fontWeight: 700, color: BK, lineHeight: 1.15 }}>
              Connecter Responsablement
            </h2>
            <div style={{ width: 64, height: 4, background: AM, borderRadius: 2, margin: '24px auto 0' }} />
          </motion.div>

          <div style={{ ...r.grid(260), maxWidth: 1100, margin: '0 auto' }}>
            {[
              { Icon: Globe,     title: 'Planification Stratégique', desc: 'Analyses coût-bénéfice, études d\'impact socio-économique et engagement des communautés locales dès la phase de conception.', color: T  },
              { Icon: TrendingUp, title: 'Construction Agile',       desc: 'Méthodes modernes, minimisation des perturbations de trafic existant et phasage intelligent des travaux sur toute la durée du chantier.', color: TL },
              { Icon: Award,     title: 'Exploitation Durable',      desc: 'Maintenance prédictive, gestion intelligente du trafic et adaptation continue aux besoins futurs de mobilité des territoires.', color: AM },
            ].map(({ Icon, title, desc, color }, i) => (
              <motion.div key={i} variants={fadeUp} custom={i * 0.1} initial="hidden" whileInView="visible" viewport={{ once: true }}
                style={{
                  background: '#fff', borderRadius: 8,
                  padding: screen.isMobile ? '28px 20px' : '40px 32px',
                  border: '1px solid #E8E8E8', boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
                  position: 'relative', overflow: 'hidden',
                }}
                whileHover={{ y: -6, boxShadow: '0 16px 48px rgba(0,0,0,0.12)' }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: color }} />
                <div style={{ width: 56, height: 56, borderRadius: 8, background: `${color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24, color }}>
                  <Icon size={28} />
                </div>
                <h3 style={{ fontSize: screen.isMobile ? 17 : 20, fontWeight: 600, color: BK, marginBottom: 12 }}>{title}</h3>
                <p style={{ fontSize: 14, color: TG, lineHeight: 1.75, fontWeight: 300 }}>{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <section style={{ padding: screen.isMobile ? '80px 20px' : '120px 40px', background: BK, position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url('https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070')`,
          backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.15)',
        }} />
        {!screen.isMobile && <>
          <div style={{ position: 'absolute', top: -80, right: -80, width: 400, height: 400, borderRadius: '50%', border: `80px solid rgba(201,130,107,0.08)`, pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: -100, left: -60, width: 320, height: 320, borderRadius: '50%', border: `60px solid rgba(232,154,122,0.08)`, pointerEvents: 'none' }} />
        </>}

        <div style={{ position: 'relative', zIndex: 2, maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div style={{ display: 'inline-block', padding: '6px 20px', borderRadius: 4, background: AM, color: BK, fontSize: 12, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 32 }}>
              Binova Rock Builders
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: screen.isMobile ? 36 : 'clamp(40px, 5.5vw, 64px)', fontWeight: 700, color: '#fff', lineHeight: 1.15, marginBottom: 24 }}>
              Relier les territoires.<br />Développer les <span style={{ color: TL }}>nations</span>.
            </h2>
            {/* <p style={{ fontSize: screen.isMobile ? 16 : 18, color: 'rgba(255,255,255,0.72)', lineHeight: 1.7, fontWeight: 300, marginBottom: screen.isMobile ? 40 : 56 }}>
              45 000+ km de réseaux construits.<br />Plus de 2 milliards de personnes connectées.
            </p> */}
            <div style={{ ...r.ctaGroup, justifyContent: screen.isMobile ? 'stretch' : 'center' }}>
              <Link href="/contact" style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 12,
                padding: screen.isMobile ? '16px 24px' : '18px 44px', borderRadius: 8,
                background: T, color: '#fff', fontSize: screen.isMobile ? 15 : 17, fontWeight: 600, textDecoration: 'none',
                boxShadow: `0 4px 32px rgba(92,59,26,0.5)`, width: r.btn.width,
              }}
              onMouseEnter={e => { e.currentTarget.style.background = TL }}
              onMouseLeave={e => { e.currentTarget.style.background = T }}
              >
                Discuter de votre projet <ArrowRight size={20} />
              </Link>
              {/* <Link href="/about" style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 12,
                padding: screen.isMobile ? '16px 24px' : '18px 44px', borderRadius: 8,
                border: `2px solid rgba(255,255,255,0.25)`, color: '#fff',
                fontSize: screen.isMobile ? 15 : 17, fontWeight: 500, textDecoration: 'none',
                width: r.btn.width,
              }}>
                En savoir plus
              </Link> */}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}