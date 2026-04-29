'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  MapPin, Clock, ChevronRight, Upload, CheckCircle,
  Briefcase, Users, TrendingUp, Shield, ArrowUpRight, X, Search
} from 'lucide-react'

// ─── Constants ────────────────────────────────────────────────────────────────

const ACCENT = '#1E6B3A'
const ACCENT_MID = '#2d8a4e'
const RH_EMAIL = 'rh@binova-holding.ca'

// ─── Data ────────────────────────────────────────────────────────────────────

const STATS = [
  { icon: Users,     label: 'Collaborateurs',    value: '1 200+' },
  { icon: Briefcase, label: 'Postes ouverts',     value: '18'     },
  { icon: TrendingUp,label: 'Croissance annuelle',value: '22 %'   },
  { icon: Shield,    label: 'Taux de rétention',  value: '94 %'   },
]

const OFFRES = [
  {
    id: 1,
    titre: 'Ingénieur Génie Civil Senior',
    lieu: 'Kribi, Cameroun',
    type: 'CDI',
    departement: "Génie Civil & Ouvrages dArt",
    description: "Pilotage de projets de construction d'ouvrages dart complexes (ponts, viaducs). Supervision des équipes terrain et coordination avec les maîtres d'ouvrage.",
    competences: ['AutoCAD / Revit', 'Calcul de structures', "Management d'équipe", 'Normes Eurocodes'],
  },
  {
    id: 2,
    titre: 'Chef de Projet Barrages',
    lieu: 'Kribi, Cameroun',
    type: 'CDI',
    departement: 'Barrages',
    description: "Gestion complète de projets de retenues hydrauliques, de la conception à la réception. Interface technique avec les bureaux d'études et les sous-traitants.",
    competences: ['Hydraulique fluviale', 'Gestion de projet', 'Géotechnique', 'HSE'],
  },
  {
    id: 3,
    titre: 'Conducteur de Travaux – Génie Urbain',
    lieu: 'Kribi, Cameroun',
    type: 'CDI',
    departement: 'Génie Urbain',
    description: 'Suivi des travaux de voirie, réseaux divers et espaces publics. Coordination des compagnons et planification des ressources sur chantiers urbains.',
    competences: ['Lecture de plans', 'Planification chantier', 'Suivi budgétaire', 'Sécurité'],
  },
  {
    id: 4,
    titre: 'Topographe',
    lieu: 'Kribi – Cameroun',
    type: 'CDI',
    departement: 'Infrastructures Linéaires',
    description: "Levés topographiques, implantation d'ouvrages et suivi altimétrique sur chantiers linéaires (routes, autoroutes, voies ferrées).",
    competences: ['Station totale / GNSS', 'AutoCAD Civil 3D', 'Drone / photogrammétrie', 'Reporting'],
  },
  {
    id: 5,
    titre: 'Responsable HSE',
    lieu: 'Kribi, Cameroun',
    type: 'CDI',
    departement: 'Sécurité & Santé',
    description: "Déploiement de la politique SSE sur l'ensemble des chantiers du groupe. Formation des équipes, audits terrain et veille réglementaire.",
    competences: ['ISO 45001', 'Formation sécurité', 'Gestion des risques', 'Reporting HSE'],
  },
  {
    id: 6,
    titre: 'Technicien Laboratoire BTP',
    lieu: 'Kribi, Cameroun',
    type: 'CDI',
    departement: "Génie Civil & Ouvrages dArt",
    description: "Réalisation des essais géotechniques et matériaux en laboratoire et sur chantier. Analyse des résultats et rédaction des rapports d'essais.",
    competences: ['Essais Proctor / CBR', 'Béton & granulats', 'Normes NF / ISO', 'Laboratoire'],
  },
]

const DOMAINES_SPONTANES = [
  "Génie Civil & Structures",
  "Barrages & Hydraulique",
  "Génie Urbain & Réseaux",
  "Infrastructures Linéaires",
  "Travaux Souterrains",
  "Carrières & Granulats",
  "HSE & Environnement",
  "Administration & RH",
  "Finance & Contrôle de Gestion",
  "Informatique & Digital",
]

// ─── Types ────────────────────────────────────────────────────────────────────

type Offre = typeof OFFRES[0]
type ModalState = Offre | null | undefined // undefined = fermée, null = spontanée

// ─── Styles communs ───────────────────────────────────────────────────────────

