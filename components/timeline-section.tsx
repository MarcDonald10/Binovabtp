import { ReactNode } from 'react'

interface TimelineItem {
  title: string
  description: string
  icon?: ReactNode
}

interface TimelineSectionProps {
  title: string
  description?: string
  items: TimelineItem[]
}

export function TimelineSection({
  title,
  description,
  items
}: TimelineSectionProps) {
  return (
    <section className="py-20 sm:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16" data-animate>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-6">{title}</h2>
          {description && (
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-light">
              {description}
            </p>
          )}
        </div>

        {/* Timeline */}
        <div className="space-y-8 relative">
          {/* Vertical Line */}
          <div className="absolute left-8 sm:left-12 top-20 bottom-0 w-0.5 bg-border" />

          {/* Timeline Items */}
          {items.map((item, i) => (
            <div
              key={i}
              data-animate
              className="opacity-0 relative pl-32 sm:pl-40"
            >
              {/* Circle Marker */}
              <div className="absolute left-0 top-2 w-16 h-16 bg-accent/10 border-4 border-background rounded-full flex items-center justify-center">
                {item.icon ? (
                  <div className="text-accent text-lg">{item.icon}</div>
                ) : (
                  <div className="w-3 h-3 bg-accent rounded-full" />
                )}
              </div>

              {/* Content */}
              <div className="p-6 bg-card border border-border/50 rounded-sm hover:border-accent hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-serif font-bold mb-2 text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
