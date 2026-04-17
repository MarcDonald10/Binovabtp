# Brand Color System Audit Report

**Date:** April 17, 2026  
**Purpose:** Identified all React/TypeScript components requiring brand color system application

---

## ⚠️ CRITICAL FINDING: CSS VARIABLES ALREADY DEFINED!

The project **already has a proper CSS variable system defined** in `app/globals.css`. However, many components are **hardcoding colors directly** instead of using these semantic variables.

### Current CSS Variables (from globals.css):

**✅ Correctly Aligned with Brand Charter:**
- `--primary: #1E6B3A` (Primary Green - CORRECT)
- `--accent: #F4B400` (Brand Yellow - CORRECT)
- `--destructive: #E53935` (Red)

**⚠️ Secondary Green Discrepancy:**
- CSS has: `--color-green-light: #8CC63F` (Lime Green)
- User specified: #6BCB3D (Brighter Green)
- CSS also has: `--secondary: #8CC63F` (tied to green-light)
- **ACTION:** Update `--color-green-light` and `--secondary` to `#6BCB3D`

### Semantic CSS Classes Available:
```css
bg-primary        /* #1E6B3A */
text-primary      /* #1E6B3A */
bg-secondary      /* #8CC63F - needs update to #6BCB3D */
text-secondary    /* #8CC63F - needs update to #6BCB3D */
bg-accent         /* #F4B400 */
text-accent       /* #F4B400 */
bg-muted          /* #f0f2f5 */
text-muted-foreground /* #57606a */
```

---

## Brand Charter Reference

| Element | Value | Tailwind Variable | Status |
|---------|-------|-------------------|--------|
| Primary Green | #1E5D3B | `--primary` | ✅ Correct (note: CSS shows #1E6B3A - slight variant) |
| Secondary Green | #6BCB3D | `--secondary` | ⚠️ CSS has #8CC63F - NEEDS UPDATE |
| Accent Yellow | #F4B400 | `--accent` | ✅ Correct |
| Black | #0B0B0B | `--neutral-900` | ✅ Has #0a0a0a (close enough) |
| Text on Light | gray-700/gray-900 | `--foreground` | ✅ Has #1c1f26 |
| Text on Dark | white/gray-300 | `--primary-foreground` | ✅ Has white |

---

## ROOT CAUSE ANALYSIS

**The Problem:** Components contain **hardcoded color values** instead of using CSS variables/Tailwind classes:

1. **Hardcoded #C9826B** (brown) used in ~20 components - NO equivalent in CSS variables
2. **Hardcoded #d4a853** (gold) - Should use `--accent` / `text-accent`
3. **Hardcoded #E89A7A** (rust) - Should use `--secondary`
4. **Generic "accent" class usage** - Already maps correctly BUT many components hardcode colors anyway
5. **Missing Green #6BCB3D** - CSS variable `--secondary` is wrong value

---

## Implementation Strategy

### Phase 1: Fix CSS Variables (CRITICAL) 
Update `app/globals.css` to correct secondary green value in **BOTH** light and dark modes:

**Location: app/globals.css lines 13 and 102**

Light mode (`:root`):
```css
--color-green-light: #6BCB3D;  /* Update from #8CC63F */
--secondary: #6BCB3D;           /* Update from #8CC63F */
--chart-2: #6BCB3D;             /* Update from #8CC63F */
```

Dark mode (`.dark`):
```css
--primary: #1E6B3A;             /* Update from #8CC63F - Primary should be dark green */
--secondary: #6BCB3D;           /* Update from #1E6B3A - Secondary should be light green */
--ring: #1E6B3A;                /* Update from #8CC63F */
--accent: #F4B400;              /* Update from #8CC63F - Accent should always be yellow */
--chart-1: #1E6B3A;             /* Update from #8CC63F */
--chart-2: #6BCB3D;             /* Update from #1E6B3A */
--sidebar-primary: #1E6B3A;     /* Update from #8CC63F */
```

### Phase 2: Replace Hardcoded Colors
Replace all hardcoded colors with Tailwind/CSS variables:
- `#C9826B` → `bg-primary` / `text-primary` / `from-primary`
- `#d4a853` → `bg-accent` / `text-accent`
- `#E89A7A` → `bg-secondary` / `text-secondary`
- `#1E6B3A` (when used directly) → Use semantic `primary` variable
- Grey/white → Use semantic `muted`, `muted-foreground` variables

