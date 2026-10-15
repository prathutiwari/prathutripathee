# Deployment handover

The Next.js portfolio replaces Angular in the same repository and Vercel project.
The old main commit is preserved on angular-backup-2026-10-15.
Review nextjs-portfolio before merging to main; main remains the production branch.

## Environment settings
In Vercel, add these for Production before launching:
- SITE_URL=https://prathutripathee.vercel.app
- SITE_INDEXABLE=true
- CONTACT_FORM_ENABLED=true
- RESEND_API_KEY: enter your real key privately in Vercel
- CONTACT_FROM: a sender approved by Resend (a Gmail address is not a verified sending domain)

For Preview, keep SITE_INDEXABLE=false and CONTACT_FORM_ENABLED=false until testing delivery.
Do not copy the production SITE_URL into Preview: the contact endpoint checks the request origin.
For an enabled preview form, use its exact preview URL as SITE_URL, or leave SITE_URL unset.

The form sends inquiries to prathutiwari22@gmail.com; there is no database.
The form shows success only after Resend accepts the email. An inbox delivery test is still required.
Never commit .env.local or API keys.

## Validation
npm ci
npm run lint
node tests/contact.cjs
npm run build

The contact checks mock the email service; they do not send an actual email.
Legacy portfolio, resume and blog paths redirect to the new pages.
vercel.json specifies Next.js, npm build and .next output for this branch.

## Rollback
Use Vercel rollback to the previous ready production deployment if necessary.
The Angular backup branch also preserves the original source.
