import { Box, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react"

interface CardProps {
  image: string
  city: string
  country: string
  flag: string
}

export function Card({ image, city, country, flag }: CardProps) {
  return (
    <Box w="16rem" h="17.5rem">
          <Image src={image} alt={`Imagem da cidade de ${city}`} />
          <Flex 
            w="16rem" 
            p="1.125rem 1.5rem 1.5rem" 
            align="center" 
            justify="space-between"
            bg="#FFFFFF"
            borderX="1px"
            borderBottom="1px"
            borderColor="brand.highlight"
            borderRadius="0 0 4px 4px"
          >
            <Stack>
              <Heading as="h3" fontWeight="semibold" fontSize="xl">{city}</Heading>
              <Text fontWeight="500" color="brand.info">{country}</Text>
            </Stack>
            <Image src={flag} alt={`bandeira {country}`} />
          </Flex>
        </Box>
  )
}