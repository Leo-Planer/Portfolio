import { NextRequest, NextResponse } from 'next/server';

// Rate limiting storage (in production, use Redis or similar)
const rateLimitMap = new Map<string, number[]>();

function checkRateLimit(ip: string, limit: number = 5, windowMs: number = 60000): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  const recentTimestamps = timestamps.filter((timestamp) => now - timestamp < windowMs);

  if (recentTimestamps.length >= limit) {
    return false;
  }

  recentTimestamps.push(now);
  rateLimitMap.set(ip, recentTimestamps);
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // Get IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || 'unknown';

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, message } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    if (name.length > 100 || email.length > 100 || message.length > 1000) {
      return NextResponse.json({ error: 'Input too long' }, { status: 400 });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    // TODO: Send email using your preferred service (Resend, SendGrid, etc.)
    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'contact@yourportfolio.com',
    //   to: 'your.email@example.com',
    //   subject: `Portfolio Contact: ${name}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${message}</p>
    //   `,
    // });

    // For now, just log the message (replace with actual email service)
    console.log('Contact form submission:', { name, email, message });

    return NextResponse.json({ message: 'Message sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
