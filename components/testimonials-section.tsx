import { Star } from 'lucide-react'

interface Testimonial {
  quote: string
  author: string
  title: string
  company: string
  rating: number
}

interface TestimonialsSectionProps {
  title: string
  description?: string
  testimonials: Testimonial[]
}

export function TestimonialsSection({
  title,
  description,
  testimonials
}: TestimonialsSectionProps) {
  return (
    <section className="py-20 sm:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16" data-animate>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-6">{title}</h2>
          {description && (
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-light">
              {description}
            </p>
          )}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              data-animate
              className="opacity-0 p-8 bg-card border border-border/50 rounded-sm hover:border-accent hover:shadow-xl transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    size={18}
                    className={j < testimonial.rating ? 'fill-accent text-accent' : 'text-border'}
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="mb-6 text-muted-foreground font-light leading-relaxed">
                &quot;{testimonial.quote}&quot;
              </blockquote>

              {/* Author Info */}
              <div>
                <p className="font-serif font-bold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                <p className="text-sm text-accent font-semibold">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
