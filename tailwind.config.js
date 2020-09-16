const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Source Sans Pro", ...defaultTheme.fontFamily.sans],
        heading: ["Cairo", "Source Sans Pro", ...defaultTheme.fontFamily.sans],
      },
      inset: {
        24: "6rem",
        "home-nav-offset": "-20.75rem",
        "sm-home-nav-offset": "-29.75rem",
        "md-home-nav-offset": "-21.5rem",
        "page-nav-offset": "-12.75rem",
        "sm-page-nav-offset": "-12.75rem",
        "md-page-nav-offset": "-9.75rem",
        "lg-page-nav-offset": "0",
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
