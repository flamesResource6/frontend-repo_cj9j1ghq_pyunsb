import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './styles/**/*.{ts,tsx,css}',
    './stories/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          dusk: '#0A0E12'
        },
        accent: '#60E6D9',
        'accent-soft': 'rgba(96,230,217,0.15)',
        'glass-light': 'rgba(255,255,255,0.12)',
        'glass-heavy': 'rgba(255,255,255,0.18)',
        'border-glow': 'rgba(255,255,255,0.25)',
        'text-primary': '#FFFFFF',
        'text-secondary': 'rgba(255,255,255,0.64)',
        'text-tertiary': 'rgba(255,255,255,0.36)'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        mono: ['ui-monospace', 'SFMono-Regular']
      },
      borderRadius: {
        glass: '18px'
      },
      boxShadow: {
        glass: '0 8px 32px rgba(0,0,0,0.28)'
      },
      backdropBlur: {
        glass: '12px'
      }
    }
  },
  plugins: []
}
export default config
