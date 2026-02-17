'use client'

import Link from 'next/link'
import { useRef } from 'react'

export default function SeeHowItWorksB() {
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleVideoPlay = () => {
    if (typeof window !== 'undefined' && (window as any).posthog) {
      (window as any).posthog.capture('demo_video_played', {
        page: window.location.pathname,
      })
    }
  }

  const handleVideoEnd = () => {
    if (typeof window !== 'undefined' && (window as any).posthog) {
      (window as any).posthog.capture('demo_video_completed', {
        page: window.location.pathname,
      })
    }
  }

  return (
    <section className="py-20 px-6" style={{ background: '#F5F3F0' }}>
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h2
              className="text-5xl md:text-6xl lg:text-7xl font-bold uppercase mb-4"
              style={{
                fontFamily: 'var(--font-bebas), sans-serif',
                color: '#111',
              }}
            >
              SEE HOW IT WORKS
            </h2>
            <p className="text-xl" style={{ color: 'rgba(0, 0, 0, 0.50)' }}>
              A simple personalization layer embedded directly into your storefront.
            </p>
          </div>
          <Link
            href="/demo"
            className="ml-8 whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium transition-all"
            style={{
              color: 'rgba(0, 0, 0, 0.55)',
              border: '1px solid rgba(0, 0, 0, 0.12)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.30)'
              e.currentTarget.style.color = '#111'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.12)'
              e.currentTarget.style.color = 'rgba(0, 0, 0, 0.55)'
            }}
          >
            View our Demo!
          </Link>
        </div>

        {/* Video player with glass frame */}
        <div className="mt-12 relative">
          {/* Soft glow behind video */}
          <div
            className="absolute pointer-events-none"
            style={{
              inset: '-4px',
              background: 'linear-gradient(135deg, rgba(99,102,241,0.10) 0%, rgba(139,92,246,0.06) 100%)',
              borderRadius: '22px',
              filter: 'blur(12px)',
              zIndex: 0,
            }}
          />
          {/* Glass video wrapper */}
          <div
            className="relative z-10 p-1.5 overflow-hidden"
            style={{
              background: 'rgba(255, 255, 255, 0.65)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(0, 0, 0, 0.06)',
              borderRadius: '18px',
              boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
            }}
          >
            <video
              ref={videoRef}
              className="w-full block"
              style={{ borderRadius: '12px' }}
              controls
              preload="metadata"
              onPlay={handleVideoPlay}
              onEnded={handleVideoEnd}
            >
              <source src="/videos/demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  )
}
