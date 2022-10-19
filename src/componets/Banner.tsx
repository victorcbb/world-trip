import { Image, Box, Text, Flex, Stack, useBreakpointValue } from "@chakra-ui/react"


export function Banner() {
  const isMobile = useBreakpointValue({
    base: true,
    lg: false,
  })

  return (
    <Box position="relative">
      <Image
        src="background.png"
        alt="Céu noturno estrelado"
        w="100%"
        h={["10.1875rem", "20.9375rem"]}
        position="absolute"
        zIndex="-10"
      />
      <Flex
        w="100%"
        maxW={1260}
        pt={["1.75rem", "20"]}
        mx="auto"
        justifyContent="space-between"
        px="1"
      >
        <Stack spacing={["2", "5"]} px="4">
          <Text
            fontSize={["xl", "4xl"]}
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
            fontSize={["sm", "xl"]}
            w={["20.8125rem", "32.75rem"]}
            lineHeight="150%"
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Stack>
        {
          !isMobile && (
            <Image
              src="airplane.svg"
              alt="Avião amarelo e branco voando entre núvens"
            />
          )
        }
      </Flex>
    </Box>
  )
}