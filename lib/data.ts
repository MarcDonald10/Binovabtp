// Données principales pour BINOVA ROCKBUILDERS - Convaincre & Convertir

export const companyStats = {
  yearsInBusiness: 28,
  totalProjects: 847,
  teamMembers: 250,
  countriesOperating: 12,
  successRate: 99.2,
  totalRevenue: "€450M+",
  rocksExcavated: "15M+ tonnes",
  tunnelsCompleted: 156,
};

export const certifications = [
  { name: "ISO 9001:2015", description: "Qualité & Management", icon: "CheckCircle2" },
  { name: "ISO 14001:2015", description: "Environnement", icon: "Globe" },
  { name: "OHSAS 18001", description: "Santé & Sécurité", icon: "Shield" },
  { name: "BNPA Certifié", description: "Bureau National des Poudres & Explosifs", icon: "Zap" },
  { name: "ISO 45001:2018", description: "Management SSE avancé", icon: "Award" },
  { name: "Certifié Europe", description: "Conformité CE complète", icon: "Flag" },
];

export const testimonials = [
  {
    name: "Jean-Marie Dubois",
    role: "Directeur Général, Groupe SNCF Infra",
    company: "SNCF",
    text: "BINOVA a dépassé nos attentes sur le projet Lyon-Turin. Leur expertise technique et leur engagement envers la sécurité sont sans pareils. Une vraie partenaire de confiance.",
    rating: 5,
    image: "/testimonials/dubois.svg",
  },
  {
    name: "Sophie Laurent",
    role: "Responsable Projets Souterrains, Vinci Construction",
    company: "Vinci",
    text: "Les 150+ experts de BINOVA ont résolu des défis géotechniques complexes en temps record. Leur innovation et réactivité font la différence.",
    rating: 5,
    image: "/testimonials/laurent.svg",
  },
  {
    name: "Marco Rossi",
    role: "Project Manager, Eiffage Tunnels",
    company: "Eiffage",
    text: "Avec BINOVA, les délais sont respectés. Les coûts maîtrisés. Les risques minimisés. C'est du professionnalisme de haut niveau.",
    rating: 5,
    image: "/testimonials/rossi.svg",
  },
  {
    name: "Anna Müller",
    role: "Chief Engineering Officer, Hochtief",
    company: "Hochtief",
    text: "28 ans d'expertise visible dans chaque projet. BINOVA est notre partenaire préféré pour les travaux souterrains critiques en Europe.",
    rating: 5,
    image: "/testimonials/muller.svg",
  },
];

export const caseStudies = [
  {
    id: 1,
    title: "Tunnel Lyon-Turin: 58 km d'Excellence",
    subtitle: "Le plus grand projet de tunnelage d'Europe",
    image: "/case-studies/lyon-turin.jpg",
    client: "SNCF & Société du Tunnel",
    year: 2023,
    budget: "€12.5 Milliards",
    duration: "8 ans",
    team: 450,
    challenge: "Percer 58 km à travers les Alpes entre la France et l'Italie. Conditions géologiques extrêmes. Risques sismiques. Gestion de 3 sites multinationaux.",
    solution: "Tunnel-boring machines (TBM) de 9.58m, excavation par étapes contrôlées, surveillance 24/7 des conditions géologiques, protocoles de sécurité renforcés.",
    results: [
      "Zéro accident mortel",
      "100% du calendrier respecté",
      "Économies de €200M+ par optimisation",
      "Réduction CO2 de 60% vs transport routier",
      "Premier tunnel traversant les Alpes du 21ème siècle"
    ],
    highlights: "Un projet de classe mondiale. 58 km parcourus. 3 pays. Zéro retard. BINOVA a piloté les phases critiques avec une expertise technique incomparable.",
    slug: "lyon-turin-tunnel",
  },
  {
    id: 2,
    title: "Mine d'Or Burkina Faso: Extraction Premium",
    subtitle: "400,000 tonnes de minerai par an",
    image: "/case-studies/burkina-gold.jpg",
    client: "Endeavour Mining",
    year: 2022,
    budget: "€1.8 Milliards",
    duration: "5 ans",
    team: 320,
    challenge: "Développer une mine d'or souterraine en Afrique de l'Ouest. Accès difficile. Infrastructure locale limitée. Délais stricts de mise en production.",
    solution: "Cartographie géologique 3D complète, minage par longue taille, système de stabilité des galeries de classe mondiale, logistique intégrée sur-mesure.",
    results: [
      "Production: 400,000 t/an",
      "Récupération 91% (meilleur secteur)",
      "Coût opérationnel -15%",
      "500+ emplois locaux créés",
      "Économie locale: €150M+/an"
    ],
    highlights: "Une opération minière de référence. Production maximale. Coûts optimisés. Impact social positif mesurable.",
    slug: "burkina-gold-mine",
  },
  {
    id: 3,
    title: "Métro Copenhague: Tunnelage Urbain",
    subtitle: "17 km sous la capitale danoise",
    image: "/case-studies/copenhagen-metro.jpg",
    client: "Metroselskabet (CPH Metro)",
    year: 2021,
    budget: "€3.2 Milliards",
    duration: "7 ans",
    team: 280,
    challenge: "Creuser sous une ville occupée sans interruption des services. Vibrations minimales. Impacts zéro sur bâtiments. Trafic urbain congestionné.",
    solution: "TBM silencieuses, monitoring vibratoire real-time, coordination 24/7 avec services urbains, innovations en amortissement des chocs.",
    results: [
      "Zéro dommage structurel",
      "Vibrations <5mm partout",
      "28M passagers/an prévus",
      "Réduction congestion de 12%",
      "CO2: -8,000 t/an"
    ],
    highlights: "Le tunnelage urbain le plus propre jamais réalisé. Aucun impact environnemental. Technologie de pointe.",
    slug: "copenhagen-metro",
  },
  {
    id: 4,
    title: "Barrage Hydroélectrique Norvège: Terrassement Géant",
    subtitle: "30M m³ de roche excavée",
    image: "/case-studies/norway-dam.jpg",
    client: "Statkraft AS",
    year: 2020,
    budget: "€980M",
    duration: "4 ans",
    team: 210,
    challenge: "Excaver 30 millions de m³ dans un relief montagneux hostile. Conditions météo extrêmes. Calendrier serré pour production hivernale.",
    solution: "Flotte d'excavateurs géants, dynamitage sismiquement sûr, transport logistique sur 80km, système de stabilisation des pentes.",
    results: [
      "30M m³ excavés",
      "Calendrier: -3 mois d'avance",
      "Coût unitaire: -18%",
      "550 GWh/an produits",
      "Approv énergétique: +12% région"
    ],
    highlights: "Le plus grand projet de terrassement scandinave. Livré plus tôt. Moins cher. Plus productif.",
    slug: "norway-hydrodam",
  },
];

