'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const slides = [
  {
    title: "Génie Civil Premium",
    subtitle: "847 projets livrés avec excellence",
    description: "Ouvrages iconiques, structures complexes, solutions innovantes",
    image: "/slides/civil.jpg",
    cta: "Découvrir",
    link: "/metier/genie-civil"
  },
  {
    title: "Travaux Souterrains",
    subtitle: "156 tunnels excavés, 850+ km creusés",
    description: "Excellence profonde, sécurité absolue, 28 ans sans accident",
    image: "/slides/tunnels.jpg",
    cta: "Voir Expertise",
    link: "/metier/travaux-souterrains"
  },
  {
    title: "Barrages & Retenues",
    subtitle: "32 barrages construits, 1850 km³ stockés",
    description: "Maîtrise de l'eau, électricité renouvelable, infrastructure vitale",
    image: "/slides/dams.jpg",
    cta: "En Savoir Plus",
    link: "/metier/barrages"
  },
  {
    title: "Carrières Premium",
    subtitle: "35+ carrières opérées, 15M tonnes/an",
    description: "Extraction responsable, restauration écologique garantie",
    image: "/slides/quarries.jpg",
    cta: "Consulter",
    link: "/metier/carrieres"
  }
]

export function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return
    
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    
    return () => clearInterval(timer)
  }, [isAutoPlay])

  const next = () => {
    setCurrent((prev) => (prev + 1) % slides.length)
    setIsAutoPlay(false)
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlay(false)
  }

  const goToSlide = (index: number) => {
    setCurrent(index)
    setIsAutoPlay(false)
  }

  return (
    <div className="relative h-[90vh] max-h-screen overflow-hidden bg-black">
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundPosition: 'center',
              }}
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
            
            {/* Animated Floating Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse" />
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center justify-center">
              <div className="max-w-4xl mx-auto px-6 text-center z-20">
                {/* Page Flip Effect Container */}
                <div 
                  className="perspective"
                  style={{
                    animation: index === current ? 'pageFlip 0.8s ease-out' : 'none'
                  }}
                >
                  <div className="inline-block mb-6 animate-slideUp">
                    <span className="px-4 py-2 bg-white/10 border border-accent/50 rounded-full text-sm font-semibold text-accent backdrop-blur-md hover:bg-white/20 transition-all duration-300">
                      ✨ {slide.subtitle.split(',')[0]}
                    </span>
                  </div>
                  
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight text-white animate-slideUp animation-delay-100">
                    {slide.title}
                  </h1>
                  
                  <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed font-light animate-slideUp animation-delay-200">
                    {slide.description}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slideUp animation-delay-300">
                    <Link href={slide.link}>
                      <button className="w-full sm:w-auto px-8 py-4 bg-accent text-accent-foreground rounded-sm font-semibold hover:shadow-2xl hover:shadow-accent/50 transition-all duration-300 hover:scale-105 text-base flex items-center justify-center gap-2 group">
                        {slide.cta} <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </Link>
                    <button className="w-full sm:w-auto px-8 py-4 border-2 border-white text-white rounded-sm font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm text-base">
                      En Savoir Plus
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prev}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 p-3 bg-white/10 hover:bg-accent hover:text-accent-foreground backdrop-blur-md rounded-full transition-all duration-300 group"
      >
        <ChevronLeft size={28} className="group-hover:scale-110 transition-transform" />
      </button>
      
      <button
        onClick={next}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 p-3 bg-white/10 hover:bg-accent hover:text-accent-foreground backdrop-blur-md rounded-full transition-all duration-300 group"
      >
        <ChevronRight size={28} className="group-hover:scale-110 transition-transform" />
      </button>

      {/* Indicator Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === current
                ? 'w-8 h-3 bg-accent'
                : 'w-3 h-3 bg-white/30 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Auto-play indicator */}
      <button
        onClick={() => setIsAutoPlay(!isAutoPlay)}
        className="absolute top-8 right-8 z-30 px-4 py-2 bg-white/10 hover:bg-accent/20 backdrop-blur-md rounded-full text-white text-sm font-medium transition-all duration-300"
      >
        {isAutoPlay ? '⏸ Pause' : '▶ Play'}
      </button>

      <style jsx>{`
        @keyframes pageFlip {
          0% {
            transform: perspective(1200px) rotateY(-90deg);
            opacity: 0;
          }
          50% {
            transform: perspective(1200px) rotateY(-45deg);
          }
          100% {
            transform: perspective(1200px) rotateY(0deg);
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideUp {
          animation: slideUp 0.6s ease-out forwards;
        }

        .animation-delay-100 {
          animation-delay: 0.1s;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        .perspective {
          perspective: 1200px;
        }
      `}</style>
    </div>
  )
}