### Phase 3: Standardize Class Usage
Remove all inline styles like:
- `style={{ color: '#C9826B' }}` → use className with `text-primary`
- `className="text-[#C9826B]"` → use `text-primary`
- `style={{ backgroundColor: '#F4B400' }}` → use `bg-accent`

### Phase 4: Gradients & Complex Colors
For gradient values like `rgba(201,130,107,0.07)`:
- Convert to using CSS variable equivalent: `rgba(var(--primary-rgb), 0.07)`
- Or use Tailwind opacity modifiers: `from-primary/7`

---

## Brand Charter Reference

| Element | Value | CSS Variable |
|---------|-------|--------------|
| Primary Green | #1E5D3B | `--primary` |
| Secondary Green | #6BCB3D | `--secondary` |
| Accent Yellow | #F4B400 | `--accent` |
| Black | #0B0B0B | `--neutral-900` |
| Text on light | gray-700/gray-900 | `--foreground` |
| Text on dark | white/gray-300 | `--primary-foreground` |

---

## Component-by-Component Audit

### FILE: components/header.tsx

**Issue:** Uses mismatched green colors and amber-400 instead of brand-specified colors

- **Line 16:** Change `bg-gradient-to-br from-green-500 to-green-600` to `bg-gradient-to-br from-[#1E5D3B] to-[#1a4d32]` (Primary Green)
- **Line 31:** Change `hover:text-amber-400` to `hover:text-[#F4B400]` (Brand Yellow)
- **Line 37:** Change `hover:text-amber-400` to `hover:text-[#F4B400]` (Brand Yellow)
- **Line 40:** Change `hover:text-amber-400` to `hover:text-[#F4B400]` (Brand Yellow)
- **Line 43:** Change `hover:text-amber-400` to `hover:text-[#F4B400]` (Brand Yellow)
- **Line 60:** Change `hover:text-amber-400` to `hover:text-[#F4B400]` (Brand Yellow)
- **Line 62:** Change hover state to use `hover:text-[#F4B400]` (Brand Yellow)
- **Line 69:** Change `hover:text-amber-400` to `hover:text-[#F4B400]` (Brand Yellow)
- **Line 72:** Change `hover:text-amber-400` to `hover:text-[#F4B400]` (Brand Yellow)
- **Line 103:** Change `bg-gradient-accent` to `bg-[#F4B400]` (Brand Yellow)
- **Line 130:** Change `hover:text-amber-400` to `hover:text-[#F4B400]` (Brand Yellow)
- **Line 143:** Change `hover:text-amber-400` to `hover:text-[#F4B400]` (Brand Yellow)
- **Line 151:** Change `hover:text-amber-400` to `hover:text-[#F4B400]` (Brand Yellow)
- **Line 159:** Change `hover:text-amber-400` to `hover:text-[#F4B400]` (Brand Yellow)
- **Line 169:** Change `hover:text-amber-400` to `hover:text-[#F4B400]` (Brand Yellow)
- **Line 177:** Change `hover:text-amber-400` to `hover:text-[#F4B400]` (Brand Yellow)
- **Line 193:** Change `bg-gradient-accent` to `bg-[#F4B400]` (Brand Yellow)

### FILE: components/hero-carousel.tsx

**Issue:** Uses generic white/black with limited brand color application

- **Line 108:** Heading text should have green accent consideration - add conditional styling for brand green
- **Line 142:** `text-[#d4a853]` should be `text-[#F4B400]` (Update gold to Brand Yellow)
- **Line 149:** `text-[#d4a853]` should be `text-[#F4B400]` (Update gold to Brand Yellow)
- **Line 151:** Progress bar or accent should use `bg-[#1E5D3B]` (Primary Green)

### FILE: components/trust-badges.tsx

**Issue:** Uses outdated gold color #d4a853 instead of brand yellow

- **Line 36:** Change `text-[#d4a853]` to `text-[#F4B400]` (Brand Yellow) in StatItem
- **Line 55:** Change separator `bg-[#d4a853]/40` to `bg-[#F4B400]/40` (Brand Yellow)
- **Line 71:** Change `bg-[#d4a853]/10` to `bg-[#1E5D3B]/10` (Primary Green for icon background)
- **Line 72:** Change `text-[#d4a853]` to `text-[#1E5D3B]` (Primary Green for icons)

### FILE: components/major-clients.tsx

**Issue:** Uses generic "accent" class - needs standardization to brand colors

