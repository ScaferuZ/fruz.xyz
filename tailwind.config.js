module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Playfair: "Playfair Display",
      },
      textColor: {
        primary: "#1F1F1F",
      },
      backgroundColor: (theme) => ({
        primary: "#1F1F1F",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
