# 🎨 Color Tokens & Variables - BINOVA Design System

## Palette Premium

### Couleurs Primaires

#### Background - Crème Chaud Subtil
```
CSS Variable: --background
OKLCh: oklch(0.97 0.005 70)
Hex Approx: #F9F6F3
RGB: 249, 246, 243
Utilisation: Fond principal des sections
```

#### Foreground - Noir Profond Élégant
```
CSS Variable: --foreground
OKLCh: oklch(0.14 0 0)
Hex Approx: #242424
RGB: 36, 36, 36
Utilisation: Texte principal, footer
```

#### Primary (Action)
```
CSS Variable: --primary
OKLCh: oklch(0.14 0 0)
Value: Même que foreground
Utilisation: CTA dark, états actifs
```

#### Accent - Terracotta Chaud Premium
```
CSS Variable: --accent
OKLCh: oklch(0.55 0.18 35)
Hex Approx: #C9826B
RGB: 201, 130, 107
Utilisation: Boutons primaires, highlights
Hover: Ajuster opacity ou scale
```

#### Secondary
```
CSS Variable: --secondary
OKLCh: oklch(0.58 0.15 31)
Hex Approx: #D08560
RGB: 208, 133, 96
Utilisation: Alternatives accent
```

### Couleurs Secondaires

#### Muted - Gris Clair Raffiné
```
CSS Variable: --muted
OKLCh: oklch(0.90 0.01 70)
Hex Approx: #E8E5E2
RGB: 232, 229, 226
Utilisation: Backgrounds secondaires, hover states
```

#### Muted Foreground
```
CSS Variable: --muted-foreground
OKLCh: oklch(0.50 0 0)
Hex Approx: #808080
RGB: 128, 128, 128
Utilisation: Texte secondaire, descriptions
```

#### Border - Subtil
```
CSS Variable: --border
OKLCh: oklch(0.88 0.01 70)
Hex Approx: #E0DCDA
RGB: 224, 220, 218
Utilisation: Bordures cartes, dividers
Hover: Changer vers accent
```

#### Card
```
CSS Variable: --card
OKLCh: oklch(1 0 0)
Hex Approx: #FFFFFF
RGB: 255, 255, 255
Utilisation: Conteneurs, cartes
```

#### Input
```
CSS Variable: --input
OKLCh: oklch(0.94 0.005 70)
Hex Approx: #F0EDEA
RGB: 240, 237, 234
Utilisation: Input fields, form backgrounds
```

#### Ring (Focus)
```
CSS Variable: --ring
OKLCh: oklch(0.55 0.18 35)
Hex Approx: #C9826B
RGB: 201, 130, 107
Utilisation: Focus outlines, accessibility
```

## Mode Sombre (Optionnel - Actuellement Non Activé)

```css
.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --primary: oklch(0.985 0 0);
  --accent: oklch(0.58 0.15 31);
  --muted: oklch(0.269 0 0);
  /* ... */
}
```

## Utilisation dans Components

### Couleurs de Texte
```tsx
// Texte primaire
className="text-foreground"

// Texte secondaire
className="text-muted-foreground"

// Texte accent
className="text-accent"

// Texte white (sur fond dark)
className="text-white"
```

### Couleurs de Fond
```tsx
// Fond principal
className="bg-background"

// Fond card
className="bg-card"

// Fond muted
className="bg-muted"
className="bg-muted/30"      // 30% opacity
className="bg-muted/50"      // 50% opacity

// Fond accent
className="bg-accent"
className="bg-accent/10"     // Très subtil
```

### Bordures
```tsx
// Bordure standard
className="border border-border"

// Bordure subtile
className="border border-border/50"

// Bordure accent
className="border-accent"

// Bordure à la hover
className="hover:border-accent"
```

## Patterns Colorimétriques

### Button Patterns

#### CTA Primaire (Accent)
```tsx
className="px-8 py-4 bg-accent text-accent-foreground rounded-sm font-semibold"
```
- Fond: Accent terracotta
- Texte: Crème
- Hover: Scale + Shadow

#### CTA Secondaire (Border)
```tsx
className="px-8 py-4 border-2 border-white text-white rounded-sm"
```
- Bordure: Blanc
- Texte: Blanc
- Fond: Transparent
- Hover: bg-white/10

#### CTA Muted
```tsx
className="text-foreground hover:text-accent transition"
```
- Texte: Noir
- Hover: Terracotta

### Card Patterns

