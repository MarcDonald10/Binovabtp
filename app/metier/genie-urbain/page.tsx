'use client'

import { motion, cubicBezier } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Building, MapPin, Users, Zap, Leaf, TrendingUp, ChevronRight } from 'lucide-react'
import { useBreakpoint } from '@/hooks/useBreakpoint'
import { rs } from '@/components/ui/ResponsiveStyles'

const ease = cubicBezier(0.23, 1, 0.32, 1)
const fadeUp = {
  hidden:  { opacity: 0, y: 60 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.9, ease, delay },
  }),
}

const G   = '#1E5D3B'
const GL  = '#6BCB3D'
const Y   = '#F4B400'
const BK  = '#0B0B0B'
const LBG = '#F5F5F5'
const TG  = '#6B6B6B'

export default function GenieUrbainPage() {
  const { is } = useBreakpoint()
  const screen = { isMobile: is.mobile, isTablet: is.tablet, isDesktop: is.desktop }
  const r = rs(screen)

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif" }}>

      {/* ══ HERO ══ */}
      <section style={{
        position: 'relative', minHeight: '92vh',
        display: 'flex', alignItems: 'center',
        background: BK, overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url('https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=2070')`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          filter: 'brightness(0.35)',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: `linear-gradient(150deg, rgba(11,11,11,0.88) 40%, rgba(30,93,59,0.50) 100%)`,
        }} />
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0,
          width: 6,
          background: `linear-gradient(to bottom, ${Y}, ${GL})`,
        }} />

        <div style={{
          position: 'relative', zIndex: 10,
          ...r.container,
          padding: is.mobile ? '100px 20px 80px' : '0 40px',
        }}>
          <motion.div initial="hidden" animate="visible">

            {!is.xs && (
              <motion.div variants={fadeUp} custom={0} style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                color: Y, letterSpacing: is.mobile ? 2 : 4,
                fontSize: 11, fontWeight: 600,
                textTransform: 'uppercase', marginBottom: 24,
              }}>
                <div style={{ height: 2, width: 28, background: Y }} />
                GÉNIE URBAIN — BINOVA ROCK BUILDERS
                <div style={{ height: 2, width: 28, background: Y }} />
              </motion.div>
            )}

            <motion.h1 variants={fadeUp} custom={0.1} style={{
              fontFamily: "'Playfair Display', serif",
              ...r.heroTitle,
              fontWeight: 700, lineHeight: 1.05,
              color: '#fff', marginBottom: 20, maxWidth: 860,
            }}>
              Donner un visage unique<br />à nos <span style={{ color: GL }}>villes</span>.
            </motion.h1>

            <motion.p variants={fadeUp} custom={0.25} style={{
              maxWidth: 580, ...r.heroSub,
              color: 'rgba(255,255,255,0.82)',
              fontWeight: 300, lineHeight: 1.7, marginBottom: 36,
            }}>
              Nous accompagnons collectivités, institutions et promoteurs dans la création
              d'espaces urbains durables, intelligents et humains.
            </motion.p>

            <motion.div variants={fadeUp} custom={0.38} style={r.ctaGroup}>
              <Link href="/contact" style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                gap: 10, padding: '14px 28px', borderRadius: 8,
                background: G, color: '#fff',
                fontSize: is.mobile ? 14 : 16, fontWeight: 600, textDecoration: 'none',
                boxShadow: `0 4px 24px rgba(30,93,59,0.4)`,
                ...r.btn,
              }}>
                Parlons de votre projet urbain <ArrowRight size={16} />
              </Link>
              <Link href="#realisations" style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                gap: 10, padding: '14px 28px', borderRadius: 8,
                background: Y, color: BK,
                fontSize: is.mobile ? 14 : 16, fontWeight: 600, textDecoration: 'none',
                ...r.btn,
              }}>
                Voir nos réalisations
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Ticker */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          background: `rgba(30,93,59,0.92)`, backdropFilter: 'blur(6px)',
          ...r.ticker,
          borderTop: `1px solid rgba(107,203,61,0.3)`,
        }}>
          {['156+ projets urbains', '15M personnes impactées', '90% certifiés LEED', 'International'].map((t, i) => (
            <span key={i} style={{
              color: 'rgba(255,255,255,0.85)',
              fontSize: is.mobile ? 11 : 13,
              fontWeight: 500, whiteSpace: 'nowrap', flexShrink: 0,
            }}>
              <span style={{ color: Y, marginRight: 6 }}>◆</span>{t}
            </span>
          ))}
        </div>
      </section>

      {/* ══ STATS ══ */}
      <section style={{ ...r.section, background: '#fff' }}>
        <div style={r.container}>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: is.mobile ? 36 : 64 }}>
            <div style={{ width: 4, height: 36, background: Y, borderRadius: 2 }} />
            <span style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: is.mobile ? 26 : 36, fontWeight: 700, color: BK,
            }}>
              Nos Chiffres Clés
            </span>
          </motion.div>

          <div style={r.grid(220)}>
            {[
              { value: '156+', label: 'Projets Urbains',       desc: 'Réalisés sur tous les continents', accent: G  },
              { value: '15M+', label: 'Personnes Impactées',   desc: 'Cadre de vie amélioré',            accent: GL },
              { value: '€32B', label: 'Valeur Totale',         desc: 'Des projets développés',           accent: Y  },
              { value: '90%',  label: 'Certifications Vertes', desc: 'Projets LEED / BREEAM',            accent: G  },
            ].map((stat, i) => (
              <motion.div key={i} variants={fadeUp} custom={i * 0.1} initial="hidden" whileInView="visible" viewport={{ once: true }}
                style={{
                  padding: is.mobile ? '28px 24px' : '40px 32px',
                  borderRadius: 8, border: '1px solid #E8E8E8', background: '#fff',
                  boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
                  borderLeft: `4px solid ${stat.accent}`, cursor: 'default',
                }}
                whileHover={{ y: -6, boxShadow: '0 12px 40px rgba(0,0,0,0.12)' }}
              >
                <div style={{
                  fontFamily: "'Playfair Display', serif",
                  ...r.statValue, fontWeight: 700,
                  color: stat.accent, lineHeight: 1, marginBottom: 12,
                }}>
                  {stat.value}
                </div>
                <h3 style={{ fontSize: is.mobile ? 15 : 18, fontWeight: 600, color: BK, marginBottom: 6 }}>{stat.label}</h3>
                <p style={{ fontSize: 13, color: TG, fontWeight: 300 }}>{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ DOMAINES D'EXPERTISE ══ */}
      <section style={{ ...r.section, background: LBG }}>
        <div style={r.container}>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: is.mobile ? 36 : 64 }}>
            <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: 3, color: G, textTransform: 'uppercase', marginBottom: 14 }}>Ce que nous faisons</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", ...r.sectionTitle, fontWeight: 700, color: BK, lineHeight: 1.15 }}>
              Nos Domaines d'Expertise
            </h2>
            <div style={{ width: 56, height: 4, background: Y, borderRadius: 2, margin: '20px auto 0' }} />
          </motion.div>

          <div style={r.grid(280)}>
            {[
              { Icon: Building, title: 'Projets Mixtes',          desc: 'Conception de quartiers mixtes intégrant logements, commerces, bureaux et espaces publics. Lieux de vie dynamiques et inclusifs.', color: G  },
              { Icon: MapPin,   title: 'Aménagements Urbains',    desc: 'Rénovation de quartiers anciens, réaménagement d\'espaces publics et valorisation du patrimoine historique.', color: GL },
              { Icon: Leaf,     title: 'Villes Vertes & Durables', desc: 'Espaces verts, parcs urbains, corridors écologiques et solutions nature-based pour une ville plus respirable.', color: Y  },
            ].map(({ Icon, title, desc, color }, i) => (
              <motion.div key={i} variants={fadeUp} custom={i * 0.12} initial="hidden" whileInView="visible" viewport={{ once: true }}
                style={{
                  background: '#fff', borderRadius: 8,
                  padding: is.mobile ? '32px 24px' : '48px 36px',
                  border: '1px solid #E8E8E8', boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
                  position: 'relative', overflow: 'hidden', cursor: 'default',
                }}
                whileHover={{ y: -6, boxShadow: '0 16px 48px rgba(0,0,0,0.12)' }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: color }} />
                <div style={{
                  width: 56, height: 56, borderRadius: 8, background: `${color}18`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 22, color: color,
                }}>
                  <Icon size={28} />
                </div>
                <h3 style={{ fontSize: is.mobile ? 18 : 22, fontWeight: 600, color: BK, marginBottom: 12 }}>{title}</h3>
                <p style={{ fontSize: is.mobile ? 14 : 15, color: TG, lineHeight: 1.75, fontWeight: 300 }}>{desc}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: color, fontWeight: 600, fontSize: 13, marginTop: 24 }}>
                  En savoir plus <ChevronRight size={14} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ RÉALISATIONS ══ */}
      <section id="realisations" style={{ ...r.section, background: '#fff' }}>
        <div style={r.container}>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            style={{ marginBottom: is.mobile ? 36 : 64 }}>
            <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: 3, color: G, textTransform: 'uppercase', marginBottom: 14 }}>
              Portfolio sélectif
            </p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", ...r.sectionTitle, fontWeight: 700, color: BK, lineHeight: 1.15 }}>
              Transformations Urbaines Emblématiques
            </h2>
            <div style={{ width: 56, height: 4, background: Y, borderRadius: 2, marginTop: 20 }} />
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: is.mobile ? 14 : 20 }}>
            {[
              {
                num: '01', title: 'Métropole Durable – Singapour', value: '€2.8B',
                desc: '700 hectares, 50 000 logements LEED Platinum, corridors verts et mobilité zéro carbone.',
                tags: ['LEED Platinum', 'Zéro Carbone', '700 ha'], accent: G,
              },
              {
                num: '02', title: 'Revitalisation du Caire Historique', value: '€1.5B',
                desc: 'Préservation du patrimoine UNESCO et infrastructures modernes. 200 000 habitants bénéficiaires.',
                tags: ['UNESCO', 'Patrimoine', '200k habitants'], accent: GL,
              },
              {
                num: '03', title: 'Barcelona Green Belt', value: '€680M',
                desc: '85 km de parcs linéaires et forêts urbaines. Réduction de l\'îlot de chaleur urbain.',
                tags: ['85 km', 'Forêts urbaines', 'Climat'], accent: Y,
              },
            ].map((project, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, x: is.mobile ? 0 : -30, y: is.mobile ? 20 : 0 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7, ease }}
                style={{
                  background: '#fff', borderRadius: 8,
                  ...r.projectCard,
                  border: '1px solid #E8E8E8',
                  boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
                  borderLeft: `6px solid ${project.accent}`,
                }}
              >
                {!is.mobile && (
                  <div style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 64, fontWeight: 700,
                    color: `${project.accent}22`, lineHeight: 1,
                    minWidth: 72, textAlign: 'center', userSelect: 'none',
                  }}>
                    {project.num}
                  </div>
                )}

                <div style={{ flex: 1 }}>
                  {is.mobile && (
                    <div style={{ fontSize: 11, fontWeight: 700, color: project.accent, letterSpacing: 2, marginBottom: 6 }}>
                      {project.num}
                    </div>
                  )}
                  <h3 style={{ fontSize: is.mobile ? 16 : 22, fontWeight: 600, color: BK, marginBottom: 10 }}>{project.title}</h3>
                  <p style={{ fontSize: is.mobile ? 13 : 15, color: TG, lineHeight: 1.7, fontWeight: 300, marginBottom: 14 }}>{project.desc}</p>
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                    {project.tags.map(t => (
                      <span key={t} style={{
                        padding: '3px 10px', borderRadius: 4,
                        background: `${project.accent}15`, color: project.accent,
                        fontSize: 11, fontWeight: 600, letterSpacing: 0.5,
                      }}>{t}</span>
                    ))}
                  </div>
                </div>

                <div style={{ ...r.projectValue, marginTop: is.mobile ? 12 : 0 }}>
                  <div style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: is.mobile ? 28 : 40, fontWeight: 700,
                    color: project.accent, lineHeight: 1,
                  }}>
                    {project.value}
                  </div>
                  <div style={{ fontSize: 11, color: TG, fontWeight: 500, marginTop: 4, textTransform: 'uppercase', letterSpacing: 1.5 }}>
                    Valeur du projet
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ APPROCHE PARTICIPATIVE ══ */}
      <section style={{ ...r.section, background: LBG }}>
        <div style={r.container}>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: is.mobile ? 36 : 64 }}>
            <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: 3, color: G, textTransform: 'uppercase', marginBottom: 14 }}>Méthodologie</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", ...r.sectionTitle, fontWeight: 700, color: BK, lineHeight: 1.15 }}>
              Notre Approche Participative
            </h2>
            <div style={{ width: 56, height: 4, background: Y, borderRadius: 2, margin: '20px auto 0' }} />
          </motion.div>

          <div style={r.grid(240)}>
            {[
              { Icon: Users,      title: 'Consultation Citoyenne', desc: 'Ateliers participatifs et implication directe des communautés à chaque phase du projet.', color: G  },
              { Icon: Leaf,       title: 'Durabilité Intégrée',    desc: 'Objectifs Net-Zéro, biodiversité positive, économie circulaire et solutions nature-based.', color: GL },
              { Icon: Zap,        title: 'Smart City & Innovation', desc: 'IoT, éclairage intelligent, gestion du trafic et systèmes énergétiques distribués.', color: Y  },
              { Icon: TrendingUp, title: 'Valeur Économique',      desc: 'Emplois locaux, augmentation de la valeur immobilière et attractivité des territoires.', color: G  },
            ].map(({ Icon, title, desc, color }, i) => (
              <motion.div key={i} variants={fadeUp} custom={i * 0.1} initial="hidden" whileInView="visible" viewport={{ once: true }}
                style={{
                  background: '#fff', borderRadius: 8,
                  padding: is.mobile ? '28px 20px' : '40px 32px',
                  border: '1px solid #E8E8E8', boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
                  position: 'relative', overflow: 'hidden', cursor: 'default',
                }}
                whileHover={{ y: -4, boxShadow: '0 16px 48px rgba(0,0,0,0.12)' }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: color }} />
                <div style={{
                  width: 48, height: 48, borderRadius: 8, background: `${color}18`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 20, color: color,
                }}>
                  <Icon size={24} />
                </div>
                <h3 style={{ fontSize: is.mobile ? 16 : 20, fontWeight: 600, color: BK, marginBottom: 10 }}>{title}</h3>
                <p style={{ fontSize: 13, color: TG, lineHeight: 1.75, fontWeight: 300 }}>{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section style={{ padding: is.mobile ? '80px 20px' : '120px 40px', background: BK, position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2070')`,
          backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.15)',
        }} />
        {!is.mobile && (
          <>
            <div style={{ position: 'absolute', top: -80, right: -80, width: 400, height: 400, borderRadius: '50%', border: `80px solid rgba(107,203,61,0.08)`, pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: -100, left: -60, width: 320, height: 320, borderRadius: '50%', border: `60px solid rgba(244,180,0,0.08)`, pointerEvents: 'none' }} />
          </>
        )}

        <div style={{ position: 'relative', zIndex: 2, maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div style={{
              display: 'inline-block', padding: '5px 16px', borderRadius: 4,
              background: Y, color: BK, fontSize: 11, fontWeight: 700,
              letterSpacing: 2, textTransform: 'uppercase', marginBottom: 24,
            }}>
              Binova Rock Builders
            </div>

            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: is.mobile ? 32 : 'clamp(40px, 5.5vw, 64px)',
              fontWeight: 700, color: '#fff', lineHeight: 1.15, marginBottom: 20,
            }}>
              Construisons ensemble<br />la ville de <span style={{ color: GL }}>demain</span>
            </h2>

            <p style={{ fontSize: is.mobile ? 15 : 18, color: 'rgba(255,255,255,0.72)', lineHeight: 1.7, fontWeight: 300, marginBottom: 40 }}>
              156 projets urbains. 15 millions de personnes impactées.<br />
              Des villes plus vertes, plus humaines et plus intelligentes.
            </p>

            <div style={{ ...r.ctaGroup, justifyContent: 'center' }}>
              <Link href="/contact" style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                gap: 10, padding: '16px 36px', borderRadius: 8,
                background: G, color: '#fff',
                fontSize: is.mobile ? 15 : 17, fontWeight: 600, textDecoration: 'none',
                boxShadow: `0 4px 32px rgba(30,93,59,0.5)`,
                ...r.btn,
              }}>
                Démarrer un projet <ArrowRight size={18} />
              </Link>
              <Link href="/about" style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                gap: 10, padding: '16px 36px', borderRadius: 8,
                border: `2px solid rgba(255,255,255,0.25)`, color: '#fff',
                fontSize: is.mobile ? 15 : 17, fontWeight: 500, textDecoration: 'none',
                ...r.btn,
              }}>
                En savoir plus
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}