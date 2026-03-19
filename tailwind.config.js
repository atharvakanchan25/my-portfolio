/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        bg:      '#F8F7F4',
        bg2:     '#F2F0EC',
        bg3:     '#ECEAE4',
        paper:   '#FAF9F6',
        ink:     '#1A1A1A',
        ink2:    '#3D3D3D',
        muted:   '#8A8A8A',
        accent:  '#4F46E5',
        accent2: '#6B8E23',
        warm:    '#C4A882',
        border:  'rgba(26,26,26,0.08)',
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
