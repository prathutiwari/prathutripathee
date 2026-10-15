export const profile = { name: "Prathu Tripathi", whatsapp: "https://wa.me/917355732435?text=Hi%20Prathu%2C%20I%20would%20like%20to%20discuss%20a%20project.", email: "prathutiwari22@gmail.com", github: "https://github.com/prathutiwari", linkedin: "https://www.linkedin.com/in/prathu-tripathi/" } as const;
export const navigation = [{ label: "Services", href: "/#services" }, { label: "Work", href: "/#work" }, { label: "Products", href: "/#products" }, { label: "About", href: "/#about" }] as const;
type Project = { slug: string; name: string; category: string; description: string; image: string; alt: string; width: number; height: number };
// Public display approved by owner on 13 Oct 2026. Historical portfolio images;
// descriptions are sourced from Angular data. No current live-site claims.
export const projects: Project[] = [
  {
    slug: "dripgym",
    name: "DripGym",
    category: "Shopify",
    description: "Custom Shopify development, appointment booking integration and website enhancements.",
    image: "/work/dripgym.jpg",
    alt: "DripGym website showcasing its mobile IV therapy services",
    width: 1440,
    height: 1000,
  },
  {
    slug: "echo-new-york",
    name: "Echo New York",
    category: "Shopify",
    description: "Shopify development and extensive storefront enhancements for a scarves and accessories brand.",
    image: "/work/echo-new-york.jpg",
    alt: "Echo New York storefront showcasing its fashion and accessories collection",
    width: 1440,
    height: 1000,
  },
];
type Product = { slug: string; name: string; description: string; purchaseUrl: string; demoUrl?: string; image?: string };
// Add demo URLs and images only after actual product assets are verified.
export const products: Product[] = [
  { slug: "product-comparison", name: "Product Comparison Table", description: "A Shopify section for presenting products side by side.", purchaseUrl: "https://prathuti.gumroad.com/l/shopify-product-comparison" },
  { slug: "before-after", name: "Before/After Slider", description: "A Shopify section for showing a before-and-after comparison.", purchaseUrl: "https://prathuti.gumroad.com/l/shopify-before-after" },
];
export const services = [
  { title: "Custom Shopify development", description: "Theme features, custom sections and integrations built around what your store needs.", tags: ["Liquid", "Themes", "Integrations"], subject: "Custom Shopify development inquiry" },
  { title: "Fixes & store care", description: "Troubleshooting and ongoing improvements, with a clear scope for each task or monthly support plan.", tags: ["Bug fixes", "Accessibility", "Maintenance"], subject: "Shopify store care inquiry" },
  { title: "A partner for your agency", description: "White-label and overflow development for teams that need Shopify and frontend engineering support.", tags: ["White-label", "React", "Hydrogen"], subject: "Agency partnership inquiry" },
  { title: "Websites & redesigns", description: "Frontend development for a new website or a more considered version of the one you have.", tags: ["Frontend", "Responsive UI", "Redesigns"], subject: "Website development inquiry" },
] as const;
export const expertise = ["Shopify Plus", "Liquid", "React", "Hydrogen", "GraphQL", "Accessibility"] as const;

