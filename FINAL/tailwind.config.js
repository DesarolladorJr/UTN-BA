/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Karantina"],
        karma: ["Karma"],
        Kotta: ["Kotta One"],
        JoseFina: ["Josefin Sans"],
        Hind: ["Hind Siliguri"],
        vrd: ["Klee One"],
      },
      screens: {
        // Nuevo breakpoint para pantallas pequeñas
        sxx: "1500px", // Nuevo breakpoint específico de 549px
        // Puedes agregar más breakpoints personalizados aquí

        pii: "1340px",
      },
    },
  },
  plugins: [],
};
