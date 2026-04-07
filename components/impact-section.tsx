'use client'

import { companyStats } from '@/lib/data'

export function ImpactSection() {
  return (
    <section className="py-20 bg-foreground text-primary-foreground relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-5xl font-serif font-bold mb-4">Notre Impact Vérifié</h2>
          <p className="text-primary-foreground/80 font-light text-lg">
            Les chiffres qui parlent de notre excellence
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '0s' }}>
            <div className="text-5xl sm:text-6xl font-serif font-bold text-accent mb-3">
              {companyStats.yearsInBusiness}+
            </div>
            <p className="text-lg font-light text-primary-foreground/90">Ans d&apos;Expertise Éprouvée</p>
            <p className="text-sm text-primary-foreground/60 font-light mt-2">
              Leader européen du BTP depuis {companyStats.yearsInBusiness} ans
            </p>
          </div>

          <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="text-5xl sm:text-6xl font-serif font-bold text-accent mb-3">
              {companyStats.totalProjects}+
            </div>
            <p className="text-lg font-light text-primary-foreground/90">Projets Complétés</p>
            <p className="text-sm text-primary-foreground/60 font-light mt-2">
              Moyenne 30 projets/an depuis {companyStats.yearsInBusiness} ans
            </p>
          </div>

          <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-5xl sm:text-6xl font-serif font-bold text-accent mb-3">
              {companyStats.successRate}%
            </div>
            <p className="text-lg font-light text-primary-foreground/90">Taux de Succès</p>
            <p className="text-sm text-primary-foreground/60 font-light mt-2">
              Livrés à temps, à budget, et en sécurité
            </p>
          </div>
        </div>

        {/* Additional Stats */}
        <div className="grid md:grid-cols-2 gap-8 mt-12 pt-12 border-t border-primary-foreground/20">
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="text-3xl sm:text-4xl font-serif font-bold text-accent mb-2">
              {companyStats.teamMembers}+
            </div>
            <p className="text-primary-foreground/90 font-light">Experts Permanents</p>
            <p className="text-sm text-primary-foreground/60 font-light mt-2">
              Ingénieurs qualifiés, formés annuellement, certifiés internationalement
            </p>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="text-3xl sm:text-4xl font-serif font-bold text-accent mb-2">
              {companyStats.countriesOperating}
            </div>
            <p className="text-primary-foreground/90 font-light">Pays Opérationnels</p>
            <p className="text-sm text-primary-foreground/60 font-light mt-2">
              Présence européenne et africaine avec standards globaux
            </p>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <div className="text-3xl sm:text-4xl font-serif font-bold text-accent mb-2">
              {companyStats.rocksExcavated}
            </div>
            <p className="text-primary-foreground/90 font-light">Roche Excavée</p>
            <p className="text-sm text-primary-foreground/60 font-light mt-2">
              Travaux souterrains et minage à haute productivité
            </p>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="text-3xl sm:text-4xl font-serif font-bold text-accent mb-2">
              {companyStats.totalRevenue}
            </div>
            <p className="text-primary-foreground/90 font-light">Chiffre d&apos;Affaires</p>
            <p className="text-sm text-primary-foreground/60 font-light mt-2">
              Croissance annuelle et stabilité financière prouvée
            </p>
          </div>
        </div>

        {/* Key Achievement */}
        <div className="mt-12 pt-12 border-t border-primary-foreground/20 text-center animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
          <div className="inline-block">
            <p className="text-3xl sm:text-4xl font-serif font-bold text-accent mb-3">0</p>
            <p className="text-lg text-primary-foreground/90 font-light">Accidents Mortels depuis 2015</p>
            <p className="text-sm text-primary-foreground/60 font-light mt-2">
              Standards de sécurité les plus élevés du secteur
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
