export type Work = {
  slug: string;
  name: string;
  category: "Shopify" | "Web development" | "Applications";
  stack: string[];
  image: string;
  summary: string;
  scope: string[];
  context: string;
  agency?: string;
  url?: string;
  capturedAt?: string;
  imageWidth?: number;
  imageHeight?: number;
};
export const work: Work[] = [
  {
    slug: "kylie-cosmetics",
    name: "Kylie Cosmetics",
    category: "Shopify",
    stack: ["Shopify"],
    image: "/work/kylie-cosmetics.png",
    summary: "Shopify development contributions for Kylie Cosmetics.",
    scope: [
      "Contributed to the development and maintenance of the Shopify storefront.",
    ],
    context: "Professional development work on the Kylie Cosmetics website.",
    url: "https://kyliecosmetics.com/",
  },
  {
    slug: "philosophy",
    name: "Philosophy",
    category: "Shopify",
    stack: ["Shopify"],
    image: "/work/philosophy.png",
    summary: "Shopify development contributions for Philosophy.",
    scope: [
      "Contributed to the development and maintenance of the Shopify storefront.",
    ],
    context: "Professional development work on the Philosophy website.",
    url: "https://philosophy.com/",
  },
  {
    slug: "infiniment-coty",
    name: "Infiniment Coty",
    category: "Shopify",
    stack: ["Shopify"],
    image: "/work/infi.png",
    summary: "Shopify development contributions for Infiniment Coty.",
    scope: [
      "Contributed to the development and maintenance of the European Shopify storefront.",
    ],
    context: "Professional development work on the Infiniment Coty European website.",
    url: "https://eu.infinimentcoty.com/",
  },
  {
    slug: "dripgym",
    name: "DripGym",
    category: "Shopify",
    stack: ["Shopify Online Store 2.0", "Liquid", "Easy Appointment Booking"],
    image: "/work/dripgym.jpg",
    imageWidth: 1440,
    imageHeight: 1000,
    url: "https://dripgym.com/",
    capturedAt: "13 October 2026",
    summary:
      "A Shopify website for a New York wellness and appointment-based business, with custom development and ongoing enhancements.",
    scope: [
      "Built the Online Store 2.0 website from scratch.",
      "Developed custom Liquid features and integrated Easy Appointment Booking.",
      "Delivered further website enhancements.",
    ],
    context:
      "DripGym brings service discovery and appointment booking into a Shopify website.",
  },
  {
    slug: "echo-new-york",
    name: "Echo New York",
    category: "Shopify",
    stack: ["Shopify"],
    image: "/work/echo-new-york.jpg",
    imageWidth: 1440,
    imageHeight: 1000,
    url: "https://echonewyork.com/",
    capturedAt: "13 October 2026",
    summary:
      "Shopify development and extensive website enhancements for a scarves and accessories brand.",
    scope: [
      "Personally handled Shopify development and extensive website enhancements for Echo New York.",
    ],
    context:
      "Echo New York’s storefront brings together scarves, wraps and seasonal accessories.",
  },
  {
    slug: "sheex",
    name: "SHEEX",
    category: "Shopify",
    stack: ["Shopify"],
    image: "/work/sheex.jpg",
    imageWidth: 1440,
    imageHeight: 1000,
    url: "https://www.sheex.com/",
    capturedAt: "13 October 2026",
    summary:
      "Shopify development contributions for a bedding and sleepwear brand.",
    scope: ["Personally handled Shopify project work for SHEEX."],
    context:
      "SHEEX’s storefront presents bedding, sleepwear and sleep accessories.",
  },
  {
    slug: "onsloe",
    name: "Onsloe",
    category: "Shopify",
    stack: ["Shopify"],
    image: "/work/onsloe.jpg",
    imageWidth: 1440,
    imageHeight: 1000,
    url: "https://onsloe.com/",
    capturedAt: "13 October 2026",
    summary:
      "Shopify development contributions for a customizable menswear brand.",
    scope: ["Personally handled Shopify project work for Onsloe."],
    context:
      "Onsloe’s storefront presents made-to-order menswear and customizable clothing.",
  },
  {
    slug: "digivogue",
    name: "DigiVogue",
    category: "Web development",
    stack: ["Web design", "Frontend", "Responsive UI"],
    image: "/work/digi.png",
    summary: "Website design and frontend work for DigiVogue.",
    scope: [
      "Built responsive layouts and interactive interface elements.",
      "Worked on frontend performance and the browsing experience.",
    ],
    url: "https://digivogue.org/",
    context:
      "An archived example of my DigiVogue website work. The current website has evolved, so this page presents the original portfolio capture rather than claiming ownership of the current site.",
  },
  {
    slug: "dairy-delight",
    name: "Dairy Delight",
    category: "Applications",
    stack: ["Ecommerce", "Product browsing", "Responsive UI"],
    image: "/work/dairy.png",
    summary:
      "A responsive dairy ecommerce experience with product browsing and availability information.",
    scope: [
      "Developed responsive product browsing.",
      "Worked with updates for product pricing, categories and availability.",
    ],
    url: "https://dairy-delight-sand.vercel.app/",
    context:
      "An ecommerce interface for browsing dairy products. The old portfolio’s unrelated outbound link has been excluded.",
  },
  {
    slug: "bestpriceforcar",
    name: "BestPriceForCar",
    category: "Web development",
    stack: ["Angular", "Dealer portal", "Responsive UI"],
    image: "/work/bestprice.png",
    summary:
      "A car-selling website and dealer portal for managing customer leads.",
    scope: [
      "Built the Angular-based car-selling website.",
      "Worked on the dealer portal for customer leads and offers.",
    ],
    context:
      "The public website and dealer-facing portal serve different parts of a vehicle inquiry workflow.",
  },
  {
    slug: "vitapod-world",
    name: "Vitapod World",
    category: "Shopify",
    stack: ["Shopify Plus", "Liquid", "Responsive UI"],
    image: "/work/vitapod.png",
    summary:
      "A Shopify Plus storefront with reusable theme architecture and merchant-editable components.",
    scope: [
      "Developed the Shopify Plus storefront and reusable theme structure.",
      "Built merchant-editable components for content management.",
      "Worked on responsive performance across desktop and mobile.",
    ],
    context:
      "A commerce experience for a hydration brand, with reusable components supporting ongoing merchandising.",
  },
  // {
  //   slug: "flix-gpt",
  //   name: "Flix-GPT",
  //   category: "Applications",
  //   stack: ["React", "Firebase", "Redux"],
  //   image: "/work/netflix.png",
  //   summary:
  //     "A Netflix-inspired application project built with React, Firebase and Redux.",
  //   scope: [
  //     "Implemented authentication and protected access using Firebase.",
  //     "Built the application interface and state management with React and Redux.",
  //   ],
  //   context:
  //     "An application project exploring streaming-style interfaces and AI-assisted discovery. Presented as application work, not as a commissioned Netflix project.",
  // },
];