- **Line 29:** `text-accent` should be `text-[#1E5D3B]` (Primary Green) for icons
- **Line 32:** `hover:border-accent/50` should be `hover:border-[#1E5D3B]/50` (Primary Green)
- **Line 34:** `hover:bg-muted/30` accent should be updated to brand green on hover

### FILE: components/PremiumServicesSection.tsx

**Issue:** Uses #C9826B (old brown accent) throughout - replace with brand colors

- **Line 14:** Change all instances of `#C9826B` to `#1E5D3B` (Primary Green)
- **Line 32:** `from-transparent via-[#C9826B]/20 to-transparent` → `via-[#1E5D3B]/20`
- **Line 33:** `via-[#C9826B]/15` → `via-[#1E5D3B]/15`
- **Line 35:** `rgba(201,130,107,0.07)` → `rgba(30,93,59,0.07)` (Primary Green)
- **Line 51:** Line accent `bg-[#C9826B]` → `bg-[#1E5D3B]`
- **Line 53:** `text-[#C9826B]` → `text-[#1E5D3B]`
- **Line 57:** `text-[#C9826B]` → `text-[#1E5D3B]`
- **Line 119:** `text-[#C9826B]` → `text-[#1E5D3B]`
- **Line 137:** `bg-[#C9826B]` → `bg-[#1E5D3B]` (Primary Green button)
- **Line 139:** `group-hover:text-[#C9826B]` → `group-hover:text-[#1E5D3B]`
- **Line 180:** Index badge `text-[#C9826B]` → `text-[#1E5D3B]` 
- **Line 219:** CTA button `bg-[#C9826B]` → `bg-[#1E5D3B]`
- **Review all other #C9826B instances** in this file (approximately 15+ more occurrences)

### FILE: components/projects-showcase.tsx

**Issue:** Uses #C9826B old accent and white/gray inconsistently

- **Line 47:** Accent line `from-[#C9826B]` → `from-[#1E5D3B]`
- **Line 48:** Accent line `to-[#E89A7A]` → `to-[#6BCB3D]` (Secondary Green for gradient)
- **Line 60:** Dot color `bg-[#C9826B]` → `bg-[#1E5D3B]`
- **Line 61:** Badge text `text-[#C9826B]` → `text-[#1E5D3B]`
- **Line 85:** CTA text hover `group-hover:text-[#C9826B]` → `group-hover:text-[#1E5D3B]`
- **Line 87:** Border-right hover `group-hover:border-[#C9826B]` → `group-hover:border-[#1E5D3B]`

### FILE: components/why-trust-us.tsx

**Issue:** Uses #C9826B old accent - needs replacement

- **Line 31:** Ambient background `rgba(201,130,107,0.06)` → `rgba(30,93,59,0.06)` (Primary Green)
- **Line 34:** Line gradient `via-[#C9826B]/30` → `via-[#1E5D3B]/30`
- **Line 35:** Line gradient `via-[#C9826B]/20` → `via-[#1E5D3B]/20`
- **Line 37:** Radial `rgba(201,130,107,0.06)` → `rgba(30,93,59,0.06)`
- **Line 52:** Accent line `bg-[#C9826B]` → `bg-[#1E5D3B]`
- **Line 54:** Section label `text-[#C9826B]` → `text-[#1E5D3B]`
- **Line 60:** Text accent `text-[#C9826B]` → `text-[#1E5D3B]`
- **Line 79:** Pillar border hover `hover:border-[#C9826B]/25` → `hover:border-[#1E5D3B]/25`
- **Line 86:** Background gradient `from-[#C9826B]/30` → `from-[#1E5D3B]/30`
- **Line 87:** Background gradient `via-[#C9826B]/10` → `via-[#1E5D3B]/10`
- **Line 88:** Background gradient `to-transparent` (stays same)
- **Line 92:** Accent line gradient `via-[#C9826B]/60` → `via-[#1E5D3B]/60`

### FILE: components/impact-section.tsx

**Issue:** Uses generic "accent" class and text-accent - needs standardization

- **Line 47:** `text-accent` (in heading animation) → should use `text-[#1E5D3B]` (Primary Green)
- **Line 54:** `bg-accent/20` → `bg-[#1E5D3B]/20` (Primary Green)
- **Line 57:** `bg-accent/10` → `bg-[#6BCB3D]/10` (Secondary Green)
- **Line 66:** `border-accent/40` hover → `border-[#1E5D3B]/40`
- **Line 72:** `bg-gradient-to-br from-accent/5` → `from-[#1E5D3B]/5`
- **Line 77:** `text-accent` → `text-[#1E5D3B]` for numbers
- **Line 83:** `border-accent/40` → `border-[#1E5D3B]/40`

