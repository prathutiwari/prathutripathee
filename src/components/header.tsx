"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Icon } from "./ui";
export function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  useEffect(() => {
    function close(event: KeyboardEvent) { if (event.key === "Escape" && open) { setOpen(false); toggle.current?.focus(); } }
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);
  return <><a href="#main" className="skip-link">Skip to content</a><header className="header wrap"><Link href="/" className="brand" aria-label="Prathu Tripathi home">prathu<span>.</span></Link><button ref={toggle} className="menu-toggle" aria-expanded={open} aria-controls="navigation" onClick={() => setOpen(!open)}>{open ? "Close −" : "Menu +"}</button><nav id="navigation" className={open ? "navigation open" : "navigation"} aria-label="Main navigation"><Link href="/work" aria-current={pathname.startsWith("/work") ? "page" : undefined} onClick={() => setOpen(false)}>Selected work</Link><Link href="/about" aria-current={pathname.startsWith("/about") ? "page" : undefined} onClick={() => setOpen(false)}>About me</Link><Link href="/skills" aria-current={pathname.startsWith("/skills") ? "page" : undefined} onClick={() => setOpen(false)}>Skills</Link><Link href="/products" aria-current={pathname.startsWith("/products") ? "page" : undefined} onClick={() => setOpen(false)}>Products</Link><Link href="/shopify/for-agencies" aria-current={pathname === "/shopify/for-agencies" ? "page" : undefined} onClick={() => setOpen(false)}>For agencies <span className="nav-dot"/></Link><a href="/contact" className="nav-cta" onClick={() => setOpen(false)}>Let’s talk <Icon size={15}/></a></nav></header></>;
}

