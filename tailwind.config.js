module.exports = {
  mode: "jit",
  // These paths are just examples, customize them to match your project structure
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    fontSize: {
      "2xs": "12px",
      xs: "0.75rem",
      ssm: "12px",
      sm: "0.875rem",

      base: "1rem",
      16: "16px",
      lg: "1.125rem",
      xl: "1.25rem",
      22: "22px",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
    },

    extend: {
      colors: {
        gray: {
          100: "#c7c7c7",
          200: "#dbdbdb",
          300: "#8E8E8E",
          400: "#cbd5e0",
          500: "#a0aec0",
          600: "#718096",
          700: "#4a5568",
          800: "#2d3748",
          900: "#1a202c",
        },
        blue: {
          100: "#ebf8ff",
          200: "#bee3f8",
          300: "#90cdf4",
          400: "#63b3ed",
          500: "#4299e1",
          600: "#3182ce",
          700: "#2b6cb0",
          800: "#2c5282",
          900: "#2a4365",
        },
        navyBlue: "#00376B",
        lightBlue: "#0095F6",
      },
      dropShadow: {
        black: "0 0px 3px rgba(0, 0, 0, 0.3)",
        top: "3px 3px 3px 3px rgba(0,0,0, 0.3)",
      },
      fontFamily: {
        playball: ['"Playball"', "cursive"],
      },
      animation: {
        boundceInFadeOut: "bounceIn 2s ",
      },
      keyframes: {
        bounceIn: {
          "0%, 100%": {
          opacity: 0,
          transform: 'scale(0)'
        },
        "30%": {
          opacity: 1,
          transform: 'scale(1.1)'
        },
        "50%": {
          opacity: .8,
          transform: 'scale(1)'
        },
        "65%": {
          opacity: .8,
          transform: 'scale(1)'
        },
       }
      },
    },
  },
  variants: {},
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