### FILE: components/testimonials-premium.tsx

**Issue:** Uses #C9826B old accent and improper text colors

- **Line 36:** Line gradient `via-[#C9826B]` → `via-[#1E5D3B]` (Primary Green)
- **Line 37:** Line gradient (second instance) `via-[#C9826B]` → `via-[#1E5D3B]`
- **Line 41:** Heading accent `text-[#C9826B]` → `text-[#1E5D3B]`
- **Line 70:** Star fill `fill-[#C9826B]` → `fill-[#1E5D3B]`
- **Line 71:** Star color `text-[#C9826B]` → `text-[#1E5D3B]`
- **Line 83:** Avatar background `bg-[#C9826B]/10` → `bg-[#1E5D3B]/10`
- **Line 84:** Avatar text `text-[#C9826B]` → `text-[#1E5D3B]`
- **Line 86:** Avatar on hover `group-hover:bg-[#C9826B]` → `group-hover:bg-[#1E5D3B]`
- **Line 96:** Company text color `text-[#C9826B]` → `text-[#1E5D3B]`
- **Line 107:** Underline `via-[#C9826B]/30` → `via-[#1E5D3B]/30`
- **Line 120:** Stat accent `text-[#C9826B]` → `text-[#1E5D3B]`
- **Line 125:** Stat accent `text-[#C9826B]` → `text-[#1E5D3B]`
- **Line 130:** Stat accent `text-[#C9826B]` → `text-[#1E5D3B]`
- **Line 135:** Divider `bg-[#C9826B]/30` → `bg-[#1E5D3B]/30`

### FILE: components/certifications-section.tsx

**Issue:** Uses generic "accent" class - needs standardization

- **Line 35:** `text-accent` → `text-[#1E5D3B]` (Primary Green) for icons
- **Line 36:** Icon on hover should use Secondary Green: `group-hover:text-[#6BCB3D]`

### FILE: components/urgency-section.tsx

**Issue:** Uses generic "accent" class throughout - needs replacement

- **Line 23:** `from-accent/20` → `from-[#1E5D3B]/20` (Primary Green)
- **Line 24:** `to-accent/20` → `to-[#1E5D3B]/20`
- **Line 26:** `bg-accent/10` → `bg-[#1E5D3B]/10`
- **Line 38:** `border-accent/40` → `border-[#1E5D3B]/40`
- **Line 44:** `border-accent/20` → `border-[#1E5D3B]/20`
- **Line 46:** `group-hover:border-accent/60` → `group-hover:border-[#1E5D3B]/60`
- **Line 51:** `bg-gradient-to-r from-accent` → `from-[#1E5D3B]` (Primary Green)
- **Line 57:** `text-accent` → `text-[#1E5D3B]`
- **Line 64:** Highlighting text `text-accent` → `text-[#F4B400]` (Accent Yellow for emphasis)
- **Line 68:** Zap icon `text-accent` → `text-[#1E5D3B]`
- **Line 84:** Clock icon `text-accent` → `text-[#1E5D3B]`
- **Line 95:** `bg-gradient-to-r from-accent/5` → `from-[#1E5D3B]/5`

### FILE: components/faq-section.tsx

**Issue:** Uses #C9826B old accent - needs replacement

- **Line 36:** Line gradient separator `via-[#C9826B]` → `via-[#1E5D3B]`  (Primary Green)
- **Line 37:** Separator (second) `via-[#C9826B]` → `via-[#1E5D3B]`
- **Line 40:** Badge text `text-[#C9826B]` → `text-[#1E5D3B]`
- **Line 44:** Heading accent `text-[#C9826B]` → `text-[#1E5D3B]`
- **Line 64:** Chevron border `group-hover:border-[#C9826B]/30` → `group-hover:border-[#1E5D3B]/30`
- **Line 65:** Chevron color `group-hover:text-[#C9826B]` → `group-hover:text-[#1E5D3B]`
- **Line 66:** Chevron active `text-[#C9826B]` → `text-[#1E5D3B]`
- **Line 113:** CTA button `bg-[#C9826B]` → `bg-[#1E5D3B]`
- **Line 114:** CTA button hover `hover:bg-[#b56f5a]` → `hover:bg-[#174533]` (Darker Primary Green)

### FILE: components/final-cta.tsx

**Issue:** Uses #C9826B old accent extensively - needs replacement

