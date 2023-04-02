/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        cdrtLight: {
          ...require("daisyui/src/colors/themes")["[data-theme=cyberpunk]"],
          "primary": "#f9a9d7",
          "secondary": "#ffccde",
          "accent": "#fc88c0",
          "neutral": "#222B2F",
          "base-100": "#ECEFF4",
          "info": "#719ED6",
          "success": "#20884A",
          "warning": "#F6D06A",
          "error": "#E76E70",
        }
      }
    ]
  }
}