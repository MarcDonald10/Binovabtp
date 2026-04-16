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
      <section className="relative py-28 px-6 overflow-hidden bg-background">
        {/* Fond cinématographique premium */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              background: [
                'radial-gradient(circle at 20% 50%, rgba(201, 130, 107, 0.08) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 50%, rgba(201, 130, 107, 0.08) 0%, transparent 50%)',
                'radial-gradient(circle at 20% 50%, rgba(201, 130, 107, 0.08) 0%, transparent 50%)',
              ],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0"
          />
          
          {/* Grain texture premium */}
          <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay" 
            style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" /%3E%3C/filter%3E%3Crect width="400" height="400" filter="url(%23noiseFilter)"/%3E%3C/svg%3E")',
              backgroundSize: '200px 200px'
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* En-tête luxe */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <motion.div
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                <Sparkles className="w-5 h-5 text-accent" />
              </motion.div>
              <span className="text-xs font-semibold text-accent uppercase tracking-[0.15em]">
                EXPERTISE MONDIALE
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-6 leading-tight"
            >
              Les Trois Piliers <br />
              <motion.span
                className="bg-gradient-to-r from-accent via-accent/70 to-accent bg-clip-text text-transparent"
                initial={{ backgroundPosition: '0% 50%' }}
                animate={{ backgroundPosition: '100% 50%' }}
                transition={{ duration: 8, repeat: Infinity }}
              >
                de votre Succès
              </motion.span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg text-muted-foreground font-light max-w-2xl leading-relaxed"
            >
              847 projets d'infrastructure, 28 ans d'excellence, et zéro compromis sur la qualité. Découvrez comment nos trois domaines d'expertise transforment vos visions en réalité.
            </motion.p>
          </motion.div>

          {/* Services Grid - Premium Design with Images */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((service, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover="hover"
                  initial="initial"
                  className="group h-full"
                >
                  <Link href={service.link}>
                    <motion.div
                      variants={hoverVariants}
                      className="relative h-full p-6 sm:p-8 rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.02] to-white/[0.01] backdrop-blur-xl overflow-hidden cursor-pointer transition-all duration-500"
                    >
                      {/* Background Image with Parallax */}
                      <motion.div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                          backgroundImage: `url('${service.image}')`,
                        }}
                        initial={{ scale: 1.1, filter: 'blur(10px)' }}
                        whileHover={{ scale: 1.05, filter: 'blur(5px)' }}
                        transition={{ duration: 0.6 }}
                      >
                        {/* Overlay gradient */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/0"
                          initial={false}
                        />
                      </motion.div>

                      {/* Borders premium au hover */}
                      <motion.div
                        className="absolute inset-0 rounded-2xl border border-accent/0 group-hover:border-accent/30 transition-colors duration-700 z-10"
                        initial={false}
                      />

                      {/* Glow effect premium */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700 z-5"
                        initial={false}
                      />

                      {/* Animated background gradient */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl z-5`}
                        initial={false}
                      />

                      {/* Line accent top */}
                      <motion.div
                        className="absolute top-0 left-0 h-1 bg-gradient-to-r from-accent to-accent/0 rounded-full z-20"
                        initial={{ width: '0%' }}
                        whileHover={{ width: '100%' }}
                        transition={{ duration: 0.6 }}
                      />

                      {/* Content */}
                      <div className="relative z-20 flex flex-col h-full justify-between">
                        {/* Icon Container - Float Animation */}
                        <motion.div
                          className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-accent/40 to-accent/10 text-accent"
                          whileHover={{ scale: 1.15, rotate: 5, y: -5 }}
                          animate={{ y: [0, -8, 0] }}
                          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 }}
                        >
                          {service.icon}
                        </motion.div>

                        {/* Bottom Content */}
                        <div>
                          {/* Title */}
                          <motion.h3
                            className="text-2xl font-serif font-bold text-white mb-2 group-hover:text-accent transition-colors duration-400"
                            initial={false}
                          >
                            {service.title}
                          </motion.h3>

                          {/* Subtitle */}
                          <motion.p
                            className="text-sm text-white/80 font-semibold mb-3 group-hover:text-accent transition-colors duration-400"
                            initial={false}
                          >
                            {service.subtitle}
                          </motion.p>

                          {/* Stat badge */}
                          <motion.div
                            className="inline-block mb-4 px-3 py-1 rounded-full bg-accent/20 border border-accent/40"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileHover={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3 }}
                          >
                            <span className="text-xs font-semibold text-accent">
                              {service.stat}
                            </span>
                          </motion.div>

                          {/* Divider */}
                          <motion.div
                            className="my-4 h-px bg-gradient-to-r from-accent/0 via-accent/40 to-accent/0"
                            initial={false}
                          />

                          {/* CTA Button */}
                          <motion.div
                            className="flex items-center gap-2 text-accent font-semibold text-sm opacity-0 group-hover:opacity-100"
                            initial={{ opacity: 0, x: -10 }}
                            whileHover={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <span>Découvrir</span>
                            <motion.div
                              animate={{ x: [0, 4, 0] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              <ArrowRight size={16} />
                            </motion.div>
                          </motion.div>
                        </div>
                      </div>

                      {/* Shimmer on hover */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 z-15"
                        initial={false}
                        animate={{ x: ['100%', '-100%'] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                      />
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

          {/* Stats callout with animation */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-16 p-8 rounded-2xl border border-accent/20 bg-gradient-to-r from-accent/10 to-accent/5 backdrop-blur-md overflow-hidden relative"
          >
            {/* Animated background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-accent/0 to-accent/10"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            />
            <p className="text-center text-muted-foreground font-light relative z-10">
              <span className="font-semibold text-foreground">847 projets infrastructure</span> • <span className="inline-block">Zéro accident depuis 2015</span> • <span className="inline-block">99.2% de satisfaction</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= PROJECTS SHOWCASE - HORIZONTAL SCROLL ================= */}
      <ProjectsShowcase />

      {/* Why Trust Us Section - PREMIUM avec animations avancées */}
      <motion.section 
        className="py-28 px-6 bg-gradient-to-b from-accent/5 to-background relative overflow-hidden"
      >
        {/* Animated background elements - Multiple blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/3 -left-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
            animate={{ x: [0, 50, 0], y: [0, 50, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 20, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 -right-1/3 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
            animate={{ x: [0, -50, 0], y: [0, 50, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 25, repeat: Infinity, delay: 2 }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            className="grid md:grid-cols-2 gap-16 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {/* Left side */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl sm:text-6xl font-serif font-bold mb-8 text-foreground leading-tight">
                Pourquoi <motion.span
                  className="text-accent"
                  animate={{ opacity: [0.7, 1, 0.7], textShadow: ['0px 0px 0px rgba(201, 130, 107, 0)', '0px 0px 20px rgba(201, 130, 107, 0.5)', '0px 0px 0px rgba(201, 130, 107, 0)'] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  BINOVA
                </motion.span>
              </h2>

              <motion.div
                className="space-y-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  { icon: <Award size={24} />, title: '28 Ans d\'Excellence', desc: '2 décennies d\'expertise reconnue', stat: '28' },
                  { icon: <Lock size={24} />, title: 'Zéro Incident', desc: 'Standards sécurité exceptionnels', stat: '0' },
                  { icon: <Lightbulb size={24} />, title: 'Avant-garde Tech', desc: 'Innovation continue & R&D', stat: '100%' },
                  { icon: <CheckCircle size={24} />, title: '99.2% Succès', desc: 'Calendaire & budgétaire garantis', stat: '99.2%' }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="group relative flex gap-4 p-4 rounded-lg hover:bg-white/5 transition-all duration-300 overflow-hidden"
                    whileHover={{ x: 8 }}
                  >
                    {/* Background reveal */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-accent/10 to-transparent"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '0%' }}
                      transition={{ duration: 0.4 }}
                    />

                    <motion.div
                      className="relative flex-shrink-0 w-14 h-14 bg-gradient-to-br from-accent/30 to-accent/10 rounded-lg flex items-center justify-center text-accent"
                      whileHover={{ scale: 1.1, rotate: 5, y: -2 }}
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.15 }}
                    >
                      {item.icon}
                    </motion.div>
                    <div className="relative flex-1">
                      <h3 className="font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">{item.title}</h3>
                      <p className="text-muted-foreground font-light text-sm">{item.desc}</p>
                    </div>
                    <motion.span
                      className="text-lg font-serif font-bold text-accent/40 group-hover:text-accent transition-colors text-right"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                    >
                      {item.stat}
                    </motion.span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right side - Testimonials with premium styling */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {[
                {
                  text: "BINOVA a transformé notre vision en réalité. Expertise inégalée sur Lyon-Turin.",
                  author: "Jean-Marie Dubois",
                  company: "SNCF Infra",
                  rating: 5
                },
                {
                  text: "250 experts qui résolvent les défis géotechniques complexes en temps record.",
                  author: "Sophie Laurent",
                  company: "Vinci Construction",
                  rating: 5
                }
              ].map((testimonial, i) => (
                <motion.div
                  key={i}
                  className="group relative p-6 rounded-xl border border-white/5 bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-xl hover:border-accent/30 transition-all duration-500 overflow-hidden"
                  whileHover={{ scale: 1.02, borderColor: 'rgba(201, 130, 107, 0.3)' }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2, duration: 0.6 }}
                >
                  {/* Left border accent - animated reveal */}
                  <motion.div
                    className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-accent to-accent/0 rounded-l-xl"
                    initial={{ scaleY: 0 }}
                    whileHover={{ scaleY: 1 }}
                    transition={{ duration: 0.4 }}
                  />

                  {/* Stars animation */}
                  <motion.div
                    className="flex gap-1 mb-4 group-hover:gap-2 transition-all duration-300"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 + i * 0.2 }}
                  >
                    {[...Array(testimonial.rating)].map((_, j) => (
                      <motion.span
                        key={j}
                        animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.2, 0.95, 1] }}
                        transition={{ duration: 0.5, repeat: Infinity, delay: j * 0.1 }}
                        className="text-accent"
                      >
                        ★
                      </motion.span>
                    ))}
                  </motion.div>

                  <p className="text-foreground font-light italic mb-4 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <motion.div 
                    className="flex items-center gap-2 text-accent"
                    whileHover={{ gap: 8 }}
                  >
                    <span className="font-semibold text-sm">{testimonial.author}</span>
                    <span className="text-muted-foreground text-xs">• {testimonial.company}</span>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Impact Section */}
      <ImpactSection />

      

      {/* Testimonials Section */}
      <TestimonialsPremium />

      {/* Certifications */}
      <CertificationsSection />

      {/* Urgency/FOMO Section */}
      <UrgencySection />

      {/* FAQ */}
      <FAQSection />

      {/* Final CTA - PREMIUM avec animations épiques */}
      <motion.section 
        className="py-32 px-6 bg-gradient-to-b from-background to-accent/5 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {/* Animated background elements - Multiple animated layers */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Main blob */}
          <motion.div
            className="absolute -top-1/2 -right-1/3 w-[600px] h-[600px] bg-accent/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 180, 270, 360] }}
            transition={{ duration: 25, repeat: Infinity }}
          />
          {/* Secondary blobs */}
          <motion.div
            className="absolute -bottom-1/4 -left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.3, 1], y: [0, 50, 0] }}
            transition={{ duration: 20, repeat: Infinity, delay: 2 }}
          />
          {/* Tertiary blob */}
          <motion.div
            className="absolute top-1/3 left-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl"
            animate={{ x: [0, 40, 0], y: [0, -40, 0] }}
            transition={{ duration: 18, repeat: Infinity, delay: 1 }}
          />
        </div>

        <motion.div
          className="max-w-4xl mx-auto text-center relative z-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge animated */}
          <motion.div
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            animate={{ borderColor: ['rgba(201, 130, 107, 0.3)', 'rgba(201, 130, 107, 0.6)', 'rgba(201, 130, 107, 0.3)'] }}
            transitionBorderColor={{ duration: 3, repeat: Infinity }}
          >
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              className="text-accent"
            >
              ✨
            </motion.span>
            <span className="text-xs font-semibold text-accent uppercase tracking-wider">
              Commencez dès maintenant
            </span>
          </motion.div>

          {/* Title with character animation */}
          <motion.h2
            className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold mb-8 text-foreground leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Démarrez votre
            <motion.span
              className="block text-accent"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Projet Impactant
            </motion.span>
          </motion.h2>

          {/* Subtitle with reveal animation */}
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Expertise reconnue, sécurité garantie, résultats mesurables. 
            <motion.span
              className="block mt-2 text-accent font-semibold"
              animate={{ scale: [0.95, 1.05, 0.95] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              28 ans d'excellence au service de l'infrastructure
            </motion.span>
          </motion.p>

          {/* CTA Buttons with advanced animations */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {/* Primary CTA */}
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              className="group relative"
            >
              <Link href="/devis">
                <motion.button 
                  className="group relative px-10 py-5 bg-gradient-to-r from-accent to-accent/70 text-white rounded-xl font-semibold shadow-2xl hover:shadow-accent/50 overflow-hidden"
                  whileHover={{ 
                    boxShadow: '0 0 40px rgba(201, 130, 107, 0.8)',
                  }}
                >
                  {/* Animated background elements inside button */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-accent/80 to-accent opacity-0 group-hover:opacity-100"
                    initial={false}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Shimmer effect inside button */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
                    initial={false}
                    animate={{ x: ['0%', '100%'] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />

                  <span className="relative flex items-center justify-center gap-3">
                    Demander un Devis
                    <motion.div 
                      animate={{ x: [0, 6, 0] }} 
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight size={20} />
                    </motion.div>
                  </span>
                </motion.button>
              </Link>
            </motion.div>

            {/* Secondary CTA */}
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/contact">
                <motion.button 
                  className="group relative px-10 py-5 border-2 border-accent text-accent rounded-xl font-semibold hover:bg-accent/10 transition-all duration-300 overflow-hidden backdrop-blur-sm"
                  whileHover={{
                    borderColor: 'rgba(201, 130, 107, 1)',
                    backgroundColor: 'rgba(201, 130, 107, 0.1)',
                  }}
                >
                  {/* Animated border glow */}
                  <motion.div
                    className="absolute inset-0 rounded-xl border-2 border-accent opacity-0 group-hover:opacity-100"
                    initial={false}
                    animate={{ boxShadow: ['0 0 0 0 rgba(201, 130, 107, 0.7)', '0 0 0 10px rgba(201, 130, 107, 0)'] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  
                  <span className="relative flex items-center justify-center gap-3">
                    Parler à un Expert
                    <motion.div 
                      animate={{ scale: [1, 1.2, 1] }} 
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Phone size={20} />
                    </motion.div>
                  </span>
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Trust indicators animated */}
          <motion.div
            className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {[
              { icon: '🛡️', text: 'Zéro risque' },
              { icon: '⚡', text: 'Réponse 24h' },
              { icon: '✓', text: 'Sans engagement' }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-2"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.3 }}
              >
                <span className="text-2xl">{item.icon}</span>
                <span>{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.section>
    </>
  )
}
