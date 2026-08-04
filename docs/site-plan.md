# Site plan — PipeRight Solutions (fiction)

> **Fiction portfolio brief.** No live site. No real business. Do not contact anyone.  
> **Task level:** L4 · greenfield · plan → ACK → build  
> **Author:** Artem Wotan (UA-02) · **Date:** 2026-08-04  
> **Status:** Phase 1 complete — awaiting Lika ACK (`site plan ok — build`)

---

## 1. Owner goals vs visitor goals

### Owners (Dave & Kylie)

| Goal | Why it matters |
|------|----------------|
| Look professional next to competitors with real websites | Today they only have Facebook posts — shame when someone asks for a link |
| Capture **emergency** jobs (burst / leak) | Core revenue + reputation: “we come when it matters” |
| Still win **planned** work (drains, hot water, taps, bathroom fixes) | Steady weekday pipeline; rental agents call for units |
| Ship a **demo preview first**, domain later | Low risk — show Kylie a link next week before buying hosting |

### Visitors

| Goal | Who |
|------|-----|
| Find a local plumber and **call in ~5 seconds** | Emergency homeowner (panic, usually on phone) |
| Understand what PipeRight does, trust they are local, then enquire | Planned job / rental agent (calmer, compares 2–3 options) |

**Site job in one line:** make the emergency call path obvious immediately, and give planned jobs a clear path through Services → trust → Contact — without a Sydney-corporate feel.

---

## 2. Two personas

### Persona A — Emergency homeowner

- **Moment:** Pipe burst, leak under sink, water everywhere.
- **Device:** Almost always **mobile**.
- **Mindset:** Panic; will not read essays; needs “local + we come now + phone”.
- **Success:** Tap a **large green Call** button (`07 5550 0142`) within ~5 seconds of landing.
- **Fail:** Small phone link buried under long copy, dark “corporate” homepage, or map embed that steals the fold.

### Persona B — Planned job / rental agent

- **Moment:** Blocked drain, hot water failing, dripping tap, small bathroom repair; agent booking for a rental unit.
- **Device:** Mobile or desktop; may compare providers.
- **Mindset:** Wants clarity on services, local proof, reviews; OK with a **form** or email if not urgent.
- **Success:** Services cards → Reviews/About trust → Contact form (or call if preferred).
- **Fail:** Everything framed as “emergency only”; no Reviews; no suburb list; form feels fake with no disclaimer on a demo.

---

## 3. Three problems without a normal site today

### 3.1 No owned URL — Facebook-only looks unprofessional

When someone asks “got a website?” they send a FB page. Competitors with proper sites win the trust race. Kylie already feels this gap.

**Plan fix:** Five clean pages under one demo URL (preview) that Dave can forward to Kylie and later to customers.

### 3.2 Emergency path invisible

Google Maps / Facebook do not put a huge “we come for bursts” call CTA in front of a panicked visitor in five seconds.

**Plan fix:** Home hero + sticky header/footer **green Call** on every page; emergency language above the fold; secondary “Get a quote” for non-urgent.

### 3.3 Mixed intent in one channel

Panic calls, planned repairs, and rental-agent jobs all hit the same informal FB inbox — no Services / Reviews / Contact structure.

**Plan fix:** Explicit **Services** split (emergency vs planned), **Reviews** for trust, **Contact** for forms — phone always available.

---

## 4. Page map — 5 pages (no 6th)

Kylie’s list is the scope. Emergency urgency is a **Home + CTA pattern**, not a sixth route.

| Route | Page | Job |
|-------|------|-----|
| `/` | **Home** | Who we are in 5s · huge emergency call · trust · teasers |
| `/services` | **Services** | Emergency · drains · hot water · taps / minor repairs |
| `/about` | **About** | Dave & Kylie · licensed · local GC · photos (stock/AI in Phase 2) |
| `/reviews` | **Reviews** | Demo testimonials (e.g. Sarah M.) — no real surnames |
| `/contact` | **Contact / Quote** | Form + phone + suburbs + Maps **link** (no heavy embed) + demo disclaimer |

**Nav (all pages):** Home · Services · About · Reviews · Contact · **Call** (green).

**Why not a 6th page:** Letter caps at five unless justified. A separate “Emergency” page would split the 5-second path; urgency belongs on Home and as sticky call. Suburb SEO landings, blog, booking, chatbot — explicitly out of v1.

