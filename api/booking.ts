import type { VercelRequest, VercelResponse } from '@vercel/node';

const OWNER_EMAIL = process.env.ROAMLY_OWNER_EMAIL || 'jabhiram028@gmail.com';
const FROM_EMAIL = process.env.ROAMLY_FROM_EMAIL || 'Roamly <onboarding@resend.dev>';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, message: 'Method not allowed' });
  }

  const {
    tripTitle,
    startDate,
    guestsCount,
    totalPrice,
    contactName,
    contactEmail,
    contactPhone,
    specialRequests
  } = req.body || {};

  if (!tripTitle || !startDate || !contactName || !contactEmail) {
    return res.status(400).json({ ok: false, message: 'Missing required booking details.' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return res.status(503).json({
      ok: false,
      message: 'Booking email service is not configured yet. Please add RESEND_API_KEY in Vercel.'
    });
  }

  const html = `
    <h2>New Roamly Booking Request</h2>
    <p><strong>Trip:</strong> ${escapeHtml(tripTitle)}</p>
    <p><strong>Departure:</strong> ${escapeHtml(startDate)}</p>
    <p><strong>Guests:</strong> ${Number(guestsCount) || 1}</p>
    <p><strong>Estimated total:</strong> ₹${Number(totalPrice || 0).toLocaleString('en-IN')}</p>
    <hr />
    <p><strong>Name:</strong> ${escapeHtml(contactName)}</p>
    <p><strong>Email:</strong> ${escapeHtml(contactEmail)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(contactPhone || 'Not provided')}</p>
    <p><strong>Special requests:</strong> ${escapeHtml(specialRequests || 'None')}</p>
  `;

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to: [OWNER_EMAIL],
      reply_to: contactEmail,
      subject: `New Roamly booking — ${tripTitle}`,
      html
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('Resend booking error:', errorText);
    return res.status(502).json({ ok: false, message: 'Unable to send the booking email right now.' });
  }

  return res.status(200).json({ ok: true });
}

function escapeHtml(value: string) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}
