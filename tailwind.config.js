/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    colors: {
      'dark-blue': '#0A192F',
      'light-blue': '#B2E9FF',
      'white': '#F4FDFE',
      'green': '#40FFE6',
      'green-focus': '#00F0B4'
    },
    fontFamily: {
      spaceGrotesk: ['Space Grotesk', 'sans-serif'],
    },
  },
  plugins: [],
}
