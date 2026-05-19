/** Single source of truth for all contact details, regulatory info, and site metadata */
export const SITE = {
  name:        'Exodus Health',
  tagline:     'Empowering health, Inspiring change',
  description: 'Affordable private diabetes consultations with GMC-registered specialists. Real-world support for type 1, type 2, gestational diabetes and pre-diabetes. CQC regulated. No referral needed.',
  url:         'https://www.exodushealth.uk',
  locale:      'en_GB',

  // Primary landline
  phone:       '0208 252 0078',
  phoneHref:   'tel:02082520078',

  // Mobile
  mobile:      '07982 906 637',
  mobileHref:  'tel:07982906637',

  email:       'enquiries@exodushealth.uk',
  emailHref:   'mailto:enquiries@exodushealth.uk',

  address: {
    street:  'Exodus House, 70 Draycott Avenue',
    city:    'Kenton, Harrow',
    postcode:'HA3 0BU',
    tube:    'Kenton (Bakerloo line)',
    full:    'Exodus House, Harrow HA3 0BU',
  },

  hours: {
    weekdays: 'Saturday  9am – 3pm',
    saturday: '',
    sunday:   '',
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
    // {
    //   label: 'NMC — Nursing & Midwifery Council',
    //   href:  'https://www.nmc.org.uk',
    // },
    // {
    //   label: 'BDA — British Dietetic Association',
    //   href:  'https://www.bda.uk.com',
    // },
  ],
} as const
