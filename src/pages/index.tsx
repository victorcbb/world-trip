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
        gap="40" 
        justify="space-between" 
        w="100%" maxW={1160} 
        mx="auto" mt="20"
        px="1"
      >
        <TravelType image="cocktail.svg" type="vida noturna" />
        <TravelType image="surf.svg" type="praia" />
        <TravelType image="building.svg" type="moderno" />
        <TravelType image="museum.svg" type="clássico" />
        <TravelType image="earth.svg" type="e mais..." />
      </Flex>

      <Box 
        w="5.625rem" 
        h={0} 
        border="1px" 
        borderColor="brand.texts" 
        mx="auto" 
        mt="20" 
      />

      <Heading as="h2" textAlign="center" fontWeight="medium" fontSize="4xl" m="3.25rem auto">
        Vamos nessa?<br/> Então escolha seu continente
      </Heading>

      <ContinentsSlide />
    </Box>
  )
}
