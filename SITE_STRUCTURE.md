# BINOVA ROCKBUILDERS - Structure du Site

## Vue d'ensemble
Site professionnel pour BINOVA ROCKBUILDERS, leader français en travaux de roche, tunnelage et mines. Site entièrement responsive, multilingue (français), avec formulaire de devis IA dynamique.

## Architecture

### Pages Principales
- **/** - Accueil avec 8 sections (Hero, Metrics, Services, Engagement, IA Devis, Références, Testimonials, CTA)
- **/engagement-clients** - Page détaillant nos engagements envers les clients
- **/devis** - Formulaire multi-étapes de devis IA avec calcul automatique
- **/contact** - Formulaire de contact avec coordonnées et localisations

### Pages Métier
- **/tunnelage** - Solutions de tunnelage avec cas d'étude
- **/minage** - Solutions de minage contrôlé avec certifications
- **/terrassement** - Services de terrassement complets
- **/travaux-souterrains** - Services complets d'infrastructure souterraine

### Pages Légales
- **/mentions-legales** - Mentions légales et informations légales
- **/politique-confidentialite** - RGPD et politique de confidentialité
- **/conditions-utilisation** - Conditions d'utilisation du site

## Composants

### Global
- `Header` - Navigation principale avec menus déroulants (responsive)
- `Footer` - Pied de page avec liens, contact, et copyright

### Formulaires
- `DevisForm` - Formulaire multi-étapes (3 étapes) avec calcul de devis IA
  - Étape 1: Infos générales (type projet, nom, location)
  - Étape 2: Paramètres techniques (longueur, profondeur, terrain)
  - Étape 3: Détails + contact
  - Résultat: Estimation préliminaire téléchargeable

## Design System

### Couleurs (Design Tokens)
- **Primary**: Charcoal noir (#1a1a1a) - Texte, titres, boutons secondaires
- **Accent**: Terracotta chaud (#c9826b) - CTAs, accents, highlights
- **Neutrals**: Blanc, gris clair, gris moyen - Fonds et textes secondaires
- **Destructive**: Rouge pour les erreurs/avertissements

### Typography
- **Headings**: Serif élégant (défaut: Geist)
- **Body**: Sans-serif moderne (défaut: Geist)
- Ratio de contraste: 4.5:1 minimum (WCAG AA)

### Espacements
Utilise l'échelle de spacing Tailwind (p-4, gap-8, etc.)

## Fonctionnalités Spéciales

### Formulaire de Devis IA
L'algorithme calcule une estimation basée sur:
1. Type de projet (tunnelage +50k€/km, minage +30k€/km, terrassement +15k€/km)
2. Longueur/Scope du projet
3. Profondeur (ajustement multiplicatif)
4. Type de terrain (rocheux facile +10%, difficile +50%, hétérogène +30%)
5. Planning (urgent +20%, accéléré +10%)

Marges estimées: ±20% pour prél., ±5% après visite de site.

### Navigation Responsive
- Desktop: Menu horizontal avec dropdowns
- Mobile: Menu burger collapsible avec sections

## Technologies
- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS + Design Tokens
- **Components**: shadcn/ui
- **Icons**: Lucide React
- **Language**: TypeScript

## Fichiers Structure
```
app/
├── page.tsx                          # Accueil
├── layout.tsx                        # Layout global
├── globals.css                       # Design tokens & styles
├── engagement-clients/page.tsx       # Engagement
├── devis/page.tsx                    # Devis + Form
├── contact/page.tsx                  # Contact
├── tunnelage/page.tsx               # Métier Tunnelage
├── minage/page.tsx                  # Métier Minage
├── terrassement/page.tsx            # Métier Terrassement
├── travaux-souterrains/page.tsx     # Métier Souterrain
├── mentions-legales/page.tsx        # Légal
├── politique-confidentialite/page.tsx # RGPD
└── conditions-utilisation/page.tsx  # CGU

components/
├── header.tsx                       # Navigation globale
├── footer.tsx                       # Pied de page
└── devis-form.tsx                   # Formulaire devis

public/
└── hero-background.jpg              # Image héro
```

## SEO & Métadonnées
- Metadata configurée pour chaque page (titre, description, OpenGraph)
- Language: Français (lang="fr")
- Sitemap structure cohérente

## Performance
- Lazy loading des images
- Code splitting automatique par route
- CSS optimisé avec Tailwind
- Icons SVG (Lucide)

## Accessibilité
- Semantic HTML (header, main, footer)
- ARIA labels où nécessaire
- Focus visible sur tous les éléments interactifs
- Contraste de couleurs WCAG AA

## Notes de Déploiement
- Site prêt pour Vercel
- Pas d'intégration backend requise (formulaires peuvent être connectés à SendGrid, etc.)
- Images statiques en /public
- Aucune variable d'environnement obligatoire

## Prochaines Étapes Possibles
1. Intégrer SendGrid/Brevo pour l'envoi d'emails de formulaires
2. Ajouter Google Analytics ou Vercel Analytics
3. Créer un dashboard admin pour gérer les demandes de devis
4. Implémenter un blog pour les actualités
5. Ajouter les témoignages clients réels
6. Optimiser les images pour WebP
7. Ajouter PWA (Progressive Web App)
