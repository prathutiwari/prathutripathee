"use client";
import { useState } from "react";
import { inquiryTypes, validateInquiry } from "@/lib/contact";
export function ContactForm({ enabled, initialType }: { enabled: boolean; initialType: string }) {
  const [startedAt] = useState(()=>Date.now());
  const [status,setStatus]=useState("");
  const [pending,setPending]=useState(false);
  const [success,setSuccess]=useState(false);
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); if(pending || !enabled) return;
    const fields=Object.fromEntries(new FormData(event.currentTarget));
    const payload={...fields,startedAt}; const checked=validateInquiry(payload);
    if(checked.error){setStatus(checked.error);return;}
    setPending(true);setStatus("");
    try { const res=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(payload)}); const result=await res.json(); setStatus(res.ok ? result.message : result.error); setSuccess(res.ok); } catch {setStatus("The connection failed. Your message was not confirmed. Please try again or email me directly.");} finally {setPending(false);}
  }
  return <form className="inquiry-form" onSubmit={submit}><h2>Tell me about your project.</h2>{!enabled && <p className="form-notice">Online inquiries are being set up. For now, please email me or start a WhatsApp chat.</p>}<fieldset disabled={pending || success}><div className="form-row"><label>Your name<input name="name" autoComplete="name" minLength={2} maxLength={100} required/></label><label>Email address<input name="email" type="email" autoComplete="email" maxLength={254} required/></label></div><label>Phone / WhatsApp number <span>(optional, include country code)</span><input name="phone" type="tel" autoComplete="tel" maxLength={30} placeholder="+91 …"/></label><label>What can I help with?<select name="type" defaultValue={(inquiryTypes as readonly string[]).includes(initialType)?initialType:inquiryTypes[0]}>{inquiryTypes.map(t=><option key={t}>{t}</option>)}</select></label><label>Website or store URL <span>(optional)</span><input name="website" type="url" placeholder="https://" maxLength={300}/></label><label>Project details<textarea name="message" rows={6} required minLength={20} maxLength={5000} placeholder="What do you need, and what is your ideal timeline?"/></label><div className="form-trap" aria-hidden="true"><label>Leave this field empty<input name="company" tabIndex={-1} autoComplete="off"/></label></div></fieldset><p className="form-privacy">Your details will be used to respond to this inquiry. They will not be added to a marketing list. Please don’t include passwords or sensitive account information.</p><button className="button primary" disabled={!enabled || pending || success} type="submit">{pending?"Submitting…":success?"Inquiry submitted":"Send inquiry ↗"}</button><p className={success?"form-success":"form-status"} role="status" aria-live="polite">{status}</p></form>;
}