- **Line 25:** Line `bg-[#C9826B]` → `bg-[#1E5D3B]` (Primary Green)
- **Line 31:** Multiple grid lines use `bg-[#C9826B]` → `bg-[#1E5D3B]`
- **Line 45:** Corner ornament borders `border-[#C9826B]/20` → `border-[#1E5D3B]/20`
- **Line 49:** Corner borders `border-[#C9826B]/20` → `border-[#1E5D3B]/20`
- **Line 52:** Corner borders `border-[#C9826B]/20` → `border-[#1E5D3B]/20`
- **Line 58:** Divider top `via-[#C9826B]/25` → `via-[#1E5D3B]/25`
- **Line 59:** Divider bottom `via-[#C9826B]/15` → `via-[#1E5D3B]/15`
- **Line 74:** Eyebrow line `bg-[#C9826B]` → `bg-[#1E5D3B]`
- **Line 76:** Eyebrow text `text-[#C9826B]` → `text-[#1E5D3B]`
- **Line 86:** Underline span `text-[#C9826B]` → `text-[#1E5D3B]`
- **Line 88:** Underline decoration `from-[#C9826B]` → `from-[#1E5D3B]`
- **Line 102:** Badge icons `text-[#C9826B]` → `text-[#1E5D3B]`
- **Line 128:** Card background gradient `from-[#C9826B]/8` → `from-[#1E5D3B]/8`
- **Line 132:** Accent bar `via-[#C9826B]/70` → `via-[#1E5D3B]/70`

### FILE: components/footer.tsx

**Status:** MOSTLY COMPLIANT
- Generally uses white/black correctly for dark backgrounds
- **Recommendation:** Consider adding subtle secondary green #6BCB3D as accent highlights in hover states
- **Minor Enhancement:** Line 97-99 links on hover could use `hover:text-[#F4B400]` instead of plain white

### FILE: components/hero-section.tsx

**Issue:** Uses generic "accent" class for buttons

- **Line 55:** Button class `bg-accent` → `bg-[#F4B400]` (Brand Yellow for CTA visibility)
- **Line 60:** Shadow class `shadow-accent/50` → `shadow-[#F4B400]/50`

### FILE: components/testimonials-section.tsx

**Issue:** Uses generic "accent" class and improper text hierarchy

- **Line 30:** Star fill `fill-accent` → `fill-[#1E5D3B]` (Primary Green)
- **Line 31:** Star color `text-accent` → `text-[#1E5D3B]`
- **Line 36:** Hover accent `hover:border-accent` → `hover:border-[#1E5D3B]`
- **Line 37:** Company text `text-accent` → `text-[#1E5D3B]`

### FILE: components/benefits-section.tsx

**Issue:** Uses generic "accent" class for icons

- **Line 46:** Icon bg `bg-accent/10` → `bg-[#1E5D3B]/10` (Primary Green)
- **Line 47:** Icon text `text-accent` → `text-[#1E5D3B]`
- **Line 48:** Hover bg `group-hover:bg-accent` → `group-hover:bg-[#1E5D3B]`
- **Line 50:** Hover text `group-hover:text-accent-foreground` → `group-hover:text-white`
- **Line 54:** Heading hover `group-hover:text-accent` → `group-hover:text-[#1E5D3B]`

### FILE: components/cta-section.tsx

**Issue:** Uses generic "accent" class

- **Line 21:** Button `bg-accent` → `bg-[#F4B400]` (Brand Yellow for CTA)
- **Line 22:** Button text `text-accent-foreground` → `text-black`

### FILE: components/case-studies-section.tsx

**Issue:** Uses #C9826B old accent and generic "accent" class

- **Line 43:** `radial-gradient(circle at 10% 50%, rgba(201, 130, 107, 0.08)` → `rgba(30, 93, 59, 0.08)` (Primary Green)
- **Line 45:** `radial-gradient(circle at 90% 50%, rgba(201, 130, 107, 0.08)` → `rgba(30, 93, 59, 0.08)`
- **Line 70:** Icon color `text-accent` → `text-[#1E5D3B]` (Primary Green)
- **Line 71:** Badge text `text-accent uppercase` → `text-[#1E5D3B]`
- **Line 105:** Gradient heading `from-accent via-accent/70 to-accent` → gradient using `from-[#1E5D3B] via-[#1E5D3B]/70 to-[#1E5D3B]`
- **Line 130:** Hover border `whileHover={{ borderColor: 'rgba(201, 130, 107, 0.3)'` → `rgba(30, 93, 59, 0.3)` (Primary Green)
- **Line 137:** Hover border animation `border-accent/0` → `border-[#1E5D3B]/0`
- **Line 138:** Hover border animation `group-hover:border-accent/40` → `group-hover:border-[#1E5D3B]/40`
- **Line 142:** Glow effect `from-accent/5` → `from-[#1E5D3B]/5`
- **Line 149:** Accent line `from-accent to-accent/0` → `from-[#1E5D3B] to-[#1E5D3B]/0`
- **Line 160:** Image overlay `from-accent/20` → `from-[#1E5D3B]/20`

