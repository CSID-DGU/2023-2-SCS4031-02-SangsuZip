/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-black": "#141515",
        "gray-90": "#2F3233",
        "gray-80": "#555555",
        "gray-70": "#707070",
        "gray-60": "#999797",
        "gray-50": "#C2C1C1",
        "gray-40": "#EBEAEA",
        "gray-30": "#F6F6F6",
        "gray-20": "#FAFAFA",
        "point-6": "#008736",
        "point-5": "#D7260D",
        "point-4": "#F9F8F7",
        "point-3": "#B5C7D3",
        "point-2": "#658DC6",
        "point-1": "#0F4C81",
      },
    },
  },
  plugins: [],
};
