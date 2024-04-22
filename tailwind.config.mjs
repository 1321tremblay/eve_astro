import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      spacing: {
        "ch-50": "50dvh",
        "ch-75": "75dvh",
      },
      gridTemplateColumns: {
        "auto-fill-300": "repeat(auto-fill, 300px)",

        "auto-fit-100": "repeat(auto-fit, minmax(100px, 1fr))",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms")({
      //strategy: 'base', // only generate global styles
      strategy: "class", // only generate classes
    }),
    require("daisyui"),
  ],
  daisyui: {
    themes: ["retro"],
  },
};
