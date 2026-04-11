'use client'

import { Building2, Zap, Users, Award, Landmark, Cog } from 'lucide-react'
import { MetierPageTemplate } from '@/components/metier-page-template'

export default function GenieCivilPage() {
  return (
    <MetierPageTemplate
      title="Génie Civil & Ouvrages d'Art"
      vision="Développer des infrastructures solides et durables à travers les continents. Nous mobilisons les compétences les plus pointues et les outils les plus efficaces pour concevoir et réaliser des ouvrages les plus complexes."
      excellence="L'excellence en génie civil et ouvrages d'art signifie mobiliser les compétences les plus pointues et les outils les plus efficaces pour concevoir et réaliser des ouvrages complexes avec la performance des matériaux, structures et méthodes de travail innovants."
      stats={[
        { value: "847", label: "Projets Livrés", description: "En 28 ans d'expertise continue" },
        { value: "€8.5B", label: "Valeur Totale", description: "D'ouvrages réalisés" },
        { value: "99.2%", label: "Taux de Succès", description: "En délai et budget" },
        { value: "250+", label: "Experts Permanents", description: "Spécialisés par discipline" }
      ]}
      expertise={[
        {
          icon: Landmark,
          title: "Ponts & Viaducs",
          description: "Conception et construction de ponts à travées longues, viaducs urbains et structures complexes en acier, béton et matériaux innovants."
        },
        {
          icon: Cog,
          title: "Infrastructures Énergétiques",
          description: "Postes électriques, lignes haute tension, fondations d'éoliennes et centrales hydroélectriques."
        },
        {
          icon: Award,
          title: "Ouvrages Spécialisés",
          description: "Structures complexes, monuments historiques et constructions iconiques nécessitant précision millimétrée."
        }
      ]}
      projects={[
        {
          title: "Pont Long Portée Europe",
          description: "Structure suspendue de 2.8km franchissant un détroit. Mise en oeuvre d'une technique innovante de vérinage hydraulique pour la navigation.",
          stats: "€1.2B"
        },
        {
          title: "Terminal Aéroportuaire Premium",
          description: "Architecture spectaculaire avec 450m de portée libre. Défit structural résolu par colonnes multiples et distribution de charge révolutionnaire.",
          stats: "€890M"
        },
        {
          title: "Viaduc Montagneux",
          description: "Ouvrage en montagne sur 12km avec 156 piles et viaducs de hauteur variable. Adaptation complète au terrain.",
          stats: "€650M"
        }
      ]}
      approach="Chaque projet bénéficie d'une approche intégrée : études préalables approfondies, conception paramétrique, simulation 3D, méthodes constructives innovantes et suivi qualité exemplaire. Nous nous engageons sur les délais, budgets et performance structurelle."
    />
  )}