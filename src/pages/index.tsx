import { Box, Flex, Heading } from "@chakra-ui/react"
import { Banner } from "../componets/Banner";
import { ContinentsSlide } from "../componets/ContinentsSlide";
import { Header } from "../componets/Header";
import { TravelType } from "../componets/TravelType";

export default function Home() {
  return (
    <Box>
      <Header />
      <Banner />
      <Flex 
        gap={["0", "40"]}
        justify={["space-around", "space-between"]}
        wrap={["wrap", "nowrap"]}
        w="100%" maxW={["280px", "1160px"]}
        h={["120px", "fit-content"]}
        mx="auto" mt={["14", "20"]}
        px="1"
      >
        <TravelType image="cocktail.svg" type="vida noturna" />
        <TravelType image="surf.svg" type="praia" />
        <TravelType image="building.svg" type="moderno" />
        <TravelType image="museum.svg" type="clássico" />
        <TravelType image="earth.svg" type="e mais..." />
      </Flex>

      <Box 
        w={["3.75rem", "5.625rem"]} 
        h={0} 
        border="1px" 
        borderColor="brand.texts" 
        mx="auto" 
        mt={["9", "20"]} 
      />

      <Heading as="h2" textAlign="center" fontWeight="medium" fontSize={["xl", "4xl"]} m={["1.5rem auto 1.25rem", "3.25rem auto"]}>
        Vamos nessa?<br/> Então escolha seu continente
      </Heading>

      <ContinentsSlide />
    </Box>
  )
}
