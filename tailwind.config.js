/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
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
        "sk-bg-dark": "#292929",
        "sk-dark-100": "#1B1B22",
        "sk-dark-200": "#121212",
        "sk-gray-100": "#6a6a6a",
        "sk-gray-200": "#e5e5e5",
        "sk-gray-500": "#9e9e9e",
        "sk-gray-600": "#757575",
        "sk-gray-700": "#616161",
        "sk-gray-800": "#424242",
        "sk-gray-900": "#212121",
        "sk-text-dark": "#1B1B22",
        "sk-text-light": "#FFFFFF",
        "sk-divider-dark": "#121212",

        //Gray Shades
        "ps-gray-100": "#DFE3FA",
        "ps-gray-200": "#888EB0",
        "ps-gray-300": "#7E88C3",
        "ps-gray-400": "#252945", //Buttons
        "ps-gray-500": "#1E2139",
        "ps-gray-600": "#141625",
        "ps-gray-700": "#0C0E16", //BG
        "ps-gray-800": "#141625",
      },
      fontSize: {
        "32px": "2rem",
        "40px": "2.5rem",
        "78px": "4.5rem",
        "20px": "1.25rem",
        "25px": "1.563rem",
      },
      maxWidth: {
        "500px": "31.25rem",
        "400px": "25rem",
        "205px": "12.8125rem",
      },
      minHeight: {
        "205px": "12.8125rem",
        "500px": "31.25rem",
      },
      spacing: {
        "400px": "25rem",
        "210px": "13.125rem",
        "140px": "8.75rem",
        "78px": "4.875rem",
        "70px": "4.4rem",
        "35px": "2.188rem",
        "30px": "1.875rem",
        "15px": "0.938rem",
      },
    },
  },
  plugins: [],
};
