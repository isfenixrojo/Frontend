/** @type {import('tailwindcss').Config} */
export default {
  content: ['./public/**/*.html', './index.html', './src/**/*.{js,ts}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef4ff', 100: '#d9e6ff', 200: '#bcd3ff', 300: '#8eb6ff',
          400: '#598dff', 500: '#3366ff', 600: '#1f47f5', 700: '#1735e1',
          800: '#192db6', 900: '#1b2c8f', 950: '#151a52'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};
