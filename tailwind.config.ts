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
      },
      colors: {
        "bg-color": "var(--bg)",
        "bg-light": "var(--bgSoft)",
        "text-color": "var(--text)",
        "text-light": "var(--textSoft)",
        "text-grey": "var(--text-grey)",
        "bg-lighter": "var(--bg-lighter)",
        "text-green": "lime",
        "text-red": "var(--text-red)",
        "btn-pending": "var(--btn-pending)",
        "btn-done": "var(--btn-done)",
        "btn-cancelled": "var(--btn-cancelled)",
        "btn-blue": "var(--btn-blue)",
        "teal": "var(--teal)",
        "crimson": "var(--crimson)",
      },
    },
  },
  plugins: [],
};
export default config;
