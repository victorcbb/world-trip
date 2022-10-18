import { InfoOutlineIcon } from "@chakra-ui/icons";
import { Flex, SimpleGrid, Stack, Text, Tooltip } from "@chakra-ui/react";

export function Info() {
  return (
    <SimpleGrid
      columns={2}
      spacing="4.375rem"
      minChildWidth="350px"
      maxW={1260}
      mx="auto"
      mt="20"
      px="4"
    >
      <Text fontSize="2xl" lineHeight="1.5" textAlign="justify">
        A Europa é, por convenção, um dos seis continentes do mundo.
        Compreendendo a península ocidental da Eurásia,
        a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais,
        o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
      </Text>
      <Flex 
        w="100%" 
        maxW="30.625rem" 
        justify="space-between" 
        align="center" 
        mx="auto"
      >
        <Stack alignItems="center">
          <Text 
            fontSize="5xl" 
            color="brand.highlight" 
            fontWeight="semibold" 
            lineHeight="1"
          >
            50
          </Text>
          <Text
            fontWeight="semibold"
            lineHeight="100%"
            fontSize="1.5rem"
            mt="0"
          >
            países
          </Text>
        </Stack>

        <Stack alignItems="center">
          <Text 
            fontSize="5xl" 
            color="brand.highlight" 
            fontWeight="semibold" 
            lineHeight="1"
          >
            60
          </Text>
          <Text
            fontWeight="semibold"
            lineHeight="100%"
            fontSize="1.5rem"
            mt="0"
          >
            línguas
          </Text>
        </Stack>

        <Stack alignItems="center">
          <Text 
            fontSize="5xl" 
            color="brand.highlight" 
            fontWeight="semibold" 
            lineHeight="1"
          >
            27
          </Text>
          <Text
            fontWeight="semibold"
            lineHeight="100%"
            fontSize="1.5rem"
            mt="0"
          >
            cidades +100 {" "}
            <Tooltip label="Entre as 100 cidades mais visitadas do mundo esse continente contem essas!">
              <InfoOutlineIcon w="1rem" h="1rem" color="brand.info" opacity="0.5" />
            </Tooltip>
          </Text>
        </Stack>

      </Flex>
    </SimpleGrid>
  )
}