### FILE: components/metier-page-template.tsx

**Issue:** Uses generic "accent" class throughout

- **Line 16:** Accent badge `bg-accent/10 border border-accent/30 text-accent` → Use Brand Green: `bg-[#1E5D3B]/10 border border-[#1E5D3B]/30 text-[#1E5D3B]`
- **Line 32:** Hover border `hover:border-accent/30` → `hover:border-[#1E5D3B]/30`
- **Line 64:** Stat numbers color `text-accent` → `text-[#1E5D3B]`
- **Line 65:** Hover border `hover:border-accent/50` → `hover:border-[#1E5D3B]/50`
- **Line 87:** Icon background `bg-accent/10` → `bg-[#1E5D3B]/10`
- **Line 89:** Icon color `text-accent` → `text-[#1E5D3B]`
- **Line 91:** Heading hover `group-hover:text-accent` → `group-hover:text-[#1E5D3B]`
- **Review entire file** for remaining "accent" class usages

### FILE: components/engagement-template.tsx

**Issue:** Uses accent color styling parameter - needs Brand Green/Yellow

**Notes:** This component takes `accentColor` as a prop parameter. Should standardize to:
- Default accentColor should be `#1E5D3B` (Primary Green)
- Alternative option: `#F4B400` (Brand Yellow) for specific sections
- Ensure all uses of `accentColor` prop apply brand-compliant colors

- **Line 78-79:** Review all SectionLabel components using `accentColor` prop
- **Line 56:** Hero section background `bg-[#0d1a0d]` - Consider adding subtle green tint or keeping dark

### FILE: components/devis-form.tsx

**Issue:** Uses generic Button/Input components - needs to check UI component colors

**Status**: Deferred - depends on ui/button.tsx and ui/input.tsx color definitions
- Check button colors in /components/ui/ folder
- Ensure form states use Brand Green/Yellow appropriately
- Review conditional submission styling

### FILE: components/animated-section.tsx

**Status:** ✅ NO CHANGES NEEDED - Pure animation/utility component with no hardcoded colors

### FILE: components/image-gallery.tsx
*Needs review*

---

## Summary Statistics

**Total Components Analyzed:** 21 major components  
**Components Needing Updates:** 20 components (95%)  
**Components Ready/No Changes:** 1 component (animated-section.tsx - 5%)

### Color Replacement Summary

| Pattern | Old Value(s) | New CSS Variable | Count | Notes |
|---------|--------------|------------------|-------|-------|
| Hardcoded brown | #C9826B | `primary` / `bg-primary` / `text-primary` | ~80+ | Complete replacement needed |
| Hardcoded gold | #d4a853 / #D4A853 | `accent` / `bg-accent` / `text-accent` | ~8 | Some are already correct |
| Hardcoded rust | #E89A7A | `secondary` / `bg-secondary` | ~2 | Gradient colors |
| Generic "accent" | class attribute | Already mapped to `--accent` | ~30+ | Should work but verify it's #F4B400 |
| Green shades | green-500/600 | `primary` | ~5 | Header component uses old greens |
| Amber colors | amber-400 | `accent` | ~10+ | Header component uses old amber |
| Gradients w/ colors | rgba(201,130,107,...) | Use CSS variables | ~15+ | Need to update RGB values |

### Priority Levels

**CRITICAL (Major Visual Changes - Fix First):**
- `app/globals.css` - Update CSS variables (prerequisite for everything)
- `components/header.tsx` - Navigation colors
- `components/PremiumServicesSection.tsx` - Large visual component with many #C9826B
- `components/hero-carousel.tsx` - High visibility component
- `components/final-cta.tsx` - Conversion element

