module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      inset: {
        24: "6rem",
      },
      boxShadow: {
        diagonal: "-4px 4px 0px 0px rgba(0, 0, 0, 0.3)",
        straight: "0px 8px 0px -4px rgba(0, 0, 0, 0.3)",
      },
      height: {
        100: "25rem",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
