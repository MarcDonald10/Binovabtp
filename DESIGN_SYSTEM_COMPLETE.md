# BINOVA Rock Builders - Complete Design System

## Overview
Professional visual redesign implementing modern, premium, and trustworthy design for a construction/infrastructure company.

---

## 🎨 Brand Color Palette

### Primary Colors
- **Primary Green**: `#1E5D3B` - Main brand color, used for CTAs, highlights, and primary elements
- **Secondary Green**: `#6BCB3D` - Supporting accent, for secondary buttons and highlights
- **Accent Yellow**: `#F4B400` - Action color, used for prominent CTAs and hover states
- **Black**: `#0B0B0B` - Header background and premium elements
- **White**: `#FFFFFF` - Backgrounds and text on dark elements

### Neutral Colors
- **Light Background**: `#F5F5F5` - Section background, light alternative
- **Text Gray**: `#6B6B6B` - Body text color
- **Slate 50-900**: Complete grayscale palette for UI elements

### Semantic Colors
```css
--primary: #1E5D3B;
--accent: #F4B400;
--destructive: #E53935;
--success: #6BCB3D;
```

---

## 📝 Typography System

### Font Families
- **Headings (H1-H6)**: `Playfair Display` - Bold, elegant, serifs
- **Body Copy**: `Poppins` / `Inter` - Clean, modern, sans-serif
- **Monospace**: System fonts or `Geist Mono` - Code snippets

### Type Hierarchy
```
H1: 48-60px | font-serif | font-bold | tracking-tight
H2: 36-48px | font-serif | font-bold | leading-tight
H3: 28-36px | font-serif | font-bold
H4: 24-28px | font-serif | font-semibold
H5: 20-24px | font-semibold
H6: 16-20px | font-semibold
Body: 16px | font-sans | line-height: 1.5
Small: 14px | font-sans
Tiny: 12px | font-sans
```

---

## 🏗️ Spacing System (8px Grid)

### Spacing Scale
```
xs:   4px   (spacing-xs:  p-2)
sm:   8px   (spacing-sm:  p-4)
md:  16px   (spacing-md:  p-6)
lg:  24px   (spacing-lg:  p-8)
xl:  32px   (spacing-xl:  p-12)
2xl: 48px   (spacing-2xl: p-16)
3xl: 64px   (spacing-3xl: p-20)
```

### Padding Classes
- `.spacing-xs` → `p-2`
- `.spacing-sm` → `p-4`
- `.spacing-md` → `p-6`
- `.spacing-lg` → `p-8`
- `.spacing-xl` → `p-12`

---

## 🎯 Components

### Buttons

#### Primary Button (Green)
```jsx
<button className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors">
  Label
</button>
```
- Background: `#1E5D3B`
- Hover: `#1a4d30`
- Padding: `px-6 py-3`
- Border Radius: `rounded-lg` (8px)

#### Secondary Button (Yellow)
```jsx
<button className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:shadow-lg transition-all">
  Label
</button>
```
- Background: `#F4B400`
- Hover: Add shadow, slight scale
- Padding: `px-6 py-3`
- Border Radius: `rounded-lg`

#### Button States
- **Hover**: Scale 1.05, enhanced shadow
- **Active**: Scale 0.95
- **Disabled**: Opacity 50%, cursor-not-allowed
- **Loading**: Show spinner with `animate-spin`

### Cards

#### Premium Card
```jsx
<div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-md hover:shadow-lg transition-shadow">
  {/* Top accent line */}
  <div className="h-1 bg-gradient-to-r from-green-600 via-green-500 to-transparent" />
  {/* Card content */}
</div>
```
- Border Radius: `rounded-2xl` (16px)
- Border: `border-slate-200`
- Background: `white`
- Shadow: `shadow-md` → `shadow-lg` on hover
- Top Accent: Gradient from green-600 → green-500 → transparent

#### Section Card
```jsx
<div className="rounded-lg border border-slate-200 bg-slate-50 p-6 shadow-soft">
  {/* Content */}
</div>
```
- Border Radius: `rounded-lg` (8px)
- Background: `#F5F5F5` or `white`
- Padding: `p-6` (16px)
- Shadow: `shadow-soft` (subtle)

