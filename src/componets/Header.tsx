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
    <Box as="header" w="100%" h={["3.125rem", "6.25rem"]}>
      <Flex 
        maxW={1260} 
        h="100%" 
        mx="auto" 
        justify={continentPath ? "space-between" : "center"} 
        align="center" 
        px="4"
      >
        {
          continentPath && (
            <Link href="/">
              <ChevronLeftIcon w={["16px", "32px"]} h={["16px", "32px"]} />
            </Link>
          )
        }

        <Image src="./logo.svg" alt="" mx="auto" h={["20px", "46px"]} />

        {
          continentPath && (
            <Box w={["16px", "32px"]} h={["16px", "32px"]} />
          )
        }
      </Flex>
    </Box>
  )
}