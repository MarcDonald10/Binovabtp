'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, cubicBezier, useInView, animate } from 'framer-motion'
import Link from 'next/link'
import {
  Gavel, Shield, Users, Eye, Handshake, TrendingUp, Scale,
  ArrowRight, ChevronRight, Globe,
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

// ── Palette ───────────────────────────────────────────────────
const E0  = '#16100e'   // brun nuit profond
const E1  = '#241810'   // brun foncé
const E2  = '#4a2c20'   // brun cuivré
const E3  = '#7a4a38'   // brun moyen
const AC  = '#c4856a'   // terracotta (accent principal)
const GD  = '#c9a84c'   // or (accent secondaire)
const TG  = '#9a8a82'   // texte gris-brun

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

// ── Scale Visual (remplace l'orbite) ─────────────────────────
function ScaleVisual() {
  return (
    <div style={{ position: 'relative', width: 380, height: 380, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* Anneaux */}
      {[0, 1, 2].map(i => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            borderRadius: '50%',
            border: `1px solid rgba(196,133,106,${0.08 + i * 0.06})`,
            width: 380 - i * 60, height: 380 - i * 60,
          }}
          animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
          transition={{ duration: 22 + i * 8, repeat: Infinity, ease: 'linear' }}
        />
      ))}

      {/* Points orbitants */}
      <motion.div
        style={{
          position: 'absolute',
          width: 10, height: 10, borderRadius: '50%',
          background: AC, boxShadow: `0 0 16px ${AC}`,
          top: 12, left: '50%', marginLeft: -5,
          transformOrigin: '5px 178px',
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 9, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        style={{
          position: 'absolute',
          width: 7, height: 7, borderRadius: '50%',
          background: GD, boxShadow: `0 0 12px ${GD}`,
          top: 44, right: 44,
          transformOrigin: '-95px 95px',
        }}
        animate={{ rotate: -360 }}
        transition={{ duration: 13, repeat: Infinity, ease: 'linear' }}
      />

      {/* Sphère centrale */}
      <div style={{
        width: 160, height: 160, borderRadius: '50%',
        background: `radial-gradient(circle at 35% 35%, ${E2}, ${E0})`,
        border: `1px solid rgba(196,133,106,0.35)`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexDirection: 'column', gap: 4, zIndex: 2,
        boxShadow: `0 0 60px rgba(196,133,106,0.15), inset 0 1px 0 rgba(255,255,255,0.05)`,
      }}>
        <Scale size={28} color={AC} strokeWidth={1.5} />
        <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 13, color: AC, textAlign: 'center', lineHeight: 1.3 }}>
          Intégrité<br />Sans<br />Compromis
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
        background: hovered ? E1 : 'rgba(255,255,255,0.03)',
        border: `1px solid ${hovered ? 'rgba(196,133,106,0.25)' : 'rgba(196,133,106,0.08)'}`,
        borderRadius: 4,
        cursor: 'default',
        transition: 'all 0.3s ease',
        position: 'relative', overflow: 'hidden',
      }}
    >
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 2,
        background: `linear-gradient(90deg, ${color}, transparent)`,
        opacity: hovered ? 1 : 0.4,
        transition: 'opacity 0.3s',
      }} />
      <div style={{
        width: 52, height: 52, borderRadius: 12,
        background: hovered ? 'rgba(196,133,106,0.12)' : 'rgba(255,255,255,0.05)',
        border: `1px solid ${hovered ? 'rgba(196,133,106,0.3)' : 'rgba(255,255,255,0.06)'}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: 24, transition: 'all 0.3s',
      }}>
        <Icon size={24} color={hovered ? AC : TG} strokeWidth={1.5} />
      </div>
      <h3 style={{ fontSize: 15, fontWeight: 500, color: hovered ? '#fff' : 'rgba(255,255,255,0.75)', marginBottom: 10, transition: 'color 0.3s' }}>
        {title}
      </h3>
      <p style={{ fontSize: 13.5, color: hovered ? 'rgba(255,255,255,0.55)' : TG, lineHeight: 1.7, transition: 'color 0.3s' }}>
        {desc}
      </p>
      {hovered && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 5, color: AC, fontSize: 12, fontWeight: 500, marginTop: 20 }}>
          En savoir plus <ChevronRight size={14} />
        </div>
      )}
    </motion.div>
  )
}

// ═══════════════════════════════════════════════════════════════
export default function EthiquePage() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: E0, color: '#fff', overflowX: 'hidden' }}>

      {/* ════ HERO ════ */}
      <section style={{ minHeight: '100vh', display: 'grid', gridTemplateColumns: '1fr 1fr', position: 'relative', overflow: 'hidden' }}>

        {/* BG texture */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 40px, rgba(196,133,106,0.02) 40px, rgba(196,133,106,0.02) 41px)`,
          pointerEvents: 'none',
        }} />
        <div style={{ position: 'absolute', top: -200, right: -200, width: 600, height: 600, borderRadius: '50%', background: `radial-gradient(circle, rgba(196,133,106,0.05) 0%, transparent 70%)`, pointerEvents: 'none' }} />

        {/* Left */}
        <div style={{ padding: '80px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', zIndex: 2 }}>
          <motion.div initial="hidden" animate="visible">

            <motion.div variants={fadeUp} custom={0} style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(196,133,106,0.12)', border: '1px solid rgba(196,133,106,0.25)',
              color: AC, fontSize: 10, fontWeight: 500, letterSpacing: 3,
              padding: '8px 16px', borderRadius: 2, marginBottom: 48,
              textTransform: 'uppercase',
            }}>
              <Scale size={12} color={AC} />
              Intégrité & Transparence
            </motion.div>

            <motion.h1 variants={fadeUp} custom={0.1} style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(36px, 4vw, 58px)',
              fontWeight: 900, lineHeight: 1.1,
              color: '#fff', marginBottom: 28,
            }}>
              L'intégrité n'est<br />
              pas une option.<br />
              C'est notre <span style={{ color: GD, fontStyle: 'italic' }}>fondation</span>.
            </motion.h1>

            <motion.p variants={fadeUp} custom={0.25} style={{
              fontSize: 16, color: 'rgba(255,255,255,0.55)',
              lineHeight: 1.75, maxWidth: 420, marginBottom: 52,
            }}>
              Nous plaçons l'éthique au cœur de toutes nos décisions, car la confiance
              de nos partenaires et communautés est notre bien le plus précieux.
            </motion.p>

            <motion.div variants={fadeUp} custom={0.38} style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <Link href="/contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                background: E3, color: '#fff',
                padding: '15px 28px', borderRadius: 3,
                fontSize: 14, fontWeight: 500, textDecoration: 'none',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = AC }}
              onMouseLeave={e => { e.currentTarget.style.background = E3 }}
              >
                Nos standards éthiques <ArrowRight size={16} />
              </Link>
              <Link href="#strategies" style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                border: '1px solid rgba(196,133,106,0.3)', color: AC,
                padding: '15px 28px', borderRadius: 3,
                fontSize: 14, fontWeight: 500, textDecoration: 'none',
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = AC }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(196,133,106,0.3)' }}
              >
                Voir nos initiatives
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Right: visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease, delay: 0.3 }}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 2 }}
        >
          <ScaleVisual />
        </motion.div>

        {/* Left accent bar */}
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, background: `linear-gradient(to bottom, ${GD}, ${AC})` }} />
      </section>

      {/* ════ STATS BAR ════ */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease }}
        style={{
          background: E2,
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          borderTop: `1px solid rgba(196,133,106,0.15)`,
        }}
      >
        {[
          { num: 12,  suffix: '',   label: 'Audits internes / an',   icon: Gavel },
          { value: '100%',          label: 'Alertes résolues',        icon: Shield },
          { num: 5,   suffix: '',   label: 'Certifications obtenues', icon: Scale },
          { num: 150, suffix: '+',  label: 'Partenaires évalués',     icon: Users },
        ].map((s, i) => {
          const Icon = s.icon
          return (
            <div key={i} style={{
              padding: '44px 36px',
              borderRight: i < 3 ? '1px solid rgba(255,255,255,0.07)' : 'none',
            }}>
              <Icon size={20} color={AC} strokeWidth={1.5} style={{ marginBottom: 12 }} />
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 3vw, 46px)', fontWeight: 700, color: AC, lineHeight: 1, marginBottom: 8 }}>
                {s.num !== undefined
                  ? <Counter to={s.num} suffix={s.suffix} />
                  : s.value}
              </div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)', letterSpacing: 1, textTransform: 'uppercase' }}>{s.label}</div>
            </div>
          )
        })}
      </motion.div>

      {/* ════ STRATÉGIES ════ */}
      <section id="strategies" style={{ padding: '100px 80px', background: E0 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ marginBottom: 72 }}>
            <p style={{ fontSize: 11, letterSpacing: 3, color: E3, textTransform: 'uppercase', marginBottom: 16 }}>Six principes fondamentaux</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(32px, 3.5vw, 48px)', fontWeight: 700, color: '#fff', lineHeight: 1.15, marginBottom: 16 }}>
              Les fondements de notre éthique
            </h2>
            <p style={{ fontSize: 16, color: TG, maxWidth: 480 }}>
              Six piliers qui définissent chaque décision prise au sein de notre organisation
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
            {[
              { icon: Gavel,      title: 'Conformité & Légalité',       desc: "Respect absolu des lois nationales et internationales. Audits réguliers et conformité stricte aux conventions anti-corruption en vigueur.", color: AC },
              { icon: Eye,        title: 'Transparence Totale',          desc: "Communication claire et honnête avec toutes les parties prenantes. Publication annuelle de nos rapports d'éthique et de conformité.", color: GD },
              { icon: Handshake,  title: 'Partenariats Responsables',    desc: "Sélection rigoureuse de nos fournisseurs basée sur des critères éthiques, sociaux et environnementaux stricts et vérifiés.", color: E3 },
              { icon: Shield,     title: 'Lutte Anti-Corruption',        desc: "Tolérance zéro envers toute forme de corruption ou conflit d'intérêts. Formation obligatoire pour chaque collaborateur sans exception.", color: AC },
              { icon: Users,      title: 'Droits Humains',               desc: "Interdiction formelle du travail forcé et de toute discrimination. Respect rigoureux des conventions internationales de l'OIT.", color: GD },
              { icon: TrendingUp, title: 'Excellence & Intégrité',       desc: "Engagement envers la compétence, l'honnêteté intellectuelle et le respect des engagements pris auprès de nos clients et partenaires.", color: E3 },
            ].map((s, i) => (
              <StratCard key={i} {...s} delay={i * 0.07} />
            ))}
          </div>
        </div>
      </section>

      {/* ════ INITIATIVES ════ */}
      <section style={{ background: E1, padding: '100px 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -100, right: -100, width: 400, height: 400, borderRadius: '50%', background: `radial-gradient(circle, rgba(196,133,106,0.07) 0%, transparent 70%)`, pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ marginBottom: 64 }}>
            <p style={{ fontSize: 11, letterSpacing: 3, color: AC, textTransform: 'uppercase', marginBottom: 16 }}>Structures dédiées</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(30px, 3.2vw, 44px)', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: 12 }}>
              Notre gouvernance éthique
            </h2>
            <p style={{ fontSize: 15, color: TG }}>Des mécanismes concrets pour maintenir nos standards au quotidien</p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {[
              {
                icon: Scale, color: AC,
                title: 'Gouvernance Éthique',
                items: [
                  "Comité d'Éthique indépendant",
                  'Audits internes trimestriels',
                  'Gestion transparente des alertes',
                  'Formation continue du personnel',
                ],
              },
              {
                icon: Shield, color: GD,
                title: 'Contrôle des Partenaires',
                items: [
                  'Évaluation éthique des fournisseurs',
                  'Audits SSE & RSE réguliers',
                  'Suivi annuel des sous-traitants',
                  "Clause d'exclusion en cas de violation",
                ],
              },
              {
                icon: Eye, color: '#a78bfa',
                title: 'Transparence & Reporting',
                items: [
                  "Rapport annuel d'éthique public",
                  'Politiques écrites et accessibles',
                  'Certifications externes reconnues',
                  'Déclaration de conformité vérifiée',
                ],
              },
            ].map((init, i) => {
              const Icon = init.icon
              return (
                <motion.div key={i} variants={fadeUp} custom={i * 0.12} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  style={{
                    border: '1px solid rgba(196,133,106,0.12)',
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
                        <ChevronRight size={13} color={AC} style={{ flexShrink: 0, marginTop: 2 }} />
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
          background: `linear-gradient(135deg, ${E0} 0%, ${E1} 100%)`,
          borderTop: '1px solid rgba(196,133,106,0.1)',
        }}
      >
        <div>
          <p style={{ fontSize: 11, letterSpacing: 3, color: E3, textTransform: 'uppercase', marginBottom: 16 }}>Notre engagement</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: 700, color: '#fff', marginBottom: 14 }}>
            La confiance se construit<br />sur l'intégrité
          </h2>
          <p style={{ fontSize: 15, color: TG, lineHeight: 1.7, maxWidth: 520 }}>
            Nous nous engageons à maintenir les plus hauts standards éthiques dans toutes nos opérations, sans exception.
          </p>
        </div>
        <Link href="/contact" style={{
          display: 'inline-flex', alignItems: 'center', gap: 12,
          background: E3, color: '#fff',
          padding: '18px 32px', borderRadius: 3,
          fontSize: 15, fontWeight: 500, textDecoration: 'none',
          whiteSpace: 'nowrap', transition: 'background 0.2s',
          boxShadow: `0 4px 24px rgba(196,133,106,0.25)`,
        }}
        onMouseEnter={e => { e.currentTarget.style.background = AC }}
        onMouseLeave={e => { e.currentTarget.style.background = E3 }}
        >
          Discuter de nos standards <ArrowRight size={18} />
        </Link>
      </motion.section>
    </div>
  )
}