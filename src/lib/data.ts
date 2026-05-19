import type {
  NavLink, Service, Stat, ContactItem, Condition,
  ComplianceItem, Doctor, Testimonial, Step, FooterColumn,
} from '@/types'
import { SITE } from './constants'

export const NAV_LINKS: NavLink[] = [
  { label: 'Home',        href: '/' },
  { label: 'Services',    href: '/#services' },
  { label: 'Our Doctors', href: '/#doctors' },
  { label: 'About Us',    href: '/about' },
  { label: 'Contact',     href: '/contact' },
]

export const SERVICES: Service[] = [
  {
    id:       'diagnosis',
    number:   '01',
    emoji:    '🔬',
    title:    'Diagnosis',
    headline: 'Getting your diagnosis right, from the start.',
    body:     'An accurate diagnosis is the foundation of all good diabetes management. Our specialists conduct thorough assessments — including HbA1c, fasting glucose, and full clinical history — to confirm your diagnosis and diabetes type with confidence.',
  },
  {
    id:       'initial-management',
    number:   '02',
    emoji:    '📋',
    title:    'Initial Management',
    headline: 'A clear, structured plan from day one.',
    body:     'Newly diagnosed? We guide you through your first steps — understanding your condition, setting realistic targets, and starting the right treatment immediately. No overwhelming leaflets; just clear, personalised clinical guidance tailored to you.',
  },
  {
    id:       'dietary',
    number:   '03',
    emoji:    '🥗',
    title:    'Dietary Management',
    headline: 'Evidence-based nutrition, tailored to your life.',
    body:     'Our dietitian-led sessions go far beyond generic food lists. We create personalised dietary plans that account for your culture, preferences, and lifestyle — with practical strategies to manage blood sugar through food first.',
  },
  {
    id:       'blood-sugar',
    number:   '04',
    emoji:    '📊',
    title:    'Blood Sugar Management & Monitoring',
    headline: 'Understand your numbers. Control your condition.',
    body:     'We help you interpret blood glucose readings in the context of your daily life — meals, exercise, stress, and medication. Structured monitoring reviews ensure your targets remain appropriate, achievable, and adjusted as your needs change.',
  },
  {
    id:       'insulin',
    number:   '05',
    emoji:    '💉',
    title:    'Insulin Start & Monitoring',
    headline: 'Starting insulin? We make the transition safe and simple.',
    body:     'Beginning insulin therapy can feel daunting. Our specialists provide comprehensive initiation support — selecting the right type, teaching safe injection technique, titrating doses, and monitoring your response closely every step of the way.',
  },
  {
    id:       'long-term',
    number:   '06',
    emoji:    '🔄',
    title:    'Long-term Monitoring of Diabetes',
    headline: 'Ongoing care that evolves with you.',
    body:     'Diabetes management is not a one-off event. Our structured reviews cover all NICE-recommended care processes: HbA1c, blood pressure, cholesterol, kidney function, eye screening referral, foot assessment, and medication review — including stopping medications that are no longer effective.',
  },
  {
    id:       'obesity',
    number:   '07',
    emoji:    '⚖️',
    title:    'Obesity & Weight Loss Medications',
    headline: 'Weight management as part of your diabetes care.',
    body:     'Obesity and type 2 diabetes are deeply interlinked. We provide specialist assessment for GLP-1 receptor agonists (including Mounjaro and Ozempic), structured weight management support, and evidence-based pharmacological options to help you achieve and sustain a healthier weight.',
  },
  {
    id:       'cgm',
    number:   '08',
    emoji:    '📱',
    title:    'Flash & Continuous Glucose Monitoring',
    headline: 'Real-time data. Real-world clarity.',
    body:     'Flash and continuous glucose monitors (CGMs) transform diabetes management. We advise on the right device for you, help you interpret your ambulatory glucose profile (AGP), and use live data to fine-tune your treatment plan — moving well beyond the single HbA1c reading.',
  },
]

export const STATS: Stat[] = [
  // { value: '28,000+', label: 'Patients seen across the UK' },
  // { value: '4.9 / 5', label: 'Patient satisfaction score' },
  { value: '1',      label: 'GMC-registered specialists' },
  { value: '2–5 days',label: 'Average wait for appointment' },
]

export const CONTACT_ITEMS: ContactItem[] = [
  {
    emoji: '📞',
    label: 'Phone',
    value: SITE.phone,
    sub:   'Mon–Fri 8am–7pm · Sat 9am–1pm',
    href:  SITE.phoneHref,
  },
  {
    emoji: '✉️',
    label: 'Email',
    value: SITE.email,
    sub:   'Response within 1 business day',
    href:  SITE.emailHref,
  },
  {
    emoji: '📍',
    label: 'Clinic',
    value: `${SITE.address.street}, ${SITE.address.city}`,
    sub:   `${SITE.address.postcode} · ${SITE.address.tube} tube`,
  },
  {
    emoji: '🗓️',
    label: 'Hours',
    value: SITE.hours.weekdays,
    sub:   '', //`${SITE.hours.saturday} · Sunday closed`,
  },
]

export const CONDITIONS: Condition[] = [
  {
    emoji:       '💉',
    title:       'Type 1 Diabetes',
    description: 'Insulin optimisation, CGM interpretation, sick day rules, hypo management and lifestyle support.',
  },
  {
    emoji:       '🩸',
    title:       'Type 2 Diabetes',
    description: 'Medication review, HbA1c management, GLP-1 therapy, remission strategies and weight management.',
  },
  {
    emoji:       '🤱',
    title:       'Gestational Diabetes',
    description: 'Monitoring, medication, dietary guidance and postnatal follow-up for mother and baby.',
  },
  {
    emoji:       '⚠️',
    title:       'Pre-diabetes & MODY',
    description: 'Early intervention, lifestyle advice, and specialist review for those at risk or with rare diabetes types.',
  },
]

