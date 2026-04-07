# BINOVA ROCKBUILDERS - Design System Premium

## 🎨 Palette de Couleurs

### Couleurs Primaires
- **Fond**: `oklch(0.97 0.005 70)` - Crème chaud subtil
- **Texte**: `oklch(0.14 0 0)` - Noir profond élégant
- **Accent**: `oklch(0.55 0.18 35)` - Terracotta chaud premium

### Couleurs Secondaires
- **Muted**: `oklch(0.90 0.01 70)` - Gris clair raffiné
- **Border**: `oklch(0.88 0.01 70)` - Bordures subtiles
- **Card**: `oklch(1 0 0)` - Blanc pur

## 🔤 Typographie Premium

### Fonts Importées
- **Heading**: Playfair Display (serif élégant)
  - Poids: 400, 500, 600, 700, 800
  - Utilisation: h1-h6, titres principaux
  
- **Body**: Inter (sans-serif moderne)
  - Utilisation: paragraphes, texte standard

### Hiérarchie des Titres
- **h1**: 5xl-7xl, font-serif, font-bold - Héros et pages majeures
- **h2**: 4xl-5xl, font-serif, font-bold - Sections principales
- **h3**: 2xl, font-serif, font-bold - Sous-sections
- **p**: lg, font-sans, font-light - Corps de texte

## ✨ Animations Premium

### Animations Disponibles
1. **animate-fade-in-up** - Apparition fluide depuis le bas
2. **animate-fade-in** - Fondu simple
3. **animate-slide-in-left** - Glissement depuis la gauche
4. **animate-slide-in-right** - Glissement depuis la droite
5. **animate-scale-in** - Zoom d'apparition
6. **animate-shimmer** - Scintillement subtil

### Utilisation
```tsx
<div data-animate className="opacity-0">Contenu qui s'anime</div>
```

## 🎯 Composants Réutilisables

### HeroSection
Section fullscreen avec image de fond, overlay gradué et CTA.
```tsx
<HeroSection
  title="Titre"
  description="Description"
  backgroundImage="/image.jpg"
  badge="Badge optionnel"
  primaryCTA={{ text: "Bouton", href: "/path" }}
/>
```

### CTASection
Section Call-To-Action minimaliste avec deux boutons.
```tsx
<CTASection
  title="Titre"
  description="Description"
  primaryButton={{ text: "Primaire", href: "/" }}
  variant="accent" // ou "dark"
/>
```

### BenefitsSection
Grille de bénéfices avec icônes animées.
```tsx
<BenefitsSection
  title="Avantages"
  benefits={[
    { icon: <Icon />, title: "Titre", description: "Description" }
  ]}
/>
```

### TestimonialsSection
Grille de témoignages clients avec notations 5 étoiles.
```tsx
<TestimonialsSection
  title="Témoignages"
  testimonials={[
    { quote: "...", author: "Nom", company: "Société", rating: 5 }
  ]}
/>
```

### TimelineSection
Timeline verticale avec items animés.
```tsx
<TimelineSection
  title="Processus"
  items={[
    { title: "Étape 1", description: "...", icon: <Icon /> }
  ]}
/>
```

### StatsSection
Statistiques animées en grille.
```tsx
<StatsSection
  stats={[
    { number: "25+", label: "Années d'Expérience" }
  ]}
  variant="dark"
/>
```

### ImageGallery
Galerie d'images responsive avec hover effects.
```tsx
<ImageGallery
  images={[
    { src: "/image.jpg", alt: "Alt text", caption: "Caption" }
  ]}
  columns={3}
/>
```

## 🎨 Utilitaires CSS Personnalisés

### Classes Premium
- **text-balance-custom** - Équilibre optimal des textes
- **transition-all** - Transition lisse pour tous les changements
- **hover-lift** - Effect de levée avec ombre
- **glass** - Effet de verre dépoli
- **text-gradient** - Gradient de texte

### Utilisation
```tsx
<div className="hover-lift">Conteneur qui lève</div>
<p className="text-gradient">Texte avec gradient</p>
<div className="glass p-4">Effet verre dépoli</div>
```

## 📐 Espacement

### Échelle de Spacing
- Gaps: `gap-4`, `gap-6`, `gap-8`, `gap-10`, `gap-12`, `gap-16`
- Padding: `p-6`, `p-8`, `px-6`, `py-20`, `py-32`
- Margin: `mb-6`, `mb-8`, `mt-4`

### Conventions
- Sections internes: `py-20 sm:py-32`
- Conteneurs: `max-w-7xl mx-auto px-6`
- Grilles: `gap-8 lg:gap-10`

## 🔄 Responsive Design

### Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: 1024px+

### Patterns
```tsx
// Sections
className="py-20 sm:py-32"

// Grilles
className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4"

// Typographie
className="text-4xl sm:text-5xl lg:text-6xl"
```

## ♿ Accessibilité

### Standards
- WCAG 2.1 AA Compliant
- Ratios de contraste ≥ 4.5:1
- Navigation au clavier
- Images avec alt text
- Structure sémantique HTML

### Composants
```tsx
// Boutons avec aria-label
<button aria-label="Ouvrir le menu">Menu</button>

// Images
<img alt="Description pertinente" />

// Liens
<Link href="/path">Texte descriptif</Link>
```

## 🚀 Performances

### Optimisations
- Images optimisées avec next/image
- CSS minimisé
- Animations GPU-accélérées
- Lazy loading des composants
- Intersection Observer pour animations

## 📋 Checklist de Design

- [ ] Typographie Playfair Display pour titres
- [ ] Couleur accent terracotta en CTA
- [ ] Animations fade-in-up pour sections
- [ ] Espacements cohérents (multiples de 4)
- [ ] Bordures subtiles (border/30)
- [ ] Hover effects sur cartes
- [ ] Images fullscreen avec overlay
- [ ] Footer avec CTA en haut
- [ ] Formulaires avec focus:border-accent
- [ ] Réactivité mobile-first

## 🎭 Styles de Boutons

### Bouton Primaire (Accent)
```tsx
className="px-8 py-4 bg-accent text-accent-foreground rounded-sm font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105"
```

### Bouton Secondaire (Bordure)
```tsx
className="px-8 py-4 border-2 border-white text-white rounded-sm font-semibold hover:bg-white/10 transition-all duration-300"
```

### Bouton Muted
```tsx
className="px-4 py-2 text-sm text-muted-foreground hover:text-accent transition-colors"
```

## 🔗 Ressources

- **Fonts**: Google Fonts (Playfair Display, Inter)
- **Icons**: Lucide React
- **Framework**: Next.js 16 + React 19
- **Styles**: Tailwind CSS v4
- **UI Components**: shadcn/ui

---

Version: 1.0 | Date: 2026 | Status: Production Ready ✨
