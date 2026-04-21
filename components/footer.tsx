'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, ArrowUpRight, MoveRight, Linkedin, Twitter, Facebook } from 'lucide-react'
import { motion } from 'framer-motion'

// ─── Constants ────────────────────────────────────────────────────────────────

const ACCENT = '#1E6B3A'

const LINKS = {
  solutions: [
    { label: 'Tunnelage', href: '/tunnelage' },
    { label: 'Minage', href: '/minage' },
    { label: 'Terrassement', href: '/terrassement' },
    { label: 'Infrastructure', href: '/metier' },
  ],
  engagement: [
    { label: 'RSE', href: '/engagement/rse' },
    { label: 'Sécurité & Santé', href: '/engagement/securite-sante' },
    { label: 'Environnement', href: '/engagement/environnement' },
    { label: 'Éthique', href: '/engagement/ethique' },
  ],
  legal: [
    { label: 'Mentions légales', href: '/mentions-legales' },
    { label: 'Confidentialité', href: '/politique-confidentialite' },
    { label: 'Conditions d\'utilisation', href: '/conditions-utilisation' },
    { label: 'Devis IA', href: '/devis' },
  ],
}

const STATS = [
  { value: 'Excellence', unit: '', label: 'dans chaque projet livré' },
  { value: 'Expertise', unit: '', label: 'technique pluridisciplinaire' },
  { value: 'Maîtrise', unit: '', label: 'des environnements complexes' },
  { value: 'Fiabilité', unit: '', label: 'dans l’exécution terrain' },
]

const SOCIALS = [
  { label: 'LinkedIn', href: 'https://linkedin.com', Icon: Linkedin },
  { label: 'Twitter', href: 'https://twitter.com', Icon: Twitter },
  { label: 'Facebook', href: 'https://facebook.com', Icon: Facebook },
]

// ─── Sub-components ───────────────────────────────────────────────────────────

function FooterLinkList({ items }: { items: { label: string; href: string }[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className="group flex items-center gap-2 text-[13px] text-white/35 hover:text-white/80 transition-colors duration-200"
          >
            <span
              className="w-1 h-1 rounded-full flex-shrink-0 transition-all duration-300 group-hover:w-2.5"
              style={{ background: `${ACCENT}60` }}
            />
            <span className="group-hover:translate-x-0.5 transition-transform duration-200">
              {item.label}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  )
}

function FooterColumnTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2.5 mb-5">
      <div className="h-px w-4" style={{ background: ACCENT }} />
      <h4 className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/40">
        {children}
      </h4>
    </div>
  )
}

