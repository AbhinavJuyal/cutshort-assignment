/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        primary: "#202532",
        secondary: "#9ca3b4",
        active: "#664de6",
        outline: "#eef2f7",
      },
    },
  },
  plugins: [],
};
