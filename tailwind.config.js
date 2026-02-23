/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        midnight: "#061826",
        tech: "#0B2233",
        techLight: "#132F44",

        emerald: "#10B981",
        emeraldSoft: "#34D399",

        electric: "#F8FAFC",
        electricSoft: "#CBD5E1",

        borderGlass: "rgba(255,255,255,0.08)",
        glass: "rgba(255,255,255,0.05)",
      },

      fontFamily: {
        heading: ["Quicksand", "sans-serif"],
        body: ["Lora", "serif"],
      },
    },
  },

  plugins: [],
};
