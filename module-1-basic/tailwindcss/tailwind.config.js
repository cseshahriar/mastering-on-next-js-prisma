/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // For App Router
    './pages/**/*.{js,ts,jsx,tsx,mdx}', // For Pages Router (if you're using it)
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // vuejs: "#49e659" // text-vuejs
        vuejs: {
          100: "#49e659",
          932: "#434252"
        }
      },
      fontSize: {
        xs: "12px",
        sm: "15px",
        base: "18px"
      }
    },
  },
  plugins: [],
};