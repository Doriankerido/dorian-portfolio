/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#F2EBD7',
        ink: '#3B15D5',
        accent: '#E8660A',
        'accent-dark': '#C05208',
        muted: '#6B5E45',
        surface: '#EAE2CB',
        lemon: '#FFF207',
      },
      fontFamily: {
        display: ['"Tanker"', 'system-ui', 'sans-serif'],
        body: ['"Satoshi"', 'system-ui', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}

