'use client'

import { motion, cubicBezier } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Landmark, Cog, Award, Users, Zap, ChevronRight } from 'lucide-react'
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
const fadeIn = {
  hidden:  { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.7, ease, delay },
  }),
}

const G   = '#1E5D3B'
const GL  = '#6BCB3D'
const Y   = '#F4B400'
const BK  = '#0B0B0B'
const LBG = '#F5F5F5'
const TG  = '#6B6B6B'

export default function GenieCivilPage() {
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
          backgroundImage: 'url("/ouvrage-art-fond-header.jpg.jpeg")',
          backgroundSize: 'cover', backgroundPosition: 'center',
          filter: 'brightness(0.9)',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: `linear-gradient(160deg, rgba(11,11,11,0.50) 40%, rgba(30,93,59,0.55) 100%)`,
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
                GÉNIE CIVIL & OUVRAGES DART
                <div style={{ height: 2, width: 28, background: Y }} />
              </motion.div>
            )}

            <motion.h1 variants={fadeUp} custom={0.1} style={{
              fontFamily: "'Playfair Display', serif",
              ...r.heroTitle,
              fontWeight: 700, lineHeight: 1.05,
              color: '#fff', marginBottom: 20, maxWidth: 900,
            }}>
              Bâtir l'avenir avec{' '}
              <span style={{ color: GL }}>excellence</span>{' '}
              <span style={{ color: Y }}>structurelle</span>.
            </motion.h1>

            <motion.p variants={fadeUp} custom={0.25} style={{
              maxWidth: 580, ...r.heroSub,
              color: 'rgba(255,255,255,0.82)',
              fontWeight: 300, lineHeight: 1.7, marginBottom: 36,
            }}>
              Nous concevons et réalisons des ouvrages dart et infrastructures complexes
              qui allient performance technique, durabilité et élégance architecturale.
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
                Discuter de votre projet <ArrowRight size={16} />
              </Link>
              <Link href="#projets" style={{
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
          {['Fondée en 1996', '28 ans d\'expertise', 'Certifiée ISO 9001', 'Présence internationale'].map((t, i) => (
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
              { value: '847',   label: 'Projets Livrés',      desc: 'En 28 ans d\'expertise',        accent: G  },
              { value: '€8.5B', label: 'Valeur Totale',       desc: 'D\'ouvrages réalisés',           accent: GL },
              { value: '99.2%', label: 'Taux de Succès',      desc: 'En délai et budget',             accent: Y  },
              { value: '250+',  label: 'Experts Permanents',  desc: 'Spécialisés par discipline',     accent: G  },
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

      {/* ══ VISION & EXCELLENCE ══ */}
      <section style={{ ...r.section, background: LBG }}>
        <div style={{ ...r.container, ...r.grid2 }}>
          {[
            {
              label: 'Notre Vision', icon: '🔭',
              text: `Développer des infrastructures solides et durables à travers les continents. Nous mobilisons les compétences les plus pointues pour concevoir et réaliser les ouvrages les plus complexes.`,
              accent: G,
            },
            {
              label: "L'Excellence", icon: '🏅',
              text: `L'excellence en génie civil signifie mobiliser les meilleures compétences, les matériaux les plus performants et des méthodes innovantes pour garantir durabilité, sécurité et élégance.`,
              accent: GL,
            },
          ].map((block, i) => (
            <motion.div key={i} variants={fadeUp} custom={i * 0.15} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 8,
                  background: block.accent, display: 'flex', alignItems: 'center',
                  justifyContent: 'center', fontSize: 20, flexShrink: 0,
                }}>
                  {block.icon}
                </div>
                <h2 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: is.mobile ? 24 : 32, fontWeight: 700, color: BK,
                }}>
                  {block.label}
                </h2>
              </div>
              <div style={{ width: 40, height: 3, background: block.accent, borderRadius: 2, marginBottom: 20 }} />
              <p style={{ fontSize: is.mobile ? 15 : 17, color: '#444', lineHeight: 1.8, fontWeight: 300 }}>{block.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══ DOMAINES D'EXPERTISE ══ */}
      <section style={{ ...r.section, background: '#fff' }}>
        <div style={r.container}>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: is.mobile ? 36 : 64 }}>
            <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: 3, color: G, textTransform: 'uppercase', marginBottom: 14 }}>
              Ce que nous faisons
            </p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", ...r.sectionTitle, fontWeight: 700, color: BK, lineHeight: 1.15 }}>
              Nos Domaines d'Expertise
            </h2>
            <div style={{ width: 56, height: 4, background: Y, borderRadius: 2, margin: '20px auto 0' }} />
          </motion.div>

          <div style={r.grid(280)}>
            {[
              { Icon: Landmark, title: 'Ponts & Viaducs',           desc: 'Conception et construction de ponts à longues travées, viaducs urbains et structures complexes en acier et béton précontraint.', color: G  },
              { Icon: Cog,      title: 'Infrastructures Énergétiques', desc: 'Postes électriques haute tension, fondations d\'éoliennes, centrales hydroélectriques et ouvrages liés à la transition énergétique.', color: GL },
              { Icon: Award,    title: 'Ouvrages Spécialisés',       desc: 'Structures iconiques, monuments historiques, stades et ouvrages exigeant une précision millimétrée et des techniques avancées.', color: Y  },
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

      {/* ══ PROJETS EMBLÉMATIQUES ══ */}
      <section id="projets" style={{ ...r.section, background: LBG }}>
        <div style={r.container}>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            style={{ marginBottom: is.mobile ? 36 : 64 }}>
            <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: 3, color: G, textTransform: 'uppercase', marginBottom: 14 }}>
              Portfolio sélectif
            </p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", ...r.sectionTitle, fontWeight: 700, color: BK, lineHeight: 1.15 }}>
              Projets Emblématiques
            </h2>
            <div style={{ width: 56, height: 4, background: Y, borderRadius: 2, marginTop: 20 }} />
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: is.mobile ? 14 : 20 }}>
            {[
              {
                num: '01', title: 'Pont Longue Portée – Europe', value: '€1.2B',
                desc: 'Structure suspendue de 2,8 km franchissant un détroit. Technique innovante de vérinage hydraulique pour maintenir la navigation.',
                tags: ['Acier', 'Suspendu', 'Maritime'], accent: G,
              },
              {
                num: '02', title: 'Terminal Aéroportuaire Premium', value: '€890M',
                desc: 'Architecture spectaculaire avec 450 m de portée libre. Colonnes multiples et distribution de charge révolutionnaire.',
                tags: ['Béton', 'Grande portée', 'Aviation'], accent: GL,
              },
              {
                num: '03', title: 'Viaduc Montagneux', value: '€650M',
                desc: '12 km en zone montagneuse avec 156 piles de hauteurs variables. Adaptation aux contraintes sismiques.',
                tags: ['Montagne', 'Sismique', '12 km'], accent: Y,
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

      {/* ══ APPROCHE ══ */}
      <section style={{ ...r.section, background: G, position: 'relative', overflow: 'hidden' }}>
        {!is.mobile && (
          <>
            <div style={{ position: 'absolute', top: -80, right: -80, width: 400, height: 400, borderRadius: '50%', border: `80px solid rgba(107,203,61,0.12)`, pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: -120, left: -60, width: 300, height: 300, borderRadius: '50%', border: `60px solid rgba(244,180,0,0.10)`, pointerEvents: 'none' }} />
          </>
        )}

        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: 3, color: GL, textTransform: 'uppercase', marginBottom: 16 }}>Méthodologie</p>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: is.mobile ? 30 : 48, fontWeight: 700,
              color: '#fff', lineHeight: 1.2, marginBottom: 28,
            }}>
              Notre Approche
            </h2>
            <div style={{ width: 56, height: 4, background: Y, borderRadius: 2, margin: '0 auto 32px' }} />
            <p style={{ fontSize: is.mobile ? 15 : 19, color: 'rgba(255,255,255,0.82)', lineHeight: 1.8, fontWeight: 300 }}>
              Chaque projet bénéficie d'une approche intégrée : études préalables approfondies,
              conception paramétrique, simulation 3D avancée et suivi qualité exemplaire.
            </p>
          </motion.div>

          {/* Process steps */}
          <div style={{
            display: 'flex',
            flexDirection: is.mobile ? 'column' : 'row',
            alignItems: is.mobile ? 'flex-start' : 'center',
            justifyContent: 'center',
            gap: is.mobile ? 0 : 0,
            marginTop: 48,
          }}>
            {['Études & Diagnostic', 'Conception BIM', 'Construction', 'Réception & Suivi'].map((step, i, arr) => (
              <motion.div key={i} variants={fadeIn} custom={i * 0.1} initial="hidden" whileInView="visible" viewport={{ once: true }}
                style={{
                  display: 'flex',
                  flexDirection: is.mobile ? 'row' : 'column',
                  alignItems: 'center',
                  gap: is.mobile ? 16 : 0,
                  marginBottom: is.mobile ? 20 : 0,
                }}
              >
                {/* Connecteur vertical sur mobile */}
                {is.mobile && i > 0 && (
                  <div style={{
                    position: 'absolute',
                    display: 'none', // géré via gap
                  }} />
                )}

                <div style={{
                  display: 'flex',
                  flexDirection: is.mobile ? 'row' : 'column',
                  alignItems: 'center',
                  gap: is.mobile ? 16 : 0,
                }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: '50%', flexShrink: 0,
                    background: i === 0 ? Y : 'rgba(255,255,255,0.15)',
                    border: `2px solid ${i === 0 ? Y : 'rgba(255,255,255,0.3)'}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 18, fontWeight: 700,
                    color: i === 0 ? BK : '#fff',
                  }}>
                    {i + 1}
                  </div>

                  <div style={{
                    fontSize: 13, color: 'rgba(255,255,255,0.8)', fontWeight: 500,
                    maxWidth: is.mobile ? 200 : 90,
                    textAlign: is.mobile ? 'left' : 'center',
                    margin: is.mobile ? '0' : '12px 20px 0',
                  }}>
                    {step}
                  </div>
                </div>

                {/* Connecteur horizontal desktop */}
                {!is.mobile && i < arr.length - 1 && (
                  <div style={{ width: 40, height: 2, background: 'rgba(255,255,255,0.2)', flexShrink: 0, marginTop: -24 }} />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section style={{ padding: is.mobile ? '80px 20px' : '120px 40px', background: BK, position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url('/ouvrage-art-fond-pied-de-page.jpg.jpeg')`,
          backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.3)',
        }} />

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
              Votre ouvrage dart<br />mérite <span style={{ color: GL }}>l'excellence</span>
            </h2>

            <p style={{ fontSize: is.mobile ? 15 : 18, color: 'rgba(255,255,255,0.72)', lineHeight: 1.7, fontWeight: 300, marginBottom: 40 }}>
              Confiez-nous vos projets les plus ambitieux en génie civil et ouvrages dart.
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