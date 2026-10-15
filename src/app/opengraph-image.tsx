import { ImageResponse } from "next/og";
export const alt = "Prathu Tripathi — Shopify development and store support";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() { return new ImageResponse(<div style={{ background: "#111211", color: "#f1f0e9", width: "100%", height: "100%", padding: 80, display: "flex", flexDirection: "column", justifyContent: "space-between" }}><div style={{ fontSize: 32 }}>prathu.</div><div style={{ fontSize: 96, letterSpacing: -5, lineHeight: 1.05, display: "flex", flexDirection: "column" }}><span>I build the web.</span><span style={{ color: "#e7c777" }}>With purpose.</span></div><div style={{ fontSize: 23 }}>Shopify development &amp; reliable store support</div></div>, size); }
