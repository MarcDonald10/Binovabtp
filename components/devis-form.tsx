'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ChevronRight, ChevronLeft, CheckCircle, Download } from 'lucide-react'

// Force rebuild - cache invalidation

interface FormData {
  // Step 1
  projectType: string
  projectName: string
  location: string
  // Step 2
  scopeMeters: number
  depthMeters: number
  terrainType: string
  // Step 3
  schedule: string
  budget: string
  contact: string
  email: string
  phone: string
}

export function DevisForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    projectType: '',
    projectName: '',
    location: '',
    scopeMeters: 0,
    depthMeters: 0,
    terrainType: '',
    schedule: '',
    budget: '',
    contact: '',
    email: '',
    phone: '',
  })
  const [estimate, setEstimate] = useState<number | null>(null)
  const [showDownload, setShowDownload] = useState(false)

  const handleInputChange = (field: keyof FormData, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const calculateEstimate = () => {
    let basePrice = 0
    let multiplier = 1

    // Base price by project type
    switch (formData.projectType) {
      case 'tunnelage':
        basePrice = 50000 // €/km
        break
      case 'minage':
        basePrice = 30000 // €/km
        break
      case 'terrassement':
        basePrice = 15000 // €/km
        break
      case 'souterrain':
        basePrice = 75000 // €/km
        break
      default:
        basePrice = 25000
    }

    // Adjust for depth
    if (formData.depthMeters > 100) {
      multiplier += (formData.depthMeters - 100) / 500
    }

    // Adjust for terrain difficulty
    switch (formData.terrainType) {
      case 'rocheux-difficile':
        multiplier *= 1.5
        break
      case 'rocheux-facile':
        multiplier *= 1.1
        break
      case 'meuble':
        multiplier *= 0.9
        break
      case 'heterogene':
        multiplier *= 1.3
        break
    }

    // Adjust for schedule urgency
    if (formData.schedule === 'urgent') {
      multiplier *= 1.2
    } else if (formData.schedule === 'accelere') {
      multiplier *= 1.1
    }

    const totalEstimate = (basePrice * (formData.scopeMeters / 1000)) * multiplier

    setEstimate(Math.round(totalEstimate))
    setShowDownload(true)
  }

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1)
    } else {
      calculateEstimate()
      setStep(4)
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const downloadEstimate = () => {
    const content = `
DEVIS ESTIMÉ - BINOVA ROCKBUILDERS
=====================================

Données du Projet
-----------------
Type de Projet: ${formData.projectType}
Nom du Projet: ${formData.projectName}
Localisation: ${formData.location}

Caractéristiques Techniques
----------------------------
Longueur/Scope: ${formData.scopeMeters} mètres
Profondeur: ${formData.depthMeters} mètres
Type de Terrain: ${formData.terrainType}

Paramètres de Réalisation
--------------------------
Planning: ${formData.schedule}
Budget Envisagé: ${formData.budget}€

Contact
-------
Nom: ${formData.contact}
Email: ${formData.email}
Téléphone: ${formData.phone}

Estimation Préliminaire
-----------------------
Coût Estimé: €${estimate?.toLocaleString('fr-FR')}

IMPORTANT: Cette estimation est indicative et non contractuelle.
Un devis précis sera établi après étude de site et validation
des paramètres techniques par nos experts.

Pour plus d'informations: mail....
Téléphone: Tel......
    `.trim()

    const element = document.createElement('a')
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content))
    element.setAttribute('download', `devis-${formData.projectName}-${new Date().toISOString().split('T')[0]}.txt`)
    element.style.display = 'none'
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-4">
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              className={`h-2 flex-1 rounded-full mx-1 transition-colors ${
                step >= num ? 'bg-accent' : 'bg-muted'
              }`}
            />
          ))}
        </div>
        <p className="text-center text-sm text-muted-foreground">
          Étape {step === 4 ? 3 : step} sur 3
        </p>
      </div>

      {/* Form Steps */}
      <div className="bg-background rounded-lg border border-border p-8 mb-8">
        {step === 1 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Informations Générales</h2>
            
            <div>
              <label className="block text-sm font-medium mb-2">Type de Projet *</label>
              <select
                value={formData.projectType}
                onChange={(e) => handleInputChange('projectType', e.target.value)}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <option value="">Sélectionner un type...</option>
                <option value="tunnelage">Tunnelage</option>
                <option value="minage">Minage</option>
                <option value="terrassement">Terrassement</option>
                <option value="souterrain">Travaux Souterrains</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Nom du Projet *</label>
              <Input
                value={formData.projectName}
                onChange={(e) => handleInputChange('projectName', e.target.value)}
                placeholder="Ex: Tunnel Vallée du Rhône"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Localisation *</label>
              <Input
                value={formData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
                placeholder="Ex: Isère, Rhône-Alpes"
              />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Caractéristiques Techniques</h2>
            
            <div>
              <label className="block text-sm font-medium mb-2">Longueur/Scope (mètres) *</label>
              <Input
                type="number"
                value={formData.scopeMeters}
                onChange={(e) => handleInputChange('scopeMeters', parseInt(e.target.value))}
                placeholder="Ex: 5000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Profondeur (mètres) *</label>
              <Input
                type="number"
                value={formData.depthMeters}
                onChange={(e) => handleInputChange('depthMeters', parseInt(e.target.value))}
                placeholder="Ex: 150"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Type de Terrain *</label>
              <select
                value={formData.terrainType}
                onChange={(e) => handleInputChange('terrainType', e.target.value)}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <option value="">Sélectionner...</option>
                <option value="rocheux-facile">Rocheux Facile</option>
                <option value="rocheux-difficile">Rocheux Difficile</option>
                <option value="meuble">Meuble/Alluvions</option>
                <option value="heterogene">Hétérogène</option>
              </select>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Détails du Projet</h2>
            
            <div>
              <label className="block text-sm font-medium mb-2">Planning *</label>
              <select
                value={formData.schedule}
                onChange={(e) => handleInputChange('schedule', e.target.value)}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <option value="">Sélectionner...</option>
                <option value="flexible">Flexible (12+ mois)</option>
                <option value="normal">Normal (6-12 mois)</option>
                <option value="accelere">Accéléré (3-6 mois)</option>
                <option value="urgent">Urgent (moins de 3 mois)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Budget Envisagé (€) *</label>
              <Input
                type="number"
                value={formData.budget}
                onChange={(e) => handleInputChange('budget', e.target.value)}
                placeholder="Ex: 500000"
              />
            </div>

            <hr className="my-4" />

            <div>
              <label className="block text-sm font-medium mb-2">Nom de Contact *</label>
              <Input
                value={formData.contact}
                onChange={(e) => handleInputChange('contact', e.target.value)}
                placeholder="Votre nom complet"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email *</label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="votre.email@exemple.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Téléphone *</label>
              <Input
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="XX XX XX XX XX"
              />
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-6 text-center">
            <div className="mb-6">
              <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
            </div>
            
            <h2 className="text-2xl font-bold">Estimation Générée</h2>
            
            <div className="bg-muted/30 rounded-lg p-8 my-6">
              <p className="text-sm text-muted-foreground mb-2">Coût Estimé</p>
              <p className="text-5xl font-bold text-accent">
                €{estimate?.toLocaleString('fr-FR')}
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-left">
              <p className="text-sm text-blue-900">
                <strong>Note importante:</strong> Cette estimation est préliminaire et basée sur les paramètres fournis. Un devis détaillé et précis sera établi après une visite de site et validation des conditions géotechniques par nos experts.
              </p>
            </div>

            <div className="space-y-3">
              <p className="text-muted-foreground">
                Votre demande a été enregistrée. Un expert BINOVA vous contactera sous 48h.
              </p>
              <Button 
                onClick={downloadEstimate}
                className="bg-accent hover:bg-accent/90 text-accent-foreground w-full"
                size="lg"
              >
                <Download className="mr-2 w-5 h-5" />
                Télécharger l&apos;Estimation
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-4 justify-between">
        <Button
          onClick={handleBack}
          variant="outline"
          disabled={step === 1 || step === 4}
          className="flex items-center gap-2"
        >
          <ChevronLeft size={20} />
          Précédent
        </Button>

        <Button
          onClick={handleNext}
          className="bg-accent hover:bg-accent/90 text-accent-foreground flex items-center gap-2 ml-auto"
          disabled={
            (step === 1 && (!formData.projectType || !formData.projectName || !formData.location)) ||
            (step === 2 && (!formData.scopeMeters || !formData.depthMeters || !formData.terrainType)) ||
            (step === 3 && (!formData.schedule || !formData.budget || !formData.contact || !formData.email || !formData.phone)) ||
            step === 4
          }
        >
          {step === 3 ? 'Générer Devis' : 'Suivant'}
          {step < 3 && <ChevronRight size={20} />}
        </Button>
      </div>
    </div>
  )
}
