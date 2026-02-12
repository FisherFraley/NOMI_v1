'use client'

import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-cream border-b border-dark/10 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="text-3xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-bebas), sans-serif" }}
          >
            NOMI
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            <Link
              href="/early-access"
              className="text-sm font-medium uppercase tracking-wide hover:opacity-70 transition-opacity"
            >
              EARLY ACCESS
            </Link>
            <Link
              href="/demo"
              className="text-sm font-medium uppercase tracking-wide hover:opacity-70 transition-opacity"
            >
              DEMO
            </Link>
            <Link
              href="/early-access"
              className="px-6 py-2 border-2 border-dark text-sm font-medium uppercase tracking-wide hover:bg-dark hover:text-white transition-colors"
            >
              Request Early Access
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
