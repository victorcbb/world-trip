import { Box, Heading, SimpleGrid } from "@chakra-ui/react"
import { Card } from "./Card"

export function Cities() {
  return (
    <Box
      maxW={1260}
      mx="auto"
      mt={["6", "20"]}
      px="4"
    >
      <Heading as="h2" fontWeight="500" fontSize={["2xl", "4xl"]}>
        Cidades +100
      </Heading>

      <SimpleGrid columns={[1, 2, 3, 4]} mt={["5", "10"]} mb="16" spacing={["1.25rem", "2.875rem"]}>

        <Card
          image="./europe/london.png"
          city="Londres"
          country="Reino Unido"
          flag="./europe/flags/united-kingdom.png"
        />

        <Card
          image="./europe/paris.png"
          city="Paris"
          country="França"
          flag="./europe/flags/france.png"
        />

        <Card
          image="./europe/rome.png"
          city="Roma"
          country="Italia"
          flag="./europe/flags/italy.png"
        />

        <Card
          image="./europe/praga.png"
          city="Praga"
          country="República Tcheca"
          flag="./europe/flags/czech-republic.png"
        />

        <Card
          image="./europe/amsterdam.png"
          city="Amsterdã"
          country="Holanda"
          flag="./europe/flags/netherlands.png"
        />

      </SimpleGrid>
    </Box>
  )
}