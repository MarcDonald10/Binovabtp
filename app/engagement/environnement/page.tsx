'use client'

import { EngagementTemplate } from '@/components/engagement-template'
import { Leaf, Droplets, Wind, Recycle, TrendingDown, Sprout } from 'lucide-react'

export default function EnvironnementPage() {
  const accentColor = '#5a8c5a'

  const stats = [
    { label: 'Émissions CO₂', value: '−60%' },
    { label: 'Management env.', value: 'ISO 14001' },
    { label: 'Tonnes recyclées', value: '100k' },
    { label: 'Hectares protégés', value: '4 000+' },
  ]

  const strategies = [
    {
      icon: TrendingDown,
      title: 'Réduction des émissions',
      description: 'Objectif Net-Zéro d\'ici 2040. Électrification de la flotte, optimisation logistique et énergies renouvelables sur tous les sites.'
    },
    {
      icon: Recycle,
      title: 'Économie circulaire',
      description: '100 000 tonnes de matériaux valorisés chaque année. Réutilisation systématique des déblais et démolition sur site.'
    },
    {
      icon: Leaf,
      title: 'Protection de la biodiversité',
      description: 'Plans de conservation avant, pendant et après chaque projet. Plus de 10 000 arbres plantés par an.'
    },
    {
      icon: Droplets,
      title: 'Gestion responsable de l\'eau',
      description: 'Systèmes de récupération, traitement et recyclage des eaux de chantier. Réduction moyenne de 40% de la consommation.'
    },
    {
      icon: Wind,
      title: 'Transition énergétique',
      description: '50% de l\'énergie déjà renouvelable. Objectif 100% d\'ici 2035 grâce aux panneaux solaires et éoliennes.'
    },
    {
      icon: Sprout,
      title: 'Restauration des écosystèmes',
      description: 'Restauration complète et scientifiquement suivie après chaque excavation. Plus de 4 000 hectares restaurés depuis 2010.'
    },
  ]

  const initiatives = [
    {
      icon: Droplets,
      title: 'Gestion de l\'eau',
      items: [
        'Récupération et traitement des eaux de chantier',
        'Recyclage systématique des eaux usées',
        'Réduction de 40% de la consommation moyenne',
        'Systèmes de filtration avancés'
      ]
    },
    {
      icon: Wind,
      title: 'Énergies renouvelables',
      items: [
        '50% d\'énergie renouvelable actuellement',
        'Objectif 100% d\'ici 2035',
        'Panneaux solaires sur tous les sites',
        'Éoliennes pour l\'énergie d\'appoint'
      ]
    },
    {
      icon: Sprout,
      title: 'Biodiversité',
      items: [
        'Restauration écologique scientifiquement suivie',
        '4 000+ hectares restaurés depuis 2010',
        '10 000+ arbres plantés par an',
        'Plans de conservation avant chaque projet'
      ]
    },
  ]

  return (
    <EngagementTemplate
      accentColor={accentColor}
      tagLabel="ENVIRONNEMENT & DURABILITÉ"
      heroTitle={
        <>
          Nous ne nous contentons pas<br />
          d'extraire. Nous{' '}
          <span style={{ color: '#8bc48b' }}>restaurons</span>.
        </>
      }
      heroSubtitle="Une approche responsable qui allie performance géologique et préservation durable des écosystèmes."
      statsLabel="RÉSULTATS MESURÉS"
      statsTitle="Nos engagements concrets"
      statsDescription="Des chiffres vérifiés, pas des promesses"
      stats={stats}
      strategiesLabel="TROIS AXES"
      strategiesTitle="Notre stratégie environnementale"
      strategiesDescription="Minimiser l'impact, maximiser la contribution positive"
      strategies={strategies}
      initiativesLabel="SUR LE TERRAIN"
      initiativesTitle="Initiatives concrètes"
      initiativesDescription="Des actions mesurables à chaque étape de nos projets"
      initiatives={initiatives}
      ctaTitle="Protéger la planète, un projet à la fois"
      ctaDescription="Une industrie géologique performante peut et doit être exemplaire sur le plan environnemental."
      ctaButtonText="Discuter de nos solutions durables"
      ctaLink="/contact"
      bgDarkColor="bg-[#0d1a0d]"
    />
  )
}
