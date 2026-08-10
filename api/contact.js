export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, message, type } = req.body || {};

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    // Process contact form or hero lead capture
    console.log(`[Contact Form Submission] Type: ${type || 'general'}, Name: ${name || 'N/A'}, Email: ${email}, Message: ${message || 'N/A'}`);

    // If Formspree ID or Resend API key exists in env, send email
    const formspreeEndpoint = process.env.FORMSPREE_ENDPOINT;
    if (formspreeEndpoint) {
      const fsRes = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      });
      if (!fsRes.ok) {
        return res.status(500).json({ error: 'Failed to deliver message via Formspree' });
      }
    }

    return res.status(200).json({ success: true, message: 'Message received successfully!' });
  } catch (error) {
    return res.status(500).json({ error: error.message || 'Internal server error' });
  }
}
