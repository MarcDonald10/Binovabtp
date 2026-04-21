'use client'

import { Building2, Waves, Building, Train, Zap, Pickaxe, ArrowUpRight, ChevronRight } from 'lucide-react'
import Link from 'next/link'

const metiers = [
  {
    icon: Building2,
    number: '01',
    title: "Génie Civil",
    subtitle: "& Ouvrages d'Art",
    stats: "847",
    statsLabel: "projets livrés",
    description: "Ponts, viaducs, structures iconiques. Précision millimétrée, durabilité garantie sur des décennies.",
    accentColor: "#C8A96E",
    link: "/metier/genie-civil"
  },
  {
    icon: Waves,
    number: '02',
    title: "Barrages",
    subtitle: "& Retenues d'Eau",
    stats: "32",
    statsLabel: "barrages construits",
    description: "Maîtrise de l'eau, électricité renouvelable, 1 850 km³ stockés pour des générations.",
    accentColor: "#6EA3C8",
    link: "/metier/barrages"
  },
  {
    icon: Building,
    number: '03',
    title: "Génie Urbain",
    subtitle: "& Aménagement",
    stats: "156+",
    statsLabel: "projets urbains",
    description: "Villes durables, renouvellement urbain, 15 millions de bénéficiaires directs.",
    accentColor: "#C8A96E",
    link: "/metier/genie-urbain"
  },
  {
    icon: Train,
    number: '04',
    title: "Infrastructures",
    subtitle: "Linéaires",
    stats: "45 000+",
    statsLabel: "km de réseaux",
    description: "Routes, voies ferrées, lignes énergie. Connecter continents, rapprocher les peuples.",
    accentColor: "#6EC8A9",
    link: "/metier/infrastructures-lineaires"
  },
  {
    icon: Zap,
    number: '05',
    title: "Travaux",
    subtitle: "Souterrains",
    stats: "850+",
    statsLabel: "km de tunnels",
    description: "Tunnelage, minage, géotechnique. Excellence profonde, 28 ans de sécurité exemplaire.",
    accentColor: "#C86E6E",
    link: "/metier/travaux-souterrains"
  },
  {
    icon: Pickaxe,
    number: '06',
    title: "Carrières",
    subtitle: "& Exploitation Minière",
    stats: "15M",
    statsLabel: "tonnes/an",
    description: "35+ carrières opérées. Extraction responsable, restauration écologique garantie.",
    accentColor: "#A96EC8",
    link: "/metier/carrieres"
  }
]

const impactStats = [
  { value: "847", label: "Projets livrés", sub: "Tous continents, tous secteurs" },
  { value: "€450M+", label: "Chiffre d'affaires", sub: "Croissance stable depuis 28 ans" },
  { value: "99.2%", label: "Taux de réussite", sub: "En délai et budget" },
]

const whyUs = [
  { value: "28", unit: "ans", label: "D'expertise éprouvée", sub: "Depuis 1996" },
  { value: "250+", unit: "", label: "Experts qualifiés", sub: "Ingénieurs seniors certifiés" },
  { value: "12", unit: "", label: "Pays opérationnels", sub: "Présence globale, expertise locale" },
  { value: "ISO", unit: "", label: "Multi-certifiée", sub: "Qualité, environnement, sécurité" },
]

