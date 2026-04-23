'use client'

import { Star, Train, Wrench, Building2, Landmark, Zap, Pickaxe } from 'lucide-react'

export function MajorClientsSection() {
  const clients = [
    { name: 'BMC', icon: Train, sector: 'Mines' },
    { name: 'BLITZ', icon: Wrench, sector: 'Automobile' },
    { name: 'LGF', icon: Building2, sector: 'Agriculture' },
    { name: 'HOLYFRAME', icon: Landmark, sector: 'Infrastructure' },
    { name: 'FLEURON', icon: Landmark, sector: 'Infrastructure' },
    { name: 'THE PLURAL STORE', icon: Landmark, sector: 'Infrastructure' },
  ]

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-3">Nos Grands Clients</h2>
          <p className="text-muted-foreground font-light">
            Reconnus et de confiance pour leur leadership.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {clients.map((client, idx) => {
            const IconComponent = client.icon
            return (
              <div
                key={idx}
                className="p-6 border border-border/50 rounded-sm hover:border-[#1E5D3B]/50 hover:bg-muted/30 transition-all group animate-fade-in-up flex flex-col items-center justify-center text-center cursor-pointer"
                style={{ animationDelay: `${idx * 0.06}s` }}
              >
                <div className="mb-3 group-hover:scale-110 transition-transform">
                  <IconComponent size={40} className="text-[#1E5D3B] mx-auto" />
                </div>
                <p className="font-semibold text-foreground text-sm">{client.name}</p>
                <p className="text-xs text-muted-foreground font-light mt-1">{client.sector}</p>
              </div>
            )
          })}
        </div>

        {/* Additional Trust Info */}
        <div className="mt-12 p-8 bg-muted/30 rounded-sm border border-border/50 animate-fade-in-up">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left flex-1">
              <h3 className="font-semibold text-foreground mb-2">Reconnus Comme Partenaires Fiables</h3>
              <p className="text-muted-foreground font-light text-sm">
                Les plus grandes entreprises qui  nous font confiance pour leurs projets les plus critiques.
              </p>
            </div>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="fill-accent text-accent" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