export const COMPLIANCE_ITEMS: ComplianceItem[] = [
  {
    emoji:       '🏥',
    title:       'CQC registered & regulated',
    description: 'Registered with the Care Quality Commission — regular inspection across all five quality standards.',
  },
  {
    emoji:       '⚕️',
    title:       'GMC-registered doctors only',
    description: 'Every doctor holds a current GMC licence to practise, verified on an ongoing basis.',
  },
  {
    emoji:       '📋',
    title:       'NICE-guideline adherent',
    description: 'All care follows NICE guidelines NG28 (type 2) and NG17 (type 1). Mandatory CPD for all clinicians.',
  },
  {
    emoji:       '🔒',
    title:       'GDPR & ICO registered',
    description: 'Your health data handled to the highest UK data protection standards. Fully ICO registered.',
  },
]

export const DOCTORS: Doctor[] = [
  {
    id:             'aiyappa',
    name:           'Dr. Aiyappa Biddanda',
    role:           'Consultant Endocrinologist',
    emoji:          '👨‍⚕️',
    qualifications: "Consultant Endocrinologist, MRCP MSc",
    tags:           ['Type 1 & 2', 'GLP-1 therapy', 'Insulin optimisation'],
  },
  // {
  //   id:             'whitfield',
  //   name:           'Dr. James Whitfield',
  //   role:           'GP with Diabetes Specialism',
  //   emoji:          '👨‍⚕️',
  //   qualifications: 'MBChB, MRCGP (Dist.) · 9 years · NHS Clinical Lead, Diabetes & Metabolic Health, Manchester',
  //   tags:           ['Type 2', 'Pre-diabetes', 'Metabolic health'],
  // },
  // {
  //   id:             'nair',
  //   name:           'Dr. Priya Nair',
  //   role:           'Endocrinologist & Diabetologist',
  //   emoji:          '👩‍⚕️',
  //   qualifications: 'MD, FRCP · 14 years · Gestational diabetes specialist, UCL NHS Trust London',
  //   tags:           ['Gestational diabetes', 'MODY'],
  // },
  // {
  //   id:             'osei',
  //   name:           'Dr. Samuel Osei',
  //   role:           'Internal Medicine & Diabetes',
  //   emoji:          '👨‍⚕️',
  //   qualifications: 'MD, MSc Endocrinology · 11 years · Complex T1DM & insulin optimisation, Birmingham NHS Trust',
  //   tags:           ['Type 1 complex care', 'HbA1c management'],
  // },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    id:    't1',
    stars: 5,
    tag:   '🩺 Initial consultation · in clinic',
    quote: '"My NHS waiting list was 18 weeks. I called Exodus Health on Monday and was seen by Dr. Mehta that Thursday. She reviewed everything thoroughly and sent a full report to my GP the next morning. Genuinely exceptional care."',
    name:  'Sarah Thompson',
    role:  'Type 2 · Leeds · initial consultation',
    emoji: '👩',
  },
  {
    id:       't2',
    stars:    5,
    tag:      '📋 Annual review · in clinic',
    quote:    "\"The most thorough diabetes review I've ever had — private or NHS. All nine NICE care processes covered and a proper conversation about my lifestyle that my GP never has time for. Worth every penny.\"",
    name:     'James Patel',
    role:     'Type 2 · Birmingham · annual review patient',
    emoji:    '👨',
    featured: true,
  },
  {
    id:    't3',
    stars: 5,
    tag:   '🥗 Dietitian session · by phone',
    quote: '"After years of conflicting advice, the dietitian session was a revelation. A clear, practical plan based on my actual results. My HbA1c dropped 8 points in three months. I\'ve told everyone in my diabetes group."',
    name:  'Robert Hughes',
    role:  'Type 2 · Cardiff · dietitian & follow-up patient',
    emoji: '👴',
  },
]

export const HOW_IT_WORKS_STEPS: Step[] = [
  {
    number: '1',
    title:  'Call or email us',
    body:   'Get in touch by phone or email. Our team will understand your needs and recommend the right consultation type for you.',
  },
  {
    number: '2',
    title:  'We arrange your appointment',
    body:   'We match you with the most suitable specialist. Appointments typically available within 2–5 working days, including Saturdays.',
  },
  {
    number: '3',
    title:  'Attend your consultation',
    body:   'Visit our Harley Street clinic or speak with your doctor by phone. A thorough, unhurried clinical assessment.',
  },
  {
    number: '4',
    title:  'Receive your care plan',
    body:   'Within 24 hours you receive a written clinical summary and personalised care plan. A GP letter is included with your consent.',
  },
]

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    heading: 'Our Services',
    links: [
      'Diagnosis',
      'Initial management',
      'Dietary management',
      'Blood sugar monitoring',
      'Insulin start & monitoring',
      'Long-term monitoring',
      'Obesity & weight loss',
      'Flash & CGM',
    ],
  },
  {
    heading: 'Patient Info',
    links: ['How it works', 'What to expect', 'Fees & pricing', 'FAQs'],
  },
  {
    heading: 'About Us',
    links: ['About Exodus Health', 'Our doctors', 'CQC registration', 'Complaints procedure'],
  },
]