export default function MetierPage() {
  return (
    <div className="metier-page" style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif", background: '#0D0D0D', color: '#E8E2D9', minHeight: '100vh' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=Barlow+Condensed:wght@300;400;500;600;700&display=swap');

        .metier-page * { box-sizing: border-box; margin: 0; padding: 0; }

        .hero-section {
          min-height: 92vh;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 8rem 4rem 5rem;
          position: relative;
          overflow: hidden;
          border-bottom: 1px solid rgba(200, 169, 110, 0.2);
        }

        .hero-bg-lines {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.04;
          background-image:
            repeating-linear-gradient(90deg, #C8A96E 0px, #C8A96E 1px, transparent 1px, transparent 80px),
            repeating-linear-gradient(0deg, #C8A96E 0px, #C8A96E 1px, transparent 1px, transparent 80px);
        }

        .hero-accent-bar {
          width: 4px;
          height: 72px;
          background: #C8A96E;
          margin-bottom: 2.5rem;
          animation: growDown 1s ease forwards;
        }

        @keyframes growDown {
          from { height: 0; opacity: 0; }
          to { height: 72px; opacity: 1; }
        }

        .hero-eyebrow {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #C8A96E;
          margin-bottom: 1.5rem;
        }

        .hero-title {
          font-size: clamp(4rem, 10vw, 9rem);
          font-weight: 300;
          line-height: 0.92;
          letter-spacing: -0.02em;
          color: #F0EAE0;
          margin-bottom: 2.5rem;
        }

        .hero-title em {
          font-style: italic;
          color: #C8A96E;
        }

        .hero-description {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 1.05rem;
          font-weight: 300;
          line-height: 1.75;
          color: rgba(232, 226, 217, 0.6);
          max-width: 560px;
          border-left: 1px solid rgba(200, 169, 110, 0.3);
          padding-left: 1.5rem;
          margin-left: 0.5rem;
        }

        .hero-stats-row {
          display: flex;
          gap: 4rem;
          margin-top: 4rem;
          padding-top: 3rem;
          border-top: 1px solid rgba(200, 169, 110, 0.15);
        }

        .hero-stat-item {}

        .hero-stat-value {
          font-size: 2.25rem;
          font-weight: 600;
          color: #C8A96E;
          line-height: 1;
        }

        .hero-stat-label {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 0.7rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(232, 226, 217, 0.45);
          margin-top: 0.35rem;
        }

        /* — METIERS GRID — */
        .metiers-section {
          padding: 7rem 4rem;
          background: #0D0D0D;
        }

        .section-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 4.5rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid rgba(200, 169, 110, 0.15);
        }

        .section-label {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 0.7rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #C8A96E;
          margin-bottom: 0.75rem;
        }

        .section-title {
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          font-weight: 300;
          line-height: 1;
          color: #F0EAE0;
          letter-spacing: -0.02em;
        }

        .section-title em {
          font-style: italic;
          color: rgba(200, 169, 110, 0.7);
        }

        .metiers-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
          border: 1px solid rgba(200, 169, 110, 0.12);
        }

        @media (max-width: 1024px) {
          .metiers-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .metiers-grid { grid-template-columns: 1fr; }
          .hero-section { padding: 6rem 1.5rem 3.5rem; }
          .metiers-section { padding: 4rem 1.5rem; }
          .hero-stats-row { gap: 2rem; flex-wrap: wrap; }
        }

        .metier-card {
          position: relative;
          padding: 2.75rem 2.5rem;
          border-right: 1px solid rgba(200, 169, 110, 0.12);
          border-bottom: 1px solid rgba(200, 169, 110, 0.12);
          cursor: pointer;
          overflow: hidden;
          text-decoration: none;
          color: inherit;
          display: block;
          transition: background 0.4s ease;
          background: #0D0D0D;
        }

        .metier-card:nth-child(3n) { border-right: none; }
        .metier-card:nth-last-child(-n+3) { border-bottom: none; }

        .metier-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(200, 169, 110, 0.06) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .metier-card:hover::before { opacity: 1; }

        .metier-card:hover .card-number { color: #C8A96E; }
        .metier-card:hover .card-icon-wrap { border-color: rgba(200, 169, 110, 0.5); }
        .metier-card:hover .card-title { color: #C8A96E; }
        .metier-card:hover .card-arrow { opacity: 1; transform: translate(0, 0); }
        .metier-card:hover .card-divider { width: 100%; }

        .card-top-row {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 2rem;
        }

        .card-number {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.2em;
          color: rgba(200, 169, 110, 0.35);
          transition: color 0.3s;
        }

        .card-icon-wrap {
          width: 44px;
          height: 44px;
          border: 1px solid rgba(200, 169, 110, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: border-color 0.3s;
        }

        .card-title {
          font-size: 1.65rem;
          font-weight: 400;
          line-height: 1.1;
          color: #E8E2D9;
          letter-spacing: -0.01em;
          transition: color 0.3s;
          margin-bottom: 0.25rem;
        }

        .card-subtitle {
          font-size: 1.1rem;
          font-weight: 300;
          font-style: italic;
          color: rgba(232, 226, 217, 0.45);
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }

        .card-divider {
          height: 1px;
          background: rgba(200, 169, 110, 0.25);
          width: 32px;
          margin-bottom: 1.5rem;
          transition: width 0.4s ease;
        }

        .card-stat {
          margin-bottom: 1.25rem;
        }

        .card-stat-value {
          font-size: 2rem;
          font-weight: 600;
          color: #C8A96E;
          line-height: 1;
          letter-spacing: -0.02em;
        }

        .card-stat-label {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 0.65rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(232, 226, 217, 0.35);
          margin-top: 0.2rem;
        }

        .card-description {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 0.9rem;
          font-weight: 300;
          line-height: 1.7;
          color: rgba(232, 226, 217, 0.5);
        }

        .card-arrow {
          position: absolute;
          bottom: 2.75rem;
          right: 2.5rem;
          opacity: 0;
          transform: translate(-4px, 4px);
          transition: all 0.3s ease;
          color: #C8A96E;
        }

        /* — IMPACT SECTION — */
        .impact-section {
          padding: 7rem 4rem;
          background: #111009;
          border-top: 1px solid rgba(200, 169, 110, 0.1);
          border-bottom: 1px solid rgba(200, 169, 110, 0.1);
          position: relative;
          overflow: hidden;
        }

        .impact-section::before {
          content: 'BINOVA';
          position: absolute;
          bottom: -2rem;
          right: -1rem;
          font-size: clamp(8rem, 18vw, 18rem);
          font-weight: 700;
          letter-spacing: -0.05em;
          color: transparent;
          -webkit-text-stroke: 1px rgba(200, 169, 110, 0.05);
          pointer-events: none;
          user-select: none;
          line-height: 1;
        }

        .impact-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
          border: 1px solid rgba(200, 169, 110, 0.12);
          margin-top: 4rem;
        }

        @media (max-width: 768px) {
          .impact-grid { grid-template-columns: 1fr; }
          .why-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .impact-section { padding: 4rem 1.5rem; }
          .why-section { padding: 4rem 1.5rem !important; }
          .cta-section { padding: 4rem 1.5rem !important; }
        }

        .impact-item {
          padding: 3.5rem 3rem;
          border-right: 1px solid rgba(200, 169, 110, 0.12);
          position: relative;
        }

        .impact-item:last-child { border-right: none; }

        .impact-value {
          font-size: clamp(3rem, 6vw, 5rem);
          font-weight: 300;
          color: #F0EAE0;
          letter-spacing: -0.03em;
          line-height: 1;
          margin-bottom: 0.75rem;
        }

        .impact-value span {
          color: #C8A96E;
        }

        .impact-label {
          font-size: 1rem;
          font-weight: 400;
          color: rgba(232, 226, 217, 0.7);
          margin-bottom: 0.5rem;
        }

        .impact-sub {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 0.7rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(200, 169, 110, 0.4);
        }

        /* — WHY SECTION — */
        .why-section {
          padding: 7rem 4rem;
          background: #0D0D0D;
        }

        .why-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          margin-top: 4rem;
        }

        .why-card {
          border: 1px solid rgba(200, 169, 110, 0.12);
          padding: 2.5rem 2rem;
          position: relative;
          transition: border-color 0.3s;
        }

        .why-card::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: #C8A96E;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }

        .why-card:hover { border-color: rgba(200, 169, 110, 0.3); }
        .why-card:hover::after { transform: scaleX(1); }

        .why-value {
          font-size: 3rem;
          font-weight: 300;
          color: #C8A96E;
          letter-spacing: -0.03em;
          line-height: 1;
          margin-bottom: 0.25rem;
        }

        .why-unit {
          font-size: 1.2rem;
          font-style: italic;
          color: rgba(200, 169, 110, 0.6);
        }

        .why-label {
          font-size: 0.9rem;
          font-weight: 600;
          color: #E8E2D9;
          margin: 0.75rem 0 0.35rem;
        }

        .why-sub {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 0.75rem;
          color: rgba(232, 226, 217, 0.35);
          letter-spacing: 0.05em;
        }

        /* — CTA — */
        .cta-section {
          padding: 8rem 4rem;
          background: #0A0905;
          border-top: 1px solid rgba(200, 169, 110, 0.15);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 3rem;
          flex-wrap: wrap;
        }

        .cta-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 300;
          letter-spacing: -0.02em;
          line-height: 1.05;
          color: #F0EAE0;
          max-width: 540px;
        }

        .cta-title em {
          font-style: italic;
          color: #C8A96E;
        }

        .cta-right {}

        .cta-meta {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 0.75rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(200, 169, 110, 0.5);
          margin-bottom: 2rem;
        }

        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          padding: 1.1rem 2.5rem;
          border: 1px solid #C8A96E;
          color: #C8A96E;
          text-decoration: none;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 0.8rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          font-weight: 500;
          transition: all 0.3s ease;
          background: transparent;
          cursor: pointer;
        }

        .cta-btn:hover {
          background: #C8A96E;
          color: #0D0D0D;
        }

        .cta-btn svg {
          transition: transform 0.3s;
        }

        .cta-btn:hover svg {
          transform: translateX(4px);
        }
      `}</style>

      {/* ─── HERO ─── */}
      <section className="hero-section">
        <div className="hero-bg-lines" />
        <div className="hero-accent-bar" />
        <p className="hero-eyebrow">BINOVA — Expertise & Infrastructure</p>
        <h1 className="hero-title">
          Nos<br />
          <em>Métiers</em>
        </h1>
        <p className="hero-description">
          De la géotechnique aux ouvrages d'art, du tunnelage aux aménagements urbains,
          nous concevons des solutions durables et maîtrisées, adaptées aux environnements les plus exigeants.
        </p>

        <div className="hero-stats-row">
          <div className="hero-stat-item">
            <div className="hero-stat-value">Expertise</div>
            <div className="hero-stat-label">Solutions sur mesure</div>
          </div>
          <div className="hero-stat-item">
            <div className="hero-stat-value">Précision</div>
            <div className="hero-stat-label">Ingénierie maîtrisée</div>
          </div>
          <div className="hero-stat-item">
            <div className="hero-stat-value">Fiabilité</div>
            <div className="hero-stat-label">Exécution rigoureuse</div>
          </div>
          <div className="hero-stat-item">
            <div className="hero-stat-value">Excellence</div>
            <div className="hero-stat-label">Standards élevés</div>
          </div>
        </div>
      </section>

      {/* ─── MÉTIERS GRID ─── */}
      <section className="metiers-section">
        <div className="section-header">
          <div>
            <p className="section-label">Domaines d'excellence</p>
            <h2 className="section-title">Six piliers,<br /><em>une vision</em></h2>
          </div>
          <p style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '0.85rem', color: 'rgba(232,226,217,0.35)', maxWidth: '240px', lineHeight: 1.7, textAlign: 'right' }}>
            Chaque métier est une maîtrise absolue. Chaque projet, une signature.
          </p>
        </div>

        <div className="metiers-grid">
          {metiers.map((metier, idx) => {
            const Icon = metier.icon
            return (
              <Link key={idx} href={metier.link} className="metier-card">
                <div className="card-top-row">
                  <span className="card-number">{metier.number}</span>
                  <div className="card-icon-wrap">
                    <Icon size={20} color="rgba(200,169,110,0.7)" strokeWidth={1.5} />
                  </div>
                </div>

                <h3 className="card-title">{metier.title}</h3>
                <p className="card-subtitle">{metier.subtitle}</p>

                <div className="card-divider" />

                <div className="card-stat">
                  <div className="card-stat-value">{metier.stats}</div>
                  <div className="card-stat-label">{metier.statsLabel}</div>
                </div>

                <p className="card-description">{metier.description}</p>

                <div className="card-arrow">
                  <ArrowUpRight size={18} strokeWidth={1.5} />
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* ─── IMPACT ─── */}
      <section className="impact-section">
        <div>
          <p className="section-label">Résultats concrets</p>
          <h2 className="section-title">Impact <em>Global</em></h2>
        </div>
        <div className="impact-grid">
          {impactStats.map((stat, i) => (
            <div key={i} className="impact-item">
              <div className="impact-value">
                {stat.value.includes('+') || stat.value.includes('%')
                  ? <>{stat.value.replace(/[+%€M]/g, '')}<span>{stat.value.match(/[+%€M]+/)?.[0]}</span></>
                  : <>{stat.value}</>
                }
              </div>
              <p className="impact-label">{stat.label}</p>
              <p className="impact-sub">{stat.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── WHY BINOVA ─── */}
      <section className="why-section">
        <div>
          <p className="section-label">Pourquoi nous choisir</p>
          <h2 className="section-title">Les <em>raisons</em><br />de confier</h2>
        </div>
        <div className="why-grid">
          {whyUs.map((item, i) => (
            <div key={i} className="why-card">
              <div className="why-value">
                {item.value}
                {item.unit && <span className="why-unit"> {item.unit}</span>}
              </div>
              <p className="why-label">{item.label}</p>
              <p className="why-sub">{item.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="cta-section">
        <div>
          <h2 className="cta-title">
            Votre projet mérite<br />
            <em>l'excellence BINOVA</em>
          </h2>
        </div>
        <div className="cta-right">
          <p className="cta-meta">847 projets · 28 ans · 99.2% en délai</p>
          <a href="/devis" className="cta-btn">
            Demander un devis
            <ChevronRight size={16} strokeWidth={1.5} />
          </a>
        </div>
      </section>
    </div>
  )
}