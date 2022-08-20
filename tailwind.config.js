/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "sk-blue-100": "#00004d",
        "sk-blue-200": "#002366",
        "sk-blue-300": "#192bc2",
        "sk-blue-400": "#0000ff",
        "sk-blue-500": "#1560BD",
        "sk-blue-600": "#73c2fb",
        "sk-blue-700": "#1E90FF",
        "sk-blue-800": "#87ceeb",
        "sk-dark-100": "#1B1B22",
      },
    },
  },
  plugins: [],
};
