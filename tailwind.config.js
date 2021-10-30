module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        bodyGrey: "#fafafa",
      },
      width: {
        post: "614px",
        "fit-content": "fit-content",
        "40%": "40%",
      },
      maxWidth: {
        workspace: "1300px",
        post: "614px",
      },
      height: {
        "screen-8": "80vh",
        "screen-9": "90vh",
        post: "614px",
        90: "90%",
      },
      minHeight: {
        "screen-8": "80vh",
      },
      inset: {
        "-9": "-9%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("tailwindcss-debug-screens"),
  ],
};
