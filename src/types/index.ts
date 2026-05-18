// ── NAVIGATION ──────────────────────────────────────────────────
export interface NavLink {
  readonly label: string
  readonly href:  string
}

// ── SERVICES ────────────────────────────────────────────────────
export interface Service {
  readonly id:       string
  readonly number:   string
  readonly emoji:    string
  readonly title:    string
  readonly headline: string
  readonly body:     string
  readonly featured?: boolean
}

// ── STATS ───────────────────────────────────────────────────────
export interface Stat {
  readonly value: string
  readonly label: string
}

// ── CONTACT ─────────────────────────────────────────────────────
export interface ContactItem {
  readonly emoji: string
  readonly label: string
  readonly value: string
  readonly sub:   string
  readonly href?: string
}

// ── CONDITIONS ──────────────────────────────────────────────────
export interface Condition {
  readonly emoji:       string
  readonly title:       string
  readonly description: string
}

// ── COMPLIANCE ──────────────────────────────────────────────────
export interface ComplianceItem {
  readonly emoji:       string
  readonly title:       string
  readonly description: string
}

// ── DOCTORS ─────────────────────────────────────────────────────
export interface Doctor {
  readonly id:             string
  readonly name:           string
  readonly role:           string
  readonly emoji:          string
  readonly qualifications: string
  readonly tags:           readonly string[]
}

// ── TESTIMONIALS ────────────────────────────────────────────────
export interface Testimonial {
  readonly id:       string
  readonly stars:    number
  readonly tag:      string
  readonly quote:    string
  readonly name:     string
  readonly role:     string
  readonly emoji:    string
  readonly featured?: boolean
}

// ── HOW IT WORKS STEPS ──────────────────────────────────────────
export interface Step {
  readonly number: string
  readonly title:  string
  readonly body:   string
}

// ── FOOTER LINKS ────────────────────────────────────────────────
export interface FooterColumn {
  readonly heading: string
  readonly links:   readonly string[]
}
