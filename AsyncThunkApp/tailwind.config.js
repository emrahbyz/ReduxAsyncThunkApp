/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "my-red": "#E5081A",
        "background-image":
          "linear-gradient(to right bottom,rgba(0,0,0,.9),rgba(0,0,0,.9),rgba(0,0,0,.6),rgba(0,0,0,.5),transparent)",
      },
    },
  },
  plugins: [],
};
