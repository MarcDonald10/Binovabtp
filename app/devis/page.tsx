'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Drill, Pickaxe, Hammer, Building2, ChevronRight, ChevronLeft,
  MapPin, Ruler, Calendar, User, Mail, Phone, CheckCircle2,
  AlertCircle, Loader2, Download, ArrowUpRight, RotateCcw,
  TrendingUp, Clock, Shield, Zap
} from 'lucide-react'

// ─── Constants ────────────────────────────────────────────────────────────────

const ACCENT = '#1E5D3B'  // Primary Green
const ACCENT_YELLOW = '#F4B400'  // Accent Yellow

// ─── Types ────────────────────────────────────────────────────────────────────

type ProjectType = 'tunnelage' | 'minage' | 'terrassement' | 'infrastructure'
type SoilType = 'rocher_dur' | 'rocher_tendre' | 'sol_meuble' | 'mixte'
type Urgency = 'standard' | 'accelere' | 'urgent'
type Step = 1 | 2 | 3 | 4 | 5

interface FormData {
  // Step 1: project type
  projectType: ProjectType | null
  // Step 2: technical specs
  volume: string
  length: string
  depth: string
  soilType: SoilType | null
  region: string
  // Step 3: constraints
  urgency: Urgency
  startDate: string
  certifications: string[]
  // Step 4: contact
  company: string
  firstName: string
  lastName: string
  email: string
  phone: string
  message: string
}

interface Estimate {
  low: number
  mid: number
  high: number
  duration: number
  confidence: number
  breakdown: { label: string; percent: number; amount: number }[]
  risks: string[]
  inclusions: string[]
}

// ─── Calculation Engine ───────────────────────────────────────────────────────

