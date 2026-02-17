'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function FooterB() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage('')

    if (typeof window !== 'undefined' && (window as any).posthog) {
      (window as any).posthog.capture('email_signup_submitted', {
        source: 'footer',
      })
    }

    try {
      const response = await fetch('/api/email-signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (response.ok) {
        setMessage("Thank you for joining! We'll be in touch soon.")
        setEmail('')
      } else {
        setMessage('Something went wrong. Please try again.')
      }
    } catch (error) {
      setMessage('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer
      className="py-20 px-6 relative overflow-hidden"
      style={{ background: '#111' }}
    >
      {/* Soft aurora glow at top */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: '200px',
          background: 'radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.12) 0%, rgba(139,92,246,0.06) 40%, transparent 70%)',
          zIndex: 0,
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top section: CTA */}
        <div className="mb-16">
          <h2
            className="text-[12vw] md:text-[10vw] lg:text-[8vw] font-bold leading-none mb-8"
            style={{
              fontFamily: 'var(--font-bebas), sans-serif',
              color: 'rgba(255,255,255,0.08)',
            }}
          >
            NOMI
          </h2>
          <h3
            className="text-4xl md:text-5xl font-bold uppercase mb-6"
            style={{
              fontFamily: 'var(--font-bebas), sans-serif',
              color: '#f8f8f8',
            }}
          >
            JOIN THE MOVEMENT
          </h3>
          <p className="text-lg mb-8" style={{ color: 'rgba(255, 255, 255, 0.55)' }}>
            Sign up with your email address to request early access.
          </p>

          {/* Glass email form */}
          <form onSubmit={handleSubmit} className="max-w-md">
            <div
              className="flex gap-1.5 p-1.5"
              style={{
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.10)',
                borderRadius: '100px',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
              }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-5 py-3 bg-transparent text-[15px] outline-none"
                style={{
                  color: '#f8f8f8',
                  border: 'none',
                }}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 text-[13px] font-medium uppercase tracking-wider whitespace-nowrap disabled:opacity-50 transition-all"
                style={{
                  color: '#111',
                  background: '#f8f8f8',
                  borderRadius: '100px',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#e0e0e0')}
                onMouseLeave={(e) => (e.currentTarget.style.background = '#f8f8f8')}
              >
                {isSubmitting ? 'Joining...' : 'Join the Movement'}
              </button>
            </div>
            {message && (
              <p className="mt-3 text-[13px]" style={{ color: 'rgba(255, 255, 255, 0.55)' }}>
                {message}
              </p>
            )}
          </form>

          <p className="text-[13px] mt-4" style={{ color: 'rgba(255, 255, 255, 0.25)' }}>
            We respect your privacy.
          </p>
        </div>

        {/* Divider */}
        <div
          style={{
            height: '1px',
            background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.08) 20%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0.08) 80%, transparent 100%)',
          }}
        />

        {/* Bottom section: Links */}
        <div className="grid md:grid-cols-2 gap-12 pt-12">
          <div>
            <h4
              className="text-[11px] font-semibold uppercase mb-4"
              style={{ letterSpacing: '0.12em', color: 'rgba(255, 255, 255, 0.30)' }}
            >
              SITEMAP
            </h4>
            <div className="space-y-2">
              <Link
                href="/demo"
                className="block text-sm transition-colors"
                style={{ color: 'rgba(255, 255, 255, 0.50)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.85)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.50)')}
              >
                DEMO
              </Link>
              <Link
                href="/early-access"
                className="block text-sm transition-colors"
                style={{ color: 'rgba(255, 255, 255, 0.50)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.85)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.50)')}
              >
                EARLY ACCESS
              </Link>
            </div>
          </div>

          <div>
            <h4
              className="text-[11px] font-semibold uppercase mb-4"
              style={{ letterSpacing: '0.12em', color: 'rgba(255, 255, 255, 0.30)' }}
            >
              FOLLOW
            </h4>
            <div className="space-y-2">
              {['INSTAGRAM', 'LINKEDIN', 'TWITTER'].map((social) => (
                <a
                  key={social}
                  href={`https://${social.toLowerCase()}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm transition-colors"
                  style={{ color: 'rgba(255, 255, 255, 0.50)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.85)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.50)')}
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
