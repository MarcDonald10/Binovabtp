// Données principales pour BINOVA ROCKBUILDERS - Convaincre & Convertir

export const companyStats = {
  expertise: "Expertise reconnue",
  projects: "Projets complexes maîtrisés",
  team: "Équipe qualifiée",
  presence: "Présence internationale",
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
    name: "Jean M.",
    role: "Directeur des Infrastructures",
    company: "Groupe Ferroviaire",
    text: "Une collaboration marquée par une maîtrise technique remarquable et une exigence constante en matière de sécurité. Un partenaire fiable sur des projets critiques.",
    rating: 5,
    image: "/testimonials/dubois.svg",
  },
  {
    name: "Sophie L.",
    role: "Responsable Projets Souterrains",
    company: "Entreprise de Construction",
    text: "Une capacité impressionnante à résoudre des défis géotechniques complexes avec méthode et précision. Leur réactivité fait toute la différence.",
    rating: 5,
    image: "/testimonials/laurent.svg",
  },
  {
    name: "Marco R.",
    role: "Chef de Projet Tunnel",
    company: "Groupe BTP",
    text: "Des délais respectés, des coûts maîtrisés et une exécution sans faille. Une approche professionnelle à chaque étape du projet.",
    rating: 5,
    image: "/testimonials/rossi.svg",
  },
  {
    name: "Anna M.",
    role: "Directrice Ingénierie",
    company: "Entreprise Internationale",
    text: "Une expertise visible dans chaque réalisation. Une référence incontournable pour les projets souterrains exigeants.",
    rating: 5,
    image: "/testimonials/muller.svg",
  },
]

export const caseStudies = [
  {
    id: 1,
    title: "Cité du personnel d'industrie",
    subtitle:"2600+ logements modernes",
    image: "/projets/cite-personnel.jpeg",
    
    challenge: "2600+ Logements modernes pour héberger environ 10000 personnes. Le plus grand projet de logement  d'une mastodonte industrielle du Cameroun. Durée; 2ans - Equipe; 500+ Budget; 70M euro - Client; Fleuron Immobilier.",
    solution: "Conception modulaire innovante, matériaux durables, gestion de projet agile, coordination étroite avec les parties prenantes pour respecter les délais et les exigences de qualité.",
    
    highlights: "Un projet de logement d'envergure pour une entreprise de référence. Logements modernes, durables et livrés dans les délais.",
    slug: "cite-personnel-industrie",
  },
  {
    id: 2,
    title: "Centrale Solaire de 80MW",
    subtitle: "80MW d'énergie propre",
    image: "/projets/cite-personnel.jpeg",
    
    challenge: "Un projet d'énergie renouvelable sur environ 100ha pour autoalimenter une cité industrielle au Cameroun. Durée 2ans - Equipe 100+ Budget 60M euro - Client, Binova Energies",
    solution: "Installation de panneaux solaires à haut rendement, optimisation de l'orientation pour maximiser la production, intégration d'un système de stockage d'énergie pour assurer une alimentation continue, et gestion intelligente de la consommation énergétique.",
    
    highlights: "Un projet d'énergie renouvelable d'envergure pour une entreprise de référence. Production d'énergie propre et durable pour une cité industrielle.",
    slug: "centrale-solaire-80mw",
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
  { icon: "Trophy", text: "Expertise technique reconnue" },
  { icon: "Users", text: "Équipe qualifiée et engagée" },
  { icon: "Globe", text: "Interventions sur divers territoires" },
  { icon: "Check", text: "Projets réalisés avec rigueur" },
  { icon: "BarChart3", text: "Performance et optimisation" },
  { icon: "Lock", text: "Engagement sécurité et conformité" },
];

export const conversionElements = {
  urgency: [
    "Disponibilités limitées pour garantir une exécution optimale",
    "Sélection rigoureuse des projets selon leur complexité",
    "Engagement total sur chaque mission confiée",
  ],
  trustIndicators: trustIndicators,
  socialProof: [
    "Partenaires publics et privés de référence",
    "Projets complexes livrés avec rigueur",
    "Maîtrise des environnements techniques exigeants",
    "Expertise reconnue en travaux souterrains",
  ],
};

export const faqItems = [
  {
    question: "Quel est le délai pour obtenir une proposition détaillée ?",
    answer: "Une première réponse est généralement fournie sous 24 à 48 heures après analyse de votre projet. Nos équipes évaluent précisément les contraintes techniques, le terrain et vos objectifs pour proposer une solution adaptée.",
  },
  {
    question: "Intervenez-vous sur des projets internationaux ?",
    answer: "Oui. Nos équipes interviennent sur différents territoires en s’adaptant aux exigences locales tout en maintenant des standards élevés en matière de qualité et de sécurité.",
  },
  {
    question: "Comment garantissez-vous la sécurité sur vos chantiers ?",
    answer: "La sécurité est intégrée à chaque étape du projet : procédures strictes, suivi en continu et formation permanente des équipes. Chaque intervention est pensée pour minimiser les risques et assurer un environnement de travail maîtrisé.",
  },
  {
    question: "Pouvez-vous gérer des projets urgents ?",
    answer: "Selon la nature du besoin, des équipes peuvent être mobilisées rapidement. Une évaluation préalable permet de définir la meilleure approche pour intervenir efficacement.",
  },
  {
    question: "Quels types de projets acceptez-vous ?",
    answer: "Nous sélectionnons les projets en fonction de leur faisabilité technique, de leur cohérence avec nos standards et de leur impact global. Cette exigence garantit des résultats fiables et durables.",
  },
  {
    question: "Quelles garanties proposez-vous ?",
    answer: "Nos engagements reposent sur la transparence, la maîtrise des délais et le respect des exigences contractuelles. Chaque projet bénéficie d’un cadre clair et sécurisé.",
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
