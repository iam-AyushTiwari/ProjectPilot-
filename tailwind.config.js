/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        lightBackground: "white",
        darkBackground: "#001524",
        lightPrimaryColor: "#ff7d00",
        darkPrimaryColor: "#ffecd1",
      },
    },
  },
  plugins: [],
};
