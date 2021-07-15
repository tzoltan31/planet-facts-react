module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      antonio: ["antonio", "spartan"],
      spartan: ["spartan", "antonio"],
    },

    extend: {
      backgroundImage: (theme) => ({
        stars: "url('./assets/background-stars.svg')",
      }),
      fontSize: {
        "1xs": ".6rem",
      },
      backgroundColor: {
        mercury: "#419EBB",
        venus: "#EDA249",
        earth: "#6F2ED6",
        mars: "#D83A34",
        jupiter: "#CD5120",
        saturn: "#D14C32",
        uranus: "#1EC2A4",
        neptune: "#2D68F0",
        background: "#070724",
        greydark: "#38384F",
        greylight: "#838391",
      },
      borderColor: {
        mercury: "#419EBB",
        venus: "#EDA249",
        earth: "#6F2ED6",
        mars: "#D83A34",
        jupiter: "#CD5120",
        saturn: "#D14C32",
        uranus: "#1EC2A4",
        neptune: "#2D68F0",
        background: "#070724",
        greydark: "#38384F",
        greylight: "#838391",
      },
      textColor: {
        mercury: "#419EBB",
        venus: "#EDA249",
        earth: "#6F2ED6",
        mars: "#D83A34",
        jupiter: "#CD5120",
        saturn: "#D14C32",
        uranus: "#1EC2A4",
        neptune: "#2D68F0",
        background: "#070724",
        greydark: "#38384F",
        greylight: "#838391",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
