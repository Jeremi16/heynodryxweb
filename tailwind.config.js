/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        bg: '#0A0A0A',
        surface: '#111111',
        border: '#1F1F1F',
        muted: '#888888',
        accent: '#60A5FA',
        'accent-glow': '#93C5FD',
      },
    },
  },
  plugins: [],
}
