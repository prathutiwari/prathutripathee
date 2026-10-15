import type { Metadata } from "next";
import "./globals.css";
import "./refinements.css";
const siteUrl = process.env.SITE_URL;
const indexable = process.env.SITE_INDEXABLE === "true" && Boolean(siteUrl);
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl || "http://localhost:3000"),
  title: "Prathu Tripathi — Shopify Development & Store Support",
  description: "Shopify development, custom themes, store support and agency partnerships. Work with Prathu Tripathi, Shopify developer and software engineer.",
  ...(siteUrl ? { alternates: { canonical: "/" } } : {}),
  robots: { index: indexable, follow: indexable },
  openGraph: { title: "Prathu Tripathi — Developer. Builder. Detail person.", description: "Shopify development, frontend engineering and thoughtful web experiences.", type: "website", locale: "en_US" },
};
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en"><body>{children}</body></html>; }
