import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // ── COBALT BLUE PALETTE ─────────────────────────────────────
      colors: {
        // Navy — Primary authority (headers, dark sections, footers)
        navy: {
          950: '#0A1628',
          900: '#0F2040',
          800: '#163160',
          700: '#1D4280',
          600: '#2456A4',
        },
        // Cobalt — Primary accent (CTAs, links, icons)
        cobalt: {
          DEFAULT: '#1E6FD9',
          hover:   '#1558B0',
          light:   '#4A8FE8',
          sky:     '#7DB4F5',
          pale:    '#C2D9F9',
          tint:    '#E8F1FD',
          wash:    '#F0F6FF',
        },
        // Neutrals
        ice:    '#F8FAFD',
        mist:   '#EEF3F9',
        silver: '#D8E3F0',
        steel:  '#B0C3DC',
        // Text
        'text-navy':    '#0A1628',
        'text-body':    '#1E3A5F',
        'text-mid':     '#3A5980',
        'text-soft':    '#6A88AB',
        'text-on-dark': '#C2D9F9',
        // Accent
        gold: '#D4941A',
      },

      // ── TYPOGRAPHY ──────────────────────────────────────────────
      fontFamily: {
        sans:    ['var(--font-dm-sans)',    'system-ui', 'sans-serif'],
        display: ['var(--font-dm-serif)',   'Georgia', 'serif'],
      },

      // ── SPACING ─────────────────────────────────────────────────
      maxWidth: {
        content: '82.5rem', // 1320px
      },

      // ── BORDER RADIUS ───────────────────────────────────────────
      borderRadius: {
        '2xl': '1rem',      // 16px
        '3xl': '1.25rem',   // 20px
        '4xl': '1.5rem',    // 24px
      },

      // ── BOX SHADOWS ─────────────────────────────────────────────
      boxShadow: {
        'sm-blue':    '0 1px 3px rgba(10,22,40,.05), 0 2px 8px rgba(10,22,40,.04)',
        'md-blue':    '0 4px 16px rgba(10,22,40,.08), 0 1px 3px rgba(10,22,40,.04)',
        'lg-blue':    '0 8px 32px rgba(10,22,40,.12), 0 2px 8px rgba(10,22,40,.05)',
        'hover-blue': '0 16px 48px rgba(30,111,217,.15), 0 4px 14px rgba(10,22,40,.1)',
      },

      // ── ANIMATIONS ──────────────────────────────────────────────
      animation: {
        'fadeup':    'fadeup 0.8s ease both',
        'blink':     'blink 2.4s ease-in-out infinite',
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
      },
      keyframes: {
        fadeup: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1',  transform: 'scale(1)' },
          '50%':      { opacity: '0.4', transform: 'scale(1.5)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.5' },
        },
      },

      // ── TRANSITIONS ─────────────────────────────────────────────
      transitionDuration: {
        '150': '150ms',
        '220': '220ms',
        '550': '550ms',
      },
    },
  },
  plugins: [],
}

export default config