### Inputs & Forms

#### Text Input
```jsx
<input 
  className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-green-600 focus:ring-1 focus:ring-green-600/20 transition-all"
  placeholder="Enter text"
/>
```
- Padding: `px-4 py-3`
- Border Radius: `rounded-lg`
- Border: `border-slate-300`
- Focus Ring: `ring-1 ring-green-600/20`
- Focus Color: `border-green-600`

#### Select / Dropdown
```jsx
<select className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-900 focus:border-green-600 focus:ring-1 focus:ring-green-600/20">
  <option>Option 1</option>
</select>
```
- Same styling as text input

#### Form Label
```jsx
<label className="block text-sm font-medium text-slate-700 mb-2">
  Label Text
</label>
```
- Font Size: `text-sm`
- Font Weight: `font-medium`
- Color: `text-slate-700`
- Margin: `mb-2`

### Forms Section Tag
```jsx
<div className="inline-block mb-4">
  <span className="inline-block px-4 py-2 bg-green-100 text-green-700 text-xs font-bold tracking-widest rounded-full uppercase">
    Section Label
  </span>
</div>
```

---

## 🌞 Shadow System

```css
.shadow-soft:    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
.shadow-md:      Standard Tailwind shadow-md
.shadow-elevated: box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
.shadow-lg:      Standard Tailwind shadow-lg
.shadow-hero:    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
.shadow-green:   0 10px 30px -5px rgba(30, 107, 58, 0.2);
.shadow-yellow:  0 10px 30px -5px rgba(244, 180, 0, 0.15);
```

---

## 🎬 Animations & Motion

### Transitions
- Duration: `duration-200` (fast), `duration-300` (normal), `duration-500` (slow)
- Easing: `ease-in-out`, or spring: `[0.22, 1, 0.36, 1]`

### Framer Motion Patterns
```jsx
// Button hover
whileHover={{ scale: 1.05, y: -2 }}
whileTap={{ scale: 0.95 }}

// Card fade-in
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}

// Menu slidedown
initial={{ opacity: 0, height: 0 }}
animate={{ opacity: 1, height: 'auto' }}
exit={{ opacity: 0, height: 0 }}
```

---

## 📐 Layout Patterns

### Container
```jsx
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  {/* Content */}
</div>
```

### Section Spacing
```jsx
<section className="py-16 lg:py-20 bg-white">
  <div className="container mx-auto">
    {/* Content */}
  </div>
</section>
```

### Grid Layout
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
  {/* Items */}
</div>
```

---

## 🎨 Gradients

### Accent Gradient (for buttons)
```css
background: linear-gradient(to right, from-yellow-400 to-yellow-500);
```

### Overlay Gradient (dark)
```css
background: linear-gradient(to right, rgba(11, 11, 11, 0.7), rgba(11, 11, 11, 0.3));
```

### Header Navigation Underline
```css
background: linear-gradient(to right, from-slate-200 to-transparent);
```

---

## 📱 Responsive Design

### Breakpoints
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

### Mobile-First Pattern
```jsx
{/* Mobile: Full width */}
<div className="w-full md:w-1/2 lg:w-1/3">
  {/* Content */}
</div>
```

---

## ⚙️ Implementation Details

### Header Component
- Fixed positioning: `sticky top-0 z-50`
- Background: Black `#000000`
- Border: `border-slate-700/50`
- Shadow: `shadow-elevated`
- Navigation items:
  - Text color: `text-slate-300`
  - Hover: `hover:text-amber-400`
  - Animated underline on hover
- Dropdown menus:
  - Background: `bg-slate-900`
  - Rounded: `rounded-lg`
  - Shadow: `shadow-2xl`