export const serviceHighlights = [
  {
    title: "Tunnelage Souterrain",
    subtitle: "156 tunnels complétés",
    description: "De 100m à 58 km. Roches dures aux conditions extrêmes.",
    stats: "56,000 km de tunnels mondiaux creusés avec nos technologies",
    cta: "Voir les tunnels",
  },
  {
    title: "Minage Professionnel",
    subtitle: "Extraction 99.2% sûre",
    description: "Or, lithium, cuivre, uranium. Opérations à impact zéro.",
    stats: "847+ mines opérées avec succès",
    cta: "Voir les mines",
  },
  {
    title: "Terrassement Massif",
    subtitle: "30M+ m³/an",
    description: "Routes, barrages, fondations. Précision centimétrique.",
    stats: "250 experts en mouvement de terre",
    cta: "Voir les projets",
  },
];

export const trustIndicators = [
  { icon: "Trophy", text: "28 ans d'expertise" },
  { icon: "Users", text: "250+ experts permanents" },
  { icon: "Globe", text: "12 pays opérationnels" },
  { icon: "Check", text: "99.2% taux de succès" },
  { icon: "BarChart3", text: "€450M+ CA annuel" },
  { icon: "Lock", text: "0 accident mortel depuis 2015" },
];

export const conversionElements = {
  urgency: [
    "Disponibilité limitée: Nos équipes sont réservées 18 mois à l'avance",
    "Contrats 2024-2025 en cours de signature",
    "Seuls 3 créneaux disponibles cette année pour new clients",
  ],
  trustIndicators: trustIndicators,
  socialProof: [
    "SNCF, Vinci, Eiffage, Hochtief, Statkraft, Endeavour Mining confiants",
    "847 projets livrés avec succès",
    "15M+ tonnes de roches excavées",
    "156 tunnels majeurs",
  ],
};

export const faqItems = [
  {
    question: "Quel est le délai typique pour un devis détaillé?",
    answer: "24-48h après présentation du projet. Nos ingénieurs analyseront vos spécifications géotechniques, conditions de site, et contraintes calendaires pour proposer une solution sur-mesure.",
  },
  {
    question: "Travaillez-vous à l'international?",
    answer: "Oui, nous opérons dans 12 pays européens et africains. Nos équipes s'adaptent à chaque contexte réglementaire local tout en maintenant nos standards de sécurité mondiaux.",
  },
  {
    question: "Comment garantissez-vous la sécurité?",
    answer: "Certifications OHSAS 18001 & ISO 45001, protocoles zéro-accident depuis 2015, monitoring 24/7 sur site, formations continues des 250+ experts, assurances complémentaires complètes.",
  },
  {
    question: "Pouvez-vous gérer des projets d'urgence?",
    answer: "Oui, mobilisation d'équipes experts en 48-72h. Nous avons une réserve d'équipements préposés et équipes prêtes pour interventions critiques.",
  },
  {
    question: "Quel est votre processus de sélection client?",
    answer: "Chaque projet est étudié: faisabilité technique, alignement avec nos standards de sécurité, impact environnemental acceptable. Nous refusons 1 projet sur 5 si conditions non optimales.",
  },
  {
    question: "Quelles sont vos garanties contractuelles?",
    answer: "Garantie performance 10 ans, assurance décennale complète, délais avec pénalités réciproques, budgets fixes sauf variations géologiques certifiées.",
  },
];

export const pricingHints = {
  tunneling: {
    small: "€2.5M - €8M",
    medium: "€8M - €35M",
    large: "€35M+",
  },
  mining: {
    small: "€5M - €15M",
    medium: "€15M - €50M",
    large: "€50M+",
  },
  earthworks: {
    small: "€1M - €5M",
    medium: "€5M - €20M",
    large: "€20M+",
  },
};

// Export trustIndicators explicitly for clients
export type TrustIndicator = (typeof trustIndicators)[number];
