import type { Metadata } from "next";
import { Header } from "./header";
import { Footer } from "./ui";
export function pageMetadata(title: string, description: string, path: string): Metadata { return { title: `${title} — Prathu Tripathi`, description, ...(process.env.SITE_URL ? { alternates: { canonical: path } } : {}) }; }
export function PageShell({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro: string; children: React.ReactNode }) { return <><Header/><main id="main"><section className="page-intro wrap"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{intro}</p></section>{children}</main><Footer/></>; }
