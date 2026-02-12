import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const TO_EMAIL = process.env.NOTIFICATION_EMAIL!

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = body

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    await resend.emails.send({
      from: 'Nomi <onboarding@resend.dev>',
      to: TO_EMAIL,
      subject: `New Email Signup: ${email}`,
      html: `
        <div style="font-family: monospace; max-width: 600px; margin: 0 auto; padding: 24px;">
          <h2 style="font-size: 24px; font-weight: bold; margin-bottom: 16px;">New Footer Signup</h2>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Email Signup API Error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
