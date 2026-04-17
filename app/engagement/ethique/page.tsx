'use client'

import { EngagementTemplate } from '@/components/engagement-template'
import { Gavel, Shield, Users, Eye, Handshake, TrendingUp, Scale } from 'lucide-react'

export default function EthiquePage() {
  const accentColor = '#A1776D'

  const stats = [
    { label: 'Audits internes', value: '12' },
    { label: 'Alertes résolues', value: '100%' },
    { label: 'Certifications', value: '5' },
    { label: 'Partenaires évalués', value: '150+' },
  ]

  const strategies = [
    {
      icon: Gavel,
      title: 'Conformité & Légalité',
      description: 'Respect absolu des lois nationales et internationales. Audits réguliers et conformité stricte aux conventions anti-corruption.'
    },
    {
      icon: Eye,
      title: 'Transparence Totale',
      description: 'Communication claire et honnête avec toutes les parties prenantes. Publication annuelle de nos rapports d\'éthique et de conformité.'
    },
    {
      icon: Handshake,
      title: 'Partenariats Responsables',
      description: 'Sélection rigoureuse de nos fournisseurs basée sur des critères éthiques, sociaux et environnementaux stricts.'
    },
    {
      icon: Shield,
      title: 'Lutte Anti-Corruption',
      description: 'Tolérance zéro envers toute forme de corruption ou conflit d\'intérêts. Formation obligatoire pour chaque collaborateur.'
    },
    {
      icon: Users,
      title: 'Droits Humains',
      description: 'Interdiction formelle du travail forcé et de toute discrimination. Respect des conventions internationales de l\'OIT.'
    },
    {
      icon: TrendingUp,
      title: 'Excellence & Intégrité',
      description: 'Engagement envers la compétence, l\'honnêteté intellectuelle et le respect des engagements pris auprès de nos clients.'
    },
  ]

  const initiatives = [
    {
      icon: Scale,
      title: 'Gouvernance Éthique',
      items: [
        'Comité d\'Éthique indépendant',
        'Audits internes trimestriels',
        'Gestion transparente des alertes éthiques',
        'Formation continue du personnel'
      ]
    },
    {
      icon: Shield,
      title: 'Contrôle des Partenaires',
      items: [
        'Évaluation éthique des fournisseurs',
        'Audits SSE & RSE réguliers',
        'Suivi annuel des sous-traitants',
        'Clause d\'exclusion en cas de violation'
      ]
    },
    {
      icon: Eye,
      title: 'Transparence & Reporting',
      items: [
        'Rapport annuel d\'éthique public',
        'Politiques écrites et accessibles',
        'Certifications externes reconnues',
        'Déclaration de conformité vérifiée'
      ]
    },
  ]

  return (
    <EngagementTemplate
      accentColor={accentColor}
      tagLabel="INTÉGRITÉ & TRANSPARENCE"
      heroTitle={
        <>
          L'intégrité n'est pas<br />
          une option. C'est notre{' '}
          <span style={{ color: '#B8938A' }}>fondation</span>.
        </>
      }
      heroSubtitle="Nous plaçons l'éthique au cœur de toutes nos décisions, car la confiance de nos partenaires et communautés est notre bien le plus précieux."
      statsLabel="STANDARDS VÉRIFIÉS"
      statsTitle="Nos engagements mesurés"
      statsDescription="Des audits réguliers et une gouvernance rigoureuse"
      stats={stats}
      strategiesLabel="NOS SIX PRINCIPES"
      strategiesTitle="Les fondements de notre éthique"
      strategiesDescription="Six piliers qui définissent chaque décision prise au sein de notre organisation"
      strategies={strategies}
      initiativesLabel="STRUCTURES DÉDIÉES"
      initiativesTitle="Notre gouvernance éthique"
      initiativesDescription="Des mécanismes concrets pour maintenir nos standards"
      initiatives={initiatives}
      ctaTitle="La confiance se construit sur l'intégrité"
      ctaDescription="Nous nous engageons à maintenir les plus hauts standards éthiques dans toutes nos opérations."
      ctaButtonText="Discuter de nos standards éthiques"
      ctaLink="/contact"
      bgDarkColor="bg-white"
    />
  )
}