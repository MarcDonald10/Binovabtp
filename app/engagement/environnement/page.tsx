'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, cubicBezier, useInView, useMotionValue, useSpring, animate } from 'framer-motion'
import Link from 'next/link'
import {
  TrendingDown, Recycle, Leaf, Droplets, Wind, Sprout,
  ArrowRight, ChevronRight, Globe, Award, Zap, Shield,
} from 'lucide-react'

// ── Ease ─────────────────────────────────────────────────────
const ease = cubicBezier(0.22, 1, 0.36, 1)

const fadeUp = {
  hidden:  { opacity: 0, y: 48 },
  visible: (d = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.85, ease, delay: d },
  }),
}

const fadeIn = {
  hidden:  { opacity: 0 },
  visible: (d = 0) => ({
    opacity: 1,
    transition: { duration: 0.7, ease, delay: d },
  }),
}

// ── Palette ───────────────────────────────────────────────────
const G0  = '#0e1a0e'   // forêt profond
const G1  = '#1a2e1a'   // vert forêt
const G2  = '#2d5a2d'   // vert moyen
const G3  = '#5a8c5a'   // vert clair
const JD  = '#7fb97f'   // jade
const GD  = '#c9a84c'   // or
const CR  = '#f4f0ea'   // crème
const TG  = '#8a9a8a'   // texte gris-vert

// ── Animated counter ─────────────────────────────────────────
function Counter({ to, suffix = '', prefix = '' }: { to: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, to, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: v => setVal(Math.round(v)),
    })
    return controls.stop
  }, [inView, to])

  return <span ref={ref}>{prefix}{val.toLocaleString('fr-FR')}{suffix}</span>
}

// ── Orbital SVG animation ─────────────────────────────────────
function OrbitalVisual() {
  return (
    <div style={{ position: 'relative', width: 380, height: 380, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* Rings */}
      {[0, 1, 2].map(i => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            borderRadius: '50%',
            border: `1px solid rgba(127,185,127,${0.08 + i * 0.06})`,
            width: 380 - i * 60, height: 380 - i * 60,
          }}
          animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
          transition={{ duration: 20 + i * 8, repeat: Infinity, ease: 'linear' }}
        />
      ))}

      {/* Orbiting dot */}
      <motion.div
        style={{
          position: 'absolute',
          width: 12, height: 12,
          borderRadius: '50%',
          background: JD,
          boxShadow: `0 0 16px ${JD}`,
          top: 10, left: '50%', marginLeft: -6,
          transformOrigin: '6px 180px',
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        style={{
          position: 'absolute',
          width: 8, height: 8,
          borderRadius: '50%',
          background: GD,
          boxShadow: `0 0 12px ${GD}`,
          top: 40, right: 40,
          transformOrigin: '-100px 100px',
        }}
        animate={{ rotate: -360 }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
      />

      {/* Center sphere */}
      <div style={{
        width: 160, height: 160, borderRadius: '50%',
        background: `radial-gradient(circle at 35% 35%, ${G2}, ${G0})`,
        border: `1px solid rgba(127,185,127,0.35)`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexDirection: 'column', gap: 4, zIndex: 2,
        boxShadow: `0 0 60px rgba(90,140,90,0.15), inset 0 1px 0 rgba(255,255,255,0.05)`,
      }}>
        <Globe size={28} color={JD} strokeWidth={1.5} />
        <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 13, color: JD, textAlign: 'center', lineHeight: 1.3 }}>
          Net<br />Zéro<br />2040
        </span>
      </div>
    </div>
  )
}

