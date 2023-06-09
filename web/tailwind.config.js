/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-roboto)'],
        'Fredoka': ["Fredoka","sans-serif"],
        'Baloo': ['var(--font-baloo)'],
      },
      colors:{
        green150: '#00AA95',
        green200: '#A5E887'
      },
    },
  },
  plugins: [],
}
