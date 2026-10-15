import { PageShell, pageMetadata } from "@/components/page-shell";
import { Contact, Icon } from "@/components/ui";
import { writing } from "@/content/background";
export const metadata = pageMetadata("Writing", "Prathu’s published notes on JavaScript and React.", "/insights");
export default function Insights() { return <PageShell eyebrow="NOTES FROM THE WORKBENCH" title="Things I’ve learned. Written down." intro="A small collection of my published JavaScript and React articles."><section className="wrap writing-list">{writing.map(p=><a href={p.href} key={p.href}><span className="eyebrow">{p.tag} · {p.date}</span><div><h2>{p.title}</h2><Icon/></div><p>{p.description}</p><span className="inline-link">Read on NamasteDev ↗</span></a>)}</section><Contact/></PageShell>; }
