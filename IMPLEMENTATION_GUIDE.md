# Implementation Guide - Brand Design System

## Quick Reference

### Primary Brand Colors
```
Primary Green:    #1E5D3B  (use for buttons, highlights, CTAs)
Accent Yellow:    #F4B400  (use for hover, secondary CTAs)
Black:            #0B0B0B  (headers, premium elements)
Light Background: #F5F5F5  (sections, cards)
Text Gray:        #6B6B6B  (body copy)
```

---

## 🟢 Primary Buttons
```jsx
<button className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors hover:shadow-lg">
  CTALabel
</button>
```
Classes: `bg-green-600 | hover:bg-green-700 | text-white | px-6 py-3 | rounded-lg | font-semibold`

## 🟡 Secondary Buttons (CTA)
```jsx
<button className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:shadow-lg transition-all hover:scale-105">
  Action Button
</button>
```
Classes: `bg-yellow-400 | text-black | hover:shadow-lg | hover:scale-105`

---

## 📄 Hero Section Template
```jsx
export function HeroSection() {
  return (
    <section className="relative h-screen md:h-[600px] bg-cover bg-center overflow-hidden" 
      style={{ backgroundImage: 'url(/construction-bg.jpg)' }}>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight">
              Your Headline Here
            </h1>
            <p className="text-xl text-slate-200 max-w-2xl leading-relaxed">
              Your description and value proposition goes here
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all">
                Primary CTA
              </button>
              <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-all">
                Secondary CTA
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

---

## 📊 Section with Cards
```jsx
export function FeaturesSection() {
  const features = [
    { title: 'Feature 1', description: 'Description...' },
    { title: 'Feature 2', description: 'Description...' },
    { title: 'Feature 3', description: 'Description...' },
  ];
  
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block px-4 py-2 bg-green-100 text-green-700 text-xs font-bold tracking-widest rounded-full uppercase">
            Section Label
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900">
            Section Title
          </h2>
          <p className="text-lg text-slate-600">
            Section description and context
          </p>
        </div>
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-md hover:shadow-lg transition-shadow h-full">
              <h3 className="text-xl font-serif font-bold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
              <div className="mt-4 pt-4 border-t border-slate-200">
                <a href="#" className="text-green-600 font-semibold hover:text-green-700 transition-colors">
                  Learn more →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

## 🎯 CTA Section
```jsx
export function CTASection() {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-r from-green-600 to-green-700">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-green-100">
            Join hundreds of companies trusting us with their projects
          </p>
          <button className="px-8 py-4 bg-yellow-400 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-yellow transition-all hover:scale-105 inline-block">
            Request a Quote
          </button>
        </div>
      </div>
    </section>
  );
}
```

---

## 📝 Form Example
```jsx
export function ContactForm() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: '',
  });
  
  return (
    <div className="max-w-2xl mx-auto">
      <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-elevated">
        {/* Top accent line */}
        <div className="h-1 bg-gradient-to-r from-green-600 via-green-500 to-transparent" />
        
        <div className="p-8 lg:p-12 space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Full Name *
            </label>
            <input 
              type="text"
              placeholder="John Doe"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-green-600 focus:ring-1 focus:ring-green-600/20 transition-all"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Email *
            </label>
            <input 
              type="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-green-600 focus:ring-1 focus:ring-green-600/20 transition-all"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Message
            </label>
            <textarea 
              rows={5}
              placeholder="Your message..."
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-green-600 focus:ring-1 focus:ring-green-600/20 transition-all resize-none"
            />
          </div>
          
          <button className="w-full px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all hover:shadow-lg">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}
```

---

## 🎨 Testimonials Component
```jsx
export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Client Name',
      role: 'Position',
      company: 'Company',
      message: 'Testimonial message here...',
      image: 'https://example.com/avatar.jpg',
    },
    // ...
  ];
  
  return (
    <section className="py-16 lg:py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
            Trusted by Leading Companies
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="rounded-lg border border-slate-200 bg-white p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-1 mb-4">
                {'★'.repeat(5)}
              </div>
              <p className="text-slate-600 leading-relaxed mb-6">
                "{testimonial.message}"
              </p>
              <div className="flex items-center gap-3">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-slate-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-slate-600">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

## 🏢 Footer Component
```jsx
export function Footer() {
  return (
    <footer className="bg-black text-white border-t border-slate-700/50">
      <div className="container mx-auto px-4 py-16 lg:py-20">
        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1 */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Projects</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Column 2 */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Tunneling</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mining</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Excavation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Infrastructure</a></li>
            </ul>
          </div>
          
          {/* Column 3 */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
            </ul>
          </div>
          
          {/* Column 4 - Newsletter */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">Newsletter</h3>
            <p className="text-slate-400 text-sm mb-4">Subscribe for updates</p>
            <input 
              type="email"
              placeholder="your@email.com"
              className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder:text-slate-500 mb-2"
            />
            <button className="w-full px-3 py-2 bg-yellow-400 text-black font-semibold rounded-lg hover:shadow-lg transition-all">
              Subscribe
            </button>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-slate-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm">
            <p>&copy; 2026 BINOVA Rock Builders. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">Facebook</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
```

---

## 🎬 Animation Examples

### Card Hover Animation
```jsx
import { motion } from 'framer-motion';

<motion.div
  whileHover={{ y: -4, boxShadow: '0 20px 25px rgba(0,0,0,0.1)' }}
  whileTap={{ scale: 0.98 }}
  className="rounded-lg bg-white border border-slate-200 p-6"
>
  {/* Content */}
</motion.div>
```

### Fade In Animation
```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
>
  {/* Content */}
</motion.div>
```

### Stagger Items
```jsx
<motion.div className="space-y-4">
  {items.map((item) => (
    <motion.div
      key={item.id}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {/* Item content */}
    </motion.div>
  ))}
</motion.div>
```

---

## ✨ Responsive Utilities

### Common Responsive Patterns
```jsx
{/* Hide on mobile, show on tablet */}
<div className="hidden md:block">
  {/* Content */}
</div>

{/* Full width on mobile, half on tablet, third on desktop */}
<div className="w-full md:w-1/2 lg:w-1/3">
  {/* Content */}
</div>

{/* Stack on mobile, grid on desktop */}
<div className="flex flex-col md:flex-row gap-6">
  {/* Content */}
</div>

{/* Responsive font sizes */}
<h1 className="text-2xl md:text-3xl lg:text-4xl">
  Heading
</h1>
```

---

## 🎯 Quick Implementation Checklist

- [ ] Import `motion` from `framer-motion` for animations
- [ ] Use `bg-green-600` for primary buttons
- [ ] Use `bg-yellow-400` for secondary CTAs
- [ ] Apply `rounded-lg` (8px) to cards, `rounded-2xl` (16px) to major cards
- [ ] Add `shadow-md` to cards, `hover:shadow-lg` for interactivity
- [ ] Use `space-y-6` or `gap-6` for section spacing
- [ ] Apply `text-slate-900` for headings, `text-slate-600` for body
- [ ] Use Playfair Display for all `h1`-`h6` tags
- [ ] Mobile-first responsive: `w-full md:w-1/2 lg:w-1/3`
- [ ] Add focus states to inputs: `focus:border-green-600 focus:ring-1 focus:ring-green-600/20`

---

## 📚 File References

- **Color System**: stored in `/app/globals.css` as CSS variables
- **Typography**: defined in `app/layout.tsx` (Playfair Display, Poppins)
- **Updated Components**: 
  - `/components/header.tsx`
  - `/app/devis/page.tsx`
- **Component Library**: Check `/components/ui/` for pre-built elements

---

**Ready to implement?** Copy any template above, adjust content, and apply to your pages!
