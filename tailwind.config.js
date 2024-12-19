/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      clipPath: {
        'circle-50': 'circle(50% at 50% 50%)',
        'custom-shape': 'path("M232.5,150 Q300,0,367.5,150 Q435,300,300,367.5 Q165,435,232.5,300 Q300,165,232.5,150 Z")',
      },
    },
  },
  plugins: [],
}