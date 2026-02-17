'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function WhatNomiDoesB() {
  const handleCTAClick = () => {
    if (typeof window !== 'undefined' && (window as any).posthog) {
      (window as any).posthog.capture('cta_clicked', {
        button: 'join_pilot',
        page: window.location.pathname,
      })
    }
  }

  return (
    <section
      className="py-20 px-6"
      style={{
        background: 'linear-gradient(180deg, #050505 0%, #080810 50%, #050505 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section title with accent bar */}
        <div className="flex items-center gap-4 mb-16">
          <div
            className="flex-shrink-0"
            style={{
              width: '4px',
              height: '56px',
              background: 'linear-gradient(180deg, #6366f1, #8b5cf6)',
              borderRadius: '2px',
            }}
          />
          <h2
            className="text-5xl md:text-6xl lg:text-7xl font-bold uppercase"
            style={{
              fontFamily: 'var(--font-bebas), sans-serif',
              color: '#f8f8f8',
            }}
          >
            WHAT NOMI DOES
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left column: Text content in glass card */}
          <div className="glass-card p-10 space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#f8f8f8' }}>
                First-time shoppers don&apos;t convert.
              </h3>
              <p className="text-[15px] leading-7" style={{ color: 'rgba(248, 248, 248, 0.55)' }}>
                New visitors arrive with no context, too many choices, and little guidance — leading
                to hesitation, decision fatigue, and abandoned carts.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#f8f8f8' }}>
                Nomi personalizes the first visit.
              </h3>
              <p className="text-[15px] leading-7" style={{ color: 'rgba(248, 248, 248, 0.55)' }}>
                We surface relevant products and collections immediately, helping new shoppers find
                what fits them — before they leave.
              </p>
            </div>

            {/* Bullet points */}
            <ul className="space-y-3">
              {['No login required', 'Accurate recommendations based on multiple shopping experiences', 'Designed for first impressions'].map(
                (item, i) => (
                  <li key={i} className="flex items-start">
                    <span
                      className="flex-shrink-0 mt-[9px] mr-3"
                      style={{
                        width: '6px',
                        height: '6px',
                        background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                        borderRadius: '1px',
                        display: 'inline-block',
                      }}
                    />
                    <span className="text-[15px]" style={{ color: 'rgba(248, 248, 248, 0.65)' }}>
                      {item}
                    </span>
                  </li>
                )
              )}
            </ul>

            <Link
              href="/early-access"
              onClick={handleCTAClick}
              className="btn-gradient inline-block mt-6 px-7 py-3 rounded-lg text-sm font-medium uppercase tracking-wider"
            >
              Join our pilot program →
            </Link>
          </div>

          {/* Right column: Mockup image */}
          <div className="flex items-start">
            <div
              className="w-full overflow-hidden rounded-2xl"
              style={{
                border: '1px solid rgba(255, 255, 255, 0.10)',
                boxShadow: '0 8px 40px rgba(0,0,0,0.50)',
              }}
            >
              <Image
                src="/images/maison-elise.jpg"
                alt="MAISON ÉLISE storefront with Nomi's For You personalization carousel"
                width={800}
                height={600}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
