import { ChevronLeftIcon } from "@chakra-ui/icons"
import { Image, Flex, Box, Link } from '@chakra-ui/react'
import { useRouter } from 'next/router'

export function Header() {
  const { asPath } = useRouter()

  let continentPath = false

  if (asPath.length > 1) {
    continentPath = true
  }

  return (
    <Box as="header" w="100%" h="6.25rem">
      <Flex maxW={1260} h="100%" mx="auto" justify={continentPath ? "space-between" : "center"} align="center">
        {
          continentPath && (
            <Link href="/">
              <ChevronLeftIcon w="32px" h="32px" color="brand.info" />
            </Link>
          )
        }

        <Image src="./logo.svg" alt="" mx="auto" />

        {
          continentPath && (
            <Box w="32px" h="32px" />
          )
        }
      </Flex>
    </Box>
  )
}