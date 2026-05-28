import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'cream': '#FFF8F3',
        'soft-beige': '#F5E6D3',
        'pale-pink': '#F5D5D8',
        'light-gray': '#F0F0F0',
        'warm-tan': '#E8D5C4',
      },
      backgroundImage: {
        'gradient-soft': 'linear-gradient(135deg, #FFF8F3 0%, #F5E6D3 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config