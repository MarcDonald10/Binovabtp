'use client'

import { EngagementTemplate } from '@/components/engagement-template'
import { Pickaxe, Globe, Leaf, Shield, Users, TrendingUp, Droplets, Zap } from 'lucide-react'

export default function CarrieresPage() {
  const accentColor = '#E89A7A'

  const stats = [
    { label: 'Tonnes extraites', value: '15M+' },
    { label: 'Carrières & Mines', value: '35+' },
    { label: 'Taux de récupération', value: '91%' },
    { label: 'Valeur des projets', value: '€8.7B' },
  ]

  const strategies = [
    {
      icon: Pickaxe,
      title: 'Mines de métaux précieux',
      description: 'Or, argent, cuivre, zinc. Extraction souterraine et à ciel ouvert avec des taux de récupération supérieurs à 90% grâce aux technologies de pointe.'
    },
    {
      icon: Globe,
      title: 'Carrières de matériaux',
      description: 'Granulats, pierres concassées, calcaire et sable. Production de plus de 10 millions de tonnes par an pour les chantiers majeurs.'
    },
    {
      icon: Leaf,
      title: 'Exploitation durable',
      description: "Modèle responsable : restauration écologique, gestion de l'\''eau, préservation de la biodiversité et minimisation de l'impact environnemental."
    },
    {
      icon: Shield,
      title: 'Normes de sécurité',
      description: 'Standards internationaux appliqués sur tous les sites. Formation continue des équipes et gestion des risques optimisée.'
    },
    {
      icon: Users,
      title: 'Développement local',
      description: 'Priorité aux emplois locaux, formation professionnelle et partage équitable des retombées économiques avec les communautés.'
    },
    {
      icon: TrendingUp,
      title: 'Efficacité opérationnelle',
      description: "Processus optimisés, technologies innovantes et gestion d'exploitation réduisant les délais et les coûts industriels."
    },
  ]

  const initiatives = [
    {
      icon: Leaf,
      title: 'Restauration écologique',
      items: [
        'Reforestation systématique post-extraction',
        "Création d'écosystèmes restaurés",
        'Plus de 5 000 hectares réhabilités depuis 2010',
        'Biodiversité préservée et développée'
      ]
    },
    {
      icon: Droplets,
      title: "Gestion de l'eau",
      items: [
        'Traitement avancé et recyclage',
        'Réduction de 45% de la consommation',
        'Recharge des nappes phréatiques protégée',
        "Qualité de l'eau garantie"
      ]
    },
    {
      icon: Zap,
      title: 'Énergie & Efficacité',
      items: [
        'Énergies renouvelables en phase avec la transition',
        'Réduction des émissions de 30% par tonne',
        'Processus de production éco-responsables',
        'Performance et durabilité intégrées'
      ]
    },
  ]

  return (
    <EngagementTemplate
      accentColor={accentColor}
      tagLabel="CARRIÈRES & EXPLOITATION"
      heroTitle={
        <>
          Extraire avec<br />
          <span style={{ color: '#E89A7A' }}>responsabilité</span>
        </>
      }
      heroSubtitle="Au Cameroun comme à l'international, nous exploitons carrières et mines avec les plus hauts standards de sécurité, d'environnement et de développement local."
      statsLabel="IMPACT MESURÉ"
      statsTitle="Nos performances"
      statsDescription="Une exploitation responsable et performante"
      stats={stats}
      strategiesLabel="NOTRE EXPERTISE"
      strategiesTitle="Six piliers de notre excellence"
      strategiesDescription="Extraction, durabilité et innovation intégrées"
      strategies={strategies}
      initiativesLabel="SUR LE TERRAIN"
      initiativesTitle="Solutions concrètes"
      initiativesDescription="Des actions mesurables pour chaque projet"
      initiatives={initiatives}
      ctaTitle="Extraire aujourd'hui. Préserver pour demain."
      ctaDescription="15 millions de tonnes par an avec un engagement fort pour l'environnement et les communautés locales."
      ctaButtonText="Discuter de votre projet d'exploitation"
      ctaLink="/contact"
      bgDarkColor="bg-white"
    />
  )
}
