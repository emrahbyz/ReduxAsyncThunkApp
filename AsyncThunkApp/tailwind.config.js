/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "my-red": "#E5081A",
        footer: "#191919",
        "my-text": "#f0faff",
      },
      backgroundImage: {
        "background-image":
          "https://creative-sorbet-96d1b6.netlify.app/static/media/texure.5fd81b0ea718d21dec89.jpg",
      },
    },
  },
  plugins: [],
};
