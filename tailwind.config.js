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
        "sk-gray-100": "#6a6a6a",
        "sk-gray-200": "#e5e5e5",
      },
      fontSize: {
        "32px": "2rem",
        "40px": "2.5rem",
        "78px": "4.5rem",
        "20px": "1.25rem",
        "25px": "1.563rem"
      },
      maxWidth: {
        "205px": "12.8125rem",
        "500px": "31.25rem",
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
