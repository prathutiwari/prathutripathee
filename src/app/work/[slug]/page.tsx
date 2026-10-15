import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { work } from "@/content/work";
import { PageShell, pageMetadata } from "@/components/page-shell";
import { Contact } from "@/components/ui";
export function generateStaticParams() { return work.map(p=>({slug:p.slug})); }
export async function generateMetadata({params}:{params:Promise<{slug:string}>}) { const {slug}=await params; const p=work.find(p=>p.slug===slug); return p ? pageMetadata(p.name,p.summary,`/work/${slug}`) : {}; }
export default async function Project({params}:{params:Promise<{slug:string}>}) { const {slug}=await params; const p=work.find(p=>p.slug===slug); if(!p) notFound(); return <PageShell eyebrow={p.category.toUpperCase()} title={p.name} intro={p.summary}><div className="wrap"><Link href="/work" className="inline-link">← All projects</Link><figure className="case-image"><Image src={p.image} alt={`${p.name} website screenshot`} width={p.imageWidth ?? 1900} height={p.imageHeight ?? 925} sizes="90vw" priority/><figcaption>{p.capturedAt ? `Live website capture · ${p.capturedAt}. The current site may include changes made after my involvement.` : "Original portfolio capture · Historical project work"}</figcaption></figure><section className="case-details"><div><p className="eyebrow">PROJECT CONTEXT</p><h2>The brief &amp; the work.</h2>{p.agency && <p className="archive-note">Project work completed while at {p.agency}</p>}<p>{p.context}</p>{p.url && <a className="inline-link" href={p.url} target="_blank" rel="noopener noreferrer">Visit live website ↗</a>}<ul className="skill-tags">{p.stack.map(s=><li key={s}>{s}</li>)}</ul></div><div><p className="eyebrow">MY CONTRIBUTION</p><ul className="contribution-list">{p.scope.map(s=><li key={s}>{s}</li>)}</ul></div></section></div><Contact/></PageShell>; }

