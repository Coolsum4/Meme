/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
        'gradient-primary':"background: linear-gradient(90deg, #672280 1.18%, #A626D3 100%)",

      },
      fontFamily: { impact: "Impact", karla: "Karla", inter: "Inter" },
    },
    colors: { white: "#fff", gray: "#0d0d0d" },
    fontSize: { base: "12px", lg: "32px" },
  },
  corePlugins: { preflight: false },
};
