/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#eff2f5",
        sidebarBackground: "#0052fe",
      },
    },
  },
  plugins: [],
};
