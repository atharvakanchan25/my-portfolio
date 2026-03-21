/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        bg:      '#0D0D0D',
        bg2:     '#111111',
        bg3:     '#1A1A1A',
        paper:   '#141414',
        ink:     '#F0EFEC',
        ink2:    '#B8B5AF',
        muted:   '#5A5A5A',
        accent:  '#6366F1',
        accent2: '#7FAF2A',
        warm:    '#C4A882',
        border:  'rgba(240,239,236,0.07)',
      },
      fontFamily: {
        sans:    ['DM Sans', 'system-ui', 'sans-serif'],
        serif:   ['Fraunces', 'Georgia', 'serif'],
        mono:    ['DM Mono', 'monospace'],
      },
      animation: {
        'float':      'float 6s ease-in-out infinite',
        'spin-slow':  'spin 20s linear infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
}
