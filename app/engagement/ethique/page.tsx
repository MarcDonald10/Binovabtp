'use client'

import { EngagementTemplate } from '@/components/engagement-template'
import { Gavel, Shield, Users, Eye, Handshake, TrendingUp, Scale } from 'lucide-react'

export default function EthiquePage() {
  const accentColor = '#E89A7A'

  const stats = [
    { label: 'Audits', value: '12/an' },
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
      description: 'Sélection rigoureuse de nos fournisseurs et sous-traitants basée sur des critères éthiques, sociaux et environnementaux stricts.'
    },
    {
      icon: Shield,
      title: 'Lutte Anti-Corruption',
      description: 'Tolérance zéro envers toute forme de corruption, pots-de-vin ou conflits d\'intérêts. Formation obligatoire annuelle.'
    },
    {
      icon: Users,
      title: 'Respect des Droits Humains',
      description: 'Interdiction formelle du travail forcé, du travail des enfants et de toute discrimination. Respect des conventions internationales (OIT).'
    },
    {
      icon: TrendingUp,
      title: 'Excellence & Intégrité',
      description: 'Engagement envers la compétence, l\'honnêteté intellectuelle et le respect des engagements pris auprès de nos clients et partenaires.'
    },
  ]

  const initiatives = [
    {
      icon: Scale,
      title: 'Comité d\'Éthique',
      items: [
        'Audit interne trimestriel',
        'Gestion des alertes éthiques',
        'Formation continue du personnel',
        'Recommandations stratégiques'
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
        'Politiques écrites accessibles',
        'Certifications externes',
        'Déclaration de conformité'
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
          une option. C'est notre <span className="text-[#E89A7A]">fondation</span>.
        </>
      }
      heroSubtitle="Nous plaçons l'éthique au cœur de toutes nos décisions, car la confiance de nos partenaires et communautés est notre bien le plus précieux."
      statsLabel="NORMES ÉTHIQUES"
      statsTitle="Nos standards vérifiés"
      statsDescription="Des métriques concrètes qui prouvent notre engagement envers l'intégrité"
      stats={stats}
      strategiesLabel="FONDEMENTS"
      strategiesTitle="Nos piliers éthiques"
      strategiesDescription="Six principes fondamentaux qui guident nos actions quotidiennes"
      strategies={strategies}
      initiativesLabel="GOUVERNANCE"
      initiativesTitle="Gouvernance et Contrôle"
      initiativesDescription="Des structures dédiées au maintien de nos standards"
      initiatives={initiatives}
      ctaTitle="La confiance se construit sur l'intégrité"
      ctaDescription="Nous nous engageons à maintenir les plus hauts standards éthiques dans toutes nos opérations."
      ctaButtonText="Discuter de nos standards éthiques"
      ctaLink="/contact"
      bgDarkColor="bg-[#0a0906]"
    />
  )
}
