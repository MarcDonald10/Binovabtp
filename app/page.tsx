'use client'

import { TrustBadges } from '@/components/trust-badges'
import { MajorClientsSection } from '@/components/major-clients'
import { ProjectsShowcase } from '@/components/projects-showcase'
import { ImpactSection } from '@/components/impact-section'
import { CaseStudiesSection } from '@/components/case-studies-section'
import { TestimonialsPremium } from '@/components/testimonials-premium'
import { CertificationsSection } from '@/components/certifications-section'
import { FAQSection } from '@/components/faq-section'
import { UrgencySection } from '@/components/urgency-section'
import { HeroCarousel } from '@/components/hero-carousel'
import { CheckCircle, Zap, Hammer, Drill, Award, Lightbulb, Lock, ArrowRight, Phone, Pickaxe, Building2, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FinalCTASection } from '@/components/final-cta'
import { WhyTrustUsSection } from '@/components/why-trust-us'
import { PremiumServicesSection } from '@/components/PremiumServicesSection'

const services = [
  {
    title: 'Tunnelage',
    subtitle: '156 tunnels réalisés',
    description: 'Infrastructure souterraine de pointe',
    icon: <Drill className="w-12 h-12" />,
    link: '/tunnelage',
    color: 'from-blue-500/20 to-blue-500/5',
    image: '/tunnelage-hero.jpg',
    stat: 'De 100m à 58 km'
  },
  {
    title: 'Minage',
    subtitle: '847+ mines opérées',
    description: 'Excellence en exploitation minière',
    icon: <Pickaxe className="w-12 h-12" />,
    link: '/minage',
    color: 'from-yellow-500/20 to-yellow-500/5',
    image: '/minage-hero.jpg',
    stat: '99.2% de succès'
  },
  {
    title: 'Terrassement',
    subtitle: '30M+ m³/an excavés',
    description: 'Précision centimétrique garantie',
    icon: <Hammer className="w-12 h-12" />,
    link: '/terrassement',
    color: 'from-orange-500/20 to-orange-500/5',
    image: '/terrassement-hero.jpg',
    stat: 'Précision centimétrique'
  },
  {
    title: 'Infrastructure',
    subtitle: 'Leadership durable',
    description: 'Expertise multi-domaines',
    icon: <Building2 className="w-12 h-12" />,
    link: '/metier',
    color: 'from-purple-500/20 to-purple-500/5',
    image: '/hero-background.jpg',
    stat: '28 ans d\'excellence'
  }
]

// Variantes d'animations réutilisables
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const hoverVariants = {
  initial: { y: 0 },
  hover: { y: -8, transition: { duration: 0.3 } },
}

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const observerRef = useRef<IntersectionObserver | null>(null)
  const { scrollY } = useScroll()
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.5])
  const heroScale = useTransform(scrollY, [0, 300], [1, 0.95])

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up')
        }
      })
    }, { threshold: 0.1 })

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observerRef.current?.observe(el)
    })

    return () => observerRef.current?.disconnect()
  }, [])

  // Suivi de la souris pour effets glow
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      {/* Hero Carousel Section */}
      <HeroCarousel />

      {/* Trust Badges Section - Animated Stats */}
      <TrustBadges />

      {/* Major Clients Sections */}
      <MajorClientsSection />

      {/* ================= PREMIUM SERVICES SECTION WITH IMAGES ================= */}
      <PremiumServicesSection />

      {/* ================= PROJECTS SHOWCASE - HORIZONTAL SCROLL ================= */}
      <ProjectsShowcase />

      {/* Why Trust Us Section - PREMIUM avec animations avancées */}
     <WhyTrustUsSection />

      {/* Impact Section */}
      <ImpactSection />

      

      {/* Testimonials Section */}
      <TestimonialsPremium />

      {/* Certifications 
      <CertificationsSection />*/}

      {/* Urgency/FOMO Section */}
      <UrgencySection />

      {/* FAQ */}
      <FAQSection />

      {/* Final CTA - PREMIUM avec animations épiques */}
      <FinalCTASection />
     
    </>
  )
}
