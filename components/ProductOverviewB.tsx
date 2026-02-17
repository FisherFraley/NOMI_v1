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
    <section className="py-20 px-6" style={{ background: '#050505' }}>
      <div className="max-w-7xl mx-auto">
        {/* Glass panel wrapper */}
        <div
          className="glass-card-elevated p-8 md:p-12"
          style={{
            borderRadius: '24px',
            boxShadow: '0 0 0 1px rgba(255,255,255,0.02) inset, 0 32px 64px rgba(0,0,0,0.40), 0 0 80px rgba(99,102,241,0.06)',
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
                className="w-full rounded-xl"
                style={{
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.50)',
                }}
              />
            </div>

            {/* Right side: Text content */}
            <div className="order-1 md:order-2 space-y-6">
              <p className="text-lg md:text-xl leading-relaxed" style={{ color: 'rgba(248, 248, 248, 0.70)' }}>
                Nomi is a lightweight personalization layer for ecommerce retailers that gives new
                shoppers an instant &apos;For You&apos; experience.
              </p>

              <p className="text-lg md:text-xl leading-relaxed" style={{ color: 'rgba(248, 248, 248, 0.70)' }}>
                No account or login required.
              </p>

              <p className="text-lg md:text-xl leading-relaxed" style={{ color: 'rgba(248, 248, 248, 0.70)' }}>
                Help customers decide faster, feel confident, and complete their first purchase.
              </p>

              <Link
                href="/early-access"
                onClick={handleCTAClick}
                className="btn-gradient inline-block mt-4 px-7 py-3 rounded-lg text-sm font-medium uppercase tracking-wider"
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