**HIGH (Medium Visual Impact):**
- `components/trust-badges.tsx` - Stats display (#d4a853 colors)
- `components/testimonials-premium.tsx` - Social proof (#C9826B throughout)
- `components/why-trust-us.tsx` - Trust section (#C9826B throughout)
- `components/faq-section.tsx` - Content section (#C9826B button)
- `components/case-studies-section.tsx` - Featured content with gradients

**MEDIUM (Smaller Impact):**
- `components/urgency-section.tsx` - Uses generic "accent" class
- `components/certifications-section.tsx` - Uses generic "accent" class
- `components/impact-section.tsx` - Uses generic "accent" class
- `components/projects-showcase.tsx` - Uses #C9826B accents
- `components/metier-page-template.tsx` - Uses generic "accent" class

**LOW (Minor Styling):**
- `components/hero-section.tsx` - Generic button styling
- `components/testimonials-section.tsx` - Generic accent usage
- `components/benefits-section.tsx` - Generic accent icons
- `components/cta-section.tsx` - Generic button styling
- `components/engagement-template.tsx` - Accepts accent color as prop
- `components/devis-form.tsx` - Depends on UI components

**NO CHANGES:**
- `components/animated-section.tsx` - Pure utilities

---


---

## Quick Reference: Find & Replace Patterns

### Hex Color Replacements (Use Find & Replace in VS Code)

| Find | Replace With | Type | Notes |
|------|--------------|------|-------|
| `#C9826B` | Use `primary` variable | Hardcoded hex | Old brown accent - 80+ occurrences |
| `#c9826b` | Use `primary` variable | Hardcoded hex (lowercase) | Same as above |
| `#d4a853` | Use `accent` variable | Hardcoded hex | Old gold accent |
| `#D4A853` | Use `accent` variable | Hardcoded hex (uppercase) | Same as above |
| `#E89A7A` | Use `secondary` variable | Hardcoded hex | Rust/tan color |
| `rgba(201,130,107` | `rgba(30,107,58` | RGB in gradient | Convert #C9826B to primary green |
| `rgba(201, 130, 107` | `rgba(30, 107, 58` | RGB in gradient (spaced) | Same as above |
| `amber-400` | `accent` | Tailwind class | In header.tsx |
| `green-500` | `primary` | Tailwind class | In header.tsx |
| `green-600` | `primary` | Tailwind class | In header.tsx |

### CSS Class Replacements

| Find Pattern | Replace Pattern | Example |
|--------------|-----------------|---------|
| `text-[#C9826B]` | `text-primary` | Badge text |
| `bg-[#C9826B]` | `bg-primary` | Button backgrounds |
| `from-[#C9826B]` | `from-primary` | Gradient starts |
| `via-[#C9826B]/XX` | `via-primary/XX` | Gradient midpoints |
| `to-[#C9826B]` | `to-primary` | Gradient ends |
| `border-[#C9826B]` | `border-primary` | Border colors |
| `hover:text-[#C9826B]` | `hover:text-primary` | Hover states |
| `group-hover:bg-[#C9826B]` | `group-hover:bg-primary` | Group hovers |

### Inline Style Replacements

| Find | Replace | Component |
|------|---------|-----------|
| `style={{ color: '#C9826B' }}` | Use `className="text-primary"` | Various |
| `style={{ backgroundColor: '#C9826B' }}` | Use `className="bg-primary"` | Various |
| `style={{ borderColor: '#C9826B' }}` | Use `className="border-primary"` | Various |
| `accentColor = '#C9826B'` | Pass `accentColor = 'var(--primary)'` | engagement-template.tsx |

---

## CSS Variable Hierarchy

```
:root (Light Mode)
├── --primary: #1E6B3A (Dark Green - Primary Brand)
├── --secondary: #8CC63F ← NEEDS UPDATE TO #6BCB3D
├── --accent: #F4B400 (Yellow - Always use this for CTAs)
├── --foreground: #1c1f26 (Dark text)
└── --background: #FFFFFF (Light background)

.dark (Dark Mode)  
├── --primary: #8CC63F ← NEEDS UPDATE TO #1E6B3A
├── --secondary: #1E6B3A ← NEEDS UPDATE TO #6BCB3D
├── --accent: #8CC63F ← NEEDS UPDATE TO #F4B400
├── --foreground: #E8E8E8 (Light text)
└── --background: #0F1419 (Dark background)
```

---

## Component-by-Component Action Items

### TIER 1: CSS Foundation (DO FIRST)
**File:** `app/globals.css`
- [ ] Line 13: Update `--color-green-light: #8CC63F;` → `#6BCB3D;`
- [ ] Line 106: Update `--secondary: #8CC63F;` → `#6BCB3D;`
- [ ] Line 120: Update `--chart-2: #8CC63F;` → `#6BCB3D;`
- [ ] Dark mode line ~143: Update `--primary: #8CC63F;` → `#1E6B3A;`
- [ ] Dark mode line ~144: Update `--secondary: #1E6B3A;` → `#6BCB3D;`
- [ ] Dark mode line ~149: Update `--accent: #8CC63F;` → `#F4B400;`
- [ ] Dark mode line ~151: Update `--ring: #8CC63F;` → `#1E6B3A;`

### TIER 2: Header & Navigation
**File:** `components/header.tsx` (~30 changes)
- [ ] Replace all `amber-400` with `text-accent`
- [ ] Replace all `green-500`/`green-600` with Tailwind's primary colors
- [ ] Line 16: logo gradient to use primary colors
- [ ] All navigation hover states to use yellow accent

### TIER 3: Hero & Featured Sections
**File:** `components/hero-carousel.tsx`
- [ ] Replace #d4a853 colors with accent variable
- [ ] Update accent bar color to primary green

**File:** `components/PremiumServicesSection.tsx` (~40 changes)
- [ ] Global replace all #C9826B with primary
- [ ] Global replace all #E89A7A with secondary
- [ ] Update all rgba(201,130,107 gradients

**File:** `components/final-cta.tsx` (~25 changes)
- [ ] Replace all #C9826B with primary
- [ ] Update border/line colors throughout

### TIER 4: Social Proof & Trust
**File:** `components/testimonials-premium.tsx` (~20 changes)
- [ ] Replace all #C9826B usage

**File:** `components/trust-badges.tsx` (~8 changes)
- [ ] Replace #d4a853 with accent

**File:** `components/why-trust-us.tsx` (~20 changes)
- [ ] Replace all #C9826B instances

### TIER 5: Content Sections
**File:** `components/faq-section.tsx` (~10 changes)
- [ ] Replace #C9826B button and accents

**File:** `components/case-studies-section.tsx` (~15 changes)
- [ ] Replace gradient colors with primary

**File:** `components/projects-showcase.tsx` (~8 changes)
- [ ] Replace accent line colors

### TIER 6: Generic Component Updates
**Files:** Multiple components using generic "accent" class
- [ ] `components/urgency-section.tsx` - Verify 'accent' class shows correct color
- [ ] `components/certifications-section.tsx` - Verify accent color
- [ ] `components/impact-section.tsx` - Verify accent color  
- [ ] `components/metier-page-template.tsx` - Update generic accent usage
- [ ] `components/benefits-section.tsx` - Generic accent icons
- [ ] `components/testimonials-section.tsx` - Generic accent stars
- [ ] `components/cta-section.tsx` - Generic button colors
- [ ] `components/hero-section.tsx` - Generic button colors

### TIER 7: Templates & Forms
**File:** `components/engagement-template.tsx`
- [ ] Default `accentColor` prop should be `#1E6B3A`
- [ ] Verify all uses apply brand colors

**File:** `components/devis-form.tsx`
- [ ] Check Button/Input UI component colors
- [ ] Verify form states use brand colors

### TIER 8: Footer
**File:** `components/footer.tsx`
- [ ] Already compliant (mostly)
- [ ] Optional: Add hover effects with secondary green #6BCB3D

---

## Verification Checklist

After making all changes, verify:
- [ ] All #C9826B replaced with primary color variable/class
- [ ] All #d4a853 replaced with accent color variable/class
- [ ] All hardcoded greens (green-500/600) use primary variable
- [ ] All generic "accent" classes show Brand Yellow (#F4B400)
- [ ] Text contrast meets WCAG AA standards (4.5:1 minimum)
- [ ] Hover/active states use consistent brand colors
- [ ] Gradients use proper CSS variable syntax
- [ ] Dark mode colors apply correctly
- [ ] No remaining hardcoded RGB/hex values in components
- [ ] Inline styles converted to Tailwind classes

---

## Testing Instructions

### Visual Regression Testing:
1. Run `npm run dev` after CSS variable updates
2. Check each component in browser at different viewport sizes
3. Toggle dark mode (if applicable)
4. Hover over all interactive elements

### Color Accuracy:
1. Use browser DevTools color picker
2. Verify against brand charter values
3. Check brand green: #1E6B3A
4. Check brand yellow: #F4B400
5. Check secondary green: #6BCB3D

### Accessibility:
1. Run WAVE toolbar on all pages
2. Check color contrast with WCAG checker
3. Verify no text relies solely on color to convey meaning


