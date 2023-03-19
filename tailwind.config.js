/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "cards": "url('./assets/relax.jpeg')",
        "tree": "url('./assets/träd.jpeg')",
        "blomma": "url('./assets/blomma.webp')",
        "test": "url('./assets/bakgrundTest.webp')",
        "test2": "url('./assets/bakgrund2.webp')",
        "bakgrund2": "url('./assets/bakgrund2.jpeg')",
        "kbt": "url('./assets/kbt.png')",
        "sky": "url('./assets/sky.png')",
        "sky2": "url('./assets/sky.jpeg')",
        "berg": "url('./assets/berg.jpeg')",
        "image": "url('./assets/image.png')",
      },
      fontFamily: {
        'poppins': ['Poppins'],
     }
    },
  },
  plugins: [],
};



