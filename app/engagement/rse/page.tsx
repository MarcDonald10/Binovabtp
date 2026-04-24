'use client'

import { useEffect, useRef } from 'react'

/* ─── DATA ─────────────────────────────────────────────────────────────── */

const strategies = [
  {
    num: '01',
    title: 'Capital Humain',
    desc: 'Développement professionnel, bien‑être, égalité des chances et formation continue en géosciences pour nos équipes.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Excellence Environnementale',
    desc: 'Restauration des sites, reforestation native, préservation de la biodiversité et réduction mesurée de notre empreinte carbone.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Gouvernance Responsable',
    desc: 'Transparence totale, conformité aux standards IRMA & GRI et dialogue permanent avec toutes les parties prenantes.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Éducation & Bourses',
    desc: "Attribution de plus de 25 bourses annuelles aux jeunes des communautés locales, avec priorité aux filières scientifiques.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    num: '05',
    title: 'Santé & Sécurité',
    desc: 'Programme médical avancé, suivi psychologique, formation aux risques géotechniques et ergonomie des postes sur site.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    num: '06',
    title: 'Régénération Écologique',
    desc: "Plantation annuelle d'espèces locales, suivi scientifique de la biodiversité et réhabilitation complète après exploitation.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10c0-4.42-2.87-8.17-7-9.53" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
]

const counters = [
  { target: 12000, suffix: '',  label: 'Arbres plantés / an' },
  { target: 40,    suffix: '%', label: 'Réduction eau' },
  { target: 25,    suffix: '+', label: 'Bourses / an' },
  { target: 100,   suffix: '%', label: 'Énergie renouvelable' },
]

const progressItems = [
  { name: 'Réduction empreinte carbone', value: 68,  width: 0.68 },
  { name: 'Énergie renouvelable',         value: 54,  width: 0.54 },
  { name: 'Réhabilitation des sites',     value: 91,  width: 0.91 },
  { name: 'Objectif certifications',      value: 100, width: 1    },
  { name: 'Parité femmes / hommes',       value: 47,  width: 0.47 },
  { name: 'Formation collaborateurs',     value: 82,  width: 0.82 },
]

const initiatives = [
  {
    title: 'Développement Humain',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    items: [
      '250+ collaborateurs accompagnés et formés en continu',
      "25+ bourses d'études attribuées chaque année",
      'Certification ISO 9001 & 14001',
      'Programme de développement professionnel continu',
    ],
  },
  {
    title: 'Impact Environnemental',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    items: [
      '12 000 arbres plantés par an',
      'Restauration complète des sites après exploitation',
      "Réduction de 40% de la consommation d'eau",
      "Objectif 100% d'énergie renouvelable d'ici 2035",
    ],
  },
  {
    title: 'Engagement Communautaire',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    items: [
      '50+ projets communautaires menés chaque année',
      "2 millions d'euros investis annuellement en RSE",
      'Dialogue permanent avec les parties prenantes',
      'Transparence totale selon standards internationaux',
    ],
  },
]

const marqueeItems = [
  'Capital Humain',
  'Excellence Environnementale',
  'Gouvernance Responsable',
  'Éducation & Bourses',
  'Santé & Sécurité',
  'Régénération Écologique',
]

/* ─── ICON ──────────────────────────────────────────────────────────────── */
const IconArrow = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
  </svg>
)

