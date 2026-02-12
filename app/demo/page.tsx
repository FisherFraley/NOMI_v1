'use client'

export default function DemoPage() {
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
          style={{ fontFamily: "var(--font-bebas), sans-serif" }}
        >
          DEMO
        </h1>

        <p className="text-xl font-mono text-gray-700 mb-12">
          Watch how Nomi personalizes the shopping experience in real-time.
        </p>

        {/* Video player */}
        <div className="max-w-5xl mx-auto">
          <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center relative overflow-hidden border border-gray-700">
            <button
              onClick={handleVideoPlay}
              className="absolute inset-0 flex items-center justify-center group cursor-pointer"
            >
              <div className="w-24 h-24 rounded-full bg-white/90 flex items-center justify-center group-hover:bg-white transition-colors">
                <svg
                  className="w-12 h-12 text-dark ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </button>
            <div className="text-center text-white">
              <p className="text-gray-400 font-mono text-lg mb-2">NORTHWEAR Demo</p>
              <p className="text-gray-500 font-mono text-sm">Scene A / Scene B Toggle</p>
              <p className="text-gray-500 font-mono text-sm mt-4">Duration: 0:34</p>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            <p className="text-sm font-mono text-gray-600">
              <strong>Demo Overview:</strong> This video demonstrates how Nomi tracks shopper
              interest and personalizes product recommendations in real-time.
            </p>
            <p className="text-sm font-mono text-gray-600 italic">
              &quot;The shopper shows interest in a gray sweatshirt.&quot;
            </p>
            <p className="text-xs font-mono text-gray-500 mt-4">
              * Upload your demo video to public/videos/ or embed from YouTube/Vimeo
            </p>
          </div>
        </div>

        {/* CTA section */}
        <div className="max-w-5xl mx-auto mt-16 p-8 bg-dark text-white rounded-lg">
          <h2
            className="text-4xl md:text-5xl font-headline font-bold uppercase mb-4"
            style={{ fontFamily: "var(--font-bebas), sans-serif" }}
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
