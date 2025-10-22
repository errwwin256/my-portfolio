/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lavender: "#C8A2C8",
        ube: "#7F67BE",
        violet: "#9B59B6",
      },
      fontFamily: {
        heading: ["Quicksand", "sans-serif"],
        body: ["Lora", "serif"],
      },
    },
  },
  plugins: [],
};
