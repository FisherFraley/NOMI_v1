'use client'

import { useEffect } from 'react'

export default function HeroSection() {
  useEffect(() => {
    // Track hero viewed for analytics
    if (typeof window !== 'undefined' && (window as any).posthog) {
      (window as any).posthog.capture('hero_viewed', { page: 'home' })
    }
  }, [])

  return (
    <section className="bg-cream min-h-[90vh] flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl w-full">
        {/* Giant NOMI text */}
        <h1
          className="text-[20vw] md:text-[18vw] lg:text-[16vw] font-headline font-bold leading-none tracking-wider mb-12"
          style={{ fontFamily: "var(--font-bebas), sans-serif" }}
        >
          NOMI
        </h1>

        {/* Bold uppercase value propositions */}
        <div className="space-y-4 max-w-4xl">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold uppercase leading-tight"
            style={{ fontFamily: "var(--font-bebas), sans-serif" }}
          >
            INCREASE FIRST-VISIT CONVERSION.
          </h2>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold uppercase leading-tight"
            style={{ fontFamily: "var(--font-bebas), sans-serif" }}
          >
            REDUCE ABANDONED CARTS.
          </h2>
        </div>
      </div>
    </section>
  )
}
