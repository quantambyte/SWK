import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "wave-img": "url(/assets/services-bg.svg)",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        nura: ["var(--font-nura)"],
        nuraBold: ["var(--font-nura-bold)"],
      },
      colors: {
        brand: "#8b4b9b",
        brandBlue: "#51bdce",
        middleBlue: "#4c83b7",

        brandDark: "#1b1028",

        backgroundColor: "#27173a",

        "heading-light": "#262626",
        "heading-dark": "#fff",
        light: "#737373",
        dark: "#fff",
        black: "#000",
        white: "#fff",
        purple: "#27173a",
        grey: "#757575",
        "dark-mode-grey": "#C2C2C2",
        maroon: "#B70DFD",
        "dark-bg": "#171717",
        "dark-mode-bg": "#0C0800",
        test: "#c5d7ff",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
export default config;