/* ─── COMPONENT ─────────────────────────────────────────────────────────── */
export default function RSEPage() {
  const counterRefs  = useRef<(HTMLSpanElement | null)[]>([])
  const progressRefs = useRef<(HTMLDivElement  | null)[]>([])
  const cardRefs     = useRef<(HTMLDivElement  | null)[]>([])
  const initiated    = useRef(new Set<Element>())

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || initiated.current.has(entry.target)) return
        initiated.current.add(entry.target)
        const el = entry.target as HTMLElement

        /* ── Counter ── */
        if (el.dataset.counter) {
          const target = parseInt(el.dataset.target ?? '0', 10)
          const suffix = el.dataset.suffix ?? ''
          let t0 = 0
          const tick = (ts: number) => {
            if (!t0) t0 = ts
            const p    = Math.min((ts - t0) / 1800, 1)
            const ease = 1 - Math.pow(1 - p, 3)
            el.textContent = Math.round(ease * target).toLocaleString('fr-FR') + suffix
            if (p < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
          return
        }

        /* ── Progress bar ── */
        if (el.dataset.progress) {
          el.style.transform = `scaleX(${el.dataset.width ?? 0})`
          return
        }

        /* ── Card fade-in ── */
        el.style.opacity   = '1'
        el.style.transform = 'translateY(0)'
      })
    }, { threshold: 0.15 })

    counterRefs.current.forEach((el) => { if (el) observer.observe(el) })
    progressRefs.current.forEach((el) => { if (el) observer.observe(el) })
    cardRefs.current.forEach((el)     => { if (el) observer.observe(el) })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,400;0,700;0,900;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');

        /*
         * TYPOGRAPHIE UNIFORME
         * ─────────────────────────────────────────────────────────────────
         * On déclare la police une seule fois sur .rse.
         * Tous les enfants héritent de DM Sans automatiquement.
         * Fraunces est appliqué uniquement sur h1/h2/h3 et les
         * éléments de display (compteurs, numéros de stat).
         * Aucun font-family éparpillé ailleurs dans le CSS.
         */
        .rse, .rse * { box-sizing: border-box; }
        .rse {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 16px;
          line-height: 1.6;
          background: #f7f5f0;
          color: #1a1625;
          overflow-x: hidden;
        }
        .rse h1, .rse h2, .rse h3,
        .rse .rse-display { font-family: 'Fraunces', Georgia, serif; }

        /* ── HERO ── */
        .rse-hero {
          background: #0f0c1a;
          min-height: 520px;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 0 0 56px;
        }
        .rse-orb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          animation: rseOrbFloat 8s ease-in-out infinite;
        }
        .rse-orb--1 {
          width: 600px; height: 600px;
          top: -200px; right: -100px;
          background: radial-gradient(circle, rgba(107,91,149,.22) 0%, transparent 70%);
        }
        .rse-orb--2 {
          width: 400px; height: 400px;
          bottom: -100px; left: -50px;
          background: radial-gradient(circle, rgba(107,91,149,.12) 0%, transparent 70%);
          animation-duration: 10s;
          animation-direction: reverse;
        }
        @keyframes rseOrbFloat {
          0%, 100% { transform: translateY(0)    scale(1); }
          50%       { transform: translateY(-20px) scale(1.04); }
        }
        .rse-grid {
          position: absolute; inset: 0; pointer-events: none;
          background-image:
            linear-gradient(rgba(139,123,168,.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139,123,168,.05) 1px, transparent 1px);
          background-size: 60px 60px;
          opacity: 0;
          animation: rseGridIn 1.5s ease-out forwards;
        }
        @keyframes rseGridIn { to { opacity: 1; } }

        .rse-hero-top {
          padding: 32px 48px 0;
          display: flex; justify-content: space-between; align-items: center;
          position: relative; z-index: 2;
        }
        .rse-hero-tag {
          display: inline-flex; align-items: center; gap: 8px;
          border: 1px solid rgba(139,123,168,.35); color: #9d8ec4;
          font-size: 10px; font-weight: 600; letter-spacing: 2.5px;
          padding: 7px 14px; border-radius: 2px; text-transform: uppercase;
          animation: rseDown .6s .2s both;
        }
        .rse-tag-dot {
          width: 5px; height: 5px; background: #8B7BA8; border-radius: 50%;
          animation: rsePulse 2s infinite;
        }
        @keyframes rsePulse {
          0%, 100% { opacity: 1; transform: scale(1);   }
          50%       { opacity: .5; transform: scale(.8); }
        }
        @keyframes rseDown { from { opacity: 0; transform: translateY(-12px); } to { opacity: 1; transform: none; } }
        @keyframes rseUp   { from { opacity: 0; transform: translateY(20px);  } to { opacity: 1; transform: none; } }
        @keyframes rseFade { from { opacity: 0; }                               to { opacity: 1; } }

        .rse-hero-year {
          font-size: 11px; color: rgba(255,255,255,.2); letter-spacing: 2px;
          animation: rseFade 1s .5s both;
        }
        .rse-hero-content {
          padding: 0 48px; position: relative; z-index: 2;
          display: grid; grid-template-columns: 1fr 360px; gap: 48px;
          align-items: flex-end; margin-top: 48px;
        }

        /* h1 inherits Fraunces from .rse h1 rule */
        .rse-hero-title {
          font-size: clamp(36px, 4vw, 58px);
          font-weight: 900; color: #fff; line-height: 1.05; margin-bottom: 20px;
          animation: rseUp .7s .4s both;
        }
        .rse-hero-title em { color: #a08ecb; font-style: italic; }

        .rse-hero-sub {
          font-size: 14px; color: rgba(255,255,255,.45); line-height: 1.8;
          max-width: 380px; margin-bottom: 32px;
          animation: rseUp .7s .55s both;
        }
        .rse-hero-btn-wrap { animation: rseUp .7s .7s both; }
        .rse-hero-btn {
          display: inline-flex; align-items: center; gap: 8px;
          background: #6B5B95; color: #fff; border: none; cursor: pointer;
          font-size: 12px; font-weight: 600; padding: 13px 22px; border-radius: 3px;
          letter-spacing: .5px; text-transform: uppercase;
          transition: background .25s, transform .2s;
        }
        .rse-hero-btn:hover                { background: #8B7BA8; transform: translateY(-1px); }
        .rse-hero-btn svg                  { transition: transform .2s; }
        .rse-hero-btn:hover svg            { transform: translateX(3px); }

        .rse-hero-right {
          display: flex; flex-direction: column; gap: 10px;
          animation: rseUp .7s .5s both;
        }
        .rse-stat-card {
          background: rgba(255,255,255,.04);
          border: 1px solid rgba(139,123,168,.18);
          border-radius: 6px; padding: 16px 22px;
          display: flex; align-items: center; gap: 16px;
          position: relative; overflow: hidden; cursor: default;
          transition: background .3s, border-color .3s, transform .3s;
        }
        .rse-stat-card::before {
          content: ''; position: absolute;
          left: 0; top: 0; bottom: 0; width: 3px;
          background: linear-gradient(to bottom, #6B5B95, #a08ecb);
          opacity: 0; transition: opacity .3s;
        }
        .rse-stat-card:hover { background: rgba(107,91,149,.1); border-color: rgba(139,123,168,.35); transform: translateX(3px); }
        .rse-stat-card:hover::before { opacity: 1; }

        /* rse-display class → Fraunces for numbers */
        .rse-stat-num {
          font-size: 30px; font-weight: 700; color: #a08ecb;
          line-height: 1; white-space: nowrap;
        }
        .rse-stat-lbl { font-size: 11px; color: rgba(255,255,255,.35); letter-spacing: .3px; line-height: 1.5; }

        /* ── MARQUEE ── */
        .rse-marquee {
          background: #6B5B95; padding: 14px 0;
          overflow: hidden; white-space: nowrap;
        }
        .rse-marquee-track { display: inline-flex; animation: rseMarquee 22s linear infinite; }
        @keyframes rseMarquee { to { transform: translateX(-50%); } }
        .rse-marquee-item {
          display: inline-flex; align-items: center; gap: 16px; padding: 0 28px;
          font-size: 11px; font-weight: 600; color: rgba(255,255,255,.85);
          letter-spacing: 2px; text-transform: uppercase;
        }
        .rse-marquee-dot { width: 4px; height: 4px; background: rgba(255,255,255,.4); border-radius: 50%; flex-shrink: 0; }

        /* ── SECTION COMMONS ── */
        .rse-section      { padding: 80px 48px; }
        .rse-section-label {
          font-size: 10px; letter-spacing: 3.5px; color: #6B5B95;
          text-transform: uppercase; font-weight: 600; margin-bottom: 10px;
          display: flex; align-items: center; gap: 10px;
        }
        .rse-section-label::before { content: ''; width: 24px; height: 1px; background: currentColor; flex-shrink: 0; }

        /* h2 inherits Fraunces */
        .rse-section-title { font-size: 36px; font-weight: 700; color: #1a1625; line-height: 1.1; margin-bottom: 10px; }
        .rse-section-desc  { font-size: 14px; color: #8b8298; margin-bottom: 50px; }

        /* ── STRATEGY GRID ──
           NOTE: single declaration — no duplicate block further down */
        .rse-strat-grid { display: grid; grid-template-columns: repeat(3, 1fr); }
        .rse-strat-card {
          padding: 36px 30px; position: relative; overflow: hidden;
          background: #f7f5f0; cursor: default;
          border-right: 1px solid #e2ddd5;
          border-bottom: 1px solid #e2ddd5;
          /* scroll-in initial state */
          opacity: 0; transform: translateY(18px);
          transition: opacity .5s ease, transform .5s ease, background .3s;
        }
        .rse-strat-card:nth-child(3n)  { border-right: none; }
        .rse-strat-card:nth-child(n+4) { border-bottom: none; }
        .rse-strat-card:hover          { background: #f1eef9; }

        .rse-strat-bar {
          position: absolute; bottom: 0; left: 30px; right: 30px; height: 2px;
          background: linear-gradient(to right, #6B5B95, #a08ecb);
          transform: scaleX(0); transform-origin: left;
          transition: transform .35s ease;
        }
        .rse-strat-card:hover .rse-strat-bar { transform: scaleX(1); }

        .rse-strat-num {
          font-size: 11px; color: #a08ecb; margin-bottom: 16px; letter-spacing: 2px; font-weight: 600;
        }
        .rse-strat-icon {
          width: 44px; height: 44px; border-radius: 8px;
          background: rgba(107,91,149,.1); color: #6B5B95;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 16px; transition: background .3s;
        }
        .rse-strat-card:hover .rse-strat-icon { background: rgba(107,91,149,.18); }
        .rse-strat-title { font-size: 15px; font-weight: 600; color: #1a1625; margin-bottom: 8px; }
        .rse-strat-desc  { font-size: 13px; color: #8b8298; line-height: 1.7; }

        /* ── COUNTER BAR ── */
        .rse-counter-bar {
          background: #6B5B95; padding: 56px 48px;
          display: grid; grid-template-columns: repeat(4, 1fr);
        }
        .rse-counter-item {
          text-align: center; padding: 20px;
          border-right: 1px solid rgba(255,255,255,.15); cursor: default;
        }
        .rse-counter-item:last-child { border-right: none; }

        /* display number — Fraunces via .rse-display */
        .rse-counter-num {
          display: block;
          font-size: 44px; font-weight: 900; color: #fff; line-height: 1; margin-bottom: 8px;
        }
        .rse-counter-lbl {
          font-size: 11px; color: rgba(255,255,255,.55);
          letter-spacing: 1px; text-transform: uppercase; font-weight: 500;
        }

        /* ── PROGRESS ── */
        .rse-progress-section { padding: 80px 48px; background: #f7f5f0; }
        .rse-progress-grid    { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; }
        .rse-prog-item        { margin-bottom: 28px; }
        .rse-prog-header      { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 8px; }
        .rse-prog-name        { font-size: 13px; font-weight: 500; color: #1a1625; }
        .rse-prog-val         { font-size: 12px; color: #6B5B95; font-weight: 600; }
        .rse-prog-track       { height: 4px; background: #e2ddd5; border-radius: 2px; overflow: hidden; }
        .rse-prog-fill {
          height: 100%; border-radius: 2px;
          background: linear-gradient(to right, #6B5B95, #a08ecb);
          transform: scaleX(0); transform-origin: left;
          transition: transform 1.1s cubic-bezier(.16,1,.3,1);
        }

        /* ── DARK SECTION / INITIATIVES ── */
        .rse-dark { background: #0f0c1a; padding: 80px 48px; }
        .rse-dark .rse-section-label        { color: #a08ecb; }
        .rse-dark .rse-section-label::before{ background: #a08ecb; }
        .rse-dark .rse-section-title        { color: #fff; }
        .rse-dark .rse-section-desc         { color: rgba(255,255,255,.35); }

        .rse-init-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .rse-init-card {
          background: rgba(255,255,255,.03); border-radius: 8px;
          padding: 30px 26px; border: 1px solid rgba(139,123,168,.12);
          position: relative; cursor: default;
          /* scroll-in initial state — single transition declaration */
          opacity: 0; transform: translateY(18px);
          transition: opacity .5s ease, transform .5s ease, background .3s, border-color .3s;
        }
        .rse-init-card:hover {
          background: rgba(107,91,149,.08);
          border-color: rgba(139,123,168,.3);
          transform: translateY(-3px) !important;
        }
        .rse-init-accent {
          position: absolute; top: 0; left: 0; width: 40px; height: 3px;
          background: linear-gradient(to right, #6B5B95, transparent);
        }
        .rse-init-icon {
          width: 40px; height: 40px; color: #a08ecb;
          margin-bottom: 16px; display: flex; align-items: center;
          transition: transform .25s;
        }
        .rse-init-card:hover .rse-init-icon { transform: scale(1.1); }
        .rse-init-title { font-size: 14px; font-weight: 600; color: #fff; margin-bottom: 18px; }
        .rse-init-list  { list-style: none; padding: 0; }
        .rse-init-list li {
          font-size: 13px; color: rgba(255,255,255,.42); padding: 7px 0;
          border-bottom: 1px solid rgba(255,255,255,.05);
          display: flex; gap: 10px; align-items: flex-start; line-height: 1.55;
          transition: color .2s;
        }
        .rse-init-list li:last-child { border-bottom: none; }
        .rse-init-list li:hover      { color: rgba(255,255,255,.72); }
        .rse-init-bullet {
          width: 4px; height: 4px; border-radius: 50%; background: #8B7BA8;
          flex-shrink: 0; margin-top: 6px;
        }

        /* ── CTA ── */
        .rse-cta {
          padding: 72px 48px; background: #1a1625;
          display: grid; grid-template-columns: 1fr auto; gap: 48px; align-items: center;
          position: relative; overflow: hidden;
        }
        .rse-cta-orb {
          position: absolute; right: -80px; top: -80px;
          width: 300px; height: 300px; border-radius: 50%;
          background: radial-gradient(circle, rgba(107,91,149,.15) 0%, transparent 70%);
          pointer-events: none;
        }
        /* h2 inherits Fraunces */
        .rse-cta-title { font-size: 30px; font-weight: 700; color: #fff; line-height: 1.2; margin-bottom: 10px; }
        .rse-cta-desc  { font-size: 14px; color: rgba(255,255,255,.4); line-height: 1.7; }
        .rse-cta-btn {
          display: inline-flex; align-items: center; gap: 8px;
          background: transparent; color: #fff;
          border: 1px solid rgba(139,123,168,.5); cursor: pointer;
          font-size: 12px; font-weight: 600; padding: 14px 24px; border-radius: 3px;
          letter-spacing: .5px; text-transform: uppercase; white-space: nowrap;
          position: relative; z-index: 2;
          transition: background .25s, border-color .25s, transform .2s;
        }
        .rse-cta-btn:hover     { background: #6B5B95; border-color: #6B5B95; transform: translateY(-1px); }
        .rse-cta-btn svg       { transition: transform .2s; }
        .rse-cta-btn:hover svg { transform: translateX(3px); }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .rse-hero-content     { grid-template-columns: 1fr; padding: 48px 24px 0; }
          .rse-hero-right       { display: none; }
          .rse-hero-top         { padding: 32px 24px 0; }
          .rse-strat-grid       { grid-template-columns: 1fr 1fr; }
          .rse-strat-card:nth-child(3n)  { border-right: 1px solid #e2ddd5; }
          .rse-strat-card:nth-child(2n)  { border-right: none; }
          .rse-strat-card:nth-child(n+5) { border-bottom: none; }
          .rse-init-grid        { grid-template-columns: 1fr; }
          .rse-section          { padding: 60px 24px; }
          .rse-dark             { padding: 60px 24px; }
          .rse-progress-section { padding: 60px 24px; }
          .rse-progress-grid    { grid-template-columns: 1fr; }
          .rse-counter-bar      { grid-template-columns: 1fr 1fr; padding: 40px 24px; }
          .rse-counter-item:nth-child(2n) { border-right: none; }
          .rse-counter-item:nth-child(3),
          .rse-counter-item:nth-child(4)  { border-top: 1px solid rgba(255,255,255,.15); margin-top: 0; }
          .rse-cta              { grid-template-columns: 1fr; padding: 60px 24px; }
        }
        @media (max-width: 540px) {
          .rse-strat-grid { grid-template-columns: 1fr; }
          .rse-strat-card { border-right: none !important; }
          .rse-strat-card:not(:last-child) { border-bottom: 1px solid #e2ddd5 !important; }
        }
      `}</style>

      <div className="rse">

        {/* HERO */}
        <section className="rse-hero">
          <div className="rse-orb rse-orb--1" />
          <div className="rse-orb rse-orb--2" />
          <div className="rse-grid" />

          <div className="rse-hero-top">
            <span className="rse-hero-tag">
              <span className="rse-tag-dot" />
              Responsabilité Sociale
            </span>
            <span className="rse-hero-year">RSE · 2024</span>
          </div>

          <div className="rse-hero-content">
            <div>
              <h1 className="rse-hero-title">
                Nous extrayons le <em>présent</em>,<br />
                en préservant <em>l&apos;avenir</em>.
              </h1>
              <p className="rse-hero-sub">
                Une approche géologique responsable où performance économique,
                protection environnementale et développement humain avancent ensemble.
              </p>
              <div className="rse-hero-btn-wrap">
                <button className="rse-hero-btn">
                  Rejoindre notre engagement <IconArrow />
                </button>
              </div>
            </div>

            <div className="rse-hero-right">
              {[
                { value: '250+', label: 'Collaborateurs\nformés' },
                { value: '2M€',  label: 'Investissement RSE\nannuel' },
                { value: '50+',  label: 'Projets\ncommunautaires' },
                { value: '100%', label: 'Certifications\nobtenues' },
              ].map((s) => (
                <div key={s.label} className="rse-stat-card">
                  <div className="rse-stat-num rse-display">{s.value}</div>
                  <div className="rse-stat-lbl" style={{ whiteSpace: 'pre-line' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MARQUEE */}
        <div className="rse-marquee" aria-hidden="true">
          <div className="rse-marquee-track">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="rse-marquee-item">
                {item} <span className="rse-marquee-dot" />
              </span>
            ))}
          </div>
        </div>

        {/* STRATEGIES */}
        <section className="rse-section" style={{ background: '#f7f5f0' }}>
          <p className="rse-section-label">Nos six piliers</p>
          <h2 className="rse-section-title">Notre stratégie RSE</h2>
          <p className="rse-section-desc">Capital humain, excellence environnementale et gouvernance responsable</p>
          <div className="rse-strat-grid">
            {strategies.map((s, i) => (
              <div
                key={s.num}
                className="rse-strat-card"
                ref={(el) => { if (el) cardRefs.current[i] = el }}
                style={{ transitionDelay: `${(i % 3) * 80}ms` }}
              >
                <div className="rse-strat-num">{s.num}</div>
                <div className="rse-strat-icon">{s.icon}</div>
                <h3 className="rse-strat-title">{s.title}</h3>
                <p className="rse-strat-desc">{s.desc}</p>
                <div className="rse-strat-bar" />
              </div>
            ))}
          </div>
        </section>

        {/* COUNTERS */}
        <div className="rse-counter-bar">
          {counters.map((c, i) => (
            <div key={c.label} className="rse-counter-item">
              <span
                className="rse-counter-num rse-display"
                ref={(el) => { if (el) counterRefs.current[i] = el }}
                data-counter="true"
                data-target={String(c.target)}
                data-suffix={c.suffix}
              >
                0{c.suffix}
              </span>
              <span className="rse-counter-lbl">{c.label}</span>
            </div>
          ))}
        </div>

        {/* PROGRESS */}
        <section className="rse-progress-section">
          <p className="rse-section-label">Nos objectifs</p>
          <h2 className="rse-section-title">Indicateurs de performance</h2>
          <p className="rse-section-desc">Mesure transparente de nos engagements RSE</p>
          <div className="rse-progress-grid">
            {[progressItems.slice(0, 3), progressItems.slice(3)].map((group, gi) => (
              <div key={gi}>
                {group.map((p, i) => (
                  <div key={p.name} className="rse-prog-item">
                    <div className="rse-prog-header">
                      <span className="rse-prog-name">{p.name}</span>
                      <span className="rse-prog-val">{p.value}%</span>
                    </div>
                    <div className="rse-prog-track">
                      <div
                        className="rse-prog-fill"
                        ref={(el) => { if (el) progressRefs.current[gi * 3 + i] = el }}
                        data-progress="true"
                        data-width={String(p.width)}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* INITIATIVES */}
        <section className="rse-dark">
          <p className="rse-section-label">Sur le terrain</p>
          <h2 className="rse-section-title">Initiatives concrètes</h2>
          <p className="rse-section-desc" style={{ marginBottom: 44 }}>
            Des actions mesurables pour un impact durable
          </p>
          <div className="rse-init-grid">
            {initiatives.map((init, i) => (
              <div
                key={init.title}
                className="rse-init-card"
                ref={(el) => { if (el) cardRefs.current[strategies.length + i] = el }}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="rse-init-accent" />
                <div className="rse-init-icon">{init.icon}</div>
                <h3 className="rse-init-title">{init.title}</h3>
                <ul className="rse-init-list">
                  {init.items.map((item) => (
                    <li key={item}>
                      <span className="rse-init-bullet" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rse-cta">
          <div className="rse-cta-orb" />
          <div>
            <h2 className="rse-cta-title">Ensemble, construisons<br />un avenir responsable</h2>
            <p className="rse-cta-desc">
              L&apos;excellence géologique et la responsabilité durable ne sont pas
              contradictoires — elles sont indissociables.
            </p>
          </div>
          <button className="rse-cta-btn">
            Rejoindre notre engagement RSE <IconArrow />
          </button>
        </section>

      </div>
    </>
  )
}