import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface CTASectionProps {
  title: string
  description: string
  primaryButton: {
    text: string
    href: string
  }
  secondaryButton?: {
    text: string
    href: string
  }
  variant?: 'accent' | 'dark'
}

export function CTASection({
  title,
  description,
  primaryButton,
  secondaryButton,
  variant = 'accent'
}: CTASectionProps) {
  const isDark = variant === 'dark'

  return (
    <section className={isDark ? 'bg-foreground text-white' : 'bg-muted/50'}>
      <div className="max-w-4xl mx-auto px-6 py-20 sm:py-32 text-center">
        <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-6">{title}</h2>
        <p className={`text-lg max-w-2xl mx-auto mb-10 font-light ${isDark ? 'text-white/80' : 'text-muted-foreground'}`}>
          {description}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href={primaryButton.href}>
            <button className={`px-8 py-4 rounded-sm font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 text-base flex items-center justify-center gap-2 ${
              isDark 
                ? 'bg-accent text-accent-foreground' 
                : 'bg-accent text-accent-foreground'
            }`}>
              {primaryButton.text} <ArrowRight size={20} />
            </button>
          </Link>
          {secondaryButton && (
            <Link href={secondaryButton.href}>
              <button className={`px-8 py-4 rounded-sm font-semibold transition-all duration-300 text-base ${
                isDark
                  ? 'border-2 border-white text-white hover:bg-white/10'
                  : 'border-2 border-foreground text-foreground hover:bg-foreground/5'
              }`}>
                {secondaryButton.text}
              </button>
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
