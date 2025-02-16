/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'class'
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
