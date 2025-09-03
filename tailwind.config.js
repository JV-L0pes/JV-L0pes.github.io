/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0d0d0d',
        surface: '#151515',
        card: '#202020',
        text: '#e0e0e0',
        muted: '#b0b0b0',
        border: '#444444',
        primary: '#ff3366',
        accent: '#9933ff',
      },
      boxShadow: {
        glowPrimary: '0 0 20px rgba(255, 51, 102, 0.3)',
        glowAccent: '0 0 20px rgba(153, 51, 255, 0.3)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #ff3366, #9933ff)',
        'gradient-secondary': 'linear-gradient(135deg, #1a1a1a, #202020)'
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}
