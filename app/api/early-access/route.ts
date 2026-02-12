import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const TO_EMAIL = process.env.NOTIFICATION_EMAIL!

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, message } = body

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    const { data, error } = await resend.emails.send({
      from: 'Nomi <onboarding@resend.dev>',
      to: TO_EMAIL,
      subject: `Early Access Request from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: monospace; max-width: 600px; margin: 0 auto; padding: 24px;">
          <h2 style="font-size: 24px; font-weight: bold; margin-bottom: 24px;">New Early Access Request</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 120px;">Name</td>
              <td style="padding: 8px 0;">${firstName} ${lastName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Message</td>
              <td style="padding: 8px 0;">${message}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Submitted</td>
              <td style="padding: 8px 0;">${new Date().toLocaleString()}</td>
            </tr>
          </table>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    console.log('Email sent successfully:', data)
    return NextResponse.json(
      { success: true, message: 'Form submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Early Access API Error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
