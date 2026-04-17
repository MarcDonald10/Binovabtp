'use client'

import { EngagementTemplate } from '@/components/engagement-template'
import { Users, Leaf, Award, TrendingUp, Heart, Globe } from 'lucide-react'

export default function RSEPage() {
  const accentColor = '#6B5B95'

  const stats = [
    { label: 'Collaborateurs formés', value: '250+' },
    { label: 'Certifications', value: '100%' },
    { label: 'Projets communautaires', value: '50+' },
    { label: 'Investissement RSE annuel', value: '2M€' },
  ]

  const strategies = [
    {
      icon: Users,
      title: 'Capital Humain',
      description: 'Développement professionnel, bien‑être, égalité des chances et formation continue en géosciences pour nos équipes. Chaque collaborateur est au cœur de notre mission.'
    },
    {
      icon: Leaf,
      title: 'Excellence Environnementale',
      description: 'Restauration des sites, reforestation native, préservation de la biodiversité et réduction mesurée de notre empreinte carbone pour les générations futures.'
    },
    {
      icon: Award,
      title: 'Gouvernance Responsable',
      description: 'Transparence totale, conformité aux standards internationaux (IRMA, GRI) et dialogue permanent avec toutes les parties prenantes.'
    },
    {
      icon: TrendingUp,
      title: 'Éducation et Bourses',
      description: 'Attribution de plus de 25 bourses annuelles aux jeunes des communautés locales et enfants de collaborateurs, avec priorité aux filières scientifiques.'
    },
    {
      icon: Heart,
      title: 'Santé & Sécurité',
      description: 'Programme médical avancé, suivi psychologique, formation aux risques géotechniques et ergonomie des postes sur site pour nos équipes terrain.'
    },
    {
      icon: Globe,
      title: 'Régénération Écologique',
      description: 'Plantation annuelle d\'espèces locales, suivi scientifique de la biodiversité et réhabilitation complète des sites après exploitation.'
    },
  ]

  const initiatives = [
    {
      icon: TrendingUp,
      title: 'Développement Humain',
      items: [
        '250+ collaborateurs accompagnés et formés en continu',
        '25+ bourses d\'études attribuées chaque année',
        'Certification ISO 9001 & 14001',
        'Programme de développement professionnel continu'
      ]
    },
    {
      icon: Leaf,
      title: 'Impact Environnemental',
      items: [
        '12 000 arbres plantés par an',
        'Restauration complète des sites après exploitation',
        'Réduction de 40% de la consommation d\'eau',
        'Objectif 100% d\'énergie renouvelable d\'ici 2035'
      ]
    },
    {
      icon: Globe,
      title: 'Engagement Communautaire',
      items: [
        '50+ projets communautaires menés chaque année',
        '2 millions d\'euros investis annuellement en RSE',
        'Dialogue permanent avec les parties prenantes',
        'Transparence totale selon standards internationaux'
      ]
    },
  ]

  return (
    <EngagementTemplate
      accentColor={accentColor}
      tagLabel="RESPONSABILITÉ SOCIALE"
      heroTitle={
        <>
          Nous extrayons le{' '}
          <span style={{ color: '#8B7BA8' }}>présent</span>,<br />
          en préservant <span style={{ color: '#8B7BA8' }}>l'avenir</span>.
        </>
      }
      heroSubtitle="Une approche géologique responsable où performance économique, protection environnementale et développement humain avancent ensemble."
      statsLabel="ENGAGEMENT MESURABLE"
      statsTitle="Nos chiffres clés"
      statsDescription="Des résultats vérifiés, pas des promesses"
      stats={stats}
      strategiesLabel="NOS TROIS PILIERS"
      strategiesTitle="Notre stratégie RSE"
      strategiesDescription="Capital humain, excellence environnementale et gouvernance responsable"
      strategies={strategies}
      initiativesLabel="SUR LE TERRAIN"
      initiativesTitle="Initiatives concrètes"
      initiativesDescription="Des actions mesurables pour un impact durable"
      initiatives={initiatives}
      ctaTitle="Ensemble, construisons un avenir responsable"
      ctaDescription="L'excellence géologique et la responsabilité durable ne sont pas contradictoires — elles sont indissociables."
      ctaButtonText="Rejoignez notre engagement RSE"
      ctaLink="/contact"
      bgDarkColor="bg-white"
    />
  )
}