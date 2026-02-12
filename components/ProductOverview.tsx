'use client'

import Link from 'next/link'

export default function ProductOverview() {
  const handleCTAClick = () => {
    if (typeof window !== 'undefined' && (window as any).posthog) {
      (window as any).posthog.capture('cta_clicked', {
        button: 'request_early_access_product_overview',
        page: window.location.pathname,
      })
    }
  }

  return (
    <section className="bg-dark text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side: Laptop mockup placeholder */}
          <div className="order-2 md:order-1">
            <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center border border-gray-700">
              <div className="text-center">
                <p className="text-gray-500 font-mono text-sm">Laptop Mockup</p>
                <p className="text-gray-600 font-mono text-xs mt-2">
                  (Nomi dashboard overlay on retail store)
                </p>
              </div>
            </div>
          </div>

          {/* Right side: Text content */}
          <div className="order-1 md:order-2 space-y-6">
            <p className="text-lg md:text-xl font-mono leading-relaxed">
              Nomi is a lightweight personalization layer for ecommerce retailers that gives new
              shoppers an instant &apos;For You&apos; experience.
            </p>

            <p className="text-lg md:text-xl font-mono leading-relaxed">
              No account or login required.
            </p>

            <p className="text-lg md:text-xl font-mono leading-relaxed">
              Help customers decide faster, feel confident, and complete their first purchase.
            </p>

            <Link
              href="/early-access"
              onClick={handleCTAClick}
              className="inline-block mt-4 px-8 py-3 bg-white text-dark font-medium uppercase tracking-wide hover:bg-gray-100 transition-colors"
            >
              Request Early Access →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
