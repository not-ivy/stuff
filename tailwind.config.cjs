/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        grow: {
          "0%": { height: "0%", opacity: "0%" },
          "100%": { height: "100%", opacity: "100%" },
        },
        shrink: {
          "0%": { height: "100%", opacity: "100%" },
          "100%": { height: "0%", opacity: "0%" },
        },
      },
      animation: {
        grow: "grow 450ms cubic-bezier(0.33, 1, 0.68, 1) forwards",
        shrink: "shrink 450ms cubic-bezier(0.33, 1, 0.68, 1) forwards",
      },
      transitionTimingFunction: {
        "in-circ": "cubic-bezier(0.55, 0, 1, 0.45)",
        "out-circ": "cubic-bezier(0, 0.55, 0.45, 1)",
        "in-out-circ": "cubic-bezier(0.85, 0, 0.15, 1)",
      },
    },
  },
  plugins: [],
};
