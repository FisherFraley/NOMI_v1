'use client'

import Link from 'next/link'

export default function SeeHowItWorks() {
  const handleVideoPlay = () => {
    if (typeof window !== 'undefined' && (window as any).posthog) {
      (window as any).posthog.capture('demo_video_played', {
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
              style={{ fontFamily: "var(--font-bebas), sans-serif" }}
            >
              SEE HOW IT WORKS
            </h2>
            <p className="text-xl font-mono text-gray-700">
              A simple personalization layer embedded directly into your storefront.
            </p>
          </div>
          <Link
            href="/demo"
            className="text-lg font-mono underline hover:opacity-70 transition-opacity"
          >
            View our Demo!
          </Link>
        </div>

        {/* Video player placeholder */}
        <div className="mt-12">
          <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center relative overflow-hidden border border-gray-700">
            <button
              onClick={handleVideoPlay}
              className="absolute inset-0 flex items-center justify-center group cursor-pointer"
            >
              <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center group-hover:bg-white transition-colors">
                <svg
                  className="w-10 h-10 text-dark ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </button>
            <div className="text-center">
              <p className="text-gray-500 font-mono text-sm">NORTHWEAR Demo Video</p>
              <p className="text-gray-600 font-mono text-xs mt-2">Scene A / Scene B toggle</p>
              <p className="text-gray-600 font-mono text-xs">Duration: 0:34</p>
            </div>
          </div>
          <p className="text-sm font-mono text-gray-600 mt-3 italic">
            Caption: &quot;The shopper shows interest in a gray sweatshirt.&quot;
          </p>
          <p className="text-xs font-mono text-gray-500 mt-2">
            * Video placeholder - upload demo video to public/videos/ or embed from YouTube/Vimeo
          </p>
        </div>
      </div>
    </section>
  )
}
