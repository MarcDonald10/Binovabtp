'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

// ─── Constants ────────────────────────────────────────────────────────────────

const ACCENT = '#1E6B3A'

const NAV_ITEMS = [
  { label: 'Accueil', href: '/' },
  {
    label: 'Métier',
    href: '/metier',
    children: [
      { label: 'Génie Civil & Ouvrages d\'Art', href: '/metier/genie-civil', desc: 'Ponts, viaducs, structures complexes' },
      { label: 'Barrages', href: '/metier/barrages', desc: 'Retenues hydrauliques & digues' },
      { label: 'Génie Urbain', href: '/metier/genie-urbain', desc: 'Réseaux, voiries, espaces publics' },
      { label: 'Infrastructures Linéaires', href: '/metier/infrastructures-lineaires', desc: 'Routes, rails, canaux' },
      { label: 'Travaux Souterrains', href: '/metier/travaux-souterrains', desc: 'Tunnels, galeries, excavations' },
      { label: 'Carrières', href: '/metier/carrieres', desc: 'Exploitation & granulats' },
    ],
  },
  {
    label: 'Engagement',
    href: '/engagement',
    children: [
      { label: 'RSE', href: '/engagement/rse', desc: 'Responsabilité sociale & sociétale' },
      { label: 'Sécurité & Santé', href: '/engagement/securite-sante', desc: 'Zéro accident, culture SSE' },
      { label: 'Environnement', href: '/engagement/environnement', desc: 'Empreinte & biodiversité' },
      { label: 'Éthique', href: '/engagement/ethique', desc: 'Intégrité & transparence' },
    ],
  },
  {
    label: 'Solutions',
    href: '/solutions',
    children: [
      { label: 'Tunnelage', href: '/tunnelage' , desc: 'Techniques avancées pour infrastructures souterraines' },
      { label: 'Minage', href: '/minage' , desc: 'Extraction et traitement des ressources naturelles' },
      { label: 'Terrassement', href: '/terrassement' , desc: 'Préparation et aménagement des sols' },
      { label: 'Infrastructure', href: '/infrastructure' , desc: 'Conception et réalisation d\'ouvrages publics' },
    ],
  },
  
  { label: 'Carrière', href: '/offres' },
  { label: 'Contact', href: '/contact' },
]

// ─── Helpers ─────────────────────────────────────────────────────────────────

function isActive(href: string, pathname: string): boolean {
  if (href === '/') return pathname === '/'
  return pathname === href || pathname.startsWith(href + '/')
}

// ─── Dropdown ────────────────────────────────────────────────────────────────

