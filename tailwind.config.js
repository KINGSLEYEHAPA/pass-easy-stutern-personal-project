module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    screens: {
      xxs: "400px",
      // => @media (min-width: 640px) { ... }
      xs: "520px",
      // => @media (min-width: 640px) { ... }
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      ssm: "700px",
      // => @media (min-width: 640px) { ... }

      md: "800px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1264px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
