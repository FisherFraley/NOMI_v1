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
      style={{ background: '#050505' }}
    >
      {/* Primary glow orb */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '900px',
          height: '700px',
          background: 'radial-gradient(ellipse at center, rgba(99,102,241,0.22) 0%, rgba(139,92,246,0.10) 35%, transparent 70%)',
          filter: 'blur(2px)',
          zIndex: 0,
        }}
      />
      {/* Secondary glow orb */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '-10%',
          right: '-5%',
          width: '500px',
          height: '400px',
          background: 'radial-gradient(ellipse at center, rgba(139,92,246,0.12) 0%, transparent 65%)',
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
            color: '#f8f8f8',
            textShadow: '0 0 120px rgba(99,102,241,0.30), 0 0 40px rgba(99,102,241,0.15)',
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
              color: '#f8f8f8',
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
