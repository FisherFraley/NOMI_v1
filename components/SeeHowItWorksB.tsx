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
    <section
      className="py-20 px-6"
      style={{
        background: '#050505',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h2
              className="text-5xl md:text-6xl lg:text-7xl font-bold uppercase mb-4"
              style={{
                fontFamily: 'var(--font-bebas), sans-serif',
                color: '#f8f8f8',
              }}
            >
              SEE HOW IT WORKS
            </h2>
            <p className="text-xl" style={{ color: 'rgba(248, 248, 248, 0.55)' }}>
              A simple personalization layer embedded directly into your storefront.
            </p>
          </div>
          <Link
            href="/demo"
            className="ml-8 whitespace-nowrap px-5 py-2.5 rounded-lg text-sm font-medium transition-all"
            style={{
              color: 'rgba(248, 248, 248, 0.65)',
              border: '1px solid rgba(255, 255, 255, 0.14)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.50)'
              e.currentTarget.style.color = '#f8f8f8'
              e.currentTarget.style.boxShadow = '0 0 16px rgba(99,102,241,0.15)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.14)'
              e.currentTarget.style.color = 'rgba(248, 248, 248, 0.65)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            View our Demo!
          </Link>
        </div>

        {/* Video player with glass frame */}
        <div className="mt-12 relative">
          {/* Glow layer behind video */}
          <div
            className="absolute pointer-events-none"
            style={{
              inset: '-2px',
              background: 'linear-gradient(135deg, rgba(99,102,241,0.25) 0%, rgba(139,92,246,0.15) 100%)',
              borderRadius: '20px',
              filter: 'blur(16px)',
              zIndex: 0,
            }}
          />
          {/* Glass video wrapper */}
          <div
            className="relative z-10 p-1 glass-card-elevated overflow-hidden"
            style={{ borderRadius: '16px' }}
          >
            <video
              ref={videoRef}
              className="w-full block rounded-xl"
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
