'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function WhatNomiDoes() {
  const handleCTAClick = () => {
    if (typeof window !== 'undefined' && (window as any).posthog) {
      (window as any).posthog.capture('cta_clicked', {
        button: 'join_pilot',
        page: window.location.pathname,
      })
    }
  }

  return (
    <section className="bg-cream py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section title */}
        <h2
          className="text-5xl md:text-6xl lg:text-7xl font-headline font-bold uppercase mb-16"
          style={{ fontFamily: "var(--font-bebas), sans-serif" }}
        >
          WHAT NOMI DOES
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left column: Text content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-3">First-time shoppers don&apos;t convert.</h3>
              <p className="font-mono text-base leading-relaxed text-gray-700">
                New visitors arrive with no context, too many choices, and little guidance — leading
                to hesitation, decision fatigue, and abandoned carts.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">Nomi personalizes the first visit.</h3>
              <p className="font-mono text-base leading-relaxed text-gray-700">
                We surface relevant products and collections immediately, helping new shoppers find
                what fits them — before they leave.
              </p>
            </div>

            {/* Bullet points */}
            <ul className="space-y-3 font-mono">
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>No login required</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Accurate recommendations based on multiple shopping experiences</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Designed for first impressions</span>
              </li>
            </ul>

            <Link
              href="/early-access"
              onClick={handleCTAClick}
              className="inline-block mt-6 px-8 py-3 bg-dark text-white font-medium uppercase tracking-wide hover:bg-gray-800 transition-colors"
            >
              Join our pilot program →
            </Link>
          </div>

          {/* Right column: Mockup image */}
          <div className="flex items-start">
            <Image
              src="/images/maison-elise.jpg"
              alt="MAISON ÉLISE storefront with Nomi's For You personalization carousel"
              width={800}
              height={600}
              className="w-full rounded-lg border border-gray-200 shadow-sm"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
