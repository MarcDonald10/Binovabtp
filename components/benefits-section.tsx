import { ReactNode } from 'react'

interface Benefit {
  icon: ReactNode
  title: string
  description: string
}

interface BenefitsSectionProps {
  title: string
  description?: string
  benefits: Benefit[]
  layout?: 'grid' | 'two-column'
}

export function BenefitsSection({
  title,
  description,
  benefits,
  layout = 'grid'
}: BenefitsSectionProps) {
  const gridClass = layout === 'two-column' ? 'lg:grid-cols-2' : 'lg:grid-cols-4'

  return (
    <section className="py-20 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16" data-animate>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-6">{title}</h2>
          {description && <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-light">{description}</p>}
        </div>

        {/* Benefits Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 ${gridClass} gap-8 lg:gap-10`}>
          {benefits.map((benefit, i) => (
            <div
              key={i}
              data-animate
              className="opacity-0 p-8 bg-card border border-border/50 rounded-sm hover:border-accent hover:shadow-xl transition-all duration-300 group flex flex-col"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-accent/10 rounded-sm flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                <div className="text-accent group-hover:text-accent-foreground transition-colors">
                  {benefit.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-serif font-bold mb-4 group-hover:text-accent transition-colors">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground font-light flex-1">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
