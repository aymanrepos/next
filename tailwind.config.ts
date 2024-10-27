import type { Config } from "tailwindcss";
import tailwindcss_animate from "tailwindcss-animate";
const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      primary: "var(--font-primary)",
      secondary: "var(--font-secondary)",
    },

    extend: {
     
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        gold: {
          "300": "#F9A014",
          "400": "#B57B1F",
          "500": "#9F6201 ",
        },
        light: {
          "200": "#E8E9E9",
        },
        dark: {
          "200": "#0D0F10",
          "300": "#131619",
          "400": "#1A1D21",
          "500": "#363A3D",
          "600": "#76828D",
          "700": "#ABB8C4",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
    },
  },
  plugins: [tailwindcss_animate],
};
export default config;
