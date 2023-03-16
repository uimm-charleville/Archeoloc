/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      'custom': ['GlacialIndifference-Regular', 'sans-serif']
    },
    extend: {},
  },
  plugins: [require("daisyui"), require('@tailwindcss/line-clamp'),
],
  daisyui: {
    themes: false,
    themes: [
      {
        mytheme: {
          primary: "#702315",
          secondary: "#085937",
          accent: "#A74130",
          neutral: "#111827",
          "base-100": "#FFFFFF",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
};
