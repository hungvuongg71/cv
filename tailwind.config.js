/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#CF6829',
          'orange-light': '#E8834A',
          'orange-dark': '#A8521C',
          'orange-muted': '#F5DDD0',
          black: '#1A1A1A',
          'black-light': '#2C2C2C',
          gray: '#6B6B6B',
          'gray-light': '#F5F3F0',
          'gray-border': '#E2DDD8',
        },
      },
      fontFamily: {
        serif: ['"Anthropic Serif"', 'Georgia', '"Times New Roman"', 'serif'],
        sans: [
          '"Anthropic Sans"',
          'system-ui',
          '-apple-system',
          'sans-serif',
        ],
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
