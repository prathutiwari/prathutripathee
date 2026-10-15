import { validateInquiry } from "@/lib/contact";
import { profile } from "@/content/site";


// Per-instance mitigation only. Configure a platform/WAF rate limit at launch.
const attempts = new Map<string, { count: number; until: number }>();
export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  const allowed = process.env.SITE_URL ? new URL(process.env.SITE_URL).origin : new URL(request.url).origin;
  if (origin !== allowed) return Response.json({error:"This request is not allowed."},{status:403});
  if (!request.headers.get("content-type")?.includes("application/json")) return Response.json({error:"Use the inquiry form."},{status:415});
  if (Number(request.headers.get("content-length")) > 16000) return Response.json({error:"Your message is too large."},{status:413});
  let value: unknown;
  try { const raw = await request.text(); if (raw.length > 16000) return Response.json({error:"Your message is too large."},{status:413}); value=JSON.parse(raw); } catch { return Response.json({error:"Please check the form and try again."},{status:400}); }
  const result = validateInquiry(value);
  if (!result.data) return Response.json({error:result.error},{status:400});
  const data = result.data;
  const elapsed = Date.now() - data.startedAt;
  if (!Number.isFinite(elapsed) || elapsed < 2000 || elapsed > 86400000) return Response.json({error:"Please take a moment to review the form, or refresh if it has been open a long time."},{status:400});
  if (process.env.CONTACT_FORM_ENABLED !== "true" || !process.env.RESEND_API_KEY || !process.env.CONTACT_FROM) return Response.json({error:"The form is not accepting messages yet. Please email me or contact me on WhatsApp."},{status:503});
  const now = Date.now();
  for (const [key, item] of attempts) if (item.until < now) attempts.delete(key);
  const ip=request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const key=`${ip}:${data.email.toLowerCase()}`;
  const count=attempts.get(key) || {count:0,until:now+600000};
  if (count.count >= 3 || attempts.size >= 10000) return Response.json({error:"Too many attempts. Please try again later or email me directly."},{status:429});
  count.count++; attempts.set(key,count);
  try {
    const response = await fetch("https://api.resend.com/emails", { method:"POST", headers:{Authorization:`Bearer ${process.env.RESEND_API_KEY}`,"Content-Type":"application/json"}, body:JSON.stringify({from:process.env.CONTACT_FROM,to:[profile.email],reply_to:data.email,subject:`Portfolio inquiry: ${data.type}`,text:`Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone || "Not supplied"}\nType: ${data.type}\nWebsite: ${data.website || "Not supplied"}\n\n${data.message}`}),signal:AbortSignal.timeout(12000) });
    if (!response.ok) return Response.json({error:"Your inquiry could not be submitted. Please try again or contact me on WhatsApp."},{status:502});
    const result = await response.json();
    if (typeof result.id !== "string" || !result.id) return Response.json({error:"We could not confirm submission. Please try again or contact me on WhatsApp."},{status:502});
    return Response.json({message:"Your inquiry has been submitted. Thank you for getting in touch."});
  } catch { return Response.json({error:"We could not confirm submission. Your details are still in the form. Please try again or contact me on WhatsApp."},{status:502}); }
}
