'use client'

import Link from 'next/link'

export default function NavbarB() {
  return (
    <nav
      className="sticky top-0 z-50"
      style={{
        background: 'rgba(5, 5, 5, 0.72)',
        backdropFilter: 'blur(20px) saturate(160%)',
        WebkitBackdropFilter: 'blur(20px) saturate(160%)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.07)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="text-3xl font-bold"
            style={{
              fontFamily: 'var(--font-bebas), sans-serif',
              color: '#f8f8f8',
              letterSpacing: '0.08em',
            }}
          >
            NOMI
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            <Link
              href="/early-access"
              className="text-[13px] font-medium uppercase tracking-wider transition-colors"
              style={{ color: 'rgba(248, 248, 248, 0.60)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(248, 248, 248, 0.95)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(248, 248, 248, 0.60)')}
            >
              EARLY ACCESS
            </Link>
            <Link
              href="/demo"
              className="text-[13px] font-medium uppercase tracking-wider transition-colors"
              style={{ color: 'rgba(248, 248, 248, 0.60)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(248, 248, 248, 0.95)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(248, 248, 248, 0.60)')}
            >
              DEMO
            </Link>
            <Link
              href="/early-access"
              className="px-[18px] py-2 text-[13px] font-medium uppercase tracking-wider rounded-md transition-all"
              style={{
                color: '#f8f8f8',
                border: '1px solid rgba(99, 102, 241, 0.60)',
                boxShadow: '0 0 12px rgba(99,102,241,0.15)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 20px rgba(99,102,241,0.35)'
                e.currentTarget.style.background = 'rgba(99, 102, 241, 0.10)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 0 12px rgba(99,102,241,0.15)'
                e.currentTarget.style.background = 'transparent'
              }}
            >
              Request Early Access
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
