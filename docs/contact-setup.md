# Simple email-only contact setup

Visitors complete the form and stay on the website. The server sends their name, email, optional phone, website, inquiry type and message to prathutiwari22@gmail.com through Resend. Visitors see “Your inquiry has been submitted. Thank you for getting in touch.” Their email app never opens. You can reply directly to their address from your inbox.

There is no Firebase, Supabase or database to maintain. Your inbox holds the inquiry records. If the email provider rejects a submission or cannot confirm it, the form shows an error and keeps the entered details for retry. Success means the provider accepted the email; confirm actual inbox delivery during setup.

## One-time setup

1. Use a Resend account and verify a sender domain you own. The receiving inbox can remain your Gmail address.
2. Copy `.env.example` to `.env.local` if needed. Set `RESEND_API_KEY` and `CONTACT_FROM` (a sender on the verified domain). Keep the key private; never use a NEXT_PUBLIC prefix or paste it into chat.
3. Set `CONTACT_FORM_ENABLED=true`. Set `SITE_URL` to the exact site origin (for example, `http://127.0.0.1:3000` locally). Restart the development server. On Vercel, set the same environment variables for the intended deployment and redeploy.
4. Submit a test inquiry yourself and confirm it reaches your inbox with the correct Reply-To. Check spam too. Until this is configured, the form stays disabled and visitors can use WhatsApp or direct email.

WhatsApp opens a chat with +91 7355732435. The visitor must send the message; clicking alone does not share their details.

Validation, a honeypot, origin checks, timing checks and per-instance throttling are included. Add a hosting-platform rate limit before public launch. No real email delivery has been verified during implementation.

API reference: https://resend.com/docs/api-reference/emails/send-email
