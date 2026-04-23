// hooks/useBreakpoint.ts
'use client'

import { useState, useEffect } from 'react'

export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

const BREAKPOINTS = {
  xs: 0,
  sm: 480,
  md: 768,
  lg: 1024,
  xl: 1280,
}

export function useBreakpoint() {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const update = () => setWidth(window.innerWidth)
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const is = {
    xs:     width < BREAKPOINTS.sm,
    sm:     width >= BREAKPOINTS.sm,
    md:     width >= BREAKPOINTS.md,
    lg:     width >= BREAKPOINTS.lg,
    xl:     width >= BREAKPOINTS.xl,
    mobile: width < BREAKPOINTS.md,
    tablet: width >= BREAKPOINTS.md && width < BREAKPOINTS.lg,
    desktop:width >= BREAKPOINTS.lg,
  }

  return { width, is }
}