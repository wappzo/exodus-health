import type { Metadata, Viewport } from 'next'
import { DM_Sans, DM_Serif_Display } from 'next/font/google'
import { SITE } from '@/lib/constants'
import './globals.css'

/* ── Fonts ─────────────────────────────────────────────────────
   next/font/google optimises these: zero layout shift, WOFF2,
   preload, subsetting, and self-hosting in the build output.
   ─────────────────────────────────────────────────────────── */
const dmSans = DM_Sans({
  subsets:  ['latin'],
  weight:   ['300', '400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display:  'swap',
})

const dmSerif = DM_Serif_Display({
  subsets:  ['latin'],
  weight:   ['400'],
  style:    ['normal', 'italic'],
  variable: '--font-dm-serif',
  display:  'swap',
})

/* ── SEO Metadata ──────────────────────────────────────────────
   next/metadata generates <title>, <meta>, <link rel="canonical">
   and Open Graph tags automatically on every page.
   ─────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),

  title: {
    default:  `${SITE.name} — Specialist Diabetes Consultations, UK`,
    template: `%s | ${SITE.name}`,
  },

  description: SITE.description,

  keywords: [
    'diabetes specialist UK',
    'private diabetes consultation London',
    'GMC registered diabetologist',
    'CQC regulated diabetes clinic',
    'type 2 diabetes help UK',
    'gestational diabetes consultation',
    'Harley Street diabetes specialist',
    'insulin management UK',
    'HbA1c management',
    'private diabetes care',
  ],

  authors:  [{ name: SITE.name }],
  creator:  SITE.name,
  publisher:SITE.name,

  // Canonical URL & locale
  alternates: { canonical: '/' },

  // Open Graph — controls appearance on Facebook, LinkedIn, WhatsApp
  openGraph: {
    title:       `${SITE.name} — Specialist Diabetes Consultations`,
    description: SITE.description,
    url:         SITE.url,
    siteName:    SITE.name,
    locale:      SITE.locale,
    type:        'website',
    images: [{
      url:    '/og-image.png',   // Add a 1200×630 image to /public
      width:  1200,
      height: 630,
      alt:    `${SITE.name} — Specialist Diabetes Consultations, UK`,
    }],
  },

  // Twitter / X card
  twitter: {
    card:        'summary_large_image',
    title:       `${SITE.name} — Specialist Diabetes Consultations`,
    description: SITE.description,
    images:      ['/og-image.png'],
  },

  // Verification (add your actual property IDs when live)
  verification: {
    google: 'REPLACE_WITH_GOOGLE_SEARCH_CONSOLE_TOKEN',
  },

  // Robots
  robots: {
    index:                  true,
    follow:                 true,
    googleBot: {
      index:               true,
      follow:              true,
      'max-image-preview': 'large',
      'max-snippet':       -1,
    },
  },
}

/* ── Viewport ──────────────────────────────────────────────────
   Separate export — best practice in Next.js 14+
   ─────────────────────────────────────────────────────────── */
export const viewport: Viewport = {
  width:        'device-width',
  initialScale: 1,
  themeColor:   '#0F2040',   // Navy-900 — browser chrome tint on mobile
}

/* ── Root Layout ───────────────────────────────────────────── */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en-GB"
      className={`${dmSans.variable} ${dmSerif.variable}`}
    >
      <body>
        {/* Skip link — accessibility for keyboard users */}
        <a href="#main" className="skip-link">
          Skip to main content
        </a>

        {/* JSON-LD structured data — Google rich results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context':   'https://schema.org',
              '@type':      'MedicalClinic',
              name:         SITE.name,
              description:  SITE.description,
              url:          SITE.url,
              telephone:    SITE.phone,
              email:        SITE.email,
              priceRange:   '££',
              currenciesAccepted: 'GBP',
              paymentAccepted:    'Cash, Credit Card',
              address: {
                '@type':          'PostalAddress',
                streetAddress:    SITE.address.street,
                addressLocality:  SITE.address.city,
                postalCode:       SITE.address.postcode,
                addressCountry:   'GB',
              },
              openingHoursSpecification: [
                { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '08:00', closes: '19:00' },
                { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '09:00', closes: '13:00' },
              ],
              medicalSpecialty: 'Endocrinology',
              availableService: [
                { '@type': 'MedicalTherapy', name: 'Type 1 Diabetes Consultation' },
                { '@type': 'MedicalTherapy', name: 'Type 2 Diabetes Consultation' },
                { '@type': 'MedicalTherapy', name: 'Gestational Diabetes Consultation' },
                { '@type': 'MedicalTherapy', name: 'Pre-diabetes Assessment' },
              ],
              hasCredential: [
                { '@type': 'EducationalOccupationalCredential', name: 'CQC Registered' },
                { '@type': 'EducationalOccupationalCredential', name: 'GMC Registered Doctors' },
              ],
              sameAs: [],
            }),
          }}
        />

        {children}
      </body>
    </html>
  )
}
