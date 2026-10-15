"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { work } from "@/content/work";
import { Icon } from "./ui";
export function WorkGallery() {
  const [filter,setFilter] = useState("All");
  const shown = work.filter(w=>filter === "All" || w.category === filter);
  return <><div className="filter-bar" role="group" aria-label="Filter projects">{["All","Shopify","Web development","Applications"].map(label=><button key={label} aria-pressed={filter===label} onClick={()=>setFilter(label)}>{label}</button>)}</div><p className="result-count" aria-live="polite">{shown.length} {shown.length===1 ? "project" : "projects"}</p><div className="work-grid">{shown.map((p,i)=><article className={`project project-${i%2}`} key={p.slug}><Link href={`/work/${p.slug}`} className="project-visual" aria-label={`Read about ${p.name}`}><div className="project-window"><div className="window-bar"><span>● ● ●</span><span>{p.name}</span><Icon size={12}/></div><Image src={p.image} alt={`${p.name} website screenshot`} width={p.imageWidth ?? 1900} height={p.imageHeight ?? 925} sizes="(max-width:760px) 90vw, 45vw"/></div><span className="project-open"><Icon/></span><span className="visual-caption">EXPLORE THE PROJECT</span></Link><div className="project-title"><h3><Link href={`/work/${p.slug}`}>{p.name}</Link></h3><span className="pill">{p.category}</span></div><p>{p.summary}</p>{p.agency && <span className="archive-note">While at {p.agency}</span>}</article>)}</div></>;
}

