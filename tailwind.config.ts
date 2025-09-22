/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fef2f2",
          100: "#fee2e2",
          500: "#ef4444", // Red color for Amazon-like theme
          600: "#dc2626",
          700: "#b91c1c",
        },
      },
      animation: {
        spin: "spin 1s linear infinite",
        bounce: "bounce 1s infinite",
      },
    },
  },
  plugins: [],
};
