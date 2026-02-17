'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function ProductOverviewB() {
  const handleCTAClick = () => {
    if (typeof window !== 'undefined' && (window as any).posthog) {
      (window as any).posthog.capture('cta_clicked', {
        button: 'request_early_access_product_overview',
        page: window.location.pathname,
      })
    }
  }

  return (
    <section className="py-20 px-6" style={{ background: '#F5F3F0' }}>
      <div className="max-w-7xl mx-auto">
        {/* Glass panel wrapper */}
        <div
          className="p-8 md:p-12"
          style={{
            background: 'rgba(255, 255, 255, 0.60)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(0, 0, 0, 0.06)',
            borderRadius: '24px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 20px 60px rgba(0,0,0,0.04)',
          }}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side: Laptop mockup */}
            <div className="order-2 md:order-1">
              <Image
                src="/images/laptop-mockup.png"
                alt="Nomi dashboard on a laptop in a retail setting"
                width={800}
                height={600}
                className="w-full"
                style={{
                  borderRadius: '12px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.10)',
                }}
              />
            </div>

            {/* Right side: Text content */}
            <div className="order-1 md:order-2 space-y-6">
              <p className="text-lg md:text-xl leading-relaxed" style={{ color: 'rgba(0, 0, 0, 0.65)' }}>
                Nomi is a lightweight personalization layer for ecommerce retailers that gives new
                shoppers an instant &apos;For You&apos; experience.
              </p>

              <p className="text-lg md:text-xl leading-relaxed" style={{ color: 'rgba(0, 0, 0, 0.65)' }}>
                No account or login required.
              </p>

              <p className="text-lg md:text-xl leading-relaxed" style={{ color: 'rgba(0, 0, 0, 0.65)' }}>
                Help customers decide faster, feel confident, and complete their first purchase.
              </p>

              <Link
                href="/early-access"
                onClick={handleCTAClick}
                className="inline-block mt-4 px-7 py-3 rounded-full text-sm font-medium uppercase tracking-wider transition-all"
                style={{
                  color: '#fff',
                  background: '#111',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#333')}
                onMouseLeave={(e) => (e.currentTarget.style.background = '#111')}
              >
                Request Early Access →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
