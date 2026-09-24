/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0B121C',
          900: '#0F1B2B',
          800: '#162438',
          700: '#1D3049',
          600: '#2A425F',
        },
        paper: {
          DEFAULT: '#F6F4EF',
          dim: '#EDEAE1',
        },
        bronze: {
          50: '#FAF4EA',
          200: '#E8CFA0',
          400: '#C89A55',
          500: '#B8874B',
          600: '#996E3B',
          700: '#7A5730',
        },
        slate: {
          450: '#6B7684',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Manrope"', 'sans-serif'],
      },
      maxWidth: {
        prose: '68ch',
      },
      boxShadow: {
        soft: '0 20px 60px -20px rgba(11,18,28,0.25)',
      },
    },
  },
  plugins: [],
}
