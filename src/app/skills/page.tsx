import Link from "next/link";
import { PageShell, pageMetadata } from "@/components/page-shell";
import { Contact, Icon } from "@/components/ui";
import { skillGroups } from "@/content/background";
export const metadata = pageMetadata("Skills & expertise", "Shopify, frontend, API integration, accessibility and development tooling expertise.", "/skills");
export default function Skills() { return <PageShell eyebrow="TECHNICAL RANGE, PRACTICAL APPLICATION" title="What I work with." intro="Shopify is my specialism. A broader frontend background helps me connect the details across a complete web experience."><section className="wrap skill-groups">{skillGroups.map((g,i)=><article key={g.title}><div><span className="step-number">0{i+1}</span><h2>{g.title}</h2><p>{g.description}</p></div><ul>{g.skills.map(s=><li key={s}>{s}</li>)}</ul></article>)}</section><div className="wrap page-links"><Link className="inline-link" href="/work">See these skills in practice <Icon size={16}/></Link><Link className="inline-link" href="/about">Background &amp; experience <Icon size={16}/></Link></div><Contact/></PageShell>; }
