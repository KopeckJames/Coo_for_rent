import { NextRequest, NextResponse } from 'next/server';
import { ContactFormData } from '@/types';

// Validation helper
function validateContactFormData(data: any): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!data.name || typeof data.name !== 'string') {
    errors.push('Name is required');
  } else if (data.name.trim().length < 2) {
    errors.push('Name must be at least 2 characters');
  }

  if (!data.email || typeof data.email !== 'string') {
    errors.push('Email is required');
  } else {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(data.email)) {
      errors.push('Invalid email address');
    }
  }

  if (!data.message || typeof data.message !== 'string') {
    errors.push('Message is required');
  } else if (data.message.trim().length < 10) {
    errors.push('Message must be at least 10 characters');
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

// Email sending helper using Resend
async function sendEmail(data: ContactFormData): Promise<void> {
  const resendApiKey = process.env.RESEND_API_KEY;
  
  if (!resendApiKey) {
    console.error('RESEND_API_KEY is not configured');
    throw new Error('Email service is not configured');
  }

  const emailPayload = {
    from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
    to: process.env.CONTACT_EMAIL || 'contact@cooforrent.com',
    subject: `New Contact Form Submission from ${data.name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Message:</strong></p>
      <p>${data.message.replace(/\n/g, '<br>')}</p>
      <hr>
      <p><small>Submitted at: ${new Date().toISOString()}</small></p>
    `,
    text: `
New Contact Form Submission

Name: ${data.name}
Email: ${data.email}

Message:
${data.message}

Submitted at: ${new Date().toISOString()}
    `,
  };

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${resendApiKey}`,
    },
    body: JSON.stringify(emailPayload),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    console.error('Resend API error:', errorData);
    throw new Error('Failed to send email');
  }
}

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();

    // Validate input
    const validation = validateContactFormData(body);
    if (!validation.valid) {
      return NextResponse.json(
        {
          success: false,
          error: 'Validation failed',
          details: validation.errors,
        },
        { status: 400 }
      );
    }

    // Prepare contact form data
    const contactData: ContactFormData = {
      name: body.name.trim(),
      email: body.email.trim().toLowerCase(),
      message: body.message.trim(),
      timestamp: new Date(),
    };

    // Send email
    await sendEmail(contactData);

    // Log successful submission
    console.log('Contact form submission received:', {
      name: contactData.name,
      email: contactData.email,
      timestamp: contactData.timestamp,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Your message has been sent successfully',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form submission error:', error);

    return NextResponse.json(
      {
        success: false,
        error: 'Failed to send message. Please try again later.',
      },
      { status: 500 }
    );
  }
}