// ─── Main Footer ──────────────────────────────────────────────────────────────

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-[#0a0906] overflow-hidden">

      {/* ── Top separator ── */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: `linear-gradient(to right, transparent, ${ACCENT}30, transparent)` }}
      />

      {/* ── Ambient glow ── */}
      <div
        className="absolute bottom-0 right-0 w-[700px] h-[400px] rounded-full pointer-events-none"
        style={{ background: `radial-gradient(ellipse, ${ACCENT}06 0%, transparent 70%)` }}
      />

      {/* ══════════════════════════════════════════
          STATS BAND
      ══════════════════════════════════════════ */}
      <div className="relative border-b border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {STATS.map((s, i) => (
              <motion.div
                key={i}
                className={`group py-8 px-6 text-center border-r border-white/[0.05] last:border-r-0 md:border-r hover:bg-white/[0.02] transition-colors duration-300 ${i === 1 ? 'border-r border-white/[0.05]' : ''
                  } ${i >= 2 ? 'border-t border-white/[0.05] md:border-t-0' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
              >
                <p className="text-[clamp(1.8rem,3vw,2.5rem)] font-serif font-bold text-white leading-none mb-1.5 group-hover:text-[#1E6B3A] transition-colors duration-300">
                  {s.value}
                  <span style={{ color: ACCENT }}>{s.unit}</span>
                </p>
                <p className="text-[11px] text-white/25 uppercase tracking-[0.15em]">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          MAIN CONTENT
      ══════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-[1.8fr_1fr_1fr_1fr] gap-12 xl:gap-16">

          {/* ── Brand column ── */}
          <div>
            {/* Logo */}
            <Link href="/" className="group inline-flex items-center gap-3 mb-7">
              <div className="w-40 h-40 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:opacity-80">
                <Image
                  src="/logo.png"
                  alt="Binova Logo"
                  width={70}
                  height={70}
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>

            <p className="text-[13px] text-white/35 font-light leading-relaxed mb-8 max-w-xs">
              Conception et réalisation d’infrastructures souterraines complexes, avec un haut niveau d’exigence en matière de qualité, sécurité et performance.
            </p>

            {/* Contact */}
            <div className="space-y-3">
              {[
                { Icon: Phone, text: '+................', href: 'tel:+............' },
                { Icon: Mail, text: '.......@.....', href: 'mailto:.........' },
                { Icon: MapPin, text: '......, .....', href: '#' },
              ].map(({ Icon, text, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="group flex items-center gap-3"
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 border border-white/[0.06] bg-white/[0.02] group-hover:border-[#1E6B3A]/30 group-hover:bg-[#1E6B3A]/8 transition-all duration-300"
                  >
                    <Icon size={13} className="text-white/30 group-hover:text-[#1E6B3A] transition-colors duration-300" />
                  </div>
                  <span className="text-[12px] text-white/30 group-hover:text-white/65 transition-colors duration-200 font-light">
                    {text}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* ── Solutions ── */}
          <div>
            <FooterColumnTitle>Solutions</FooterColumnTitle>
            <FooterLinkList items={LINKS.solutions} />
          </div>

          {/* ── Engagement ── */}
          <div>
            <FooterColumnTitle>Engagement</FooterColumnTitle>
            <FooterLinkList items={LINKS.engagement} />
          </div>

          {/* ── Legal ── */}
          <div>
            <FooterColumnTitle>Légal</FooterColumnTitle>
            <FooterLinkList items={LINKS.legal} />
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          CTA BAND
      ══════════════════════════════════════════ */}
      <div className="border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">

            <div className="max-w-lg">
              <h2 className="text-[clamp(1.5rem,2.5vw,2rem)] font-serif font-bold text-white leading-tight mb-2">
                Prêt à démarrer votre projet ?
              </h2>
              <p className="text-[13px] text-white/35 font-light">
                Premier contact sous 48h — sans engagement.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Link
                href="/contact"
                className="group flex items-center gap-2.5 px-6 py-3 rounded-xl text-white text-[13px] font-semibold transition-all duration-200 hover:opacity-90"
                style={{ background: ACCENT }}
              >
                Nous contacter
                <MoveRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                href="/devis"
                className="group flex items-center gap-2.5 px-6 py-3 rounded-xl text-[13px] font-medium border border-white/[0.08] text-white/55 hover:text-white/90 hover:border-white/[0.15] hover:bg-white/[0.03] transition-all duration-200"
              >
                Devis IA gratuit
                <ArrowUpRight size={13} className="opacity-50 group-hover:opacity-100 transition-opacity" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          BOTTOM BAR
      ══════════════════════════════════════════ */}
      <div className="border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">

          <p className="text-[11px] text-white/20 font-light">
            © {currentYear} BINOVA ROCKBUILDERS — Tous droits réservés
          </p>

          {/* Socials */}
          <div className="flex items-center gap-1">
            {SOCIALS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-8 h-8 flex items-center justify-center rounded-lg border border-white/[0.05] bg-white/[0.02] hover:border-[#1E6B3A]/30 hover:bg-[#1E6B3A]/8 transition-all duration-200"
                aria-label={label}
              >
                <Icon size={13} className="text-white/25 group-hover:text-[#1E6B3A] transition-colors duration-200" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}