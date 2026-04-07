# 📚 Component Library - BINOVA Premium Components

## 🎯 Vue d'Ensemble

Cette librairie contient 8 composants réutilisables premium conçus pour construire des pages sophistiquées avec minimum de code.

## 🧩 Composants Disponibles

### 1. HeroSection
**Fichier**: `/components/hero-section.tsx`

Section fullscreen avec image de fond, overlay, badge et CTA duals.

#### Utilisation
```tsx
import { HeroSection } from '@/components/hero-section'

<HeroSection
  title="Titre Principal"
  description="Description détaillée du sujet"
  backgroundImage="/path/to/image.jpg"
  badge="Optional Badge"
  primaryCTA={{
    text: "Bouton Primaire",
    href: "/path"
  }}
  secondaryCTA={{
    text: "Bouton Secondaire",
    href: "/path"
  }}
/>
```

#### Props
- `title` (string, required) - Titre principal
- `description` (string, required) - Sous-titre
- `backgroundImage` (string, required) - URL image de fond
- `primaryCTA` (object) - CTA principal avec text/href
- `secondaryCTA` (object) - CTA secondaire optionnel
- `badge` (string) - Badge optionnel en haut
- `children` (ReactNode) - Contenu personnalisé

#### Exemple Complet
```tsx
<HeroSection
  title="Expertise en Tunnelage Premium"
  description="Techniques avancées pour infrastructures souterraines"
  backgroundImage="/tunnelage-hero.jpg"
  badge="✨ Expertise Tunnelage"
  primaryCTA={{ text: "Demander un Devis", href: "/devis" }}
  secondaryCTA={{ text: "Nos Services", href: "#services" }}
/>
```

---

### 2. CTASection
**Fichier**: `/components/cta-section.tsx`

Section call-to-action minimaliste avec titre, description et dual buttons.

#### Utilisation
```tsx
import { CTASection } from '@/components/cta-section'

<CTASection
  title="Prêt à Transformer Votre Projet?"
  description="Nos experts sont là pour vous aider..."
  primaryButton={{
    text: "Demander un Devis",
    href: "/devis"
  }}
  secondaryButton={{
    text: "Nous Contacter",
    href: "/contact"
  }}
  variant="accent" // ou "dark"
/>
```

#### Props
- `title` (string, required)
- `description` (string, required)
- `primaryButton` (object, required) - { text, href }
- `secondaryButton` (object) - Optionnel
- `variant` ('accent' | 'dark') - Style de fond

#### Variantes
```tsx
// Accent (par défaut) - Fond muted
<CTASection variant="accent" ... />

// Dark - Fond noir avec texte blanc
<CTASection variant="dark" ... />
```

---

### 3. BenefitsSection
**Fichier**: `/components/benefits-section.tsx`

Grille de bénéfices avec icônes, titre et description.

#### Utilisation
```tsx
import { BenefitsSection } from '@/components/benefits-section'
import { CheckCircle, Zap, Shield } from 'lucide-react'

<BenefitsSection
  title="Nos Avantages"
  description="Pourquoi nous choisir"
  benefits={[
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Qualité Garantie",
      description: "Normes ISO respectées"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance",
      description: "Respect des délais"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Sécurité",
      description: "Protocoles stricts"
    }
  ]}
  layout="grid" // ou "two-column"
/>
```

#### Props
- `title` (string, required)
- `description` (string) - Optionnel
- `benefits` (array, required) - Array de { icon, title, description }
- `layout` ('grid' | 'two-column') - 4 colonnes ou 2 colonnes

#### Layouts
```tsx
// Grid (par défaut) - 1 col mobile, 2 tablet, 4 desktop
layout="grid"

// Two-Column - 1 col mobile, 2 tablet, 2 desktop
layout="two-column"
```

---

### 4. TestimonialsSection
**Fichier**: `/components/testimonials-section.tsx`

Grille de témoignages avec étoiles et author info.

#### Utilisation
```tsx
import { TestimonialsSection } from '@/components/testimonials-section'

<TestimonialsSection
  title="Ce Que Nos Clients Disent"
  description="Des résultats concrets"
  testimonials={[
    {
      quote: "Service exceptionnels et équipe très professionnelle",
      author: "Jean Martin",
      title: "Directeur Général",
      company: "Construction Pro",
      rating: 5
    },
    {
      quote: "Respect des délais et excellent suivi de projet",
      author: "Marie Dupont",
      title: "Chef Projet",
      company: "Infrastructure Sàrl",
      rating: 4
    }
  ]}
/>
```

#### Props
- `title` (string, required)
- `description` (string) - Optionnel
- `testimonials` (array, required) - Array de témoignages
  - `quote` (string)
  - `author` (string)
  - `title` (string)
  - `company` (string)
  - `rating` (number 1-5)

---

### 5. TimelineSection
**Fichier**: `/components/timeline-section.tsx`

Timeline verticale avec items animés et icônes.

#### Utilisation
```tsx
import { TimelineSection } from '@/components/timeline-section'
import { CheckCircle } from 'lucide-react'

<TimelineSection
  title="Notre Processus"
  description="Comment nous travaillons"
  items={[
    {
      title: "Étape 1: Consultation",
      description: "Compréhension de vos besoins",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: "Étape 2: Planification",
      description: "Élaboration du plan détaillé",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: "Étape 3: Exécution",
      description: "Réalisation du projet",
      icon: <CheckCircle className="w-6 h-6" />
    }
  ]}
/>
```

