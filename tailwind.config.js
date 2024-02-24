/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          DEFAULT: '#333333', // Dark Charcoal
        },
        accent1: {
          DEFAULT: '#005A5A', // Deep Teal
        },
        accent2: {
          DEFAULT: '#990000', // Crimson Red
        },
        neutral: {
          DEFAULT: '#CCCCCC', // Light Gray
        },
        highlight: {
          DEFAULT: '#b8905b', // Gold
        },
        background: {
          DEFAULT: '#143d63', // Very Dark Gray
        },
      },
    },
  },
  plugins: [],
};
