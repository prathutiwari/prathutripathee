import Link from "next/link";
import { profile } from "@/content/site";
export function Icon({ name = "arrow", size = 22 }: { name?: string; size?: number }) {
  const paths: Record<string, React.ReactNode> = {
    whatsapp: <><path d="M20.5 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20l1.2-4.7a8.5 8.5 0 1 1 16.3-3.8Z"/><path d="M8 7.5c-.7 1.7 1 5.5 4.5 7 1.5.7 2.6.5 3-.8l-2-1-1 1c-1.8-.8-3-2-3.6-3.6l1-1-1-2Z"/></>,
    download: <><path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5"/></>,
    email: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 6 9 7 9-7"/></>,
    linkedin: <><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M7 10v7m0-10v.1M11 17v-7m0 3a3 3 0 0 1 6 0v4"/></>,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/></>,
    github: <><path d="M9 19c-4 1-4-2-6-2m12 5v-4a3.5 3.5 0 0 0-1-2.7c3.4-.4 7-1.7 7-7.3a5.7 5.7 0 0 0-1.5-4 5.3 5.3 0 0 0-.1-4s-1.3-.4-4.4 1.5a15 15 0 0 0-8 0C3.9-.4 2.6 0 2.6 0A5.3 5.3 0 0 0 2.5 4 5.7 5.7 0 0 0 1 8c0 5.6 3.6 6.9 7 7.3A3.5 3.5 0 0 0 7 18v4" transform="translate(2 1) scale(.85)"/></>,
    arrow: <path d="M5 19 19 5M5 5h14v14" />,
    code: <path d="m8 7-5 5 5 5m8-10 5 5-5 5m-3-14-2 18" />,
    bag: <><path d="M5 7h14l2 14H3L5 7Z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></>,
    layers: <path d="m12 3 10 6-10 6L2 9l10-6Zm-9 11 9 5 9-5M3 18l9 5 9-5"/>,
    spark: <path d="m12 2 2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5L12 2Z"/>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name] || paths.arrow}</svg>;
}
export function SocialLinks() { return <div className="social-links" aria-label="Social and contact links">{[{name:"LinkedIn",icon:"linkedin",url:profile.linkedin},{name:"GitHub",icon:"github",url:profile.github},{name:"Instagram",icon:"instagram",url:"https://www.instagram.com/prathutripathee/"},{name:"Email",icon:"email",url:`mailto:${profile.email}`}].map(s=><a key={s.name} href={s.url} aria-label={s.name} title={s.name}><Icon name={s.icon} size={20}/></a>)}</div>; }
export function WhatsAppLink() { return <a className="button secondary whatsapp-link" href={profile.whatsapp} target="_blank" rel="noopener noreferrer"><Icon name="whatsapp" size={20}/> Chat on WhatsApp</a>; }
export function Footer() { return <footer className="wrap footer"><Link href="/" className="brand">prathu<span>.</span></Link><span>© {new Date().getFullYear()} Prathu Tripathi</span><nav className="footer-nav" aria-label="More pages"><Link href="/skills">Skills</Link><Link href="/insights">Writing</Link><Link href="/contact">Contact</Link></nav><SocialLinks/></footer>; }
export function Contact({ agency = false }: { agency?: boolean }) { return <section className="contact wrap" id="contact"><div className="contact-orbit" aria-hidden="true">✳</div><p className="eyebrow">HAVE SOMETHING IN MIND?</p><h2>{agency ? "Your next project." : "Let’s build something"}<br/><span>{agency ? "An extra pair of hands." : "worth putting out there."}</span></h2><a className="button primary" href={agency ? "/contact?type=Agency%20partnership" : "/contact"}>Let’s talk about it <Icon size={18}/></a><WhatsAppLink/><a style={{ display: 'none' }} className="contact-email none" href={`mailto:${profile.email}`}>{profile.email}</a></section>; }

