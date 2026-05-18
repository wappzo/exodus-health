# Exodus Health — Next.js 14 · Tailwind CSS · TypeScript
## Cobalt Blue Theme · Premium UK Private Diabetes Care

---

## Quick start

```bash
npm install
npm run dev
# → http://localhost:3000
```

```bash
npm run build   # production build
npm run start   # serve production build
npm run lint    # ESLint
npm run type-check  # TypeScript (no-emit)
```

---

## Tech stack

| Layer | Tool | Version |
|---|---|---|
| Framework | Next.js App Router | 14.2.5 |
| Language | TypeScript (strict) | 5.5 |
| Styling | Tailwind CSS | 3.4 |
| Icons | Lucide React | 0.400 |
| Font | DM Sans + DM Serif Display | Google Fonts |
| Utilities | clsx + tailwind-merge | latest |

---

## Project structure

```
src/
├── app/
│   ├── layout.tsx       ← Root layout: fonts, SEO metadata, JSON-LD schema
│   ├── page.tsx         ← Homepage — assembles all sections
│   ├── globals.css      ← Tailwind base + custom utilities (reveal, sec-tag…)
│   ├── sitemap.ts       ← /sitemap.xml — auto-generated for Google
│   ├── robots.ts        ← /robots.txt — crawl rules
│   ├── not-found.tsx    ← 404 page
│   └── loading.tsx      ← Suspense loading UI
│
├── components/
│   ├── layout/
│   │   ├── AccessBar.tsx    ← Dark top bar: address, phone, email, reg pills
│   │   ├── Navbar.tsx       ← Sticky nav: logo, links, CTA, mobile drawer
│   │   └── Footer.tsx       ← 4-col footer with legal text
│   │
│   ├── sections/            ← One file per page section (server components)
│   │   ├── Hero.tsx
│   │   ├── ContactStrip.tsx
│   │   ├── IntroBand.tsx
│   │   ├── Services.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── WhoWeTreat.tsx
│   │   ├── Doctors.tsx
│   │   ├── Testimonials.tsx
│   │   └── ContactCTA.tsx
│   │
│   └── ui/                  ← Reusable primitives
│       ├── Button.tsx        ← 4 variants × 3 sizes, polymorphic <a>
│       ├── Reveal.tsx        ← 'use client' scroll-reveal wrapper
│       ├── SectionTag.tsx    ← Eyebrow label with left bar
│       └── LogoMark.tsx      ← Brand SVG mark
│
├── hooks/
│   └── useReveal.ts         ← IntersectionObserver hook
│
├── lib/
│   ├── constants.ts         ← SITE object: all contact/regulatory details
│   ├── data.ts              ← All content: services, doctors, testimonials…
│   └── utils.ts             ← cn() helper (clsx + tailwind-merge)
│
└── types/
    └── index.ts             ← Shared TypeScript interfaces
```

---

## Cobalt Blue Design System

### Colour palette (in tailwind.config.ts)

| Token | Hex | Usage |
|---|---|---|
| `navy-950` | `#0A1628` | Access bar, footer |
| `navy-900` | `#0F2040` | Hero, dark sections, compliance panel |
| `navy-800` | `#163160` | Contact strip, featured card |
| `navy-700` | `#1D4280` | Hover states, link colours |
| `cobalt` | `#1E6FD9` | Primary CTAs, active links, icons |
| `cobalt-hover` | `#1558B0` | Button hover state |
| `cobalt-light` | `#4A8FE8` | Icons on dark, italic headings |
| `cobalt-sky` | `#7DB4F5` | Muted text on dark |
| `cobalt-pale` | `#C2D9F9` | Borders on dark, eyebrow chips |
| `cobalt-tint` | `#E8F1FD` | Card borders, hover fills |
| `cobalt-wash` | `#F0F6FF` | Section backgrounds |
| `ice` | `#F8FAFD` | Page background |
| `mist` | `#EEF3F9` | Alternate section backgrounds |
| `silver` | `#D8E3F0` | Default borders |
| `gold` | `#D4941A` | Star ratings |

### Typography

- **Display headings:** DM Serif Display — `font-display` class
- **UI / body:** DM Sans — `font-sans` class (default on body)
- Responsive sizes via `.text-clamp-hero`, `.text-clamp-h2`, `.text-clamp-h3` utilities

### Shadows

All shadows use blue-tinted base colour for cohesion:
- `shadow-sm-blue` — default card elevation
- `shadow-md-blue` — modal/panel elevation
- `shadow-hover-blue` — card hover state

---

## SEO setup

### What's included

| Feature | Implementation |
|---|---|
| Title template | `layout.tsx` → `{ template: '%s | Exodus Health' }` |
| Open Graph | `layout.tsx` → `metadata.openGraph` |
| Twitter card | `layout.tsx` → `metadata.twitter` |
| Canonical URL | Per-page `alternates.canonical` |
| robots.txt | `src/app/robots.ts` → `/robots.txt` |
| Sitemap | `src/app/sitemap.ts` → `/sitemap.xml` |
| JSON-LD schema | `layout.tsx` → `MedicalClinic` structured data |
| Security headers | `next.config.js` → `headers()` |
| Theme colour | `viewport` export → `themeColor: '#0F2040'` |

### Before going live

1. Replace `REPLACE_WITH_GOOGLE_SEARCH_CONSOLE_TOKEN` in `layout.tsx`
2. Add a real `1200×630px` Open Graph image at `/public/og-image.png`
3. Update `SITE.url` in `src/lib/constants.ts` with your actual domain
4. Replace phone, email, address, and CQC/Companies House numbers throughout `constants.ts`
5. Add real doctor photos (replace emoji avatars in `Doctors.tsx` with `<Image>`)

---

## Key architecture decisions

### Server vs Client components
- All section and layout components are **React Server Components** (default)
- Only `Navbar.tsx` (`useState`, `useEffect`) and `Reveal.tsx` (IntersectionObserver) are `'use client'`
- `useReveal.ts` hook is shared between Reveal.tsx only

### No online booking
All CTAs link to `tel:` or `mailto:` per the brief. No form or booking widget.

### Single source of truth
All contact details, regulatory information, and site metadata flow from `src/lib/constants.ts` → referenced in `data.ts`, `layout.tsx`, `AccessBar.tsx`, `Navbar.tsx`, `Footer.tsx`, etc.

### Content vs components
Content lives exclusively in `src/lib/data.ts` with typed interfaces in `src/types/index.ts`.
Updating copy requires zero component changes.
