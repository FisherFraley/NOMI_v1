'use client'

import { useRef } from 'react'

export default function DemoPage() {
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
    <div className="bg-cream min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h1
          className="text-6xl md:text-7xl lg:text-8xl font-headline font-bold uppercase mb-8"
          style={{ fontFamily: 'var(--font-bebas), sans-serif' }}
        >
          DEMO
        </h1>

        <p className="text-xl font-mono text-gray-700 mb-12">
          Watch how Nomi personalizes the shopping experience in real-time.
        </p>

        {/* Video player */}
        <div className="max-w-5xl mx-auto">
          <video
            ref={videoRef}
            className="w-full rounded-lg border border-gray-200 shadow-sm"
            controls
            preload="metadata"
            onPlay={handleVideoPlay}
            onEnded={handleVideoEnd}
          >
            <source src="/videos/demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <p className="text-sm font-mono text-gray-600 italic mt-4">
            &quot;The shopper shows interest in a gray sweatshirt.&quot;
          </p>
        </div>

        {/* CTA section */}
        <div className="max-w-5xl mx-auto mt-16 p-8 bg-dark text-white rounded-lg">
          <h2
            className="text-4xl md:text-5xl font-headline font-bold uppercase mb-4"
            style={{ fontFamily: 'var(--font-bebas), sans-serif' }}
          >
            READY TO GET STARTED?
          </h2>
          <p className="text-lg font-mono mb-6">
            Join our early access program and start personalizing your customer experience.
          </p>
          <a
            href="/early-access"
            className="inline-block px-8 py-3 bg-white text-dark font-medium uppercase tracking-wide hover:bg-gray-200 transition-colors"
          >
            Request Early Access →
          </a>
        </div>
      </div>
    </div>
  )
}
