# Portfolio rebuild — first implementation slice

Reviewed 13 October 2026. Existing Angular repository and deployment are unchanged.

## Source of truth

- [Master strategy](https://app.notion.com/p/3f805cea0e1981afb900fdf4cb90e1ca)
- [Architecture and UI](https://app.notion.com/p/3f805cea0e1981ea88a6fcdcfc005029)
- [Services and products](https://app.notion.com/p/3f805cea0e19819e80a8f19e1500112b)
- [Social content](https://app.notion.com/p/3f805cea0e1981808a5ad6fce97a91c8)
- [Agency partnerships](https://app.notion.com/p/3f805cea0e19817eb326fab282e318e2)

## Implementation boundary

First slice: a separate `prathu-portfolio` Next.js App Router project, TypeScript, Tailwind, typed content, design tokens, responsive navigation and homepage. Follow with `/shopify`, `/products` and a validated `/contact` form with real delivery. Do not manufacture unfinished routes. Homepage anchors are intentional until dedicated pages are ready.

Recommend a new GitHub repository `prathu-portfolio`, separate from the Angular repository, and a separate Vercel project for preview. Do not connect or replace the existing production deployment during this slice. No CMS, database, authentication, animation library or component framework.

## Design decision

Considered two directions:

1. Warm editorial: paper background, dark ink, forest green accent, large expressive typography and generous space around authentic screenshots. Selected for first preview.
2. Midnight studio: deep navy, off-white type and pale green accents. Viable, but less aligned with the product and work-led light composition selected here.

Use asymmetrical editorial composition rather than repeated rounded cards. The hero states the Shopify offer; project evidence follows; services and products support inquiry and purchase paths. No fabricated results, client logo strip, ratings or testimonial placeholders.

## Repository audit

Read through the connected GitHub account on default branch `main`:

- `package.json`: Angular 14.2, TypeScript 4.7; rebuild independently rather than porting framework components.
- `src/app/pages/pages.routing.module.ts`: `/about`, `/skills`, `/blog`, `/resume`, `/portfolio`; unknown routes redirect to `/about`.
- `src/app/pages/contact/contact.component.html`: form is commented out; this component renders skills. No working form to migrate.
- `src/app/pages/home/home.component.html`: generic creative UI/UX copy. Replace with Shopify development and support positioning.
- `src/app/layout/testimonials/testimonials.component.ts`: fictional names, Ricardo references and lorem ipsum. Exclude completely.
- `src/app/pages/resume/resume.component.html`: old current-employer/date claims; do not migrate without reconfirming. User supplied current SDE 2 status.
- `src/app/layout/sidebar/sidebar.component.html`: confirmed name Prathu Tripathi, contact email, GitHub and LinkedIn links. User explicitly approved existing email for this preview.

## Project inventory

User explicitly approved all five projects for public display during this chat. Detailed responsibilities and new screenshots may be expanded later. Asset paths below are repository-relative, authentic historical portfolio screenshots; they are not evidence of current live appearance.

| Project | Existing evidence | Asset | Link review / treatment |
| --- | --- | --- | --- |
| Vitapod World | Repository describes Shopify Plus ecommerce work | `src/assets/images/projects/vitapod.png` | Browser fetch returned 404; current live site not verified. Use conservative Shopify Plus storefront description, no current-live claim. |
| BestPriceForCar | Repository describes Angular car-selling site and dealer portal | `src/assets/images/projects/bestprice.png` | Fetch inaccessible; status unknown, not proven offline. |
| Dairy Delight | Repository describes responsive dairy ecommerce project | `src/assets/images/projects/dairy.png` | Link points to Brooklyn Data, an unrelated project. Do not reuse link. |
| DigiVogue | Repository describes digital-agency site | `src/assets/images/projects/digi.png` | Current https://digivogue.org/ describes a community/wellness platform. Needs revised description or historical attribution. |
| Flix-GPT | Repository describes React/Firebase/Redux streaming-app project | `src/assets/images/projects/netflix.png` | Fetch inaccessible; status unknown. Keep as personal application work, not client proof. |

Source: https://github.com/prathutiwari/prathutripathee/blob/main/src/app/pages/portfolio/portfolio.component.ts

## Products

The brief and Notion confirm two existing products. Gumroad pages could not be read through web fetch, so use supplied names and links with conservative descriptions. Do not claim verified prices, compatibility, install scope, ratings or product capabilities beyond supplied evidence. Do not fake real demos. Product detail routes need actual product source/demo URLs and screenshots.

- https://prathuti.gumroad.com/l/shopify-product-comparison
- https://prathuti.gumroad.com/l/shopify-before-after

## Planned route sequence

1. `/` — this slice.
2. `/shopify`, `/products`, `/contact` — next slice; contact requires delivery configuration and an end-to-end delivery check.
3. `/shopify/store-care`, `/shopify/development`, `/shopify/for-agencies` — real scope and boundaries, no experimental Notion prices presented as final offers.
4. `/products/product-comparison`, `/products/before-after` — real demos, screenshots, support/install/license details.
5. `/work`, `/work/[slug]`, `/about` — approved evidence and factual role descriptions.

Before launch: authentic testimonials if supplied (otherwise omit), product assets, final domain/canonical configuration, form spam mitigation and delivery test, responsive/keyboard QA, metadata/OG/sitemap checks and user approval for production cutover.

## Additional Shopify projects — 13 October 2026

Owner confirmed DripGym, SHEEX, Onsloe and Echo New York as projects worked on at ZiggleTech and requested their addition. Captured current desktop homepages through the browser at the supplied URLs; images are saved in public/work. These are current-site captures, not historical evidence of the exact delivered version. Detail pages state this distinction and link to the live websites.

DripGym contribution details come from the supplied resume. The other three describe a Shopify project contribution at ZiggleTech pending specifics from the owner; no ownership of a complete build, performance figures, or results are invented. Gallery now contains nine projects, including five Shopify entries. Homepage total is derived from the content array. About links the four additions under ZiggleTech.

Owner clarification: personally handled these projects, with extensive enhancement work on DripGym and Echo. Removed employer attribution from project cards/details; retained ZiggleTech in employment history as explicitly requested. No project links under the employer timeline to keep that separation clear.