#### Props
- `title` (string, required)
- `description` (string) - Optionnel
- `items` (array, required) - Array de { title, description, icon }

---

### 6. StatsSection
**Fichier**: `/components/stats-section.tsx`

Statistiques animées en grille avec variantes de fond.

#### Utilisation
```tsx
import { StatsSection } from '@/components/stats-section'

<StatsSection
  title="Nos Accomplissements"
  description="Chiffres clés"
  stats={[
    { number: "25+", label: "Années d'Expérience" },
    { number: "500+", label: "Projets Réalisés" },
    { number: "150+", label: "Experts Qualifiés" },
    { number: "€150M", label: "Chiffre d'Affaires" }
  ]}
  variant="dark" // ou "light"
/>
```

#### Props
- `stats` (array, required) - Array de { number, label, icon }
- `title` (string) - Optionnel
- `description` (string) - Optionnel
- `variant` ('dark' | 'light') - Style de fond

#### Variantes
```tsx
variant="dark"  // Fond noir, texte blanc
variant="light" // Fond clair, texte noir
```

---

### 7. ImageGallery
**Fichier**: `/components/image-gallery.tsx`

Galerie responsive avec hover effects et captions.

#### Utilisation
```tsx
import { ImageGallery } from '@/components/image-gallery'

<ImageGallery
  images={[
    {
      src: "/project1.jpg",
      alt: "Projet 1",
      caption: "Tunnel Lyon-Turin"
    },
    {
      src: "/project2.jpg",
      alt: "Projet 2",
      caption: "Exploitation minière"
    }
  ]}
  columns={3}
/>
```

#### Props
- `images` (array, required) - Array de { src, alt, caption }
- `columns` (2 | 3 | 4) - Nombre de colonnes desktop

#### Layouts
```tsx
columns={2} // 1 mobile, 2 desktop
columns={3} // 1 mobile, 2 tablet, 3 desktop (défaut)
columns={4} // 1 mobile, 2 tablet, 4 desktop
```

---

### 8. Header
**Fichier**: `/components/header.tsx`

Header sticky avec navigation responsive et mega-menus.

#### Utilisation
```tsx
import { Header } from '@/components/header'

<Header />
```

Features automatiques:
- Sticky positioning
- Mobile burger menu avec animation
- Mega-menus au hover desktop
- Logo avec icône accent
- CTA primaire ("Demander un Devis")
- Backdrop blur translucent

---

## 🎨 Patterns de Styling

### Animations Intégrées
```tsx
// Tous les composants supportent [data-animate]
// Utilisez Intersection Observer pour trigger

useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in-up')
      }
    })
  }, { threshold: 0.1 })

  document.querySelectorAll('[data-animate]').forEach((el) => {
    observer.observe(el)
  })

  return () => observer.disconnect()
}, [])
```

### Utilitaires Disponibles
```css
/* Animations */
.animate-fade-in-up    /* Fade + translate Y */
.animate-fade-in       /* Simple fade */
.animate-slide-in-left /* Slide from left */
.animate-slide-in-right/* Slide from right */
.animate-scale-in      /* Scale zoom */
.animate-shimmer       /* Shimmer effect */

/* Interactions */
.hover-lift            /* Scale + shadow hover */
.glass                 /* Glassmorphism effect */
.text-gradient         /* Gradient text */
.transition-all        /* Smooth 300ms transition */
```

## 📋 Exemple Page Complète

```tsx
'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/hero-section'
import { BenefitsSection } from '@/components/benefits-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { CTASection } from '@/components/cta-section'
import { CheckCircle, Zap, Shield } from 'lucide-react'
import { useEffect } from 'react'

export default function Page() {
  // Setup animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up')
        }
      })
    }, { threshold: 0.1 })

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        <HeroSection
          title="Titre Principal"
          description="Description complète"
          backgroundImage="/hero.jpg"
          badge="Badge Optionnel"
          primaryCTA={{ text: "Devis", href: "/devis" }}
        />

        <BenefitsSection
          title="Avantages"
          benefits={[
            { icon: <CheckCircle />, title: "Qualité", description: "..." }
          ]}
        />

        <TestimonialsSection
          title="Témoignages"
          testimonials={[
            { quote: "...", author: "Name", company: "Co", rating: 5 }
          ]}
        />

        <CTASection
          title="Prêt?"
          description="Contactez-nous"
          primaryButton={{ text: "Devis", href: "/devis" }}
        />
      </main>

      <Footer />
    </div>
  )
}
```

## ✅ Checklist d'Utilisation

- [ ] Importer Header et Footer
- [ ] Ajouter HeroSection pour pages principales
- [ ] Utiliser BenefitsSection pour avantages
- [ ] Ajouter TestimonialsSection pour social proof
- [ ] Terminer avec CTASection ou CTA primaire
- [ ] Implémenter Intersection Observer pour animations
- [ ] Tester responsive sur mobile/tablet/desktop
- [ ] Vérifier accessibilité (alt text, contrast)

## 🎁 Bonnes Pratiques

1. **Hiérarchie**: Une HeroSection par page max
2. **Espacement**: Consistent py-20 sm:py-32
3. **CTA**: CTASection ou bouton à la fin
4. **Images**: Optimisées, alt text complet
5. **Animations**: Intersection Observer systématique
6. **Variantes**: Alterner "light" et "dark" sections

---

**Version**: 1.0 | Production Ready ✨