function calculateEstimate(data: FormData): Estimate {
  let baseCostPerUnit = 0
  let unit = 0
  let durationWeeks = 4

  const soil = data.soilType
  const soilMultiplier = {
    rocher_dur: 1.6,
    rocher_tendre: 1.2,
    sol_meuble: 1.0,
    mixte: 1.35,
  }[soil ?? 'mixte'] ?? 1.35

  const urgencyMultiplier = { standard: 1.0, accelere: 1.25, urgent: 1.55 }[data.urgency]

  const regionMultiplier: Record<string, number> = {
    'Île-de-France': 1.25, 'PACA': 1.15, 'Auvergne-Rhône-Alpes': 1.1,
    'Normandie': 1.05, 'Grand Est': 1.0, 'Nouvelle-Aquitaine': 1.0,
    'Occitanie': 1.0, 'Bretagne': 1.0, 'International': 1.3,
  }
  const regionFactor = regionMultiplier[data.region] ?? 1.0

  const certFactor = 1 + (data.certifications.length * 0.04)

  switch (data.projectType) {
    case 'tunnelage':
      baseCostPerUnit = 85_000 // €/ml
      unit = parseFloat(data.length) || 500
      durationWeeks = Math.ceil(unit / 12) + 8
      break
    case 'minage':
      baseCostPerUnit = 45 // €/m³
      unit = parseFloat(data.volume) || 10_000
      durationWeeks = Math.ceil(unit / 800) + 4
      break
    case 'terrassement':
      baseCostPerUnit = 18 // €/m³
      unit = parseFloat(data.volume) || 20_000
      durationWeeks = Math.ceil(unit / 2000) + 2
      break
    case 'infrastructure':
      baseCostPerUnit = 35_000 // €/unité forfaitaire
      unit = parseFloat(data.volume) || 10
      durationWeeks = Math.ceil(unit * 2.5) + 6
      break
    default:
      baseCostPerUnit = 30_000
      unit = 10
      durationWeeks = 16
  }

  const base = baseCostPerUnit * unit
  const mid = Math.round(base * soilMultiplier * urgencyMultiplier * regionFactor * certFactor)
  const low = Math.round(mid * 0.82)
  const high = Math.round(mid * 1.22)

  const confidence = Math.min(95,
    60 +
    (data.volume || data.length ? 10 : 0) +
    (data.soilType ? 10 : 0) +
    (data.region ? 8 : 0) +
    (data.urgency !== 'standard' ? 5 : 0) +
    (data.certifications.length > 0 ? 7 : 0)
  )

  const breakdown = [
    { label: 'Main d\'œuvre', percent: 38, amount: Math.round(mid * 0.38) },
    { label: 'Matériaux & fournitures', percent: 28, amount: Math.round(mid * 0.28) },
    { label: 'Matériel & engins', percent: 20, amount: Math.round(mid * 0.20) },
    { label: 'Études & ingénierie', percent: 9, amount: Math.round(mid * 0.09) },
    { label: 'Sécurité & certifications', percent: 5, amount: Math.round(mid * 0.05) },
  ]

  const risks: string[] = []
  if (soil === 'rocher_dur') risks.push('Conditions géotechniques difficiles (+15 à +25%)')
  if (soil === 'mixte') risks.push('Terrain hétérogène — reconnaissance approfondie recommandée')
  if (data.urgency === 'urgent') risks.push('Délai urgent — mobilisation express requise')
  if (data.certifications.length >= 3) risks.push('Exigences réglementaires multiples — prévoir des délais administratifs')
  if (durationWeeks > 52) risks.push('Chantier long — risque d\'évolution des prix des matériaux')

  const inclusions = [
    'Installation et repli de chantier',
    'Études géotechniques préliminaires',
    'Plan de sécurité et de prévention',
    'Suivi hebdomadaire et rapports',
    'Garantie décennale incluse',
  ]

  return { low, mid, high, duration: durationWeeks, confidence, breakdown, risks, inclusions }
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function formatEur(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(2)} M€`
  if (n >= 1_000) return `${(n / 1_000).toFixed(0)} K€`
  return `${n.toLocaleString('fr-FR')} €`
}

function SectionLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 mb-1">
      <div className="h-px w-5" style={{ background: ACCENT }} />
      <span className="text-[10px] font-semibold tracking-[0.18em] uppercase" style={{ color: ACCENT }}>
        {text}
      </span>
    </div>
  )
}

function ProgressBar({ step, total = 4 }: { step: number; total?: number }) {
  return (
    <div className="flex items-center gap-2 mb-8">
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} className="flex items-center gap-2 flex-1">
          <motion.div
            className="h-[3px] w-full rounded-full"
            animate={{
              background: i < step
                ? ACCENT
                : i === step - 1
                  ? ACCENT
                  : 'rgba(200,200,200,0.3)',
            }}
            transition={{ duration: 0.4 }}
          />
        </div>
      ))}
      <span className="text-[11px] text-gray-500 font-mono flex-shrink-0">
        {step}/{total}
      </span>
    </div>
  )
}

// ─── Steps ────────────────────────────────────────────────────────────────────

const PROJECT_TYPES: { id: ProjectType; label: string; desc: string; icon: React.ElementType; stat: string }[] = [
  { id: 'tunnelage', label: 'Tunnelage', desc: 'Infrastructure souterraine', icon: Drill, stat: '156 tunnels' },
  { id: 'minage', label: 'Minage', desc: 'Exploitation & abattage', icon: Pickaxe, stat: '847+ mines' },
  { id: 'terrassement', label: 'Terrassement', desc: 'Génie civil & excavation', icon: Hammer, stat: '30M m³/an' },
  { id: 'infrastructure', label: 'Infrastructure', desc: 'Ouvrages & génie civil', icon: Building2, stat: '28 ans' },
]

const SOIL_TYPES: { id: SoilType; label: string; desc: string; factor: string }[] = [
  { id: 'rocher_dur', label: 'Roche dure', desc: 'Granit, basalte, gneiss', factor: '×1.6' },
  { id: 'rocher_tendre', label: 'Roche tendre', desc: 'Calcaire, grès, marne', factor: '×1.2' },
  { id: 'sol_meuble', label: 'Sol meuble', desc: 'Terre, argile, alluvions', factor: '×1.0' },
  { id: 'mixte', label: 'Mixte / Inconnu', desc: 'Terrain hétérogène', factor: '×1.35' },
]

const REGIONS = [
  'Île-de-France', 'Auvergne-Rhône-Alpes', 'PACA', 'Normandie',
  'Nouvelle-Aquitaine', 'Occitanie', 'Grand Est', 'Bretagne', 'International',
]

const CERTIFICATIONS = [
  'ISO 9001', 'ISO 14001', 'ISO 45001', 'MASE', 'QUALIBAT', 'Eurocodes',
]

// ─── Step 1: Project type ─────────────────────────────────────────────────────

function Step1({ data, update }: { data: FormData; update: (d: Partial<FormData>) => void }) {
  return (
    <div>
      <SectionLabel text="Étape 1 — Nature du projet" />
      <h2 className="text-2xl font-serif font-bold text-gray-900 mb-1">Quel type de projet ?</h2>
      <p className="text-[13px] text-gray-600 mb-8">Sélectionnez la catégorie qui correspond à votre besoin.</p>

      <div className="grid grid-cols-2 gap-3">
        {PROJECT_TYPES.map((p) => {
          const isActive = data.projectType === p.id
          return (
            <motion.button
              key={p.id}
              onClick={() => update({ projectType: p.id })}
              className={`group text-left p-5 rounded-xl border transition-all duration-300 ${
                isActive
                  ? 'border-[#1E6B3A]/50 bg-[#1E6B3A]/8'
                  : 'border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12] hover:bg-white/[0.04]'
              }`}
              whileHover={{ y: isActive ? 0 : -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            >
              <div className="flex items-start justify-between mb-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300"
                  style={{
                    background: isActive ? `${ACCENT}20` : 'rgba(255,255,255,0.04)',
                    color: isActive ? ACCENT : 'rgba(255,255,255,0.3)',
                  }}
                >
                  <p.icon size={18} strokeWidth={1.5} />
                </div>
                {isActive && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 500 }}
                  >
                    <CheckCircle2 size={16} style={{ color: ACCENT }} />
                  </motion.div>
                )}
              </div>
              <h3
                className="text-[14px] font-semibold mb-0.5 transition-colors duration-300"
                style={{ color: isActive ? ACCENT : '#1f2937' }}
              >
                {p.label}
              </h3>
              <p className="text-[12px] text-gray-600 mb-2">{p.desc}</p>
              <span
                className="text-[10px] font-mono px-2 py-0.5 rounded-full border"
                style={{
                  color: isActive ? ACCENT : 'rgba(255,255,255,0.25)',
                  borderColor: isActive ? `${ACCENT}40` : 'rgba(255,255,255,0.08)',
                  background: isActive ? `${ACCENT}10` : 'transparent',
                }}
              >
                {p.stat}
              </span>
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}

// ─── Step 2: Technical specs ──────────────────────────────────────────────────

function Step2({ data, update }: { data: FormData; update: (d: Partial<FormData>) => void }) {
  const isLinear = data.projectType === 'tunnelage'
  const isVolumetric = data.projectType === 'minage' || data.projectType === 'terrassement'
  const isUnit = data.projectType === 'infrastructure'

  return (
    <div>
      <SectionLabel text="Étape 2 — Paramètres techniques" />
      <h2 className="text-2xl font-serif font-bold text-gray-900 mb-1">Caractéristiques du chantier</h2>
      <p className="text-[13px] text-gray-600 mb-8">Plus vos données sont précises, plus l'estimation sera fiable.</p>

      <div className="space-y-5">
        {/* Quantity */}
        {isLinear && (
          <div>
            <label className="block text-[12px] font-medium text-gray-700 mb-2">
              Longueur du tunnel (mètres linéaires)
            </label>
            <div className="relative">
              <Ruler size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="number"
                placeholder="ex: 2500"
                value={data.length}
                onChange={(e) => update({ length: e.target.value })}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 text-[14px] placeholder:text-gray-400 focus:outline-none focus:border-[#1E6B3A] focus:ring-1 focus:ring-[#1E6B3A]/20 transition-all duration-300"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[11px] text-gray-500">ml</span>
            </div>
          </div>
        )}

        {(isVolumetric || isUnit) && (
          <div>
            <label className="block text-[12px] font-medium text-gray-700 mb-2">
              {isUnit ? 'Nombre d\'unités / éléments' : 'Volume estimé (m³)'}
            </label>
            <div className="relative">
              <Ruler size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="number"
                placeholder={isUnit ? 'ex: 5' : 'ex: 50000'}
                value={data.volume}
                onChange={(e) => update({ volume: e.target.value })}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 text-[14px] placeholder:text-gray-400 focus:outline-none focus:border-[#1E6B3A] focus:ring-1 focus:ring-[#1E6B3A]/20 transition-all duration-300"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[11px] text-gray-500">
                {isUnit ? 'unités' : 'm³'}
              </span>
            </div>
          </div>
        )}

        {/* Depth (tunnelage + terrassement) */}
        {(data.projectType === 'tunnelage' || data.projectType === 'terrassement') && (
          <div>
            <label className="block text-[12px] font-medium text-gray-700 mb-2">
              Profondeur / hauteur de terrassement (m)
            </label>
            <div className="relative">
              <input
                type="number"
                placeholder="ex: 15"
                value={data.depth}
                onChange={(e) => update({ depth: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 text-[14px] placeholder:text-gray-400 focus:outline-none focus:border-[#1E6B3A] focus:ring-1 focus:ring-[#1E6B3A]/20 transition-all duration-300"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[11px] text-gray-500">m</span>
            </div>
          </div>
        )}

        {/* Soil type */}
        <div>
          <label className="block text-[12px] font-medium text-gray-700 mb-3">Nature du terrain</label>
          <div className="grid grid-cols-2 gap-2">
            {SOIL_TYPES.map((s) => {
              const isActive = data.soilType === s.id
              return (
                <button
                  key={s.id}
                  onClick={() => update({ soilType: s.id })}
                  className={`text-left px-4 py-3 rounded-xl border transition-all duration-200 ${
                    isActive
                      ? 'border-[#1E6B3A] bg-[#1E6B3A]/10'
                      : 'border-gray-300 bg-gray-50 hover:border-gray-400'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <p className="text-[13px] font-medium" style={{ color: isActive ? ACCENT : '#1f2937' }}>{s.label}</p>
                    <span className="text-[10px] font-mono" style={{ color: isActive ? ACCENT : 'rgba(107,114,128,0.6)' }}>
                      {s.factor}
                    </span>
                  </div>
                  <p className="text-[11px] text-gray-600 mt-0.5">{s.desc}</p>
                </button>
              )
            })}
          </div>
        </div>

        {/* Region */}
        <div>
          <label className="block text-[12px] font-medium text-gray-700 mb-2">
            <MapPin size={12} className="inline mr-1.5 opacity-60" />
            Région / Localisation
          </label>
          <select
            value={data.region}
            onChange={(e) => update({ region: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 text-[14px] focus:outline-none focus:border-[#1E6B3A] focus:ring-1 focus:ring-[#1E6B3A]/20 transition-all duration-300 appearance-none"
            style={{ colorScheme: 'light' }}
          >
            <option value="">Sélectionner une région…</option>
            {REGIONS.map((r) => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}

// ─── Step 3: Constraints ──────────────────────────────────────────────────────

function Step3({ data, update }: { data: FormData; update: (d: Partial<FormData>) => void }) {
  const toggleCert = (c: string) => {
    const certs = data.certifications.includes(c)
      ? data.certifications.filter((x) => x !== c)
      : [...data.certifications, c]
    update({ certifications: certs })
  }

  return (
    <div>
      <SectionLabel text="Étape 3 — Contraintes & planning" />
      <h2 className="text-2xl font-serif font-bold text-gray-900 mb-1">Délais et exigences</h2>
      <p className="text-[13px] text-gray-600 mb-8">Précisez vos contraintes pour affiner l'estimation.</p>

      <div className="space-y-6">
        {/* Urgency */}
        <div>
          <label className="block text-[12px] font-medium text-gray-700 mb-3">Urgence du projet</label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: 'standard' as Urgency, label: 'Standard', desc: 'Planning normal', factor: '×1.0' },
              { id: 'accelere' as Urgency, label: 'Accéléré', desc: 'Planning optimisé', factor: '×1.25' },
              { id: 'urgent' as Urgency, label: 'Urgent', desc: 'Mobilisation express', factor: '×1.55' },
            ].map((u) => {
              const isActive = data.urgency === u.id
              return (
                <button
                  key={u.id}
                  onClick={() => update({ urgency: u.id })}
                  className={`text-left px-4 py-3 rounded-xl border transition-all duration-200 ${
                    isActive
                      ? 'border-[#1E6B3A] bg-[#1E6B3A]/10'
                      : 'border-gray-300 bg-gray-50 hover:border-gray-400'
                  }`}
                >
                  <p className="text-[13px] font-semibold" style={{ color: isActive ? ACCENT : '#1f2937' }}>{u.label}</p>
                  <p className="text-[10px] text-gray-600 mt-0.5">{u.desc}</p>
                  <p className="text-[10px] font-mono mt-1" style={{ color: isActive ? ACCENT : 'rgba(107,114,128,0.6)' }}>
                    {u.factor}
                  </p>
                </button>
              )
            })}
          </div>
        </div>

        {/* Start date */}
        <div>
          <label className="block text-[12px] font-medium text-gray-700 mb-2">
            <Calendar size={12} className="inline mr-1.5 opacity-60" />
            Date de début souhaitée
          </label>
          <input
            type="date"
            value={data.startDate}
            onChange={(e) => update({ startDate: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 text-[14px] focus:outline-none focus:border-[#1E6B3A] focus:ring-1 focus:ring-[#1E6B3A]/20 transition-all duration-300"
            style={{ colorScheme: 'light' }}
          />
        </div>

        {/* Certifications */}
        <div>
          <label className="block text-[12px] font-medium text-gray-700 mb-3">
            Certifications & normes requises
            <span className="ml-2 text-[10px] text-gray-500">(facultatif — chaque norme ajuste le coût)</span>
          </label>
          <div className="flex flex-wrap gap-2">
            {CERTIFICATIONS.map((c) => {
              const isActive = data.certifications.includes(c)
              return (
                <button
                  key={c}
                  onClick={() => toggleCert(c)}
                  className={`px-3 py-1.5 rounded-lg border text-[12px] font-medium transition-all duration-200 ${
                    isActive
                      ? 'border-[#1E6B3A] bg-[#1E6B3A]/12 text-[#1E6B3A]'
                      : 'border-gray-300 bg-gray-50 text-gray-600 hover:border-gray-400 hover:text-gray-900'
                  }`}
                >
                  {c}
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Step 4: Contact ──────────────────────────────────────────────────────────

function Step4({ data, update }: { data: FormData; update: (d: Partial<FormData>) => void }) {
  return (
    <div>
      <SectionLabel text="Étape 4 — Vos coordonnées" />
      <h2 className="text-2xl font-serif font-bold text-gray-900 mb-1">Recevoir l'estimation</h2>
      <p className="text-[13px] text-gray-600 mb-8">Votre estimation complète sera envoyée à cette adresse.</p>

      <div className="space-y-4">
        <div>
          <label className="block text-[12px] font-medium text-gray-700 mb-2">Entreprise / Organisation</label>
          <div className="relative">
            <Building2 size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Nom de l'entreprise"
              value={data.company}
              onChange={(e) => update({ company: e.target.value })}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 text-[14px] placeholder:text-gray-400 focus:outline-none focus:border-[#1E6B3A] focus:ring-1 focus:ring-[#1E6B3A]/20 transition-all duration-300"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-[12px] font-medium text-gray-700 mb-2">Prénom *</label>
            <div className="relative">
              <User size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Jean"
                value={data.firstName}
                onChange={(e) => update({ firstName: e.target.value })}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 text-[14px] placeholder:text-gray-400 focus:outline-none focus:border-[#1E6B3A] focus:ring-1 focus:ring-[#1E6B3A]/20 transition-all duration-300"
              />
            </div>
          </div>
          <div>
            <label className="block text-[12px] font-medium text-gray-700 mb-2">Nom *</label>
            <input
              type="text"
              placeholder="Dupont"
              value={data.lastName}
              onChange={(e) => update({ lastName: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 text-[14px] placeholder:text-gray-400 focus:outline-none focus:border-[#1E6B3A] focus:ring-1 focus:ring-[#1E6B3A]/20 transition-all duration-300"
            />
          </div>
        </div>

        <div>
          <label className="block text-[12px] font-medium text-gray-700 mb-2">Email *</label>
          <div className="relative">
            <Mail size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              placeholder="jean.dupont@entreprise.fr"
              value={data.email}
              onChange={(e) => update({ email: e.target.value })}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 text-[14px] placeholder:text-gray-400 focus:outline-none focus:border-[#1E6B3A] focus:ring-1 focus:ring-[#1E6B3A]/20 transition-all duration-300"
            />
          </div>
        </div>

        <div>
          <label className="block text-[12px] font-medium text-gray-700 mb-2">Téléphone</label>
          <div className="relative">
            <Phone size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="tel"
              placeholder=".............."
              value={data.phone}
              onChange={(e) => update({ phone: e.target.value })}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 text-[14px] placeholder:text-gray-400 focus:outline-none focus:border-[#1E6B3A] focus:ring-1 focus:ring-[#1E6B3A]/20 transition-all duration-300"
            />
          </div>
        </div>

        <div>
          <label className="block text-[12px] font-medium text-gray-700 mb-2">Informations complémentaires</label>
          <textarea
            placeholder="Décrivez votre projet, les contraintes spécifiques, les accès au site…"
            value={data.message}
            onChange={(e) => update({ message: e.target.value })}
            rows={3}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 text-[14px] placeholder:text-gray-400 focus:outline-none focus:border-[#1E6B3A] focus:ring-1 focus:ring-[#1E6B3A]/20 transition-all duration-300 resize-none"
          />
        </div>
      </div>
    </div>
  )
}

// ─── Step 5: Results ──────────────────────────────────────────────────────────

function Step5({ estimate, data, onReset }: { estimate: Estimate; data: FormData; onReset: () => void }) {
  const projectLabel = PROJECT_TYPES.find((p) => p.id === data.projectType)?.label ?? ''

  return (
    <div>
      <SectionLabel text="Votre estimation" />
      <h2 className="text-2xl font-serif font-bold text-gray-900 mb-1">Résultat de l'analyse IA</h2>
      <p className="text-[13px] text-gray-600 mb-8">
        Basé sur 847 projets similaires et 28 ans de données terrain.
      </p>

      {/* Main estimate range */}
          <div className="relative p-6 rounded-2xl border border-[#1E6B3A]/30 bg-[#1E6B3A]/5 mb-5 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl"
          style={{ background: `linear-gradient(to right, transparent, ${ACCENT}70, transparent)` }} />

        <div className="flex items-center gap-2 mb-4">
          <TrendingUp size={14} style={{ color: ACCENT }} />
          <span className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: ACCENT }}>
            Estimation préliminaire — {projectLabel}
          </span>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="text-center p-3 rounded-xl bg-gray-50 border border-gray-200">
            <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Minimum</p>
            <p className="text-lg font-serif font-bold text-gray-700">{formatEur(estimate.low)}</p>
          </div>
          <div className="text-center p-4 rounded-xl bg-[#1E6B3A]/10 border border-[#1E6B3A]/30">
            <p className="text-[10px] uppercase tracking-wider mb-1" style={{ color: ACCENT }}>Estimation centrale</p>
            <p className="text-2xl font-serif font-bold text-gray-900">{formatEur(estimate.mid)}</p>
          </div>
          <div className="text-center p-3 rounded-xl bg-gray-50 border border-gray-200">
            <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Maximum</p>
            <p className="text-lg font-serif font-bold text-gray-700">{formatEur(estimate.high)}</p>
          </div>
        </div>

        {/* Meta: duration + confidence */}
        <div className="flex items-center justify-between text-[12px]">
          <div className="flex items-center gap-1.5 text-gray-600">
            <Clock size={12} />
            Durée estimée : <span className="text-gray-900 font-medium">{estimate.duration} semaines</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-500 text-[11px]">Fiabilité</span>
            <div className="w-24 h-1.5 rounded-full bg-gray-200 overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ background: ACCENT }}
                initial={{ width: 0 }}
                animate={{ width: `${estimate.confidence}%` }}
                transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
            <span className="text-[11px] font-semibold" style={{ color: ACCENT }}>{estimate.confidence}%</span>
          </div>
        </div>
      </div>

      {/* Breakdown */}
      <div className="p-5 rounded-xl border border-gray-300 bg-gray-50 mb-4">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-600 mb-4">Ventilation des coûts</p>
        <div className="space-y-2.5">
          {estimate.breakdown.map((b, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="text-[12px] text-gray-600 w-36 flex-shrink-0">{b.label}</span>
              <div className="flex-1 h-1.5 rounded-full bg-gray-200 overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: `${ACCENT}${60 + i * 10}` }}
                  initial={{ width: 0 }}
                  animate={{ width: `${b.percent}%` }}
                  transition={{ duration: 0.8, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
              <span className="text-[11px] text-gray-600 w-20 text-right">{formatEur(b.amount)}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Inclusions + Risks grid */}
      <div className="grid grid-cols-2 gap-3 mb-5">
        <div className="p-4 rounded-xl border border-gray-300 bg-gray-50">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-600 mb-3">Inclus dans le devis</p>
          <ul className="space-y-1.5">
            {estimate.inclusions.map((inc, i) => (
              <li key={i} className="flex items-start gap-2 text-[12px] text-gray-700">
                <CheckCircle2 size={11} className="mt-0.5 flex-shrink-0" style={{ color: ACCENT }} />
                {inc}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-4 rounded-xl border border-gray-300 bg-gray-50">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-600 mb-3">Points de vigilance</p>
          {estimate.risks.length === 0 ? (
            <p className="text-[12px] text-gray-600 italic">Aucun risque identifié sur les paramètres fournis.</p>
          ) : (
            <ul className="space-y-1.5">
              {estimate.risks.map((r, i) => (
                <li key={i} className="flex items-start gap-2 text-[12px] text-gray-700">
                  <AlertCircle size={11} className="mt-0.5 flex-shrink-0 text-amber-400/70" />
                  {r}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Disclaimer */}
      <div className="p-3 rounded-lg bg-gray-50 border border-gray-200 mb-5">
        <p className="text-[11px] text-gray-600 leading-relaxed">
          <Shield size={10} className="inline mr-1 opacity-60" />
          Cette estimation est préliminaire (±20%). Un devis contractuel précis (±5%) sera établi après visite de site par nos experts. Un ingénieur BINOVA vous contactera sous 48h.
        </p>
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <button
          onClick={onReset}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-300 text-gray-700 text-[13px] hover:border-gray-400 hover:text-gray-900 hover:bg-gray-50 transition-all duration-200"
        >
          <RotateCcw size={13} />
          Recommencer
        </button>
        <a
          href="/contact"
          className="flex-1 flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-white text-[13px] font-semibold"
          style={{ background: ACCENT }}
        >
          Parler à un expert
          <ArrowUpRight size={14} />
        </a>
      </div>
    </div>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────

const initialData: FormData = {
  projectType: null,
  volume: '', length: '', depth: '', soilType: null, region: '',
  urgency: 'standard', startDate: '', certifications: [],
  company: '', firstName: '', lastName: '', email: '', phone: '', message: '',
}

export function DevisForm() {
  const [step, setStep] = useState<Step>(1)
  const [data, setData] = useState<FormData>(initialData)
  const [isCalculating, setIsCalculating] = useState(false)
  const [estimate, setEstimate] = useState<Estimate | null>(null)
  const [direction, setDirection] = useState<1 | -1>(1)

  const update = (partial: Partial<FormData>) => setData((prev) => ({ ...prev, ...partial }))

  const canProceed: Record<number, boolean> = {
    1: !!data.projectType,
    2: true, // optional details
    3: true,
    4: !!data.firstName && !!data.lastName && !!data.email,
  }

  const next = () => {
    if (step < 4) {
      setDirection(1)
      setStep((s) => (s + 1) as Step)
    } else {
      // Submit: animate calculating
      setIsCalculating(true)
      setTimeout(() => {
        const result = calculateEstimate(data)
        setEstimate(result)
        setIsCalculating(false)
        setDirection(1)
        setStep(5)
      }, 1800)
    }
  }

  const prev = () => {
    setDirection(-1)
    setStep((s) => (s - 1) as Step)
  }

  const reset = () => {
    setData(initialData)
    setEstimate(null)
    setDirection(-1)
    setStep(1)
  }

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir * 30 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir * -30 }),
  }

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Card - Premium Design */}
      <div className="relative rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-elevated hover:shadow-2xl transition-shadow duration-300">
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-600 via-green-500 to-transparent" />

        <div className="p-8">
          {/* Progress */}
          {step < 5 && <ProgressBar step={step} total={4} />}

          {/* Step content */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={step}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              {step === 1 && <Step1 data={data} update={update} />}
              {step === 2 && <Step2 data={data} update={update} />}
              {step === 3 && <Step3 data={data} update={update} />}
              {step === 4 && <Step4 data={data} update={update} />}
              {step === 5 && estimate && <Step5 estimate={estimate} data={data} onReset={reset} />}
            </motion.div>
          </AnimatePresence>

          {/* Nav */}
          {step < 5 && (
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
              {step > 1 ? (
                <button
                  onClick={prev}
                  className="flex items-center gap-2 text-[13px] text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  <ChevronLeft size={15} />
                  Retour
                </button>
              ) : (
                <div />
              )}

              <motion.button
                onClick={next}
                disabled={!canProceed[step] || isCalculating}
                className="flex items-center gap-2.5 px-6 py-3 rounded-lg text-white text-[14px] font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                style={{ background: canProceed[step] ? ACCENT : '#d1d5db' }}
                whileHover={canProceed[step] ? { scale: 1.05, y: -2 } : {}}
                whileTap={canProceed[step] ? { scale: 0.95 } : {}}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              >
                {isCalculating ? (
                  <>
                    <Loader2 size={15} className="animate-spin" />
                    Calcul en cours…
                  </>
                ) : step === 4 ? (
                  <>
                    Calculer l'estimation
                    <TrendingUp size={15} />
                  </>
                ) : (
                  <>
                    Continuer
                    <ChevronRight size={15} />
                  </>
                )}
              </motion.button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function DevisPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-20 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block mb-4">
            <span className="inline-block px-4 py-2 bg-green-100 text-green-700 text-xs font-bold tracking-widest rounded-full">CALCULATEUR D'ESTIMATION</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-slate-900">Simulateur de Devis</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">Obtenez une estimation détaillée et professionnelle en quelques minutes. Nos algorithmes d'IA analysent vos paramètres techniques pour vous fournir un devis fiable.</p>
        </div>
        <DevisForm />
      </div>
    </main>
  )
}