export const inquiryTypes = ["Shopify development", "Store care", "Agency partnership", "Website development", "Product installation", "Other"] as const;
export type Inquiry = { name: string; email: string; phone: string; type: string; website: string; message: string; company: string; startedAt: number };
export function validateInquiry(value: unknown): { data?: Inquiry; error?: string } {
  if (!value || typeof value !== "object" || Array.isArray(value)) return { error: "Please complete the inquiry form." };
  const v = value as Record<string, unknown>;
  for (const key of ["name", "email", "type", "website", "message", "company"]) if (typeof v[key] !== "string") return { error: "Please check your form fields." };
  const data = Object.fromEntries(["name", "email", "type", "website", "message", "company"].map(k=>[k,(v[k] as string).trim()])) as unknown as Inquiry;
  if (v.phone !== undefined && typeof v.phone !== "string") return { error: "Enter a valid phone number." };
  data.phone = typeof v.phone === "string" ? v.phone.trim() : "";
  if (data.phone && (data.phone.length > 30 || !/^[+0-9() .-]{7,30}$/.test(data.phone) || data.phone.replace(/\D/g, "").length < 7)) return { error: "Enter a valid phone number with country code, or leave it empty." };
  data.startedAt = typeof v.startedAt === "number" ? v.startedAt : 0;
  if (data.company) return { error: "Unable to submit this inquiry." };
  if (data.name.length < 2 || data.name.length > 100 || /[\r\n]/.test(data.name)) return { error: "Enter a name between 2 and 100 characters." };
  if (data.email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return { error: "Enter a valid email address." };
  if (!(inquiryTypes as readonly string[]).includes(data.type)) return { error: "Choose an inquiry type." };
  if (data.message.length < 20 || data.message.length > 5000) return { error: "Please describe your project in 20–5,000 characters." };
  if (data.website.length > 300) return { error: "Your website address is too long." };
  if (data.website) { try { const url = new URL(data.website); if (!["http:","https:"].includes(url.protocol)) throw new Error(); } catch { return { error: "Use a complete website address starting with https://." }; } }
  return { data };
}

