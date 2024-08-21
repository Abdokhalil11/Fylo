/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        raleWay: "Raleway",
      },
      colors: {
        main: "#65e2de",
        gradient1 :"#339ecc",
        gradient2 :"#65e2d9"
      },
      keyframes: {
        "bounce-2": {
          "0%, 100% ": {
            transform: "translateX(25%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50% ": {
            transform: "translateX(0)",
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },
      animation: {
        "bounce-2": "bounce-2 1s infinite ease",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
