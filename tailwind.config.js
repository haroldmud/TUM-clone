/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize:{
        "0.8r":"0.8rem",
        "0.875r":"0.875rem",
        "8r":"8rem",
        "5r":"5rem",
        "2r":"2rem",
      },
      colors:{
        blue0:"#072140",
        blue1:"#072140",
        blue2:"#0A3B76",
        blue3:"#3070b3",
      },
      lineHeight:{
        "0.9r":"0.9rem",
      },
      width: {
        fit: "fit-content",
        full: "100%",
        "96p":"96%",
        "80p":"80%",
        "84p":"84%",
        "70p":"70%",
        "50p":"50%",
        "45p":"45%",
        "45r":"45rem",
        "20.75r":"20.75rem",
        "15r":"15rem",
        "4r":"4rem",
      },
      height: {
        fit: "fit-content",
        "30r":"30rem",
        "20r":"20rem",
      },
      borderWidth: {
        "2r":"2rem",
      }
    },
  },
  plugins: [],
}
