import { Box } from "@chakra-ui/react"
import { Cities } from "../componets/Cities"

import { Continentbanner } from "../componets/ContinentBanner"
import { Header } from "../componets/Header"
import { Info } from "../componets/Info"

export default function europe() {
  return (
    <Box>
      <Header />
      <Continentbanner />
      <Info />
      <Cities />
    </Box>
  )
}