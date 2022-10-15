import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    brand: {
      highlight: "#FFBA08",
      highlight50: "#FFBA0888",
      texts: "#47585B",
      info: "#999999",
      lightInfo: "#DADADA",
      bg: "#F5F8FA"
    }
  },
  fonts: {
    texts: `'Poppins', sans-serif`
  },
  styles: {
    global: {
      body: {
        bg: "brand.bg",
        color: "brand.texts",
      },

      ".swiper": {
        width: "100%",
        maxWidth: "1240px",
        height: "450px",
        marginBottom: "4rem",
      },
      
      ".swiper-slide": {
        textAlign: "center",
        fontSize: "18px",
        bg: "#F5F8FA",
        position: "realative",
        color: "brand.bg",
      

        display: "flex",
        "-webkit-box-pack": "center",
        "-ms-flex-pack": "center",
        "-webkit-justify-content": "center",
        justifyContent: "center",
        "-webkit-box-align": "center",
        "-ms-flex-align": "center",
        "-webkit-align-items": "center",
        alignItems: "center",
      },
      
      ".swiper-button-next, .swiper-button-prev": {
        color: "brand.highlight",
        margin: "0 1.25rem",
      },
      
      ".swiper-slide img": {
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
        position: "absolute",
        top: "0",
        right: "0",
        zIndex: "-1",
      },

      ".swiper-pagination-bullet": {
        width: "1rem",
        height: "1rem",
      },

      ".swiper-pagination-bullet-active": {
        bg: "brand.highlight"
      }
    }
  }
})