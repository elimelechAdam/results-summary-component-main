const colors = require("tailwindcss/colors");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
      colors: {
        primary: {
          "light-red": "hsl(0, 100%, 67%)",
          "orangey-yellow": "hsl(39, 100%, 56%)",
          "green-teal": "hsl(166, 100%, 37%)",
          "cobalt-blue": "hsl(234, 85%, 45%)",
        },
        neutral: {
          white: "hsl(0, 0%, 100%)",
          "pale-blue": "hsl(221, 100%, 96%)",
          "light-lavender": "hsl(241, 100%, 89%)",
          "dark-gray-blue": "hsl(224, 30%, 27%)",
        },
        gradient: {
          "light-slate-blue": "hsl(252, 100%, 67%)",
          "light-royal-blue": "hsl(241, 81%, 54%)",
          "violet-blue": "hsla(256, 72%, 46%, 1)",
          "persian-blue": "hsla(241, 72%, 46%, 0)",
        },
      },
      fontSize: {
        body: "18px",
      },
      fontFamily: {
        hanken: ["Hanken Grotesk", "sans-serif"],
      },
      fontWeight: {
        medium: 500,
        bold: 700,
        extrabold: 800,
      },
    },
  },
  plugins: [],
};
