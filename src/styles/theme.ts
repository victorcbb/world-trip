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
      }
    }
  }
})