// components/ui/ResponsiveStyles.ts
// Retourne des styles selon le breakpoint courant

interface ScreenInfo {
  isMobile:  boolean
  isTablet:  boolean
  isDesktop: boolean
}

export function rs(screen: ScreenInfo) {
  return {
    // Padding horizontal
    px: screen.isMobile ? 20 : screen.isTablet ? 32 : 40,

    // Padding de section
    section: {
      padding: screen.isMobile
        ? '60px 20px'
        : screen.isTablet
        ? '80px 32px'
        : '100px 40px',
    },

    // Max-width container
    container: {
      maxWidth: 1200,
      margin:   '0 auto',
      width:    '100%',
    },

    // Titre hero
    heroTitle: {
      fontSize: screen.isMobile ? 38 : screen.isTablet ? 56 : 'clamp(46px, 7.5vw, 88px)',
    },

    // Sous-titre hero
    heroSub: {
      fontSize: screen.isMobile ? 16 : 20,
    },

    // Grid auto-fit
    grid: (minWidth = 280) => ({
      display:             'grid' as const,
      gridTemplateColumns: screen.isMobile
        ? '1fr'
        : screen.isTablet
        ? `repeat(2, 1fr)`
        : `repeat(auto-fit, minmax(${minWidth}px, 1fr))`,
      gap: screen.isMobile ? 16 : 24,
    }),

    // Grid 2 colonnes
    grid2: {
      display:             'grid' as const,
      gridTemplateColumns: screen.isMobile ? '1fr' : '1fr 1fr',
      gap:                 screen.isMobile ? 40 : 80,
    },

    // Flex row → col sur mobile
    flexRow: {
      display:       'flex'  as const,
      flexDirection: (screen.isMobile ? 'column' : 'row') as 'column' | 'row',
      alignItems:    (screen.isMobile ? 'flex-start' : 'center') as 'flex-start' | 'center',
      gap:           screen.isMobile ? 20 : 48,
    },

    // Bouton CTA group
    ctaGroup: {
      display:        'flex' as const,
      flexDirection:  (screen.isMobile ? 'column' : 'row') as 'column' | 'row',
      gap:            screen.isMobile ? 12 : 16,
      width:          screen.isMobile ? '100%' : 'auto',
    },

    // Bouton plein width sur mobile
    btn: {
      width: screen.isMobile ? '100%' : 'auto',
      justifyContent: screen.isMobile ? 'center' : 'flex-start',
    },

    // Ticker bottom
    ticker: {
      display:    'flex' as const,
      alignItems: 'center' as const,
      gap:        screen.isMobile ? 20 : 48,
      overflowX:  'auto' as const,
      padding:    screen.isMobile ? '12px 20px' : '14px 40px',
      flexWrap:   (screen.isMobile ? 'nowrap' : 'nowrap') as 'nowrap',
    },

    // Projet card (liste)
    projectCard: {
      display:       'flex' as const,
      flexDirection: (screen.isMobile ? 'column' : 'row') as 'column' | 'row',
      alignItems:    (screen.isMobile ? 'flex-start' : 'center') as 'flex-start' | 'center',
      gap:           screen.isMobile ? 16 : 48,
      padding:       screen.isMobile ? '24px 20px' : '40px 48px',
    },

    // Numéro de projet
    projectNum: {
      display:  screen.isMobile ? 'none' : 'block',
    },

    // Valeur projet
    projectValue: {
      textAlign: (screen.isMobile ? 'left' : 'right') as 'left' | 'right',
      flexShrink: 0,
    },

    // Section title
    sectionTitle: {
      fontSize: screen.isMobile ? 32 : screen.isTablet ? 40 : 48,
    },

    // Stat value
    statValue: {
      fontSize: screen.isMobile ? 40 : 52,
    },

    // Hero padding
    heroPadding: {
      padding: screen.isMobile ? '120px 20px 100px' : '0 40px',
    },
  }
}