```
Home ──► Services ──► Contact
  │         ▲
  ├──► About
  ├──► Reviews ──► Contact
  └──► tel: sticky Call (all pages)
```

---

## 5. Why Dave/Kylie say “yes” · why the visitor doesn’t leave

### Dave / Kylie say yes (3)

1. **Emergency CTA matches their #1 job** — big green call, not a buried number.
2. **Exactly five pages from Kylie’s list** — no 20-page sprawl, no calendar/payment/blog.
3. **Light, local Gold Coast vibe** — not a black corporate Sydney template; feels like their small crew.

### Visitor doesn’t leave (3)

1. **Phone above the fold + sticky on mobile** — panic path works in seconds.
2. **Clear split:** urgent = call · planned = Services → Contact form.
3. **Local proof before ask:** suburbs (Nerang / Robina / Helensvale / Mudgeeraba) + Reviews near the conversion path.

---

## 6. Home — block by block (wireframe in words)

1. **Top bar** — Logo “PipeRight Solutions” · nav (Home / Services / About / Reviews / Contact) · **green Call** button (`tel:0755500142`).
2. **Hero (asymmetric / bento — Phase 2 UI)** — Left/main: headline for urgency (“Burst pipe? We’re on the Gold Coast.”) · sub: “Dave & Kylie · ~8 years · Nerang / Robina / Helensvale” · primary **Call now** · secondary **Get a quote** → `/contact`. Right/side: hero photo (plumber / pipes / home — stock or AI).
3. **Trust strip** — Licensed (demo claim) · Local family crew · Same-day emergency language (demo — not a live SLA).
4. **Two-path split** — Card **Emergency — Call now** vs card **Book a visit — Quote form**.
5. **Services teasers** — Four cards (Emergency / Drains / Hot water / Taps & minor repairs) → `/services`.
6. **Reviews teaser** — Two–three short quotes → `/reviews`.
7. **About teaser** — Dave & Kylie one-liner + photo mood → `/about`.
8. **Footer** — Phone · `hello@piperight-demo.example` · suburb list · portfolio/demo disclaimer · **Open in Google Maps** text link (Gold Coast area — no iframe).

**Mobile-first:** Call button never smaller than a comfortable thumb target; hero stacks photo under copy; sticky call bar acceptable on small screens.

---

## 7. Image plan (Phase 2 — not empty grey blocks)

| Placement | Subject | Source (Phase 2) |
|-----------|---------|------------------|
| Home hero | Plumber at work / pipes / Gold Coast–style home exterior | Stock **or** Cursor-generated AI |
| Services — Emergency | Tools / van / urgent repair mood | Stock / AI |
| Services — Drains | Drain / sink / blockage context | Stock / AI |
| Services — Hot water | Hot water system / cylinder | Stock / AI |
| Services — Taps / minor | Tap / bathroom fitting | Stock / AI |
| About | Friendly two-person / van / local street mood (not real Dave/Kylie faces required) | Stock / AI |
| Reviews | Optional soft light background only | Texture or none |

**Rule:** Every photo source goes in README (URL or `Cursor-generated YYYY-MM-DD`). No claiming real job photos.

---

## 8. Primary conversion — call vs form

| Priority | Action | Why |
|----------|--------|-----|
| **Primary** | **Phone call** `07 5550 0142` | Letter: phone is main; emergency must work in ~5s; mobile-first |
| **Secondary** | Contact / quote **form** | Younger visitors + planned jobs + after-hours intent; rental agents often prefer written detail |

**Implementation notes (Phase 2):**

- Sticky or persistent **green Call** on all pages.
- Form fields (draft): Name · Phone · Email · Suburb · Urgent? (Y/N) · Message · **demo disclaimer** (no real send / portfolio only).
- Map: **link only** on Contact (and footer) — never a heavy embed on every page (letter: friend’s site lagged).

---

## Phase 2 reminder (after ACK + Lika visual brief)

- Next.js + Tailwind · GitHub Pages **or** Vercel  
- Five pages per this plan  
- Images in hero / services / about  
- Mobile-first · basic SEO meta · form disclaimer  
- README: **3 UX decisions** + image sources  
- `docs/screenshots/` — “before” (no site / FB-only story) + “after”  
- UI: **bento / asymmetric**, light local palette — **≠** Garden City coastal · **≠** Fence Depot industrial grey + amber  

**Do not start Phase 2 until:** `site plan ok — build` + visual brief from Lika.
