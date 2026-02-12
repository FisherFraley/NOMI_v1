'use client'

import Link from 'next/link'
import { useRef } from 'react'

export default function SeeHowItWorks() {
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
    <section className="bg-cream py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h2
              className="text-5xl md:text-6xl lg:text-7xl font-headline font-bold uppercase mb-4"
              style={{ fontFamily: 'var(--font-bebas), sans-serif' }}
            >
              SEE HOW IT WORKS
            </h2>
            <p className="text-xl font-mono text-gray-700">
              A simple personalization layer embedded directly into your storefront.
            </p>
          </div>
          <Link
            href="/demo"
            className="text-lg font-mono underline hover:opacity-70 transition-opacity whitespace-nowrap ml-8"
          >
            View our Demo!
          </Link>
        </div>

        {/* Video player */}
        <div className="mt-12">
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
          <p className="text-sm font-mono text-gray-600 mt-3 italic">
            &quot;The shopper shows interest in a gray sweatshirt.&quot;
          </p>
        </div>
      </div>
    </section>
  )
}
