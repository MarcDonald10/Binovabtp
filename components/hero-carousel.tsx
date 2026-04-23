'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const slides = [
  {
    tag: "Génie Civil",
    title: "Ouvrages d’exception,\nrésultats durables",
    description:
      "Conception et réalisation de structures complexes à forte valeur technique et stratégique, avec un niveau d’exigence international.",
    cta: "Découvrir",
    ctaSecondary: "En savoir plus",
    link: "/metier/genie-civil",
    image: "/slides/civil.jpg",
    stats: [
      { label: "Projets d’infrastructure majeurs" },
      { label: "Présence internationale" },
      { label: "Exigence qualité certifiée" },
    ],
  },
  {
    tag: "Travaux Souterrains",
    title: "Excellence en profondeur,\nsécurité absolue",
    description:
      "Maîtrise des environnements souterrains complexes avec une approche centrée sur la précision, la sécurité et la stabilité structurelle.",
    cta: "Voir l’expertise",
    ctaSecondary: "En savoir plus",
    link: "/metier/travaux-souterrains",
    image: "/slides/tunnels.jpg",
    stats: [
      { label: "Expertise en milieux extrêmes" },
      { label: "Infrastructures souterraines complexes" },
      { label: "Standard de sécurité élevé" },
    ],
  },
  {
    tag: "Barrages & Retenues",
    title: "Maîtrise de l’eau,\nvision énergétique",
    description:
      "Conception d’ouvrages hydrauliques structurants au service des infrastructures énergétiques et du développement durable.",
    cta: "En savoir plus",
    ctaSecondary: "Voir les projets",
    link: "/metier/barrages",
    image: "/slides/dams.jpg",
    stats: [
      { label: "Infrastructures hydrauliques stratégiques" },
      { label: "Gestion des ressources naturelles" },
      { label: "Impact énergétique durable" },
    ],
  },
  {
    tag: "Carrières Premium",
    title: "Extraction responsable,\nimpact maîtrisé",
    description:
      "Exploitation maîtrisée des ressources avec intégration systématique des exigences environnementales et de réhabilitation des sites.",
    cta: "Consulter",
    ctaSecondary: "En savoir plus",
    link: "/metier/carrieres",
    image: "/minage-hero.jpg",
    stats: [
      { label: "Gestion responsable des ressources" },
      { label: "Réhabilitation des sites" },
      { label: "Approche environnementale intégrée" },
    ],
  },
]

const INTERVAL = 5000

export function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const [progress, setProgress] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const total = slides.length

  const go = useCallback((index: number) => {
    setCurrent(((index % total) + total) % total)
  }, [total])

  const resetProgress = useCallback(() => {
    setProgress(0)
    if (progressRef.current) clearInterval(progressRef.current)
    const step = 100 / (INTERVAL / 100)
    progressRef.current = setInterval(() => {
      setProgress(p => {
        if (p >= 100) { clearInterval(progressRef.current!); return 100 }
        return +(p + step).toFixed(1)
      })
    }, 100)
  }, [])

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => go(current + 1), INTERVAL)
    resetProgress()
  }, [current, go, resetProgress])

  useEffect(() => {
    startTimer()
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
      if (progressRef.current) clearInterval(progressRef.current)
    }
  }, [startTimer])

  const handleNav = (dir: 1 | -1) => {
    go(current + dir)
    startTimer()
  }

  const handleDot = (i: number) => {
    go(i)
    startTimer()
  }

  const slide = slides[current]

  return (
    <section className="relative h-[90vh] overflow-hidden bg-[#0a0a0a]">

      {/* Slides */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-[900ms] ease-in-out ${
            i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* BG image */}
          <div
            className={`absolute inset-0 bg-cover bg-center transition-transform duration-[6000ms] ease-out ${
              i === current ? 'scale-100' : 'scale-105'
            }`}
            style={{ backgroundImage: `url(${s.image})` }}
          />

          {/* Overlay directionnel */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/20" />
        </div>
      ))}

      {/* Contenu principal */}
      <div className="relative z-20 h-full flex items-center px-12 lg:px-16 max-w-[680px]">
        <div>
          {/* Tag */}
          <span
            key={`tag-${current}`}
            className="inline-block mb-5 px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase
                       bg-white/10 border border-white/20 text-white/70
                       animate-fade-in-up"
          >
            {slide.tag}
          </span>

          {/* Titre */}
          <h1
            key={`title-${current}`}
            className="text-5xl lg:text-6xl font-semibold leading-[1.1] text-white mb-4 whitespace-pre-line
                       animate-fade-in-up [animation-delay:150ms]"
          >
            {slide.title}
          </h1>

          {/* Description */}
          <p
            key={`desc-${current}`}
            className="text-base text-white/60 leading-relaxed mb-9 max-w-lg
                       animate-fade-in-up [animation-delay:300ms]"
          >
            {slide.description}
          </p>

          {/* CTAs */}
          <div
            key={`btns-${current}`}
            className="flex gap-3 animate-fade-in-up [animation-delay:450ms]"
          >
            <Link href={slide.link}>
              <button className="flex items-center gap-2 px-7 py-3.5 bg-[#d4a853] hover:bg-[#c49740]
                                 text-white text-sm font-medium rounded-sm transition-colors duration-200">
                {slide.cta} <ArrowRight size={14} />
              </button>
            </Link>
            <button className="px-7 py-3.5 border border-white/30 text-white text-sm font-medium
                               rounded-sm hover:bg-white/10 transition-colors duration-200 backdrop-blur-sm">
              {slide.ctaSecondary}
            </button>
          </div>
        </div>
      </div>

      {/* Stats latérales */}
      <div className="absolute right-12 lg:right-16 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-5">
        {slide.stats.map((stat, i) => (
          <div
            key={`${current}-${i}`}
            className="text-right animate-fade-in-right"
            style={{ animationDelay: `${i * 120 + 300}ms` }}
          >
            <p className="text-2xl font-semibold text-[#d4a853] leading-none">{stat.value}</p>
            <p className="text-[11px] tracking-wide text-white/45 mt-0.5">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={() => handleNav(-1)}
        className="absolute left-5 top-1/2 -translate-y-1/2 z-30
                   w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/15
                   flex items-center justify-center text-white transition-colors duration-200"
        aria-label="Précédent"
      >
        <ChevronLeft size={20} strokeWidth={1.5} />
      </button>

      <button
        onClick={() => handleNav(1)}
        className="absolute right-5 top-1/2 -translate-y-1/2 z-30
                   w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/15
                   flex items-center justify-center text-white transition-colors duration-200"
        aria-label="Suivant"
      >
        <ChevronRight size={20} strokeWidth={1.5} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-7 left-12 lg:left-16 z-30 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => handleDot(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-0.5 rounded-full transition-all duration-300 ${
              i === current ? 'w-11 bg-[#d4a853]' : 'w-7 bg-white/25 hover:bg-white/40'
            }`}
          />
        ))}
      </div>

      {/* Compteur */}
      <div className="absolute bottom-6 right-12 lg:right-16 z-30 text-[11px] tracking-widest text-white/35">
        {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </div>

      {/* Barre de progression */}
      <div className="absolute bottom-0 left-0 h-[2px] bg-[#d4a853] z-30 transition-none"
           style={{ width: `${progress}%` }} />

    </section>
  )
}