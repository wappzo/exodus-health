/** Single source of truth for all contact details, regulatory info, and site metadata */
export const SITE = {
  name:        'Exodus Health',
  tagline:     'Specialist Diabetes Care',
  description: 'Affordable private diabetes consultations with GMC-registered specialists. Real-world support for type 1, type 2, gestational diabetes and pre-diabetes. CQC regulated. No referral needed.',
  url:         'https://exodushealth.co.uk',
  locale:      'en_GB',
  phone:       '0800 123 4567',
  phoneHref:   'tel:08001234567',
  email:       'hello@exodushealth.co.uk',
  emailHref:   'mailto:hello@exodushealth.co.uk',
  address: {
    street:  '12 Harley Street',
    city:    'London',
    postcode:'W1G 9PQ',
    tube:    "Regent's Park",
    full:    '12 Harley Street, London W1G 9PQ',
  },
  hours: {
    weekdays: 'Mon – Fri  8am – 7pm',
    saturday: 'Saturday  9am – 1pm',
    sunday:   'Closed',
  },
  regulatory: {
    cqcNumber:       '1-2345678',
    companiesHouseNo:'12345678',
    niceGuidelines:  'NG28 & NG17',
  },
  registrations: [
    {
      label: 'GMC — General Medical Council',
      href:  'https://www.gmc-uk.org',
    },
    {
      label: 'NMC — Nursing & Midwifery Council',
      href:  'https://www.nmc.org.uk',
    },
    {
      label: 'BDA — British Dietetic Association',
      href:  'https://www.bda.uk.com',
    },
  ],
} as const
