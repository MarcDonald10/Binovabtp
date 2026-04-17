'use client'

import { EngagementTemplate } from '@/components/engagement-template'
import { Shield, AlertCircle, Users, Target, Zap, CheckCircle2, Award } from 'lucide-react'

export default function SecuriteSantePage() {
  const accentColor = '#C9826B'

  const stats = [
    { label: 'Sans accident mortel', value: '28 ans' },
    { label: 'Certification SSE', value: 'ISO 45001' },
    { label: 'Experts SSE', value: '150+' },
    { label: 'Formation par an', value: '500h' },
  ]

  const strategies = [
    {
      icon: Shield,
      title: 'Prévention Proactive',
      description: 'Identification systématique des risques géotechniques, évaluations quotidiennes et plans d action préventifs adaptés à chaque site.'
    },
    {
      icon: Users,
      title: 'Culture de Sécurité Partagée',
      description: 'Chaque collaborateur est acteur de sa propre sécurité et de celle des autres. Formation continue et sensibilisation quotidienne.'
    },
    {
      icon: AlertCircle,
      title: 'Conformité & Audits Rigoureux',
      description: 'Audits internes et externes réguliers, conformité stricte aux normes internationales (ISO 45001, IRMA) et vérifications terrain.'
    },
    {
      icon: Zap,
      title: 'Réaction Immédiate & Apprentissage',
      description: 'Enquêtes approfondies après tout incident, débriefings collectifs et mise en œuvre rapide des mesures correctives.'
    },
    {
      icon: CheckCircle2,
      title: 'Surveillance Médicale Avancée',
      description: "Examens médicaux périodiques, suivi personnalisé, prévention des TMS et des maladies professionnelles liées à l'environnement minier."
    },
    {
      icon: Award,
      title: 'Excellence SSE Reconnue',
      description: 'Certifications internationales, record de sécurité exemplaire et reconnaissance de nos standards au-delà des exigences légales.'
    },
  ]

  const initiatives = [
    {
      icon: CheckCircle2,
      title: 'Formation SSE Obligatoire',
      items: [
        'Plus de 500 heures de formation par an',
        'Modules adaptés aux risques géotechniques',
        'Formation hauteur, machines lourdes, PPE',
        'Mise à jour continue des compétences'
      ]
    },
    {
      icon: Users,
      title: 'Surveillance Médicale',
      items: [
        'Examens médicaux périodiques',
        'Suivi personnalisé des collaborateurs',
        'Prévention des TMS et maladies professionnelles',
        'Soutien psychologique inclus'
      ]
    },
    {
      icon: Target,
      title: 'Objectif Zéro Accident',
      items: [
        "Taux de fréquence < 0,5 par million d'heures",
        'Système de reporting transparent',
        'Culture du « Stop Work » activée',
        'Enquêtes post-incident systématiques'
      ]
    },
  ]

  return (
    <EngagementTemplate
      accentColor={accentColor}
      tagLabel="SÉCURITÉ & SANTÉ"
      heroTitle={
        <>
          Zéro accident.<br />
          Zéro <span style={{ color: '#D9956D' }}>compromis</span>.
        </>
      }
      heroSubtitle="La sécurité n'est pas une priorité parmi d'autres. C'est la condition première de chacune de nos opérations géologiques."
      statsLabel="CULTURE DE SÉCURITÉ"
      statsTitle="Nos résultats"
      statsDescription="Une approche éprouvée depuis plus de 28 ans"
      stats={stats}
      strategiesLabel="NOS QUATRE PILIERS"
      strategiesTitle="Excellence SSE"
      strategiesDescription="Une approche structurée, rigoureuse et humaine de la sécurité"
      strategies={strategies}
      initiativesLabel="PROGRAMMES PHARES"
      initiativesTitle="Actions concrètes"
      initiativesDescription="Chaque collaborateur est protégé, formé et valorisé"
      initiatives={initiatives}
      ctaTitle="La sécurité est notre valeur la plus précieuse"
      ctaDescription="Rejoignez une équipe où chaque collaborateur est protégé, formé et valorisé pour son expertise."
      ctaButtonText="Nous rejoindre ou en savoir plus"
      ctaLink="/contact"
      bgDarkColor="bg-white"
    />
  )
}
