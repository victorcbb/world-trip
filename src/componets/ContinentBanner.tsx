import { Box, Heading } from "@chakra-ui/react";

export function Continentbanner() {
  return (
    <Box
      w="100%"
      h={["150px", "500px"]}
      bg="url(./europe/banner.png)"
      bgRepeat="no-repeat"
      bgPosition="center"
      bgSize="cover"
    >
      <Heading 
        as="h2" 
        color="brand.bg"
        textAlign={["center", "start"]} 
        fontSize={["1.75rem", "5xl"]} 
        maxW={1260} 
        mx="auto"
        pt={["3.5rem", "369px"]}
        px="4"
      >
        Europa
      </Heading>
    </Box>
  )
}