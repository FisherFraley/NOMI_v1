'use client'

import { useEffect } from 'react'

export default function HeroSectionB() {
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).posthog) {
      (window as any).posthog.capture('hero_viewed', { page: 'home' })
    }
  }, [])

  return (
    <section
      className="min-h-[90vh] flex items-center justify-center px-6 py-20 relative overflow-hidden"
      style={{ background: '#FAFAFA' }}
    >
      {/* Soft gradient orbs */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-15%',
          left: '30%',
          width: '800px',
          height: '600px',
          background: 'radial-gradient(ellipse at center, rgba(139,92,246,0.08) 0%, rgba(99,102,241,0.04) 40%, transparent 70%)',
          zIndex: 0,
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '-10%',
          right: '10%',
          width: '600px',
          height: '500px',
          background: 'radial-gradient(ellipse at center, rgba(99,102,241,0.06) 0%, transparent 60%)',
          zIndex: 0,
        }}
      />

      {/* Content */}
      <div className="max-w-7xl w-full relative z-10">
        {/* Giant NOMI text */}
        <h1
          className="text-[20vw] md:text-[18vw] lg:text-[16vw] font-bold leading-none tracking-wider mb-12"
          style={{
            fontFamily: 'var(--font-bebas), sans-serif',
            color: '#111',
          }}
        >
          NOMI
        </h1>

        {/* Bold uppercase value propositions */}
        <div className="space-y-4 max-w-4xl">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-tight"
            style={{
              fontFamily: 'var(--font-bebas), sans-serif',
              color: '#111',
            }}
          >
            INCREASE FIRST-VISIT CONVERSION.
          </h2>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-tight text-gradient-accent"
            style={{
              fontFamily: 'var(--font-bebas), sans-serif',
            }}
          >
            REDUCE ABANDONED CARTS.
          </h2>
        </div>
      </div>
    </section>
  )
}
