import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, message } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Log the submission (in production, you would:
    // 1. Send email via Resend
    // 2. Store in a database
    // 3. Send to a CRM
    // 4. Trigger PostHog server-side event
    console.log('Early Access Form Submission:', {
      firstName,
      lastName,
      email,
      message,
      timestamp: new Date().toISOString(),
    })

    // TODO: Implement Resend email sending
    // Example:
    // import { Resend } from 'resend'
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'nomi@yourdomain.com',
    //   to: 'team@yourdomain.com',
    //   subject: `Early Access Request from ${firstName} ${lastName}`,
    //   html: `
    //     <h2>New Early Access Request</h2>
    //     <p><strong>Name:</strong> ${firstName} ${lastName}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${message}</p>
    //   `,
    // })

    // For now, just return success
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
