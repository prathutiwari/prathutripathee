import { PageShell, pageMetadata } from "@/components/page-shell";
import { WorkGallery } from "@/components/work-gallery";
import { Contact } from "@/components/ui";
export const metadata = pageMetadata("Selected work", "Shopify storefronts, frontend development and application projects by Prathu Tripathi.", "/work");
export default function Work() { return <PageShell eyebrow="SELECTED PROJECTS" title="A closer look at the work." intro="Storefronts, websites and applications. Explore the project context and my contribution, with portfolio images and current website captures."><section className="wrap"><WorkGallery/></section><Contact/></PageShell>; }

