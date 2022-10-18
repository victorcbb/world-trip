import { Box, Heading } from "@chakra-ui/react";

export function Continentbanner() {
  return (
    <Box
      w="100%"
      h="500px"
      bg="url(./europe/banner.png)"
      bgRepeat="no-repeat"
      bgPosition="center"
      bgSize="cover"
    >
      <Heading 
        as="h2" 
        color="brand.bg" 
        fontSize="5xl" 
        maxW={1260} 
        mx="auto" 
        pt="369px"
      >
        Europa
      </Heading>
    </Box>
  )
}