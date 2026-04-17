'use client'

import { EngagementTemplate } from '@/components/engagement-template'
import { Waves, Zap, Droplets, Mountain, Cog, Leaf, Gauge } from 'lucide-react'

export default function BarragesPage() {
  const accentColor = '#6EA3C8'

  const stats = [
    { label: 'Barrages construits', value: '32' },
    { label: 'Eau stockée', value: '1 850 km³' },
    { label: 'Capacité énergétique', value: '+15 GW' },
    { label: 'Foyers alimentés', value: '50M+' },
  ]

  const strategies = [
    {
      icon: Waves,
      title: 'Conception hydraulique',
      description: 'Structures massives optimisées pour maximiser le stockage d\'eau et minimiser les pertes par infiltration.'
    },
    {
      icon: Zap,
      title: 'Production d\'électricité renouvelable',
      description: 'Turbines haute performance et systèmes de génération pour une électricité fiable et durable.'
    },
    {
      icon: Droplets,
      title: 'Gestion des ressources en eau',
      description: 'Régulation du débit, irrigation, approvisionnement en eau potable et gestion des crues.'
    },
    {
      icon: Cog,
      title: 'Systèmes de contrôle avancés',
      description: 'Automatisation complète, monitoring en temps réel et sécurité maximale des installations.'
    },
    {
      icon: Mountain,
      title: 'Géotechnique de pointe',
      description: 'Études géologiques approfondies, fondations stables et imperméabilisation complète.'
    },
    {
      icon: Leaf,
      title: 'Respect de l\'environnement',
      description: 'Écosystèmes préservés, migration des espèces facilitée et intégration paysagère réfléchie.'
    },
  ]

  const initiatives = [
    {
      icon: Zap,
      title: 'Production énergétique',
      items: [
        'Électricité 100% renouvelable et prévisible',
        'Capacité installée optimisée pour chaque site',
        'Rendement énergétique > 90%',
        'Durée de vie 50-100+ ans'
      ]
    },
    {
      icon: Waves,
      title: 'Gestion de l\'eau',
      items: [
        'Réserves d\'eau garanties pour l\'irrigation',
        'Approvisionnement en eau potable fiable',
        'Amortissement des crues saisonnières',
        'Système de distribution optimisé'
      ]
    },
    {
      icon: Gauge,
      title: 'Sécurité & Monitoring',
      items: [
        'Capteurs multiples en temps réel',
        'Systèmes d\'alerte précoces activés',
        'Plans d\'évacuation d\'urgence définis',
        'Maintenance prédictive intégrée'
      ]
    },
  ]

  return (
    <EngagementTemplate
      accentColor={accentColor}
      tagLabel="BARRAGES & RETENUES D'EAU"
      heroTitle={
        <>
          Maîtriser l'eau,<br />
          produire l'{' '}
          <span style={{ color: '#6EA3C8' }}>énergie</span>.
        </>
      }
      heroSubtitle="32 barrages construits. 1 850 km³ d'eau stockée. Électricité durable pour 50 millions de foyers."
      statsLabel="IMPACT MESURÉ"
      statsTitle="Nos réalisations"
      statsDescription="Des chiffres vérifiés, des résultats durables"
      stats={stats}
      strategiesLabel="NOTRE EXPERTISE"
      strategiesTitle="Six piliers de notre excellence"
      strategiesDescription="Conception, construction et exploitation optimisées"
      strategies={strategies}
      initiativesLabel="SUR LE TERRAIN"
      initiativesTitle="Solutions concrètes"
      initiativesDescription="Des actions mesurables pour chaque projet"
      initiatives={initiatives}
      ctaTitle="Votre barrage mérite l'excellence"
      ctaDescription="Discutons de vos projets hydroélectriques et de gestion des ressources en eau."
      ctaButtonText="Lancer votre projet avec nous"
      ctaLink="/contact"
      bgDarkColor="bg-white"
    />
  )
}