### Hero Section (Template)
```jsx
<section className="relative h-screen bg-cover bg-center bg-no-repeat overflow-hidden">
  {/* Overlay gradient */}
  <div className="absolute inset-0 bg-gradient-overlay-dark"></div>
  
  {/* Content */}
  <div className="relative z-10 flex items-center justify-center h-full">
    <div className="text-center text-white space-y-6">
      <h1 className="text-5xl md:text-6xl font-serif font-bold">Headline</h1>
      <p className="text-xl text-slate-200">Subtitle</p>
      <button className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">
        CTA
      </button>
    </div>
  </div>
</section>
```

### Form Pattern
```jsx
<form className="space-y-6">
  <div>
    <label className="block text-sm font-medium text-slate-700 mb-2">
      Field Label
    </label>
    <input className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-green-600 focus:ring-1 focus:ring-green-600/20" />
  </div>
  
  <button className="w-full px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors">
    Submit
  </button>
</form>
```

---

## ✅ Design Checklist

When creating new components:
- [ ] Font: Playfair for headings, Poppins/Inter for body
- [ ] Spacing: Use 8px grid (p-2, p-4, p-6, p-8, p-12)
- [ ] Colors: Use brand palette, avoid hardcoded colors
- [ ] Shadows: Use shadow utilities (shadow-soft, shadow-elevated)
- [ ] Radius: Use rounded-lg (8px) or rounded-2xl (16px) for cards
- [ ] Buttons: Green primary with yellow accent
- [ ] Hover States: Scale, shadow, color transitions
- [ ] Responsiveness: Mobile-first approach
- [ ] Accessibility: Proper contrast, focus states, labels
- [ ] Animation: Use Framer Motion for smoothness

---

## 🚀 Updated Components

### ✅ Header (Updated)
- Modern logo with gradient badge
- Premium navigation with hover underlines
- Responsive dropdown menus
- Mobile-friendly with animated menu
- CTA button with yellow accent

### ✅ Devis Form (Updated)
- Brand green accent (#1E5D3B)
- Premium card design with gradient top line
- Updated typography with proper hierarchy
- Modern inputs with focus states
- Better spacing and visual hierarchy
- Yellow accent for primary CTA

### ✅ Typography System (Updated)
- Playfair Display for all headings
- Proper font sizes and line heights
- Clean hierarchy from H1-H6

### Global Styles (Updated)
- Complete color token system
- Shadow utilities
- Spacing utilities
- Gradient definitions

---

## 📊 Color Usage Guide

| Element | Color | Hex |
|---------|-------|-----|
| Primary Buttons | Green | #1E5D3B |
| Secondary Buttons | Yellow | #F4B400 |
| Hover State | Green-700 | #1a4d30 |
| Text (Body) | Gray | #6B6B6B |
| Text (Headings) | Slate-900 | #0f172a |
| Links | Green | #1E5D3B |
| Link Hover | Yellow | #F4B400 |
| Background | White | #FFFFFF |
| Alt Background | Slate-50 | #F5F5F5 |
| Cards | White | #FFFFFF |
| Borders | Slate-200 | #e2e8f0 |

---

## 🎯 Next Steps for Design Implementation

1. **Home Page (page.tsx)**
   - Hero section with background image + overlay
   - Feature sections with alternating backgrounds
   - Testimonials section with cards
   - CTA sections with yellow accent buttons

2. **Pages Redesign**
   - All metier pages (genie-civil, barrages, etc.)
   - Engagement pages (rse, sante, environnement)
   - Contact page with form
   - Case study pages

3. **Components to Create/Update**
   - HeroSection component
   - SectionCard component
   - TestimonialCard component
   - CTASection component
   - Stats component

4. **Footer Component**
   - Black background matching header
   - Organized link structure
   - Newsletter signup with green accent
   - Copyright and social links

---

## 📝 Notes

- All components use Tailwind CSS for consistency
- Color values stored in CSS variables for easy theme switching
- Spacing respects 8px grid for alignment
- Animations use Framer Motion for smooth transitions
- Responsive design prioritizes mobile-first approach
- Accessibility standards followed (contrast, focus states, labels)

---

**Design System Created**: April 17, 2026  
**Brand**: BINOVA Rock Builders  
**Designed for**: Premium construction/infrastructure company
