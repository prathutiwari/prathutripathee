# Prathu Portfolio

A separate Next.js portfolio with the approved dark charcoal and gold design, local Manrope typography and original project imagery.

Run `npm ci`, then `npm run dev`. Validate with `npm run build` and `node tests/contact.cjs`. Node 22.13+ is recommended.

Implemented routes: `/`, `/about`, `/skills`, `/work`, `/work/[slug]` for all nine approved projects, `/insights`, `/products`, `/shopify/for-agencies`, `/contact`, and `/api/contact`.

- Background and skills: `src/content/background.ts`; project descriptions: `src/content/work.ts`; profile and products: `src/content/site.ts`.
- Recent experience follows the supplied resume: Photon from July 2025; ZiggleTech February 2022–June 2025. Earlier internships remain in a compact disclosure without invented dates. Degree grades and conflicting university spelling are omitted.
- The unchanged resume is downloadable from `public/resume/`. Social icons have accessible names and use the approved resume LinkedIn URL.
- Project filters and detail pages work locally. Images show historical work, not claims about current client sites. No fabricated outcomes or testimonials are included.
- Products link to the supplied Gumroad destinations. Actual product screenshots and demo assets are still needed for deeper product detail pages.
- Contact uses Resend to send inquiries directly to your inbox, with an on-page confirmation for visitors. No database is required. Sending stays disabled until email configuration is supplied. WhatsApp links open a separate chat. Follow [contact setup](docs/contact-setup.md); actual inbox delivery has not been tested.
- Agency outreach can use `/shopify/for-agencies` with a relevant project link. Its inquiry CTA selects Agency partnership on the contact form. No outreach messages were sent.
- Preview indexing stays disabled. Configure `SITE_URL` and `SITE_INDEXABLE=true` only for an approved public launch.
- The existing Angular production site remains separate. No deployment or domain cutover is configured.

Further service pages and product demos should be added with complete content and real assets. Source audit history is in [implementation notes](docs/implementation-notes.md).



