/** @type {import('tailwindcss').Config} */

const path = require(`path`);

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          softblue: "hsl(231, 69%, 60%)",
          softred: "hsl(0, 94%, 66%)",
        },

        neutral: {
          grayishblue: "hsl(229, 8%, 60%)",
          vdarkblue: "hsl(229, 31%, 21%)",
        }
      },

      fontFamily: {
        body: ["Rubik"],
      },

      backgroundImage: {
        'back-image': `url(${path.resolve(__dirname, 'src/assets/images/bg-dots.svg')})`,
      }
    },
  },
  plugins: [],
}