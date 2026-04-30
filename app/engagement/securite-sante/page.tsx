'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, cubicBezier, useInView, animate } from 'framer-motion'
import Link from 'next/link'
import {
  Shield, AlertCircle, Users, Target, Zap, CheckCircle2, Award,
  ArrowRight, ChevronRight, HeartPulse, HardHat, Siren,
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
const D0  = '#0e141a'   // bleu nuit profond
const D1  = '#1a2430'   // bleu marine foncé
const D2  = '#1e3a5f'   // bleu acier
const D3  = '#2d5f8c'   // bleu moyen
const AC  = '#4a9edd'   // bleu ciel (accent principal)
const GD  = '#c9a84c'   // or (accent secondaire)
const TG  = '#7a8f9a'   // texte gris-bleu
const CR  = '#f4f0ea'   // crème

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

// ── Shield Visual (remplace l'orbite) ─────────────────────────
function ShieldVisual() {
  return (
    <div style={{ position: 'relative', width: 380, height: 380, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* Anneaux pulsants */}
      {[0, 1, 2].map(i => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            borderRadius: '50%',
            border: `1px solid rgba(74,158,221,${0.08 + i * 0.06})`,
            width: 380 - i * 60, height: 380 - i * 60,
          }}
          animate={{ scale: [1, 1.03, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 3 + i * 1.2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.6 }}
        />
      ))}

      {/* Point orbitant */}
      <motion.div
        style={{
          position: 'absolute',
          width: 10, height: 10,
          borderRadius: '50%',
          background: AC,
          boxShadow: `0 0 16px ${AC}`,
          top: 12, left: '50%', marginLeft: -5,
          transformOrigin: '5px 178px',
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        style={{
          position: 'absolute',
          width: 7, height: 7,
          borderRadius: '50%',
          background: GD,
          boxShadow: `0 0 12px ${GD}`,
          top: 44, right: 44,
          transformOrigin: '-95px 95px',
        }}
        animate={{ rotate: -360 }}
        transition={{ duration: 11, repeat: Infinity, ease: 'linear' }}
      />

      {/* Sphère centrale */}
      <div style={{
        width: 160, height: 160, borderRadius: '50%',
        background: `radial-gradient(circle at 35% 35%, ${D2}, ${D0})`,
        border: `1px solid rgba(74,158,221,0.35)`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexDirection: 'column', gap: 4, zIndex: 2,
        boxShadow: `0 0 60px rgba(74,158,221,0.15), inset 0 1px 0 rgba(255,255,255,0.05)`,
      }}>
        <Shield size={28} color={AC} strokeWidth={1.5} />
        <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 13, color: AC, textAlign: 'center', lineHeight: 1.3 }}>
          Zéro<br />Accident<br />Mortel
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
        background: hovered ? D1 : 'rgba(255,255,255,0.03)',
        border: `1px solid ${hovered ? `rgba(74,158,221,0.25)` : 'rgba(74,158,221,0.08)'}`,
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
        background: hovered ? `rgba(74,158,221,0.12)` : `rgba(255,255,255,0.05)`,
        border: `1px solid ${hovered ? 'rgba(74,158,221,0.3)' : 'rgba(255,255,255,0.06)'}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: 24,
        transition: 'all 0.3s',
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
export default function SecuriteSantePage() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: D0, color: '#fff', overflowX: 'hidden' }}>

      {/* ════ HERO ════ */}
      <section style={{ minHeight: '100vh', display: 'grid', gridTemplateColumns: '1fr 1fr', position: 'relative', overflow: 'hidden' }}>

        {/* BG texture */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 40px, rgba(74,158,221,0.02) 40px, rgba(74,158,221,0.02) 41px)`,
          pointerEvents: 'none',
        }} />
        <div style={{ position: 'absolute', top: -200, right: -200, width: 600, height: 600, borderRadius: '50%', background: `radial-gradient(circle, rgba(74,158,221,0.05) 0%, transparent 70%)`, pointerEvents: 'none' }} />

        {/* Left */}
        <div style={{ padding: '80px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', zIndex: 2 }}>
          <motion.div initial="hidden" animate="visible">

            <motion.div variants={fadeUp} custom={0} style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(74,158,221,0.12)', border: '1px solid rgba(74,158,221,0.25)',
              color: AC, fontSize: 10, fontWeight: 500, letterSpacing: 3,
              padding: '8px 16px', borderRadius: 2, marginBottom: 48,
              textTransform: 'uppercase',
            }}>
              <Shield size={12} color={AC} />
              Sécurité & Santé au Travail
            </motion.div>

            <motion.h1 variants={fadeUp} custom={0.1} style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(36px, 4vw, 58px)',
              fontWeight: 900, lineHeight: 1.1,
              color: '#fff', marginBottom: 28,
            }}>
              Zéro accident.<br />
              Zéro <span style={{ color: GD, fontStyle: 'italic' }}>compromis</span>.
            </motion.h1>

            <motion.p variants={fadeUp} custom={0.25} style={{
              fontSize: 16, color: 'rgba(255,255,255,0.55)',
              lineHeight: 1.75, maxWidth: 420, marginBottom: 52,
            }}>
              La sécurité n'est pas une priorité parmi d'autres. C'est la condition première
              de chacune de nos opérations géologiques, aujourd'hui et pour toujours.
            </motion.p>

            <motion.div variants={fadeUp} custom={0.38} style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <Link href="/contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                background: D3, color: '#fff',
                padding: '15px 28px', borderRadius: 3,
                fontSize: 14, fontWeight: 500, textDecoration: 'none',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = AC }}
              onMouseLeave={e => { e.currentTarget.style.background = D3 }}
              >
                Notre approche SSE <ArrowRight size={16} />
              </Link>
              <Link href="#strategies" style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                border: '1px solid rgba(74,158,221,0.3)', color: AC,
                padding: '15px 28px', borderRadius: 3,
                fontSize: 14, fontWeight: 500, textDecoration: 'none',
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = AC }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(74,158,221,0.3)' }}
              >
                Voir nos initiatives
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Right: shield visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease, delay: 0.3 }}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 2 }}
        >
          <ShieldVisual />
        </motion.div>

        {/* Left accent bar */}
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, background: `linear-gradient(to bottom, ${GD}, ${AC})` }} />
      </section>


      {/* ════ STRATÉGIES ════ */}
      <section id="strategies" style={{ padding: '100px 80px', background: D0 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ marginBottom: 72 }}>
            <p style={{ fontSize: 11, letterSpacing: 3, color: D3, textTransform: 'uppercase', marginBottom: 16 }}>Six piliers fondamentaux</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(32px, 3.5vw, 48px)', fontWeight: 700, color: '#fff', lineHeight: 1.15, marginBottom: 16 }}>
              Notre stratégie SSE
            </h2>
            <p style={{ fontSize: 16, color: TG, maxWidth: 480 }}>
              Une approche structurée, rigoureuse et humaine de la sécurité au quotidien
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
            {[
              { icon: Shield,       title: 'Prévention Proactive',         desc: "Identification systématique des risques géotechniques, évaluations quotidiennes et plans d'action préventifs adaptés à chaque site opérationnel.", color: AC },
              { icon: Users,        title: 'Culture de Sécurité Partagée', desc: 'Chaque collaborateur est acteur de sa propre sécurité et de celle des autres. Formation continue et sensibilisation quotidienne à tous les niveaux.', color: GD },
              { icon: AlertCircle,  title: 'Conformité & Audits Rigoureux', desc: 'Audits internes et externes réguliers, conformité stricte aux normes ISO 45001 et IRMA, vérifications terrain systématiques et transparentes.', color: D3 },
              { icon: Zap,          title: 'Réaction Immédiate',           desc: 'Enquêtes approfondies après tout incident, débriefings collectifs et mise en œuvre rapide des mesures correctives pour éviter toute récidive.', color: AC },
              { icon: HeartPulse,   title: 'Surveillance Médicale Avancée', desc: 'Examens médicaux périodiques, suivi personnalisé, prévention des TMS et des maladies professionnelles liées à l\'environnement minier et géologique.', color: GD },
              { icon: Award,        title: 'Excellence SSE Reconnue',      desc: 'Certifications internationales, record de sécurité exemplaire et reconnaissance de nos standards bien au-delà des exigences légales locales.', color: D3 },
            ].map((s, i) => (
              <StratCard key={i} {...s} delay={i * 0.07} />
            ))}
          </div>
        </div>
      </section>

      {/* ════ INITIATIVES ════ */}
      <section style={{ background: D1, padding: '100px 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -100, right: -100, width: 400, height: 400, borderRadius: '50%', background: `radial-gradient(circle, rgba(74,158,221,0.07) 0%, transparent 70%)`, pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ marginBottom: 64 }}>
            <p style={{ fontSize: 11, letterSpacing: 3, color: AC, textTransform: 'uppercase', marginBottom: 16 }}>Sur le terrain</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(30px, 3.2vw, 44px)', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: 12 }}>
              Initiatives concrètes
            </h2>
            <p style={{ fontSize: 15, color: TG }}>Des actions mesurables à chaque étape de nos opérations</p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {[
              {
                icon: HardHat, color: AC,
                title: 'Formation SSE Obligatoire',
                items: [
                  'Plus de 500 heures de formation par an',
                  'Modules adaptés aux risques géotechniques',
                  'Formation hauteur, machines lourdes, PPE',
                  'Mise à jour continue des compétences',
                ],
              },
              {
                icon: HeartPulse, color: GD,
                title: 'Surveillance Médicale',
                items: [
                  'Examens médicaux périodiques obligatoires',
                  'Suivi personnalisé de chaque collaborateur',
                  'Prévention des TMS et maladies professionnelles',
                  'Soutien psychologique inclus',
                ],
              },
              {
                icon: Target, color: '#f87171',
                title: 'Objectif Zéro Accident',
                items: [
                  "Taux de fréquence < 0,5 par million d'heures",
                  'Système de reporting transparent et ouvert',
                  'Culture du « Stop Work » activée à tout niveau',
                  'Enquêtes post-incident systématiques',
                ],
              },
            ].map((init, i) => {
              const Icon = init.icon
              return (
                <motion.div key={i} variants={fadeUp} custom={i * 0.12} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  style={{
                    border: '1px solid rgba(74,158,221,0.12)',
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
          background: `linear-gradient(135deg, ${D0} 0%, ${D1} 100%)`,
          borderTop: '1px solid rgba(74,158,221,0.1)',
        }}
      >
        <div>
          <p style={{ fontSize: 11, letterSpacing: 3, color: D3, textTransform: 'uppercase', marginBottom: 16 }}>Notre engagement</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: 700, color: '#fff', marginBottom: 14 }}>
            La sécurité est notre<br />valeur la plus précieuse
          </h2>
          <p style={{ fontSize: 15, color: TG, lineHeight: 1.7, maxWidth: 520 }}>
            Rejoignez une équipe où chaque collaborateur est protégé, formé et valorisé pour son expertise.
          </p>
        </div>
        <Link href="/contact" style={{
          display: 'inline-flex', alignItems: 'center', gap: 12,
          background: D3, color: '#fff',
          padding: '18px 32px', borderRadius: 3,
          fontSize: 15, fontWeight: 500, textDecoration: 'none',
          whiteSpace: 'nowrap', transition: 'background 0.2s',
          boxShadow: `0 4px 24px rgba(74,158,221,0.25)`,
        }}
        onMouseEnter={e => { e.currentTarget.style.background = AC }}
        onMouseLeave={e => { e.currentTarget.style.background = D3 }}
        >
          Nous rejoindre <ArrowRight size={18} />
        </Link>
      </motion.section>
    </div>
  )
}