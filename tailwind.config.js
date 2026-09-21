/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0A0A0A',
        surface: {
          DEFAULT: '#111111',
          hover: '#161616',
          muted: '#18181B',
          card: '#141414',
        },
        border: {
          DEFAULT: '#27272A',
          subtle: '#1F1F23',
          gold: 'rgba(212, 175, 55, 0.3)',
        },
        gold: {
          50: '#FAF6E8',
          100: '#F3EAC6',
          200: '#E6D48D',
          300: '#D9BD54',
          400: '#D4AF37', // Primary warm champagne gold
          500: '#B89327',
          600: '#91711A',
          700: '#6C5312',
          800: '#46350B',
          900: '#231A05',
          light: '#E6C687',
          glow: 'rgba(212, 175, 55, 0.15)',
        },
        muted: {
          DEFAULT: '#A1A1AA',
          foreground: '#71717A',
        },
        primary: {
          DEFAULT: '#F5F5F5',
          foreground: '#0A0A0A',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
        display: ['var(--font-cormorant)', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-subtle': 'pulseSubtle 3s infinite ease-in-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gold-gradient': 'linear-gradient(135deg, #E6C687 0%, #D4AF37 50%, #9A7B2C 100%)',
        'dark-overlay': 'linear-gradient(to bottom, rgba(10,10,10,0.4) 0%, rgba(10,10,10,0.85) 75%, #0A0A0A 100%)',
      },
    },
  },
  plugins: [],
}
