/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      slate: "#0F172A",
      ash: "#fae8ff",
      "green-1": "#86efac",
      "green-2": "#4ade80",
      "green-3": "#22C55E",
      "green-4": "#16A34A",
      "green-5": "#15803D",
      "green-6": "#166534",
      "green-7": "#14532D",
      "yellow-1": "#FDE047",
      "yellow-2": "#FACC15",
      "merun-1": "#B91C1C",
      trans: "rgba(0, 0, 0, 0.2)",

      white: "#F0FDFA",
      "sky-blue": "#0284C7",
      black: "#000000",
      wall: "#425F57",
    },
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      display: ["Oswald"],
      body: ['"Open Sans"'],
      nunito: ["nunito", "sans-serif"],
      MyFont: ['"My Font"', "serif"],
      sofia: ["Sofia Pro", "sans"],
    },
    extend: {},
  },
  plugins: [],
};