const inputCls = `
  w-full bg-[#f7f4ef] border border-black/[0.10] rounded-xl px-4 py-2.5
  text-[13px] text-[#1a1a18] placeholder-black/30
  focus:outline-none focus:border-[#1E6B3A] focus:bg-[#f4fbf6]
  focus:ring-2 focus:ring-[#1E6B3A]/10
  transition-all duration-200 font-[DM_Sans,sans-serif]
`

// ─── Sub-components ───────────────────────────────────────────────────────────

function Field({
  label,
  required,
  children,
}: {
  label: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[12px] font-semibold text-black/50">
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      {children}
    </div>
  )
}

function FileField({
  label,
  file,
  onChange,
  required,
}: {
  label: string
  file: File | null
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  required?: boolean
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[12px] font-semibold text-black/50">
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      <label className="relative cursor-pointer group">
        <div
          className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl border text-[12px] transition-all duration-200 ${
            file
              ? 'border-green-500/40 bg-green-50 text-green-700'
              : 'border-dashed border-black/[0.12] bg-[#f7f4ef] text-black/35 group-hover:border-[#1E6B3A] group-hover:text-[#1E6B3A] group-hover:bg-[#f4fbf6]'
          }`}
        >
          {file ? (
            <CheckCircle size={14} className="flex-shrink-0 text-green-600" />
          ) : (
            <Upload size={14} className="flex-shrink-0" />
          )}
          <span className="truncate">{file ? file.name : 'Choisir un fichier'}</span>
        </div>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          required={required}
          onChange={onChange}
          className="absolute inset-0 opacity-0 cursor-pointer"
        />
      </label>
    </div>
  )
}

function StatCard({ icon: Icon, label, value }: typeof STATS[0]) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center gap-2 p-6 rounded-2xl border border-black/[0.07] bg-white shadow-sm"
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center mb-1"
        style={{ background: `${ACCENT}15` }}
      >
        <Icon size={18} style={{ color: ACCENT }} />
      </div>
      <span
        className="text-3xl font-bold tracking-tight"
        style={{ color: '#1a1a18', fontFamily: "'Playfair Display', serif" }}
      >
        {value}
      </span>
      <span className="text-[12px] text-black/40 text-center font-medium">{label}</span>
    </motion.div>
  )
}

function OffreCard({
  offre,
  onPostuler,
  index,
}: {
  offre: Offre
  onPostuler: (o: Offre) => void
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      className="group relative bg-white rounded-2xl border border-black/[0.07] p-6 flex flex-col gap-4 cursor-pointer
        hover:shadow-[0_8px_40px_rgba(30,107,58,0.12)] hover:border-[#1E6B3A]/20
        transition-all duration-300"
      onClick={() => onPostuler(offre)}
    >
      {/* Bottom accent bar */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[3px] rounded-b-2xl origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
        style={{ background: `linear-gradient(to right, ${ACCENT}, ${ACCENT_MID})` }}
      />

      {/* Top row */}
      <div className="flex items-start justify-between gap-3">
        <span
          className="text-[11px] font-semibold px-2.5 py-1 rounded-lg"
          style={{ background: `${ACCENT}12`, color: ACCENT }}
        >
          {offre.departement}
        </span>
        <span
          className={`flex-shrink-0 text-[11px] font-bold px-3 py-1 rounded-full border ${
            offre.type === 'CDI'
              ? 'border-green-200 text-green-700 bg-green-50'
              : 'border-amber-200 text-amber-700 bg-amber-50'
          }`}
        >
          {offre.type}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-[15px] font-semibold text-[#1a1a18] leading-snug">{offre.titre}</h3>

      {/* Description */}
      <p className="text-[13px] text-black/50 leading-relaxed flex-1">{offre.description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {offre.competences.map((c) => (
          <span
            key={c}
            className="text-[11px] px-2.5 py-1 rounded-lg border border-black/[0.08] text-black/45 bg-black/[0.02]"
          >
            {c}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-black/[0.06]">
        <div className="flex items-center gap-3 text-[12px] text-black/35">
          <span className="flex items-center gap-1.5">
            <MapPin size={11} />
            {offre.lieu}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={11} />
            {offre.type}
          </span>
        </div>
        <button
          onClick={(e) => { e.stopPropagation(); onPostuler(offre) }}
          className="flex items-center gap-1.5 text-[12px] font-semibold px-4 py-2 rounded-xl text-white transition-all duration-200 hover:opacity-90 shadow-sm"
          style={{ background: ACCENT }}
        >
          Postuler
          <ChevronRight size={13} />
        </button>
      </div>
    </motion.div>
  )
}

// ─── Modal Candidature ────────────────────────────────────────────────────────

function CandidatureModal({
  offre,
  onClose,
}: {
  offre: Offre | null
  onClose: () => void
}) {
  const [form, setForm] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    domaine: '',
    message: '',
    cv: null as File | null,
    lettre: null as File | null,
  })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const setField = (key: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const handleFile = (key: 'cv' | 'lettre') => (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null
    setForm((f) => ({ ...f, [key]: file }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)

    const poste = offre ? offre.titre : form.domaine

    const subject = offre
      ? `Candidature – ${offre.titre} | ${form.prenom} ${form.nom}`
      : `Candidature Spontanée – ${form.domaine} | ${form.prenom} ${form.nom}`

    const cvInfo = form.cv ? `CV joint : ${form.cv.name}` : 'CV : non joint'
    const lettreInfo = form.lettre
      ? `Lettre de motivation jointe : ${form.lettre.name}`
      : 'Lettre de motivation : non jointe'

    const body = [
      `Nom : ${form.prenom} ${form.nom}`,
      `Email : ${form.email}`,
      form.telephone ? `Téléphone : ${form.telephone}` : '',
      `Poste visé : ${poste}`,
      offre ? `Lieu : ${offre.lieu}` : '',
      offre ? `Contrat : ${offre.type}` : '',
      '',
      form.message ? `Message de motivation :\n${form.message}` : '',
      '',
      '─────────────────────────────────────',
      cvInfo,
      lettreInfo,
      '',
      'Envoyé depuis le portail carrière Binova Holding',
      `Date : ${new Date().toLocaleDateString('fr-FR', { day: '2-digit', month: 'long', year: 'numeric' })}`,
    ]
      .filter(Boolean)
      .join('\n')

    await new Promise((r) => setTimeout(r, 900))
    window.location.href = `mailto:${RH_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSending(false)
    setSent(true)
  }

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/40 backdrop-blur-md"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />

        {/* Panel */}
        <motion.div
          className="relative w-full sm:max-w-2xl max-h-[92vh] overflow-y-auto
            rounded-t-3xl sm:rounded-2xl bg-white shadow-2xl border border-black/[0.06]"
          initial={{ y: 60, opacity: 0, scale: 0.98 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 60, opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Top accent bar */}
          <div
            className="h-[3px] rounded-t-2xl"
            style={{ background: `linear-gradient(to right, ${ACCENT}, ${ACCENT_MID})` }}
          />

          <div className="p-6 sm:p-8">

            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2
                  className="text-xl font-bold text-[#1a1a18] mb-1"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {offre ? 'Postuler à cette offre' : 'Candidature spontanée'}
                </h2>
                {offre && (
                  <p className="text-[13px] text-black/40">
                    {offre.titre} · {offre.lieu}
                  </p>
                )}
              </div>
              <button
                onClick={onClose}
                className="w-9 h-9 flex items-center justify-center rounded-xl border border-black/[0.10]
                  text-black/40 hover:text-black/70 hover:bg-black/[0.04] transition-all duration-150"
              >
                <X size={15} />
              </button>
            </div>

            {sent ? (
              /* ── Succès ── */
              <div className="py-10 flex flex-col items-center gap-4 text-center">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{ background: `${ACCENT}15` }}
                >
                  <CheckCircle size={28} style={{ color: ACCENT }} />
                </div>
                <div>
                  <h3
                    className="text-lg font-bold text-[#1a1a18] mb-2"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Candidature envoyée !
                  </h3>
                  <p className="text-[13px] text-black/50 max-w-xs mx-auto">
                    Votre messagerie s'est ouverte avec toutes les informations pré-remplies.
                    Notre équipe RH vous recontactera sous 5 jours ouvrés.
                  </p>
                  <p className="text-[12px] text-black/30 mt-2">{RH_EMAIL}</p>
                </div>
                <button
                  onClick={onClose}
                  className="mt-2 px-7 py-3 rounded-xl text-[13px] font-semibold text-white transition-opacity hover:opacity-80"
                  style={{ background: ACCENT }}
                >
                  Fermer
                </button>
              </div>
            ) : (
              /* ── Formulaire ── */
              <form onSubmit={handleSubmit} className="space-y-4">

                <div className="grid grid-cols-2 gap-3">
                  <Field label="Prénom" required>
                    <input
                      required type="text" placeholder="Jean"
                      value={form.prenom} onChange={setField('prenom')}
                      className={inputCls}
                    />
                  </Field>
                  <Field label="Nom" required>
                    <input
                      required type="text" placeholder="Dupont"
                      value={form.nom} onChange={setField('nom')}
                      className={inputCls}
                    />
                  </Field>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <Field label="Email" required>
                    <input
                      required type="email" placeholder="jean@exemple.com"
                      value={form.email} onChange={setField('email')}
                      className={inputCls}
                    />
                  </Field>
                  <Field label="Téléphone">
                    <input
                      type="tel" placeholder="+237 6XX XXX XXX"
                      value={form.telephone} onChange={setField('telephone')}
                      className={inputCls}
                    />
                  </Field>
                </div>

                {/* Domaine (candidature spontanée uniquement) */}
                {!offre && (
                  <Field label="Domaine de candidature" required>
                    <select
                      required value={form.domaine} onChange={setField('domaine')}
                      className={inputCls}
                    >
                      <option value="">Sélectionner un domaine…</option>
                      {DOMAINES_SPONTANES.map((d) => (
                        <option key={d} value={d}>{d}</option>
                      ))}
                    </select>
                  </Field>
                )}

                <Field label="Message de motivation">
                  <textarea
                    rows={4} placeholder="Présentez-vous brièvement et expliquez votre motivation…"
                    value={form.message} onChange={setField('message')}
                    className={`${inputCls} resize-none`}
                  />
                </Field>

                {/* Fichiers */}
                <div className="grid grid-cols-2 gap-3">
                  <FileField label="CV (PDF / Word)" file={form.cv} onChange={handleFile('cv')} required />
                  <FileField label="Lettre de motivation" file={form.lettre} onChange={handleFile('lettre')} />
                </div>

                <p className="text-[11px] text-black/30 leading-relaxed">
                  En soumettant ce formulaire, vous acceptez que vos données soient transmises à notre équipe RH.
                </p>

                <button
                  type="submit" disabled={sending}
                  className="w-full py-3.5 rounded-xl text-[14px] font-semibold text-white
                    transition-all duration-200 hover:opacity-90 disabled:opacity-60
                    flex items-center justify-center gap-2 shadow-md"
                  style={{ background: ACCENT, boxShadow: `0 4px 16px ${ACCENT}30` }}
                >
                  {sending ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Ouverture de votre messagerie…
                    </>
                  ) : (
                    <>
                      Envoyer ma candidature
                      <ArrowUpRight size={15} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

// ─── Page principale ──────────────────────────────────────────────────────────

export default function CarrierePage() {
  const [modal, setModal] = useState<ModalState>(undefined)

  const openSpontaneous = () => setModal(null)
  const openOffre = (o: Offre) => setModal(o)
  const closeModal = () => setModal(undefined)

  return (
    <>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@300;400;500;600&display=swap');
        body { font-family: 'DM Sans', sans-serif; }
      `}</style>

      <main className="min-h-screen bg-white text-[#1a1a18]">

        {/* ── Navbar ── */}
        <nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-8 py-5
          bg-white/85 backdrop-blur-xl border-b border-black/[0.06]">
          <span
            className="text-xl font-bold tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Binova <span style={{ color: ACCENT }}>Holding</span>
          </span>
          <span
            className="text-[11px] font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full border"
            style={{ color: ACCENT, borderColor: `${ACCENT}30`, background: `${ACCENT}10` }}
          >
            Carrières
          </span>
        </nav>

        {/* ── Hero ── */}
        <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-white">
          {/* Subtle background texture */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full opacity-[0.06] blur-3xl pointer-events-none"
            style={{ background: `radial-gradient(ellipse, ${ACCENT}, transparent)` }}
          />

          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
              <div
                className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-widest uppercase mb-6"
                style={{ color: ACCENT }}
              >
                <span className="w-5 h-0.5 rounded-full" style={{ background: ACCENT }} />
                Nous rejoindre
              </div>
              <h1
                className="text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight mb-5"
                style={{ fontFamily: "'Playfair Display', serif", color: '#1a1a18' }}
              >
                Construisez l'avenir{' '}
                <em className="not-italic" style={{ color: ACCENT }}>avec nous</em>
              </h1>
              <p className="text-[15px] text-black/55 leading-relaxed max-w-md mb-8">
                Rejoignez une équipe passionnée par les grands ouvrages, engagée pour la sécurité
                et portée par une ambition de croissance durable en Afrique et au-delà.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#offres"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-[14px] font-semibold
                    text-white transition-all duration-200 hover:opacity-90 shadow-lg"
                  style={{ background: ACCENT, boxShadow: `0 4px 20px ${ACCENT}30` }}
                >
                  <Search size={14} />
                  Voir les offres d'emploi
                </a>
                <button
                  onClick={openSpontaneous}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-[14px] font-semibold
                    border border-black/[0.10] text-black/60 hover:text-black hover:border-black/20
                    hover:bg-black/[0.03] transition-all duration-200"
                >
                  Candidature spontanée
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </motion.div>

            {/* Right – stat cards */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="rounded-3xl p-8 border border-black/[0.07]"
              style={{ background: `linear-gradient(135deg, ${ACCENT}06, transparent)` }}
            >
              <div className="grid grid-cols-2 gap-4">
                {STATS.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + i * 0.08 }}
                    className="flex flex-col items-start gap-2 p-5 rounded-2xl bg-white border border-black/[0.06] shadow-sm"
                  >
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: `${ACCENT}15` }}>
                      <s.icon size={16} style={{ color: ACCENT }} />
                    </div>
                    <span
                      className="text-3xl font-black tracking-tight"
                      style={{ fontFamily: "'Playfair Display', serif", color: '#1a1a18' }}
                    >
                      {s.value}
                    </span>
                    <span className="text-[11px] text-black/40 font-medium">{s.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Offres ── */}
        <section id="offres" className="px-4 py-20" style={{ background: '#f7f4ef' }}>
          <div className="max-w-6xl mx-auto">
            <div className="mb-10">
              <motion.h2
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-2"
                style={{ fontFamily: "'Playfair Display', serif", color: '#1a1a18' }}
              >
                Offres d'emploi actuelles
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-[14px] text-black/40"
              >
                <strong style={{ color: ACCENT }}>{OFFRES.length} postes ouverts</strong>
                {' '}· Toutes les candidatures sont examinées par notre équipe RH
              </motion.p>
            </div>

            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {OFFRES.map((offre, i) => (
                <OffreCard key={offre.id} offre={offre} onPostuler={openOffre} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Banner candidature spontanée ── */}
        <section className="px-4 py-20 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden p-12 text-center"
              style={{
                background: `linear-gradient(135deg, ${ACCENT} 0%, ${ACCENT_MID} 100%)`,
                boxShadow: `0 20px 60px ${ACCENT}30`,
              }}
            >
              {/* Decorative circles */}
              <div className="absolute top-[-80px] right-[-80px] w-[280px] h-[280px] rounded-full bg-white/[0.06] pointer-events-none" />
              <div className="absolute bottom-[-60px] left-[-40px] w-[200px] h-[200px] rounded-full bg-white/[0.04] pointer-events-none" />

              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/20"
                style={{ background: 'rgba(255,255,255,0.15)' }}
              >
                <Briefcase size={26} className="text-white" />
              </div>

              <h3
                className="text-3xl font-bold text-white mb-3"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Votre profil ne correspond à aucune offre ?
              </h3>
              <p className="text-[15px] text-white/70 max-w-xl mx-auto mb-8 leading-relaxed">
                Nous étudions toutes les candidatures spontanées avec attention. Envoyez-nous votre dossier
                et nous vous contacterons dès qu'une opportunité correspond à votre profil.
              </p>
              <button
                onClick={openSpontaneous}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-[14px] font-bold
                  text-[#1E6B3A] bg-white transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5
                  shadow-lg"
              >
                Envoyer ma candidature
                <ArrowUpRight size={15} />
              </button>
              <p className="mt-5 text-[12px] text-white/35">
                Réponse garantie sous 5 jours ouvrés · {RH_EMAIL}
              </p>
            </motion.div>
          </div>
        </section>

        

        {/* ── Modal ── */}
        {modal !== undefined && (
          <CandidatureModal offre={modal} onClose={closeModal} />
        )}
      </main>
    </>
  )
}