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
      "green-1": "#22C55E",
      "green-2": "#16A34A",
      "green-3": "#15803D",
      "green-4": "#166534",
      "green-5": "#14532D",
      "green-6": "#10B981",
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
