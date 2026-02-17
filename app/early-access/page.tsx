'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function EarlyAccessPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Track form started on first input
    if (!formData.firstName && !formData.lastName && !formData.email && !formData.message) {
      if (typeof window !== 'undefined' && (window as any).posthog) {
        (window as any).posthog.capture('early_access_form_started', {
          field: name,
        })
      }
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    if (typeof window !== 'undefined' && (window as any).posthog) {
      (window as any).posthog.capture('early_access_form_submitted', {
        source: 'early_access_page',
      })
    }

    try {
      const response = await fetch('/api/early-access', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitMessage(
          'Thank you for your interest! We\'ll be in touch soon about early access.'
        )
        setFormData({ firstName: '', lastName: '', email: '', message: '' })
      } else {
        setSubmitMessage('Something went wrong. Please try again.')
      }
    } catch (error) {
      setSubmitMessage('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-dark text-white min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h1
          className="text-6xl md:text-7xl lg:text-8xl font-headline font-bold uppercase mb-12"
          style={{ fontFamily: "var(--font-bebas), sans-serif" }}
        >
          REQUEST EARLY ACCESS
        </h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left column: Description and Form */}
          <div>
            <p className="text-lg font-mono leading-relaxed mb-8 text-gray-300">
              Nomi helps ecommerce brands personalize product discovery in real time, even for
              first-time and anonymous shoppers. By learning from in-session behavior, Nomi surfaces
              more relevant products without logins, long-term profiles, or customer data platforms.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-mono mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white text-dark font-mono focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-mono mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white text-dark font-mono focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-mono mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white text-dark font-mono focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-mono mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white text-dark font-mono focus:outline-none focus:ring-2 focus:ring-white resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-white text-dark font-medium uppercase tracking-wide hover:bg-gray-200 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>

              {submitMessage && (
                <p className="text-sm font-mono text-gray-300 mt-4">{submitMessage}</p>
              )}
            </form>
          </div>

          {/* Right column: Mockup image */}
          <div className="flex items-start justify-center">
            <Image
              src="/images/laptop-mockup.png"
              alt="Nomi dashboard on a laptop in a retail setting"
              width={800}
              height={600}
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