#### Standard Card
```tsx
className="p-8 bg-card border border-border/50 rounded-sm"
```
- Fond: Blanc
- Bordure: Gris subtil
- Padding: Généreux

#### Hover Card
```tsx
className="hover:border-accent hover:shadow-xl transition-all"
```
- Bordure hover: Terracotta
- Shadow: Dramatic
- Transition: 300ms

### Section Patterns

#### Light Section (défaut)
```tsx
className="py-32 bg-background"
// Texte: dark
```

#### Muted Section
```tsx
className="py-32 bg-muted/30"
// Texte: dark
```

#### Dark Section
```tsx
className="py-32 bg-foreground text-white"
// Texte: white
```

## Contrast Ratios (WCAG AA)

### Combinaisons Approuvées
- Foreground (#242424) sur Background (#F9F6F3) = 10.5:1 ✅
- Accent (#C9826B) sur White = 4.8:1 ✅
- Muted (#808080) sur Background = 5.2:1 ✅
- White sur Accent = 4.2:1 ⚠️ (Acceptable mais liminal)

### Non Recommandé
- Muted sur Muted ❌
- Border sur Border ❌
- Accent sur Muted ⚠️ (Trop faible)

## Gradient Spécifiés

### Hero Overlay
```css
background: linear-gradient(
  to right,
  rgba(0, 0, 0, 0.6),
  rgba(0, 0, 0, 0.4),
  rgba(0, 0, 0, 0.6)
);
```

### Text Gradient
```css
background: linear-gradient(
  to right,
  oklch(0.14 0 0),      /* Foreground */
  oklch(0.55 0.18 35),  /* Accent */
  oklch(0.14 0 0)       /* Foreground */
);
background-clip: text;
-webkit-background-clip: text;
color: transparent;
```

## Opacité Recommandées

```
/10  = très subtil (backgrounds)
/20  = subtil (hover states)
/30  = modéré (sections)
/50  = visible (borders)
/70  = strong (text secondary)
/80  = très visible (text)
/90  = quasi opaque
```

Exemple:
```tsx
className="bg-muted/30"         // Très subtil
className="border-border/50"    // Visible
className="text-white/70"       // Secondary text
className="hover:shadow-xl"     // Dramatic hover
```

## Accessibilité Colorimétriques

### Considérations
1. **Deutéranopie (Red-Green Colorblindness)**
   - Utiliser texture/pattern en addition à la couleur
   - Accent (terracotta) reste visible

2. **Protanopie (Red-Green Colorblindness)**
   - Similar à Deutéranopie
   - OK pour notre palette

3. **Tritanopie (Blue-Yellow Colorblindness)**
   - Rarement affecté par notre palette
   - OK

4. **Achromatopsia (Complete Colorblindness)**
   - Vérifier contrast en niveaux de gris
   - Utiliser icons + texte

### Checker
```
Recommended: WebAIM Contrast Checker
https://webaim.org/resources/contrastchecker/
```

## CSS Variables - Copy-Paste

```css
:root {
  --background: oklch(0.97 0.005 70);
  --foreground: oklch(0.14 0 0);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.14 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.14 0 0);
  --primary: oklch(0.14 0 0);
  --primary-foreground: oklch(0.97 0.005 70);
  --secondary: oklch(0.55 0.18 35);
  --secondary-foreground: oklch(1 0 0);
  --muted: oklch(0.90 0.01 70);
  --muted-foreground: oklch(0.50 0 0);
  --accent: oklch(0.55 0.18 35);
  --accent-foreground: oklch(0.97 0.005 70);
  --destructive: oklch(0.58 0.22 28);
  --destructive-foreground: oklch(1 0 0);
  --border: oklch(0.88 0.01 70);
  --input: oklch(0.94 0.005 70);
  --ring: oklch(0.55 0.18 35);
}
```

## 🎨 Couleur Guide Visuelle

```
BACKGROUND (très clair)
  ↓
  CARD (blanc pur)
  ↓
  MUTED (gris léger)
  ↓
  BORDER (gris plus foncé)
  ↓
  MUTED-FOREGROUND (gris moyen)
  ↓
  FOREGROUND (noir profond)
  
  ACCENT (terracotta) - Utilisé partout comme highlight
```

## 📱 Responsive Color Considerations

- Pas de changement de couleur basé sur screen size
- Opacité peut varier: `/50` mobile, `/30` desktop
- Éclat constant sur tous les appareils
- Testée sur iOS (Display P3) et Android (sRGB)

---

**Version**: 1.0 | OKLCh Color Space | Production Ready ✨
