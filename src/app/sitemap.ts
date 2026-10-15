import type { MetadataRoute } from "next";
import { work } from "@/content/work";
export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.SITE_URL;
  if (!siteUrl || process.env.SITE_INDEXABLE !== "true") return [];
  return ["/", "/about", "/skills", "/work", "/products", "/insights", "/contact", "/shopify/for-agencies", ...work.map(p => `/work/${p.slug}`)].map(path => ({ url: `${siteUrl.replace(/\/$/, "")}${path}`, changeFrequency: "monthly", priority: path === "/" ? 1 : 0.8 }));
}
