import { Image, Box, Text, Flex, Stack } from "@chakra-ui/react"

export function Banner() {
  return (
    <Box position="relative">
      <Image
        src="background.png"
        alt="Céu noturno estrelado"
        w="100%"
        h="20.9375rem"
        position="absolute"
        zIndex="-10"
      />
      <Flex
        w="100%"
        maxW={1260}
        pt="20"
        mx="auto"
        justifyContent="space-between"
      >
        <Stack spacing="5">
          <Text
            fontSize="4xl"
            color="brand.bg"
            fontWeight="medium"
            lineHeight="150%"
          >
            5 Continentes,
            <br />
            infinitas possibilidades.
          </Text>
          <Text
            color="brand.lightInfo"
            fontSize="xl"
            w="32.75rem"
            lineHeight="150%"
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Stack>
        <Image
          src="airplane.svg"
          alt="Avião amarelo e branco voando entre núvens"
        />
      </Flex>
    </Box>
  )
}