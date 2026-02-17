'use client'

import Link from 'next/link'

export default function NavbarB() {
  return (
    <nav
      className="sticky top-0 z-50"
      style={{
        background: 'rgba(250, 250, 250, 0.72)',
        backdropFilter: 'blur(20px) saturate(160%)',
        WebkitBackdropFilter: 'blur(20px) saturate(160%)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
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
              color: '#111',
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
              style={{ color: 'rgba(0, 0, 0, 0.50)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(0, 0, 0, 0.85)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(0, 0, 0, 0.50)')}
            >
              EARLY ACCESS
            </Link>
            <Link
              href="/demo"
              className="text-[13px] font-medium uppercase tracking-wider transition-colors"
              style={{ color: 'rgba(0, 0, 0, 0.50)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(0, 0, 0, 0.85)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(0, 0, 0, 0.50)')}
            >
              DEMO
            </Link>
            <Link
              href="/early-access"
              className="px-[18px] py-2 text-[13px] font-medium uppercase tracking-wider rounded-full transition-all"
              style={{
                color: '#fff',
                background: '#111',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#333'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#111'
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
