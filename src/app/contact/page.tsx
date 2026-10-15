import { PageShell, pageMetadata } from "@/components/page-shell";

import { SocialLinks, WhatsAppLink } from "@/components/ui";
import { ContactForm } from "@/components/contact-form";
import { profile } from "@/content/site";
export const metadata = pageMetadata("Contact", "Discuss Shopify development, agency support, store care or a frontend project with Prathu Tripathi.", "/contact");
export default async function ContactPage({searchParams}:{searchParams:Promise<{type?:string}>}) { const params=await searchParams; const enabled=process.env.CONTACT_FORM_ENABLED==="true" && Boolean(process.env.RESEND_API_KEY && process.env.CONTACT_FROM); return <PageShell eyebrow="LET’S FIND THE RIGHT NEXT STEP" title="What are you working on?" intro="A storefront idea, an integration that needs attention, or extra development capacity for your team. Share the context and we can work out the scope."><section className="wrap contact-layout"><aside><h2>A useful first conversation.</h2><p>Include your website, the work you have in mind and any timing constraints. For agency work, a design file or a short brief helps.</p><a className="inline-link" href={`mailto:${profile.email}`}>{profile.email}</a><SocialLinks/><WhatsAppLink/><p className="whatsapp-note">Prefer a quick chat? Send your name and a short project brief on WhatsApp.</p><div className="contact-location"><span className="eyebrow">BASED IN</span><p>Bengaluru, India<br/>Working with brands and teams internationally.</p></div></aside><ContactForm enabled={enabled} initialType={params.type || ""}/></section></PageShell>; }


