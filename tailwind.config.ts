import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1025px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "wave-img-hero": "url(/assets/hero/hero-bg.svg)",
        "wave-img": "url(/assets/services-bg.svg)",

        "gradient-bg-dark":
          "radial-gradient(circle, #aa60bd 0%, #6c367a 0%, #1b1028 100%, #1b1028 100%)",
        "gradient-bg-light":
          "radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(236, 218, 240, 1) 0%, rgba(180, 111, 197, 1) 100%, rgba(180, 111, 197, 1) 100%)",
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
