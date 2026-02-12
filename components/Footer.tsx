'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Footer() {
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
      // TODO: Implement actual email submission
      // For now, just simulate success
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setMessage('Thank you for joining! We\'ll be in touch soon.')
      setEmail('')
    } catch (error) {
      setMessage('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer className="bg-dark text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top section: CTA */}
        <div className="mb-16">
          <h2
            className="text-[12vw] md:text-[10vw] lg:text-[8vw] font-headline font-bold leading-none mb-8"
            style={{ fontFamily: "var(--font-bebas), sans-serif" }}
          >
            NOMI
          </h2>
          <h3
            className="text-4xl md:text-5xl font-headline font-bold uppercase mb-6"
            style={{ fontFamily: "var(--font-bebas), sans-serif" }}
          >
            JOIN THE MOVEMENT
          </h3>
          <p className="text-lg font-mono mb-8">
            Sign up with your email address to request early access.
          </p>

          {/* Email signup form */}
          <form onSubmit={handleSubmit} className="max-w-md">
            <div className="flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 bg-white text-dark font-mono focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-white text-dark font-medium uppercase tracking-wide hover:bg-gray-200 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? 'Joining...' : 'Join the Movement'}
              </button>
            </div>
            {message && (
              <p className="mt-3 text-sm font-mono text-gray-300">{message}</p>
            )}
          </form>

          <p className="text-sm font-mono text-gray-400 mt-4">We respect your privacy.</p>
        </div>

        {/* Bottom section: Links */}
        <div className="grid md:grid-cols-2 gap-12 pt-12 border-t border-gray-700">
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4">SITEMAP</h4>
            <div className="space-y-2">
              <Link
                href="/demo"
                className="block text-sm font-mono hover:underline transition-all"
              >
                DEMO
              </Link>
              <Link
                href="/early-access"
                className="block text-sm font-mono hover:underline transition-all"
              >
                EARLY ACCESS
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4">FOLLOW</h4>
            <div className="space-y-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm font-mono hover:underline transition-all"
              >
                INSTAGRAM
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm font-mono hover:underline transition-all"
              >
                LINKEDIN
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm font-mono hover:underline transition-all"
              >
                TWITTER
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