function DropdownMenu({
  items,
  visible,
}: {
  items: { label: string; href: string; desc: string }[]
  visible: boolean
}) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 8, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 6, scale: 0.97 }}
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 z-50"
        >
          {/* Arrow */}
          <div
            className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 border-l border-t border-white/[0.08] bg-[#100e0b]"
          />

          <div className="relative rounded-xl border border-white/[0.08] bg-[#100e0b] overflow-hidden shadow-2xl">
            {/* Top accent line */}
            <div
              className="absolute top-0 left-0 right-0 h-[1px]"
              style={{ background: `linear-gradient(to right, transparent, ${ACCENT}50, transparent)` }}
            />

            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex items-start justify-between gap-3 px-5 py-3.5 hover:bg-white/[0.03] transition-colors duration-200 border-b border-white/[0.04] last:border-b-0"
              >
                <div>
                  <p className="text-[13px] font-medium text-white/80 group-hover:text-white transition-colors duration-200 mb-0.5">
                    {item.label}
                  </p>
                  <p className="text-[11px] text-white/30">{item.desc}</p>
                </div>
                <ArrowUpRight
                  size={13}
                  className="mt-0.5 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{ color: ACCENT }}
                />
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// ─── Main Header ──────────────────────────────────────────────────────────────

export function Header() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Scroll shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile on route change
  useEffect(() => {
    setMobileOpen(false)
    setMobileExpanded(null)
  }, [pathname])

  const handleMouseEnter = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpenDropdown(label)
  }

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 120)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0a0906]/95 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_4px_32px_rgba(0,0,0,0.5)]'
            : 'bg-[#0a0906]/80 backdrop-blur-md border-b border-transparent'
        }`}
      >
        {/* Top micro-accent line */}
        <div
          className="absolute top-0 left-0 right-0 h-[1px] pointer-events-none"
          style={{ background: `linear-gradient(to right, transparent, ${ACCENT}35, transparent)` }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-[70px]">

            {/* ── Logo ── */}
            <Link
              href="/"
              className="group flex items-center gap-3 flex-shrink-0"
            >
              <div className="w-17 h-20 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:opacity-80">
                <Image
                  src="/logo.png"
                  alt="Binova Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>

            {/* ── Desktop Nav ── */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS.map((item) => {
                const active = isActive(item.href, pathname)
                const hasChildren = !!item.children
                const dropOpen = openDropdown === item.label

                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => hasChildren && handleMouseEnter(item.label)}
                    onMouseLeave={() => hasChildren && handleMouseLeave()}
                  >
                    {hasChildren ? (
                      <button
                        className={`group flex items-center gap-1.5 px-4 py-2 rounded-lg text-[13px] font-medium transition-all duration-200 ${
                          active
                            ? 'text-white'
                            : 'text-white hover:text-white/90 hover:bg-white/[0.04]'
                        }`}
                      >
                        {/* Active bg pill */}
                        {active && (
                          <motion.div
                            layoutId="nav-active-bg"
                            className="absolute inset-0 rounded-lg"
                            style={{ background: `${ACCENT}12`, border: `1px solid ${ACCENT}25` }}
                            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                          />
                        )}
                        <span className="relative" style={{ color: active ? ACCENT : undefined }}>
                          {item.label}
                        </span>
                        <ChevronDown
                          size={13}
                          className={`relative flex-shrink-0 transition-all duration-300 ${dropOpen ? 'rotate-180' : ''}`}
                          style={{ color: active ? ACCENT : undefined, opacity: active ? 0.7 : 0.4 }}
                        />
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        className={`relative flex items-center px-4 py-2 rounded-lg text-[13px] font-medium transition-all duration-200 ${
                          active
                            ? 'text-white'
                            : 'text-white hover:text-white/90 hover:bg-white/[0.04]'
                        }`}
                      >
                        {active && (
                          <motion.div
                            layoutId="nav-active-bg"
                            className="absolute inset-0 rounded-lg"
                            style={{ background: `${ACCENT}12`, border: `1px solid ${ACCENT}25` }}
                            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                          />
                        )}
                        <span className="relative" style={{ color: active ? ACCENT : undefined }}>
                          {item.label}
                        </span>
                        {/* Active dot under */}
                        {active && (
                          <motion.div
                            layoutId="nav-active-dot"
                            className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                            style={{ background: ACCENT }}
                            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                          />
                        )}
                      </Link>
                    )}

                    {hasChildren && item.children && (
                      <DropdownMenu items={item.children} visible={dropOpen} />
                    )}
                  </div>
                )
              })}
            </nav>

            {/* ── CTA + Mobile toggle ── */}
            <div className="flex items-center gap-3">
              {/* Devis CTA */}
              <Link
                href="/devis"
                className={`hidden sm:flex items-center gap-2 px-5 py-2 rounded-xl text-[13px] font-semibold transition-all duration-300 ${
                  isActive('/devis', pathname)
                    ? 'text-white shadow-lg'
                    : 'text-white hover:opacity-90'
                }`}
                style={{
                  background: isActive('/devis', pathname)
                    ? `linear-gradient(135deg, ${ACCENT}, #b86f55)`
                    : ACCENT,
                  boxShadow: isActive('/devis', pathname)
                    ? `0 4px 20px ${ACCENT}50`
                    : 'none',
                }}
              >
                Devis IA
                <ArrowUpRight size={13} />
              </Link>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileOpen((v) => !v)}
                className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.06] transition-colors duration-200 text-white/70 hover:text-white"
              >
                <AnimatePresence mode="wait">
                  {mobileOpen ? (
                    <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                      <X size={18} />
                    </motion.div>
                  ) : (
                    <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                      <Menu size={18} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── Mobile Menu Overlay ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.nav
              className="fixed top-[70px] left-0 right-0 z-40 lg:hidden bg-[#0c0a07] border-b border-white/[0.06] shadow-2xl overflow-hidden"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
                {NAV_ITEMS.map((item, i) => {
                  const active = isActive(item.href, pathname)
                  const hasChildren = !!item.children
                  const expanded = mobileExpanded === item.label

                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.3 }}
                    >
                      {hasChildren ? (
                        <>
                          <button
                            onClick={() => setMobileExpanded(expanded ? null : item.label)}
                            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-[14px] font-medium transition-all duration-200 ${
                              active
                                ? 'text-white'
                                : 'text-white/55 hover:text-white/90 hover:bg-white/[0.03]'
                            }`}
                            style={active ? { background: `${ACCENT}10`, border: `1px solid ${ACCENT}20` } : {}}
                          >
                            <span style={{ color: active ? ACCENT : undefined }}>{item.label}</span>
                            <ChevronDown
                              size={14}
                              className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
                              style={{ color: active ? ACCENT : 'rgba(255,255,255,0.25)' }}
                            />
                          </button>

                          <AnimatePresence>
                            {expanded && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                className="overflow-hidden ml-4 mt-1 border-l border-white/[0.06] pl-4"
                              >
                                {item.children!.map((child) => {
                                  const childActive = isActive(child.href, pathname)
                                  return (
                                    <Link
                                      key={child.href}
                                      href={child.href}
                                      className={`flex items-center justify-between py-2.5 text-[13px] transition-colors duration-200 ${
                                        childActive ? 'font-medium' : 'text-white/40 hover:text-white/70'
                                      }`}
                                      style={{ color: childActive ? ACCENT : undefined }}
                                    >
                                      <span>{child.label}</span>
                                      {childActive && (
                                        <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: ACCENT }} />
                                      )}
                                    </Link>
                                  )
                                })}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          href={item.href}
                          className={`flex items-center justify-between px-4 py-3 rounded-xl text-[14px] font-medium transition-all duration-200 ${
                            active ? 'text-white' : 'text-white/55 hover:text-white/90 hover:bg-white/[0.03]'
                          }`}
                          style={active ? { background: `${ACCENT}10`, border: `1px solid ${ACCENT}20`, color: ACCENT } : {}}
                        >
                          {item.label}
                          {active && <div className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />}
                        </Link>
                      )}
                    </motion.div>
                  )
                })}

                {/* Mobile Devis CTA */}
                <div className="pt-3 pb-1">
                  <Link
                    href="/devis"
                    className="flex items-center justify-center gap-2 w-full px-5 py-3.5 rounded-xl text-[14px] font-semibold text-white transition-all duration-200"
                    style={{ background: ACCENT }}
                  >
                    Demander un Devis IA
                    <ArrowUpRight size={15} />
                  </Link>
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>

      {/* Spacer for fixed header */}
      <div className="h-16 sm:h-[70px]" />
    </>
  )
}