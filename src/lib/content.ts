export const site = {
  name: "PipeRight Solutions",
  tagline: "Burst pipe? We're on the Gold Coast.",
  subline:
    "Dave & Kylie — local plumbing for emergencies and everyday repairs · Nerang · Robina · Helensvale",
  regionLine: "Gold Coast — Nerang · Robina · Helensvale",
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

/** Unsplash — demo placeholders only; sources listed in README */
export const demoImages = {
  hero: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64",
  emergency: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1",
  drains: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a",
  hotWater: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
  taps: "https://images.unsplash.com/photo-1620626011761-996317b8d101",
  aboutVan: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
  aboutTools: "https://images.unsplash.com/photo-1504307651254-35680f356dfd",
  gcHome: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
} as const;

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
