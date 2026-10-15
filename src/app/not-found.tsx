import Link from "next/link";
import { PageShell } from "@/components/page-shell";
export default function NotFound(){return <PageShell eyebrow="404 / PAGE NOT FOUND" title="This page isn’t here." intro="The link may have changed. You can return to the portfolio or explore the project collection."><div className="wrap page-links"><Link href="/" className="button primary">Back to home</Link><Link href="/work" className="button secondary">Explore the work</Link></div></PageShell>;}