// ── Strategy card ─────────────────────────────────────────────
function StratCard({ icon: Icon, title, desc, color, delay }: {
  icon: React.ElementType; title: string; desc: string; color: string; delay: number
}) {
  const [hovered, setHovered] = useState(false)
  return (
    <motion.div
      variants={fadeUp} custom={delay}
      initial="hidden" whileInView="visible"
      viewport={{ once: true }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: '36px 32px',
        background: hovered ? G1 : 'rgba(255,255,255,0.03)',
        border: `1px solid ${hovered ? `rgba(127,185,127,0.25)` : 'rgba(127,185,127,0.08)'}`,
        borderRadius: 4,
        cursor: 'default',
        transition: 'all 0.3s ease',
        position: 'relative', overflow: 'hidden',
      }}
    >
      {/* Top accent bar */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 2,
        background: `linear-gradient(90deg, ${color}, transparent)`,
        opacity: hovered ? 1 : 0.4,
        transition: 'opacity 0.3s',
      }} />
      <div style={{
        width: 52, height: 52, borderRadius: 12,
        background: hovered ? `rgba(127,185,127,0.12)` : `rgba(255,255,255,0.05)`,
        border: `1px solid ${hovered ? 'rgba(127,185,127,0.3)' : 'rgba(255,255,255,0.06)'}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: 24,
        transition: 'all 0.3s',
      }}>
        <Icon size={24} color={hovered ? JD : TG} strokeWidth={1.5} />
      </div>
      <h3 style={{ fontSize: 15, fontWeight: 500, color: hovered ? '#fff' : 'rgba(255,255,255,0.75)', marginBottom: 10, transition: 'color 0.3s' }}>
        {title}
      </h3>
      <p style={{ fontSize: 13.5, color: hovered ? 'rgba(255,255,255,0.55)' : TG, lineHeight: 1.7, transition: 'color 0.3s' }}>
        {desc}
      </p>
      {hovered && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 5, color: JD, fontSize: 12, fontWeight: 500, marginTop: 20 }}>
          En savoir plus <ChevronRight size={14} />
        </div>
      )}
    </motion.div>
  )
}

// ═══════════════════════════════════════════════════════════════
export default function EnvironnementPage() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: G0, color: '#fff', overflowX: 'hidden' }}>

      {/* ════ HERO ════ */}
      <section style={{ minHeight: '100vh', display: 'grid', gridTemplateColumns: '1fr 1fr', position: 'relative', overflow: 'hidden' }}>

        {/* BG texture */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 40px, rgba(90,140,90,0.025) 40px, rgba(90,140,90,0.025) 41px)`,
          pointerEvents: 'none',
        }} />
        <div style={{ position: 'absolute', top: -200, right: -200, width: 600, height: 600, borderRadius: '50%', background: `radial-gradient(circle, rgba(90,140,90,0.06) 0%, transparent 70%)`, pointerEvents: 'none' }} />

        {/* Left */}
        <div style={{ padding: '80px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', zIndex: 2 }}>
          <motion.div initial="hidden" animate="visible">

            <motion.div variants={fadeUp} custom={0} style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(90,140,90,0.15)', border: '1px solid rgba(139,196,139,0.25)',
              color: JD, fontSize: 10, fontWeight: 500, letterSpacing: 3,
              padding: '8px 16px', borderRadius: 2, marginBottom: 48,
              textTransform: 'uppercase',
            }}>
              <Leaf size={12} color={JD} />
              Environnement & Durabilité
            </motion.div>

            <motion.h1 variants={fadeUp} custom={0.1} style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(36px, 4vw, 58px)',
              fontWeight: 900, lineHeight: 1.1,
              color: '#fff', marginBottom: 28,
            }}>
              Nous ne nous<br />contentons pas<br />d'extraire.<br />
              <span style={{ color: JD, fontStyle: 'italic' }}>Nous restaurons.</span>
            </motion.h1>

            <motion.p variants={fadeUp} custom={0.25} style={{
              fontSize: 16, color: 'rgba(255,255,255,0.55)',
              lineHeight: 1.75, maxWidth: 420, marginBottom: 52,
            }}>
              Une approche responsable qui allie performance géologique et préservation
              durable des écosystèmes, aujourd'hui et pour les générations futures.
            </motion.p>

            <motion.div variants={fadeUp} custom={0.38} style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <Link href="/contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                background: G3, color: '#fff',
                padding: '15px 28px', borderRadius: 3,
                fontSize: 14, fontWeight: 500, textDecoration: 'none',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = JD }}
              onMouseLeave={e => { e.currentTarget.style.background = G3 }}
              >
                Nos solutions durables <ArrowRight size={16} />
              </Link>
              <Link href="#strategies" style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                border: '1px solid rgba(127,185,127,0.3)', color: JD,
                padding: '15px 28px', borderRadius: 3,
                fontSize: 14, fontWeight: 500, textDecoration: 'none',
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = JD }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(127,185,127,0.3)' }}
              >
                Voir nos initiatives
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Right: orbital */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease, delay: 0.3 }}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 2 }}
        >
          <OrbitalVisual />
        </motion.div>

        {/* Left accent bar */}
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, background: `linear-gradient(to bottom, ${GD}, ${G3})` }} />
      </section>

      {/* ════ STATS BAR ════ */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease }}
        style={{
          background: G2,
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          borderTop: `1px solid rgba(127,185,127,0.15)`,
        }}
      >
        {[
          { num: 60, suffix: '%', prefix: '−', label: 'Émissions CO₂ réduites', icon: TrendingDown },
          { value: 'ISO 14001', label: 'Management env. certifié', icon: Award },
          { num: 100000, suffix: '', label: 'Tonnes recyclées / an', icon: Recycle },
          { num: 4000, suffix: '+', label: 'Hectares protégés', icon: Sprout },
        ].map((s, i) => {
          const Icon = s.icon
          return (
            <div key={i} style={{
              padding: '44px 36px',
              borderRight: i < 3 ? '1px solid rgba(255,255,255,0.07)' : 'none',
            }}>
              <Icon size={20} color={JD} strokeWidth={1.5} style={{ marginBottom: 12 }} />
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 3vw, 46px)', fontWeight: 700, color: JD, lineHeight: 1, marginBottom: 8 }}>
                {s.num !== undefined ? <Counter to={s.num} suffix={s.suffix} prefix={s.prefix} /> : s.value}
              </div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)', letterSpacing: 1, textTransform: 'uppercase' }}>{s.label}</div>
            </div>
          )
        })}
      </motion.div>

      {/* ════ STRATÉGIES ════ */}
      <section id="strategies" style={{ padding: '100px 80px', background: G0 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ marginBottom: 72 }}>
            <p style={{ fontSize: 11, letterSpacing: 3, color: G3, textTransform: 'uppercase', marginBottom: 16 }}>Trois axes stratégiques</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(32px, 3.5vw, 48px)', fontWeight: 700, color: '#fff', lineHeight: 1.15, marginBottom: 16 }}>
              Notre stratégie environnementale
            </h2>
            <p style={{ fontSize: 16, color: TG, maxWidth: 480 }}>
              Minimiser l'impact, maximiser la contribution positive à chaque projet
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
            {[
              { icon: TrendingDown, title: 'Réduction des émissions',     desc: "Objectif Net-Zéro d'ici 2040. Électrification de la flotte, optimisation logistique et énergies renouvelables sur tous nos sites opérationnels.", color: JD },
              { icon: Recycle,      title: 'Économie circulaire',          desc: '100 000 tonnes de matériaux valorisés chaque année. Réutilisation systématique des déblais et co-produits issus de nos chantiers.', color: GD },
              { icon: Leaf,         title: 'Protection de la biodiversité',desc: 'Plans de conservation avant, pendant et après chaque projet. Plus de 10 000 arbres plantés par an et suivi scientifique continu.', color: G3 },
              { icon: Droplets,     title: "Gestion de l'eau",             desc: "Systèmes de récupération, traitement et recyclage des eaux de chantier. Réduction moyenne de 40% de la consommation en eau.", color: JD },
              { icon: Zap,          title: 'Transition énergétique',       desc: "50% d'énergie déjà renouvelable. Objectif 100% d'ici 2035 grâce au solaire, à l'éolien et aux systèmes de stockage avancés.", color: GD },
              { icon: Sprout,       title: 'Restauration des écosystèmes', desc: 'Restauration complète et scientifiquement suivie après chaque excavation. Plus de 4 000 hectares restaurés depuis 2010.', color: G3 },
            ].map((s, i) => (
              <StratCard key={i} {...s} delay={i * 0.07} />
            ))}
          </div>
        </div>
      </section>

      {/* ════ INITIATIVES ════ */}
      <section style={{ background: G1, padding: '100px 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -100, right: -100, width: 400, height: 400, borderRadius: '50%', background: `radial-gradient(circle, rgba(90,140,90,0.08) 0%, transparent 70%)`, pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ marginBottom: 64 }}>
            <p style={{ fontSize: 11, letterSpacing: 3, color: JD, textTransform: 'uppercase', marginBottom: 16 }}>Sur le terrain</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(30px, 3.2vw, 44px)', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: 12 }}>
              Initiatives concrètes
            </h2>
            <p style={{ fontSize: 15, color: TG }}>Des actions mesurables à chaque étape de nos projets</p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {[
              {
                icon: Droplets, color: '#60a5fa',
                title: "Gestion de l'eau",
                items: ['Récupération et traitement des eaux de chantier', 'Recyclage systématique des eaux usées', 'Réduction de 40% de la consommation', 'Systèmes de filtration avancés'],
              },
              {
                icon: Wind, color: JD,
                title: 'Énergies renouvelables',
                items: ["50% d'énergie renouvelable actuellement", "Objectif 100% d'ici 2035", 'Panneaux solaires sur tous les sites', "Éoliennes pour l'énergie d'appoint"],
              },
              {
                icon: Sprout, color: GD,
                title: 'Biodiversité',
                items: ['Restauration écologique scientifiquement suivie', '4 000+ hectares restaurés depuis 2010', '10 000+ arbres plantés par an', 'Plans de conservation avant chaque projet'],
              },
            ].map((init, i) => {
              const Icon = init.icon
              return (
                <motion.div key={i} variants={fadeUp} custom={i * 0.12} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  style={{
                    border: '1px solid rgba(127,185,127,0.12)',
                    borderRadius: 4, padding: '36px 32px',
                    position: 'relative', overflow: 'hidden',
                    background: 'rgba(255,255,255,0.02)',
                  }}
                >
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: init.color }} />
                  <div style={{
                    width: 48, height: 48, borderRadius: 10,
                    background: `${init.color}18`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: 20,
                  }}>
                    <Icon size={22} color={init.color} strokeWidth={1.5} />
                  </div>
                  <h3 style={{ fontSize: 16, fontWeight: 500, color: '#fff', marginBottom: 24 }}>{init.title}</h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {init.items.map((item, j) => (
                      <motion.li key={j}
                        initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                        transition={{ delay: j * 0.08 + i * 0.1, duration: 0.5 }}
                        style={{
                          fontSize: 13.5, color: 'rgba(255,255,255,0.48)',
                          padding: '9px 0', borderBottom: '1px solid rgba(255,255,255,0.05)',
                          display: 'flex', alignItems: 'flex-start', gap: 10, lineHeight: 1.5,
                        }}
                      >
                        <ChevronRight size={13} color={JD} style={{ flexShrink: 0, marginTop: 2 }} />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ════ CTA ════ */}
      <motion.section
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          padding: '90px 80px',
          display: 'grid', gridTemplateColumns: '1fr auto',
          gap: 60, alignItems: 'center',
          background: `linear-gradient(135deg, ${G0} 0%, ${G1} 100%)`,
          borderTop: '1px solid rgba(127,185,127,0.1)',
        }}
      >
        <div>
          <p style={{ fontSize: 11, letterSpacing: 3, color: G3, textTransform: 'uppercase', marginBottom: 16 }}>Notre engagement</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: 700, color: '#fff', marginBottom: 14 }}>
            Protéger la planète,<br />un projet à la fois
          </h2>
          <p style={{ fontSize: 15, color: TG, lineHeight: 1.7, maxWidth: 520 }}>
            Une industrie géologique performante peut et doit être exemplaire sur le plan environnemental.
          </p>
        </div>
        <Link href="/contact" style={{
          display: 'inline-flex', alignItems: 'center', gap: 12,
          background: G3, color: '#fff',
          padding: '18px 32px', borderRadius: 3,
          fontSize: 15, fontWeight: 500, textDecoration: 'none',
          whiteSpace: 'nowrap', transition: 'background 0.2s',
          boxShadow: `0 4px 24px rgba(90,140,90,0.25)`,
        }}
        onMouseEnter={e => { e.currentTarget.style.background = JD }}
        onMouseLeave={e => { e.currentTarget.style.background = G3 }}
        >
          Discuter de nos solutions <ArrowRight size={18} />
        </Link>
      </motion.section>
    </div>
  )
}