export const site = {
  name: "PipeRight Solutions",
  tagline: "Burst pipe? We're on the Gold Coast.",
  subline:
    "Dave & Kylie — local plumbing for emergencies and everyday repairs · Nerang · Robina · Helensvale · Mudgeeraba",
  regionLine: "Gold Coast — Nerang · Robina · Helensvale · Mudgeeraba",
  phone: "07 5550 0142",
  phoneHref: "tel:+61755500142",
  email: "hello@piperight-demo.example",
  suburbs: ["Nerang", "Robina", "Helensvale", "Mudgeeraba"],
  years: "8",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Nerang+QLD+Gold+Coast",
  demoNote:
    "Portfolio demo — fictional client (PipeRight). Not a live business. Form submissions do not leave this demo.",
  fictionNote:
    "Fiction brief for Orbios portfolio. Do not contact Dave/Kylie — they do not exist.",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
] as const;

export const trustBadges = [
  "Licensed (demo claim)",
  "Local family crew",
  "Same-day emergency*",
  "Gold Coast based",
] as const;

/** Unsplash — demo placeholders; sources in README */
export const demoImages = {
  hero: "https://images.unsplash.com/photo-1722764386929-e6e1ac43f70a",
  emergency: "https://images.unsplash.com/photo-1520863833497-09cca9d58714",
  drains: "https://images.unsplash.com/photo-1609210884848-2d530cfb2a07",
  hotWater: "https://images.unsplash.com/photo-1615873968403-89e068629265",
  taps: "https://images.unsplash.com/photo-1629078692818-c5a0443f4ae3",
  aboutVan: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8f3f",
  aboutTools: "https://images.unsplash.com/photo-1662454379588-65fdd25622d0",
  gcHome: "https://images.unsplash.com/photo-1646592491489-ebdf758b9d11",
} as const;

/** Hero copy — all four service suburbs */
export function suburbsHeroList(): string {
  const [a, b, c, d] = site.suburbs;
  return `${a}, ${b}, ${c} & ${d}`;
}

export type DemoImageKey = keyof typeof demoImages;

export function demoImg(base: string, width: number) {
  return `${base}?auto=format&fit=crop&w=${width}&q=80`;
}

export type Service = {
  slug: string;
  name: string;
  summary: string;
  urgent: boolean;
  image: DemoImageKey;
};

export const services: Service[] = [
  {
    slug: "emergency",
    name: "Emergency plumbing",
    summary:
      "Burst pipes, major leaks, overflowing drains — call first. We prioritise urgent jobs across the Gold Coast.",
    urgent: true,
    image: "emergency",
  },
  {
    slug: "drains",
    name: "Blocked drains",
    summary:
      "Kitchen, bathroom, and outdoor drains cleared. Ideal for homeowners and rental agents booking unit work.",
    urgent: false,
    image: "drains",
  },
  {
    slug: "hot-water",
    name: "Hot water systems",
    summary:
      "Repairs and replacements for electric and gas units. No hot water? We can usually diagnose quickly.",
    urgent: false,
    image: "hotWater",
  },
  {
    slug: "taps-repairs",
    name: "Taps & minor repairs",
    summary:
      "Dripping taps, toilet cisterns, shower mixers, and small bathroom fixes — planned visits welcome.",
    urgent: false,
    image: "taps",
  },
];

export type Review = {
  name: string;
  suburb: string;
  rating: number;
  text: string;
  tag: "emergency" | "planned";
};

export const reviews: Review[] = [
  {
    name: "Sarah M.",
    suburb: "Robina",
    rating: 5,
    text: "Called at 9pm with a burst pipe under the sink. Dave answered straight away and was here within the hour. Lifesavers.",
    tag: "emergency",
  },
  {
    name: "James T.",
    suburb: "Nerang",
    rating: 5,
    text: "Blocked shower drain fixed same day. Clear price before they started — no surprises.",
    tag: "planned",
  },
  {
    name: "Rental Co. — Lisa K.",
    suburb: "Helensvale",
    rating: 5,
    text: "We use PipeRight for tenant call-outs. Reliable, local, and easy to reach by phone.",
    tag: "planned",
  },
  {
    name: "Michelle P.",
    suburb: "Mudgeeraba",
    rating: 5,
    text: "Hot water system replaced without drama. Kylie kept us updated the whole way through.",
    tag: "planned",
  },
  {
    name: "Mark D.",
    suburb: "Robina",
    rating: 5,
    text: "Finally a tradie who picks up the phone. Fixed a leaking tap and checked a few other fittings while here.",
    tag: "planned",
  },
  {
    name: "Anna R.",
    suburb: "Nerang",
    rating: 5,
    text: "Emergency call on a Sunday — calm, professional, sorted quickly. Would recommend to neighbours.",
    tag: "emergency",
  },
];

export const suburbOptions = site.suburbs;

export const urgentOptions = ["Yes — emergency", "No — planned visit"] as const;
