import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.SITE_URL;
  const indexable = process.env.SITE_INDEXABLE === "true" && Boolean(siteUrl);
  return { rules: { userAgent: "*", ...(indexable ? { allow: "/" } : { disallow: "/" }) }, ...(indexable ? { sitemap: `${siteUrl!.replace(/\/$/, "")}/sitemap.xml` } : {}) };
}
